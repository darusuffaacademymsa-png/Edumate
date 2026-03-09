import { useState, useEffect, useRef, MouseEvent } from 'react';
import { RotateCcw, Info } from 'lucide-react';

export function BarMagnetSimulation() {
  const [magnetX, setMagnetX] = useState(250);
  const [magnetY, setMagnetY] = useState(150);
  const [magnetAngle, setMagnetAngle] = useState(0);
  const [showFieldLines, setShowFieldLines] = useState(true);
  const [showCompass, setShowCompass] = useState(true);
  const [compassPos, setCompassPos] = useState({ x: 100, y: 100 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setMagnetX(250);
    setMagnetY(150);
    setMagnetAngle(0);
    setCompassPos({ x: 100, y: 100 });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Only update if within bounds
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setCompassPos({ x, y });
    }
  };

  // Calculate magnetic field vector at (x, y)
  const getFieldAt = (x: number, y: number) => {
    // Magnet poles positions (approximate)
    const poleDist = 60;
    const rad = (magnetAngle * Math.PI) / 180;
    
    const nx = magnetX + poleDist * Math.cos(rad);
    const ny = magnetY + poleDist * Math.sin(rad);
    const sx = magnetX - poleDist * Math.cos(rad);
    const sy = magnetY - poleDist * Math.sin(rad);

    // Field from North (away)
    const dxn = x - nx;
    const dyn = y - ny;
    const dn2 = dxn * dxn + dyn * dyn;
    const dn = Math.sqrt(dn2);
    const fnx = dxn / (dn2 * dn);
    const fny = dyn / (dn2 * dn);

    // Field from South (towards)
    const dxs = x - sx;
    const dys = y - sy;
    const ds2 = dxs * dxs + dys * dys;
    const ds = Math.sqrt(ds2);
    const fsx = -dxs / (ds2 * ds);
    const fsy = -dys / (ds2 * ds);

    // Total field
    const bx = fnx + fsx;
    const by = fny + fsy;
    const bAngle = Math.atan2(by, bx);
    
    return { bx, by, angle: bAngle };
  };

  const compassField = getFieldAt(compassPos.x, compassPos.y);

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span className="text-2xl">🧲</span>
          Bar Magnet Field Simulation (ബാർ കാന്തം സിമുലേഷൻ)
        </h3>
        <button
          onClick={handleReset}
          className="p-2 text-slate-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full h-80 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 overflow-hidden cursor-crosshair"
      >
        <svg width="100%" height="100%" viewBox="0 0 500 300" className="pointer-events-none">
          {/* Field Lines (Simplified representation) */}
          {showFieldLines && (
            <g opacity="0.3">
              {[...Array(8)].map((_, i) => {
                const r = 40 + i * 30;
                return (
                  <ellipse 
                    key={i} 
                    cx={magnetX} cy={magnetY} 
                    rx={r * 1.5} ry={r} 
                    fill="none" stroke="#3b82f6" strokeWidth="1" 
                    transform={`rotate(${magnetAngle}, ${magnetX}, ${magnetY})`}
                  />
                );
              })}
            </g>
          )}

          {/* Magnet */}
          <g transform={`translate(${magnetX}, ${magnetY}) rotate(${magnetAngle})`}>
            {/* South Pole */}
            <rect x="-80" y="-20" width="80" height="40" fill="#3b82f6" rx="2" />
            <text x="-40" y="5" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">S</text>
            
            {/* North Pole */}
            <rect x="0" y="-20" width="80" height="40" fill="#ef4444" rx="2" />
            <text x="40" y="5" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">N</text>
          </g>

          {/* Compass */}
          {showCompass && (
            <g transform={`translate(${compassPos.x}, ${compassPos.y}) rotate(${(compassField.angle * 180) / Math.PI})`}>
              <circle r="15" fill="white" stroke="#94a3b8" strokeWidth="1" />
              <path d="M -10 0 L 10 0 L 0 -12 Z" fill="#ef4444" />
              <path d="M -10 0 L 10 0 L 0 12 Z" fill="#3b82f6" />
              <circle r="2" fill="#1e293b" />
            </g>
          )}
        </svg>
        
        <div className="absolute bottom-4 left-4 text-xs text-slate-500 bg-white/80 dark:bg-slate-900/80 p-2 rounded border border-slate-200 dark:border-slate-700">
          Move mouse to place compass
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Controls</h4>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Magnet Rotation: {magnetAngle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={magnetAngle}
                onChange={(e) => setMagnetAngle(Number(e.target.value))}
                className="w-full accent-brand-primary"
              />
            </div>
            
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={showFieldLines} 
                  onChange={(e) => setShowFieldLines(e.target.checked)}
                  className="w-4 h-4 accent-brand-primary"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">Show Field Lines</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={showCompass} 
                  onChange={(e) => setShowCompass(e.target.checked)}
                  className="w-4 h-4 accent-brand-primary"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">Show Compass</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-brand-primary/5 dark:bg-brand-primary/10 p-6 rounded-xl border border-brand-primary/20 flex flex-col justify-center">
          <h4 className="font-bold text-brand-primary dark:text-brand-accent mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Key Concepts
          </h4>
          
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex gap-2">
              <span className="text-brand-primary font-bold">•</span>
              Magnetic field lines emerge from the North pole and enter the South pole.
            </li>
            <li className="flex gap-2">
              <span className="text-brand-primary font-bold">•</span>
              The compass needle aligns itself with the magnetic field at that point.
            </li>
            <li className="flex gap-2">
              <span className="text-brand-primary font-bold">•</span>
              The field is strongest near the poles where lines are most dense.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
