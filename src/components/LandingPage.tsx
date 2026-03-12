import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  GraduationCap,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Sparkles,
  Star,
  Award,
  Settings,
  ChevronRight,
  Type,
  Palette,
  Languages,
  ArrowUpRight,
  Play,
  Users,
  Layout,
  Target,
  Monitor,
  CheckCircle2,
  Book,
  Clock,
  ArrowRightCircle
} from 'lucide-react';
import { Language } from '../data/curriculum';
import ThemeToggle from './ThemeToggle';
import TextSizeToggle from './TextSizeToggle';

type Category = 'School' | 'Degree' | 'PG' | 'PSC' | 'Net' | 'Dars';

export default function LandingPage({ onSelectClass, language, setLanguage }: { onSelectClass: (c: string) => void, language: Language, setLanguage: (l: Language) => void }) {
  const [activeCategory, setActiveCategory] = useState<Category>('School');

  const categories: { id: Category; icon: any }[] = [
    { id: 'School', icon: BookOpen },
    { id: 'Degree', icon: GraduationCap },
    { id: 'PSC', icon: Target },
    { id: 'Net', icon: Monitor },
    { id: 'Dars', icon: Languages },
  ];

  const classData: Record<Category, any[]> = {
    School: [
      { id: '8', name: 'Class 8', active: false, icon: BookOpen, color: 'blue', students: '12k', lessons: 45 },
      { id: '9', name: 'Class 9', active: false, icon: Sparkles, color: 'purple', students: '15k', lessons: 52 },
      { id: '10', name: 'Class 10 (SSLC)', active: true, icon: Star, color: 'amber', students: '45k', lessons: 124 },
      { id: '11', name: 'Class 11 (+1)', active: true, icon: TrendingUp, color: 'emerald', students: '28k', lessons: 98 },
      { id: '12', name: 'Class 12 (+2)', active: false, icon: Award, color: 'rose', students: '30k', lessons: 110 },
    ],
    Degree: [
      { id: 'ug', name: 'Undergraduate', active: false, icon: Layout, color: 'indigo', students: '5k', lessons: 20 },
    ],
    PSC: [
      { id: 'psc-main', name: 'Kerala PSC', active: false, icon: Target, color: 'orange', students: '100k', lessons: 500 },
    ],
    Net: [
      { id: 'net-main', name: 'UGC NET', active: false, icon: Monitor, color: 'cyan', students: '8k', lessons: 60 },
    ],
    PG: [],
    Dars: [
      { id: 'dars-main', name: 'Dars Education', active: true, icon: Globe, color: 'teal', students: '2k', lessons: 40 },
    ]
  };

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

  const getColorClasses = (color: string) => {
    const maps: Record<string, string> = {
      blue: 'bg-blue-500 shadow-blue-500/20 text-blue-500',
      purple: 'bg-purple-500 shadow-purple-500/20 text-purple-500',
      amber: 'bg-amber-500 shadow-amber-500/20 text-amber-500',
      emerald: 'bg-emerald-500 shadow-emerald-500/20 text-emerald-500',
      rose: 'bg-rose-500 shadow-rose-500/20 text-rose-500',
      indigo: 'bg-indigo-500 shadow-indigo-500/20 text-indigo-500',
      orange: 'bg-orange-500 shadow-orange-500/20 text-orange-500',
      cyan: 'bg-cyan-500 shadow-cyan-500/20 text-cyan-500',
      teal: 'bg-teal-500 shadow-teal-500/20 text-teal-500',
    };
    return maps[color] || maps.blue;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] flex flex-col font-sans text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden relative">
      {/* Header */}
      <header className="px-6 py-5 sm:px-10 flex justify-between items-center z-50 sticky top-0 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#1E293B] dark:bg-brand-accent rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <TrendingUp className="w-6 h-6 text-brand-accent dark:text-brand-primary" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">Wiselearn</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-slate-800">
            <TextSizeToggle />
            <ThemeToggle />
          </div>
          <button 
            onClick={cycleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all shadow-sm"
          >
            <Globe className="w-4 h-4 text-slate-400" />
            <span>{language === 'en' ? 'English' : language === 'ml' ? 'മലയാളം' : 'Bilingual'}</span>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-20">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            {language === 'en' ? 'Select your class' : 'നിങ്ങളുടെ ക്ലാസ് തിരഞ്ഞെടുക്കുക'}
          </h1>
          <p className="text-sm sm:text-base font-bold text-slate-400 uppercase tracking-[0.2em]">
            {language === 'en' ? 'Choose your academic goal to start' : 'പഠനം ആരംഭിക്കാൻ നിങ്ങളുടെ ലക്ഷ്യം തിരഞ്ഞെടുക്കുക'}
          </p>
        </div>

        {/* Premium Category Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-8 no-scrollbar mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 whitespace-nowrap font-black text-xs uppercase tracking-widest ${isActive ? 'bg-[#1E293B] text-white shadow-xl dark:bg-brand-accent dark:text-brand-primary' : 'bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-600 dark:hover:text-white'}`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.id}
              </button>
            );
          })}
        </div>

        {/* Horizontal Redesigned Cards */}
        <div className="grid grid-cols-1 gap-4 w-full">
          <AnimatePresence mode="popLayout">
            {classData[activeCategory].map((c: any) => {
              const colorInfo = getColorClasses(c.color);
              const colorBase = colorInfo.split(' ')[0]; // e.g. bg-blue-500
              const textColor = colorInfo.split(' ')[2]; // e.g. text-blue-500

              return (
                <motion.button
                  key={c.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  disabled={!c.active}
                  onClick={() => c.active && onSelectClass(c.id)}
                  className={`group relative w-full bg-white dark:bg-slate-900 rounded-[2rem] p-5 sm:p-6 transition-all duration-500 flex items-center justify-between border-2 ${
                    c.active 
                      ? 'border-transparent shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-brand-primary/20 dark:hover:border-brand-accent/20 cursor-pointer' 
                      : 'border-slate-50 dark:border-slate-800 opacity-60 cursor-not-allowed grayscale'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    {/* Icon Area */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${colorBase} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105`}>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colorBase} flex items-center justify-center text-white shadow-lg`}>
                        <c.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                    </div>

                    <div className="text-left space-y-1">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {c.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <Book className="w-3 h-3" />
                          {c.lessons} Lessons
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <Users className="w-3 h-3" />
                          {c.students} Students
                        </div>
                        {c.active && (
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[8px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-900">
                            Syllabus Ready
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {c.active ? (
                      <div className={`w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary dark:group-hover:bg-brand-accent group-hover:text-white dark:group-hover:text-brand-primary transition-all duration-300 shadow-inner`}>
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    ) : (
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest hidden sm:block">Coming Soon</span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-12 text-center">
        <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">
          Wiselearn Education • The Learning System
        </p>
      </footer>
    </div>
  );
}
