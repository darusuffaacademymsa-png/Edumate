import { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet, useNavigate, useLocation, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Home, 
  BrainCircuit, 
  LogOut, 
  Globe, 
  Menu, 
  X, 
  ArrowLeft,
  Settings,
  LayoutDashboard,
  FileText,
  MessageSquare,
  ChevronRight,
  Sparkles,
  Palette,
  Type,
  Languages,
  Bell,
  Search,
  User,
  Download,
  Play,
  ChevronLeft,
  PanelLeftClose,
  PanelLeftOpen,
  Monitor,
  Calculator,
  Zap,
  FlaskConical,
  Leaf,
  Globe2,
  Map,
  BarChart3,
  Scale
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
import { Language } from '../../data/curriculum';
import ThemeToggle from '../ThemeToggle';
import TextSizeToggle from '../TextSizeToggle';
import { sslcCurriculum } from '../../data/curriculum';
import { plusOneCurriculum } from '../../data/plusone_curriculum';
import { darsCurriculum } from '../../data/dars_curriculum';

export default function DashboardLayout() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'appearance' | 'language' | 'account'>('appearance');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useOutletContext<{ language: Language, setLanguage: (l: Language) => void }>();

  const isSSLC = location.pathname.startsWith('/sslc');
  const isPlusOne = location.pathname.startsWith('/plusone');
  const isDars = location.pathname.startsWith('/dars');
  
  const curriculum = isPlusOne 
    ? plusOneCurriculum 
    : isDars 
      ? darsCurriculum 
      : sslcCurriculum;
      
  const currentClass = isPlusOne ? '11' : isDars ? 'Dars' : '10';

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;
    
    if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
      setIsHeaderVisible(false);
    } else if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
      setIsHeaderVisible(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

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

  const handleSelectSubject = (id: string) => {
    const basePath = isSSLC ? 'sslc' : isPlusOne ? 'plusone' : 'dars';
    navigate(`/${basePath}/${id}`);
  };

  const isDashboardHome = location.pathname === '/sslc' || location.pathname === '/plusone' || location.pathname === '/dars';

  return (
    <div 
      className="flex flex-col w-full h-screen bg-[#F8FAFC] dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300 pt-[env(safe-area-inset-top)] md:pt-0"
    >
      {/* Top Header (Desktop Only) */}
      <header className={`hidden md:flex fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-8 py-4 items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 z-30 transition-all duration-500 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full shadow-none'}`}>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white font-black shadow-lg shadow-brand-primary/20">W</div>
            <div>
              <span className="font-display text-xl font-black tracking-tighter text-brand-primary dark:text-white block leading-none">Wiselearn</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Class {currentClass}</span>
            </div>
          </div>

          <nav className="flex items-center gap-1">
            {[
              { id: 'home', icon: Home, label: 'Home', path: isSSLC ? '/sslc' : isPlusOne ? '/plusone' : '/dars', active: isDashboardHome },
              { id: 'mentor', icon: BrainCircuit, label: 'AI Mentor', path: '#', active: false },
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => item.path !== '#' && navigate(item.path)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${item.active ? 'bg-brand-primary/5 text-brand-primary dark:text-brand-accent' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
            
            {/* Subjects Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                <BookOpen className="w-4 h-4" />
                <span>Subjects</span>
                <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
                {curriculum.slice(0, 8).map(sub => {
                  const Icon = iconMap[sub.icon] || BookOpen;
                  return (
                    <button 
                      key={sub.id}
                      onClick={() => handleSelectSubject(sub.id)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group/item"
                    >
                      <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/10 text-brand-primary dark:text-brand-accent group-hover/item:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 text-left text-sm font-bold text-slate-600 dark:text-slate-300 group-hover/item:text-brand-primary">{renderInline(sub.title)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-slate-200 dark:border-slate-800">
            <TextSizeToggle />
            <ThemeToggle />
            <button onClick={cycleLanguage} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all hover:border-brand-primary">
              <Globe className="w-4 h-4 text-brand-primary" />
              <span>{getLanguageLabel()}</span>
            </button>
          </div>
          <button className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-800"></span>
          </button>
          <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white text-xs font-black shadow-lg shadow-brand-primary/20 cursor-pointer">
            JD
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden flex flex-col relative">
        <main 
          className="flex-1 overflow-y-auto pb-24 md:pb-8 pt-0 md:pt-24 scrollbar-hide"
          onScroll={handleScroll}
        >
          {/* Welcome Banner */}
          <AnimatePresence mode="wait">
            {isDashboardHome && (
              <motion.div 
                key="banner-home"
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="px-4 md:px-8 pt-6"
              >
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-primary to-brand-teal p-6 sm:p-10 text-white shadow-2xl shadow-brand-primary/20">
                  <div className="relative z-10 max-w-lg">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-widest mb-4">
                      <Sparkles className="w-3 h-3 text-brand-accent" />
                      Premium Plan
                    </div>
                    <h1 className="font-display text-2xl sm:text-4xl font-black mb-3 leading-tight">
                      Start your learning journey today!
                    </h1>
                    <p className="text-sm sm:text-base text-white/80 font-medium mb-6">
                      Access over 500+ chapters and interactive quizzes curated for {isSSLC ? 'SSLC' : isPlusOne ? 'Plus One' : 'Dars'} students.
                    </p>
                    <button 
                      onClick={() => navigate('/')}
                      className="px-6 py-3 rounded-xl bg-white text-brand-primary font-black text-sm shadow-xl shadow-black/10 active:scale-95 transition-transform flex items-center gap-2 group"
                    >
                      <span>Class {currentClass}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-48 h-48 -mr-12 -mb-12 bg-brand-accent/20 rounded-full blur-2xl" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div 
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-4 md:p-8"
            >
              <Outlet context={{ language, setLanguage, currentClass }} />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Improved Bottom Navigation (Mobile Only) */}
        <nav className={`fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 md:hidden flex justify-around items-center py-2 px-2 z-40 pb-[env(safe-area-inset-bottom)] transition-all duration-300 ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
          {[
            { id: 'home', icon: Home, label: 'Home', active: isDashboardHome && !isSettingsOpen, onClick: () => {
              navigate(isSSLC ? '/sslc' : isPlusOne ? '/plusone' : '/dars');
              setIsSettingsOpen(false);
            }},
            { id: 'mentor', icon: BrainCircuit, label: 'Mentor', active: false, onClick: () => {} },
            { id: 'notifications', icon: Bell, label: 'Alerts', active: false, onClick: () => {} },
            { id: 'profile', icon: User, label: 'Profile', active: isSettingsOpen, onClick: () => setIsSettingsOpen(true) },
          ].map(item => (
            <button 
              key={item.id}
              onClick={item.onClick}
              className={`flex flex-col items-center gap-1 py-1 px-2 transition-all ${item.active ? 'text-brand-primary dark:text-brand-accent scale-110' : 'text-slate-400'}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Tabbed Settings Modal for Mobile */}
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50 bg-white dark:bg-slate-900 flex flex-col md:hidden"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h2 className="text-xl font-black text-brand-primary dark:text-white">Profile & Settings</h2>
                <button onClick={() => setIsSettingsOpen(false)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex border-b border-slate-100 dark:border-slate-800">
                {[
                  { id: 'account', label: 'Profile', icon: User },
                  { id: 'appearance', label: 'Display', icon: Palette },
                  { id: 'language', label: 'Language', icon: Languages },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 py-4 flex flex-col items-center gap-1 border-b-2 transition-all ${activeTab === tab.id ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400'}`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === 'appearance' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <section>
                      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Color Theme</h3>
                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-3xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Palette className="w-5 h-5 text-brand-primary" />
                          <span className="font-bold">App Theme</span>
                        </div>
                        <ThemeToggle />
                      </div>
                    </section>
                    <section>
                      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Text Size</h3>
                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-3xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Type className="w-5 h-5 text-brand-primary" />
                          <span className="font-bold">Readability</span>
                        </div>
                        <TextSizeToggle />
                      </div>
                    </section>
                  </motion.div>
                )}

                {activeTab === 'language' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Preferred Language</h3>
                    <div className="space-y-2">
                      {['en', 'ml', 'ar', 'bilingual'].map((l) => (
                        <button
                          key={l}
                          onClick={() => setLanguage(l as Language)}
                          className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all ${language === l ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                        >
                          <span className="font-bold uppercase tracking-wider">{l === 'en' ? 'English' : l === 'ml' ? 'Malayalam' : l === 'ar' ? 'Arabic' : 'Bilingual'}</span>
                          {language === l && <Sparkles className="w-4 h-4" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'account' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-[2rem] flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-3xl bg-brand-primary flex items-center justify-center text-white text-3xl font-black mb-4 shadow-xl shadow-brand-primary/20">JD</div>
                      <h4 className="text-xl font-black text-brand-primary dark:text-white mb-1">Student User</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full">Class {currentClass} • Kerala Board</p>
                      
                      <div className="w-full space-y-2">
                        <button onClick={() => {
                          navigate('/');
                          setIsSettingsOpen(false);
                        }} className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-700 text-brand-primary dark:text-white font-black text-sm shadow-sm transition-all active:scale-95">
                          <LogOut className="w-5 h-5 text-rose-500" /> Switch Class
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-400 font-bold text-sm transition-all active:scale-95">
                          Logout Account
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
