import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header as HeaderComponent } from './components/header/header';
import { Categories as CategoriesComponent } from './components/categories/categories';
import { SearchBar as SearchBarComponent } from './components/search-bar/search-bar';
import { Panier as PanierComponent } from './components/panier/panier';
import { Footer as FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CategoriesComponent,
    SearchBarComponent,
    PanierComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('emiShop');
}

