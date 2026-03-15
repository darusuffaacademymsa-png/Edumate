import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './data/curriculum';
import { ThemeProvider } from './components/ThemeProvider';
import { TextSizeProvider } from './components/TextSizeProvider';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const location = useLocation();
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('edumate-language');
    return (saved as Language) || 'ml';
  });

  useEffect(() => {
    localStorage.setItem('edumate-language', language);
  }, [language]);

  return (
    <ThemeProvider>
      <TextSizeProvider>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname.split('/')[1] || '/'}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="min-h-screen bg-slate-50 dark:bg-slate-950 route-transition"
          >
            <Outlet context={{ language, setLanguage }} />
          </motion.div>
        </AnimatePresence>
      </TextSizeProvider>
    </ThemeProvider>
  );
}
