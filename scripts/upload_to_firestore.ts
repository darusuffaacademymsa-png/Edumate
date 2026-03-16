import admin from 'firebase-admin';
import { sslcCurriculum, Category } from '../src/data/curriculum';
import { plusOneCurriculum } from '../src/data/plusone_curriculum';
import { darsCurriculum } from '../src/data/dars_curriculum';

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

// Helper to remove undefined and transform nested arrays
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

async function uploadCurriculum(curriculumId: string, subjects: any[]) {
  console.log(`Uploading ${curriculumId} subjects...`);
  for (const subject of subjects) {
    const docRef = db.collection('subjects').doc(`${curriculumId}-${subject.id}`);
    await docRef.set(transformForFirestore({
      ...subject,
      curriculumId: curriculumId
    }));
  }
}

const initialCategories: Category[] = [
  { id: 'class1', name: 'Class 1', mode: 'School', active: true, icon: 'Sparkles', color: 'blue', students: '10k', lessons: 30, path: '/sslc' },
  { id: 'class2', name: 'Class 2', mode: 'School', active: true, icon: 'Zap', color: 'cyan', students: '12k', lessons: 35, path: '/sslc' },
  { id: 'class3', name: 'Class 3', mode: 'School', active: true, icon: 'Leaf', color: 'emerald', students: '15k', lessons: 40, path: '/sslc' },
  { id: 'class4', name: 'Class 4', mode: 'School', active: true, icon: 'Globe2', color: 'indigo', students: '18k', lessons: 45, path: '/sslc' },
  { id: 'class5', name: 'Class 5', mode: 'School', active: true, icon: 'Target', color: 'rose', students: '20k', lessons: 50, path: '/sslc' },
  { id: 'class6', name: 'Class 6', mode: 'School', active: true, icon: 'Award', color: 'purple', students: '22k', lessons: 55, path: '/sslc' },
  { id: 'class7', name: 'Class 7', mode: 'School', active: true, icon: 'Star', color: 'amber', students: '25k', lessons: 60, path: '/sslc' },
  { id: 'sslc', name: 'Class 10 (SSLC)', mode: 'School', active: true, icon: 'TrendingUp', color: 'amber', students: '45k', lessons: 124, path: '/sslc' },
  { id: 'plusone', name: 'Class 11 (+1)', mode: 'School', active: true, icon: 'Monitor', color: 'emerald', students: '28k', lessons: 98, path: '/plusone' },
  { id: 'class8', name: 'Class 8', mode: 'School', active: false, icon: 'BookOpen', color: 'blue', students: '12k', lessons: 45, path: '/sslc' },
  { id: 'class9', name: 'Class 9', mode: 'School', active: false, icon: 'Sparkles', color: 'purple', students: '15k', lessons: 52, path: '/sslc' },
  { id: 'class12', name: 'Class 12 (+2)', mode: 'School', active: false, icon: 'Award', color: 'rose', students: '30k', lessons: 110, path: '/plusone' },
  { id: 'dars', name: 'Meezan (Dars)', mode: 'Dars', active: true, icon: 'Languages', color: 'teal', students: '2k', lessons: 40, path: '/dars' },
  { id: 'ajnaas', name: 'Ajnaas (Dars)', mode: 'Dars', active: false, icon: 'BookOpen', color: 'cyan', students: '1k', lessons: 30, path: '/dars' },
  { id: 'sgou', name: 'SGOU', mode: 'Degree', active: false, icon: 'GraduationCap', color: 'indigo', students: '5k', lessons: 20, path: '/' },
  { id: 'ignou', name: 'IGNOU', mode: 'Degree', active: false, icon: 'Layers', color: 'blue', students: '10k', lessons: 25, path: '/' },
];

async function uploadCategories() {
  console.log('Uploading initial categories...');
  for (const cat of initialCategories) {
    await db.collection('categories').doc(cat.id).set(cat);
  }
  console.log('Categories uploaded.');
}

async function run() {
  try {
    await uploadCategories();
    // We only need to upload curriculum data for existing ones
    await uploadCurriculum('sslc', sslcCurriculum);
    await uploadCurriculum('plusone', plusOneCurriculum);
    await uploadCurriculum('dars', darsCurriculum);
    console.log('All data sync completed!');
  } catch (error) {
    console.error('Error during sync:', error);
  }
}

run();
