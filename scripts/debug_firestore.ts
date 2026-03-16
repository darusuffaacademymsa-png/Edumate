import admin from 'firebase-admin';
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

async function run() {
  const docRef = db.collection('subjects').doc('sslc-sub-maths');
  const doc = await docRef.get();
  if (!doc.exists) {
    console.log('Document not found!');
  } else {
    const data = doc.data();
    console.log('Document data:', JSON.stringify(data, null, 2).substring(0, 1000));
    console.log('Units count:', data?.units?.length);
    if (data?.units) {
      console.log('Unit 1 lessons:', data.units[0].lessons.map((l: any) => ({ id: l.id, title: l.title.en, hasBlocks: !!l.content.blocks })));
    }
  }
}

run();
