import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './panier.html',
  styleUrls: ['./panier.css']
})
export class Panier {
  items$: Observable<CartItem[]>;
  count$: Observable<number>;
  total$: Observable<number>;

  constructor(public cart: CartService) {
    this.items$ = this.cart.items$;

    this.count$ = this.items$.pipe(
      map((items: CartItem[]) => items.reduce((s, it) => s + it.qty, 0))
    );

    this.total$ = this.items$.pipe(
      map((items: CartItem[]) => items.reduce((s, it) => s + it.qty * it.price, 0))
    );
  }

  removeOne(id: number): void {
    this.cart.removeOne(id);
  }

  clear(): void {
    this.cart.clear();
  }
}
