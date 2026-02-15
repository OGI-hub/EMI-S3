/**
 * SECTION 1: COURS ANGULAR (PART 1 & 2) - 40 Questions ENRICHIES
 * Focus sur les bases, les décorateurs, les pipes et le cycle de vie.
 */

const Section1_Course = [
    {
        id: 1,
        question: "Quel décorateur est obligatoire pour définir un composant Angular ?",
        options: ["@Directive()", "@Component()", "@Injectable()", "@NgModule()"],
        correct: 1,
        explanation: "Le décorateur @Component() transforme une classe TypeScript en composant Angular en lui associant un template HTML et des styles.",
        trap: "On confond souvent @Component avec @Directive. Un composant EST une directive, mais avec un template.",
        wrongReasons: [
            "@Directive() définit un comportement sans vue (template).",
            "@Injectable() est réservé aux services pour l'injection de dépendances.",
            "@NgModule() sert à organiser les blocs fonctionnels de l'app, pas les composants individuels."
        ]
    },
    {
        id: 2,
        question: "Dans quel fichier déclare-t-on habituellement les routes de l'application ?",
        options: ["app.module.ts", "app-routing.module.ts", "index.html", "main.ts"],
        correct: 1,
        explanation: "Bien qu'on puisse les mettre dans app.module.ts, la convention Angular est d'utiliser un fichier dédié nommé app-routing.module.ts.",
        trap: "Ne pas confondre avec index.html qui est le point d'entrée statique sans logique de routing.",
        wrongReasons: [
            "app.module.ts importe le routing mais ne devrait pas contenir la liste brute des routes pour plus de clarté.",
            "index.html contient uniquement la balise racine <app-root>.",
            "main.ts sert uniquement au bootstrap (lancement) de l'application."
        ]
    },
    {
        id: 3,
        question: "Quelle directive est utilisée pour l'affichage conditionnel ?",
        options: ["*ngFor", "*ngIf", "[ngClass]", "[ngStyle]"],
        correct: 1,
        explanation: "*ngIf permet d'ajouter ou de supprimer un élément du DOM selon une expression booléenne.",
        trap: "L'astérisque (*) est CRUCIAL car c'est une directive structurelle qui modifie le DOM.",
        wrongReasons: [
            "*ngFor sert à itérer sur des listes (boucles).",
            "[ngClass] modifie les classes CSS, il ne supprime pas l'élément du DOM.",
            "[ngStyle] modifie les styles inline, l'élément reste présent même si 'hidden'."
        ]
    },
    {
        id: 4,
        question: "Comment définit-on un service en Angular ?",
        options: ["@Service()", "@Component()", "@Injectable()", "@Directive()"],
        correct: 2,
        explanation: "@Injectable() permet à Angular d'injecter ce service (ou d'autres dépendances dans ce service) via le mécanisme de DI.",
        trap: "@Service() N'EXISTE PAS en Angular (c'est en Spring/Java).",
        wrongReasons: [
            "@Service() est une confusion fréquente avec d'autres frameworks.",
            "@Component() crée une vue, ce qui est l'opposé d'un service.",
            "@Directive() sert à modifier le comportement d'éléments existants."
        ]
    },
    {
        id: 5,
        question: "Quel opérateur RxJS est utilisé pour transformer les données d'un flux ?",
        options: ["filter", "tap", "map", "subscribe"],
        correct: 2,
        explanation: "L'opérateur map() permet de modifier chaque valeur émise par un Observable avant qu'elle n'atteigne l'abonné.",
        trap: "subscribe n'est pas un opérateur, c'est la méthode qui déclenche l'exécution du flux.",
        wrongReasons: [
            "filter() sert à laisser passer ou bloquer certaines valeurs (booléen).",
            "tap() sert aux 'effets de bord' (ex: console.log) sans modifier la donnée.",
            "subscribe() est l'étape finale, pas une transformation."
        ]
    },
    {
        id: 6,
        question: "Quel hook de cycle de vie est appelé juste après le constructeur ?",
        options: ["ngAfterViewInit", "ngOnChanges", "ngOnInit", "ngOnDestroy"],
        correct: 2,
        explanation: "ngOnInit est l'endroit idéal pour initialiser les données car les @Input() sont déjà disponibles à ce stade.",
        trap: "Le constructeur est une fonction TypeScript, ngOnInit est un hook Angular. Ne faites pas d'appels HTTP dans le constructeur !",
        wrongReasons: [
            "ngAfterViewInit s'exécute beaucoup plus tard, une fois que la vue est prête.",
            "ngOnChanges s'exécute avant ngOnInit mais seulement si des @Input changent.",
            "ngOnDestroy est le tout dernier hook avant la suppression."
        ]
    },
    {
        id: 7,
        question: "Comment passer une donnée d'un composant parent à un enfant ?",
        options: ["@Output()", "@Input()", "EventEmitter", "Injectable"],
        correct: 1,
        explanation: "Le décorateur @Input() crée une propriété d'entrée que le parent peut lier via le Property Binding [prop]=\"valeur\".",
        trap: "Confondre Input (vers l'intérieur) et Output (vers l'extérieur).",
        wrongReasons: [
            "@Output() sert à envoyer des messages vers le parent.",
            "EventEmitter est l'outil utilisé par @Output.",
            "Injectable est pour les services, pas pour la communication directe parent-enfant."
        ]
    },
    {
        id: 8,
        question: "Quelle est la syntaxe correcte pour le Two-Way Data Binding ?",
        options: ["{{ value }}", "[value]", "(value)", "[(ngModel)]"],
        correct: 3,
        explanation: "La syntaxe 'banana in a box' [( )] combine le Property Binding [ ] et l'Event Binding ( ).",
        trap: "ngModel nécessite l'import obligatoire de FormsModule dans le module.",
        wrongReasons: [
            "{{ }} est l'interpolation (lecture seule).",
            "[ ] est le Property Binding (Parent -> Enfant uniquement).",
            "( ) est l'Event Binding (Enfant -> Parent uniquement)."
        ]
    },
    {
        id: 9,
        question: "À quoi sert le fichier polyfills.ts ?",
        options: ["Gérer les styles", "Compatibilité navigateurs", "Configurer les routes", "Déclarer les services"],
        correct: 1,
        explanation: "Les polyfills ajoutent des fonctionnalités modernes aux navigateurs plus anciens qui ne les supportent pas nativement.",
        trap: "Aujourd'hui, avec Evergreen browsers, ce fichier est moins critique mais reste présent.",
        wrongReasons: [
            "Les styles sont dans styles.css ou les fichiers composants.",
            "Les routes ont leur propre module dédié.",
            "Les services sont déclarés via @Injectable."
        ]
    },
    {
        id: 10,
        question: "Quel pipe transformerait 'ANGULAR' en 'angular' ?",
        options: ["uppercase", "lowercase", "titlecase", "json"],
        correct: 1,
        explanation: "Le pipe lowercase transforme toute la chaîne en minuscules.",
        trap: "N'oubliez pas que les pipes ne modifient pas la variable originale, seulement l'affichage.",
        wrongReasons: [
            "uppercase ferait l'inverse (tout en majuscules).",
            "titlecase mettrait juste la première lettre en majuscule.",
            "json sert à débugger des objets dans le template."
        ]
    },
    {
        id: 11,
        question: "Quelle commande CLI crée un nouveau composant ?",
        options: ["ng new component", "ng generate component", "ng create component", "ng add component"],
        correct: 1,
        explanation: "La commande 'ng generate component mon-nom' (ou 'ng g c') crée les 4 fichiers du composant.",
        trap: "ng new sert à créer un PROJET entier, pas un composant.",
        wrongReasons: [
            "ng new crée un nouveau dossier projet.",
            "ng create n'est pas une commande standard Angular CLI.",
            "ng add sert à installer des bibliothèques externes (ex: Angular Material)."
        ]
    },
    {
        id: 12,
        question: "Quel symbole préfixe les directives structurelles ?",
        options: ["@", "#", "*", "&"],
        correct: 2,
        explanation: "L'astérisque (*) est un sucre syntaxique pour <ng-template>. Il indique que la directive modifie la structure du DOM.",
        trap: "Si vous l'oubliez (ex: [ngIf]), Angular cherchera une directive d'attribut et cela ne fonctionnera pas.",
        wrongReasons: [
            "@ est pour les décorateurs TS.",
            "# définit une variable de référence locale dans le template.",
            "& n'a pas de signification spéciale en Angular."
        ]
    },
    {
        id: 13,
        question: "Où définit-on les métadonnées d'un composant (comme son template) ?",
        options: ["Dans le constructeur", "Dans l'interface", "Dans le décorateur @Component", "Dans le fichier CSS"],
        correct: 2,
        explanation: "Le décorateur @Component contient l'objet de configuration : selector, templateUrl, styleUrls, etc.",
        trap: "Les propriétés définies ici sont statiques et lues au chargement du composant.",
        wrongReasons: [
            "Le constructeur sert à l'injection de dépendances.",
            "L'interface définit la structure de données (TypeScript).",
            "Le CSS contient uniquement le style visuel."
        ]
    },
    {
        id: 14,
        question: "Quel module est nécessaire pour faire des requêtes HTTP ?",
        options: ["HttpModule", "HttpClientModule", "FormsModule", "RouterModule"],
        correct: 1,
        explanation: "HttpClientModule fournit le service HttpClient utilisé pour les appels GET, POST, etc.",
        trap: "L'ancien HttpModule est déprécié depuis Angular 4.3.",
        wrongReasons: [
            "HttpModule est l'ancienne version obsolète.",
            "FormsModule est pour les formulaires template-driven.",
            "RouterModule est pour la navigation."
        ]
    },
    {
        id: 15,
        question: "Que fait l'opérateur filter() dans RxJS ?",
        options: ["Il modifie les données", "Il bloque les données non conformes", "Il trie le tableau", "Il arrête l'Observable"],
        correct: 1,
        explanation: "filter() évalue une condition (prédicat) et laisse passer uniquement les valeurs qui retournent true.",
        trap: "Attention, filter ne transforme pas l'objet, il décide juste de sa survie dans le flux.",
        wrongReasons: [
            "map() est celui qui modifie les données.",
            "Le tri se fait généralement via map(data => data.sort()) car l'Observable émet souvent un tableau entier.",
            "Il n'arrête pas l'Observable, il peut simplement ne rien émettre."
        ]
    },
    {
        id: 16,
        question: "Comment s'appelle le mécanisme d'insertion de contenu dans un composant ?",
        options: ["Content Injection", "Content Projection", "View Insertion", "Template Binding"],
        correct: 1,
        explanation: "La Content Projection utilise la balise <ng-content> pour ‘projeter’ du HTML depuis le parent vers l'enfant.",
        trap: "C'est très utile pour créer des composants génériques (ex: Card, Modal).",
        wrongReasons: [
            "Content Injection est un mélange de termes inexistant.",
            "View Insertion fait référence à la manipulation dynamique du DOM via ViewContainerRef.",
            "Template Binding est un terme général pour [ ] et ( )."
        ]
    },
    {
        id: 17,
        question: "Quel hook est appelé juste avant la destruction d'un composant ?",
        options: ["ngOnDestroy", "ngAfterViewInit", "ngOnInit", "ngOnChanges"],
        correct: 0,
        explanation: "ngOnDestroy est capital pour se désabonner des Observables et éviter les fuites de mémoire.",
        trap: "Si vous ne vous désabonnez pas ici, votre code continuera de tourner en tâche de fond même si la page a changé.",
        wrongReasons: [
            "ngAfterViewInit est au début du cycle (vue prête).",
            "ngOnInit est au démarrage.",
            "ngOnChanges réagit aux modifications d'inputs."
        ]
    },
    {
        id: 18,
        question: "Quelle syntaxe utilise-t-on pour binder un événement click ?",
        options: ["[click]", "(click)", "{{click}}", "*click"],
        correct: 1,
        explanation: "Les parenthèses ( ) indiquent un flux de données allant de la vue (DOM) vers la classe TypeScript.",
        trap: "N'ajoutez pas 'on' (ex: (onclick) est faux, c'est (click)).",
        wrongReasons: [
            "[ ] est pour les propriétés (flux inverse).",
            "{{ }} est pour l'affichage de texte.",
            "* est pour les directives structurelles."
        ]
    },
    {
        id: 19,
        question: "Quel type de données Router.events émet-il ?",
        options: ["String uniquement", "Booléen", "NavigationEvent (Observable)", "Rien"],
        correct: 2,
        explanation: "Il émet différents types d'événements comme NavigationStart, NavigationEnd, permettant de suivre le cycle de navigation.",
        trap: "C'est un Observable, donc n'oubliez pas le .subscribe() pour l'écouter.",
        wrongReasons: [
            "L'URL est une string, mais Router.events est bien plus riche.",
            "Il ne se contente pas de dire si on navigue ou pas (booléen).",
            "Il émet énormément d'informations utiles pour les spinners de chargement."
        ]
    },
    {
        id: 20,
        question: "Comment accède-t-on à une variable de référence locale #form ?",
        options: ["@Input()", "@ViewChild()", "@Inject()", "@Component()"],
        correct: 1,
        explanation: "@ViewChild('form') permet de récupérer l'instance de l'élément ou du composant marqué par #form dans le template.",
        trap: "Cette variable n'est accessible qu'à partir de ngAfterViewInit, pas dans ngOnInit.",
        wrongReasons: [
            "@Input() reçoit des données du parent.",
            "@Inject() est une injection manuelle de token.",
            "@Component() est le décorateur de classe."
        ]
    },
    {
        id: 21,
        question: "Quelle est la fonction principale d'un NgModule ?",
        options: ["Gérer le CSS", "Organiser et compiler le code", "Remplacer les classes", "Créer des API"],
        correct: 1,
        explanation: "NgModule regroupe les composants, directives et services liés pour former une unité fonctionnelle (ex: AuthModule).",
        trap: "Depuis Angular 14, les modules sont optionnels avec les 'Standalone Components'.",
        wrongReasons: [
            "Le CSS est géré par les styles du composant.",
            "Il n'a rien à voir avec le remplacement de classes JS.",
            "C'est un outil côté frontend, pas pour créer des API backend."
        ]
    },
    {
        id: 22,
        question: "Quel pipe permet de gérer un Observable directement dans le template ?",
        options: ["json", "async", "date", "slice"],
        correct: 1,
        explanation: "Le pipe async s'abonne automatiquement à l'Observable et, surtout, se DÉSABONNE automatiquement à la destruction.",
        trap: "C'est la méthode recommandée pour éviter les fuites de mémoire (memory leaks).",
        wrongReasons: [
            "json affiche l'objet brut pour le débug.",
            "date formate les dates.",
            "slice coupe une partie d'un tableau ou d'une string."
        ]
    },
    {
        id: 23,
        question: "Dans directive structurelle *ngFor='let item of list', que fait 'of' ?",
        options: ["Rien, c'est décoratif", "C'est le mot-clé JS natif", "C'est spécifique à Angular", "C'est une erreur de frappe"],
        correct: 2,
        explanation: "En Angular, on utilise 'of' pour les itérables. C'est converti en syntaxe <ng-template ngFor [ngForOf]='list'>.",
        trap: "Ne pas confondre avec 'in' utilisé dans les boucles JS classiques (qui itère sur les clés).",
        wrongReasons: [
            "C'est un mot-clé technique essentiel.",
            "JS utilise plus souvent 'in' ou 'of' dans des contextes différents.",
            "Ce n'est pas une erreur, c'est la syntaxe officielle."
        ]
    },
    {
        id: 24,
        question: "Quelle instruction importe un service dans un composant ?",
        options: ["import { MyService } from './path'", "constructeur(private service: MyService)", "Les deux sont nécessaires", "Aucune des deux"],
        correct: 2,
        explanation: "Il faut d'abord importer le fichier (TypeScript), puis l'injecter dans le constructeur (Angular) pour l'utiliser.",
        trap: "Si vous oubliez l'injection dans le constructeur, votre variable 'service' sera undefined.",
        wrongReasons: [
            "L'import seul ne fait pas l'injection.",
            "L'injection sans import cause une erreur de compilation TS."
        ]
    },
    {
        id: 25,
        question: "Comment s'appelle l'outil qui transforme le code TS en JS pour le navigateur ?",
        options: ["Compiler", "Transpiler", "Transducteur", "Interpréteur"],
        correct: 1,
        explanation: "On utilise le terme 'Transpiler' (comme Babel ou TypeScript) car on passe d'un langage source vers un autre langage de même niveau.",
        trap: "C'est souvent intégré à la commande 'ng build'.",
        wrongReasons: [
            "Un compilateur passe généralement à un niveau inférieur (machine).",
            "Transducteur est un terme de traitement de signal ou programmation fonctionnelle.",
            "Le navigateur interprète le JS, mais ne transforme pas le TS lui-même."
        ]
    },
    {
        id: 26,
        question: "Quel décorateur marque une propriété comme pouvant émettre des événements ?",
        options: ["@Input()", "@Output()", "@HostListener()", "@Event()"],
        correct: 1,
        explanation: "@Output() doit être associé à une instance de EventEmitter pour envoyer des données au parent.",
        trap: "N'oubliez pas les parenthèses () après @Output().",
        wrongReasons: [
            "@Input() reçoit des données.",
            "@HostListener() écoute les événements sur l'élément lui-même.",
            "@Event() n'existe pas en Angular."
        ]
    },
    {
        id: 27,
        question: "Que signifie le 'Tree Shaking' ?",
        options: ["Nettoyer le code mort", "Trier les fichiers", "Vérifier la structure", "Optimiser les images"],
        correct: 0,
        explanation: "C'est un processus d'optimisation qui supprime le code non utilisé de votre bundle final pour réduire sa taille.",
        trap: "C'est pourquoi providedIn: 'root' est préférable aux providers dans les modules.",
        wrongReasons: [
            "Ce n'est pas un simple tri de fichiers.",
            "La vérification de structure est le linting.",
            "L'optimisation d'images se fait par d'autres outils."
        ]
    },
    {
        id: 28,
        question: "Quelle classe permet d'intercepter les requêtes HTTP ?",
        options: ["HttpInterceptor", "HttpRequest", "HttpResponse", "HttpHandler"],
        correct: 0,
        explanation: "L'intercepteur permet d'ajouter des headers (ex: Token Auth) ou de gérer les erreurs globalement pour toutes les requêtes.",
        trap: "Il faut l'enregistrer dans les providers avec le token spécifique HTTP_INTERCEPTORS.",
        wrongReasons: [
            "HttpRequest représente la requête elle-même.",
            "HttpResponse représente la réponse.",
            "HttpHandler sert à passer la requête à l'intercepteur suivant."
        ]
    },
    {
        id: 29,
        question: "Quel service fournit des informations sur l'URL active ?",
        options: ["Router", "ActivatedRoute", "Location", "RouteParams"],
        correct: 1,
        explanation: "ActivatedRoute permet de s'abonner aux paramètres (:id) et aux données de la route courante.",
        trap: "Router sert à l'ACTION de naviguer, ActivatedRoute sert à l'ÉTAT actuel.",
        wrongReasons: [
            "Router initie les changements de page.",
            "Location est un service bas niveau pour manipuler l'historique du navigateur.",
            "RouteParams est déprécié depuis longtemps."
        ]
    },
    {
        id: 30,
        question: "Comment injecter un service de manière optionnelle ?",
        options: ["@Optional()", "@Inject()", "@SkipSelf()", "@Self()"],
        correct: 0,
        explanation: "@Optional() indique à Angular de ne pas lancer d'erreur si la dépendance est introuvable (elle sera null).",
        trap: "Utile pour les bibliothèques tierces où certains services peuvent ne pas être fournis.",
        wrongReasons: [
            "@Inject() force l'injection d'un token spécifique.",
            "@SkipSelf() cherche la dépendance uniquement chez les parents.",
            "@Self() cherche la dépendance uniquement sur l'élément actuel."
        ]
    },
    {
        id: 31,
        question: "Que fait 'ng build --configuration production' ?",
        options: ["Lance le serveur de test", "Compile avec optimisations", "Crée un nouveau module", "Supprime les assets"],
        correct: 1,
        explanation: "Il active la minification, l'AOT (Ahead of Time compilation) et d'autres optimisations pour le déploiement réel.",
        trap: "Le bundle généré est beaucoup plus petit que celui de 'ng serve'.",
        wrongReasons: [
            "ng serve lance le serveur.",
            "La création de module est ng generate module.",
            "Il gère les assets, il ne les supprime pas."
        ]
    },
    {
        id: 32,
        question: "Quelle est l'unité de base d'une application Angular ?",
        options: ["Le Module", "Le Composant", "Le Service", "La Directive"],
        correct: 1,
        explanation: "Tout commence par un composant (le composant racine). Angular est une architecture orientée composants.",
        trap: "On peut dire que le module est un conteneur, mais le bloc de construction fonctionnel est le composant.",
        wrongReasons: [
            "Le module organise mais ne définit pas l'interface.",
            "Un service est un outil auxiliaire.",
            "La directive est un composant simplifié sans vue."
        ]
    },
    {
        id: 33,
        question: "Quel outil gère les versions des dépendances ?",
        options: ["angular.json", "package.json", "tsconfig.json", "karma.conf.js"],
        correct: 1,
        explanation: "package.json liste toutes les bibliothèques npm avec leurs versions respectives.",
        trap: "Ne modifiez pas manuellement les versions sans passer par 'npm install'.",
        wrongReasons: [
            "angular.json configure les paramètres du projet (assets, build, etc.).",
            "tsconfig.json configure les règles du compilateur TypeScript.",
            "karma.conf.js configure les tests unitaires."
        ]
    },
    {
        id: 34,
        question: "À quoi sert la balise <ng-template> ?",
        options: ["Afficher du texte", "Définir un bloc réutilisable non rendu par défaut", "Importer du CSS", "Créer une boucle"],
        correct: 1,
        explanation: "Le contenu à l'intérieur de <ng-template> n'est rendu que si une directive (comme *ngIf ou ngTemplateOutlet) l'appelle.",
        trap: "C'est extrêmement puissant pour les logiques de 'Squelettes de chargement' ou de 'Modales'.",
        wrongReasons: [
            "Elle est invisible si on ne l'active pas explicitement.",
            "Les imports de styles se font par d'autres moyens.",
            "ngFor utilise un template en interne, mais sa balise est plus souvent l'élément hôte."
        ]
    },
    {
        id: 35,
        question: "Comment définit-on un alias de chemin dans tsconfig ?",
        options: ["paths", "alias", "routes", "baseUrl"],
        correct: 0,
        explanation: "L'option 'paths' permet d'utiliser des raccourcis comme '@env/...' au lieu de '../../environments/'.",
        trap: "Il faut coordonner 'baseUrl' et 'paths' pour que cela fonctionne.",
        wrongReasons: [
            "alias est utilisé dans Webpack, pas directement dans tsconfig.",
            "routes est pour Angular, pas pour TypeScript.",
            "baseUrl définit le dossier racine des imports, mais ne crée pas d'alias."
        ]
    },
    {
        id: 36,
        question: "Quelle commande lance les tests unitaires ?",
        options: ["ng start", "ng serve", "ng test", "ng build"],
        correct: 2,
        explanation: "ng test lance Karma et exécute tous les fichiers de test (.spec.ts).",
        trap: "Il reste à l'écoute : chaque modification de code relance les tests automatiquement.",
        wrongReasons: [
            "ng start et ng serve lancent l'application localement.",
            "ng build prépare l'application pour la production."
        ]
    },
    {
        id: 37,
        question: "Comment spécifier qu'un service est un singleton ?",
        options: ["providedIn: 'root'", "singleton: true", "static: true", "Dansdeclarations"],
        correct: 0,
        explanation: "providedIn: 'root' enregistre le service dans l'injecteur racine, garantissant une instance unique pour toute l'app.",
        trap: "Si vous le mettez dans les 'providers' d'un COMPOSANT, vous aurez une instance différente par composant !",
        wrongReasons: [
            "singleton: true n'existe pas en syntaxe Angular.",
            "static: true est utilisé pour ViewChild.",
            "Le service ne va jamais dans declarations (uniquement composants/directives/pipes)."
        ]
    },
    {
        id: 38,
        question: "Quelle méthode change la valeur de toutes les propriétés d'un FormGroup ?",
        options: ["patchValue()", "setValue()", "update()", "assign()"],
        correct: 1,
        explanation: "setValue() est strict : si une seule propriété manque par rapport au modèle original, il lancera une erreur.",
        trap: "Utilisez patchValue() pour les mises à jour partielles.",
        wrongReasons: [
            "patchValue() permet l'omission de propriétés.",
            "update() et assign() ne sont pas des méthodes de FormGroup."
        ]
    },
    {
        id: 39,
        question: "Quel décorateur est utilisé pour écouter les événements clavier sur window ?",
        options: ["@EventListener()", "@HostListener('window:keydown')", "@BrowserEvent()", "@Inject()"],
        correct: 1,
        explanation: "@HostListener permet d'écouter les événements sur l'élément hôte ou les objets globaux (window, document).",
        trap: "C'est préférable à un simple addEventListener car Angular gère automatiquement l'abonnement.",
        wrongReasons: [
            "@EventListener n'existe pas.",
            "@BrowserEvent n'existe pas.",
            "@Inject est pour l'injection manuelle."
        ]
    },
    {
        id: 40,
        question: "A quoi sert l'opérateur 'tap()' ?",
        options: ["Transformer les données", "Vider le flux", "Déboguer/Effets de bord", "Fermer l'Observable"],
        correct: 2,
        explanation: "tap() reçoit la donnée, permet de faire une action (ex: log, spinner) et renvoie la donnée IDENTIQUE à l'étape suivante.",
        trap: "Si vous essayez de modifier la donnée dans un tap, cela ne fonctionnera pas (use map for that).",
        wrongReasons: [
            "map() transforme les données.",
            "tap() ne vide rien.",
            "tap() ne gère pas la fermeture (use take or first)."
        ]
    }
];

window.Section1_Course = Section1_Course;
