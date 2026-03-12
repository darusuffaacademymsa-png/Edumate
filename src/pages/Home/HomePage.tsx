import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  TrendingUp, 
  Star, 
  Award, 
  Target, 
  Monitor, 
  Languages, 
  ArrowRight,
  Sparkles,
  Users,
  Play,
  ArrowUpRight,
  CheckCircle2,
  Book,
  Menu,
  X,
  Search,
  Settings,
  ChevronRight
} from 'lucide-react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Language } from '../../data/curriculum';
import ThemeToggle from '../../components/ThemeToggle';
import TextSizeToggle from '../../components/TextSizeToggle';

type Mode = 'School' | 'Degree' | 'PG' | 'PSC' | 'Net' | 'Dars';

export default function HomePage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useOutletContext<{ language: Language, setLanguage: (l: Language) => void }>();
  const [selectedMode, setSelectedMode] = useState<Mode>('School');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const modes: { id: Mode; icon: any }[] = [
    { id: 'School', icon: GraduationCap },
    { id: 'Degree', icon: Layers },
    { id: 'PSC', icon: Target },
    { id: 'Net', icon: Monitor },
    { id: 'Dars', icon: BookOpen },
  ];

  const schoolClasses = [
    { id: '8', name: 'Class 8', active: false, icon: BookOpen, color: 'blue', students: '12k', lessons: 45 },
    { id: '9', name: 'Class 9', active: false, icon: Sparkles, color: 'purple', students: '15k', lessons: 52 },
    { id: '10', name: 'Class 10 (SSLC)', active: true, icon: Star, color: 'amber', students: '45k', lessons: 124, path: '/sslc' },
    { id: '11', name: 'Class 11 (+1)', active: true, icon: TrendingUp, color: 'emerald', students: '28k', lessons: 98, path: '/plusone' },
    { id: '12', name: 'Class 12 (+2)', active: false, icon: Award, color: 'rose', students: '30k', lessons: 110 },
  ];

  const darsBooks = [
    { id: 'meezan', name: 'Meezan/ ميزان', active: true, icon: Languages, color: 'teal', students: '2k', lessons: 40, path: '/dars' },
    { id: 'ajnaas', name: 'Ajnaas/ أجناس', active: false, icon: BookOpen, color: 'cyan', students: '1k', lessons: 30 },
  ];

  const degreeUniversities = [
    { id: 'sgou', name: 'SGOU University', active: false, icon: GraduationCap, color: 'indigo', students: '5k', lessons: 20 },
    { id: 'ignou', name: 'IGNOU', active: false, icon: Layers, color: 'blue', students: '10k', lessons: 25 },
  ];

  const getModeItems = () => {
    switch (selectedMode) {
      case 'School': return schoolClasses;
      case 'Dars': return darsBooks;
      case 'Degree': return degreeUniversities;
      default: return [];
    }
  };

  const cycleLanguage = () => {
    if (language === 'en') setLanguage('ml');
    else if (language === 'ml') setLanguage('ar');
    else if (language === 'ar') setLanguage('bilingual');
    else setLanguage('en');
  };

  const getLanguageLabel = () => {
    if (language === 'en') return 'English';
    if (language === 'ml') return 'മലയാളം';
    if (language === 'ar') return 'العربية';
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

  const items = getModeItems();

  return (
    <div className="min-h-screen bg-[#FDFDFF] dark:bg-[#020617] flex flex-col font-sans text-slate-900 dark:text-slate-100 transition-colors duration-500 relative overflow-x-hidden">
      {/* Premium Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-brand-primary/5 blur-[120px] dark:bg-brand-primary/10" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-teal/5 blur-[120px] dark:bg-brand-teal/10" />
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Settings Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-80 bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-l border-slate-200 dark:border-slate-800 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col`}>
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary dark:bg-brand-accent flex items-center justify-center shadow-lg">
              <Settings className="w-5 h-5 text-white dark:text-brand-primary" />
            </div>
            <h2 className="font-black text-lg tracking-tight">Settings</h2>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><X className="w-6 h-6" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <section className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Appearance</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-transparent"><span className="font-bold text-sm">Theme Mode</span><ThemeToggle /></div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-transparent"><span className="font-bold text-sm">Text Size</span><TextSizeToggle /></div>
            </div>
          </section>
          <section className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Language</h3>
            <button onClick={cycleLanguage} className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group border border-transparent hover:border-brand-primary/20">
              <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-brand-primary" /><span className="font-bold text-sm">{getLanguageLabel()}</span></div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </section>
        </div>
      </div>

      {/* Header */}
      <header className="px-6 py-5 sm:px-10 flex justify-between items-center z-50 sticky top-0 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
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
            <span>{getLanguageLabel()}</span>
          </button>
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 rounded-xl bg-slate-50 dark:bg-slate-900"><Menu className="w-6 h-6" /></button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-20 z-10 relative">
        <div className="text-center mb-16 space-y-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-[#1E293B] dark:bg-brand-accent rounded-[2.5rem] flex items-center justify-center shadow-2xl mx-auto mb-8 transform rotate-3"
          >
            <GraduationCap className="w-12 h-12 text-brand-accent dark:text-brand-primary" />
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            {language === 'en' ? 'Select your goal' : 'നിങ്ങളുടെ ലക്ഷ്യം തിരഞ്ഞെടുക്കുക'}
          </h1>
          <p className="text-sm sm:text-lg font-bold text-slate-400 uppercase tracking-[0.3em]">
            {language === 'en' ? 'Start your specialized learning journey' : 'നിങ്ങളുടെ പഠനം ഇന്നുതന്നെ ആരംഭിക്കൂ'}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative group mt-8"
          >
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder={language === 'en' ? "Search for classes, subjects..." : "ക്ലാസുകൾ, വിഷയങ്ങൾ തിരയുക..."}
              className="w-full py-5 pl-14 pr-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none text-sm font-bold focus:ring-2 focus:ring-brand-primary transition-all outline-none"
            />
          </motion.div>
        </div>

        {/* Premium Mode Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-8 no-scrollbar mb-12">
          {modes.map((mode) => {
            const isActive = selectedMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`relative px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 whitespace-nowrap font-black text-xs uppercase tracking-widest ${isActive ? 'bg-[#1E293B] text-white shadow-xl dark:bg-brand-accent dark:text-brand-primary' : 'bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-600 dark:hover:text-white border border-slate-100 dark:border-slate-800'}`}
              >
                <mode.icon className="w-4 h-4" />
                {mode.id}
              </button>
            );
          })}
        </div>

        {/* Dynamic Items List */}
        <div className="grid grid-cols-1 gap-4 w-full">
          <AnimatePresence mode="popLayout">
            {items.length > 0 ? (
              items.map((c: any) => {
                const colorInfo = getColorClasses(c.color);
                const colorBase = colorInfo.split(' ')[0];

                return (
                  <motion.button
                    key={c.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    disabled={!c.active}
                    onClick={() => c.active && navigate(c.path)}
                    className={`group relative w-full bg-white dark:bg-slate-900 rounded-[2rem] p-5 sm:p-6 transition-all duration-500 flex items-center justify-between border-2 ${
                      c.active 
                        ? 'border-transparent shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-brand-primary/20 dark:hover:border-brand-accent/20 cursor-pointer' 
                        : 'border-slate-50 dark:border-slate-800 opacity-60 cursor-not-allowed grayscale'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${colorBase} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colorBase} flex items-center justify-center text-white shadow-lg`}>
                          <c.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                      </div>
                      <div className="text-left space-y-1">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">{c.name}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                          <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Book className="w-3 h-3" />{c.lessons} Lessons</div>
                          <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Users className="w-3 h-3" />{c.students} Students</div>
                          {c.active && (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[8px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-900">Live</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {c.active ? (
                        <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-[#1E293B] group-hover:text-white dark:group-hover:bg-brand-accent dark:group-hover:text-brand-primary transition-all duration-300 shadow-inner">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      ) : (
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest hidden sm:block">Coming Soon</span>
                      )}
                    </div>
                  </motion.button>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] w-full border-2 border-dashed border-slate-200 dark:border-slate-800"
              >
                <h2 className="text-2xl font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Coming Soon</h2>
                <p className="text-slate-400 dark:text-slate-600 mt-2 font-bold">{selectedMode} materials are under development.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="p-12 text-center border-t border-slate-100 dark:border-slate-900">
        <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">Wiselearn Education • 2026</p>
      </footer>
    </div>
  );
}
