const fs = require('fs');

// Read the qcm-data.js file content
const qcmDataContent = fs.readFileSync('/home/sami/Desktop/CI.CD/exam-prep-app/js/qcm-data.js', 'utf8');

// Extract the qcmQuestions array using a safe evaluation approach (since we can't require it directly if it's not a module)
// We'll wrap it in a function context to evaluate it
let qcmQuestions;
try {
    // Basic regex to extract the array content if direct eval is risky or complex due to dependencies (though here it seems standalone)
    // Actually, reading the file, it's just `const qcmQuestions = [...]`. We can strip the `const` and eval.
    // However, `qcm-data.js` might have comments or other things.
    // Let's try to just require it if we modify it slightly or use vm.
    // Or simpler: modify the content to be a module.exports and require it.

    // Quick hack for this one-off script: eval the content in a safe-ish way
    const scriptContent = qcmDataContent.replace('const qcmQuestions =', 'global.qcmQuestions =');
    eval(scriptContent);
    qcmQuestions = global.qcmQuestions;
} catch (e) {
    console.error("Error parsing qcm-data.js:", e);
    process.exit(1);
}

if (!qcmQuestions) {
    console.error("Could not load questions.");
    process.exit(1);
}

let output = '';

qcmQuestions.forEach(q => {
    // 1. Concept/Question
    // User wants "le concept dont on parle". The question text usually contains this.
    // We'll try to be valid but concise.
    let concept = q.question.replace(/\s+/g, ' ').trim();

    // 2. Reponse
    const correctOption = q.options.find(opt => opt.letter === q.correct);
    let response = correctOption ? correctOption.text : "N/A";
    response = response.replace(/\s+/g, ' ').trim();

    // 3. Traps
    // User wants "le piège qu'on discute, et le piège en question".
    // We have a 'traps' object: { A: "explanation", ... }
    // We want to format this concisely.
    let trapsText = [];
    if (q.traps) {
        Object.keys(q.traps).forEach(key => {
            const trapExpl = q.traps[key];
            const trapOption = q.options.find(o => o.letter === key);
            const trapOptionText = trapOption ? trapOption.text : "Option " + key;

            // Concise format: "OptionText (Explanation)"
            // User asked: "le piège qu'on discute, et le piège en question"
            // "le piège en question" might mean the incorrect option text.
            // "le piège qu'on discute" might mean the explanation.
            // Let's combine: "OptionText: Explanation"
            trapsText.push(`[${trapOptionText}]: ${trapExpl}`);
        });
    }

    // Join traps clearly
    const trapsString = trapsText.length > 0 ? trapsText.join(' // ') : "Aucun piège majeur";

    // Combined Line
    // "Pour chaque question, je veux que tu me donnes le concept dont on parle et sa réponse, et le piège qu'on discute, et le piège en question, tout dans une seule ligne."
    // Format: Question | Correct Answer | Traps
    const line = `Q: ${concept} || R: ${response} || Pièges: ${trapsString}\n`;
    output += line;
});

fs.writeFileSync('/home/sami/Desktop/CI.CD/exam-prep-app/resume_qcm.mv', output);
console.log("File generated at /home/sami/Desktop/CI.CD/exam-prep-app/resume_qcm.mv");
