
// State Management
const quizState = {
    new: { current: 0, answers: [], checked: [], score: 0 },
    saidi: { current: 0, answers: [], checked: [], score: 0 },
    advanced: { current: 0, answers: [], checked: [], score: 0 },
    srwe: { current: 0, answers: [], checked: [], score: 0 },
    examfinal: { current: 0, answers: [], checked: [], score: 0 }
};

// Data getters
function getQuestions(type) {
    if (type === 'new') return qcmNew;
    if (type === 'advanced') return qcmAdvanced;
    if (type === 'srwe') return qcmSRWE;
    if (type === 'examfinal') return qcmExamFinal1;
    return typeof quizSaidiFull !== 'undefined' ? quizSaidiFull : quizSaidi;
}

// Navigation UI
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    // Highlight active button
    const btn = Array.from(document.querySelectorAll('.nav button')).find(b => b.getAttribute('onclick').includes(id));
    if (btn) btn.classList.add('active');
}

// Render Question Logic
function renderQuestion(type) {
    const state = quizState[type];
    const questions = getQuestions(type);
    const q = questions[state.current];
    const total = questions.length;

    // Progress Bar
    const percent = ((state.current + 1) / total) * 100;
    document.getElementById(`progress-${type}`).style.width = `${percent}%`;
    document.getElementById(`quiz-counter-${type}`).textContent = `Question ${state.current + 1} / ${total}`;

    // Check state
    const checked = state.checked[state.current];
    const selected = state.answers[state.current];

    // Options HTML
    let optionsHTML = q.o.map((opt, i) => {
        let cls = 'quiz-option';
        if (selected === i) cls += ' selected';
        if (checked) {
            if (i === q.c) cls += ' correct';
            else if (selected === i) cls += ' incorrect';
        }

        // Disable click if already checked
        const clickAction = checked ? '' : `onclick="selectAnswer('${type}', ${i})"`;
        const cursorStyle = checked ? 'cursor: default;' : '';

        return `
            <div class="${cls}" ${clickAction} style="${cursorStyle}">
                <span class="letter">${String.fromCharCode(65 + i)}</span>
                <span>${opt}</span>
            </div>
        `;
    }).join('');

    // Explanation HTML
    let expHTML = '';
    if (checked) {
        const hasDetails = q.exp || q.trap || q.concept;
        if (!hasDetails) {
            expHTML = `
                <div class="quiz-explanation show">
                    <h4>✅ Bonne réponse : ${String.fromCharCode(65 + q.c)})</h4>
                    <p><strong>${q.o[q.c]}</strong></p>
                </div>
            `;
        } else {
            expHTML = `
                <div class="quiz-explanation show">
                    <h4>✅ Réponse : ${String.fromCharCode(65 + q.c)}) ${q.o[q.c].split(') ')[1] || q.o[q.c]}</h4>
                    <p>${q.exp}</p>
                    ${q.trap ? `<p class="trap-info">⚠️ Piège : ${q.trap}</p>` : ''}
                </div>
                ${q.concept ? `
                <div class="quiz-concept show">
                    <h4>📚 Pour aller plus loin</h4>
                    <p>${q.concept}</p>
                </div>` : ''}
            `;
        }
    }

    // Injection
    document.getElementById(`quiz-content-${type}`).innerHTML = `
        <h3>${state.current + 1}. ${q.q}</h3>
        <div class="quiz-options">${optionsHTML}</div>
        ${expHTML}
    `;

    // Button States
    document.getElementById(`prev-${type}`).disabled = state.current === 0;

    const checkBtn = document.getElementById(`check-${type}`);
    // Check is disabled if already checked OR if nothing is selected
    checkBtn.disabled = checked || selected === undefined;
    checkBtn.style.display = 'inline-block';

    const nextBtn = document.getElementById(`next-${type}`);
    nextBtn.style.display = 'inline-block'; // Always visible
    nextBtn.textContent = state.current === total - 1 ? 'Terminer 🎉' : 'Suivant ➡';
}

// User Actions
function selectAnswer(type, index) {
    if (quizState[type].checked[quizState[type].current]) return; // Protected

    quizState[type].answers[quizState[type].current] = index;
    // Re-render to show selection
    renderQuestion(type);
}

function checkAnswer(type) {
    const state = quizState[type];
    const q = getQuestions(type)[state.current];

    // Mark as checked
    state.checked[state.current] = true;

    // Update score
    if (state.answers[state.current] === q.c) {
        state.score++;
    }

    renderQuestion(type);
}

function nextQuestion(type) {
    const state = quizState[type];
    const total = getQuestions(type).length;

    if (state.current < total - 1) {
        state.current++;
        renderQuestion(type);
    } else {
        // End screen
        const sectionId = type === 'new' ? 'qcm-new' : (type === 'advanced' ? 'qcm-advanced' : (type === 'srwe' ? 'qcm-srwe' : (type === 'examfinal' ? 'qcm-examfinal' : 'quiz-saidi')));
        document.querySelector(`#${sectionId} .quiz-container`).style.display = 'none';
        document.getElementById(`score-${type}`).style.display = 'block';
        document.getElementById(`final-score-${type}`).textContent = `${state.score} / ${total}`;
    }
}

function prevQuestion(type) {
    if (quizState[type].current > 0) {
        quizState[type].current--;
        renderQuestion(type);
    }
}

function resetQuiz(type) {
    const total = getQuestions(type).length;
    quizState[type] = { current: 0, answers: [], checked: [], score: 0 };

    const sectionId = type === 'new' ? 'qcm-new' : (type === 'advanced' ? 'qcm-advanced' : (type === 'srwe' ? 'qcm-srwe' : (type === 'examfinal' ? 'qcm-examfinal' : 'quiz-saidi')));
    document.querySelector(`#${sectionId} .quiz-container`).style.display = 'flex';
    document.getElementById(`score-${type}`).style.display = 'none';

    renderQuestion(type);
}

// Code Exercises Logic
function checkCode(n) {
    const answers = {
        1: {
            'c1-1': ['socket(AF_INET,SOCK_STREAM,0)', 'socket(AF_INET, SOCK_STREAM, 0)'],
            'c1-2': ['AF_INET'],
            'c1-3': ['htons(8080)'],
            'c1-4': ['INADDR_ANY', 'htonl(INADDR_ANY)'],
            'c1-5': ['listen'],
            'c1-6': ['accept']
        },
        2: {
            'c2-1': ['AF_INET'],
            'c2-2': ['htons(5000)'],
            'c2-3': ['inet_addr("127.0.0.1")', "inet_addr('127.0.0.1')"],
            'c2-4': ['connect'],
            'c2-5': ['recv']
        },
        3: {
            'c3-1': ['SOCK_DGRAM'],
            'c3-2': ['sendto']
        }
    };

    let allOk = true;
    if (answers[n]) {
        for (const [id, validArr] of Object.entries(answers[n])) {
            const el = document.getElementById(id);
            if (!el) continue;

            const userVal = el.value.trim().replace(/\s+/g, ''); // Normalize spaces
            const isCorrect = validArr.some(v => userVal.toLowerCase() === v.toLowerCase().replace(/\s+/g, ''));

            el.classList.remove('correct', 'incorrect');
            el.classList.add(isCorrect ? 'correct' : 'incorrect');
            if (!isCorrect) allOk = false;
        }
    }

    const resDiv = document.getElementById(`code-result-${n}`);
    resDiv.innerHTML = allOk
        ? '<div class="quiz-explanation show" style="border-left-color:var(--success)"><h4>✅ Bravo ! Code correct.</h4></div>'
        : '<div class="quiz-explanation show" style="border-left-color:var(--danger)"><h4>❌ Erreur</h4><p>Vérifie les champs en rouge. Pense aux structures et aux conversions (htons).</p></div>';
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderQuestion('new');
    renderQuestion('advanced'); // Init Advanced
    renderQuestion('saidi');
    if (typeof qcmSRWE !== 'undefined') renderQuestion('srwe'); // Init SRWE
    if (typeof qcmExamFinal1 !== 'undefined') renderQuestion('examfinal'); // Init Exam Final
});

// ========================
// WIRELESS MODULE FUNCTIONS
// ========================

// Current state for wireless module
const wirelessState = {
    currentTab: 'resume',
    currentFilter: 'all',
    searchQuery: ''
};

// Show wireless sub-tab
function showWirelessTab(tabName) {
    wirelessState.currentTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.wireless-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = Array.from(document.querySelectorAll('.wireless-tab')).find(t =>
        t.getAttribute('onclick').includes(tabName)
    );
    if (activeTab) activeTab.classList.add('active');

    // Update content panels
    document.querySelectorAll('.wireless-content').forEach(c => c.classList.remove('active'));
    const panel = document.getElementById(`wireless-${tabName}`);
    if (panel) panel.classList.add('active');
}

// Filter by topic
function filterWireless(topic) {
    wirelessState.currentFilter = topic;

    // Update chip buttons
    document.querySelectorAll('.filter-chips .chip').forEach(chip => chip.classList.remove('active'));
    const activeChip = Array.from(document.querySelectorAll('.filter-chips .chip')).find(c =>
        c.getAttribute('onclick').includes(topic)
    );
    if (activeChip) activeChip.classList.add('active');

    // Render the resume with the current filter
    renderWirelessResume();
}

// Search function
function searchWireless(query) {
    wirelessState.searchQuery = query.toLowerCase();
    renderWirelessResume();
}

// Toggle collapsible sections
function toggleCollapsible(element) {
    const collapsible = element.closest('.collapsible');
    if (collapsible) {
        collapsible.classList.toggle('open');
    }
}

// ========================
// RÉSUMÉ RENDERING
// ========================

function renderWirelessResume() {
    const container = document.getElementById('resume-container');
    if (!container || typeof wirelessData === 'undefined') return;

    const filter = wirelessState.currentFilter;
    const query = wirelessState.searchQuery;

    let html = '';

    wirelessData.topics.forEach(topic => {
        // Apply filter
        if (filter !== 'all' && topic.id !== filter) return;

        // Check if any content matches search query
        if (query) {
            const topicText = JSON.stringify(topic).toLowerCase();
            if (!topicText.includes(query)) return;
        }

        html += `
            <div class="topic-block" data-topic="${topic.id}">
                <h2><span class="topic-tag ${topic.id}">${topic.id.toUpperCase()}</span> ${topic.icon} ${topic.title}</h2>
        `;

        topic.sections.forEach((section, idx) => {
            // Check section content for search match
            if (query) {
                const sectionText = JSON.stringify(section).toLowerCase();
                if (!sectionText.includes(query)) return;
            }

            html += `
                <div class="collapsible${idx === 0 ? ' open' : ''}" data-topic="${topic.id}">
                    <div class="collapsible-header" onclick="toggleCollapsible(this)">
                        <h4>${section.title}</h4>
                        <span class="toggle">▼</span>
                    </div>
                    <div class="collapsible-content">
            `;

            // Content paragraph
            if (section.content) {
                html += `<p>${highlightSearch(section.content, query)}</p>`;
            }

            // Key points
            if (section.keyPoints && section.keyPoints.length > 0) {
                html += '<ul class="key-points">';
                section.keyPoints.forEach(point => {
                    html += `<li>${highlightSearch(point, query)}</li>`;
                });
                html += '</ul>';
            }

            // Tradeoffs
            if (section.tradeoffs && section.tradeoffs.length > 0) {
                html += '<div class="tradeoffs">';
                section.tradeoffs.forEach(t => {
                    html += `
                        <div class="tradeoff-item">
                            <span class="plus">✅ ${t.plus}</span>
                            <span class="arrow">→</span>
                            <span class="minus">⚠️ ${t.minus}</span>
                        </div>
                    `;
                });
                html += '</div>';
            }

            // Tables (generic handler)
            if (section.table && section.table.length > 0) {
                html += '<table class="data-table"><thead><tr>';
                const keys = Object.keys(section.table[0]);
                keys.forEach(key => {
                    html += `<th>${capitalizeFirst(key)}</th>`;
                });
                html += '</tr></thead><tbody>';
                section.table.forEach(row => {
                    html += '<tr>';
                    keys.forEach(key => {
                        html += `<td>${highlightSearch(row[key], query)}</td>`;
                    });
                    html += '</tr>';
                });
                html += '</tbody></table>';
            }

            // Traps (danger zone)
            if (section.traps && section.traps.length > 0) {
                html += '<div class="trap-box">';
                html += '<h5>⚠️ Pièges à éviter</h5><ul>';
                section.traps.forEach(trap => {
                    html += `<li>${highlightSearch(trap, query)}</li>`;
                });
                html += '</ul></div>';
            }

            html += '</div></div>'; // Close collapsible-content and collapsible
        });

        html += '</div>'; // Close topic-block
    });

    if (html === '') {
        html = '<div class="card"><p style="text-align:center;color:var(--muted);">Aucun résultat pour cette recherche.</p></div>';
    }

    container.innerHTML = html;
}

// Helper: highlight search terms
function highlightSearch(text, query) {
    if (!query || !text) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Helper: escape regex special chars
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper: capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize wireless module on page load
document.addEventListener('DOMContentLoaded', () => {
    // Render resume if on wireless section
    if (typeof wirelessData !== 'undefined') {
        renderWirelessResume();
    }
    // Initialize flashcard system
    if (typeof wirelessFlashcards !== 'undefined') {
        initFlashcardSystem();
    }
});

// ========================
// FLASHCARD SYSTEM (LEITNER)
// ========================

// Leitner box intervals (in days)
const LEITNER_INTERVALS = {
    1: 1,   // Box 1: review daily
    2: 2,   // Box 2: every 2 days
    3: 4,   // Box 3: every 4 days
    4: 8,   // Box 4: every 8 days
    5: 16   // Box 5: mastered (every 16 days)
};

// Flashcard session state
const flashcardSession = {
    cards: [],         // Cards to review in this session
    currentIndex: 0,
    correctCount: 0,
    wrongCount: 0,
    isActive: false
};

// Initialize flashcard system
function initFlashcardSystem() {
    loadFlashcardProgress();
    updateLeitnerStats();
    updateDueCount();
}

// Load progress from localStorage
function loadFlashcardProgress() {
    const saved = localStorage.getItem('wireless_flashcard_progress');
    if (!saved) {
        // Initialize all cards in box 1
        const progress = {};
        wirelessFlashcards.forEach(card => {
            progress[card.id] = {
                box: 1,
                nextReview: new Date().toISOString().split('T')[0], // Today
                correct: 0,
                wrong: 0
            };
        });
        localStorage.setItem('wireless_flashcard_progress', JSON.stringify(progress));
    }
}

// Get progress for a card
function getCardProgress(cardId) {
    const progress = JSON.parse(localStorage.getItem('wireless_flashcard_progress') || '{}');
    return progress[cardId] || { box: 1, nextReview: new Date().toISOString().split('T')[0], correct: 0, wrong: 0 };
}

// Save progress for a card
function saveCardProgress(cardId, data) {
    const progress = JSON.parse(localStorage.getItem('wireless_flashcard_progress') || '{}');
    progress[cardId] = data;
    localStorage.setItem('wireless_flashcard_progress', JSON.stringify(progress));
}

// Update Leitner box stats display
function updateLeitnerStats() {
    const progress = JSON.parse(localStorage.getItem('wireless_flashcard_progress') || '{}');
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    Object.values(progress).forEach(p => {
        if (counts[p.box] !== undefined) counts[p.box]++;
    });

    for (let i = 1; i <= 5; i++) {
        const el = document.getElementById(`box-${i}-count`);
        if (el) el.textContent = counts[i];
    }
}

// Get cards due for review today
function getDueCards() {
    const today = new Date().toISOString().split('T')[0];
    const progress = JSON.parse(localStorage.getItem('wireless_flashcard_progress') || '{}');

    return wirelessFlashcards.filter(card => {
        const p = progress[card.id];
        return p && p.nextReview <= today;
    });
}

// Update due count display
function updateDueCount() {
    const dueCards = getDueCards();
    const el = document.getElementById('due-count');
    if (el) el.textContent = dueCards.length;
}

// Start flashcard session
function startFlashcards() {
    const dueCards = getDueCards();

    if (dueCards.length === 0) {
        // No cards due, review all cards
        flashcardSession.cards = [...wirelessFlashcards];
    } else {
        flashcardSession.cards = dueCards;
    }

    // Shuffle cards
    flashcardSession.cards = shuffleArray(flashcardSession.cards);
    flashcardSession.currentIndex = 0;
    flashcardSession.correctCount = 0;
    flashcardSession.wrongCount = 0;
    flashcardSession.isActive = true;

    // Update UI
    document.getElementById('fc-total').textContent = flashcardSession.cards.length;
    document.getElementById('fc-summary').style.display = 'none';
    document.getElementById('flashcard-container').style.display = 'block';
    document.querySelector('.flashcard-controls').style.display = 'block';

    // Enable buttons
    document.getElementById('fc-start').style.display = 'none';
    document.getElementById('fc-wrong').disabled = false;
    document.getElementById('fc-correct').disabled = false;

    showCurrentFlashcard();
}

// Show current flashcard
function showCurrentFlashcard() {
    const card = flashcardSession.cards[flashcardSession.currentIndex];
    if (!card) return endFlashcardSession();

    // Reset flip state
    document.getElementById('current-flashcard').classList.remove('flipped');

    // Update content
    document.getElementById('fc-topic').textContent = card.topic.toUpperCase();
    document.getElementById('fc-topic').className = `flashcard-topic topic-tag ${card.topic}`;
    document.getElementById('fc-question').textContent = card.front;
    document.getElementById('fc-answer').innerHTML = card.back.replace(/\n/g, '<br>');

    // Update progress
    document.getElementById('fc-current').textContent = flashcardSession.currentIndex + 1;
}

// Flip flashcard
function flipFlashcard() {
    if (!flashcardSession.isActive) return;
    document.getElementById('current-flashcard').classList.toggle('flipped');
}

// Answer flashcard (correct or wrong)
function answerFlashcard(correct) {
    const card = flashcardSession.cards[flashcardSession.currentIndex];
    if (!card) return;

    const cardProgress = getCardProgress(card.id);
    const today = new Date();

    if (correct) {
        flashcardSession.correctCount++;
        cardProgress.correct++;
        // Move up a box (max 5)
        cardProgress.box = Math.min(cardProgress.box + 1, 5);
    } else {
        flashcardSession.wrongCount++;
        cardProgress.wrong++;
        // Move back to box 1
        cardProgress.box = 1;
    }

    // Calculate next review date based on new box
    const intervalDays = LEITNER_INTERVALS[cardProgress.box];
    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + intervalDays);
    cardProgress.nextReview = nextDate.toISOString().split('T')[0];

    // Save progress
    saveCardProgress(card.id, cardProgress);

    // Next card
    flashcardSession.currentIndex++;

    if (flashcardSession.currentIndex >= flashcardSession.cards.length) {
        endFlashcardSession();
    } else {
        showCurrentFlashcard();
    }

    // Update stats
    updateLeitnerStats();
    updateDueCount();
}

// End flashcard session
function endFlashcardSession() {
    flashcardSession.isActive = false;

    // Show summary
    document.getElementById('fc-summary').style.display = 'block';
    document.getElementById('flashcard-container').style.display = 'none';
    document.getElementById('fc-start').style.display = 'inline-block';
    document.getElementById('fc-wrong').disabled = true;
    document.getElementById('fc-correct').disabled = true;

    const total = flashcardSession.correctCount + flashcardSession.wrongCount;
    const accuracy = total > 0 ? Math.round((flashcardSession.correctCount / total) * 100) : 0;

    document.getElementById('summary-correct').textContent = flashcardSession.correctCount;
    document.getElementById('summary-wrong').textContent = flashcardSession.wrongCount;
    document.getElementById('summary-accuracy').textContent = accuracy + '%';
}

// Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ========================
// WIRELESS QCM SYSTEM
// ========================

const wirelessQcmState = {
    current: 0,
    answers: [],
    checked: [],
    score: 0,
    wrongByTopic: {}
};

// Initialize QCM on page load
function initWirelessQcm() {
    if (typeof wirelessQcmHard === 'undefined') return;
    loadWirelessQcmProgress();
    renderWirelessQcm();
}

// Load QCM progress from localStorage
function loadWirelessQcmProgress() {
    const saved = localStorage.getItem('wireless_qcm_progress');
    if (saved) {
        const data = JSON.parse(saved);
        wirelessQcmState.wrongByTopic = data.wrongByTopic || {};
    }
}

// Save QCM progress to localStorage
function saveWirelessQcmProgress() {
    const data = {
        wrongByTopic: wirelessQcmState.wrongByTopic,
        lastPlayed: new Date().toISOString()
    };
    localStorage.setItem('wireless_qcm_progress', JSON.stringify(data));
}

// Render current QCM question
function renderWirelessQcm() {
    if (typeof wirelessQcmHard === 'undefined') return;

    const state = wirelessQcmState;
    const questions = wirelessQcmHard;
    const q = questions[state.current];
    const total = questions.length;

    if (!q) return;

    // Progress bar
    const percent = ((state.current + 1) / total) * 100;
    document.getElementById('wqcm-progress').style.width = `${percent}%`;
    document.getElementById('wqcm-counter').textContent = `Question ${state.current + 1} / ${total}`;

    // Check state
    const checked = state.checked[state.current];
    const selected = state.answers[state.current];

    // Question
    document.getElementById('wqcm-question').innerHTML = `
        <span class="topic-tag ${q.topic}">${q.topic.toUpperCase()}</span>
        ${q.q}
    `;

    // Options HTML
    let optionsHTML = q.o.map((opt, i) => {
        let cls = 'quiz-option';
        if (selected === i) cls += ' selected';
        if (checked) {
            if (i === q.c) cls += ' correct';
            else if (selected === i) cls += ' incorrect';
        }

        const clickAction = checked ? '' : `onclick="selectWirelessQcmAnswer(${i})"`;
        const cursorStyle = checked ? 'cursor: default;' : '';

        return `
            <div class="${cls}" ${clickAction} style="${cursorStyle}">
                <span class="letter">${String.fromCharCode(65 + i)}</span>
                <span>${opt}</span>
            </div>
        `;
    }).join('');

    document.getElementById('wqcm-options').innerHTML = optionsHTML;

    // Explanation
    const expEl = document.getElementById('wqcm-explanation');
    const trapEl = document.getElementById('wqcm-trap');

    if (checked) {
        expEl.innerHTML = `
            <h4>✅ Réponse : ${String.fromCharCode(65 + q.c)}) ${q.o[q.c]}</h4>
            <p>${q.exp}</p>
            ${q.concept ? `<p style="color:var(--accent);margin-top:0.5rem;">📚 ${q.concept}</p>` : ''}
        `;
        expEl.classList.add('show');

        if (q.trap) {
            trapEl.innerHTML = `<p>⚠️ <strong>Piège :</strong> ${q.trap}</p>`;
            trapEl.classList.add('show');
        } else {
            trapEl.classList.remove('show');
        }
    } else {
        expEl.classList.remove('show');
        trapEl.classList.remove('show');
    }

    // Button states
    document.getElementById('wqcm-prev').disabled = state.current === 0;

    const checkBtn = document.getElementById('wqcm-check');
    checkBtn.disabled = checked || selected === undefined;
    checkBtn.style.display = 'inline-block';

    const nextBtn = document.getElementById('wqcm-next');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = state.current === total - 1 ? 'Terminer 🎉' : 'Suivant ➡';
}

// Select answer
function selectWirelessQcmAnswer(index) {
    if (wirelessQcmState.checked[wirelessQcmState.current]) return;
    wirelessQcmState.answers[wirelessQcmState.current] = index;
    renderWirelessQcm();
}

// Check answer
function checkWirelessQcm() {
    const state = wirelessQcmState;
    const q = wirelessQcmHard[state.current];

    state.checked[state.current] = true;

    if (state.answers[state.current] === q.c) {
        state.score++;
    } else {
        // Track wrong answer by topic
        state.wrongByTopic[q.topic] = (state.wrongByTopic[q.topic] || 0) + 1;
        saveWirelessQcmProgress();
    }

    renderWirelessQcm();
}

// Next question
function nextWirelessQcm() {
    const state = wirelessQcmState;
    const total = wirelessQcmHard.length;

    if (state.current < total - 1) {
        state.current++;
        renderWirelessQcm();
    } else {
        // End screen
        document.getElementById('wireless-qcm-container').style.display = 'none';
        document.getElementById('wqcm-score').style.display = 'block';
        document.getElementById('wqcm-final-score').textContent = `${state.score} / ${total}`;

        // Show weak topics
        const weakTopicsEl = document.getElementById('wqcm-weak-topics');
        const sortedTopics = Object.entries(state.wrongByTopic)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);

        if (sortedTopics.length > 0) {
            weakTopicsEl.innerHTML = `
                <h4 style="margin-top:1rem;">📉 Sujets à revoir :</h4>
                <div class="weak-list">
                    ${sortedTopics.map(([topic, count]) => `
                        <span class="chip topic-tag ${topic}">${topic.toUpperCase()} (${count} erreurs)</span>
                    `).join('')}
                </div>
            `;
        }
    }
}

// Previous question
function prevWirelessQcm() {
    if (wirelessQcmState.current > 0) {
        wirelessQcmState.current--;
        renderWirelessQcm();
    }
}

// Reset QCM
function resetWirelessQcm() {
    wirelessQcmState.current = 0;
    wirelessQcmState.answers = [];
    wirelessQcmState.checked = [];
    wirelessQcmState.score = 0;
    // Keep wrongByTopic for tracking

    document.getElementById('wireless-qcm-container').style.display = 'flex';
    document.getElementById('wqcm-score').style.display = 'none';

    renderWirelessQcm();
}

// Add QCM init to DOMContentLoaded
const originalDOMContentLoaded = document.addEventListener;
document.addEventListener('DOMContentLoaded', () => {
    if (typeof wirelessQcmHard !== 'undefined') {
        initWirelessQcm();
    }
});


// ============================================
// EXAMEN BLANC SYSTEM
// ============================================

const examState = {
    mode: null,           // 'timed' or 'practice'
    currentIndex: 0,
    answers: [],          // user's written answers
    startTime: null,
    timerInterval: null,
    timeRemaining: 45 * 60, // 45 minutes in seconds
    questions: []         // Will be populated from wirelessExamBlanc
};

// Type labels for display
const typeLabels = {
    definition: "Définition",
    fill: "Compléter",
    list: "Liste",
    schema: "Schéma",
    comparison: "Comparaison",
    norm: "Norme IEEE",
    analysis: "Analyse"
};

// Start exam in specified mode
function startExam(mode) {
    if (typeof wirelessExamBlanc === 'undefined') {
        console.error('wirelessExamBlanc data not loaded');
        return;
    }

    examState.mode = mode;
    examState.currentIndex = 0;
    examState.questions = [...wirelessExamBlanc];
    examState.answers = new Array(examState.questions.length).fill('');
    examState.startTime = Date.now();
    examState.timeRemaining = 45 * 60;

    // Show exam screen
    document.getElementById('exam-start-screen').style.display = 'none';
    document.getElementById('exam-in-progress').style.display = 'block';
    document.getElementById('exam-complete').style.display = 'none';
    document.getElementById('exam-corrige-full').style.display = 'none';

    // Setup timer visibility
    const timerEl = document.getElementById('exam-timer');
    if (mode === 'timed') {
        timerEl.style.display = 'block';
        startExamTimer();
    } else {
        timerEl.style.display = 'none';
        document.getElementById('exam-show-answer-btn').style.display = 'inline-block';
    }

    // Update total count
    document.getElementById('exam-total').textContent = examState.questions.length;

    renderExamQuestion();
}

// Start countdown timer
function startExamTimer() {
    const timerEl = document.getElementById('exam-timer');

    examState.timerInterval = setInterval(() => {
        examState.timeRemaining--;

        const mins = Math.floor(examState.timeRemaining / 60);
        const secs = examState.timeRemaining % 60;
        timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        // Warning at 5 minutes
        if (examState.timeRemaining <= 5 * 60) {
            timerEl.classList.add('warning');
        }

        // Time's up
        if (examState.timeRemaining <= 0) {
            clearInterval(examState.timerInterval);
            endExam();
        }
    }, 1000);
}

// Render current exam question
function renderExamQuestion() {
    const q = examState.questions[examState.currentIndex];

    // Update question number and progress
    document.getElementById('exam-question-num').textContent = examState.currentIndex + 1;
    const progress = ((examState.currentIndex + 1) / examState.questions.length) * 100;
    document.getElementById('exam-progress-fill').style.width = progress + '%';

    // Update question type badge
    document.getElementById('exam-q-type').textContent = typeLabels[q.type] || q.type;

    // Update prompt
    document.getElementById('exam-prompt').textContent = `${examState.currentIndex + 1}. ${q.prompt}`;

    // Restore saved answer
    const answerInput = document.getElementById('exam-answer');
    answerInput.value = examState.answers[examState.currentIndex] || '';

    // Hide inline corrigé
    document.getElementById('exam-corrige-inline').style.display = 'none';

    // Show/hide answer button based on mode
    if (examState.mode === 'practice') {
        document.getElementById('exam-show-answer-btn').style.display = 'inline-block';
    } else {
        document.getElementById('exam-show-answer-btn').style.display = 'none';
    }
}

// Save current answer before navigating
function saveCurrentAnswer() {
    const answerInput = document.getElementById('exam-answer');
    examState.answers[examState.currentIndex] = answerInput.value;
}

// Navigate to next question
function nextExamQuestion() {
    saveCurrentAnswer();

    if (examState.currentIndex < examState.questions.length - 1) {
        examState.currentIndex++;
        renderExamQuestion();
    } else {
        endExam();
    }
}

// Navigate to previous question
function prevExamQuestion() {
    saveCurrentAnswer();

    if (examState.currentIndex > 0) {
        examState.currentIndex--;
        renderExamQuestion();
    }
}

// Show answer in practice mode
function showExamAnswer() {
    const q = examState.questions[examState.currentIndex];
    const corrigeEl = document.getElementById('exam-corrige-inline');
    const corrigeText = document.getElementById('exam-corrige-text');

    corrigeText.textContent = q.corrige;
    corrigeEl.style.display = 'block';
}

// End exam
function endExam() {
    saveCurrentAnswer();

    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
        examState.timerInterval = null;
    }

    // Calculate time taken
    const timeTaken = Date.now() - examState.startTime;
    const mins = Math.floor(timeTaken / 60000);
    const secs = Math.floor((timeTaken % 60000) / 1000);

    document.getElementById('exam-time-taken').textContent =
        `⏱️ Temps: ${mins} min ${secs} sec`;

    // Show complete screen
    document.getElementById('exam-in-progress').style.display = 'none';
    document.getElementById('exam-complete').style.display = 'block';
}

// Show full corrigé
function showExamCorrige() {
    const questions = typeof wirelessExamBlanc !== 'undefined' ? wirelessExamBlanc : [];

    document.getElementById('exam-start-screen').style.display = 'none';
    document.getElementById('exam-in-progress').style.display = 'none';
    document.getElementById('exam-complete').style.display = 'none';
    document.getElementById('exam-corrige-full').style.display = 'block';

    const container = document.getElementById('corrige-content');
    container.innerHTML = questions.map((q, i) => `
        <div class="corrige-item">
            <span class="q-num">${i + 1}</span>
            <span class="q-type">${typeLabels[q.type] || q.type}</span>
            <div class="q-prompt">${q.prompt}</div>
            <div class="q-answer">${q.corrige}</div>
        </div>
    `).join('');
}

// Back to exam start screen
function backToExamStart() {
    document.getElementById('exam-corrige-full').style.display = 'none';
    document.getElementById('exam-complete').style.display = 'none';
    document.getElementById('exam-in-progress').style.display = 'none';
    document.getElementById('exam-start-screen').style.display = 'block';
}

// Reset exam
function resetExam() {
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
        examState.timerInterval = null;
    }

    examState.mode = null;
    examState.currentIndex = 0;
    examState.answers = [];
    examState.startTime = null;
    examState.timeRemaining = 45 * 60;

    backToExamStart();
}

// Print corrigé
function printCorrige() {
    window.print();
}

// Print exam (same as corrigé for now)
function printExam() {
    showExamCorrige();
    setTimeout(() => window.print(), 100);
}

// ============================================
// LAN MODULE — RÉSEAUX LOCAUX
// ============================================

// LAN State
let lanCurrentFilter = 'all';
let lanFlashcardState = {
    progress: {},
    currentSession: [],
    sessionIndex: 0,
    sessionCorrect: 0,
    sessionWrong: 0,
    isFlipped: false
};
let lanQcmState = {
    current: 0,
    answers: [],
    checked: [],
    score: 0,
    weakTopics: {}
};
let lanExamState = {
    mode: null,
    currentIndex: 0,
    answers: [],
    questions: [],
    startTime: null,
    timeRemaining: 30 * 60,
    timerInterval: null
};

// Initialize LAN on first load
function initLan() {
    // Load flashcard progress from localStorage
    const saved = localStorage.getItem('lan_flashcard_progress');
    if (saved) {
        lanFlashcardState.progress = JSON.parse(saved);
    } else {
        // Initialize all cards in box 1
        lanFlashcards.forEach(card => {
            lanFlashcardState.progress[card.id] = { box: 1, lastReview: null };
        });
    }
    renderLanResume();
    updateLanLeitnerStats();
}

// Tab Navigation
function showLanTab(tabId) {
    document.querySelectorAll('.lan-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.lan-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('lan-' + tabId).classList.add('active');
    document.querySelector(`.lan-tab[onclick*="${tabId}"]`).classList.add('active');

    // Show/hide filters based on tab
    const filters = document.getElementById('lan-filters');
    const search = document.querySelector('#lan .search-bar');
    if (tabId === 'resume') {
        filters.style.display = 'flex';
        search.style.display = 'block';
    } else {
        filters.style.display = 'none';
        search.style.display = 'none';
    }

    if (tabId === 'flashcards') updateLanLeitnerStats();
    if (tabId === 'qcm') renderLanQcm();
}

// Filter
function filterLan(topic) {
    lanCurrentFilter = topic;
    document.querySelectorAll('#lan-filters .chip').forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');
    renderLanResume();
}

// Search
function searchLan(query) {
    const container = document.getElementById('lan-resume-container');
    const lowerQuery = query.toLowerCase();
    container.querySelectorAll('.topic-block').forEach(block => {
        const text = block.textContent.toLowerCase();
        block.style.display = text.includes(lowerQuery) ? 'block' : 'none';
    });
}

// Render Resume
function renderLanResume() {
    const container = document.getElementById('lan-resume-container');
    let html = '';

    const topics = lanCurrentFilter === 'all'
        ? lanData.topics
        : lanData.topics.filter(t => t.id === lanCurrentFilter);

    topics.forEach(topic => {
        html += `<div class="topic-block collapsible" data-topic="${topic.id}">
            <div class="collapsible-header" onclick="this.parentElement.classList.toggle('open')">
                <span>${topic.icon} ${topic.title}</span>
                <span class="chevron">▼</span>
            </div>
            <div class="collapsible-content">`;

        topic.sections.forEach(section => {
            html += `<div class="topic-section">
                <h4>${section.title}</h4>`;

            if (section.content) {
                html += `<p>${section.content}</p>`;
            }

            if (section.keyPoints) {
                html += `<ul class="key-points">`;
                section.keyPoints.forEach(point => {
                    html += `<li>${point}</li>`;
                });
                html += `</ul>`;
            }

            if (section.table) {
                html += renderLanTable(section.table);
            }

            if (section.traps) {
                html += `<div class="trap-box">⚠️ <strong>Pièges :</strong><ul>`;
                section.traps.forEach(trap => {
                    html += `<li>${trap}</li>`;
                });
                html += `</ul></div>`;
            }

            html += `</div>`;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
}

// Generic table renderer for LAN topics
function renderLanTable(tableData) {
    if (!tableData || tableData.length === 0) return '';
    const keys = Object.keys(tableData[0]);
    let html = `<table class="data-table"><thead><tr>`;
    keys.forEach(key => {
        html += `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`;
    });
    html += `</tr></thead><tbody>`;
    tableData.forEach(row => {
        html += `<tr>`;
        keys.forEach(key => {
            html += `<td>${row[key]}</td>`;
        });
        html += `</tr>`;
    });
    html += `</tbody></table>`;
    return html;
}

// ============ LAN Flashcards ============
function updateLanLeitnerStats() {
    const stats = [0, 0, 0, 0, 0];
    let due = 0;
    const now = Date.now();

    Object.values(lanFlashcardState.progress).forEach(p => {
        stats[p.box - 1]++;
        const interval = [0, 1, 3, 7, 14][p.box - 1] * 86400000;
        if (!p.lastReview || (now - p.lastReview) >= interval) due++;
    });

    document.querySelectorAll('#lan-leitner-stats .leitner-box').forEach((box, i) => {
        box.querySelector('.box-count').textContent = stats[i];
    });
    document.getElementById('lan-due-count').textContent = due;
}

function startLanFlashcards() {
    const now = Date.now();
    lanFlashcardState.currentSession = lanFlashcards.filter(card => {
        const p = lanFlashcardState.progress[card.id];
        if (!p) return true;
        const interval = [0, 1, 3, 7, 14][p.box - 1] * 86400000;
        return !p.lastReview || (now - p.lastReview) >= interval;
    });

    if (lanFlashcardState.currentSession.length === 0) {
        alert('🎉 Toutes les cartes sont à jour ! Revenez plus tard.');
        return;
    }

    lanFlashcardState.sessionIndex = 0;
    lanFlashcardState.sessionCorrect = 0;
    lanFlashcardState.sessionWrong = 0;
    lanFlashcardState.isFlipped = false;

    document.getElementById('lan-fc-start').style.display = 'none';
    document.getElementById('lan-fc-wrong').style.display = 'inline-block';
    document.getElementById('lan-fc-right').style.display = 'inline-block';
    document.getElementById('lan-fc-summary').style.display = 'none';

    renderLanFlashcard();
}

function renderLanFlashcard() {
    const card = lanFlashcardState.currentSession[lanFlashcardState.sessionIndex];
    if (!card) {
        endLanFlashcardSession();
        return;
    }

    document.getElementById('lan-fc-topic').textContent = card.topic.toUpperCase();
    document.getElementById('lan-fc-question').textContent = card.front;
    document.getElementById('lan-fc-answer').textContent = card.back.replace(/\\n/g, '\n');
    document.getElementById('lan-flashcard').classList.remove('flipped');
    lanFlashcardState.isFlipped = false;
}

function flipLanFlashcard() {
    document.getElementById('lan-flashcard').classList.toggle('flipped');
    lanFlashcardState.isFlipped = !lanFlashcardState.isFlipped;
}

function answerLanFlashcard(correct) {
    const card = lanFlashcardState.currentSession[lanFlashcardState.sessionIndex];
    const progress = lanFlashcardState.progress[card.id] || { box: 1, lastReview: null };

    if (correct) {
        lanFlashcardState.sessionCorrect++;
        progress.box = Math.min(5, progress.box + 1);
    } else {
        lanFlashcardState.sessionWrong++;
        progress.box = 1;
    }
    progress.lastReview = Date.now();
    lanFlashcardState.progress[card.id] = progress;

    localStorage.setItem('lan_flashcard_progress', JSON.stringify(lanFlashcardState.progress));

    lanFlashcardState.sessionIndex++;
    renderLanFlashcard();
    updateLanLeitnerStats();
}

function endLanFlashcardSession() {
    document.getElementById('lan-fc-start').style.display = 'inline-block';
    document.getElementById('lan-fc-wrong').style.display = 'none';
    document.getElementById('lan-fc-right').style.display = 'none';
    document.getElementById('lan-fc-summary').style.display = 'block';

    const total = lanFlashcardState.sessionCorrect + lanFlashcardState.sessionWrong;
    const accuracy = total > 0 ? Math.round((lanFlashcardState.sessionCorrect / total) * 100) : 0;

    document.getElementById('lan-fc-correct').textContent = lanFlashcardState.sessionCorrect;
    document.getElementById('lan-fc-wrong-count').textContent = lanFlashcardState.sessionWrong;
    document.getElementById('lan-fc-accuracy').textContent = accuracy + '%';
}

// ============ LAN QCM ============
function renderLanQcm() {
    const q = lanQcmHard[lanQcmState.current];
    if (!q) return;

    const total = lanQcmHard.length;
    const percent = ((lanQcmState.current + 1) / total) * 100;

    document.getElementById('lan-qcm-progress').style.width = percent + '%';
    document.getElementById('lan-qcm-counter').textContent = `${lanQcmState.current + 1} / ${total}`;
    document.getElementById('lan-qcm-topic').textContent = q.topic.toUpperCase();
    document.getElementById('lan-qcm-topic').className = 'topic-tag ' + q.topic;
    document.getElementById('lan-qcm-text').textContent = q.q;

    const checked = lanQcmState.checked[lanQcmState.current];
    const selected = lanQcmState.answers[lanQcmState.current];

    let optionsHTML = q.o.map((opt, i) => {
        let cls = 'quiz-option';
        if (selected === i) cls += ' selected';
        if (checked) {
            if (i === q.c) cls += ' correct';
            else if (selected === i) cls += ' incorrect';
        }
        return `<div class="${cls}" onclick="selectLanQcmOption(${i})">${opt}</div>`;
    }).join('');

    document.getElementById('lan-qcm-options').innerHTML = optionsHTML;

    const expDiv = document.getElementById('lan-qcm-explanation');
    const trapDiv = document.getElementById('lan-qcm-trap');

    if (checked) {
        expDiv.innerHTML = `<strong>📖 Explication :</strong> ${q.exp}`;
        expDiv.style.display = 'block';
        trapDiv.innerHTML = `<strong>⚠️ Piège :</strong> ${q.trap}`;
        trapDiv.style.display = 'block';
    } else {
        expDiv.style.display = 'none';
        trapDiv.style.display = 'none';
    }
}

function selectLanQcmOption(index) {
    if (lanQcmState.checked[lanQcmState.current]) return;
    lanQcmState.answers[lanQcmState.current] = index;
    renderLanQcm();
}

function checkLanQcm() {
    if (lanQcmState.answers[lanQcmState.current] === undefined) return;
    if (lanQcmState.checked[lanQcmState.current]) return;

    lanQcmState.checked[lanQcmState.current] = true;
    const q = lanQcmHard[lanQcmState.current];

    if (lanQcmState.answers[lanQcmState.current] === q.c) {
        lanQcmState.score++;
    } else {
        lanQcmState.weakTopics[q.topic] = (lanQcmState.weakTopics[q.topic] || 0) + 1;
    }

    renderLanQcm();

    // Check if quiz complete
    if (lanQcmState.current === lanQcmHard.length - 1) {
        setTimeout(() => {
            document.getElementById('lan-qcm-container').style.display = 'none';
            document.getElementById('lan-qcm-score').style.display = 'block';
            document.getElementById('lan-final-score').textContent = lanQcmState.score;
            document.getElementById('lan-total-questions').textContent = lanQcmHard.length;

            const weakList = document.getElementById('lan-weak-list');
            const weakTopics = Object.entries(lanQcmState.weakTopics).sort((a, b) => b[1] - a[1]);
            if (weakTopics.length > 0) {
                document.getElementById('lan-weak-topics').style.display = 'block';
                weakList.innerHTML = weakTopics.map(([topic, count]) =>
                    `<li>${topic} (${count} erreur${count > 1 ? 's' : ''})</li>`
                ).join('');
            }
        }, 1000);
    }
}

function nextLanQcm() {
    if (lanQcmState.current < lanQcmHard.length - 1) {
        lanQcmState.current++;
        renderLanQcm();
    }
}

function prevLanQcm() {
    if (lanQcmState.current > 0) {
        lanQcmState.current--;
        renderLanQcm();
    }
}

function resetLanQcm() {
    lanQcmState = { current: 0, answers: [], checked: [], score: 0, weakTopics: {} };
    document.getElementById('lan-qcm-container').style.display = 'block';
    document.getElementById('lan-qcm-score').style.display = 'none';
    renderLanQcm();
}

// ============ LAN Exam ============
function getSelectedLanExam() {
    const select = document.getElementById('lan-exam-select');
    const value = select ? select.value : 'lan';
    if (value === 'predit1') return lanExamPredit1;
    if (value === 'predit2') return lanExamPredit2;
    return lanExamBlanc;
}

function getSelectedLanExamName() {
    const select = document.getElementById('lan-exam-select');
    const value = select ? select.value : 'lan';
    if (value === 'predit1') return 'Examen Prédit #1';
    if (value === 'predit2') return 'Examen Prédit #2';
    return 'Examen LAN';
}

function startLanExam(mode) {
    const selectedExam = getSelectedLanExam();
    lanExamState.mode = mode;
    lanExamState.questions = [...selectedExam];
    lanExamState.answers = new Array(lanExamState.questions.length).fill('');
    lanExamState.currentIndex = 0;
    lanExamState.startTime = Date.now();
    // Time based on number of questions: ~1.5 min per question
    lanExamState.timeRemaining = Math.round(lanExamState.questions.length * 1.5 * 60);

    document.getElementById('lan-exam-start-screen').style.display = 'none';
    document.getElementById('lan-exam-in-progress').style.display = 'block';
    document.getElementById('lan-exam-complete').style.display = 'none';
    document.getElementById('lan-exam-corrige-full').style.display = 'none';
    document.getElementById('lan-exam-total').textContent = lanExamState.questions.length;

    if (mode === 'timed') {
        document.getElementById('lan-exam-timer').style.display = 'block';
        document.getElementById('lan-exam-show-answer-btn').style.display = 'none';
        startLanExamTimer();
    } else {
        document.getElementById('lan-exam-timer').style.display = 'none';
        document.getElementById('lan-exam-show-answer-btn').style.display = 'inline-block';
    }

    renderLanExamQuestion();
}

function startLanExamTimer() {
    lanExamState.timerInterval = setInterval(() => {
        lanExamState.timeRemaining--;
        const mins = Math.floor(lanExamState.timeRemaining / 60);
        const secs = lanExamState.timeRemaining % 60;
        document.getElementById('lan-exam-timer').textContent =
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (lanExamState.timeRemaining <= 0) {
            endLanExam();
        }
    }, 1000);
}

function renderLanExamQuestion() {
    const q = lanExamState.questions[lanExamState.currentIndex];
    const total = lanExamState.questions.length;

    document.getElementById('lan-exam-question-num').textContent = lanExamState.currentIndex + 1;
    document.getElementById('lan-exam-progress-fill').style.width = ((lanExamState.currentIndex + 1) / total * 100) + '%';
    document.getElementById('lan-exam-q-type').textContent = q.type;
    document.getElementById('lan-exam-prompt').textContent = q.prompt;
    document.getElementById('lan-exam-answer').value = lanExamState.answers[lanExamState.currentIndex] || '';
    document.getElementById('lan-exam-corrige-inline').style.display = 'none';
}

function saveLanCurrentAnswer() {
    lanExamState.answers[lanExamState.currentIndex] = document.getElementById('lan-exam-answer').value;
}

function nextLanExamQuestion() {
    saveLanCurrentAnswer();
    if (lanExamState.currentIndex < lanExamState.questions.length - 1) {
        lanExamState.currentIndex++;
        renderLanExamQuestion();
    } else {
        endLanExam();
    }
}

function prevLanExamQuestion() {
    saveLanCurrentAnswer();
    if (lanExamState.currentIndex > 0) {
        lanExamState.currentIndex--;
        renderLanExamQuestion();
    }
}

function showLanExamAnswer() {
    const q = lanExamState.questions[lanExamState.currentIndex];
    document.getElementById('lan-exam-corrige-text').textContent = q.corrige.replace(/\\n/g, '\n');
    document.getElementById('lan-exam-corrige-inline').style.display = 'block';
}

function endLanExam() {
    saveLanCurrentAnswer();
    if (lanExamState.timerInterval) {
        clearInterval(lanExamState.timerInterval);
    }

    const elapsed = Math.floor((Date.now() - lanExamState.startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;

    document.getElementById('lan-exam-in-progress').style.display = 'none';
    document.getElementById('lan-exam-complete').style.display = 'block';
    document.getElementById('lan-exam-time-taken').textContent = `⏱️ Temps: ${mins}min ${secs}s`;
}

function showLanExamCorrige() {
    const selectedExam = getSelectedLanExam();
    const examName = getSelectedLanExamName();

    document.getElementById('lan-exam-start-screen').style.display = 'none';
    document.getElementById('lan-exam-in-progress').style.display = 'none';
    document.getElementById('lan-exam-complete').style.display = 'none';
    document.getElementById('lan-exam-corrige-full').style.display = 'block';

    let html = `<h4 style="margin-bottom:1rem; color:var(--accent);">📋 ${examName} — ${selectedExam.length} questions</h4>`;
    selectedExam.forEach((q, i) => {
        html += `<div class="corrige-item">
            <div class="corrige-question"><strong>Q${i + 1}.</strong> ${q.prompt}</div>
            <div class="corrige-answer"><pre>${q.corrige.replace(/\\n/g, '\n')}</pre></div>
        </div>`;
    });
    document.getElementById('lan-corrige-content').innerHTML = html;
}

function backToLanExamStart() {
    if (lanExamState.timerInterval) {
        clearInterval(lanExamState.timerInterval);
    }
    document.getElementById('lan-exam-start-screen').style.display = 'block';
    document.getElementById('lan-exam-in-progress').style.display = 'none';
    document.getElementById('lan-exam-complete').style.display = 'none';
    document.getElementById('lan-exam-corrige-full').style.display = 'none';
}

function resetLanExam() {
    if (lanExamState.timerInterval) {
        clearInterval(lanExamState.timerInterval);
    }
    lanExamState = {
        mode: null,
        currentIndex: 0,
        answers: [],
        questions: [],
        startTime: null,
        timeRemaining: 30 * 60,
        timerInterval: null
    };
    backToLanExamStart();
}

// Initialize LAN when wireless module is shown
const originalShowSection = showSection;
showSection = function (id) {
    originalShowSection(id);
    if (id === 'lan') {
        initLan();
    }
};
