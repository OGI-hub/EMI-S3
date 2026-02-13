import { Component } from '@angular/core';
import { Header } from './header/header';
import { SearchBar } from './search-bar/search-bar';
import { Categories } from './categories/categories';
import { ListeProducts } from './liste-products/liste-products';
import { Auth } from './auth/auth';
import { Panier } from './panier/panier';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    SearchBar,
    Categories,
    ListeProducts,
    Auth,
    Panier,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
