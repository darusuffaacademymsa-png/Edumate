import { useState, useRef, useEffect, useCallback } from 'react';
import { BookOpen, FlaskConical, PenTool, Volume2, CheckCircle2, PlayCircle, Play, FileText, HelpCircle, Info, ArrowLeft, Clock, GripVertical, Sparkles, Maximize } from 'lucide-react';
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
import { SwingAnimation } from '../labs/physics/SwingAnimation';
import { PendulumSimulation } from '../labs/physics/PendulumSimulation';
import { ResonanceSimulation } from '../labs/physics/ResonanceSimulation';
import { WavesSimulation } from '../labs/physics/WavesSimulation';
import { WaveTypesSimulation } from '../labs/physics/WaveTypesSimulation';
import { ReflectionSimulation } from '../labs/physics/ReflectionSimulation';
import { UltrasoundSimulation } from '../labs/physics/UltrasoundSimulation';
import CircleAnglesInteractive from '../labs/geometry/CircleAnglesInteractive';
import SequenceAlgebraLab from '../labs/geometry/SequenceAlgebraLab';
import QuadraticLab from '../labs/geometry/QuadraticLab';
import TrigonometryLab from '../labs/geometry/TrigonometryLab';
import ProbabilityLab from '../labs/geometry/ProbabilityLab';
import QuizView from './QuizView';
import SarfPractice from './SarfPractice';

import { markLessonComplete } from '../utils/progressTracker';

export default function LessonView({ lesson, language, onBack, subjectId, selectedClass }: { lesson: any, language: Language, onBack: () => void, subjectId?: string | null, selectedClass?: string }) {
  const [activeTab, setActiveTab] = useState<'read' | 'video' | 'quiz' | 'glossary' | 'sample_questions' | 'translation'>('read');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const isResizing = useRef(false);

  useEffect(() => {
    if (lesson?.id) {
      markLessonComplete(lesson.id);
    }
  }, [lesson?.id]);

  const isArabicSubject = subjectId === 'sub-arabic' || subjectId === 'sub-urdu' || subjectId === 'sub-meezan';
  const isEnglishSubject = subjectId === 'sub-english';
  const isRTL = isArabicSubject;
  
  const isDars = subjectId === 'sub-meezan';
  const isCompact = lesson.id?.startsWith('pl-isl-');
  const isBilingual = language === 'bilingual';
  const isNormal = language === 'ar';

  const glossaryLabel = isEnglishSubject 
    ? { en: 'Characters', ml: 'കഥാപാത്രങ്ങൾ', ar: 'شخصيات' }
    : { en: 'Glossary', ml: 'Glossary', ar: 'Glossary' };

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
    
    if (str.ar) {
      if (language === 'bilingual') return `${str.ar} / ${str.en} / ${str.ml}`;
      if (language === 'ar') return str.ar;
      if (language === 'en') return `${str.ar} (${str.en})`;
      if (language === 'ml') return `${str.ar} (${str.ml})`;
    }

    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language] || str.en;
  };

  const getEmbedUrl = (url: string) => {
    let videoId = extractVideoId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3`;
    }
    return url;
  };

  const extractVideoId = (url: string) => {
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('watch?v=')) {
      return url.split('watch?v=')[1].split('&')[0];
    }
    return null;
  };


  const VideoPlayer = ({ video }: { video: any }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showButton, setShowButton] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const videoId = extractVideoId(video.url);
    const primaryImgSrc = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
    const fallbackImgSrc = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''; // Often needed if maxres doesn't exist

    const resetTimer = () => {
      if (!isLoaded) return; // Keep button invisible logically if not loaded (the actual fullscreen button isn't shown anyway until play starts often, but we'll show it)
      setShowButton(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setShowButton(false);
      }, 3000);
    };

    useEffect(() => {
      resetTimer();
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [isLoaded]);

    const toggleFullScreen = async (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent clicking play if they happen to hit fullscreen first magically
      if (!containerRef.current) return;
      
      try {
        if (!document.fullscreenElement) {
          if (containerRef.current.requestFullscreen) {
            await containerRef.current.requestFullscreen();
          } else if ((containerRef.current as any).webkitRequestFullscreen) {
            await (containerRef.current as any).webkitRequestFullscreen();
          }
          
          if (window.screen.orientation && (window.screen.orientation as any).lock) {
            await (window.screen.orientation as any).lock('landscape').catch(() => {});
          }
        } else {
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          }
        }
      } catch (err) {
        console.error("Error toggling fullscreen:", err);
      }
    };

    return (
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-brand-purple rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        <div 
          ref={containerRef} 
          className="relative aspect-video w-full rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-white/10 group/player cursor-pointer"
          onMouseMove={resetTimer}
          onTouchStart={resetTimer}
          onClick={() => !isLoaded && setIsLoaded(true)}
        >
          {!isLoaded ? (
            // Thumbnail Cover
            <div className="w-full h-full relative flex items-center justify-center bg-slate-900 group-hover:opacity-95 transition-opacity duration-300">
              {videoId ? (
                <>
                  <img 
                    src={imgError ? fallbackImgSrc : primaryImgSrc} 
                    alt={video.title || "Video thumbnail"}
                    onError={() => !imgError && setImgError(true)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Subtle dark overlay to make play button pop */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  
                  {/* Glowing Play Button Pulse effect behind actual icon */}
                  <div className="absolute w-20 h-20 bg-brand-primary/40 rounded-full blur-xl group-hover:bg-brand-primary/60 transition-all duration-500"></div>
                  
                  {/* Official-looking Play Button */}
                  <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary/90 group-hover:bg-brand-primary backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                     <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current ml-2" />
                  </div>
                </>
              ) : (
                 <div className="text-white text-center">
                    <Play className="w-12 h-12 text-slate-500 mx-auto mb-2" />
                    <span>Click to Play</span>
                 </div>
              )}
            </div>
          ) : (
            // Actual Video Frame
            <iframe 
              src={getEmbedUrl(video.url)} 
              className="w-full h-full"
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          )}

          {/* Fullscreen Landscape Button (Only visible after loaded or always bottom corner) */}
          {isLoaded && (
            <button 
              onClick={toggleFullScreen}
              className={`absolute bottom-4 right-4 z-20 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all duration-500 flex items-center gap-2 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              title="Fullscreen Landscape"
            >
              <Maximize className="w-5 h-5" />
              <span className="text-xs font-bold sm:hidden">Landscape Fullscreen</span>
            </button>
          )}
        </div>
      </div>
    );
  };

  const TextContent = ({ enText, mlText, arText, className = "" }: any) => {
    const isInline = className.includes('inline') || isCompact;
    
    if (arText) {
      const showAr = true; // Always show Arabic for reference
      const showEn = language === 'en' && enText;
      const showMl = (language === 'ml' || isBilingual) && mlText;

      return (
        <span className={`${isInline ? "inline" : "block mb-4"} ${className} ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
          {showAr && (
            <span className={`${isInline ? "inline" : "block text-2xl mb-2"} text-slate-900 dark:text-white`}>{arText}</span>
          )}
          {showEn && (
            <span className={`${isInline ? "inline opacity-80" : "block text-sm"} text-slate-800 dark:text-slate-200`}>
              {isInline && showAr ? " / " : ""}{enText}
            </span>
          )}
          {showMl && (
            <span className={`${isInline ? "inline opacity-80" : "block text-sm mt-1"} text-slate-600 dark:text-slate-400`}>
              {isInline && (showAr || showEn) ? " / " : ""}{mlText}
            </span>
          )}
        </span>
      );
    }

    const showEn = (language === 'en' || isBilingual || isNormal) && enText;
    const showMl = (language === 'ml' || isBilingual) && mlText;

    return (
      <span className={`${isInline ? "inline" : "block mb-4"} ${className}`}>
        {showEn && (
          <span className={`${isInline ? "inline" : "block"} ${(isBilingual || isNormal) && !isInline ? "text-slate-800 dark:text-slate-200" : ""}`}>
            {enText}
          </span>
        )}
        {showMl && (
          <span className={`${isInline ? "inline opacity-80" : "block"} ${isBilingual && !isInline ? "text-slate-600 dark:text-slate-400 text-sm mt-1" : ""}`}>
            {isInline && showEn ? " / " : ""}{mlText}
          </span>
        )}
      </span>
    );
  };

  const MarkdownContent = ({ enText, mlText, arText, className = "" }: any) => {
    const markdownComponents = {
      table: ({ node, ...props }: any) => (
        <div className="w-full my-6 rounded-inset sm:rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <table className="w-full text-left border-collapse break-words" {...props} />
        </div>
      ),
      th: ({ node, ...props }: any) => (
        <th className="px-1.5 py-2 sm:p-4 font-black bg-slate-50 dark:bg-slate-800/80 text-brand-primary dark:text-brand-accent uppercase tracking-widest text-[10px] sm:text-xs border-b border-slate-200 dark:border-slate-700 leading-tight" {...props} />
      ),
      td: ({ node, ...props }: any) => (
        <td className="px-1.5 py-2 sm:p-4 text-[11px] sm:text-base text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 break-words leading-tight" {...props} />
      ),
    };
    
    if (arText) {
      return (
        <div className={`mb-6 ${className} ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
          {(language === 'ar' || language === 'en' || language === 'ml' || isBilingual) && (
            <div className="prose prose-slate dark:prose-invert max-w-none text-2xl mb-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{arText}</ReactMarkdown>
            </div>
          )}
          {language === 'en' && enText && (
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{enText}</ReactMarkdown>
            </div>
          )}
          {(language === 'ml' || isBilingual) && mlText && (
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm mt-2">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{mlText}</ReactMarkdown>
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
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{enBlocks[i]}</ReactMarkdown>
                </div>
              )}
              {mlBlocks[i] && (
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm mt-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{mlBlocks[i]}</ReactMarkdown>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={`mb-4 ${className}`}>
        {(language === 'en' || isNormal) && enText && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{enText}</ReactMarkdown>
          </div>
        )}
        {language === 'ml' && mlText && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{mlText}</ReactMarkdown>
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
        return (
          <h2 key={idx} className={`relative font-display ${isCompact ? 'text-xl sm:text-2xl mt-6 mb-3' : 'text-2xl sm:text-3xl mt-12 mb-6'} font-black text-brand-primary dark:text-white group/h2`}>
            <span className="relative z-10 flex items-center gap-3">
              <div className={`${isCompact ? 'w-1.5 h-6' : 'w-2 h-8'} bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]`}></div>
              <TextContent enText={en} mlText={ml} arText={ar} />
            </span>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-indigo-600/40 to-transparent rounded-full"></div>
          </h2>
        );
      case 'h3':
        return (
          <h3 key={idx} className={`font-display ${isCompact ? 'text-lg sm:text-xl mt-5 mb-2' : 'text-xl sm:text-2xl mt-10 mb-4'} font-extrabold text-indigo-900 dark:text-indigo-300 flex items-center gap-2`}>
            <Sparkles className={`${isCompact ? 'w-4 h-4' : 'w-5 h-5'} text-brand-accent animate-pulse`} />
            <TextContent enText={en} mlText={ml} arText={ar} />
          </h3>
        );
      case 'p':
        return (
          <div 
            key={idx} 
            className={`group/p relative text-lg leading-relaxed text-slate-700 dark:text-slate-300 transition-all hover:bg-white dark:hover:bg-slate-800/50 hover:shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-700 ${isCompact ? 'my-1 p-2 rounded-xl hyphens-auto text-justify' : 'my-4 p-4 rounded-2xl'}`}
            style={{ hyphens: 'auto', WebkitHyphens: 'auto' } as any}
          >
            <MarkdownContent enText={en} mlText={ml} arText={ar} />
          </div>
        );
      case 'ul':
        return (
          <ul key={idx} className={`${isCompact ? 'space-y-1 my-2' : 'space-y-4 my-6'} ${isRTL ? 'text-right' : 'text-left'}`}>
            {block.items?.map((item: any, i: number) => (
              <li key={i} className={`flex items-start ${isCompact ? 'gap-2' : 'gap-3'} group/li`}>
                <div className={`${isCompact ? 'mt-2 w-1.5 h-1.5' : 'mt-2 w-2 h-2'} rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover/li:scale-125 transition-transform flex-shrink-0`} />
                <div className={`text-lg text-slate-700 dark:text-slate-300 leading-relaxed ${isCompact ? 'hyphens-auto' : ''}`} style={isCompact ? { hyphens: 'auto', WebkitHyphens: 'auto' } as any : {}}>
                  <MarkdownContent enText={item.en} mlText={item.ml} arText={item.ar} className="inline" />
                </div>
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
        if (block.customId === 'swing-animation') {
          return (
            <div key={idx} className="my-8">
              <SwingAnimation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'pendulum-simulation') {
          return (
            <div key={idx} className="my-8">
              <PendulumSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'resonance-simulation') {
          return (
            <div key={idx} className="my-8">
              <ResonanceSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'waves-simulation') {
          return (
            <div key={idx} className="my-8">
              <WavesSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'wave-types-simulation') {
          return (
            <div key={idx} className="my-8">
              <WaveTypesSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'reflection-simulation') {
          return (
            <div key={idx} className="my-8">
              <ReflectionSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'ultrasound-simulation') {
          return (
            <div key={idx} className="my-8">
              <UltrasoundSimulation />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 italic font-medium">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
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
        if (block.customId === 'circle-angles-lab') {
          return (
            <div key={idx} className="my-12">
              <CircleAnglesInteractive />
              <div className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-6">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'sequence-algebra-lab') {
          return (
            <div key={idx} className="my-12">
              <SequenceAlgebraLab />
              <div className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-6">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'quadratic-lab') {
          return (
            <div key={idx} className="my-12">
              <QuadraticLab />
              <div className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-6">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'trig-lab') {
          return (
            <div key={idx} className="my-12">
              <TrigonometryLab />
              <div className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-6">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        if (block.customId === 'probability-lab') {
          return (
            <div key={idx} className="my-12">
              <ProbabilityLab />
              <div className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-6">
                <TextContent enText={en} mlText={ml} />
              </div>
            </div>
          );
        }
        return (
          <div key={idx} className="my-8 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg">
            <img src={block.url} alt={renderInline(block.en)} className="w-full h-auto" />
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 text-center text-sm text-slate-500 dark:text-slate-400 italic font-medium border-t border-slate-100 dark:border-slate-800">
              <TextContent enText={en} mlText={ml} />
            </div>
          </div>
        );
      case 'table':
        return (
          <div key={idx} className="my-8 rounded-xl sm:rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse break-words">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  {block.tableData.headers.map((header: any, i: number) => (
                    <th key={i} className="px-1.5 py-2 sm:p-4 font-black text-brand-primary dark:text-brand-accent uppercase tracking-widest text-[10px] sm:text-xs border-b border-slate-200 dark:border-slate-700 leading-tight">
                      <TextContent enText={header.en} mlText={header.ml} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {block.tableData.rows.map((row: any[], i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    {row.map((cell: any, j: number) => (
                      <td key={j} className="px-1.5 py-2 sm:p-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 break-words leading-tight"><TextContent enText={cell.en} mlText={cell.ml} /></td>
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
            <button 
              onClick={onBack}
              className="hidden lg:flex items-center gap-2 text-slate-500 hover:text-brand-primary dark:text-slate-400 dark:hover:text-white transition-colors mb-6 font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === 'en' ? 'Back to Chapters' : language === 'ml' ? 'തിരികെ പോവുക' : 'Back to Chapters'}
            </button>
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
          </div>

          {/* Tabs - Enhanced UI */}
          <div className="sticky top-0 z-20 bg-brand-bg/80 dark:bg-slate-950/80 backdrop-blur-md -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 mb-8">
            <div className="flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('read')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none whitespace-nowrap ${activeTab === 'read' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              >
                <FileText className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'read' ? 'scale-110' : ''}`} />
                <span>
                  {language === 'en' ? 'Read' : language === 'ml' ? 'വായിക്കുക' : 'Read / വായിക്കുക'}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none whitespace-nowrap ${activeTab === 'video' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              >
                <PlayCircle className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'video' ? 'scale-110' : ''}`} />
                <span>
                  {language === 'en' ? 'Video' : language === 'ml' ? 'വീഡിയോ' : 'Video / വീഡിയോ'}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none whitespace-nowrap ${activeTab === 'quiz' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              >
                <HelpCircle className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'quiz' ? 'scale-110' : ''}`} />
                <span>
                  {language === 'en' ? 'Quiz' : language === 'ml' ? 'ക്വിസ്' : 'Quiz / ക്വിസ്'}
                </span>
              </button>
              {lesson.sample_questions && (
                <button
                  onClick={() => setActiveTab('sample_questions')}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none whitespace-nowrap ${activeTab === 'sample_questions' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                >
                  <HelpCircle className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'sample_questions' ? 'scale-110' : ''}`} />
                  <span>
                    {language === 'en' ? 'Questions' : language === 'ml' ? 'ചോദ്യങ്ങൾ' : 'Questions / ചോദ്യങ്ങൾ'}
                  </span>
                </button>
              )}
              {lesson.translation && (
                <button
                  onClick={() => setActiveTab('translation')}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none whitespace-nowrap ${activeTab === 'translation' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                >
                  <Volume2 className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'translation' ? 'scale-110' : ''}`} />
                  <span>
                    {language === 'en' ? 'Translation' : language === 'ml' ? 'വിവർത്തനം' : 'Translation / വിവർത്തനം'}
                  </span>
                </button>
              )}
              <button
                onClick={() => setActiveTab('glossary')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1 lg:hidden whitespace-nowrap ${activeTab === 'glossary' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              >
                <BookOpen className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'glossary' ? 'scale-110' : ''}`} />
                <span>
                  {renderInline(glossaryLabel)}
                </span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="pb-20">
            {activeTab === 'read' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Learning Objectives - Now inside Read tab */}
                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-brand-primary dark:text-white leading-tight">
                        {language === 'en' ? 'Learning Objectives' : language === 'ml' ? 'പഠന ലക്ഷ്യങ്ങൾ' : 'Learning Objectives / പഠന ലക്ഷ്യങ്ങൾ'}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">What you will learn in this chapter</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lesson.learning_objectives.map((lo: any, idx: number) => (
                      <li key={lo.id || idx} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl group hover:border-emerald-200 dark:hover:border-emerald-900 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">{renderInline(lo.text || lo)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {!lesson.content.blocks || lesson.content.blocks.length === 0 ? (
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <MarkdownContent 
                      enText={lesson.content.core?.en} 
                      mlText={lesson.content.core?.ml} 
                      arText={lesson.content.core?.ar} 
                    />
                  </div>
                ) : (
                  lesson.content.blocks.map((block: any, idx: number) => renderBlock(block, idx))
                )}
              </div>
            )}

            {activeTab === 'video' && (
              <div className="space-y-8">
                {lesson.videos && lesson.videos.length > 0 ? (
                  lesson.videos.map((video: any, idx: number) => (
                    <VideoPlayer key={idx} video={video} />
                  ))
                ) : (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-12 text-center border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <PlayCircle className="w-10 h-10 text-indigo-500/40" />
                    </div>
                    <h3 className="text-2xl font-black text-brand-primary dark:text-white mb-2">Video Tutorial Coming Soon</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto font-medium leading-relaxed">
                      We are currently preparing high-quality video lessons for this chapter. They will be available here soon!
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'quiz' && (
              <QuizView questions={lesson.quiz} language={language} quizId={lesson.id} />
            )}

            {activeTab === 'sample_questions' && lesson.sample_questions && (
              <div className="space-y-6">
                {lesson.sample_questions.map((q: any, i: number) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="text-xs font-black text-brand-teal uppercase tracking-widest mb-4">Question {i + 1}</div>
                    <div className="text-xl font-bold text-brand-primary dark:text-white mb-6">
                      <TextContent enText={q.question.en} mlText={q.question.ml} />
                    </div>
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Model Answer</div>
                      <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        <TextContent enText={q.answer.en} mlText={q.answer.ml} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'translation' && lesson.translation && (
              <div className="space-y-4">
                {lesson.translation.map((t: any, i: number) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden" dir="rtl">
                    <div className="text-3xl font-arabic text-slate-900 dark:text-white mb-4 leading-relaxed">{t.urdu}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-700" dir="ltr">
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Malayalam</div>
                        <div className="text-slate-700 dark:text-slate-300 font-medium">{t.ml}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">English</div>
                        <div className="text-slate-600 dark:text-slate-400">{t.en}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'glossary' && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  {renderInline(glossaryLabel)}
                </h3>
                <div className="space-y-6">
                  {lesson.glossary.map((item: any, i: number) => (
                    <div key={i} className="group">
                      <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-200 dark:bg-indigo-900" />
                        <TextContent enText={item.term.en} mlText={item.term.ml} arText={item.term.ar} className="inline" />
                      </div>
                      <div className="pl-3.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l border-slate-100 dark:border-slate-700 ml-0.5">
                        <TextContent enText={item.definition.en} mlText={item.definition.ml} arText={item.definition.ar} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Glossary Sidebar (Desktop) */}
      <div 
        style={{ width: sidebarWidth }}
        className="hidden lg:flex flex-col border-l border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 h-screen overflow-hidden"
      >
        {/* Resize Handle */}
        <div 
          onMouseDown={startResizing}
          className="absolute left-0 top-0 w-1 h-full cursor-col-resize hover:bg-brand-primary/20 transition-colors z-20"
        />
        
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest text-xs">{renderInline(glossaryLabel)}</h3>
          </div>
          <div className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500">
            {lesson.glossary.length} Items
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
          {lesson.glossary.map((item: any, i: number) => (
            <div key={i} className="group">
              <div className="font-black text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-200 dark:bg-indigo-900" />
                <TextContent enText={item.term.en} mlText={item.term.ml} arText={item.term.ar} className="inline" />
              </div>
              <div className="pl-3.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-slate-100 dark:border-slate-800 ml-0.5 group-hover:border-indigo-100 dark:group-hover:border-indigo-900 transition-colors">
                <TextContent enText={item.definition.en} mlText={item.definition.ml} arText={item.definition.ar} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
