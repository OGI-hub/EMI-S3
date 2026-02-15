// ============================================
// TD EXERCISES - All exercises from TD1, TD2, TD3
// With progressive hints and solutions
// ============================================

const TD_EXERCISES = {
    tds: [
        {
            id: 'td1',
            title: 'TD 1 - Langages et Relations',
            description: 'Langages réguliers, opérations sur les langages, relations et fermeture transitive',
            icon: '📚',
            exercises: [
                {
                    id: 'td1-ex1',
                    number: 'Exercice 1',
                    title: 'Langages réguliers - définition',
                    statement: `Montrer que l'ensemble des langages réguliers sur un vocabulaire V est le plus petit ensemble de langages contenant les langages finis sur V et fermé pour la réunion, la concaténation et l'opération *.`,
                    suggestedTime: 15,
                    difficulty: 3,
                    hints: [
                        `💡 Indice 1 : Rappelle-toi qu'un langage régulier est défini par une expression régulière.`,
                        `💡 Indice 2 : Montre d'abord que tout langage fini peut s'écrire comme une réunion finie de singletons.`,
                        `💡 Indice 3 : Utilise l'induction sur la structure des expressions régulières.`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'Étape 1 : Définir l\'ensemble des langages réguliers',
                                content: `Soit REG l'ensemble des langages réguliers sur V. Par définition, REG contient :
• ∅ (langage vide)
• {ε} (langage contenant le mot vide)
• {a} pour tout a ∈ V

Et REG est fermé par : réunion (∪), concaténation (·), étoile (*).`
                            },
                            {
                                title: 'Étape 2 : Montrer que REG contient les langages finis',
                                content: `Tout langage fini L = {w₁, w₂, ..., wₙ} peut s'écrire :
• Chaque mot wᵢ = a₁a₂...aₖ est la concaténation {a₁}·{a₂}·...·{aₖ}
• L = {w₁} ∪ {w₂} ∪ ... ∪ {wₙ}

Donc les langages finis sont dans REG.`
                            },
                            {
                                title: 'Étape 3 : Montrer que REG est le plus petit',
                                content: `Soit K un ensemble contenant les langages finis et fermé pour ∪, ·, *.
On montre par induction sur la structure des expressions régulières que REG ⊆ K :
• Base : ∅, {ε}, {a} sont finis, donc dans K
• Induction : si L₁, L₂ ∈ K, alors L₁ ∪ L₂, L₁·L₂, L₁* ∈ K (par fermeture)

Donc REG ⊆ K pour tout K satisfaisant ces propriétés.`
                            }
                        ],
                        keyPoint: `🎯 Point clé : L'induction structurelle sur les expressions régulières est LA technique pour ce type de preuve.`
                    }
                },
                {
                    id: 'td1-ex3',
                    number: 'Exercice 3',
                    title: 'Identités sur L*',
                    statement: `Montrer que les égalités suivantes sont vraies pour tout langage L :
• (L*)* = L*
• (ε + L)* = L*
• L* · L* = L*`,
                    suggestedTime: 10,
                    difficulty: 2,
                    hints: [
                        `💡 Indice 1 : Rappelle que L* = ε ∪ L ∪ L² ∪ L³ ∪ ...`,
                        `💡 Indice 2 : Pour montrer A = B, montre A ⊆ B et B ⊆ A.`,
                        `💡 Indice 3 : Utilise le fait que L* contient ε.`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'Preuve de (L*)* = L*',
                                content: `⊆ : Soit w ∈ (L*)*. Alors w = u₁u₂...uₙ où chaque uᵢ ∈ L*.
   Chaque uᵢ est une concaténation de mots de L, donc w aussi.
   Donc w ∈ L*.

⊇ : L* ⊆ (L*)* car L* ⊆ L* et (L*)* est fermé pour la concaténation.`
                            },
                            {
                                title: 'Preuve de (ε + L)* = L*',
                                content: `⊆ : (ε + L)* contient des concaténations de ε et de mots de L.
   Les ε s'effacent, donc on obtient des mots de L*.

⊇ : L ⊆ (ε + L), donc L* ⊆ (ε + L)*.`
                            },
                            {
                                title: 'Preuve de L* · L* = L*',
                                content: `⊆ : Si w ∈ L* · L*, alors w = uv avec u, v ∈ L*.
   u = l₁...lₘ et v = l'₁...l'ₙ avec lᵢ, l'ⱼ ∈ L.
   Donc w = l₁...lₘl'₁...l'ₙ ∈ L*.

⊇ : L* ⊆ L* · L* car ε ∈ L* (prendre v = ε).`
                            }
                        ],
                        keyPoint: `🎯 Point clé : L* est le plus petit langage contenant L et ε, fermé par concaténation.`
                    }
                },
                {
                    id: 'td1-ex8',
                    number: 'Exercice 8',
                    title: 'Fermeture transitive',
                    statement: `Soit ρ la relation sur {1,2,3,4,5,6} définie par le graphe suivant :
1 → 2, 2 → 3, 2 → 5, 3 → 4, 4 → 5, 5 → 6

1. Tracer les graphes des relations ρ⁺ et ρ*.
2. Définir un algorithme qui calcule la fermeture transitive.`,
                    suggestedTime: 20,
                    difficulty: 2,
                    hints: [
                        `💡 Indice 1 : ρ⁺ contient tous les chemins de longueur ≥ 1.`,
                        `💡 Indice 2 : ρ* = ρ⁺ ∪ Id (ajoute les boucles sur soi-même).`,
                        `💡 Indice 3 : Algorithme de Floyd-Warshall ou Warshall.`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'Étape 1 : Calculer ρ⁺',
                                content: `ρ⁺ contient (i,j) ssi il existe un chemin de i à j :
• ρ¹ : 1→2, 2→3, 2→5, 3→4, 4→5, 5→6
• ρ² : 1→3, 1→5, 2→4, 2→6, 3→5, 4→6
• ρ³ : 1→4, 1→6, 2→5, 2→6, 3→6
• ρ⁴ : 1→5, 1→6, 2→6
• ρ⁵ : 1→6

ρ⁺ = ρ¹ ∪ ρ² ∪ ρ³ ∪ ... (jusqu'à stabilisation)`
                            },
                            {
                                title: 'Étape 2 : Calculer ρ*',
                                content: `ρ* = ρ⁺ ∪ {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)}

La fermeture réflexive-transitive ajoute les boucles sur chaque sommet.`
                            },
                            {
                                title: 'Étape 3 : Algorithme de Warshall',
                                content: `ALGORITHME Warshall(M, n) :
    // M : matrice d'adjacence n×n
    Pour k de 1 à n :
        Pour i de 1 à n :
            Pour j de 1 à n :
                M[i][j] = M[i][j] OU (M[i][k] ET M[k][j])
    Retourner M

Complexité : O(n³)`
                            }
                        ],
                        keyPoint: `🎯 Point clé : ρ* ajoute les boucles, ρ⁺ ne les ajoute pas. Warshall = O(n³).`
                    }
                }
            ]
        },
        {
            id: 'td2',
            title: 'TD 2 - Automates Finis',
            description: 'Construction d\'AFD, d\'AFN, déterminisation, conversion regex ↔ automate',
            icon: '🔄',
            exercises: [
                {
                    id: 'td2-ex1',
                    number: 'Exercice 1',
                    title: 'Construction d\'AFD - Langages classiques',
                    statement: `Construire des automates finis déterministes pour :
1. L₁ = {w | w commence par 1 et se termine par 0}
2. L₂ = {w | w contient au moins trois 1}
3. L₃ = {w | w contient la sous-chaîne 0101}
4. L₄ = {w | w a une taille d'au plus 5}`,
                    suggestedTime: 25,
                    difficulty: 2,
                    hints: [
                        `💡 Pour L₁ : 4 états suffisent (initial, vu 1, vu 1...0, rejet).`,
                        `💡 Pour L₂ : 4 états comptant 0, 1, 2, 3+ occurrences de 1.`,
                        `💡 Pour L₃ : 5 états mémorisant le préfixe de "0101" reconnu.`,
                        `💡 Pour L₄ : 7 états (0 à 5 symboles lus + état puits).`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'AFD pour L₁ = {w | commence par 1, termine par 0}',
                                content: `États : q0 (initial), q1 (vu 1), q2 (vu 1...0), qR (rejet)
Transitions :
• q0 --1--> q1, q0 --0--> qR
• q1 --1--> q1, q1 --0--> q2
• q2 --1--> q1, q2 --0--> q2
• qR --0,1--> qR
État final : q2

⚠️ Note : Le mot "10" est accepté, mais pas "1" ni "0".`
                            },
                            {
                                title: 'AFD pour L₂ = {w | au moins trois 1}',
                                content: `États : q0 (0 un), q1 (1 un), q2 (2 un), q3 (3+ un)
Transitions :
• qi --0--> qi pour tout i
• qi --1--> q(i+1) pour i < 3
• q3 --1--> q3, q3 --0--> q3
État final : q3

🎯 Cet exercice est tombé à l'examen 2024-2025 !`
                            },
                            {
                                title: 'AFD pour L₃ = {w | contient 0101}',
                                content: `États : q0, q1(vu 0), q2(vu 01), q3(vu 010), q4(vu 0101)
Transitions (table) :
      | 0  | 1
q0    | q1 | q0
q1    | q1 | q2
q2    | q3 | q0
q3    | q1 | q4
q4    | q4 | q4
État final : q4`
                            },
                            {
                                title: 'AFD pour L₄ = {w | |w| ≤ 5}',
                                content: `États : q0, q1, q2, q3, q4, q5 (accepteurs), q6 (puits)
Transitions :
• qi --0,1--> q(i+1) pour i = 0..5
• q6 --0,1--> q6
États finaux : q0, q1, q2, q3, q4, q5

🎯 Cet exercice est tombé à l'examen 2024-2025 !`
                            }
                        ],
                        keyPoint: `🎯 Ces 4 types d'automates sont les plus fréquents à l'examen !`
                    }
                },
                {
                    id: 'td2-ex5',
                    number: 'Exercice 5',
                    title: 'Déterminisation d\'AFN',
                    statement: `Déterminiser les deux automates suivants (AFN avec ε-transitions).`,
                    suggestedTime: 20,
                    difficulty: 3,
                    hints: [
                        `💡 Indice 1 : Calcule d'abord la ε-fermeture de chaque état.`,
                        `💡 Indice 2 : Un état du AFD est un sous-ensemble d'états du AFN.`,
                        `💡 Indice 3 : N'oublie pas d'appliquer la ε-fermeture APRÈS chaque transition.`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'Étape 1 : Calcul de la ε-fermeture',
                                content: `ε-fermeture(q) = {tous les états atteignables depuis q par des ε-transitions}

Algorithme :
1. Initialiser F = {q}
2. Tant qu'il y a un état p ∈ F avec une ε-transition vers r ∉ F :
   Ajouter r à F
3. Retourner F`
                            },
                            {
                                title: 'Étape 2 : Construction des sous-ensembles',
                                content: `Algorithme de déterminisation :
1. État initial AFD = ε-fermeture({q0})
2. Pour chaque sous-ensemble S non traité :
   Pour chaque symbole a :
     δ'(S, a) = ε-fermeture(∪{δ(q,a) | q ∈ S})
3. Répéter jusqu'à ce qu'il n'y ait plus de nouveaux sous-ensembles
4. Un sous-ensemble est final ssi il contient un état final du AFN`
                            },
                            {
                                title: 'Étape 3 : Exemple concret',
                                content: `Soit l'AFN avec : q1 --ε--> q2, q1 --a--> q1, q2 --a,b--> q2

ε-fermeture({q1}) = {q1, q2} = [A] (état initial AFD)

Transitions depuis [A] :
• [A] --a--> ε-ferm({q1,q2}) = {q1,q2} = [A]
• [A] --b--> ε-ferm({q2}) = {q2} = [B]

Transitions depuis [B] :
• [B] --a--> {q2} = [B]
• [B] --b--> {q2} = [B]`
                            }
                        ],
                        keyPoint: `🎯 N'oublie JAMAIS la ε-fermeture ! C'est l'erreur n°1 à l'examen.`
                    }
                },
                {
                    id: 'td2-ex6',
                    number: 'Exercice 6',
                    title: 'Expression régulière → AFN (Thompson)',
                    statement: `Construire un AFN équivalent à :
1. (0 + 1)*000(0 + 1)*
2. (((00)*(11)) + 01)*
3. ∅*`,
                    suggestedTime: 20,
                    difficulty: 2,
                    hints: [
                        `💡 Utilise la construction de Thompson avec des "boîtes".`,
                        `💡 Pour r*, ajoute un nouvel état initial et final avec des ε-transitions.`,
                        `💡 ∅* = {ε} car la concaténation de zéro mots de ∅ donne ε.`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'Construction de Thompson - Règles',
                                content: `• ε : ──●══●──  (état initial = final)
• a : ──●──a──●──
• r₁ + r₂ : branchement avec ε vers les deux
• r₁ · r₂ : fin de r₁ connectée au début de r₂
• r* : ε-boucle autour de r, avec bypass par ε`
                            },
                            {
                                title: 'AFN pour (0+1)*000(0+1)*',
                                content: `Structure :
1. (0+1)* : boucle acceptant 0 ou 1
2. 000 : chaîne de 3 transitions par 0
3. (0+1)* : boucle finale

L'automate accepte tout mot contenant "000".`
                            },
                            {
                                title: 'AFN pour ∅*',
                                content: `∅* = {ε}

L'étoile de l'ensemble vide donne le mot vide !
Justification : L* = ε ∪ L ∪ L² ∪ ... 
Si L = ∅, alors L² = ∅·∅ = ∅, etc.
Donc ∅* = {ε} ∪ ∅ ∪ ∅ ∪ ... = {ε}

AFN : un seul état, initial et final, sans transition.`
                            }
                        ],
                        keyPoint: `🎯 Attention : ∅* ≠ ∅ ! C'est un piège classique.`
                    }
                }
            ]
        },
        {
            id: 'td3',
            title: 'TD 3 - Grammaires et LL(1)',
            description: 'Grammaires hors-contexte, PREMIER, SUIVANT, DIRECTEUR, analyse LL(1)',
            icon: '📐',
            exercises: [
                {
                    id: 'td3-ex1',
                    number: 'Exercice 1',
                    title: 'Analyse LL(1) - Expressions parenthésées',
                    statement: `Soit la grammaire :
S → B $
B → ε | B ( B )

1. Déterminer les non-terminaux qui peuvent dériver en ε.
2. Calculer PREMIER et SUIVANT pour chaque non-terminal.
3. Calculer DIRECTEUR de chaque règle.
4. Cette grammaire est-elle LL(1) ?`,
                    suggestedTime: 25,
                    difficulty: 2,
                    hints: [
                        `💡 Indice 1 : B peut dériver en ε directement (règle B → ε).`,
                        `💡 Indice 2 : PREMIER(B) doit inclure ε et les terminaux commençant B(B).`,
                        `💡 Indice 3 : Pour LL(1), les DIRECTEURs des règles d'un même non-terminal doivent être disjoints.`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'Étape 1 : Non-terminaux dérivant en ε',
                                content: `B → ε est une règle, donc B ⟹* ε.
S → B$ et B ⟹* ε, mais S ne dérive pas en ε (à cause de $).

Résultat : Seul B peut dériver en ε.`
                            },
                            {
                                title: 'Étape 2 : Calcul de PREMIER',
                                content: `PREMIER(S) :
• S → B$ : PREMIER(B) = {ε, (}
• Donc PREMIER(S) = {(, $} (on remplace ε par $)

PREMIER(B) :
• B → ε : ajoute ε
• B → B(B) : PREMIER(B) inclut ε, donc on ajoute (
• PREMIER(B) = {ε, (}`
                            },
                            {
                                title: 'Étape 3 : Calcul de SUIVANT',
                                content: `SUIVANT(S) = {$} (axiome)

SUIVANT(B) :
• S → B$ : ajoute $ à SUIVANT(B)
• B → B(B) : 
  - B est suivi de ( : ajoute (
  - B est suivi de ) : ajoute )
  - Le dernier B : ajoute SUIVANT(B) (propagation)
• SUIVANT(B) = {(, ), $}`
                            },
                            {
                                title: 'Étape 4 : Calcul de DIRECTEUR',
                                content: `DIRECTEUR(S → B$) = PREMIER(B$) = {(, $}
DIRECTEUR(B → ε) = SUIVANT(B) = {(, ), $}
DIRECTEUR(B → B(B)) = (PREMIER(B)-{ε}) ∪ {(} = {(}

⚠️ PROBLÈME : DIRECTEUR(B→ε) ∩ DIRECTEUR(B→B(B)) = {(} ≠ ∅

Cette grammaire N'EST PAS LL(1) !`
                            }
                        ],
                        keyPoint: `🎯 Cette grammaire n'est pas LL(1) car B → ε et B → B(B) ont ( en commun dans leurs directeurs !`
                    }
                },
                {
                    id: 'td3-ex2',
                    number: 'Exercice 2',
                    title: 'Grammaire LL(1) pour expressions arithmétiques',
                    statement: `1. Proposer une grammaire LL(1) pour des expressions avec : variables, addition (+), multiplication (*), et parenthèses.
2. Justifier pourquoi votre grammaire est LL(1).
3. Dérouler l'analyse LL(1) sur "id + id * (id + id) $"`,
                    suggestedTime: 30,
                    difficulty: 3,
                    hints: [
                        `💡 Élimine la récursivité à gauche avec E → T E'.`,
                        `💡 La priorité * > + se traduit par : E gère +, T gère *.`,
                        `💡 Utilise une table de parsing pour dérouler l'algorithme.`
                    ],
                    solution: {
                        steps: [
                            {
                                title: 'Étape 1 : Grammaire LL(1)',
                                content: `E  → T E'
E' → + T E' | ε
T  → F T'
T' → * F T' | ε
F  → ( E ) | id

Cette grammaire élimine la récursivité à gauche et factorise les règles.`
                            },
                            {
                                title: 'Étape 2 : Calcul PREMIER/SUIVANT',
                                content: `PREMIER(E) = PREMIER(T) = PREMIER(F) = {(, id}
PREMIER(E') = {+, ε}
PREMIER(T') = {*, ε}

SUIVANT(E) = {), $}
SUIVANT(E') = {), $}
SUIVANT(T) = {+, ), $}
SUIVANT(T') = {+, ), $}
SUIVANT(F) = {*, +, ), $}`
                            },
                            {
                                title: 'Étape 3 : Vérification LL(1)',
                                content: `DIRECTEUR(E' → +TE') = {+}
DIRECTEUR(E' → ε) = SUIVANT(E') = {), $}
{+} ∩ {), $} = ∅ ✓

DIRECTEUR(T' → *FT') = {*}
DIRECTEUR(T' → ε) = SUIVANT(T') = {+, ), $}
{*} ∩ {+, ), $} = ∅ ✓

DIRECTEUR(F → (E)) = {(}
DIRECTEUR(F → id) = {id}
{(} ∩ {id} = ∅ ✓

La grammaire est LL(1) !`
                            },
                            {
                                title: 'Étape 4 : Déroulage sur "id + id * id $"',
                                content: `| Pile       | Entrée           | Action               |
|------------|------------------|----------------------|
| E$         | id+id*id$        | E → TE'              |
| TE'$       | id+id*id$        | T → FT'              |
| FT'E'$     | id+id*id$        | F → id               |
| idT'E'$    | id+id*id$        | match id             |
| T'E'$      | +id*id$          | T' → ε               |
| E'$        | +id*id$          | E' → +TE'            |
| +TE'$      | +id*id$          | match +              |
| TE'$       | id*id$           | T → FT'              |
| FT'E'$     | id*id$           | F → id               |
| idT'E'$    | id*id$           | match id             |
| T'E'$      | *id$             | T' → *FT'            |
| *FT'E'$    | *id$             | match *              |
| FT'E'$     | id$              | F → id               |
| idT'E'$    | id$              | match id             |
| T'E'$      | $                | T' → ε               |
| E'$        | $                | E' → ε               |
| $          | $                | ACCEPTER             |`
                            }
                        ],
                        keyPoint: `🎯 C'est l'exercice type de l'examen 2024-2025 ! Maîtrise cette grammaire par cœur.`
                    }
                }
            ]
        }
    ]
};

// Fonction utilitaire pour récupérer un TD
function getTD(tdId) {
    return TD_EXERCISES.tds.find(td => td.id === tdId);
}

// Fonction pour récupérer un exercice spécifique
function getExercise(tdId, exerciseId) {
    const td = getTD(tdId);
    if (!td) return null;
    return td.exercises.find(ex => ex.id === exerciseId);
}

// Fonction pour récupérer tous les exercices à plat
function getAllExercises() {
    const all = [];
    TD_EXERCISES.tds.forEach(td => {
        td.exercises.forEach(ex => {
            all.push({ ...ex, tdId: td.id, tdTitle: td.title });
        });
    });
    return all;
}
