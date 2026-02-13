// ==========================================
// Banque de Questions QCM
// 50+ questions avec explications détaillées
// ==========================================

const questionsData = [
    // ========== AGENTS IA (8 questions) ==========
    {
        id: 1,
        category: "agents",
        question: "Qu'est-ce qu'un agent IA ?",
        options: [
            "Un programme qui exécute des instructions sans percevoir l'environnement",
            "Un système autonome qui perçoit, décide et agit sur son environnement",
            "Un robot physique uniquement",
            "Un système qui nécessite toujours une intervention humaine"
        ],
        correct: 1,
        explanation: "Un agent IA est un système autonome qui perçoit son environnement via des capteurs, prend des décisions, et agit via des actionneurs pour atteindre ses objectifs."
    },
    {
        id: 2,
        category: "agents",
        question: "Quelle est la différence principale entre un agent réflexe et un agent planificateur ?",
        options: [
            "L'agent réflexe est plus intelligent",
            "L'agent planificateur ne peut pas percevoir l'environnement",
            "L'agent réflexe agit selon la perception actuelle, le planificateur considère les conséquences futures",
            "Il n'y a pas de différence"
        ],
        correct: 2,
        explanation: "L'agent réflexe suit le principe 'percevoir → agir' basé uniquement sur la perception actuelle. L'agent planificateur 'réfléchit avant d'agir' en considérant les conséquences futures de ses actions."
    },
    {
        id: 3,
        category: "agents",
        question: "Quel est l'avantage principal d'un agent réflexe ?",
        options: [
            "Il trouve toujours la solution optimale",
            "Il est simple et rapide à répondre",
            "Il peut apprendre de ses erreurs",
            "Il fonctionne dans tous les environnements"
        ],
        correct: 1,
        explanation: "Les agents réflexes sont simples à concevoir et très rapides car ils n'ont pas de raisonnement complexe. Cependant, ils sont limités en intelligence."
    },
    {
        id: 4,
        category: "agents",
        question: "Quelle propriété permet à un agent de prendre l'initiative pour atteindre ses objectifs ?",
        options: [
            "Réactivité",
            "Autonomie",
            "Proactivité",
            "Sociabilité"
        ],
        correct: 2,
        explanation: "La proactivité permet à l'agent de prendre l'initiative. L'autonomie signifie fonctionner sans intervention humaine, la réactivité répond aux changements, et la sociabilité permet d'interagir avec d'autres."
    },
    {
        id: 5,
        category: "agents",
        question: "Dans l'exemple PacMan, pourquoi un agent réflexe peut-il échouer ?",
        options: [
            "Il ne peut pas voir les fantômes",
            "Il ne considère pas les conséquences futures de ses mouvements",
            "Il est trop lent",
            "Il ne peut pas manger les pastilles"
        ],
        correct: 1,
        explanation: "Un agent réflexe PacMan peut se diriger vers un fantôme visible sans anticiper qu'il sera piégé. Il ne planifie pas pour éviter les situations dangereuses futures."
    },
    {
        id: 6,
        category: "agents",
        question: "Qu'est-ce qui est nécessaire pour qu'un agent planificateur fonctionne ?",
        options: [
            "Une connexion internet",
            "Un modèle de l'évolution du monde en réponse aux actions",
            "Des capteurs physiques uniquement",
            "Une base de données SQL"
        ],
        correct: 1,
        explanation: "Un agent planificateur nécessite un modèle du monde pour prédire les conséquences de ses actions et ainsi planifier un chemin vers l'objectif."
    },
    {
        id: 7,
        category: "agents",
        question: "Un thermostat intelligent qui ajuste la température est un exemple de :",
        options: [
            "Agent planificateur complexe",
            "Agent réflexe simple",
            "Intelligence artificielle générale",
            "Système non-autonome"
        ],
        correct: 1,
        explanation: "Un thermostat est un agent réflexe classique : il perçoit la température et agit (chauffer/refroidir) selon des règles simples sans planification complexe."
    },
    {
        id: 8,
        category: "agents",
        question: "Quel est l'inconvénient principal d'un agent planificateur ?",
        options: [
            "Il ne trouve jamais de solution",
            "Il est coûteux en calcul et peut être lent",
            "Il ne peut pas percevoir l'environnement",
            "Il nécessite toujours un humain"
        ],
        correct: 1,
        explanation: "Les agents planificateurs sont coûteux en calcul car ils doivent explorer de nombreuses possibilités. Si le monde change plus vite qu'ils ne planifient, ils échouent."
    },

    // ========== PROBLÈMES DE RECHERCHE (10 questions) ==========
    {
        id: 9,
        category: "search",
        question: "Quelles sont les composantes d'un problème de recherche ?",
        options: [
            "CPU, RAM, Disque dur",
            "États, Actions, Fonction de transition, État initial, Test de but",
            "Entrée, Sortie, Processus",
            "Variables, Constantes, Opérateurs"
        ],
        correct: 1,
        explanation: "Un problème de recherche est défini par : les états possibles, les actions disponibles, la fonction de transition, l'état initial, et le test de but."
    },
    {
        id: 10,
        category: "search",
        question: "Dans le 8-puzzle, qu'est-ce qu'un 'état' ?",
        options: [
            "Le nombre de mouvements effectués",
            "Une configuration particulière des tuiles sur la grille",
            "La vitesse de l'algorithme",
            "Le score du joueur"
        ],
        correct: 1,
        explanation: "Dans le 8-puzzle, un état représente une configuration spécifique des 8 tuiles numérotées plus la case vide sur la grille 3x3."
    },
    {
        id: 11,
        category: "search",
        question: "Qu'est-ce que la 'frontière' (fringe) dans un arbre de recherche ?",
        options: [
            "Les nœuds déjà explorés",
            "Les nœuds non encore explorés en attente d'expansion",
            "Le nœud but",
            "La racine de l'arbre"
        ],
        correct: 1,
        explanation: "La frontière contient les nœuds générés mais pas encore explorés. C'est la 'file d'attente' des nœuds à traiter."
    },
    {
        id: 12,
        category: "search",
        question: "Que signifie la 'complétude' d'un algorithme de recherche ?",
        options: [
            "Il trouve la solution la moins coûteuse",
            "Il utilise peu de mémoire",
            "Il trouve toujours une solution si elle existe",
            "Il est rapide"
        ],
        correct: 2,
        explanation: "Un algorithme est complet s'il garantit de trouver une solution lorsqu'elle existe. BFS est complet, DFS ne l'est pas dans les espaces infinis."
    },
    {
        id: 13,
        category: "search",
        question: "Que signifie l'optimalité d'un algorithme de recherche ?",
        options: [
            "Il est le plus rapide",
            "Il trouve la solution de coût minimal",
            "Il utilise le moins de mémoire",
            "Il est le plus simple à implémenter"
        ],
        correct: 1,
        explanation: "L'optimalité signifie que l'algorithme trouve la solution avec le coût de chemin le plus bas parmi toutes les solutions possibles."
    },
    {
        id: 14,
        category: "search",
        question: "Dans le 8-puzzle, quelles sont les actions possibles ?",
        options: [
            "Ajouter ou supprimer des tuiles",
            "Déplacer la case vide vers le haut, bas, gauche ou droite",
            "Changer la couleur des tuiles",
            "Agrandir la grille"
        ],
        correct: 1,
        explanation: "Les actions du 8-puzzle consistent à déplacer la case vide en échangeant sa position avec une tuile adjacente (4 directions possibles)."
    },
    {
        id: 15,
        category: "search",
        question: "Qu'est-ce que le 'facteur de branchement' (b) ?",
        options: [
            "La profondeur maximale de l'arbre",
            "Le nombre moyen de successeurs par nœud",
            "Le nombre total de nœuds",
            "La largeur de l'arbre"
        ],
        correct: 1,
        explanation: "Le facteur de branchement b représente le nombre moyen de successeurs (actions possibles) à partir de chaque état. Pour le 8-puzzle central, b ≈ 3."
    },
    {
        id: 16,
        category: "search",
        question: "Pourquoi utilise-t-on un ensemble 'visités' dans les algorithmes de recherche ?",
        options: [
            "Pour accélérer le tri",
            "Pour éviter d'explorer le même état plusieurs fois",
            "Pour stocker les solutions",
            "Pour compter le nombre d'itérations"
        ],
        correct: 1,
        explanation: "L'ensemble des visités évite de revisiter les mêmes états, ce qui empêche les boucles infinies et réduit le travail redondant."
    },
    {
        id: 17,
        category: "search",
        question: "Quelle est la complexité spatiale de BFS si b=10 et d=5 ?",
        options: [
            "O(50)",
            "O(b^d) = O(100,000)",
            "O(b*d) = O(50)",
            "O(d) = O(5)"
        ],
        correct: 1,
        explanation: "BFS a une complexité spatiale O(b^d) car il doit stocker tous les nœuds d'un niveau avant de passer au suivant. Ici: 10^5 = 100,000 nœuds."
    },
    {
        id: 18,
        category: "search",
        question: "Qu'est-ce que le 'coût du chemin' ?",
        options: [
            "Le temps d'exécution de l'algorithme",
            "La somme des coûts des actions du chemin",
            "Le nombre de nœuds dans l'arbre",
            "La mémoire utilisée"
        ],
        correct: 1,
        explanation: "Le coût du chemin est la somme des coûts de toutes les actions effectuées depuis l'état initial jusqu'à l'état actuel."
    },

    // ========== BFS/DFS (12 questions) ==========
    {
        id: 19,
        category: "bfsdfs",
        question: "Quelle structure de données utilise BFS ?",
        options: [
            "Pile (Stack)",
            "File (Queue)",
            "Arbre binaire",
            "Table de hachage"
        ],
        correct: 1,
        explanation: "BFS utilise une file (FIFO - First In, First Out) pour explorer les nœuds niveau par niveau."
    },
    {
        id: 20,
        category: "bfsdfs",
        question: "Quelle structure de données utilise DFS ?",
        options: [
            "File (Queue)",
            "Pile (Stack)",
            "File de priorité",
            "Liste chaînée"
        ],
        correct: 1,
        explanation: "DFS utilise une pile (LIFO - Last In, First Out) ou la récursion pour explorer en profondeur avant de revenir en arrière."
    },
    {
        id: 21,
        category: "bfsdfs",
        question: "BFS est-il optimal ?",
        options: [
            "Oui, toujours",
            "Oui, si les coûts des actions sont uniformes",
            "Non, jamais",
            "Seulement pour les graphes sans cycles"
        ],
        correct: 1,
        explanation: "BFS est optimal lorsque toutes les actions ont le même coût. Il trouve alors la solution avec le moins d'étapes. Si les coûts varient, utilisez UCS."
    },
    {
        id: 22,
        category: "bfsdfs",
        question: "Pourquoi DFS n'est-il pas complet dans les espaces infinis ?",
        options: [
            "Il utilise trop de mémoire",
            "Il peut s'enfoncer infiniment dans une branche sans but",
            "Il est trop lent",
            "Il ne peut pas gérer les graphes"
        ],
        correct: 1,
        explanation: "DFS peut explorer indéfiniment une branche sans fin, ne trouvant jamais le but même s'il existe dans une autre branche."
    },
    {
        id: 23,
        category: "bfsdfs",
        question: "Quel est l'avantage principal de DFS par rapport à BFS ?",
        options: [
            "Il est toujours plus rapide",
            "Il trouve toujours la solution optimale",
            "Il utilise moins de mémoire O(b·m) vs O(b^d)",
            "Il est plus simple à comprendre"
        ],
        correct: 2,
        explanation: "DFS a une complexité spatiale O(b·m) car il ne stocke qu'un chemin à la fois, tandis que BFS stocke tous les nœuds d'un niveau O(b^d)."
    },
    {
        id: 24,
        category: "bfsdfs",
        question: "Dans quel ordre BFS explore-t-il les nœuds suivants ajoutés : A, B, C ?",
        options: [
            "C, B, A (dernier ajouté, premier exploré)",
            "A, B, C (premier ajouté, premier exploré)",
            "Ordre aléatoire",
            "Par ordre alphabétique"
        ],
        correct: 1,
        explanation: "BFS utilise FIFO (First In, First Out). Le premier nœud ajouté (A) est le premier exploré, puis B, puis C."
    },
    {
        id: 25,
        category: "bfsdfs",
        question: "Dans quel ordre DFS explore-t-il les nœuds suivants ajoutés : A, B, C ?",
        options: [
            "A, B, C (premier ajouté, premier exploré)",
            "C, B, A (dernier ajouté, premier exploré)",
            "Ordre aléatoire",
            "Par ordre alphabétique inverse"
        ],
        correct: 1,
        explanation: "DFS utilise LIFO (Last In, First Out). Le dernier nœud ajouté (C) est le premier exploré, puis B, puis A."
    },
    {
        id: 26,
        category: "bfsdfs",
        question: "Quelle est la complexité temporelle de BFS ?",
        options: [
            "O(1)",
            "O(b^d)",
            "O(log n)",
            "O(n)"
        ],
        correct: 1,
        explanation: "BFS a une complexité temporelle O(b^d) car il peut explorer jusqu'à b^d nœuds avant de trouver la solution à profondeur d."
    },
    {
        id: 27,
        category: "bfsdfs",
        question: "Pour trouver le chemin le plus court dans un graphe non pondéré, utilisez :",
        options: [
            "DFS",
            "BFS",
            "Hill Climbing",
            "Recherche aléatoire"
        ],
        correct: 1,
        explanation: "BFS garantit de trouver le chemin le plus court en nombre d'arêtes car il explore les nœuds par niveaux croissants de profondeur."
    },
    {
        id: 28,
        category: "bfsdfs",
        question: "Le backtracking est une caractéristique de :",
        options: [
            "BFS",
            "DFS",
            "UCS",
            "A*"
        ],
        correct: 1,
        explanation: "Le backtracking (retour en arrière) est typique de DFS : quand une impasse est atteinte, l'algorithme revient au dernier point de décision."
    },
    {
        id: 29,
        category: "bfsdfs",
        question: "Si BFS et DFS trouvent tous deux une solution, laquelle est garantie d'être la plus courte ?",
        options: [
            "Celle de DFS",
            "Celle de BFS",
            "Elles sont identiques",
            "On ne peut pas le déterminer"
        ],
        correct: 1,
        explanation: "BFS trouve toujours la solution la plus proche de la racine (plus courte en nombre d'étapes). DFS peut trouver une solution plus longue ou différente."
    },
    {
        id: 30,
        category: "bfsdfs",
        question: "Qu'est-ce que la profondeur d'un nœud ?",
        options: [
            "Le nombre total de nœuds dans l'arbre",
            "Le nombre d'arêtes entre la racine et ce nœud",
            "Le facteur de branchement",
            "Le coût du chemin"
        ],
        correct: 1,
        explanation: "La profondeur d'un nœud est le nombre d'arêtes (ou d'actions) depuis la racine (état initial) jusqu'à ce nœud."
    },

    // ========== RECHERCHE INFORMÉE (12 questions) ==========
    {
        id: 31,
        category: "informed",
        question: "Qu'est-ce qu'une heuristique en recherche IA ?",
        options: [
            "Une solution exacte",
            "Une estimation du coût pour atteindre le but",
            "Le coût réel du chemin",
            "Un algorithme de tri"
        ],
        correct: 1,
        explanation: "Une heuristique h(n) est une fonction qui estime le coût restant pour atteindre le but depuis un nœud n. Elle guide la recherche."
    },
    {
        id: 32,
        category: "informed",
        question: "UCS (Uniform Cost Search) utilise quelle fonction d'évaluation ?",
        options: [
            "f(n) = h(n)",
            "f(n) = g(n)",
            "f(n) = g(n) + h(n)",
            "f(n) = 0"
        ],
        correct: 1,
        explanation: "UCS utilise f(n) = g(n), le coût du chemin depuis le départ. Il ignore l'estimation vers le but."
    },
    {
        id: 33,
        category: "informed",
        question: "Best-First Search utilise quelle fonction d'évaluation ?",
        options: [
            "f(n) = g(n)",
            "f(n) = h(n)",
            "f(n) = g(n) + h(n)",
            "f(n) = g(n) - h(n)"
        ],
        correct: 1,
        explanation: "Best-First utilise f(n) = h(n), l'estimation vers le but uniquement. Il ignore le coût déjà parcouru."
    },
    {
        id: 34,
        category: "informed",
        question: "A* utilise quelle fonction d'évaluation ?",
        options: [
            "f(n) = g(n)",
            "f(n) = h(n)",
            "f(n) = g(n) + h(n)",
            "f(n) = max(g(n), h(n))"
        ],
        correct: 2,
        explanation: "A* combine le coût réel g(n) et l'estimation h(n) : f(n) = g(n) + h(n). C'est le coût total estimé via ce nœud."
    },
    {
        id: 35,
        category: "informed",
        question: "Qu'est-ce qu'une heuristique admissible ?",
        options: [
            "Une heuristique qui surestime le coût",
            "Une heuristique qui sous-estime ou égale le vrai coût",
            "Une heuristique qui retourne toujours 0",
            "Une heuristique qui retourne le coût exact"
        ],
        correct: 1,
        explanation: "Une heuristique admissible satisfait h(n) ≤ h*(n) pour tout n, où h*(n) est le vrai coût. Elle est 'optimiste'."
    },
    {
        id: 36,
        category: "informed",
        question: "A* est optimal si :",
        options: [
            "L'heuristique retourne toujours 0",
            "L'heuristique est admissible",
            "Le graphe n'a pas de cycles",
            "Les coûts sont tous égaux à 1"
        ],
        correct: 1,
        explanation: "A* garantit l'optimalité si l'heuristique est admissible (ne surestime jamais). Si h surestime, A* peut trouver une solution sous-optimale."
    },
    {
        id: 37,
        category: "informed",
        question: "Pour le 8-puzzle, la distance Manhattan est :",
        options: [
            "La somme des distances en ligne droite",
            "La somme des distances horizontales et verticales de chaque tuile à sa position but",
            "Le nombre de tuiles mal placées",
            "La différence entre l'état actuel et le but"
        ],
        correct: 1,
        explanation: "Manhattan distance = Σ(|x₁-x₂| + |y₁-y₂|) pour chaque tuile. C'est la somme des déplacements horizontaux et verticaux nécessaires."
    },
    {
        id: 38,
        category: "informed",
        question: "Quelle heuristique est généralement plus informative pour le 8-puzzle ?",
        options: [
            "h(n) = 0",
            "Nombre de tuiles mal placées",
            "Distance Manhattan",
            "Distance Euclidienne"
        ],
        correct: 2,
        explanation: "Manhattan est plus informative que les tuiles mal placées car elle mesure précisément la distance de chaque tuile. Elle satisfait h1 ≤ h2 ≤ h* généralement."
    },
    {
        id: 39,
        category: "informed",
        question: "Le problème principal de Hill Climbing est :",
        options: [
            "Il est trop lent",
            "Il utilise trop de mémoire",
            "Il peut rester bloqué dans un maximum local",
            "Il ne peut pas gérer les heuristiques"
        ],
        correct: 2,
        explanation: "Hill Climbing choisit toujours le meilleur voisin local. S'il n'y a pas de voisin meilleur mais qu'on n'est pas au but global, l'algorithme est bloqué."
    },
    {
        id: 40,
        category: "informed",
        question: "Que représente g(n) dans A* ?",
        options: [
            "L'estimation du coût vers le but",
            "Le coût réel du chemin depuis le départ jusqu'à n",
            "Le coût total estimé",
            "Le facteur de branchement"
        ],
        correct: 1,
        explanation: "g(n) est le coût réel accumulé depuis l'état initial jusqu'au nœud n, contrairement à h(n) qui est une estimation."
    },
    {
        id: 41,
        category: "informed",
        question: "Si h(n) = 0 pour tout n, A* se comporte comme :",
        options: [
            "DFS",
            "BFS",
            "UCS",
            "Best-First"
        ],
        correct: 2,
        explanation: "Si h(n) = 0, alors f(n) = g(n) + 0 = g(n), ce qui est exactement la fonction d'évaluation de UCS."
    },
    {
        id: 42,
        category: "informed",
        question: "Si g(n) = 0 pour tout n, A* se comporte comme :",
        options: [
            "DFS",
            "BFS",
            "UCS",
            "Best-First Search"
        ],
        correct: 3,
        explanation: "Si g(n) = 0, alors f(n) = 0 + h(n) = h(n), ce qui est exactement la fonction d'évaluation de Best-First Search."
    },

    // ========== A* ET HEURISTIQUES (8 questions) ==========
    {
        id: 43,
        category: "astar",
        question: "Calculez f(A) si g(A) = 5 et h(A) = 3",
        options: [
            "f(A) = 2",
            "f(A) = 8",
            "f(A) = 15",
            "f(A) = 3"
        ],
        correct: 1,
        explanation: "f(n) = g(n) + h(n) = 5 + 3 = 8. C'est le coût total estimé pour atteindre le but via A."
    },
    {
        id: 44,
        category: "astar",
        question: "Une heuristique h avec h(n) = 10 alors que h*(n) = 8 est :",
        options: [
            "Admissible",
            "Non admissible (pessimiste)",
            "Parfaite",
            "Nulle"
        ],
        correct: 1,
        explanation: "h(n) = 10 > h*(n) = 8 signifie que l'heuristique surestime le coût réel. Elle n'est pas admissible et A* pourrait ne pas être optimal."
    },
    {
        id: 45,
        category: "astar",
        question: "Pour un état but G, quelle doit être la valeur de h(G) ?",
        options: [
            "h(G) = ∞",
            "h(G) = 1",
            "h(G) = 0",
            "h(G) = g(G)"
        ],
        correct: 2,
        explanation: "Pour l'état but, le coût restant pour atteindre le but est 0 car nous y sommes déjà. Donc h(G) = 0."
    },
    {
        id: 46,
        category: "astar",
        question: "A* avec une heuristique parfaite (h = h*) :",
        options: [
            "N'explore que les nœuds sur le chemin optimal",
            "Explore tous les nœuds",
            "Ne fonctionne pas",
            "Est plus lent que UCS"
        ],
        correct: 0,
        explanation: "Avec une heuristique parfaite, A* va directement vers le but sans explorer de nœuds inutiles. C'est le cas idéal mais rarement réalisable."
    },
    {
        id: 47,
        category: "astar",
        question: "Distance Euclidienne entre (0,0) et (3,4) = ?",
        options: [
            "7",
            "5",
            "12",
            "3.5"
        ],
        correct: 1,
        explanation: "Distance Euclidienne = √((3-0)² + (4-0)²) = √(9 + 16) = √25 = 5"
    },
    {
        id: 48,
        category: "astar",
        question: "Distance Manhattan entre (0,0) et (3,4) = ?",
        options: [
            "5",
            "7",
            "12",
            "3.5"
        ],
        correct: 1,
        explanation: "Distance Manhattan = |3-0| + |4-0| = 3 + 4 = 7"
    },
    {
        id: 49,
        category: "astar",
        question: "Quelle relation existe entre Manhattan et Euclidienne pour une même paire de points ?",
        options: [
            "Manhattan < Euclidienne toujours",
            "Manhattan = Euclidienne toujours",
            "Manhattan ≥ Euclidienne",
            "Aucune relation"
        ],
        correct: 2,
        explanation: "La distance Manhattan est toujours ≥ à la distance Euclidienne (égalité si horizontal ou vertical uniquement). Ligne droite ≤ chemin en escalier."
    },
    {
        id: 50,
        category: "astar",
        question: "Pourquoi la distance Manhattan est-elle admissible pour le 8-puzzle ?",
        options: [
            "Elle surestime le nombre de mouvements",
            "Elle égale toujours le vrai coût",
            "Elle sous-estime ou égale le nombre minimum de mouvements",
            "Elle n'est pas admissible"
        ],
        correct: 2,
        explanation: "Chaque tuile doit faire AU MOINS Manhattan mouvements pour atteindre sa position. En réalité, il peut en falloir plus à cause des conflits. Donc h ≤ h*."
    },

    // ========== RECHERCHE ADVERSARIALE (10 questions) ==========
    {
        id: 51,
        category: "adversarial",
        question: "Qu'est-ce qu'un jeu à somme nulle ?",
        options: [
            "Un jeu où personne ne gagne",
            "Un jeu où le gain d'un joueur = la perte de l'autre",
            "Un jeu sans règles",
            "Un jeu avec un seul joueur"
        ],
        correct: 1,
        explanation: "Dans un jeu à somme nulle, les utilités des joueurs sont opposées : si MAX gagne +1, MIN obtient -1. Le total est toujours zéro."
    },
    {
        id: 52,
        category: "adversarial",
        question: "Dans l'algorithme Minimax, que fait le joueur MAX ?",
        options: [
            "Il minimise la valeur",
            "Il choisit l'action avec la valeur maximale",
            "Il joue au hasard",
            "Il abandonne la partie"
        ],
        correct: 1,
        explanation: "MAX cherche à maximiser son utilité. À chaque nœud MAX, on choisit le coup qui donne la valeur la plus élevée parmi les enfants."
    },
    {
        id: 53,
        category: "adversarial",
        question: "Dans l'algorithme Minimax, que fait le joueur MIN ?",
        options: [
            "Il maximise la valeur",
            "Il choisit l'action avec la valeur minimale",
            "Il copie les coups de MAX",
            "Il ne joue pas"
        ],
        correct: 1,
        explanation: "MIN cherche à minimiser l'utilité de MAX. À chaque nœud MIN, on choisit le coup qui donne la valeur la plus basse."
    },
    {
        id: 54,
        category: "adversarial",
        question: "Quelle est la complexité temporelle de Minimax ?",
        options: [
            "O(b + m)",
            "O(b × m)",
            "O(b^m)",
            "O(log b)"
        ],
        correct: 2,
        explanation: "Minimax explore tout l'arbre de jeu, comme DFS exhaustif. Avec un facteur de branchement b et une profondeur m, la complexité est O(b^m)."
    },
    {
        id: 55,
        category: "adversarial",
        question: "Que représente α (alpha) dans l'élagage alpha-beta ?",
        options: [
            "La pire valeur pour MAX",
            "La meilleure valeur pour MAX trouvée jusqu'ici",
            "La meilleure valeur pour MIN",
            "Le nombre de nœuds explorés"
        ],
        correct: 1,
        explanation: "α (alpha) est la meilleure valeur que MAX peut garantir jusqu'à présent. MAX ne choisira jamais une option inférieure à α."
    },
    {
        id: 56,
        category: "adversarial",
        question: "Que représente β (beta) dans l'élagage alpha-beta ?",
        options: [
            "La meilleure valeur pour MAX",
            "Le facteur de branchement",
            "La meilleure valeur pour MIN trouvée jusqu'ici",
            "La profondeur de l'arbre"
        ],
        correct: 2,
        explanation: "β (beta) est la meilleure valeur que MIN peut garantir (la plus basse pour MAX). MIN ne choisira jamais une option supérieure à β."
    },
    {
        id: 57,
        category: "adversarial",
        question: "Quand MIN doit-il élaguer une branche dans alpha-beta ?",
        options: [
            "Quand valeur ≥ β",
            "Quand valeur ≤ α",
            "Toujours",
            "Jamais"
        ],
        correct: 1,
        explanation: "MIN élague si la valeur trouvée est ≤ α. Cela signifie que MAX a déjà une meilleure option ailleurs, donc cette branche est inutile."
    },
    {
        id: 58,
        category: "adversarial",
        question: "Quand MAX doit-il élaguer une branche dans alpha-beta ?",
        options: [
            "Quand valeur ≤ α",
            "Quand valeur ≥ β",
            "Quand l'arbre est trop grand",
            "Après 10 nœuds"
        ],
        correct: 1,
        explanation: "MAX élague si la valeur trouvée est ≥ β. MIN a déjà une meilleure option ailleurs, donc cette branche ne sera jamais choisie."
    },
    {
        id: 59,
        category: "adversarial",
        question: "Avec un ordre optimal des coups, quelle est la complexité de l'élagage alpha-beta ?",
        options: [
            "O(b^m)",
            "O(b^(m/2))",
            "O(m)",
            "O(1)"
        ],
        correct: 1,
        explanation: "Avec un ordre parfait (meilleurs coups en premier), alpha-beta réduit la complexité de O(b^m) à O(b^(m/2)), doublant effectivement la profondeur explorable."
    },
    {
        id: 60,
        category: "adversarial",
        question: "Qu'est-ce qu'une fonction d'évaluation dans les jeux ?",
        options: [
            "Une fonction qui compte les pièces",
            "Une fonction qui estime la valeur d'un état non-terminal",
            "Une fonction qui termine le jeu",
            "Une fonction qui génère des coups aléatoires"
        ],
        correct: 1,
        explanation: "Une fonction d'évaluation estime la valeur d'un état quand on ne peut pas explorer jusqu'aux feuilles. Elle est utilisée avec une profondeur limite."
    },

    // ========== QUESTIONS SUPPLÉMENTAIRES - PIÈGES ET CALCULS (20 questions) ==========
    {
        id: 61,
        category: "bfsdfs",
        question: "Si b=2 et d=10, combien de nœuds BFS doit-il stocker au pire cas ?",
        options: [
            "20",
            "1024",
            "2048",
            "100"
        ],
        correct: 2,
        explanation: "BFS stocke O(b^d) nœuds. Avec b=2 et d=10: 2^10 = 1024, mais au niveau d+1 on a 2^11 = 2048 nœuds dans la frontière."
    },
    {
        id: 62,
        category: "bfsdfs",
        question: "DFS avec limite de profondeur 5 sur un arbre de facteur b=3. Combien de nœuds en mémoire au maximum ?",
        options: [
            "15",
            "243",
            "18",
            "5"
        ],
        correct: 0,
        explanation: "DFS stocke O(b×d) = 3×5 = 15 nœuds maximum (un chemin de la racine à la profondeur max, avec les frères à chaque niveau)."
    },
    {
        id: 63,
        category: "informed",
        question: "Si h(n) = 0 pour tous les nœuds, A* devient équivalent à :",
        options: [
            "DFS",
            "BFS",
            "UCS",
            "Hill Climbing"
        ],
        correct: 2,
        explanation: "Si h(n)=0, alors f(n) = g(n) + 0 = g(n). C'est exactement la fonction d'évaluation de UCS."
    },
    {
        id: 64,
        category: "informed",
        question: "Une heuristique h(A)=10 quand le vrai coût h*(A)=8. Cette heuristique est :",
        options: [
            "Admissible",
            "Non admissible (surestime)",
            "Parfaite",
            "Consistante"
        ],
        correct: 1,
        explanation: "h(A)=10 > h*(A)=8 signifie que l'heuristique SURESTIME le coût réel. Elle n'est pas admissible, donc A* n'est pas garanti optimal."
    },
    {
        id: 65,
        category: "search",
        question: "Dans le 8-puzzle, si la case vide est au coin, combien de successeurs possibles ?",
        options: [
            "4",
            "3",
            "2",
            "1"
        ],
        correct: 2,
        explanation: "Au coin, la case vide n'a que 2 voisins adjacents (2 directions sur 4 sont bloquées par les bords)."
    },
    {
        id: 66,
        category: "search",
        question: "Dans le 8-puzzle, si la case vide est au centre, combien de successeurs possibles ?",
        options: [
            "2",
            "3",
            "4",
            "8"
        ],
        correct: 2,
        explanation: "Au centre de la grille 3×3, la case vide a 4 voisins adjacents (haut, bas, gauche, droite)."
    },
    {
        id: 67,
        category: "astar",
        question: "Pour A*, si g(n)=5, h(n)=3, quelle est la valeur f(n) ?",
        options: [
            "2",
            "8",
            "15",
            "1.67"
        ],
        correct: 1,
        explanation: "f(n) = g(n) + h(n) = 5 + 3 = 8. C'est le coût total estimé du chemin passant par n."
    },
    {
        id: 68,
        category: "astar",
        question: "Distance Manhattan de (0,0) à (5,3) = ?",
        options: [
            "8",
            "5.83",
            "15",
            "2"
        ],
        correct: 0,
        explanation: "Manhattan = |5-0| + |3-0| = 5 + 3 = 8. C'est la somme des distances horizontale et verticale."
    },
    {
        id: 69,
        category: "astar",
        question: "Distance Euclidienne de (0,0) à (3,4) = ?",
        options: [
            "7",
            "5",
            "12",
            "25"
        ],
        correct: 1,
        explanation: "Euclidienne = √(3² + 4²) = √(9+16) = √25 = 5. C'est le théorème de Pythagore (3-4-5)."
    },
    {
        id: 70,
        category: "agents",
        question: "Un robot aspirateur qui suit des règles 'si obstacle → tourner' est un :",
        options: [
            "Agent planificateur",
            "Agent réflexe",
            "Agent apprenant",
            "Agent rationnel"
        ],
        correct: 1,
        explanation: "Les règles simples 'si-alors' sans considération du futur caractérisent un agent réflexe. Pas de planification complexe."
    },
    {
        id: 71,
        category: "adversarial",
        question: "Dans Minimax, la valeur d'un nœud terminal 'victoire MAX' est généralement :",
        options: [
            "-1",
            "0",
            "+1",
            "+∞"
        ],
        correct: 2,
        explanation: "Convention standard : victoire MAX = +1, victoire MIN = -1, match nul = 0."
    },
    {
        id: 72,
        category: "adversarial",
        question: "Quel est l'avantage principal de l'élagage alpha-beta sur Minimax simple ?",
        options: [
            "Trouve une meilleure solution",
            "Utilise moins de mémoire",
            "Explore moins de nœuds sans changer le résultat",
            "Fonctionne sans heuristique"
        ],
        correct: 2,
        explanation: "Alpha-beta élague les branches inutiles, réduisant le nombre de nœuds explorés. Le résultat reste identique à Minimax."
    },
    {
        id: 73,
        category: "bfsdfs",
        question: "BFS trouve toujours le chemin le plus court en termes de :",
        options: [
            "Coût total",
            "Nombre d'arêtes",
            "Temps de calcul",
            "Mémoire utilisée"
        ],
        correct: 1,
        explanation: "BFS explore niveau par niveau, trouvant le chemin avec le moins d'arêtes. Pour le coût minimal, utilisez UCS."
    },
    {
        id: 74,
        category: "informed",
        question: "Best-First Search utilise uniquement :",
        options: [
            "g(n) - le coût depuis le départ",
            "h(n) - l'estimation vers le but",
            "g(n) + h(n)",
            "Le nombre de nœuds visités"
        ],
        correct: 1,
        explanation: "Best-First est 'glouton' (greedy) : il choisit le nœud qui SEMBLE le plus proche du but (h(n) minimum), ignorant le coût déjà parcouru."
    },
    {
        id: 75,
        category: "search",
        question: "L'ensemble 'visités' (closed set) sert à :",
        options: [
            "Accélérer le tri",
            "Éviter de revisiter les mêmes états",
            "Stocker les solutions",
            "Calculer la complexité"
        ],
        correct: 1,
        explanation: "Sans ensemble visités, l'algorithme peut boucler indéfiniment en revisitant les mêmes états. Crucial pour les graphes avec cycles."
    },
    {
        id: 76,
        category: "adversarial",
        question: "Aux échecs, b≈35 et m≈100. La complexité de Minimax est environ :",
        options: [
            "35 × 100 = 3500",
            "35^100 (astronomique)",
            "35 + 100 = 135",
            "log(35) × 100"
        ],
        correct: 1,
        explanation: "O(b^m) = O(35^100) est un nombre astronomiquement grand, impossible à calculer. D'où le besoin d'alpha-beta et de fonctions d'évaluation."
    },
    {
        id: 77,
        category: "adversarial",
        question: "Avec alpha-beta et ordre OPTIMAL des coups, la complexité devient :",
        options: [
            "O(b^m)",
            "O(b^(m/2))",
            "O(m)",
            "O(b×m)"
        ],
        correct: 1,
        explanation: "L'ordre optimal permet de couper la moitié de la profondeur effective : O(b^(m/2)). Cela double la profondeur explorable en même temps."
    },
    {
        id: 78,
        category: "search",
        question: "La 'frontière' (fringe/frontier) contient :",
        options: [
            "Les nœuds déjà explorés",
            "Les nœuds générés mais pas encore explorés",
            "Uniquement le nœud but",
            "Les nœuds impossibles à atteindre"
        ],
        correct: 1,
        explanation: "La frontière = file d'attente des nœuds à traiter. Ils ont été générés (découverts) mais pas encore explorés (expandés)."
    },
    {
        id: 79,
        category: "informed",
        question: "Hill Climbing peut échouer à cause de :",
        options: [
            "Trop de mémoire utilisée",
            "Maximum local ou plateau",
            "Facteur de branchement trop élevé",
            "Absence d'état initial"
        ],
        correct: 1,
        explanation: "Hill Climbing est glouton et peut rester bloqué sur un maximum local (aucun voisin meilleur) ou un plateau (voisins égaux)."
    },
    {
        id: 80,
        category: "agents",
        question: "Un agent planificateur nécessite :",
        options: [
            "Uniquement des capteurs",
            "Un modèle du monde pour prédire les conséquences",
            "Une connexion internet",
            "Un humain pour prendre les décisions"
        ],
        correct: 1,
        explanation: "Pour 'réfléchir avant d'agir', l'agent planificateur doit pouvoir simuler les conséquences de ses actions via un modèle du monde."
    }
];
