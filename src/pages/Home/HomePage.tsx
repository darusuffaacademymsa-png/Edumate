import { Globe, GraduationCap, BookOpen, Layers } from 'lucide-react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Language } from '../../data/curriculum';
import ThemeToggle from '../../components/ThemeToggle';
import TextSizeToggle from '../../components/TextSizeToggle';

type Mode = 'School' | 'Degree' | 'PG' | 'PSC' | 'Net' | 'Dars';

export default function HomePage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useOutletContext<{ language: Language, setLanguage: (l: Language) => void }>();
  const [selectedMode, setSelectedMode] = useState<Mode>('School');

  const modes: Mode[] = ['School', 'Degree', 'PG', 'PSC', 'Net', 'Dars'];

  const schoolClasses = [
    { id: '8', name: 'Class 8', active: false, path: '', sub: 'Kerala Board Syllabus' },
    { id: '9', name: 'Class 9', active: false, path: '', sub: 'Kerala Board Syllabus' },
    { id: '10', name: 'Class 10 (SSLC)', active: true, path: '/sslc', sub: 'Kerala Board Syllabus' },
    { id: '11', name: 'Class 11 (+1)', active: true, path: '/plusone', sub: 'Kerala Board Syllabus' },
    { id: '12', name: 'Class 12 (+2)', active: false, path: '/plustwo', sub: 'Kerala Board Syllabus' },
  ];

  const darsBooks = [
    { id: 'meezan', name: 'Meezan/ ميزان', active: true, path: '/dars', sub: 'Arabic Morphology' },
    { id: 'ajnaas', name: 'Ajnaas/ أجناس', active: false, path: '', sub: 'Arabic Morphology' },
    { id: 'zanjaan', name: 'Zanjaan/ زنجان', active: false, path: '', sub: 'Arabic Morphology' },
    { id: 'avaamil', name: 'Avaamil/ عوامل', active: false, path: '', sub: 'Arabic Grammar' },
  ];

  const degreeUniversities = [
    { id: 'sgou', name: 'SGOU (Sreenarayanguru Open University)', active: false, path: '', sub: 'Distance Education' },
    { id: 'ignou', name: 'IGNOU', active: false, path: '', sub: 'Distance Education' },
  ];

  const getModeItems = () => {
    switch (selectedMode) {
      case 'School': return schoolClasses;
      case 'Dars': return darsBooks;
      case 'Degree': return degreeUniversities;
      default: return [];
    }
  };

  const cycleLanguage = () => {
    if (language === 'en') setLanguage('ml');
    else if (language === 'ml') setLanguage('ar');
    else if (language === 'ar') setLanguage('bilingual');
    else setLanguage('en');
  };

  const getLanguageLabel = () => {
    if (language === 'en') return 'English';
    if (language === 'ml') return 'മലയാളം';
    if (language === 'ar') return 'العربية';
    return 'Bilingual';
  };

  const items = getModeItems();

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans text-brand-primary dark:text-slate-100 transition-colors duration-300">
      <header className="p-4 md:p-6 flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="flex gap-2 p-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-x-auto max-w-full">
          {modes.map(mode => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                selectedMode === mode
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        
        <div className="flex gap-4 items-center">
          <TextSizeToggle />
          <ThemeToggle />
          <button
            onClick={cycleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-bold shadow-sm"
          >
            <Globe className="w-4 h-4" />
            {getLanguageLabel()}
          </button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-brand-primary dark:bg-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-primary/20 dark:shadow-brand-accent/20">
            {selectedMode === 'Dars' ? (
              <BookOpen className="w-10 h-10 text-brand-accent dark:text-brand-primary" />
            ) : selectedMode === 'School' ? (
              <GraduationCap className="w-10 h-10 text-brand-accent dark:text-brand-primary" />
            ) : (
              <Layers className="w-10 h-10 text-brand-accent dark:text-brand-primary" />
            )}
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-brand-primary dark:text-white">Wiselearn</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-semibold">
            {language === 'en' 
              ? `Select your ${selectedMode === 'School' ? 'class' : selectedMode === 'Dars' ? 'book' : selectedMode === 'Degree' ? 'university' : 'option'} to begin learning` 
              : language === 'ml' 
                ? `പഠനം ആരംഭിക്കാൻ നിങ്ങളുടെ ${selectedMode === 'School' ? 'ക്ലാസ്' : selectedMode === 'Dars' ? 'പുസ്തകം' : selectedMode === 'Degree' ? 'സർവ്വകലാശാല' : 'ഓപ്ഷൻ'} തിരഞ്ഞെടുക്കുക` 
                : `Select your ${selectedMode === 'School' ? 'class' : selectedMode === 'Dars' ? 'book' : selectedMode === 'Degree' ? 'university' : 'option'} to begin learning / പഠനം ആരംഭിക്കാൻ നിങ്ങളുടെ ${selectedMode === 'School' ? 'ക്ലാസ്' : selectedMode === 'Dars' ? 'പുസ്തകം' : selectedMode === 'Degree' ? 'സർവ്വകലാശാല' : 'ഓപ്ഷൻ'} തിരഞ്ഞെടുക്കുക`}
          </p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {items.map(c => (
              <button
                key={c.id}
                disabled={!c.active}
                onClick={() => c.active && navigate(c.path)}
                className={`relative p-8 rounded-3xl text-left transition-all duration-300 border-2 ${
                  c.active 
                    ? 'bg-white dark:bg-slate-800 border-transparent hover:border-brand-teal dark:hover:border-brand-teal hover:-translate-y-1 hover:shadow-xl cursor-pointer shadow-md' 
                    : 'bg-slate-100 dark:bg-slate-800/50 border-transparent opacity-60 cursor-not-allowed'
                }`}
              >
                <h3 className="font-display text-2xl font-bold mb-2 text-brand-primary dark:text-white">{c.name}</h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {c.active 
                    ? (language === 'en' ? c.sub : language === 'ml' ? (c.id === '10' || c.id === '11' ? 'കേരള ബോർഡ് സിലബസ്' : c.sub) : `${c.sub}`) 
                    : (language === 'en' ? 'Coming Soon' : language === 'ml' ? 'ഉടൻ വരുന്നു' : 'Coming Soon / ഉടൻ വരുന്നു')}
                </p>
                {c.active && (
                  <div className="absolute top-6 right-6 w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary shadow-sm font-bold">
                    →
                  </div>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/30 rounded-3xl w-full border-2 border-dashed border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-400 dark:text-slate-500">
              {language === 'en' ? 'Coming Soon' : language === 'ml' ? 'ഉടൻ വരുന്നു' : 'Coming Soon / ഉടൻ വരുന്നു'}
            </h2>
            <p className="text-slate-400 dark:text-slate-500 mt-2 font-medium">
              {language === 'en' ? `Content for ${selectedMode} mode is under development` : language === 'ml' ? `${selectedMode} മോഡിനായുള്ള ഉള്ളടക്കം തയ്യാറായിക്കൊണ്ടിരിക്കുന്നു` : `Content for ${selectedMode} mode is under development / ${selectedMode} മോഡിനായുള്ള ഉള്ളടക്കം തയ്യാറായിക്കൊണ്ടിരിക്കുന്നു`}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
