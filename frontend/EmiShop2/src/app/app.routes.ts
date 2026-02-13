import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/liste-products/liste-products').then(m => m.ListeProducts),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./components/product-detail/product-detail').then(m => m.ProductDetail),
  },
  {
    path: 'panier',
    loadComponent: () =>
      import('./components/panier-page/panier-page').then(m => m.PanierPage),
  },
  {
    path: 'Panier',
    redirectTo: 'panier',
  },
  {
    path: 'cart',
    redirectTo: 'panier',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./components/auth/auth').then(m => m.Auth),
  },
  {
    path: 'my-orders',
    loadComponent: () =>
      import('./components/my-orders/my-orders').then(m => m.MyOrders),
  },
  {
    path: '**',
    redirectTo: '',
  }
];

