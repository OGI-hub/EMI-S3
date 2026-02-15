/**
 * SECTION 6: CODE APPROFONDI - 50 Questions ENRICHIES
 * Focus sur les 5 grands piliers : Routing, Data Binding, RxJS, Forms, Architecture
 * Niveau avancé avec des scénarios de code réels.
 */

const Section6_DeepCode = [
    // ============================================
    // ROUTING - Routes, Guards, Resolvers (10 Q)
    // ============================================
    {
        id: 1,
        question: "Comment définir une route enfant dans Angular ?",
        options: [
            "{ path: 'parent', children: [{ path: 'child', component: ChildComponent }] }",
            "{ path: 'parent/child', component: ChildComponent }",
            "{ path: 'parent', child: { path: 'child' } }",
            "Impossible"
        ],
        correct: 0,
        explanation: "Le tableau 'children' permet de définir des routes imbriquées. Le composant parent doit avoir un <router-outlet>.",
        trap: "La route parent peut aussi avoir un component qui affiche un <router-outlet> pour les enfants.",
        wrongReasons: ["B fonctionne mais n'est pas une vraie route enfant.", "C : Syntaxe invalide.", "D : Tout à fait possible."]
    },
    {
        id: 2,
        question: "Comment créer un Guard canActivate fonctionnel (Angular 15+) ?",
        options: [
            "export const myGuard: CanActivateFn = () => true;",
            "export class MyGuard implements CanActivate { canActivate() { return true; } }",
            "@Injectable() class MyGuard { activate() {} }",
            "Options A & B valides"
        ],
        correct: 3,
        explanation: "Depuis Angular 15, on peut utiliser des fonctions (CanActivateFn) ou des classes.",
        trap: "Les Guards fonctionnels sont plus simples et recommandés pour les cas simples.",
        wrongReasons: ["C : La méthode doit s'appeler 'canActivate', pas 'activate'."]
    },
    {
        id: 3,
        question: "Quel est le rôle de 'snapshot.paramMap' vs 'params' Observable ?",
        options: [
            "Aucune différence",
            "snapshot = valeur actuelle figée, params = valeur réactive",
            "params = valeur figée, snapshot = valeur réactive",
            "snapshot est déprécié"
        ],
        correct: 1,
        explanation: "snapshot.paramMap donne la valeur au moment de l'appel. params est un Observable qui émet à chaque changement.",
        trap: "Si vous restez sur le même composant mais changez d'ID, snapshot ne se met pas à jour !",
        wrongReasons: ["Il y a une grande différence.", "C : C'est l'inverse.", "D : snapshot reste utile."]
    },
    {
        id: 4,
        question: "Comment un Resolver retourne-t-il les données pré-chargées ?",
        options: [
            "return this.http.get(...)",
            "return Promise.resolve(data)",
            "return of(data)",
            "Toutes les réponses"
        ],
        correct: 3,
        explanation: "Un Resolver peut retourner une valeur, une Promise, ou un Observable.",
        trap: "La route n'est activée qu'une fois que le Resolver a terminé (resolve ou complete).",
        wrongReasons: ["Toutes les formes sont acceptées par Angular."]
    },
    {
        id: 5,
        question: "Comment accéder aux données d'un Resolver dans le composant ?",
        options: [
            "this.route.snapshot.data['myKey']",
            "this.route.data.subscribe(d => d['myKey'])",
            "this.resolver.getData()",
            "Options A & B valides"
        ],
        correct: 3,
        explanation: "Les données du Resolver sont accessibles via ActivatedRoute.data (snapshot ou Observable).",
        trap: "La clé utilisée dans 'resolve: { myKey: MyResolver }' est celle à utiliser pour accéder aux données.",
        wrongReasons: ["C : On n'injecte pas le Resolver dans le composant."]
    },
    {
        id: 6,
        question: "Comment empêcher la navigation si un formulaire a des modifications non sauvegardées ?",
        options: [
            "canActivate",
            "canDeactivate",
            "canLoad",
            "resolve"
        ],
        correct: 1,
        explanation: "canDeactivate est appelé quand on essaie de QUITTER une route.",
        trap: "Le Guard peut retourner une confirmation (confirm()) pour demander à l'utilisateur.",
        wrongReasons: ["canActivate = entrée dans la route.", "canLoad = chargement du module.", "resolve = pré-chargement."]
    },
    {
        id: 7,
        question: "Comment passer des données statiques à une route sans paramètre URL ?",
        options: [
            "{ path: 'x', component: X, data: { title: 'Accueil' } }",
            "{ path: 'x', component: X, static: { title: 'Accueil' } }",
            "Impossible sans paramètre",
            "Via le service Router"
        ],
        correct: 0,
        explanation: "L'objet 'data' permet de passer des métadonnées statiques à une route.",
        trap: "Ces données sont accessibles via route.snapshot.data ou route.data Observable.",
        wrongReasons: ["B : 'static' n'existe pas.", "C : C'est possible.", "D : Router ne stocke pas de données."]
    },
    {
        id: 8,
        question: "Comment rediriger vers une page 404 pour toutes les routes inconnues ?",
        options: [
            "{ path: '*', component: NotFoundComponent }",
            "{ path: '**', component: NotFoundComponent }",
            "{ path: 'notfound', redirectTo: '404' }",
            "Impossible"
        ],
        correct: 1,
        explanation: "Le wildcard '**' capture toutes les routes non matchées. Il DOIT être en dernier.",
        trap: "Si vous le mettez en premier, toutes les routes seront capturées !",
        wrongReasons: ["A : '*' n'est pas la syntaxe Angular.", "C : Ne capture pas les routes inconnues.", "D : Possible."]
    },
    {
        id: 9,
        question: "Comment naviguer vers une route avec des query params ?",
        options: [
            "router.navigate(['/user'], { queryParams: { id: 1 } })",
            "router.navigate(['/user?id=1'])",
            "router.navigateByUrl('/user', { id: 1 })",
            "Options A & B valides"
        ],
        correct: 0,
        explanation: "L'option queryParams permet de passer des paramètres après le '?'.",
        trap: "B ne fonctionne pas car navigate attend un tableau de segments, pas une URL complète.",
        wrongReasons: ["B : Syntaxe incorrecte pour navigate.", "C : navigateByUrl prend une URL string."]
    },
    {
        id: 10,
        question: "Comment précharger tous les modules lazy-loadés au démarrage ?",
        options: [
            "preloadingStrategy: PreloadAllModules",
            "preload: true",
            "lazyLoad: false",
            "Impossible"
        ],
        correct: 0,
        explanation: "PreloadAllModules charge tous les modules lazy en arrière-plan après le démarrage.",
        trap: "Vous pouvez créer une stratégie personnalisée pour précharger sélectivement.",
        wrongReasons: ["B, C : Options inexistantes.", "D : Tout à fait possible."]
    },

    // ============================================
    // DATA BINDING - Input, Output, ViewChild (10 Q)
    // ============================================
    {
        id: 11,
        question: "Comment définir une valeur par défaut pour un @Input() ?",
        options: [
            "@Input() value = 'default';",
            "@Input('default') value;",
            "@Input({ default: 'default' }) value;",
            "Dans ngOnInit"
        ],
        correct: 0,
        explanation: "On assigne simplement une valeur par défaut comme pour n'importe quelle propriété TypeScript.",
        trap: "Si le parent ne passe pas de valeur, la valeur par défaut sera utilisée.",
        wrongReasons: ["B : La string dans @Input() définit un alias.", "C : Syntaxe invalide."]
    },
    {
        id: 12,
        question: "Comment rendre un @Input() obligatoire (Angular 16+) ?",
        options: [
            "@Input() value!: string;",
            "@Input({ required: true }) value!: string;",
            "@Required() @Input() value;",
            "Impossible"
        ],
        correct: 1,
        explanation: "Angular 16+ supporte l'option 'required: true' qui lève une erreur si l'input n'est pas fourni.",
        trap: "Le '!' (non-null assertion) seul ne vérifie pas à l'exécution, juste pour TypeScript.",
        wrongReasons: ["A : Ne vérifie pas à l'exécution.", "C : @Required n'existe pas."]
    },
    {
        id: 13,
        question: "Comment émettre un événement avec une valeur typée ?",
        options: [
            "@Output() change = new EventEmitter<string>();",
            "@Output() change = new EventEmitter();",
            "@Output('string') change;",
            "Options A & B valides"
        ],
        correct: 0,
        explanation: "Le type générique <T> permet de typer la valeur émise par EventEmitter.",
        trap: "Avec un type, TypeScript vérifie que vous émettez le bon type de données.",
        wrongReasons: ["B fonctionne mais sans typage.", "C : Syntaxe invalide."]
    },
    {
        id: 14,
        question: "Quelle différence entre @ViewChild et @ContentChild ?",
        options: [
            "Aucune",
            "@ViewChild = template propre, @ContentChild = contenu projeté",
            "@ContentChild = template propre, @ViewChild = contenu projeté",
            "@ViewChild est déprécié"
        ],
        correct: 1,
        explanation: "ViewChild accède aux éléments du template. ContentChild accède au contenu projeté via <ng-content>.",
        trap: "ContentChild est disponible dans ngAfterContentInit, ViewChild dans ngAfterViewInit.",
        wrongReasons: ["Il y a une grande différence.", "C : C'est l'inverse."]
    },
    {
        id: 15,
        question: "Comment accéder à plusieurs éléments avec le même sélecteur ?",
        options: [
            "@ViewChild('item') items;",
            "@ViewChildren('item') items: QueryList<ElementRef>;",
            "@ViewChildAll('item') items;",
            "Impossible"
        ],
        correct: 1,
        explanation: "@ViewChildren retourne un QueryList qui est un itérable de tous les éléments matchant.",
        trap: "QueryList a une méthode 'changes' (Observable) pour détecter les ajouts/suppressions.",
        wrongReasons: ["A : ViewChild retourne un seul élément.", "C : N'existe pas."]
    },
    {
        id: 16,
        question: "Quand @ViewChild est-il disponible ?",
        options: [
            "Dans le constructeur",
            "Dans ngOnInit",
            "Dans ngAfterViewInit",
            "Partout"
        ],
        correct: 2,
        explanation: "Les éléments du template ne sont prêts qu'après le rendu de la vue.",
        trap: "Accéder à @ViewChild dans ngOnInit retournera undefined !",
        wrongReasons: ["A, B : Trop tôt.", "D : Pas avant ngAfterViewInit."]
    },
    {
        id: 17,
        question: "Comment forcer l'option 'static: true' dans @ViewChild ?",
        options: [
            "@ViewChild('ref') element;",
            "@ViewChild('ref', { static: true }) element;",
            "@StaticViewChild('ref') element;",
            "Par défaut c'est statique"
        ],
        correct: 1,
        explanation: "static: true rend l'élément disponible dans ngOnInit (pour les éléments sans *ngIf dynamique).",
        trap: "Utilisez static: true seulement si l'élément n'est pas dans un *ngIf ou *ngFor.",
        wrongReasons: ["A : Par défaut c'est static: false.", "C : N'existe pas."]
    },
    {
        id: 18,
        question: "Comment utiliser deux-way binding avec une propriété personnalisée ?",
        options: [
            "@Input() value; @Output() valueChange = new EventEmitter();",
            "@TwoWay() value;",
            "[(customValue)]=\"x\" uniquement",
            "Impossible"
        ],
        correct: 0,
        explanation: "Pour [(prop)], il faut @Input() prop et @Output() propChange.",
        trap: "Le nom de l'Output DOIT être le nom de l'Input + 'Change'.",
        wrongReasons: ["B, C : Syntaxes invalides.", "D : Tout à fait possible."]
    },
    {
        id: 19,
        question: "Comment transformer la valeur d'un @Input() avant utilisation ?",
        options: [
            "Utiliser un setter : @Input() set value(v) { this._value = transform(v); }",
            "@Input() @Transform() value;",
            "Dans ngOnInit uniquement",
            "Impossible"
        ],
        correct: 0,
        explanation: "Un setter permet d'intercepter et transformer la valeur avant de la stocker.",
        trap: "Ajoutez un getter pour lire la valeur transformée.",
        wrongReasons: ["B : @Transform n'existe pas.", "C : Le setter est plus réactif."]
    },
    {
        id: 20,
        question: "Comment passer un template en tant qu'@Input() ?",
        options: [
            "@Input() template: TemplateRef<any>;",
            "@Input() template: NgTemplate;",
            "@ViewChild() template;",
            "Impossible"
        ],
        correct: 0,
        explanation: "On peut passer un <ng-template> comme @Input() avec le type TemplateRef.",
        trap: "Utilisez ngTemplateOutlet pour afficher le template passé.",
        wrongReasons: ["B : NgTemplate n'existe pas.", "C : ViewChild accède au template propre."]
    },

    // ============================================
    // RxJS & HTTP - Operators, Error Handling (10 Q)
    // ============================================
    {
        id: 21,
        question: "Comment combiner deux Observables et émettre quand N'IMPORTE LEQUEL émet ?",
        options: [
            "forkJoin([a$, b$])",
            "combineLatest([a$, b$])",
            "merge(a$, b$)",
            "zip(a$, b$)"
        ],
        correct: 2,
        explanation: "merge() émet la valeur de chaque Observable dès qu'il émet, sans attendre l'autre.",
        trap: "combineLatest attend que TOUS aient émis au moins une fois avant d'émettre.",
        wrongReasons: ["forkJoin attend la fin de tous.", "combineLatest attend tous.", "zip combine par index."]
    },
    {
        id: 22,
        question: "Comment retenter une requête HTTP 3 fois en cas d'échec ?",
        options: [
            "retry(3)",
            "retryWhen(errors => errors.pipe(take(3)))",
            "catchError(() => throwError()).pipe(repeat(3))",
            "Options A & B valides"
        ],
        correct: 3,
        explanation: "retry(n) retente n fois. retryWhen permet une logique personnalisée (ex: délai exponentiel).",
        trap: "retry retente immédiatement, retryWhen permet d'ajouter un délai.",
        wrongReasons: ["C : Syntaxe incorrecte pour ce cas."]
    },
    {
        id: 23,
        question: "Quel opérateur permet d'émettre une valeur par défaut si l'Observable est vide ?",
        options: [
            "defaultIfEmpty('valeur')",
            "startWith('valeur')",
            "ifEmpty('valeur')",
            "first('valeur')"
        ],
        correct: 0,
        explanation: "defaultIfEmpty émet une valeur si l'Observable se termine sans avoir émis.",
        trap: "startWith émet TOUJOURS la valeur en premier, même si l'Observable émet ensuite.",
        wrongReasons: ["B : Émet toujours en premier.", "C : N'existe pas.", "D : Syntaxe incorrecte."]
    },
    {
        id: 24,
        question: "Comment annuler une requête HTTP après 5 secondes ?",
        options: [
            "timeout(5000)",
            "takeUntil(timer(5000))",
            "take(5000)",
            "Options A & B valides"
        ],
        correct: 3,
        explanation: "timeout lève une erreur après le délai. takeUntil se désabonne proprement.",
        trap: "timeout génère une erreur à gérer, takeUntil termine silencieusement.",
        wrongReasons: ["C : take compte les émissions, pas le temps."]
    },
    {
        id: 25,
        question: "Comment partager un Observable entre plusieurs abonnés sans relancer la requête ?",
        options: [
            "share()",
            "shareReplay(1)",
            "multicast()",
            "Options A & B recommandées"
        ],
        correct: 3,
        explanation: "share() partage l'exécution. shareReplay(1) garde aussi la dernière valeur pour les nouveaux abonnés.",
        trap: "Sans partage, chaque subscribe() relance la requête HTTP !",
        wrongReasons: ["C : Syntaxe plus complexe avec des Subjects."]
    },
    {
        id: 26,
        question: "Comment transformer une erreur HTTP 404 en tableau vide ?",
        options: [
            "catchError(err => err.status === 404 ? of([]) : throwError(err))",
            "catchError(() => of([]))",
            "filter(err => err.status !== 404)",
            "Options A & B selon le besoin"
        ],
        correct: 3,
        explanation: "A gère spécifiquement le 404. B transforme TOUTES les erreurs.",
        trap: "Vérifiez le status de l'erreur si vous voulez un comportement spécifique.",
        wrongReasons: ["C : filter ne gère pas les erreurs."]
    },
    {
        id: 27,
        question: "Comment émettre une valeur uniquement après un silence de 300ms (debounce) ?",
        options: [
            "debounce(300)",
            "debounceTime(300)",
            "throttle(300)",
            "delay(300)"
        ],
        correct: 1,
        explanation: "debounceTime attend un silence de X ms avant d'émettre la dernière valeur.",
        trap: "Idéal pour les recherches : n'envoie la requête qu'après que l'utilisateur a fini de taper.",
        wrongReasons: ["A : debounce prend un Observable, pas un nombre.", "C : throttle limite le débit.", "D : delay décale tout."]
    },
    {
        id: 28,
        question: "Comment limiter à 1 émission par seconde (throttle) ?",
        options: [
            "throttle(1000)",
            "throttleTime(1000)",
            "sampleTime(1000)",
            "Options B & C selon le besoin"
        ],
        correct: 3,
        explanation: "throttleTime garde la première valeur par fenêtre. sampleTime garde la dernière.",
        trap: "throttleTime = première, sampleTime = dernière.",
        wrongReasons: ["A : throttle prend un Observable."]
    },
    {
        id: 29,
        question: "Comment exécuter un code après chaque émission ET après les erreurs ?",
        options: [
            "finalize(() => { ... })",
            "finally(() => { ... })",
            "complete(() => { ... })",
            "tap({ complete: () => { } })"
        ],
        correct: 0,
        explanation: "finalize est appelé quand l'Observable se termine (complete) ou échoue (error).",
        trap: "Idéal pour cacher un spinner de chargement.",
        wrongReasons: ["B : finally est JS, pas RxJS.", "C : N'existe pas.", "D : tap.complete n'est pas appelé sur erreur."]
    },
    {
        id: 30,
        question: "Comment convertir une Promise en Observable ?",
        options: [
            "from(promise)",
            "of(promise)",
            "toObservable(promise)",
            "Observable.fromPromise(promise)"
        ],
        correct: 0,
        explanation: "from() convertit une Promise en Observable qui émet la valeur résolue.",
        trap: "of(promise) émettrait la Promise elle-même comme valeur !",
        wrongReasons: ["B : Émet la Promise comme objet.", "C : N'existe pas.", "D : Ancienne API dépréciée."]
    },

    // ============================================
    // FORMS - Validators, Controls (10 Q)
    // ============================================
    {
        id: 31,
        question: "Comment créer un validateur personnalisé qui dépend de plusieurs champs ?",
        options: [
            "Appliquer le validateur sur le FormGroup, pas sur le FormControl",
            "Utiliser Validators.compose()",
            "Impossible",
            "Utiliser @Validator()"
        ],
        correct: 0,
        explanation: "Un validateur de groupe reçoit le FormGroup et peut accéder à tous ses contrôles.",
        trap: "Exemple : vérifier que 'password' et 'confirmPassword' sont identiques.",
        wrongReasons: ["B : compose combine des validateurs sur un seul champ.", "C : Possible.", "D : N'existe pas."]
    },
    {
        id: 32,
        question: "Comment afficher une erreur de validation personnalisée dans le template ?",
        options: [
            "control.hasError('myError')",
            "control.errors?.myError",
            "control.getError('myError')",
            "Toutes les réponses"
        ],
        correct: 3,
        explanation: "hasError, errors?.key et getError sont trois façons d'accéder aux erreurs.",
        trap: "hasError retourne un booléen, errors et getError retournent l'objet d'erreur.",
        wrongReasons: ["Toutes sont valides selon le besoin."]
    },
    {
        id: 33,
        question: "Comment marquer tous les champs d'un formulaire comme 'touched' ?",
        options: [
            "form.markAllAsTouched()",
            "form.touchAll()",
            "Boucler sur les contrôles manuellement",
            "Options A & C valides"
        ],
        correct: 3,
        explanation: "markAllAsTouched() est une méthode native. On peut aussi boucler manuellement.",
        trap: "Utile pour afficher toutes les erreurs lors de la soumission.",
        wrongReasons: ["B : N'existe pas."]
    },
    {
        id: 34,
        question: "Comment ajouter un validateur dynamiquement à un FormControl ?",
        options: [
            "control.setValidators([Validators.required])",
            "control.addValidator(Validators.required)",
            "control.validators.push(Validators.required)",
            "Options A & B valides"
        ],
        correct: 3,
        explanation: "setValidators remplace tous les validateurs. addValidator (Angular 12+) en ajoute un.",
        trap: "Après modification, appelez control.updateValueAndValidity() pour recalculer.",
        wrongReasons: ["C : validators n'est pas un tableau modifiable."]
    },
    {
        id: 35,
        question: "Comment créer un FormArray de FormGroups ?",
        options: [
            "new FormArray([new FormGroup({ name: new FormControl() })])",
            "fb.array([fb.group({ name: '' })])",
            "new FormArray<FormGroup>([])",
            "Toutes les réponses"
        ],
        correct: 3,
        explanation: "Les trois syntaxes permettent de créer un FormArray contenant des FormGroups.",
        trap: "FormBuilder (fb) est plus lisible pour les formulaires complexes.",
        wrongReasons: ["Toutes sont correctes."]
    },
    {
        id: 36,
        question: "Comment accéder à un contrôle dans un FormArray ?",
        options: [
            "formArray.at(index)",
            "formArray.controls[index]",
            "formArray.get(index)",
            "Toutes les réponses"
        ],
        correct: 3,
        explanation: "at(), controls[] et get() donnent tous accès au contrôle à l'index donné.",
        trap: "at() et get() retournent AbstractControl, vous devrez peut-être caster en FormGroup.",
        wrongReasons: ["Toutes sont valides."]
    },
    {
        id: 37,
        question: "Comment écouter les changements de valeur d'un FormControl ?",
        options: [
            "control.valueChanges.subscribe(...)",
            "control.onChange(...)",
            "control.watch(...)",
            "control.onValueChange(...)"
        ],
        correct: 0,
        explanation: "valueChanges est un Observable qui émet à chaque changement de valeur.",
        trap: "N'oubliez pas de vous désabonner ou d'utiliser takeUntil !",
        wrongReasons: ["B, C, D : N'existent pas."]
    },
    {
        id: 38,
        question: "Comment désactiver la validation d'un contrôle temporairement ?",
        options: [
            "control.clearValidators()",
            "control.disable()",
            "control.setValidators(null)",
            "Options A & C équivalentes"
        ],
        correct: 3,
        explanation: "clearValidators() et setValidators(null) suppriment les validateurs.",
        trap: "disable() désactive le contrôle mais garde les validateurs pour quand il sera réactivé.",
        wrongReasons: ["B : Désactive le contrôle, pas les validateurs."]
    },
    {
        id: 39,
        question: "Comment créer un validateur asynchrone qui vérifie l'unicité d'un email ?",
        options: [
            "Retourner un Observable<ValidationErrors | null>",
            "Retourner une Promise<ValidationErrors | null>",
            "Utiliser asyncValidator: []",
            "Toutes les réponses"
        ],
        correct: 3,
        explanation: "Les validateurs async peuvent retourner Observable ou Promise et sont passés dans asyncValidators.",
        trap: "Les validateurs async ont un délai de validation (debounce recommandé).",
        wrongReasons: ["Toutes les méthodes sont valides."]
    },
    {
        id: 40,
        question: "Comment réinitialiser un formulaire à ses valeurs initiales ?",
        options: [
            "form.reset()",
            "form.reset(initialValues)",
            "form.patchValue(initialValues)",
            "Options A & B selon le besoin"
        ],
        correct: 3,
        explanation: "reset() vide le formulaire. reset(values) remet les valeurs spécifiées.",
        trap: "reset() réinitialise aussi touched/dirty à false.",
        wrongReasons: ["C : patchValue ne réinitialise pas les états."]
    },

    // ============================================
    // ARCHITECTURE - Modules, DI (10 Q)
    // ============================================
    {
        id: 41,
        question: "Comment créer un InjectionToken pour une configuration ?",
        options: [
            "new InjectionToken<Config>('config')",
            "new Token<Config>('config')",
            "@Inject('config')",
            "@Token('config')"
        ],
        correct: 0,
        explanation: "InjectionToken crée un token unique pour l'injection de dépendances.",
        trap: "Utile pour injecter des valeurs (URL, config) qui ne sont pas des classes.",
        wrongReasons: ["B, D : N'existent pas.", "C : Inject utilise un token, ne le crée pas."]
    },
    {
        id: 42,
        question: "Comment fournir une valeur pour un InjectionToken ?",
        options: [
            "providers: [{ provide: MY_TOKEN, useValue: 'valeur' }]",
            "providers: [{ token: MY_TOKEN, value: 'valeur' }]",
            "tokens: [{ MY_TOKEN: 'valeur' }]",
            "MY_TOKEN.provide('valeur')"
        ],
        correct: 0,
        explanation: "useValue permet de fournir une valeur constante pour un token.",
        trap: "useFactory permet de calculer la valeur dynamiquement.",
        wrongReasons: ["B, C, D : Syntaxes invalides."]
    },
    {
        id: 43,
        question: "Quelle différence entre useClass, useValue, useFactory et useExisting ?",
        options: [
            "Aucune",
            "useClass = nouvelle instance, useValue = valeur, useFactory = fonction, useExisting = alias",
            "useValue est déprécié",
            "useFactory est le seul recommandé"
        ],
        correct: 1,
        explanation: "Chaque option a un cas d'usage : classe, constante, calcul dynamique, ou alias vers un autre provider.",
        trap: "useExisting est utile pour exposer un service sous plusieurs tokens.",
        wrongReasons: ["Il y a des différences majeures.", "Tous sont utilisés selon le contexte."]
    },
    {
        id: 44,
        question: "Comment créer un service avec portée limitée à un composant ?",
        options: [
            "@Component({ providers: [MyService] })",
            "@Injectable({ providedIn: 'component' })",
            "Impossible",
            "@Service({ scope: 'component' })"
        ],
        correct: 0,
        explanation: "En ajoutant le service dans providers du composant, chaque instance du composant aura sa propre instance du service.",
        trap: "Les enfants du composant partageront cette instance locale.",
        wrongReasons: ["B : providedIn: 'component' n'existe pas.", "C : Possible.", "D : N'existe pas."]
    },
    {
        id: 45,
        question: "Comment accéder à l'injecteur parent en sautant l'injecteur local ?",
        options: [
            "@SkipSelf() myService: MyService",
            "@Parent() myService: MyService",
            "@Host() myService: MyService",
            "@Inject(PARENT) myService"
        ],
        correct: 0,
        explanation: "@SkipSelf() ignore l'injecteur du composant actuel et cherche chez les parents.",
        trap: "Utile si vous voulez le service parent alors que le composant en fournit un local.",
        wrongReasons: ["B, D : N'existent pas.", "C : @Host limite la recherche."]
    },
    {
        id: 46,
        question: "Comment empêcher la recherche d'un service au-delà du composant hôte ?",
        options: [
            "@Self() myService: MyService",
            "@Host() myService: MyService",
            "@SkipSelf() myService: MyService",
            "@Local() myService: MyService"
        ],
        correct: 1,
        explanation: "@Host() limite la recherche au composant hôte et sa vue.",
        trap: "@Self() cherche UNIQUEMENT dans l'injecteur du composant lui-même.",
        wrongReasons: ["A : Self est plus restrictif.", "C : SkipSelf cherche chez les parents.", "D : N'existe pas."]
    },
    {
        id: 47,
        question: "Comment rendre l'injection d'un service optionnelle ?",
        options: [
            "@Optional() myService: MyService | null",
            "myService?: MyService",
            "@Nullable() myService",
            "{ optional: true }"
        ],
        correct: 0,
        explanation: "@Optional() retourne null au lieu de lever une erreur si le service n'est pas trouvé.",
        trap: "Vérifiez toujours que le service n'est pas null avant de l'utiliser !",
        wrongReasons: ["B : TypeScript optionnel n'affecte pas l'injection.", "C, D : N'existent pas."]
    },
    {
        id: 48,
        question: "Comment re-exporter un module importé pour ses propres consommateurs ?",
        options: [
            "@NgModule({ imports: [ModuleA], exports: [ModuleA] })",
            "@NgModule({ reexports: [ModuleA] })",
            "Impossible",
            "@NgModule({ exports: [ModuleA] }) sans import"
        ],
        correct: 0,
        explanation: "Il faut importer ET exporter le module pour que ses consommateurs y aient accès.",
        trap: "CommonModule est souvent importé et réexporté dans les SharedModules.",
        wrongReasons: ["B : reexports n'existe pas.", "C : Possible.", "D : Il faut importer d'abord."]
    },
    {
        id: 49,
        question: "Comment créer un module de fonctionnalité qui expose uniquement certains composants ?",
        options: [
            "Mettre dans declarations ET exports seulement les composants publics",
            "Utiliser @Public() sur les composants",
            "Créer un fichier public_api.ts",
            "Impossible"
        ],
        correct: 0,
        explanation: "Seuls les éléments dans exports sont accessibles aux modules qui importent celui-ci.",
        trap: "declarations contient TOUS les composants, exports seulement ceux à partager.",
        wrongReasons: ["B : @Public n'existe pas.", "C : Pour les bibliothèques seulement.", "D : Possible."]
    },
    {
        id: 50,
        question: "Comment éviter les imports circulaires entre modules ?",
        options: [
            "Créer un SharedModule pour les dépendances communes",
            "Utiliser forwardRef()",
            "Lazy-loader les modules",
            "Toutes les stratégies sont utiles"
        ],
        correct: 3,
        explanation: "SharedModule, forwardRef et le lazy-loading sont tous des solutions aux dépendances circulaires.",
        trap: "Le meilleur design est d'éviter les dépendances mutuelles dès le départ.",
        wrongReasons: ["Toutes sont des stratégies valides."]
    }
];

window.Section6_DeepCode = Section6_DeepCode;
