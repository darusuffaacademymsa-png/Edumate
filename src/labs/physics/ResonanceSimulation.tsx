import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function ResonanceSimulation() {
  const [freq1, setFreq1] = useState(440);
  const [freq2, setFreq2] = useState(440);
  const [isStriking, setIsStriking] = useState(false);
  const [isResonating, setIsResonating] = useState(false);

  // Animation controls for the forks
  const fork1Controls = useAnimation();
  const fork2Controls = useAnimation();
  const waveControls = useAnimation();

  useEffect(() => {
    // Check if frequencies match for resonance
    if (Math.abs(freq1 - freq2) <= 5) { // Small tolerance
      setIsResonating(true);
    } else {
      setIsResonating(false);
    }
  }, [freq1, freq2]);

  const strikeFork = async () => {
    setIsStriking(true);
    
    // Animate hammer striking
    // Start vibration on Fork 1
    fork1Controls.start({
      x: [0, -3, 3, -2, 2, -1, 1, 0],
      transition: { duration: 0.5, ease: "linear", repeat: 3 }
    });

    // Determine wave timing and Fork 2 response based on resonance
    waveControls.start({
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 1.5],
      transition: { duration: 1.5, ease: "easeOut" }
    });

    if (isResonating) {
      setTimeout(() => {
        fork2Controls.start({
          x: [0, -2, 2, -1.5, 1.5, -1, 1, 0],
          transition: { duration: 0.5, ease: "linear", repeat: 2 }
        });
      }, 800);
    }

    setTimeout(() => {
      setIsStriking(false);
    }, 2000);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 flex flex-col gap-8 min-h-[400px]">
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Resonance Demonstration</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Match the frequencies of the two tuning forks and strike the first one. Notice how the second one begins to vibrate when frequencies match exactly (Resonance).</p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-around relative my-8">
        
        {/* Tuning Fork 1 */}
        <div className="flex flex-col items-center z-10">
          <motion.div animate={fork1Controls} className="relative w-16 h-40">
            {/* The fork prongs */}
            <div className="absolute top-0 left-2 w-2 h-24 bg-slate-400 dark:bg-slate-600 rounded-t-full"></div>
            <div className="absolute top-0 right-2 w-2 h-24 bg-slate-400 dark:bg-slate-600 rounded-t-full"></div>
            {/* The base connection */}
            <div className="absolute top-24 left-2 right-2 h-4 bg-slate-400 dark:bg-slate-600 rounded-b-xl"></div>
            {/* The stem */}
            <div className="absolute top-26 left-1/2 -ml-1.5 w-3 h-14 bg-slate-400 dark:bg-slate-600"></div>
            {/* Post box base */}
            <div className="absolute bottom-0 left-1/2 -ml-8 w-16 h-8 bg-amber-700 rounded-lg shadow-md border border-amber-800"></div>
          </motion.div>
          <div className="mt-4 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Fork 1 (Driver)</span>
            <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">{freq1} Hz</span>
          </div>
        </div>

        {/* Sound Waves between them */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[80%] flex items-center justify-center z-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={waveControls}
            className="flex gap-2"
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-16 bg-brand-teal/40 dark:bg-brand-teal/60 rounded-full" />
            ))}
          </motion.div>
        </div>

        {/* Action Button */}
        <button 
          onClick={strikeFork}
          disabled={isStriking}
          className="my-8 md:my-0 md:absolute md:bottom-[-20px] md:left-1/2 md:-translate-x-1/2 px-6 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
        >
          {isStriking ? 'Striking...' : 'Strike Fork 1'}
        </button>

        {/* Tuning Fork 2 */}
        <div className="flex flex-col items-center z-10">
          <motion.div animate={fork2Controls} className="relative w-16 h-40">
            {/* The fork prongs */}
            <div className="absolute top-0 left-2 w-2 h-24 bg-slate-400 dark:bg-slate-600 rounded-t-full"></div>
            <div className="absolute top-0 right-2 w-2 h-24 bg-slate-400 dark:bg-slate-600 rounded-t-full"></div>
            {/* The base connection */}
            <div className="absolute top-24 left-2 right-2 h-4 bg-slate-400 dark:bg-slate-600 rounded-b-xl"></div>
            {/* The stem */}
            <div className="absolute top-26 left-1/2 -ml-1.5 w-3 h-14 bg-slate-400 dark:bg-slate-600"></div>
            {/* Post box base */}
            <div className="absolute bottom-0 left-1/2 -ml-8 w-16 h-8 bg-amber-700 rounded-lg shadow-md border border-amber-800"></div>
          </motion.div>
          <div className="mt-4 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
             <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Fork 2 (Driven)</span>
             <div className="flex flex-col gap-2">
               <span className={`text-lg font-mono font-bold ${isResonating ? 'text-emerald-500' : 'text-slate-600 dark:text-slate-300'}`}>{freq2} Hz</span>
               <input 
                  type="range" 
                  min="420" max="460" step="1" 
                  value={freq2} 
                  onChange={(e) => setFreq2(parseInt(e.target.value))}
                  className="w-24 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
             </div>
          </div>
        </div>
      </div>
      
      {/* Resonance Status Badge */}
      <div className="flex justify-center mt-6">
        <div className={`px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors duration-500 ${isResonating ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
          <div className={`w-2 h-2 rounded-full ${isResonating ? 'bg-emerald-500 animate-ping' : 'bg-slate-400'}`}></div>
          {isResonating ? 'Resonance Active (Frequencies Match)' : 'No Resonance (Different Frequencies)'}
        </div>
      </div>
    </div>
  );
}
