import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService, Order } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-my-orders',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './my-orders.html',
    styleUrl: './my-orders.css',
})
export class MyOrders {
    orders = signal<Order[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);

    constructor(
        private orderService: OrderService,
        public authService: AuthService
    ) {
        // Effect qui réagit aux changements d'état d'authentification
        effect(() => {
            const isLoading = this.authService.isLoading();
            const isAuthenticated = this.authService.isAuthenticated();

            // Attendre que Firebase ait terminé de vérifier l'auth
            if (!isLoading) {
                if (isAuthenticated) {
                    this.loadOrders();
                } else {
                    this.loading.set(false);
                    this.orders.set([]);
                }
            }
        });
    }

    async loadOrders(): Promise<void> {
        this.loading.set(true);
        this.error.set(null);

        try {
            const orders = await this.orderService.getMyOrders();
            this.orders.set(orders);
        } catch (err: any) {
            this.error.set(err.message || 'Erreur lors du chargement des commandes.');
        } finally {
            this.loading.set(false);
        }
    }

    /**
     * Formater le statut en français
     */
    getStatusLabel(status: string): string {
        const labels: Record<string, string> = {
            'created': 'Créée',
            'processing': 'En traitement',
            'shipped': 'Expédiée',
            'delivered': 'Livrée'
        };
        return labels[status] || status;
    }

    /**
     * Couleur du badge de statut
     */
    getStatusClass(status: string): string {
        const classes: Record<string, string> = {
            'created': 'bg-info',
            'processing': 'bg-warning',
            'shipped': 'bg-primary',
            'delivered': 'bg-success'
        };
        return classes[status] || 'bg-secondary';
    }
}

