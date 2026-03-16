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
  ChevronRight,
  MessageCircle,
  Calculator,
  Zap,
  FlaskConical,
  Leaf,
  Globe2,
  Map,
  BarChart3,
  Scale,
  User
} from 'lucide-react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Language, Category } from '../../data/curriculum';
import ThemeToggle from '../../components/ThemeToggle';
import TextSizeToggle from '../../components/TextSizeToggle';
import { fetchCategoriesFromFirestore } from '../../utils/firestoreData';
import { useAuth } from '../../hooks/useAuth';

const iconMap: Record<string, any> = {
  GraduationCap, BookOpen, Layers, Target, Monitor, Languages, Star, TrendingUp, Award,
  Calculator, Zap, FlaskConical, Leaf, Globe2, Map, BarChart3, Scale
};

type Mode = 'School' | 'Degree' | 'PSC' | 'Net' | 'Dars';

export default function HomePage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useOutletContext<{ language: Language, setLanguage: (l: Language) => void }>();
  const [selectedMode, setSelectedMode] = useState<Mode>('School');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const { user, login, logout } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchCategoriesFromFirestore();
      if (data.length > 0) {
        setCategories(data);
      } else {
        // Fallback or initial data if Firestore is empty
        // This is where you'd put the default categories if needed
      }
      setLoading(false);
    }
    load();
  }, []);

  const modes: { id: Mode; icon: any; label: string }[] = [
    { id: 'School', icon: GraduationCap, label: 'School' },
    { id: 'Degree', icon: Layers, label: 'Degree' },
    { id: 'PSC', icon: Target, label: 'PSC' },
    { id: 'Net', icon: Monitor, label: 'NET' },
    { id: 'Dars', icon: BookOpen, label: 'Dars' },
  ];

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

  const items = categories.filter(c => c.mode === selectedMode);

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

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <div className="p-8 sm:p-12 text-center">
                <div className="w-20 h-20 bg-brand-primary/10 dark:bg-brand-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-brand-primary dark:text-brand-accent" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Welcome Back</h2>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-10">Sign in to sync your progress and access premium learning materials.</p>
                
                <button
                  onClick={() => { login(); setIsLoginModalOpen(false); }}
                  className="w-full flex items-center justify-center gap-4 p-5 bg-[#1E293B] dark:bg-white text-white dark:text-[#1E293B] rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none mb-4"
                >
                  <Globe className="w-5 h-5" />
                  Continue with Google
                </button>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secure OAuth 2.0 Encryption</p>
              </div>
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
            {user?.isAdmin && (
              <button 
                onClick={() => navigate('/admin')}
                className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:scale-105 transition-all shadow-sm border border-amber-100 dark:border-amber-800/50"
                title="Admin Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
          </div>

          <button
            onClick={cycleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 text-xs font-black border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all shadow-sm uppercase tracking-wider"
          >
            <Globe className="w-3.5 h-3.5 text-brand-primary dark:text-brand-accent" />
            <span>{getLanguageLabel()}</span>
          </button>

          {user ? (
            <div className="flex items-center gap-3 pl-1 group cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black text-slate-900 dark:text-white leading-none mb-0.5">{user.displayName || 'User'}</p>
                <p className="text-[8px] font-black text-brand-primary dark:text-brand-accent uppercase tracking-tighter">{user.isAdmin ? 'Admin' : 'Student'}</p>
              </div>
              <div className="relative">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-2 border-white dark:border-slate-800 shadow-lg" />
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-brand-primary flex items-center justify-center text-white text-[10px] font-black shadow-md uppercase">
                    {user.displayName?.substring(0, 2) || 'US'}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-[11px] font-black uppercase tracking-[0.15em] hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          )}

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
              placeholder={language === 'en' ? "Search classes, subjects..." : "ക്ലാസുകൾ, विषयों തിരയുക..."}
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
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
               {[1,2,3,4,5].map(i => <div key={i} className="h-48 rounded-3xl bg-slate-100 dark:bg-slate-900 animate-pulse" />)}
            </div>
          ) : (
            <motion.div
              key={selectedMode}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {items.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                  {items.map((c: Category, i: number) => {
                    const col = colorMap[c.color] || colorMap.blue;
                    const Icon = iconMap[c.icon] || BookOpen;
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
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${col.accent} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${col.text}`} />
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
          )}
        </AnimatePresence>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="px-4 py-10 sm:py-12 text-center border-t border-slate-100 dark:border-slate-900 space-y-5">
        <a
          href="https://wa.me/917902520097"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/35 active:scale-[.98]"
        >
          <MessageCircle className="w-5 h-5" />
          Contact Us
        </a>
        <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">Wiselearn Education • 2026</p>
      </footer>
    </div>
  );
}
