import { useNavigate, useOutletContext } from 'react-router-dom';
import { sslcCurriculum, Language } from '../../data/curriculum';
import SubjectGrid from '../../components/SubjectGrid';

export default function SSLCHome() {
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();

  const handleSelectSubject = (id: string) => {
    navigate(`/sslc/${id}`);
  };

  return (
    <SubjectGrid subjects={sslcCurriculum} language={language} onSelectSubject={handleSelectSubject} />
  );
}
