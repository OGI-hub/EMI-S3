import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {
    // Search query state
    private readonly _searchQuery$ = new BehaviorSubject<string>('');
    readonly searchQuery$ = this._searchQuery$.asObservable();

    // Selected category state
    private readonly _selectedCategory$ = new BehaviorSubject<string | null>(null);
    readonly selectedCategory$ = this._selectedCategory$.asObservable();

    get currentSearchQuery(): string {
        return this._searchQuery$.value;
    }

    get currentCategory(): string | null {
        return this._selectedCategory$.value;
    }

    search(query: string): void {
        this._selectedCategory$.next(null); // Clear category when searching
        this._searchQuery$.next(query);
    }

    filterByCategory(slug: string | null): void {
        this._searchQuery$.next(''); // Clear search when filtering by category
        this._selectedCategory$.next(slug);
    }

    clearFilters(): void {
        this._searchQuery$.next('');
        this._selectedCategory$.next(null);
    }
}
