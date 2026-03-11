import { useState, useRef, useEffect, useCallback } from 'react';
import { BookOpen, FlaskConical, PenTool, Volume2, CheckCircle2, PlayCircle, FileText, HelpCircle, Info, ArrowLeft, Clock, GripVertical } from 'lucide-react';
import { Language } from '../data/curriculum';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChemistryInteractive from '../labs/chemistry/ChemistryInteractive';
import SoundWavesInteractive from '../labs/physics/SoundWavesInteractive';
import { LensSimulation } from '../labs/optics/LensSimulation';
import { PrismSimulation } from '../labs/optics/PrismSimulation';
import { GeneratorSimulation } from '../labs/physics/GeneratorSimulation';
import { TransformerSimulation } from '../labs/physics/TransformerSimulation';
import { LeverSimulation } from '../labs/mechanics/LeverSimulation';
import { PulleySimulation } from '../labs/mechanics/PulleySimulation';
import { BarMagnetSimulation } from '../labs/physics/BarMagnetSimulation';
import QuizView from './QuizView';
import SarfPractice from './SarfPractice';

import { markLessonComplete } from '../utils/progressTracker';

export default function LessonView({ lesson, language, onBack, subjectId, selectedClass }: { lesson: any, language: Language, onBack: () => void, subjectId?: string | null, selectedClass?: string }) {
  const [activeTab, setActiveTab] = useState<'read' | 'experiment' | 'quiz' | 'glossary' | 'sample_questions' | 'translation'>('read');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const isResizing = useRef(false);

  useEffect(() => {
    if (lesson?.id) {
      markLessonComplete(lesson.id);
    }
  }, [lesson?.id]);

  const isArabicSubject = subjectId === 'sub-arabic' || subjectId === 'sub-islamic-history' || subjectId === 'sub-urdu' || subjectId === 'sub-meezan';
  const isEnglishSubject = subjectId === 'sub-english';
  const isRTL = language === 'ar' || isArabicSubject;
  
  const isDars = subjectId === 'sub-meezan';

  const glossaryLabel = isEnglishSubject 
    ? { en: 'Characters', ml: 'കഥാപാത്രങ്ങൾ', ar: 'شخصيات' }
    : { en: 'Glossary', ml: 'പദസൂചിക', ar: 'قاموس المصطلحات' };

  const practiceLabel = isDars
    ? { en: 'Practice', ml: 'പരിശീലനം', ar: 'تدريب' }
    : { en: 'Experiment', ml: 'പരീക്ഷണം', ar: 'تجربة' };

  const startResizing = useCallback(() => {
    isResizing.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResizing);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const stopResizing = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopResizing);
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing.current) return;
    const newWidth = window.innerWidth - e.clientX;
    if (newWidth > 200 && newWidth < 600) {
      setSidebarWidth(newWidth);
    }
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResizing);
    };
  }, [handleMouseMove, stopResizing]);

  const renderInline = (str: any) => {
    if (!str) return '';
    
    // Logic for Arabic subject
    if (isArabicSubject && str.ar) {
      if (language === 'ar') return str.ar;
      if (language === 'en') return `${str.ar} (${str.en})`;
      if (language === 'ml') return `${str.ar} (${str.ml})`;
      if (language === 'bilingual') return `${str.ar} (${str.en} / ${str.ml})`;
      return str.ar;
    }

    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language] || str.en;
  };

  const TextContent = ({ enText, mlText, arText, className = "" }: any) => {
    const isBilingual = language === 'bilingual';
    
    if (isArabicSubject && arText) {
      return (
        <span className={`block mb-4 ${className} ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
          <span className="block text-2xl mb-2">{arText}</span>
          {language === 'en' && enText && <span className="block text-sm text-slate-600 dark:text-slate-400">{enText}</span>}
          {language === 'ml' && mlText && <span className="block text-sm text-slate-600 dark:text-slate-400">{mlText}</span>}
          {isBilingual && (
            <span className="block text-sm text-slate-600 dark:text-slate-400">
              {enText} {enText && mlText ? '/' : ''} {mlText}
            </span>
          )}
        </span>
      );
    }

    return (
      <span className={`block mb-4 ${className}`}>
        {(language === 'en' || isBilingual) && <span className={`block ${isBilingual ? "text-slate-800 dark:text-slate-200" : ""}`}>{enText}</span>}
        {(language === 'ml' || isBilingual) && <span className={`block ${isBilingual ? "text-slate-600 dark:text-slate-400 text-sm mt-1" : ""}`}>{mlText}</span>}
      </span>
    );
  };

  const MarkdownContent = ({ enText, mlText, arText, className = "" }: any) => {
    const isBilingual = language === 'bilingual';
    
    if (isArabicSubject && arText) {
      return (
        <div className={`mb-6 ${className} ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="prose prose-slate dark:prose-invert max-w-none text-2xl mb-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{arText}</ReactMarkdown>
          </div>
          {language === 'en' && enText && (
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{enText}</ReactMarkdown>
            </div>
          )}
          {language === 'ml' && mlText && (
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{mlText}</ReactMarkdown>
            </div>
          )}
          {isBilingual && (
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm">
              {enText && <ReactMarkdown remarkPlugins={[remarkGfm]}>{enText}</ReactMarkdown>}
              {mlText && <ReactMarkdown remarkPlugins={[remarkGfm]}>{mlText}</ReactMarkdown>}
            </div>
          )}
        </div>
      );
    }

    if (isBilingual) {
      const enBlocks = (enText || '').split('\n\n');
      const mlBlocks = (mlText || '').split('\n\n');
      const maxBlocks = Math.max(enBlocks.length, mlBlocks.length);
      
      return (
        <div className={`mb-4 ${className}`}>
          {Array.from({ length: maxBlocks }).map((_, i) => (
            <div key={i} className="mb-6">
              {enBlocks[i] && (
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{enBlocks[i]}</ReactMarkdown>
                </div>
              )}
              {mlBlocks[i] && (
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm mt-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{mlBlocks[i]}</ReactMarkdown>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={`mb-4 ${className}`}>
        {language === 'en' && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{enText}</ReactMarkdown>
          </div>
        )}
        {language === 'ml' && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{mlText}</ReactMarkdown>
          </div>
        )}
      </div>
    );
  };

  const renderBlock = (block: any, idx: number) => {
    const en = block.en;
    const ml = block.ml;
    const ar = block.ar;

    switch (block.type) {
      case 'h2':
        return <h2 key={idx} className="font-display text-2xl font-bold text-brand-primary dark:text-white mt-8 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2"><TextContent enText={en} mlText={ml} arText={ar} /></h2>;
      case 'h3':
        return <h3 key={idx} className="font-display text-xl font-bold text-brand-primary dark:text-white mt-6 mb-3"><TextContent enText={en} mlText={ml} arText={ar} /></h3>;
      case 'p':
        return <div key={idx} className="text-lg leading-relaxed text-slate-700 dark:text-slate-300"><TextContent enText={en} mlText={ml} arText={ar} /></div>;
      case 'ul':
        return (
          <ul key={idx} className={`list-disc list-inside space-y-2 my-4 text-slate-700 dark:text-slate-300 ${isRTL ? 'text-right' : 'text-left'}`}>
            {block.items?.map((item: any, i: number) => (
              <li key={i}>
                <TextContent enText={item.en} mlText={item.ml} arText={item.ar} className="inline" />
              </li>
            ))}
          </ul>
        );
      case 'formula':
        return (
          <div key={idx} className="bg-brand-accent/10 dark:bg-brand-accent/20 border-l-4 border-brand-accent p-4 rounded-r-xl my-4 font-mono text-sm text-brand-primary dark:text-brand-accent">
            <TextContent enText={en} mlText={ml} arText={ar} />
          </div>
        );
      case 'img':
        if (block.customId === 'lens-simulation') {
          return (
            <div key={idx} className="my-8">
              <LensSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'prism-simulation') {
          return (
            <div key={idx} className="my-8">
              <PrismSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'generator-simulation') {
          return (
            <div key={idx} className="my-8">
              <GeneratorSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'transformer-simulation') {
          return (
            <div key={idx} className="my-8">
              <TransformerSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'bar-magnet-simulation') {
          return (
            <div key={idx} className="my-8">
              <BarMagnetSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'lever-simulation') {
          return (
            <div key={idx} className="my-8">
              <LeverSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'pulley-simulation') {
          return (
            <div key={idx} className="my-8">
              <PulleySimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId && (block.customId.includes('simulation') || block.customId.includes('animation') || block.customId.includes('diagram'))) {
          return (
            <div key={idx} className="my-8 p-12 bg-slate-100 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-center">
              <PlayCircle className="w-12 h-12 text-brand-primary mb-4 opacity-50" />
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                {renderInline({ en: 'Interactive Content', ml: 'ഇന്ററാക്ടീവ് ഉള്ളടക്കം' })}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                {renderInline({ 
                  en: `The ${block.customId.replace(/-/g, ' ')} is coming soon in the next update!`, 
                  ml: `${block.customId.replace(/-/g, ' ')} അടുത്ത അപ്‌ഡേറ്റിൽ ലഭ്യമാകും!` 
                })}
              </p>
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        return (
          <div key={idx} className="my-8">
            <img 
              src={block.src} 
              alt={renderInline(block.en)} 
              className="w-full rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
              referrerPolicy="no-referrer"
            />
            <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
              <TextContent enText={en} mlText={ml} />
            </div>
          </div>
        );
      case 'table':
        return (
          <div key={idx} className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                  {block.tableData.headers.map((h: any, i: number) => (
                    <th key={i} className="p-4 font-bold text-slate-700 dark:text-slate-300"><TextContent enText={h.en} mlText={h.ml} /></th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {block.tableData.rows.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    {row.map((cell: any, j: number) => (
                      <td key={j} className="p-4 text-slate-700 dark:text-slate-300"><TextContent enText={cell.en} mlText={cell.ml} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full flex-col lg:flex-row">
      {/* Main Lesson Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-brand-teal font-bold mb-3">
              <span className="bg-brand-teal/10 dark:bg-brand-teal/20 px-2 py-1 rounded-md">
                {selectedClass === '11' ? 'Class 11' : 'Class 10'}
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1"><Clock className="w-4 h-4" /> {lesson.estimated_time_mins} mins</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold text-brand-primary dark:text-white mb-4 tracking-tight">
              {renderInline(lesson.title)}
            </h1>
            
            {/* Learning Objectives */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {language === 'en' ? 'Learning Objectives' : language === 'ml' ? 'പഠന ലക്ഷ്യങ്ങൾ' : 'Learning Objectives / പഠന ലക്ഷ്യങ്ങൾ'}
              </h3>
              <ul className="space-y-2">
                {lesson.learning_objectives.map((lo: any, idx: number) => (
                  <li key={lo.id || idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 flex-shrink-0"></span>
                    <span>{renderInline(lo.text || lo)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide sticky top-0 bg-white dark:bg-slate-900 z-10 -mx-4 sm:-mx-8 px-4 sm:px-8">
            <button
              onClick={() => setActiveTab('read')}
              className={`px-4 sm:px-6 py-3 font-medium text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === 'read' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              <FileText className="w-4 h-4" />
              {language === 'en' ? 'Read' : language === 'ml' ? 'വായിക്കുക' : 'Read / വായിക്കുക'}
            </button>
            <button
              onClick={() => setActiveTab('experiment')}
              className={`px-4 sm:px-6 py-3 font-medium text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === 'experiment' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              <FlaskConical className="w-4 h-4" />
              {renderInline(practiceLabel)}
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 sm:px-6 py-3 font-medium text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === 'quiz' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              <HelpCircle className="w-4 h-4" />
              {language === 'en' ? 'Quiz' : language === 'ml' ? 'ക്വിസ്' : 'Quiz / ക്വിസ്'}
            </button>
            {lesson.sample_questions && (
              <button
                onClick={() => setActiveTab('sample_questions')}
                className={`px-4 sm:px-6 py-3 font-medium text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === 'sample_questions' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              >
                <HelpCircle className="w-4 h-4" />
                {language === 'en' ? 'Sample Questions' : language === 'ml' ? 'മാതൃകാ ചോദ്യങ്ങൾ' : 'Sample Questions / മാതൃകാ ചോദ്യങ്ങൾ'}
              </button>
            )}
            {lesson.translation && (
              <button
                onClick={() => setActiveTab('translation')}
                className={`px-4 sm:px-6 py-3 font-medium text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === 'translation' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              >
                <Volume2 className="w-4 h-4" />
                {language === 'en' ? 'Translation of chapter' : language === 'ml' ? 'പാഠഭാഗത്തിന്റെ വിവർത്തനം' : 'Translation / വിവർത്തനം'}
              </button>
            )}
            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-4 sm:px-6 py-3 font-medium text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 lg:hidden whitespace-nowrap ${activeTab === 'glossary' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              <BookOpen className="w-4 h-4" />
              {renderInline(glossaryLabel)}
            </button>
          </div>

          {/* Tab Content */}
          <div className="pb-20">
            {activeTab === 'read' && (
              <div className="space-y-8">
                <section className="prose prose-slate dark:prose-invert max-w-none">
                  <div className="flex items-start gap-4 group">
                    <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 flex-1">
                      <TextContent enText={lesson.content.intro.en} mlText={lesson.content.intro.ml} arText={lesson.content.intro.ar} />
                    </div>
                    <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full transition-colors opacity-0 group-hover:opacity-100" title="Listen (TTS)">
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </section>

                {lesson.content.blocks ? (
                  <div className="mt-8">
                    {lesson.content.blocks.map((block: any, idx: number) => renderBlock(block, idx))}
                  </div>
                ) : (
                  <section className="mt-8">
                    <div className="flex items-start gap-4 group">
                      <div className="flex-1">
                        <MarkdownContent enText={lesson.content.core.en} mlText={lesson.content.core.ml} arText={lesson.content.core.ar} />
                      </div>
                      <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full transition-colors opacity-0 group-hover:opacity-100" title="Listen (TTS)">
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  </section>
                )}
              </div>
            )}

            {activeTab === 'experiment' && (
              lesson.id === 'sc-chem-10-nomenclature' ? (
                <ChemistryInteractive language={language} />
              ) : lesson.id === 'sc-phy-10-sound' ? (
                <SoundWavesInteractive language={language} />
              ) : isDars ? (
                <SarfPractice language={language} />
              ) : (
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-12 text-center shadow-sm">
                  <div className="w-20 h-20 bg-brand-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FlaskConical className="w-10 h-10 text-brand-primary dark:text-slate-300" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-primary dark:text-white mb-2">
                    {renderInline(practiceLabel.en.includes('Practice') ? { en: 'Interactive Practice', ml: 'ഇന്ററാക്ടീവ് പരിശീലനം' } : { en: 'Interactive Experiment', ml: 'സംവേദനാത്മക പരീക്ഷണം' })}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold">
                    {language === 'en' ? 'Coming soon for this chapter.' : language === 'ml' ? 'ഈ അധ്യായത്തിനായി ഉടൻ വരുന്നു.' : 'Coming soon for this chapter / ഈ അധ്യായത്തിനായി ഉടൻ വരുന്നു.'}
                  </p>
                </div>
              )
            )}

            {activeTab === 'quiz' && (
              <QuizView questions={lesson.quiz} language={language} quizId={lesson.id} />
            )}

            {activeTab === 'sample_questions' && lesson.sample_questions && (
              <div className="space-y-8">
                {lesson.sample_questions.map((q: any, idx: number) => (
                  <div key={q.q_id || idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded">Q{idx + 1}</span>
                    </div>
                    <div className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-6">
                      <TextContent enText={q.question.en} mlText={q.question.ml} arText={q.question.ar} />
                    </div>
                    
                    <div className="mt-4 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-200 border border-indigo-100 dark:border-indigo-800">
                      <div className="flex gap-3">
                        <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-600 dark:text-indigo-400" />
                        <div>
                          <p className="font-bold mb-1 text-indigo-700 dark:text-indigo-300">
                            {language === 'en' ? 'Answer' : language === 'ml' ? 'ഉത്തരം' : 'Answer / ഉത്തരം'}
                          </p>
                          <div className="text-sm opacity-90">
                            <TextContent enText={q.answer.en} mlText={q.answer.ml} arText={q.answer.ar} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'translation' && lesson.translation && (
              <div className="space-y-6">
                {lesson.translation.map((item: any, idx: number) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm">
                    <div className="text-right mb-4" dir="rtl">
                      <p className="text-2xl leading-loose text-slate-900 dark:text-white font-medium">{item.urdu}</p>
                    </div>
                    
                    {(language === 'en' || language === 'ml' || language === 'bilingual' || language === 'ar') && (
                      <div className={`pt-4 border-t border-slate-100 dark:border-slate-700 ${language === 'bilingual' || language === 'ar' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}`}>
                        {(language === 'ml' || language === 'bilingual' || language === 'ar') && (
                          <div>
                            <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                              Malayalam
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{item.ml}</p>
                          </div>
                        )}
                        {(language === 'en' || language === 'bilingual' || language === 'ar') && (
                          <div>
                            <p className="text-[10px] font-bold text-brand-purple uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                              English
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{item.en}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'glossary' && (
              <div className="space-y-4">
                {lesson.glossary.map((item: any, idx: number) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-100 dark:border-slate-700">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white">{renderInline(item.term)}</h4>
                      <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="Pronounce">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <TextContent enText={item.definition.en} mlText={item.definition.ml} arText={item.definition.ar} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar: Glossary & Tools */}
      <div 
        className="bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 flex-shrink-0 overflow-y-auto transition-colors duration-300 hidden lg:flex flex-col relative"
        style={{ width: sidebarWidth }}
      >
        {/* Resize Handle */}
        <div 
          onMouseDown={startResizing}
          className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-indigo-500/50 transition-colors group z-20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 dark:bg-slate-700 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="w-3 h-3 text-slate-400" />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            {renderInline(glossaryLabel)}
          </h3>
          
          <div className="space-y-4">
            {lesson.glossary.map((item: any, idx: number) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white">{renderInline(item.term)}</h4>
                  <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="Pronounce">
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <TextContent enText={item.definition.en} mlText={item.definition.ml} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
