import React, { createContext, useContext, useEffect, useState } from 'react';

export type TextSize = number;

interface TextSizeContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export function TextSizeProvider({ children }: { children: React.ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>(() => {
    const savedSize = localStorage.getItem('textSize');
    if (savedSize) {
      const parsed = parseInt(savedSize, 10);
      if (!isNaN(parsed) && parsed >= 8 && parsed <= 48) {
        return parsed;
      }
    }
    return 16; // Default size
  });

  useEffect(() => {
    localStorage.setItem('textSize', textSize.toString());
    
    // Scale root element font-size, which influences all 'rem' units in Tailwind
    // Default Tailwind styling generally assumes 16px root font size (1rem = 16px).
    // By dynamically tweaking the root font-size percentage based on exactly what size the user picks vs 16,
    // we make everything proportionately responsive and beautiful.
    const root = window.document.documentElement;
    
    // Fallback: Remove old discrete classes just in case they're lingering from a previous cache
    root.classList.remove('text-size-normal', 'text-size-large', 'text-size-xlarge');
    
    // Apply new fluid style scale
    // e.g. text size 24px => (24 / 16) * 100% = 150% root font size
    const percentage = (textSize / 16) * 100;
    root.style.fontSize = `${percentage}%`;
  }, [textSize]);

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const context = useContext(TextSizeContext);
  if (context === undefined) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
}
