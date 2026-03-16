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
    id: "q1",
    question: { en: "What is an arithmetic sequence?", ml: "എന്താണ് സമാന്തരശ്രേണി (Arithmetic Sequence)?" },
    options: [
      { en: "A sequence of random numbers", ml: "ക്രമരഹിതമായ സംഖ്യകളുടെ കൂട്ടം" },
      { en: "A sequence where the next term is found by adding a fixed number", ml: "ഒരു നിശ്ചിത സംഖ്യ കൂട്ടിക്കൊണ്ട് അടുത്ത പദം കണ്ടെത്തുന്ന ശ്രേണി" },
      { en: "A sequence of square numbers", ml: "വർഗ്ഗസംഖ്യകളുടെ ശ്രേണി" },
      { en: "A sequence with no specific rule", ml: "നിശ്ചിത നിയമങ്ങളില്ലാത്ത ശ്രേണി" }
    ],
    correctAnswer: 1,
    explanation: { en: "An arithmetic sequence starts with a number and proceeds by adding/subtracting a constant.", ml: "ഒരു നിശ്ചിത സംഖ്യ കൂട്ടിക്കൊണ്ടോ കുറച്ചുകൊണ്ടോ നിർമ്മിക്കുന്ന ശ്രേണിയാണ് സമാന്തരശ്രേണി." }
  },
  {
    id: "q2",
    question: { en: "What is the common difference in an arithmetic sequence?", ml: "സമാന്തരശ്രേണിയിലെ പൊതുവ്യത്യാസം (Common Difference) എന്നാൽ എന്ത്?" },
    options: [
      { en: "The sum of all terms", ml: "പദങ്ങളുടെ തുക" },
      { en: "The first term of the sequence", ml: "ശ്രേണിയിലെ ആദ്യ പദം" },
      { en: "The constant number added to get the next term", ml: "അടുത്ത പദം ലഭിക്കാൻ കൂട്ടുന്ന നിശ്ചിത സംഖ്യ" },
      { en: "The number of terms in the sequence", ml: "പദങ്ങളുടെ എണ്ണം" }
    ],
    correctAnswer: 2,
    explanation: { en: "Common difference is found by subtracting a term from the next term.", ml: "ഒരു പദത്തിൽ നിന്ന് തൊട്ടുമുമ്പത്തെ പദം കുറയ്ക്കുമ്പോൾ ലഭിക്കുന്ന നിശ്ചിത സംഖ്യയാണ് പൊതുവ്യത്യാസം." }
  },
  {
    id: "q3",
    question: { en: "Find the common difference: 5, 8, 11, 14...", ml: "5, 8, 11, 14... എന്ന ശ്രേണിയുടെ പൊതുവ്യത്യാസം കണ്ടെത്തുക." },
    options: [
      { en: "5", ml: "5" },
      { en: "8", ml: "8" },
      { en: "3", ml: "3" },
      { en: "2", ml: "2" }
    ],
    correctAnswer: 2,
    explanation: { en: "8 - 5 = 3", ml: "8 - 5 = 3" }
  },
  {
    id: "q4",
    question: { en: "If the common difference is 5 and the 1st term is 10, what is the 2nd term?", ml: "ആദ്യ പദം 10-ഉം പൊതുവ്യത്യാസം 5-ഉം ആയാൽ രണ്ടാം പദം എത്ര?" },
    options: [
      { en: "5", ml: "5" },
      { en: "15", ml: "15" },
      { en: "20", ml: "20" },
      { en: "10", ml: "10" }
    ],
    correctAnswer: 1,
    explanation: { en: "10 + 5 = 15", ml: "10 + 5 = 15" }
  },
  {
    id: "q5",
    question: { en: "Is the sequence 1, 4, 9, 16... an arithmetic sequence?", ml: "1, 4, 9, 16... എന്നത് ഒരു സമാന്തരശ്രേണിയാണോ?" },
    options: [
      { en: "Yes", ml: "അതെ" },
      { en: "No", ml: "അല്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "The differences (3, 5, 7) are not constant.", ml: "പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം (3, 5, 7) തുല്യമല്ല." }
  },
  {
    id: "q6",
    question: { en: "If the 4th term is 45 and the 5th term is 56, what is the common difference?", ml: "നാലാം പദം 45-ഉം അഞ്ചാം പദം 56-ഉം ആയാൽ പൊതുവ്യത്യാസം എത്ര?" },
    options: [
      { en: "11", ml: "11" },
      { en: "10", ml: "10" },
      { en: "45", ml: "45" },
      { en: "56", ml: "56" }
    ],
    correctAnswer: 0,
    explanation: { en: "56 - 45 = 11", ml: "56 - 45 = 11" }
  },
  {
    id: "q7",
    question: { en: "In an arithmetic sequence, Term Difference = Position Difference × ?", ml: "ഒരു സമാന്തരശ്രേണിയിൽ, പദവ്യത്യാസം = സ്ഥാനവ്യത്യാസം × ?" },
    options: [
      { en: "First Term", ml: "ആദ്യ പദം" },
      { en: "Common Difference", ml: "പൊതുവ്യത്യാസം" },
      { en: "Sum of terms", ml: "തുക" },
      { en: "Position", ml: "സ്ഥാനം" }
    ],
    correctAnswer: 1,
    explanation: { en: "Term Difference = Position Difference × Common Difference.", ml: "പദവ്യത്യാസം = സ്ഥാനവ്യത്യാസം × പൊതുവ്യത്യാസം." }
  },
  {
    id: "q8",
    question: { en: "The sum of three consecutive terms is 30. What is the middle term?", ml: "തുടർച്ചയായ മൂന്ന് പദങ്ങളുടെ തുക 30 ആണ്. എങ്കിൽ നടുവിലെ പദം എത്ര?" },
    options: [
      { en: "5", ml: "5" },
      { en: "10", ml: "10" },
      { en: "15", ml: "15" },
      { en: "30", ml: "30" }
    ],
    correctAnswer: 1,
    explanation: { en: "Middle term = Sum / 3 = 30 / 3 = 10.", ml: "നടുവിലെ പദം = തുക / 3 = 30 / 3 = 10." }
  },
  {
    id: "q9",
    question: { en: "If x10 = 25, what is the sum of x9 and x11?", ml: "x10 = 25 ആയാൽ x9 + x11 എത്ര?" },
    options: [
      { en: "25", ml: "25" },
      { en: "50", ml: "50" },
      { en: "75", ml: "75" },
      { en: "100", ml: "100" }
    ],
    correctAnswer: 1,
    explanation: { en: "x9 + x11 = 2 × x10 = 2 × 25 = 50.", ml: "x9 + x11 = 2 × x10 = 2 × 25 = 50." }
  },
  {
    id: "q10",
    question: { en: "If x1 = 5 and d = 2, what is the 10th term?", ml: "x1 = 5, d = 2 ആയാൽ 10-ാം പദം എത്ര?" },
    options: [
      { en: "20", ml: "20" },
      { en: "23", ml: "23" },
      { en: "25", ml: "25" },
      { en: "18", ml: "18" }
    ],
    correctAnswer: 1,
    explanation: { en: "x10 = x1 + 9d = 5 + 9(2) = 5 + 18 = 23.", ml: "x10 = x1 + 9d = 5 + 9(2) = 5 + 18 = 23." }
  },
  {
    id: "q11",
    question: { en: "Common Difference can be found by (x_m - x_n) / ?", ml: "പൊതുവ്യത്യാസം = (x_m - x_n) / ?" },
    options: [
      { en: "m + n", ml: "m + n" },
      { en: "m - n", ml: "m - n" },
      { en: "x1", ml: "x1" },
      { en: "d", ml: "d" }
    ],
    correctAnswer: 1,
    explanation: { en: "Common difference = Term Difference / Position Difference.", ml: "പൊതുവ്യത്യാസം = പദവ്യത്യാസം / സ്ഥാനവ്യത്യാസം." }
  },
  {
    id: "q12",
    question: { en: "If x3=15 and x8=35, what is d?", ml: "x3=15, x8=35 ആയാൽ പൊതുവ്യത്യാസം (d) എത്ര?" },
    options: [
      { en: "4", ml: "4" },
      { en: "5", ml: "5" },
      { en: "6", ml: "6" },
      { en: "20", ml: "20" }
    ],
    correctAnswer: 0,
    explanation: { en: "d = (35 - 15) / (8 - 3) = 20 / 5 = 4.", ml: "d = (35 - 15) / (8 - 3) = 20 / 5 = 4." }
  },
  {
    id: "q13",
    question: { en: "The sum of terms at positions whose sum is equal are ?", ml: "സ്ഥാനങ്ങളുടെ തുക തുല്യമായാൽ പദങ്ങളുടെ തുക ?" },
    options: [
      { en: "Different", ml: "വ്യത്യസ്തമായിരിക്കും" },
      { en: "Zero", ml: "പൂജ്യമായിരിക്കും" },
      { en: "Equal", ml: "തുല്യമായിരിക്കും" },
      { en: "Double", ml: "ഇരട്ടിയായിരിക്കും" }
    ],
    correctAnswer: 2,
    explanation: { en: "If Position A + Position B = Position C + Position D, then xA + xB = xC + xD.", ml: "സ്ഥാനങ്ങളുടെ തുക തുല്യമായാൽ പദങ്ങളുടെ തുകയും തുല്യമായിരിക്കും." }
  },
  {
    id: "q14",
    question: { en: "If x1 + x10 = 50, then x2 + x9 = ?", ml: "x1 + x10 = 50 ആയാൽ x2 + x9 എത്ര?" },
    options: [
      { en: "40", ml: "40" },
      { en: "50", ml: "50" },
      { en: "60", ml: "60" },
      { en: "100", ml: "100" }
    ],
    correctAnswer: 1,
    explanation: { en: "Since 1+10 = 2+9, x1+x10 = x2+x9.", ml: "1+10 = 2+9 ആയതിനാൽ x1+x10 = x2+x9 = 50." }
  },
  {
    id: "q15",
    question: { en: "Is the sequence 10, 7, 4, 1... arithmetic?", ml: "10, 7, 4, 1... എന്നത് സമാന്തരശ്രേണിയാണോ?" },
    options: [
      { en: "Yes, d=3", ml: "അതെ, d=3" },
      { en: "Yes, d=-3", ml: "അതെ, d=-3" },
      { en: "No", ml: "അല്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "7 - 10 = -3, 4 - 7 = -3. It is arithmetic with d=-3.", ml: "7 - 10 = -3, 4 - 7 = -3. പൊതുവ്യത്യാസം -3 ആയ സമാന്തരശ്രേണിയാണിത്." }
  },
  {
    id: "q16",
    question: { en: "Find the 3rd term if sum of first 5 terms is 100.", ml: "ആദ്യത്തെ 5 പദങ്ങളുടെ തുക 100 ആയാൽ മൂന്നാം പദം കണ്ടെത്തുക." },
    options: [
      { en: "10", ml: "10" },
      { en: "20", ml: "20" },
      { en: "25", ml: "25" },
      { en: "50", ml: "50" }
    ],
    correctAnswer: 1,
    explanation: { en: "x3 = Sum / 5 = 100 / 5 = 20.", ml: "x3 = തുക / 5 = 100 / 5 = 20." }
  },
  {
    id: "q17",
    question: { en: "In an AP, if x1=10 and x2=10, what is d?", ml: "x1=10, x2=10 ആയാൽ d എത്ര?" },
    options: [
      { en: "10", ml: "10" },
      { en: "0", ml: "0" },
      { en: "1", ml: "1" },
      { en: "Undefined", ml: "നിർവ്വചിക്കാനാവില്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "d = 10 - 10 = 0. A sequence can have d=0.", ml: "d = 10 - 10 = 0. പൊതുവ്യത്യാസം പൂജ്യമാകാം." }
  },
  {
    id: "q18",
    question: { en: "If x5=20 and d=4, find x1.", ml: "x5=20, d=4 ആയാൽ ആദ്യ പദം (x1) എത്ര?" },
    options: [
      { en: "0", ml: "0" },
      { en: "4", ml: "4" },
      { en: "8", ml: "8" },
      { en: "16", ml: "16" }
    ],
    correctAnswer: 1,
    explanation: { en: "x1 = x5 - 4d = 20 - 4(4) = 20 - 16 = 4.", ml: "x1 = x5 - 4d = 20 - 4(4) = 20 - 16 = 4." }
  },
  {
    id: "q19",
    question: { en: "Which sequence is formed by perimeters of squares with sides 1, 2, 3...?", ml: "വശങ്ങൾ 1, 2, 3... ആയ സമചതുരങ്ങളുടെ ചുറ്റളവുകൾ ഏത് ശ്രേണി ഉണ്ടാക്കുന്നു?" },
    options: [
      { en: "1, 2, 3...", ml: "1, 2, 3..." },
      { en: "1, 4, 9...", ml: "1, 4, 9..." },
      { en: "4, 8, 12, 16...", ml: "4, 8, 12, 16..." },
      { en: "1, 8, 27...", ml: "1, 8, 27..." }
    ],
    correctAnswer: 2,
    explanation: { en: "Perimeter = 4 × side. So 4(1), 4(2), 4(3)... = 4, 8, 12...", ml: "ചുറ്റളവ് = 4 × വശം. അതിനാൽ 4, 8, 12... എന്നത് ഒരു സമാന്തരശ്രേണിയാണ്." }
  },
  {
    id: "q20",
    question: { en: "How to check if 100 is a term in sequence 1, 4, 7...?", ml: "1, 4, 7... എന്ന ശ്രേണിയിൽ 100 ഉണ്ടോ എന്ന് എങ്ങനെ പരിശോധിക്കാം?" },
    options: [
      { en: "Check if 100 is odd", ml: "100 ഒറ്റസംഖ്യയാണോ എന്ന് നോക്കുക" },
      { en: "Check if (100 - 1) is divisible by 3", ml: "(100 - 1) എന്നതിനെ 3 കൊണ്ട് നിശ്ശേഷം ഹരിക്കാമോ എന്ന് നോക്കുക" },
      { en: "Check if 100 is prime", ml: "100 അഭാജ്യസംഖ്യയാണോ എന്ന് നോക്കുക" },
      { en: "None of these", ml: "ഇവയൊന്നുമല്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "(100 - 1) / 3 = 99 / 3 = 33. Since it is divisible, 100 is a term.", ml: "(100 - 1) / 3 = 99 / 3 = 33. നിശ്ശേഷം ഹരിക്കാൻ കഴിയുന്നതിനാൽ 100 ഈ ശ്രേണിയിലെ ഒരു പദമാണ്." }
  },
  {
    id: "q21",
    question: { en: "Sum of 7 terms is 70. Find x4.", ml: "7 പദങ്ങളുടെ തുക 70 ആയാൽ x4 എത്ര?" },
    options: [
      { en: "7", ml: "7" },
      { en: "10", ml: "10" },
      { en: "14", ml: "14" },
      { en: "70", ml: "70" }
    ],
    correctAnswer: 1,
    explanation: { en: "x4 = 70 / 7 = 10.", ml: "x4 = 70 / 7 = 10." }
  },
  {
    id: "q22",
    question: { en: "If x1=a and common difference is d, what is xn?", ml: "ആദ്യ പദം a-യും പൊതുവ്യത്യാസം d-യും ആയാൽ xn എത്ര?" },
    options: [
      { en: "a + nd", ml: "a + nd" },
      { en: "a + (n-1)d", ml: "a + (n-1)d" },
      { en: "a + (n+1)d", ml: "a + (n+1)d" },
      { en: "nd", ml: "nd" }
    ],
    correctAnswer: 1,
    explanation: { en: "xn = x1 + (n-1)d.", ml: "xn = x1 + (n-1)d." }
  },
  {
    id: "q23",
    question: { en: "What is the common difference of even numbers?", ml: "ഇരട്ടസംഖ്യകളുടെ ശ്രേണിയുടെ പൊതുവ്യത്യാസം എത്ര?" },
    options: [
      { en: "1", ml: "1" },
      { en: "2", ml: "2" },
      { en: "0", ml: "0" },
      { en: "None", ml: "ഇവയൊന്നുമല്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "2, 4, 6... common difference is 2.", ml: "2, 4, 6... പൊതുവ്യത്യാസം 2 ആണ്." }
  },
  {
    id: "q24",
    question: { en: "In sequence 1, 4, 7... what is the remainder when any term is divided by 3?", ml: "1, 4, 7... എന്ന ശ്രേണിയിലെ പദങ്ങളെ 3 കൊണ്ട് ഹരിക്കുമ്പോൾ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?" },
    options: [
      { en: "0", ml: "0" },
      { en: "1", ml: "1" },
      { en: "2", ml: "2" },
      { en: "3", ml: "3" }
    ],
    correctAnswer: 1,
    explanation: { en: "1/3 rem 1, 4/3 rem 1, 7/3 rem 1.", ml: "ഈ ശ്രേണിയിലെ എല്ലാ പദങ്ങളെയും 3 കൊണ്ട് ഹരിക്കുമ്പോൾ 1 ശിഷ്ടം ലഭിക്കുന്നു." }
  },
  {
    id: "q25",
    question: { en: "If common difference is 0.5 and x1=1, what is x2?", ml: "പൊതുവ്യത്യാസം 0.5-ഉം x1=1-ഉം ആയാൽ x2 എത്ര?" },
    options: [
      { en: "1.5", ml: "1.5" },
      { en: "2", ml: "2" },
      { en: "0.5", ml: "0.5" },
      { en: "1", ml: "1" }
    ],
    correctAnswer: 0,
    explanation: { en: "1 + 0.5 = 1.5", ml: "1 + 0.5 = 1.5" }
  },
  {
    id: "q26",
    question: { en: "Term Difference / Position Difference = ?", ml: "പദവ്യത്യാസം / സ്ഥാനവ്യത്യാസം = ?" },
    options: [
      { en: "First term", ml: "ആദ്യ പദം" },
      { en: "Common Difference", ml: "പൊതുവ്യത്യാസം" },
      { en: "Sum", ml: "തുക" },
      { en: "n", ml: "n" }
    ],
    correctAnswer: 1,
    explanation: { en: "d = (xm - xn) / (m - n).", ml: "പൊതുവ്യത്യാസം = പദവ്യത്യാസം / സ്ഥാനവ്യത്യാസം." }
  },
  {
    id: "q27",
    question: { en: "If x1 + x5 = 40, find x3.", ml: "x1 + x5 = 40 ആയാൽ x3 എത്ര?" },
    options: [
      { en: "10", ml: "10" },
      { en: "20", ml: "20" },
      { en: "30", ml: "30" },
      { en: "40", ml: "40" }
    ],
    correctAnswer: 1,
    explanation: { en: "x3 = (x1 + x5) / 2 = 40 / 2 = 20.", ml: "x3 = (x1 + x5) / 2 = 40 / 2 = 20." }
  },
  {
    id: "q28",
    question: { en: "Are the squares of an AP also an AP?", ml: "ഒരു സമാന്തരശ്രേണിയിലെ പദങ്ങളുടെ വർഗ്ഗങ്ങൾ സമാന്തരശ്രേണിയായിരിക്കുമോ?" },
    options: [
      { en: "Always", ml: "എപ്പോഴും ആയിരിക്കും" },
      { en: "Never", ml: "ഒരിക്കലും ആയിരിക്കില്ല" },
      { en: "Only if d=0", ml: "d=0 ആയാൽ മാത്രം" },
      { en: "Sometimes", ml: "ചിലപ്പോൾ" }
    ],
    correctAnswer: 2,
    explanation: { en: "If d=0, all terms are same, so squares are also same (AP). Otherwise, not.", ml: "d=0 ആയാൽ എല്ലാ പദങ്ങളും തുല്യമായിരിക്കും, അതിനാൽ വർഗ്ഗങ്ങളും തുല്യമായിരിക്കും (സമാന്തരശ്രേണി)." }
  },
  {
    id: "q29",
    question: { en: "If the 1st term is 5 and common difference is -2, find the 3rd term.", ml: "ആദ്യ പദം 5-ഉം പൊതുവ്യത്യാസം -2-ഉം ആയാൽ മൂന്നാം പദം എത്ര?" },
    options: [
      { en: "3", ml: "3" },
      { en: "1", ml: "1" },
      { en: "7", ml: "7" },
      { en: "9", ml: "1" }
    ],
    correctAnswer: 1,
    explanation: { en: "x3 = 5 + 2(-2) = 5 - 4 = 1.", ml: "x3 = 5 + 2(-2) = 5 - 4 = 1." }
  },
  {
    id: "q30",
    question: { en: "Who is the father of sequence?", ml: "ശ്രേണികളുടെ പിതാവ് എന്ന് അറിയപ്പെടുന്നത് ആര്? (General concept)" },
    options: [
      { en: "Euler", ml: "ഓയിലർ" },
      { en: "Gauss", ml: "ഗാസ്" },
      { en: "Pythagoras", ml: "പൈതഗോറസ്" },
      { en: "Fibonacci", ml: "ഫിബൊനാച്ചി" }
    ],
    correctAnswer: 1,
    explanation: { en: "Carl Friedrich Gauss is famous for arithmetic sequence sum formula.", ml: "കാൾ ഫ്രെഡറിക് ഗാസ് സമാന്തരശ്രേണിയുടെ തുക കണ്ടെത്താനുള്ള സൂത്രവാക്യം കണ്ടെത്തിയതിൽ പ്രശസ്തനാണ്." }
  }
];

const arithmeticSequencesLesson: Lesson = {
  id: "math-ch1",
  title: { en: "Arithmetic Sequences", ml: "സമാന്തരശ്രേണികൾ (Arithmetic Sequences)" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Understand number patterns and sequences.", ml: "സംഖ്യാ പാറ്റേണുകളും ശ്രേണികളും (Sequences) മനസ്സിലാക്കുക." } },
    { id: "lo2", text: { en: "Identify arithmetic sequences using common difference.", ml: "പൊതുവ്യത്യാസം (Common Difference) ഉപയോഗിച്ച് സമാന്തരശ്രേണികളെ തിരിച്ചറിയുക." } },
    { id: "lo3", text: { en: "Apply the relationship between position and term values.", ml: "പദങ്ങളുടെ സ്ഥാനവും വിലയും തമ്മിലുള്ള ബന്ധം പ്രയോഗിക്കുക." } },
    { id: "lo4", text: { en: "Calculate distant terms and sums using algebraic properties.", ml: "ബീജഗണിത സവിശേഷതകൾ ഉപയോഗിച്ച് ദൂരെയുള്ള പദങ്ങളും തുകകളും കണ്ടെത്തുക." } }
  ],
  content: {
    intro: { 
      en: "This chapter introduces the concept of number patterns and sequences, specifically focusing on Arithmetic Sequences.", 
      ml: "സംഖ്യാ പാറ്റേണുകളെക്കുറിച്ചും ശ്രേണികളെക്കുറിച്ചുമുള്ള ആശയമാണ് ഈ അധ്യായം പരിചയപ്പെടുത്തുന്നത്, പ്രത്യേകിച്ച് സമാന്തരശ്രേണികളെ (Arithmetic Sequences) കുറിച്ച്." 
    },
    core: { 
      en: "Learn how to define rules for sequences, calculate common differences, and find sums of terms in symmetric positions.", 
      ml: "ശ്രേണികളുടെ നിയമങ്ങൾ നിർവ്വചിക്കാനും, പൊതുവ്യത്യാസം കണ്ടെത്താനും, സമമിത സ്ഥാനങ്ങളിലുള്ള പദങ്ങളുടെ തുക കണ്ടെത്താനും പഠിക്കുക." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. ഒരാമുഖം (Overview)' },
      { type: 'p', en: 'This chapter explains how sequences are formed by following specific rules, how to identify arithmetic sequences by finding the common difference, and the relationship between positions and terms.', ml: 'നിശ്ചിത നിയമങ്ങൾ പാലിച്ചുകൊണ്ട് എങ്ങനെയാണ് ശ്രേണികൾ രൂപപ്പെടുന്നതെന്നും, പൊതുവ്യത്യാസം (Common Difference) കണ്ടെത്തി എങ്ങനെ സമാന്തരശ്രേണികളെ തിരിച്ചറിയാമെന്നും ഈ അധ്യായം വിശദീകരിക്കുന്നു.' },
      
      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'p', en: '• Sequences: Ordered collection of numbers following a definite rule.\n• Arithmetic Sequences: Sequences formed by adding/subtracting a constant number.\n• Common Difference: The constant value added to get the next term.\n• Position-Term Relationship: Proportional change between term values and positions.', ml: '• ശ്രേണികൾ (Sequences): ഒരു നിശ്ചിത നിയമപ്രകാരം ക്രമീകരിച്ച സംഖ്യകളുടെ കൂട്ടം.\n• സമാന്തരശ്രേണികൾ (Arithmetic Sequences): ഒരു നിശ്ചിത സംഖ്യ കൂട്ടിക്കൊണ്ടോ കുറച്ചുകൊണ്ടോ നിർമ്മിക്കുന്ന ശ്രേണി.\n• പൊതുവ്യത്യാസം (Common Difference): അടുത്ത പദം ലഭിക്കാൻ കൂട്ടുന്ന നിശ്ചിത സംഖ്യ.\n• സ്ഥാനം-പദം ബന്ധം (Position-Term Relationship): പദങ്ങളുടെ വിലയും സ്ഥാനവും തമ്മിലുള്ള ആനുപാതിക ബന്ധം.' },
      
      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      
      { type: 'h3', en: '3.1 Number Patterns and Sequences', ml: '3.1 സംഖ്യാ പാറ്റേണുകളും ശ്രേണികളും' },
      { type: 'p', en: 'Numbers can be arranged according to rules (odd, even, squares). Sequences are determined by rules; without a rule, next terms cannot be predicted.', ml: 'ഒറ്റസംഖ്യകൾ, ഇരട്ടസംഖ്യകൾ, വർഗ്ഗസംഖ്യകൾ എന്നിങ്ങനെ നിയമങ്ങൾക്കനുസരിച്ച് സംഖ്യകളെ ക്രമീകരിക്കാം. നിയമമില്ലാതെ ഒരു ശ്രേണിയിലെ അടുത്ത പദങ്ങൾ പ്രവചിക്കാൻ കഴിയില്ല.' },
      
      { type: 'h3', en: '3.2 Identifying Arithmetic Sequences', ml: '3.2 സമാന്തരശ്രേണികളെ തിരിച്ചറിയൽ' },
      { type: 'p', en: 'If a sequence proceeds by continuously adding the same number, it is an arithmetic sequence. Check if (Current Term - Previous Term) is always the same.', ml: 'ഒരേ സംഖ്യ തന്നെ തുടർച്ചയായി കൂട്ടിക്കൊണ്ട് പോകുന്ന ശ്രേണിയാണ് സമാന്തരശ്രേണി. (ഒരു പദം - തൊട്ടുമുമ്പത്തെ പദം) എല്ലായിടത്തും തുല്യമാണോ എന്ന് പരിശോധിക്കുക.' },
      
      { type: 'h3', en: '3.3 Position and Term Changes', ml: '3.3 സ്ഥാനവും പദങ്ങളും തമ്മിലുള്ള മാറ്റം' },
      { type: 'p', en: 'The change in terms is proportional to the change in their positions. Forward: Add (Position Diff × d). Backward: Subtract (Position Diff × d).', ml: 'പദങ്ങളിലുണ്ടാകുന്ന മാറ്റം സ്ഥാനങ്ങളിലുണ്ടാകുന്ന മാറ്റത്തിന് ആനുപാതികമാണ്. മുന്നോട്ടുള്ള പദം കാണാൻ (സ്ഥാനവ്യത്യാസം × പൊതുവ്യത്യാസം) കൂട്ടുക. പിന്നോട്ടുള്ള പദം കാണാൻ കുറയ്ക്കുക.' },
      { type: 'formula', en: 'Common Difference (d) = Term Difference / Position Difference', ml: 'പൊതുവ്യത്യാസം (d) = പദവ്യത്യാസം / സ്ഥാനവ്യത്യാസം' },
      
      { type: 'h3', en: '3.4 Term Connections and Sums', ml: '3.4 പദങ്ങൾ തമ്മിലുള്ള ബന്ധവും തുകകളും' },
      { type: 'p', en: '• Sum of 3 consecutive terms = 3 × Middle Term.\n• Sum of symmetric terms = 2 × Central Term.\n• Equal Position Sums: If Pos A + Pos B = Pos C + Pos D, then xA + xB = xC + xD.', ml: '• തുടർച്ചയായ 3 പദങ്ങളുടെ തുക = 3 × നടുവിലെ പദം.\n• സമമിത പദങ്ങളുടെ തുക = 2 × കേന്ദ്ര പദം.\n• സ്ഥാനങ്ങളുടെ തുക തുല്യമായാൽ പദങ്ങളുടെ തുകയും തുല്യമായിരിക്കും.' },
      
      { type: 'h2', en: '4. Tables for Quick Learning', ml: '4. പഠന പട്ടികകൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
          rows: [
            [{en: 'Sequence', ml: 'ശ്രേണി'}, {en: 'Numbers ordered by a rule', ml: 'നിയമപ്രകാരം ക്രമീകരിച്ചവ'}, {en: '1, 4, 9, 16...', ml: '1, 4, 9, 16...'}],
            [{en: 'Arithmetic Sequence', ml: 'സമാന്തരശ്രേണി'}, {en: 'Formed by adding constant number', ml: 'നിശ്ചിത സംഖ്യ കൂട്ടിയുണ്ടാക്കുന്നത്'}, {en: '10, 13, 16...', ml: '10, 13, 16...'}],
            [{en: 'Common Difference', ml: 'പൊതുവ്യത്യാസം'}, {en: 'The fixed number added', ml: 'കൂട്ടുന്ന നിശ്ചിത സംഖ്യ'}, {en: 'd = 3', ml: 'd = 3'}]
          ]
      }},
      
      { type: 'h2', en: '5. Highlights', ml: '5. പ്രധാന പോയിന്റുകൾ (Highlights)' },
      { type: 'p', en: '• Middle term of 3 terms is 1/3 of their sum.\n• Sum of terms at symmetric positions remains constant.\n• To find if N is in sequence: (N - x1) must be divisible by d.', ml: '• തുടർച്ചയായ 3 പദങ്ങളുടെ തുകയുടെ മൂന്നിലൊന്നാണ് നടുവിലെ പദം.\n• സമമിത സ്ഥാനങ്ങളിലുള്ള പദങ്ങളുടെ തുക എപ്പോഴും തുല്യമായിരിക്കും.\n• ഒരു സംഖ്യ ശ്രേണിയിലുണ്ടോ എന്നറിയാൻ: (സംഖ്യ - ആദ്യപദം) പൊതുവ്യത്യാസത്തിന്റെ ഗുണിതമാണോ എന്ന് നോക്കുക.' },
      
      { type: 'h2', en: '6. Quick Revision', ml: '6. വേഗത്തിലുള്ള പുനരവലോകനം (Quick Revision)' },
      { type: 'p', en: '• Arithmetic sequences have constant common difference.\n• Term difference is proportional to position difference.\n• Middle term of an odd number of terms = Sum / Number of terms.', ml: '• സമാന്തരശ്രേണികളിൽ പൊതുവ്യത്യാസം തുല്യമായിരിക്കും.\n• പദവ്യത്യാസം സ്ഥാനവ്യത്യാസത്തിന് ആനുപാതികമാണ്.\n• ഒറ്റ എണ്ണം പദങ്ങളുടെ നടുവിലെ പദം = തുക / പദങ്ങളുടെ എണ്ണം.' }
    ]
  },
  glossary: [
    { term: { en: "Common Difference", ml: "പൊതുവ്യത്യാസം" }, definition: { en: "Fixed number added to each term.", ml: "ഓരോ പദത്തോടും കൂട്ടുന്ന നിശ്ചിത സംഖ്യ." } }
  ],
  quiz: quiz
};

async function run() {
  try {
    console.log("Updating Arithmetic Sequences chapter content...");
    const docRef = db.collection('subjects').doc(`sslc-sub-maths`);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      console.error("Maths subject not found!");
      return;
    }

    const data = doc.data() as any;
    // We need to find and update only math-ch1
    const updatedUnits = data.units.map((unit: any) => ({
      ...unit,
      lessons: unit.lessons.map((lesson: any) => 
        lesson.id === 'math-ch1' ? arithmeticSequencesLesson : lesson
      )
    }));

    await docRef.update({
      'units': transformForFirestore(updatedUnits)
    });
    
    console.log("Successfully updated Chapter 1 Notes and Quiz!");
  } catch (error) {
    console.error("Error updating Chapter 1:", error);
  }
}

run();
