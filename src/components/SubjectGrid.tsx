import { Subject, Language } from '../data/curriculum';
import { 
  BookOpen, 
  ChevronRight, 
  Calculator, 
  Zap, 
  FlaskConical, 
  Leaf, 
  Globe2, 
  Map, 
  Type, 
  Languages,
  BarChart3,
  Scale,
  LucideIcon
  } from 'lucide-react';

  const iconMap: Record<string, LucideIcon> = {
  Calculator,
  Zap,
  FlaskConical,
  Leaf,
  Globe2,
  Map,
  Type,
  Languages,
  BarChart3,
  Scale,
  BookOpen
  };
export default function SubjectGrid({ subjects, language, onSelectSubject, isVideos = false }: { subjects: Subject[], language: Language, onSelectSubject: (id: string) => void, isVideos?: boolean }) {
  const renderInline = (str: any) => {
    if (!str) return '';
    if (str.ar) {
      if (language === 'bilingual') return `${str.ar} / ${str.en} / ${str.ml}`;
      if (language === 'ar') return str.ar;
      if (language === 'en') return `${str.ar} (${str.en})`;
      if (language === 'ml') return `${str.ar} (${str.ml})`;
    }
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language] || str.en;
  };

  const iconColors = isVideos ? [
    'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20',
    'text-brand-purple bg-brand-purple/10',
    'text-violet-600 bg-violet-50 dark:bg-violet-900/20',
    'text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-900/20',
    'text-blue-600 bg-blue-50 dark:bg-blue-900/20',
    'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/10'
  ] : [
    'text-brand-teal bg-brand-teal/10',
    'text-brand-purple bg-brand-purple/10',
    'text-brand-coral bg-brand-coral/10',
    'text-brand-green bg-brand-green/10',
    'text-brand-sky bg-brand-sky/10',
    'text-brand-accent bg-brand-accent/20'
  ];

  return (
    <div className="p-2 sm:p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
        {subjects.map((subject, idx) => {
          const Icon = iconMap[subject.icon] || BookOpen;
          const colorClass = iconColors[idx % iconColors.length];
          
          return (
            <div 
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className={`group relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-[2.5rem] p-3 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 dark:border-slate-700 ${isVideos ? 'hover:border-indigo-500/20' : 'hover:border-brand-primary/20'} dark:hover:border-brand-accent/20 flex flex-col overflow-hidden`}
            >
              {/* Decorative Gradient Background */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${colorClass.split(' ')[0].replace('text-', 'bg-')}`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`mb-2 sm:mb-6 w-10 h-10 sm:w-20 sm:h-20 rounded-xl sm:rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm ${colorClass}`}>
                  <Icon className="w-5 h-5 sm:w-10 sm:h-10 transition-all" />
                </div>
                
                <h3 className={`font-display text-[10px] sm:text-2xl font-black mb-1 sm:mb-2 line-clamp-2 leading-tight ${isVideos ? 'text-indigo-900 dark:text-white group-hover:text-indigo-600' : 'text-brand-primary dark:text-white group-hover:text-brand-primary'} dark:group-hover:text-brand-accent transition-colors px-1`}>
                  {renderInline(subject.title)}
                </h3>
                
                <div className="hidden sm:flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ${isVideos ? 'group-hover:bg-indigo-50' : 'group-hover:bg-brand-primary/5'} transition-colors`}>
                    {subject.units.length} Units
                  </span>
                </div>

                <div className={`mt-2 sm:mt-6 flex items-center gap-1 sm:gap-2 ${isVideos ? 'text-indigo-600' : 'text-brand-primary'} dark:text-brand-accent opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0`}>
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em]">Explore</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
