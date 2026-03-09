import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Language } from './data/curriculum';
import { ThemeProvider } from './components/ThemeProvider';
import { TextSizeProvider } from './components/TextSizeProvider';

export default function App() {
  const [language, setLanguage] = useState<Language>('bilingual');

  return (
    <ThemeProvider>
      <TextSizeProvider>
        <Outlet context={{ language, setLanguage }} />
      </TextSizeProvider>
    </ThemeProvider>
  );
}
