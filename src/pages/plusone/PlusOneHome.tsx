import { useNavigate, useOutletContext } from 'react-router-dom';
import { Language } from '../../data/curriculum';
import SubjectGrid from '../../components/SubjectGrid';
import { useCurriculum } from '../../hooks/useCurriculum';

export default function PlusOneHome() {
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();
  const { subjects, loading } = useCurriculum('plusone');

  const handleSelectSubject = (id: string) => {
    navigate(`/plusone/${id}`);
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute top-0 right-0 p-4">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-primary"></div>
        </div>
      )}
      <SubjectGrid subjects={subjects} language={language} onSelectSubject={handleSelectSubject} />
    </div>
  );
}
