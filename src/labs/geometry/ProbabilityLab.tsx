import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dice5, Box, Target, RefreshCcw, Plus, Minus } from 'lucide-react';

export default function ProbabilityLab() {
  const [mode, setMode] = useState<'discrete' | 'geometry'>('discrete');
  
  // Discrete state
  const [black, setBlack] = useState(6);
  const [white, setWhite] = useState(4);
  
  // Geometry state
  const [dots, setDots] = useState<{x: number, y: number, inside: boolean}[]>([]);
  const rectWidth = 300;
  const rectHeight = 200;
  const circleRadius = 70;
  const circleCenter = { x: 150, y: 100 };

  const addDot = useCallback(() => {
    const x = Math.random() * rectWidth;
    const y = Math.random() * rectHeight;
    const dist = Math.sqrt(Math.pow(x - circleCenter.x, 2) + Math.pow(y - circleCenter.y, 2));
    const inside = dist <= circleRadius;
    setDots(prev => [...prev, { x, y, inside }]);
  }, []);

  const addManyDots = () => {
    for(let i=0; i<50; i++) addDot();
  };

  const total = black + white;
  const insideCount = dots.filter(d => d.inside).length;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h3 className="text-xl font-black text-brand-primary dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Dice5 className="w-6 h-6 text-rose-500" />
            Probability Lab
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Quantifying Chance</p>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          <button 
            onClick={() => setMode('discrete')}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'discrete' ? 'bg-white dark:bg-slate-700 text-brand-primary shadow-sm' : 'text-slate-400'}`}
          >
            Bead Box
          </button>
          <button 
            onClick={() => setMode('geometry')}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'geometry' ? 'bg-white dark:bg-slate-700 text-brand-primary shadow-sm' : 'text-slate-400'}`}
          >
            Geometry
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'discrete' ? (
          <motion.div 
            key="discrete"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-8">
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Box Contents</span>
                   <span className="text-xs font-black text-brand-primary uppercase">Total: {total}</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-slate-900 border border-white/20" />
                      <span className="text-sm font-bold">Black Beads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setBlack(Math.max(0, black-1))} className="p-1.5 bg-white dark:bg-slate-700 rounded-lg shadow-sm"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="w-6 text-center font-black">{black}</span>
                      <button onClick={() => setBlack(black+1)} className="p-1.5 bg-brand-primary text-white rounded-lg shadow-sm"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-white border border-slate-200" />
                      <span className="text-sm font-bold text-slate-500">White Beads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setWhite(Math.max(0, white-1))} className="p-1.5 bg-white dark:bg-slate-700 rounded-lg shadow-sm"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="w-6 text-center font-black">{white}</span>
                      <button onClick={() => setWhite(white+1)} className="p-1.5 bg-brand-primary text-white rounded-lg shadow-sm"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-indigo-500 text-white rounded-[2rem] shadow-xl shadow-indigo-500/20">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Probability of Black</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">{total > 0 ? (black/total).toFixed(2) : '0.00'}</span>
                    <span className="text-xl font-bold opacity-60">/ 1.0</span>
                 </div>
                 <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                    <span className="text-sm font-bold">Fraction: {black}/{total}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black">{(total > 0 ? (black/total)*100 : 0).toFixed(1)}%</span>
                 </div>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] p-8 aspect-square flex flex-wrap content-start gap-3 overflow-hidden border-4 border-white dark:border-slate-700 shadow-inner">
               {Array.from({ length: black }).map((_, i) => (
                 <motion.div layout key={`b-${i}`} className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white/10 shadow-lg" initial={{ scale: 0 }} animate={{ scale: 1 }} />
               ))}
               {Array.from({ length: white }).map((_, i) => (
                 <motion.div layout key={`w-${i}`} className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 shadow-lg" initial={{ scale: 0 }} animate={{ scale: 1 }} />
               ))}
               {total === 0 && <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold italic text-sm">Box is empty</div>}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="geometry"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-6">
               <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4">Monte Carlo Simulation</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Probability = Area of Circle / Area of Rectangle. By placing random dots, the ratio of dots inside the circle to total dots will approach the theoretical probability.</p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Dots</p>
                     <p className="text-2xl font-black">{dots.length}</p>
                  </div>
                  <div className="p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl">
                     <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Inside Circle</p>
                     <p className="text-2xl font-black text-emerald-500">{insideCount}</p>
                  </div>
               </div>

               <div className="p-6 bg-brand-primary text-white rounded-[2rem] shadow-lg shadow-brand-primary/20">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Estimated Probability</p>
                  <p className="text-4xl font-black">{dots.length > 0 ? (insideCount/dots.length).toFixed(4) : '0.0000'}</p>
                  <p className="text-[9px] font-bold mt-2 opacity-70 uppercase tracking-widest">Theoretical Value: ≈ 0.256</p>
               </div>

               <div className="flex gap-2">
                  <button onClick={addDot} className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all">Add Dot</button>
                  <button onClick={addManyDots} className="flex-1 py-3 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">Add 50 Dots</button>
                  <button onClick={() => setDots([])} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-rose-500"><RefreshCcw className="w-4 h-4" /></button>
               </div>
            </div>

            <div className="relative bg-slate-50 dark:bg-slate-950 rounded-3xl border-4 border-white dark:border-slate-800 shadow-inner overflow-hidden aspect-[3/2] flex items-center justify-center">
               <svg viewBox={`0 0 ${rectWidth} ${rectHeight}`} className="w-full h-full">
                  <rect x="0" y="0" width={rectWidth} height={rectHeight} fill="none" />
                  <circle cx={circleCenter.x} cy={circleCenter.y} r={circleRadius} fill="rgba(79, 70, 229, 0.1)" stroke="currentColor" className="text-brand-primary opacity-30" strokeWidth="2" strokeDasharray="4" />
                  
                  {dots.map((d, i) => (
                    <circle key={i} cx={d.x} cy={d.y} r="2" fill={d.inside ? '#10b981' : '#f43f5e'} />
                  ))}
               </svg>
               <div className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest border border-white/20">
                  Live Viewport
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
