import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Square, Settings2 } from 'lucide-react';

export function PendulumSimulation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [length, setLength] = useState(1); // relative scale
  const [gravity, setGravity] = useState(9.8);
  const [duration, setDuration] = useState(2);

  // Period T = 2π√(L/g). Let's simulate that relative duration.
  // Base duration = 2s when L=1, g=9.8
  useEffect(() => {
    const calcDuration = 2 * Math.PI * Math.sqrt(length / gravity);
    // Scale duration for visual aesthetics (so it's not too fast/slow visually)
    setDuration(calcDuration * 1.5);
  }, [length, gravity]);

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 min-h-[450px]">
      
      {/* Controls Panel */}
      <div className="flex-1 flex flex-col p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
        <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-6">
          <Settings2 className="w-5 h-5 text-indigo-500" />
          Pendulum Controls
        </h3>

        <div className="space-y-6 flex-1">
          {/* Length Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-300">String Length (L)</label>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">{length.toFixed(1)} m</span>
            </div>
            <input 
              type="range" 
              min="0.5" max="2" step="0.1" 
              value={length} 
              onChange={(e) => setLength(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-xs text-slate-500 mt-2">Increasing length increases the period and decreases frequency.</p>
          </div>

          {/* Gravity Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Gravity (g)</label>
              <span className="text-rose-600 dark:text-rose-400 font-mono text-sm">{gravity.toFixed(1)} m/s²</span>
            </div>
            <input 
              type="range" 
              min="1.6" max="25" step="0.1" 
              value={gravity} 
              onChange={(e) => setGravity(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />
            <div className="flex justify-between mt-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <span>Moon (1.6)</span>
              <span>Earth (9.8)</span>
              <span>Jupiter (24.7)</span>
            </div>
          </div>
          
          {/* Stats Readout */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-black tracking-widest">Period (T)</span>
                <span className="text-xl font-bold text-slate-700 dark:text-slate-200 font-mono">{(2 * Math.PI * Math.sqrt(length / gravity)).toFixed(2)}s</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-black tracking-widest">Frequency (f)</span>
                <span className="text-xl font-bold text-brand-teal font-mono">{(1 / (2 * Math.PI * Math.sqrt(length / gravity))).toFixed(2)}Hz</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className={`mt-6 w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${isPlaying ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30'}`}
        >
          {isPlaying ? <><Square className="w-4 h-4" /> Pause Animation</> : <><Play className="w-4 h-4" /> Start Animation</>}
        </button>
      </div>

      {/* Animation Area */}
      <div className="flex-1 relative flex items-start justify-center pt-10 min-h-[300px]">
        {/* Support Base */}
        <div className="absolute top-8 w-40 h-2 bg-slate-800 dark:bg-slate-500 rounded-full z-10 shadow-lg"></div>
        
        {/* Pendulum */}
        <motion.div
          className="relative origin-top"
          animate={{ rotate: isPlaying ? [25, -25, 25] : 0 }}
          transition={isPlaying ? {
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut"
          } : { type: "spring" }}
          style={{ height: `${length * 120}px` }} // scale visually
        >
          <div className="w-1 bg-slate-400 dark:bg-slate-600 h-full mx-auto" />
          <div className="absolute -bottom-4 left-1/2 -ml-4 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-xl border-2 border-indigo-200 dark:border-indigo-800 flex items-center justify-center z-20">
            <div className="w-2 h-2 bg-white/50 rounded-full absolute top-1.5 left-1.5"></div>
          </div>
        </motion.div>

        {/* Equilibrium Guide */}
        <div className="absolute top-10 bottom-10 left-1/2 w-[1px] border-l border-dashed border-slate-300 dark:border-slate-700 -z-10"></div>
      </div>
    </div>
  );
}
