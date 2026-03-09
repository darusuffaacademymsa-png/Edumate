import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, RotateCw, ArrowRight, Settings, Battery, Power } from 'lucide-react';

export function GeneratorSimulation() {
  const [type, setType] = useState<'ac' | 'dc'>('ac');
  const [speed, setSpeed] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (isRunning) {
        const deltaTime = time - lastTime;
        setAngle((prev) => (prev + (speed * deltaTime * 0.1)) % 360);
      }
      lastTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isRunning, speed]);

  // Calculate current based on angle
  // AC: sine wave, DC: absolute sine wave (full-wave rectified)
  const rawCurrent = Math.sin((angle * Math.PI) / 180);
  const current = type === 'ac' ? rawCurrent : Math.abs(rawCurrent);
  
  // Calculate bulb brightness (0 to 1)
  const brightness = Math.abs(rawCurrent);

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <RotateCw className="text-indigo-500" /> Electric Generator Simulation
        </h3>
        <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => { setType('ac'); setAngle(0); }}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              type === 'ac' 
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            AC Generator
          </button>
          <button
            onClick={() => { setType('dc'); setAngle(0); }}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              type === 'dc' 
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            DC Generator
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Generator Visualizer */}
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden min-h-[300px]">
          
          {/* Magnets */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-32 bg-red-500 rounded-r-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg z-10">N</div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-32 bg-blue-500 rounded-l-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg z-10">S</div>

          {/* Magnetic Field Lines */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 opacity-20 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />
            ))}
          </div>

          {/* Armature Coil */}
          <motion.div 
            className="w-32 h-40 border-4 border-amber-600 rounded-sm relative z-20"
            style={{ 
              rotateX: angle,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Coil sides */}
            <div className="absolute inset-y-0 left-0 w-1 bg-amber-700" />
            <div className="absolute inset-y-0 right-0 w-1 bg-amber-700" />
            
            {/* Current direction arrows on coil */}
            {brightness > 0.1 && (
              <>
                <motion.div 
                  className="absolute left-[-12px] top-1/2 -translate-y-1/2 text-amber-500"
                  animate={{ y: current > 0 ? [-10, 10] : [10, -10], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.5 / speed, repeat: Infinity }}
                >
                  ↑
                </motion.div>
                <motion.div 
                  className="absolute right-[-12px] top-1/2 -translate-y-1/2 text-amber-500"
                  animate={{ y: current > 0 ? [10, -10] : [-10, 10], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.5 / speed, repeat: Infinity }}
                >
                  ↓
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Commutator / Slip Rings */}
          <div className="mt-4 relative z-20 flex flex-col items-center">
            <div className="w-2 h-8 bg-slate-400" /> {/* Shaft */}
            
            {type === 'ac' ? (
              // Slip Rings (AC)
              <div className="flex flex-col gap-1">
                <div className="w-12 h-4 border-2 border-yellow-500 rounded-full relative">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-slate-800 dark:bg-slate-300" /> {/* Brush 1 */}
                </div>
                <div className="w-12 h-4 border-2 border-yellow-500 rounded-full relative">
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-slate-800 dark:bg-slate-300" /> {/* Brush 2 */}
                </div>
              </div>
            ) : (
              // Split Ring Commutator (DC)
              <div className="relative w-12 h-8">
                <motion.div 
                  className="absolute inset-0 flex justify-between"
                  style={{ rotate: angle }}
                >
                  <div className="w-[45%] h-full bg-yellow-500 rounded-l-full" />
                  <div className="w-[45%] h-full bg-yellow-500 rounded-r-full" />
                </motion.div>
                {/* Brushes */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-4 bg-slate-800 dark:bg-slate-300 z-10" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-4 bg-slate-800 dark:bg-slate-300 z-10" />
              </div>
            )}
          </div>

        </div>

        {/* Controls & Output */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Output Graph */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex justify-between">
              <span>Output Current (I)</span>
              <span className={type === 'ac' ? 'text-indigo-500' : 'text-emerald-500'}>
                {type === 'ac' ? 'Alternating' : 'Direct'}
              </span>
            </h4>
            <div className="h-32 relative border-l-2 border-b-2 border-slate-300 dark:border-slate-600 flex items-center">
              {/* Zero Line */}
              <div className="absolute w-full h-[1px] bg-slate-300 dark:bg-slate-600 top-1/2 border-dashed" />
              
              {/* Current Indicator Dot */}
              <motion.div 
                className={`absolute w-4 h-4 rounded-full left-1/2 -translate-x-1/2 z-10 ${type === 'ac' ? 'bg-indigo-500' : 'bg-emerald-500'}`}
                style={{ 
                  top: `calc(50% - ${current * 40}px)`,
                  boxShadow: `0 0 10px ${type === 'ac' ? 'rgba(99, 102, 241, 0.5)' : 'rgba(16, 185, 129, 0.5)'}`
                }}
              />

              {/* Sine Wave Trace (Static visual representation) */}
              <svg className="w-full h-full absolute inset-0 opacity-30" preserveAspectRatio="none" viewBox="0 0 100 100">
                {type === 'ac' ? (
                  <path d="M 0 50 Q 25 0, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500" />
                ) : (
                  <path d="M 0 50 Q 25 0, 50 50 Q 75 0, 100 50" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500" />
                )}
              </svg>
            </div>
          </div>

          {/* External Circuit (Bulb) */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Zap className={`w-10 h-10 ${brightness > 0.1 ? 'text-yellow-400' : 'text-slate-400'} relative z-10 transition-colors duration-75`} />
                {brightness > 0.1 && (
                  <div 
                    className="absolute inset-0 bg-yellow-400 rounded-full blur-xl z-0 transition-opacity duration-75"
                    style={{ opacity: brightness * 0.6 }}
                  />
                )}
              </div>
              <span className="text-xs font-bold text-slate-500 mt-2">External Circuit</span>
            </div>
            
            {/* Current Direction Indicator */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-slate-500 mb-1">Current Direction</span>
              <div className="flex items-center gap-2">
                <ArrowRight className={`w-5 h-5 transition-opacity duration-75 ${current > 0.1 ? 'text-green-500 opacity-100' : 'opacity-20'}`} />
                <div className="w-12 h-1 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden relative">
                  {Math.abs(current) > 0.1 && (
                    <motion.div 
                      className={`absolute inset-y-0 w-1/2 ${current > 0 ? 'bg-green-500 left-0' : 'bg-red-500 right-0'}`}
                      animate={{ x: current > 0 ? [0, 24] : [0, -24] }}
                      transition={{ duration: 0.5 / speed, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </div>
                <ArrowRight className={`w-5 h-5 rotate-180 transition-opacity duration-75 ${current < -0.1 ? 'text-red-500 opacity-100' : 'opacity-20'}`} />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Settings className="w-4 h-4" /> Rotation Speed
              </span>
              <span className="text-xs font-mono bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
                {speed.toFixed(1)}x
              </span>
            </div>
            <input 
              type="range" 
              min="0.5" 
              max="3" 
              step="0.1" 
              value={speed} 
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-full accent-indigo-500"
            />
            
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`w-full mt-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
                isRunning 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
              }`}
            >
              <Power className="w-5 h-5" />
              {isRunning ? 'Stop Rotation' : 'Start Rotation'}
            </button>
          </div>

        </div>
      </div>
      
      {/* Explanation Box */}
      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50">
        <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">How it works:</h4>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          {type === 'ac' 
            ? "In an AC generator, slip rings maintain a continuous connection with the rotating armature. As the coil rotates through the magnetic field, the induced current reverses direction every half rotation, producing Alternating Current."
            : "In a DC generator, a split ring commutator reverses the connection to the external circuit every half rotation. This ensures that even though the current in the coil alternates, the current in the external circuit always flows in one direction (Direct Current)."
          }
        </p>
      </div>
    </div>
  );
}
