import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Droplet, Play, Square } from 'lucide-react';

export function WavesSimulation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveControls = useAnimation();
  
  useEffect(() => {
    if (isPlaying) {
      waveControls.start((i) => ({
        y: [0, -10, 0, 10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.1 // Stagger the animation across particles to create wave effect
        }
      }));
    } else {
      waveControls.stop();
      waveControls.set({ y: 0 });
    }
  }, [isPlaying, waveControls]);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 flex flex-col gap-6 min-h-[350px]">
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Wave Motion</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Notice how energy propagates forward while the individual particles (dots) only move up and down in place.</p>
      </div>

      <div className="flex-1 relative flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 overflow-hidden my-4 py-16">
        
        {/* Playhead indicator / source */}
        <div className="absolute left-4 z-10">
          <motion.div 
            animate={isPlaying ? { y: [-10, 10, -10] } : { y: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${isPlaying ? 'bg-indigo-500 shadow-indigo-500/50' : 'bg-slate-300 dark:bg-slate-700'}`}
          >
            <Droplet className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        {/* Medium Particles */}
        <div className="flex items-center gap-1 sm:gap-2 px-12 md:px-20 w-full overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0"
              custom={i}
              animate={waveControls}
            >
              {/* Highlight a few particles so the user can track that they do not move horizontally */}
              <div 
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i % 10 === 0 ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]' : 'bg-indigo-300 dark:bg-indigo-800'}`} 
              />
            </motion.div>
          ))}
        </div>

        {/* Central invisible axis */}
        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-slate-300 dark:border-slate-700 -z-10"></div>
      </div>

      <div className="flex items-center justify-between">
         <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-rose-500 rounded-full"></div> Track Particle
           </div>
         </div>
         <button 
           onClick={() => setIsPlaying(!isPlaying)}
           className={`px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors ${isPlaying ? 'bg-rose-100 text-rose-600 hover:bg-rose-200 dark:bg-rose-900/30' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900/30'}`}
         >
           {isPlaying ? <><Square className="w-4 h-4" /> Stop</> : <><Play className="w-4 h-4" /> Start Wave</>}
         </button>
      </div>
    </div>
  );
}
