import { Lesson } from '../../curriculum';

export const secondDegreeEquations: Lesson = {
  id: "math-ch5",
  title: { en: "Second Degree Equations", ml: "രണ്ടാംകൃതി സമവാക്യങ്ങൾ" },
  estimated_time_mins: 90,
  learning_objectives: [
    { id: "lo1", text: { en: "Translate real-world problems into second-degree algebraic equations.", ml: "പ്രായോഗിക പ്രശ്നങ്ങളെ രണ്ടാംകൃതി ബീജഗണിത സമവാക്യങ്ങളായി മാറ്റുക." } },
    { id: "lo2", text: { en: "Understand and apply the method of Square Completion.", ml: "വർഗ്ഗത്തികവ് (Square Completion) രീതി മനസ്സിലാക്കുകയും പ്രയോഗിക്കുകയും ചെയ്യുക." } },
    { id: "lo3", text: { en: "Recognize why second-degree equations yield two solutions.", ml: "രണ്ടാംകൃതി സമവാക്യങ്ങൾക്ക് എന്തുകൊണ്ട് രണ്ട് പരിഹാരങ്ങൾ ലഭിക്കുന്നു എന്ന് മനസ്സിലാക്കുക." } },
    { id: "lo4", text: { en: "Evaluate the validity of solutions based on the problem context.", ml: "പ്രശ്നത്തിന്റെ സാഹചര്യം അനുസരിച്ച് പരിഹാരങ്ങളുടെ സാധുത പരിശോധിക്കുക." } }
  ],
  content: {
    intro: {
      en: "This chapter explores how to translate real-world practical problems, especially those involving geometry and number sequences, into algebraic equations.",
      ml: "ജ്യാമിതിയും സംഖ്യാശ്രേണികളുമായി ബന്ധപ്പെട്ട പ്രായോഗിക പ്രശ്നങ്ങളെ ബീജഗണിത സമവാക്യങ്ങളാക്കി മാറ്റുന്നത് എങ്ങനെയാണെന്ന് ഈ അധ്യായം വിശദീകരിക്കുന്നു."
    },
    core: {
      en: "It introduces the method of 'Square Completion' to solve second-degree equations and explains why these equations often yield two distinct mathematical solutions.",
      ml: "രണ്ടാംകൃതി സമവാക്യങ്ങൾ (Quadratic Equations) പരിഹരിക്കുന്നതിനായി 'വർഗ്ഗത്തികവ്' എന്ന രീതി ഈ പാഠഭാഗം പരിചയപ്പെടുത്തുന്നു. കൂടാതെ ഇത്തരം സമവാക്യങ്ങൾക്ക് എന്തുകൊണ്ട് രണ്ട് പരിഹാരങ്ങൾ ലഭിക്കുന്നു എന്നും ഇത് വ്യക്തമാക്കുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter explores how to translate real-world practical problems, especially those involving geometry (like the areas of rectangles and squares) and number sequences, into algebraic equations. Specifically, it introduces the method of "Square Completion" to solve second-degree equations (quadratic equations) and explains why these equations often yield two distinct mathematical solutions, and how to choose the right one based on the context.', ml: 'ജ്യാമിതീയ രൂപങ്ങളുടെ (ചതുരങ്ങൾ, വർഗ്ഗങ്ങൾ) പരപ്പളവ്, സംഖ്യാശ്രേണികൾ എന്നിവയുമായി ബന്ധപ്പെട്ട പ്രായോഗിക പ്രശ്നങ്ങളെ ബീജഗണിത സമവാക്യങ്ങളാക്കി മാറ്റുന്നത് എങ്ങനെയാണെന്ന് ഈ അധ്യായത്തിൽ പഠിക്കുന്നു. പ്രധാനമായും രണ്ടാംകൃതി സമവാക്യങ്ങൾ (Second Degree Equations) പരിഹരിക്കുന്നതിനുള്ള "വർഗ്ഗത്തികവ്" (Square Completion) എന്ന രീതിയെ ഇത് പരിചയപ്പെടുത്തുന്നു. ഇത്തരം സമവാക്യങ്ങൾക്ക് ഗണിതപരമായി രണ്ട് ഉത്തരങ്ങൾ ലഭിക്കുന്നതിന്റെ കാരണവും, സാഹചര്യത്തിനനുസരിച്ച് ശരിയായ ഉത്തരം തിരഞ്ഞെടുക്കേണ്ട രീതിയും ഈ പാഠഭാഗം വിവരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: '**Second Degree Equation:** An equation where the highest power of the unknown variable (like $x$) is 2 (e.g., $x^2 + 2x = 224$).', ml: '**രണ്ടാംകൃതി സമവാക്യം (Second Degree Equation):** ചരത്തിന്റെ (Variable) ഏറ്റവും ഉയർന്ന കൃതി (Power) 2 ആയി വരുന്ന സമവാക്യങ്ങൾ (ഉദാഹരണത്തിന്, $x^2 + 2x = 224$).' },
        { en: '**Square Completion:** An algebraic technique used to solve second-degree equations by adding a specific number to both sides of the equation so that one side becomes a perfect square.', ml: '**വർഗ്ഗത്തികവ് (Square Completion):** ഒരു സമവാക്യത്തിന്റെ ഇരുവശത്തും അനുയോജ്യമായ ഒരു സംഖ്യ കൂട്ടി ഒരു വശത്തെ പൂർണ്ണവർഗ്ഗമാക്കി (Perfect Square) മാറ്റുന്ന രീതി.' },
        { en: '**Two Solutions (Roots):** Because the square of both a positive and a negative number yields a positive result, taking the square root of an equation naturally gives two possible answers.', ml: '**രണ്ട് പരിഹാരങ്ങൾ (Roots):** പോസിറ്റീവ് സംഖ്യയുടെയും നെഗറ്റീവ് സംഖ്യയുടെയും വർഗ്ഗം (Square) പോസിറ്റീവ് ആയതിനാൽ, ഒരു സംഖ്യയുടെ വർഗ്ഗമൂലം (Square Root) കാണുമ്പോൾ സ്വാഭാവികമായും രണ്ട് ഉത്തരങ്ങൾ ലഭിക്കുന്നു.' },
        { en: '**Contextual Validity:** While an equation might have two mathematical solutions, in real-world geometry problems (where lengths cannot be negative), the negative solution is rejected.', ml: '**സാഹചര്യത്തിനനുസരിച്ചുള്ള സാധുത:** സമവാക്യത്തിന് രണ്ട് ഗണിതപരമായ ഉത്തരങ്ങൾ ഉണ്ടെങ്കിലും, നീളം നെഗറ്റീവ് ആകാൻ പാടില്ലാത്ത ജ്യാമിതീയ പ്രശ്നങ്ങളിൽ നെഗറ്റീവ് ഉത്തരം ഒഴിവാക്കുന്നു.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      
      { type: 'h3', en: '3.1 Forming Equations from Geometry', ml: '3.1 ജ്യാമിതിയിൽ നിന്നുള്ള സമവാക്യ രൂപീകരണം' },
      { type: 'p', en: 'Problems involving the enlargement or reduction of squares and rectangles can be directly translated into algebra.', ml: 'സമചതുരങ്ങളുടെയും ചതുരങ്ങളുടെയും വശങ്ങൾ കൂട്ടുകയോ കുറയ്ക്കുകയോ ചെയ്യുന്ന പ്രശ്നങ്ങളെ നേരിട്ട് ബീജഗണിത രൂപത്തിലേക്ക് മാറ്റാം.' },
      { type: 'p', en: 'If the length of a side of a square is $x$, its area is $x^2$. If the side is extended by 1 metre, the new area becomes $(x + 1)^2$.', ml: 'ഒരു സമചതുരത്തിന്റെ വശത്തിന്റെ നീളം $x$ ആണെങ്കിൽ അതിന്റെ പരപ്പളവ് $x^2$ ആണ്. വശം 1 മീറ്റർ കൂട്ടിയാൽ പുതിയ പരപ്പളവ് $(x + 1)^2$ ആയിരിക്കും.' },
      { type: 'p', en: 'For a rectangle where one side is 2 metres longer than the other, if the shorter side is $x$, the longer side is $x + 2$. The area is $x(x + 2) = x^2 + 2x$.', ml: 'ഒരു ചതുരത്തിന്റെ ഒരു വശം മറ്റേ വശത്തേക്കാൾ 2 മീറ്റർ കൂടുതലാണെങ്കിൽ, ചെറിയ വശം $x$ ഉം വലിയ വശം $x + 2$ ഉം ആണ്. അതിന്റെ പരപ്പളവ് $x(x + 2) = x^2 + 2x$ ആയിരിക്കും.' },
      
      { type: 'h3', en: '3.2 The Method of Square Completion', ml: '3.2 വർഗ്ഗത്തികവ് രീതി' },
      { type: 'img', en: 'Visualizing Square Completion', ml: 'വർഗ്ഗത്തികവ് ദൃശ്യവൽക്കരണം', customId: 'quadratic-lab' },
      { type: 'p', en: 'When an equation is in the form $x^2 + 2ax = b$, we can solve it by turning the left side into a perfect square.', ml: '$x^2 + 2ax = b$ എന്ന രൂപത്തിലുള്ള സമവാക്യങ്ങളെ പരിഹരിക്കാൻ ഇടത് വശത്തെ ഒരു പൂർണ്ണവർഗ്ഗമാക്കി മാറ്റണം.' },
      { type: 'p', en: 'We use the algebraic identity: $x^2 + 2ax + a^2 = (x + a)^2$.', ml: '$x^2 + 2ax + a^2 = (x + a)^2$ എന്ന ബീജഗണിത സർവ്വസമവാക്യമാണ് ഇതിനായി ഉപയോഗിക്കുന്നത്.' },
      { type: 'p', en: 'By adding $a^2$ (which is the square of half of the coefficient of $x$) to both sides, the equation becomes easy to solve by taking the square root.', ml: '$x$-ന്റെ ഗുണകത്തിന്റെ (Coefficient) പകുതിയുടെ വർഗ്ഗമായ $a^2$ ഇരുവശത്തും കൂട്ടുന്നതിലൂടെ സമവാക്യം വർഗ്ഗമൂലം കണ്ട് എളുപ്പത്തിൽ പരിഹരിക്കാൻ സാധിക്കുന്നു.' },
      { type: 'p', en: 'Example: For $x^2 + 20x = 224$, the $x$ coefficient is 20. Half of 20 is 10. The square of 10 is 100. Adding 100 to both sides gives $x^2 + 20x + 100 = 324$, which simplifies to $(x + 10)^2 = 324$.', ml: 'ഉദാഹരണത്തിന്: $x^2 + 20x = 224$ എന്ന സമവാക്യത്തിൽ $x$-ന്റെ ഗുണകം 20 ആണ്. 20-ന്റെ പകുതി 10. 10-ന്റെ വർഗ്ഗം 100. ഇരുവശത്തും 100 കൂട്ടിയാൽ $x^2 + 20x + 100 = 324$ എന്ന് ലഭിക്കും. അതായത്, $(x + 10)^2 = 324$.' },
      
      { type: 'h3', en: '3.3 Dealing with Subtraction', ml: '3.3 വ്യവകലനം വരുമ്പോൾ' },
      { type: 'p', en: 'If the equation has a subtraction sign, like $x^2 - 2x = 99$, we use the identity for difference: $x^2 - 2ax + a^2 = (x - a)^2$.', ml: 'സമവാക്യത്തിൽ കുറയ്ക്കൽ (Subtraction) അടയാളമാണ് ഉള്ളതെങ്കിൽ (ഉദാഹരണത്തിന് $x^2 - 2x = 99$), $x^2 - 2ax + a^2 = (x - a)^2$ എന്ന സർവ്വസമവാക്യം ഉപയോഗിക്കുന്നു.' },
      { type: 'p', en: 'Adding 1 to both sides gives $x^2 - 2x + 1 = 100$, which simplifies to $(x - 1)^2 = 100$.', ml: 'ഇരുവശത്തും 1 കൂട്ടിയാൽ $x^2 - 2x + 1 = 100$ എന്ന് ലഭിക്കും. ഇത് $(x - 1)^2 = 100$ ആയി ലഘൂകരിക്കാം.' },
      { type: 'p', en: 'Sometimes equations appear "backward", like $50x - x^2 = 525$. We can rewrite this by subtracting both sides from 0 to get $x^2 - 50x = -525$, and then complete the square by adding $25^2 = 625$.', ml: 'ചിലപ്പോൾ സമവാക്യങ്ങൾ തിരിച്ചായിരിക്കും വരുന്നത്, ഉദാഹരണത്തിന് $50x - x^2 = 525$. ഇതിനെ $x^2 - 50x = -525$ എന്ന് മാറ്റിയെഴുതാം. ശേഷം $25^2 = 625$ കൂട്ടി വർഗ്ഗത്തികവ് നടത്താം.' },
      
      { type: 'h3', en: '3.4 Multiple Solutions and Context', ml: '3.4 ഒന്നിലധികം പരിഹാരങ്ങളും സാഹചര്യങ്ങളും' },
      { type: 'p', en: 'A squared expression equaling a positive number gives two roots. For instance, if $(x - 2)^2 = 1$, then $x - 2 = 1$ OR $x - 2 = -1$.', ml: 'ഒരു വർഗ്ഗത്തിന്റെ മൂല്യം പോസിറ്റീവ് സംഖ്യയാണെങ്കിൽ അതിന് രണ്ട് വർഗ്ഗമൂലങ്ങൾ ഉണ്ടാകും. ഉദാഹരണത്തിന് $(x - 2)^2 = 1$ ആണെങ്കിൽ, $x - 2 = 1$ അല്ലെങ്കിൽ $x - 2 = -1$ ആയിരിക്കും.' },
      { type: 'p', en: 'This leads to two potential algebraic solutions: $x = 3$ or $x = 1$.', ml: 'ഇത് $x = 3$ അല്ലെങ്കിൽ $x = 1$ എന്നിങ്ങനെ രണ്ട് ബീജഗണിത ഉത്തരങ്ങളിലേക്ക് നയിക്കുന്നു.' },
      { type: 'p', en: '**When to accept both:** In arithmetic sequence problems (like finding how many terms sum to 900), both a smaller number of terms and a larger number of terms could potentially yield the same sum if the sequence includes negative numbers.', ml: '**എപ്പോഴാണ് രണ്ട് ഉത്തരങ്ങളും സ്വീകരിക്കുന്നത്:** സംഖ്യാശ്രേണികളുമായി ബന്ധപ്പെട്ട പ്രശ്നങ്ങളിൽ (ഉദാഹരണത്തിന് പദങ്ങളുടെ തുക 900 ലഭിക്കാൻ എത്ര പദങ്ങൾ വേണം), നെഗറ്റീവ് സംഖ്യകൾ ഉൾപ്പെടുന്ന ശ്രേണിയാണെങ്കിൽ രണ്ട് ഉത്തരങ്ങളും ശരിയാകാൻ സാധ്യതയുണ്ട്.' },
      { type: 'p', en: '**When to reject one:** If $x$ represents the side length of a geometric shape, it cannot be a negative number. If solving $(x+1)^2 = 225$ gives $x+1 = -15 \Rightarrow x = -16$, we discard $-16$ because lengths must be positive.', ml: '**എപ്പോഴാണ് ഒന്ന് ഒഴിവാക്കുന്നത്:** ഒരു ജ്യാമിതീയ രൂപത്തിന്റെ വശത്തിന്റെ നീളമാണ് $x$ എങ്കിൽ അത് നെഗറ്റീവ് ആകാൻ കഴിയില്ല. $(x+1)^2 = 225$ എന്ന സമവാക്യം പരിഹരിക്കുമ്പോൾ $x+1 = -15$ അതായത് $x = -16$ എന്ന് ലഭിച്ചാൽ, നീളം പോസിറ്റീവ് ആയതിനാൽ ഈ ഉത്തരം ഒഴിവാക്കുന്നു.' },

      { type: 'h2', en: '4. Tables', ml: '4. പട്ടികകൾ' },
      
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
          rows: [
            [{en: 'Second Degree Equation', ml: 'രണ്ടാംകൃതി സമവാക്യം'}, {en: 'An equation containing a squared variable ($x^2$).', ml: 'ചരത്തിന്റെ വർഗ്ഗം ($x^2$) അടങ്ങിയ സമവാക്യം.'}, {en: '$x^2 + 5x = 24$', ml: '$x^2 + 5x = 24$'}],
            [{en: 'Square Completion', ml: 'വർഗ്ഗത്തികവ്'}, {en: 'Adding a specific value to make an algebraic expression a perfect square.', ml: 'ഒരു ബീജഗണിതവാക്യത്തെ പൂർണ്ണവർഗ്ഗമാക്കി മാറ്റാൻ ഒരു പ്രത്യേക സംഖ്യ കൂട്ടുന്ന രീതി.'}, {en: 'Adding $100$ to $x^2 + 20x$ to get $(x+10)^2$', ml: '$x^2 + 20x$-ൽ 100 കൂട്ടി $(x+10)^2$ ആക്കുന്നത്'}],
            [{en: 'Roots / Solutions', ml: 'മൂല്യങ്ങൾ / പരിഹാരങ്ങൾ'}, {en: 'The values of $x$ that make the equation true.', ml: 'സമവാക്യത്തെ തൃപ്തിപ്പെടുത്തുന്ന $x$-ന്റെ വിലകൾ.'}, {en: 'In $(x - 25)^2 = 100$, the roots are $x=35$ and $x=15$', ml: '$(x - 25)^2 = 100$ എന്നതിൽ പരിഹാരങ്ങൾ $x=35, x=15$ എന്നിവയാണ്'}]
          ]
      }},

      { type: 'h3', en: 'Formula Explanations', ml: 'സൂത്രവാക്യ വിശദീകരണങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Formula / Identity', ml: 'സൂത്രവാക്യം / സർവ്വസമവാക്യം'}, {en: 'Use in this Chapter', ml: 'ഈ പാഠഭാഗത്തെ ഉപയോഗം'}],
          rows: [
            [{en: '$(x + a)^2 = x^2 + 2ax + a^2$', ml: '$(x + a)^2 = x^2 + 2ax + a^2$'}, {en: 'Used to complete the square when adding terms (e.g., $x^2 + 2x$ becomes $(x+1)^2$).', ml: 'പദങ്ങൾ കൂട്ടുമ്പോൾ വർഗ്ഗത്തികവ് നടത്താൻ ഉപയോഗിക്കുന്നു (ഉദാഹരണത്തിന് $x^2 + 2x$ എന്നത് $(x+1)^2$ ആയി മാറുന്നു).'}],
            [{en: '$(x - a)^2 = x^2 - 2ax + a^2$', ml: '$(x - a)^2 = x^2 - 2ax + a^2$'}, {en: 'Used to complete the square when subtracting terms (e.g., $x^2 - 50x$ becomes $(x-25)^2$).', ml: 'പദങ്ങൾ കുറയ്ക്കുമ്പോൾ വർഗ്ഗത്തികവ് നടത്താൻ ഉപയോഗിക്കുന്നു (ഉദാഹരണത്തിന് $x^2 - 50x$ എന്നത് $(x-25)^2$ ആയി മാറുന്നു).'}],
            [{en: '$(x + a)(x - a) = x^2 - a^2$', ml: '$(x + a)(x - a) = x^2 - a^2$'}, {en: 'Used to simplify area problems (e.g., $(25+x)(25-x) = 625 - x^2$).', ml: 'പരപ്പളവ് പ്രശ്നങ്ങൾ ലഘൂകരിക്കാൻ ഉപയോഗിക്കുന്നു (ഉദാഹരണത്തിന് $(25+x)(25-x) = 625 - x^2$).'}]
          ]
      }},

      { type: 'h3', en: 'Process Table: Solving via Square Completion', ml: 'പ്രക്രിയ പട്ടിക: വർഗ്ഗത്തികവ് വഴി പരിഹരിക്കൽ' },
      { type: 'table', tableData: {
          headers: [{en: 'Step', ml: 'ഘട്ടം'}, {en: 'Description', ml: 'വിവരണം'}, {en: 'Example ($x^2 + 5x = 24$)', ml: 'ഉദാഹരണം ($x^2 + 5x = 24$)'}],
          rows: [
            [{en: 'Step 1', ml: 'ഘട്ടം 1'}, {en: 'Write the equation in the form $x^2 + 2ax = c$.', ml: 'സമവാക്യത്തെ $x^2 + 2ax = c$ എന്ന രൂപത്തിൽ എഴുതുക.'}, {en: '$x^2 + 5x = 24$', ml: '$x^2 + 5x = 24$'}],
            [{en: 'Step 2', ml: 'ഘട്ടം 2'}, {en: 'Find half of the coefficient of $x$.', ml: '$x$-ന്റെ ഗുണകത്തിന്റെ പകുതി കണ്ടെത്തുക.'}, {en: 'Half of $5$ is $\frac{5}{2}$', ml: '5-ന്റെ പകുതി $\frac{5}{2}$'}],
            [{en: 'Step 3', ml: 'ഘട്ടം 3'}, {en: 'Square this value.', ml: 'ഈ വിലയുടെ വർഗ്ഗം കാണുക.'}, {en: '$(\frac{5}{2})^2 = \frac{25}{4}$', ml: '$(\frac{5}{2})^2 = \frac{25}{4}$'}],
            [{en: 'Step 4', ml: 'ഘട്ടം 4'}, {en: 'Add this squared value to **both** sides.', ml: 'ഈ വർഗ്ഗമൂല്യം **ഇരുവശത്തും** കൂട്ടുക.'}, {en: '$x^2 + 5x + \frac{25}{4} = 24 + \frac{25}{4}$', ml: '$x^2 + 5x + \frac{25}{4} = 24 + \frac{25}{4}$'}],
            [{en: 'Step 5', ml: 'ഘട്ടം 5'}, {en: 'Rewrite the left side as a perfect square and calculate the right side.', ml: 'ഇടതുവശത്തെ പൂർണ്ണവർഗ്ഗമായി എഴുതുകയും വലതുവശം കണക്കാക്കുകയും ചെയ്യുക.'}, {en: '$(x + \frac{5}{2})^2 = \frac{121}{4}$', ml: '$(x + \frac{5}{2})^2 = \frac{121}{4}$'}],
            [{en: 'Step 6', ml: 'ഘട്ടം 6'}, {en: 'Take the square root of both sides (remember $\pm$).', ml: 'ഇരുവശത്തിന്റെയും വർഗ്ഗമൂലം കാണുക ($\pm$ ഓർക്കുക).'}, {en: '$x + \frac{5}{2} = \pm\frac{11}{2}$', ml: '$x + \frac{5}{2} = \pm\frac{11}{2}$'}],
            [{en: 'Step 7', ml: 'ഘട്ടം 7'}, {en: 'Solve for $x$ and discard impossible answers based on context.', ml: '$x$ കണ്ട് പിടിക്കുക, സാഹചര്യത്തിനനുസരിച്ച് അസാധ്യമായ ഉത്തരങ്ങൾ ഒഴിവാക്കുക.', enText: "Note: In geometry, discard negative results."}, {en: '$x = \frac{11}{2} - \frac{5}{2} = 3$', ml: '$x = \frac{11}{2} - \frac{5}{2} = 3$'}]
          ]
      }},

      { type: 'h2', en: '5. Highlights', ml: '5. പ്രധാന കാര്യങ്ങൾ' },
      { type: 'p', en: '**Important Points:**', ml: '**ഓർമ്മിക്കേണ്ടവ:**' },
      { type: 'ul', items: [
        { en: 'To complete the square of an expression like $x^2 + bx$, you must add the square of half of $b$ to both sides of the equation.', ml: '$x^2 + bx$ എന്ന രൂപത്തിലുള്ള സമവാക്യത്തിൽ വർഗ്ഗത്തികവ് നടത്താൻ $b$-യുടെ പകുതിയുടെ വർഗ്ഗം ഇരുവശത്തും കൂട്ടണം.' },
        { en: 'Whenever you take the square root of a number to solve an equation, you must account for both the positive and negative possibilities (e.g., $\sqrt{100}$ means $x = 10$ or $x = -10$).', ml: 'ഒരു സമവാക്യം പരിഹരിക്കാൻ വർഗ്ഗമൂലം കാണുമ്പോൾ പോസിറ്റീവ്, നെഗറ്റീവ് സാധ്യതകൾ കണക്കിലെടുക്കണം (ഉദാഹരണത്തിന് $\sqrt{100}$ എന്നത് 10 അല്ലെങ്കിൽ -10 ആകാം).' },
        { en: 'Always check your final algebraic answers against the real-world logic of the problem (lengths cannot be negative).', ml: 'ലഭിക്കുന്ന ഉത്തരങ്ങൾ പ്രായോഗിക യുക്തിക്ക് (ഉദാഹരണത്തിന് നീളം നെഗറ്റീവ് ആകില്ല) നിരക്കുന്നതാണോ എന്ന് എപ്പോഴും പരിശോധിക്കണം.' }
      ]},

      { type: 'p', en: '**Key Terms:**', ml: '**പ്രധാന പദങ്ങൾ:**' },
      { type: 'ul', items: [
        { en: 'Square Completion (വർഗ്ഗത്തികവ്)', ml: 'വർഗ്ഗത്തികവ് (Square Completion)' },
        { en: 'Second Degree Polynomials (രണ്ടാംകൃതി ബഹുപദങ്ങൾ)', ml: 'രണ്ടാംകൃതി ബഹുപദങ്ങൾ (Second Degree Polynomials)' },
        { en: 'Algebraic Identities (ബീജഗണിത സർവ്വസമവാക്യങ്ങൾ)', ml: 'ബീജഗണിത സർവ്വസമവാക്യങ്ങൾ (Algebraic Identities)' }
      ]},

      { type: 'p', en: '**Formulas:**', ml: '**സൂത്രവാക്യങ്ങൾ:**' },
      { type: 'ul', items: [
        { en: '$x^2 + 2ax + a^2 = (x + a)^2$', ml: '$x^2 + 2ax + a^2 = (x + a)^2$' },
        { en: '$x^2 - 2ax + a^2 = (x - a)^2$', ml: '$x^2 - 2ax + a^2 = (x - a)^2$' }
      ]},

      { type: 'p', en: '**Exam Tips:**', ml: '**പരീക്ഷാ ടിപ്പുകൾ:**' },
      { type: 'ul', items: [
        { en: 'If an area is given for a shape whose sides differ by a known amount (e.g., length is 2m more than breadth), instantly set up your equation as $x(x+2) = \\text{Area}$.', ml: 'വശങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം അറിയാവുന്ന രൂപങ്ങളുടെ പരപ്പളവ് തന്നാൽ (ഉദാഹരണത്തിന് നീളം വീതിയേക്കാൾ 2m കൂടുതൽ), ഉടൻ തന്നെ $x(x+2) = \\text{Area}$ എന്ന രീതിയിൽ സമവാക്യം രൂപീകരിക്കുക.' },
        { en: 'When a problem mentions a right triangle, immediately think of using the area formula $\\frac{1}{2}bh$ or the Pythagorean theorem, and set up your second-degree equation from there.', ml: 'ഒരു മട്ടത്രികോണത്തെക്കുറിച്ച് (Right Triangle) പറഞ്ഞാൽ ഉടൻ തന്നെ പരപ്പളവ് കാണാനുള്ള സൂത്രവാക്യം $\\frac{1}{2}bh$ അല്ലെങ്കിൽ പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിച്ച് രണ്ടാംകൃതി സമവാക്യം രൂപീകരിക്കാൻ ശ്രമിക്കുക.' },
        { en: 'Don\'t forget to add your squared value to the *right side* of the equals sign as well as the left! This is a common mistake.', ml: 'വർഗ്ഗത്തികവിനായി കൂട്ടുന്ന സംഖ്യ സമചിഹ്നത്തിന്റെ ഇടത് വശത്ത് എന്നപോലെ വലത് വശത്തും കൂട്ടാൻ മറക്കരുത്. ഇത് കുട്ടികൾ വരുത്തുന്ന ഒരു പൊതുവായ തെറ്റാണ്.' }
      ]},

      { type: 'h2', en: '6. Quick Revision', ml: '6. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Second degree equations (where $x$ is squared) can be solved by rewriting the equation into the format $(x + a)^2 = c$ or $(x - a)^2 = c$.', ml: 'രണ്ടാംകൃതി സമവാക്യങ്ങളെ $(x + a)^2 = c$ അല്ലെങ്കിൽ $(x - a)^2 = c$ എന്ന രൂപത്തിലേക്ക് മാറ്റിയെഴുതി പരിഹരിക്കാം.' },
        { en: 'You achieve this by taking half the coefficient of the $x$ term, squaring it, and adding it to both sides of the equation.', ml: '$x$-ന്റെ ഗുണകത്തിന്റെ പകുതി എടുത്ത്, അത് വർഗ്ഗം ചെയ്ത് സമവാക്യത്തിന്റെ ഇരുവശത്തും കൂട്ടുന്നതിലൂടെ ഇത് സാധ്യമാക്കാം.' },
        { en: 'Because squares of both negative and positive numbers are positive, equations yield two possible solutions.', ml: 'നെഗറ്റീവ്, പോസിറ്റീവ് സംഖ്യകളുടെ വർഗ്ഗം പോസിറ്റീവ് ആയതിനാൽ ഇത്തരം സമവാക്യങ്ങൾക്ക് രണ്ട് ഉത്തരങ്ങൾ ഉണ്ടാകും.' },
        { en: 'Discard any negative solutions if the $x$ variable represents a physical length or width.', ml: 'നീളമോ വീതിയോ ആണ് കണ്ടുപിടിക്കേണ്ടതെങ്കിൽ നെഗറ്റീവ് ഉത്തരങ്ങൾ ഒഴിവാക്കണം.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Square Completion", ml: "വർഗ്ഗത്തികവ്" }, definition: { en: "A technique to make an expression a perfect square.", ml: "ഒരു ബീജഗണിത വാക്യത്തെ പൂർണ്ണവർഗ്ഗമാക്കി മാറ്റുന്ന രീതി." } },
    { term: { en: "Second Degree Equation", ml: "രണ്ടാംകൃതി സമവാക്യം" }, definition: { en: "Equation where variable's highest power is 2.", ml: "ചരത്തിന്റെ ഏറ്റവും വലിയ കൃതി 2 ആയ സമവാക്യം." } },
    { term: { en: "Roots", ml: "മൂല്യങ്ങൾ / പരിഹാരങ്ങൾ" }, definition: { en: "The numbers that satisfy the equation.", ml: "സമവാക്യത്തെ തൃപ്തിപ്പെടുത്തുന്ന സംഖ്യകൾ." } }
  ],
  quiz: [
    {
      q_id: "math_ch5_q1",
      type: "mcq",
      stem: { en: "What number should be added to $x^2 + 10x$ to make it a perfect square?", ml: "$x^2 + 10x$ എന്നതിനെ ഒരു പൂർണ്ണവർഗ്ഗമാക്കാൻ കൂട്ടേണ്ട സംഖ്യ ഏത്?" },
      options: [
        { k: "A", text: { en: "10", ml: "10" } },
        { k: "B", text: { en: "20", ml: "20" } },
        { k: "C", text: { en: "25", ml: "25" } },
        { k: "D", text: { en: "100", ml: "100" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Half of 10 is 5. Square of 5 is 25.", ml: "10-ന്റെ പകുതി 5 ആണ്. 5-ന്റെ വർഗ്ഗം 25." }
    },
    {
      q_id: "math_ch5_q2",
      type: "mcq",
      stem: { en: "Find the solutions of the equation $(x - 1)^2 = 100$.", ml: "$(x - 1)^2 = 100$ എന്ന സമവാക്യത്തിന്റെ പരിഹാരങ്ങൾ കണ്ടെത്തുക." },
      options: [
        { k: "A", text: { en: "11, -9", ml: "11, -9" } },
        { k: "B", text: { en: "10, -10", ml: "10, -10" } },
        { k: "C", text: { en: "9, -11", ml: "9, -11" } },
        { k: "D", text: { en: "11, 9", ml: "11, 9" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "$x-1 = \\pm 10$. So $x = 1+10=11$ or $x = 1-10=-9$.", ml: "$x-1 = \\pm 10$. അതിനാൽ $x = 1+10=11$ അല്ലെങ്കിൽ $x = 1-10=-9$." }
    },
    {
      q_id: "math_ch5_q3",
      type: "mcq",
      stem: { en: "The length of a rectangle is 2 meters more than its breadth. If breadth is $x$, what is the area?", ml: "ഒരു ചതുരത്തിന്റെ നീളം വീതിയേക്കാൾ 2 മീറ്റർ കൂടുതലാണ്. വീതി $x$ ആണെങ്കിൽ പരപ്പളവ് എത്ര?" },
      options: [
        { k: "A", text: { en: "$x^2 + 2$", ml: "$x^2 + 2" } },
        { k: "B", text: { en: "$x^2 + 2x$", ml: "$x^2 + 2x" } },
        { k: "C", text: { en: "$2x^2$", ml: "$2x^2" } },
        { k: "D", text: { en: "$x + 2$", ml: "$x + 2" } }
      ],
      answer: "B",
      explanation: { en: "Area = $x(x+2) = x^2 + 2x$.", ml: "പരപ്പളവ് = $x(x+2) = x^2 + 2x$." }
    },
    {
      q_id: "math_ch5_q4",
      type: "mcq",
      stem: { en: "What number should be added to $x^2 - 6x$ to complete the square?", ml: "$x^2 - 6x$ എന്നതിൽ വർഗ്ഗത്തികവ് നടത്താൻ കൂട്ടേണ്ട സംഖ്യ ഏത്?" },
      options: [
        { k: "A", text: { en: "6", ml: "6" } },
        { k: "B", text: { en: "12", ml: "12" } },
        { k: "C", text: { en: "9", ml: "9" } },
        { k: "D", text: { en: "36", ml: "36" } }
      ],
      answer: "C",
      explanation: { en: "Half of -6 is -3. $(-3)^2 = 9$.", ml: "-6-ന്റെ പകുതി -3. $(-3)^2 = 9$." }
    },
    {
      q_id: "math_ch5_q5",
      type: "mcq",
      stem: { en: "In the equation $x^2 + 8x = 20$, after square completion, the equation becomes:", ml: "$x^2 + 8x = 20$ എന്ന സമവാക്യത്തിൽ വർഗ്ഗത്തികവ് നടത്തിയാൽ സമവാക്യം എങ്ങനെയാകും?" },
      options: [
        { k: "A", text: { en: "$(x+4)^2 = 36$", ml: "$(x+4)^2 = 36$" } },
        { k: "B", text: { en: "$(x+8)^2 = 84$", ml: "$(x+8)^2 = 84$" } },
        { k: "C", text: { en: "$(x+4)^2 = 20$", ml: "$(x+4)^2 = 20$" } },
        { k: "D", text: { en: "$(x+4)^2 = 4$", ml: "$(x+4)^2 = 4$" } }
      ],
      answer: "A",
      explanation: { en: "Add $4^2 = 16$ to both sides: $x^2 + 8x + 16 = 20 + 16 = 36$.", ml: "ഇരുവശത്തും $4^2 = 16$ കൂട്ടുക: $x^2 + 8x + 16 = 20 + 16 = 36$." }
    },
    {
      q_id: "math_ch5_q6",
      type: "mcq",
      stem: { en: "Which algebraic identity is used to solve $x^2 - 10x = 11$?", ml: "$x^2 - 10x = 11$ എന്ന സമവാക്യം വർഗ്ഗത്തികവ് വഴി പരിഹരിക്കാൻ ഏത് സർവ്വസമവാക്യമാണ് ഉപയോഗിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "$(x+a)^2 = x^2+2ax+a^2$", ml: "$(x+a)^2 = x^2+2ax+a^2$" } },
        { k: "B", text: { en: "$(x-a)^2 = x^2-2ax+a^2$", ml: "$(x-a)^2 = x^2-2ax+a^2$" } },
        { k: "C", text: { en: "$(x+a)(x-a) = x^2-a^2$", ml: "$(x+a)(x-a) = x^2-a^2$" } },
        { k: "D", text: { en: "$(x+a)^2 = (x-a)^2+4ax$", ml: "$(x+a)^2 = (x-a)^2+4ax$" } }
      ],
      answer: "B",
      explanation: { en: "Since there is a minus sign for the middle term, we use $(x-a)^2$.", ml: "മധ്യപദത്തിന് മൈനസ് ചിഹ്നം ഉള്ളതിനാൽ $(x-a)^2$ ഉപയോഗിക്കുന്നു." }
    },
    {
      q_id: "math_ch5_q7",
      type: "mcq",
      stem: { en: "If $x^2 = 144$, then $x$ is:", ml: "$x^2 = 144$ ആണെങ്കിൽ $x$-ന്റെ വില എത്ര?" },
      options: [
        { k: "A", text: { en: "12 only", ml: "12 മാത്രം" } },
        { k: "B", text: { en: "-12 only", ml: "-12 മാത്രം" } },
        { k: "C", text: { en: "12 or -12", ml: "12 അല്ലെങ്കിൽ -12" } },
        { k: "D", text: { en: "14.4", ml: "14.4" } }
      ],
      answer: "C",
      explanation: { en: "Every positive number has two square roots, one positive and one negative.", ml: "ഏതൊരു പോസിറ്റീവ് സംഖ്യയ്ക്കും രണ്ട് വർഗ്ഗമൂലങ്ങൾ ഉണ്ടാകും." }
    },
    {
      q_id: "math_ch5_q8",
      type: "mcq",
      stem: { en: "The sum of a number and its square is 30. What is the equation?", ml: "ഒരു സംഖ്യയുടെയും അതിന്റെ വർഗ്ഗത്തിന്റെയും തുക 30 ആണ്. ഇതിന്റെ സമവാക്യം ഏത്?" },
      options: [
        { k: "A", text: { en: "$x + 2x = 30$", ml: "$x + 2x = 30" } },
        { k: "B", text: { en: "$x^2 + x = 30$", ml: "$x^2 + x = 30" } },
        { k: "C", text: { en: "$x^2 - x = 30$", ml: "$x^2 - x = 30" } },
        { k: "D", text: { en: "$2x^2 = 30$", ml: "$2x^2 = 30" } }
      ],
      answer: "B",
      explanation: { en: "Number is $x$, its square is $x^2$. Sum is $x^2+x=30$.", ml: "സംഖ്യ $x$, അതിന്റെ വർഗ്ഗം $x^2$. തുക $x^2+x=30$." }
    },
    {
      q_id: "math_ch5_q9",
      type: "mcq",
      stem: { en: "Why do we sometimes ignore the negative solution in math problems?", ml: "ഗണിത പ്രശ്നങ്ങളിൽ ചിലപ്പോൾ നെഗറ്റീവ് ഉത്തരം ഒഴിവാക്കുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "Negative numbers don't exist", ml: "നെഗറ്റീവ് സംഖ്യകൾ നിലവിലില്ലാത്തതുകൊണ്ട്" } },
        { k: "B", text: { en: "Because lengths and widths cannot be negative", ml: "നീളവും വീതിയും നെഗറ്റീവ് ആകാൻ കഴിയില്ല എന്നതുകൊണ്ട്" } },
        { k: "C", text: { en: "The formula only works for positive numbers", ml: "സൂത്രവാക്യം പോസിറ്റീവ് സംഖ്യകൾക്ക് മാത്രമേ ബാധകമാകൂ എന്നതുകൊണ്ട്" } },
        { k: "D", text: { en: "It is a rule in algebra", ml: "ബീജഗണിതത്തിലെ ഒരു നിയമമായതുകൊണ്ട്" } }
      ],
      answer: "B",
      explanation: { en: "In geometric contexts, physical dimensions must be positive.", ml: "ജ്യാമിതീയ സാഹചര്യങ്ങളിൽ നീളം എപ്പോഴും പോസിറ്റീവ് ആയിരിക്കണം." }
    },
    {
      q_id: "math_ch5_q10",
      type: "mcq",
      stem: { en: "For the equation $x^2 + 1.2x = 0.64$, what number completes the square?", ml: "$x^2 + 1.2x = 0.64$ എന്ന സമവാക്യത്തിൽ വർഗ്ഗത്തികവ് നടത്താൻ കൂട്ടേണ്ട സംഖ്യ ഏത്?" },
      options: [
        { k: "A", text: { en: "0.6", ml: "0.6" } },
        { k: "B", text: { en: "0.36", ml: "0.36" } },
        { k: "C", text: { en: "1.44", ml: "1.44" } },
        { k: "D", text: { en: "0.12", ml: "0.12" } }
      ],
      answer: "B",
      explanation: { en: "Half of 1.2 is 0.6. $(0.6)^2 = 0.36$.", ml: "1.2-ന്റെ പകുതി 0.6. $(0.6)^2 = 0.36$." }
    },
    {
      q_id: "math_ch5_q11",
      type: "mcq",
      stem: { en: "Solve: $x^2 + 4x + 4 = 25$", ml: "പരിഹരിക്കുക: $x^2 + 4x + 4 = 25$" },
      options: [
        { k: "A", text: { en: "3, -7", ml: "3, -7" } },
        { k: "B", text: { en: "5, -5", ml: "5, -5" } },
        { k: "C", text: { en: "7, -3", ml: "7, -3" } },
        { k: "D", text: { en: "3, 7", ml: "3, 7" } }
      ],
      answer: "A",
      explanation: { en: "$(x+2)^2 = 25 \\Rightarrow x+2 = \\pm 5 \\Rightarrow x = 3, -7$.", ml: "$(x+2)^2 = 25 \\Rightarrow x+2 = \\pm 5 \\Rightarrow x = 3, -7$." }
    },
    {
      q_id: "math_ch5_q12",
      type: "mcq",
      stem: { en: "One side of a square is increased by 3m and the other side decreased by 3m, the area of the resulting rectangle is 16 sq.m. What was the side of the original square?", ml: "ഒരു സമചതുരത്തിന്റെ ഒരു വശം 3m കൂട്ടുകയും മറ്റേ വശം 3m കുറയ്ക്കുകയും ചെയ്തപ്പോൾ ലഭിച്ച ചതുരത്തിന്റെ പരപ്പളവ് 16 ചതുരശ്ര മീറ്റർ ആണ്. സമചതുരത്തിന്റെ വശം എത്രയായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "4m", ml: "4m" } },
        { k: "B", text: { en: "5m", ml: "5m" } },
        { k: "C", text: { en: "7m", ml: "7m" } },
        { k: "D", text: { en: "9m", ml: "9m" } }
      ],
      answer: "B",
      explanation: { en: "$(x+3)(x-3) = 16 \\Rightarrow x^2 - 9 = 16 \\Rightarrow x^2 = 25 \\Rightarrow x = 5$.", ml: "$(x+3)(x-3) = 16 \\Rightarrow x^2 - 9 = 16 \\Rightarrow x^2 = 25 \\Rightarrow x = 5$." }
    },
    {
      q_id: "math_ch5_q13",
      type: "mcq",
      stem: { en: "If $x^2 - 4x = -3$, what is $x$?", ml: "$x^2 - 4x = -3$ ആണെങ്കിൽ $x$ എത്ര?" },
      options: [
        { k: "A", text: { en: "1, 3", ml: "1, 3" } },
        { k: "B", text: { en: "-1, -3", ml: "-1, -3" } },
        { k: "C", text: { en: "2, 1", ml: "2, 1" } },
        { k: "D", text: { en: "4, 0", ml: "4, 0" } }
      ],
      answer: "A",
      explanation: { en: "$x^2 - 4x + 4 = -3 + 4 = 1 \\Rightarrow (x-2)^2 = 1 \\Rightarrow x-2 = \\pm 1 \\Rightarrow x=3, 1$.", ml: "$x^2 - 4x + 4 = 1 \\Rightarrow (x-2)^2 = 1 \\Rightarrow x-2 = \\pm 1 \\Rightarrow x=3, 1$." }
    },
    {
      q_id: "math_ch5_q14",
      type: "mcq",
      stem: { en: "The product of two consecutive natural numbers is 20. Find the numbers.", ml: "തുടർച്ചയായ രണ്ട് എണ്ണൽ സംഖ്യകളുടെ ഗുണനഫലം 20 ആണ്. സംഖ്യകൾ ഏവ?" },
      options: [
        { k: "A", text: { en: "2, 10", ml: "2, 10" } },
        { k: "B", text: { en: "4, 5", ml: "4, 5" } },
        { k: "C", text: { en: "5, 6", ml: "5, 6" } },
        { k: "D", text: { en: "10, 2", ml: "10, 2" } }
      ],
      answer: "B",
      explanation: { en: "$x(x+1) = 20 \\Rightarrow x^2 + x = 20 \\Rightarrow x^2+x+0.25 = 20.25 \\Rightarrow x+0.5=4.5 \\Rightarrow x=4$. Numbers are 4, 5.", ml: "$x(x+1) = 20$. പരിഹരിച്ചാൽ $x=4$ എന്ന് ലഭിക്കും. സംഖ്യകൾ 4, 5." }
    },
    {
      q_id: "math_ch5_q15",
      type: "mcq",
      stem: { en: "Complete the square: $x^2 + x + ... = (...)^2$", ml: "വർഗ്ഗത്തികവ് നടത്തുക: $x^2 + x + ... = (...)^2$" },
      options: [
        { k: "A", text: { en: "1, $(x+1)^2$", ml: "1, $(x+1)^2$" } },
        { k: "B", text: { en: "1/4, $(x+1/2)^2$", ml: "1/4, $(x+1/2)^2$" } },
        { k: "C", text: { en: "1/2, $(x+1/4)^2$", ml: "1/2, $(x+1/4)^2$" } },
        { k: "D", text: { en: "2, $(x+2)^2$", ml: "2, $(x+2)^2$" } }
      ],
      answer: "B",
      explanation: { en: "Coefficient of $x$ is 1. Half is 1/2. Square is 1/4.", ml: "$x$-ന്റെ ഗുണകം 1 ആണ്. പകുതി 1/2. വർഗ്ഗം 1/4." }
    },
    {
      q_id: "math_ch5_q16",
      type: "mcq",
      stem: { en: "If the area of a square is 400 sq.cm, its side is:", ml: "ഒരു സമചതുരത്തിന്റെ പരപ്പളവ് 400 ചതുരശ്ര സെന്റീമീറ്റർ ആണെങ്കിൽ അതിന്റെ വശം:" },
      options: [
        { k: "A", text: { en: "20 cm", ml: "20 cm" } },
        { k: "B", text: { en: "200 cm", ml: "200 cm" } },
        { k: "C", text: { en: "40 cm", ml: "40 cm" } },
        { k: "D", text: { en: "100 cm", ml: "100 cm" } }
      ],
      answer: "A",
      explanation: { en: "$x^2 = 400 \\Rightarrow x = 20$.", ml: "$x^2 = 400 \\Rightarrow x = 20$." }
    },
    {
      q_id: "math_ch5_q17",
      type: "mcq",
      stem: { en: "Which of these is a second degree equation?", ml: "താഴെ പറയുന്നവയിൽ രണ്ടാംകൃതി സമവാക്യം ഏത്?" },
      options: [
        { k: "A", text: { en: "$2x + 5 = 0$", ml: "$2x + 5 = 0" } },
        { k: "B", text: { en: "$x^2 - 9 = 0$", ml: "$x^2 - 9 = 0" } },
        { k: "C", text: { en: "$x^3 + x^2 = 1$", ml: "$x^3 + x^2 = 1" } },
        { k: "D", text: { en: "$1/x = 5$", ml: "$1/x = 5" } }
      ],
      answer: "B",
      explanation: { en: "Highest power of $x$ is 2.", ml: "$x$-ന്റെ ഏറ്റവും ഉയർന്ന കൃതി 2 ആണ്." }
    },
    {
      q_id: "math_ch5_q18",
      type: "mcq",
      stem: { en: "What is the square root of 625?", ml: "625-ന്റെ വർഗ്ഗമൂലം എത്ര?" },
      options: [
        { k: "A", text: { en: "15", ml: "15" } },
        { k: "B", text: { en: "25", ml: "25" } },
        { k: "C", text: { en: "35", ml: "35" } },
        { k: "D", text: { en: "45", ml: "45" } }
      ],
      answer: "B",
      explanation: { en: "$25 \\times 25 = 625$.", ml: "$25 \\times 25 = 625$." }
    },
    {
      q_id: "math_ch5_q19",
      type: "mcq",
      stem: { en: "If $x^2 + 2ax + a^2 = 49$, then $x + a$ is:", ml: "$x^2 + 2ax + a^2 = 49$ ആണെങ്കിൽ $x + a$ എത്ര?" },
      options: [
        { k: "A", text: { en: "7", ml: "7" } },
        { k: "B", text: { en: "-7", ml: "-7" } },
        { k: "C", text: { en: "$\pm 7$", ml: "$\pm 7$" } },
        { k: "D", text: { en: "49", ml: "49" } }
      ],
      answer: "C",
      explanation: { en: "$(x+a)^2 = 49 \\Rightarrow x+a = \pm 7$.", ml: "$(x+a)^2 = 49 \\Rightarrow x+a = \pm 7$." }
    },
    {
      q_id: "math_ch5_q20",
      type: "mcq",
      stem: { en: "A right triangle has perpendicular sides $x$ and $x+5$. If area is 12, the equation is:", ml: "ഒരു മട്ടത്രികോണത്തിന്റെ ലംബവശങ്ങൾ $x$, $x+5$ എന്നിവയാണ്. പരപ്പളവ് 12 ആണെങ്കിൽ സമവാക്യം ഏത്?" },
      options: [
        { k: "A", text: { en: "$x(x+5) = 12$", ml: "$x(x+5) = 12" } },
        { k: "B", text: { en: "$\\frac{1}{2}x(x+5) = 12$", ml: "$\\frac{1}{2}x(x+5) = 12" } },
        { k: "C", text: { en: "$x^2 + 5x = 12$", ml: "$x^2 + 5x = 12" } },
        { k: "D", text: { en: "$x + x + 5 = 12$", ml: "$x + x + 5 = 12" } }
      ],
      answer: "B",
      explanation: { en: "Area of triangle = $\\frac{1}{2}bh$.", ml: "ത്രികോണത്തിന്റെ പരപ്പളവ് = $\\frac{1}{2}bh$." }
    },
    {
      q_id: "math_ch5_q21",
      type: "mcq",
      stem: { en: "In $50x - x^2 = 525$, multiplying by -1 gives:", ml: "$50x - x^2 = 525$ എന്നതിനെ -1 കൊണ്ട് ഗുണിച്ചാൽ ലഭിക്കുന്നത്:", enText: "Note: Re-arranging for square completion." },
      options: [
        { k: "A", text: { en: "$x^2 - 50x = -525$", ml: "$x^2 - 50x = -525$" } },
        { k: "B", text: { en: "$x^2 + 50x = 525$", ml: "$x^2 + 50x = 525$" } },
        { k: "C", text: { en: "$x^2 - 50x = 525$", ml: "$x^2 - 50x = 525$" } },
        { k: "D", text: { en: "$-50x + x^2 = -525$", ml: "$-50x + x^2 = -525$" } }
      ],
      answer: "A",
      explanation: { en: "All terms change signs.", ml: "എല്ലാ പദങ്ങളുടെയും ചിഹ്നം മാറുന്നു." }
    },
    {
      q_id: "math_ch5_q22",
      type: "mcq",
      stem: { en: "The sum of squares of two consecutive natural numbers is 25. The numbers are:", ml: "തുടർച്ചയായ രണ്ട് എണ്ണൽ സംഖ്യകളുടെ വർഗ്ഗങ്ങളുടെ തുക 25 ആണ്. സംഖ്യകൾ ഏവ?" },
      options: [
        { k: "A", text: { en: "2, 3", ml: "2, 3" } },
        { k: "B", text: { en: "3, 4", ml: "3, 4" } },
        { k: "C", text: { en: "4, 5", ml: "4, 5" } },
        { k: "D", text: { en: "5, 6", ml: "5, 6" } }
      ],
      answer: "B",
      explanation: { en: "$3^2 + 4^2 = 9 + 16 = 25$.", ml: "$3^2 + 4^2 = 9 + 16 = 25$." }
    },
    {
      q_id: "math_ch5_q23",
      type: "mcq",
      stem: { en: "A square of side $x$ has area $A$. If the side is doubled, the area becomes:", ml: "$x$ വശമുള്ള സമചതുരത്തിന്റെ പരപ്പളവ് $A$ ആണ്. വശം ഇരട്ടിയാക്കിയാൽ പുതിയ പരപ്പളവ് എത്ര?" },
      options: [
        { k: "A", text: { en: "$2A$", ml: "$2A$" } },
        { k: "B", text: { en: "$4A$", ml: "$4A$" } },
        { k: "C", text: { en: "$A^2$", ml: "$A^2$" } },
        { k: "D", text: { en: "$A+2$", ml: "$A+2$" } }
      ],
      answer: "B",
      explanation: { en: "$(2x)^2 = 4x^2 = 4A$.", ml: "$(2x)^2 = 4x^2 = 4A$." }
    },
    {
      q_id: "math_ch5_q24",
      type: "mcq",
      stem: { en: "Which number added to $x^2 + \frac{1}{2}x$ completes the square?", ml: "$x^2 + \frac{1}{2}x$ എന്നതിൽ വർഗ്ഗത്തികവ് നടത്താൻ കൂട്ടേണ്ട സംഖ്യ ഏത്?" },
      options: [
        { k: "A", text: { en: "1/4", ml: "1/4" } },
        { k: "B", text: { en: "1/16", ml: "1/16" } },
        { k: "C", text: { en: "1/2", ml: "1/2" } },
        { k: "D", text: { en: "1/8", ml: "1/8" } }
      ],
      answer: "B",
      explanation: { en: "Half of 1/2 is 1/4. $(1/4)^2 = 1/16$.", ml: "1/2-ന്റെ പകുതി 1/4. $(1/4)^2 = 1/16$." }
    },
    {
      q_id: "math_ch5_q25",
      type: "mcq",
      stem: { en: "The sum of a number and its reciprocal is 2.5. The number is:", ml: "ഒരു സംഖ്യയുടെയും അതിന്റെ വ്യുൽക്രമത്തിന്റെയും തുക 2.5 ആണ്. സംഖ്യ ഏത്?" },
      options: [
        { k: "A", text: { en: "1", ml: "1" } },
        { k: "B", text: { en: "2", ml: "2" } },
        { k: "C", text: { en: "3", ml: "3" } },
        { k: "D", text: { en: "0.5", ml: "0.5" } }
      ],
      answer: "B",
      explanation: { en: "$2 + 1/2 = 2.5$.", ml: "$2 + 1/2 = 2.5$." }
    },
    {
      q_id: "math_ch5_q26",
      type: "mcq",
      stem: { en: "If $x^2 + 6x = 7$, then $(x+3)^2 = ...$", ml: "$x^2 + 6x = 7$ ആണെങ്കിൽ $(x+3)^2$ എത്ര?" },
      options: [
        { k: "A", text: { en: "7", ml: "7" } },
        { k: "B", text: { en: "10", ml: "10" } },
        { k: "C", text: { en: "16", ml: "16" } },
        { k: "D", text: { en: "13", ml: "13" } }
      ],
      answer: "C",
      explanation: { en: "$x^2+6x+9 = 7+9 = 16$.", ml: "$x^2+6x+9 = 7+9 = 16$." }
    },
    {
      q_id: "math_ch5_q27",
      type: "mcq",
      stem: { en: "The sides of a rectangle are $x+3$ and $x-3$. Its area is:", ml: "ഒരു ചതുരത്തിന്റെ വശങ്ങൾ $x+3, x-3$ എന്നിവയാണ്. അതിന്റെ പരപ്പളവ്:" },
      options: [
        { k: "A", text: { en: "$x^2 + 9$", ml: "$x^2 + 9" } },
        { k: "B", text: { en: "$x^2 - 9$", ml: "$x^2 - 9" } },
        { k: "C", text: { en: "$x^2 - 6$", ml: "$x^2 - 6" } },
        { k: "D", text: { en: "$x^2 - 3x$", ml: "$x^2 - 3x" } }
      ],
      answer: "B",
      explanation: { en: "Using $(a+b)(a-b) = a^2-b^2$.", ml: "$(a+b)(a-b) = a^2-b^2$ ഉപയോഗിച്ച്." }
    },
    {
      q_id: "math_ch5_q28",
      type: "mcq",
      stem: { en: "If $x$ is the side of a square, $x+1$ is the side of another square. The difference in their areas is:", ml: "$x$ ഒരു സമചതുരത്തിന്റെ വശമാണ്. $x+1$ മറ്റൊരു സമചതുരത്തിന്റെ വശവും. അവയുടെ പരപ്പളവുകൾ തമ്മിലുള്ള വ്യത്യാസം എത്ര?" },
      options: [
        { k: "A", text: { en: "1", ml: "1" } },
        { k: "B", text: { en: "$2x + 1$", ml: "$2x + 1" } },
        { k: "C", text: { en: "$x^2 + 1$", ml: "$x^2 + 1" } },
        { k: "D", text: { en: "$2x$", ml: "$2x" } }
      ],
      answer: "B",
      explanation: { en: "$(x+1)^2 - x^2 = x^2+2x+1 - x^2 = 2x+1$.", ml: "$(x+1)^2 - x^2 = x^2+2x+1 - x^2 = 2x+1$." }
    },
    {
      q_id: "math_ch5_q29",
      type: "mcq",
      stem: { en: "What is the square root of 324?", ml: "324-ന്റെ വർഗ്ഗമൂലം എത്ര?" },
      options: [
        { k: "A", text: { en: "16", ml: "16" } },
        { k: "B", text: { en: "18", ml: "18" } },
        { k: "C", text: { en: "22", ml: "22" } },
        { k: "D", text: { en: "14", ml: "14" } }
      ],
      answer: "B",
      explanation: { en: "$18 \\times 18 = 324$.", ml: "$18 \\times 18 = 324$." }
    },
    {
      q_id: "math_ch5_q30",
      type: "mcq",
      stem: { en: "For $(x-a)^2 = b$ to have solutions, $b$ must be:", ml: "$(x-a)^2 = b$ എന്നതിന് പരിഹാരങ്ങൾ ഉണ്ടാകണമെങ്കിൽ $b$ എങ്ങനെയുള്ള സംഖ്യയായിരിക്കണം?" },
      options: [
        { k: "A", text: { en: "Negative", ml: "നെഗറ്റീവ്" } },
        { k: "B", text: { en: "Positive or Zero", ml: "പോസിറ്റീവ് അല്ലെങ്കിൽ പൂജ്യം" } },
        { k: "C", text: { en: "Always Zero", ml: "എപ്പോഴും പൂജ്യം" } },
        { k: "D", text: { en: "A perfect square only", ml: "ഒരു പൂർണ്ണവർഗ്ഗം മാത്രം" } }
      ],
      answer: "B",
      explanation: { en: "Squares of real numbers cannot be negative.", ml: "യഥാർത്ഥ സംഖ്യകളുടെ വർഗ്ഗം നെഗറ്റീവ് ആകാൻ കഴിയില്ല." }
    }
  ]
};
