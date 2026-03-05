import { Subject, Language } from '../data/curriculum';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';

export default function ChapterList({ subject, language, onSelectLesson, onBack }: { subject: Subject, language: Language, onSelectLesson: (id: string) => void, onBack: () => void }) {
  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  return (
    <div className="p-2 sm:p-4 md:p-8 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-6 sm:mb-10 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
        <div className="text-4xl sm:text-6xl w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 dark:bg-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner">
          {subject.icon}
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-display text-xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">{renderInline(subject.title)}</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold mt-1">
            {subject.units.length} {language === 'en' ? 'Units' : language === 'ml' ? 'യൂണിറ്റുകൾ' : 'Units / യൂണിറ്റുകൾ'}
          </p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-8">
        {subject.units.map((unit, idx) => (
          <div key={unit.id} className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 text-brand-primary dark:text-white">
              <span className="bg-slate-100 dark:bg-slate-700 text-brand-primary dark:text-slate-200 w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm">
                {idx + 1}
              </span>
              {renderInline(unit.title)}
            </h3>
            
            <div className="space-y-2 sm:space-y-3 pl-0 sm:pl-11">
              {unit.lessons.map(lesson => (
                <div 
                  key={lesson.id}
                  onClick={() => onSelectLesson(lesson.id)} 
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-slate-100 dark:border-slate-700 hover:border-brand-teal dark:hover:border-brand-teal hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer flex justify-between items-center transition-all group"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 dark:text-slate-600 group-hover:text-brand-teal transition-colors" />
                    <span className="font-bold text-sm sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-brand-primary dark:group-hover:text-white transition-colors">
                      {renderInline(lesson.title)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-semibold text-slate-400 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-100 dark:border-slate-700 whitespace-nowrap">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    {lesson.estimated_time_mins} {language === 'en' ? 'mins' : language === 'ml' ? 'മിനിറ്റ്' : 'mins / മിനിറ്റ്'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
