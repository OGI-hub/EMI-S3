/**
 * ============================================
 * Angular Exam Prep - Application Logic
 * Updated with 3-section quiz navigation
 * ============================================
 */

// State management
const state = {
    currentSection: 'home',
    flashcards: {
        currentIndex: 0,
        known: [],
        unknown: [],
        isFlipped: false
    },
    quiz: {
        selectedSection: 0, // 0=all, 1=course, 2=exam, 3=screenshots, 4=predictions, 5=code, 6=deep, 7=focus
        questions: [],
        currentIndex: 0,
        score: 0,
        answers: [],
        isActive: false,
        examMode: false,
        timer: null,
        timeLeft: 10
    },
    progress: {
        flashcardsReviewed: 0,
        quizCompleted: false,
        distinctionsViewed: []
    }
};

// Section names for display
const SECTION_NAMES = {
    0: 'Toutes les sections',
    1: 'Cours Angular',
    2: 'Examens Précédents',
    3: 'Screenshots',
    4: 'Prédictions Examen',
    5: 'Code & Architecture',
    6: 'Code Approfondi (5 Piliers)',
    7: 'Focus Examens'
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHome();
    initFlashcards();
    initDistinctions();
    initTraps();
    updateProgress();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const section = tab.dataset.section;
            switchSection(section);
        });
    });
}

function switchSection(sectionId) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === sectionId);
    });

    document.querySelectorAll('.section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });

    state.currentSection = sectionId;

    // Initialize section-specific content
    if (sectionId === 'quiz') {
        backToSections();
    } else if (sectionId === 'reflexes') {
        initReflexes();
    }
}

// ============================================
// HOME SECTION
// ============================================

function initHome() {
    document.getElementById('totalDefinitions').textContent = ExamData.flashcards.length;
    document.getElementById('totalDistinctions').textContent = ExamData.distinctions.length;

    // Calculate total questions
    const totalQ = (window.Section1_Course?.length || 0) +
        (window.Section2_Exam?.length || 0) +
        (window.Section3_Screenshots?.length || 0) +
        (window.Section4_Predictions?.length || 0) +
        (window.Section5_Code?.length || 0) +
        (window.Section6_DeepCode?.length || 0) +
        (window.Section7_Focus?.length || 0);
    document.getElementById('totalQuestions').textContent = totalQ;
    document.getElementById('totalTraps').textContent = ExamData.traps.length;
    document.getElementById('totalReflexes').textContent = ExamData.reflexes.length;

    // Render critical tips
    const tipsList = document.getElementById('criticalTips');
    tipsList.innerHTML = ExamData.criticalPoints
        .map(tip => `<li>${tip}</li>`)
        .join('');
}

function startQuickRevision() {
    switchSection('reflexes');
}

function startFullQuiz() {
    switchSection('quiz');
}

// ============================================
// RÉFLEXES
// ============================================

function initFlashcards() {
    // Renamed internally but kept function name for compatibility
    initReflexes();
}

function initReflexes() {
    const grid = document.getElementById('reflexesGrid');
    if (!grid) return;

    grid.innerHTML = ExamData.reflexes.map(reflex => `
        <div class="reflex-card glass-card">
            <div class="reflex-trigger">${reflex.trigger}</div>
            <div class="reflex-arrow">→</div>
            <div class="reflex-response">${reflex.response}</div>
        </div>
    `).join('');
}

// ============================================
// DISTINCTIONS
// ============================================

function initDistinctions() {
    const grid = document.getElementById('distinctionsGrid');

    grid.innerHTML = ExamData.distinctions.map((distinction, index) => `
        <div class="distinction-card" data-index="${index}">
            <div class="distinction-header" onclick="toggleDistinction(${index})">
                <h3>${distinction.title}</h3>
                <span class="distinction-toggle">▼</span>
            </div>
            <div class="distinction-content">
                <div class="distinction-table">
                    <div class="distinction-column">
                        <h4>${distinction.leftTitle}</h4>
                        <ul>
                            ${distinction.left.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="distinction-column">
                        <h4>${distinction.rightTitle}</h4>
                        <ul>
                            ${distinction.right.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleDistinction(index) {
    const card = document.querySelector(`.distinction-card[data-index="${index}"]`);
    card.classList.toggle('expanded');

    if (!state.progress.distinctionsViewed.includes(index)) {
        state.progress.distinctionsViewed.push(index);
        updateProgress();
    }
}

// ============================================
// QUIZ - SECTION SELECTION
// ============================================

function selectQuizSection(sectionNum) {
    state.quiz.selectedSection = sectionNum;

    // Get questions for selected section
    let questions = [];
    let title = '';
    let desc = '';

    switch (sectionNum) {
        case 1:
            questions = window.Section1_Course || [];
            title = '📚 Section 1: Cours Angular';
            desc = '40 questions basées sur le cours (Part 1 & 2)';
            break;
        case 2:
            questions = window.Section2_Exam || [];
            title = '📝 Section 2: Examens Précédents';
            desc = '60 questions inspirées des anciens examens';
            break;
        case 3:
            questions = window.Section3_Screenshots || [];
            title = '📸 Section 3: Screenshots';
            desc = '12 questions des captures d\'écran';
            break;
        case 4:
            questions = window.Section4_Predictions || [];
            title = '🎯 Section 4: Prédictions Examen';
            desc = '30 questions CRITIQUES qui tomberont';
            break;
        case 5:
            questions = window.Section5_Code || [];
            title = '💻 Section 5: Code & Architecture';
            desc = '40 questions de code pratique';
            break;
        case 6:
            questions = window.Section6_DeepCode || [];
            title = '🔥 Section 6: Code Approfondi (5 Piliers)';
            desc = '50 questions avancées : Routing, Data Binding, RxJS, Forms, Architecture';
            break;
        case 7:
            questions = window.Section7_Focus || [];
            title = '🎯 Section 7: Focus Examens';
            desc = '26 questions ciblées : Navigation, HTTP, Pipes, Dynamique, Directives';
            break;
        default: // 0 = all
            questions = [
                ...(window.Section1_Course || []),
                ...(window.Section2_Exam || []),
                ...(window.Section3_Screenshots || []),
                ...(window.Section4_Predictions || []),
                ...(window.Section5_Code || []),
                ...(window.Section6_DeepCode || []),
                ...(window.Section7_Focus || [])
            ];
            title = '🚀 Révision Complète';
            desc = '200 questions au total';
    }

    state.quiz.questions = questions;

    // Update UI
    document.getElementById('quizSectionTitle').textContent = title;
    document.getElementById('quizSectionDesc').textContent = desc;

    // Show quiz start screen
    document.getElementById('quizSections').style.display = 'none';
    document.getElementById('quizStart').style.display = 'block';
}

function backToSections() {
    document.getElementById('quizSections').style.display = 'block';
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
}

// ============================================
// QUIZ - EXECUTION
// ============================================

function startQuiz() {
    let questions = [...state.quiz.questions];

    // Shuffle if needed
    if (document.getElementById('shuffleQuestions').checked) {
        questions = shuffleArray(questions);
    }

    state.quiz.questions = questions;
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answers = [];
    state.quiz.isActive = true;
    state.quiz.examMode = document.getElementById('examMode').checked;

    // Show/hide timer based on exam mode
    document.getElementById('quizTimer').style.display = state.quiz.examMode ? 'inline' : 'none';

    document.getElementById('totalQuizQuestions').textContent = questions.length;

    // Show quiz interface
    document.getElementById('quizSections').style.display = 'none';
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    renderQuestion();
}

function renderQuestion() {
    const question = state.quiz.questions[state.quiz.currentIndex];

    // Update buttons state
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) prevBtn.disabled = state.quiz.currentIndex === 0;

    // Update progress
    document.getElementById('currentQuestion').textContent = state.quiz.currentIndex + 1;
    document.getElementById('quizScore').textContent = state.quiz.score;

    const progressPercent = ((state.quiz.currentIndex) / state.quiz.questions.length) * 100;
    document.getElementById('quizProgressFill').style.width = `${progressPercent}%`;

    // Update category
    document.getElementById('questionCategory').textContent = SECTION_NAMES[state.quiz.selectedSection];
    document.getElementById('questionText').textContent = question.question;

    // Render options
    const optionsList = document.getElementById('optionsList');
    const letters = ['A', 'B', 'C', 'D'];

    optionsList.innerHTML = question.options.map((option, index) => `
        <button class="option-btn" data-index="${index}" onclick="selectAnswer(${index})">
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${option}</span>
        </button>
    `).join('');

    // Check if question was already answered or skipped
    const previousAnswer = state.quiz.answers[state.quiz.currentIndex];
    if (previousAnswer) {
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === previousAnswer.selected && !previousAnswer.isCorrect && !previousAnswer.skipped) {
                btn.classList.add('incorrect');
            }
        });

        // Show explanation if it was answered/skipped
        if (!previousAnswer.skipped || document.getElementById('showExplanations').checked) {
            showExplanation(question);
        }
        stopTimer();
    } else {
        // Hide explanation if not answered
        document.getElementById('explanationCard').style.display = 'none';
        // Start timer if exam mode
        if (state.quiz.examMode) {
            startTimer();
        }
    }
}

// ============================================
// EXAM MODE TIMER
// ============================================

function startTimer() {
    stopTimer(); // Clear any existing timer
    state.quiz.timeLeft = 10;
    updateTimerDisplay();

    document.getElementById('quizTimer').style.display = 'inline';

    state.quiz.timer = setInterval(() => {
        state.quiz.timeLeft--;
        updateTimerDisplay();

        if (state.quiz.timeLeft <= 0) {
            timeExpired();
        }
    }, 1000);
}

function stopTimer() {
    if (state.quiz.timer) {
        clearInterval(state.quiz.timer);
        state.quiz.timer = null;
    }
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timerCount');
    if (timerEl) {
        timerEl.textContent = state.quiz.timeLeft;
        // Change color when low
        const timerContainer = document.getElementById('quizTimer');
        if (state.quiz.timeLeft <= 10) {
            timerContainer.classList.add('timer-warning');
        } else {
            timerContainer.classList.remove('timer-warning');
        }
    }
}

function timeExpired() {
    stopTimer();
    const question = state.quiz.questions[state.quiz.currentIndex];

    // Record as timeout (no answer selected)
    state.quiz.answers[state.quiz.currentIndex] = {
        questionIndex: state.quiz.currentIndex,
        selected: -1,
        correct: question.correct,
        isCorrect: false,
        timeout: true
    };

    // Show correct answer
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        }
    });

    // Show explanation
    showExplanation(question);
}

function selectAnswer(selectedIndex) {
    stopTimer(); // Stop exam mode timer
    const question = state.quiz.questions[state.quiz.currentIndex];
    const isCorrect = selectedIndex === question.correct;

    // Record answer using index to allow retrieval when navigating back
    state.quiz.answers[state.quiz.currentIndex] = {
        questionIndex: state.quiz.currentIndex,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect
    };

    if (isCorrect) {
        state.quiz.score++;
        document.getElementById('quizScore').textContent = state.quiz.score;
    }

    // Disable all buttons and show result
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show explanation if enabled
    if (document.getElementById('showExplanations').checked) {
        showExplanation(question);
    } else {
        setTimeout(() => nextQuestion(), 1500);
    }
}

function showExplanation(question) {
    const explanationCard = document.getElementById('explanationCard');
    document.getElementById('explanationText').textContent = question.explanation;

    // Handle Trap section
    const trapSection = document.getElementById('trapSection');
    if (question.trap) {
        document.getElementById('trapText').textContent = question.trap;
        trapSection.style.display = 'block';
    } else {
        trapSection.style.display = 'none';
    }

    // Handle Debunking section
    const debunkSection = document.getElementById('debunkSection');
    const wrongReasonsList = document.getElementById('wrongReasonsList');
    if (question.wrongReasons && question.wrongReasons.length > 0) {
        wrongReasonsList.innerHTML = question.wrongReasons
            .map(reason => `<li>${reason}</li>`)
            .join('');
        debunkSection.style.display = 'block';
    } else {
        debunkSection.style.display = 'none';
    }

    explanationCard.style.display = 'flex';
}

function skipQuestion() {
    // Record as skipped (not counted in score)
    state.quiz.answers[state.quiz.currentIndex] = {
        questionIndex: state.quiz.currentIndex,
        selected: -1,
        correct: state.quiz.questions[state.quiz.currentIndex].correct,
        isCorrect: false,
        skipped: true
    };

    // Move to next question
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
        state.quiz.currentIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (state.quiz.currentIndex > 0) {
        state.quiz.currentIndex--;
        renderQuestion();
    }
}

function randomQuestion() {
    const total = state.quiz.questions.length;
    if (total <= 1) return;

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * total);
    } while (newIndex === state.quiz.currentIndex);

    state.quiz.currentIndex = newIndex;
    renderQuestion();
}

function nextQuestion() {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
        state.quiz.currentIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    state.quiz.isActive = false;
    state.progress.quizCompleted = true;
    updateProgress();

    const total = state.quiz.questions.length;
    const score = state.quiz.score;
    const percentage = Math.round((score / total) * 100);

    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    document.getElementById('finalScore').textContent = score;
    document.querySelector('.score-total').textContent = `/ ${total}`;
    document.getElementById('resultsPercentage').textContent = `${percentage}%`;

    // Emoji and title based on score
    let emoji, title;
    if (percentage >= 90) {
        emoji = '🏆';
        title = 'Excellent !';
    } else if (percentage >= 70) {
        emoji = '🎉';
        title = 'Très bien !';
    } else if (percentage >= 50) {
        emoji = '👍';
        title = 'Pas mal !';
    } else {
        emoji = '📚';
        title = 'Continue à réviser !';
    }

    document.getElementById('resultsEmoji').textContent = emoji;
    document.getElementById('resultsTitle').textContent = title;

    // Show section breakdown
    const breakdownDiv = document.getElementById('resultsBreakdown');
    const correct = state.quiz.answers.filter(a => a && a.isCorrect).length;
    const answeredTotal = state.quiz.answers.filter(a => a && !a.skipped).length;
    const incorrect = answeredTotal - correct;
    const skipped = total - answeredTotal;

    breakdownDiv.innerHTML = `
        <div class="breakdown-item">
            <span class="breakdown-label">✅ Correctes</span>
            <span class="breakdown-value" style="color: #22c55e;">${correct}</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-label">❌ Incorrectes</span>
            <span class="breakdown-value" style="color: #ef4444;">${incorrect}</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-label">⏭️ Passées/Non faites</span>
            <span class="breakdown-value" style="color: var(--text-muted);">${skipped}</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-label">📊 Section</span>
            <span class="breakdown-value">${SECTION_NAMES[state.quiz.selectedSection]}</span>
        </div>
    `;
}

function restartQuiz() {
    backToSections();
}

function reviewMistakes() {
    const mistakes = state.quiz.answers.filter(a => !a.isCorrect);

    if (mistakes.length === 0) {
        alert('Félicitations ! Tu n\'as fait aucune erreur ! 🎉');
        return;
    }

    // Get original questions for mistakes
    const originalQuestions = state.quiz.questions;
    state.quiz.questions = mistakes.map(m => originalQuestions[m.questionIndex]);

    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answers = [];
    state.quiz.isActive = true;

    document.getElementById('totalQuizQuestions').textContent = state.quiz.questions.length;

    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';

    renderQuestion();
}

// ============================================
// TRAPS SECTION
// ============================================

function initTraps() {
    const trapsList = document.getElementById('trapsList');
    trapsList.innerHTML = ExamData.traps.map(trap => `
        <div class="trap-card">
            <h4>⚠️ ${trap.title}</h4>
            <p>${trap.description}</p>
            <p class="correct">✅ ${trap.correct}</p>
            <p class="incorrect">❌ ${trap.incorrect}</p>
        </div>
    `).join('');

    const reflexesGrid = document.getElementById('reflexesGrid');
    reflexesGrid.innerHTML = ExamData.reflexes.map(reflex => `
        <div class="reflex-item">
            <span class="reflex-trigger">${reflex.trigger}</span>
            <span class="reflex-arrow">→</span>
            <span class="reflex-result">${reflex.response}</span>
        </div>
    `).join('');
}

// ============================================
// PROGRESS TRACKING
// ============================================

function updateProgress() {
    const flashcardsTotal = ExamData.flashcards.length;
    const flashcardsReviewed = state.flashcards.known.length + state.flashcards.unknown.length;

    const distinctionsTotal = ExamData.distinctions.length;
    const distinctionsViewed = state.progress.distinctionsViewed.length;

    const quizBonus = state.progress.quizCompleted ? 20 : 0;

    const flashcardsProgress = (flashcardsReviewed / flashcardsTotal) * 40;
    const distinctionsProgress = (distinctionsViewed / distinctionsTotal) * 40;

    const totalProgress = Math.min(100, Math.round(flashcardsProgress + distinctionsProgress + quizBonus));

    document.getElementById('globalProgress').style.width = `${totalProgress}%`;
    document.getElementById('progressText').textContent = `${totalProgress}%`;
}

// ============================================
// UTILITIES
// ============================================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (state.currentSection === 'flashcards') {
        if (e.key === 'ArrowRight') nextFlashcard();
        if (e.key === 'ArrowLeft') prevFlashcard();
        if (e.key === ' ' || e.key === 'Enter') flipCard();
    }
});

// Make functions globally available
window.startQuickRevision = startQuickRevision;
window.startFullQuiz = startFullQuiz;
window.prevFlashcard = prevFlashcard;
window.nextFlashcard = nextFlashcard;
window.flipCard = flipCard;
window.markFlashcard = markFlashcard;
window.toggleDistinction = toggleDistinction;
window.selectQuizSection = selectQuizSection;
window.backToSections = backToSections;
window.startQuiz = startQuiz;
window.selectAnswer = selectAnswer;
window.skipQuestion = skipQuestion;
window.prevQuestion = prevQuestion;
window.randomQuestion = randomQuestion;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.reviewMistakes = reviewMistakes;
