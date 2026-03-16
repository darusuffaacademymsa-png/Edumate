// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDBUTXgx07DCLIosAN1NNq4wz33ycch_gE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "wiselearnonline.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "wiselearnonline",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "wiselearnonline.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1011321047320",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1011321047320:web:5ed8e4cc53ecaa5a5a766d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
export default app;
