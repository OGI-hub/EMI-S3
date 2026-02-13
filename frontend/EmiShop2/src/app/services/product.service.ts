import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions?: { width: number; height: number; depth: number };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  reviews?: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
}

export interface DummyJsonResponse {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts(limit: number = 30, skip: number = 0): Observable<DummyJsonResponse> {
    return this.http.get<DummyJsonResponse>(
      `${this.baseUrl}/products?limit=${limit}&skip=${skip}`
    );
  }

  searchProducts(query: string, limit: number = 9, skip: number = 0): Observable<DummyJsonResponse> {
    return this.http.get<DummyJsonResponse>(
      `${this.baseUrl}/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/products/categories`);
  }

  getProductsByCategory(categorySlug: string, limit: number = 9, skip: number = 0): Observable<DummyJsonResponse> {
    return this.http.get<DummyJsonResponse>(
      `${this.baseUrl}/products/category/${categorySlug}?limit=${limit}&skip=${skip}`
    );
  }

  getProductById(id: number): Observable<DummyJsonProduct> {
    return this.http.get<DummyJsonProduct>(`${this.baseUrl}/products/${id}`);
  }
}
