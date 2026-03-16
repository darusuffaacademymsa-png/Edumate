import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, MoveUpRight, Ruler, Info } from 'lucide-react';

export default function TrigonometryLab() {
  const [angle, setAngle] = useState(30);
  const [hypotenuse, setHypotenuse] = useState(200);

  const rad = (angle * Math.PI) / 180;
  const opposite = hypotenuse * Math.sin(rad);
  const adjacent = hypotenuse * Math.cos(rad);

  const sinVal = Math.sin(rad).toFixed(3);
  const cosVal = Math.cos(rad).toFixed(3);
  const tanVal = Math.tan(rad).toFixed(3);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-xl font-black text-brand-primary dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Compass className="w-6 h-6 text-indigo-500" />
            Trigonometry Explorer
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Visualize sin, cos, and tan</p>
        </div>
        
        <div className="flex flex-wrap bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl gap-2">
           <div className="px-4 py-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm text-center min-w-[80px]">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Sin({angle}°)</span>
              <span className="text-sm font-black text-slate-700 dark:text-white font-mono">{sinVal}</span>
           </div>
           <div className="px-4 py-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm text-center min-w-[80px]">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-1">Cos({angle}°)</span>
              <span className="text-sm font-black text-slate-700 dark:text-white font-mono">{cosVal}</span>
           </div>
           <div className="px-4 py-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm text-center min-w-[80px]">
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-1">Tan({angle}°)</span>
              <span className="text-sm font-black text-slate-700 dark:text-white font-mono">{tanVal}</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Controls */}
        <div className="space-y-8 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Angle (θ)</label>
              <span className="text-sm font-black text-indigo-600">{angle}°</span>
            </div>
            <input 
              type="range" min="5" max="85" value={angle} 
              onChange={(e) => setAngle(parseInt(e.target.value))} 
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
            />
          </div>

          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Relationships</span>
            </div>
            <ul className="space-y-2">
              <li className="text-[11px] text-slate-600 dark:text-slate-400 flex justify-between">
                <span>Opposite = Hyp × Sin(θ)</span>
                <span className="font-mono font-bold">{(opposite/20).toFixed(1)}</span>
              </li>
              <li className="text-[11px] text-slate-600 dark:text-slate-400 flex justify-between">
                <span>Adjacent = Hyp × Cos(θ)</span>
                <span className="font-mono font-bold">{(adjacent/20).toFixed(1)}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
             <div className="flex items-center gap-2 text-slate-400">
                <MoveUpRight className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Elevation visualization</span>
             </div>
             <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                As the angle increases, notice how the "Opposite" side (height) grows while the "Adjacent" side (base) shrinks.
             </p>
          </div>
        </div>

        {/* Visualization */}
        <div className="lg:col-span-2 flex items-center justify-center p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 min-h-[400px]">
          <div className="relative" style={{ width: adjacent, height: opposite }}>
            {/* Hypotenuse */}
            <motion.div 
              layout
              className="absolute bottom-0 left-0 bg-indigo-500 origin-bottom-left z-10"
              style={{ 
                width: hypotenuse, 
                height: 3, 
                rotate: -angle,
                boxShadow: '0 0 15px rgba(79, 70, 229, 0.3)'
              }}
            >
               <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-black text-indigo-600 bg-white dark:bg-slate-900 px-1 rounded">HYPOTENUSE</div>
            </motion.div>

            {/* Opposite */}
            <motion.div 
              layout
              className="absolute bottom-0 bg-brand-primary rounded-full origin-bottom"
              style={{ 
                left: adjacent, 
                width: 4, 
                height: opposite,
              }}
            >
               <div className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[10px] font-black text-brand-primary whitespace-nowrap bg-white dark:bg-slate-900 px-1 rounded rotate-90">OPPOSITE (HEIGHT)</div>
            </motion.div>

            {/* Adjacent */}
            <motion.div 
              layout
              className="absolute bottom-0 left-0 bg-emerald-500 rounded-full"
              style={{ 
                width: adjacent, 
                height: 4, 
              }}
            >
               <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-black text-emerald-600 whitespace-nowrap bg-white dark:bg-slate-900 px-1 rounded uppercase">Adjacent (Base)</div>
            </motion.div>

            {/* Angle Arc Indicator */}
            <div className="absolute bottom-0 left-0 w-12 h-12 border-t-2 border-r-2 border-indigo-200 dark:border-indigo-800 rounded-tr-full flex items-center justify-center">
               <span className="text-[10px] font-bold text-indigo-400 ml-4 mb-4">θ</span>
            </div>

            {/* Right Angle Indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-slate-300 dark:border-slate-600" style={{ left: adjacent - 16 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
