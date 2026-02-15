# 🧪 Manual Test Checklist — Spring Boot Exam Prep

Use this checklist to verify all features work correctly after making changes.

---

## 1. Basic Loading

- [ ] Open `index.html` in browser (double-click or File > Open)
- [ ] Page loads without errors (check console with F12)
- [ ] Dark theme displays correctly
- [ ] Sidebar navigation is visible
- [ ] "Cours de Base" section is shown by default

---

## 2. Navigation

- [ ] Click "📚 Cours de Base" → section displays
- [ ] Click "📋 Topics & Traps" → section displays
- [ ] Click "✏️ Exercices" → section displays, exercises load
- [ ] Click "📝 Mock Exams" → section displays, 2 exam cards visible
- [ ] Click "⚡ Cheatsheet" → section displays with annotation cards
- [ ] Click "🚀 Révision Rapide" → section displays with traps and exercises

---

## 3. Exercises Section

### Loading
- [ ] First exercise loads automatically
- [ ] Exercise statement is visible
- [ ] Starter code is displayed in code block
- [ ] Exercise badges show (domain, difficulty, weight)
- [ ] Counter shows "1 / 25" (or filtered count)

### Buttons
- [ ] Click "💡 Indice (H)" → hints appear/disappear
- [ ] Click "✅ Solution (S)" → solution + explanation appear/disappear
- [ ] Click "➡️ Suivant (N)" → next exercise loads
- [ ] Counter updates correctly

### Filters
- [ ] Filter by Domain → exercises filter correctly
- [ ] Filter by Difficulty → exercises filter correctly
- [ ] Filter by Topic → exercises filter correctly
- [ ] Multiple filters work together
- [ ] "Aucun exercice" message when no matches

---

## 4. Keyboard Shortcuts

Navigate to Exercises section first, then:

- [ ] Press `H` → hints toggle
- [ ] Press `S` → solution toggle
- [ ] Press `N` → next exercise
- [ ] Press `R` → random trap popup appears
- [ ] Press `←` (Left Arrow) → previous exercise
- [ ] Press `→` (Right Arrow) → next exercise

---

## 5. Topics & Traps Section

- [ ] Trap list displays 16 traps
- [ ] Weight filter works (High/Medium/Low/All)
- [ ] "🎲 Piège Aléatoire" button works
- [ ] Random trap display shows: trap name, why wrong, correct reflex

---

## 6. Mock Exams

- [ ] Click "Commencer" on Exam #1 → exam content loads
- [ ] Exam shows all 3 parts (Entities, Service, Controller)
- [ ] Barème (grading) is visible at bottom
- [ ] "← Retour" button returns to exam list
- [ ] Same for Exam #2

---

## 7. Rapid Revision

- [ ] Top 5 traps display correctly
- [ ] 10 exercise links are visible
- [ ] Clicking an exercise link → navigates to Exercises section

---

## 8. Cheatsheet

- [ ] All 12 annotation cards display
- [ ] Code snippets are readable
- [ ] Cards are responsive (grid adapts)

---

## 9. Print Mode

- [ ] Press `Ctrl+P` (or `Cmd+P` on Mac)
- [ ] Sidebar is hidden in preview
- [ ] Buttons are hidden in preview
- [ ] Content is readable (black text on white)
- [ ] Code blocks have visible borders

---

## 10. Responsive Design

- [ ] Resize browser to mobile width (~400px)
- [ ] Sidebar becomes horizontal nav
- [ ] Content remains readable
- [ ] Exercises still work

---

## 11. Offline Mode

- [ ] Disconnect from internet
- [ ] Refresh page
- [ ] All features still work (no CDN dependencies)

---

## 12. Error Handling

- [ ] Rename `exercises.json` temporarily
- [ ] Refresh → error message appears in exercise area
- [ ] Restore file → exercises load again

---

## ✅ All Tests Passed?

If yes, the application is ready for use!

If any test fails:
1. Open browser console (F12 → Console tab)
2. Look for JavaScript errors
3. Check file paths in `index.html`
4. Verify JSON syntax in `exercises.json`

---

## 📊 Test Results Log

| Date | Tester | Browser | Result | Notes |
|------|--------|---------|--------|-------|
| ___ | ___ | Chrome/Firefox/Edge | ✅/❌ | ___ |

