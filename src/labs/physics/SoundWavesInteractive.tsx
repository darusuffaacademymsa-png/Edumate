import { useState, useEffect } from 'react';
import { Volume2, Activity, Info, Play, Pause, RefreshCw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../../data/curriculum';

export default function SoundWavesInteractive({ language }: { language: Language }) {
  const [frequency, setFrequency] = useState(2);
  const [amplitude, setAmplitude] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const generateData = () => {
      const newData = [];
      for (let x = 0; x <= 100; x++) {
        const y = amplitude * Math.sin((x / 10) * frequency);
        newData.push({ x, y });
      }
      setData(newData);
    };

    generateData();
  }, [frequency, amplitude]);

  const t = {
    title: { en: 'Sound Wave Visualization', ml: 'ശബ്ദ തരംഗ ദൃശ്യവൽക്കരണം' },
    freq: { en: 'Frequency', ml: 'ആവൃത്തി' },
    amp: { en: 'Amplitude', ml: 'ആയതി' },
    tuningFork: { en: 'Tuning Fork Experiment', ml: 'ട്യൂണിംഗ് ഫോർക്ക് പരീക്ഷണം' },
    resonance: { en: 'Resonance', ml: 'അനുനാദം' },
    vibrate: { en: 'Vibrate', ml: 'കമ്പനം ചെയ്യുക' },
    stop: { en: 'Stop', ml: 'നിർത്തുക' }
  };

  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-700">
        <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          <Volume2 className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-brand-primary dark:text-white">{renderInline(t.title)}</h3>
          <p className="text-slate-500 dark:text-slate-400 font-semibold mt-1">
            {language === 'en' ? 'Adjust parameters to see how sound waves change.' : 'ശബ്ദ തരംഗങ്ങൾ എങ്ങനെ മാറുന്നു എന്ന് കാണാൻ പാരാമീറ്ററുകൾ ക്രമീകരിക്കുക.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <label className="font-bold text-slate-700 dark:text-slate-300">{renderInline(t.freq)}</label>
              <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-lg font-mono font-bold">{frequency} Hz</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="0.5"
              value={frequency} 
              onChange={(e) => setFrequency(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <label className="font-bold text-slate-700 dark:text-slate-300">{renderInline(t.amp)}</label>
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-lg font-mono font-bold">{amplitude}</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              value={amplitude} 
              onChange={(e) => setAmplitude(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>Soft</span>
              <span>Loud</span>
            </div>
          </div>

          <div className="bg-indigo-600 dark:bg-indigo-500 p-6 rounded-2xl text-white shadow-lg shadow-indigo-200 dark:shadow-none">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Info className="w-4 h-4" />
              {language === 'en' ? 'Did you know?' : 'നിങ്ങൾക്കറിയാമോ?'}
            </h4>
            <p className="text-sm text-indigo-50 opacity-90 leading-relaxed">
              {language === 'en' 
                ? 'Frequency determines the pitch of the sound, while amplitude determines the loudness.' 
                : 'ആവൃത്തി ശബ്ദത്തിന്റെ പിച്ച് (pitch) നിർണ്ണയിക്കുന്നു, അതേസമയം ആയതി ശബ്ദത്തിന്റെ ഉച്ചത (loudness) നിർണ്ണയിക്കുന്നു.'}
            </p>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 h-[300px] relative overflow-hidden">
            <div className="absolute top-4 left-6 flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest">
              <Activity className="w-4 h-4 animate-pulse" />
              Waveform Analysis
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="x" hide />
                <YAxis domain={[-100, 100]} hide />
                <Line 
                  type="monotone" 
                  dataKey="y" 
                  stroke="#6366f1" 
                  strokeWidth={3} 
                  dot={false} 
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Tuning Fork Animation */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-indigo-500" />
              {renderInline(t.tuningFork)}
            </h4>
            
            <div className="flex flex-col md:flex-row items-center justify-around gap-12 py-8">
              <div className="relative flex flex-col items-center">
                <motion.div 
                  animate={isPlaying ? { x: [-2, 2, -2] } : {}}
                  transition={{ repeat: Infinity, duration: 0.1 }}
                  className="w-12 h-32 border-4 border-slate-400 dark:border-slate-600 rounded-t-full border-b-0 relative"
                >
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4 h-12 bg-slate-400 dark:border-slate-600"></div>
                </motion.div>
                <div className="mt-16 text-xs font-bold text-slate-500 uppercase tracking-widest">Fork A (256 Hz)</div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'}`}
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
                <div className="text-sm font-bold text-slate-600 dark:text-slate-400">
                  {isPlaying ? renderInline(t.stop) : renderInline(t.vibrate)}
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <motion.div 
                  animate={isPlaying ? { x: [-2, 2, -2] } : {}}
                  transition={{ repeat: Infinity, duration: 0.1, delay: 0.2 }}
                  className="w-12 h-32 border-4 border-slate-400 dark:border-slate-600 rounded-t-full border-b-0 relative"
                >
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4 h-12 bg-slate-400 dark:border-slate-600"></div>
                </motion.div>
                <div className="mt-16 text-xs font-bold text-slate-500 uppercase tracking-widest">Fork B (256 Hz)</div>
                
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-8 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter"
                    >
                      {renderInline(t.resonance)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
