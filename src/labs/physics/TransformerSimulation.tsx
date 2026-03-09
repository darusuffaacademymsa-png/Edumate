import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, Settings, Battery, ZapOff } from 'lucide-react';

export function TransformerSimulation() {
  const [type, setType] = useState<'step-up' | 'step-down'>('step-up');
  const [primaryVoltage, setPrimaryVoltage] = useState(240);
  const [primaryTurns, setPrimaryTurns] = useState(100);
  const [secondaryTurns, setSecondaryTurns] = useState(500);
  const [isAC, setIsAC] = useState(true);

  // Calculate secondary voltage
  // Vs / Vp = Ns / Np
  // Vs = (Ns / Np) * Vp
  const secondaryVoltage = isAC ? (secondaryTurns / primaryTurns) * primaryVoltage : 0;

  // Animation state for magnetic flux
  const [fluxPhase, setFluxPhase] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (isAC) {
        const deltaTime = time - lastTime;
        setFluxPhase((prev) => (prev + deltaTime * 0.005) % (Math.PI * 2));
      }
      lastTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAC]);

  // Adjust turns based on type selection
  useEffect(() => {
    if (type === 'step-up') {
      setPrimaryTurns(100);
      setSecondaryTurns(500);
    } else {
      setPrimaryTurns(500);
      setSecondaryTurns(100);
    }
  }, [type]);

  const fluxIntensity = Math.abs(Math.sin(fluxPhase));

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Zap className="text-yellow-500" /> Transformer Simulation
        </h3>
        <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => setType('step-up')}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              type === 'step-up' 
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            Step-Up
          </button>
          <button
            onClick={() => setType('step-down')}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              type === 'step-down' 
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            Step-Down
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Transformer Visualizer */}
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden min-h-[350px]">
          
          {/* Iron Core */}
          <div className="relative w-64 h-48 border-8 border-slate-400 dark:border-slate-600 rounded-xl flex items-center justify-center bg-transparent z-10 shadow-inner">
            {/* Inner cutout */}
            <div className="w-32 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-md border-4 border-slate-400 dark:border-slate-600 shadow-xl" />
            
            {/* Magnetic Flux Lines (Animated) */}
            <AnimatePresence>
              {isAC && (
                <motion.div 
                  className="absolute inset-0 border-4 border-blue-400/30 dark:border-blue-500/30 rounded-lg pointer-events-none z-0"
                  style={{ opacity: fluxIntensity * 0.8 + 0.2 }}
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Primary Coil (Left) */}
          <div className="absolute left-1/2 -translate-x-32 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            <div className="text-xs font-bold text-slate-500 mb-2">Primary (Np)</div>
            <div className={`w-12 bg-amber-600/80 rounded-sm flex flex-col justify-between py-2 ${type === 'step-up' ? 'h-32 border-x-4 border-amber-800' : 'h-40 border-x-8 border-amber-800'}`}>
              {/* Coil turns visual representation */}
              {[...Array(type === 'step-up' ? 5 : 15)].map((_, i) => (
                <div key={i} className="w-full h-1 bg-amber-400/50" />
              ))}
            </div>
            <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-2">{primaryTurns} turns</div>
          </div>

          {/* Secondary Coil (Right) */}
          <div className="absolute right-1/2 translate-x-32 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            <div className="text-xs font-bold text-slate-500 mb-2">Secondary (Ns)</div>
            <div className={`w-12 bg-amber-600/80 rounded-sm flex flex-col justify-between py-2 ${type === 'step-down' ? 'h-32 border-x-4 border-amber-800' : 'h-40 border-x-8 border-amber-800'}`}>
              {/* Coil turns visual representation */}
              {[...Array(type === 'step-down' ? 5 : 15)].map((_, i) => (
                <div key={i} className="w-full h-1 bg-amber-400/50" />
              ))}
            </div>
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2">{secondaryTurns} turns</div>
          </div>

          {/* Input/Output Labels */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <span className="text-xs font-bold text-slate-500">Input (Vp)</span>
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{primaryVoltage}V</span>
            <span className="text-[10px] text-slate-400">{isAC ? 'AC' : 'DC'}</span>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <span className="text-xs font-bold text-slate-500">Output (Vs)</span>
            <span className={`text-xl font-bold ${secondaryVoltage > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
              {secondaryVoltage.toFixed(0)}V
            </span>
            <span className="text-[10px] text-slate-400">{isAC ? 'AC' : 'DC'}</span>
          </div>

        </div>

        {/* Controls & Output */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Input Source Toggle */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
              <Battery className="w-4 h-4" /> Input Source
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => setIsAC(true)}
                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${
                  isAC 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-300 dark:border-blue-700' 
                    : 'bg-white dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600'
                }`}
              >
                AC Supply
              </button>
              <button
                onClick={() => setIsAC(false)}
                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${
                  !isAC 
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 border border-red-300 dark:border-red-700' 
                    : 'bg-white dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600'
                }`}
              >
                DC Battery
              </button>
            </div>
            {!isAC && (
              <div className="mt-3 text-xs text-red-600 dark:text-red-400 flex items-start gap-1">
                <ZapOff className="w-4 h-4 flex-shrink-0" />
                <span>Transformers do not work on DC because a constantly changing magnetic field is required for mutual induction.</span>
              </div>
            )}
          </div>

          {/* Voltage Controls */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Settings className="w-4 h-4" /> Primary Voltage (Vp)
              </span>
              <span className="text-xs font-mono bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
                {primaryVoltage}V
              </span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="1000" 
              step="10" 
              value={primaryVoltage} 
              onChange={(e) => setPrimaryVoltage(parseInt(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>

          {/* Calculation Display */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Calculation</h4>
            
            <div className="flex items-center justify-center gap-4 text-lg font-mono mb-4">
              <div className="flex flex-col items-center">
                <span className="border-b border-slate-400 px-2">Vs</span>
                <span className="px-2">Vp</span>
              </div>
              <span>=</span>
              <div className="flex flex-col items-center">
                <span className="border-b border-slate-400 px-2">Ns</span>
                <span className="px-2">Np</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-lg font-mono text-slate-700 dark:text-slate-300">
              <div className="flex flex-col items-center">
                <span className="border-b border-slate-400 px-2 text-emerald-600 dark:text-emerald-400 font-bold">?</span>
                <span className="px-2">{primaryVoltage}</span>
              </div>
              <span>=</span>
              <div className="flex flex-col items-center">
                <span className="border-b border-slate-400 px-2">{secondaryTurns}</span>
                <span className="px-2">{primaryTurns}</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="text-sm text-slate-500">Secondary Voltage (Vs) = </span>
              <span className={`text-2xl font-bold ${secondaryVoltage > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                {secondaryVoltage.toFixed(0)}V
              </span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Explanation Box */}
      <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
        <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Principle of Mutual Induction:</h4>
        <p className="text-sm text-indigo-700 dark:text-indigo-400">
          When alternating current (AC) flows through the primary coil, it creates a constantly changing magnetic field in the soft iron core. This changing magnetic flux links with the secondary coil, inducing an electromotive force (EMF) in it. The ratio of the voltages is directly proportional to the ratio of the number of turns in the coils.
        </p>
      </div>
    </div>
  );
}
