import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sigma, TrendingUp, Hash } from 'lucide-react';

export default function SequenceAlgebraLab() {
  const [a, setA] = useState(3); // Common difference
  const [b, setB] = useState(2); // Base constant
  const [n, setN] = useState(5);

  const getTerm = (i: number) => a * i + b;
  const getSum = (limit: number) => {
    let sum = 0;
    for (let i = 1; i <= limit; i++) sum += getTerm(i);
    return sum;
  };

  const sequence = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-xl font-black text-brand-primary dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Calculator className="w-6 h-6 text-indigo-500" />
            Algebraic Sequence Explorer
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Visualize xₙ = an + b</p>
        </div>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl gap-2">
           <div className="px-4 py-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Formula</span>
              <span className="text-sm font-black text-slate-700 dark:text-white font-mono">xₙ = {a}n {b >= 0 ? '+' : '-'} {Math.abs(b)}</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Controls */}
        <div className="space-y-8 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Common Difference (a)</label>
              <span className="text-sm font-black text-indigo-600">{a}</span>
            </div>
            <input type="range" min="-10" max="10" value={a} onChange={(e) => setA(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Base Constant (b)</label>
              <span className="text-sm font-black text-indigo-600">{b}</span>
            </div>
            <input type="range" min="-20" max="20" value={b} onChange={(e) => setB(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Position (n)</label>
              <span className="text-sm font-black text-brand-primary">{n}</span>
            </div>
            <input type="range" min="1" max="10" value={n} onChange={(e) => setN(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary" />
          </div>
        </div>

        {/* Visualization */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-48 flex items-end justify-between gap-2 px-4 border-b border-slate-100 dark:border-slate-800 pb-2">
            {sequence.map((i) => {
              const val = getTerm(i);
              const maxHeight = 140;
              const height = Math.abs(val) * 5; // Scale for display
              return (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${a}-${b}-${i}`}
                      initial={{ height: 0 }}
                      animate={{ height: Math.min(height, maxHeight) }}
                      className={`w-full rounded-t-lg transition-colors ${i === n ? 'bg-brand-primary' : i < n ? 'bg-indigo-400/40' : 'bg-slate-200 dark:bg-slate-700'}`}
                    />
                  </AnimatePresence>
                  <span className={`text-[10px] font-black mt-2 ${i === n ? 'text-brand-primary' : 'text-slate-400'}`}>n={i}</span>
                  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="bg-slate-800 text-white text-[10px] px-2 py-1 rounded shadow-lg font-mono">val: {val}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="p-6 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-2 flex items-center gap-2">
                   <Hash className="w-3.5 h-3.5" /> Term at position {n}
                </p>
                <p className="text-3xl font-black text-brand-primary">x_{n} = {getTerm(n)}</p>
                <div className="mt-4 pt-4 border-t border-brand-primary/10">
                   <p className="text-[10px] font-bold text-slate-400 font-mono">Calculation: {a}({n}) {b >= 0 ? '+' : '-'} {Math.abs(b)} = {getTerm(n)}</p>
                </div>
             </div>

             <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-2">
                   <Sigma className="w-3.5 h-3.5" /> Sum of first {n} terms
                </p>
                <p className="text-3xl font-black text-emerald-600">S_{n} = {getSum(n)}</p>
                <div className="mt-4 pt-4 border-t border-emerald-500/10">
                   <p className="text-[10px] font-bold text-slate-400 font-mono">Algebraic Form: {a/2}n² + {b + a/2}n</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
