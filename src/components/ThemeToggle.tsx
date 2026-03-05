import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const CurrentIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;

  return (
    <>
      {/* Mobile: Single cycling button */}
      <button
        onClick={cycleTheme}
        className="sm:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        title="Cycle Theme"
      >
        <CurrentIcon className="w-4 h-4" />
      </button>

      {/* Desktop: Full toggle */}
      <div className="hidden sm:flex items-center bg-white dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700 shadow-sm">
        <button
          onClick={() => setTheme('light')}
          className={`p-1.5 rounded-full transition-all ${theme === 'light' ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
          title="Light Mode"
        >
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`p-1.5 rounded-full transition-all ${theme === 'system' ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
          title="System Theme"
        >
          <Monitor className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`p-1.5 rounded-full transition-all ${theme === 'dark' ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
          title="Dark Mode"
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
