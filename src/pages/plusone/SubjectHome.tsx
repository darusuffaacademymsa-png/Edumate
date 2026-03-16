import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { Language } from '../../data/curriculum';
import ChapterList from '../../components/ChapterList';
import { useCurriculum } from '../../hooks/useCurriculum';

export default function SubjectHome() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();

  const { subjects, loading } = useCurriculum('plusone');
  const subject = subjects.find(s => s.id === subjectId);

  if (loading && !subject) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mb-4"></div>
        <p className="text-slate-500 font-bold">Loading subject data...</p>
      </div>
    );
  }

  if (!subject) return <div className="p-8 text-center font-bold text-red-500">Subject not found</div>;

  const handleSelectLesson = (id: string) => {
    navigate(`/plusone/${subjectId}/${id}`);
  };

  const handleBack = () => {
    navigate('/plusone');
  };

  return (
    <ChapterList subject={subject} language={language} onSelectLesson={handleSelectLesson} onBack={handleBack} />
  );
}
