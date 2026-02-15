/**
 * SECTION 2: QUESTIONS EXAMENS - 60 Questions ENRICHIES
 * Inspirées des anciens examens + pièges difficiles
 */

const Section2_Exam = [
    {
        id: 1,
        question: "Quel hook est appelé juste après la création du composant ?",
        options: ["ngOnInit", "ngOnChanges", "constructor", "ngAfterViewInit"],
        correct: 2,
        explanation: "Le constructeur de la classe TypeScript est appelé en premier par JavaScript lui-même, avant même qu'Angular ne commence son cycle de vie.",
        trap: "On pense souvent à ngOnInit, mais c'est un hook Angular qui vient APRÈS l'initialisation des @Input().",
        wrongReasons: ["ngOnInit s'exécute après le constructor.", "ngOnChanges s'exécute dès qu'un @Input change.", "ngAfterViewInit s'exécute après le rendu."]
    },
    {
        id: 2,
        question: "Comment injecter un service 'DataService' dans un composant ?",
        options: ["private ds = new DataService()", "constructor(private ds: DataService)", "inject(DataService)", "Options B & C valides"],
        correct: 3,
        explanation: "Depuis Angular 14, on peut faire l'injection soit via le constructeur, soit via la fonction inject().",
        trap: "Ne jamais faire 'new Service()' car cela court-circuite le système d'injection.",
        wrongReasons: ["new DataService() crée une instance isolée.", "B est la méthode classique.", "C est la méthode moderne."]
    },
    {
        id: 3,
        question: "Que se passe-t-il si on oublie de s'abonner à un Observable HttpClient.get() ?",
        options: ["La requête est lancée en arrière-plan", "Rien ne se passe", "Une erreur est levée", "L'application plante"],
        correct: 1,
        explanation: "Les Observables de HttpClient sont 'froids'. Ils ne déclenchent l'action que lorsqu'il y a un abonné.",
        trap: "Pas de subscribe = pas de requête réseau ! C'est l'oubli le plus fréquent.",
        wrongReasons: ["Angular ne lance rien sans subscribe.", "Aucune erreur n'est levée.", "L'app continue normalement."]
    },
    {
        id: 4,
        question: "Quel décorateur permet d'écouter les événements sur l'élément hôte ?",
        options: ["@HostBinding", "@HostListener", "@Output", "@ViewChild"],
        correct: 1,
        explanation: "@HostListener permet d'écouter des événements comme 'click' sur l'élément où la directive est appliquée.",
        trap: "Ne pas confondre avec @HostBinding qui modifie une PROPRIÉTÉ.",
        wrongReasons: ["@HostBinding modifie l'état.", "@Output émet vers le parent.", "@ViewChild accède aux enfants."]
    },
    {
        id: 5,
        question: "Laquelle de ces syntaxes définit une route avec un paramètre obligatoire ?",
        options: ["{ path: 'details/:id' }", "{ path: 'details/{id}' }", "{ path: 'details?id=' }", "{ path: 'details/id' }"],
        correct: 0,
        explanation: "Le symbole ':' préfixe les paramètres dynamiques dans le Router Angular.",
        trap: "Les accolades { } sont utilisées dans Spring/Java, pas en Angular.",
        wrongReasons: ["Accolades = syntaxe incorrecte.", "?id= = QueryParam.", "details/id = chaîne littérale."]
    },
    {
        id: 6,
        question: "Quelle commande permet de surveiller les tests unitaires en temps réel ?",
        options: ["ng test", "ng build", "ng serve", "ng test --watch=false"],
        correct: 0,
        explanation: "Par défaut, 'ng test' lance Karma en mode 'watch'.",
        trap: "En CI/CD, on doit forcer --watch=false pour ne pas bloquer le pipeline.",
        wrongReasons: ["ng build compile uniquement.", "ng serve lance l'app.", "--watch=false désactive le temps réel."]
    },
    {
        id: 7,
        question: "Un validateur synchrone doit retourner :",
        options: ["true ou false", "null ou un objet d'erreur", "un Observable", "void"],
        correct: 1,
        explanation: "En Angular, 'null' signifie 'VALIDE'. Une erreur retourne un objet décrivant l'erreur.",
        trap: "On veut souvent retourner un booléen, mais Angular a besoin de l'objet d'erreur.",
        wrongReasons: ["Booléen = Angular ne sait pas l'erreur.", "Observable = validateurs async.", "void = aucune info."]
    },
    {
        id: 8,
        question: "Comment définir un service accessible uniquement dans un module ?",
        options: ["providedIn: 'root'", "Le mettre dans providers: [] du module", "Le mettre dans declarations: []", "C'est impossible"],
        correct: 1,
        explanation: "En le déclarant dans le tableau 'providers' du module, vous limitez son scope.",
        trap: "'root' est recommandé pour le Tree Shaking mais crée un singleton global.",
        wrongReasons: ["providedIn: 'root' = singleton global.", "declarations = composants uniquement.", "Angular est flexible."]
    },
    {
        id: 9,
        question: "Que fait switchMap quand un nouvel événement arrive ?",
        options: ["Il cumule les résultats", "Il ignore le nouveau", "Il annule l'Observable précédent", "Il attend la fin du précédent"],
        correct: 2,
        explanation: "switchMap 'bascule' vers le nouvel Observable et annule le précédent. Idéal pour l'auto-complétion.",
        trap: "Dangereux pour les opérations d'écriture car elles peuvent être annulées.",
        wrongReasons: ["mergeMap cumule.", "exhaustMap ignore le nouveau.", "concatMap attend."]
    },
    {
        id: 10,
        question: "Quelle interface permet de transformer une donnée avant son affichage ?",
        options: ["Component", "PipeTransform", "Injectable", "OnInit"],
        correct: 1,
        explanation: "Pour créer un Custom Pipe, implémenter la méthode 'transform' de PipeTransform.",
        trap: "Les pipes doivent être 'purs' pour éviter les recalculs inutiles.",
        wrongReasons: ["Component = vue.", "Injectable = services.", "OnInit = initialisation."]
    },
    {
        id: 11,
        question: "Quel fichier configure le comportement global de l'Angular CLI ?",
        options: ["angular.json", "package.json", "tsconfig.json", "styles.css"],
        correct: 0,
        explanation: "angular.json définit les chemins d'assets, configurations de build et styles globaux.",
        trap: "Confusion avec package.json qui gère les dépendances npm.",
        wrongReasons: ["package.json = bibliothèques npm.", "tsconfig.json = règles TypeScript.", "styles.css = code CSS."]
    },
    {
        id: 12,
        question: "Que fait le mode 'AOT' (Ahead-Of-Time) ?",
        options: ["Compile le code dans le navigateur", "Compile le code pendant le build", "Accélère le réseau", "Réduit les images"],
        correct: 1,
        explanation: "L'AOT traduit les templates en JS performant AVANT le téléchargement par le navigateur.",
        trap: "Le mode inverse est JIT (Just-In-Time), utilisé en développement.",
        wrongReasons: ["JIT compile dans le navigateur.", "Le réseau dépend du serveur.", "L'AOT ne touche pas aux images."]
    },
    {
        id: 13,
        question: "Comment désactiver un bouton si un formulaire est invalide ?",
        options: ["[disabled]=\"form.invalid\"", "(disabled)=\"!form.valid\"", "[attr.disabled]=\"!form.valid\"", "Options A & C valides"],
        correct: 3,
        explanation: "[disabled] est une propriété DOM. On peut l'utiliser directement ou via l'attribut.",
        trap: "(disabled) avec parenthèses est un Event Binding, ce qui n'a aucun sens.",
        wrongReasons: ["B = syntaxe fausse (Event binding).", "A est la plus standard."]
    },
    {
        id: 14,
        question: "Quel type de Subject émet une valeur initiale TOUT DE SUITE à l'abonnement ?",
        options: ["Subject", "BehaviorSubject", "ReplaySubject", "AsyncSubject"],
        correct: 1,
        explanation: "Le BehaviorSubject requiert une valeur initiale et la renvoie immédiatement.",
        trap: "Le Subject classique n'émet rien à l'abonnement.",
        wrongReasons: ["Subject n'a pas de mémoire.", "ReplaySubject peut émettre N valeurs passées.", "AsyncSubject émet à la complétion."]
    },
    {
        id: 15,
        question: "Comment intercepter une erreur HTTP et proposer une valeur de secours ?",
        options: ["try/catch", "catchError()", "throwError()", "onError()"],
        correct: 1,
        explanation: "catchError() intercepte les échecs et doit retourner un nouvel Observable.",
        trap: "Si vous ne retournez pas d'Observable dans catchError, le code plantera.",
        wrongReasons: ["try/catch ne fonctionne pas sur les flux RxJS.", "throwError() relance une erreur.", "onError n'existe pas."]
    },
    {
        id: 16,
        question: "Quelle directive permet de boucler sur un tableau ?",
        options: ["*ngIf", "*ngFor", "[ngFor]", "*ngLoop"],
        correct: 1,
        explanation: "*ngFor='let item of items' crée un élément DOM pour chaque entrée.",
        trap: "Utilisez trackBy pour optimiser si la liste change souvent.",
        wrongReasons: ["*ngIf est conditionnel.", "[ngFor] est une syntaxe incorrecte.", "*ngLoop n'existe pas."]
    },
    {
        id: 17,
        question: "@Input() data; - Si le parent change 'data', quel hook est appelé ?",
        options: ["ngOnInit", "ngAfterViewInit", "ngOnChanges", "ngDoCheck"],
        correct: 2,
        explanation: "ngOnChanges reçoit un objet 'SimpleChanges' décrivant les valeurs passées et actuelles.",
        trap: "ngOnChanges ne se déclenche que si la RÉFÉRENCE de l'objet change.",
        wrongReasons: ["ngOnInit ne s'exécute qu'une fois.", "ngAfterViewInit concerne le rendu.", "ngDoCheck est trop coûteux."]
    },
    {
        id: 18,
        question: "Comment accéder au contenu inséré entre les balises <my-comp>Contenu</my-comp> ?",
        options: ["<ng-content></ng-content>", "{{ content }}", "<app-view></app-view>", "@Input() content"],
        correct: 0,
        explanation: "C'est le mécanisme de 'Content Projection'.",
        trap: "Utilisez des sélecteurs CSS dans ng-content pour une projection multiple.",
        wrongReasons: ["{{ }} affiche des variables.", "app-view n'existe pas par défaut.", "@Input reçoit des variables."]
    },
    {
        id: 19,
        question: "Que fait 'ng build --base-href /app/' ?",
        options: ["Change le nom du dossier", "Définit le chemin racine des liens", "Optimise le code", "Rien"],
        correct: 1,
        explanation: "Cela modifie la balise <base href> dans l'index.html final.",
        trap: "Un mauvais base-href cassera tous vos imports JS et CSS (Erreurs 404).",
        wrongReasons: ["Le dossier s'appelle toujours 'dist'.", "L'optimisation dépend d'autres flags.", "C'est vital pour le déploiement."]
    },
    {
        id: 20,
        question: "Quel opérateur RxJS retarde les émissions d'un temps donné ?",
        options: ["delay", "debounceTime", "throttleTime", "timer"],
        correct: 0,
        explanation: "delay(1000) décale tout le flux d'une seconde.",
        trap: "Confusion avec debounceTime qui attend un silence avant d'émettre.",
        wrongReasons: ["debounceTime attend un répit.", "throttleTime limite les émissions.", "timer crée un nouvel Observable."]
    },
    {
        id: 21,
        question: "Dans un formulaire réactif, comment obtenir la valeur actuelle ?",
        options: ["form.value", "form.getRawValue()", "form.getValue()", "Options A & B valides"],
        correct: 3,
        explanation: "form.value exclut les champs désactivés. getRawValue() inclut tout.",
        trap: "Si vous désactivez un champ et utilisez .value, sa donnée sera absente !",
        wrongReasons: ["form.getValue() n'existe pas.", "A et B sont valides selon le besoin."]
    },
    {
        id: 22,
        question: "Quel est le but principal de Zone.js ?",
        options: ["Gérer le routing", "Intercepter les tâches asynchrones", "Compiler le TS", "Styler l'app"],
        correct: 1,
        explanation: "Zone.js permet à Angular de savoir quand une opération asynchrone est terminée.",
        trap: "Depuis Angular 18, on peut créer des applications 'Zoneless'.",
        wrongReasons: ["Le routage est géré par @angular/router.", "La compilation par le CLI.", "Le style par CSS."]
    },
    {
        id: 23,
        question: "Comment s'assurer qu'un composant n'est chargé que si l'utilisateur est admin ?",
        options: ["*ngIf='isAdmin'", "Route Guard: canActivate", "Dans le constructeur", "Option A & B complémentaires"],
        correct: 3,
        explanation: "Le Guard canActivate empêche l'URL d'être accédée. Le *ngIf cache visuellement.",
        trap: "*ngIf seul n'est pas une sécurité : l'URL peut être tapée directement.",
        wrongReasons: ["Le constructeur est trop tard.", "Seul B assure la sécurité de l'accès."]
    },
    {
        id: 24,
        question: "Quelle méthode déclenche manuellement la détection de changements ?",
        options: ["detectChanges()", "markForCheck()", "update()", "Options A & B"],
        correct: 3,
        explanation: "detectChanges() lance un cycle immédiatement. markForCheck() marque pour le prochain cycle.",
        trap: "Évitez detectChanges() à outrance, cela impacte les performances.",
        wrongReasons: ["update() n'existe pas.", "A et B sont les outils officiels du ChangeDetectorRef."]
    },
    {
        id: 25,
        question: "Quel décorateur définit une variable de référence pour le CSS (Hôte) ?",
        options: ["@HostBinding", "@HostListener", "@Style", "@Css"],
        correct: 0,
        explanation: "@HostBinding('class.active') isActive = true; applique dynamiquement la classe.",
        trap: "C'est plus propre que de manipuler le DOM via ElementRef.",
        wrongReasons: ["@HostListener écoute.", "@Style et @Css n'existent pas."]
    },
    {
        id: 26,
        question: "Quelle directive permet d'afficher un template réutilisable par son nom ?",
        options: ["ng-template", "ngTemplateOutlet", "ng-container", "ng-content"],
        correct: 1,
        explanation: "ngTemplateOutlet permet de 'cloner' un <ng-template> défini ailleurs.",
        trap: "Indispensable pour créer des composants de type 'DataTable' ou 'Dropdown'.",
        wrongReasons: ["ng-template définit mais ne l'affiche pas.", "ng-container est invisible.", "ng-content projette du contenu."]
    },
    {
        id: 27,
        question: "Comment réagir à l'appui d'une touche spécifique 'Entrée' ?",
        options: ["(keydown.enter)=\"...\"", "(keypress)=\"...\"", "(keydown)=\"...\"", "keyup(13)"],
        correct: 0,
        explanation: "Angular propose des alias simplifiés pour les touches claviers.",
        trap: "Évitez event.keyCode === 13 qui est obsolète.",
        wrongReasons: ["keydown seul force à vérifier la touche.", "keyup(13) n'est pas une syntaxe Angular."]
    },
    {
        id: 28,
        question: "Que signifie 'providedIn: 'any'' ?",
        options: ["Instance unique", "Instance par module lazy", "Instance par composant", "Erreur"],
        correct: 1,
        explanation: "Cela crée une instance différente pour chaque module lazy-loaded.",
        trap: "Très rarement utilisé, préférez 'root' dans 99% des cas.",
        wrongReasons: ["'root' = instance unique.", "Instance par composant via providers dans @Component."]
    },
    {
        id: 29,
        question: "Quel est le rôle du 'Pipe' dans une application Angular ?",
        options: ["Stocker les données", "Transformer les données pour l'affichage", "Naviguer entre les pages", "Gérer les formulaires"],
        correct: 1,
        explanation: "Un pipe prend une valeur en entrée et renvoie une valeur transformée pour la présentation.",
        trap: "Les pipes sont faits pour la VUE. Pour la logique métier, transformez dans le service.",
        wrongReasons: ["Les données sont stockées dans des services.", "Le routing gère la navigation.", "ReactiveFormsModule gère les formulaires."]
    },
    {
        id: 30,
        question: "Quelle commande crée un module avec routing inclus ?",
        options: ["ng g m my-mod", "ng g m my-mod --routing", "ng g m my-mod --routes", "ng g m my-mod -r"],
        correct: 1,
        explanation: "Le flag --routing génère automatiquement le fichier my-mod-routing.module.ts.",
        trap: "Si vous l'oubliez, vous devrez créer les fichiers manuellement.",
        wrongReasons: ["A crée un module vide.", "--routes n'est pas le bon flag.", "-r est souvent pour récursif."]
    },
    {
        id: 31,
        question: "Comment protéger une application Angular contre les attaques XSS ?",
        options: ["Angular le fait automatiquement", "Utiliser un VPN", "Ne rien faire", "Utiliser DomSanitizer"],
        correct: 0,
        explanation: "Angular traite par défaut toutes les valeurs comme non fiables.",
        trap: "Si vous utilisez innerHTML avec des données utilisateur, utilisez DomSanitizer.",
        wrongReasons: ["Un VPN ne protège pas du XSS.", "DomSanitizer contourne la protection."]
    },
    {
        id: 32,
        question: "Quel décorateur est requis pour chaque classe de composant ?",
        options: ["@NgModule", "@Component", "@Injectable", "@Pipe"],
        correct: 1,
        explanation: "C'est lui qui définit le sélecteur, le template et les styles.",
        trap: "Sans lui, la classe n'est qu'un simple objet TS sans sens pour Angular.",
        wrongReasons: ["@NgModule organise les blocs.", "@Injectable pour les services.", "@Pipe pour les pipes."]
    },
    {
        id: 33,
        question: "Comment passer des données d'un parent vers un enfant ?",
        options: ["@Output", "@Input", "Injection", "EventEmitter"],
        correct: 1,
        explanation: "Property Binding [data]='value' via @Input.",
        trap: "Confondre Direction Parent->Enfant vs Enfant->Parent.",
        wrongReasons: ["@Output émet vers le parent.", "Injection pour services globaux.", "EventEmitter est l'outil de @Output."]
    },
    {
        id: 34,
        question: "Quel hook est appelé juste avant ngOnInit ?",
        options: ["constructor", "ngOnChanges", "ngDoCheck", "ngAfterContentInit"],
        correct: 1,
        explanation: "ngOnChanges s'exécute en premier dès que les @Input sont disponibles.",
        trap: "Le constructor n'est pas un hook Angular, c'est du JS/TS.",
        wrongReasons: ["ngDoCheck vient après.", "ngAfterContentInit vient après."]
    },
    {
        id: 35,
        question: "Quel module Angular permet d'envoyer des événements utilisateur ?",
        options: ["FormsModule", "HttpClient", "CoreModule", "EventEmitter"],
        correct: 3,
        explanation: "EventEmitter est utilisé avec @Output pour émettre des événements personnalisés.",
        trap: "EventEmitter est optimisé pour les interactions avec le moteur de rendu Angular.",
        wrongReasons: ["FormsModule gère les entrées.", "HttpClient gère le réseau."]
    },
    {
        id: 36,
        question: "Comment lier une propriété HTML à une variable TS ?",
        options: ["(property)", "[property]", "{{property}}", "A et B"],
        correct: 1,
        explanation: "Property Binding [target]='source'.",
        trap: "Interpolation {{ }} fonctionne aussi mais [ ] est plus performant pour les non-string.",
        wrongReasons: ["( ) est pour les événements."]
    },
    {
        id: 37,
        question: "Que signifie AOT ?",
        options: ["Always On Time", "Ahead Of Time", "All Over Testing", "Angular On Terminal"],
        correct: 1,
        explanation: "Compilation avant le temps de chargement pour plus de vitesse.",
        trap: "L'AOT détecte les erreurs de template au moment du build.",
        wrongReasons: ["Les autres sont des inventions."]
    },
    {
        id: 38,
        question: "Comment définir un style uniquement pour un composant ?",
        options: ["styles: []", "styleUrls: []", "Encapsulation: Emulated", "All"],
        correct: 3,
        explanation: "Angular utilise ViewEncapsulation.Emulated par défaut pour isoler les styles.",
        trap: "ViewEncapsulation.None fera fuir votre CSS sur toute l'application !",
        wrongReasons: ["A et B fournissent le CSS, C est le mécanisme d'isolation."]
    },
    {
        id: 39,
        question: "Quelle commande installe Angular CLI ?",
        options: ["npm install -g @angular/cli", "ng add cli", "npm init angular", "cli install"],
        correct: 0,
        explanation: "Installation globale via npm.",
        trap: "N'oubliez pas le flag -g, sinon local au projet.",
        wrongReasons: ["ng add s'utilise une fois le CLI installé."]
    },
    {
        id: 40,
        question: "A quoi sert le fichier polyfills.ts ?",
        options: ["Gérer les routes", "Compatibilité IE11/vieux navigateurs", "Optimiser JS", "Stocker les API"],
        correct: 1,
        explanation: "Ajoute des fonctions manquantes aux anciens moteurs JS.",
        trap: "Avec les navigateurs modernes 'Evergreen', ce fichier est devenu presque vide.",
        wrongReasons: ["Les autres sont des rôles différents."]
    },
    {
        id: 41,
        question: "Quelle est la différence entre Template-Driven et Reactive Forms ?",
        options: ["Aucune différence", "Logique dans le template vs TS", "Un est plus rapide", "Un est déprécié"],
        correct: 1,
        explanation: "Template-Driven utilise ngModel dans le HTML. Reactive Forms utilise FormGroup/FormControl en TS.",
        trap: "Reactive Forms est recommandé pour les scénarios complexes et testables.",
        wrongReasons: ["Les deux approches sont valides.", "Les performances sont similaires.", "Aucun n'est déprécié."]
    },
    {
        id: 42,
        question: "Comment importer un module externe dans Angular ?",
        options: ["Dans declarations", "Dans imports", "Dans providers", "Dans exports"],
        correct: 1,
        explanation: "Le tableau 'imports' du @NgModule reçoit les modules externes.",
        trap: "declarations est réservé aux composants/directives/pipes de CE module.",
        wrongReasons: ["declarations = composants locaux.", "providers = services.", "exports = ce qu'on rend disponible aux autres."]
    },
    {
        id: 43,
        question: "Quel opérateur RxJS combine plusieurs Observables en attendant que tous finissent ?",
        options: ["merge", "concat", "forkJoin", "zip"],
        correct: 2,
        explanation: "forkJoin attend que tous les Observables émettent leur dernière valeur avant d'émettre un tableau.",
        trap: "Si un Observable échoue, tout forkJoin échoue !",
        wrongReasons: ["merge émet au fur et à mesure.", "concat les exécute séquentiellement.", "zip combine par index."]
    },
    {
        id: 44,
        question: "Comment créer un validateur personnalisé asynchrone ?",
        options: ["Retourner un booléen", "Retourner un Observable", "Utiliser Validators.async", "C'est impossible"],
        correct: 1,
        explanation: "Un validateur async retourne un Observable qui émet null (valide) ou un objet d'erreur.",
        trap: "N'oubliez pas de marquer le champ comme 'pending' pendant la validation.",
        wrongReasons: ["Booléen = validateur sync.", "Validators.async n'existe pas."]
    },
    {
        id: 45,
        question: "Quel service permet de stocker des données côté client ?",
        options: ["HttpClient", "LocalStorage (API native)", "RouterModule", "FormsModule"],
        correct: 1,
        explanation: "localStorage et sessionStorage sont des API natives du navigateur.",
        trap: "Angular n'a pas de service intégré pour le stockage local. Utilisez l'API native ou une lib.",
        wrongReasons: ["HttpClient est pour le réseau.", "RouterModule pour la navigation.", "FormsModule pour les formulaires."]
    },
    {
        id: 46,
        question: "Quel est le rôle de 'trackBy' dans *ngFor ?",
        options: ["Trier les éléments", "Améliorer les performances", "Filtrer les éléments", "Compter les éléments"],
        correct: 1,
        explanation: "trackBy permet à Angular d'identifier quels éléments ont changé via un ID unique.",
        trap: "Sans trackBy, Angular recrée tout le DOM à chaque changement de liste.",
        wrongReasons: ["Pour trier, utilisez un pipe.", "Pour filtrer, traitez dans le TS."]
    },
    {
        id: 47,
        question: "Comment partager des données entre composants sans lien parent-enfant ?",
        options: ["@Input/@Output", "Un service avec BehaviorSubject", "localStorage", "Toutes les réponses"],
        correct: 3,
        explanation: "Le service avec Subject est la méthode la plus propre pour l'état partagé.",
        trap: "localStorage persiste au-delà de la session mais n'est pas réactif.",
        wrongReasons: ["@Input/@Output nécessite un lien direct.", "Toutes peuvent fonctionner selon le contexte."]
    },
    {
        id: 48,
        question: "Que fait le pipe 'async' ?",
        options: ["Transforme en majuscules", "S'abonne automatiquement à un Observable", "Retarde l'affichage", "Formate les dates"],
        correct: 1,
        explanation: "Le pipe async s'abonne ET se désabonne automatiquement à la destruction du composant.",
        trap: "C'est la méthode recommandée pour éviter les fuites de mémoire.",
        wrongReasons: ["uppercase transforme en majuscules.", "date formate les dates."]
    },
    {
        id: 49,
        question: "Comment lazy-loader un module ?",
        options: ["imports: [MyModule]", "loadChildren: () => import(...).then(m => m.MyModule)", "lazyLoad: true", "Dans providers"],
        correct: 1,
        explanation: "loadChildren utilise l'import dynamique pour charger le module à la demande.",
        trap: "Le module lazy-loaded a son propre injecteur, donc ses propres instances de services.",
        wrongReasons: ["imports charge immédiatement.", "lazyLoad n'existe pas."]
    },
    {
        id: 50,
        question: "Quel décorateur permet d'accéder au contenu projeté ?",
        options: ["@ViewChild", "@ContentChild", "@Input", "@Inject"],
        correct: 1,
        explanation: "@ContentChild accède aux éléments insérés via <ng-content>.",
        trap: "@ViewChild accède aux éléments du template du composant lui-même.",
        wrongReasons: ["@ViewChild = template propre.", "@Input = données du parent.", "@Inject = token DI."]
    },
    {
        id: 51,
        question: "Comment définir une route par défaut ?",
        options: ["path: '/'", "path: ''", "path: 'default'", "path: '*'"],
        correct: 1,
        explanation: "path: '' correspond à l'URL racine de l'application.",
        trap: "path: '*' n'existe pas en Angular. Utilisez path: '**' pour le wildcard.",
        wrongReasons: ["path: '/' = syntaxe incorrecte.", "path: 'default' = URL littérale."]
    },
    {
        id: 52,
        question: "Quel Guard empêche de quitter une page si des données non sauvegardées existent ?",
        options: ["canActivate", "canDeactivate", "canLoad", "resolve"],
        correct: 1,
        explanation: "canDeactivate permet de demander confirmation avant de quitter une route.",
        trap: "Utile pour les formulaires avec des modifications non enregistrées.",
        wrongReasons: ["canActivate = accès à la route.", "canLoad = chargement lazy.", "resolve = pré-chargement de données."]
    },
    {
        id: 53,
        question: "Comment passer des données à une route via son URL ?",
        options: ["Query params: ?id=1", "Route params: /user/1", "data: { id: 1 }", "Toutes les réponses"],
        correct: 3,
        explanation: "Angular supporte les query params, route params et data statique dans la configuration de route.",
        trap: "Route params sont obligatoires, query params sont optionnels.",
        wrongReasons: ["Toutes les méthodes sont valides selon le cas d'usage."]
    },
    {
        id: 54,
        question: "Quel est le rôle de 'resolve' dans une route ?",
        options: ["Protéger l'accès", "Pré-charger des données", "Rediriger", "Valider le formulaire"],
        correct: 1,
        explanation: "Un resolver charge les données AVANT que le composant ne soit instancié.",
        trap: "Le composant ne s'affiche pas tant que le resolver n'a pas terminé.",
        wrongReasons: ["canActivate protège.", "redirectTo redirige."]
    },
    {
        id: 55,
        question: "Comment créer un intercepteur HTTP ?",
        options: ["Implémenter HttpInterceptor", "Étendre HttpClient", "Utiliser catchError", "Dans le template"],
        correct: 0,
        explanation: "Un intercepteur implémente HttpInterceptor et est enregistré avec HTTP_INTERCEPTORS.",
        trap: "L'intercepteur s'applique à TOUTES les requêtes HTTP de l'app.",
        wrongReasons: ["HttpClient n'est pas extensible.", "catchError gère les erreurs ponctuelles."]
    },
    {
        id: 56,
        question: "Quel est l'ordre d'exécution des hooks de cycle de vie ?",
        options: ["OnInit -> OnChanges -> AfterViewInit", "OnChanges -> OnInit -> AfterViewInit", "AfterViewInit -> OnInit -> OnChanges", "OnInit -> AfterViewInit -> OnChanges"],
        correct: 1,
        explanation: "OnChanges s'exécute d'abord (si @Input), puis OnInit, puis AfterViewInit.",
        trap: "OnChanges est appelé AVANT OnInit si des @Input existent.",
        wrongReasons: ["L'ordre est crucial à connaître pour l'examen."]
    },
    {
        id: 57,
        question: "Comment rendre un composant standalone (Angular 14+) ?",
        options: ["standalone: true", "module: false", "independent: true", "noModule: true"],
        correct: 0,
        explanation: "standalone: true dans le décorateur @Component élimine le besoin de NgModule.",
        trap: "Les imports sont déclarés directement dans le décorateur @Component.",
        wrongReasons: ["Les autres options n'existent pas."]
    },
    {
        id: 58,
        question: "Quel opérateur RxJS permet d'ignorer les nouvelles valeurs tant que la précédente n'est pas terminée ?",
        options: ["switchMap", "mergeMap", "exhaustMap", "concatMap"],
        correct: 2,
        explanation: "exhaustMap ignore les nouvelles valeurs jusqu'à ce que l'Observable courant soit complet.",
        trap: "Idéal pour éviter les doubles soumissions de formulaire.",
        wrongReasons: ["switchMap annule.", "mergeMap cumule.", "concatMap met en file d'attente."]
    },
    {
        id: 59,
        question: "Comment accéder aux enfants directs d'un composant dans le template ?",
        options: ["@ViewChildren", "@ContentChildren", "@Input", "@Query"],
        correct: 0,
        explanation: "@ViewChildren accède à une liste d'éléments du template propre au composant.",
        trap: "@ContentChildren accède au contenu projeté, pas au template.",
        wrongReasons: ["@ContentChildren = contenu projeté.", "@Query n'existe pas."]
    },
    {
        id: 60,
        question: "Quel est le rôle de 'ngOnDestroy' ?",
        options: ["Initialiser le composant", "Nettoyer les ressources", "Détecter les changements", "Afficher le template"],
        correct: 1,
        explanation: "ngOnDestroy est appelé juste avant la destruction du composant. Idéal pour se désabonner.",
        trap: "Si vous ne vous désabonnez pas, vous aurez des fuites de mémoire.",
        wrongReasons: ["ngOnInit initialise.", "Change detection détecte.", "Le template est affiché par le rendering."]
    }
];

window.Section2_Exam = Section2_Exam;
