import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Language } from './data/curriculum';
import { ThemeProvider } from './components/ThemeProvider';
import { TextSizeProvider } from './components/TextSizeProvider';

export default function App() {
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
        <Outlet context={{ language, setLanguage }} />
      </TextSizeProvider>
    </ThemeProvider>
  );
}
