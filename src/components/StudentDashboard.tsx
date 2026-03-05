import { useState } from 'react';
import { BookOpen, Home, BrainCircuit, LogOut, Globe, Menu, X, ArrowLeft } from 'lucide-react';
import { sslcCurriculum, Language } from '../data/curriculum';
import { plusOneCurriculum } from '../data/plusone_curriculum';
import SubjectGrid from './SubjectGrid';
import ChapterList from './ChapterList';
import LessonView from './LessonView';
import ThemeToggle from './ThemeToggle';

export default function StudentDashboard({ selectedClass, language, setLanguage, onChangeClass }: { selectedClass: string, language: Language, setLanguage: (l: Language) => void, onChangeClass: () => void }) {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const curriculum = selectedClass === '11' ? plusOneCurriculum : sslcCurriculum;

  const handleSelectSubject = (id: string) => {
    setSelectedSubjectId(id);
    setSelectedLessonId(null);
    setIsSidebarOpen(false);
  };

  const handleSelectLesson = (id: string) => {
    setSelectedLessonId(id);
  };

  const handleBackToSubjects = () => {
    setSelectedSubjectId(null);
    setSelectedLessonId(null);
    setIsSidebarOpen(false);
  };

  const handleBackToChapters = () => {
    setSelectedLessonId(null);
  };

  const activeSubject = curriculum.find(s => s.id === selectedSubjectId);
  const activeLesson = activeSubject?.units.flatMap(u => u.lessons).find(l => l.id === selectedLessonId);

  const cycleLanguage = () => {
    if (language === 'en') setLanguage('ml');
    else if (language === 'ml') setLanguage('bilingual');
    else setLanguage('en');
  };

  const getLanguageLabel = () => {
    if (language === 'en') return 'English';
    if (language === 'ml') return 'മലയാളം';
    return 'Bilingual';
  };

  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  return (
    <div className="flex w-full h-screen bg-brand-bg font-sans text-brand-primary dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* Sidebar Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 md:w-56 lg:w-64 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 flex flex-col flex-shrink-0 transition-transform duration-300 border-r border-slate-200 dark:border-slate-800 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h1 className="font-display text-2xl font-extrabold text-brand-primary dark:text-brand-accent leading-tight">EduMate</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-white/40 uppercase mb-2 px-3">Main</div>
          <div className="space-y-1 mb-6">
            <button onClick={handleBackToSubjects} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${!selectedSubjectId ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-slate-900 shadow-lg shadow-brand-primary/20 dark:shadow-none' : 'hover:bg-slate-100 dark:hover:bg-white/10 hover:text-brand-primary dark:hover:text-white'}`}>
              <Home className="w-5 h-5" /> {language === 'en' ? 'Dashboard' : language === 'ml' ? 'ഡാഷ്‌ബോർഡ്' : 'Dashboard / ഡാഷ്‌ബോർഡ്'}
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10 hover:text-brand-primary dark:hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" /> {language === 'en' ? 'Notes' : language === 'ml' ? 'കുറിപ്പുകൾ' : 'Notes / കുറിപ്പുകൾ'}
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10 hover:text-brand-primary dark:hover:text-white transition-colors">
              <BrainCircuit className="w-5 h-5" /> {language === 'en' ? 'AI Tutor' : language === 'ml' ? 'എഐ ട്യൂട്ടർ' : 'AI Tutor / എഐ ട്യൂട്ടർ'}
            </button>
          </div>

          <div className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-white/40 uppercase mb-2 px-3">Subjects</div>
          <div className="space-y-1">
            {curriculum.map(sub => (
              <button 
                key={sub.id}
                onClick={() => handleSelectSubject(sub.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${selectedSubjectId === sub.id ? 'bg-slate-100 dark:bg-white/15 text-brand-primary dark:text-white' : 'hover:bg-slate-50 dark:hover:bg-white/10 hover:text-brand-primary dark:hover:text-white'}`}
              >
                <div className={`w-2 h-2 rounded-full ${sub.color}`}></div>
                <span className="truncate">{renderInline(sub.title)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <button onClick={onChangeClass} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10 hover:text-brand-primary dark:hover:text-white transition-colors">
            <LogOut className="w-5 h-5" /> {language === 'en' ? 'Change Class' : language === 'ml' ? 'ക്ലാസ് മാറ്റുക' : 'Change Class / ക്ലാസ് മാറ്റുക'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <div className="bg-white dark:bg-slate-900 px-3 md:px-8 py-2.5 md:py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shadow-sm z-20 transition-colors duration-300">
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10">
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {(activeSubject || activeLesson || !selectedSubjectId) && (
              <button 
                onClick={activeLesson ? handleBackToChapters : activeSubject ? handleBackToSubjects : onChangeClass}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                title={activeLesson ? (language === 'en' ? 'Back to Chapters' : 'മടങ്ങുക') : activeSubject ? (language === 'en' ? 'Back to Subjects' : 'മടങ്ങുക') : (language === 'en' ? 'Back to Class Selection' : 'മടങ്ങുക')}
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            <h2 className="font-display text-sm sm:text-base md:text-xl font-bold truncate max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] md:max-w-xl text-brand-primary dark:text-white">
              {activeLesson ? renderInline(activeLesson.title) : activeSubject ? renderInline(activeSubject.title) : (language === 'en' ? 'Dashboard' : language === 'ml' ? 'ഡാഷ്‌ബോർഡ്' : 'Dashboard / ഡാഷ്‌ബോർഡ്')}
            </h2>
          </div>
          <div className="flex items-center gap-1 md:gap-4">
            <ThemeToggle />
            <button
              onClick={cycleLanguage}
              className="flex items-center gap-1 md:gap-2 px-1.5 md:px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-[10px] md:text-sm font-bold text-slate-600 dark:text-slate-300"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 md:w-4 h-4" />
              <span className="hidden sm:inline">{getLanguageLabel()}</span>
            </button>
            <span className="hidden md:inline bg-brand-accent text-brand-primary dark:text-slate-900 text-[10px] md:text-xs font-extrabold px-2 md:px-3 py-1 rounded-full whitespace-nowrap">SSLC 2025</span>
          </div>
        </div>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 sm:p-4 md:p-8">
            {activeLesson && activeSubject ? (
              <LessonView 
                lesson={activeLesson} 
                language={language} 
                onBack={handleBackToChapters} 
                subjectId={selectedSubjectId}
                selectedClass={selectedClass}
              />
            ) : activeSubject ? (
              <ChapterList subject={activeSubject} language={language} onSelectLesson={handleSelectLesson} onBack={handleBackToSubjects} />
            ) : (
              <SubjectGrid subjects={curriculum} language={language} onSelectSubject={handleSelectSubject} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
