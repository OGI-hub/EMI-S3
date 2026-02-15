/**
 * ============================================
 * Angular Exam Prep - Main Data Store
 * ============================================
 * 
 * This file combines all sections and provides
 * additional study materials (reflexes, tips, etc.)
 * 
 * STRUCTURE:
 * - Section 1: 40 questions from Angular Course (Part 1 & 2)
 * - Section 2: 60 questions from Previous Exams
 * - Section 3: Questions from Screenshots
 * - Section 4: 30 Predictions
 * - Section 5: 40 Code & Architecture
 * - Section 6: 50 Deep Code (5 Pillars)
 * - Section 7: 26 Focus Examens (Routing, HTTP, Pipes, Dynamique)
 * ============================================
 */

const ExamData = {

    // ============================================
    // RÉFLEXES "SI TU VOIS X → PENSE Y" (68 items)
    // ============================================
    reflexes: [
        // Directives & Templates
        { trigger: "*ngIf, *ngFor", response: "Directive STRUCTURELLE (modifie le DOM)" },
        { trigger: "trackBy", response: "Optimise *ngFor (évite re-render inutile)" },
        { trigger: "[ngClass], [ngStyle]", response: "Directive d'ATTRIBUT (modifie apparence)" },
        { trigger: "ng-container", response: "Conteneur INVISIBLE (pas de noeud DOM)" },
        { trigger: "ng-template", response: "Bloc réutilisable NON rendu par défaut" },
        { trigger: "ng-content", response: "Content Projection (slot pour contenu parent)" },
        { trigger: "ngTemplateOutlet", response: "Affiche un ng-template par référence" },

        // Data Binding
        { trigger: "@Input()", response: "Données PARENT → ENFANT" },
        { trigger: "@Output() + EventEmitter", response: "Événements ENFANT → PARENT" },
        { trigger: "[(ngModel)]", response: "Two-way binding + FormsModule obligatoire" },
        { trigger: "[property]", response: "Property Binding (Parent → Enfant)" },
        { trigger: "(event)", response: "Event Binding (Enfant → Parent)" },
        { trigger: "{{ expression }}", response: "Interpolation (affichage texte)" },

        // Services & DI
        { trigger: "@Injectable()", response: "SERVICE injectable via DI" },
        { trigger: "providedIn: 'root'", response: "Singleton GLOBAL + Tree-shakable" },
        { trigger: "providers: []", response: "Instance par MODULE ou COMPOSANT" },
        { trigger: "@Inject(TOKEN)", response: "Injection d'un InjectionToken" },
        { trigger: "@Optional()", response: "Injection optionnelle (null si absent)" },
        { trigger: "@SkipSelf()", response: "Cherche dans l'injecteur PARENT" },

        // HTTP
        { trigger: "HTTP_INTERCEPTORS", response: "Enregistre un HttpInterceptor global" },
        { trigger: "req.clone()", response: "Requête HTTP IMMUTABLE (cloner pour modifier)" },

        // RxJS & Observables
        { trigger: "subscribe()", response: "Démarre l'Observable (penser unsubscribe)" },
        { trigger: "async pipe", response: "Auto-subscribe ET auto-unsubscribe" },
        { trigger: "switchMap", response: "ANNULE le précédent (recherche)" },
        { trigger: "mergeMap", response: "PARALLÈLE (garde tous les flux)" },
        { trigger: "concatMap", response: "SÉQUENTIEL (file d'attente)" },
        { trigger: "exhaustMap", response: "IGNORE les nouveaux (anti-double-clic)" },
        { trigger: "forkJoin", response: "Attendre que TOUS finissent" },
        { trigger: "combineLatest", response: "Émet quand N'IMPORTE LEQUEL émet" },
        { trigger: "BehaviorSubject", response: "Subject avec valeur INITIALE" },
        { trigger: "catchError", response: "Gestion d'erreur + retourne Observable" },
        { trigger: "tap()", response: "Side-effect SANS modifier la donnée" },
        { trigger: "finalize()", response: "Code à la FIN (loading spinner)" },
        { trigger: "shareReplay(1)", response: "Partage + CACHE d'Observable" },
        { trigger: "takeUntilDestroyed()", response: "Auto-unsubscribe lié au cycle de vie" },

        // Forms
        { trigger: "FormGroup, FormControl", response: "Reactive Forms + ReactiveFormsModule" },
        { trigger: "formControlName", response: "Lie un input à un FormControl" },
        { trigger: "FormArray", response: "Liste DYNAMIQUE de contrôles" },
        { trigger: "FormBuilder", response: "Raccourci pour créer des forms réactifs" },
        { trigger: "patchValue()", response: "Met à jour PARTIELLEMENT le form" },
        { trigger: "setValue()", response: "Met à jour TOUS les champs (erreur sinon)" },
        { trigger: "valueChanges", response: "Observable des modifications" },
        { trigger: "Validators.required", response: "Validateur synchrone" },
        { trigger: "markAllAsTouched()", response: "Affiche toutes les ERREURS de validation" },
        { trigger: "AsyncValidatorFn", response: "Validateur ASYNC (Observable/Promise)" },

        // Routing
        { trigger: ":param dans route", response: "Paramètre DYNAMIQUE d'URL" },
        { trigger: "canActivate", response: "Guard d'ENTRÉE dans une route" },
        { trigger: "canDeactivate", response: "Guard de SORTIE (données non sauvées)" },
        { trigger: "loadChildren", response: "Lazy Loading de module" },
        { trigger: "ActivatedRoute.snapshot", response: "Paramètres INSTANTANÉS (non Observable)" },
        { trigger: "ActivatedRoute.params / queryParams", response: "Paramètres en OBSERVABLE" },
        { trigger: "resolve", response: "Pré-chargement des données AVANT route" },

        // Lifecycle
        { trigger: "ngOnInit", response: "Initialisation APRÈS le constructeur" },
        { trigger: "ngOnChanges", response: "Réagit aux changements d'@Input" },
        { trigger: "ngOnDestroy", response: "CLEANUP (unsubscribe, timers...)" },
        { trigger: "ngAfterViewInit", response: "@ViewChild DISPONIBLE ici" },

        // Change Detection
        { trigger: "ChangeDetectionStrategy.OnPush", response: "Change Detection sur Input/Observable/evt uniquement" },
        { trigger: "ChangeDetectorRef.detectChanges()", response: "Force la détection manuelle" },

        // DOM & View
        { trigger: "@HostListener", response: "Écoute événements sur host/window/document" },
        { trigger: "@HostBinding", response: "Lie class/style sur l'élément HÔTE" },
        { trigger: "@ViewChildren", response: "Plusieurs éléments -> QueryList" },
        { trigger: "@ViewChild vs @ContentChild", response: "Vue du composant vs contenu projeté" },

        // Modern Angular
        { trigger: "signal()", response: "Variable réactive (Angular 16+)" },
        { trigger: "computed()", response: "Signal dérivé recalculé automatiquement" },
        { trigger: "effect()", response: "Réagit aux changements des signaux" },
        { trigger: "@defer", response: "Lazy-load avec placeholder/fallback" },
        { trigger: "@if / @for / @switch", response: "Nouveau control flow (Angular 17+)" },
        { trigger: "standalone: true", response: "Composant sans NgModule" }
    ],

    // ============================================
    // DISTINCTIONS CRITIQUES
    // ============================================
    distinctions: [
        {
            title: "pristine vs dirty vs touched",
            leftTitle: "État initial",
            rightTitle: "Après interaction",
            left: ["pristine: true (valeur non modifiée)", "dirty: false", "untouched: true (pas de blur)"],
            right: ["pristine: false (après 1ère modif)", "dirty: true (valeur changée)", "touched: true (après blur)"]
        },
        {
            title: "Template-Driven vs Reactive Forms",
            leftTitle: "Template-Driven",
            rightTitle: "Reactive",
            left: ["FormsModule", "ngModel dans template", "Validation dans template", "Simple, peu de contrôle"],
            right: ["ReactiveFormsModule", "FormGroup/FormControl dans TS", "Validation dans code", "Complexe, contrôle total"]
        },
        {
            title: "Observable vs Promise",
            leftTitle: "Observable",
            rightTitle: "Promise",
            left: ["Lazy (exécute sur subscribe)", "Peut émettre PLUSIEURS valeurs", "Annulable (unsubscribe)", "Opérateurs RxJS"],
            right: ["Eager (exécute immédiatement)", "UNE seule valeur", "Non annulable", "async/await natif"]
        },
        {
            title: "Subject vs BehaviorSubject",
            leftTitle: "Subject",
            rightTitle: "BehaviorSubject",
            left: ["Pas de valeur initiale", "Nouveaux abonnés ratent valeurs passées", "next() pour émettre"],
            right: ["Valeur initiale obligatoire", "Émet dernière valeur aux nouveaux abonnés", "getValue() disponible"]
        },
        {
            title: "providedIn: 'root' vs providers: []",
            leftTitle: "providedIn: 'root'",
            rightTitle: "providers: [Service]",
            left: ["Tree-shakable", "Singleton global", "Déclaré dans le service", "Recommandé"],
            right: ["Pas tree-shakable", "Instance par module/composant", "Déclaré dans module", "Cas spécifiques"]
        }
    ],

    // ============================================
    // PIÈGES COURANTS
    // ============================================
    traps: [
        { title: "Observable sans subscribe()", description: "La requête HTTP n'est JAMAIS exécutée sans .subscribe()", correct: "http.get(url).subscribe(data => ...)", incorrect: "http.get(url) // rien ne se passe" },
        { title: "minLength vérifie les CARACTÈRES", description: "Validators.minLength(5) vérifie que la chaîne a 5+ caractères, PAS que le nombre >= 5", correct: "minLength(5): '12345' valide", incorrect: "Croire que 5 valide minLength(5)" },
        { title: "pristine ≠ untouched", description: "pristine = valeur non modifiée, untouched = champ non visité (blur)", correct: "Tester les deux séparément", incorrect: "Les confondre" },
        { title: "formControlName vs [formControl]", description: "formControlName='x' dans formGroup, [formControl] pour standalone", correct: "Dans formGroup: formControlName=\"email\"", incorrect: "[formControlName]=\"emailControl\"" },
        { title: "Route param syntax", description: "Angular utilise :param, pas {param}", correct: "/users/:id", incorrect: "/users/{id}" },
        { title: "FormsModule vs ReactiveFormsModule", description: "ngModel → FormsModule, FormGroup → ReactiveFormsModule", correct: "Importer le bon module", incorrect: "Mélanger les deux" },
        { title: "CORS en déploiement séparé", description: "Si Angular et backend sur ports différents, configurer CORS côté serveur", correct: "Ajouter headers CORS dans Express", incorrect: "Ignorer l'erreur CORS" },
        { title: "setValue vs patchValue", description: "setValue exige TOUTES les propriétés, patchValue accepte un sous-ensemble", correct: "patchValue({email: 'x'}) partiel OK", incorrect: "setValue({email: 'x'}) -> erreur" }
    ],

    // ============================================
    // POINTS CRITIQUES
    // ============================================
    criticalPoints: [
        "Observable sans subscribe() = requête jamais exécutée",
        "pristine ≠ untouched (modification vs visite)",
        "FormsModule pour ngModel, ReactiveFormsModule pour FormGroup",
        "minLength(n) vérifie les CARACTÈRES, pas la valeur numérique",
        "Subject.next() pour émettre, pas .emit()",
        "Route param: /path/:id (deux-points, pas accolades)",
        "Toujours unsubscribe dans ngOnDestroy (sauf async pipe)",
        "CORS requis si déploiement séparé (différents ports)"
    ]
};

// Make globally available
window.ExamData = ExamData;
