// ============================================
// COMPILATION MASTER - Main Application
// Interactive Exam Preparation Platform
// ============================================

// ============================================
// STATE MANAGEMENT
// ============================================
const AppState = {
    currentSection: 'accueil',
    xp: 0,
    level: 1,
    streak: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    achievements: [],
    topicProgress: {
        automates: 0,
        regex: 0,
        grammaires: 0,
        compilation: 0
    },
    examState: {
        isRunning: false,
        timeRemaining: 0,
        currentExercise: 0,
        answers: {}
    },
    qcmState: {
        currentIndex: 0,
        questions: [],
        score: 0,
        timer: null,
        timeLeft: 60
    }
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('compilationMasterState');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(AppState, parsed);
    }
    updateUI();
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('compilationMasterState', JSON.stringify(AppState));
}

// ============================================
// UI UPDATES
// ============================================
function updateUI() {
    // Update XP bar
    const xpFill = document.getElementById('xpFill');
    const currentXP = document.getElementById('currentXP');
    const xpForNextLevel = AppState.level * 100;
    const xpProgress = (AppState.xp % xpForNextLevel) / xpForNextLevel * 100;

    if (xpFill) xpFill.style.width = `${xpProgress}%`;
    if (currentXP) currentXP.textContent = AppState.xp;

    // Update level
    const levelDisplay = document.getElementById('levelDisplay');
    if (levelDisplay) levelDisplay.textContent = `Niveau ${AppState.level}`;

    // Update streak
    const streakCount = document.getElementById('streakCount');
    if (streakCount) streakCount.textContent = AppState.streak;

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === AppState.currentSection) {
            item.classList.add('active');
        }
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            navigateTo(section);
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Close sidebar on content click (mobile)
    const contentArea = document.getElementById('contentArea');
    if (contentArea) {
        contentArea.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('open');
            }
        });
    }
}

function navigateTo(section) {
    // Cleanup QCM timer if leaving
    if (AppState.qcmState.timer) {
        clearInterval(AppState.qcmState.timer);
        AppState.qcmState.timer = null;
    }

    AppState.currentSection = section;
    updateUI();
    renderSection(section);
    saveState();
}

function renderSection(section) {
    const contentArea = document.getElementById('contentArea');

    switch (section) {
        case 'accueil':
            renderAccueil(contentArea);
            break;
        case 'astuces':
            renderAstuces(contentArea);
            break;
        case 'td':
            renderTD(contentArea);
            break;
        case 'qcm':
            renderQCM(contentArea);
            break;
        case 'examen':
            renderExamen(contentArea);
            break;
        case 'prediction':
            renderPrediction(contentArea);
            break;
        case 'progres':
            renderProgres(contentArea);
            break;
        default:
            renderAccueil(contentArea);
    }
}

// ============================================
// ACCUEIL (HOME) PAGE
// ============================================
function renderAccueil(container) {
    const accuracy = AppState.questionsAnswered > 0
        ? Math.round(AppState.correctAnswers / AppState.questionsAnswered * 100)
        : 0;

    container.innerHTML = `
        <div class="welcome-banner">
            <h1 class="welcome-title">Bienvenue sur Compilation Master ! 🎓</h1>
            <p class="welcome-subtitle">Ta plateforme interactive pour réussir l'examen de Théorie des Langages et Compilation - EMI 2025-2026</p>
        </div>
        
        <div class="section-header">
            <h2 class="section-title">Par où commencer ?</h2>
            <p class="section-subtitle">Choisis ta méthode d'apprentissage préférée</p>
        </div>
        
        <div class="quick-start-grid">
            <div class="quick-start-card" onclick="navigateTo('astuces')">
                <div class="quick-start-icon">💡</div>
                <h3 class="quick-start-title">Astuces Examen</h3>
                <p class="quick-start-desc">Les réflexes essentiels : "Si tu vois X, pense Y"</p>
            </div>
            
            <div class="quick-start-card" onclick="navigateTo('td')">
                <div class="quick-start-icon">📝</div>
                <h3 class="quick-start-title">Exercices TDs</h3>
                <p class="quick-start-desc">Pratique avec indices progressifs et solutions détaillées</p>
            </div>
            
            <div class="quick-start-card" onclick="navigateTo('qcm')">
                <div class="quick-start-icon">❓</div>
                <h3 class="quick-start-title">QCM Interactif</h3>
                <p class="quick-start-desc">Teste tes connaissances avec explications complètes</p>
            </div>
            
            <div class="quick-start-card" onclick="navigateTo('examen')">
                <div class="quick-start-icon">📋</div>
                <h3 class="quick-start-title">Simulation Examen</h3>
                <p class="quick-start-desc">L'examen 2024-2025 avec chrono et corrections</p>
            </div>
            
            <div class="quick-start-card" onclick="navigateTo('prediction')">
                <div class="quick-start-icon">🔮</div>
                <h3 class="quick-start-title">Prédictions</h3>
                <p class="quick-start-desc">Ce qui pourrait tomber au prochain examen</p>
            </div>
            
            <div class="quick-start-card" onclick="navigateTo('progres')">
                <div class="quick-start-icon">📊</div>
                <h3 class="quick-start-title">Ma Progression</h3>
                <p class="quick-start-desc">Suis ton avancement et tes achievements</p>
            </div>
        </div>
        
        <div class="section-header mt-3">
            <h2 class="section-title">Tes statistiques</h2>
        </div>
        
        <div class="grid-4">
            <div class="card">
                <div class="card-header">
                    <span class="card-icon">⭐</span>
                    <div>
                        <div class="card-title">${AppState.xp} XP</div>
                        <div class="card-subtitle">Niveau ${AppState.level}</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <span class="card-icon">🔥</span>
                    <div>
                        <div class="card-title">${AppState.streak}</div>
                        <div class="card-subtitle">Série actuelle</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <span class="card-icon">✅</span>
                    <div>
                        <div class="card-title">${AppState.correctAnswers}/${AppState.questionsAnswered}</div>
                        <div class="card-subtitle">Bonnes réponses</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <span class="card-icon">🎯</span>
                    <div>
                        <div class="card-title">${accuracy}%</div>
                        <div class="card-subtitle">Précision</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// ASTUCES EXAMEN
// ============================================
function renderAstuces(container) {
    const categories = ASTUCES_EXAMEN.categories;

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">💡 Astuces Examen</h2>
            <p class="section-subtitle">Les réflexes essentiels : "Si tu vois X, pense Y"</p>
        </div>
        
        <div class="topic-filters">
            <button class="topic-filter active" data-topic="all">Toutes</button>
            ${categories.map(cat => `
                <button class="topic-filter" data-topic="${cat.id}">${cat.icon} ${cat.title}</button>
            `).join('')}
        </div>
        
        <div class="astuces-container" id="astucesContainer">
            ${renderAstucesList(getAllAstuces())}
        </div>
    `;

    // Add filter listeners
    document.querySelectorAll('.topic-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.topic-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const topic = btn.dataset.topic;
            const astuces = topic === 'all' ? getAllAstuces() : getAstucesByCategory(topic);
            document.getElementById('astucesContainer').innerHTML = renderAstucesList(astuces);
            addAstuceListeners();
        });
    });

    addAstuceListeners();
}

function renderAstucesList(astuces) {
    return astuces.map(astuce => `
        <div class="astuce-card" data-id="${astuce.id}">
            <div class="astuce-header" style="background: linear-gradient(135deg, ${astuce.color}, ${astuce.color}88)">
                <div class="astuce-icon">${astuce.categoryIcon}</div>
                <div class="astuce-trigger">
                    <div class="astuce-trigger-label">Si tu vois...</div>
                    <div class="astuce-trigger-text">${astuce.trigger}</div>
                </div>
            </div>
            <div class="astuce-body">
                <div class="astuce-action">
                    <span class="astuce-action-icon">💭</span>
                    <span class="astuce-action-text">Pense à : ${astuce.action}</span>
                </div>
                <div class="solution-container">
                    <button class="btn btn-secondary hint-btn" onclick="toggleAstuceExplication('${astuce.id}')">
                        📖 Voir l'explication complète
                    </button>
                    <div class="solution-step" id="explication-${astuce.id}">
                        <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${astuce.explication}</pre>
                    </div>
                </div>
                <div class="mt-2" style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="text-muted" style="font-size: 0.8rem;">
                        ${astuce.difficulty === 1 ? '🟢 Facile' : astuce.difficulty === 2 ? '🟡 Moyen' : '🔴 Difficile'}
                    </span>
                    <span class="text-warning" style="font-size: 0.8rem;">
                        📌 ${astuce.examFrequency}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

function addAstuceListeners() {
    // Any additional listeners for astuces
}

function toggleAstuceExplication(id) {
    const el = document.getElementById(`explication-${id}`);
    if (el) {
        el.classList.toggle('visible');
    }
}

// ============================================
// TD EXERCISES
// ============================================
function renderTD(container) {
    const tds = TD_EXERCISES.tds;

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">📝 Exercices des TDs</h2>
            <p class="section-subtitle">Pratique avec indices progressifs - Prends ton papier et ton stylo !</p>
        </div>
        
        <div class="grid-3" id="tdGrid">
            ${tds.map(td => `
                <div class="card" onclick="showTDExercises('${td.id}')" style="cursor: pointer;">
                    <div class="card-header">
                        <span class="card-icon">${td.icon}</span>
                        <div>
                            <div class="card-title">${td.title}</div>
                            <div class="card-subtitle">${td.exercises.length} exercices</div>
                        </div>
                    </div>
                    <p class="text-muted" style="margin-top: 12px; font-size: 0.9rem;">${td.description}</p>
                </div>
            `).join('')}
        </div>
        
        <div id="tdExercisesContainer" class="hidden"></div>
    `;
}

function showTDExercises(tdId) {
    const td = getTD(tdId);
    if (!td) return;

    document.getElementById('tdGrid').classList.add('hidden');
    const container = document.getElementById('tdExercisesContainer');
    container.classList.remove('hidden');

    container.innerHTML = `
        <button class="btn btn-secondary mb-3" onclick="renderTD(document.getElementById('contentArea'))">
            ← Retour aux TDs
        </button>
        
        <div class="section-header">
            <h2 class="section-title">${td.icon} ${td.title}</h2>
            <p class="section-subtitle">${td.description}</p>
        </div>
        
        ${td.exercises.map(ex => renderExerciseCard(ex, tdId)).join('')}
    `;
}

function renderExerciseCard(ex, tdId) {
    const difficultyDots = Array(3).fill(0).map((_, i) =>
        `<span class="difficulty-dot ${i < ex.difficulty ? 'active' : ''}"></span>`
    ).join('');

    return `
        <div class="exercise-card mb-3" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">${ex.number}: ${ex.title}</span>
                <div class="exercise-difficulty">${difficultyDots}</div>
            </div>
            <div class="exercise-content">
                <div class="exercise-statement">
                    <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${ex.statement}</pre>
                </div>
                
                <div class="pen-paper-prompt">
                    <span class="pen-icon">✏️</span>
                    <div class="pen-paper-text">
                        <h4>Prends ton papier et ton stylo !</h4>
                        <p>Temps suggéré : ${ex.suggestedTime} minutes. Essaie de résoudre avant de regarder les indices.</p>
                    </div>
                </div>
                
                <div class="solution-container">
                    <div class="btn-group mb-2">
                        ${ex.hints.map((_, i) => `
                            <button class="btn btn-secondary hint-btn" onclick="showHint('${ex.id}', ${i})">
                                💡 Indice ${i + 1}
                            </button>
                        `).join('')}
                    </div>
                    
                    ${ex.hints.map((hint, i) => `
                        <div class="solution-step" id="hint-${ex.id}-${i}">
                            <span class="step-number">${i + 1}</span>
                            ${hint}
                        </div>
                    `).join('')}
                    
                    <div class="mt-2">
                        <button class="btn btn-primary" onclick="showFullSolution('${ex.id}')">
                            📖 Voir la solution complète
                        </button>
                    </div>
                    
                    <div class="solution-step" id="solution-${ex.id}" style="border-left-color: var(--accent-success);">
                        ${ex.solution.steps.map((step, i) => `
                            <div class="mb-2">
                                <strong style="color: var(--accent-success);">${step.title}</strong>
                                <pre style="white-space: pre-wrap; font-family: inherit; margin: 8px 0 0 0;">${step.content}</pre>
                            </div>
                        `).join('')}
                        <div class="mt-2 p-2" style="background: rgba(16, 185, 129, 0.1); border-radius: 8px;">
                            <strong>${ex.solution.keyPoint}</strong>
                        </div>
                    </div>
                    
                    <div class="mt-2">
                        <button class="btn btn-success" onclick="markExerciseCompleted('${tdId}', '${ex.id}')">
                            ✅ J'ai compris !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showHint(exId, hintIndex) {
    const el = document.getElementById(`hint-${exId}-${hintIndex}`);
    if (el) el.classList.add('visible');
}

function showFullSolution(exId) {
    const el = document.getElementById(`solution-${exId}`);
    if (el) el.classList.add('visible');
    addXP(5);
}

function markExerciseCompleted(tdId, exId) {
    addXP(20);
    showToast('success', 'Exercice complété !', '+20 XP');
    checkAchievements();
}

// ============================================
// QCM INTERACTIF
// ============================================
function renderQCM(container) {
    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">❓ QCM Interactif</h2>
            <p class="section-subtitle">Teste tes connaissances - Mode "Work it Out" pour pratiquer activement</p>
        </div>
        
        <div class="topic-filters">
            <button class="topic-filter active" data-topic="all">Tous les sujets</button>
            <button class="topic-filter" data-topic="automates">🔄 Automates</button>
            <button class="topic-filter" data-topic="regex">✨ Regex</button>
            <button class="topic-filter" data-topic="grammaires">📐 Grammaires</button>
            <button class="topic-filter" data-topic="compilation">⚙️ Compilation</button>
        </div>
        
        <div class="difficulty-selector mt-2">
            <button class="difficulty-btn active easy" data-diff="all">Toutes difficultés</button>
            <button class="difficulty-btn" data-diff="facile">🟢 Facile</button>
            <button class="difficulty-btn" data-diff="moyen">🟡 Moyen</button>
            <button class="difficulty-btn" data-diff="difficile">🔴 Difficile</button>
        </div>
        
        <div class="mt-3">
            <button class="btn btn-primary" onclick="startQCM()">
                🎯 Commencer le Quiz (10 questions)
            </button>
            <button class="btn btn-secondary" onclick="startQCM(null, true)">
                ✏️ Mode Work it Out uniquement
            </button>
        </div>
        
        <div id="qcmContainer" class="mt-3"></div>
    `;

    // Add filter listeners
    document.querySelectorAll('.topic-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.topic-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            btn.classList.add(btn.dataset.diff);
        });
    });
}

function startQCM(count = 10, workItOutOnly = false) {
    const topicBtn = document.querySelector('.topic-filter.active');
    const diffBtn = document.querySelector('.difficulty-btn.active');

    const topic = topicBtn ? (topicBtn.dataset.topic === 'all' ? null : topicBtn.dataset.topic) : null;
    const difficulty = diffBtn ? (diffBtn.dataset.diff === 'all' ? null : diffBtn.dataset.diff) : null;

    let questions = getQuizSet(count, topic, difficulty);

    if (workItOutOnly) {
        questions = questions.filter(q => q.workItOut);
        if (questions.length === 0) {
            questions = getWorkItOutQuestions();
        }
    }

    if (questions.length === 0) {
        showToast('error', 'Pas de questions', 'Aucune question trouvée pour ces critères');
        return;
    }

    AppState.qcmState = {
        currentIndex: 0,
        questions: questions,
        score: 0,
        answered: []
    };

    renderQCMQuestion();
}

function renderQCMQuestion() {
    const state = AppState.qcmState;
    const question = state.questions[state.currentIndex];
    const container = document.getElementById('qcmContainer');

    const progress = ((state.currentIndex) / state.questions.length) * 100;

    container.innerHTML = `
        <div class="qcm-container">
            <div class="qcm-header-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div class="qcm-progress" style="flex: 1; margin-bottom: 0;">
                    <div class="qcm-progress-bar">
                        <div class="qcm-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="qcm-progress-text">${state.currentIndex + 1}/${state.questions.length}</span>
                </div>
                
                ${!question.workItOut ? `
                <div class="qcm-timer" id="qcmTimer" style="margin-left: 15px; font-weight: bold; padding: 5px 10px; background: var(--bg-glass); border-radius: 8px; border: 1px solid var(--border-color); display: flex; align-items: center; gap: 5px;">
                    <span>⏱️</span>
                    <span id="qcmTimerValue">60s</span>
                </div>
                ` : ''}
            </div>
            
            <div class="qcm-question-card">
                <span class="qcm-topic-badge">${question.topicLabel}</span>
                
                ${question.workItOut ? `
                    <div class="pen-paper-prompt">
                        <span class="pen-icon">✏️</span>
                        <div class="pen-paper-text">
                            <h4>Mode "Work it Out"</h4>
                            <p>Résous sur papier avant de répondre ! Temps suggéré : ${question.suggestedTime || 3} min</p>
                        </div>
                    </div>
                ` : ''}
                
                <div class="qcm-question-text">
                    <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${question.question}</pre>
                </div>
                
                <div class="qcm-options" id="qcmOptions">
                    ${question.options.map(opt => `
                        <div class="qcm-option" data-id="${opt.id}" onclick="selectQCMOption('${opt.id}')">
                            <span class="option-letter">${opt.id.toUpperCase()}</span>
                            <span class="option-text">${opt.text}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="qcm-explanation" id="qcmExplanation">
                    <h4>💡 Explication</h4>
                    <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${question.explanation}</pre>
                </div>
                
                <div class="btn-group mt-3" id="qcmActions" style="display: none;">
                    <button class="btn btn-primary" onclick="nextQCMQuestion()">
                        ${state.currentIndex < state.questions.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
                    </button>
                </div>
            </div>
        </div>
    `;

    // Start timer only if NOT in "Work it Out" mode (user needs time to think/write)
    // or if requested, we can add it there too, but usually QCM implies quick fire.
    // The user prompt said "timer pour les questions du qcm", assuming standard QCM.
    // Let's apply it generally but maybe pause it for WorkItOut? 
    // Actually, user said "1min max", usually QCM. WorkItOut has "suggested time" which is flexible.
    // I will apply the hard 60s timer ONLY to standard QCM questions for now to be safe, 
    // or strictly 60s for everything if I follow "1min max" literally. 
    // Given WorkItOut questions have "Suggest time: 5 min" etc in the data, a 1 min timer would break them.
    // I will add logic: if WorkItOut, use that time or no timer? 
    // User said "questions du qcm", let's assume standard QCM type questions.

    if (!question.workItOut) {
        startQCMTimer();
    }
}

function startQCMTimer() {
    const state = AppState.qcmState;
    state.timeLeft = 60; // 60 seconds

    const timerDisplay = document.getElementById('qcmTimerValue');
    const timerContainer = document.getElementById('qcmTimer');

    if (state.timer) clearInterval(state.timer);

    state.timer = setInterval(() => {
        state.timeLeft--;

        if (timerDisplay) {
            timerDisplay.textContent = `${state.timeLeft}s`;

            // Visual warning
            if (state.timeLeft <= 10) {
                timerContainer.style.borderColor = 'var(--accent-danger)';
                timerContainer.style.color = 'var(--accent-danger)';
            }
        }

        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            handleQCMTimeout();
        }
    }, 1000);
}

function handleQCMTimeout() {
    const state = AppState.qcmState;
    if (state.answered.includes(state.currentIndex)) return;

    showToast('error', 'Temps écoulé !', 'La réponse correcte a été révélée.');

    const question = state.questions[state.currentIndex];
    state.answered.push(state.currentIndex);

    // Disable interaction
    document.querySelectorAll('.qcm-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
        if (opt.dataset.id === question.correctAnswer) {
            opt.classList.add('correct');
        } else {
            opt.classList.add('incorrect');
        }
    });

    // Show explanation
    document.getElementById('qcmExplanation').classList.add('visible');
    document.getElementById('qcmActions').style.display = 'flex';

    // Reset streak
    AppState.streak = 0;
    saveState();
    updateUI();
}

function stopQCMTimer() {
    const state = AppState.qcmState;
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
}

function selectQCMOption(optionId) {
    const state = AppState.qcmState;
    stopQCMTimer(); // Stop timer when answering
    const question = state.questions[state.currentIndex];

    // Prevent re-answering
    if (state.answered.includes(state.currentIndex)) return;
    state.answered.push(state.currentIndex);

    const isCorrect = optionId === question.correctAnswer;

    // Update UI
    document.querySelectorAll('.qcm-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
        if (opt.dataset.id === question.correctAnswer) {
            opt.classList.add('correct');
        } else if (opt.dataset.id === optionId && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Show explanation
    document.getElementById('qcmExplanation').classList.add('visible');
    document.getElementById('qcmActions').style.display = 'flex';

    // Update stats
    AppState.questionsAnswered++;
    if (isCorrect) {
        AppState.correctAnswers++;
        state.score++;
        AppState.streak++;
        addXP(10 + (AppState.streak >= 5 ? 5 : 0));
        showToast('success', 'Correct ! 🎉', `+${10 + (AppState.streak >= 5 ? 5 : 0)} XP`);
    } else {
        AppState.streak = 0;
        showToast('error', 'Incorrect', 'Regarde l\'explication pour comprendre');
    }

    // Update topic progress
    if (question.topic && AppState.topicProgress[question.topic] !== undefined) {
        if (isCorrect) {
            AppState.topicProgress[question.topic] += 5;
            if (AppState.topicProgress[question.topic] > 100) {
                AppState.topicProgress[question.topic] = 100;
            }
        }
    }

    saveState();
    updateUI();
    checkAchievements();
}

function nextQCMQuestion() {
    const state = AppState.qcmState;
    state.currentIndex++;

    if (state.currentIndex >= state.questions.length) {
        showQCMResults();
    } else {
        renderQCMQuestion();
    }
}

function showQCMResults() {
    const state = AppState.qcmState;
    const percentage = Math.round(state.score / state.questions.length * 100);
    const container = document.getElementById('qcmContainer');

    let message, emoji;
    if (percentage >= 80) {
        message = 'Excellent ! Tu maîtrises bien !';
        emoji = '🏆';
    } else if (percentage >= 60) {
        message = 'Bien joué ! Continue comme ça !';
        emoji = '👍';
    } else if (percentage >= 40) {
        message = 'Pas mal, mais révise encore un peu.';
        emoji = '📚';
    } else {
        message = 'Il faut revoir les bases. Courage !';
        emoji = '💪';
    }

    container.innerHTML = `
        <div class="qcm-container text-center">
            <div class="card" style="padding: 40px;">
                <div style="font-size: 4rem;">${emoji}</div>
                <h2 class="mt-2">${message}</h2>
                <div style="font-size: 3rem; font-weight: 700; margin: 20px 0;">
                    ${state.score}/${state.questions.length}
                </div>
                <p class="text-muted">${percentage}% de bonnes réponses</p>
                
                <div class="btn-group mt-3" style="justify-content: center;">
                    <button class="btn btn-primary" onclick="startQCM()">
                        🔄 Rejouer
                    </button>
                    <button class="btn btn-secondary" onclick="navigateTo('qcm')">
                        ← Retour
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// EXAM SIMULATION
// ============================================
let examTimer = null;

function renderExamen(container) {
    const exam = EXAM_SIMULATION.exam2024;

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">📋 Simulation d'Examen</h2>
            <p class="section-subtitle">Entraîne-toi dans les conditions réelles de l'examen 2024-2025</p>
        </div>
        
        <div class="card mb-3">
            <div class="card-header">
                <span class="card-icon">📜</span>
                <div>
                    <div class="card-title">${exam.title}</div>
                    <div class="card-subtitle">Durée : ${exam.duration} minutes | ${exam.totalPoints} points</div>
                </div>
            </div>
            
            <div class="mt-3">
                <pre style="white-space: pre-wrap; font-family: inherit; background: var(--bg-glass); padding: 16px; border-radius: 8px;">${exam.instructions}</pre>
            </div>
            
            <div class="mt-3">
                <h4>Structure de l'examen :</h4>
                <div class="grid-2 mt-2">
                    ${exam.exercises.map(ex => `
                        <div class="card" style="background: var(--bg-glass);">
                            <strong>${ex.number}: ${ex.title}</strong>
                            <p class="text-muted mb-1">⏱️ ${ex.suggestedTime} min | 📊 ${ex.points} pts</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="btn-group mt-3">
                <button class="btn btn-primary" onclick="startExamSimulation()">
                    🚀 Commencer l'examen (${exam.duration} min)
                </button>
                <button class="btn btn-secondary" onclick="viewExamSolutions()">
                    📖 Voir les solutions directement
                </button>
            </div>
        </div>
        
        <div id="examContainer"></div>
    `;
}

function startExamSimulation() {
    const exam = EXAM_SIMULATION.exam2024;
    AppState.examState = {
        isRunning: true,
        timeRemaining: exam.duration * 60,
        currentExercise: 0,
        answers: {}
    };

    renderExamInterface();
    startExamTimer();
}

function renderExamInterface() {
    const exam = EXAM_SIMULATION.exam2024;
    const state = AppState.examState;
    const currentEx = exam.exercises[state.currentExercise];

    const container = document.getElementById('examContainer');
    container.innerHTML = `
        <div class="exam-timer">
            <div>
                <span class="exam-timer-display" id="examTimerDisplay">
                    ${formatTime(state.timeRemaining)}
                </span>
            </div>
            <div class="exam-nav">
                ${exam.exercises.map((ex, i) => `
                    <button class="exam-nav-btn ${i === state.currentExercise ? 'active' : ''}" 
                            onclick="goToExercise(${i})">
                        Ex ${i + 1}
                    </button>
                `).join('')}
            </div>
            <div>
                <button class="btn btn-secondary" onclick="pauseExam()">⏸️ Pause</button>
                <button class="btn btn-danger" onclick="endExam()">Terminer</button>
            </div>
        </div>
        
        <div class="exercise-card">
            <div class="exercise-header">
                <span class="exercise-number">${currentEx.number}: ${currentEx.title}</span>
                <span>⏱️ ${currentEx.suggestedTime} min | 📊 ${currentEx.points} pts</span>
            </div>
            <div class="exercise-content">
                ${currentEx.parts.map(part => `
                    <div class="mb-3 p-3" style="background: var(--bg-glass); border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                            <strong>${part.id})</strong>
                            <span class="text-muted">${part.points} pt${part.points > 1 ? 's' : ''}</span>
                        </div>
                        <pre style="white-space: pre-wrap; font-family: inherit;">${part.statement}</pre>
                        
                        <div class="pen-paper-prompt mt-2">
                            <span class="pen-icon">✏️</span>
                            <div class="pen-paper-text">
                                <h4>Résous sur papier !</h4>
                                <p>Écris ta solution complète avant de voir la correction.</p>
                            </div>
                        </div>
                        
                        <button class="btn btn-secondary mt-2" onclick="showExamPartSolution('${currentEx.id}', '${part.id}')">
                            📖 Voir la solution
                        </button>
                        
                        <div class="solution-step" id="exam-solution-${part.id}" style="border-left-color: var(--accent-success);">
                            ${part.solution.steps.map(step => `
                                <div class="mb-2">
                                    <strong style="color: var(--accent-success);">${step.title}</strong>
                                    <pre style="white-space: pre-wrap; font-family: inherit; margin: 8px 0 0 0;">${step.content}</pre>
                                </div>
                            `).join('')}
                            <div class="mt-2 p-2" style="background: rgba(16, 185, 129, 0.1); border-radius: 8px;">
                                <strong>${part.solution.keyPoint}</strong>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="btn-group mt-3">
            ${state.currentExercise > 0 ? `
                <button class="btn btn-secondary" onclick="goToExercise(${state.currentExercise - 1})">
                    ← Exercice précédent
                </button>
            ` : ''}
            ${state.currentExercise < exam.exercises.length - 1 ? `
                <button class="btn btn-primary" onclick="goToExercise(${state.currentExercise + 1})">
                    Exercice suivant →
                </button>
            ` : `
                <button class="btn btn-success" onclick="endExam()">
                    ✅ Terminer l'examen
                </button>
            `}
        </div>
    `;
}

function startExamTimer() {
    if (examTimer) clearInterval(examTimer);

    examTimer = setInterval(() => {
        if (!AppState.examState.isRunning) return;

        AppState.examState.timeRemaining--;
        const display = document.getElementById('examTimerDisplay');

        if (display) {
            display.textContent = formatTime(AppState.examState.timeRemaining);

            if (AppState.examState.timeRemaining <= 300) {
                display.classList.add('danger');
            } else if (AppState.examState.timeRemaining <= 600) {
                display.classList.add('warning');
            }
        }

        if (AppState.examState.timeRemaining <= 0) {
            endExam();
        }
    }, 1000);
}

function pauseExam() {
    AppState.examState.isRunning = !AppState.examState.isRunning;
    const btn = event.target;
    btn.textContent = AppState.examState.isRunning ? '⏸️ Pause' : '▶️ Reprendre';
}

function goToExercise(index) {
    AppState.examState.currentExercise = index;
    renderExamInterface();
}

function showExamPartSolution(exId, partId) {
    const el = document.getElementById(`exam-solution-${partId}`);
    if (el) el.classList.add('visible');
    addXP(5);
}

function endExam() {
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }

    AppState.examState.isRunning = false;
    addXP(100);
    showToast('achievement', 'Examen terminé !', '+100 XP - Bravo pour ton travail !');

    viewExamSolutions();
    checkAchievements();
}

function viewExamSolutions() {
    const exam = EXAM_SIMULATION.exam2024;
    const container = document.getElementById('examContainer');

    container.innerHTML = `
        <div class="section-header">
            <h3>📖 Solutions complètes</h3>
        </div>
        
        ${exam.exercises.map(ex => `
            <div class="exercise-card mb-3">
                <div class="exercise-header">
                    <span class="exercise-number">${ex.number}: ${ex.title}</span>
                    <span>📊 ${ex.points} pts</span>
                </div>
                <div class="exercise-content">
                    ${ex.parts.map(part => `
                        <div class="mb-3 p-3" style="background: var(--bg-glass); border-radius: 8px;">
                            <strong>${part.id}) (${part.points} pt${part.points > 1 ? 's' : ''})</strong>
                            <pre style="white-space: pre-wrap; font-family: inherit; margin: 8px 0;">${part.statement}</pre>
                            
                            <div class="solution-step visible" style="border-left-color: var(--accent-success);">
                                ${part.solution.steps.map(step => `
                                    <div class="mb-2">
                                        <strong style="color: var(--accent-success);">${step.title}</strong>
                                        <pre style="white-space: pre-wrap; font-family: inherit; margin: 8px 0 0 0;">${step.content}</pre>
                                    </div>
                                `).join('')}
                                <div class="mt-2 p-2" style="background: rgba(16, 185, 129, 0.1); border-radius: 8px;">
                                    <strong>${part.solution.keyPoint}</strong>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

// ============================================
// PREDICTION
// ============================================
function renderPrediction(container) {
    const predictions = EXAM_SIMULATION.predictions;

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">🔮 Prédictions pour le prochain examen</h2>
            <p class="section-subtitle">Basé sur l'analyse de l'examen 2024-2025 et des tendances des TDs</p>
        </div>
        
        <div class="card mb-3">
            <h3 style="color: var(--accent-danger);">🎯 Forte probabilité</h3>
            <p class="text-muted mb-2">Ces sujets ont de grandes chances d'apparaître</p>
            
            ${predictions.highProbability.map(pred => `
                <div class="p-3 mb-2" style="background: rgba(239, 68, 68, 0.1); border-radius: 8px; border-left: 3px solid var(--accent-danger);">
                    <strong>${pred.topic}</strong>
                    <p class="mb-1">${pred.description}</p>
                    <p class="text-muted" style="font-size: 0.85rem;">
                        <strong>Exemple :</strong> ${pred.example}<br>
                        <strong>Pourquoi :</strong> ${pred.reason}
                    </p>
                </div>
            `).join('')}
        </div>
        
        <div class="card mb-3">
            <h3 style="color: var(--accent-warning);">🎲 Probabilité moyenne</h3>
            <p class="text-muted mb-2">Peuvent également apparaître</p>
            
            ${predictions.mediumProbability.map(pred => `
                <div class="p-3 mb-2" style="background: rgba(245, 158, 11, 0.1); border-radius: 8px; border-left: 3px solid var(--accent-warning);">
                    <strong>${pred.topic}</strong>
                    <p class="mb-1">${pred.description}</p>
                    <p class="text-muted" style="font-size: 0.85rem;">
                        <strong>Exemple :</strong> ${pred.example}<br>
                        <strong>Pourquoi :</strong> ${pred.reason}
                    </p>
                </div>
            `).join('')}
        </div>
        
        <div class="card">
            <h3 style="color: var(--accent-success);">📌 Conseils clés</h3>
            <ul style="list-style: none; padding: 0;">
                ${predictions.tips.map(tip => `
                    <li class="p-2 mb-1" style="background: var(--bg-glass); border-radius: 8px;">
                        ${tip}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// ============================================
// PROGRESS
// ============================================
function renderProgres(container) {
    const achievements = getAchievements();

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">📊 Ma Progression</h2>
            <p class="section-subtitle">Suis ton avancement vers la maîtrise de la compilation</p>
        </div>
        
        <div class="progress-grid">
            <div class="progress-card">
                <div class="progress-card-header">
                    <span class="progress-card-title">🔄 Automates Finis</span>
                    <span class="progress-card-percentage">${AppState.topicProgress.automates}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${AppState.topicProgress.automates}%"></div>
                </div>
            </div>
            
            <div class="progress-card">
                <div class="progress-card-header">
                    <span class="progress-card-title">✨ Expressions Régulières</span>
                    <span class="progress-card-percentage">${AppState.topicProgress.regex}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${AppState.topicProgress.regex}%"></div>
                </div>
            </div>
            
            <div class="progress-card">
                <div class="progress-card-header">
                    <span class="progress-card-title">📐 Grammaires & LL(1)</span>
                    <span class="progress-card-percentage">${AppState.topicProgress.grammaires}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${AppState.topicProgress.grammaires}%"></div>
                </div>
            </div>
            
            <div class="progress-card">
                <div class="progress-card-header">
                    <span class="progress-card-title">⚙️ Compilation</span>
                    <span class="progress-card-percentage">${AppState.topicProgress.compilation}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${AppState.topicProgress.compilation}%"></div>
                </div>
            </div>
        </div>
        
        <div class="section-header mt-3">
            <h3>🏆 Achievements</h3>
        </div>
        
        <div class="achievements-grid">
            ${achievements.map(ach => `
                <div class="achievement ${AppState.achievements.includes(ach.id) ? 'unlocked' : 'locked'}">
                    <div class="achievement-icon">${ach.icon}</div>
                    <div class="achievement-name">${ach.name}</div>
                    <div class="achievement-desc">${ach.desc}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="card mt-3">
            <h3>📈 Statistiques globales</h3>
            <div class="grid-3 mt-2">
                <div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--accent-primary);">${AppState.xp}</div>
                    <div class="text-muted">XP total</div>
                </div>
                <div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--accent-success);">${AppState.correctAnswers}</div>
                    <div class="text-muted">Bonnes réponses</div>
                </div>
                <div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--accent-warning);">${AppState.achievements.length}</div>
                    <div class="text-muted">Achievements</div>
                </div>
            </div>
            
            <div class="mt-3">
                <button class="btn btn-danger" onclick="resetProgress()">
                    🗑️ Réinitialiser ma progression
                </button>
            </div>
        </div>
    `;
}

function getAchievements() {
    return [
        { id: 'first_blood', name: 'First Blood', desc: 'Réponds à ta première question', icon: '🎯' },
        { id: 'on_fire', name: 'On Fire', desc: '5 bonnes réponses de suite', icon: '🔥' },
        { id: 'automaton_master', name: 'Maître Automates', desc: '100% en automates', icon: '🔄' },
        { id: 'grammarian', name: 'Grammairien', desc: '100% en grammaires', icon: '📐' },
        { id: 'exam_complete', name: 'Examen passé', desc: 'Termine une simulation', icon: '📋' },
        { id: 'dedicated', name: 'Persévérant', desc: 'Gagne 500 XP', icon: '💪' },
        { id: 'expert', name: 'Expert', desc: 'Gagne 1000 XP', icon: '🏆' },
        { id: 'legendary', name: 'Légendaire', desc: 'Gagne 2000 XP', icon: '👑' }
    ];
}

function checkAchievements() {
    const newAchievements = [];

    if (AppState.questionsAnswered >= 1 && !AppState.achievements.includes('first_blood')) {
        AppState.achievements.push('first_blood');
        newAchievements.push('First Blood');
    }

    if (AppState.streak >= 5 && !AppState.achievements.includes('on_fire')) {
        AppState.achievements.push('on_fire');
        newAchievements.push('On Fire');
    }

    if (AppState.topicProgress.automates >= 100 && !AppState.achievements.includes('automaton_master')) {
        AppState.achievements.push('automaton_master');
        newAchievements.push('Maître Automates');
    }

    if (AppState.topicProgress.grammaires >= 100 && !AppState.achievements.includes('grammarian')) {
        AppState.achievements.push('grammarian');
        newAchievements.push('Grammairien');
    }

    if (AppState.xp >= 500 && !AppState.achievements.includes('dedicated')) {
        AppState.achievements.push('dedicated');
        newAchievements.push('Persévérant');
    }

    if (AppState.xp >= 1000 && !AppState.achievements.includes('expert')) {
        AppState.achievements.push('expert');
        newAchievements.push('Expert');
    }

    if (AppState.xp >= 2000 && !AppState.achievements.includes('legendary')) {
        AppState.achievements.push('legendary');
        newAchievements.push('Légendaire');
    }

    newAchievements.forEach(name => {
        showToast('achievement', 'Achievement débloqué !', name);
    });

    saveState();
}

function resetProgress() {
    if (confirm('Es-tu sûr de vouloir réinitialiser toute ta progression ?')) {
        localStorage.removeItem('compilationMasterState');
        location.reload();
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function addXP(amount) {
    AppState.xp += amount;

    // Check level up
    const xpForNextLevel = AppState.level * 100;
    if (AppState.xp >= xpForNextLevel * AppState.level) {
        AppState.level++;
        showToast('achievement', 'Level Up !', `Tu es maintenant niveau ${AppState.level}`);
    }

    updateUI();
    saveState();
}

function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        achievement: '🏆'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '📢'}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Modal functions
function openModal(content) {
    const overlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = content;
    overlay.classList.add('visible');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('visible');
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initNavigation();
    renderSection(AppState.currentSection);

    // Modal close handlers
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalOverlay')) {
            closeModal();
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            // Could implement search across all content
            console.log('Search:', e.target.value);
        });
    }

    console.log('🎓 Compilation Master initialized!');
});
