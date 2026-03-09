import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { sslcCurriculum, Language } from '../../../data/curriculum';
import LessonView from '../../../components/LessonView';

export default function ChapterPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { language, currentClass } = useOutletContext<{ language: Language, currentClass: string }>();

  const subject = sslcCurriculum.find(s => s.id === 'maths');
  if (!subject) return <div>Subject not found</div>;

  const lesson = subject.units.flatMap(u => u.lessons).find(l => l.id === chapterId);
  if (!lesson) return <div>Chapter not found</div>;

  const handleBack = () => {
    navigate('/sslc/mathematics');
  };

  return (
    <LessonView 
      lesson={lesson} 
      language={language} 
      onBack={handleBack} 
      subjectId="maths"
      selectedClass={currentClass}
    />
  );
}
