import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { plusOneCurriculum } from '../../data/plusone_curriculum';
import { Language } from '../../data/curriculum';
import ChapterList from '../../components/ChapterList';

export default function SubjectHome() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();

  const subject = plusOneCurriculum.find(s => s.id === subjectId);

  if (!subject) return <div>Subject not found</div>;

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
