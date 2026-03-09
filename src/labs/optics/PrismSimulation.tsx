import React, { useState } from 'react';

export const PrismSimulation: React.FC = () => {
  const [angle, setAngle] = useState(30);

  // Calculate ray paths based on angle
  // Simplified for visualization
  const startX = 50;
  const startY = 150 + (angle - 30) * 2;
  const prismTop = [200, 50];
  const prismLeft = [100, 250];
  const prismRight = [300, 250];

  // Colors for dispersion
  const colors = [
    { name: 'Red', color: '#FF0000', offset: 0 },
    { name: 'Orange', color: '#FF7F00', offset: 2 },
    { name: 'Yellow', color: '#FFFF00', offset: 4 },
    { name: 'Green', color: '#00FF00', offset: 6 },
    { name: 'Blue', color: '#0000FF', offset: 8 },
    { name: 'Indigo', color: '#4B0082', offset: 10 },
    { name: 'Violet', color: '#9400D3', offset: 12 },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Prism Dispersion Simulation</h3>
      
      <svg width="400" height="300" viewBox="0 0 400 300" className="bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800">
        {/* Prism */}
        <polygon 
          points={`${prismTop[0]},${prismTop[1]} ${prismLeft[0]},${prismLeft[1]} ${prismRight[0]},${prismRight[1]}`} 
          fill="rgba(173, 216, 230, 0.3)" 
          stroke="#add8e6" 
          strokeWidth="2"
        />
        
        {/* Incident White Light */}
        <line 
          x1={startX} y1={startY} 
          x2="150" y2="150" 
          stroke="#64748b" 
          strokeWidth="3" 
          strokeDasharray="5,5"
        />
        <text x={startX} y={startY - 10} fontSize="12" fill="#64748b" fontWeight="bold">White Light</text>

        {/* Dispersed Rays */}
        {colors.map((c, i) => {
          const exitY = 150 + c.offset + (angle - 30);
          const finalY = 200 + c.offset * 3 + (angle - 30) * 2;
          return (
            <g key={c.name}>
              {/* Inside Prism */}
              <line 
                x1="150" y1="150" 
                x2="250" y2={exitY} 
                stroke={c.color} 
                strokeWidth="2" 
                opacity="0.6"
              />
              {/* Outside Prism */}
              <line 
                x1="250" y1={exitY} 
                x2="380" y2={finalY} 
                stroke={c.color} 
                strokeWidth="2"
              />
            </g>
          );
        })}
      </svg>

      <div className="w-full max-w-xs mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Angle of Incidence</span>
          <span className="text-sm font-bold text-brand-primary dark:text-white">{angle}°</span>
        </div>
        <input
          type="range"
          min="10"
          max="50"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
        />
        <p className="text-xs text-center text-slate-500 italic">
          Observe how different wavelengths (colours) bend at different angles. Violet bends the most!
        </p>
      </div>
    </div>
  );
};
