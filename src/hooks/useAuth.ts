import { useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';
import { UserProgress } from '../data/curriculum';

const ADMIN_EMAIL = 'akpsaheer@gmail.com';

export function useAuth() {
  const [user, setUser] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const isAdmin = firebaseUser.email === ADMIN_EMAIL;
        
        const userData: UserProgress = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          isAdmin,
          lastLogin: Date.now(),
        };

        // Sync with Firestore
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const existingData = userDoc.data() as UserProgress;
            userData.currentClass = existingData.currentClass;
          }

          await setDoc(userDocRef, userData, { merge: true });
          setUser(userData);
        } catch (error) {
          console.error("Error syncing user with Firestore:", error);
          setUser(userData); // Set user even if sync fails
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const updateProfile = async (data: Partial<UserProgress>) => {
    if (!user) return;
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, data, { merge: true });
      setUser({ ...user, ...data });
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return { user, loading, login, logout, updateProfile };
}
