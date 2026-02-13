// ==========================================
// Visualiseur d'Algorithmes
// BFS, DFS, UCS, A*, Hill Climbing
// ==========================================

class AlgorithmVisualizer {
    constructor() {
        this.canvas = document.getElementById('graphCanvas');
        this.dataStructureEl = document.getElementById('dataStructure');
        this.visitedNodesEl = document.getElementById('visitedNodes');
        this.explanationEl = document.getElementById('stepExplanation');
        this.predictionModal = document.getElementById('predictionModal');
        this.predictionOptions = document.getElementById('predictionOptions');

        this.currentAlgorithm = 'bfs';
        this.predictMode = false;
        this.isPlaying = false;
        this.playInterval = null;

        // Sample graph for visualization
        this.graph = {
            nodes: {
                'A': { x: 100, y: 50, neighbors: ['B', 'C'], costs: { 'B': 1, 'C': 2 }, h: 5 },
                'B': { x: 250, y: 50, neighbors: ['A', 'D', 'E'], costs: { 'A': 1, 'D': 3, 'E': 1 }, h: 4 },
                'C': { x: 100, y: 150, neighbors: ['A', 'D'], costs: { 'A': 2, 'D': 2 }, h: 3 },
                'D': { x: 250, y: 150, neighbors: ['B', 'C', 'F'], costs: { 'B': 3, 'C': 2, 'F': 2 }, h: 2 },
                'E': { x: 400, y: 50, neighbors: ['B', 'F'], costs: { 'B': 1, 'F': 3 }, h: 3 },
                'F': { x: 400, y: 150, neighbors: ['D', 'E', 'G'], costs: { 'D': 2, 'E': 3, 'G': 1 }, h: 1 },
                'G': { x: 550, y: 100, neighbors: ['F'], costs: { 'F': 1 }, h: 0 }
            },
            start: 'A',
            goal: 'G'
        };

        this.reset();
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        document.getElementById('algorithmSelect').addEventListener('change', (e) => {
            this.currentAlgorithm = e.target.value;
            this.reset();
        });

        document.getElementById('btnReset').addEventListener('click', () => this.reset());
        document.getElementById('btnStep').addEventListener('click', () => this.step());
        document.getElementById('btnPlay').addEventListener('click', () => this.togglePlay());
        document.getElementById('predictMode').addEventListener('change', (e) => {
            this.predictMode = e.target.checked;
        });
    }

    reset() {
        this.stopPlay();
        this.frontier = [];
        this.visited = new Set();
        this.current = null;
        this.stepCount = 0;
        this.finished = false;
        this.gCosts = {};

        const start = this.graph.start;

        switch (this.currentAlgorithm) {
            case 'bfs':
            case 'dfs':
                this.frontier = [start];
                break;
            case 'ucs':
                this.frontier = [{ node: start, cost: 0 }];
                this.gCosts[start] = 0;
                break;
            case 'astar':
                const h = this.graph.nodes[start].h;
                this.frontier = [{ node: start, g: 0, f: h }];
                this.gCosts[start] = 0;
                break;
            case 'hillclimbing':
                this.current = start;
                break;
        }

        this.updateUI();
        this.render();
        this.explanationEl.textContent = "Cliquez sur 'Étape Suivante' pour commencer";
    }

    step() {
        if (this.finished) return;

        if (this.predictMode && this.frontier.length > 0 && !this.current) {
            this.showPrediction();
            return;
        }

        this.executeStep();
    }

    executeStep() {
        if (this.finished) return;

        this.stepCount++;
        let explanation = '';

        switch (this.currentAlgorithm) {
            case 'bfs':
                explanation = this.stepBFS();
                break;
            case 'dfs':
                explanation = this.stepDFS();
                break;
            case 'ucs':
                explanation = this.stepUCS();
                break;
            case 'astar':
                explanation = this.stepAStar();
                break;
            case 'hillclimbing':
                explanation = this.stepHillClimbing();
                break;
        }

        if (this.current === this.graph.goal) {
            explanation += " 🎉 BUT ATTEINT!";
            this.finished = true;
            this.stopPlay();
        }

        this.explanationEl.textContent = `Étape ${this.stepCount}: ${explanation}`;
        this.updateUI();
        this.render();
    }

    stepBFS() {
        if (this.frontier.length === 0) {
            this.finished = true;
            return "Frontière vide, pas de solution!";
        }

        // FIFO - retirer le premier
        this.current = this.frontier.shift();
        this.visited.add(this.current);

        // Ajouter les voisins non visités
        const neighbors = this.graph.nodes[this.current].neighbors;
        const added = [];
        for (const n of neighbors) {
            if (!this.visited.has(n) && !this.frontier.includes(n)) {
                this.frontier.push(n); // Ajouter à la fin
                added.push(n);
            }
        }

        return `Exploré ${this.current} (FIFO). Ajouté: [${added.join(', ')}]. File: [${this.frontier.join(', ')}]`;
    }

    stepDFS() {
        if (this.frontier.length === 0) {
            this.finished = true;
            return "Pile vide, pas de solution!";
        }

        // LIFO - retirer le dernier
        this.current = this.frontier.pop();
        this.visited.add(this.current);

        // Ajouter les voisins non visités
        const neighbors = this.graph.nodes[this.current].neighbors;
        const added = [];
        for (const n of neighbors) {
            if (!this.visited.has(n) && !this.frontier.includes(n)) {
                this.frontier.push(n);
                added.push(n);
            }
        }

        return `Exploré ${this.current} (LIFO). Ajouté: [${added.join(', ')}]. Pile: [${this.frontier.join(', ')}]`;
    }

    stepUCS() {
        if (this.frontier.length === 0) {
            this.finished = true;
            return "File de priorité vide!";
        }

        // Trier par coût et prendre le plus petit
        this.frontier.sort((a, b) => a.cost - b.cost);
        const item = this.frontier.shift();
        this.current = item.node;

        if (this.visited.has(this.current)) {
            return `${this.current} déjà visité, passage au suivant...`;
        }

        this.visited.add(this.current);

        // Ajouter les voisins
        const node = this.graph.nodes[this.current];
        for (const n of node.neighbors) {
            if (!this.visited.has(n)) {
                const newCost = item.cost + node.costs[n];
                this.frontier.push({ node: n, cost: newCost });
            }
        }

        const frontierStr = this.frontier.map(f => `${f.node}(${f.cost})`).join(', ');
        return `Exploré ${this.current} (coût: ${item.cost}). File: [${frontierStr}]`;
    }

    stepAStar() {
        if (this.frontier.length === 0) {
            this.finished = true;
            return "File de priorité vide!";
        }

        // Trier par f et prendre le plus petit
        this.frontier.sort((a, b) => a.f - b.f);
        const item = this.frontier.shift();
        this.current = item.node;

        if (this.visited.has(this.current)) {
            return `${this.current} déjà visité, passage au suivant...`;
        }

        this.visited.add(this.current);

        // Ajouter les voisins
        const node = this.graph.nodes[this.current];
        for (const n of node.neighbors) {
            if (!this.visited.has(n)) {
                const newG = item.g + node.costs[n];
                const h = this.graph.nodes[n].h;
                const newF = newG + h;
                this.frontier.push({ node: n, g: newG, f: newF });
            }
        }

        const frontierStr = this.frontier.map(f => `${f.node}(f=${f.f})`).join(', ');
        return `Exploré ${this.current} (g=${item.g}, h=${node.h}, f=${item.f}). File: [${frontierStr}]`;
    }

    stepHillClimbing() {
        this.visited.add(this.current);
        const node = this.graph.nodes[this.current];

        // Trouver le meilleur voisin (plus petite heuristique)
        let bestNeighbor = null;
        let bestH = node.h;

        for (const n of node.neighbors) {
            const neighborH = this.graph.nodes[n].h;
            if (neighborH < bestH) {
                bestH = neighborH;
                bestNeighbor = n;
            }
        }

        if (bestNeighbor === null) {
            this.finished = true;
            return `Aucun voisin meilleur que ${this.current} (h=${node.h}). Maximum local atteint!`;
        }

        this.current = bestNeighbor;
        return `Déplacé vers ${this.current} (h=${bestH}) - meilleur voisin`;
    }

    showPrediction() {
        let options = [];

        switch (this.currentAlgorithm) {
            case 'bfs':
                options = this.frontier.slice(0, 4);
                break;
            case 'dfs':
                options = this.frontier.slice(-4).reverse();
                break;
            case 'ucs':
            case 'astar':
                options = this.frontier.slice(0, 4).map(f => f.node);
                break;
        }

        if (options.length === 0) {
            this.executeStep();
            return;
        }

        this.predictionOptions.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'prediction-btn';
            btn.textContent = opt;
            btn.addEventListener('click', () => this.checkPrediction(opt, options[0]));
            this.predictionOptions.appendChild(btn);
        });

        this.predictionModal.classList.remove('hidden');
    }

    checkPrediction(selected, correct) {
        const buttons = this.predictionOptions.querySelectorAll('.prediction-btn');
        buttons.forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add('correct');
            } else if (btn.textContent === selected && selected !== correct) {
                btn.classList.add('incorrect');
            }
            btn.disabled = true;
        });

        setTimeout(() => {
            this.predictionModal.classList.add('hidden');
            this.executeStep();
        }, 1000);
    }

    togglePlay() {
        if (this.isPlaying) {
            this.stopPlay();
        } else {
            this.startPlay();
        }
    }

    startPlay() {
        this.isPlaying = true;
        document.getElementById('btnPlay').textContent = '⏸ Pause';
        this.playInterval = setInterval(() => {
            if (this.finished) {
                this.stopPlay();
                return;
            }
            this.executeStep();
        }, 1200);
    }

    stopPlay() {
        this.isPlaying = false;
        document.getElementById('btnPlay').textContent = '⏵ Animation';
        if (this.playInterval) {
            clearInterval(this.playInterval);
            this.playInterval = null;
        }
    }

    updateUI() {
        // Update data structure display
        let dsContent = '';
        switch (this.currentAlgorithm) {
            case 'bfs':
                dsContent = `File (FIFO): [${this.frontier.join(', ')}]`;
                break;
            case 'dfs':
                dsContent = `Pile (LIFO): [${this.frontier.join(', ')}]`;
                break;
            case 'ucs':
                dsContent = `Priorité (g): [${this.frontier.map(f => `${f.node}(${f.cost})`).join(', ')}]`;
                break;
            case 'astar':
                dsContent = `Priorité (f=g+h): [${this.frontier.map(f => `${f.node}(${f.f})`).join(', ')}]`;
                break;
            case 'hillclimbing':
                dsContent = `Courant: ${this.current} (h=${this.current ? this.graph.nodes[this.current].h : '-'})`;
                break;
        }
        this.dataStructureEl.textContent = dsContent;

        // Update visited nodes
        this.visitedNodesEl.innerHTML = '';
        this.visited.forEach(node => {
            const span = document.createElement('span');
            span.className = 'visited-node';
            span.textContent = node;
            this.visitedNodesEl.appendChild(span);
        });
    }

    render() {
        this.canvas.innerHTML = '';
        const nodes = this.graph.nodes;

        // Draw edges first
        const drawnEdges = new Set();
        for (const [id, node] of Object.entries(nodes)) {
            for (const neighbor of node.neighbors) {
                const edgeKey = [id, neighbor].sort().join('-');
                if (!drawnEdges.has(edgeKey)) {
                    drawnEdges.add(edgeKey);
                    this.drawEdge(id, neighbor, node.costs[neighbor]);
                }
            }
        }

        // Draw nodes
        for (const [id, node] of Object.entries(nodes)) {
            this.drawNode(id, node);
        }
    }

    drawNode(id, node) {
        const div = document.createElement('div');
        div.className = 'graph-node';
        div.style.left = `${node.x}px`;
        div.style.top = `${node.y}px`;
        div.textContent = id;

        if (id === this.graph.start) div.classList.add('start');
        if (id === this.graph.goal) div.classList.add('goal');
        if (this.visited.has(id)) div.classList.add('visited');
        if (id === this.current) div.classList.add('current');

        // Check if in frontier
        let inFrontier = false;
        if (Array.isArray(this.frontier)) {
            if (typeof this.frontier[0] === 'string') {
                inFrontier = this.frontier.includes(id);
            } else {
                inFrontier = this.frontier.some(f => f.node === id);
            }
        }
        if (inFrontier && !this.visited.has(id)) div.classList.add('frontier');

        // Add heuristic label for informed search
        if (['astar', 'hillclimbing', 'bestfirst'].includes(this.currentAlgorithm)) {
            const hLabel = document.createElement('span');
            hLabel.style.cssText = 'position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);font-size:10px;color:#f59e0b;';
            hLabel.textContent = `h=${node.h}`;
            div.appendChild(hLabel);
        }

        this.canvas.appendChild(div);
    }

    drawEdge(from, to, cost) {
        const nodeFrom = this.graph.nodes[from];
        const nodeTo = this.graph.nodes[to];

        const x1 = nodeFrom.x + 25;
        const y1 = nodeFrom.y + 25;
        const x2 = nodeTo.x + 25;
        const y2 = nodeTo.y + 25;

        const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

        const edge = document.createElement('div');
        edge.className = 'graph-edge';
        edge.style.left = `${x1}px`;
        edge.style.top = `${y1}px`;
        edge.style.width = `${length}px`;
        edge.style.transform = `rotate(${angle}deg)`;

        // Cost label
        const label = document.createElement('div');
        label.className = 'edge-label';
        label.textContent = cost;
        label.style.left = `${(x1 + x2) / 2 - 10}px`;
        label.style.top = `${(y1 + y2) / 2 - 10}px`;

        this.canvas.appendChild(edge);
        this.canvas.appendChild(label);
    }
}

// Initialize when document loads
let visualizer;
document.addEventListener('DOMContentLoaded', () => {
    // Will be initialized when section is active
});

function initVisualizer() {
    if (!visualizer) {
        visualizer = new AlgorithmVisualizer();
    }
}
