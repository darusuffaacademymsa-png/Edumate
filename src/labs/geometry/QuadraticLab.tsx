import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Maximize, Square, HelpCircle } from 'lucide-react';

export default function QuadraticLab() {
  const [a, setA] = useState(4); // x^2 + ax = b
  const [x, setX] = useState(5); // base x

  const halfA = a / 2;
  const squareToAdd = halfA * halfA;
  const totalArea = (x + halfA) * (x + halfA);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-xl font-black text-brand-primary dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Square className="w-6 h-6 text-indigo-500" />
            Square Completion Lab
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Visualize x² + {a}x</p>
        </div>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl gap-2">
           <div className="px-4 py-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Current Form</span>
              <span className="text-sm font-black text-slate-700 dark:text-white font-mono">x² + {a}x + {squareToAdd} = (x + {halfA})²</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Controls */}
        <div className="space-y-8 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Coefficient of x (a)</label>
              <span className="text-sm font-black text-indigo-600">{a}</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="10" 
              step="2"
              value={a} 
              onChange={(e) => setA(parseInt(e.target.value))} 
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
            />
            <p className="text-[10px] text-slate-400 italic">Changing 'a' changes the width of the rectangles we add.</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Base Length (x)</label>
              <span className="text-sm font-black text-indigo-600">{x}</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="10" 
              value={x} 
              onChange={(e) => setX(parseInt(e.target.value))} 
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
            />
          </div>

          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">The Secret</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We split <strong>{a}x</strong> into two rectangles of <strong>{halfA}x</strong>. 
              Adding the small <strong>{halfA} × {halfA}</strong> square completes the larger square!
            </p>
          </div>
        </div>

        {/* Visualization */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative">
          <div className="relative" style={{ width: (x + halfA) * 20, height: (x + halfA) * 20 }}>
            {/* Main x^2 Square */}
            <motion.div 
              layout
              className="absolute top-0 left-0 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg"
              style={{ width: x * 20, height: x * 20 }}
            >
              <span className="text-white font-bold text-sm">x²</span>
            </motion.div>

            {/* First Rect: (a/2) * x */}
            <motion.div 
              layout
              className="absolute top-0 bg-brand-primary/40 border border-brand-primary/20 rounded-lg flex items-center justify-center"
              style={{ left: x * 20 + 4, width: halfA * 20, height: x * 20 }}
            >
              <span className="text-brand-primary font-bold text-[10px] rotate-90">{halfA}x</span>
            </motion.div>

            {/* Second Rect: x * (a/2) */}
            <motion.div 
              layout
              className="absolute left-0 bg-brand-primary/40 border border-brand-primary/20 rounded-lg flex items-center justify-center"
              style={{ top: x * 20 + 4, width: x * 20, height: halfA * 20 }}
            >
              <span className="text-brand-primary font-bold text-[10px]">{halfA}x</span>
            </motion.div>

            {/* The Completion Square: (a/2) * (a/2) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute bg-brand-accent rounded-lg flex items-center justify-center shadow-md border-2 border-white dark:border-slate-800"
              style={{ 
                top: x * 20 + 4, 
                left: x * 20 + 4, 
                width: halfA * 20, 
                height: halfA * 20 
              }}
            >
              <span className="text-brand-primary font-black text-[10px]">{squareToAdd}</span>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 w-full">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
              <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">Incomplete Area</span>
              <span className="text-lg font-black text-slate-700 dark:text-white">x² + {a}x</span>
            </div>
            <div className="p-4 bg-brand-accent/20 rounded-2xl text-center border border-brand-accent/30">
              <span className="block text-[10px] font-black text-brand-primary uppercase mb-1">Perfect Square</span>
              <span className="text-lg font-black text-brand-primary">(x + {halfA})²</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
