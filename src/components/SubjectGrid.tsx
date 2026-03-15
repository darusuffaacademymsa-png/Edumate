import { motion } from 'framer-motion';
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
      if (language === 'bilingual') return `${str.ar} / ${str.ml}`;
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
    'text-amber-500 bg-amber-50 dark:bg-amber-900/20'
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } }
  };

  const item = {
    hidden: { opacity: 0, y: 16, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <div className="px-0 sm:px-4 py-2 sm:py-4 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5"
      >
        {subjects.map((subject, idx) => {
          const Icon = iconMap[subject.icon] || BookOpen;
          const colorClass = iconColors[idx % iconColors.length];
          const bgColor = colorClass.split(' ')[0].replace('text-', 'bg-');
          
          return (
            <motion.div 
              key={subject.id}
              variants={item}
              onClick={() => onSelectSubject(subject.id)}
              className={`group relative bg-white dark:bg-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 dark:border-slate-700/60 ${isVideos ? 'hover:border-indigo-400/30' : 'hover:border-brand-primary/20'} dark:hover:border-brand-accent/20 flex flex-col overflow-hidden active:scale-[0.97]`}
            >
              {/* Hover glow */}
              <div className={`absolute -top-8 -right-8 w-20 h-20 sm:w-28 sm:h-28 blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 ${bgColor}`} />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-3 sm:gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-sm ${colorClass}`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all" />
                </div>
                
                {/* Title */}
                <h3 className={`font-display text-sm sm:text-base lg:text-lg font-black leading-tight line-clamp-2 ${isVideos ? 'text-indigo-900 dark:text-white group-hover:text-indigo-600' : 'text-brand-primary dark:text-white group-hover:text-brand-primary'} dark:group-hover:text-brand-accent transition-colors`}>
                  {renderInline(subject.title)}
                </h3>

                {/* Units badge */}
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-500 ${isVideos ? 'group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20' : 'group-hover:bg-brand-primary/5'} transition-colors`}>
                  {subject.units.length} Units
                </span>

                {/* Arrow reveal */}
                <div className={`flex items-center gap-1 ${isVideos ? 'text-indigo-500' : 'text-brand-primary'} dark:text-brand-accent opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200`}>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em]">Explore</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
