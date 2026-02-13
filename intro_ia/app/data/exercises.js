// ==========================================
// Exercices Papier-Crayon
// À résoudre sur papier avant de révéler la réponse
// ==========================================

const exercisesData = {
    trace: [
        {
            id: 1,
            title: "Trace BFS sur un graphe",
            question: "Effectuez une recherche BFS (largeur d'abord) sur le graphe suivant, en partant de A et cherchant G. Remplissez la table de trace sur votre papier.",
            graph: `
        A ── B ── E
        │    │    │
        C ── D ── G
        
        Adjacence:
        A: [B, C]
        B: [A, D, E]
        C: [A, D]
        D: [B, C, G]
        E: [B, G]
        G: [D, E]
            `,
            hint: "BFS utilise une file (FIFO). Le premier ajouté est le premier exploré.",
            steps: [
                { step: 1, frontier: "[A]", current: "A", visited: "{A}", explanation: "Initialisation avec le nœud de départ A" },
                { step: 2, frontier: "[B, C]", current: "B", visited: "{A, B}", explanation: "A retiré, ses voisins B et C ajoutés" },
                { step: 3, frontier: "[C, D, E]", current: "C", visited: "{A, B, C}", explanation: "B retiré, D et E ajoutés (A déjà visité)" },
                { step: 4, frontier: "[D, E]", current: "D", visited: "{A, B, C, D}", explanation: "C retiré, D déjà dans la file" },
                { step: 5, frontier: "[E, G]", current: "E", visited: "{A, B, C, D, E}", explanation: "D retiré, G ajouté" },
                { step: 6, frontier: "[G]", current: "G", visited: "{A, B, C, D, E, G}", explanation: "E retiré, G trouvé! → BUT ATTEINT" }
            ],
            path: "A → B → D → G (ou A → C → D → G)",
            finalAnswer: "Chemin trouvé: A → B → D → G avec 3 arêtes"
        },
        {
            id: 2,
            title: "Trace DFS sur un graphe",
            question: "Effectuez une recherche DFS (profondeur d'abord) sur le même graphe, en partant de A et cherchant G.",
            graph: `
        A ── B ── E
        │    │    │
        C ── D ── G
        
        Adjacence:
        A: [B, C]
        B: [A, D, E]
        C: [A, D]
        D: [B, C, G]
        E: [B, G]
        G: [D, E]
            `,
            hint: "DFS utilise une pile (LIFO). Le dernier ajouté est le premier exploré.",
            steps: [
                { step: 1, frontier: "[A]", current: "A", visited: "{A}", explanation: "Initialisation avec le nœud de départ A" },
                { step: 2, frontier: "[C, B]", current: "B", visited: "{A, B}", explanation: "A dépilé, B et C empilés. B en haut de pile" },
                { step: 3, frontier: "[C, E, D]", current: "D", visited: "{A, B, D}", explanation: "B dépilé, D et E empilés (A déjà visité)" },
                { step: 4, frontier: "[C, E, G]", current: "G", visited: "{A, B, D, G}", explanation: "D dépilé, G empilé → BUT ATTEINT" }
            ],
            path: "A → B → D → G",
            finalAnswer: "Chemin trouvé: A → B → D → G avec 3 arêtes"
        },
        {
            id: 3,
            title: "UCS avec coûts",
            question: "Appliquez UCS (Uniform Cost Search) sur le graphe pondéré suivant de S à G.",
            graph: `
        S ──(1)── A ──(3)── G
        │         │
       (4)       (1)
        │         │
        B ──(2)── C ──(1)── G
        
        Coûts:
        S→A: 1, S→B: 4
        A→G: 3, A→C: 1
        B→C: 2
        C→G: 1
            `,
            hint: "UCS explore le nœud avec le plus petit coût g(n) depuis S.",
            steps: [
                { step: 1, frontier: "[(S,0)]", current: "S", visited: "{S}", explanation: "Départ avec S, coût 0" },
                { step: 2, frontier: "[(A,1), (B,4)]", current: "A", visited: "{S, A}", explanation: "S exploré, A(1) et B(4) ajoutés. A choisi (coût min)" },
                { step: 3, frontier: "[(C,2), (B,4), (G,4)]", current: "C", visited: "{S, A, C}", explanation: "A exploré: C(1+1=2), G(1+3=4). C choisi" },
                { step: 4, frontier: "[(G,3), (B,4), (G,4)]", current: "G", visited: "{S, A, C, G}", explanation: "C exploré: G(2+1=3). G choisi → BUT ATTEINT" }
            ],
            path: "S → A → C → G",
            finalAnswer: "Chemin optimal: S → A → C → G avec coût total = 3"
        },
        {
            id: 4,
            title: "⭐⭐ Trace A* avec heuristique",
            question: "Exécutez A* sur ce graphe. Calculez f(n)=g(n)+h(n) à chaque étape.",
            graph: `
        S ──(2)── A ──(3)── G
        │         │
       (3)       (2)
        │         │
        B ──(1)── C ──(2)── G
        
        Heuristiques: h(S)=5, h(A)=3, h(B)=4, h(C)=2, h(G)=0
            `,
            hint: "A* choisit le nœud avec f(n)=g(n)+h(n) minimum.",
            steps: [
                { step: 1, frontier: "[(S,f=0+5=5)]", current: "S", visited: "{S}", explanation: "Départ" },
                { step: 2, frontier: "[(A,f=2+3=5),(B,f=3+4=7)]", current: "A", visited: "{S,A}", explanation: "A choisi (f=5 min)" },
                { step: 3, frontier: "[(C,f=4+2=6),(G,f=5+0=5),(B,f=7)]", current: "G", visited: "{S,A,G}", explanation: "G direct, f=5" },
                { step: 4, frontier: "BUT ATTEINT", current: "G", visited: "{S,A,G}", explanation: "G atteint, coût=5" }
            ],
            finalAnswer: "Chemin: S→A→G, coût=5. A* a trouvé l'optimal."
        },
        {
            id: 5,
            title: "⭐⭐⭐ Graphe complexe - BFS vs DFS",
            question: "Sur ce graphe à 8 nœuds, comparez l'ordre d'exploration BFS et DFS de S à G.",
            graph: `
            S ── A ── B ── G
            │    │    │
            C ── D ── E
            │         │
            F ─────── H
        
        Adjacence (ordre alphabétique):
        S:[A,C], A:[S,B,D], B:[A,E,G], C:[S,D,F]
        D:[A,C,E], E:[B,D,H], F:[C,H], G:[B], H:[E,F]
            `,
            hint: "BFS: file FIFO niveau par niveau. DFS: pile LIFO en profondeur.",
            steps: [
                { step: 1, content: "BFS: S→A→C→B→D→F→E→G (7 étapes, chemin S-A-B-G)" },
                { step: 2, content: "DFS: S→A→B→E→D→C→F→H (trouve pas G vite si mal ordonné) ou S→A→B→G (chanceux)" },
                { step: 3, content: "BFS garantit chemin le plus court: 3 arêtes" },
                { step: 4, content: "DFS peut trouver plus vite ou plus lentement selon l'ordre" }
            ],
            finalAnswer: "BFS: S→A→B→G (3 arêtes, garanti optimal). DFS: dépend de l'ordre."
        },
        {
            id: 6,
            title: "⭐⭐⭐⭐ Expert: Comparer BFS, DFS, UCS, A*",
            question: "Pour ce graphe pondéré, donnez l'ordre d'exploration ET le chemin trouvé pour chaque algorithme.",
            graph: `
        S ──(1)── A ──(1)── B ──(1)── G
        │                   │
       (2)                 (2)
        │                   │
        C ───────(1)─────── D
        
        Heuristiques: h(S)=3, h(A)=2, h(B)=1, h(C)=3, h(D)=2, h(G)=0
            `,
            hint: "Comparez les critères: BFS=#arêtes, DFS=profondeur, UCS=g(n), A*=g(n)+h(n)",
            steps: [
                { step: 1, content: "BFS: S→A→C→B→D→G. Chemin: S-A-B-G (3 arêtes)" },
                { step: 2, content: "DFS: S→A→B→G (si chanceux) ou S→C→D→B→G. Chemin variable." },
                { step: 3, content: "UCS: S(0)→A(1)→B(2)→C(2)→G(3). Chemin: S-A-B-G (coût 3)" },
                { step: 4, content: "A*: S(f=3)→A(f=3)→B(f=3)→G(f=3). Chemin: S-A-B-G (coût 3)" },
                { step: 5, content: "Tous trouvent le même chemin optimal ici car heuristique admissible." }
            ],
            finalAnswer: "Tous: S→A→B→G (coût 3). A* explore moins de nœuds grâce à h(n)."
        }
    ],
    heuristic: [
        {
            id: 1,
            title: "Calcul Distance Manhattan",
            question: "Calculez la distance Manhattan pour chaque tuile du 8-puzzle suivant vers sa position but.",
            initial: `
        État actuel:           État but:
        ┌───┬───┬───┐         ┌───┬───┬───┐
        │ 1 │ 2 │ 3 │         │ 1 │ 2 │ 3 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 4 │ 0 │ 6 │         │ 4 │ 5 │ 6 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 7 │ 5 │ 8 │         │ 7 │ 8 │ 0 │
        └───┴───┴───┘         └───┴───┴───┘
        
        Coordonnées (ligne, colonne) commencent à (0,0)
            `,
            hint: "Manhattan = |x₁ - x₂| + |y₁ - y₂| pour chaque tuile",
            steps: [
                { step: 1, content: "Tuile 5: position actuelle (2,1), position but (1,1) → |2-1| + |1-1| = 1" },
                { step: 2, content: "Tuile 8: position actuelle (2,2), position but (2,1) → |2-2| + |2-1| = 1" },
                { step: 3, content: "Tuile 0: position actuelle (1,1), position but (2,2) → |1-2| + |1-2| = 2" },
                { step: 4, content: "Tuiles 1,2,3,4,6,7: déjà en place → distance = 0" }
            ],
            finalAnswer: "h(n) = 1 + 1 + 2 = 4 (on ne compte généralement pas la tuile vide, donc h(n) = 2)"
        },
        {
            id: 2,
            title: "Calcul f(n) pour A*",
            question: "Calculez f(n) = g(n) + h(n) pour chaque nœud dans le graphe suivant. Le but est G.",
            initial: `
        Graphe avec heuristiques:
        
        S ──(2)── A ──(3)── G
        │         │
       (3)       (2)
        │         │
        B ──(1)── C
        
        Heuristiques h(n):
        h(S) = 5, h(A) = 2, h(B) = 4
        h(C) = 2, h(G) = 0
            `,
            hint: "g(n) = coût depuis S, h(n) = estimation vers G, f(n) = g(n) + h(n)",
            steps: [
                { step: 1, content: "Nœud S: g(S)=0, h(S)=5 → f(S) = 0 + 5 = 5" },
                { step: 2, content: "Nœud A (via S): g(A)=2, h(A)=2 → f(A) = 2 + 2 = 4" },
                { step: 3, content: "Nœud B (via S): g(B)=3, h(B)=4 → f(B) = 3 + 4 = 7" },
                { step: 4, content: "Nœud C (via A): g(C)=2+2=4, h(C)=2 → f(C) = 4 + 2 = 6" },
                { step: 5, content: "Nœud G (via A): g(G)=2+3=5, h(G)=0 → f(G) = 5 + 0 = 5" }
            ],
            finalAnswer: "A* explore: S(5) → A(4) → G(5). Chemin: S → A → G, coût = 5"
        },
        {
            id: 3,
            title: "Vérifier l'admissibilité",
            question: "Les heuristiques suivantes sont-elles admissibles pour le problème donné?",
            initial: `
        Graphe avec vrais coûts vers G:
        
        Nœud A: vrai coût h*(A) = 4
        Nœud B: vrai coût h*(B) = 3
        Nœud C: vrai coût h*(C) = 2
        
        Heuristiques proposées:
        h₁(A) = 3, h₁(B) = 2, h₁(C) = 1
        h₂(A) = 5, h₂(B) = 3, h₂(C) = 1
            `,
            hint: "Admissible si h(n) ≤ h*(n) pour tout n",
            steps: [
                { step: 1, content: "h₁(A) = 3 ≤ h*(A) = 4 ✓" },
                { step: 2, content: "h₁(B) = 2 ≤ h*(B) = 3 ✓" },
                { step: 3, content: "h₁(C) = 1 ≤ h*(C) = 2 ✓ → h₁ est ADMISSIBLE" },
                { step: 4, content: "h₂(A) = 5 > h*(A) = 4 ✗ → h₂ n'est PAS ADMISSIBLE" }
            ],
            finalAnswer: "h₁ est admissible (optimiste), h₂ ne l'est pas (surestime le coût de A)"
        },
        {
            id: 4,
            title: "Calcul de complexité BFS vs DFS",
            question: "Calculez la complexité spatiale de BFS et DFS pour un arbre avec b=4 et d=6.",
            initial: `
        Paramètres:
        - Facteur de branchement b = 4
        - Profondeur de la solution d = 6
        
        Calculez:
        1) Complexité spatiale de BFS
        2) Complexité spatiale de DFS
        3) Quel algorithme utilise moins de mémoire?
            `,
            hint: "BFS: O(b^d), DFS: O(b×d)",
            steps: [
                { step: 1, content: "BFS stocke tout un niveau: O(b^d) = O(4^6) = O(4096) nœuds" },
                { step: 2, content: "DFS stocke un chemin: O(b×d) = O(4×6) = O(24) nœuds" },
                { step: 3, content: "Ratio: 4096/24 ≈ 170× plus de mémoire pour BFS" }
            ],
            finalAnswer: "BFS: O(4096), DFS: O(24). DFS utilise ~170× moins de mémoire."
        },
        {
            id: 5,
            title: "Trace A* complète",
            question: "Exécutez A* sur ce graphe. Donnez l'ordre d'exploration et le chemin optimal.",
            initial: `
        Graphe pondéré avec heuristiques:
        
        S ──(2)── A ──(4)── G
        │         │
       (1)       (1)
        │         │
        B ──(3)── C ──(2)── G
        
        Heuristiques h(n):
        h(S)=6, h(A)=4, h(B)=5, h(C)=2, h(G)=0
        
        Calculez f(n)=g(n)+h(n) pour chaque nœud exploré.
            `,
            hint: "A* explore le nœud avec f(n) minimum. f(n) = g(n) + h(n)",
            steps: [
                { step: 1, content: "Départ S: g(S)=0, f(S)=0+6=6. Frontière: [S(6)]" },
                { step: 2, content: "Explorer S → A(g=2,f=2+4=6), B(g=1,f=1+5=6). Frontière: [A(6),B(6)]" },
                { step: 3, content: "Explorer A → C(g=3,f=3+2=5), G(g=6,f=6+0=6). Frontière: [C(5),B(6),G(6)]" },
                { step: 4, content: "Explorer C (f=5 minimum) → G(g=5,f=5+0=5). Frontière: [G(5),B(6),G(6)]" },
                { step: 5, content: "Explorer G (f=5) → BUT ATTEINT avec coût 5" }
            ],
            finalAnswer: "Ordre: S→A→C→G. Chemin optimal: S→A→C→G avec coût=5"
        },
        {
            id: 6,
            title: "Comparer Manhattan et Euclidienne",
            question: "Pour les points donnés, calculez les deux distances et déterminez laquelle est plus informative.",
            initial: `
        Point A: (0, 0)
        Point B: (4, 3)
        
        1) Calculez la distance Manhattan
        2) Calculez la distance Euclidienne
        3) Laquelle est ≥ l'autre?
        4) Pour le 8-puzzle, laquelle est préférable?
            `,
            hint: "Manhattan = |Δx| + |Δy|, Euclidienne = √(Δx² + Δy²)",
            steps: [
                { step: 1, content: "Manhattan = |4-0| + |3-0| = 4 + 3 = 7" },
                { step: 2, content: "Euclidienne = √(4² + 3²) = √(16+9) = √25 = 5" },
                { step: 3, content: "Manhattan (7) ≥ Euclidienne (5) → Manhattan est plus informative" },
                { step: 4, content: "8-puzzle: mouvements orthogonaux → Manhattan est exacte et préférable" }
            ],
            finalAnswer: "Manhattan=7, Euclidienne=5. Manhattan ≥ Euclidienne. Pour 8-puzzle: Manhattan."
        },
        {
            id: 7,
            title: "⭐⭐ 8-Puzzle Manhattan complet",
            question: "Calculez h(n) = distance Manhattan totale pour cet état complexe du 8-puzzle.",
            initial: `
        État actuel:           État but:
        ┌───┬───┬───┐         ┌───┬───┬───┐
        │ 7 │ 2 │ 4 │         │ 1 │ 2 │ 3 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 5 │ 0 │ 6 │         │ 4 │ 5 │ 6 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 8 │ 3 │ 1 │         │ 7 │ 8 │ 0 │
        └───┴───┴───┘         └───┴───┴───┘
        
        Coordonnées (ligne, colonne) de 0 à 2.
            `,
            hint: "Pour chaque tuile (sauf 0): |ligne_actuelle - ligne_but| + |col_actuelle - col_but|",
            steps: [
                { step: 1, content: "1: (2,2)→(0,0): |2-0|+|2-0| = 4" },
                { step: 2, content: "2: (0,1)→(0,1): 0, 3: (2,1)→(0,2): 3, 4: (0,2)→(1,0): 3" },
                { step: 3, content: "5: (1,0)→(1,1): 1, 6: (1,2)→(1,2): 0" },
                { step: 4, content: "7: (0,0)→(2,0): 2, 8: (2,0)→(2,1): 1" },
                { step: 5, content: "Total: 4+0+3+3+1+0+2+1 = 14" }
            ],
            finalAnswer: "h(n) = 14 mouvements minimum estimés."
        },
        {
            id: 8,
            title: "⭐⭐⭐ Vérifier la consistance",
            question: "Une heuristique est consistante si h(n) ≤ c(n,n') + h(n'). Vérifiez pour ce graphe.",
            initial: `
        Graphe avec coûts et heuristiques:
        
        A ──(3)── B ──(2)── G
        
        h(A) = 4, h(B) = 2, h(G) = 0
        
        Vérifiez:
        1) h(A) ≤ c(A,B) + h(B) ?
        2) h(B) ≤ c(B,G) + h(G) ?
            `,
            hint: "Consistante = pour chaque arête, h(n) ≤ coût + h(successeur)",
            steps: [
                { step: 1, content: "h(A) ≤ c(A,B) + h(B) → 4 ≤ 3 + 2 = 5 ✓" },
                { step: 2, content: "h(B) ≤ c(B,G) + h(G) → 2 ≤ 2 + 0 = 2 ✓" },
                { step: 3, content: "Toutes les inégalités sont satisfaites." }
            ],
            finalAnswer: "L'heuristique est CONSISTANTE (et donc admissible aussi)."
        },
        {
            id: 9,
            title: "⭐⭐⭐⭐ Heuristiques dominantes",
            question: "Comparez deux heuristiques et déterminez laquelle est plus efficace pour A*.",
            initial: `
        Pour le 8-puzzle:
        
        h₁(n) = nombre de tuiles mal placées
        h₂(n) = distance Manhattan totale
        
        État: [2,8,3,1,6,4,7,0,5] → But: [1,2,3,4,5,6,7,8,0]
        
        1) Calculez h₁(n)
        2) Calculez h₂(n)
        3) Laquelle domine l'autre?
        4) Pourquoi c'est important?
            `,
            hint: "h₂ domine h₁ si ∀n: h₂(n) ≥ h₁(n). Dominante = moins de nœuds explorés.",
            steps: [
                { step: 1, content: "h₁: Tuiles mal placées = {2,8,1,6,4,5} = 6" },
                { step: 2, content: "h₂: Manhattan = 2+3+0+3+2+2+0+3 = 15" },
                { step: 3, content: "h₂(15) ≥ h₁(6) → h₂ domine h₁" },
                { step: 4, content: "h₂ est plus informative → A* explorera moins de nœuds" }
            ],
            finalAnswer: "h₂ (Manhattan=15) domine h₁ (mal placées=6). A* avec h₂ est plus rapide."
        }
    ],
    puzzle: [
        {
            id: 1,
            title: "Mouvements possibles du 8-Puzzle",
            question: "Listez tous les mouvements possibles (états successeurs) à partir de l'état suivant:",
            initial: `
        État actuel:
        ┌───┬───┬───┐
        │ 1 │ 2 │ 3 │
        ├───┼───┼───┤
        │ 4 │ 0 │ 5 │   (0 = case vide, position (1,1))
        ├───┼───┼───┤
        │ 6 │ 7 │ 8 │
        └───┴───┴───┘
            `,
            hint: "La case vide peut échanger avec les tuiles adjacentes (haut, bas, gauche, droite)",
            steps: [
                { step: 1, content: "Mouvement HAUT: échanger 0 avec 2 → [1,0,3,4,2,5,6,7,8]" },
                { step: 2, content: "Mouvement BAS: échanger 0 avec 7 → [1,2,3,4,7,5,6,0,8]" },
                { step: 3, content: "Mouvement GAUCHE: échanger 0 avec 4 → [1,2,3,0,4,5,6,7,8]" },
                { step: 4, content: "Mouvement DROITE: échanger 0 avec 5 → [1,2,3,4,5,0,6,7,8]" }
            ],
            finalAnswer: "4 successeurs possibles (la case vide est au centre)"
        },
        {
            id: 2,
            title: "Compter les tuiles mal placées",
            question: "Calculez l'heuristique h₁ (nombre de tuiles mal placées) pour l'état suivant:",
            initial: `
        État actuel:           État but:
        ┌───┬───┬───┐         ┌───┬───┬───┐
        │ 2 │ 8 │ 3 │         │ 1 │ 2 │ 3 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 1 │ 6 │ 4 │         │ 4 │ 5 │ 6 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 7 │ 0 │ 5 │         │ 7 │ 8 │ 0 │
        └───┴───┴───┘         └───┴───┴───┘
            `,
            hint: "Comptez chaque tuile qui n'est pas à sa position finale (ignorez la case vide)",
            steps: [
                { step: 1, content: "Position (0,0): actuel=2, but=1 → MAL PLACÉE" },
                { step: 2, content: "Position (0,1): actuel=8, but=2 → MAL PLACÉE" },
                { step: 3, content: "Position (0,2): actuel=3, but=3 → OK" },
                { step: 4, content: "Position (1,0): actuel=1, but=4 → MAL PLACÉE" },
                { step: 5, content: "Position (1,1): actuel=6, but=5 → MAL PLACÉE" },
                { step: 6, content: "Position (1,2): actuel=4, but=6 → MAL PLACÉE" },
                { step: 7, content: "Position (2,0): actuel=7, but=7 → OK" },
                { step: 8, content: "Position (2,2): actuel=5, but=0 → MAL PLACÉE" }
            ],
            finalAnswer: "h₁ = 6 tuiles mal placées (2, 8, 1, 6, 4, 5)"
        },
        {
            id: 3,
            title: "⭐⭐ Séquence de mouvements",
            question: "Trouvez la séquence optimale de mouvements pour résoudre ce mini-puzzle.",
            initial: `
        État actuel:           État but:
        ┌───┬───┬───┐         ┌───┬───┬───┐
        │ 1 │ 2 │ 3 │         │ 1 │ 2 │ 3 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 4 │ 0 │ 5 │         │ 4 │ 5 │ 6 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 7 │ 8 │ 6 │         │ 7 │ 8 │ 0 │
        └───┴───┴───┘         └───┴───┴───┘
        
        Actions: H=Haut, B=Bas, G=Gauche, D=Droite (mouvement de la tuile vers la case vide)
            `,
            hint: "Le 5 doit aller à gauche, le 6 doit descendre puis aller à gauche.",
            steps: [
                { step: 1, content: "État: [1,2,3,4,0,5,7,8,6]. Mouvement: D (5 va à gauche)" },
                { step: 2, content: "État: [1,2,3,4,5,0,7,8,6]. Mouvement: B (6 monte)" },
                { step: 3, content: "État: [1,2,3,4,5,6,7,8,0]. BUT ATTEINT!" }
            ],
            finalAnswer: "Séquence optimale: D, B (2 mouvements). h₂ initial = 2."
        },
        {
            id: 4,
            title: "⭐⭐⭐ Arbre de recherche du 8-puzzle",
            question: "Dessinez les 2 premiers niveaux de l'arbre de recherche BFS pour cet état.",
            initial: `
        État initial (profondeur 0):
        ┌───┬───┬───┐
        │ 1 │ 2 │ 3 │
        ├───┼───┼───┤
        │ 4 │ 0 │ 5 │   (case vide au centre)
        ├───┼───┼───┤
        │ 6 │ 7 │ 8 │
        └───┴───┴───┘
        
        1) Combien de successeurs (profondeur 1)?
        2) Combien de successeurs au total (profondeur 2)?
            `,
            hint: "Case vide au centre = 4 voisins. Ensuite chaque état a 2-4 successeurs.",
            steps: [
                { step: 1, content: "Profondeur 0: 1 état (initial)" },
                { step: 2, content: "Profondeur 1: 4 états (H, B, G, D)" },
                { step: 3, content: "Profondeur 2: Chaque état de prof.1 a 3 successeurs (sauf retour)" },
                { step: 4, content: "Total prof.2: 4 × 3 = 12 états (en ignorant les doublons)" }
            ],
            finalAnswer: "Niveau 0: 1, Niveau 1: 4, Niveau 2: ~12 (avec doublons possibles)."
        },
        {
            id: 5,
            title: "⭐⭐⭐⭐ Estimer la difficulté d'un puzzle",
            question: "Analysez cet état et estimez le nombre minimum de mouvements nécessaires.",
            initial: `
        État actuel:           État but:
        ┌───┬───┬───┐         ┌───┬───┬───┐
        │ 8 │ 7 │ 6 │         │ 1 │ 2 │ 3 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 5 │ 4 │ 3 │         │ 4 │ 5 │ 6 │
        ├───┼───┼───┤         ├───┼───┼───┤
        │ 2 │ 1 │ 0 │         │ 7 │ 8 │ 0 │
        └───┴───┴───┘         └───┴───┴───┘
        
        Cet état est presque l'inverse de l'état but!
            `,
            hint: "Calculez à la fois h₁ et h₂. La vraie solution sera ≥ max(h₁, h₂).",
            steps: [
                { step: 1, content: "h₁ = 8 tuiles mal placées (toutes sauf 0!)" },
                { step: 2, content: "h₂ = 2+2+2 + 2+2+2 + 2+2 = 16 (Manhattan)" },
                { step: 3, content: "Estimation: au moins 16 mouvements minimum" },
                { step: 4, content: "Note: Ce puzzle est très difficile, solution réelle ~28 mouvements" }
            ],
            finalAnswer: "h₁=8, h₂=16. Solution réelle ≈ 28 mouvements (cas difficile)."
        }
    ],
    adversarial: [
        {
            id: 1,
            title: "Calcul Minimax sur un arbre de jeu",
            question: "Calculez la valeur Minimax de chaque nœud et déterminez le meilleur coup pour MAX à la racine.",
            graph: `
        Arbre de jeu (MAX à la racine):
        
                    MAX(?)
                   /      \\
              MIN(?)      MIN(?)
              /   \\       /   \\
            3      5     2      9
            
        Les feuilles ont les valeurs: 3, 5, 2, 9
        MAX joue en premier (racine)
            `,
            hint: "MIN choisit le minimum de ses enfants, MAX choisit le maximum.",
            steps: [
                { step: 1, content: "Nœud MIN gauche: min(3, 5) = 3" },
                { step: 2, content: "Nœud MIN droite: min(2, 9) = 2" },
                { step: 3, content: "Nœud MAX (racine): max(3, 2) = 3" },
                { step: 4, content: "MAX choisit la branche gauche (valeur 3)" }
            ],
            finalAnswer: "Valeur Minimax = 3. MAX joue à gauche."
        },
        {
            id: 2,
            title: "Élagage Alpha-Beta",
            question: "Appliquez l'élagage alpha-beta et identifiez quels nœuds sont élagués.",
            graph: `
        Arbre de jeu (exploration gauche à droite):
        
                     MAX(?)     α=-∞, β=+∞
                    /      \\
               MIN(?)      MIN(?)
              /   \\       /   \\
             3     5     2     ?
            
        On explore de gauche à droite.
        La dernière feuille (?) sera-t-elle explorée ?
            `,
            hint: "MIN élague si valeur ≤ α. Après le MIN gauche, α = 3.",
            steps: [
                { step: 1, content: "Feuille 3 trouvée, MIN gauche = 3 provisoire" },
                { step: 2, content: "Feuille 5 trouvée, MIN gauche = min(3,5) = 3" },
                { step: 3, content: "MAX met à jour α = 3" },
                { step: 4, content: "Feuille 2 trouvée, MIN droite = 2" },
                { step: 5, content: "2 ≤ α(3), donc MIN ne peut pas faire mieux → ÉLAGAGE de (?)" }
            ],
            finalAnswer: "La feuille (?) est élaguée. MIN droite retourne 2. MAX choisit gauche (3)."
        },
        {
            id: 3,
            title: "Minimax à 3 niveaux",
            question: "Calculez les valeurs Minimax pour cet arbre à 3 niveaux.",
            graph: `
                         MAX(?)
                        /      \\
                   MIN(?)      MIN(?)
                   /   \\       /   \\
               MAX(?) MAX(?) MAX(?) MAX(?)
               / \\   / \\    / \\    / \\
              4  6  7  3   1  8   5  2
            
        8 feuilles avec valeurs: 4,6,7,3,1,8,5,2
            `,
            hint: "Remontez niveau par niveau: MAX → MIN → MAX",
            steps: [
                { step: 1, content: "MAX niveau 2, gauche-gauche: max(4,6) = 6" },
                { step: 2, content: "MAX niveau 2, gauche-droite: max(7,3) = 7" },
                { step: 3, content: "MAX niveau 2, droite-gauche: max(1,8) = 8" },
                { step: 4, content: "MAX niveau 2, droite-droite: max(5,2) = 5" },
                { step: 5, content: "MIN niveau 1, gauche: min(6,7) = 6" },
                { step: 6, content: "MIN niveau 1, droite: min(8,5) = 5" },
                { step: 7, content: "MAX racine: max(6,5) = 6" }
            ],
            finalAnswer: "Valeur Minimax = 6. MAX joue à gauche."
        },
        {
            id: 4,
            title: "Identifier les valeurs α et β",
            question: "Tracez l'évolution de α et β pendant l'exploration alpha-beta.",
            graph: `
                    MAX         α=-∞, β=+∞
                   /   \\
                MIN     MIN
               / \\     / \\
              5   3   7   ?
            
        Exploration: 5, 3, 7, ?
            `,
            hint: "α est mis à jour par MAX, β par MIN.",
            steps: [
                { step: 1, content: "Début: α=-∞, β=+∞" },
                { step: 2, content: "Feuille 5: MIN gauche provisoire = 5" },
                { step: 3, content: "Feuille 3: MIN gauche = min(5,3) = 3" },
                { step: 4, content: "Retour à MAX: α = max(-∞, 3) = 3" },
                { step: 5, content: "Feuille 7: MIN droite provisoire = 7" },
                { step: 6, content: "7 > α(3), pas d'élagage, on continue" },
                { step: 7, content: "? sera explorée car MIN droite doit finir" }
            ],
            finalAnswer: "Pas d'élagage car aucune valeur ≤ α n'a été trouvée à droite."
        },
        {
            id: 5,
            title: "⭐⭐ Alpha-Beta avec élagage multiple",
            question: "Identifiez TOUS les nœuds élagués dans cet arbre (exploration gauche à droite).",
            graph: `
                        MAX
                    /        \\
                MIN(A)      MIN(B)
               /  |  \\     /  |  \\
              3   12  8   2   ?   ?
            `,
            hint: "Après MIN(A), α=3. Si MIN(B) trouve ≤3, les frères sont élagués.",
            steps: [
                { step: 1, content: "MIN(A): min(3,12,8) = 3. MAX met α = 3" },
                { step: 2, content: "MIN(B): première feuille = 2" },
                { step: 3, content: "2 ≤ α(3) → ÉLAGAGE: les ? ne sont pas explorés" },
                { step: 4, content: "MIN(B) retourne 2, MAX choisit A (valeur 3)" }
            ],
            finalAnswer: "2 nœuds élagués (?). MAX choisit branche A, valeur = 3."
        },
        {
            id: 6,
            title: "⭐⭐⭐ Arbre à 4 niveaux",
            question: "Calculez Minimax ET identifiez les élagages possibles (exploration gauche à droite).",
            graph: `
                            MAX
                          /      \\
                       MIN        MIN
                      /   \\      /   \\
                    MAX   MAX  MAX   MAX
                   /  \\  /  \\ /  \\  /  \\
                   6  4  8  5 1  3  9  2
            `,
            hint: "Calculez d'abord Minimax complet, puis refaites avec alpha-beta.",
            steps: [
                { step: 1, content: "MAX niveau 2: max(6,4)=6, max(8,5)=8, max(1,3)=3, max(9,2)=9" },
                { step: 2, content: "MIN niveau 1: min(6,8)=6, min(3,9)=3" },
                { step: 3, content: "MAX racine: max(6,3)=6" },
                { step: 4, content: "Alpha-beta: après gauche, α=6. À droite, dès que max(1,3)=3≤6, la branche (9,2) est élaguée" },
                { step: 5, content: "Nœuds élagués: 9 et 2 (économie de 2 évaluations)" }
            ],
            finalAnswer: "Minimax = 6, MAX joue à gauche. Alpha-beta élague 9 et 2."
        },
        {
            id: 7,
            title: "⭐⭐⭐⭐ Expert: Alpha-Beta complet avec trace",
            question: "Faites une trace complète de α, β à chaque nœud avec les élagages.",
            graph: `
                        MAX         (α=-∞, β=+∞)
                       /    \\
                    MIN      MIN    
                   /   \\    /   \\
                  5    6   3     7
                  
            Tracez: valeur retournée + (α,β) après chaque feuille.
            `,
            hint: "α se propage vers le bas et est mis à jour par MAX. β par MIN.",
            steps: [
                { step: 1, content: "Feuille 5: MIN(gauche) provisoire=5, β devient 5" },
                { step: 2, content: "Feuille 6: MIN(gauche) = min(5,6)=5, retourne 5" },
                { step: 3, content: "MAX: α = max(-∞, 5) = 5" },
                { step: 4, content: "Feuille 3: MIN(droite) provisoire=3, β=3" },
                { step: 5, content: "3 < α(5)? Non, 3 < 5 mais condition est ≤, continue..." },
                { step: 6, content: "Feuille 7: MIN(droite) = min(3,7)=3" },
                { step: 7, content: "MAX: max(5, 3) = 5. Valeur finale = 5" }
            ],
            finalAnswer: "Valeur = 5. Pas d'élagage ici (3 < α mais pas de frère après 7)."
        }
    ]
};

