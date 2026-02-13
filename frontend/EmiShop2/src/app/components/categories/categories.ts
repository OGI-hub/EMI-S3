import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductService, Category } from '../../services/product.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  categories$!: Observable<Category[]>;
  selectedCategory: string | null = null;

  constructor(
    private productService: ProductService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();

    // Subscribe to filter changes to track selected category
    this.filterService.selectedCategory$.subscribe(cat => {
      this.selectedCategory = cat;
    });
  }

  selectCategory(slug: string | null): void {
    this.selectedCategory = slug;
    this.filterService.filterByCategory(slug);
  }
}
