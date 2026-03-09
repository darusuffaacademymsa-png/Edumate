import { useNavigate, useOutletContext } from 'react-router-dom';
import { sslcCurriculum, Language } from '../../../data/curriculum';
import ChapterList from '../../../components/ChapterList';

export default function MathematicsHome() {
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();

  const subject = sslcCurriculum.find(s => s.id === 'maths');

  if (!subject) return <div>Subject not found</div>;

  const handleSelectLesson = (id: string) => {
    navigate(`/sslc/mathematics/${id}`);
  };

  const handleBack = () => {
    navigate('/sslc');
  };

  return (
    <ChapterList subject={subject} language={language} onSelectLesson={handleSelectLesson} onBack={handleBack} />
  );
}
