import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

const CART_STORAGE_KEY = 'emishop_cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items$ = new BehaviorSubject<CartItem[]>(this.loadFromStorage());
  readonly items$ = this._items$.asObservable();

  get snapshot(): CartItem[] { return this._items$.value; }

  private loadFromStorage(): CartItem[] {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(items: CartItem[]): void {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }

  add(product: { id: number; title: string; price: number; thumbnail?: string }, qty: number = 1): void {
    const items = this.snapshot.slice();
    const i = items.findIndex(x => x.id === product.id);

    if (i >= 0) {
      items[i] = { ...items[i], qty: items[i].qty + qty };
    } else {
      items.push({ id: product.id, title: product.title, price: product.price, thumbnail: product.thumbnail, qty });
    }
    this._items$.next(items);
    this.saveToStorage(items);
  }

  removeOne(id: number): void {
    const items = this.snapshot.slice();
    const i = items.findIndex(x => x.id === id);
    if (i < 0) return;

    const it = items[i];
    if (it.qty <= 1) items.splice(i, 1);
    else items[i] = { ...it, qty: it.qty - 1 };

    this._items$.next(items);
    this.saveToStorage(items);
  }

  clear(): void {
    this._items$.next([]);
    this.saveToStorage([]);
  }
}

