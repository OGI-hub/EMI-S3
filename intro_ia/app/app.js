// ==========================================
// AI Expert - Application Principale
// Navigation et gestion des sections
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTheory();
    initExercises();
    initQuiz();
    initCode();
});

// ==========================================
// Navigation
// ==========================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const featureCards = document.querySelectorAll('.feature-card');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;
            switchSection(sectionId, navItems, sections);
        });
    });

    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const sectionId = card.dataset.section;
            if (sectionId) {
                switchSection(sectionId, navItems, sections);
            }
        });
    });
}

function switchSection(sectionId, navItems, sections) {
    // Update nav
    navItems.forEach(i => i.classList.remove('active'));
    document.querySelector(`.nav-item[data-section="${sectionId}"]`)?.classList.add('active');

    // Update sections
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId)?.classList.add('active');

    // Initialize specific sections
    if (sectionId === 'visualizer') {
        initVisualizer();
    } else if (sectionId === 'exam') {
        initExam();
    }
}

// ==========================================
// Théorie
// ==========================================
function initTheory() {
    const tabs = document.querySelectorAll('.theory-tab');
    const contentEl = document.getElementById('theoryContent');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderTheory(tab.dataset.topic, contentEl);
        });
    });

    // Initial render
    renderTheory('agents', contentEl);
}

function renderTheory(topic, container) {
    const data = theoryData[topic];
    if (!data) return;

    container.innerHTML = `
        <h2 style="margin-bottom: 24px;">${data.title}</h2>
        ${data.concepts.map(concept => `
            <div class="concept-card">
                <div class="concept-header" onclick="this.parentElement.classList.toggle('expanded')">
                    <h4>${concept.title}</h4>
                    <span class="concept-toggle">▼</span>
                </div>
                <div class="concept-body">
                    ${concept.content}
                </div>
            </div>
        `).join('')}
    `;
}

// ==========================================
// Exercices Papier-Crayon
// ==========================================
let currentExerciseType = 'trace';

function initExercises() {
    const tabs = document.querySelectorAll('.exercise-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentExerciseType = tab.dataset.type;
            renderExercises();
        });
    });

    renderExercises();
}

function renderExercises() {
    const container = document.getElementById('exerciseContainer');
    const exercises = exercisesData[currentExerciseType];

    if (!exercises) {
        container.innerHTML = '<p>Aucun exercice disponible.</p>';
        return;
    }

    container.innerHTML = exercises.map((ex, idx) => `
        <div class="exercise-item">
            <span class="exercise-number">Exercice ${idx + 1}</span>
            <p class="exercise-question">${ex.question}</p>
            ${ex.graph ? `<pre class="exercise-graph">${ex.graph}</pre>` : ''}
            ${ex.initial ? `<pre class="exercise-graph">${ex.initial}</pre>` : ''}
            ${ex.hint ? `<p style="color: var(--accent-info); font-size: 13px; margin-bottom: 16px;">💡 Indice: ${ex.hint}</p>` : ''}
            
            <button class="reveal-btn" onclick="revealSteps(${idx}, 'step')">Révéler étape par étape</button>
            <button class="reveal-btn" onclick="revealSteps(${idx}, 'all')">Voir la solution complète</button>
            
            <div class="exercise-answer" id="answer-${idx}"></div>
        </div>
    `).join('');
}

function revealSteps(exerciseIdx, mode) {
    const exercises = exercisesData[currentExerciseType];
    const exercise = exercises[exerciseIdx];
    const answerEl = document.getElementById(`answer-${exerciseIdx}`);

    if (mode === 'all') {
        // Show all steps at once
        let html = '<h4 style="margin-bottom: 16px;">Solution complète:</h4>';

        if (exercise.steps) {
            html += exercise.steps.map((step, i) => `
                <div class="answer-step">
                    <span class="step-number">${i + 1}</span>
                    <span class="step-content">${formatStep(step)}</span>
                </div>
            `).join('');
        }

        if (exercise.finalAnswer) {
            html += `<p style="margin-top: 16px; font-weight: 600; color: var(--accent-success);">✓ ${exercise.finalAnswer}</p>`;
        }

        answerEl.innerHTML = html;
        answerEl.classList.add('visible');
    } else {
        // Reveal one step at a time
        const currentSteps = answerEl.querySelectorAll('.answer-step').length;

        if (currentSteps === 0) {
            answerEl.innerHTML = '<h4 style="margin-bottom: 16px;">Solution étape par étape:</h4>';
            answerEl.classList.add('visible');
        }

        if (currentSteps < exercise.steps.length) {
            const step = exercise.steps[currentSteps];
            const stepEl = document.createElement('div');
            stepEl.className = 'answer-step';
            stepEl.innerHTML = `
                <span class="step-number">${currentSteps + 1}</span>
                <span class="step-content">${formatStep(step)}</span>
            `;
            answerEl.appendChild(stepEl);
        } else if (!answerEl.querySelector('.final-answer')) {
            // Show final answer after all steps
            const finalEl = document.createElement('p');
            finalEl.className = 'final-answer';
            finalEl.style.cssText = 'margin-top: 16px; font-weight: 600; color: var(--accent-success);';
            finalEl.textContent = `✓ ${exercise.finalAnswer}`;
            answerEl.appendChild(finalEl);
        }
    }
}

function formatStep(step) {
    if (typeof step === 'string') return step;
    if (step.content) return step.content;

    let text = '';
    if (step.frontier) text += `Frontière: ${step.frontier} `;
    if (step.current) text += `| Courant: ${step.current} `;
    if (step.visited) text += `| Visités: ${step.visited}`;
    if (step.explanation) text += `<br><small style="color: var(--text-muted)">${step.explanation}</small>`;
    return text;
}

// ==========================================
// QCM Quiz
// ==========================================
let currentQuestionIndex = 0;
let filteredQuestions = [];
let quizAnswers = {};

function initQuiz() {
    const categoryBtns = document.querySelectorAll('.category-btn');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterQuestions(btn.dataset.category);
        });
    });

    document.getElementById('prevQuestion').addEventListener('click', prevQuizQuestion);
    document.getElementById('nextQuestion').addEventListener('click', nextQuizQuestion);

    filterQuestions('all');
}

function filterQuestions(category) {
    if (category === 'all') {
        filteredQuestions = [...questionsData];
    } else {
        filteredQuestions = questionsData.filter(q => q.category === category);
    }
    currentQuestionIndex = 0;
    quizAnswers = {};
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quizContainer');

    if (filteredQuestions.length === 0) {
        container.innerHTML = '<p>Aucune question dans cette catégorie.</p>';
        return;
    }

    const q = filteredQuestions[currentQuestionIndex];
    const answer = quizAnswers[currentQuestionIndex];
    const isAnswered = answer !== undefined;

    container.innerHTML = `
        <p class="quiz-question">${q.question}</p>
        <div class="quiz-options">
            ${q.options.map((opt, idx) => {
        let classes = 'quiz-option';
        if (isAnswered) {
            if (idx === q.correct) classes += ' correct';
            else if (idx === answer && answer !== q.correct) classes += ' incorrect';
        } else if (answer === idx) {
            classes += ' selected';
        }
        return `
                    <div class="${classes}" onclick="selectQuizOption(${idx})">
                        <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                        <span class="option-text">${opt}</span>
                    </div>
                `;
    }).join('')}
        </div>
        <div class="quiz-explanation ${isAnswered ? 'visible' : ''} ${isAnswered && answer === q.correct ? 'correct-explanation' : 'incorrect-explanation'}">
            <p class="explanation-title">${isAnswered && answer === q.correct ? '✓ Correct!' : '✗ Incorrect'}</p>
            <p class="explanation-text">${q.explanation}</p>
        </div>
    `;

    document.getElementById('questionCounter').textContent =
        `${currentQuestionIndex + 1}/${filteredQuestions.length}`;

    updateProgress();
}

function selectQuizOption(optionIndex) {
    if (quizAnswers[currentQuestionIndex] !== undefined) return; // Already answered

    quizAnswers[currentQuestionIndex] = optionIndex;
    renderQuizQuestion();
}

function prevQuizQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuizQuestion();
    }
}

function nextQuizQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuizQuestion();
    }
}

function updateProgress() {
    const totalQuestions = questionsData.length;
    const answeredCount = Object.keys(quizAnswers).length;
    const correctCount = Object.entries(quizAnswers).filter(([idx, ans]) => {
        return filteredQuestions[parseInt(idx)]?.correct === ans;
    }).length;

    const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
    document.getElementById('globalProgress').style.width = `${progressPercent}%`;
    document.getElementById('progressText').textContent = `${progressPercent}%`;
}

// ==========================================
// Code Python
// ==========================================
let currentCodeExercise = 'bfs';
let codeAnswers = {};

function initCode() {
    const tabs = document.querySelectorAll('.code-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCodeExercise = tab.dataset.code;
            renderCodeExercise();
        });
    });

    renderCodeExercise();
}

function renderCodeExercise() {
    const container = document.getElementById('codeContainer');
    const data = codeData[currentCodeExercise];

    if (!data) {
        container.innerHTML = '<p>Exercice non disponible.</p>';
        return;
    }

    const answers = codeAnswers[currentCodeExercise] || {};

    container.innerHTML = `
        <div class="code-exercise">
            <h3 style="margin-bottom: 12px;">${data.title}</h3>
            <p class="code-description">${data.description}</p>
            
            <div class="code-block">
                ${data.code.map(line => {
        if (line.type === 'blank') {
            const filled = answers[line.blankId];
            const content = line.content.replace(
                `___${line.blankId}___`,
                `<span class="code-blank ${filled ? 'filled' : ''}" data-blank="${line.blankId}">${filled || '???'}</span>`
            );
            return `<div class="code-line">
                            <span class="line-number">${line.line}</span>
                            <span class="code-content">${formatCodeLine(content)}</span>
                        </div>`;
        } else if (line.type === 'comment') {
            return `<div class="code-line">
                            <span class="line-number">${line.line}</span>
                            <span class="code-content code-comment">${line.content}</span>
                        </div>`;
        } else if (line.type === 'function') {
            return `<div class="code-line">
                            <span class="line-number">${line.line}</span>
                            <span class="code-content"><span class="code-keyword">def</span> ${line.content.replace('def ', '')}</span>
                        </div>`;
        } else if (line.type === 'empty') {
            return `<div class="code-line">
                            <span class="line-number">${line.line}</span>
                            <span class="code-content"></span>
                        </div>`;
        } else {
            return `<div class="code-line">
                            <span class="line-number">${line.line}</span>
                            <span class="code-content">${formatCodeLine(line.content)}</span>
                        </div>`;
        }
    }).join('')}
            </div>
            
            <div class="code-options">
                ${data.blanks.map(blank =>
        blank.options.map(opt => `
                        <button class="code-option ${answers[blank.id] === opt ? 'used' : ''}" 
                                onclick="fillCodeBlank('${blank.id}', '${opt}')">
                            ${opt}
                        </button>
                    `).join('')
    ).join('')}
            </div>
            
            <div class="code-actions">
                <button class="btn btn-secondary" onclick="resetCodeExercise()">🔄 Réinitialiser</button>
                <button class="btn btn-primary" onclick="checkCodeExercise()">✓ Vérifier</button>
            </div>
            
            <div id="codeExplanation" class="exercise-answer" style="margin-top: 20px;"></div>
        </div>
    `;

    // Add click handlers to blanks
    document.querySelectorAll('.code-blank').forEach(blank => {
        blank.addEventListener('click', () => {
            const blankId = blank.dataset.blank;
            // Clear this blank
            if (codeAnswers[currentCodeExercise]) {
                delete codeAnswers[currentCodeExercise][blankId];
                renderCodeExercise();
            }
        });
    });
}

function formatCodeLine(content) {
    // Simple syntax highlighting
    return content
        .replace(/\b(def|class|if|else|for|while|in|return|import|from|not|and|or|True|False|None)\b/g,
            '<span class="code-keyword">$1</span>')
        .replace(/(#.*)/g, '<span class="code-comment">$1</span>')
        .replace(/(['"].*?['"])/g, '<span class="code-string">$1</span>');
}

function fillCodeBlank(blankId, value) {
    if (!codeAnswers[currentCodeExercise]) {
        codeAnswers[currentCodeExercise] = {};
    }
    codeAnswers[currentCodeExercise][blankId] = value;
    renderCodeExercise();
}

function resetCodeExercise() {
    codeAnswers[currentCodeExercise] = {};
    document.getElementById('codeExplanation').classList.remove('visible');
    renderCodeExercise();
}

function checkCodeExercise() {
    const data = codeData[currentCodeExercise];
    const answers = codeAnswers[currentCodeExercise] || {};

    let correct = 0;
    let total = data.blanks.length;

    data.blanks.forEach(blank => {
        if (answers[blank.id] === blank.correct) {
            correct++;
        }
    });

    const explanationEl = document.getElementById('codeExplanation');
    explanationEl.innerHTML = `
        <h4 style="margin-bottom: 12px;">${correct === total ? '🎉 Parfait!' : `${correct}/${total} correct`}</h4>
        <p><strong>Réponses correctes:</strong></p>
        <ul style="margin-left: 20px; margin-bottom: 12px;">
            ${data.blanks.map(b => `<li>${b.id}: <code>${b.correct}</code></li>`).join('')}
        </ul>
        <p><strong>Explication:</strong><br>${data.explanation}</p>
    `;
    explanationEl.classList.add('visible');
}

// Global exports for onclick handlers
window.revealSteps = revealSteps;
window.selectQuizOption = selectQuizOption;
window.fillCodeBlank = fillCodeBlank;
window.resetCodeExercise = resetCodeExercise;
window.checkCodeExercise = checkCodeExercise;
