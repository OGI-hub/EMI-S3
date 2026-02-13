// ============================================
// CCNA Exam Prep - Application Logic
// ============================================

// === STATE MANAGEMENT ===
const state = {
    currentSection: 'cours',
    quizMode: 'training', // 'training' or 'exam'
    currentQuestions: [],
    currentIndex: 0,
    answers: [],
    checked: [],
    score: 0,
    timerInterval: null,
    timeRemaining: 3600, // 60 minutes in seconds
    filterChapter: '',
    filterDiff: '',
    searchQuery: ''
};

// === LOCALSTORAGE KEYS ===
const STORAGE_KEYS = {
    stats: 'ccna_stats',
    errors: 'ccna_errors',
    chapterProgress: 'ccna_chapter_progress'
};

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    renderCours();
    renderLabs();
    renderGlossaire();
    loadStats();
    updateQCMCount();
    setupKeyboardShortcuts();
});

// === KEYBOARD SHORTCUTS ===
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (state.currentSection !== 'qcm') return;
        if (document.getElementById('qcm-container').style.display === 'none') return;

        const key = e.key;

        // 1-4 or A-D to select answer
        if (['1', '2', '3', '4'].includes(key)) {
            selectAnswer(parseInt(key) - 1);
        } else if (['a', 'b', 'c', 'd'].includes(key.toLowerCase())) {
            selectAnswer(key.toLowerCase().charCodeAt(0) - 97);
        }

        // Enter to check or next
        if (key === 'Enter') {
            if (state.checked[state.currentIndex]) {
                nextQuestion();
            } else if (state.answers[state.currentIndex] !== undefined) {
                checkAnswer();
            }
        }

        // Arrow keys for navigation
        if (key === 'ArrowRight' && state.checked[state.currentIndex]) {
            nextQuestion();
        }
        if (key === 'ArrowLeft') {
            prevQuestion();
        }
    });
}

// === NAVIGATION ===
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');

    const btn = Array.from(document.querySelectorAll('.nav-links button'))
        .find(b => b.getAttribute('onclick')?.includes(sectionId));
    if (btn) btn.classList.add('active');

    state.currentSection = sectionId;

    if (sectionId === 'stats') {
        loadStats();
    }
}

// === COURS RENDERING ===
function renderCours() {
    const container = document.getElementById('cours-content');
    if (!container || typeof chapters === 'undefined') return;

    let html = '';
    chapters.forEach(ch => {
        html += `
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <span><strong>${ch.id}</strong> - ${ch.title}</span>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        <div class="card card-chapter">
          <h3>📌 Résumé</h3>
          <p>${ch.summary}</p>
        </div>
        <div class="card">
          <h3>✓ Points clés</h3>
          <ul class="keypoints">
            ${ch.keyPoints.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        ${ch.confusions && ch.confusions.length > 0 ? `
        <div class="card card-tip">
          <h3>⚠️ Ne pas confondre</h3>
          <ul>${ch.confusions.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
        ` : ''}
        ${ch.traps && ch.traps.length > 0 ? `
        <div class="card card-trap">
          <h3>🚨 Pièges fréquents</h3>
          <ul>${ch.traps.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
        ` : ''}
      </div>
    `;
    });
    container.innerHTML = html;
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('show');

    // Close all
    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('show'));
    document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

    // Toggle current
    if (!isOpen) {
        content.classList.add('show');
        header.classList.add('active');
    }
}

// === LABS RENDERING ===
function renderLabs() {
    const container = document.getElementById('labs-content');
    if (!container || typeof labs === 'undefined') return;

    const filteredLabs = labs.filter(lab => {
        if (state.filterChapter && lab.chapter !== state.filterChapter) return false;
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            return lab.title.toLowerCase().includes(query) ||
                lab.scenario.toLowerCase().includes(query);
        }
        return true;
    });

    let html = '';
    filteredLabs.forEach(lab => {
        html += `
      <div class="lab-card">
        <span class="tag">${lab.chapter}</span>
        <h3>${lab.title}</h3>
        <div class="scenario">${lab.scenario}</div>
        ${lab.hints ? `<div class="hints">💡 Indices : ${lab.hints.join(' | ')}</div>` : ''}
        <details>
          <summary>✅ Voir la solution</summary>
          <div class="solution">${lab.solution.replace(/\\n/g, '\n')}</div>
        </details>
      </div>
    `;
    });
    container.innerHTML = html || '<p style="text-align:center;color:var(--text-muted)">Aucun exercice trouvé.</p>';
}

// === GLOSSAIRE RENDERING ===
function renderGlossaire() {
    const container = document.getElementById('glossaire-content');
    if (!container || typeof glossary === 'undefined') return;

    const filtered = glossary.filter(g => {
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            return g.term.toLowerCase().includes(query) ||
                g.def.toLowerCase().includes(query);
        }
        return true;
    });

    let html = '<div class="glossary-grid">';
    filtered.forEach(g => {
        html += `
      <div class="glossary-item">
        <div class="term">${g.term}</div>
        <div class="def">${g.def}</div>
      </div>
    `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// === QCM LOGIC ===
function getFilteredQuestions() {
    if (typeof allQCM === 'undefined') return [];

    return allQCM.filter(q => {
        // Chapter filter
        if (state.filterChapter) {
            const chapterMatch = q.ref?.includes(state.filterChapter) ||
                q.tags?.some(t => t.toLowerCase().includes(state.filterChapter.toLowerCase()));
            if (!chapterMatch) return false;
        }

        // Difficulty filter
        if (state.filterDiff && q.diff !== parseInt(state.filterDiff)) {
            return false;
        }

        // Search filter
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            return q.q.toLowerCase().includes(query) ||
                q.exp?.toLowerCase().includes(query) ||
                q.tags?.some(t => t.includes(query));
        }

        return true;
    });
}

function updateQCMCount() {
    const count = getFilteredQuestions().length;
    const countEl = document.getElementById('qcm-count');
    if (countEl) {
        countEl.textContent = `${count} questions disponibles`;
    }
}

function startQuiz(mode) {
    state.quizMode = mode;
    state.currentQuestions = getFilteredQuestions();

    if (state.currentQuestions.length === 0) {
        alert('Aucune question avec ces filtres. Modifiez vos critères.');
        return;
    }

    // Limit to 20 for training, ALL for exam
    const limit = mode === 'exam' ? state.currentQuestions.length : 20;
    state.currentQuestions = shuffleArray(state.currentQuestions).slice(0, limit);

    state.currentIndex = 0;
    state.answers = [];
    state.checked = [];
    state.score = 0;

    // Show quiz container
    document.getElementById('qcm-container').style.display = 'flex';
    document.querySelector('.qcm-controls').style.display = 'none';
    document.getElementById('qcm-info').style.display = 'none';
    document.getElementById('qcm-score').style.display = 'none';

    // Timer for exam mode
    if (mode === 'exam') {
        state.timeRemaining = 3600; // 60 minutes
        document.getElementById('qcm-timer').style.display = 'inline';
        startTimer();
    } else {
        document.getElementById('qcm-timer').style.display = 'none';
    }

    renderQuestion();
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function renderQuestion() {
    const q = state.currentQuestions[state.currentIndex];
    const total = state.currentQuestions.length;

    // Progress
    const percent = ((state.currentIndex + 1) / total) * 100;
    document.getElementById('qcm-progress').style.width = `${percent}%`;
    document.getElementById('qcm-counter').textContent = `Question ${state.currentIndex + 1} / ${total}`;

    const checked = state.checked[state.currentIndex];
    const selected = state.answers[state.currentIndex];

    // Build options
    let optionsHTML = q.o.map((opt, i) => {
        let cls = 'quiz-option';
        if (selected === i) cls += ' selected';
        if (checked) {
            if (i === q.c) cls += ' correct';
            else if (selected === i) cls += ' incorrect';
        }

        const clickAction = checked ? '' : `onclick="selectAnswer(${i})"`;
        const cursorStyle = checked ? 'cursor:default;' : '';

        return `
      <div class="${cls}" ${clickAction} style="${cursorStyle}">
        <span class="letter">${String.fromCharCode(65 + i)}</span>
        <span>${cleanOptionText(opt)}</span>
      </div>
    `;
    }).join('');

    // Explanation
    let expHTML = '';
    if (checked) {
        expHTML = `
      <div class="quiz-explanation">
        <h4>✅ Réponse : ${String.fromCharCode(65 + q.c)}</h4>
        <p>${q.exp || 'Bonne réponse !'}</p>
        ${q.trap ? `<p class="trap-info">⚠️ Piège : ${q.trap}</p>` : ''}
        ${q.ref ? `<p class="ref">📚 Référence : ${q.ref}</p>` : ''}
      </div>
    `;
    }

    // Difficulty & tags
    const diffLabel = q.diff === 1 ? '⭐ Facile' : q.diff === 2 ? '⭐⭐ Moyen' : '⭐⭐⭐ Difficile';
    const tagsHTML = q.tags ? q.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('') : '';

    document.getElementById('qcm-content').innerHTML = `
    <div style="margin-bottom:0.75rem;">
      <span class="difficulty diff-${q.diff}">${diffLabel}</span>
      ${tagsHTML}
    </div>
    <h3>${state.currentIndex + 1}. ${q.q}</h3>
    <div class="quiz-options">${optionsHTML}</div>
    ${expHTML}
  `;

    // Button states
    document.getElementById('qcm-prev').disabled = state.currentIndex === 0;

    const checkBtn = document.getElementById('qcm-check');
    checkBtn.disabled = checked || selected === undefined;
    checkBtn.style.display = checked ? 'none' : 'inline-flex';

    const nextBtn = document.getElementById('qcm-next');
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = state.currentIndex === total - 1 ? 'Terminer 🎉' : 'Suivant →';
}

function cleanOptionText(text) {
    // Remove leading letter patterns like "A) " or "A. "
    return text.replace(/^[A-D]\)\s*/, '');
}

function selectAnswer(index) {
    if (state.checked[state.currentIndex]) return;
    state.answers[state.currentIndex] = index;
    renderQuestion();
}

function checkAnswer() {
    const q = state.currentQuestions[state.currentIndex];
    state.checked[state.currentIndex] = true;

    const isCorrect = state.answers[state.currentIndex] === q.c;
    if (isCorrect) {
        state.score++;
    } else {
        // Save error for review
        saveError(q);
    }

    // Update stats
    updateStats(q, isCorrect);

    renderQuestion();
}

function nextQuestion() {
    if (state.currentIndex < state.currentQuestions.length - 1) {
        state.currentIndex++;
        renderQuestion();
    } else {
        endQuiz();
    }
}

function prevQuestion() {
    if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuestion();
    }
}

function endQuiz() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }

    const total = state.currentQuestions.length;
    const percent = Math.round((state.score / total) * 100);

    document.getElementById('qcm-container').style.display = 'none';
    document.getElementById('qcm-score').style.display = 'block';
    document.getElementById('final-score').textContent = `${state.score} / ${total}`;
    document.getElementById('score-percent').textContent = `${percent}% de réussite`;
}

function resetQuiz() {
    document.getElementById('qcm-score').style.display = 'none';
    document.querySelector('.qcm-controls').style.display = 'flex';
    document.getElementById('qcm-info').style.display = 'block';
}

// === TIMER ===
function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);

    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();

        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            alert('⏱️ Temps écoulé !');
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    document.getElementById('qcm-timer').textContent =
        `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// === FILTERS & SEARCH ===
function applyFilters() {
    state.filterChapter = document.getElementById('filter-chapter').value;
    state.filterDiff = document.getElementById('filter-diff').value;

    updateQCMCount();
    renderLabs();
}

function handleSearch() {
    state.searchQuery = document.getElementById('search-input').value;

    updateQCMCount();
    renderLabs();
    renderGlossaire();
}

// === STATS & LOCALSTORAGE ===
function getStats() {
    const stored = localStorage.getItem(STORAGE_KEYS.stats);
    return stored ? JSON.parse(stored) : {
        total: 0,
        correct: 0,
        streak: 0,
        maxStreak: 0,
        byChapter: {}
    };
}

function saveStats(stats) {
    localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(stats));
}

function updateStats(question, isCorrect) {
    const stats = getStats();

    stats.total++;
    if (isCorrect) {
        stats.correct++;
        stats.streak++;
        if (stats.streak > stats.maxStreak) {
            stats.maxStreak = stats.streak;
        }
    } else {
        stats.streak = 0;
    }

    // Update chapter stats
    const chapterId = question.ref?.match(/RT\d+/)?.[0] || 'unknown';
    if (!stats.byChapter[chapterId]) {
        stats.byChapter[chapterId] = { total: 0, correct: 0 };
    }
    stats.byChapter[chapterId].total++;
    if (isCorrect) {
        stats.byChapter[chapterId].correct++;
    }

    saveStats(stats);
}

function loadStats() {
    const stats = getStats();

    document.getElementById('stat-total').textContent = stats.total;
    document.getElementById('stat-correct').textContent = stats.correct;
    document.getElementById('stat-percent').textContent =
        stats.total > 0 ? `${Math.round((stats.correct / stats.total) * 100)}%` : '0%';
    document.getElementById('stat-streak').textContent = stats.streak;

    // Chapter progress
    const chapterContainer = document.getElementById('chapter-progress');
    if (chapterContainer) {
        let html = '';
        const chaptersList = ['RT01', 'RT02', 'RT03', 'RT04', 'RT05', 'RT06', 'RT07', 'RT08'];

        chaptersList.forEach(ch => {
            const data = stats.byChapter[ch] || { total: 0, correct: 0 };
            const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

            html += `
        <div class="chapter-bar">
          <span class="name">${ch}</span>
          <div class="bar">
            <div class="bar-fill" style="width:${percent}%"></div>
          </div>
          <span class="percent">${percent}%</span>
        </div>
      `;
        });

        chapterContainer.innerHTML = html;
    }
}

function resetStats() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes les statistiques ?')) {
        localStorage.removeItem(STORAGE_KEYS.stats);
        localStorage.removeItem(STORAGE_KEYS.errors);
        loadStats();
    }
}

// === ERROR TRACKING ===
function getErrors() {
    const stored = localStorage.getItem(STORAGE_KEYS.errors);
    return stored ? JSON.parse(stored) : [];
}

function saveError(question) {
    const errors = getErrors();

    // Avoid duplicates
    const exists = errors.some(e => e.q === question.q);
    if (!exists) {
        errors.push({
            q: question.q,
            o: question.o,
            c: question.c,
            exp: question.exp,
            trap: question.trap,
            ref: question.ref,
            tags: question.tags,
            diff: question.diff
        });
        localStorage.setItem(STORAGE_KEYS.errors, JSON.stringify(errors));
    }
}

function reviewErrors() {
    const errors = getErrors();

    if (errors.length === 0) {
        alert('Aucune erreur enregistrée. Bravo !');
        return;
    }

    state.quizMode = 'review';
    state.currentQuestions = errors;
    state.currentIndex = 0;
    state.answers = [];
    state.checked = [];
    state.score = 0;

    document.getElementById('qcm-container').style.display = 'flex';
    document.querySelector('.qcm-controls').style.display = 'none';
    document.getElementById('qcm-info').style.display = 'none';
    document.getElementById('qcm-score').style.display = 'none';
    document.getElementById('qcm-timer').style.display = 'none';

    renderQuestion();
}
