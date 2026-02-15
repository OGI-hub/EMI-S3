/**
 * SECTION 3: SCREENSHOTS & ANALYSE DE CODE - 12 Questions ENRICHIES
 * Focus sur la lecture de code et l'identification visuelle.
 */

const Section3_Screenshots = [
    {
        id: 1,
        question: "Que manque-t-il dans '@Input() count: number;' pour fonctionner ?",
        options: ["Import de Input depuis @angular/core", "Une valeur initiale", "Le décorateur @Component", "Rien, c'est correct"],
        correct: 0,
        explanation: "Chaque décorateur doit être importé explicitement de son package d'origine.",
        trap: "En examen sur papier, on oublie facilement l'import visible uniquement en haut du fichier.",
        wrongReasons: ["Angular autorise les propriétés sans valeur initiale.", "Le @Component est sur la classe.", "Ce n'est pas correct sans import."]
    },
    {
        id: 2,
        question: "Analyse : <div *ngIf=\"user\">{{ user.name }}</div>. Que se passe-t-il si 'user' est null ?",
        options: ["L'app plante", "Le <div> n'est pas rendu, aucune erreur", "Le texte 'null' s'affiche", "Une erreur s'affiche"],
        correct: 1,
        explanation: "*ngIf retire l'élément du DOM si la condition est fausse, empêchant l'interpolation de s'exécuter.",
        trap: "C'est la méthode de sécurité numéro 1 pour éviter les erreurs 'null pointer'.",
        wrongReasons: ["L'app ne plante pas.", "Le texte ne s'affiche pas.", "Aucune erreur n'apparaît."]
    },
    {
        id: 3,
        question: "Dans *ngFor, comment obtenir l'index de l'élément actuel ?",
        options: ["let i = index", "let i of index", "index as i", "Options A & C valides"],
        correct: 3,
        explanation: "Angular permet de capturer 'index', 'first', 'last' dans le micro-syntaxe du *ngFor.",
        trap: "C'est 'let i = index' ou 'index as i', jamais 'let i of index'.",
        wrongReasons: ["B : 'of' est réservé à la collection source."]
    },
    {
        id: 4,
        question: "Que fait 'ng-container' dans le DOM final ?",
        options: ["Il crée une <div>", "Il crée une <section>", "Il ne crée rien", "Il crée un commentaire"],
        correct: 2,
        explanation: "ng-container est une balise logique qui disparaît après compilation.",
        trap: "Utile pour appliquer *ngIf et *ngFor sur ce qui semble être le même niveau.",
        wrongReasons: ["Il n'est pas converti en div.", "Aucun tag HTML n'est généré.", "Ce n'est pas un commentaire."]
    },
    {
        id: 5,
        question: "Quelle syntaxe est correcte pour le Two-Way Binding ?",
        options: ["[ngModel]", "(ngModel)", "[(ngModel)]", "{{ngModel}}"],
        correct: 2,
        explanation: "La syntaxe 'banana in a box' [( )] combine Property et Event Binding.",
        trap: "ngModel nécessite l'import de FormsModule.",
        wrongReasons: ["[ ] = Property binding seul.", "( ) = Event binding seul.", "{{ }} = interpolation."]
    },
    {
        id: 6,
        question: "Comment s'appelle cette syntaxe : {{ user?.name }} ?",
        options: ["Null coalescing", "Optional chaining", "Elvis operator", "Safe navigation"],
        correct: 3,
        explanation: "En Angular, on l'appelle 'Safe navigation operator' ou 'Elvis operator' (?.).",
        trap: "En JavaScript moderne, c'est 'Optional chaining', mais Angular a son propre nom.",
        wrongReasons: ["Null coalescing est ??.", "Les deux termes sont parfois interchangés."]
    },
    {
        id: 7,
        question: "Quel est le problème avec : <button (click)=\"save()\">Save</button> dans une form ?",
        options: ["Rien", "Le type par défaut est 'submit'", "Erreur de syntaxe", "Le binding est faux"],
        correct: 1,
        explanation: "Sans type='button', un bouton dans une form a le type 'submit' par défaut.",
        trap: "Cela peut déclencher une soumission de formulaire non désirée.",
        wrongReasons: ["Le binding est correct.", "La syntaxe est correcte."]
    },
    {
        id: 8,
        question: "Comment appeler une méthode du composant enfant depuis le parent ?",
        options: ["@Input", "@Output", "@ViewChild", "EventEmitter"],
        correct: 2,
        explanation: "@ViewChild permet d'obtenir une référence au composant enfant et d'appeler ses méthodes.",
        trap: "Cette référence n'est disponible qu'après ngAfterViewInit.",
        wrongReasons: ["@Input passe des données.", "@Output émet des événements.", "EventEmitter est utilisé par @Output."]
    },
    {
        id: 9,
        question: "Quelle est la différence entre [class.active]='isActive' et [ngClass]='{active: isActive}' ?",
        options: ["Aucune", "La première est plus performante", "La seconde permet plusieurs classes", "La première est dépréciée"],
        correct: 2,
        explanation: "ngClass permet de gérer plusieurs classes conditionnelles dans un seul binding.",
        trap: "Pour une seule classe, [class.x] est plus lisible.",
        wrongReasons: ["Les deux sont fonctionnellement équivalentes pour une classe.", "La première n'est pas dépréciée."]
    },
    {
        id: 10,
        question: "Que signifie 'exportAs' dans une directive ?",
        options: ["Exporte vers un autre module", "Permet d'accéder à la directive via une variable de référence", "Exporte le template", "Rien"],
        correct: 1,
        explanation: "exportAs permet d'utiliser #ref='myDirective' dans le template.",
        trap: "C'est ainsi que ngModel exporte son FormControl.",
        wrongReasons: ["Ce n'est pas lié aux modules.", "Ce n'est pas lié aux templates."]
    },
    {
        id: 1,
        question: "Comment accéder à un élément natif du DOM dans un composant ?",
        options: ["document.getElementById", "ElementRef", "@ViewChild avec nativeElement", "Options B & C valides"],
        correct: 3,
        explanation: "ElementRef et @ViewChild permettent d'accéder au DOM de manière Angular-friendly.",
        trap: "document.getElementById fonctionne mais n'est pas recommandé car non typé et difficile à tester.",
        wrongReasons: ["document.getElementById contourne Angular.", "B et C sont les méthodes propres."]
    }
];

window.Section3_Screenshots = Section3_Screenshots;
