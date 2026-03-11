import { useNavigate, useOutletContext } from 'react-router-dom';
import { darsCurriculum } from '../../data/dars_curriculum';
import { Language } from '../../data/curriculum';
import SubjectGrid from '../../components/SubjectGrid';

export default function DARSHome() {
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();

  const handleSelectSubject = (id: string) => {
    navigate(`/dars/${id}`);
  };

  return (
    <SubjectGrid subjects={darsCurriculum} language={language} onSelectSubject={handleSelectSubject} />
  );
}
