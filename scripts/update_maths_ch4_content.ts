import admin from 'firebase-admin';
import { Lesson, ContentBlock, QuizQuestion } from '../src/data/curriculum';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(
  readFileSync('/home/akpsaheer/Edumate/wiselearnonline-firebase-adminsdk-fbsvc-a2e1848b0f.json', 'utf8')
);

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

function transformForFirestore(data: any): any {
  if (data === undefined) return null;
  if (data === null) return null;
  if (Array.isArray(data)) {
    return data.map(item => {
      if (Array.isArray(item)) return { items: transformForFirestore(item) };
      return transformForFirestore(item);
    });
  }
  if (typeof data === 'object') {
    const result: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        result[key] = transformForFirestore(data[key]);
      }
    }
    return result;
  }
  return data;
}

const quiz: QuizQuestion[] = [
  {
    id: "ch4-q1",
    question: { en: "What is probability?", ml: "എന്താണ് സംഭാവ്യത (Probability)?" },
    options: [
      { en: "A way to predict the future exactly", ml: "ഭാവി കൃത്യമായി പ്രവചിക്കാനുള്ള വഴി" },
      { en: "A mathematical measure of the chance of an event", ml: "ഒരു കാര്യം സംഭവിക്കാനുള്ള സാധ്യതയുടെ ഗണിതപരമായ അളവ്" },
      { en: "The sum of all numbers", ml: "എല്ലാ സംഖ്യകളുടെയും തുക" },
      { en: "A collection of random data", ml: "ക്രമരഹിതമായ വിവരങ്ങളുടെ കൂട്ടം" }
    ],
    correctAnswer: 1,
    explanation: { en: "Probability quantifies how likely an event is to occur.", ml: "ഒരു കാര്യം സംഭവിക്കാനുള്ള സാധ്യതയെ അക്കങ്ങൾ കൊണ്ട് സൂചിപ്പിക്കുന്നതാണ് സംഭാവ്യത." }
  },
  {
    id: "ch4-q2",
    question: { en: "How is basic probability calculated?", ml: "അടിസ്ഥാന സംഭാവ്യത എങ്ങനെയാണ് കണക്കാക്കുന്നത്?" },
    options: [
      { en: "Total Outcomes / Favorable Outcomes", ml: "ആകെ ഫലങ്ങൾ / അനുകൂല ഫലങ്ങൾ" },
      { en: "Favorable Outcomes / Total Outcomes", ml: "അനുകൂല ഫലങ്ങൾ / ആകെ ഫലങ്ങൾ" },
      { en: "Favorable Outcomes × Total Outcomes", ml: "അനുകൂല ഫലങ്ങൾ × ആകെ ഫലങ്ങൾ" },
      { en: "Favorable Outcomes + Total Outcomes", ml: "അനുകൂല ഫലങ്ങൾ + ആകെ ഫലങ്ങൾ" }
    ],
    correctAnswer: 1,
    explanation: { en: "Probability = Favorable Outcomes / Total Outcomes.", ml: "സംഭാവ്യത = അനുകൂല ഫലങ്ങൾ / ആകെ ഫലങ്ങൾ." }
  },
  {
    id: "ch4-q3",
    question: { en: "A box has 6 black and 5 white beads. What is the probability of picking a black bead?", ml: "ഒരു പെട്ടിയിൽ 6 കറുത്ത മുത്തുകളും 5 വെളുത്ത മുത്തുകളുമുണ്ട്. കറുത്ത മുത്ത് ലഭിക്കാനുള്ള സംഭാവ്യത എത്ര?" },
    options: [
      { en: "6/5", ml: "6/5" },
      { en: "5/11", ml: "5/11" },
      { en: "6/11", ml: "6/11" },
      { en: "1/11", ml: "1/11" }
    ],
    correctAnswer: 2,
    explanation: { en: "Favorable (black) = 6, Total = 6 + 5 = 11. Prob = 6/11.", ml: "അനുകൂല ഫലങ്ങൾ (കറുപ്പ്) = 6, ആകെ ഫലങ്ങൾ = 11. സംഭാവ്യത = 6/11." }
  },
  {
    id: "ch4-q4",
    question: { en: "If one box has 'm' items and another has 'n' items, what is the total number of pairs?", ml: "ഒരു പെട്ടിയിൽ 'm' വസ്തുക്കളും മറ്റൊന്നിൽ 'n' വസ്തുക്കളുമുണ്ടെങ്കിൽ ആകെ എത്ര ജോടികൾ (Pairs) ഉണ്ടാക്കാം?" },
    options: [
      { en: "m + n", ml: "m + n" },
      { en: "m × n", ml: "m × n" },
      { en: "mⁿ", ml: "mⁿ" },
      { en: "m / n", ml: "m / n" }
    ],
    correctAnswer: 1,
    explanation: { en: "The total number of combinations is found by multiplying the counts.", ml: "ആകെ ജോടികൾ കാണാൻ ഓരോന്നിലെയും എണ്ണങ്ങൾ തമ്മിൽ ഗുണിക്കണം (m × n)." }
  },
  {
    id: "ch4-q5",
    question: { en: "Geometrical probability is based on the ratio of ?", ml: "ജ്യാമിതീയ സംഭാവ്യത (Geometrical Probability) എന്തിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
    options: [
      { en: "Lengths", ml: "നീളങ്ങൾ" },
      { en: "Weights", ml: "ഭാരങ്ങൾ" },
      { en: "Areas", ml: "പരപ്പളവുകൾ (Areas)" },
      { en: "Volumes", ml: "വ്യാപ്തങ്ങൾ" }
    ],
    correctAnswer: 2,
    explanation: { en: "It is the ratio of the area of the specific region to the total area.", ml: "പ്രത്യേക ഭാഗത്തിന്റെ പരപ്പളവും ആകെ പരപ്പളവും തമ്മിലുള്ള അനുപാതമാണിത്." }
  },
  {
    id: "ch4-q6",
    question: { en: "A triangle inside a rectangle (joining midpoint of one side to endpoints of opposite side) has what area ratio?", ml: "ഒരു ചതുരത്തിനുള്ളിൽ ഒരു വശത്തിന്റെ മധ്യബിന്ദുവും എതിർവശത്തിന്റെ അഗ്രങ്ങളും യോജിപ്പിച്ചുണ്ടാക്കുന്ന ത്രികോണത്തിന്റെ പരപ്പളവ് ചതുരത്തിന്റെ എത്ര ഭാഗമാണ്?" },
    options: [
      { en: "1/4", ml: "1/4" },
      { en: "1/2", ml: "1/2" },
      { en: "1/3", ml: "1/3" },
      { en: "2/3", ml: "2/3" }
    ],
    correctAnswer: 1,
    explanation: { en: "The area of such a triangle is exactly half the rectangle's area.", ml: "ഇത്തരത്തിലുള്ള ത്രികോണത്തിന്റെ പരപ്പളവ് ചതുരത്തിന്റെ പരപ്പളവിന്റെ പകുതിയായിരിക്കും (1/2)." }
  },
  {
    id: "ch4-q7",
    question: { en: "What is the Monte Carlo method used for?", ml: "മോണ്ടി കാർലോ രീതി (Monte Carlo Method) എന്തിനാണ് ഉപയോഗിക്കുന്നത്?" },
    options: [
      { en: "Sorting numbers", ml: "സംഖ്യകൾ ക്രമീകരിക്കാൻ" },
      { en: "Estimating area of complex shapes using random dots", ml: "ക്രമരഹിതമായ ബിന്ദുക്കൾ ഉപയോഗിച്ച് സങ്കീർണ്ണമായ രൂപങ്ങളുടെ പരപ്പളവ് ഏകദേശമായി കണക്കാക്കാൻ" },
      { en: "Drawing perfect circles", ml: "വൃത്തങ്ങൾ വരയ്ക്കാൻ" },
      { en: "Calculating square roots", ml: "വർഗ്ഗമൂലം കാണാൻ" }
    ],
    correctAnswer: 1,
    explanation: { en: "It uses probability and random sampling to solve complex problems.", ml: "ക്രമരഹിതമായ ബിന്ദുക്കളും സംഭാവ്യതയും ഉപയോഗിച്ച് സങ്കീർണ്ണമായ പരപ്പളവുകൾ കണ്ടെത്താൻ ഇത് സഹായിക്കുന്നു." }
  },
  {
    id: "ch4-q8",
    question: { en: "What is the probability of picking an even number from 1 to 10?", ml: "1 മുതൽ 10 വരെയുള്ള സംഖ്യകളിൽ നിന്ന് ഒരു ഇരട്ടസംഖ്യ ലഭിക്കാനുള്ള സംഭാവ്യത എത്ര?" },
    options: [
      { en: "1/2", ml: "1/2" },
      { en: "1/10", ml: "1/10" },
      { en: "5/10 (or 1/2)", ml: "5/10 (അല്ലെങ്കിൽ 1/2)" },
      { en: "2/10", ml: "2/10" }
    ],
    correctAnswer: 2,
    explanation: { en: "Even numbers are 2, 4, 6, 8, 10 (Total 5). Prob = 5/10 = 1/2.", ml: "ഇരട്ടസംഖ്യകൾ 2, 4, 6, 8, 10 എന്നിവയാണ് (ആകെ 5). സംഭാവ്യത = 5/10 = 1/2." }
  },
  {
    id: "ch4-q9",
    question: { en: "Express 1/5 as a percentage.", ml: "1/5 എന്ന സംഭാവ്യതയെ ശതമാനത്തിൽ (Percentage) എഴുതുക." },
    options: [
      { en: "10%", ml: "10%" },
      { en: "20%", ml: "20%" },
      { en: "50%", ml: "50%" },
      { en: "5%", ml: "5%" }
    ],
    correctAnswer: 1,
    explanation: { en: "(1/5) × 100 = 20%.", ml: "(1/5) × 100 = 20%." }
  },
  {
    id: "ch4-q10",
    question: { en: "How many factors does 1000 have? (1000 = 2³ × 5³)", ml: "1000-ന് എത്ര ഘടകങ്ങളുണ്ട് (Factors)? (1000 = 2³ × 5³)" },
    options: [
      { en: "9", ml: "9" },
      { en: "16", ml: "16" },
      { en: "10", ml: "10" },
      { en: "12", ml: "12" }
    ],
    correctAnswer: 1,
    explanation: { en: "Number of factors = (3+1) × (3+1) = 4 × 4 = 16.", ml: "ഘടകങ്ങളുടെ എണ്ണം = (3+1) × (3+1) = 4 × 4 = 16." }
  },
  {
    id: "ch4-q11",
    question: { en: "Probability of picking a factor of 1000 from 1 to 1000 is ?", ml: "1 മുതൽ 1000 വരെയുള്ള സംഖ്യകളിൽ 1000-ന്റെ ഘടകം ലഭിക്കാനുള്ള സംഭാവ്യത എത്ര?" },
    options: [
      { en: "16/1000", ml: "16/1000" },
      { en: "1/1000", ml: "1/1000" },
      { en: "10/1000", ml: "10/1000" },
      { en: "16/100", ml: "16/100" }
    ],
    correctAnswer: 0,
    explanation: { en: "There are 16 factors out of 1000 numbers.", ml: "ആകെ 1000 സംഖ്യകളിൽ 16 ഘടകങ്ങളാണുള്ളത്. അതിനാൽ 16/1000." }
  },
  {
    id: "ch4-q12",
    question: { en: "If one box has 10 slips and another has 5, total possible pairs drawn are ?", ml: "ഒരു പെട്ടിയിൽ 10 സ്ലിപ്പുകളും മറ്റൊന്നിൽ 5 എണ്ണവുമുണ്ടെങ്കിൽ ആകെ എത്ര ജോടികൾ ലഭിക്കാം?" },
    options: [
      { en: "15", ml: "15" },
      { en: "50", ml: "50" },
      { en: "5", ml: "5" },
      { en: "10", ml: "10" }
    ],
    correctAnswer: 1,
    explanation: { en: "10 × 5 = 50 pairs.", ml: "10 × 5 = 50 ജോടികൾ." }
  },
  {
    id: "ch4-q13",
    question: { en: "Probability of an impossible event is ?", ml: "ഒരിക്കലും സംഭവിക്കാത്ത ഒരു കാര്യത്തിന്റെ സംഭാവ്യത എത്രയാണ്?" },
    options: [
      { en: "1", ml: "1" },
      { en: "0.5", ml: "0.5" },
      { en: "0", ml: "0" },
      { en: "Infinite", ml: "അനന്തം" }
    ],
    correctAnswer: 2,
    explanation: { en: "Impossible events have a probability of 0.", ml: "സംഭവിക്കാൻ സാധ്യതയില്ലാത്ത കാര്യങ്ങളുടെ സംഭാവ്യത പൂജ്യമാണ്." }
  },
  {
    id: "ch4-q14",
    question: { en: "Probability of a certain event is ?", ml: "തീർച്ചയായും സംഭവിക്കുന്ന ഒരു കാര്യത്തിന്റെ സംഭാവ്യത എത്ര?" },
    options: [
      { en: "0", ml: "0" },
      { en: "0.5", ml: "0.5" },
      { en: "1", ml: "1" },
      { en: "100", ml: "100" }
    ],
    correctAnswer: 2,
    explanation: { en: "Certain events have a probability of 1 (or 100%).", ml: "തീർച്ചയായും സംഭവിക്കുന്ന കാര്യങ്ങളുടെ സംഭാവ്യത 1 ആണ്." }
  },
  {
    id: "ch4-q15",
    question: { en: "Box 1 has 5 odd numbers, Box 2 has 3 odd. Out of 50 total pairs, how many are both odd?", ml: "പെട്ടി 1-ൽ 5 ഒറ്റസംഖ്യകളും പെട്ടി 2-ൽ 3 ഒറ്റസംഖ്യകളുമുണ്ട്. ആകെ 50 ജോടികളിൽ രണ്ടിലും ഒറ്റസംഖ്യ വരുന്നവ എത്ര?" },
    options: [
      { en: "8", ml: "8" },
      { en: "15", ml: "15" },
      { en: "2", ml: "2" },
      { en: "50", ml: "50" }
    ],
    correctAnswer: 1,
    explanation: { en: "5 × 3 = 15 pairs.", ml: "5 × 3 = 15 ജോടികൾ." }
  },
  {
    id: "ch4-q16",
    question: { en: "Probability can be a number between ?", ml: "സംഭാവ്യത ഏത് രണ്ട് സംഖ്യകൾക്കിടയിലുള്ള വിലയായിരിക്കും?" },
    options: [
      { en: "-1 and 1", ml: "-1 നും 1 നും ഇടയിൽ" },
      { en: "0 and 1", ml: "0 നും 1 നും ഇടയിൽ" },
      { en: "1 and 100", ml: "1 നും 100 നും ഇടയിൽ" },
      { en: "0 and 10", ml: "0 നും 10 നും ഇടയിൽ" }
    ],
    correctAnswer: 1,
    explanation: { en: "Probability always ranges from 0 to 1.", ml: "സംഭാവ്യത എപ്പോഴും 0 മുതൽ 1 വരെയുള്ള ഒരു വിലയായിരിക്കും." }
  },
  {
    id: "ch4-q17",
    question: { en: "In 'at least one' problems, it is often easier to find the probability of ?", ml: "'കുറഞ്ഞത് ഒന്ന്' (At least one) എന്ന രീതിയിലുള്ള ചോദ്യങ്ങളിൽ ആദ്യം ഏത് കാണുന്നതാണ് എളുപ്പം?" },
    options: [
      { en: "All occurring", ml: "എല്ലാം സംഭവിക്കുന്നത്" },
      { en: "None occurring", ml: "ഒന്നും സംഭവിക്കാത്തത്" },
      { en: "The first one occurring", ml: "ആദ്യത്തേത് മാത്രം സംഭവിക്കുന്നത്" },
      { en: "Half occurring", ml: "പകുതി സംഭവിക്കുന്നത്" }
    ],
    correctAnswer: 1,
    explanation: { en: "P(at least one) = 1 - P(none).", ml: "P(കുറഞ്ഞത് ഒന്ന്) = 1 - P(ഒന്നുമില്ല)." }
  },
  {
    id: "ch4-q18",
    question: { en: "Two coins are tossed. Total possible outcomes are ?", ml: "രണ്ട് നാണയങ്ങൾ ടോസ് ചെയ്യുന്നു. ആകെ ലഭിക്കാവുന്ന ഫലങ്ങൾ എത്ര?" },
    options: [
      { en: "2", ml: "2" },
      { en: "4", ml: "4" },
      { en: "3", ml: "3" },
      { en: "8", ml: "8" }
    ],
    correctAnswer: 1,
    explanation: { en: "Outcomes: HH, HT, TH, TT (Total 4).", ml: "ഫലങ്ങൾ: HH, HT, TH, TT (ആകെ 4)." }
  },
  {
    id: "ch4-q19",
    question: { en: "In 10,000 coin tosses, 5,865 are heads. The estimated probability of head is ?", ml: "10,000 തവണ നാണയം ടോസ് ചെയ്തപ്പോൾ 5,865 തവണ തല (Head) ലഭിച്ചു. തല ലഭിക്കാനുള്ള സംഭാവ്യത ഏകദേശം എത്ര?" },
    options: [
      { en: "0.5", ml: "0.5" },
      { en: "0.5865", ml: "0.5865" },
      { en: "5.8", ml: "5.8" },
      { en: "0.6", ml: "0.6" }
    ],
    correctAnswer: 1,
    explanation: { en: "5865 / 10000 = 0.5865", ml: "5865 / 10000 = 0.5865" }
  },
  {
    id: "ch4-q20",
    question: { en: "If a dot is marked in a square of side 2 containing a circle of radius 1, probability of dot being inside circle is ?", ml: "വശം 2 ഉള്ള സമചതുരത്തിനുള്ളിൽ ആരം 1 ആയ ഒരു വൃത്തം വരച്ചിരിക്കുന്നു. ഒരു ബിന്ദു അടയാളപ്പെടുത്തിയാൽ അത് വൃത്തത്തിനുള്ളിലാകാൻ സംഭാവ്യത എത്ര?" },
    options: [
      { en: "π/4", ml: "π/4" },
      { en: "1/4", ml: "1/4" },
      { en: "π/2", ml: "π/2" },
      { en: "1/2", ml: "1/2" }
    ],
    correctAnswer: 0,
    explanation: { en: "Area circle = π(1)² = π. Area square = 2² = 4. Prob = π/4.", ml: "വൃത്തത്തിന്റെ പരപ്പളവ് = π. സമചതുരത്തിന്റെ പരപ്പളവ് = 4. സംഭാവ്യത = π/4." }
  },
  {
    id: "ch4-q21",
    question: { en: "Probability of picking a vowel from English alphabet is ?", ml: "ഇംഗ്ലീഷ് അക്ഷരമാലയിൽ നിന്ന് ഒരു സ്വരാക്ഷരം (Vowel) ലഭിക്കാനുള്ള സംഭാവ്യത എത്ര?" },
    options: [
      { en: "5/26", ml: "5/26" },
      { en: "21/26", ml: "21/26" },
      { en: "1/26", ml: "1/26" },
      { en: "5/21", ml: "5/21" }
    ],
    correctAnswer: 0,
    explanation: { en: "Vowels are A, E, I, O, U (5). Total letters = 26.", ml: "സ്വരാക്ഷരങ്ങൾ 5 എണ്ണവും ആകെ അക്ഷരങ്ങൾ 26-ഉം ആണ്. അതിനാൽ 5/26." }
  },
  {
    id: "ch4-q22",
    question: { en: "Which box is better to pick black: A (3 black, 2 white) or B (4 black, 3 white)?", ml: "ഏത് പെട്ടിയിൽ നിന്നാണ് കറുത്ത മുത്ത് ലഭിക്കാൻ കൂടുതൽ സാധ്യത: A (3 കറുപ്പ്, 2 വെളുപ്പ്) അതോ B (4 കറുപ്പ്, 3 വെളുപ്പ്)?" },
    options: [
      { en: "Box A", ml: "പെട്ടി A" },
      { en: "Box B", ml: "പെട്ടി B" },
      { en: "Both same", ml: "രണ്ടും തുല്യം" }
    ],
    correctAnswer: 0,
    explanation: { en: "A: 3/5 = 0.6. B: 4/7 ≈ 0.57. Box A is better.", ml: "A: 3/5 = 0.6. B: 4/7 ≈ 0.57. പെട്ടി A ആണ് നല്ലത്." }
  },
  {
    id: "ch4-q23",
    question: { en: "Probability of getting a sum of 13 when throwing two dice is ?", ml: "രണ്ട് ഡൈസ് (Dice) എറിയുമ്പോൾ തുക 13 ലഭിക്കാനുള്ള സംഭാവ്യത എത്ര?" },
    options: [
      { en: "1/36", ml: "1/36" },
      { en: "0", ml: "0" },
      { en: "1/12", ml: "1/12" },
      { en: "1", ml: "1" }
    ],
    correctAnswer: 1,
    explanation: { en: "Maximum possible sum is 6+6=12. 13 is impossible.", ml: "ഏറ്റവും വലിയ തുക 12 ആണ്. 13 ലഭിക്കുക അസാധ്യമാണ്." }
  },
  {
    id: "ch4-q24",
    question: { en: "If P(E) = 0.7, what is P(not E)?", ml: "P(E) = 0.7 ആയാൽ P(not E) എത്ര?" },
    options: [
      { en: "0.7", ml: "0.7" },
      { en: "0.3", ml: "0.3" },
      { en: "1", ml: "1" },
      { en: "0", ml: "0" }
    ],
    correctAnswer: 1,
    explanation: { en: "1 - 0.7 = 0.3", ml: "1 - 0.7 = 0.3" }
  },
  {
    id: "ch4-q25",
    question: { en: "A leap year has 366 days. What is the probability that a random day is a Sunday?", ml: "ഒരു അധിവർഷത്തിൽ (Leap Year) 366 ദിവസങ്ങളുണ്ട്. ഒരു ദിവസം തിരഞ്ഞെടുത്താൽ അത് ഞായറാഴ്ചയാകാൻ സംഭാവ്യത എത്ര?" },
    options: [
      { en: "1/7", ml: "1/7" },
      { en: "2/7", ml: "2/7" },
      { en: "52/366", ml: "52/366" },
      { en: "Depends on the year", ml: "വർഷത്തിനനുസരിച്ചിരിക്കും" }
    ],
    correctAnswer: 0,
    explanation: { en: "In any week, 1 day out of 7 is Sunday.", ml: "ഏത് വർഷമായാലും ആഴ്ചയിൽ 7 ദിവസത്തിൽ ഒന്ന് ഞായറാഴ്ചയാണ്." }
  },
  {
    id: "ch4-q26",
    question: { en: "Probability of picking a prime number from 1 to 10 is ?", ml: "1 മുതൽ 10 വരെയുള്ള സംഖ്യകളിൽ അഭാജ്യ സംഖ്യ (Prime) ലഭിക്കാനുള്ള സംഭാവ്യത എത്ര?" },
    options: [
      { en: "4/10", ml: "4/10" },
      { en: "5/10", ml: "5/10" },
      { en: "3/10", ml: "3/10" },
      { en: "2/10", ml: "2/10" }
    ],
    correctAnswer: 0,
    explanation: { en: "Primes: 2, 3, 5, 7. Total 4 out of 10.", ml: "അഭാജ്യ സംഖ്യകൾ: 2, 3, 5, 7. ആകെ 10-ൽ 4 എണ്ണം." }
  },
  {
    id: "ch4-q27",
    question: { en: "Fraction 16/1000 written as a decimal is ?", ml: "16/1000 എന്ന സംഭാവ്യത ദശാംശ രൂപത്തിൽ എങ്ങനെ എഴുതാം?" },
    options: [
      { en: "0.16", ml: "0.16" },
      { en: "0.016", ml: "0.016" },
      { en: "0.0016", ml: "0.0016" },
      { en: "1.6", ml: "1.6" }
    ],
    correctAnswer: 1,
    explanation: { en: "16 / 1000 = 0.016", ml: "16 / 1000 = 0.016" }
  },
  {
    id: "ch4-q28",
    question: { en: "If you draw a random dot in a rectangle divided into 3 equal strips, prob of it being in the middle strip is ?", ml: "ഒരു ചതുരത്തെ 3 തുല്യ ഭാഗങ്ങളായി തിരിച്ചിരിക്കുന്നു. ഒരു ബിന്ദു അടയാളപ്പെടുത്തിയാൽ അത് നടുവിലെ ഭാഗത്താകാൻ സംഭാവ്യത എത്ര?" },
    options: [
      { en: "1/2", ml: "1/2" },
      { en: "1/3", ml: "1/3" },
      { en: "2/3", ml: "2/3" },
      { en: "1/4", ml: "1/4" }
    ],
    correctAnswer: 1,
    explanation: { en: "One strip out of three equal areas.", ml: "മൂന്ന് തുല്യ ഭാഗങ്ങളിൽ ഒന്നെടുക്കുമ്പോൾ സംഭാവ്യത 1/3 ആണ്." }
  },
  {
    id: "ch4-q29",
    question: { en: "Total pairs from two boxes with 4 and 6 items is ?", ml: "4 വസ്തുക്കളുള്ള ഒരു പെട്ടിയിൽ നിന്നും 6 വസ്തുക്കളുള്ള മറ്റൊരു പെട്ടിയിൽ നിന്നും എത്ര ജോടികൾ ഉണ്ടാക്കാം?" },
    options: [
      { en: "10", ml: "10" },
      { en: "24", ml: "24" },
      { en: "2", ml: "2" },
      { en: "12", ml: "12" }
    ],
    correctAnswer: 1,
    explanation: { en: "4 × 6 = 24.", ml: "4 × 6 = 24." }
  },
  {
    id: "ch4-q30",
    question: { en: "The probability of picking a Sunday from the month of January is ?", ml: "ജനുവരി മാസത്തിൽ നിന്ന് ഒരു ദിവസം തിരഞ്ഞെടുത്താൽ അത് ഞായറാഴ്ചയാകാനുള്ള സംഭാവ്യത എത്ര?" },
    options: [
      { en: "4/31 or 5/31", ml: "4/31 അല്ലെങ്കിൽ 5/31" },
      { en: "1/7", ml: "1/7" },
      { en: "4/30", ml: "4/30" },
      { en: "1/31", ml: "1/31" }
    ],
    correctAnswer: 0,
    explanation: { en: "January has 31 days, and contains either 4 or 5 Sundays.", ml: "ജനുവരിയിൽ 31 ദിവസങ്ങളുണ്ട്, അതിൽ 4 അല്ലെങ്കിൽ 5 ഞായറാഴ്ചകൾ ഉണ്ടാകാം." }
  }
];

const probabilityLesson: Lesson = {
  id: "math-ch4",
  title: { en: "Mathematics of Chance", ml: "സാധ്യതകളുടെ ഗണിതം (Mathematics of Chance)" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Quantify likelihood using numerical probability.", ml: "സാധ്യതകളെ സംഭാവ്യത (Probability) ഉപയോഗിച്ച് അക്കങ്ങളിൽ സൂചിപ്പിക്കാൻ പഠിക്കുക." } },
    { id: "lo2", text: { en: "Calculate probabilities for number sets and sequences.", ml: "സംഖ്യകളെ അടിസ്ഥാനമാക്കിയുള്ള സംഭാവ്യതകൾ കണ്ടെത്താൻ പഠിക്കുക." } },
    { id: "lo3", text: { en: "Apply area-based geometrical probability.", ml: "പരപ്പളവ് അടിസ്ഥാനമാക്കിയുള്ള ജ്യാമിതീയ സംഭാവ്യത പ്രയോഗിക്കുക." } },
    { id: "lo4", text: { en: "Determine outcomes for combined events and pairs.", ml: "ജോടികളെയും ഒന്നിലധികം സംഭവങ്ങളെയും അടിസ്ഥാനമാക്കിയുള്ള ഫലങ്ങൾ കണ്ടെത്തുക." } }
  ],
  content: {
    intro: { 
      en: "This chapter explains how to quantify and measure the likelihood of events happening, turning the concept of 'chance' into exact numbers.", 
      ml: "സാധ്യതകളെ കൃത്യമായ അക്കങ്ങളാക്കി മാറ്റി സംഭാവ്യത (Probability) കണക്കാക്കുന്നത് എങ്ങനെ എന്ന് ഈ അധ്യായം വിശദീകരിക്കുന്നു." 
    },
    core: { 
      en: "Calculate probabilities using fractions, areas, and combinations of independent events.", 
      ml: "ഭിന്നസംഖ്യകൾ, പരപ്പളവുകൾ, വസ്തുക്കളുടെ ജോടികൾ എന്നിവ ഉപയോഗിച്ച് സംഭാവ്യത കണ്ടെത്താൻ പഠിക്കുക." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. ഒരാമുഖം (Overview)' },
      { type: 'p', en: 'This chapter explains how to turn the concept of "chance" into exact numbers. It covers fractions, geometry (areas), and combinations (pairs).', ml: 'സാധ്യത എന്ന ആശയത്തെ എങ്ങനെ കൃത്യമായ അക്കങ്ങളാക്കി മാറ്റാം എന്ന് ഈ അധ്യായം വിശദീകരിക്കുന്നു. ഭിന്നസംഖ്യകൾ, ജ്യാമിതി (പരപ്പളവുകൾ), ജോടികൾ (Pairs) എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.' },
      
      { type: 'h2', en: 'Interactive Probability Lab', ml: 'സംഭാവ്യതാ ലാബ്' },
      { 
        type: 'img', 
        customId: 'probability-lab', 
        en: 'Explore discrete probability with beads and continuous probability with geometry.', 
        ml: 'മുത്തുകൾ ഉപയോഗിച്ചുള്ള സംഭാവ്യതയും ജ്യാമിതി ഉപയോഗിച്ചുള്ള സംഭാവ്യതയും പരീക്ഷിച്ചു നോക്കൂ.' 
      },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'p', en: '• Probability: Measures the chance of an event (Favorable / Total).\n• Total Combinations: Total pairs = m × n.\n• Geometrical Probability: Probability based on area ratios.', ml: '• സംഭാവ്യത (Probability): ഒരു കാര്യം സംഭവിക്കാനുള്ള അളവ് (അനുകൂല ഫലങ്ങൾ / ആകെ ഫലങ്ങൾ).\n• ആകെ ജോടികൾ (Total Pairs): m × n.\n• ജ്യാമിതീയ സംഭാവ്യത (Geometrical Probability): പരപ്പളവുകളുടെ അനുപാതത്തെ അടിസ്ഥാനമാക്കിയുള്ള സംഭാവ്യത.' },
      
      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      
      { type: 'h3', en: '3.1 Chances as Numbers', ml: '3.1 സാധ്യതകൾ സംഖ്യകളായി' },
      { type: 'p', en: 'Probability is written as a fraction: Favorable / Total. It can also be expressed as decimals or percentages (e.g., 1.6%).', ml: 'സംഭാവ്യത ഭിന്നസംഖ്യയായാണ് എഴുതുന്നത്: അനുകൂല ഫലങ്ങൾ / ആകെ ഫലങ്ങൾ. ഇതിനെ ദശാംശമായോ ശതമാനമായോ എഴുതാവുന്നതാണ്.' },
      
      { type: 'h3', en: '3.2 Number Probability', ml: '3.2 സംഖ്യാ സംഭാവ്യത' },
      { type: 'p', en: 'Counting favorable numbers in a sequence. Example: Picking a factor of 1000 from 1 to 1000.', ml: 'ഒരു ശ്രേണിയിൽ നിന്ന് പ്രത്യേക നിബന്ധന പാലിക്കുന്ന സംഖ്യകൾ കണ്ടെത്തുന്നു. ഉദാഹരണത്തിന് 1 മുതൽ 1000 വരെയുള്ള സംഖ്യകളിൽ നിന്ന് 1000-ന്റെ ഘടകങ്ങൾ ലഭിക്കാനുള്ള സാധ്യത.' },
      
      { type: 'h3', en: '3.3 Geometrical Probability and Area', ml: '3.3 ജ്യാമിതീയ സംഭാവ്യതയും പരപ്പളവും' },
      { type: 'p', en: 'Probability = Area of Region / Total Area. Monte Carlo Method uses random dots to approximate complex areas.', ml: 'സംഭാവ്യത = പ്രത്യേക ഭാഗത്തിന്റെ പരപ്പളവ് / ആകെ പരപ്പളവ്. മോണ്ടി കാർലോ രീതി ഉപയോഗിച്ച് സങ്കീർണ്ണമായ പരപ്പളവുകൾ കണ്ടെത്താം.' },
      
      { type: 'h3', en: '3.4 Pairs and Combinations', ml: '3.4 ജോടികളും കോമ്പിനേഷനുകളും' },
      { type: 'p', en: 'When drawing from two boxes, multiply counts to find total outcomes. Prob(both odd) = (Odd in Box 1 × Odd in Box 2) / Total Pairs.', ml: 'രണ്ട് പെട്ടികളിൽ നിന്ന് എടുക്കുമ്പോൾ ഗുണന നിയമം ഉപയോഗിച്ച് ആകെ ജോടികൾ കണ്ടെത്താം. രണ്ടിലും ഒറ്റസംഖ്യ വരാനുള്ള സംഭാവ്യത = (പെട്ടി 1-ലെ ഒറ്റസംഖ്യകൾ × പെട്ടി 2-ലെ ഒറ്റസംഖ്യകൾ) / ആകെ ജോടികൾ.' },
      
      { type: 'h2', en: '4. Tables', ml: '4. പട്ടികകൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
          rows: [
            [{en: 'Probability', ml: 'സംഭാവ്യത'}, {en: 'Likelihood of an event', ml: 'സംഭവിക്കാനുള്ള സാധ്യത'}, {en: '1/2 for coin toss', ml: 'നാണയം എറിയുമ്പോൾ 1/2'}],
            [{en: 'Monte Carlo', ml: 'മോണ്ടി കാർലോ'}, {en: 'Random dot area estimation', ml: 'ബിന്ദുക്കൾ ഉപയോഗിച്ചുള്ള കണക്കുകൂട്ടൽ'}, {en: 'Estimating irregular areas', ml: 'സങ്കീർണ്ണ പരപ്പളവുകൾ കാണാൻ'}]
          ]
      }},

      { type: 'h2', en: '5. Highlights', ml: '5. പ്രധാന പോയിന്റുകൾ (Highlights)' },
      { type: 'p', en: '• To compare scenarios, compare their probability fractions.\n• Probability depends on area ratio, not the specific shape.\n• For "at least one", use 1 - P(none).', ml: '• സാധ്യതകൾ താരതമ്യം ചെയ്യാൻ ഭിന്നസംഖ്യകളുടെ വില നോക്കുക.\n• ജ്യാമിതീയ സംഭാവ്യത പരപ്പളവുകളുടെ അനുപാതത്തെ മാത്രമേ ആശ്രയിക്കുന്നുള്ളൂ.\n• "കുറഞ്ഞത് ഒന്ന്" കാണാൻ 1-ൽ നിന്ന് "ഒന്നുമില്ലാത്ത" സംഭാവ്യത കുറയ്ക്കുക.' }
    ]
  },
  glossary: [
    { term: { en: "Sample Space", ml: "സാമ്പിൾ സ്പേസ്" }, definition: { en: "Set of all possible outcomes.", ml: "സാധ്യമായ എല്ലാ ഫലങ്ങളുടെയും കൂട്ടം." } }
  ],
  quiz: quiz
};

async function run() {
  try {
    console.log("Updating Mathematics of Chance chapter content...");
    const docRef = db.collection('subjects').doc(`sslc-sub-maths`);
    const docSnapshot = await docRef.get();
    
    if (!docSnapshot.exists) {
      console.error("Maths subject not found!");
      return;
    }

    const data = docSnapshot.data() as any;
    const updatedUnits = data.units.map((unit: any) => ({
      ...unit,
      lessons: unit.lessons.map((lesson: any) => 
        lesson.id === 'math-ch4' ? probabilityLesson : lesson
      )
    }));

    await docRef.update({
      'units': transformForFirestore(updatedUnits)
    });
    
    console.log("Successfully updated Chapter 4 Notes, Lab, and Quiz!");
  } catch (error) {
    console.error("Error updating Chapter 4:", error);
  }
}

run();
