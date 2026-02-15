/**
 * SECTION 7: FOCUS EXAMEN - 26 Questions ENRICHIES
 * Thèmes ciblés : Navigation déclarative, HTTP, Pipes, Composants dynamiques, Directives structurelles
 */

const Section7_Focus = [
    // ============================================
    // NAVIGATION DECLARATIVE - routerLink, routerLinkActive, router-outlet (5 Q)
    // ============================================
    {
        id: 1,
        question: "Quel élément indique où Angular injecte le composant routé ?",
        options: ["&lt;router-outlet&gt;&lt;/router-outlet&gt;", "&lt;ng-outlet&gt;&lt;/ng-outlet&gt;", "&lt;router-view&gt;&lt;/router-view&gt;", "&lt;ng-content&gt;&lt;/ng-content&gt;"],
        correct: 0,
        explanation: "&lt;router-outlet&gt; est l'emplacement réservé où le routeur insère le composant correspondant à la route active.",
        trap: "Sans &lt;router-outlet&gt;, la route peut matcher mais rien ne s'affiche.",
        wrongReasons: ["&lt;ng-outlet&gt; n'existe pas.", "&lt;router-view&gt; est propre à Vue.js.", "&lt;ng-content&gt; sert à la projection de contenu."]
    },
    {
        id: 2,
        question: "Quelle directive permet de naviguer sans recharger toute la page ?",
        options: ["href=\"/users\"", "routerLink=\"/users\"", "(click)=\"router.navigate(['/users'])\"", "routerLinkActive=\"active\""],
        correct: 1,
        explanation: "routerLink déclenche la navigation côté client et évite un reload complet.",
        trap: "href force un rechargement du navigateur (pas une SPA).",
        wrongReasons: ["href provoque une requête HTTP complète.", "(click) est une navigation programmatique, pas une directive declarative.", "routerLinkActive gère des classes CSS, pas la navigation."]
    },
    {
        id: 3,
        question: "Quelle syntaxe est correcte pour passer un id avec routerLink ?",
        options: [
            "[routerLink]=\"['/users', user.id]\"",
            "routerLink=\"/users/:id\"",
            "routerLink=\"/users/{{user.id}}\"",
            "[routerLink]=\"'/users/:id'\""
        ],
        correct: 0,
        explanation: "La syntaxe recommandée passe les segments dans un tableau : ['/users', id].",
        trap: ":id est un placeholder dans les routes, pas dans routerLink.",
        wrongReasons: ["La valeur ':id' reste littérale.", "L'interpolation dans cet attribut n'est pas supportée comme ça.", "La string reste littérale."]
    },
    {
        id: 4,
        question: "À quoi sert routerLinkActive ?",
        options: [
            "Ajouter une classe CSS quand la route est active",
            "Déclencher la navigation vers une route",
            "Remplacer <router-outlet>",
            "Désactiver un lien quand la route est active"
        ],
        correct: 0,
        explanation: "routerLinkActive ajoute une ou plusieurs classes CSS lorsque la route correspond.",
        trap: "Par défaut, la correspondance est partielle (prefix).",
        wrongReasons: ["La navigation se fait via routerLink ou Router.", "<router-outlet> affiche les composants routés.", "Il ne désactive pas le lien automatiquement."]
    },
    {
        id: 5,
        question: "Comment forcer un match EXACT avec routerLinkActive ?",
        options: [
            "[routerLinkActiveOptions]=\"{ exact: true }\"",
            "routerLinkActive=\"exact\"",
            "[routerLinkActiveOptions]=\"{ exact: false }\"",
            "routerLinkActiveOptions=\"{ exact: true }\""
        ],
        correct: 0,
        explanation: "routerLinkActiveOptions permet d'activer le match exact via { exact: true }.",
        trap: "Sans exact:true, /users active aussi /users/123.",
        wrongReasons: ["routerLinkActive ne prend pas 'exact' directement.", "exact:false est l'inverse du comportement voulu.", "Sans binding, c'est une string, pas un objet."]
    },

    // ============================================
    // HTTP FONDAMENTAUX - GET/POST/PUT/DELETE + headers/status (6 Q)
    // ============================================
    {
        id: 6,
        question: "Quelle méthode HttpClient utilise-t-on pour récupérer des données ?",
        options: ["http.post()", "http.get()", "http.put()", "http.delete()"],
        correct: 1,
        explanation: "http.get() est utilisée pour lire/récupérer des données.",
        trap: "Les méthodes HttpClient correspondent aux verbes HTTP.",
        wrongReasons: ["post() crée des ressources.", "put() remplace une ressource.", "delete() supprime une ressource."]
    },
    {
        id: 7,
        question: "Quel verbe HTTP est utilisé pour CRÉER une ressource ?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 1,
        explanation: "POST est utilisé pour créer une ressource côté serveur.",
        trap: "PUT sert plutôt à remplacer une ressource existante.",
        wrongReasons: ["GET lit des données.", "PUT met à jour/remplace.", "DELETE supprime."]
    },
    {
        id: 8,
        question: "Quel verbe HTTP remplace une ressource existante en entier ?",
        options: ["PUT", "PATCH", "POST", "GET"],
        correct: 0,
        explanation: "PUT remplace la ressource complète (PATCH pour une modification partielle).",
        trap: "On confond souvent PUT et PATCH.",
        wrongReasons: ["PATCH est partiel.", "POST crée une nouvelle ressource.", "GET ne modifie rien."]
    },
    {
        id: 9,
        question: "Quel verbe HTTP est utilisé pour SUPPRIMER une ressource ?",
        options: ["DELETE", "POST", "PUT", "GET"],
        correct: 0,
        explanation: "DELETE est le verbe HTTP dédié à la suppression.",
        trap: "POST peut supprimer côté backend, mais ce n'est pas la convention REST.",
        wrongReasons: ["POST est pour créer.", "PUT est pour remplacer.", "GET est pour lire."]
    },
    {
        id: 10,
        question: "Comment ajouter un header Authorization avec HttpClient ?",
        options: [
            "http.get(url, { headers: new HttpHeaders({ Authorization: 'Bearer token' }) })",
            "http.get(url, { header: 'Authorization: Bearer token' })",
            "http.get(url).setHeader('Authorization', 'Bearer token')",
            "http.get(url, { setHeaders: { Authorization: 'Bearer token' } })"
        ],
        correct: 0,
        explanation: "On passe un objet options avec 'headers' qui est un HttpHeaders.",
        trap: "HttpHeaders est IMMUTABLE, on crée une nouvelle instance.",
        wrongReasons: ["La clé doit être 'headers', pas 'header'.", "HttpClient.get() ne renvoie pas un builder.", "setHeaders n'existe pas ici."]
    },
    {
        id: 11,
        question: "Comment récupérer le status HTTP et les headers d'une réponse ?",
        options: [
            "http.get(url, { observe: 'response' })",
            "http.get(url, { observe: 'status' })",
            "http.get(url, { responseType: 'status' })",
            "http.get(url, { reportProgress: true })"
        ],
        correct: 0,
        explanation: "observe: 'response' renvoie un HttpResponse avec status, headers et body.",
        trap: "Par défaut, HttpClient retourne uniquement le body.",
        wrongReasons: ["'status' n'est pas une valeur valide.", "responseType définit le type du body.", "reportProgress est pour les events de progression."]
    },

    // ============================================
    // PIPES - purs vs impurs, performance (5 Q)
    // ============================================
    {
        id: 12,
        question: "Par défaut, un pipe Angular est :",
        options: ["Pur", "Impur", "Asynchrone", "Singleton"],
        correct: 0,
        explanation: "Les pipes sont purs par défaut (pure: true).",
        trap: "Un pipe pur ne se ré-exécute pas à chaque cycle.",
        wrongReasons: ["Impur est l'exception.", "Asynchrone n'est pas un type de pureté.", "Un pipe est bien un service, mais ce n'est pas la réponse attendue."]
    },
    {
        id: 13,
        question: "Quand un pipe pur se ré-exécute-t-il ?",
        options: [
            "À chaque cycle de détection de changements",
            "Quand la référence (ou la valeur primitive) change",
            "Une seule fois au démarrage",
            "Uniquement après un événement DOM"
        ],
        correct: 1,
        explanation: "Un pipe pur se ré-exécute uniquement quand ses entrées changent de référence/valeur.",
        trap: "Muter un objet/array ne change pas la référence.",
        wrongReasons: ["Ça correspond à un pipe impur.", "Faux : il peut se ré-exécuter.", "Les événements DOM ne sont pas le critère principal."]
    },
    {
        id: 14,
        question: "Pourquoi un pipe pur ne se met pas à jour après un array.push() ?",
        options: [
            "Parce que push ne change pas la référence du tableau",
            "Parce que les pipes ne fonctionnent pas avec les tableaux",
            "Parce que le pipe est forcément impur",
            "Parce que le change detection est désactivé"
        ],
        correct: 0,
        explanation: "push modifie le contenu mais garde la même référence : le pipe pur ne détecte pas le changement.",
        trap: "Créer un nouveau tableau (ex: [...items, x]) force la réévaluation.",
        wrongReasons: ["Les pipes fonctionnent bien avec les tableaux.", "Les pipes sont purs par défaut.", "La détection n'est pas désactivée."]
    },
    {
        id: 15,
        question: "Comment déclarer un pipe IMPUR ?",
        options: [
            "@Pipe({ name: 'x', pure: false })",
            "@Pipe({ name: 'x', impure: true })",
            "@Pipe({ name: 'x', pure: true })",
            "@Injectable({ impure: true })"
        ],
        correct: 0,
        explanation: "L'option pure: false rend le pipe impur.",
        trap: "Un pipe impur est réévalué à chaque cycle de CD.",
        wrongReasons: ["impure n'est pas une option.", "pure:true est le comportement par défaut.", "Injectable ne contrôle pas la pureté du pipe."]
    },
    {
        id: 16,
        question: "Quel est le principal risque d'un pipe impur ?",
        options: [
            "Problèmes de performance (réévaluation fréquente)",
            "Il ne peut pas être utilisé dans un template",
            "Il ne peut pas recevoir d'arguments",
            "Il ne fonctionne pas avec OnPush"
        ],
        correct: 0,
        explanation: "Un pipe impur s'exécute à chaque cycle de détection de changements, ce qui peut coûter cher.",
        trap: "Réserver les pipes impurs aux cas où l'input est mutable et fréquemment modifié.",
        wrongReasons: ["Il est utilisable dans les templates.", "Il peut recevoir des arguments.", "Il fonctionne aussi avec OnPush."]
    },

    // ============================================
    // COMPOSANTS DYNAMIQUES - createComponent, ngComponentOutlet (5 Q)
    // ============================================
    {
        id: 17,
        question: "Quelle API moderne permet de créer un composant dynamiquement en TS ?",
        options: [
            "viewContainerRef.createComponent(MyComponent)",
            "ComponentFactoryResolver.create(MyComponent)",
            "MyComponent.create()",
            "viewContainerRef.insert(MyComponent)"
        ],
        correct: 0,
        explanation: "Depuis Angular 14+, ViewContainerRef.createComponent() est la méthode recommandée.",
        trap: "ComponentFactoryResolver est l'ancienne approche (pré-Ivy).",
        wrongReasons: ["ComponentFactoryResolver.create n'existe pas ainsi.", "MyComponent.create() n'existe pas.", "insert() attend une ViewRef, pas un type."]
    },
    {
        id: 18,
        question: "Quelle directive affiche un composant dynamique directement dans le template ?",
        options: ["ngComponentOutlet", "ngTemplateOutlet", "router-outlet", "ng-content"],
        correct: 0,
        explanation: "ngComponentOutlet affiche un composant dont le type est fourni dynamiquement.",
        trap: "ngTemplateOutlet sert aux ng-template, pas aux composants.",
        wrongReasons: ["ngTemplateOutlet projette un template.", "router-outlet est pour le routing.", "ng-content est pour la projection."]
    },
    {
        id: 19,
        question: "Comment récupérer un ViewContainerRef depuis un élément hôte ?",
        options: [
            "@ViewChild('host', { read: ViewContainerRef }) host!: ViewContainerRef;",
            "@ViewChild('host') host!: ElementRef;",
            "@ContentChild('host') host!: ViewContainerRef;",
            "@ViewContainerRef() host!: ViewContainerRef;"
        ],
        correct: 0,
        explanation: "Le read: ViewContainerRef permet d'obtenir le conteneur d'insertion.",
        trap: "Sans read, Angular retourne souvent un ElementRef.",
        wrongReasons: ["ElementRef ne permet pas de créer des vues.", "ContentChild concerne le contenu projeté.", "@ViewContainerRef n'existe pas."]
    },
    {
        id: 20,
        question: "Comment passer une valeur à un @Input() d'un composant dynamique ?",
        options: [
            "componentRef.instance.title = 'Hello';",
            "componentRef.input('title', 'Hello');",
            "viewContainerRef.setInput('title', 'Hello');",
            "componentRef.inject('title', 'Hello');"
        ],
        correct: 0,
        explanation: "On accède à l'instance du composant pour définir ses @Input().",
        trap: "Avec OnPush, un detectChanges() peut être nécessaire si vous modifiez des inputs après création.",
        wrongReasons: ["input() n'existe pas sur ComponentRef.", "setInput() n'existe pas sur ViewContainerRef.", "inject() ne sert pas à définir des inputs."]
    },
    {
        id: 21,
        question: "Comment vider un conteneur de composants dynamiques ?",
        options: [
            "viewContainerRef.clear()",
            "viewContainerRef.destroy()",
            "componentRef.clear()",
            "componentRef.reset()"
        ],
        correct: 0,
        explanation: "clear() supprime toutes les vues du ViewContainerRef.",
        trap: "componentRef.destroy() détruit une instance spécifique, pas tout le conteneur.",
        wrongReasons: ["destroy() n'existe pas sur ViewContainerRef.", "clear() n'existe pas sur ComponentRef.", "reset() n'existe pas."]
    },

    // ============================================
    // DIRECTIVES STRUCTURELLES - TemplateRef, ViewContainerRef (5 Q)
    // ============================================
    {
        id: 22,
        question: "Quels types injecter pour créer une directive structurelle ?",
        options: [
            "TemplateRef + ViewContainerRef",
            "ElementRef + Renderer2",
            "ComponentRef + Injector",
            "NgModuleRef + ChangeDetectorRef"
        ],
        correct: 0,
        explanation: "TemplateRef représente le template, ViewContainerRef l'endroit d'insertion.",
        trap: "Les directives structurelles manipulent des vues, pas directement le DOM.",
        wrongReasons: ["ElementRef/Renderer2 sont pour les directives d'attribut.", "ComponentRef/Injector servent aux composants dynamiques.", "NgModuleRef n'est pas nécessaire ici."]
    },
    {
        id: 23,
        question: "Que signifie l'astérisque (*) devant une directive structurelle ?",
        options: [
            "Un sugar pour créer un <ng-template> autour de l'élément",
            "Une directive d'attribut spéciale",
            "Une directive de style",
            "Un décorateur TypeScript"
        ],
        correct: 0,
        explanation: "Le * est une syntaxe raccourcie qui transforme l'élément en ng-template.",
        trap: "Ex: *appUnless=\"cond\" => <ng-template [appUnless]=\"cond\">...</ng-template>",
        wrongReasons: ["Les directives d'attribut n'utilisent pas '*'.", "Ce n'est pas lié aux styles.", "Ce n'est pas un décorateur."]
    },
    {
        id: 24,
        question: "Quelle méthode crée une vue à partir d'un TemplateRef ?",
        options: [
            "viewContainerRef.createEmbeddedView(templateRef)",
            "templateRef.createComponent()",
            "viewContainerRef.createComponent(templateRef)",
            "templateRef.render()"
        ],
        correct: 0,
        explanation: "createEmbeddedView() instancie une vue basée sur le template.",
        trap: "createComponent() sert à instancier un composant, pas un template.",
        wrongReasons: ["TemplateRef ne crée pas de composants.", "createComponent attend un type de composant.", "render() n'existe pas."]
    },
    {
        id: 25,
        question: "Quel est le rôle de ViewContainerRef dans une directive structurelle ?",
        options: [
            "Insérer ou retirer des vues dans le DOM",
            "Modifier directement les styles CSS",
            "Créer un nouveau module Angular",
            "Écouter les événements du DOM"
        ],
        correct: 0,
        explanation: "ViewContainerRef contrôle l'insertion/suppression des vues liées au template.",
        trap: "C'est la clé pour afficher/masquer conditionnellement via directives structurelles.",
        wrongReasons: ["Les styles se gèrent via Renderer2.", "Aucun lien avec les modules.", "Les événements sont gérés par HostListener/Renderer2."]
    },
    {
        id: 26,
        question: "Pour que *appUnless=\"cond\" fonctionne, quel nom d'@Input() faut-il ?",
        options: ["@Input() appUnless", "@Input() unless", "@Input('unless') appUnless", "@Input() appUnlessValue"],
        correct: 0,
        explanation: "L'@Input() doit matcher le sélecteur de la directive (*appUnless).",
        trap: "Sinon, Angular ne fait pas le lien entre la valeur et la directive.",
        wrongReasons: ["Le nom 'unless' ne correspond pas au sélecteur.", "Sans alias appUnless, la liaison ne se fait pas.", "appUnlessValue n'est pas lié par la micro-syntaxe."]
    }
];

window.Section7_Focus = Section7_Focus;
