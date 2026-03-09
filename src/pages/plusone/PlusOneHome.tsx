import { useNavigate, useOutletContext } from 'react-router-dom';
import { plusOneCurriculum } from '../../data/plusone_curriculum';
import { Language } from '../../data/curriculum';
import SubjectGrid from '../../components/SubjectGrid';

export default function PlusOneHome() {
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();

  const handleSelectSubject = (id: string) => {
    navigate(`/plusone/${id}`);
  };

  return (
    <SubjectGrid subjects={plusOneCurriculum} language={language} onSelectSubject={handleSelectSubject} />
  );
}
