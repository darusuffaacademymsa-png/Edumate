import { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { sslcCurriculum, Language } from '../../data/curriculum';
import ChapterList from '../../components/ChapterList';
import { malayalamIISamplePapers } from '../../data/malayalam_ii_sample_paper';
import FormatsView from '../../components/FormatsView';
import { hindiSampleQuestions, hindiSampleQuestionsSets } from '../../data/hindi_sample_questions';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

  const subject = sslcCurriculum.find(s => s.id === subjectId);

  if (!subject) return <div>Subject not found</div>;

  const handleSelectLesson = (id: string) => {
    navigate(`/sslc/${subjectId}/${id}`);
  };

  const handleBack = () => {
    navigate('/sslc');
  };

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

  const Icon = iconMap[subject.icon] || BookOpen;

  return (
    <div className={`mx-auto max-w-4xl ${activeTab === 'sampleQuestions' ? 'p-0 sm:p-4 md:p-8' : 'p-2 sm:p-4 md:p-8'}`}>
      {/* Header */}
      <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-6 sm:mb-10 bg-white dark:bg-slate-800 p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300 ${activeTab === 'sampleQuestions' ? 'rounded-none sm:rounded-3xl' : 'rounded-2xl sm:rounded-3xl'}`}>
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 dark:bg-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner text-brand-primary dark:text-brand-accent">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-display text-xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">{renderInline(subject.title)}</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold mt-1">
            {subject.units.length} {language === 'en' ? 'Units' : language === 'ml' ? 'യൂണിറ്റുകൾ' : 'Units / യൂണിറ്റുകൾ'}
          </p>
        </div>
      </div>

      {/* Tabs */}
      {(subjectId === 'sub-malayalam-ii' || subjectId === 'sub-hindi') && (
        <div className={`flex flex-wrap gap-2 sm:gap-4 mb-6 ${activeTab === 'sampleQuestions' ? 'px-4 sm:px-0' : ''}`}>
          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-colors ${activeTab === 'lessons' ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}`}
          >
            {subjectId === 'sub-hindi' 
              ? (language === 'en' ? 'Notes' : 'നോട്ടുകൾ') 
              : (language === 'en' ? 'Lessons' : 'പാഠങ്ങൾ')}
          </button>
          {subjectId === 'sub-malayalam-ii' && (
            <button
              onClick={() => setActiveTab('samplePaper')}
              className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-colors ${activeTab === 'samplePaper' ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}`}
            >
              {language === 'en' ? 'Sample Question Paper' : 'മാതൃകാ ചോദ്യപേപ്പർ'}
            </button>
          )}
          <button
            onClick={() => setActiveTab('formats')}
            className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-colors ${activeTab === 'formats' ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}`}
          >
            {language === 'en' ? 'Formats' : 'ഫോർമാറ്റുകൾ'}
          </button>
          {subjectId === 'sub-hindi' && (
            <button
              onClick={() => setActiveTab('sampleQuestions')}
              className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-colors ${activeTab === 'sampleQuestions' ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}`}
            >
              {language === 'en' ? 'Sample Questions' : 'മാതൃകാ ചോദ്യങ്ങൾ'}
            </button>
          )}
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
                        <div className="flex-grow prose prose-slate dark:prose-invert max-w-none">
                          <div className="text-slate-900 dark:text-white text-base sm:text-lg leading-relaxed">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.question_hindi}</ReactMarkdown>
                          </div>
                          {language !== 'ar' && (
                            <div className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic opacity-80 border-l-2 border-slate-200 dark:border-slate-700 pl-2 sm:pl-3">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {language === 'ml' ? (q.question_malayalam || '') : q.question_english}
                              </ReactMarkdown>
                            </div>
                          )}
                        </div>
                        {q.marks && (
                          <span className="flex-shrink-0 text-[9px] sm:text-[10px] uppercase tracking-wider font-black bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shadow-sm">
                            {q.marks} {language === 'en' ? 'Marks' : language === 'ml' ? 'മാർക്ക്' : 'अंक'}
                          </span>
                        )}
                      </div>

                      {showHindiAnswers && (
                        <div className="bg-brand-teal/5 dark:bg-brand-teal/10 p-5 rounded-2xl border border-brand-teal/20 animate-in fade-in slide-in-from-top-2 duration-500">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
                            <p className="text-xs font-black text-brand-teal uppercase tracking-widest">
                              {language === 'en' ? 'Model Answer' : language === 'ml' ? 'മാതൃകാ ഉത്തരം' : 'आदर्श उत्तर'}
                            </p>
                          </div>
                          <div className="prose prose-slate dark:prose-invert max-w-none">
                            <div className="text-slate-800 dark:text-slate-200 font-medium">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.answer_hindi}</ReactMarkdown>
                            </div>
                            {language !== 'ar' && (
                              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 italic pt-3 border-t border-brand-teal/10">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
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
