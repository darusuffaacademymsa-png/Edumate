import { motion } from 'framer-motion';

export function SwingAnimation() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center overflow-hidden min-h-[400px]">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Oscillatory Motion</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Observe the to-and-fro motion of the swing about its equilibrium position.</p>
      </div>

      <div className="relative w-full max-w-md h-64 flex flex-col items-center justify-start pt-4">
        {/* Support Bar */}
        <div className="absolute top-0 w-64 h-4 bg-slate-700 dark:bg-slate-600 rounded-full z-10 shadow-lg"></div>
        {/* Support Pillars */}
        <div className="absolute top-0 left-1/2 -ml-32 w-4 h-64 bg-slate-600 dark:bg-slate-700 rounded-b-lg"></div>
        <div className="absolute top-0 right-1/2 -mr-32 w-4 h-64 bg-slate-600 dark:bg-slate-700 rounded-b-lg"></div>

        {/* The Swing */}
        <motion.div
          className="relative flex flex-col items-center origin-top w-full h-[200px]"
          animate={{ rotate: [30, -30, 30] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Swing Ropes */}
          <div className="absolute left-1/2 -ml-[20px] top-0 w-1 h-[180px] bg-slate-400 dark:bg-slate-500"></div>
          <div className="absolute right-1/2 -mr-[20px] top-0 w-1 h-[180px] bg-slate-400 dark:bg-slate-500"></div>
          
          {/* Swing Seat */}
          <div className="absolute bottom-[10px] w-24 h-4 bg-amber-600 dark:bg-amber-700 rounded-full shadow-lg z-20"></div>
          
          {/* Person on Swing (Simple representation) */}
          <div className="absolute bottom-[24px] flex flex-col items-center">
            {/* Body */}
            <div className="w-8 h-12 bg-indigo-500 rounded-t-lg z-10"></div>
            {/* Head */}
            <div className="w-6 h-6 bg-rose-300 rounded-full -mt-6 relative z-10"></div>
          </div>
        </motion.div>

        {/* Equilibrium Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 border-l-2 border-dashed border-slate-300 dark:border-slate-700 -z-10"></div>
      </div>
      
      <div className="mt-6 flex items-center justify-center gap-6">
         <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-slate-300 dark:bg-slate-700 border border-dashed rounded-full"></div>
           <span className="text-xs font-bold text-slate-500">Equilibrium Position</span>
         </div>
         <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
           <span className="text-xs font-bold text-slate-500">Maximum Displacement (Amplitude)</span>
         </div>
      </div>
    </div>
  );
}
