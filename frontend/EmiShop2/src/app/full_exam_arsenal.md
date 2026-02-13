# 📚 FULL EXAM ARSENAL – Angular (Cheat‑Sheet)

---
## 🧠 1️⃣ Bloc TS – Le Cerveau (UserComponent)
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngIf, *ngFor, etc.

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html'
})
export class UserComponent {
  @Input() name: string = "Inconnu";               // du parent
  @Output() onClick = new EventEmitter<boolean>(); // vers le parent

  status: boolean = true;          // *ngIf
  items: string[] = ['A', 'B', 'C']; // *ngFor
  prix: number = 25.5;             // pipe currency

  toggleStatus(): void {
    this.status = !this.status;
    this.onClick.emit(this.status);
  }
}
```

---
## 🎨 2️⃣ Bloc HTML – Le Visage (user.html)
```html
<h1>Bonjour {{ name | uppercase }}</h1>
<p *ngIf="status">Le profil est actif.</p>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
<img [src]="'assets/logo.png'" />
<button (click)="toggleStatus()">
  Changer le prix : {{ prix | currency:'EUR' }}
</button>
<input [(ngModel)]="name" placeholder="Nom" />
```

---
## 🗺️ 3️⃣ Bloc Routage – La Carte
```typescript
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user';

export const routes: Routes = [
  { path: 'user/:id', component: UserComponent }
];
```

---
## 📦 4️⃣ Service – DataService (exemple générique)
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly API_URL = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> { return this.http.get<any>(this.API_URL); }
  addProduct(p: any): Observable<any> { return this.http.post<any>(this.API_URL, p); }
  filterByCategory(arr: any[], cat: string): any[] { return arr.filter(i => i.category === cat); }
}
```

---
## 🎯 5️⃣ Directive – HoverHighlight (exemple simple)
```typescript
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[appHoverHighlight]' })
export class HoverHighlightDirective {
  private readonly hoverColor = '#ffeb3b';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onEnter() { this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.hoverColor); }
  @HostListener('mouseleave') onLeave() { this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor'); }
}
```

---
## 🔧 6️⃣ Pipe – Truncate (réduction de texte)
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 20): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '…' : value;
  }
}
```

---
## 🔑 Astuces de mémorisation (papier)
- **Bindings** : `[ ]` = Prop (boîte), `( )` = Event (bouton), `[( )]` = les deux → *banane dans la boîte*.
- **Étoile `*`** : indique une **structure** (`*ngIf`, `*ngFor`). Elle modifie le DOM.
- **CommonModule** : indispensable dès que tu utilises `*ngIf`/`*ngFor`/`ngClass`.
- **Standalone** : si `standalone: true`, le composant n’a pas besoin d’être déclaré dans un module.
- **routerLink** vs `href` : toujours `routerLink` pour la navigation Angular.
- **FormsModule** : requis pour `[(ngModel)]`.

---
## ✅ Checklist avant de rendre la copie
- [ ] `@Component`, `@Input`, `@Output` bien préfixés avec `@`.
- [ ] Toutes les balises HTML ouvertes sont fermées.
- [ ] Pas de mot‑clé `function` dans les méthodes de classe.
- [ ] Types déclarés (`: string`, `: boolean`, `: number`).
- [ ] `CommonModule` importé dès que `*ngIf`/`*ngFor` est utilisé.
- [ ] `routerLink` utilisé pour la navigation.
- [ ] `FormsModule` importé si `[(ngModel)]` présent.
- [ ] `HttpClientModule` importé dans le module racine pour le service.

---
*Ce document est pensé pour être recopié à la main : chaque partie est clairement séparée, fortement commentée, et accompagnée d’une petite checklist pour éviter les oublis classiques.*
