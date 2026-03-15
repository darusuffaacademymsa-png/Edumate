const fs = require('fs');
const path = require('path');

const units = [1, 2, 3, 4, 5, 6, 7];

function parseTxtToJson(txtPath, unitNum) {
    const content = fs.readFileSync(txtPath, 'utf8');
    const lines = content.split('\n').map(l => l.trim()).filter(l => l);
    
    const questions = [];
    let currentQ = null;
    let optIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('Q:')) {
            const parts = line.substring(2).split('|').map(s => s.trim());
            currentQ = {
                q_id: `u${unitNum}_q${questions.length + 1}`,
                type: 'mcq',
                stem: { en: parts[0], ml: parts[1] || parts[0] },
                options: [],
                answer: '',
                difficulty: 'easy',
                explanation: { en: '', ml: '' }
            };
            optIndex = 0;
        } 
        else if (line.match(/^[A-D]\)/)) {
            const parts = line.substring(2).split('|').map(s => s.trim());
            const keys = ['A', 'B', 'C', 'D'];
            currentQ.options.push({
                k: keys[optIndex],
                text: { en: parts[0], ml: parts[1] || parts[0] }
            });
            optIndex++;
        }
        else if (line.startsWith('ANS:')) {
            currentQ.answer = line.substring(4).trim();
        }
        else if (line.startsWith('DIFF:')) {
            currentQ.difficulty = line.substring(5).trim().toLowerCase();
        }
        else if (line.startsWith('EXP:')) {
            const parts = line.substring(4).split('|').map(s => s.trim());
            currentQ.explanation = { en: parts[0], ml: parts[1] || parts[0] };
            questions.push(currentQ);
            currentQ = null;
        }
    }
    
    return questions;
}

units.forEach(unitNum => {
    const txtFile = path.join(__dirname, `data/unit${unitNum}.txt`);
    const tsFile = path.join(__dirname, `../src/data/physics_unit${unitNum}.ts`);
    
    if (!fs.existsSync(txtFile)) {
        console.log(`Skipping Unit ${unitNum} - TXT file not found.`);
        return;
    }

    try {
        console.log(`Parsing Unit ${unitNum} TXT...`);
        const questions = parseTxtToJson(txtFile, unitNum);
        
        if (questions.length === 0) {
            console.log(`No questions compiled for Unit ${unitNum}. Skip.`);
            return;
        }

        let tsContent = fs.readFileSync(tsFile, 'utf8');
        const regex = /quiz:\s*\[[\s\S]*\}\s*as\s*const;/;
        
        let replacementArray = JSON.stringify(questions, null, 4);
        
        // Remove quotes from standard keys to make it look like idiomatic TS
        replacementArray = replacementArray.replace(/"(q_id|type|stem|options|k|text|en|ml|answer|difficulty|explanation)":/g, '$1:');

        const replacement = `quiz: ${replacementArray}\n} as const;`;
        
        if (regex.test(tsContent)) {
            tsContent = tsContent.replace(regex, replacement);
            fs.writeFileSync(tsFile, tsContent, 'utf8');
            console.log(`Successfully injected ${questions.length} questions into physics_unit${unitNum}.ts`);
        } else {
            console.error(`Could not find the quiz array block in physics_unit${unitNum}.ts`);
        }
    } catch (e) {
        console.error(`Error processing Unit ${unitNum}:`, e);
    }
});
