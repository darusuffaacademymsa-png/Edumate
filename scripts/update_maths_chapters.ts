import admin from 'firebase-admin';
import { Subject, Lesson } from '../src/data/curriculum';
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

const createLesson = (id: string, en: string, ml: string): Lesson => ({
  id,
  title: { en, ml },
  estimated_time_mins: 60,
  learning_objectives: [],
  content: { intro: { en: "Coming soon...", ml: "ഉടൻ വരുന്നു..." }, core: { en: "", ml: "" } },
  glossary: [],
  quiz: []
});

const mathsSubject: Subject = {
  id: "sub-maths",
  title: { en: "Mathematics", ml: "ഗണിതം" },
  icon: "Calculator",
  color: "bg-[#00bfa5]",
  units: [
    {
      id: "u-math-1",
      title: { en: "Part 1", ml: "ഭാഗം 1" },
      lessons: [
        createLesson("math-ch1", "Arithmetic Sequences", "സമാന്തരശ്രേണികൾ"),
        createLesson("math-ch2", "Circles and Angles", "വൃത്തങ്ങളും കോണുകളും"),
        createLesson("math-ch3", "Arithmetic Sequences and Algebra", "സമാന്തരശ്രേണികളും ബീജഗണിതവും"),
        createLesson("math-ch4", "Mathematics of Chance", "സാധ്യതകളുടെ ഗണിതം"),
        createLesson("math-ch5", "Second Degree Equations", "രണ്ടാംകൃതി സമവാക്യങ്ങൾ"),
        createLesson("math-ch6", "Trigonometry", "ത്രികോണമിതി")
      ]
    },
    {
      id: "u-math-2",
      title: { en: "Part 2", ml: "ഭാഗം 2" },
      lessons: [
        createLesson("math-ch7", "Coordinates", "സൂചകസംഖ്യകൾ"),
        createLesson("math-ch8", "Tangents", "തൊടുവരകൾ"),
        createLesson("math-ch9", "Polynomials And Equations", "ബഹുപദങ്ങളും സമവാക്യങ്ങളും"),
        createLesson("math-ch10", "Circles And Lines", "വൃത്തങ്ങളും വരകളും"),
        createLesson("math-ch11", "Geometry And Algebra", "ജ്യാമിതിയും ബീജഗണിതവും"),
        createLesson("math-ch12", "Solids", "ഘനരൂപങ്ങൾ"),
        createLesson("math-ch13", "Statistics", "സ്ഥിതിവിവരക്കണക്കുകൾ")
      ]
    }
  ]
};

async function run() {
  try {
    console.log("Updating SSLC Mathematics chapters...");
    const docRef = db.collection('subjects').doc(`sslc-sub-maths`);
    await docRef.set(transformForFirestore({
      ...mathsSubject,
      curriculumId: 'sslc'
    }));
    console.log("Successfully updated SSLC Mathematics!");
  } catch (error) {
    console.error("Error updating Mathematics:", error);
  }
}

run();
