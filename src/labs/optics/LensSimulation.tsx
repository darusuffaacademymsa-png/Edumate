import React, { useState } from 'react';
import { motion } from 'motion/react';

export const LensSimulation: React.FC = () => {
  const [objectPos, setObjectPos] = useState(-150);
  const [lensType, setLensType] = useState<'convex' | 'concave'>('convex');
  
  const f = 60; // Focal length
  
  // Lens Equation: 1/v - 1/u = 1/f => 1/v = 1/f + 1/u => v = (f*u) / (f+u)
  // In our coordinate system, lens is at 0. Object is at objectPos (negative).
  const u = objectPos;
  const v = lensType === 'convex' ? (f * u) / (f + u) : (-f * u) / (-f + u);
  
  const h_o = 40; // Object height
  const m = v / u;
  const h_i = -h_o * m; // Image height

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Interactive Lens Simulation</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Drag the object to see how the image changes</p>
        </div>
        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-lg">
          <button 
            onClick={() => setLensType('convex')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${lensType === 'convex' ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-primary' : 'text-slate-500'}`}
          >
            Convex
          </button>
          <button 
            onClick={() => setLensType('concave')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${lensType === 'concave' ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-primary' : 'text-slate-500'}`}
          >
            Concave
          </button>
        </div>
      </div>

      <div className="relative w-full h-64 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-900 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 600 250" className="overflow-visible">
          {/* Optic Axis */}
          <line x1="0" y1="125" x2="600" y2="125" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-slate-300 dark:text-slate-700" />
          
          {/* Center (Optic Centre) */}
          <g transform="translate(300, 125)">
            {/* Focal Points */}
            <circle cx={f} cy="0" r="3" fill="currentColor" className="text-red-400" />
            <text x={f} y="15" textAnchor="middle" className="text-[10px] fill-slate-400">F</text>
            <circle cx={-f} cy="0" r="3" fill="currentColor" className="text-red-400" />
            <text x={-f} y="15" textAnchor="middle" className="text-[10px] fill-slate-400">F</text>
            
            <circle cx={2*f} cy="0" r="3" fill="currentColor" className="text-red-400" />
            <text x={2*f} y="15" textAnchor="middle" className="text-[10px] fill-slate-400">2F</text>
            <circle cx={-2*f} cy="0" r="3" fill="currentColor" className="text-red-400" />
            <text x={-2*f} y="15" textAnchor="middle" className="text-[10px] fill-slate-400">2F</text>

            {/* Lens */}
            {lensType === 'convex' ? (
              <path d="M-10,-60 Q20,0 -10,60 Q-40,0 -10,-60" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2" transform="translate(10,0)" />
            ) : (
              <path d="M-15,-60 Q5,0 -15,60 L15,60 Q-5,0 15,-60 Z" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2" />
            )}

            {/* Object */}
            <motion.g
              drag="x"
              dragConstraints={{ left: -280, right: -10 }}
              onDrag={(e, info) => setObjectPos(u + info.delta.x)}
              style={{ x: u }}
              className="cursor-grab active:cursor-grabbing"
            >
              <line x1="0" y1="0" x2="0" y2={-h_o} stroke="currentColor" strokeWidth="3" className="text-slate-800 dark:text-slate-200" />
              <path d={`M-5,${-h_o+5} L0,${-h_o} L5,${-h_o+5}`} fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800 dark:text-slate-200" />
              <text y={-h_o-10} textAnchor="middle" className="text-[10px] font-bold fill-slate-600 dark:fill-slate-400">Object</text>
            </motion.g>

            {/* Image */}
            {Math.abs(v) < 1000 && (
              <motion.g animate={{ x: v }}>
                <line x1="0" y1="0" x2="0" y2={h_i} stroke="currentColor" strokeWidth="2" strokeDasharray={v < 0 ? "4" : "0"} className="text-brand-primary opacity-80" />
                <path 
                  d={h_i < 0 ? `M-4,${h_i+4} L0,${h_i} L4,${h_i+4}` : `M-4,${h_i-4} L0,${h_i} L4,${h_i-4}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-brand-primary opacity-80" 
                />
                <text y={h_i > 0 ? h_i + 15 : h_i - 10} textAnchor="middle" className="text-[10px] font-bold fill-brand-primary">
                  {v < 0 ? 'Virtual Image' : 'Real Image'}
                </text>
              </motion.g>
            )}

            {/* Rays */}
            <g className="opacity-30 pointer-events-none">
              {/* Ray 1: Parallel to axis */}
              <line x1={u} y1={-h_o} x2="0" y2={-h_o} stroke="#fbbf24" strokeWidth="1" />
              {lensType === 'convex' ? (
                <line x1="0" y1={-h_o} x2={v > 0 ? v : 300} y2={h_i} stroke="#fbbf24" strokeWidth="1" />
              ) : (
                <line x1="0" y1={-h_o} x2="300" y2={-h_o - (300 * (-h_o / -f))} stroke="#fbbf24" strokeWidth="1" />
              )}

              {/* Ray 2: Through optic centre */}
              <line x1={u} y1={-h_o} x2={v > 0 ? v : 300} y2={h_i} stroke="#10b981" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Object Distance (u)</div>
          <div className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200">{Math.round(u)} cm</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Image Distance (v)</div>
          <div className="text-sm font-mono font-bold text-brand-primary">
            {Math.abs(v) > 1000 ? '∞' : `${Math.round(v)} cm`}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Magnification (m)</div>
          <div className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200">{m.toFixed(2)}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Nature</div>
          <div className="text-xs font-bold text-slate-700 dark:text-slate-200">
            {v < 0 ? 'Virtual & Erect' : 'Real & Inverted'}
          </div>
        </div>
      </div>
    </div>
  );
};
