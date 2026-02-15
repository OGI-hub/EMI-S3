// ============================================
// QCM QUESTIONS - Interactive Quiz
// With "Work it Out" mode and explanations
// ============================================

const QCM_QUESTIONS = {
    settings: {
        pointsPerCorrect: 10,
        bonusStreak: 5,
        penaltyWrong: 0
    },

    questions: [
        // ========== AUTOMATES ==========
        {
            id: 'q1',
            topic: 'automates',
            topicLabel: 'Automates Finis',
            difficulty: 'facile',
            type: 'qcm',
            workItOut: false,
            question: `Un automate fini déterministe (AFD) est caractérisé par :`,
            options: [
                { id: 'a', text: `Plusieurs transitions possibles pour un même symbole depuis un état` },
                { id: 'b', text: `Exactement une transition par symbole depuis chaque état` },
                { id: 'c', text: `Des ε-transitions (transitions sans lire de symbole)` },
                { id: 'd', text: `Plusieurs états initiaux possibles` }
            ],
            correctAnswer: 'b',
            explanation: `Un AFD (Automate Fini Déterministe) a EXACTEMENT une transition pour chaque paire (état, symbole). 

🎯 Rappel :
• AFD : δ est une FONCTION totale Q × Σ → Q
• AFN : δ est une RELATION Q × Σ → P(Q) (peut retourner plusieurs états ou aucun)

Les ε-transitions et les transitions multiples sont caractéristiques des AFN (non déterministes).`
        },
        {
            id: 'q2',
            topic: 'automates',
            topicLabel: 'Automates Finis',
            difficulty: 'facile',
            type: 'qcm',
            workItOut: false,
            question: `Quel langage est reconnu par un automate avec un seul état qui est à la fois initial et final ?`,
            options: [
                { id: 'a', text: `Le langage vide ∅` },
                { id: 'b', text: `Le langage {ε} (contenant uniquement le mot vide)` },
                { id: 'c', text: `Le langage Σ* (tous les mots possibles)` },
                { id: 'd', text: `Cela dépend des transitions` }
            ],
            correctAnswer: 'd',
            explanation: `La réponse dépend des transitions !

📝 Si l'état a des boucles sur tous les symboles → il accepte Σ*
📝 Si l'état n'a aucune transition → il accepte seulement {ε}
📝 Si l'état a une boucle sur 'a' seulement → il accepte a*

🎯 Point clé : L'état initial étant aussi final signifie que ε est accepté, mais le reste dépend des transitions.`
        },
        {
            id: 'q3',
            topic: 'automates',
            topicLabel: 'Automates Finis',
            difficulty: 'moyen',
            type: 'workItOut',
            workItOut: true,
            question: `Construis un AFD qui reconnaît le langage L = {w ∈ {0,1}* | w se termine par 00}.

✏️ Prends ton papier et dessine l'automate AVANT de regarder la solution !`,
            suggestedTime: 5,
            options: [
                { id: 'a', text: `2 états suffisent` },
                { id: 'b', text: `3 états suffisent` },
                { id: 'c', text: `4 états sont nécessaires` },
                { id: 'd', text: `5 états sont nécessaires` }
            ],
            correctAnswer: 'b',
            explanation: `✅ 3 états suffisent !

📝 Construction :
• q0 : état initial (on n'a pas encore de 0)
• q1 : on vient de lire un 0
• q2 : on vient de lire deux 0 (état FINAL)

Transitions :
┌────┬────┬────┐
│    │ 0  │ 1  │
├────┼────┼────┤
│ q0 │ q1 │ q0 │
│ q1 │ q2 │ q0 │
│ q2 │ q2 │ q0 │
└────┴────┴────┘

🎯 Astuce : Pour "se termine par X", tu as besoin de |X|+1 états pour mémoriser les derniers symboles.`
        },
        {
            id: 'q4',
            topic: 'automates',
            topicLabel: 'Automates Finis',
            difficulty: 'moyen',
            type: 'workItOut',
            workItOut: true,
            question: `Combien d'états faut-il pour un AFD reconnaissant les multiples de 7 en binaire ?

✏️ Réfléchis au principe avant de répondre !`,
            suggestedTime: 3,
            options: [
                { id: 'a', text: `3 états` },
                { id: 'b', text: `7 états` },
                { id: 'c', text: `8 états` },
                { id: 'd', text: `14 états` }
            ],
            correctAnswer: 'b',
            explanation: `✅ 7 états !

📝 Principe : Chaque état représente le reste de la division par 7.
• État q0 : reste 0 (FINAL - c'est un multiple de 7)
• État q1 : reste 1
• ...
• État q6 : reste 6

Transitions :
• δ(qi, 0) = q(2i mod 7)  [multiplier par 2]
• δ(qi, 1) = q((2i+1) mod 7)  [multiplier par 2 et ajouter 1]

🎯 Cette question est tombée à l'examen 2024-2025 !`
        },
        {
            id: 'q5',
            topic: 'automates',
            topicLabel: 'Automates Finis',
            difficulty: 'difficile',
            type: 'qcm',
            workItOut: false,
            question: `Lors de la déterminisation d'un AFN à n états, combien d'états peut avoir l'AFD résultant au maximum ?`,
            options: [
                { id: 'a', text: `n états` },
                { id: 'b', text: `n² états` },
                { id: 'c', text: `2ⁿ états` },
                { id: 'd', text: `n! états` }
            ],
            correctAnswer: 'c',
            explanation: `✅ 2ⁿ états au maximum !

📝 Explication : Chaque état du AFD est un SOUS-ENSEMBLE d'états du AFN.
• Un ensemble de n éléments a 2ⁿ sous-ensembles possibles.
• Donc l'AFD peut avoir jusqu'à 2ⁿ états.

⚠️ En pratique, beaucoup de ces sous-ensembles ne sont pas atteignables, donc l'AFD réel est souvent plus petit.

🎯 C'est l'explosion exponentielle de la déterminisation !`
        },

        // ========== EXPRESSIONS RÉGULIÈRES ==========
        {
            id: 'q6',
            topic: 'regex',
            topicLabel: 'Expressions Régulières',
            difficulty: 'facile',
            type: 'qcm',
            workItOut: false,
            question: `Que vaut ∅* (l'étoile de l'ensemble vide) ?`,
            options: [
                { id: 'a', text: `∅ (l'ensemble vide)` },
                { id: 'b', text: `{ε} (l'ensemble contenant le mot vide)` },
                { id: 'c', text: `Σ* (tous les mots)` },
                { id: 'd', text: `C'est indéfini` }
            ],
            correctAnswer: 'b',
            explanation: `✅ ∅* = {ε} !

📝 Rappel : L* = ε ∪ L ∪ L² ∪ L³ ∪ ...

Si L = ∅ :
• L⁰ = {ε} (par convention)
• L¹ = ∅
• L² = ∅·∅ = ∅
• ...

Donc ∅* = {ε} ∪ ∅ ∪ ∅ ∪ ... = {ε}

🎯 Piège classique à l'examen ! ∅* ≠ ∅`
        },
        {
            id: 'q7',
            topic: 'regex',
            topicLabel: 'Expressions Régulières',
            difficulty: 'moyen',
            type: 'qcm',
            workItOut: false,
            question: `Laquelle de ces égalités est FAUSSE ?`,
            options: [
                { id: 'a', text: `(L*)* = L*` },
                { id: 'b', text: `L* · L* = L*` },
                { id: 'c', text: `(L + M)* = L* + M*` },
                { id: 'd', text: `(ε + L)* = L*` }
            ],
            correctAnswer: 'c',
            explanation: `✅ (L + M)* ≠ L* + M* en général !

📝 Contre-exemple :
• L = {a}, M = {b}
• L* + M* = {ε, a, aa, ...} ∪ {ε, b, bb, ...}
• (L + M)* = {ε, a, b, ab, ba, aab, aba, ...}

Le mot "ab" ∈ (L+M)* mais "ab" ∉ L* + M*.

🎯 Les autres égalités sont toutes vraies ! À retenir par cœur.`
        },
        {
            id: 'q8',
            topic: 'regex',
            topicLabel: 'Expressions Régulières',
            difficulty: 'moyen',
            type: 'workItOut',
            workItOut: true,
            question: `Donne deux mots appartenant et deux mots n'appartenant PAS au langage (a + ba + bb)Σ*.

✏️ Réfléchis aux préfixes possibles !`,
            suggestedTime: 2,
            options: [
                { id: 'a', text: `Appartenant : a, bab | Non appartenant : b, ab` },
                { id: 'b', text: `Appartenant : a, baaa | Non appartenant : b, bc` },
                { id: 'c', text: `Appartenant : ab, bba | Non appartenant : b, ε` },
                { id: 'd', text: `Appartenant : a, bba | Non appartenant : b, ε` }
            ],
            correctAnswer: 'd',
            explanation: `✅ L = (a + ba + bb)Σ* = mots commençant par a, ba, ou bb.

📝 Appartenant :
• "a" (commence par a)
• "bba" (commence par bb)
• "baxy" (commence par ba)

📝 Non appartenant :
• "b" (ne commence ni par ba ni par bb)
• "ε" (mot vide - ne commence par rien)
• "bc" (commence par b mais pas par ba ni bb)

🎯 Le langage accepte tout mot commençant par a, ba ou bb.`
        },

        // ========== GRAMMAIRES ==========
        {
            id: 'q9',
            topic: 'grammaires',
            topicLabel: 'Grammaires LL(1)',
            difficulty: 'facile',
            type: 'qcm',
            workItOut: false,
            question: `PREMIER(A) contient ε si et seulement si :`,
            options: [
                { id: 'a', text: `A est l'axiome de la grammaire` },
                { id: 'b', text: `A peut dériver en le mot vide (A ⟹* ε)` },
                { id: 'c', text: `A est un terminal` },
                { id: 'd', text: `A n'apparaît dans aucune règle` }
            ],
            correctAnswer: 'b',
            explanation: `✅ ε ∈ PREMIER(A) ssi A ⟹* ε

📝 PREMIER(A) = ensemble des terminaux qui peuvent commencer une dérivation de A.
• Si A → ε est une règle, alors ε ∈ PREMIER(A).
• Si A → BC et B ⟹* ε et C ⟹* ε, alors ε ∈ PREMIER(A).

🎯 Pour calculer les non-terminaux annulables, fais un point fixe !`
        },
        {
            id: 'q10',
            topic: 'grammaires',
            topicLabel: 'Grammaires LL(1)',
            difficulty: 'moyen',
            type: 'workItOut',
            workItOut: true,
            question: `Soit la grammaire :
E → T E'
E' → + T E' | ε
T → F T'
T' → * F T' | ε
F → ( E ) | id

Calcule PREMIER(E').

✏️ Prends ton papier et applique l'algorithme !`,
            suggestedTime: 3,
            options: [
                { id: 'a', text: `PREMIER(E') = {+}` },
                { id: 'b', text: `PREMIER(E') = {+, ε}` },
                { id: 'c', text: `PREMIER(E') = {+, *, ε}` },
                { id: 'd', text: `PREMIER(E') = {(, id, +, ε}` }
            ],
            correctAnswer: 'b',
            explanation: `✅ PREMIER(E') = {+, ε}

📝 Calcul :
• Règle E' → + T E' : Le premier symbole est +, donc + ∈ PREMIER(E')
• Règle E' → ε : Donc ε ∈ PREMIER(E')

PREMIER(E') = {+, ε}

🎯 C'est le calcul de base pour vérifier LL(1) !`
        },
        {
            id: 'q11',
            topic: 'grammaires',
            topicLabel: 'Grammaires LL(1)',
            difficulty: 'moyen',
            type: 'workItOut',
            workItOut: true,
            question: `Même grammaire. Calcule SUIVANT(T).

✏️ Cherche toutes les occurrences de T dans les règles !`,
            suggestedTime: 4,
            options: [
                { id: 'a', text: `SUIVANT(T) = {+}` },
                { id: 'b', text: `SUIVANT(T) = {+, ), $}` },
                { id: 'c', text: `SUIVANT(T) = {*, +, ), $}` },
                { id: 'd', text: `SUIVANT(T) = {), $}` }
            ],
            correctAnswer: 'b',
            explanation: `✅ SUIVANT(T) = {+, ), $}

📝 Analyse des règles :
• E → T E' : T est suivi de E'
  - PREMIER(E') - {ε} = {+} → ajoute +
  - ε ∈ PREMIER(E') → ajoute SUIVANT(E') = SUIVANT(E) = {), $}
• E' → + T E' : T est suivi de E'
  - Même raisonnement

Donc SUIVANT(T) = {+} ∪ {), $} = {+, ), $}

🎯 Le * n'est PAS dans SUIVANT(T), il est dans SUIVANT(F) !`
        },
        {
            id: 'q12',
            topic: 'grammaires',
            topicLabel: 'Grammaires LL(1)',
            difficulty: 'difficile',
            type: 'workItOut',
            workItOut: true,
            question: `Une grammaire est LL(1) si et seulement si :`,
            suggestedTime: 2,
            options: [
                { id: 'a', text: `Elle n'a pas de récursivité à gauche` },
                { id: 'b', text: `Les DIRECTEURS de règles d'un même non-terminal sont disjoints` },
                { id: 'c', text: `Elle est non ambiguë` },
                { id: 'd', text: `Toutes les règles commencent par un terminal` }
            ],
            correctAnswer: 'b',
            explanation: `✅ La condition LL(1) : DIRECTEURs disjoints !

📝 Formellement :
Pour tout non-terminal A avec règles A → α₁ | α₂ | ... | αₙ :
DIRECTEUR(A → αᵢ) ∩ DIRECTEUR(A → αⱼ) = ∅ pour i ≠ j

📝 Remarques :
• Pas de récursivité à gauche est NÉCESSAIRE mais pas SUFFISANT
• Non ambiguë est NÉCESSAIRE mais pas SUFFISANT
• On peut avoir des règles ne commençant pas par un terminal

🎯 La condition LL(1) permet de choisir LA bonne règle avec un seul symbole de lookahead.`
        },

        // ========== COMPILATION ==========
        {
            id: 'q13',
            topic: 'compilation',
            topicLabel: 'Compilation',
            difficulty: 'facile',
            type: 'qcm',
            workItOut: false,
            question: `Quelle phase du compilateur génère les tokens (unités lexicales) ?`,
            options: [
                { id: 'a', text: `L'analyse syntaxique` },
                { id: 'b', text: `L'analyse lexicale` },
                { id: 'c', text: `L'analyse sémantique` },
                { id: 'd', text: `L'optimisation de code` }
            ],
            correctAnswer: 'b',
            explanation: `✅ L'analyse LEXICALE génère les tokens !

📝 Les 6 phases d'un compilateur :

1. Analyse LEXICALE → tokens (<id,1>, <+>, <num,60>)
2. Analyse SYNTAXIQUE → arbre syntaxique
3. Analyse SÉMANTIQUE → vérification des types
4. Génération de code intermédiaire
5. Optimisation
6. Génération de code cible

🎯 Mnémotechnique : "LeSS CODE" (Lexical, Syntaxique, Sémantique, CODE)`
        },
        {
            id: 'q14',
            topic: 'compilation',
            topicLabel: 'Compilation',
            difficulty: 'facile',
            type: 'qcm',
            workItOut: false,
            question: `Quelle est la différence fondamentale entre un compilateur et un interpréteur ?`,
            options: [
                { id: 'a', text: `Un compilateur est plus rapide qu'un interpréteur` },
                { id: 'b', text: `Un compilateur traduit tout le code avant l'exécution, un interpréteur exécute ligne par ligne` },
                { id: 'c', text: `Un compilateur ne peut pas détecter les erreurs` },
                { id: 'd', text: `Un interpréteur produit toujours du code machine` }
            ],
            correctAnswer: 'b',
            explanation: `✅ Compilateur = traduction AVANT exécution, Interpréteur = exécution PENDANT lecture.

📝 Compilateur :
• Traduit TOUT le programme avant exécution
• Produit un exécutable
• Exemples : C, C++, Go, Rust

📝 Interpréteur :
• Lit et exécute directement le code source
• Pas d'exécutable produit
• Exemples : Python, JavaScript, Ruby

📝 Hybride :
• Compilation en code intermédiaire + JIT
• Exemple : Java (bytecode + JVM)`
        },
        {
            id: 'q15',
            topic: 'compilation',
            topicLabel: 'Compilation',
            difficulty: 'moyen',
            type: 'qcm',
            workItOut: false,
            question: `Dans l'expression "position = initial + rate * 60", quel est le résultat de l'analyse lexicale ?`,
            options: [
                { id: 'a', text: `Un arbre syntaxique avec les opérateurs à la racine` },
                { id: 'b', text: `Une séquence de tokens : <id,1> <=> <id,2> <+> <id,3> <*> <num,60>` },
                { id: 'c', text: `Le code machine correspondant` },
                { id: 'd', text: `Une vérification que les types sont compatibles` }
            ],
            correctAnswer: 'b',
            explanation: `✅ L'analyseur lexical produit une séquence de TOKENS !

📝 Pour "position = initial + rate * 60" :
• position → <id, 1> (identifiant, entrée 1 dans la table des symboles)
• = → <=>  (opérateur d'affectation)
• initial → <id, 2>
• + → <+>
• rate → <id, 3>
• * → <*>
• 60 → <num, 60>

🎯 Les tokens sont les "mots" du langage, l'arbre syntaxique vient APRÈS (analyse syntaxique).`
        }
    ]
};

// Fonctions utilitaires
function getQuestionsByTopic(topic) {
    return QCM_QUESTIONS.questions.filter(q => q.topic === topic);
}

function getQuestionsByDifficulty(difficulty) {
    return QCM_QUESTIONS.questions.filter(q => q.difficulty === difficulty);
}

function getWorkItOutQuestions() {
    return QCM_QUESTIONS.questions.filter(q => q.workItOut);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getQuizSet(count = 10, topic = null, difficulty = null) {
    let questions = [...QCM_QUESTIONS.questions];

    if (topic) {
        questions = questions.filter(q => q.topic === topic);
    }

    if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty);
    }

    return shuffleArray(questions).slice(0, count);
}
