import React from 'react';
import { Type } from 'lucide-react';
import { useTextSize } from './TextSizeProvider';

export default function TextSizeToggle() {
  const { textSize, setTextSize } = useTextSize();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSize(Number(e.target.value));
  };

  return (
    <div className="flex items-center gap-3 w-full sm:w-auto px-4 py-2 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-full border border-slate-200 dark:border-slate-700 shadow-sm group">
      <Type className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors flex-shrink-0" />
      
      <div className="flex flex-col w-full sm:w-32 min-w-[80px]">
        <input 
          type="range" 
          min="8" 
          max="48" 
          step="1"
          value={textSize}
          onChange={handleSliderChange}
          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-primary dark:accent-brand-accent hover:accent-brand-primary/80 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          title={`Text Size: ${textSize}px`}
          aria-label="Adjust text size"
        />
        <div className="flex justify-between items-center mt-1 px-1">
          <span className="text-[8px] font-black text-slate-400">8</span>
          <span className="text-[10px] font-bold text-brand-primary dark:text-brand-accent">{textSize}px</span>
          <span className="text-[8px] font-black text-slate-400">48</span>
        </div>
      </div>
      
      <Type className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors flex-shrink-0" />
    </div>
  );
}

