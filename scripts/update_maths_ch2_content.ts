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
    id: "ch2-q1",
    question: { en: "What is the central angle?", ml: "എന്താണ് കേന്ദ്രകോൺ (Central Angle)?" },
    options: [
      { en: "Angle at the center by an arc", ml: "ഒരു ചാപം കേന്ദ്രത്തിൽ ഉണ്ടാക്കുന്ന കോൺ" },
      { en: "Angle on the circumference", ml: "പരിധിയിലുണ്ടാക്കുന്ന കോൺ" },
      { en: "Sum of all angles", ml: "എല്ലാ കോണുകളുടെയും തുക" },
      { en: "Angle outside the circle", ml: "വൃത്തത്തിന് പുറത്തുള്ള കോൺ" }
    ],
    correctAnswer: 0,
    explanation: { en: "The angle formed at the center of a circle by an arc is called the central angle.", ml: "ഒരു ചാപം വൃത്തകേന്ദ്രത്തിൽ ഉണ്ടാക്കുന്ന കോണിനെയാണ് കേന്ദ്രകോൺ എന്ന് വിളിക്കുന്നത്." }
  },
  {
    id: "ch2-q2",
    question: { en: "The angle made by an arc on the alternate arc is ?", ml: "ഒരു ചാപം അതിന്റെ മറുചാപത്തിൽ (Alternate Arc) ഉണ്ടാക്കുന്ന കോൺ എത്രയായിരിക്കും?" },
    options: [
      { en: "Equal to central angle", ml: "കേന്ദ്രകോണിന് തുല്യം" },
      { en: "Double the central angle", ml: "കേന്ദ്രകോണിന്റെ ഇരട്ടി" },
      { en: "Half the central angle", ml: "കേന്ദ്രകോണിന്റെ പകുതി" },
      { en: "90 degrees", ml: "90 ഡിഗ്രി" }
    ],
    correctAnswer: 2,
    explanation: { en: "The angle at the circumference is half the central angle of the same arc.", ml: "പരിധിയിലുണ്ടാക്കുന്ന കോൺ കേന്ദ്രകോണിന്റെ പകുതിയായിരിക്കും." }
  },
  {
    id: "ch2-q3",
    question: { en: "What is the angle in a semicircle?", ml: "അർദ്ധവൃത്തത്തിലെ (Semicircle) കോൺ എത്രയാണ്?" },
    options: [
      { en: "45°", ml: "45°" },
      { en: "90°", ml: "90°" },
      { en: "180°", ml: "180°" },
      { en: "60°", ml: "60°" }
    ],
    correctAnswer: 1,
    explanation: { en: "The angle in a semicircle is a right angle (90°).", ml: "അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണ് (90°)." }
  },
  {
    id: "ch2-q4",
    question: { en: "Sum of opposite angles in a cyclic quadrilateral is ?", ml: "ചക്രീയ ചതുർഭുജത്തിലെ (Cyclic Quadrilateral) എതിർകോണുകളുടെ തുക എത്രയാണ്?" },
    options: [
      { en: "90°", ml: "90°" },
      { en: "180°", ml: "180°" },
      { en: "360°", ml: "360°" },
      { en: "270°", ml: "270°" }
    ],
    correctAnswer: 1,
    explanation: { en: "In a cyclic quadrilateral, opposite angles add up to 180°.", ml: "ചക്രീയ ചതുർഭുജത്തിലെ എതിർകോണുകളുടെ തുക 180° ആണ്." }
  },
  {
    id: "ch2-q5",
    question: { en: "If an arc has a central angle of 120°, what is the angle on the alternate arc?", ml: "ഒരു ചാപത്തിന്റെ കേന്ദ്രകോൺ 120° ആയാൽ അതിന്റെ മറുചാപത്തിലെ കോൺ എത്ര?" },
    options: [
      { en: "120°", ml: "120°" },
      { en: "240°", ml: "240°" },
      { en: "60°", ml: "60°" },
      { en: "90°", ml: "90°" }
    ],
    correctAnswer: 2,
    explanation: { en: "120° / 2 = 60°", ml: "120° / 2 = 60°" }
  },
  {
    id: "ch2-q6",
    question: { en: "Angles in the same segment of a circle are ?", ml: "ഒരേ വൃത്തഖണ്ഡത്തിലെ (Segment) കോണുകൾ എങ്ങനെയുള്ളവയായിരിക്കും?" },
    options: [
      { en: "Complementary", ml: "പൂരകങ്ങൾ" },
      { en: "Supplementary", ml: "പരിപൂരകങ്ങൾ" },
      { en: "Equal", ml: "തുല്യം" },
      { en: "Unequal", ml: "വ്യത്യസ്തം" }
    ],
    correctAnswer: 2,
    explanation: { en: "Angles in the same segment are always equal.", ml: "ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ എപ്പോഴും തുല്യമായിരിക്കും." }
  },
  {
    id: "ch2-q7",
    question: { en: "If the 4th vertex of a quadrilateral is outside the circle passing through other 3, the sum of opposite angles is ?", ml: "ഒരു ചതുർഭുജത്തിന്റെ നാലാമത്തെ ശീർഷകം വൃത്തത്തിന് പുറത്താണെങ്കിൽ എതിർകോണുകളുടെ തുക എത്രയായിരിക്കും?" },
    options: [
      { en: "Equal to 180°", ml: "180° ന് തുല്യം" },
      { en: "Greater than 180°", ml: "180° ൽ കൂടുതൽ" },
      { en: "Less than 180°", ml: "180° ൽ കുറവ്" },
      { en: "0°", ml: "0°" }
    ],
    correctAnswer: 2,
    explanation: { en: "If the vertex is outside, the sum is less than 180°.", ml: "ശീർഷകം വൃത്തത്തിന് പുറത്താണെങ്കിൽ തുക 180° ൽ കുറവായിരിക്കും." }
  },
  {
    id: "ch2-q8",
    question: { en: "If the 4th vertex is inside the circle, the sum of opposite angles is ?", ml: "നാലാമത്തെ ശീർഷകം വൃത്തത്തിന് ഉള്ളിലാണെങ്കിൽ എതിർകോണുകളുടെ തുക എത്ര?" },
    options: [
      { en: "180°", ml: "180°" },
      { en: "Greater than 180°", ml: "180° ൽ കൂടുതൽ" },
      { en: "Less than 180°", ml: "180° ൽ കുറവ്" },
      { en: "360°", ml: "360°" }
    ],
    correctAnswer: 1,
    explanation: { en: "If the vertex is inside, the sum is greater than 180°.", ml: "ശീർഷകം വൃത്തത്തിന് ഉള്ളിലാണെങ്കിൽ തുക 180° ൽ കൂടുതലായിരിക്കും." }
  },
  {
    id: "ch2-q9",
    question: { en: "Which quadrilateral is always cyclic?", ml: "താഴെ പറയുന്നവയിൽ ഏത് ചതുർഭുജമാണ് എപ്പോഴും ചക്രീയമാകുന്നത്?" },
    options: [
      { en: "Parallelogram", ml: "സാമാന്തരികം" },
      { en: "Rhombus", ml: "റോംബസ്" },
      { en: "Rectangle", ml: "ചതുരം" },
      { en: "Trapezium", ml: "ലംബകം" }
    ],
    correctAnswer: 2,
    explanation: { en: "Rectangles and isosceles trapeziums are always cyclic.", ml: "ചതുരവും സമപാർശ്വ ലംബകവും എപ്പോഴും ചക്രീയ ചതുർഭുജങ്ങളായിരിക്കും." }
  },
  {
    id: "ch2-q10",
    question: { en: "The sum of angles in alternate segments is ?", ml: "മറു വൃത്തഖണ്ഡങ്ങളിലെ (Alternate Segments) കോണുകളുടെ തുക എത്ര?" },
    options: [
      { en: "90°", ml: "90°" },
      { en: "180°", ml: "180°" },
      { en: "360°", ml: "360°" },
      { en: "120°", ml: "120°" }
    ],
    correctAnswer: 1,
    explanation: { en: "Angles in alternate segments are supplementary (sum to 180°).", ml: "മറു വൃത്തഖണ്ഡങ്ങളിലെ കോണുകളുടെ തുക 180° ആണ്." }
  },
  {
    id: "ch2-q11",
    question: { en: "How many points split a circle into two arcs?", ml: "എത്ര ബിന്ദുക്കൾ ഒരു വൃത്തത്തെ രണ്ട് ചാപങ്ങളായി തിരിക്കുന്നു?" },
    options: [
      { en: "1", ml: "1" },
      { en: "2", ml: "2" },
      { en: "3", ml: "3" },
      { en: "Infinite", ml: "അനന്തം" }
    ],
    correctAnswer: 1,
    explanation: { en: "Any two points on a circle split it into two arcs.", ml: "വൃത്തത്തിലെ ഏതെങ്കിലും രണ്ട് ബിന്ദുക്കൾ അതിനെ രണ്ട് ചാപങ്ങളായി തിരിക്കുന്നു." }
  },
  {
    id: "ch2-q12",
    question: { en: "In a circle, a chord divide the circular region into two ?", ml: "വൃത്തത്തിലെ ഒരു ജ്യാ (Chord) വൃത്തത്തെ രണ്ട് ഭാഗങ്ങളായി തിരിക്കുന്നു. ഇവയെ എന്ത് വിളിക്കുന്നു?" },
    options: [
      { en: "Arcs", ml: "ചാപങ്ങൾ" },
      { en: "Segments", ml: "വൃത്തഖണ്ഡങ്ങൾ" },
      { en: "Sectors", ml: "സെക്ടറുകൾ" },
      { en: "Diameters", ml: "വ്യാസങ്ങൾ" }
    ],
    correctAnswer: 1,
    explanation: { en: "A chord divides a circle into two segments.", ml: "ഒരു ജ്യാ വൃത്തത്തെ രണ്ട് വൃത്തഖണ്ഡങ്ങളായി തിരിക്കുന്നു." }
  },
  {
    id: "ch2-q13",
    question: { en: "If an isosceles triangle is inscribed in a semicircle with diameter as base, the third angle is ?", ml: "ഒരു അർദ്ധവൃത്തത്തിൽ വ്യാസം പാദമായി വരുന്ന രീതിയിൽ ഒരു സമപാർശ്വ ത്രികോണം വരച്ചാൽ മൂന്നാമത്തെ കോൺ എത്ര?" },
    options: [
      { en: "45°", ml: "45°" },
      { en: "60°", ml: "60°" },
      { en: "90°", ml: "90°" },
      { en: "30°", ml: "30°" }
    ],
    correctAnswer: 2,
    explanation: { en: "Any angle in a semicircle is 90°.", ml: "അർദ്ധവൃത്തത്തിലെ ഏത് കോണും 90° ആയിരിക്കും." }
  },
  {
    id: "ch2-q14",
    question: { en: "If opposite angles of a quadrilateral are 80° and 100°, is it cyclic?", ml: "ഒരു ചതുർഭുജത്തിലെ എതിർകോണുകൾ 80°, 100° ആയാൽ അത് ചക്രീയമാണോ?" },
    options: [
      { en: "Yes", ml: "അതെ" },
      { en: "No", ml: "അല്ല" }
    ],
    correctAnswer: 0,
    explanation: { en: "80 + 100 = 180. So it is cyclic.", ml: "80 + 100 = 180 ആയതിനാൽ അത് ചക്രീയമാണ്." }
  },
  {
    id: "ch2-q15",
    question: { en: "The central angle of a semicircle is ?", ml: "അർദ്ധവൃത്തത്തിന്റെ കേന്ദ്രകോൺ എത്രയാണ്?" },
    options: [
      { en: "90°", ml: "90°" },
      { en: "180°", ml: "180°" },
      { en: "360°", ml: "360°" },
      { en: "270°", ml: "270°" }
    ],
    correctAnswer: 1,
    explanation: { en: "A semicircle covers half of 360°, which is 180°.", ml: "അർദ്ധവൃത്തം വൃത്തത്തിന്റെ പകുതിയായതിനാൽ കേന്ദ്രകോൺ 180° ആണ്." }
  },
  {
    id: "ch2-q16",
    question: { en: "To draw a perpendicular to a line using a circle, we use the property of ?", ml: "ഒരു വൃത്തം ഉപയോഗിച്ച് ഒരു വരയ്ക്ക് ലംബം വരയ്ക്കാൻ വൃത്തത്തിന്റെ ഏത് പ്രത്യേകതയാണ് ഉപയോഗിക്കുന്നത്?" },
    options: [
      { en: "Central angle", ml: "കേന്ദ്രകോൺ" },
      { en: "Cyclic quadrilateral", ml: "ചക്രീയ ചതുർഭുജം" },
      { en: "Angle in a semicircle", ml: "അർദ്ധവൃത്തത്തിലെ കോൺ" },
      { en: "Equal segments", ml: "തുല്യ വൃത്തഖണ്ഡങ്ങൾ" }
    ],
    correctAnswer: 2,
    explanation: { en: "We use the fact that the angle in a semicircle is 90°.", ml: "അർദ്ധവൃത്തത്തിലെ കോൺ 90° ആണ് എന്ന തത്വമാണ് ഇതിനായി ഉപയോഗിക്കുന്നത്." }
  },
  {
    id: "ch2-q17",
    question: { en: "If an arc makes 40° on the alternate arc, its central angle is ?", ml: "ഒരു ചാപം അതിന്റെ മറുചാപത്തിൽ 40° കോൺ ഉണ്ടാക്കുന്നുവെങ്കിൽ അതിന്റെ കേന്ദ്രകോൺ എത്ര?" },
    options: [
      { en: "20°", ml: "20°" },
      { en: "40°", ml: "40°" },
      { en: "80°", ml: "80°" },
      { en: "160°", ml: "160°" }
    ],
    correctAnswer: 2,
    explanation: { en: "Central angle = 2 × 40° = 80°.", ml: "കേന്ദ്രകോൺ = 2 × 40° = 80°." }
  },
  {
    id: "ch2-q18",
    question: { en: "Which property is true for a cyclic quadrilateral ABCD?", ml: "ഒരു ചക്രീയ ചതുർഭുജം ABCD ക്ക് താഴെ പറയുന്നവയിൽ ഏതാണ് ശരി?" },
    options: [
      { en: "A + B = 180°", ml: "A + B = 180°" },
      { en: "A + C = 180°", ml: "A + C = 180°" },
      { en: "A + D = 180°", ml: "A + D = 180°" },
      { en: "A + B + C + D = 180°", ml: "A + B + C + D = 180°" }
    ],
    correctAnswer: 1,
    explanation: { en: "Opposite angles (A & C, B & D) are supplementary.", ml: "എതിർകോണുകളുടെ (A യും C യും, B യും D യും) തുക 180° ആയിരിക്കും." }
  },
  {
    id: "ch2-q19",
    question: { en: "Can we draw a circle through the vertices of any rhombus?", ml: "ഏതൊരു റോംബസിന്റെയും (Rhombus) ശീർഷകങ്ങളിലൂടെ വൃത്തം വരയ്ക്കാൻ കഴിയുമോ?" },
    options: [
      { en: "Yes, always", ml: "അതെ, എപ്പോഴും" },
      { en: "Only if it is a square", ml: "അതൊരു സമചതുരമാണെങ്കിൽ മാത്രം" },
      { en: "No, never", ml: "ഇല്ല, ഒരിക്കലുമില്ല" },
      { en: "Sometimes", ml: "ചിലപ്പോൾ" }
    ],
    correctAnswer: 1,
    explanation: { en: "A rhombus is cyclic only if its opposite angles are 90°, making it a square.", ml: "എതിർകോണുകളുടെ തുക 180° ആകുന്ന റോംബസ് ഒരു സമചതുരമായിരിക്കും." }
  },
  {
    id: "ch2-q20",
    question: { en: "The sum of central angles of two alternate arcs is ?", ml: "രണ്ട് മറുചാപങ്ങളുടെ കേന്ദ്രകോണുകളുടെ തുക എത്രയായിരിക്കും?" },
    options: [
      { en: "180°", ml: "180°" },
      { en: "90°", ml: "90°" },
      { en: "360°", ml: "360°" },
      { en: "270°", ml: "270°" }
    ],
    correctAnswer: 2,
    explanation: { en: "The entire circle is 360°.", ml: "ഒരു പൂർണ്ണ വൃത്തത്തിന്റെ കേന്ദ്രകോൺ 360° ആണ്." }
  },
  {
    id: "ch2-q21",
    question: { en: "If an arc is joined to a point inside the arc itself, the angle is ?", ml: "ഒരു ചാപത്തിന്റെ അഗ്രബിന്ദുക്കൾ ആ ചാപത്തിലെ തന്നെ ഒരു ബിന്ദുവുമായി യോജിപ്പിച്ചാൽ കിട്ടുന്ന കോൺ ?", },
    options: [
      { en: "Half the central angle", ml: "കേന്ദ്രകോണിന്റെ പകുതി" },
      { en: "More than 90°", ml: "90° ൽ കൂടുതൽ" },
      { en: "Not half the central angle", ml: "കേന്ദ്രകോണിന്റെ പകുതിയായിരിക്കില്ല" },
      { en: "Always 180°", ml: "എപ്പോഴും 180°" }
    ],
    correctAnswer: 2,
    explanation: { en: "The rule only applies to points on the alternate arc.", ml: "ഈ നിയമം മറുചാപത്തിലെ ബിന്ദുക്കൾക്ക് മാത്രമേ ബാധകമാകൂ." }
  },
  {
    id: "ch2-q22",
    question: { en: "In an isosceles trapezium, opposite angles are ?", ml: "ഒരു സമപാർശ്വ ലംബകത്തിൽ (Isosceles Trapezium) എതിർകോണുകൾ ?", },
    options: [
      { en: "Equal", ml: "തുല്യം" },
      { en: "Supplementary", ml: "പരിപൂരകങ്ങൾ (180°)" },
      { en: "Complementary", ml: "പൂരകങ്ങൾ (90°)" },
      { en: "None", ml: "ഇവയൊന്നുമല്ല" }
    ],
    correctAnswer: 1,
    explanation: { en: "Isosceles trapeziums are cyclic, so opposite angles sum to 180°.", ml: "സമപാർശ്വ ലംബകം ചക്രീയമായതിനാൽ എതിർകോണുകളുടെ തുക 180° ആണ്." }
  },
  {
    id: "ch2-q23",
    question: { en: "Angle in a major segment is ?", ml: "മേജർ വൃത്തഖണ്ഡത്തിലെ കോൺ എങ്ങനെയുള്ളതായിരിക്കും?" },
    options: [
      { en: "Acute (< 90°)", ml: "ലഘുകോൺ (90° ൽ കുറവ്)" },
      { en: "Obtuse (> 90°)", ml: "ബൃഹത്കോൺ (90° ൽ കൂടുതൽ)" },
      { en: "Right angle", ml: "മട്ടകോൺ" },
      { en: "Reflex angle", ml: "ബ്രഹത് കോൺ" }
    ],
    correctAnswer: 0,
    explanation: { en: "Angle in a major segment is always less than 90°.", ml: "മേജർ വൃത്തഖണ്ഡത്തിലെ കോൺ ലഘുകോണായിരിക്കും." }
  },
  {
    id: "ch2-q24",
    question: { en: "Angle in a minor segment is ?", ml: "മൈനർ വൃത്തഖണ്ഡത്തിലെ കോൺ ?", },
    options: [
      { en: "Acute", ml: "ലഘുകോൺ" },
      { en: "Obtuse", ml: "ബൃഹത്കോൺ" },
      { en: "Right angle", ml: "മട്ടകോൺ" },
      { en: "Reflex", ml: "ബ്രഹത് കോൺ" }
    ],
    correctAnswer: 1,
    explanation: { en: "Angle in a minor segment is always greater than 90°.", ml: "മൈനർ വൃത്തഖണ്ഡത്തിലെ കോൺ ബൃഹത്കോണായിരിക്കും." }
  },
  {
    id: "ch2-q25",
    question: { en: "If diagonal of a cyclic quadrilateral is the diameter, what are opposite angles?", ml: "ഒരു ചക്രീയ ചതുർഭുജത്തിന്റെ വികർണ്ണം വ്യാസമാണെങ്കിൽ എതിർകോണുകൾ എത്ര?" },
    options: [
      { en: "90°, 90°", ml: "90°, 90°" },
      { en: "60°, 120°", ml: "60°, 120°" },
      { en: "45°, 135°", ml: "45°, 135°" },
      { en: "Cannot say", ml: "പറയാനാവില്ല" }
    ],
    correctAnswer: 0,
    explanation: { en: "Angles in a semicircle are 90°.", ml: "അർദ്ധവൃത്തത്തിലെ കോണുകൾ 90° ആയിരിക്കും." }
  },
  {
    id: "ch2-q26",
    question: { en: "If ABCD is cyclic, and A=70°, then C= ?", ml: "ABCD ചക്രീയമാണ്, A=70° ആയാൽ C എത്ര?" },
    options: [
      { en: "70°", ml: "70°" },
      { en: "110°", ml: "110°" },
      { en: "180°", ml: "180°" },
      { en: "90°", ml: "90°" }
    ],
    correctAnswer: 1,
    explanation: { en: "180 - 70 = 110.", ml: "180 - 70 = 110." }
  },
  {
    id: "ch2-q27",
    question: { en: "All rectangles are cyclic quadrilaterals.", ml: "എല്ലാ ചതുരങ്ങളും ചക്രീയ ചതുർഭുജങ്ങളാണ്." },
    options: [
      { en: "True", ml: "ശരി" },
      { en: "False", ml: "തെറ്റ്" }
    ],
    correctAnswer: 0,
    explanation: { en: "Opposite angles of a rectangle are 90+90=180.", ml: "ചതുരത്തിന്റെ എതിർകോണുകളുടെ തുക 90+90=180 ആണ്." }
  },
  {
    id: "ch2-q28",
    question: { en: "Can a parallelogram be cyclic?", ml: "ഒരു സാമാന്തരികം ചക്രീയമാകുമോ?" },
    options: [
      { en: "Only if it is a rectangle", ml: "ചതുരമാണെങ്കിൽ മാത്രം" },
      { en: "Always", ml: "എപ്പോഴും" },
      { en: "Never", ml: "ഒരിക്കലുമില്ല" },
      { en: "Only if its sides are equal", ml: "വശങ്ങൾ തുല്യമാണെങ്കിൽ മാത്രം" }
    ],
    correctAnswer: 0,
    explanation: { en: "Opposite angles of a parallelogram are equal. For it to be cyclic, they must also be 90°.", ml: "സാമാന്തരികത്തിന്റെ എതിർകോണുകൾ തുല്യമാണ്. അവ ചക്രീയമാകണമെങ്കിൽ 90° വീതം ആയിരിക്കണം." }
  },
  {
    id: "ch2-q29",
    question: { en: "If central angle is 180°, the arc is a ?", ml: "കേന്ദ്രകോൺ 180° ആണെങ്കിൽ ആ ചാപം ഒരു ?", },
    options: [
      { en: "Minor arc", ml: "മൈനർ ചാപം" },
      { en: "Major arc", ml: "മേജർ ചാപം" },
      { en: "Semicircle", ml: "അർദ്ധവൃത്തം" },
      { en: "Complete circle", ml: "പൂർണ്ണ വൃത്തം" }
    ],
    correctAnswer: 2,
    explanation: { en: "180° central angle defines a semicircle.", ml: "180° കേന്ദ്രകോൺ ഉള്ള ചാപമാണ് അർദ്ധവൃത്തം." }
  },
  {
    id: "ch2-q30",
    question: { en: "If the vertices of a quadrilateral are (0,0), (4,0), (4,4), (0,4), is it cyclic?", ml: "(0,0), (4,0), (4,4), (0,4) എന്നിവ ശീർഷകങ്ങളായ ചതുർഭുജം ചക്രീയമാണോ?" },
    options: [
      { en: "Yes (It is a square)", ml: "അതെ (ഇതൊരു സമചതുരമാണ്)" },
      { en: "No", ml: "അല്ല" }
    ],
    correctAnswer: 0,
    explanation: { en: "These coordinates form a square, and all squares are cyclic.", ml: "ഇതൊരു സമചതുരമാണ്, എല്ലാ സമചതുരങ്ങളും ചക്രീയമാണ്." }
  }
];

const circlesAndAnglesLesson: Lesson = {
  id: "math-ch2",
  title: { en: "Circles and Angles", ml: "വൃത്തങ്ങളും കോണുകളും (Circles and Angles)" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Understand the relationship between central angles and angles on the circle.", ml: "കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും തമ്മിലുള്ള ബന്ധം മനസ്സിലാക്കുക." } },
    { id: "lo2", text: { en: "Identify the special property of angles in a semicircle.", ml: "അർദ്ധവൃത്തത്തിലെ കോണിന്റെ പ്രത്യേകത തിരിച്ചറിയുക." } },
    { id: "lo3", text: { en: "Learn properties of angles in different segments of a circle.", ml: "വൃത്തഖണ്ഡങ്ങളിലെ കോണുകളുടെ സവിശേഷതകൾ പഠിക്കുക." } },
    { id: "lo4", text: { en: "Understand and apply properties of cyclic quadrilaterals.", ml: "ചക്രീയ ചതുർഭുജങ്ങളുടെ സവിശേഷതകൾ മനസ്സിലാക്കുകയും പ്രയോഗിക്കുകയും ചെയ്യുക." } }
  ],
  content: {
    intro: { 
      en: "This chapter explores the geometric relationships between circles and the angles formed within them.", 
      ml: "വൃത്തങ്ങളും അവയ്ക്കുള്ളിൽ രൂപപ്പെടുന്ന കോണുകളും തമ്മിലുള്ള ജ്യാമിതീയ ബന്ധങ്ങളെക്കുറിച്ചാണ് ഈ അധ്യായം പ്രതിപാദിക്കുന്നത്." 
    },
    core: { 
      en: "Learn about arcs, central angles, semicircles, segments, and cyclic quadrilaterals.", 
      ml: "ചാപങ്ങൾ, കേന്ദ്രകോണുകൾ, അർദ്ധവൃത്തങ്ങൾ, വൃത്തഖണ്ഡങ്ങൾ, ചക്രീയ ചതുർഭുജങ്ങൾ എന്നിവയെക്കുറിച്ച് പഠിക്കുക." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. ഒരാമുഖം (Overview)' },
      { type: 'p', en: 'This chapter focuses on how arcs, chords, and segments relate to central angles and angles on the circle\'s circumference. It also introduces cyclic quadrilaterals.', ml: 'ചാപങ്ങൾ (Arcs), ജ്യകൾ (Chords), വൃത്തഖണ്ഡങ്ങൾ (Segments) എന്നിവ കേന്ദ്രകോണുകളുമായും വൃത്തപരിധിയിലെ കോണുകളുമായും എങ്ങനെ ബന്ധപ്പെട്ടിരിക്കുന്നു എന്ന് ഈ അധ്യായം വിശദീകരിക്കുന്നു.' },
      
      { type: 'h2', en: 'Interactive Geometry Lab', ml: 'ജ്യാമിതി ലാബ്' },
      { 
        type: 'img', 
        customId: 'circle-angles-lab', 
        en: 'Drag the points to explore angle properties!', 
        ml: 'കോണുകളുടെ പ്രത്യേകതകൾ മനസ്സിലാക്കാൻ ബിന്ദുക്കൾ ഡ്രാഗ് ചെയ്യുക!' 
      },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'p', en: '• Central Angle: Angle at the center by an arc.\n• Angle on the Circle: Angle formed at the circumference.\n• Angle in a Semicircle: Always 90 degrees.\n• Cyclic Quadrilateral: Vertices lie on a single circle.', ml: '• കേന്ദ്രകോൺ (Central Angle): ഒരു ചാപം കേന്ദ്രത്തിൽ ഉണ്ടാക്കുന്ന കോൺ.\n• വൃത്തത്തിലെ കോൺ (Angle on the Circle): വൃത്തപരിധിയിൽ ഉണ്ടാകുന്ന കോൺ.\n• അർദ്ധവൃത്തത്തിലെ കോൺ (Angle in a Semicircle): എപ്പോഴും 90 ഡിഗ്രി.\n• ചക്രീയ ചതുർഭുജം (Cyclic Quadrilateral): നാല് ശീർഷകങ്ങളും വൃത്തപരിധിയിലുള്ള ചതുർഭുജം.' },
      
      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      
      { type: 'h3', en: '3.1 Arcs and Angles', ml: '3.1 ചാപങ്ങളും കോണുകളും' },
      { type: 'p', en: 'The angle made by joining the ends of an arc to a point on the alternate arc is exactly half the central angle of that arc.', ml: 'ഒരു ചാപത്തിന്റെ അഗ്രബിന്ദുക്കൾ മറുചാപത്തിലെ (Alternate Arc) ഒരു ബിന്ദുവുമായി യോജിപ്പിച്ചാൽ കിട്ടുന്ന കോൺ കേന്ദ്രകോണിന്റെ പകുതിയായിരിക്കും.' },
      
      { type: 'h3', en: '3.2 Angle in a Semicircle', ml: '3.2 അർദ്ധവൃത്തത്തിലെ കോൺ' },
      { type: 'p', en: 'The angle in a semicircle is a right angle (90°). This property is used to draw perpendiculars using a compass and ruler.', ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ എപ്പോഴും മട്ടകോണായിരിക്കും (90°). ഈ തത്വം ഉപയോഗിച്ച് കോമ്പസ്സും റൂളറും ഉപയോഗിച്ച് ലംബരേഖകൾ വരയ്ക്കാൻ കഴിയും.' },
      
      { type: 'h3', en: '3.3 Segments of a Circle', ml: '3.3 വൃത്തഖണ്ഡങ്ങൾ (Segments)' },
      { type: 'p', en: 'Angles in the same segment of a circle are always equal. The sum of the angles in alternate segments is always 180°.', ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ എപ്പോഴും തുല്യമായിരിക്കും. മറു വൃത്തഖണ്ഡങ്ങളിലെ കോണുകളുടെ തുക 180° ആയിരിക്കും.' },
      
      { type: 'h3', en: '3.4 Cyclic Quadrilaterals', ml: '3.4 ചക്രീയ ചതുർഭുജങ്ങൾ (Cyclic Quadrilaterals)' },
      { type: 'p', en: 'If all vertices lie on a circle, the sum of its opposite angles is exactly 180°. If the sum is 180°, it is a cyclic quadrilateral.', ml: 'ഒരു ചതുർഭുജത്തിന്റെ നാല് ശീർഷകങ്ങളും വൃത്തപരിധിയിലാണെങ്കിൽ എതിർകോണുകളുടെ തുക 180° ആയിരിക്കും. തിരിച്ച്, എതിർകോണുകളുടെ തുക 180° ആണെങ്കിൽ അതൊരു ചക്രീയ ചതുർഭുജമാണ്.' },
      
      { type: 'h2', en: '4. Tables', ml: '4. പട്ടികകൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
          rows: [
            [{en: 'Arc', ml: 'ചാപം'}, {en: 'Portion of circumference', ml: 'പരിധിയുടെ ഒരു ഭാഗം'}, {en: 'Semicircle is an arc', ml: 'അർദ്ധവൃത്തം ഒരു ചാപമാണ്'}],
            [{en: 'Cyclic Quad.', ml: 'ചക്രീയ ചതുർഭുജം'}, {en: 'Vertices on circle', ml: 'ശീർഷകങ്ങൾ വൃത്തത്തിൽ'}, {en: 'Rectangles', ml: 'ചതുരങ്ങൾ'}]
          ]
      }},

      { type: 'h2', en: '5. Highlights', ml: '5. പ്രധാന പോയിന്റുകൾ (Highlights)' },
      { type: 'p', en: '• Angles in the same segment are equal.\n• Alternate segments sum to 180°.\n• Vertex outside circle: Sum < 180°.\n• Vertex inside circle: Sum > 180°.', ml: '• ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്.\n• മറു വൃത്തഖണ്ഡങ്ങളിലെ കോണുകളുടെ തുക 180° ആണ്.\n• ശീർഷകം വൃത്തത്തിന് പുറത്താണെങ്കിൽ: തുക < 180°.\n• ശീർഷകം വൃത്തത്തിന് ഉള്ളിലാണെങ്കിൽ: തുക > 180°.' }
    ]
  },
  glossary: [
    { term: { en: "Semicircle", ml: "അർദ്ധവൃത്തം" }, definition: { en: "Half of a circle.", ml: "വൃത്തത്തിന്റെ പകുതി." } },
    { term: { en: "Chord", ml: "ജ്യാ" }, definition: { en: "Line segment joining two points on circle.", ml: "വൃത്തത്തിലെ രണ്ട് ബിന്ദുക്കളെ യോജിപ്പിക്കുന്ന രേഖ." } }
  ],
  quiz: quiz
};

async function run() {
  try {
    console.log("Updating Circles and Angles chapter content...");
    const docRef = db.collection('subjects').doc(`sslc-sub-maths`);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      console.error("Maths subject not found!");
      return;
    }

    const data = doc.data() as any;
    const updatedUnits = data.units.map((unit: any) => ({
      ...unit,
      lessons: unit.lessons.map((lesson: any) => 
        lesson.id === 'math-ch2' ? circlesAndAnglesLesson : lesson
      )
    }));

    await docRef.update({
      'units': transformForFirestore(updatedUnits)
    });
    
    console.log("Successfully updated Chapter 2 Notes, Lab, and Quiz!");
  } catch (error) {
    console.error("Error updating Chapter 2:", error);
  }
}

run();
