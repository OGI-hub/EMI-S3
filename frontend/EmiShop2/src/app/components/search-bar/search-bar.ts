import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchQuery: string = '';

  constructor(private filterService: FilterService) { }

  onSearch(): void {
    const query = this.searchQuery.trim();
    if (query) {
      this.filterService.search(query);
    }
  }

  onClear(): void {
    this.searchQuery = '';
    this.filterService.clearFilters();
  }
}
