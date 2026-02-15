// App.js - Main Application Logic
// Exam Prep CI/CD

class ExamPrepApp {
  constructor() {
    this.currentSection = 'summary';
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.answered = false;
    this.score = { correct: 0, incorrect: 0, total: qcmQuestions.length };
    this.mode = 'revision'; // 'revision' or 'exam'
    this.shuffle = false; // Shuffle options
    this.answeredQuestions = new Set();
    this.timerInterval = null;
    this.timeLeft = 40;

    this.init();
  }

  init() {
    this.renderNavigation();
    this.renderSummarySection();
    this.renderQCMSection();
    this.bindEvents();
    this.switchSection('summary');
  }

  // ========== NAVIGATION ==========
  renderNavigation() {
    const navContainer = document.getElementById('nav-tabs');
    navContainer.innerHTML = `
      <button class="nav-tab active" data-section="summary">
        📚 Synthèse Orientée Examen
      </button>
      <button class="nav-tab" data-section="qcm">
        🎯 QCM Difficile (${qcmQuestions.length} questions)
      </button>
    `;
  }

  switchSection(section) {
    this.currentSection = section;

    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.section === section);
    });

    // Update panels
    document.querySelectorAll('.section-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `${section}-panel`);
    });
  }

  // ========== SUMMARY SECTION ==========
  renderSummarySection() {
    const container = document.getElementById('summary-panel');
    container.innerHTML = `
      ${this.renderDefinitions()}
      ${this.renderDistinctions()}
      ${this.renderReflexes()}
      ${this.renderCommonMistakes()}
      ${this.renderCommands()}
    `;
  }

  renderDefinitions() {
    const cards = summaryData.definitions.map(def => `
      <div class="definition-card">
        <div class="definition-card__term">${def.term}</div>
        <div class="definition-card__text">${def.definition}</div>
        ${def.important ? `<span class="definition-card__important">⚠️ ${def.important}</span>` : ''}
      </div>
    `).join('');

    return `
      <div class="summary-section">
        <h2 class="summary-section__title">
          <span class="summary-section__icon">📖</span>
          Définitions Clés
        </h2>
        <div class="definition-grid">${cards}</div>
      </div>
    `;
  }

  renderDistinctions() {
    const cards = summaryData.distinctions.map(dist => {
      const rows = dist.comparison.map(row => `
        <tr>
          <td>${row.aspect}</td>
          <td>${row.valueA}</td>
          <td>${row.valueB}</td>
        </tr>
      `).join('');

      return `
        <div class="comparison-card">
          <div class="comparison-card__header">
            <div class="comparison-card__item comparison-card__item--a">
              <div class="comparison-card__item-label">${dist.itemA}</div>
            </div>
            <div class="comparison-card__item comparison-card__item--b">
              <div class="comparison-card__item-label">${dist.itemB}</div>
            </div>
          </div>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>${dist.itemA.split(' ')[0]}</th>
                <th>${dist.itemB.split(' ')[0]}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }).join('');

    return `
      <div class="summary-section">
        <h2 class="summary-section__title">
          <span class="summary-section__icon">⚖️</span>
          Distinctions Clés (A vs B)
        </h2>
        ${cards}
      </div>
    `;
  }

  renderReflexes() {
    const cards = summaryData.reflexes.map(reflex => `
      <div class="reflex-card">
        <code class="reflex-card__trigger">${reflex.trigger}</code>
        <span class="reflex-card__arrow">→</span>
        <span class="reflex-card__think">${reflex.think}</span>
      </div>
    `).join('');

    return `
      <div class="summary-section">
        <h2 class="summary-section__title">
          <span class="summary-section__icon">💡</span>
          Réflexes "Si tu vois X → Pense Y"
        </h2>
        <div class="reflex-grid">${cards}</div>
      </div>
    `;
  }

  renderCommonMistakes() {
    const cards = summaryData.commonMistakes.map(mistake => `
      <div class="mistake-card">
        <div class="mistake-card__mistake">❌ ${mistake.mistake}</div>
        <div class="mistake-card__correction">✅ ${mistake.correction}</div>
        <code class="mistake-card__example">${mistake.example}</code>
      </div>
    `).join('');

    return `
      <div class="summary-section">
        <h2 class="summary-section__title">
          <span class="summary-section__icon">🚫</span>
          Pièges Courants à Éviter
        </h2>
        ${cards}
      </div>
    `;
  }

  renderCommands() {
    const categories = Object.entries(summaryData.essentialCommands).map(([name, commands]) => {
      const items = commands.map(cmd => `
        <div class="command-item">
          <code class="command-item__cmd">${cmd.cmd}</code>
          <span class="command-item__desc">${cmd.desc}</span>
        </div>
      `).join('');

      return `
        <div class="commands-category">
          <div class="commands-category__title">${name.toUpperCase()}</div>
          ${items}
        </div>
      `;
    }).join('');

    return `
      <div class="summary-section">
        <h2 class="summary-section__title">
          <span class="summary-section__icon">⌨️</span>
          Commandes Essentielles
        </h2>
        <div class="commands-grid">${categories}</div>
      </div>
    `;
  }

  // ========== QCM SECTION ==========
  renderQCMSection() {
    const container = document.getElementById('qcm-panel');
    container.innerHTML = `
      <div class="mode-toggle">
        <button class="mode-btn active" data-mode="revision">📖 Mode Révision</button>
        <button class="mode-btn" data-mode="exam">⏱️ Mode Examen</button>
        <label class="shuffle-toggle">
            <input type="checkbox" id="shuffle-checkbox">
            <span>🔀 Mélanger les options</span>
        </label>
      </div>
      
      <div id="exam-timer" class="exam-timer" style="display: none;">
        <span class="exam-timer__icon">⏳</span>
        <span class="exam-timer__text" id="timer-text">40s</span>
        <div class="exam-timer__bar">
            <div class="exam-timer__fill" id="timer-fill"></div>
        </div>
      </div>
      
      <div class="qcm-progress">
        <div class="qcm-progress__bar">
          <div class="qcm-progress__fill" id="progress-fill" style="width: 0%"></div>
        </div>
        <div class="qcm-progress__stats">
          <div class="qcm-progress__stat">
            <div class="qcm-progress__stat-value" id="stat-correct">0</div>
            <div class="qcm-progress__stat-label">Correct</div>
          </div>
          <div class="qcm-progress__stat">
            <div class="qcm-progress__stat-value" id="stat-incorrect">0</div>
            <div class="qcm-progress__stat-label">Incorrect</div>
          </div>
          <div class="qcm-progress__stat">
            <div class="qcm-progress__stat-value" id="stat-remaining">${qcmQuestions.length}</div>
            <div class="qcm-progress__stat-label">Restant</div>
          </div>
        </div>
      </div>
      
      <div id="question-container"></div>
      
      <div class="question-actions" style="justify-content: center; margin-top: 20px;">
        <button class="btn btn-secondary" id="btn-prev" disabled>← Précédent</button>
        <button class="btn btn-secondary" id="btn-random">🎲 Question Aléatoire</button>
        <button class="btn btn-secondary" id="btn-next">Suivant →</button>
      </div>
    `;

    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    const question = qcmQuestions[this.currentQuestionIndex];
    const container = document.getElementById('question-container');

    let displayOptions = [...question.options];
    if (this.shuffle) {
      // Fisher-Yates shuffle
      for (let i = displayOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [displayOptions[i], displayOptions[j]] = [displayOptions[j], displayOptions[i]];
      }
    }

    const options = displayOptions.map((opt, index) => {
      const displayLetter = 'ABCD'[index];
      return `
      <div class="option" data-letter="${opt.letter}" data-display-letter="${displayLetter}">
        <span class="option__letter">${displayLetter}</span>
        <span class="option__text">${opt.text}</span>
      </div>
    `}).join('');

    container.innerHTML = `
      <div class="question-card">
        <span class="question-card__category">${question.category}</span>
        <div class="question-card__number">Question ${this.currentQuestionIndex + 1} / ${qcmQuestions.length}</div>
        <div class="question-card__text">${question.question}</div>
        
        <div class="options-list" id="options-list">
          ${options}
        </div>
        
        <div class="question-actions">
          <button class="btn btn-primary" id="btn-verify" disabled>Vérifier la réponse</button>
          <button class="btn btn-secondary" id="btn-show-answer" style="display: ${this.mode === 'revision' ? 'inline-flex' : 'none'}">
            👁️ Voir la réponse
          </button>
        </div>
        
        <div class="feedback" id="feedback"></div>
      </div>
    `;

    this.selectedAnswer = null;
    this.answered = this.answeredQuestions.has(question.id);

    // If already answered, show the result
    if (this.answered) {
      this.showFeedback(question);
      this.stopTimer();
    } else {
      this.resetTimer();
      if (this.mode === 'exam') {
        this.startTimer(question);
      }
    }

    // Shuffle checkbox listener
    const shuffleCheckbox = document.getElementById('shuffle-checkbox');
    if (shuffleCheckbox) {
      shuffleCheckbox.checked = this.shuffle;
      shuffleCheckbox.addEventListener('change', (e) => {
        this.shuffle = e.target.checked;
        // If not answered, re-render to apply shuffle immediately
        if (!this.answered) {
          this.renderCurrentQuestion();
        }
      });
    }

    this.bindQuestionEvents();
    this.updateNavigationButtons();
  }

  bindQuestionEvents() {
    // Option selection
    document.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', () => {
        if (this.answered) return;

        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        this.selectedAnswer = option.dataset.letter;
        document.getElementById('btn-verify').disabled = false;
      });
    });

    // Verify button
    document.getElementById('btn-verify').addEventListener('click', () => {
      if (!this.selectedAnswer || this.answered) return;
      this.verifyAnswer();
    });

    // Show answer button
    const showAnswerBtn = document.getElementById('btn-show-answer');
    if (showAnswerBtn) {
      showAnswerBtn.addEventListener('click', () => {
        this.answered = true;
        const question = qcmQuestions[this.currentQuestionIndex];
        this.showFeedback(question, true);
      });
    }
  }

  verifyAnswer() {
    this.stopTimer();
    const question = qcmQuestions[this.currentQuestionIndex];
    const isCorrect = this.selectedAnswer === question.correct;

    this.answered = true;
    this.answeredQuestions.add(question.id);

    if (isCorrect) {
      this.score.correct++;
    } else {
      this.score.incorrect++;
    }

    this.updateProgress();
    this.showFeedback(question);
  }

  showFeedback(question, showOnly = false) {
    const isCorrect = this.selectedAnswer === question.correct;

    // Highlight options
    document.querySelectorAll('.option').forEach(option => {
      const letter = option.dataset.letter;
      if (letter === question.correct) {
        option.classList.add('correct');
      } else if (letter === this.selectedAnswer && !isCorrect) {
        option.classList.add('incorrect');
      }
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    const trapsHTML = Object.entries(question.traps).map(([letter, explanation]) => `
      <div class="feedback__trap">
        <span class="feedback__trap-letter">${letter}:</span> ${explanation}
      </div>
    `).join('');

    // Find the visual letter for the correct answer
    let correctDisplayLetter = question.correct;
    if (this.shuffle) {
      const correctOptionBtn = document.querySelector(`.option[data-letter="${question.correct}"]`);
      if (correctOptionBtn) {
        correctDisplayLetter = correctOptionBtn.dataset.displayLetter;
      }
    }

    feedback.innerHTML = `
      <div class="feedback__title">
        ${showOnly ? '📖 Réponse:' : (isCorrect ? '✅ Correct!' : '❌ Incorrect!')} 
        La bonne réponse est ${correctDisplayLetter}
      </div>
      <div class="feedback__justification">
        <div class="feedback__justification-label">Justification</div>
        ${question.justification}
      </div>
      <div class="feedback__traps">
        <div class="feedback__justification-label">Pourquoi les autres réponses sont des pièges</div>
        ${trapsHTML}
      </div>
    `;

    feedback.className = `feedback show ${showOnly ? '' : (isCorrect ? 'correct' : 'incorrect')}`;

    // Disable verify button
    document.getElementById('btn-verify').disabled = true;
  }

  updateProgress() {
    const answered = this.score.correct + this.score.incorrect;
    const progress = (answered / this.score.total) * 100;

    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('stat-correct').textContent = this.score.correct;
    document.getElementById('stat-incorrect').textContent = this.score.incorrect;
    document.getElementById('stat-remaining').textContent = this.score.total - answered;
  }

  updateNavigationButtons() {
    document.getElementById('btn-prev').disabled = this.currentQuestionIndex === 0;
    document.getElementById('btn-next').disabled = this.currentQuestionIndex === qcmQuestions.length - 1;
  }

  navigateQuestion(direction) {
    if (direction === 'next' && this.currentQuestionIndex < qcmQuestions.length - 1) {
      this.currentQuestionIndex++;
    } else if (direction === 'prev' && this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    } else if (direction === 'random') {
      this.currentQuestionIndex = Math.floor(Math.random() * qcmQuestions.length);
    }

    this.renderCurrentQuestion();
  }

  setMode(mode) {
    this.mode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    const timerEl = document.getElementById('exam-timer');
    if (timerEl) {
      timerEl.style.display = mode === 'exam' ? 'flex' : 'none';
    }

    if (mode === 'exam' && !this.answered) {
      this.resetTimer();
      const question = qcmQuestions[this.currentQuestionIndex];
      this.startTimer(question);
    } else {
      this.stopTimer();
    }

    const showAnswerBtn = document.getElementById('btn-show-answer');
    if (showAnswerBtn) {
      showAnswerBtn.style.display = mode === 'revision' ? 'inline-flex' : 'none';
    }
  }

  // ========== EVENT BINDINGS ==========
  bindEvents() {
    // Navigation tabs
    document.getElementById('nav-tabs').addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-tab')) {
        this.switchSection(e.target.dataset.section);
      }
    });

    // Mode toggle
    document.getElementById('qcm-panel').addEventListener('click', (e) => {
      if (e.target.classList.contains('mode-btn')) {
        this.setMode(e.target.dataset.mode);
      }

      if (e.target.id === 'btn-prev') {
        this.navigateQuestion('prev');
      } else if (e.target.id === 'btn-next') {
        this.navigateQuestion('next');
      } else if (e.target.id === 'btn-random') {
        this.navigateQuestion('random');
      }
    });
  }

  // ========== TIMER LOGIC ==========
  startTimer(question) {
    this.stopTimer();
    this.timeLeft = 40;
    this.updateTimerUI();

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimerUI();

      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.handleTimeout(question);
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timeLeft = 40;
    this.updateTimerUI();
  }

  updateTimerUI() {
    const timerText = document.getElementById('timer-text');
    const timerFill = document.getElementById('timer-fill');

    if (timerText && timerFill) {
      timerText.textContent = `${this.timeLeft}s`;
      const percentage = (this.timeLeft / 40) * 100;
      timerFill.style.width = `${percentage}%`;

      // Change color based on time left
      if (this.timeLeft <= 10) {
        timerFill.style.background = 'var(--danger-gradient)';
      } else if (this.timeLeft <= 20) {
        timerFill.style.background = 'var(--warning-gradient)';
      } else {
        timerFill.style.background = 'var(--primary-gradient)';
      }
    }
  }

  handleTimeout(question) {
    this.answered = true;
    this.answeredQuestions.add(question.id);
    this.score.incorrect++; // Count as incorrect if time runs out
    this.updateProgress();

    // Show answer as if "Show Answer" was clicked
    this.showFeedback(question, true);

    // Add a specialized timeout message
    const feedbackTitle = document.querySelector('.feedback__title');
    if (feedbackTitle) {
      feedbackTitle.innerHTML = `⌛ Temps écoulé! <br> La bonne réponse est ${question.correct}`;
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ExamPrepApp();
});
