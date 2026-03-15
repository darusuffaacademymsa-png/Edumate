import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play, Square } from 'lucide-react';

export function WaveTypesSimulation() {
  const [isPlaying, setIsPlaying] = useState(true);
  
  const transverseControls = useAnimation();
  const longitudinalControls = useAnimation();

  useEffect(() => {
    if (isPlaying) {
      transverseControls.start((i) => ({
        y: [0, -15, 0, 15, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
      }));
      longitudinalControls.start((i) => ({
        x: [0, 10, 0, -10, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
      }));
    } else {
      transverseControls.stop();
      longitudinalControls.stop();
      transverseControls.set({ y: 0 });
      longitudinalControls.set({ x: 0 });
    }
  }, [isPlaying, transverseControls, longitudinalControls]);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 flex flex-col gap-8 min-h-[450px]">
       <div className="flex justify-between items-center">
         <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">Wave Types</h3>
          <p className="text-xs text-slate-500">Transverse vs Longitudinal particle displacement</p>
         </div>
         <button 
           onClick={() => setIsPlaying(!isPlaying)}
           className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
         >
           {isPlaying ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
         </button>
       </div>

       <div className="space-y-6">
         {/* Transverse Wave */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
           <div className="absolute top-2 left-4 text-[10px] font-black uppercase tracking-widest text-indigo-500">Transverse Wave (e.g. Light)</div>
           <div className="absolute top-2 right-4 text-[10px] uppercase font-bold text-slate-400">Particles vibrate <span className="text-indigo-500">Perpendicular</span></div>
           
           <div className="h-24 flex items-center gap-1 sm:gap-2 justify-center mt-6">
             {[...Array(35)].map((_, i) => (
                <motion.div
                  key={`t-${i}`}
                  custom={i}
                  animate={transverseControls}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${i % 12 === 0 ? 'bg-rose-500' : 'bg-indigo-400 dark:bg-indigo-600'}`}
                />
             ))}
           </div>
           
           {/* Direction Arrows */}
           <div className="flex justify-center gap-12 mt-2 opacity-50">
              <div className="flex items-center gap-2 text-xs font-bold"><span className="text-indigo-500">↕</span> Particle Motion</div>
              <div className="flex items-center gap-2 text-xs font-bold"><span className="text-emerald-500">→</span> Wave Direction</div>
           </div>
         </div>

         {/* Longitudinal Wave */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
           <div className="absolute top-2 left-4 text-[10px] font-black uppercase tracking-widest text-amber-500">Longitudinal Wave (e.g. Sound)</div>
           <div className="absolute top-2 right-4 text-[10px] uppercase font-bold text-slate-400">Particles vibrate <span className="text-amber-500">Parallel</span></div>
           
           <div className="h-24 flex items-center gap-1 sm:gap-2 justify-center mt-6 px-10">
             {[...Array(35)].map((_, i) => (
                <motion.div
                  key={`l-${i}`}
                  custom={i}
                  animate={longitudinalControls}
                  className={`w-1 h-8 sm:w-1.5 sm:h-12 rounded-full ${i % 10 === 0 ? 'bg-rose-500 w-2 h-10 sm:w-2' : 'bg-amber-400 dark:bg-amber-600'}`}
                />
             ))}
           </div>
           
           {/* Direction Arrows */}
           <div className="flex justify-center gap-12 mt-2 opacity-50">
              <div className="flex items-center gap-2 text-xs font-bold"><span className="text-amber-500">↔</span> Particle Motion</div>
              <div className="flex items-center gap-2 text-xs font-bold"><span className="text-emerald-500">→</span> Wave Direction</div>
           </div>
         </div>
       </div>
    </div>
  );
}
