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
    id: "ch3-q1",
    question: { en: "What is the algebraic form of a sequence?", ml: "എന്താണ് ഒരു ശ്രേണിയുടെ ബീജഗണിത രൂപം (Algebraic Form)?" },
    options: [
      { en: "A list of numbers", ml: "സംഖ്യകളുടെ പട്ടിക" },
      { en: "A mathematical rule using letters to show position-value relation", ml: "സ്ഥാനവും വിലയും തമ്മിലുള്ള ബന്ധം കാണിക്കുന്ന അക്ഷരങ്ങൾ ചേർത്ത നിയമം" },
      { en: "The sum of all terms", ml: "പദങ്ങളുടെ തുക" },
      { en: "The first term only", ml: "ആദ്യ പദം മാത്രം" }
    ],
    correctAnswer: 1,
    explanation: { en: "Algebraic form uses variables (like n) to define terms based on their position.", ml: "പദങ്ങളുടെ സ്ഥാനവും വിലയും തമ്മിലുള്ള ബന്ധത്തെ n പോലുള്ള അക്ഷരങ്ങൾ ഉപയോഗിച്ച് എഴുതുന്നതാണ് ബീജഗണിത രൂപം." }
  },
  {
    id: "ch3-q2",
    question: { en: "What does 'n' represent in an algebraic formula xn = an + b?", ml: "xn = an + b എന്ന സമവാക്യത്തിൽ 'n' എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
    options: [
      { en: "Common difference", ml: "പൊതുവ്യത്യാസം" },
      { en: "Position of the term", ml: "പദത്തിന്റെ സ്ഥാനം" },
      { en: "Sum of terms", ml: "പദങ്ങളുടെ തുക" },
      { en: "Last term", ml: "അവസാന പദം" }
    ],
    correctAnswer: 1,
    explanation: { en: "n represents the natural number position (1, 2, 3...) of the term.", ml: "n പദത്തിന്റെ സ്ഥാനത്തെ (1, 2, 3...) സൂചിപ്പിക്കുന്നു." }
  },
  {
    id: "ch3-q3",
    question: { en: "What is the algebraic form of even numbers (2, 4, 6...)?", ml: "ഇരട്ടസംഖ്യകളുടെ (2, 4, 6...) ബീജഗണിത രൂപം ഏത്?" },
    options: [
      { en: "xn = n", ml: "xn = n" },
      { en: "xn = 2n", ml: "xn = 2n" },
      { en: "xn = 2n - 1", ml: "xn = 2n - 1" },
      { en: "xn = n + 2", ml: "xn = n + 2" }
    ],
    correctAnswer: 1,
    explanation: { en: "x1=2(1)=2, x2=2(2)=4...", ml: "x1=2(1)=2, x2=2(2)=4... എന്നിങ്ങനെ വരുന്നു." }
  },
  {
    id: "ch3-q4",
    question: { en: "In xn = an + b, what does 'a' represent?", ml: "xn = an + b എന്നതിൽ 'a' എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
    options: [
      { en: "First term", ml: "ആദ്യ പദം" },
      { en: "Common difference", ml: "പൊതുവ്യത്യാസം" },
      { en: "Number of terms", ml: "പദങ്ങളുടെ എണ്ണം" },
      { en: "Last term", ml: "അവസാന പദം" }
    ],
    correctAnswer: 1,
    explanation: { en: "The coefficient of n in an AP's algebraic form is always the common difference.", ml: "ഒരു സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപത്തിൽ n-ന്റെ ഗുണോത്തരം എപ്പോഴും പൊതുവ്യത്യാസമായിരിക്കും." }
  },
  {
    id: "ch3-q5",
    question: { en: "Find the algebraic form of 5, 8, 11...", ml: "5, 8, 11... എന്ന ശ്രേണിയുടെ ബീജഗണിത രൂപം കണ്ടെത്തുക." },
    options: [
      { en: "3n + 2", ml: "3n + 2" },
      { en: "3n + 5", ml: "3n + 5" },
      { en: "5n + 3", ml: "5n + 3" },
      { en: "n + 3", ml: "n + 3" }
    ],
    correctAnswer: 0,
    explanation: { en: "d = 3. xn = 3n + (5 - 3) = 3n + 2.", ml: "പൊതുവ്യത്യാസം 3 ആണ്. xn = 3n + (5 - 3) = 3n + 2." }
  },
  {
    id: "ch3-q6",
    question: { en: "What is the sum of the first 'n' natural numbers?", ml: "ആദ്യത്തെ 'n' എണ്ണൽ സംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "n(n + 1)", ml: "n(n + 1)" },
      { en: "n²/2", ml: "n²/2" },
      { en: "n(n + 1) / 2", ml: "n(n + 1) / 2" },
      { en: "n²", ml: "n²" }
    ],
    correctAnswer: 2,
    explanation: { en: "Formula: n(n + 1) / 2.", ml: "സൂത്രവാക്യം: n(n + 1) / 2." }
  },
  {
    id: "ch3-q7",
    question: { en: "What is the sum of the first 'n' odd numbers?", ml: "ആദ്യത്തെ 'n' ഒറ്റസംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "n(n + 1)", ml: "n(n + 1)" },
      { en: "2n - 1", ml: "2n - 1" },
      { en: "n²", ml: "n²" },
      { en: "n(n + 1) / 2", ml: "n(n + 1) / 2" }
    ],
    correctAnswer: 2,
    explanation: { en: "The sum of the first n odd numbers is always n².", ml: "ആദ്യത്തെ n ഒറ്റസംഖ്യകളുടെ തുക എപ്പോഴും n² ആയിരിക്കും." }
  },
  {
    id: "ch3-q8",
    question: { en: "The algebraic form of an AP is 5n - 3. What is the common difference?", ml: "ഒരു സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപം 5n - 3 ആയാൽ പൊതുവ്യത്യാസം എത്ര?" },
    options: [
      { en: "5", ml: "5" },
      { en: "-3", ml: "-3" },
      { en: "2", ml: "2" },
      { en: "8", ml: "8" }
    ],
    correctAnswer: 0,
    explanation: { en: "In an+b, 'a' is the common difference.", ml: "an+b എന്ന രൂപത്തിൽ 'a' ആണ് പൊതുവ്യത്യാസം." }
  },
  {
    id: "ch3-q9",
    question: { en: "The sum of an AP has the algebraic form Sn = ?", ml: "ഒരു സമാന്തരശ്രേണിയുടെ തുകയുടെ ബീജഗണിത രൂപംSn = ?" },
    options: [
      { en: "an + b", ml: "an + b" },
      { en: "pn² + qn", ml: "pn² + qn" },
      { en: "n² + b", ml: "n² + b" },
      { en: "an² + bn + c", ml: "an² + bn + c" }
    ],
    correctAnswer: 1,
    explanation: { en: "The sum formula always takes the form of a quadratic expression without a constant term.", ml: "തുകയുടെ ബീജഗണിത രൂപം എപ്പോഴും pn² + qn എന്ന രീതിയിലായിരിക്കും." }
  },
  {
    id: "ch3-q10",
    question: { en: "Sum of first 10 natural numbers is ?", ml: "ആദ്യത്തെ 10 എണ്ണൽ സംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "100", ml: "100" },
      { en: "55", ml: "55" },
      { en: "45", ml: "45" },
      { en: "110", ml: "110" }
    ],
    correctAnswer: 1,
    explanation: { en: "10(11) / 2 = 110 / 2 = 55.", ml: "10(11) / 2 = 110 / 2 = 55." }
  },
  {
    id: "ch3-q11",
    question: { en: "If xn = 4n + 1, find x1.", ml: "xn = 4n + 1 ആയാൽ x1 എത്ര?" },
    options: [
      { en: "4", ml: "4" },
      { en: "5", ml: "5" },
      { en: "1", ml: "1" },
      { en: "0", ml: "0" }
    ],
    correctAnswer: 1,
    explanation: { en: "x1 = 4(1) + 1 = 5.", ml: "x1 = 4(1) + 1 = 5." }
  },
  {
    id: "ch3-q12",
    question: { en: "What is the sum of the first 5 odd numbers?", ml: "ആദ്യത്തെ 5 ഒറ്റസംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "10", ml: "10" },
      { en: "15", ml: "15" },
      { en: "25", ml: "25" },
      { en: "30", ml: "30" }
    ],
    correctAnswer: 2,
    explanation: { en: "5² = 25.", ml: "5² = 25." }
  },
  {
    id: "ch3-q13",
    question: { en: "Common difference of sequence with sum Sn = 3n² + 2n is ?", ml: "തുക Sn = 3n² + 2n ആയ ശ്രേണിയുടെ പൊതുവ്യത്യാസം എത്ര?" },
    options: [
      { en: "3", ml: "3" },
      { en: "2", ml: "2" },
      { en: "6", ml: "6" },
      { en: "5", ml: "5" }
    ],
    correctAnswer: 2,
    explanation: { en: "Common difference is twice the coefficient of n². 2 × 3 = 6.", ml: "പൊതുവ്യത്യാസം n²-ന്റെ ഗുണോത്തരത്തിന്റെ ഇരട്ടിയായിരിക്കും. 2 × 3 = 6." }
  },
  {
    id: "ch3-q14",
    question: { en: "If Sn = 2n² + n, what is the first term?", ml: "Sn = 2n² + n ആയാൽ ആദ്യ പദം എത്ര?" },
    options: [
      { en: "2", ml: "2" },
      { en: "1", ml: "1" },
      { en: "3", ml: "3" },
      { en: "0", ml: "0" }
    ],
    correctAnswer: 2,
    explanation: { en: "S1 = x1 = 2(1)² + 1 = 3.", ml: "S1 = x1 = 2(1)² + 1 = 3." }
  },
  {
    id: "ch3-q15",
    question: { en: "Sum of first 'n' even numbers is ?", ml: "ആദ്യത്തെ 'n' ഇരട്ടസംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "n²", ml: "n²" },
      { en: "n(n + 1)", ml: "n(n + 1)" },
      { en: "n(n + 1) / 2", ml: "n(n + 1) / 2" },
      { en: "2n²", ml: "2n²" }
    ],
    correctAnswer: 1,
    explanation: { en: "Formula: n(n + 1).", ml: "സൂത്രവാക്യം: n(n + 1)." }
  },
  {
    id: "ch3-q16",
    question: { en: "Algebraic form of natural numbers starting from 1 is ?", ml: "1 മുതലുള്ള എണ്ണൽ സംഖ്യകളുടെ ബീജഗണിത രൂപം?" },
    options: [
      { en: "xn = n", ml: "xn = n" },
      { en: "xn = n + 1", ml: "xn = n + 1" },
      { en: "xn = n - 1", ml: "xn = n - 1" },
      { en: "xn = 2n", ml: "xn = 2n" }
    ],
    correctAnswer: 0,
    explanation: { en: "x1=1, x2=2... so xn=n.", ml: "x1=1, x2=2... ആയതിനാൽ xn=n." }
  },
  {
    id: "ch3-q17",
    question: { en: "Can prime numbers be written as xn = an + b?", ml: "അഭാജ്യ സംഖ്യകളെ xn = an + b എന്ന രീതിയിൽ എഴുതാൻ കഴിയുമോ?" },
    options: [
      { en: "Yes", ml: "അതെ" },
      { en: "No", ml: "ഇല്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "Prime numbers do not form an arithmetic sequence.", ml: "അഭാജ്യ സംഖ്യകൾ ഒരു സമാന്തരശ്രേണി ഉണ്ടാക്കുന്നില്ല." }
  },
  {
    id: "ch3-q18",
    question: { en: "Formula for sum using first and last terms is ?", ml: "ആദ്യ പദവും അവസാന പദവും ഉപയോഗിച്ചുള്ള തുകയുടെ സൂത്രവാക്യം?" },
    options: [
      { en: "n(x1 + xn)", ml: "n(x1 + xn)" },
      { en: "n/2 (x1 + xn)", ml: "n/2 (x1 + xn)" },
      { en: "x1 + xn / 2", ml: "x1 + xn / 2" },
      { en: "None", ml: "ഇവയൊന്നുമല്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "Sum = n/2 * (First term + Last term).", ml: "തുക = n/2 * (ആദ്യ പദം + അവസാന പദം)." }
  },
  {
    id: "ch3-q19",
    question: { en: "Sum of first 10 odd numbers is ?", ml: "ആദ്യത്തെ 10 ഒറ്റസംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "100", ml: "100" },
      { en: "50", ml: "50" },
      { en: "110", ml: "110" },
      { en: "90", ml: "90" }
    ],
    correctAnswer: 0,
    explanation: { en: "10² = 100.", ml: "10² = 100." }
  },
  {
    id: "ch3-q20",
    question: { en: "If xn = 3n + 2, what is x10?", ml: "xn = 3n + 2 ആയാൽ x10 എത്ര?" },
    options: [
      { en: "30", ml: "30" },
      { en: "32", ml: "32" },
      { en: "20", ml: "20" },
      { en: "15", ml: "15" }
    ],
    correctAnswer: 1,
    explanation: { en: "x10 = 3(10) + 2 = 32.", ml: "x10 = 3(10) + 2 = 32." }
  },
  {
    id: "ch3-q21",
    question: { en: "If Sn = n² + n, find the second term x2.", ml: "Sn = n² + n ആയാൽ രണ്ടാം പദം x2 കണ്ടെത്തുക." },
    options: [
      { en: "2", ml: "2" },
      { en: "4", ml: "4" },
      { en: "6", ml: "6" },
      { en: "1", ml: "1" }
    ],
    correctAnswer: 1,
    explanation: { en: "S1 = 2 (x1). S2 = 2² + 2 = 6. x2 = S2 - S1 = 6 - 2 = 4.", ml: "S1 = 2 (x1). S2 = 2² + 2 = 6. x2 = S2 - S1 = 6 - 2 = 4." }
  },
  {
    id: "ch3-q22",
    question: { en: "In Sn = pn² + qn, what is p?", ml: "Sn = pn² + qn എന്നതിൽ p എന്താണ്?" },
    options: [
      { en: "Common difference", ml: "പൊതുവ്യത്യാസം" },
      { en: "Half of common difference", ml: "പൊതുവ്യത്യാസത്തിന്റെ പകുതി" },
      { en: "First term", ml: "ആദ്യ പദം" },
      { en: "Number of terms", ml: "പദങ്ങളുടെ എണ്ണം" }
    ],
    correctAnswer: 1,
    explanation: { en: "The coefficient of n² is always d/2.", ml: "n²-ന്റെ ഗുണോത്തരം എപ്പോഴും പൊതുവ്യത്യാസത്തിന്റെ പകുതിയായിരിക്കും." }
  },
  {
    id: "ch3-q23",
    question: { en: "Algebraic form of natural numbers leaving remainder 1 on division by 3?", ml: "3 കൊണ്ട് ഹരിക്കുമ്പോൾ 1 ശിഷ്ടം വരുന്ന എണ്ണൽ സംഖ്യകളുടെ ബീജഗണിത രൂപം?" },
    options: [
      { en: "3n + 1", ml: "3n + 1" },
      { en: "3n - 2", ml: "3n - 2" },
      { en: "3n + 3", ml: "3n + 3" },
      { en: "n + 3", ml: "n + 3" }
    ],
    correctAnswer: 1,
    explanation: { en: "1, 4, 7... xn = 3n + (1 - 3) = 3n - 2.", ml: "1, 4, 7... xn = 3n + (1 - 3) = 3n - 2." }
  },
  {
    id: "ch3-q24",
    question: { en: "What is the sum of the first 10 even numbers?", ml: "ആദ്യത്തെ 10 ഇരട്ടസംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "100", ml: "100" },
      { en: "110", ml: "110" },
      { en: "55", ml: "55" },
      { en: "120", ml: "120" }
    ],
    correctAnswer: 1,
    explanation: { en: "10(11) = 110.", ml: "10(11) = 110." }
  },
  {
    id: "ch3-q25",
    question: { en: "If xn = 2n + 5, what is the common difference?", ml: "xn = 2n + 5 ആയാൽ പൊതുവ്യത്യാസം എത്ര?" },
    options: [
      { en: "2", ml: "2" },
      { en: "5", ml: "5" },
      { en: "7", ml: "7" },
      { en: "3", ml: "3" }
    ],
    correctAnswer: 0,
    explanation: { en: "The coefficient of n is 2.", ml: "n-ന്റെ ഗുണോത്തരം 2 ആണ്." }
  },
  {
    id: "ch3-q26",
    question: { en: "If Sn = n², the sequence is ?", ml: "Sn = n² ആയാൽ ശ്രേണി ഏതാണ്?" },
    options: [
      { en: "1, 2, 3...", ml: "1, 2, 3..." },
      { en: "2, 4, 6...", ml: "2, 4, 6..." },
      { en: "1, 3, 5...", ml: "1, 3, 5..." },
      { en: "1, 4, 9...", ml: "1, 4, 9..." }
    ],
    correctAnswer: 2,
    explanation: { en: "n² is the sum of the first n odd numbers.", ml: "n² എന്നത് ആദ്യത്തെ n ഒറ്റസംഖ്യകളുടെ തുകയാണ്." }
  },
  {
    id: "ch3-q27",
    question: { en: "Sum of first 100 natural numbers is ?", ml: "ആദ്യത്തെ 100 എണ്ണൽ സംഖ്യകളുടെ തുക എത്ര?" },
    options: [
      { en: "5000", ml: "5000" },
      { en: "5050", ml: "5050" },
      { en: "10000", ml: "10000" },
      { en: "5100", ml: "5100" }
    ],
    correctAnswer: 1,
    explanation: { en: "100(101) / 2 = 10100 / 2 = 5050.", ml: "100(101) / 2 = 10100 / 2 = 5050." }
  },
  {
    id: "ch3-q28",
    question: { en: "The algebraic form of an AP is always a polynomial of degree ?", ml: "ഒരു സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപം എപ്പോഴും എത്രാം കൃതിയിലുള്ള ബഹുപദമാണ്?" },
    options: [
      { en: "1 (Linear)", ml: "1 (ഒന്നാം കൃതി)" },
      { en: "2 (Quadratic)", ml: "2 (രണ്ടാം കൃതി)" },
      { en: "0", ml: "0" },
      { en: "3", ml: "3" }
    ],
    correctAnswer: 0,
    explanation: { en: "xn = an + b is a first-degree (linear) polynomial.", ml: "xn = an + b എന്നത് ഒന്നാം കൃതിയിലുള്ള ബഹുപദമാണ്." }
  },
  {
    id: "ch3-q29",
    question: { en: "In Sn = pn² + qn, what is p + q?", ml: "Sn = pn² + qn എന്നതിൽ p + q എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
    options: [
      { en: "Common difference", ml: "പൊതുവ്യത്യാസം" },
      { en: "First term", ml: "ആദ്യ പദം" },
      { en: "Number of terms", ml: "പദങ്ങളുടെ എണ്ണം" },
      { en: "Last term", ml: "അവസാന പദം" }
    ],
    correctAnswer: 1,
    explanation: { en: "S1 = p(1)² + q(1) = p + q = x1.", ml: "S1 = p(1)² + q(1) = p + q = x1 (ആദ്യ പദം)." }
  },
  {
    id: "ch3-q30",
    question: { en: "If xn = 5n - 2, find the sum of first 2 terms.", ml: "xn = 5n - 2 ആയാൽ ആദ്യത്തെ 2 പദങ്ങളുടെ തുക എത്ര?" },
    options: [
      { en: "3", ml: "3" },
      { en: "8", ml: "8" },
      { en: "11", ml: "11" },
      { en: "13", ml: "13" }
    ],
    correctAnswer: 2,
    explanation: { en: "x1 = 3, x2 = 8. Sum = 3 + 8 = 11.", ml: "x1 = 3, x2 = 8. തുക = 3 + 8 = 11." }
  }
];

const algebraLesson: Lesson = {
  id: "math-ch3",
  title: { en: "Arithmetic Sequences and Algebra", ml: "സമാന്തരശ്രേണികളും ബീജഗണിതവും (Arithmetic Sequences and Algebra)" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Express sequence rules using algebraic notation.", ml: "ശ്രേണികളുടെ നിയമങ്ങൾ ബീജഗണിത രൂപത്തിൽ എഴുതാൻ പഠിക്കുക." } },
    { id: "lo2", text: { en: "Derive and use the n-th term formula xn = an + b.", ml: "xn = an + b എന്ന സമവാക്യം ഉപയോഗിക്കാൻ പഠിക്കുക." } },
    { id: "lo3", text: { en: "Calculate the sum of natural, odd, and even numbers using formulas.", ml: "എണ്ണൽ സംഖ്യകൾ, ഒറ്റ സംഖ്യകൾ, ഇരട്ട സംഖ്യകൾ എന്നിവയുടെ തുക കണ്ടെത്താൻ പഠിക്കുക." } },
    { id: "lo4", text: { en: "Understand the algebraic form of the sum of an arithmetic sequence.", ml: "സമാന്തരശ്രേണിയുടെ തുകയുടെ ബീജഗണിത രൂപം മനസ്സിലാക്കുക." } }
  ],
  content: {
    intro: { 
      en: "This chapter explains how to use algebra to concisely state the rules that govern number sequences.", 
      ml: "സംഖ്യാശ്രേണികളെ നിയന്ത്രിക്കുന്ന നിയമങ്ങൾ ബീജഗണിതം (Algebra) ഉപയോഗിച്ച് എങ്ങനെ ലളിതമായി അവതരിപ്പിക്കാം എന്ന് ഈ അധ്യായം വിശദീകരിക്കുന്നു." 
    },
    core: { 
      en: "Bridge arithmetic patterns and algebraic expressions to compute terms and sums directly.", 
      ml: "സ്ഥാനങ്ങൾക്കും പദങ്ങൾക്കും ഇടയിലുള്ള ബന്ധം സമവാക്യങ്ങളായി എഴുതാനും തുകകൾ നേരിട്ട് കണ്ടെത്താനും പഠിക്കുക." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. ഒരാമുഖം (Overview)' },
      { type: 'p', en: 'This chapter explains how to use algebra to concisely state the rules that govern number sequences. It demonstrating how to write the n-th term and sum of consecutive terms.', ml: 'സംഖ്യാശ്രേണികളുടെ നിയമങ്ങളെ ബീജഗണിതം ഉപയോഗിച്ച് ചുരുക്കത്തിൽ എങ്ങനെ എഴുതാം എന്ന് ഈ അധ്യായം പഠിപ്പിക്കുന്നു. n-ാം പദം കണ്ടെത്താനും പദങ്ങളുടെ തുക കണ്ടെത്താനുമുള്ള സൂത്രവാക്യങ്ങൾ ഇവിടെ പരിചയപ്പെടുത്തുന്നു.' },
      
      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'p', en: '• Algebraic Form: Using letters (like n) to show relationships.\n• The n-th Term (xₙ): Direct formula to compute any position value.\n• Sum of a Sequence: Total value of added terms using formulas.', ml: '• ബീജഗണിത രൂപം (Algebraic Form): സ്ഥാനവും വിലയും തമ്മിലുള്ള ബന്ധം അക്ഷരങ്ങൾ (n) ഉപയോഗിച്ച് സൂചിപ്പിക്കുന്നത്.\n• n-ാം പദം (xₙ): ഏതൊരു സ്ഥാനത്തെയും വില നേരിട്ട് കണ്ടെത്താനുള്ള സൂത്രവാക്യം.\n• ശ്രേണിയുടെ തുക (Sum): സൂത്രവാക്യങ്ങൾ ഉപയോഗിച്ച് പദങ്ങൾ കൂട്ടിക്കിട്ടുന്ന ആകെ വില.' },
      
      { type: 'h2', en: 'Interactive Sequence Lab', ml: 'സമാന്തരശ്രേണി ലാബ്' },
      { 
        type: 'img', 
        customId: 'sequence-algebra-lab', 
        en: 'Explore how changes in coefficients affect the sequence and its sum.', 
        ml: 'സമവാക്യത്തിലെ മാറ്റങ്ങൾ ശ്രേണിയെയും അതിന്റെ തുകയെയും എങ്ങനെ ബാധിക്കുന്നു എന്ന് പരിശോധിക്കുക.' 
      },

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      
      { type: 'h3', en: '3.1 Algebraic Form of Sequences', ml: '3.1 ശ്രേണികളുടെ ബീജഗണിത രൂപം' },
      { type: 'p', en: 'Even numbers: xₙ = 2n. Odd numbers: yₙ = 2n - 1. Natural numbers: xₙ = n. Algebraic form allows computing any term without previous ones.', ml: 'ഇരട്ടസംഖ്യകൾ: xₙ = 2n. ഒറ്റസംഖ്യകൾ: yₙ = 2n - 1. എണ്ണൽ സംഖ്യകൾ: xₙ = n. ബീജഗണിത രൂപം ഉപയോഗിച്ച് മുൻപത്തെ പദങ്ങൾ അറിയാതെ തന്നെ ഏത് പദവും കണ്ടെത്താം.' },
      
      { type: 'h3', en: '3.2 General Form of an AP', ml: '3.2 സമാന്തരശ്രേണിയുടെ പൊതുരൂപം' },
      { type: 'p', en: 'The algebraic form of any AP is xₙ = an + b, where \'a\' is the common difference.', ml: 'ഏതൊരു സമാന്തരശ്രേണിയുടെയും ബീജഗണിത രൂപം xₙ = an + b എന്ന രീതിയിലായിരിക്കും. ഇവിടെ \'a\' എന്നത് പൊതുവ്യത്യാസമാണ്.' },
      { type: 'formula', en: 'xₙ = dn + (f - d)', ml: 'xₙ = dn + (f - d)' },
      
      { type: 'h3', en: '3.3 Sums of Number Sequences', ml: '3.3 സംഖ്യാശ്രേണികളുടെ തുകകൾ' },
      { type: 'p', en: '• Natural Numbers: n(n + 1) / 2\n• Even Numbers: n(n + 1)\n• Odd Numbers: n²', ml: '• എണ്ണൽ സംഖ്യകൾ: n(n + 1) / 2\n• ഇരട്ടസംഖ്യകൾ: n(n + 1)\n• ഒറ്റസംഖ്യകൾ: n²' },
      
      { type: 'h3', en: '3.4 Sum of an Arithmetic Sequence', ml: '3.4 സമാന്തരശ്രേണിയുടെ തുക' },
      { type: 'p', en: 'The sum of the first n terms takes the form Sn = pn² + qn.', ml: 'ആദ്യത്തെ n പദങ്ങളുടെ തുക Sn = pn² + qn എന്ന രൂപത്തിലായിരിക്കും.' },
      { type: 'formula', en: 'Sum = n/2 * (First term + Last term)', ml: 'തുക = n/2 * (ആദ്യ പദം + അവസാന പദം)' },
      
      { type: 'h2', en: '4. Tables', ml: '4. പട്ടികകൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Concept', ml: 'ആശയം'}, {en: 'Formula', ml: 'സൂത്രവാക്യം'}, {en: 'Use', ml: 'ഉപയോഗം'}],
          rows: [
            [{en: 'n-th Term', ml: 'n-ാം പദം'}, {en: 'xₙ = an + b', ml: 'xₙ = an + b'}, {en: 'Find any term', ml: 'ഏത് പദവും കണ്ടെത്താൻ'}],
            [{en: 'Natural Sum', ml: 'എണ്ണൽ സംഖ്യാ തുക'}, {en: 'n(n+1)/2', ml: 'n(n+1)/2'}, {en: 'Sum of 1,2,3...', ml: '1,2,3... തുക കാണാൻ'}],
            [{en: 'Odd Sum', ml: 'ഒറ്റസംഖ്യാ തുക'}, {en: 'n²', ml: 'n²'}, {en: 'Sum of 1,3,5...', ml: '1,3,5... തുക കാണാൻ'}]
          ]
      }},

      { type: 'h2', en: '5. Highlights', ml: '5. പ്രധാന പോയിന്റുകൾ (Highlights)' },
      { type: 'p', en: '• Coefficients of n in xₙ formula is the common difference.\n• Coefficient of n² in sum formula is d/2.\n• Sum of first n odd numbers is always a perfect square (n²).', ml: '• xₙ സമവാക്യത്തിൽ n-ന്റെ ഗുണോത്തരം പൊതുവ്യത്യാസമാണ്.\n• തുകയുടെ (Sn) സമവാക്യത്തിൽ n²-ന്റെ ഗുണോത്തരം പൊതുവ്യത്യാസത്തിന്റെ പകുതിയാണ്.\n• ആദ്യത്തെ n ഒറ്റസംഖ്യകളുടെ തുക എപ്പോഴും ഒരു പൂർണ്ണവർഗ്ഗമായിരിക്കും (n²).' }
    ]
  },
  glossary: [
    { term: { en: "Algebraic Form", ml: "ബീജഗണിത രൂപം" }, definition: { en: "Mathematical expression using variables.", ml: "അക്ഷരങ്ങൾ ഉപയോഗിച്ചുള്ള ഗണിത പ്രയോഗം." } }
  ],
  quiz: quiz
};

async function run() {
  try {
    console.log("Updating Arithmetic Sequences and Algebra chapter content...");
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
        lesson.id === 'math-ch3' ? algebraLesson : lesson
      )
    }));

    await docRef.update({
      'units': transformForFirestore(updatedUnits)
    });
    
    console.log("Successfully updated Chapter 3 Notes, Lab, and Quiz!");
  } catch (error) {
    console.error("Error updating Chapter 3:", error);
  }
}

run();
