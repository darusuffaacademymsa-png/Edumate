import { motion } from 'framer-motion';
import { Subject, Language } from '../data/curriculum';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2,
  Calculator,
  Zap,
  FlaskConical,
  Leaf,
  Globe2,
  Map,
  BarChart3,
  Scale,
  Languages,
  BookOpen,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Calculator,
  Zap,
  FlaskConical,
  Leaf,
  Globe2,
  Map,
  BarChart3,
  Scale,
  Languages,
  BookOpen
};

export default function ChapterList({ subject, language, onSelectLesson, onBack, showHeader = true }: { subject: Subject, language: Language, onSelectLesson: (id: string) => void, onBack: () => void, showHeader?: boolean }) {
  const isArabicSubject = subject.id === 'sub-arabic' || subject.id === 'sub-urdu';
  const isRTL = isArabicSubject;
  
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

  const Icon = iconMap[subject.icon] || BookOpen;

  const unitColors = [
    'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
    'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
    'bg-brand-coral/10 text-brand-coral border-brand-coral/20',
    'bg-brand-green/10 text-brand-green border-brand-green/20',
    'bg-brand-sky/10 text-brand-sky border-brand-sky/20',
    'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/30'
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <div className={`max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {onBack && (
        <button 
          onClick={onBack}
          className={`flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-2 rounded-xl text-slate-500 hover:text-brand-primary hover:bg-white dark:hover:bg-white/5 transition-all mb-5 font-bold text-sm active:scale-95 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{language === 'en' ? 'Back' : language === 'ml' ? 'തിരികെ' : 'Back'}</span>
        </button>
      )}
      {showHeader && (
        <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-6 sm:mb-8 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 dark:bg-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner text-brand-primary dark:text-brand-accent flex-shrink-0">
            <Icon className="w-9 h-9 sm:w-12 sm:h-12" />
          </div>
          <div className={isRTL ? 'text-center sm:text-right' : 'text-center sm:text-left'}>
            <h2 className="font-display text-xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">{renderInline(subject.title)}</h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold mt-1">
              {subject.units.length} {language === 'en' ? 'Units' : language === 'ml' ? 'യൂണിറ്റുകൾ' : language === 'ar' ? 'وحدات' : 'Units / യൂണിറ്റുകൾ'}
            </p>
          </div>
        </div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3 sm:space-y-4"
      >
        {subject.units.map((unit, idx) => {
          const colorClass = unitColors[idx % unitColors.length];
          
          return (
            <motion.div
              key={unit.id}
              variants={item}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors duration-300"
            >
              {/* Unit Header */}
              <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-50 dark:border-slate-700/60 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-black border flex-shrink-0 ${colorClass}`}>
                  {idx + 1}
                </span>
                <h3 className={`font-display text-sm sm:text-base lg:text-lg font-bold text-brand-primary dark:text-white leading-snug`}>
                  {renderInline(unit.title)}
                </h3>
                <span className="ml-auto text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-wider">
                  {unit.lessons.length} {language === 'ml' ? 'പാഠം' : 'lessons'}
                </span>
              </div>
            
              {/* Lessons */}
              <div className={`divide-y divide-slate-50 dark:divide-slate-700/40 ${isRTL ? 'pr-0 sm:pr-4' : 'pl-0 sm:pl-4'}`}>
                {unit.lessons.map((lesson, lessonIdx) => (
                  <div 
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson.id)} 
                    className={`group px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 dark:hover:bg-slate-700/40 cursor-pointer flex justify-between items-center transition-all active:bg-slate-100 dark:active:bg-slate-700/60 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`flex items-center gap-3 min-w-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] sm:text-xs font-black text-slate-400 group-hover:bg-brand-primary group-hover:text-white dark:group-hover:bg-brand-accent dark:group-hover:text-brand-primary transition-all duration-200">
                        {lessonIdx + 1}
                      </div>
                      <span className="font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-brand-primary dark:group-hover:text-white transition-colors truncate">
                        {renderInline(lesson.title)}
                      </span>
                    </div>
                    <div className={`flex items-center gap-2 flex-shrink-0 ml-2 ${isRTL ? 'flex-row-reverse mr-2 ml-0' : ''}`}>
                      <span className="hidden sm:flex items-center gap-1 text-[10px] font-semibold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 px-2 py-1 rounded-lg whitespace-nowrap">
                        <Clock className="w-3 h-3" />
                        {lesson.estimated_time_mins} {language === 'ml' ? 'മിനിറ്റ്' : 'min'}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
