// ============================================
// EXAM SIMULATION - Based on 2024-2025 Exam
// With timer, scoring, and predictions
// ============================================

const EXAM_SIMULATION = {
    // Real exam from 2024-2025
    exam2024: {
        id: 'exam-2024-2025',
        title: 'Examen Théorie des Langages et Compilation 2024-2025',
        duration: 90, // minutes
        totalPoints: 20,
        instructions: `📋 Instructions de l'examen :
• Durée : 90 minutes
• Documents, instruments de calcul et téléphones NON autorisés
• Il sera tenu compte de la rigueur et de la clarté de la rédaction
• Une présentation générale soignée sera appréciée`,

        exercises: [
            {
                id: 'ex1',
                number: 'Exercice 1',
                title: 'Automates d\'états finis',
                suggestedTime: 15,
                points: 3,
                parts: [
                    {
                        id: 'ex1a',
                        points: 1,
                        statement: `Construire un AFD qui reconnaît le langage :
L₁ = {w | w commence avec un 1 et se termine avec un 00}`,
                        solution: {
                            steps: [
                                {
                                    title: 'Analyse du langage',
                                    content: `Le mot doit :
1. Commencer par 1
2. Se terminer par 00

On a besoin de mémoriser :
• Si on a bien commencé par 1
• Les derniers symboles lus (pour détecter 00)`
                                },
                                {
                                    title: 'Construction de l\'automate',
                                    content: `États :
• q0 : état initial
• qR : état de rejet (a commencé par 0)
• q1 : a commencé par 1, pas de 0 récent
• q2 : a vu un 0
• q3 : a vu 00 (FINAL)

Transitions :
• q0 --1--> q1, q0 --0--> qR
• q1 --1--> q1, q1 --0--> q2
• q2 --1--> q1, q2 --0--> q3
• q3 --1--> q1, q3 --0--> q3
• qR --0,1--> qR

État final : q3`
                                }
                            ],
                            keyPoint: `🎯 5 états : initial, rejet, vu1, vu1...0, vu1...00`
                        }
                    },
                    {
                        id: 'ex1b',
                        points: 1,
                        statement: `Construire un AFD qui reconnaît le langage :
L₂ = {w | w contient au moins trois 0}`,
                        solution: {
                            steps: [
                                {
                                    title: 'Construction',
                                    content: `États : q0, q1, q2, q3 (comptent le nombre de 0 vus)

Transitions :
• qi --1--> qi pour tout i
• qi --0--> q(i+1) pour i < 3
• q3 --0--> q3, q3 --1--> q3

État final : q3

┌────┬────┬────┐
│    │ 0  │ 1  │
├────┼────┼────┤
│ q0 │ q1 │ q0 │
│ q1 │ q2 │ q1 │
│ q2 │ q3 │ q2 │
│*q3 │ q3 │ q3 │
└────┴────┴────┘`
                                }
                            ],
                            keyPoint: `🎯 4 états comptant 0, 1, 2, 3+ zéros.`
                        }
                    },
                    {
                        id: 'ex1c',
                        points: 1,
                        statement: `Construire un AFD qui reconnaît le langage :
L₄ = {w | w a une taille d'au plus 5}`,
                        solution: {
                            steps: [
                                {
                                    title: 'Construction',
                                    content: `États : q0, q1, q2, q3, q4, q5 (accepteurs), q6 (puits)

Transitions :
• qi --0,1--> q(i+1) pour i = 0..5
• q6 --0,1--> q6

États finaux : q0, q1, q2, q3, q4, q5

L'automate accepte ε, et tout mot de 1 à 5 symboles.
Les mots de 6+ symboles vont dans q6 (puits, rejet).`
                                }
                            ],
                            keyPoint: `🎯 7 états au total : 6 accepteurs + 1 puits.`
                        }
                    }
                ]
            },
            {
                id: 'ex2',
                number: 'Exercice 2',
                title: 'Langage des mots binaires multiples de 7',
                suggestedTime: 20,
                points: 3,
                parts: [
                    {
                        id: 'ex2a',
                        points: 3,
                        statement: `Donner un automate fini déterministe pour reconnaître les mots en binaire qui sont des multiples de 7.

Exemples : 0, 111 = 7₁₀, 1110 = 14₁₀, 10101 = 21₁₀, ...`,
                        solution: {
                            steps: [
                                {
                                    title: 'Principe',
                                    content: `Chaque état représente le reste de la division par 7.
• 7 états : q0 (reste 0) à q6 (reste 6)
• État final : q0 (reste = 0 = multiple de 7)

Quand on lit un bit b après avoir lu un nombre n :
• Le nouveau nombre est 2n + b
• Le nouveau reste est (2×ancien_reste + b) mod 7`
                                },
                                {
                                    title: 'Table de transitions',
                                    content: `δ(qi, 0) = q(2i mod 7)
δ(qi, 1) = q((2i+1) mod 7)

┌────┬──────────┬──────────┐
│ q  │ δ(q, 0)  │ δ(q, 1)  │
├────┼──────────┼──────────┤
│ q0 │ q0       │ q1       │
│ q1 │ q2       │ q3       │
│ q2 │ q4       │ q5       │
│ q3 │ q6       │ q0       │
│ q4 │ q1       │ q2       │
│ q5 │ q3       │ q4       │
│ q6 │ q5       │ q6       │
└────┴──────────┴──────────┘

État initial : q0
État final : q0`
                                },
                                {
                                    title: 'Vérification',
                                    content: `Testons avec 111 = 7 :
• q0 --1--> q1
• q1 --1--> q3
• q3 --1--> q0 ✓ (état final)

Testons avec 1110 = 14 :
• q0 --1--> q1 --1--> q3 --1--> q0 --0--> q0 ✓`
                                }
                            ],
                            keyPoint: `🎯 L'astuce : chaque état = reste mod 7. Lire b multiplie par 2 et ajoute b.`
                        }
                    }
                ]
            },
            {
                id: 'ex3',
                number: 'Exercice 3',
                title: 'AFD associé à une expression régulière',
                suggestedTime: 20,
                points: 4,
                parts: [
                    {
                        id: 'ex3a',
                        points: 4,
                        statement: `Convertir les deux automates suivants en expressions régulières équivalentes.

Automate (a) : 3 états, transitions complexes
Automate (b) : 2 états avec boucles`,
                        solution: {
                            steps: [
                                {
                                    title: 'Méthode : Lemme d\'Arden',
                                    content: `Pour convertir un automate en regex, on utilise le lemme d'Arden :
Si X = AX + B, alors X = A*B

Étapes :
1. Écrire un système d'équations (une par état)
2. Résoudre en éliminant les variables une par une
3. L'équation de l'état initial donne le langage`
                                },
                                {
                                    title: 'Exemple de résolution',
                                    content: `Soit un automate avec :
• q1 : initial, avec boucle 'a' et transition 'b' vers q2
• q2 : final, avec boucle 'a,b'

Équations :
• q1 = ε + a·q1 + b·q2 (non, q1 n'est pas final)
• Correction : q1 = a·q1 + b·q2 (q1 pas final, pas de ε)
• q2 = ε + (a+b)·q2 (q2 final)

Résolution :
• q2 = (a+b)* (Arden)
• q1 = a·q1 + b·(a+b)*
• q1 = a*·b·(a+b)* (Arden)

Langage = a*b(a+b)*`
                                }
                            ],
                            keyPoint: `🎯 Lemme d'Arden : X = AX + B ⟹ X = A*B. Applique-le de l'état final vers l'initial.`
                        }
                    }
                ]
            },
            {
                id: 'ex4',
                number: 'Exercice 4',
                title: 'Langages hors contexte',
                suggestedTime: 35,
                points: 10,
                parts: [
                    {
                        id: 'ex4a',
                        points: 2,
                        statement: `Soit la grammaire pour les expressions arithmétiques :
S₀ → S$
S → E
E → E + T | T
T → T * F | F
F → (E) | a

Calculer PREMIER et SUIVANT pour chaque non-terminal.`,
                        solution: {
                            steps: [
                                {
                                    title: 'Calcul de PREMIER',
                                    content: `PREMIER(F) = {(, a}
PREMIER(T) = PREMIER(F) = {(, a}
PREMIER(E) = PREMIER(T) = {(, a}
PREMIER(S) = PREMIER(E) = {(, a}
PREMIER(S₀) = {(, a}`
                                },
                                {
                                    title: 'Calcul de SUIVANT',
                                    content: `SUIVANT(S₀) = {$}
SUIVANT(S) = {$} (de S₀ → S$)
SUIVANT(E) = {+, ), $}
  • E + T : E suivi de +
  • (E) : E suivi de )
  • E = S : ajoute SUIVANT(S)
SUIVANT(T) = {+, *, ), $}
  • E + T : ajoute SUIVANT(E)
  • T * F : T suivi de *
SUIVANT(F) = {+, *, ), $} = SUIVANT(T)
  • T * F : ajoute SUIVANT(T)
  • T → F : ajoute SUIVANT(T)`
                                }
                            ],
                            keyPoint: `🎯 Commence par PREMIER (de bas en haut), puis SUIVANT (propagation).`
                        }
                    },
                    {
                        id: 'ex4b',
                        points: 2,
                        statement: `Calculer DIRECTEUR de chaque règle.`,
                        solution: {
                            steps: [
                                {
                                    title: 'Calcul des DIRECTEURs',
                                    content: `DIRECTEUR(S₀ → S$) = PREMIER(S$) = {(, a}
DIRECTEUR(S → E) = {(, a}

DIRECTEUR(E → E+T) = PREMIER(E+T) = {(, a}
DIRECTEUR(E → T) = PREMIER(T) = {(, a}

DIRECTEUR(T → T*F) = PREMIER(T*F) = {(, a}
DIRECTEUR(T → F) = PREMIER(F) = {(, a}

DIRECTEUR(F → (E)) = {(}
DIRECTEUR(F → a) = {a}`
                                }
                            ],
                            keyPoint: `🎯 Conflit E → E+T | T et T → T*F | F : les DIRECTEURs ne sont pas disjoints !`
                        }
                    },
                    {
                        id: 'ex4c',
                        points: 1,
                        statement: `Cette grammaire est-elle LL(1) ? Justifier.`,
                        solution: {
                            steps: [
                                {
                                    title: 'Analyse',
                                    content: `NON, cette grammaire N'EST PAS LL(1).

Raison : 
• DIRECTEUR(E → E+T) = {(, a}
• DIRECTEUR(E → T) = {(, a}
• L'intersection n'est pas vide !

De même pour T → T*F | F.

De plus, la grammaire a une récursivité à gauche (E → E+T, T → T*F).`
                                }
                            ],
                            keyPoint: `🎯 Deux problèmes : DIRECTEURs non disjoints + récursivité à gauche.`
                        }
                    },
                    {
                        id: 'ex4d',
                        points: 3,
                        statement: `Proposer des modifications de cette grammaire pour qu'elle devienne LL(1).`,
                        solution: {
                            steps: [
                                {
                                    title: 'Élimination de la récursivité à gauche',
                                    content: `Transformation : A → Aα | β devient A → βA', A' → αA' | ε

E → E + T | T devient :
  E → T E'
  E' → + T E' | ε

T → T * F | F devient :
  T → F T'
  T' → * F T' | ε`
                                },
                                {
                                    title: 'Grammaire LL(1) résultante',
                                    content: `S₀ → S$
S → E
E → T E'
E' → + T E' | ε
T → F T'
T' → * F T' | ε
F → (E) | a

Cette grammaire est LL(1) car :
• DIRECTEUR(E' → +TE') = {+}
• DIRECTEUR(E' → ε) = SUIVANT(E') = {), $}
• {+} ∩ {), $} = ∅ ✓

Idem pour T' et F.`
                                }
                            ],
                            keyPoint: `🎯 La transformation standard élimine la récursivité à gauche et rend la grammaire LL(1).`
                        }
                    },
                    {
                        id: 'ex4e1',
                        points: 1,
                        statement: `Dérouler l'algorithme de parsing LL(1) sur : (a * a) + a`,
                        solution: {
                            steps: [
                                {
                                    title: 'Table de parsing',
                                    content: `| Pile        | Entrée        | Action           |
|-------------|---------------|------------------|
| E$          | (a*a)+a$      | E → TE'          |
| TE'$        | (a*a)+a$      | T → FT'          |
| FT'E'$      | (a*a)+a$      | F → (E)          |
| (E)T'E'$    | (a*a)+a$      | match (          |
| E)T'E'$     | a*a)+a$       | E → TE'          |
| TE')T'E'$   | a*a)+a$       | T → FT'          |
| FT'E')T'E'$ | a*a)+a$       | F → a            |
| aT'E')T'E'$ | a*a)+a$       | match a          |
| T'E')T'E'$  | *a)+a$        | T' → *FT'        |
| *FT'E')T'E'$| *a)+a$        | match *          |
| FT'E')T'E'$ | a)+a$         | F → a            |
| aT'E')T'E'$ | a)+a$         | match a          |
| T'E')T'E'$  | )+a$          | T' → ε           |
| E')T'E'$    | )+a$          | E' → ε           |
| )T'E'$      | )+a$          | match )          |
| T'E'$       | +a$           | T' → ε           |
| E'$         | +a$           | E' → +TE'        |
| +TE'$       | +a$           | match +          |
| TE'$        | a$            | T → FT'          |
| FT'E'$      | a$            | F → a            |
| aT'E'$      | a$            | match a          |
| T'E'$       | $             | T' → ε           |
| E'$         | $             | E' → ε           |
| $           | $             | ACCEPTER         |`
                                }
                            ],
                            keyPoint: `🎯 Suis la table de parsing : sommet = non-terminal → cherche la règle, sommet = terminal → match.`
                        }
                    }
                ]
            }
        ]
    },

    // Predicted patterns for future exams
    predictions: {
        highProbability: [
            {
                topic: 'Automates',
                description: 'AFD pour un langage avec contrainte de préfixe ET suffixe',
                example: 'L = {w | w commence par 01 et se termine par 10}',
                reason: 'Combine deux types de contraintes vus séparément en 2024-2025'
            },
            {
                topic: 'Automates',
                description: 'Multiples d\'un autre nombre (pas 7)',
                example: 'Multiples de 5 ou de 3 en binaire',
                reason: 'Même technique que mult. de 7, juste changer le modulo'
            },
            {
                topic: 'Grammaires',
                description: 'Transformer une grammaire non-LL(1) en LL(1)',
                example: 'Grammaire avec récursivité à gauche ou factorisation nécessaire',
                reason: 'Question structurante, toujours présente'
            }
        ],
        mediumProbability: [
            {
                topic: 'Regex',
                description: 'Prouver une identité sur les langages',
                example: '(L·M)* = ε + L·(M·L)*·M',
                reason: 'Type de question vue dans les TDs'
            },
            {
                topic: 'Déterminisation',
                description: 'Déterminiser un AFN avec ε-transitions',
                example: 'AFN à 3-4 états avec plusieurs ε-transitions',
                reason: 'Technique fondamentale, peut revenir'
            }
        ],
        tips: [
            '📌 Maîtrise parfaitement l\'algorithme PREMIER/SUIVANT/DIRECTEUR',
            '📌 Sache construire un AFD pour "commence par", "termine par", "contient"',
            '📌 Retiens la technique des multiples en binaire (état = reste)',
            '📌 Pratique le déroulage LL(1) jusqu\'à ce que ce soit automatique',
            '📌 Connais le lemme d\'Arden et sache l\'appliquer'
        ]
    }
};

// Fonctions utilitaires pour l'examen
function getExam(examId) {
    if (examId === 'exam-2024-2025') {
        return EXAM_SIMULATION.exam2024;
    }
    return null;
}

function getExercise(examId, exerciseId) {
    const exam = getExam(examId);
    if (!exam) return null;
    return exam.exercises.find(ex => ex.id === exerciseId);
}

function getTotalPoints(examId) {
    const exam = getExam(examId);
    if (!exam) return 0;
    return exam.exercises.reduce((sum, ex) => sum + ex.points, 0);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
