import { useState } from 'react';
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
  ChevronRight,
  MessageCircle
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

  const modes: { id: Mode; icon: any; label: string }[] = [
    { id: 'School', icon: GraduationCap, label: 'School' },
    { id: 'Degree', icon: Layers, label: 'Degree' },
    { id: 'PSC', icon: Target, label: 'PSC' },
    { id: 'Net', icon: Monitor, label: 'NET' },
    { id: 'Dars', icon: BookOpen, label: 'Dars' },
  ];

  const schoolClasses = [
    { id: '8', name: 'Class 8', active: false, icon: BookOpen, color: 'blue', students: '12k', lessons: 45 },
    { id: '9', name: 'Class 9', active: false, icon: Sparkles, color: 'purple', students: '15k', lessons: 52 },
    { id: '10', name: 'Class 10\n(SSLC)', active: true, icon: Star, color: 'amber', students: '45k', lessons: 124, path: '/sslc' },
    { id: '11', name: 'Class 11\n(+1)', active: true, icon: TrendingUp, color: 'emerald', students: '28k', lessons: 98, path: '/plusone' },
    { id: '12', name: 'Class 12\n(+2)', active: false, icon: Award, color: 'rose', students: '30k', lessons: 110 },
  ];

  const darsBooks = [
    { id: 'meezan', name: 'Meezan\nميزان', active: true, icon: Languages, color: 'teal', students: '2k', lessons: 40, path: '/dars' },
    { id: 'ajnaas', name: 'Ajnaas\nأجناس', active: false, icon: BookOpen, color: 'cyan', students: '1k', lessons: 30 },
  ];

  const degreeUniversities = [
    { id: 'sgou', name: 'SGOU', active: false, icon: GraduationCap, color: 'indigo', students: '5k', lessons: 20 },
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
    if (language === 'en') return 'EN';
    if (language === 'ml') return 'ML';
    if (language === 'ar') return 'AR';
    return 'BI';
  };

  const colorMap: Record<string, { bg: string; text: string; accent: string; glow: string }> = {
    blue:    { bg: 'bg-blue-500',    text: 'text-blue-500',    accent: 'bg-blue-50 dark:bg-blue-950/40',    glow: 'shadow-blue-500/20' },
    purple:  { bg: 'bg-purple-500',  text: 'text-purple-500',  accent: 'bg-purple-50 dark:bg-purple-950/40', glow: 'shadow-purple-500/20' },
    amber:   { bg: 'bg-amber-500',   text: 'text-amber-500',   accent: 'bg-amber-50 dark:bg-amber-950/40',   glow: 'shadow-amber-500/20' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', accent: 'bg-emerald-50 dark:bg-emerald-950/40', glow: 'shadow-emerald-500/20' },
    rose:    { bg: 'bg-rose-500',    text: 'text-rose-500',    accent: 'bg-rose-50 dark:bg-rose-950/40',     glow: 'shadow-rose-500/20' },
    indigo:  { bg: 'bg-indigo-500',  text: 'text-indigo-500',  accent: 'bg-indigo-50 dark:bg-indigo-950/40', glow: 'shadow-indigo-500/20' },
    cyan:    { bg: 'bg-cyan-500',    text: 'text-cyan-500',    accent: 'bg-cyan-50 dark:bg-cyan-950/40',     glow: 'shadow-cyan-500/20' },
    teal:    { bg: 'bg-teal-500',    text: 'text-teal-500',    accent: 'bg-teal-50 dark:bg-teal-950/40',     glow: 'shadow-teal-500/20' },
  };

  const items = getModeItems();

  return (
    <div className="min-h-screen bg-[#FDFDFF] dark:bg-[#020617] flex flex-col font-sans text-slate-900 dark:text-slate-100 transition-colors duration-500 relative overflow-x-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] rounded-full bg-brand-primary/5 blur-[100px] dark:bg-brand-primary/10" />
        <div className="absolute top-[30%] -right-[10%] w-[45%] h-[45%] rounded-full bg-brand-teal/5 blur-[100px] dark:bg-brand-teal/10" />
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Settings Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isSidebarOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 22, stiffness: 200 }}
        className="fixed inset-y-0 right-0 z-50 w-72 sm:w-80 bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 lg:hidden flex flex-col"
      >
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-primary dark:bg-brand-accent flex items-center justify-center shadow-lg">
              <Settings className="w-4 h-4 text-white dark:text-brand-primary" />
            </div>
            <h2 className="font-black text-base tracking-tight">Settings</h2>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-7">
          <section className="space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Appearance</h3>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <span className="font-bold text-sm">Theme</span>
                <ThemeToggle />
              </div>
              <div className="flex flex-col gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <span className="font-bold text-sm">Text Size</span>
                <TextSizeToggle />
              </div>
            </div>
          </section>
          <section className="space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Language</h3>
            <div className="grid grid-cols-2 gap-2">
              {(['en', 'ml', 'ar', 'bilingual'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`p-3 rounded-xl text-sm font-black transition-all ${language === l ? 'bg-brand-primary text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`}
                >
                  {l === 'en' ? 'English' : l === 'ml' ? 'മലയാളം' : l === 'ar' ? 'Normal' : 'Bilingual'}
                </button>
              ))}
            </div>
          </section>
        </div>
      </motion.div>

      {/* ===== HEADER ===== */}
      <header className="px-4 sm:px-8 lg:px-12 py-4 flex justify-between items-center z-30 sticky top-0 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50">
        <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1E293B] dark:bg-brand-accent rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent dark:text-brand-primary" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">Wiselearn</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-2 pr-3 border-r border-slate-200 dark:border-slate-800">
            <TextSizeToggle />
            <ThemeToggle />
          </div>
          <button
            onClick={cycleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 text-xs font-black border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all shadow-sm uppercase tracking-wider"
          >
            <Globe className="w-3.5 h-3.5 text-brand-primary dark:text-brand-accent" />
            <span>{getLanguageLabel()}</span>
          </button>
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 z-10 relative">

        {/* Hero */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 3 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#1E293B] dark:bg-brand-accent rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center shadow-2xl mx-auto mb-6 sm:mb-8"
          >
            <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-brand-accent dark:text-brand-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-3"
          >
            {language === 'en' ? 'Select your goal' : 'നിങ്ങളുടെ ലക്ഷ്യം തിരഞ്ഞെടുക്കുക'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-8"
          >
            {language === 'en' ? 'Start your specialised learning journey' : 'നിങ്ങളുടെ പഠനം ഇന്നുതന്നെ ആരംഭിക്കൂ'}
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="max-w-xl sm:max-w-2xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-4 sm:left-5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder={language === 'en' ? "Search classes, subjects..." : "ക്ലാസുകൾ, വിഷയങ്ങൾ തിരയുക..."}
              className="w-full py-4 sm:py-5 pl-11 sm:pl-14 pr-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none text-sm font-bold focus:ring-2 focus:ring-brand-primary transition-all outline-none"
            />
          </motion.div>
        </div>

        {/* ===== Mode Selector ===== */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {modes.map((mode, i) => {
            const isActive = selectedMode === mode.id;
            return (
              <motion.button
                key={mode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.25 }}
                onClick={() => setSelectedMode(mode.id)}
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 transition-all duration-200 whitespace-nowrap font-black text-[10px] sm:text-xs uppercase tracking-widest ${
                  isActive
                    ? 'bg-[#1E293B] text-white shadow-xl dark:bg-brand-accent dark:text-brand-primary scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-600 dark:hover:text-white border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:scale-[1.02]'
                }`}
              >
                <mode.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {mode.label}
              </motion.button>
            );
          })}
        </div>

        {/* ===== Cards Grid ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {items.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {items.map((c: any, i: number) => {
                  const col = colorMap[c.color] || colorMap.blue;
                  return (
                    <motion.button
                      key={c.id}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.22 }}
                      disabled={!c.active}
                      onClick={() => c.active && navigate(c.path)}
                      className={`group relative w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between border text-left ${
                        c.active
                          ? 'border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-brand-primary/20 dark:hover:border-brand-accent/30 cursor-pointer hover:-translate-y-1 active:scale-[.97]'
                          : 'border-slate-50 dark:border-slate-800 opacity-50 cursor-not-allowed grayscale'
                      }`}
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                          {/* Icon */}
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${col.accent} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                            <c.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${col.text}`} />
                          </div>
                          {c.active && (
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-[8px] sm:text-[9px] font-black uppercase tracking-wider border border-emerald-100/50">
                              Live
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base lg:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors whitespace-pre-line">
                            {c.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 mt-1.5">
                            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-slate-400">
                              <Book className="w-2.5 h-2.5" />
                              {c.lessons}
                            </div>
                            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-slate-400">
                              <Users className="w-2.5 h-2.5" />
                              {c.students}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-4 flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/60">
                        <span className="text-[8px] sm:text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                          {c.active ? 'Explore' : 'Soon'}
                        </span>
                        {c.active && (
                          <div className="w-6 h-6 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white dark:group-hover:bg-brand-accent dark:group-hover:text-brand-primary transition-all duration-300 group-hover:-rotate-45">
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-slate-300 dark:text-slate-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Coming Soon</h2>
                <p className="text-slate-400 dark:text-slate-600 mt-2 font-bold text-sm">{selectedMode} materials are under development.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="px-4 py-10 sm:py-12 text-center border-t border-slate-100 dark:border-slate-900 space-y-5">
        <a
          href="https://wa.me/917902520097"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/35 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Contact Us
        </a>
        <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">Wiselearn Education • 2026</p>
      </footer>
    </div>
  );
}
