# 📚 Matériel de Préparation à l'Examen Angular

---

# PARTIE A : Synthèse Orientée Examen

---

## 1. 🎯 Définitions Clés (Courtes & Précises)

| Concept | Définition |
|---------|------------|
| **Component** | Bloc de base réutilisable d'Angular encapsulant template HTML, styles CSS et logique TypeScript |
| **Directive** | Instruction qui modifie le comportement ou l'apparence d'un élément DOM |
| **Directive Structurelle** | Modifie la **structure** du DOM (ajoute/supprime éléments) — ex: `*ngIf`, `*ngFor` |
| **Directive d'Attribut** | Modifie l'**apparence/comportement** d'un élément existant — ex: `ngClass`, `ngStyle` |
| **Service** | Classe singleton injectable pour partager logique/données entre composants |
| **Observable** | Flux asynchrone de données auquel on peut s'abonner via `subscribe()` |
| **Subject** | Observable spécial qui peut **émettre** des données ET être **observé** par plusieurs abonnés |
| **Pipe** | Transforme des données dans le template (ex: `date`, `uppercase`, `currency`) |
| **Module (NgModule)** | Conteneur qui regroupe composants, directives, services, pipes |
| **Dependency Injection** | Pattern permettant d'injecter des dépendances (services) au lieu de les créer manuellement |
| **FormControl** | Contrôle individuel d'un formulaire (suit valeur + état de validation) |
| **FormGroup** | Groupe de FormControls constituant un formulaire |

---

## 2. 🔄 Distinctions Critiques (A vs B)

### Observable vs Subject
| Observable | Subject |
|------------|---------|
| **Un seul** observateur | **Plusieurs** observateurs possibles |
| Émet des données passivement | Peut **émettre activement** avec `.next()` |
| Unicast | Multicast |

### Directive Structurelle vs Directive d'Attribut
| Structurelle | Attribut |
|--------------|----------|
| Préfixe `*` (ex: `*ngIf`) | Pas de préfixe `*` (ex: `[ngClass]`) |
| **Modifie la structure DOM** | **Modifie apparence/comportement** |
| Ajoute/supprime des éléments | Modifie un élément existant |

### Template-Driven Forms vs Reactive Forms
| Template-Driven | Reactive (Piloté par code) |
|-----------------|----------------------------|
| Logique dans le **template** | Logique dans le **code TypeScript** |
| `FormsModule` | `ReactiveFormsModule` |
| Utilise `ngModel` | Utilise `FormGroup`, `FormControl` |
| Simple, formulaires basiques | Complexe, puissant, validation fine |
| Moins testable | Facilement testable |

### Property Binding vs Event Binding
| Property Binding | Event Binding |
|------------------|---------------|
| `[property]="value"` | `(event)="handler()"` |
| Parent → Enfant (données) | Enfant → Parent (événements) |
| Sens descendant | Sens ascendant |

### `ngOnInit` vs `ngAfterViewInit`
| ngOnInit | ngAfterViewInit |
|----------|-----------------|
| Appelé après initialisation du **composant** | Appelé après initialisation de la **vue** |
| Données/propriétés initialisées | DOM enfant disponible |
| Pour récupérer données depuis service | Pour accéder aux éléments du template |

---

## 3. ⚠️ Erreurs Fréquentes & Pièges

### 🚨 Confusions Courantes

1. **Property Binding vs Two-Way Binding**
   - `[property]="value"` → sens unique (parent → enfant)
   - `[(ngModel)]="value"` → bidirectionnel (banana in a box syntax)

2. **`@Injectable()` obligatoire**
   - Un service DOIT avoir `@Injectable()` pour être injecté
   - `@Component()` ≠ `@Injectable()` ≠ `@Directive()`

3. **Oubli d'import de modules**
   - `FormsModule` → pour `ngModel`
   - `ReactiveFormsModule` → pour formulaires réactifs
   - `HttpClientModule` → pour `HttpClient`

4. **`formControlName` vs `[formControl]`**
   - `formControlName="name"` → dans un `formGroup` (string)
   - `[formControl]="myControl"` → contrôle standalone (référence)

5. **Route parameter syntax**
   - ✅ Correct: `/route/:param`
   - ❌ Faux: `/route/{param}` ou `/route/<param>`

6. **Observable non souscrit = pas de requête**
   - `http.get()` retourne un Observable
   - Sans `.subscribe()`, la requête n'est **jamais exécutée**

---

## 4. 🧠 Réflexes "Si tu vois X → Pense Y"

| Si tu vois... | Pense à... |
|---------------|------------|
| `*ngIf` | Directive **structurelle** (ajoute/retire du DOM) |
| `[ngClass]` | Directive **d'attribut** (modifie classes CSS) |
| `@Injectable()` | Décorateur pour **service** |
| `@Component()` | Décorateur pour **composant** |
| `[(ngModel)]` | **Two-way binding** (FormsModule requis) |
| `subscribe()` | Souscription à un **Observable** |
| `FormBuilder` | Création de **formulaires réactifs** |
| `:param` dans route | **Paramètre dynamique** de route |
| `ngOnDestroy` | **Désabonnement** des subscriptions |
| `valueChanges` | Observable qui émet à chaque **modification** d'un contrôle |

---

## 5. 📋 États d'un FormControl (Crucial pour validation!)

| État | Signification |
|------|---------------|
| `valid` | Le champ respecte toutes les validations |
| `invalid` | Le champ a des erreurs de validation |
| `pristine` | L'utilisateur n'a **pas encore modifié** la valeur |
| `dirty` | L'utilisateur **a modifié** la valeur |
| `untouched` | L'utilisateur n'est **pas encore entré** dans le champ |
| `touched` | L'utilisateur **est entré** dans le champ |

> ⚡ **Piège classique**: `pristine` ≠ `untouched`  
> - `pristine` = valeur non modifiée  
> - `untouched` = champ non visité (focus)

---

## 6. 🔧 Validators Fournis par Angular

| Validator | Usage |
|-----------|-------|
| `Validators.required` | Champ obligatoire |
| `Validators.minLength(n)` | Minimum n caractères |
| `Validators.maxLength(n)` | Maximum n caractères |
| `Validators.pattern(regex)` | Correspondance regex |

---

## 7. 📡 HttpClient - Méthodes Principales

| Méthode | Utilisation |
|---------|-------------|
| `http.get(url)` | Récupérer des données |
| `http.post(url, body)` | Envoyer des données |
| `http.put(url, body)` | Mettre à jour des données |
| `http.delete(url)` | Supprimer des données |

> ⚠️ **Toutes retournent un Observable** → nécessite `subscribe()` pour exécution

---

## 8. 🏗️ Déploiement Angular (2 Scénarios)

| Séparé | Combiné |
|--------|---------|
| 2 serveurs différents | 1 seul serveur |
| Angular sur host statique | Angular servi par NodeJS |
| **CORS obligatoire** | Pas de problème CORS |

---

# PARTIE B : QCM Difficile (30 Questions)

---

## 📌 Instructions
- 4 options (A, B, C, D)
- **Une seule** réponse correcte
- Lisez attentivement les subtilités

---

### 🎯 SECTION 1: Définitions vs Exemples (8 questions)

---

**Question 1**

Quel décorateur est utilisé pour définir une classe injectable comme service dans Angular ?

A) `@Component()`  
B) `@Directive()`  
C) `@Injectable()`  
D) `@NgModule()`

<details>
<summary>✅ Réponse</summary>

**C) `@Injectable()`**

**Justification**: `@Injectable()` marque une classe comme candidate à l'injection de dépendances.

**Pièges**:
- A) `@Component()` → pour les composants, pas les services
- B) `@Directive()` → pour les directives
- D) `@NgModule()` → pour les modules

</details>

---

**Question 2**

Laquelle de ces directives est une directive **structurelle** ?

A) `ngClass`  
B) `ngStyle`  
C) `ngFor`  
D) `ngModel`

<details>
<summary>✅ Réponse</summary>

**C) `ngFor`**

**Justification**: `ngFor` modifie la **structure du DOM** en créant/supprimant des éléments. Elle utilise le préfixe `*`.

**Pièges**:
- A) `ngClass` → directive d'attribut (modifie classes CSS)
- B) `ngStyle` → directive d'attribut (modifie styles)
- D) `ngModel` → directive de formulaire (two-way binding)

</details>

---

**Question 3**

Quelle classe suit la valeur et le statut de validation d'un **contrôle individuel** de formulaire ?

A) `FormGroup`  
B) `FormArray`  
C) `FormBuilder`  
D) `FormControl`

<details>
<summary>✅ Réponse</summary>

**D) `FormControl`**

**Justification**: `FormControl` représente un champ unique avec sa valeur et son état de validation.

**Pièges**:
- A) `FormGroup` → groupe **plusieurs** contrôles
- B) `FormArray` → tableau de contrôles
- C) `FormBuilder` → classe utilitaire pour **créer** des contrôles, pas pour les suivre

</details>

---

**Question 4**

Quel lifecycle hook est appelé **après** l'initialisation complète de la vue d'un composant ?

A) `ngOnInit()`  
B) `ngOnChanges()`  
C) `ngAfterViewInit()`  
D) `ngDoCheck()`

<details>
<summary>✅ Réponse</summary>

**C) `ngAfterViewInit()`**

**Justification**: `ngAfterViewInit` est déclenché quand la vue (template + enfants) est entièrement initialisée.

**Pièges**:
- A) `ngOnInit()` → après initialisation du **composant**, pas de la vue
- B) `ngOnChanges()` → quand les inputs changent
- D) `ngDoCheck()` → à chaque cycle de détection

</details>

---

**Question 5**

Dans Angular, qu'est-ce qu'un Observable ?

A) Une fonction callback exécutée lors d'un événement  
B) Un flux continu de données auquel on peut s'abonner  
C) Un tableau JavaScript standard  
D) Un service pour les requêtes HTTP uniquement

<details>
<summary>✅ Réponse</summary>

**B) Un flux continu de données auquel on peut s'abonner**

**Justification**: Un Observable émet des données de manière asynchrone, on s'y abonne avec `subscribe()`.

**Pièges**:
- A) Callback simple ≠ Observable (Observable est plus puissant)
- C) Ce n'est pas un tableau, même si ça y ressemble conceptuellement
- D) Observable est utilisé partout, pas que HTTP

</details>

---

**Question 6**

Quel est le rôle principal d'un **NgModule** ?

A) Gérer le routage exclusivement  
B) Encapsuler et regrouper composants, services et directives  
C) Créer des applications standalone  
D) Gérer les requêtes HTTP

<details>
<summary>✅ Réponse</summary>

**B) Encapsuler et regrouper composants, services et directives**

**Justification**: NgModule organise l'application en blocs fonctionnels cohérents.

**Pièges**:
- A) Le routage est **une** fonctionnalité, pas le rôle principal
- C) Les applications standalone sont un concept séparé (Angular 14+)
- D) HTTP est géré par HttpClientModule, pas tous les NgModules

</details>

---

**Question 7**

Quel pipe Angular intégré utilise-t-on pour **formater une date** ?

A) `datePipe`  
B) `currencyPipe`  
C) `numberPipe`  
D) `jsonPipe`

<details>
<summary>✅ Réponse</summary>

**A) `datePipe`**

**Justification**: Le pipe `date` transforme une date selon un format spécifié.

**Pièges**:
- B) `currency` → formate les montants monétaires
- C) `number` → formate les nombres
- D) `json` → affiche un objet en JSON

</details>

---

**Question 8**

Qu'est-ce qui différencie un **Subject** d'un **Observable** classique ?

A) Un Subject ne peut pas émettre de données  
B) Un Subject permet plusieurs observateurs et peut émettre activement  
C) Un Subject est synchrone, un Observable est asynchrone  
D) Un Subject ne nécessite pas de souscription

<details>
<summary>✅ Réponse</summary>

**B) Un Subject permet plusieurs observateurs et peut émettre activement**

**Justification**: Un Subject est multicast (plusieurs abonnés) et peut émettre des valeurs via `.next()`.

**Pièges**:
- A) Faux, un Subject PEUT émettre avec `.next()`
- C) Les deux sont asynchrones
- D) Faux, un Subject nécessite aussi des souscriptions

</details>

---

### 🎯 SECTION 2: Distinctions Conceptuelles (8 questions)

---

**Question 9**

Quelle est la différence principale entre `[property]` et `[(property)]` ?

A) `[property]` est bidirectionnel, `[(property)]` est unidirectionnel  
B) `[property]` est unidirectionnel, `[(property)]` est bidirectionnel  
C) Les deux sont identiques  
D) `[(property)]` n'existe pas en Angular

<details>
<summary>✅ Réponse</summary>

**B) `[property]` est unidirectionnel, `[(property)]` est bidirectionnel**

**Justification**: 
- `[property]` = property binding (parent → enfant)
- `[(property)]` = two-way binding (parent ↔ enfant)

**Pièges**:
- A) C'est l'inverse!
- C) Non, comportements différents
- D) `[(ngModel)]` est très courant

</details>

---

**Question 10**

Quelle est la différence entre `pristine` et `untouched` pour un FormControl ?

A) Ils sont synonymes  
B) `pristine` = valeur non modifiée, `untouched` = champ non visité  
C) `pristine` = champ non visité, `untouched` = valeur non modifiée  
D) `pristine` concerne la validité, `untouched` le contenu

<details>
<summary>✅ Réponse</summary>

**B) `pristine` = valeur non modifiée, `untouched` = champ non visité**

**Justification**: 
- `pristine` → l'utilisateur n'a pas changé la valeur
- `untouched` → l'utilisateur n'est pas entré dans le champ (focus)

**Piège classique**: Ces deux états sont souvent confondus!

</details>

---

**Question 11**

Pour un formulaire simple sans validation complexe, quelle approche est recommandée ?

A) Reactive Forms (piloté par le code)  
B) Template-Driven Forms (piloté par le template)  
C) Les deux sont équivalentes pour tous les cas  
D) Aucune, Angular ne gère pas les formulaires simples

<details>
<summary>✅ Réponse</summary>

**B) Template-Driven Forms (piloté par le template)**

**Justification**: Les Template-Driven Forms sont recommandés pour les formulaires **simples** avec peu de validation.

**Pièges**:
- A) Reactive Forms = formulaires complexes avec validation fine
- C) Non, chaque approche a son cas d'usage
- D) Angular gère très bien les deux types

</details>

---

**Question 12**

Quel module devez-vous importer pour utiliser `ngModel` ?

A) `ReactiveFormsModule`  
B) `FormsModule`  
C) `HttpClientModule`  
D) `CommonModule`

<details>
<summary>✅ Réponse</summary>

**B) `FormsModule`**

**Justification**: `ngModel` fait partie des directives de `FormsModule` (template-driven).

**Pièges**:
- A) `ReactiveFormsModule` → pour les formulaires réactifs (`FormGroup`, etc.)
- C) `HttpClientModule` → pour les requêtes HTTP
- D) `CommonModule` → directives communes (`ngIf`, `ngFor`)

</details>

---

**Question 13**

Dans le déploiement **séparé** d'une application Angular + NodeJS, qu'est-il nécessaire de configurer côté serveur ?

A) Les routes Angular  
B) Les entêtes CORS  
C) Le module FormsModule  
D) Le service HttpClient

<details>
<summary>✅ Réponse</summary>

**B) Les entêtes CORS**

**Justification**: Quand Angular et NodeJS tournent sur des domaines/ports différents, les requêtes cross-origin nécessitent CORS.

**Pièges**:
- A) Les routes Angular sont côté client
- C) FormsModule = module Angular, pas serveur
- D) HttpClient = client Angular

</details>

---

**Question 14**

Quelle est la différence entre `http.get(url)` et `http.post(url, body)` ?

A) `get` envoie des données, `post` en récupère  
B) `get` récupère des données, `post` en envoie  
C) Les deux sont identiques mais avec des noms différents  
D) `get` est synchrone, `post` est asynchrone

<details>
<summary>✅ Réponse</summary>

**B) `get` récupère des données, `post` en envoie**

**Justification**: GET = récupération, POST = envoi/création de ressources.

**Pièges**:
- A) C'est l'inverse!
- C) Non, sémantiques HTTP différentes
- D) Les deux sont asynchrones (retournent des Observables)

</details>

---

**Question 15**

Quelle syntaxe est correcte pour définir un paramètre dans une route Angular ?

A) `/users/{id}`  
B) `/users/:id`  
C) `/users?id`  
D) `/users<id>`

<details>
<summary>✅ Réponse</summary>

**B) `/users/:id`**

**Justification**: Angular utilise la syntaxe `:paramName` pour les paramètres de route dynamiques.

**Pièges**:
- A) `{id}` → syntaxe d'autres frameworks (ex: Spring)
- C) `?id` → query parameters, pas route parameters
- D) `<id>` → syntaxe HTML, pas de routes

</details>

---

**Question 16**

Pour l'injection de dépendances, quel est l'avantage principal ?

A) Augmente le couplage entre les classes  
B) Génère automatiquement les composants  
C) Favorise un couplage faible entre les classes  
D) Remplace le besoin de services

<details>
<summary>✅ Réponse</summary>

**C) Favorise un couplage faible entre les classes**

**Justification**: DI permet aux classes de recevoir leurs dépendances de l'extérieur, rendant le code modulaire et testable.

**Pièges**:
- A) C'est l'inverse! DI **réduit** le couplage
- B) DI n'auto-génère pas de composants
- D) DI **utilise** les services, ne les remplace pas

</details>

---

### 🎯 SECTION 3: Processus/Séquence/Logique (6 questions)

---

**Question 17**

Dans quel ordre appeler les méthodes pour faire une requête HTTP et traiter la réponse ?

A) `subscribe()` → `http.get()` → traitement  
B) `http.get()` → traitement → `subscribe()`  
C) `http.get()` → `subscribe()` → traitement dans le callback  
D) `subscribe()` → traitement → `http.get()`

<details>
<summary>✅ Réponse</summary>

**C) `http.get()` → `subscribe()` → traitement dans le callback**

**Justification**: On appelle `http.get()` qui retourne un Observable, puis on s'abonne avec `subscribe()` où le traitement se fait dans le callback.

**Pièges**:
- A/D) `subscribe()` ne peut pas être appelé avant l'Observable
- B) Le traitement doit être **dans** le callback de subscribe (async)

</details>

---

**Question 18**

Quelle est la séquence correcte pour créer un formulaire réactif ?

A) Template → FormGroup → FormBuilder  
B) FormBuilder → FormGroup → Template avec directives  
C) Template → Import ReactiveFormsModule → FormControl  
D) FormControl → FormArray → Submit

<details>
<summary>✅ Réponse</summary>

**B) FormBuilder → FormGroup → Template avec directives**

**Justification**: 
1. Injecter `FormBuilder` dans le composant
2. Créer le `FormGroup` avec `this.fb.group({...})`
3. Lier au template avec `[formGroup]` et `formControlName`

**Pièges**:
- A) L'ordre est inversé
- C) Mélange template-driven et reactive
- D) Manque les étapes essentielles

</details>

---

**Question 19**

Avant d'utiliser `HttpClient`, quelle(s) étape(s) est/sont nécessaire(s) ?

A) Importer `HttpClientModule` dans le module racine uniquement  
B) Importer `HttpClientModule` ET injecter `HttpClient` dans le service/composant  
C) Configurer les routes uniquement  
D) Appeler `http.init()` avant toute requête

<details>
<summary>✅ Réponse</summary>

**B) Importer `HttpClientModule` ET injecter `HttpClient` dans le service/composant**

**Justification**: Les deux étapes sont requises:
1. Import du module pour rendre HttpClient disponible
2. Injection dans le constructeur pour l'utiliser

**Pièges**:
- A) L'import seul ne suffit pas, il faut aussi l'injection
- C) Les routes n'ont rien à voir
- D) `http.init()` n'existe pas

</details>

---

**Question 20**

Pour qu'un Subject émette des données à tous ses observateurs, quelle méthode appeler ?

A) `emit()`  
B) `send()`  
C) `next()`  
D) `push()`

<details>
<summary>✅ Réponse</summary>

**C) `next()`**

**Justification**: Un Subject émet des valeurs via sa méthode `.next(value)`.

**Pièges**:
- A) `emit()` → pour EventEmitter, pas Subject
- B/D) N'existent pas sur les Subjects

</details>

---

**Question 21**

Dans quel lifecycle hook devrait-on se désabonner d'un Subject pour éviter les fuites mémoire ?

A) `ngOnInit()`  
B) `ngAfterViewInit()`  
C) `ngOnDestroy()`  
D) `ngOnChanges()`

<details>
<summary>✅ Réponse</summary>

**C) `ngOnDestroy()`**

**Justification**: `ngOnDestroy` est appelé juste avant la destruction du composant, moment idéal pour nettoyer les souscriptions.

**Pièges**:
- A) `ngOnInit` = initialisation, pas nettoyage
- B) `ngAfterViewInit` = vue initialisée
- D) `ngOnChanges` = inputs changés

</details>

---

**Question 22**

Quelle est l'étape **première** lors du déploiement combiné Angular + NodeJS sur Heroku ?

A) Transférer le code via git  
B) Builder l'application Angular avec `ng build --prod`  
C) Installer Heroku CLI  
D) Configurer les entêtes CORS

<details>
<summary>✅ Réponse</summary>

**B) Builder l'application Angular avec `ng build --prod`**

**Justification**: La première étape est de générer le dossier `dist` avec les fichiers de production Angular.

**Pièges**:
- A) Le transfert git vient après la préparation du code
- C) L'installation CLI vient après le build
- D) En déploiement combiné, CORS n'est pas nécessaire

</details>

---

### 🎯 SECTION 4: Interprétation d'Artefacts (4 questions)

---

**Question 23**

Considérez ce code:
```typescript
this.http.get('http://api.example.com/users')
```

Pourquoi ce code **ne fait pas** de requête HTTP ?

A) L'URL est incorrecte  
B) Il manque `.subscribe()`  
C) Il faut utiliser `.post()` au lieu de `.get()`  
D) HttpClient n'est pas importé

<details>
<summary>✅ Réponse</summary>

**B) Il manque `.subscribe()`**

**Justification**: Un Observable n'exécute rien tant qu'on ne s'y abonne pas. Sans `.subscribe()`, la requête n'est jamais envoyée.

**Pièges**:
- A) L'URL semble correcte
- C) GET est approprié pour récupérer des données
- D) Si HttpClient n'était pas importé, il y aurait une erreur de compilation

</details>

---

**Question 24**

Analysez ce template:
```html
<input [(ngModel)]="username" name="username">
```

Quel module doit être importé pour que ce code fonctionne ?

A) `ReactiveFormsModule`  
B) `CommonModule`  
C) `FormsModule`  
D) `BrowserModule`

<details>
<summary>✅ Réponse</summary>

**C) `FormsModule`**

**Justification**: `[(ngModel)]` est une directive du `FormsModule` (template-driven forms).

**Pièges**:
- A) `ReactiveFormsModule` → pour `FormGroup`, `FormControl`
- B) `CommonModule` → pour `*ngIf`, `*ngFor`, etc.
- D) `BrowserModule` → bootstrap de l'app

</details>

---

**Question 25**

Considérez ce validateur:
```typescript
this.fb.group({
  age: ['', [Validators.required, Validators.minLength(2)]]
})
```

Que vérifie ce validateur pour le champ `age` ?

A) Que l'âge soit au moins 2 ans  
B) Que le champ ne soit pas vide ET contienne au moins 2 **caractères**  
C) Que le champ contienne exactement 2 caractères  
D) Que l'âge soit un nombre positif

<details>
<summary>✅ Réponse</summary>

**B) Que le champ ne soit pas vide ET contienne au moins 2 caractères**

**Justification**: 
- `Validators.required` → champ obligatoire
- `Validators.minLength(2)` → minimum 2 **caractères** (pas la valeur numérique!)

**Piège majeur**: `minLength` vérifie la **longueur de la chaîne**, pas la valeur numérique!

</details>

---

**Question 26**

Que fait ce code ?
```typescript
mySubject.subscribe(data => console.log(data));
mySubject.next('Hello');
```

A) Affiche "Hello" dans la console  
B) Génère une erreur car on ne peut pas appeler `next()` après `subscribe()`  
C) N'affiche rien car le Subject est vide  
D) Affiche "undefined"

<details>
<summary>✅ Réponse</summary>

**A) Affiche "Hello" dans la console**

**Justification**: L'abonnement est fait avant l'émission. Quand `next('Hello')` est appelé, tous les abonnés reçoivent la valeur.

**Pièges**:
- B) L'ordre est correct et valide
- C) Le Subject émet bien une valeur
- D) La valeur émise est "Hello", pas undefined

</details>

---

### 🎯 SECTION 5: Mini-Cas/Scénarios (4 questions)

---

**Question 27**

**Scénario**: Vous créez un composant qui affiche une liste de produits depuis une API. Vous utilisez `http.get()` mais la liste reste vide.

Quelle est la cause la plus probable ?

A) L'API ne répond pas  
B) Vous avez oublié de vous abonner à l'Observable  
C) Le composant n'est pas déclaré dans le module  
D) Il manque une directive `*ngFor`

<details>
<summary>✅ Réponse</summary>

**B) Vous avez oublié de vous abonner à l'Observable**

**Justification**: C'est l'erreur la plus fréquente! Sans `.subscribe()`, aucune requête n'est exécutée.

**Pièges**:
- A) Possible mais moins probable comme première cause
- C) Causerait une erreur de template
- D) Causerait un affichage incorrect, pas une liste vide

</details>

---

**Question 28**

**Scénario**: Votre formulaire réactif a un champ email avec validation. L'utilisateur n'a pas encore cliqué sur le champ. Quel est l'état du champ ?

A) `touched: true, pristine: true`  
B) `touched: false, pristine: true`  
C) `touched: true, pristine: false`  
D) `touched: false, pristine: false`

<details>
<summary>✅ Réponse</summary>

**B) `touched: false, pristine: true`**

**Justification**: 
- L'utilisateur n'a pas visité le champ → `untouched` donc `touched: false`
- L'utilisateur n'a pas modifié la valeur → `pristine: true`

**Pièges**:
- A) `touched: true` nécessite que l'utilisateur soit entré dans le champ
- C/D) Requièrent une interaction utilisateur

</details>

---

**Question 29**

**Scénario**: Vous voulez partager des données entre deux composants non-liés (pas parent-enfant). Quelle solution ?

A) Property binding `[data]`  
B) Event binding `(dataChange)`  
C) Un service avec un Subject  
D) `ngModel` bidirectionnel

<details>
<summary>✅ Réponse</summary>

**C) Un service avec un Subject**

**Justification**: Pour des composants non liés hiérarchiquement, un service avec Subject permet de partager des données de manière réactive.

**Pièges**:
- A/B) Property/Event binding → uniquement parent-enfant
- D) ngModel → pour les formulaires, pas le partage inter-composants

</details>

---

**Question 30**

**Scénario**: Vous développez une application Angular avec un backend NodeJS. En développement local, Angular tourne sur `localhost:4200` et NodeJS sur `localhost:3000`. Les requêtes HTTP échouent avec une erreur CORS.

Quelle solution est correcte ?

A) Changer le port d'Angular à 3000  
B) Ajouter les entêtes CORS dans le serveur NodeJS/Express  
C) Désactiver le firewall  
D) Utiliser HTTP au lieu de HTTPS

<details>
<summary>✅ Réponse</summary>

**B) Ajouter les entêtes CORS dans le serveur NodeJS/Express**

**Justification**: Quand les domaines/ports sont différents (cross-origin), le serveur doit autoriser les requêtes via les entêtes CORS.

**Pièges**:
- A) Créerait un conflit de ports
- C) Le firewall n'est pas la cause des erreurs CORS
- D) HTTP/HTTPS n'est pas lié au problème CORS

</details>

---

## 📊 Récapitulatif de Difficulté

| Section | Questions | Niveau |
|---------|-----------|--------|
| Définitions vs Exemples | 1-8 | ⭐⭐ Moyen |
| Distinctions | 9-16 | ⭐⭐⭐ Difficile |
| Processus/Séquence | 17-22 | ⭐⭐⭐ Difficile |
| Artefacts | 23-26 | ⭐⭐⭐⭐ Très difficile |
| Mini-Cas | 27-30 | ⭐⭐⭐⭐ Très difficile |

---

## 🔥 Points à Retenir Absolument

1. **Observable sans `subscribe()` = rien ne se passe**
2. **`pristine` ≠ `untouched`** (modification vs visite)
3. **`FormsModule` pour ngModel, `ReactiveFormsModule` pour FormGroup**
4. **Route parameter = `/path/:param`**
5. **Subject = Observable + émetteur + multicast**
6. **CORS nécessaire si déploiement séparé**
7. **Désabonnement dans `ngOnDestroy()`**
8. **`minLength(n)` vérifie les caractères, pas la valeur numérique**

---

**Bonne chance pour ton examen! 🍀**
