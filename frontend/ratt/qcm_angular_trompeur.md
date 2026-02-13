# QCM Angular - Questions Très Trompantes
## Basé sur le cours du Pr. Adil ANWAR (Parties 1 & 2)

> ⚠️ **Attention** : Ce QCM est conçu pour être extrêmement difficile avec des réponses très proches. Lisez attentivement chaque option !

---

## 📘 TypeScript & Fondamentaux

### Question 1
**Quelle est la syntaxe correcte pour déclarer un tableau de nombres en TypeScript ?**

- A) `let nombres: Array[number] = [1, 2, 3];`
- B) `let nombres: number[] = [1, 2, 3];`
- C) `let nombres: [number] = [1, 2, 3];`
- D) `let nombres: array<number> = [1, 2, 3];`

<details>
<summary>Réponse</summary>
**B)** - La syntaxe `number[]` est correcte. A) utilise des crochets au lieu de chevrons. C) déclare un tuple, pas un tableau. D) utilise `array` en minuscule au lieu de `Array`.
</details>

---

### Question 2
**Comment déclarer un paramètre optionnel dans une fonction TypeScript ?**

- A) `function greet(name: string, age?: number)`
- B) `function greet(name: string, age: number?)`
- C) `function greet(name: string, ?age: number)`
- D) `function greet(name: string, age: optional number)`

<details>
<summary>Réponse</summary>
**A)** - Le `?` doit être placé après le nom du paramètre et avant les deux-points. Les autres syntaxes sont incorrectes en TypeScript.
</details>

---

### Question 3
**Quel type TypeScript accepte les valeurs `null` et `undefined` uniquement ?**

- A) `any`
- B) `unknown`
- C) `void`
- D) `never`

<details>
<summary>Réponse</summary>
**C)** - `void` accepte uniquement `null` et `undefined`. `any` accepte n'importe quel type, `unknown` est similaire à `any` mais plus strict, `never` représente un type qui n'arrive jamais.
</details>

---

### Question 4
**Quelle est la syntaxe correcte pour effectuer un cast en TypeScript ?**

- A) `let str = <String>uneValeur;`
- B) `let str = (String)uneValeur;`
- C) `let str = uneValeur as string;`
- D) `let str = string(uneValeur);`

<details>
<summary>Réponse</summary>
**C)** - La syntaxe `as` est la forme moderne et recommandée. A) utilise `String` (objet) au lieu de `string` (type primitif). B) est la syntaxe Java/C#. D) est incorrecte.
</details>

---

### Question 5
**Dans une énumération TypeScript, quelle est la valeur par défaut du premier élément ?**

- A) `1`
- B) `0`
- C) `null`
- D) `undefined`

<details>
<summary>Réponse</summary>
**B)** - Par défaut, le premier élément d'une enum vaut `0`, puis s'incrémente.
</details>

---

### Question 6
**Que permet le mot-clé `super` en TypeScript ?**

- A) D'appeler une méthode statique de la classe courante
- B) D'appeler une fonction du constructeur de la classe enfant
- C) D'appeler une fonction créée dans le parent
- D) D'appeler une fonction privée de la classe parent

<details>
<summary>Réponse</summary>
**C)** - `super` permet d'accéder aux méthodes et au constructeur de la classe parent. Il n'accède pas aux méthodes privées directement.
</details>

---

### Question 7
**Quelle affirmation est vraie concernant les décorateurs en TypeScript/Angular ?**

- A) Les décorateurs peuvent être appliqués sur les constructeurs
- B) Les décorateurs sont préfixés par le symbole `#`
- C) Les décorateurs peuvent être appliqués sur les paramètres de fonction
- D) Les décorateurs ne peuvent s'appliquer que sur les classes

<details>
<summary>Réponse</summary>
**C)** - Les décorateurs peuvent s'appliquer sur les classes, propriétés, méthodes, et paramètres de fonction, mais PAS sur les constructeurs directement (seulement sur leurs paramètres).
</details>

---

## 📗 Composants Angular

### Question 8
**Quelle commande génère un composant Angular SANS fichier de test ?**

- A) `ng generate component my-comp --no-tests`
- B) `ng generate component my-comp --skip-tests=true`
- C) `ng generate component my-comp --skip-test`
- D) `ng generate component my-comp --no-spec`

<details>
<summary>Réponse</summary>
**B)** - La bonne option est `--skip-tests=true`. Les autres options n'existent pas officiellement dans Angular CLI.
</details>

---

### Question 9
**Dans le décorateur `@Component`, quelle propriété référence le fichier HTML externe ?**

- A) `template`
- B) `templateUrl`
- C) `htmlUrl`
- D) `viewUrl`

<details>
<summary>Réponse</summary>
**B)** - `templateUrl` référence un fichier HTML externe. `template` est pour le HTML inline.
</details>

---

### Question 10
**Quelle propriété du décorateur `@Component` permet d'utiliser d'autres composants dans le template ?**

- A) `components`
- B) `declarations`
- C) `imports`
- D) `providers`

<details>
<summary>Réponse</summary>
**C)** - `imports` permet de référencer d'autres composants, modules ou directives utilisés dans le template. `declarations` est utilisé dans les modules, pas dans les composants.
</details>

---

### Question 11
**Comment Angular affiche-t-il une variable qui n'existe pas dans le template ?**

- A) Il affiche `undefined`
- B) Il affiche `null`
- C) Il affiche une chaîne vide
- D) Il génère une erreur de compilation

<details>
<summary>Réponse</summary>
**C)** - Angular affiche une chaîne vide pour les variables inexistantes ou null, pas `undefined`.
</details>

---

### Question 12
**Quel fichier contient le point d'entrée principal d'une application Angular ?**

- A) `app.component.ts`
- B) `index.html`
- C) `main.ts`
- D) `angular.json`

<details>
<summary>Réponse</summary>
**C)** - `main.ts` est le point d'entrée de l'application qui bootstrap le module racine.
</details>

---

### Question 13
**Quelle interface doit-on implémenter pour utiliser `ngOnInit()` ?**

- A) `OnInit`
- B) `NgOnInit`
- C) `Initializable`
- D) `OnComponentInit`

<details>
<summary>Réponse</summary>
**A)** - L'interface s'appelle `OnInit` (sans le préfixe `ng`). La méthode s'appelle `ngOnInit()`.
</details>

---

## 📕 Data Binding

### Question 14
**Quelle est la syntaxe correcte pour l'interpolation en Angular ?**

- A) `{titre}`
- B) `{{titre}}`
- C) `[titre]`
- D) `${titre}`

<details>
<summary>Réponse</summary>
**B)** - L'interpolation utilise les doubles accolades `{{}}`, appelées "moustaches".
</details>

---

### Question 15
**Quelle syntaxe est utilisée pour le binding de propriété ?**

- A) `(property)="value"`
- B) `{{property}}`
- C) `[property]="value"`
- D) `#property="value"`

<details>
<summary>Réponse</summary>
**C)** - Le binding de propriété utilise les crochets `[]`. Les parenthèses `()` sont pour les événements.
</details>

---

### Question 16
**Quelle syntaxe représente le binding bidirectionnel (two-way binding) ?**

- A) `[ngModel]="searchText"`
- B) `(ngModel)="searchText"`
- C) `[(ngModel)]="searchText"`
- D) `{{ngModel}}="searchText"`

<details>
<summary>Réponse</summary>
**C)** - La syntaxe "banana in a box" `[()]` combine binding de propriété et d'événement pour le two-way binding.
</details>

---

### Question 17
**Pour utiliser `[(ngModel)]`, quel module faut-il importer ?**

- A) `CommonModule`
- B) `FormsModule`
- C) `ReactiveFormsModule`
- D) `NgModelModule`

<details>
<summary>Réponse</summary>
**B)** - `FormsModule` contient les directives pour les formulaires template-driven, dont `ngModel`.
</details>

---

### Question 18
**Quelle syntaxe déclare une variable locale dans un template Angular ?**

- A) `@variable`
- B) `$variable`
- C) `#variable`
- D) `let variable`

<details>
<summary>Réponse</summary>
**C)** - Le symbole `#` est utilisé pour déclarer des variables de référence locales dans les templates.
</details>

---

### Question 19
**Quel événement est émis par `ngModel` lorsque l'utilisateur modifie un input ?**

- A) `ngModelUpdate`
- B) `ngModelChange`
- C) `modelChange`
- D) `valueChange`

<details>
<summary>Réponse</summary>
**B)** - `ngModelChange` est l'événement émis par la directive lors de modifications utilisateur.
</details>

---

## 📙 Interaction entre Composants

### Question 20
**Quel décorateur permet à un composant fils de recevoir des données de son parent ?**

- A) `@Output()`
- B) `@Input()`
- C) `@Inject()`
- D) `@Data()`

<details>
<summary>Réponse</summary>
**B)** - `@Input()` permet au composant fils de recevoir des données du parent. `@Output()` fait l'inverse.
</details>

---

### Question 21
**Quel décorateur permet à un composant parent de recevoir des événements d'un composant enfant ?**

- A) `@Input()`
- B) `@Output()`
- C) `@Event()`
- D) `@Emit()`

<details>
<summary>Réponse</summary>
**B)** - `@Output()` est utilisé avec `EventEmitter` pour émettre des événements vers le parent.
</details>

---

### Question 22
**Quelle classe est utilisée pour émettre des événements personnalisés ?**

- A) `EventEmitter`
- B) `EventDispatcher`
- C) `Observable`
- D) `Subject`

<details>
<summary>Réponse</summary>
**A)** - `EventEmitter` est spécifiquement conçu pour émettre des événements avec `@Output()`.
</details>

---

### Question 23
**Comment créer un alias pour un `@Input()` ?**

- A) `@Input('aliasName') propriete: Type`
- B) `@Input(alias='aliasName') propriete: Type`
- C) `@Input() aliasName: Type = propriete`
- D) `@Input({alias: 'aliasName'}) propriete: Type`

<details>
<summary>Réponse</summary>
**A)** - L'alias est passé comme paramètre string au décorateur `@Input('aliasName')`.
</details>

---

## 📒 Directives

### Question 24
**Quel préfixe indique une directive structurelle ?**

- A) `@`
- B) `#`
- C) `*`
- D) `$`

<details>
<summary>Réponse</summary>
**C)** - L'astérisque `*` préfixe les directives structurelles comme `*ngIf` et `*ngFor`.
</details>

---

### Question 25
**Quelle est la syntaxe correcte pour `*ngFor` avec accès à l'index ?**

- A) `*ngFor="let item of items; index as i"`
- B) `*ngFor="let item of items; let i = index"`
- C) `*ngFor="let item of items; i = index"`
- D) `*ngFor="let item of items; let index = i"`

<details>
<summary>Réponse</summary>
**B)** - La syntaxe correcte utilise `let i = index` pour accéder à l'indice de l'itération.
</details>

---

### Question 26
**Quelle directive permet de modifier dynamiquement plusieurs styles CSS ?**

- A) `[style]`
- B) `[ngStyle]`
- C) `[cssStyle]`
- D) `[styles]`

<details>
<summary>Réponse</summary>
**B)** - `ngStyle` accepte un objet avec plusieurs propriétés CSS à appliquer dynamiquement.
</details>

---

### Question 27
**Quelle directive permet d'ajouter/supprimer dynamiquement des classes CSS ?**

- A) `[class]`
- B) `[ngClass]`
- C) `[cssClass]`
- D) `[addClass]`

<details>
<summary>Réponse</summary>
**B)** - `ngClass` permet de gérer dynamiquement les classes CSS d'un élément.
</details>

---

### Question 28
**Quelle syntaxe `*ngIf` permet d'afficher un template alternatif ?**

- A) `*ngIf="condition; otherwise templateRef"`
- B) `*ngIf="condition; else templateRef"`
- C) `*ngIf="condition; alt templateRef"`
- D) `*ngIf="condition; elseif templateRef"`

<details>
<summary>Réponse</summary>
**B)** - La syntaxe correcte est `*ngIf="condition; else templateRef"` pour spécifier un template alternatif.
</details>

---

## 📓 Pipes

### Question 29
**Quel symbole est utilisé pour appliquer un pipe en Angular ?**

- A) `->`
- B) `:`
- C) `|`
- D) `>>`

<details>
<summary>Réponse</summary>
**C)** - Le symbole pipe `|` est utilisé, inspiré des pipes Unix.
</details>

---

### Question 30
**Quel module faut-il importer pour utiliser les pipes prédéfinis comme `DatePipe` ?**

- A) `PipeModule`
- B) `CommonModule`
- C) `FormsModule`
- D) `CoreModule`

<details>
<summary>Réponse</summary>
**B)** - `CommonModule` contient les pipes prédéfinis comme `DatePipe`, `UpperCasePipe`, etc.
</details>

---

### Question 31
**Quel pipe est utilisé pour gérer les données asynchrones (Promise/Observable) ?**

- A) `promise`
- B) `observable`
- C) `async`
- D) `await`

<details>
<summary>Réponse</summary>
**C)** - Le pipe `async` gère automatiquement les Promises et Observables dans les templates.
</details>

---

### Question 32
**Quelle méthode doit implémenter une pipe personnalisée ?**

- A) `pipe(value: any)`
- B) `transform(value: any, args?: any)`
- C) `convert(value: any)`
- D) `process(value: any, args?: any)`

<details>
<summary>Réponse</summary>
**B)** - Une pipe implémente l'interface `PipeTransform` avec la méthode `transform()`.
</details>

---

### Question 33
**Quelle commande CLI génère une pipe Angular ?**

- A) `ng create pipe nom`
- B) `ng new pipe nom`
- C) `ng generate pipe nom`
- D) `ng add pipe nom`

<details>
<summary>Réponse</summary>
**C)** - `ng generate pipe nom` ou `ng g p nom` génère une nouvelle pipe.
</details>

---

## 📔 Services & Injection de Dépendances

### Question 34
**Quel décorateur rend une classe injectable dans Angular ?**

- A) `@Service()`
- B) `@Injectable()`
- C) `@Inject()`
- D) `@Provider()`

<details>
<summary>Réponse</summary>
**B)** - `@Injectable()` permet à Angular d'injecter ce service dans d'autres composants.
</details>

---

### Question 35
**Quelle commande génère un service Angular ?**

- A) `ng generate service product`
- B) `ng create service product`
- C) `ng new service product`
- D) `ng add service product`

<details>
<summary>Réponse</summary>
**A)** - `ng generate service product` crée un nouveau service.
</details>

---

### Question 36
**Où enregistrer un fournisseur de service pour qu'il soit disponible dans toute l'application ?**

- A) Dans chaque composant individuellement
- B) Dans le module racine
- C) Dans le fichier `main.ts`
- D) Dans le fichier `index.html`

<details>
<summary>Réponse</summary>
**B)** - Enregistrer dans le module racine assure une seule instance disponible partout (singleton).
</details>

---

### Question 37
**Comment injecter un service dans un composant ?**

- A) En l'important et l'instanciant avec `new`
- B) En l'ajoutant comme paramètre du constructeur
- C) En l'ajoutant dans le tableau `inputs`
- D) En utilisant `@Inject()` sur une propriété de classe

<details>
<summary>Réponse</summary>
**B)** - L'injection se fait via le constructeur du composant.
</details>

---

## 📚 HttpClient & RxJS

### Question 38
**Quel module faut-il importer pour utiliser `HttpClient` ?**

- A) `HttpModule`
- B) `HttpClientModule`
- C) `ClientHttpModule`
- D) `AjaxModule`

<details>
<summary>Réponse</summary>
**B)** - `HttpClientModule` doit être importé dans le module racine.
</details>

---

### Question 39
**Quel type d'objet retourne `HttpClient.get()` ?**

- A) `Promise<Response>`
- B) `Observable<Response>`
- C) `Subject<Response>`
- D) `EventEmitter<Response>`

<details>
<summary>Réponse</summary>
**B)** - Les méthodes HttpClient retournent des Observables.
</details>

---

### Question 40
**Quelle méthode permet de s'abonner à un Observable ?**

- A) `listen()`
- B) `observe()`
- C) `subscribe()`
- D) `watch()`

<details>
<summary>Réponse</summary>
**C)** - `subscribe()` permet de s'abonner à un Observable et recevoir ses émissions.
</details>

---

### Question 41
**Quelle est la différence principale entre un Observable et un Subject ?**

- A) Un Subject ne peut émettre que des erreurs
- B) Un Observable peut avoir plusieurs observateurs, un Subject un seul
- C) Un Subject peut émettre des valeurs, un Observable ne peut qu'en recevoir
- D) Un Observable ne peut avoir qu'un seul observateur, un Subject peut en avoir plusieurs

<details>
<summary>Réponse</summary>
**D)** - Un Observable est unicast (un seul subscriber), un Subject est multicast (plusieurs subscribers peuvent s'y abonner).
</details>

---

### Question 42
**Comment convertir un Observable en Promise ?**

- A) `observable.promise()`
- B) `observable.toPromise()`
- C) `Promise.from(observable)`
- D) `observable.asPromise()`

<details>
<summary>Réponse</summary>
**B)** - La méthode `toPromise()` convertit un Observable en Promise.
</details>

---

## 📖 Routage

### Question 43
**Où déclare-t-on les routes dans une application Angular moderne ?**

- A) `app.module.ts`
- B) `app.routes.ts`
- C) `router.config.ts`
- D) `angular.json`

<details>
<summary>Réponse</summary>
**B)** - Les routes sont déclarées dans `app.routes.ts` avec le type `Routes`.
</details>

---

### Question 44
**Quelle directive indique où injecter le composant correspondant à la route ?**

- A) `<router-view></router-view>`
- B) `<routing-outlet></routing-outlet>`
- C) `<router-outlet></router-outlet>`
- D) `<route-container></route-container>`

<details>
<summary>Réponse</summary>
**C)** - `<router-outlet>` est la directive qui injecte le composant de la route active.
</details>

---

### Question 45
**Quelle syntaxe de lien évite le rechargement complet de l'application ?**

- A) `<a href="/search">`
- B) `<a routerLink="/search">`
- C) `<a ngHref="/search">`
- D) `<a link="/search">`

<details>
<summary>Réponse</summary>
**B)** - `routerLink` intercepte le clic et navigue sans recharger l'application (SPA).
</details>

---

### Question 46
**Quel service permet de récupérer les paramètres de la route courante ?**

- A) `Router`
- B) `RouteParams`
- C) `ActivatedRoute`
- D) `CurrentRoute`

<details>
<summary>Réponse</summary>
**C)** - `ActivatedRoute` fournit l'accès aux paramètres via `snapshot.params`.
</details>

---

### Question 47
**Que signifie la route `**` en Angular routing ?**

- A) Route principale
- B) Route générique (wildcard) pour les URLs non trouvées
- C) Route récursive
- D) Route avec tous les paramètres

<details>
<summary>Réponse</summary>
**B)** - La route `**` est le wildcard qui capture toutes les URLs non correspondantes (page 404).
</details>

---

### Question 48
**Quel Guard empêche l'accès à une route non autorisée ?**

- A) `CanDeactivate`
- B) `CanActivate`
- C) `CanLoad`
- D) `CanAccess`

<details>
<summary>Réponse</summary>
**B)** - `CanActivate` vérifie si l'utilisateur peut accéder à la route.
</details>

---

## 📝 Formulaires

### Question 49
**Quelle directive transforme un élément `<form>` en version Angular ?**

- A) `ngForm`
- B) `formGroup`
- C) `angularForm`
- D) `reactiveForm`

<details>
<summary>Réponse</summary>
**A)** - La directive `ngForm` est automatiquement appliquée aux formulaires template-driven.
</details>

---

### Question 50
**Dans un formulaire réactif, quelle classe représente un groupe de contrôles ?**

- A) `FormArray`
- B) `FormControl`
- C) `FormGroup`
- D) `ControlGroup`

<details>
<summary>Réponse</summary>
**C)** - `FormGroup` représente un ensemble de `FormControl` dans les formulaires réactifs.
</details>

---

## 🔐 Questions Bonus Avancées

### Question 51 (Bonus)
**Quel validateur vérifie qu'un champ respecte une expression régulière ?**

- A) `Validators.match(regex)`
- B) `Validators.pattern(regex)`
- C) `Validators.regex(pattern)`
- D) `Validators.expression(regex)`

<details>
<summary>Réponse</summary>
**B)** - `Validators.pattern(p)` permet de valider contre une expression régulière.
</details>

---

### Question 52 (Bonus)
**Où enregistre-t-on un intercepteur HTTP ?**

- A) Dans le fichier `main.ts`
- B) Dans le tableau `providers` du fichier `app.config.ts`
- C) Dans le constructeur du service
- D) Dans le décorateur `@Injectable()`

<details>
<summary>Réponse</summary>
**B)** - Les intercepteurs sont enregistrés dans le tableau `providers` de `app.config.ts`.
</details>

---

### Question 53 (Bonus)
**Quelle valeur de `pathMatch` empêche une redirection infinie pour une route vide ?**

- A) `'prefix'`
- B) `'full'`
- C) `'exact'`
- D) `'strict'`

<details>
<summary>Réponse</summary>
**B)** - `pathMatch: 'full'` exige une correspondance exacte de l'URL pour la redirection.
</details>

---

### Question 54 (Bonus)
**Quel observable permet de réagir aux changements de valeur d'un formulaire réactif ?**

- A) `formChanges`
- B) `valueChanges`
- C) `statusChanges`
- D) `inputChanges`

<details>
<summary>Réponse</summary>
**B)** - `valueChanges` est un Observable qui émet à chaque modification du formulaire.
</details>

---

### Question 55 (Bonus)
**Dans quel scénario de déploiement les entêtes CORS sont-ils nécessaires ?**

- A) Déploiement combiné (même domaine)
- B) Déploiement séparé (domaines différents)
- C) Les deux scénarios
- D) Aucun des scénarios

<details>
<summary>Réponse</summary>
**B)** - CORS est nécessaire uniquement quand Angular et le backend sont sur des domaines/ports différents.
</details>

---

## 📊 Récapitulatif des Réponses

| Q   | Rép | Q   | Rép | Q   | Rép | Q   | Rép | Q   | Rép |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 1   | B   | 12  | C   | 23  | A   | 34  | B   | 45  | B   |
| 2   | A   | 13  | A   | 24  | C   | 35  | A   | 46  | C   |
| 3   | C   | 14  | B   | 25  | B   | 36  | B   | 47  | B   |
| 4   | C   | 15  | C   | 26  | B   | 37  | B   | 48  | B   |
| 5   | B   | 16  | C   | 27  | B   | 38  | B   | 49  | A   |
| 6   | C   | 17  | B   | 28  | B   | 39  | B   | 50  | C   |
| 7   | C   | 18  | C   | 29  | C   | 40  | C   | 51  | B   |
| 8   | B   | 19  | B   | 30  | B   | 41  | D   | 52  | B   |
| 9   | B   | 20  | B   | 31  | C   | 42  | B   | 53  | B   |
| 10  | C   | 21  | B   | 32  | B   | 43  | B   | 54  | B   |
| 11  | C   | 22  | A   | 33  | C   | 44  | C   | 55  | B   |

---

> 📚 **Conseil de révision** : Relisez attentivement chaque réponse incorrecte pour comprendre pourquoi elle est fausse. Les pièges sont souvent dans les détails de syntaxe !
