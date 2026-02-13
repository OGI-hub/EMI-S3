import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';
import { ProductService, DummyJsonProduct, DummyJsonResponse } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FilterService } from '../../services/filter.service';

type UiProduct = DummyJsonProduct & { promoPrice: number };

@Component({
  selector: 'app-liste-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liste-products.html',
  styleUrl: './liste-products.css',
})
export class ListeProducts implements OnInit, OnDestroy {
  // Using signals for reactive state
  products = signal<UiProduct[]>([]);
  totalProducts = signal(0);
  currentSkip = signal(0);
  loading = signal(true);
  pageSize = 9;

  private destroy$ = new Subject<void>();

  // Computed property for hasMore
  hasMore = computed(() => this.products().length < this.totalProducts());

  constructor(
    private productService: ProductService,
    private cart: CartService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    // Initial load
    this.loadDefaultProducts();

    // Listen for filter changes (skip initial emission)
    combineLatest([
      this.filterService.searchQuery$,
      this.filterService.selectedCategory$
    ]).pipe(
      takeUntil(this.destroy$),
      skip(1) // Skip the initial emission since we load defaults above
    ).subscribe(([query, category]) => {
      if (query) {
        this.loadSearchResults(query);
      } else if (category) {
        this.loadCategoryProducts(category);
      } else {
        this.loadDefaultProducts();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadDefaultProducts(): void {
    this.loading.set(true);
    this.currentSkip.set(0);
    this.productService.getProducts(this.pageSize, 0).subscribe({
      next: (res) => {
        this.products.set(this.mapProducts(res.products));
        this.totalProducts.set(res.total);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  private loadSearchResults(query: string): void {
    this.loading.set(true);
    this.currentSkip.set(0);
    this.productService.searchProducts(query, this.pageSize, 0).subscribe({
      next: (res) => {
        this.products.set(this.mapProducts(res.products));
        this.totalProducts.set(res.total);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  private loadCategoryProducts(category: string): void {
    this.loading.set(true);
    this.currentSkip.set(0);
    this.productService.getProductsByCategory(category, this.pageSize, 0).subscribe({
      next: (res) => {
        this.products.set(this.mapProducts(res.products));
        this.totalProducts.set(res.total);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  loadMore(): void {
    this.loading.set(true);
    const newSkip = this.currentSkip() + this.pageSize;
    this.currentSkip.set(newSkip);

    const query = this.filterService.currentSearchQuery;
    const category = this.filterService.currentCategory;

    let request$;
    if (query) {
      request$ = this.productService.searchProducts(query, this.pageSize, newSkip);
    } else if (category) {
      request$ = this.productService.getProductsByCategory(category, this.pageSize, newSkip);
    } else {
      request$ = this.productService.getProducts(this.pageSize, newSkip);
    }

    request$.subscribe({
      next: (res) => {
        this.products.set([...this.products(), ...this.mapProducts(res.products)]);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  private mapProducts(products: DummyJsonProduct[]): UiProduct[] {
    return products.map(p => ({
      ...p,
      promoPrice: this.calcPromoPrice(p.price, p.discountPercentage)
    }));
  }

  calcPromoPrice(price: number, discountPercentage: number): number {
    const discounted = price - (price * discountPercentage / 100);
    return Math.round(discounted * 100) / 100;
  }

  fullStars(rating: number): number[] {
    const n = Math.floor(rating);
    return Array(n).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating - Math.floor(rating) >= 0.5;
  }

  addToCart(p: UiProduct): void {
    this.cart.add(p, 1);
  }
}
