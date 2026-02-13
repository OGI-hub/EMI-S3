// ==========================================
// Module d'Examen
// Format: Définitions → Calculs → Code
// Supporte 2 versions d'examen
// ==========================================

class ExamModule {
    constructor() {
        this.questions = [];
        this.currentIndex = 0;
        this.answers = {};
        this.timer = null;
        this.timeRemaining = 60 * 60; // 60 minutes en secondes
        this.isRunning = false;
        this.currentExamVersion = 1;
        this.selectedDuration = 60;

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Écouter les boutons de démarrage d'examen
        document.querySelectorAll('.startExamBtn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const examVersion = parseInt(e.target.dataset.exam);
                const durationSelect = document.getElementById(`examDuration${examVersion}`);
                this.selectedDuration = parseInt(durationSelect.value);
                this.startExam(examVersion);
            });
        });

        document.getElementById('examPrev').addEventListener('click', () => this.prevQuestion());
        document.getElementById('examNext').addEventListener('click', () => this.nextQuestion());
        document.getElementById('examSubmit').addEventListener('click', () => this.submitExam());
    }

    generateExam(version) {
        this.questions = [];

        if (version === 1) {
            this.generateExam1();
        } else if (version === 2) {
            this.generateExam2();
        } else {
            this.generateExam3();
        }
    }

    generateExam1() {
        // Partie 1: Définitions (5 questions) - Examen 1
        const definitions = [
            {
                type: 'definition',
                part: 1,
                question: "Définissez un agent IA et ses 4 propriétés principales.",
                points: 4,
                expectedAnswer: "Un agent IA est un système autonome qui perçoit son environnement via des capteurs, prend des décisions, et agit via des actionneurs. Propriétés: Autonomie, Réactivité, Proactivité, Sociabilité."
            },
            {
                type: 'definition',
                part: 1,
                question: "Quelle est la différence entre un agent réflexe et un agent planificateur?",
                points: 3,
                expectedAnswer: "Agent réflexe: agit selon la perception actuelle ('percevoir → agir'). Agent planificateur: considère les conséquences futures ('réfléchir avant d'agir'), nécessite un modèle du monde."
            },
            {
                type: 'definition',
                part: 1,
                question: "Citez les 5 composantes d'un problème de recherche.",
                points: 3,
                expectedAnswer: "1) États 2) État initial 3) Actions 4) Fonction de transition 5) Test de but (+ coût du chemin optionnel)"
            },
            {
                type: 'definition',
                part: 1,
                question: "Qu'est-ce qu'une heuristique admissible? Donnez un exemple.",
                points: 4,
                expectedAnswer: "Une heuristique h est admissible si h(n) ≤ h*(n) pour tout n (elle ne surestime jamais le vrai coût). Exemple: distance Manhattan pour le 8-puzzle."
            },
            {
                type: 'definition',
                part: 1,
                question: "Expliquez la différence entre complétude et optimalité d'un algorithme.",
                points: 3,
                expectedAnswer: "Complétude: l'algorithme trouve une solution si elle existe. Optimalité: l'algorithme trouve la solution de coût minimal."
            }
        ];

        // Partie 2: Calculs (5 questions)
        const calculations = [
            {
                type: 'calculation',
                part: 2,
                question: "Calculez la distance Manhattan entre la position (1, 3) et (4, 1).",
                points: 2,
                expectedAnswer: "|4-1| + |1-3| = 3 + 2 = 5"
            },
            {
                type: 'calculation',
                part: 2,
                question: "Pour A*, calculez f(n) si g(n) = 7 et h(n) = 4.",
                points: 2,
                expectedAnswer: "f(n) = g(n) + h(n) = 7 + 4 = 11"
            },
            {
                type: 'calculation',
                part: 2,
                question: `Donnez l'ordre d'exploration BFS pour ce graphe (départ: A, but: D):
A → [B, C]
B → [D]
C → [D]`,
                points: 4,
                expectedAnswer: "File: [A] → explorer A, ajouter B,C → [B,C] → explorer B, ajouter D → [C,D] → explorer C → [D] → D trouvé. Ordre: A, B, C, D"
            },
            {
                type: 'calculation',
                part: 2,
                question: `Pour le 8-puzzle suivant, calculez h1 (tuiles mal placées):
Actuel: [2,8,3,1,6,4,7,0,5]
But:    [1,2,3,4,5,6,7,8,0]`,
                points: 3,
                expectedAnswer: "Tuiles mal placées: 2(pos0), 8(pos1), 1(pos3), 6(pos4), 4(pos5), 5(pos8) = 6 tuiles"
            },
            {
                type: 'calculation',
                part: 2,
                question: "Si BFS a un facteur de branchement b=3 et trouve la solution à profondeur d=4, quelle est la complexité spatiale aproximative?",
                points: 2,
                expectedAnswer: "O(b^d) = O(3^4) = O(81) nœuds"
            }
        ];

        // Partie 3: Code à compléter (3 questions)
        const codeQuestions = [
            {
                type: 'code',
                part: 3,
                question: `Complétez la boucle principale de BFS:

def bfs(graph, start, goal):
    frontier = deque([start])
    visited = set()
    
    while frontier:
        current = frontier._____()  # ← Quelle méthode?
        
        if current == goal:
            return True
            
        if current not in visited:
            visited._____(current)  # ← Quelle méthode?
            
            for neighbor in graph[current]:
                frontier._____(neighbor)  # ← Quelle méthode?`,
                points: 6,
                expectedAnswer: "1) popleft() - pour FIFO\n2) add() - pour l'ensemble visited\n3) append() - ajouter à la fin de la file"
            },
            {
                type: 'code',
                part: 3,
                question: `Complétez le calcul de f(n) pour A*:

def astar_step(current, neighbor, graph, heuristics):
    # g = coût depuis le départ
    g_current = g_cost[current]
    edge_cost = graph[current][neighbor]
    
    new_g = g_current + _____  # ← Quoi ajouter?
    new_h = _____[neighbor]    # ← Quelle structure?
    new_f = _____ + _____      # ← Formule f(n)?`,
                points: 6,
                expectedAnswer: "1) edge_cost - coût de l'arête\n2) heuristics - dictionnaire des heuristiques\n3) new_g + new_h - formule A*: f = g + h"
            },
            {
                type: 'code',
                part: 3,
                question: `Complétez la fonction Manhattan pour le 8-puzzle:

def manhattan(state, goal):
    distance = 0
    for i in range(9):
        if state[i] != 0:
            curr_row = i __ 3  # ← Quel opérateur?
            curr_col = i __ 3  # ← Quel opérateur?
            
            goal_pos = goal.index(state[i])
            goal_row = goal_pos // 3
            goal_col = goal_pos % 3
            
            distance += ___(curr_row - goal_row)  # ← Quelle fonction?
            distance += abs(curr_col - goal_col)
    return distance`,
                points: 5,
                expectedAnswer: "1) // (division entière pour la ligne)\n2) % (modulo pour la colonne)\n3) abs (valeur absolue pour Manhattan)"
            }
        ];

        this.questions = [
            ...this.shuffleArray(definitions).slice(0, 5),
            ...this.shuffleArray(calculations).slice(0, 5),
            ...this.shuffleArray(codeQuestions).slice(0, 3)
        ];
    }

    generateExam2() {
        // Examen 2: Focus sur les algorithmes de recherche

        // Partie 1: Définitions
        const definitions = [
            {
                type: 'definition',
                part: 1,
                question: "Expliquez la différence fondamentale entre BFS et DFS au niveau de la structure de données utilisée.",
                points: 4,
                expectedAnswer: "BFS utilise une FILE (FIFO - First In First Out) : le premier nœud ajouté est le premier exploré. DFS utilise une PILE (LIFO - Last In First Out) : le dernier nœud ajouté est le premier exploré."
            },
            {
                type: 'definition',
                part: 1,
                question: "Qu'est-ce que l'algorithme UCS (Uniform Cost Search) et en quoi diffère-t-il de BFS?",
                points: 4,
                expectedAnswer: "UCS explore selon le coût cumulé g(n) depuis le départ. Il utilise une file de priorité ordonnée par g(n). Contrairement à BFS qui explore par niveau (profondeur), UCS trouve toujours le chemin de coût minimal."
            },
            {
                type: 'definition',
                part: 1,
                question: "Pourquoi A* est-il plus efficace que UCS pour trouver le chemin optimal?",
                points: 3,
                expectedAnswer: "A* utilise f(n) = g(n) + h(n), où h(n) est une heuristique qui guide la recherche vers le but. UCS explore uniformément (h=0). Avec une heuristique admissible, A* explore moins de nœuds tout en garantissant l'optimalité."
            },
            {
                type: 'definition',
                part: 1,
                question: "Qu'est-ce que le problème du maximum local en Hill Climbing? Comment peut-on y remédier?",
                points: 4,
                expectedAnswer: "Le maximum local survient quand l'algorithme atteint un état dont tous les voisins sont moins bons, mais qui n'est pas le maximum global. Solutions: Random Restart (redémarrage aléatoire), Simulated Annealing, ou augmenter la stochasticité."
            },
            {
                type: 'definition',
                part: 1,
                question: "Quelle est la différence entre la distance Manhattan et la distance Euclidienne? Laquelle est préférable pour le 8-puzzle?",
                points: 3,
                expectedAnswer: "Manhattan: |x1-x2| + |y1-y2| (mouvements orthogonaux). Euclidienne: √((x1-x2)² + (y1-y2)²). Pour le 8-puzzle, Manhattan est préférable car les mouvements sont orthogonaux (pas de diagonales)."
            }
        ];

        // Partie 2: Calculs
        const calculations = [
            {
                type: 'calculation',
                part: 2,
                question: `Donnez l'ordre d'exploration DFS pour ce graphe (départ: S, but: G):
S → [A, B]
A → [C, D]
B → [E]
D → [G]`,
                points: 4,
                expectedAnswer: "Pile: [S] → explorer S, ajouter A,B → [A,B] → explorer B (LIFO), ajouter E → [A,E] → explorer E → [A] → explorer A, ajouter C,D → [C,D] → explorer D, ajouter G → G trouvé. Ordre: S, B, E, A, D, G"
            },
            {
                type: 'calculation',
                part: 2,
                question: "Calculez la distance Euclidienne entre les points (0, 0) et (3, 4).",
                points: 2,
                expectedAnswer: "√((3-0)² + (4-0)²) = √(9 + 16) = √25 = 5"
            },
            {
                type: 'calculation',
                part: 2,
                question: `Pour le 8-puzzle suivant, calculez la distance Manhattan totale:
Actuel:     But:
1 2 3       1 2 3
4 _ 5       4 5 6
7 8 6       7 8 _`,
                points: 4,
                expectedAnswer: "5 est en (1,2), devrait être en (1,1): |2-1|=1. 6 est en (2,2), devrait être en (1,2): |2-1|=1. _ en (1,1), devrait être en (2,2): ignoré. Total = 1+1 = 2"
            },
            {
                type: 'calculation',
                part: 2,
                question: `UCS explore ce graphe pondéré. Dans quel ordre les nœuds sont explorés?
S --2--> A --1--> G
S --3--> B --1--> G`,
                points: 4,
                expectedAnswer: "File de priorité par g(n): [S(0)] → explorer S → [A(2), B(3)] → explorer A(2) → [B(3), G(3)] → explorer B(3) → [G(3), G(4)] → explorer G(3). Ordre: S, A, B, G. Coût final: 3"
            },
            {
                type: 'calculation',
                part: 2,
                question: "Si DFS a une profondeur maximale de 10 et un facteur de branchement b=2, quelle est la complexité mémoire?",
                points: 2,
                expectedAnswer: "O(b × d) = O(2 × 10) = O(20) - linéaire en profondeur (avantage de DFS)"
            }
        ];

        // Partie 3: Code à compléter
        const codeQuestions = [
            {
                type: 'code',
                part: 3,
                question: `Complétez DFS avec une pile:

def dfs(graph, start, goal):
    stack = [start]
    visited = set()
    
    while stack:
        current = stack._____()  # ← Quelle méthode pour LIFO?
        
        if current == goal:
            return True
            
        if current not in visited:
            visited.add(current)
            for neighbor in graph[current]:
                stack._____(neighbor)  # ← Quelle méthode?
    
    return _____  # ← Quoi retourner si pas de solution?`,
                points: 5,
                expectedAnswer: "1) pop() - retire le dernier élément (LIFO)\n2) append() - ajoute à la fin\n3) False - aucune solution trouvée"
            },
            {
                type: 'code',
                part: 3,
                question: `Complétez UCS avec heapq:

import heapq

def ucs(graph, start, goal):
    frontier = []
    heapq._____(frontier, (0, start))  # ← Ajouter à la heap
    visited = set()
    
    while frontier:
        cost, current = heapq._____(frontier)  # ← Retirer le min
        
        if current == goal:
            return cost
            
        if current in visited:
            _____  # ← Que faire si déjà visité?
            
        visited.add(current)
        
        for neighbor, edge_cost in graph[current]:
            new_cost = cost + _____  # ← Calcul du nouveau coût`,
                points: 6,
                expectedAnswer: "1) heappush - ajouter avec priorité\n2) heappop - retirer le minimum\n3) continue - passer au suivant\n4) edge_cost - coût de l'arête"
            },
            {
                type: 'code',
                part: 3,
                question: `Complétez la classe PuzzleState pour le 8-puzzle:

class PuzzleState:
    def __init__(self, state, parent=None):
        self.state = state
        self.parent = parent
        self.blank_pos = state._____(0)  # ← Trouver la case vide
    
    def get_neighbors(self):
        neighbors = []
        row = self.blank_pos __ 3  # ← Ligne
        col = self.blank_pos __ 3  # ← Colonne
        
        # Mouvements possibles
        moves = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        
        for dr, dc in moves:
            new_row = row + dr
            new_col = col + dc
            if 0 <= new_row < 3 and 0 <= new_col < 3:
                new_pos = new_row * 3 + _____  # ← Calculer position`,
                points: 6,
                expectedAnswer: "1) index - trouver l'index de 0\n2) // - division entière pour la ligne\n3) % - modulo pour la colonne\n4) new_col - position = row*3 + col"
            }
        ];

        this.questions = [
            ...this.shuffleArray(definitions).slice(0, 5),
            ...this.shuffleArray(calculations).slice(0, 5),
            ...this.shuffleArray(codeQuestions).slice(0, 3)
        ];
    }

    generateExam3() {
        // Examen 3: Focus sur la Recherche Adversariale & 8-Puzzle

        // Partie 1: Définitions
        const definitions = [
            {
                type: 'definition',
                part: 1,
                question: "Qu'est-ce qu'un jeu à somme nulle? Donnez un exemple.",
                points: 3,
                expectedAnswer: "Un jeu à somme nulle est un jeu où le gain d'un joueur = la perte de l'autre. Les utilités sont opposées. Exemples: Échecs, Tic-Tac-Toe, Go."
            },
            {
                type: 'definition',
                part: 1,
                question: "Expliquez le principe de l'algorithme Minimax. Que font MAX et MIN?",
                points: 4,
                expectedAnswer: "Minimax suppose un jeu optimal. MAX choisit l'action qui maximise la valeur, MIN choisit celle qui minimise. Les valeurs remontent des feuilles vers la racine."
            },
            {
                type: 'definition',
                part: 1,
                question: "Que représentent α (alpha) et β (beta) dans l'élagage alpha-beta?",
                points: 4,
                expectedAnswer: "α = meilleure option pour MAX trouvée jusqu'ici. β = meilleure option pour MIN trouvée jusqu'ici. On élague quand α ≥ β."
            },
            {
                type: 'definition',
                part: 1,
                question: "Quand MIN doit-il élaguer une branche? Et MAX?",
                points: 4,
                expectedAnswer: "MIN élague si valeur ≤ α (MAX a déjà mieux ailleurs). MAX élague si valeur ≥ β (MIN a déjà mieux ailleurs)."
            },
            {
                type: 'definition',
                part: 1,
                question: "Qu'est-ce qu'une fonction d'évaluation dans les jeux? Pourquoi l'utilise-t-on?",
                points: 3,
                expectedAnswer: "Une fonction d'évaluation estime la valeur d'un état non-terminal. On l'utilise quand on ne peut pas explorer jusqu'aux feuilles (profondeur limite)."
            }
        ];

        // Partie 2: Calculs
        const calculations = [
            {
                type: 'calculation',
                part: 2,
                question: `Calculez la valeur Minimax de la racine:
                
        MAX
       /   \\
     MIN   MIN
     / \\   / \\
    3   5 2   9`,
                points: 4,
                expectedAnswer: "MIN gauche: min(3,5)=3. MIN droite: min(2,9)=2. MAX racine: max(3,2)=3. Valeur = 3"
            },
            {
                type: 'calculation',
                part: 2,
                question: "Quelle est la complexité temporelle de Minimax si b=3 et m=4?",
                points: 2,
                expectedAnswer: "O(b^m) = O(3^4) = O(81)"
            },
            {
                type: 'calculation',
                part: 2,
                question: "Avec alpha-beta et ordre optimal, quelle est la complexité si b=16 et m=4?",
                points: 3,
                expectedAnswer: "O(b^(m/2)) = O(16^2) = O(256) au lieu de O(16^4) = O(65536)"
            },
            {
                type: 'calculation',
                part: 2,
                question: `Identifiez les nœuds élagués (exploration gauche à droite):
                
        MAX (α=-∞)
       /   \\
     MIN   MIN
     / \\   / \\
    3   5 2   ?`,
                points: 4,
                expectedAnswer: "Après MIN gauche: α=3. Feuille 2 trouvée: 2 ≤ α(3), donc (?) est élagué."
            },
            {
                type: 'calculation',
                part: 2,
                question: "Dans le 8-puzzle, calculez h₁ (tuiles mal placées) pour: [2,8,3,1,6,4,7,0,5] vers [1,2,3,4,5,6,7,8,0]",
                points: 3,
                expectedAnswer: "Tuiles mal placées: 2,8,1,6,4,5 = 6 tuiles. h₁ = 6"
            }
        ];

        // Partie 3: Code à compléter
        const codeQuestions = [
            {
                type: 'code',
                part: 3,
                question: `Complétez la fonction Minimax:

def minimax(state, is_max_turn):
    if terminal(state):
        return utility(state)
    
    if is_max_turn:
        value = float('-inf')
        for child in children(state):
            value = ___(value, minimax(child, ___))  # Quoi?
    else:
        value = float('inf')
        for child in children(state):
            value = ___(value, minimax(child, ___))  # Quoi?
    return value`,
                points: 6,
                expectedAnswer: "1) max, False (MAX maximise, puis c'est le tour de MIN)\n2) min, True (MIN minimise, puis c'est le tour de MAX)"
            },
            {
                type: 'code',
                part: 3,
                question: `Complétez la condition d'élagage alpha-beta au niveau MIN:

def min_value(state, alpha, beta):
    if terminal(state):
        return utility(state)
    
    value = float('inf')
    for child in children(state):
        value = min(value, max_value(child, alpha, beta))
        beta = min(beta, value)
        
        if value ___ alpha:  # Condition d'élagage?
            return value
    return value`,
                points: 5,
                expectedAnswer: "<=  (MIN élague si value <= alpha car MAX a déjà une meilleure option)"
            },
            {
                type: 'code',
                part: 3,
                question: `Complétez la condition d'élagage alpha-beta au niveau MAX:

def max_value(state, alpha, beta):
    if terminal(state):
        return utility(state)
    
    value = float('-inf')
    for child in children(state):
        value = max(value, min_value(child, alpha, beta))
        alpha = max(alpha, value)
        
        if value ___ beta:  # Condition d'élagage?
            return value
    return value`,
                points: 5,
                expectedAnswer: ">=  (MAX élague si value >= beta car MIN a déjà une meilleure option)"
            }
        ];

        this.questions = [
            ...this.shuffleArray(definitions).slice(0, 5),
            ...this.shuffleArray(calculations).slice(0, 5),
            ...this.shuffleArray(codeQuestions).slice(0, 3)
        ];
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    startExam(version) {
        this.currentExamVersion = version;
        this.timeRemaining = this.selectedDuration * 60;

        this.generateExam(version);

        document.getElementById('examIntro').classList.add('hidden');
        document.getElementById('examContent').classList.remove('hidden');

        this.isRunning = true;
        this.currentIndex = 0;
        this.answers = {};

        this.startTimer();
        this.renderQuestion();
    }

    startTimer() {
        this.updateTimerDisplay();

        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 300) { // 5 minutes warning
                document.querySelector('.exam-timer').classList.add('warning');
            }

            if (this.timeRemaining <= 0) {
                this.submitExam();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        document.getElementById('timerDisplay').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    renderQuestion() {
        const q = this.questions[this.currentIndex];
        const container = document.getElementById('examQuestionContainer');

        let partLabel = '';
        switch (q.part) {
            case 1: partLabel = 'Partie 1 - Définitions'; break;
            case 2: partLabel = 'Partie 2 - Calculs'; break;
            case 3: partLabel = 'Partie 3 - Code'; break;
        }

        container.innerHTML = `
            <span class="exam-part-label">${partLabel}</span>
            <p class="exam-question-text">${q.question.replace(/\n/g, '<br>')}</p>
            <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 12px;">${q.points} points</p>
            <textarea class="exam-textarea" id="answerInput" placeholder="Écrivez votre réponse ici...">${this.answers[this.currentIndex] || ''}</textarea>
        `;

        // Save answer on input
        document.getElementById('answerInput').addEventListener('input', (e) => {
            this.answers[this.currentIndex] = e.target.value;
        });

        // Update navigation
        document.getElementById('examProgress').textContent =
            `Question ${this.currentIndex + 1}/${this.questions.length}`;

        document.getElementById('examPrev').style.visibility =
            this.currentIndex === 0 ? 'hidden' : 'visible';

        if (this.currentIndex === this.questions.length - 1) {
            document.getElementById('examNext').classList.add('hidden');
            document.getElementById('examSubmit').classList.remove('hidden');
        } else {
            document.getElementById('examNext').classList.remove('hidden');
            document.getElementById('examSubmit').classList.add('hidden');
        }
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
        }
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        }
    }

    submitExam() {
        clearInterval(this.timer);
        this.isRunning = false;

        document.getElementById('examContent').classList.add('hidden');

        // Calculate score
        let totalPoints = 0;
        let earnedPoints = 0;

        this.questions.forEach((q, idx) => {
            totalPoints += q.points;
            const answer = this.answers[idx] || '';
            // Simple scoring: give partial credit if answer is not empty
            if (answer.trim().length > 20) {
                earnedPoints += Math.floor(q.points * 0.7); // Assume 70% for attempted answers
            } else if (answer.trim().length > 0) {
                earnedPoints += Math.floor(q.points * 0.3);
            }
        });

        const percentage = Math.round((earnedPoints / totalPoints) * 100);

        let message = '';
        if (percentage >= 80) message = 'Excellent! 🌟';
        else if (percentage >= 60) message = 'Bien joué! 👍';
        else if (percentage >= 40) message = 'Continuez à réviser! 📚';
        else message = 'Besoin de plus de pratique 💪';

        const resultsEl = document.getElementById('examResults');
        resultsEl.classList.remove('hidden');
        resultsEl.innerHTML = `
            <div class="results-score">${percentage}%</div>
            <div class="results-message">${message}</div>
            <div class="results-breakdown">
                <div class="breakdown-item">
                    <div class="breakdown-label">Questions répondues</div>
                    <div class="breakdown-value">${Object.keys(this.answers).length}/${this.questions.length}</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Points estimés</div>
                    <div class="breakdown-value">${earnedPoints}/${totalPoints}</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Temps utilisé</div>
                    <div class="breakdown-value">${this.formatTimeUsed()}</div>
                </div>
            </div>
            <h3 style="margin: 24px 0 16px;">📝 Correction - Examen ${this.currentExamVersion}</h3>
            <div class="correction-list">
                ${this.questions.map((q, idx) => `
                    <div class="exercise-item">
                        <span class="exercise-number">${q.part === 1 ? 'Définition' : q.part === 2 ? 'Calcul' : 'Code'} ${idx + 1}</span>
                        <p style="font-weight: 600; margin-bottom: 8px;">${q.question.substring(0, 100)}${q.question.length > 100 ? '...' : ''}</p>
                        <p style="color: var(--text-muted); margin-bottom: 8px;"><strong>Votre réponse:</strong> ${this.answers[idx] || '<em>Non répondu</em>'}</p>
                        <div class="exercise-answer visible">
                            <p><strong>Réponse attendue:</strong><br>${q.expectedAnswer.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 24px;">🔄 Refaire un examen</button>
        `;
    }

    formatTimeUsed() {
        const used = (this.selectedDuration * 60) - this.timeRemaining;
        const minutes = Math.floor(used / 60);
        const seconds = used % 60;
        return `${minutes}m ${seconds}s`;
    }
}

// Initialize
let examModule;
function initExam() {
    if (!examModule) {
        examModule = new ExamModule();
    }
}
