import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { Language } from '../../data/curriculum';
import LessonView from '../../components/LessonView';
import { useCurriculum } from '../../hooks/useCurriculum';

export default function ChapterPage() {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const { language, currentClass } = useOutletContext<{ language: Language, currentClass: string }>();

  const { subjects, loading } = useCurriculum('dars');
  const subject = subjects.find(s => s.id === subjectId);

  if (!subject) {
    if (loading) return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mb-4"></div>
        <p className="text-slate-500 font-bold">Loading chapter data...</p>
      </div>
    );
    return <div className="p-8 text-center font-bold text-red-500">Subject not found</div>;
  }

  const lesson = subject.units.flatMap(u => u.lessons).find(l => l.id === chapterId);
  if (!lesson) return <div className="p-8 text-center font-bold text-red-500">Chapter not found</div>;

  const handleBack = () => {
    navigate(`/dars/${subjectId}`);
  };

  return (
    <LessonView 
      lesson={lesson} 
      language={language} 
      onBack={handleBack} 
      subjectId={subjectId || ''}
      selectedClass={currentClass}
    />
  );
}
