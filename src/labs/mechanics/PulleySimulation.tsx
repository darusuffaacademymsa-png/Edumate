import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, RotateCcw } from 'lucide-react';

export function PulleySimulation() {
  const [pulleyType, setPulleyType] = useState<'fixed' | 'movable'>('fixed');
  const [loadWeight, setLoadWeight] = useState(100);
  const [effortApplied, setEffortApplied] = useState(50);

  // Constants
  const ma = pulleyType === 'fixed' ? 1 : 2;
  const requiredEffort = loadWeight / ma;
  const isLifting = effortApplied >= requiredEffort;

  // Animation values
  const loadY = isLifting ? 50 : 150;
  const effortY = isLifting ? 200 : 100;

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span className="text-2xl">⚙️</span>
          Pulley Simulation (കപ്പി സിമുലേഷൻ)
        </h3>
        <button
          onClick={() => {
            setLoadWeight(100);
            setEffortApplied(50);
          }}
          className="p-2 text-slate-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setPulleyType('fixed')}
          className={`p-3 rounded-xl border-2 transition-all ${
            pulleyType === 'fixed'
              ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-primary/50'
          }`}
        >
          Fixed Pulley (സ്ഥിരകപ്പി)
        </button>
        <button
          onClick={() => setPulleyType('movable')}
          className={`p-3 rounded-xl border-2 transition-all ${
            pulleyType === 'movable'
              ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-primary/50'
          }`}
        >
          Movable Pulley (ചലനക്കപ്പി)
        </button>
      </div>

      {/* Simulation Area */}
      <div className="relative w-full h-80 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 overflow-hidden flex items-center justify-center">
        
        <svg width="400" height="300" viewBox="0 0 400 300" className="overflow-visible">
          <defs>
            <marker id="arrow-down" viewBox="0 0 10 10" refX="5" refY="10" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 5 10 L 10 0 z" fill="currentColor" />
            </marker>
            <marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="0" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 5 10 L 10 0 z" fill="currentColor" />
            </marker>
          </defs>

          {/* Ceiling */}
          <rect x="100" y="0" width="200" height="20" fill="#94a3b8" />
          {[120, 140, 160, 180, 200, 220, 240, 260, 280].map(x => (
            <line key={x} x1={x} y1="0" x2={x+10} y2="20" stroke="#cbd5e1" strokeWidth="2" />
          ))}

          {pulleyType === 'fixed' ? (
            <g>
              {/* Fixed Pulley Support */}
              <line x1="200" y1="20" x2="200" y2="60" stroke="#64748b" strokeWidth="6" />
              
              {/* Rope */}
              <path 
                d={`M 170 ${loadY + 20} L 170 60 A 30 30 0 0 1 230 60 L 230 ${effortY}`} 
                fill="none" 
                stroke="#d4d4d8" 
                strokeWidth="4" 
                style={{ transition: 'all 0.5s ease' }}
              />

              {/* Pulley Wheel */}
              <circle cx="200" cy="60" r="30" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="200" cy="60" r="5" fill="#64748b" />

              {/* Load */}
              <g transform={`translate(170, ${loadY + 20})`} style={{ transition: 'all 0.5s ease' }}>
                <rect x="-25" y="0" width="50" height="50" fill="#ef4444" rx="4" />
                <text x="0" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L</text>
                <text x="0" y="40" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{loadWeight}N</text>
              </g>

              {/* Effort Arrow */}
              <g transform={`translate(230, ${effortY})`} style={{ transition: 'all 0.5s ease' }}>
                <line x1="0" y1="0" x2="0" y2="40" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-down)" className="text-blue-500" />
                <text x="20" y="25" fill="#3b82f6" fontSize="14" fontWeight="bold">E = {effortApplied}N</text>
              </g>
            </g>
          ) : (
            <g>
              {/* Movable Pulley Rope fixed to ceiling */}
              <line x1="170" y1="20" x2="170" y2={loadY + 60} stroke="#d4d4d8" strokeWidth="4" style={{ transition: 'all 0.5s ease' }} />
              
              {/* Rope around movable pulley to effort */}
              <path 
                d={`M 170 ${loadY + 60} A 30 30 0 0 0 230 ${loadY + 60} L 230 ${effortY}`} 
                fill="none" 
                stroke="#d4d4d8" 
                strokeWidth="4" 
                style={{ transition: 'all 0.5s ease' }}
              />

              {/* Movable Pulley Wheel */}
              <g transform={`translate(200, ${loadY + 60})`} style={{ transition: 'all 0.5s ease' }}>
                <circle cx="0" cy="0" r="30" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="4" />
                <circle cx="0" cy="0" r="5" fill="#64748b" />
                {/* Hook */}
                <line x1="0" y1="0" x2="0" y2="40" stroke="#64748b" strokeWidth="4" />
              </g>

              {/* Load */}
              <g transform={`translate(200, ${loadY + 100})`} style={{ transition: 'all 0.5s ease' }}>
                <rect x="-25" y="0" width="50" height="50" fill="#ef4444" rx="4" />
                <text x="0" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L</text>
                <text x="0" y="40" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{loadWeight}N</text>
              </g>

              {/* Effort Arrow (Pulling UP for movable pulley) */}
              <g transform={`translate(230, ${effortY})`} style={{ transition: 'all 0.5s ease' }}>
                <line x1="0" y1="40" x2="0" y2="0" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-up)" className="text-blue-500" />
                <text x="20" y="25" fill="#3b82f6" fontSize="14" fontWeight="bold">E = {effortApplied}N</text>
              </g>
            </g>
          )}

        </svg>

        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${isLifting ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
          {isLifting ? 'Lifting Load' : 'Not Enough Effort'}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Forces</h4>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Load Weight (N): {loadWeight}
              </label>
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={loadWeight}
                onChange={(e) => setLoadWeight(Number(e.target.value))}
                className="w-full accent-red-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Applied Effort (N): {effortApplied}
              </label>
              <input
                type="range"
                min="10"
                max="200"
                step="10"
                value={effortApplied}
                onChange={(e) => setEffortApplied(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-brand-primary/5 dark:bg-brand-primary/10 p-6 rounded-xl border border-brand-primary/20 flex flex-col justify-center">
          <h4 className="font-bold text-brand-primary dark:text-brand-accent mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Calculations
          </h4>
          
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
              <span>Mechanical Advantage (MA):</span>
              <span className="font-mono font-bold text-brand-primary">{ma}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
              <span>Required Effort (Load / MA):</span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{requiredEffort} N</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span>Status:</span>
              <span className={`font-bold ${isLifting ? 'text-green-600' : 'text-red-500'}`}>
                {isLifting ? 'Load is lifted' : 'Need more effort'}
              </span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-600 dark:text-slate-400 italic">
            {pulleyType === 'fixed' 
              ? "A fixed pulley has MA = 1. It does not reduce the effort needed, but changes the direction of force to a convenient downward pull." 
              : "A movable pulley has MA = 2. It reduces the effort required to half of the load weight, but you must pull the rope twice as far."}
          </div>
        </div>
      </div>
    </div>
  );
}
