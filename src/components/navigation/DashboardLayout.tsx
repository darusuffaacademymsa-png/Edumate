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
  ChevronRight,
  Sparkles,
  Palette,
  Type,
  Languages,
  Bell,
  User,
  PanelLeftClose,
  PanelLeftOpen,
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
  Calculator, Zap, FlaskConical, Leaf, Globe2, Map, BarChart3, Scale, Languages, BookOpen
};

import { Language } from '../../data/curriculum';
import ThemeToggle from '../ThemeToggle';
import TextSizeToggle from '../TextSizeToggle';
import { useCurriculum } from '../../hooks/useCurriculum';
import { useAuth } from '../../hooks/useAuth';

export default function DashboardLayout() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'appearance' | 'language' | 'account'>('appearance');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // desktop sidebar state
  const lastScrollY = useRef(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useOutletContext<{ language: Language, setLanguage: (l: Language) => void }>();
  const { user, login } = useAuth();

  const isSSLC = location.pathname.startsWith('/sslc');
  const isPlusOne = location.pathname.startsWith('/plusone');
  const isDars = location.pathname.startsWith('/dars');
  
  const curriculumType = isPlusOne ? 'plusone' : isDars ? 'dars' : 'sslc';
  const { subjects: curriculum } = useCurriculum(curriculumType);
  const currentClass = isPlusOne ? '11' : isDars ? 'Dars' : '10';
  const basePath = isSSLC ? 'sslc' : isPlusOne ? 'plusone' : 'dars';

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
    if (language === 'en') return 'EN';
    if (language === 'ml') return 'ML';
    if (language === 'ar') return 'AR';
    return 'BI';
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

  const handleSelectSubject = (id: string) => {
    navigate(`/${basePath}/${id}`);
  };

  const isDashboardHome = location.pathname === '/sslc' || location.pathname === '/plusone' || location.pathname === '/dars';
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTo(0, 0);
  }, [location.pathname]);

  // Active subject for sidebar highlight
  const activeSubjectId = location.pathname.split('/')[2];

  return (
    <div className="flex flex-col w-full h-screen bg-[#F8FAFC] dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300 pt-[env(safe-area-inset-top)] md:pt-0">

      {/* ===== TOP HEADER ===== */}
      <header className={`hidden md:flex fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-4 lg:px-6 py-3 items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 z-30 transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center gap-3">
          {/* Sidebar toggle */}
          <button
            onClick={() => setIsSidebarOpen(v => !v)}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-slate-500"
            title={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {isSidebarOpen
              ? <PanelLeftClose className="w-5 h-5" />
              : <PanelLeftOpen className="w-5 h-5" />
            }
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-black shadow-md text-sm">W</div>
            <div>
              <span className="font-display text-base font-black tracking-tighter text-brand-primary dark:text-white block leading-none">Wiselearn</span>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Class {currentClass}</span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-1 ml-2">
            <button
              onClick={() => navigate(`/${basePath}`)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${isDashboardHome ? 'bg-brand-primary/8 text-brand-primary dark:text-brand-accent' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            {user?.isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-all"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>
            )}
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-not-allowed opacity-60">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>AI Mentor</span>
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 pr-3 border-r border-slate-200 dark:border-slate-800">
            <TextSizeToggle />
            <ThemeToggle />
            <button
              onClick={cycleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-black uppercase tracking-wider transition-all hover:border-brand-primary"
            >
              <Globe className="w-3.5 h-3.5 text-brand-primary dark:text-brand-accent" />
              {getLanguageLabel()}
            </button>
          </div>
          <button className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
          </button>
          
          {user ? (
            <div className="flex items-center gap-3 ml-1 group cursor-pointer" onClick={() => setIsSettingsOpen(true)}>
              <div className="text-right hidden lg:block">
                <p className="text-[10px] font-black text-slate-900 dark:text-white leading-none mb-0.5">{user.displayName || 'User'}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Student</p>
              </div>
              {user.photoURL ? (
                <img src={user.photoURL} alt="User" className="w-9 h-9 rounded-xl border-2 border-white dark:border-slate-800 shadow-sm" />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-brand-primary flex items-center justify-center text-white text-[10px] font-black shadow-md uppercase">
                  {user.displayName?.substring(0, 2) || 'US'}
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={login}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
            >
              <User className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>
          )}
        </div>
      </header>

      {/* ===== BODY (sidebar + content) ===== */}
      <div className="flex flex-1 overflow-hidden md:pt-[57px]">

        {/* ===== DESKTOP SIDEBAR ===== */}
        <AnimatePresence initial={false}>
          {isSidebarOpen && (
            <motion.aside
              key="desktop-sidebar"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden md:flex flex-col flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200/60 dark:border-slate-800 overflow-hidden"
            >
              <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
                {/* Section header */}
                <div className="px-4 mb-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subjects</span>
                </div>

                {/* Subject list */}
                <nav className="px-2 space-y-0.5">
                  {/* Home link */}
                  <button
                    onClick={() => navigate(`/${basePath}`)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      isDashboardHome
                        ? 'bg-brand-primary text-white shadow-sm'
                        : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-brand-primary'
                    }`}
                  >
                    <Home className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">All Subjects</span>
                  </button>

                  {curriculum.map((sub) => {
                    const Icon = iconMap[sub.icon] || BookOpen;
                    const isActive = activeSubjectId === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleSelectSubject(sub.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-all group ${
                          isActive
                            ? 'bg-brand-primary/8 text-brand-primary dark:text-brand-accent border border-brand-primary/15 dark:border-brand-accent/15'
                            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-brand-primary dark:hover:text-brand-accent'
                        }`}
                      >
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-brand-primary dark:text-brand-accent' : 'text-slate-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent'}`} />
                        <span className="truncate text-left">{renderInline(sub.title)}</span>
                        {isActive && <ChevronRight className="w-3 h-3 ml-auto flex-shrink-0" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar footer */}
              <div className="p-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => navigate('/')}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-rose-500 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Switch Class</span>
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* ===== MAIN CONTENT ===== */}
        <main
          ref={mainRef}
          className="flex-1 overflow-y-auto pb-24 md:pb-8 scrollbar-hide"
          onScroll={handleScroll}
        >
          {/* Welcome Banner */}
          <AnimatePresence mode="wait">
            {isDashboardHome && (
              <motion.div
                key="banner-home"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="px-4 md:px-6 lg:px-8 pt-5 sm:pt-6"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-brand-primary to-brand-teal p-5 sm:p-8 lg:p-10 text-white shadow-2xl shadow-brand-primary/20">
                  <div className="relative z-10 max-w-lg">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-3 sm:mb-4">
                      <Sparkles className="w-3 h-3 text-brand-accent" />
                      Premium Plan
                    </div>
                    <h1 className="font-display text-xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 leading-tight">
                      Start your learning journey today!
                    </h1>
                    <p className="text-sm sm:text-base text-white/80 font-medium mb-4 sm:mb-6">
                      Access 500+ chapters and interactive quizzes curated for {isSSLC ? 'SSLC' : isPlusOne ? 'Plus One' : 'Dars'} students.
                    </p>
                    <button
                      onClick={() => navigate('/')}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white text-brand-primary font-black text-sm shadow-xl flex items-center gap-2 group active:scale-95 transition-transform"
                    >
                      <span>Class {currentClass}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 bg-white/10 rounded-full blur-3xl" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Content */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.995 }}
              transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-4 md:p-6 lg:p-8 route-transition"
            >
              <Outlet context={{ language, setLanguage, currentClass }} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <nav className={`fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 md:hidden flex justify-around items-center py-2 px-4 z-40 pb-[env(safe-area-inset-bottom)] transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        {[
          {
            id: 'home', icon: Home, label: 'Home',
            active: isDashboardHome && !isSettingsOpen,
            onClick: () => { navigate(`/${basePath}`); setIsSettingsOpen(false); }
          },
          { id: 'mentor', icon: BrainCircuit, label: 'Mentor', active: false, onClick: () => {} },
          { id: 'alerts', icon: Bell, label: 'Alerts', active: false, onClick: () => {} },
          {
            id: 'account', icon: User, label: 'Profile',
            active: isSettingsOpen,
            onClick: () => setIsSettingsOpen(true)
          },
        ].map(item => (
          <button
            key={item.id}
            onClick={item.onClick}
            className={`flex flex-col items-center gap-1 py-1 px-4 min-w-[60px] transition-all ${item.active ? 'text-brand-primary dark:text-brand-accent scale-110' : 'text-slate-400'}`}
          >
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* ===== MOBILE SETTINGS SHEET ===== */}
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-0 z-50 bg-white dark:bg-slate-900 flex flex-col md:hidden"
          >
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-lg font-black text-brand-primary dark:text-white">Profile & Settings</h2>
              <button onClick={() => setIsSettingsOpen(false)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                <X className="w-5 h-5" />
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
                  className={`flex-1 py-3.5 flex flex-col items-center gap-1 border-b-2 transition-all ${activeTab === tab.id ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400'}`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-[9px] font-black uppercase tracking-widest">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {activeTab === 'appearance' && (
                <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <section>
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Color Theme</h3>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Palette className="w-5 h-5 text-brand-primary" />
                        <span className="font-bold text-sm">App Theme</span>
                      </div>
                      <ThemeToggle />
                    </div>
                  </section>
                  <section>
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Text Size</h3>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Type className="w-5 h-5 text-brand-primary" />
                        <span className="font-bold text-sm">Readability</span>
                      </div>
                      <TextSizeToggle />
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'language' && (
                <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Preferred Language</h3>
                  {(['en', 'ml', 'ar', 'bilingual'] as Language[]).map(l => (
                    <button
                      key={l}
                      onClick={() => setLanguage(l)}
                      className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all ${language === l ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                    >
                      <span className="font-bold text-sm">{l === 'en' ? 'English' : l === 'ml' ? 'Malayalam' : l === 'ar' ? 'Normal' : 'Bilingual'}</span>
                      {language === l && <Sparkles className="w-4 h-4" />}
                    </button>
                  ))}
                </motion.div>
              )}

              {activeTab === 'account' && (
                <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  {user ? (
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-3xl overflow-hidden mb-4 shadow-xl">
                        {user.photoURL ? (
                          <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-brand-primary flex items-center justify-center text-white text-3xl font-black">
                            {user.displayName?.substring(0, 2) || 'US'}
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl font-black text-brand-primary dark:text-white mb-1">{user.displayName || 'Student User'}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full">
                        {user.isAdmin ? 'Admin' : 'Student'} • Kerala Board
                      </p>
                      <div className="w-full space-y-2">
                        <button
                          onClick={() => { navigate('/'); setIsSettingsOpen(false); }}
                          className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-700 text-brand-primary dark:text-white font-black text-sm active:scale-95 transition-all"
                        >
                          <Home className="w-5 h-5" />
                          Home
                        </button>
                        <button 
                          onClick={() => { logout(); setIsSettingsOpen(false); }}
                          className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30 text-rose-500 font-bold text-sm active:scale-95 transition-all"
                        >
                          <LogOut className="w-5 h-5" />
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-3xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 mb-4">
                        <User className="w-10 h-10" />
                      </div>
                      <h4 className="text-xl font-black text-brand-primary dark:text-white mb-2">Not Logged In</h4>
                      <p className="text-sm text-slate-500 mb-6">Login to sync your progress across devices.</p>
                      <button
                        onClick={login}
                        className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-brand-primary text-white font-black text-sm shadow-xl shadow-brand-primary/20 active:scale-95 transition-all"
                      >
                        <User className="w-5 h-5" />
                        Login with Google
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
