import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CircleAnglesInteractive() {
  const [mode, setMode] = useState<'arc' | 'cyclic' | 'semicircle'>('arc');
  const [points, setPoints] = useState([
    { id: 'A', angle: 0 },
    { id: 'B', angle: 120 },
    { id: 'P', angle: 240 },
    { id: 'Q', angle: 300 }
  ]);
  const [dragging, setDragging] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const center = { x: 150, y: 150 };
  const radius = 120;

  const getPos = (angleDeg: number) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: center.x + radius * Math.cos(angleRad),
      y: center.y + radius * Math.sin(angleRad)
    };
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || !svgRef.current) return;
    
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    
    if ('touches' in e) {
      pt.x = e.touches[0].clientX;
      pt.y = e.touches[0].clientY;
    } else {
      pt.x = e.clientX;
      pt.y = e.clientY;
    }
    
    const cursor = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    const dx = cursor.x - center.x;
    const dy = cursor.y - center.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;
    
    setPoints(pts => pts.map(p => p.id === dragging ? { ...p, angle } : p));
  };

  const calculateAngle = (p1: any, v: any, p2: any) => {
    const a = Math.sqrt(Math.pow(v.x - p1.x, 2) + Math.pow(v.y - p1.y, 2));
    const b = Math.sqrt(Math.pow(v.x - p2.x, 2) + Math.pow(v.y - p2.y, 2));
    const c = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    const rad = Math.acos((a * a + b * b - c * c) / (2 * a * b));
    return Math.round(rad * (180 / Math.PI));
  };

  const pA = getPos(points[0].angle);
  const pB = getPos(points[1].angle);
  const pP = getPos(points[2].angle);
  const pQ = getPos(points[3].angle);

  // Central Angle (Smallest Arc)
  let centralAngle = Math.abs(points[1].angle - points[0].angle);
  if (centralAngle > 180) centralAngle = 360 - centralAngle;
  centralAngle = Math.round(centralAngle);

  const angleAtP = calculateAngle(pA, pP, pB);
  const angleAtQ = calculateAngle(pA, pQ, pB);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-black text-brand-primary dark:text-white uppercase tracking-tight">Circle Geometry Lab</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Interactive Angle Properties</p>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          {[
            { id: 'arc', label: 'Arcs' },
            { id: 'cyclic', label: 'Cyclic' },
            { id: 'semicircle', label: 'Semicircle' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => {
                setMode(btn.id as any);
                if (btn.id === 'semicircle') {
                  setPoints(pts => pts.map(p => p.id === 'A' ? { ...p, angle: 0 } : p.id === 'B' ? { ...p, angle: 180 } : p));
                }
              }}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === btn.id ? 'bg-brand-primary text-white shadow-md' : 'text-slate-400'}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-[300px] mx-auto">
          <svg
            ref={svgRef}
            viewBox="0 0 300 300"
            className="w-full h-full cursor-crosshair touch-none"
            onMouseMove={handleMouseMove}
            onMouseUp={() => setDragging(null)}
            onTouchMove={handleMouseMove}
            onTouchEnd={() => setDragging(null)}
          >
            {/* Main Circle */}
            <circle cx={center.x} cy={center.y} r={radius} fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="4" />
            
            {mode === 'arc' && (
              <>
                {/* Central Angle Lines */}
                <line x1={center.x} y1={center.y} x2={pA.x} y2={pA.y} className="stroke-indigo-400 opacity-30" strokeWidth="2" strokeDasharray="4" />
                <line x1={center.x} y1={center.y} x2={pB.x} y2={pB.y} className="stroke-indigo-400 opacity-30" strokeWidth="2" strokeDasharray="4" />
                
                {/* Circumference Lines */}
                <path d={`M ${pA.x} ${pA.y} L ${pP.x} ${pP.y} L ${pB.x} ${pB.y}`} fill="none" className="stroke-brand-primary" strokeWidth="3" />
                <path d={`M ${pA.x} ${pA.y} L ${pQ.x} ${pQ.y} L ${pB.x} ${pB.y}`} fill="none" className="stroke-brand-teal" strokeWidth="3" strokeDasharray="4" />
              </>
            )}

            {mode === 'cyclic' && (
              <path d={`M ${pA.x} ${pA.y} L ${pB.x} ${pB.y} L ${pP.x} ${pP.y} L ${pQ.x} ${pQ.y} Z`} fill="rgba(79, 70, 229, 0.05)" className="stroke-brand-primary" strokeWidth="3" />
            )}

            {mode === 'semicircle' && (
              <>
                <line x1={pA.x} y1={pA.y} x2={pB.x} y2={pB.y} className="stroke-slate-400" strokeWidth="2" />
                <path d={`M ${pA.x} ${pA.y} L ${pP.x} ${pP.y} L ${pB.x} ${pB.y}`} fill="rgba(16, 185, 129, 0.05)" className="stroke-emerald-500" strokeWidth="3" />
              </>
            )}

            {/* Center Point */}
            <circle cx={center.x} cy={center.y} r="4" className="fill-slate-400" />

            {/* Draggable Points */}
            {points.map(p => {
              if (mode === 'semicircle' && p.id === 'Q') return null;
              const pos = getPos(p.angle);
              const isActive = dragging === p.id;
              const color = p.id === 'A' || p.id === 'B' ? 'bg-indigo-500' : p.id === 'P' ? 'bg-brand-primary' : 'bg-brand-teal';
              
              return (
                <g key={p.id} onMouseDown={() => setDragging(p.id)} onTouchStart={() => setDragging(p.id)}>
                  <circle cx={pos.x} cy={pos.y} r="12" className="fill-transparent cursor-pointer" />
                  <circle cx={pos.x} cy={pos.y} r={isActive ? "8" : "6"} className={`${isActive ? 'fill-white stroke-2 stroke-indigo-500' : 'fill-white stroke-2 stroke-slate-300'} transition-all`} />
                  <text x={pos.x} y={pos.y - 15} textAnchor="middle" className="text-[10px] font-black fill-slate-400">{p.id}</text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="space-y-6">
          {mode === 'arc' && (
            <div className="space-y-4">
              <div className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-[1.5rem] border border-indigo-100 dark:border-indigo-800">
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Central Angle</p>
                <p className="text-2xl font-black text-indigo-600">∠AOB = {centralAngle}°</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-1">Angle at Circumference (P)</p>
                <p className="text-2xl font-black text-brand-primary">∠APB = {angleAtP}°</p>
                <p className="text-[10px] font-bold text-slate-400 mt-2 italic">Observation: Angle at P is exactly half of Central Angle ({centralAngle}/2 = {centralAngle/2}°)</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-teal mb-1">Angle at Circumference (Q)</p>
                <p className="text-2xl font-black text-brand-teal">∠AQB = {angleAtQ}°</p>
              </div>
            </div>
          )}

          {mode === 'cyclic' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl">
                  <p className="text-[10px] font-black uppercase text-indigo-400 mb-1">∠A</p>
                  <p className="text-xl font-black text-indigo-600">{calculateAngle(pQ, pA, pB)}°</p>
                </div>
                <div className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl">
                  <p className="text-[10px] font-black uppercase text-indigo-400 mb-1">∠P (Opposite A)</p>
                  <p className="text-xl font-black text-indigo-600">{calculateAngle(pB, pP, pQ)}°</p>
                </div>
              </div>
              <div className="p-5 bg-brand-primary text-white rounded-[1.5rem] shadow-lg shadow-brand-primary/20">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Sum of Opposite Angles (A + P)</p>
                <p className="text-2xl font-black">Total = {calculateAngle(pQ, pA, pB) + calculateAngle(pB, pP, pQ)}°</p>
                <p className="text-[9px] font-bold mt-2 opacity-90 uppercase tracking-tighter">Rule: Opposite angles of a cyclic quadrilateral sum to 180°</p>
              </div>
            </div>
          )}

          {mode === 'semicircle' && (
            <div className="space-y-4">
              <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2rem] border border-emerald-100 dark:border-emerald-800 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Angle in a Semicircle</p>
                <p className="text-5xl font-black text-emerald-600 tracking-tighter">∠APB = {angleAtP}°</p>
                <div className="h-[2px] w-12 bg-emerald-200 mx-auto my-6" />
                <p className="text-sm font-bold text-slate-500 leading-relaxed italic">"Drag point P anywhere on the arc. The angle will remain exactly 90° as long as AB is the diameter."</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
