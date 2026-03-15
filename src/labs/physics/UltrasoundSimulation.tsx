import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Target } from 'lucide-react';

export function UltrasoundSimulation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveOutControls = useAnimation();
  const waveInControls = useAnimation();

  const pingSonar = async () => {
    setIsPlaying(true);
    
    // Submarine (Left) sends sonar ping to Target (Right)
    await waveOutControls.start({
      x: ['0%', '100%'],
      opacity: [1, 0],
      scale: [1, 1.5],
      transition: { duration: 1.2, ease: "linear" }
    });

    // Target (Right) reflects sonar ping back to Submarine (Left)
    await waveInControls.start({
      x: ['0%', '-100%'],
      opacity: [1, 0],
      scale: [1, 1.5],
      transition: { duration: 1.2, ease: "linear" }
    });

    setIsPlaying(false);
  };

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-800 flex flex-col gap-6 min-h-[350px] relative overflow-hidden">
      
      {/* Background aquatic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-teal-950 to-blue-900 opacity-50 -z-10"></div>
      
      <div className="text-center z-10">
        <h3 className="text-xl font-bold text-white mb-2">Echolocation / SONAR</h3>
        <p className="text-sm text-teal-200/70">Ultrasonic waves (&gt;20kHz) are used to detect submerged objects.</p>
      </div>

      <div className="flex-1 relative flex items-center justify-between px-4 sm:px-12 py-10 z-10 border-y border-teal-900/50 mt-4">
        
        {/* Submarine / Sender */}
        <div className="relative flex flex-col items-center">
           <div className="w-20 h-10 bg-slate-400 rounded-full relative z-20 flex items-center justify-end px-2 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
             <div className="w-6 h-4 bg-slate-500 rounded-t-lg absolute -top-3 left-6"></div>
             {/* Submarine headlight */}
             <div className="w-2 h-2 bg-teal-300 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]"></div>
           </div>
           <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mt-4">Submarine</span>
           
           {/* Outgoing Sonar Ping */}
           <motion.div 
             initial={{ x: 0, opacity: 0, scale: 1 }}
             animate={waveOutControls}
             className="absolute top-1/2 -translate-y-1/2 left-full w-8 h-16 border-r-[4px] border-teal-400 rounded-full"
           />
        </div>

        {/* Target Object */}
        <div className="relative flex flex-col items-center">
           <div className="w-16 h-16 bg-rose-900/80 rounded-xl relative z-20 border border-rose-700/50 flex items-center justify-center shadow-lg">
             <Target className="w-8 h-8 text-rose-400/50" />
           </div>
           <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest mt-4">Obstacle</span>
           
           {/* Incoming Sonar Echo */}
           <motion.div 
             initial={{ x: 0, opacity: 0, scale: 1 }}
             animate={waveInControls}
             className="absolute top-1/2 -translate-y-1/2 right-full w-8 h-16 border-l-[4px] border-rose-400 rounded-full"
           />
        </div>
        
      </div>

      <div className="flex items-center justify-center z-10">
        <button 
           onClick={pingSonar}
           disabled={isPlaying}
           className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl shadow-lg hover:bg-teal-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isPlaying ? 'PING...' : 'Send SONAR Ping'}
        </button>
      </div>
      
    </div>
  );
}
