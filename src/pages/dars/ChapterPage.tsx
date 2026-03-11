import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { darsCurriculum } from '../../data/dars_curriculum';
import { Language } from '../../data/curriculum';
import LessonView from '../../components/LessonView';

export default function ChapterPage() {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const { language, currentClass } = useOutletContext<{ language: Language, currentClass: string }>();

  const subject = darsCurriculum.find(s => s.id === subjectId);
  if (!subject) return <div>Subject not found</div>;

  const lesson = subject.units.flatMap(u => u.lessons).find(l => l.id === chapterId);
  if (!lesson) return <div>Chapter not found</div>;

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
