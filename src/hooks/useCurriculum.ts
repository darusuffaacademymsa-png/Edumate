import { useState, useEffect } from 'react';
import { Subject, sslcCurriculum } from '../data/curriculum';
import { plusOneCurriculum } from '../data/plusone_curriculum';
import { darsCurriculum } from '../data/dars_curriculum';
import { fetchCurriculumFromFirestore } from '../utils/firestoreData';

type CurriculumType = 'sslc' | 'plusone' | 'dars';

const localCurriculums: Record<CurriculumType, Subject[]> = {
  sslc: sslcCurriculum,
  plusone: plusOneCurriculum,
  dars: darsCurriculum
};

export function useCurriculum(type: CurriculumType) {
  const [subjects, setSubjects] = useState<Subject[]>(localCurriculums[type]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      try {
        const firestoreSubjects = await fetchCurriculumFromFirestore(type);
        if (mounted && firestoreSubjects.length > 0) {
          // You might want to merge or sort them. 
          // For now, if we have data in Firestore, we use it as it's the "synced" source.
          // We can also sort by the order they appear in local data if needed.
          
          const localOrder = localCurriculums[type].map(s => s.id);
          const sortedSubjects = [...firestoreSubjects].sort((a, b) => {
            const indexA = localOrder.indexOf(a.id);
            const indexB = localOrder.indexOf(b.id);
            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
          });
          
          setSubjects(sortedSubjects);
        }
      } catch (err) {
        if (mounted) setError(err as Error);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, [type]);

  return { subjects, loading, error };
}
