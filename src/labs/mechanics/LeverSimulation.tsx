import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, RotateCcw } from 'lucide-react';

export function LeverSimulation() {
  const [leverClass, setLeverClass] = useState<1 | 2 | 3>(1);
  const [effortPos, setEffortPos] = useState(10);
  const [loadPos, setLoadPos] = useState(90);
  const [fulcrumPos, setFulcrumPos] = useState(50);
  
  const [effortValue, setEffortValue] = useState(50);
  const [loadValue, setLoadValue] = useState(50);

  // Constants
  const barLength = 400;
  const barY = 150;

  // Derived values based on class
  let currentEffortPos = effortPos;
  let currentLoadPos = loadPos;
  let currentFulcrumPos = fulcrumPos;

  if (leverClass === 1) {
    currentEffortPos = 10;
    currentLoadPos = 90;
    currentFulcrumPos = fulcrumPos; // User controls fulcrum
  } else if (leverClass === 2) {
    currentFulcrumPos = 10;
    currentEffortPos = 90;
    currentLoadPos = loadPos; // User controls load
  } else if (leverClass === 3) {
    currentFulcrumPos = 10;
    currentLoadPos = 90;
    currentEffortPos = effortPos; // User controls effort
  }

  // Calculate distances from fulcrum
  const dE = Math.abs(currentEffortPos - currentFulcrumPos);
  const dL = Math.abs(currentLoadPos - currentFulcrumPos);

  // Calculate MA
  const ma = dL === 0 ? 0 : dE / dL;

  // Calculate required effort to balance
  const requiredEffort = ma === 0 ? 0 : loadValue / ma;
  const isBalanced = Math.abs(effortValue - requiredEffort) < 2;

  // Calculate tilt angle based on imbalance
  const torqueEffort = effortValue * dE;
  const torqueLoad = loadValue * dL;
  let tiltAngle = 0;
  
  if (!isBalanced) {
    const netTorque = torqueEffort - torqueLoad;
    // Determine direction of tilt based on positions relative to fulcrum
    const effortIsLeft = currentEffortPos < currentFulcrumPos;
    const loadIsLeft = currentLoadPos < currentFulcrumPos;
    
    let leftTorque = 0;
    let rightTorque = 0;
    
    if (effortIsLeft) leftTorque += torqueEffort;
    else rightTorque += torqueEffort;
    
    if (loadIsLeft) leftTorque += torqueLoad;
    else rightTorque += torqueLoad;
    
    const maxTorque = 100 * 100; // max force * max distance
    tiltAngle = ((rightTorque - leftTorque) / maxTorque) * 30; // Max 30 degree tilt
    
    // Cap tilt
    if (tiltAngle > 20) tiltAngle = 20;
    if (tiltAngle < -20) tiltAngle = -20;
  }

  const handleReset = () => {
    setEffortValue(50);
    setLoadValue(50);
    if (leverClass === 1) setFulcrumPos(50);
    if (leverClass === 2) setLoadPos(50);
    if (leverClass === 3) setEffortPos(50);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span className="text-2xl">⚖️</span>
          Lever Simulation (ഉത്തോലക സിമുലേഷൻ)
        </h3>
        <button
          onClick={handleReset}
          className="p-2 text-slate-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((c) => (
          <button
            key={c}
            onClick={() => {
              setLeverClass(c as 1 | 2 | 3);
              handleReset();
            }}
            className={`p-3 rounded-xl border-2 transition-all ${
              leverClass === c
                ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-primary/50'
            }`}
          >
            Class {c} Lever
          </button>
        ))}
      </div>

      {/* Simulation Area */}
      <div className="relative w-full h-64 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 overflow-hidden flex items-center justify-center">
        
        {/* SVG Canvas */}
        <svg width="100%" height="100%" viewBox="0 0 500 300" className="overflow-visible">
          <defs>
            <marker id="arrow-down" viewBox="0 0 10 10" refX="5" refY="10" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 5 10 L 10 0 z" fill="currentColor" />
            </marker>
          </defs>

          {/* Ground */}
          <line x1="0" y1="250" x2="500" y2="250" stroke="#cbd5e1" strokeWidth="4" />

          {/* Lever System Group - Rotates around fulcrum */}
          <g transform={`translate(${currentFulcrumPos * 5}, ${barY}) rotate(${tiltAngle}) translate(${-currentFulcrumPos * 5}, ${-barY})`}>
            
            {/* The Bar */}
            <rect x="50" y={barY - 5} width="400" height="10" rx="5" fill="#94a3b8" />
            
            {/* Distance Markers */}
            {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(pos => (
              <line key={pos} x1={pos * 5} y1={barY - 5} x2={pos * 5} y2={barY + 5} stroke="#cbd5e1" strokeWidth="2" />
            ))}

            {/* Load */}
            <g transform={`translate(${currentLoadPos * 5}, ${barY - 20})`}>
              <rect x="-20" y="-40" width="40" height="40" fill="#ef4444" rx="4" />
              <text x="0" y="-15" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L</text>
              <text x="0" y="-55" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">{loadValue}N</text>
            </g>

            {/* Effort Arrow */}
            <g transform={`translate(${currentEffortPos * 5}, ${barY})`}>
              <line x1="0" y1="-60" x2="0" y2="-10" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-down)" className="text-blue-500" />
              <text x="0" y="-70" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">E = {effortValue}N</text>
            </g>

          </g>

          {/* Fulcrum (Stationary relative to rotation, but its position can change) */}
          <g transform={`translate(${currentFulcrumPos * 5}, ${barY + 5})`}>
            <polygon points="-15,30 15,30 0,0" fill="#f59e0b" />
            <text x="0" y="45" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">F</text>
          </g>

        </svg>

        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${isBalanced ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
          {isBalanced ? 'Balanced' : 'Unbalanced'}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Positions</h4>
            
            {leverClass === 1 && (
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Fulcrum Position
                </label>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={fulcrumPos}
                  onChange={(e) => setFulcrumPos(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            )}
            
            {leverClass === 2 && (
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Load Position
                </label>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={loadPos}
                  onChange={(e) => setLoadPos(Number(e.target.value))}
                  className="w-full accent-red-500"
                />
              </div>
            )}
            
            {leverClass === 3 && (
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Effort Position
                </label>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={effortPos}
                  onChange={(e) => setEffortPos(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>
            )}
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Forces</h4>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Load (N): {loadValue}
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={loadValue}
                onChange={(e) => setLoadValue(Number(e.target.value))}
                className="w-full accent-red-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Applied Effort (N): {effortValue}
              </label>
              <input
                type="range"
                min="10"
                max="200"
                value={effortValue}
                onChange={(e) => setEffortValue(Number(e.target.value))}
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
              <span>Distance to Effort (dE):</span>
              <span className="font-mono font-bold">{dE.toFixed(1)} units</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
              <span>Distance to Load (dL):</span>
              <span className="font-mono font-bold">{dL.toFixed(1)} units</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
              <span>Mechanical Advantage (MA = dE/dL):</span>
              <span className="font-mono font-bold text-brand-primary">{ma.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span>Required Effort to Balance:</span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{requiredEffort.toFixed(1)} N</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-600 dark:text-slate-400 italic">
            {leverClass === 1 && "Class 1: Fulcrum is between Load and Effort. MA can be >1, <1, or =1 depending on fulcrum position."}
            {leverClass === 2 && "Class 2: Load is between Fulcrum and Effort. dE is always greater than dL, so MA is always > 1."}
            {leverClass === 3 && "Class 3: Effort is between Fulcrum and Load. dL is always greater than dE, so MA is always < 1."}
          </div>
        </div>
      </div>
    </div>
  );
}
