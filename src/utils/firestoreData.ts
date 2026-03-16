import { collection, query, where, getDocs, doc, setDoc, deleteDoc, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Subject, Category } from '../data/curriculum';

// Helper to remove undefined and transform nested arrays
function transformForFirestore(data: any): any {
  if (data === undefined) return null;
  if (data === null) return null;
  
  if (Array.isArray(data)) {
    return data.map(item => {
      if (Array.isArray(item)) {
        return { items: transformForFirestore(item) };
      }
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

// Helper to undo the nested array transformation
function undoTransform(data: any): any {
  if (data === null || data === undefined) return data;
  
  if (Array.isArray(data)) {
    return data.map(item => {
      if (item && typeof item === 'object' && 'items' in item && Object.keys(item).length === 1 && Array.isArray(item.items)) {
        return undoTransform(item.items);
      }
      return undoTransform(item);
    });
  }
  
  if (typeof data === 'object') {
    const result: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        result[key] = undoTransform(data[key]);
      }
    }
    return result;
  }
  
  return data;
}

// CURRICULUM / SUBJECTS
export async function fetchCurriculumFromFirestore(curriculumId: string): Promise<Subject[]> {
  try {
    const q = query(collection(db, 'subjects'), where('curriculumId', '==', curriculumId));
    const querySnapshot = await getDocs(q);
    const subjects: Subject[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      delete data.curriculumId;
      subjects.push(undoTransform(data) as Subject);
    });
    
    return subjects;
  } catch (error) {
    console.error(`Error fetching ${curriculumId} curriculum:`, error);
    return [];
  }
}

export async function saveSubjectToFirestore(curriculumId: string, subject: Subject): Promise<void> {
  try {
    const docId = `${curriculumId}-${subject.id}`;
    const docRef = doc(db, 'subjects', docId);
    await setDoc(docRef, transformForFirestore({
      ...subject,
      curriculumId: curriculumId
    }));
  } catch (error) {
    console.error(`Error saving subject ${subject.id}:`, error);
    throw error;
  }
}

export async function deleteSubjectFromFirestore(curriculumId: string, subjectId: string): Promise<void> {
  try {
    const docId = `${curriculumId}-${subjectId}`;
    await deleteDoc(doc(db, 'subjects', docId));
  } catch (error) {
    console.error(`Error deleting subject ${subjectId}:`, error);
    throw error;
  }
}

// CATEGORIES / CLASSES
export async function fetchCategoriesFromFirestore(): Promise<Category[]> {
  try {
    const q = query(collection(db, 'categories'), orderBy('id'));
    const querySnapshot = await getDocs(q);
    const categories: Category[] = [];
    querySnapshot.forEach((doc) => {
      categories.push(doc.data() as Category);
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function saveCategoryToFirestore(category: Category): Promise<void> {
  try {
    const docRef = doc(db, 'categories', category.id);
    await setDoc(docRef, category);
  } catch (error) {
    console.error("Error saving category:", error);
    throw error;
  }
}

export async function deleteCategoryFromFirestore(categoryId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'categories', categoryId));
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
}
