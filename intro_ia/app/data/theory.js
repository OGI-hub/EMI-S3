// ==========================================
// Données Théoriques - Introduction à l'IA
// ==========================================

const theoryData = {
    agents: {
        title: "Agents IA",
        concepts: [
            {
                title: "Définition d'un Agent IA",
                content: `
                    <p>Un <strong>agent IA</strong> est un système autonome qui :</p>
                    <ul>
                        <li><strong>Perçoit</strong> son environnement via des capteurs</li>
                        <li><strong>Décide</strong> des actions à entreprendre</li>
                        <li><strong>Agit</strong> sur l'environnement via des actionneurs</li>
                        <li><strong>Reçoit un feedback</strong> (nouvel état, récompense)</li>
                    </ul>
                `
            },
            {
                title: "Propriétés Clés des Agents",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Propriété</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><strong>Autonomie</strong></td>
                            <td>Fonctionne sans intervention humaine</td>
                        </tr>
                        <tr>
                            <td><strong>Réactivité</strong></td>
                            <td>Répond aux changements de l'environnement</td>
                        </tr>
                        <tr>
                            <td><strong>Proactivité</strong></td>
                            <td>Prend l'initiative pour atteindre ses objectifs</td>
                        </tr>
                        <tr>
                            <td><strong>Sociabilité</strong></td>
                            <td>Peut interagir avec d'autres agents (optionnel)</td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Agent Réflexe vs Agent Planificateur",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Caractéristique</th>
                            <th>Agent Réflexe</th>
                            <th>Agent Planificateur</th>
                        </tr>
                        <tr>
                            <td>Principe</td>
                            <td>"Percevoir → Agir"</td>
                            <td>"Réfléchir avant d'agir"</td>
                        </tr>
                        <tr>
                            <td>Décision basée sur</td>
                            <td>Perception actuelle uniquement</td>
                            <td>Conséquences futures des actions</td>
                        </tr>
                        <tr>
                            <td>Modèle du monde</td>
                            <td>Non requis</td>
                            <td>Nécessaire</td>
                        </tr>
                        <tr>
                            <td>Avantage</td>
                            <td>Simple et rapide</td>
                            <td>Flexible et intelligent</td>
                        </tr>
                        <tr>
                            <td>Inconvénient</td>
                            <td>Intelligence limitée</td>
                            <td>Coûteux en calcul</td>
                        </tr>
                        <tr>
                            <td>Exemple PacMan</td>
                            <td>Mange le fantôme visible</td>
                            <td>Planifie le chemin optimal</td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Exemples d'Agents",
                content: `
                    <ul>
                        <li><strong>Robot aspirateur</strong> : Perçoit les obstacles, décide du chemin, nettoie</li>
                        <li><strong>Thermostat intelligent</strong> : Perçoit la température, ajuste le chauffage</li>
                        <li><strong>Joueur d'échecs IA</strong> : Analyse le plateau, calcule les coups, joue</li>
                        <li><strong>Assistant vocal</strong> : Écoute, comprend, répond</li>
                    </ul>
                `
            }
        ]
    },
    search: {
        title: "Problèmes de Recherche",
        concepts: [
            {
                title: "Définition d'un Problème de Recherche",
                content: `
                    <p>Un <strong>problème de recherche</strong> consiste à trouver une séquence d'actions 
                    (un chemin) menant d'un <strong>état initial</strong> à un <strong>état but</strong>.</p>
                    <p>C'est l'abstraction fondamentale derrière la résolution de problèmes en IA.</p>
                `
            },
            {
                title: "Composantes d'un Problème de Recherche",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Composante</th>
                            <th>Description</th>
                            <th>Exemple (8-Puzzle)</th>
                        </tr>
                        <tr>
                            <td><strong>États</strong></td>
                            <td>Configurations possibles du monde</td>
                            <td>Position des tuiles sur la grille</td>
                        </tr>
                        <tr>
                            <td><strong>État Initial</strong></td>
                            <td>Point de départ</td>
                            <td>Configuration mélangée</td>
                        </tr>
                        <tr>
                            <td><strong>Actions</strong></td>
                            <td>Opérations disponibles</td>
                            <td>Haut, Bas, Gauche, Droite</td>
                        </tr>
                        <tr>
                            <td><strong>Fonction de Transition</strong></td>
                            <td>Résultat d'une action sur un état</td>
                            <td>Nouvelle position après déplacement</td>
                        </tr>
                        <tr>
                            <td><strong>Test de But</strong></td>
                            <td>Vérifie si l'état est le but</td>
                            <td>Tuiles dans l'ordre 1-8</td>
                        </tr>
                        <tr>
                            <td><strong>Coût du Chemin</strong></td>
                            <td>Somme des coûts des actions</td>
                            <td>Nombre de mouvements</td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Arbre de Recherche",
                content: `
                    <p>L'<strong>arbre de recherche</strong> représente l'exploration systématique des états :</p>
                    <ul>
                        <li><strong>Nœuds</strong> : représentent des plans pour atteindre des états</li>
                        <li><strong>Racine</strong> : état initial</li>
                        <li><strong>Frontière (Fringe)</strong> : nœuds non encore explorés</li>
                        <li><strong>Visités</strong> : nœuds déjà explorés</li>
                    </ul>
                `
            },
            {
                title: "Propriétés d'un Algorithme de Recherche",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Propriété</th>
                            <th>Question</th>
                        </tr>
                        <tr>
                            <td><strong>Complétude</strong></td>
                            <td>Trouve-t-il toujours une solution si elle existe ?</td>
                        </tr>
                        <tr>
                            <td><strong>Optimalité</strong></td>
                            <td>Trouve-t-il la solution de coût minimal ?</td>
                        </tr>
                        <tr>
                            <td><strong>Complexité Temporelle</strong></td>
                            <td>Combien de temps faut-il ?</td>
                        </tr>
                        <tr>
                            <td><strong>Complexité Spatiale</strong></td>
                            <td>Combien de mémoire faut-il ?</td>
                        </tr>
                    </table>
                `
            }
        ]
    },
    uninformed: {
        title: "Recherche Non-Informée",
        concepts: [
            {
                title: "BFS - Breadth-First Search (Largeur d'abord)",
                content: `
                    <p><strong>Principe</strong> : Explorer tous les nœuds à une profondeur donnée avant 
                    de passer à la profondeur suivante.</p>
                    <p><strong>Structure de données</strong> : File (FIFO - First In, First Out)</p>
                    <table class="comparison-table">
                        <tr>
                            <th>Propriété</th>
                            <th>Valeur</th>
                        </tr>
                        <tr>
                            <td>Complétude</td>
                            <td>✅ Oui (si b est fini)</td>
                        </tr>
                        <tr>
                            <td>Optimalité</td>
                            <td>✅ Oui (si coûts uniformes)</td>
                        </tr>
                        <tr>
                            <td>Complexité Temps</td>
                            <td>O(b^d)</td>
                        </tr>
                        <tr>
                            <td>Complexité Espace</td>
                            <td>O(b^d)</td>
                        </tr>
                    </table>
                    <p><em>b = facteur de branchement, d = profondeur de la solution</em></p>
                `
            },
            {
                title: "DFS - Depth-First Search (Profondeur d'abord)",
                content: `
                    <p><strong>Principe</strong> : Explorer le plus profondément possible avant de revenir en arrière.</p>
                    <p><strong>Structure de données</strong> : Pile (LIFO - Last In, First Out)</p>
                    <table class="comparison-table">
                        <tr>
                            <th>Propriété</th>
                            <th>Valeur</th>
                        </tr>
                        <tr>
                            <td>Complétude</td>
                            <td>❌ Non (espaces infinis)</td>
                        </tr>
                        <tr>
                            <td>Optimalité</td>
                            <td>❌ Non</td>
                        </tr>
                        <tr>
                            <td>Complexité Temps</td>
                            <td>O(b^m)</td>
                        </tr>
                        <tr>
                            <td>Complexité Espace</td>
                            <td>O(b·m)</td>
                        </tr>
                    </table>
                    <p><em>m = profondeur maximale de l'arbre</em></p>
                `
            },
            {
                title: "Comparaison BFS vs DFS",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Critère</th>
                            <th>BFS</th>
                            <th>DFS</th>
                        </tr>
                        <tr>
                            <td>Structure</td>
                            <td>File (Queue)</td>
                            <td>Pile (Stack)</td>
                        </tr>
                        <tr>
                            <td>Ordre FIFO/LIFO</td>
                            <td>FIFO</td>
                            <td>LIFO</td>
                        </tr>
                        <tr>
                            <td>Trouve solution courte</td>
                            <td>✅ Oui</td>
                            <td>❌ Non garanti</td>
                        </tr>
                        <tr>
                            <td>Mémoire</td>
                            <td>Élevée (O(b^d))</td>
                            <td>Faible (O(b·m))</td>
                        </tr>
                        <tr>
                            <td>Utilisation</td>
                            <td>Chemin le plus court</td>
                            <td>Labyrinthe, backtracking</td>
                        </tr>
                    </table>
                `
            },
            {
                title: "UCS - Uniform Cost Search",
                content: `
                    <p><strong>Principe</strong> : Étendre le nœud avec le <strong>coût de chemin le plus bas</strong> depuis le départ.</p>
                    <p><strong>Structure de données</strong> : File de priorité (triée par g(n))</p>
                    <table class="comparison-table">
                        <tr>
                            <th>Propriété</th>
                            <th>Valeur</th>
                        </tr>
                        <tr>
                            <td>Complétude</td>
                            <td>✅ Oui</td>
                        </tr>
                        <tr>
                            <td>Optimalité</td>
                            <td>✅ Oui (trouve le chemin de coût minimal)</td>
                        </tr>
                    </table>
                    <p><strong>Problème</strong> : Explore dans toutes les directions, aucune information sur le but.</p>
                `
            }
        ]
    },
    informed: {
        title: "Recherche Informée",
        concepts: [
            {
                title: "Heuristique - Définition",
                content: `
                    <p>Une <strong>heuristique h(n)</strong> est une fonction qui estime le coût 
                    pour atteindre le but depuis le nœud n.</p>
                    <p><strong>Objectif</strong> : Guider la recherche vers le but plus efficacement.</p>
                    <ul>
                        <li><strong>h(n) = 0</strong> si n est le but</li>
                        <li><strong>h(n) > 0</strong> sinon (estimation du coût restant)</li>
                    </ul>
                `
            },
            {
                title: "Heuristique Admissible",
                content: `
                    <p>Une heuristique est <strong>admissible</strong> (optimiste) si :</p>
                    <p style="text-align: center; font-size: 18px;"><strong>0 ≤ h(n) ≤ h*(n)</strong></p>
                    <p>où <strong>h*(n)</strong> est le vrai coût pour atteindre le but.</p>
                    <p><strong>Importance</strong> : Garantit que A* trouve la solution optimale.</p>
                `
            },
            {
                title: "Types d'Heuristiques pour le 8-Puzzle",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Heuristique</th>
                            <th>Formule</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><strong>Tuiles mal placées</strong></td>
                            <td>h₁(n) = nombre de tuiles hors position</td>
                            <td>Simple mais moins précise</td>
                        </tr>
                        <tr>
                            <td><strong>Distance Manhattan</strong></td>
                            <td>h₂(n) = Σ |x₁-x₂| + |y₁-y₂|</td>
                            <td>Somme des distances de chaque tuile</td>
                        </tr>
                        <tr>
                            <td><strong>Distance Euclidienne</strong></td>
                            <td>h₃(n) = Σ √((x₁-x₂)² + (y₁-y₂)²)</td>
                            <td>Distance en ligne droite</td>
                        </tr>
                    </table>
                    <p><strong>Note</strong> : Manhattan ≥ Euclidienne (Manhattan est plus informative)</p>
                `
            },
            {
                title: "Hill Climbing",
                content: `
                    <p><strong>Principe</strong> : Choisir toujours le voisin avec la meilleure valeur heuristique.</p>
                    <p><strong>Algorithme</strong> :</p>
                    <ol>
                        <li>Initialisation avec un état aléatoire</li>
                        <li>Évaluer l'état actuel</li>
                        <li>Générer les voisins</li>
                        <li>Choisir le meilleur voisin</li>
                        <li>Répéter jusqu'à ne plus pouvoir améliorer</li>
                    </ol>
                    <p><strong>Problème</strong> : Peut rester bloqué dans un <strong>maximum local</strong>.</p>
                `
            },
            {
                title: "Best-First Search",
                content: `
                    <p><strong>Principe</strong> : Étendre le nœud avec la plus petite valeur heuristique h(n).</p>
                    <p><strong>Structure</strong> : File de priorité triée par h(n)</p>
                    <p><strong>Avantage</strong> : Plus rapide que UCS car guidé vers le but</p>
                    <p><strong>Inconvénient</strong> : Non optimal (ne considère pas le coût du chemin)</p>
                `
            },
            {
                title: "A* - Algorithme A-Star",
                content: `
                    <p><strong>Principe</strong> : Combiner le coût du chemin et l'heuristique :</p>
                    <p style="text-align: center; font-size: 20px;"><strong>f(n) = g(n) + h(n)</strong></p>
                    <table class="comparison-table">
                        <tr>
                            <th>Composante</th>
                            <th>Signification</th>
                        </tr>
                        <tr>
                            <td><strong>g(n)</strong></td>
                            <td>Coût du chemin depuis le départ jusqu'à n</td>
                        </tr>
                        <tr>
                            <td><strong>h(n)</strong></td>
                            <td>Estimation du coût de n jusqu'au but</td>
                        </tr>
                        <tr>
                            <td><strong>f(n)</strong></td>
                            <td>Coût total estimé du chemin via n</td>
                        </tr>
                    </table>
                    <p><strong>Propriétés</strong> :</p>
                    <ul>
                        <li>✅ Complet</li>
                        <li>✅ Optimal (si h est admissible)</li>
                    </ul>
                `
            },
            {
                title: "Comparaison des Algorithmes Informés",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Algorithme</th>
                            <th>Fonction d'évaluation</th>
                            <th>Optimal ?</th>
                        </tr>
                        <tr>
                            <td>UCS</td>
                            <td>f(n) = g(n)</td>
                            <td>✅ Oui</td>
                        </tr>
                        <tr>
                            <td>Best-First</td>
                            <td>f(n) = h(n)</td>
                            <td>❌ Non</td>
                        </tr>
                        <tr>
                            <td>A*</td>
                            <td>f(n) = g(n) + h(n)</td>
                            <td>✅ Oui (si h admissible)</td>
                        </tr>
                    </table>
                `
            }
        ]
    },
    adversarial: {
        title: "Recherche Adversariale",
        concepts: [
            {
                title: "Jeux et Types de Jeux",
                content: `
                    <p>Un <strong>jeu</strong> est un environnement avec plus d'un agent. Les jeux "standard" sont :</p>
                    <ul>
                        <li><strong>Déterministe</strong> : pas de hasard</li>
                        <li><strong>Observable</strong> : information parfaite (on voit tout)</li>
                        <li><strong>Deux joueurs</strong> : MAX vs MIN</li>
                        <li><strong>Tour par tour</strong> : alternance des coups</li>
                        <li><strong>Somme nulle</strong> : le gain de l'un = la perte de l'autre</li>
                    </ul>
                    <p><strong>Exemples</strong> : Échecs, Tic-Tac-Toe, Go, Dames</p>
                `
            },
            {
                title: "Arbre de Jeu",
                content: `
                    <p>L'<strong>arbre de jeu</strong> représente toutes les parties possibles :</p>
                    <table class="comparison-table">
                        <tr>
                            <th>Élément</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><strong>Nœuds</strong></td>
                            <td>États du jeu (positions)</td>
                        </tr>
                        <tr>
                            <td><strong>Arêtes</strong></td>
                            <td>Actions (coups possibles)</td>
                        </tr>
                        <tr>
                            <td><strong>Feuilles</strong></td>
                            <td>États terminaux (fin de partie)</td>
                        </tr>
                        <tr>
                            <td><strong>Niveaux MAX</strong></td>
                            <td>C'est au joueur MAX de jouer</td>
                        </tr>
                        <tr>
                            <td><strong>Niveaux MIN</strong></td>
                            <td>C'est au joueur MIN de jouer</td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Algorithme Minimax",
                content: `
                    <p><strong>Principe</strong> : Chaque joueur joue de façon optimale.</p>
                    <ul>
                        <li><strong>MAX</strong> choisit l'action qui <strong>maximise</strong> la valeur</li>
                        <li><strong>MIN</strong> choisit l'action qui <strong>minimise</strong> la valeur</li>
                    </ul>
                    <p><strong>Valeurs terminales</strong> :</p>
                    <ul>
                        <li>Victoire MAX : <strong>+1</strong></li>
                        <li>Victoire MIN (défaite MAX) : <strong>-1</strong></li>
                        <li>Match nul : <strong>0</strong></li>
                    </ul>
                    <p><strong>Propagation</strong> : Les valeurs remontent des feuilles vers la racine.</p>
                `
            },
            {
                title: "Complexité de Minimax",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Complexité</th>
                            <th>Valeur</th>
                            <th>Explication</th>
                        </tr>
                        <tr>
                            <td><strong>Temps</strong></td>
                            <td>O(b<sup>m</sup>)</td>
                            <td>Comme DFS exhaustif</td>
                        </tr>
                        <tr>
                            <td><strong>Espace</strong></td>
                            <td>O(b·m)</td>
                            <td>Un seul chemin en mémoire</td>
                        </tr>
                    </table>
                    <p><em>b = facteur de branchement, m = profondeur maximale</em></p>
                    <p><strong>Exemple Échecs</strong> : b ≈ 35, m ≈ 100 → <strong>infaisable</strong> sans optimisation !</p>
                `
            },
            {
                title: "Élagage Alpha-Beta",
                content: `
                    <p><strong>Principe</strong> : Couper les branches qui ne peuvent pas influencer la décision finale.</p>
                    <table class="comparison-table">
                        <tr>
                            <th>Variable</th>
                            <th>Signification</th>
                        </tr>
                        <tr>
                            <td><strong>α (alpha)</strong></td>
                            <td>Meilleure option pour MAX trouvée jusqu'ici</td>
                        </tr>
                        <tr>
                            <td><strong>β (beta)</strong></td>
                            <td>Meilleure option pour MIN trouvée jusqu'ici</td>
                        </tr>
                    </table>
                    <p><strong>Conditions d'élagage</strong> :</p>
                    <ul>
                        <li>Au niveau <strong>MIN</strong> : couper si valeur ≤ α</li>
                        <li>Au niveau <strong>MAX</strong> : couper si valeur ≥ β</li>
                    </ul>
                    <p><strong>Effet</strong> : Avec un ordre optimal des coups → O(b<sup>m/2</sup>) au lieu de O(b<sup>m</sup>)</p>
                `
            },
            {
                title: "Fonctions d'Évaluation",
                content: `
                    <p>Quand on ne peut pas explorer jusqu'aux feuilles, on utilise une <strong>fonction d'évaluation</strong> :</p>
                    <ul>
                        <li>Estime la valeur d'un état non-terminal</li>
                        <li>Utilisée avec une <strong>profondeur limite</strong></li>
                        <li>Similaire aux heuristiques en recherche</li>
                    </ul>
                    <p><strong>Exemples pour les échecs</strong> :</p>
                    <ul>
                        <li>Valeur des pièces (pion=1, cavalier=3, tour=5, dame=9)</li>
                        <li>Contrôle du centre</li>
                        <li>Sécurité du roi</li>
                    </ul>
                `
            }
        ]
    }
};
