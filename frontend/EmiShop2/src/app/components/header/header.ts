import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly cartService = inject(CartService);
  public readonly authService = inject(AuthService);

  // Signal pour le contenu du panier
  private readonly items = toSignal(this.cartService.items$, { initialValue: [] });

  // Compteur d'articles
  cartCount = computed(() =>
    this.items().reduce((sum, it) => sum + it.qty, 0)
  );
}

