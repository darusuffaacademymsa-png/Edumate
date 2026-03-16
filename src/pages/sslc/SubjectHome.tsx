import { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { Language } from '../../data/curriculum';
import ChapterList from '../../components/ChapterList';
import { malayalamIISamplePapers } from '../../data/malayalam_ii_sample_paper';
import FormatsView from '../../components/FormatsView';
import { hindiSampleQuestions, hindiSampleQuestionsSets } from '../../data/hindi_sample_questions';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useCurriculum } from '../../hooks/useCurriculum';

import { 
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

export default function SubjectHome() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();
  const [activeTab, setActiveTab] = useState<'lessons' | 'samplePaper' | 'formats' | 'sampleQuestions'>('lessons');
  const [selectedPaperIndex, setSelectedPaperIndex] = useState(0);
  const [selectedHindiSetIndex, setSelectedHindiSetIndex] = useState(0);
  const [showHindiAnswers, setShowHindiAnswers] = useState(false);

  const { subjects, loading } = useCurriculum('sslc');
  const subject = subjects.find(s => s.id === subjectId);

  if (loading && !subject) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mb-4"></div>
        <p className="text-slate-500 font-bold">Loading subject data...</p>
      </div>
    );
  }

  if (!subject) return <div className="p-8 text-center font-bold text-red-500">Subject not found</div>;

  const handleSelectLesson = (id: string) => {
    navigate(`/sslc/${subjectId}/${id}`);
  };

  const handleBack = () => {
    navigate('/sslc');
  };

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

  return (
    <div className={`mx-auto max-w-4xl ${activeTab === 'sampleQuestions' ? 'p-0 sm:p-2' : 'p-0 sm:p-2'}`}>
      {/* Header */}
      <div className={`flex flex-row items-center gap-4 mb-5 sm:mb-8 bg-white dark:bg-slate-800 p-4 sm:p-5 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300 ${activeTab === 'sampleQuestions' ? 'rounded-none sm:rounded-2xl' : 'rounded-xl sm:rounded-2xl'}`}>
        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-slate-50 dark:bg-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner text-brand-primary dark:text-brand-accent flex-shrink-0">
          <Icon className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12" />
        </div>
        <div className="text-left min-w-0">
          <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-extrabold text-brand-primary dark:text-white leading-tight truncate">{renderInline(subject.title)}</h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
            <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-wider">
              {subject.units.length} {language === 'en' ? 'Units' : language === 'ml' ? 'യൂണിറ്റുകൾ' : 'Units'}
            </span>
            <span className="text-[10px] sm:text-xs font-black text-slate-300 dark:text-slate-600">•</span>
            <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-wider">
              {subject.units.reduce((n, u) => n + u.lessons.length, 0)} {language === 'ml' ? 'പാഠങ്ങൾ' : 'Lessons'}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      {(subjectId === 'sub-malayalam-ii' || subjectId === 'sub-hindi') && (
        <div className="flex items-center gap-2 mb-5 overflow-x-auto no-scrollbar pb-1">
          {[
            { key: 'lessons', label: subjectId === 'sub-hindi' ? (language === 'ml' ? 'നോട്ടുകൾ' : 'Notes') : (language === 'ml' ? 'പാഠങ്ങൾ' : 'Lessons'), show: true },
            { key: 'samplePaper', label: language === 'ml' ? 'മാതൃകാ ചോദ്യം' : 'Sample Paper', show: subjectId === 'sub-malayalam-ii' },
            { key: 'formats', label: language === 'ml' ? 'ഫോർമാറ്റ്' : 'Formats', show: true },
            { key: 'sampleQuestions', label: language === 'ml' ? 'മാതൃകാ ചോദ്യങ്ങൾ' : 'Sample Q.', show: subjectId === 'sub-hindi' },
          ].filter(t => t.show).map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as any)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl font-black text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
                activeTab === t.key
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20'
                  : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-brand-primary/30'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      {activeTab === 'lessons' ? (
        <ChapterList subject={subject} language={language} onSelectLesson={handleSelectLesson} onBack={handleBack} showHeader={false} />
      ) : activeTab === 'samplePaper' ? (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {malayalamIISamplePapers.map((paper, index) => (
              <button
                key={paper.id}
                onClick={() => setSelectedPaperIndex(index)}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${selectedPaperIndex === index ? 'bg-brand-teal text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`}
              >
                {language === 'en' ? `Paper ${index + 1}` : `പേപ്പർ ${index + 1}`}
              </button>
            ))}
          </div>
          <SamplePaperView paper={malayalamIISamplePapers[selectedPaperIndex]} language={language} />
        </div>
      ) : activeTab === 'formats' ? (
        <FormatsView subjectId={subjectId || ''} language={language} />
      ) : (
        <div className="space-y-0 sm:space-y-6">
          <div className={`bg-white dark:bg-slate-800 shadow-sm border-x border-b sm:border border-slate-100 dark:border-slate-700 transition-colors duration-300 ${activeTab === 'sampleQuestions' ? 'p-2 sm:p-6 rounded-none sm:rounded-2xl' : 'p-6 rounded-2xl'}`}>
            <div className={`flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 pb-4 border-b border-slate-100 dark:border-slate-700 ${activeTab === 'sampleQuestions' ? 'px-2 sm:px-0' : ''}`}>
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-brand-primary dark:text-white">
                  {language === 'en' ? 'Hindi Sample Questions' : language === 'ml' ? 'ഹിന്ദി മാതൃകാ ചോദ്യങ്ങൾ' : 'हिंदी नमूना प्रश्न'}
                </h2>
                <div className="flex gap-2">
                  {hindiSampleQuestionsSets.map((set, index) => (
                    <button
                      key={set.id}
                      onClick={() => setSelectedHindiSetIndex(index)}
                      className={`px-3 py-1 rounded-lg font-bold text-xs transition-colors ${
                        selectedHindiSetIndex === index 
                          ? 'bg-brand-primary text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {set.title[language] || set.title.en}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setShowHindiAnswers(!showHindiAnswers)}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm ${
                  showHindiAnswers 
                    ? 'bg-brand-primary text-white scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                {showHindiAnswers ? '✨ ' : '👁️ '}
                {showHindiAnswers 
                  ? (language === 'en' ? 'Hide Answers' : language === 'ml' ? 'ഉത്തരങ്ങൾ മറയ്ക്കുക' : 'उत्तर छिपाएँ')
                  : (language === 'en' ? 'Show Answers' : language === 'ml' ? 'ഉത്തരങ്ങൾ കാണിക്കുക' : 'उत्तर दिखाएँ')
                }
              </button>
            </div>

            <div className="space-y-6 sm:space-y-10">
              {hindiSampleQuestionsSets[selectedHindiSetIndex].questions.map((q) => (
                <div key={q.question_number} className="group relative bg-slate-50/30 dark:bg-slate-900/20 p-3 sm:p-6 rounded-none sm:rounded-2xl border-y sm:border border-transparent hover:border-brand-primary/10 transition-all duration-300">
                  <div className="flex gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary/10 text-brand-primary rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-base sm:text-lg shadow-sm">
                      {q.question_number}
                    </span>
                    <div className="space-y-4 flex-grow">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                        <div className="flex-grow prose prose-slate dark:prose-invert max-w-none w-full max-w-[100%] overflow-x-hidden">
                          <div className="text-slate-900 dark:text-white text-base sm:text-lg leading-relaxed">
                            <ReactMarkdown 
                              remarkPlugins={[remarkGfm]}
                              components={{
                                table: ({ node, ...props }: any) => (
                                  <div className="w-full my-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                                    <table className="w-full text-left border-collapse break-words" {...props} />
                                  </div>
                                ),
                                th: ({ node, ...props }: any) => <th className="px-1.5 py-2 sm:p-3 font-bold bg-slate-50 dark:bg-slate-800/80 text-brand-primary dark:text-brand-accent text-[10px] sm:text-xs border-b border-slate-200 dark:border-slate-700 leading-tight" {...props} />,
                                td: ({ node, ...props }: any) => <td className="px-1.5 py-2 sm:p-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 break-words leading-tight" {...props} />
                              }}
                            >{q.question_hindi}</ReactMarkdown>
                          </div>
                          {language !== 'ar' && (
                            <div className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic opacity-80 border-l-2 border-slate-200 dark:border-slate-700 pl-2 sm:pl-3 w-full">
                              <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  table: ({ node, ...props }: any) => (
                                    <div className="w-full my-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                                      <table className="w-full text-left border-collapse break-words" {...props} />
                                    </div>
                                  ),
                                  th: ({ node, ...props }: any) => <th className="px-1.5 py-2 sm:p-3 font-bold bg-slate-50 dark:bg-slate-800/80 text-brand-primary dark:text-brand-accent text-[10px] sm:text-xs border-b border-slate-200 dark:border-slate-700 leading-tight" {...props} />,
                                  td: ({ node, ...props }: any) => <td className="px-1.5 py-2 sm:p-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 break-words leading-tight" {...props} />
                                }}
                              >
                                {language === 'ml' ? (q.question_malayalam || '') : q.question_english}
                              </ReactMarkdown>
                            </div>
                          )}
                        </div>
                        {q.marks && (
                          <span className="flex-shrink-0 text-[9px] sm:text-[10px] uppercase tracking-wider font-black bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shadow-sm mt-1 sm:mt-0">
                            {q.marks} {language === 'en' ? 'Marks' : language === 'ml' ? 'മാർക്ക്' : 'अंक'}
                          </span>
                        )}
                      </div>

                      {showHindiAnswers && (
                        <div className="bg-brand-teal/5 dark:bg-brand-teal/10 p-5 rounded-2xl border border-brand-teal/20 animate-in fade-in slide-in-from-top-2 duration-500 w-full overflow-hidden">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
                            <p className="text-xs font-black text-brand-teal uppercase tracking-widest">
                              {language === 'en' ? 'Model Answer' : language === 'ml' ? 'മാതൃകാ ഉത്തരം' : 'आदर्श उत्तर'}
                            </p>
                          </div>
                          <div className="prose prose-slate dark:prose-invert max-w-none w-full flex flex-col">
                            <div className="text-slate-800 dark:text-slate-200 font-medium">
                              <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  table: ({ node, ...props }: any) => (
                                    <div className="w-full my-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                                      <table className="w-full text-left border-collapse break-words" {...props} />
                                    </div>
                                  ),
                                  th: ({ node, ...props }: any) => <th className="px-1.5 py-2 sm:p-3 font-bold bg-slate-50 dark:bg-slate-800/80 text-brand-teal text-[10px] sm:text-xs border-b border-slate-200 dark:border-slate-700 leading-tight" {...props} />,
                                  td: ({ node, ...props }: any) => <td className="px-1.5 py-2 sm:p-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 break-words leading-tight" {...props} />
                                }}
                              >{q.answer_hindi}</ReactMarkdown>
                            </div>
                            {language !== 'ar' && (
                              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 italic pt-3 border-t border-brand-teal/10 w-full flex flex-col">
                                <ReactMarkdown 
                                  remarkPlugins={[remarkGfm]}
                                  components={{
                                    table: ({ node, ...props }: any) => (
                                      <div className="w-full my-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                                        <table className="w-full text-left border-collapse break-words" {...props} />
                                      </div>
                                    ),
                                    th: ({ node, ...props }: any) => <th className="px-1.5 py-2 sm:p-3 font-bold bg-slate-50 dark:bg-slate-800/80 text-brand-teal text-[10px] sm:text-xs border-b border-slate-200 dark:border-slate-700 leading-tight" {...props} />,
                                    td: ({ node, ...props }: any) => <td className="px-1.5 py-2 sm:p-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 break-words leading-tight" {...props} />
                                  }}
                                >
                                  {language === 'ml' ? (q.answer_malayalam || '') : q.answer_english}
                                </ReactMarkdown>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SamplePaperView({ paper, language }: { paper: any, language: Language }) {
  const [showAnswers, setShowAnswers] = useState(false);
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

  let currentQuestionNumber = 1;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-primary dark:text-white">{renderInline(paper.title)}</h2>
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-brand-teal text-white rounded-lg font-bold"
        >
          {showAnswers ? (language === 'en' ? 'Hide Answers' : 'ഉത്തരങ്ങൾ മറയ്ക്കുക') : (language === 'en' ? 'Show Answers' : 'ഉത്തരങ്ങൾ കാണിക്കുക')}
        </button>
      </div>
      
      {paper.sections.map((section: any) => {
        const startNumber = currentQuestionNumber;
        currentQuestionNumber += section.questions.length;
        
        return (
          <div key={section.id} className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-brand-primary dark:text-white">{renderInline(section.title)}</h3>
            <p className="text-slate-500 mb-4">{renderInline(section.description)}</p>
            <div className="space-y-6">
              {section.questions.map((q: any, index: number) => (
                <div key={q.id} className="border-b pb-4">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    <span className="mr-2">{startNumber + index}.</span>
                    {renderInline(q.question)}
                  </p>
                  {showAnswers && (
                    <p className="mt-2 text-brand-teal font-medium">{renderInline(q.answer)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
