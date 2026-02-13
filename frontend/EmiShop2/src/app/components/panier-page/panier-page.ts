import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-panier-page',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './panier-page.html',
    styleUrl: './panier-page.css',
})
export class PanierPage {
    // Injection via inject() pour permettre toSignal() au niveau des propriétés
    private readonly cartService = inject(CartService);
    private readonly orderService = inject(OrderService);
    private readonly router = inject(Router);
    public readonly authService = inject(AuthService);

    // Convertir l'Observable en Signal avec toSignal()
    items = toSignal(this.cartService.items$, { initialValue: [] as CartItem[] });

    // Computed signals dérivés
    total = computed(() =>
        this.items().reduce((sum, it) => sum + it.qty * it.price, 0)
    );

    count = computed(() =>
        this.items().reduce((sum, it) => sum + it.qty, 0)
    );

    // États pour le checkout
    checkoutLoading = signal(false);
    checkoutError = signal<string | null>(null);
    checkoutSuccess = signal(false);
    orderId = signal<string | null>(null);

    increaseQty(item: CartItem): void {
        this.cartService.add({ id: item.id, title: item.title, price: item.price, thumbnail: item.thumbnail }, 1);
    }

    decreaseQty(id: number): void {
        this.cartService.removeOne(id);
    }

    removeAll(item: CartItem): void {
        for (let i = 0; i < item.qty; i++) {
            this.cartService.removeOne(item.id);
        }
    }

    clearCart(): void {
        this.cartService.clear();
    }

    /**
     * Passer la commande
     */
    async checkout(): Promise<void> {
        this.checkoutLoading.set(true);
        this.checkoutError.set(null);
        this.checkoutSuccess.set(false);

        try {
            const items = this.items();
            const total = this.total();

            if (!items || items.length === 0) {
                throw new Error('Votre panier est vide.');
            }

            // Transformer les items pour Firestore
            const orderItems = items.map(item => ({
                productId: item.id,
                title: item.title,
                price: item.price,
                qty: item.qty
            }));

            // Créer la commande
            const orderId = await this.orderService.createOrder(orderItems, total);

            this.orderId.set(orderId);
            this.checkoutSuccess.set(true);

            // Vider le panier après commande réussie
            this.cartService.clear();

        } catch (error: any) {
            this.checkoutError.set(error.message || 'Erreur lors de la commande.');
        } finally {
            this.checkoutLoading.set(false);
        }
    }

    /**
     * Aller à la page des commandes
     */
    goToOrders(): void {
        this.router.navigate(['/my-orders']);
    }
}
