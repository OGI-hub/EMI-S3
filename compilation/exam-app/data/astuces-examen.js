// ============================================
// ASTUCES EXAMEN - Practical Exam Tips
// "Si tu vois X, pense Y" format
// ============================================

const ASTUCES_EXAMEN = {
    categories: [
        {
            id: 'automates',
            title: 'Automates Finis',
            icon: '🔄',
            color: '#6366f1',
            astuces: [
                {
                    id: 'aut1',
                    trigger: 'L = {w | w se termine par 00}',
                    action: 'Dessine un automate avec 3 états',
                    explication: `➡️ État q0 : état initial (pas encore de 0)
➡️ État q1 : on a vu un seul 0
➡️ État q2 : on a vu deux 0 (état final)

🎯 ASTUCE CLÉ : Pour "se termine par X", tu as besoin de |X|+1 états où tu "mémorises" les derniers symboles lus.

📝 CONSTRUCTION :
• q0 --0--> q1, q0 --1--> q0
• q1 --0--> q2, q1 --1--> q0  
• q2 --0--> q2, q2 --1--> q0
• État final : q2`,
                    difficulty: 1,
                    examFrequency: 'Très fréquent'
                },
                {
                    id: 'aut2',
                    trigger: 'L = {w | w contient au moins trois 1}',
                    action: 'Compte avec les états (0, 1, 2, 3+ occurrences)',
                    explication: `➡️ Crée 4 états : q0, q1, q2, q3

🎯 ASTUCE CLÉ : Pour "au moins n fois", tu as besoin de n+1 états qui comptent les occurrences.

📝 CONSTRUCTION :
• qi --1--> q(i+1) pour i < 3
• qi --0--> qi pour tout i
• q3 --0--> q3, q3 --1--> q3 (on reste dans l'état final)
• État final : q3

⚠️ PIÈGE COURANT : Ne pas oublier les boucles sur l'état final !`,
                    difficulty: 1,
                    examFrequency: 'Très fréquent'
                },
                {
                    id: 'aut3',
                    trigger: 'L = {w | w commence par 1}',
                    action: 'Un seul choix au départ, puis tout accepter',
                    explication: `➡️ État initial q0 : attend le premier symbole
➡️ État q1 : a reçu 1, accepte tout
➡️ État q2 (puits) : a reçu 0, rejette tout

🎯 ASTUCE CLÉ : Pour "commence par X", vérifie juste le(s) premier(s) symbole(s), puis boucle.

📝 CONSTRUCTION :
• q0 --1--> q1, q0 --0--> q2
• q1 --0,1--> q1 (boucle)
• q2 --0,1--> q2 (puits)
• État final : q1`,
                    difficulty: 1,
                    examFrequency: 'Fréquent'
                },
                {
                    id: 'aut4',
                    trigger: 'L = {w | |w| ≤ 5} (taille au plus 5)',
                    action: 'Chaîne de 6 états + état puits',
                    explication: `➡️ États q0 à q5 : acceptent les mots de taille 0 à 5
➡️ État q6 (puits) : rejette les mots trop longs

🎯 ASTUCE CLÉ : Pour une contrainte sur la taille, crée une chaîne d'états de longueur n+1.

📝 CONSTRUCTION :
• q0 --a,b--> q1 --a,b--> q2 --a,b--> ... --a,b--> q5
• q5 --a,b--> q6 (puits)
• q6 --a,b--> q6
• États finaux : q0, q1, q2, q3, q4, q5`,
                    difficulty: 1,
                    examFrequency: 'Fréquent (examen 2024-2025)'
                },
                {
                    id: 'aut5',
                    trigger: 'L = {w | w est un multiple de n en binaire}',
                    action: 'Automate à n états représentant les restes mod n',
                    explication: `➡️ Chaque état qi représente le reste i mod n
➡️ Lecture d'un bit : nouveau_reste = (ancien_reste × 2 + bit) mod n

🎯 ASTUCE CLÉ EXAMEN 2024-2025 : Pour les multiples de 7 :
• 7 états : q0 (reste 0) à q6 (reste 6)
• δ(qi, 0) = q(2i mod 7)
• δ(qi, 1) = q((2i+1) mod 7)
• État final : q0 (reste = 0 = multiple de 7)

📝 EXEMPLE pour q3 :
• δ(q3, 0) = q(6 mod 7) = q6
• δ(q3, 1) = q(7 mod 7) = q0`,
                    difficulty: 3,
                    examFrequency: 'Examen 2024-2025!'
                },
                {
                    id: 'aut6',
                    trigger: 'Déterminiser un AFN (automate non déterministe)',
                    action: 'Algorithme des sous-ensembles (subset construction)',
                    explication: `🎯 MÉTHODE :
1. État initial du AFD = {états initiaux du AFN}
2. Pour chaque sous-ensemble S et symbole a :
   δ'(S, a) = ∪{δ(q, a) | q ∈ S}
3. Un état du AFD est final ssi il contient un état final du AFN

📝 ÉTAPES CONCRÈTES :
• Commence avec {q0} (ou ε-fermeture si ε-transitions)
• Pour chaque nouveau sous-ensemble, calcule les transitions
• Continue jusqu'à ce qu'il n'y ait plus de nouveaux sous-ensembles

⚠️ PIÈGE : N'oublie pas l'ε-fermeture avant ET après chaque transition !`,
                    difficulty: 2,
                    examFrequency: 'Très fréquent dans les TDs'
                }
            ]
        },
        {
            id: 'regex',
            title: 'Expressions Régulières',
            icon: '✨',
            color: '#8b5cf6',
            astuces: [
                {
                    id: 'reg1',
                    trigger: 'Convertir un automate en expression régulière',
                    action: 'Utilise le lemme d\'Arden ou la méthode d\'élimination des états',
                    explication: `🎯 LEMME D'ARDEN : Si X = AX + B, alors X = A*B

📝 MÉTHODE STEP-BY-STEP :
1. Écris un système d'équations (une par état)
2. Chaque équation : qi = Σ (symbole × état destination)
3. Résous en substituant et utilisant Arden

📝 EXEMPLE (automate simple) :
• q0 = ε + a×q1 + b×q0
• q1 = a×q0 + b×q1

Résolution :
• q1 = b*×a×q0 (Arden sur q1)
• q0 = ε + a×b*×a×q0 + b×q0
• q0 = ε + (a×b*×a + b)×q0
• q0 = (a×b*×a + b)* (Arden)

⚠️ ATTENTION EXAMEN : Cette technique est au programme 2024-2025 !`,
                    difficulty: 3,
                    examFrequency: 'Examen 2024-2025!'
                },
                {
                    id: 'reg2',
                    trigger: 'Expression régulière → AFN',
                    action: 'Utilise la construction de Thompson',
                    explication: `🎯 RÈGLES DE THOMPSON :
• ε : un état initial = final
• a : état initial --a--> état final
• r1 + r2 : nouvel initial avec ε vers les deux
• r1 · r2 : final de r1 = initial de r2
• r* : ε-boucle autour de r

📝 ASTUCE PRATIQUE :
Dessine chaque sous-expression comme une "boîte" avec une entrée et une sortie, puis connecte les boîtes.

⚠️ L'AFN résultant peut avoir beaucoup d'ε-transitions, c'est normal !`,
                    difficulty: 2,
                    examFrequency: 'Fréquent'
                },
                {
                    id: 'reg3',
                    trigger: '(L + M)* = L* ou M* ?',
                    action: 'NON ! C\'est une erreur classique',
                    explication: `⚠️ PIÈGE CLASSIQUE À L'EXAMEN :
(L + M)* ≠ L* + M* en général !

📝 CONTRE-EXEMPLE :
• L = {a}, M = {b}
• L* + M* = {ε, a, aa, ...} ∪ {ε, b, bb, ...}
• (L + M)* = {ε, a, b, ab, ba, aab, ...}
• "ab" ∈ (L+M)* mais "ab" ∉ L* + M*

🎯 IDENTITÉS UTILES À RETENIR :
• (L*)* = L*
• (ε + L)* = L*
• L* · L* = L*
• (L · M)* · L = L · (M · L)*`,
                    difficulty: 2,
                    examFrequency: 'Piège classique !'
                }
            ]
        },
        {
            id: 'grammaires',
            title: 'Grammaires et LL(1)',
            icon: '📐',
            color: '#10b981',
            astuces: [
                {
                    id: 'gram1',
                    trigger: 'Calculer PREMIER(X) d\'un non-terminal',
                    action: 'Regarde tous les débuts possibles de dérivation',
                    explication: `🎯 ALGORITHME PREMIER :
1. Si X est un terminal : PREMIER(X) = {X}
2. Si X → ε existe : ajoute ε à PREMIER(X)
3. Si X → Y1Y2...Yk :
   • Ajoute PREMIER(Y1) - {ε} à PREMIER(X)
   • Si ε ∈ PREMIER(Y1), ajoute PREMIER(Y2) - {ε}
   • Si ε ∈ PREMIER(Y1Y2...Yi), ajoute PREMIER(Yi+1)
   • Si tous les Yi peuvent dériver ε, ajoute ε

📝 ASTUCE EXAMEN :
Travaille de gauche à droite. Dès qu'un symbole ne peut pas donner ε, arrête-toi.`,
                    difficulty: 2,
                    examFrequency: 'Examen 2024-2025!'
                },
                {
                    id: 'gram2',
                    trigger: 'Calculer SUIVANT(A) d\'un non-terminal',
                    action: 'Regarde ce qui peut apparaître APRÈS A dans une dérivation',
                    explication: `🎯 ALGORITHME SUIVANT :
1. SUIVANT(S) contient $ (fin de chaîne)
2. Si B → αAβ :
   • Ajoute PREMIER(β) - {ε} à SUIVANT(A)
   • Si ε ∈ PREMIER(β), ajoute SUIVANT(B) à SUIVANT(A)
3. Si B → αA (A en fin de règle) :
   • Ajoute SUIVANT(B) à SUIVANT(A)

📝 ASTUCE EXAMEN :
Fais plusieurs passes jusqu'à ce que les ensembles ne changent plus !

⚠️ SUIVANT ne contient JAMAIS ε !`,
                    difficulty: 2,
                    examFrequency: 'Examen 2024-2025!'
                },
                {
                    id: 'gram3',
                    trigger: 'Calculer DIRECTEUR d\'une règle A → ω',
                    action: 'DIRECTEUR = PREMIER(ω) + (si ε ∈ PREMIER(ω) alors SUIVANT(A))',
                    explication: `🎯 FORMULE :
DIRECTEUR(A → ω) = 
  • PREMIER(ω) si ε ∉ PREMIER(ω)
  • (PREMIER(ω) - {ε}) ∪ SUIVANT(A) si ε ∈ PREMIER(ω)

📝 SIGNIFICATION :
Les symboles directeurs te disent "quand utiliser cette règle".
Si tu vois un de ces symboles en entrée, applique cette règle.

🎯 CONDITION LL(1) :
Pour chaque paire de règles A → ω1 | ω2 :
DIRECTEUR(A → ω1) ∩ DIRECTEUR(A → ω2) = ∅`,
                    difficulty: 2,
                    examFrequency: 'Examen 2024-2025!'
                },
                {
                    id: 'gram4',
                    trigger: 'Cette grammaire est-elle LL(1) ?',
                    action: 'Vérifie que les DIRECTEURS sont disjoints pour chaque non-terminal',
                    explication: `🎯 MÉTHODE DE VÉRIFICATION :
1. Calcule PREMIER et SUIVANT pour tous les non-terminaux
2. Calcule DIRECTEUR pour chaque règle
3. Pour chaque non-terminal A ayant plusieurs règles :
   Vérifie que les DIRECTEURs sont disjoints deux à deux

📝 SI PAS LL(1), TRANSFORME :
• Factorisation à gauche : A → αβ | αγ devient A → αA', A' → β | γ
• Élimination de la récursivité à gauche : A → Aα | β devient A → βA', A' → αA' | ε

⚠️ QUESTION TYPIQUE EXAMEN : "Proposer une grammaire LL(1) équivalente"`,
                    difficulty: 2,
                    examFrequency: 'Examen 2024-2025!'
                },
                {
                    id: 'gram5',
                    trigger: 'Dérouler l\'algorithme de parsing LL(1)',
                    action: 'Table de parsing + pile',
                    explication: `🎯 ALGORITHME :
• Pile initiale : [S, $]
• Entrée : w$
• Répéter :
  - Sommet = X, prochain symbole = a
  - Si X = a = $ : ACCEPTER
  - Si X = a ≠ $ : dépiler X, avancer dans l'entrée
  - Si X est non-terminal : chercher la règle dans la table M[X,a]
    → Remplacer X par le corps de la règle (inversé sur la pile)
  - Sinon : ERREUR

📝 PRÉSENTATION EXAMEN :
| Pile        | Entrée       | Action                    |
|-------------|--------------|---------------------------|
| S$          | (a+a)$       | S → E$, règle 1          |
| E$          | (a+a)$       | E → T+E, règle 2         |
| ...         | ...          | ...                       |`,
                    difficulty: 2,
                    examFrequency: 'Examen 2024-2025!'
                }
            ]
        },
        {
            id: 'compilation',
            title: 'Phases de Compilation',
            icon: '⚙️',
            color: '#f59e0b',
            astuces: [
                {
                    id: 'comp1',
                    trigger: 'Quelles sont les phases d\'un compilateur ?',
                    action: 'LAST: Lexical, Syntaxique, Sémantique, puis génération',
                    explication: `🎯 LES 6 PHASES :

📥 ANALYSE (Front-end) :
1. Analyse LEXICALE → tokens (ex: <id,1>, <+>, <num,60>)
2. Analyse SYNTAXIQUE → arbre syntaxique
3. Analyse SÉMANTIQUE → vérification des types

📤 SYNTHÈSE (Back-end) :
4. Génération de code INTERMÉDIAIRE
5. OPTIMISATION du code
6. Génération de code CIBLE (machine)

📝 MNÉMOTECHNIQUE : "LeSS CODE" (Lex, Synt, Sém, Code)`,
                    difficulty: 1,
                    examFrequency: 'Concept de base'
                },
                {
                    id: 'comp2',
                    trigger: 'Différence compilateur vs interpréteur ?',
                    action: 'Compilateur = avant, Interpréteur = pendant',
                    explication: `🎯 COMPILATEUR :
• Traduit TOUT le programme AVANT l'exécution
• Produit un exécutable
• Exemples : C, C++, Go

🎯 INTERPRÉTEUR :
• Lit et exécute le code PENDANT l'exécution
• Pas d'exécutable produit
• Exemples : Python, JavaScript

🎯 HYBRIDE :
• Compile en code intermédiaire + JIT
• Exemple : Java (bytecode + JIT)`,
                    difficulty: 1,
                    examFrequency: 'Concept de base'
                }
            ]
        }
    ]
};

// Fonction pour récupérer toutes les astuces à plat
function getAllAstuces() {
    const all = [];
    ASTUCES_EXAMEN.categories.forEach(cat => {
        cat.astuces.forEach(astuce => {
            all.push({ ...astuce, category: cat.title, categoryId: cat.id, categoryIcon: cat.icon, color: cat.color });
        });
    });
    return all;
}

// Fonction pour récupérer les astuces par catégorie
function getAstucesByCategory(categoryId) {
    const cat = ASTUCES_EXAMEN.categories.find(c => c.id === categoryId);
    return cat ? cat.astuces : [];
}

// Fonction pour récupérer les astuces les plus importantes pour l'examen
function getExamCriticalAstuces() {
    return getAllAstuces().filter(a => a.examFrequency.includes('Examen 2024-2025'));
}
