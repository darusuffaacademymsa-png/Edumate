import { Globe, GraduationCap } from 'lucide-react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Language } from '../../data/curriculum';
import ThemeToggle from '../../components/ThemeToggle';
import TextSizeToggle from '../../components/TextSizeToggle';

export default function HomePage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useOutletContext<{ language: Language, setLanguage: (l: Language) => void }>();

  const classes = [
    { id: '8', name: 'Class 8', active: false, path: '' },
    { id: '9', name: 'Class 9', active: false, path: '' },
    { id: '10', name: 'Class 10 (SSLC)', active: true, path: '/sslc' },
    { id: '11', name: 'Class 11 (+1)', active: true, path: '/plusone' },
    { id: '12', name: 'Class 12 (+2)', active: false, path: '/plustwo' },
  ];

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

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans text-brand-primary dark:text-slate-100 transition-colors duration-300">
      <header className="p-6 flex justify-end gap-4 items-center">
        <TextSizeToggle />
        <ThemeToggle />
        <button
          onClick={cycleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-bold shadow-sm"
        >
          <Globe className="w-4 h-4" />
          {getLanguageLabel()}
        </button>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-brand-primary dark:bg-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-primary/20 dark:shadow-brand-accent/20">
            <GraduationCap className="w-10 h-10 text-brand-accent dark:text-brand-primary" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-brand-primary dark:text-white">Wiselearn</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-semibold">
            {language === 'en' ? 'Select your class to begin learning' : language === 'ml' ? 'പഠനം ആരംഭിക്കാൻ നിങ്ങളുടെ ക്ലാസ് തിരഞ്ഞെടുക്കുക' : 'Select your class to begin learning / പഠനം ആരംഭിക്കാൻ നിങ്ങളുടെ ക്ലാസ് തിരഞ്ഞെടുക്കുക'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {classes.map(c => (
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
                  ? (language === 'en' ? 'Kerala Board Syllabus' : language === 'ml' ? 'കേരള ബോർഡ് സിലബസ്' : 'Kerala Board Syllabus / കേരള ബോർഡ് സിലബസ്') 
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
      </main>
    </div>
  );
}
