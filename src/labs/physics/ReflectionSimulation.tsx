import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';

export function ReflectionSimulation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [surfaceType, setSurfaceType] = useState<'smooth' | 'rough'>('smooth');
  
  const waveOutControls = useAnimation();
  const waveInControls = useAnimation();
  const scatterControls = useAnimation();
  const sourcePulseControls = useAnimation();

  const playAnimation = async () => {
    setIsPlaying(true);
    
    // Speaker pulse
    sourcePulseControls.start({
      scale: [1, 1.2, 1],
      boxShadow: ['0 0 0px rgba(99,102,241,0)', '0 0 20px rgba(99,102,241,0.6)', '0 0 0px rgba(99,102,241,0)'],
      transition: { duration: 0.5 }
    });
    
    // Reset all
    waveInControls.set({ opacity: 0, right: '20%' });
    scatterControls.set({ opacity: 0, scale: 0, x: 0, y: 0 });

    // Wave extending to wall
    await waveOutControls.start({
      x: ['0%', '350%'],
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1.5, 2],
      transition: { duration: 1.2, ease: "easeIn" }
    });

    // Determine how it bounces back based on surface
    if (surfaceType === 'smooth') {
      await waveInControls.start({
        right: ['20%', '80%'], // Travel back
        opacity: [0, 1, 1, 0],
        scale: [2, 1.5, 1, 0.5],
        transition: { duration: 1.2, ease: "easeOut" }
      });
    } else {
      // Rough surface scatters sound chaotically 
      await scatterControls.start((i) => ({
        opacity: [0, 1, 0],
        scale: [0.5, 1.5, 0],
        x: [0, -(Math.random() * 150 + 50)],
        y: [0, (Math.random() - 0.5) * 200],
        transition: { duration: 1, ease: "easeOut", delay: i * 0.05 }
      }));
    }

    setIsPlaying(false);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 flex flex-col gap-6 min-h-[400px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">Reflection of Sound</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">See how sound bounces off different surfaces.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 p-1.5 rounded-xl">
          <button 
            onClick={() => setSurfaceType('smooth')}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${surfaceType === 'smooth' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            Smooth Surface
          </button>
          <button 
             onClick={() => setSurfaceType('rough')}
             className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${surfaceType === 'rough' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            Rough Surface
          </button>
        </div>
      </div>

      <div className="flex-1 relative bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[250px] flex items-center shadow-inner">
        
        {/* Source */}
        <div className="absolute left-4 sm:left-10 flex flex-col items-center">
          <motion.div 
             animate={sourcePulseControls}
             className="w-12 h-16 sm:w-16 sm:h-20 bg-gradient-to-br from-indigo-500 to-brand-primary rounded-xl flex items-center justify-center text-white relative z-30 shadow-lg border border-indigo-400"
          >
            <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
          <span className="text-[10px] font-black uppercase text-indigo-500 mt-3 tracking-widest bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-md">Source</span>
        </div>

        {/* Waves Going Out -> */}
        <div className="absolute left-24 sm:left-32 top-1/2 -translate-y-1/2 w-16 h-48 flex items-center">
          <motion.div 
            initial={{ x: 0, opacity: 0, scale: 0.5 }}
            animate={waveOutControls}
            className="w-full h-full flex items-center gap-2 justify-end pl-8"
          >
             {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-full border-r-[4px] border-r-indigo-500 rounded-full ${i === 2 ? 'w-24' : 'w-16'}  shadow-[4px_0_15px_rgba(99,102,241,0.5)]`}></div>
             ))}
          </motion.div>
        </div>

        {/* Smooth Reflection Coming In <- */}
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-start transform rotate-180 w-16 h-48 z-10">
          <motion.div 
            initial={{ right: '20%', opacity: 0, scale: 2 }}
            animate={waveInControls}
            className="w-full h-full flex items-center gap-2 absolute"
          >
             {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-full border-l-[4px] border-l-emerald-500 rounded-full ${i === 0 ? 'w-24' : 'w-16'} shadow-[-4px_0_15px_rgba(16,185,129,0.5)]`}></div>
             ))}
          </motion.div>
        </div>

        {/* Rough Reflection Scattering */}
        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 z-20">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`scatter-${i}`}
                custom={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={scatterControls}
                className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.8)]"
              />
            ))}
        </div>

        {/* The Wall */}
        <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-slate-100 dark:bg-slate-800/80 border-l-[4px] border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden shadow-lg z-20">
          {surfaceType === 'rough' ? (
             <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between py-2 translate-x-[-2px]">
               {/* Advanced Rough pattern */}
               {[...Array(15)].map((_, i) => (
                 <div key={i} className={`w-6 h-6 bg-slate-500 dark:bg-slate-500 rotate-45 ${i % 2 === 0 ? '-ml-3' : '-ml-1'}`}></div>
               ))}
             </div>
          ) : (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 via-white to-slate-200 dark:from-slate-700 dark:via-slate-500 dark:to-slate-700 opacity-50"></div>
          )}
          <span className="text-xs font-black uppercase tracking-widest text-slate-500 rotate-90 whitespace-nowrap bg-white/50 dark:bg-slate-900/50 px-4 py-1 rounded-full backdrop-blur-sm shadow-sm">
            {surfaceType === 'smooth' ? 'Smooth Wall' : 'Rough / Porous Wall'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="hidden sm:block text-xs font-bold text-slate-500">
           {surfaceType === 'smooth' ? 'Notice how the wave retains its precise shape.' : 'Notice how the energy scatters in random directions.'}
        </div>
        <button 
           onClick={playAnimation}
           disabled={isPlaying}
           className="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.6)] transition-all hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-not-allowed flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <Play className="w-5 h-5 fill-current" /> 
          {isPlaying ? 'Simulating...' : 'Send Sound Wave'}
        </button>
      </div>
      
    </div>
  );
}
