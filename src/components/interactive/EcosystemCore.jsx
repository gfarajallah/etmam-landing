import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Bot, Zap } from 'lucide-react';

const EcosystemCore = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[var(--accent-gold)]/5 rounded-full blur-[100px] z-0" />

      {/* Deep concentric orbit rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[90%] h-[90%] rounded-full border border-white/[0.03] border-dashed border-spacing-4"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[65%] h-[65%] rounded-full border border-[var(--accent-gold)]/[0.1] border-dashed"
      />

      {/* The Central Execution Core */}
      <div className="relative z-20 w-32 h-32 rounded-full border border-[var(--accent-gold)]/30 bg-black/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(201,169,98,0.2)]">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent blur-md"
        />
        <Zap className="text-[var(--accent-gold)] w-10 h-10 drop-shadow-[0_0_15px_rgba(201,169,98,0.8)]" />
      </div>

      {/* Node 1: Etmam Consultancy (Top) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[90%] h-[90%] z-10"
      >
        <motion.div 
          animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black/80 backdrop-blur-md border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          <Globe className="text-blue-400 w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Node 2: SmartBlocks Engine (Bottom Right) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: -13.33 }} // 120 degrees offset
        className="absolute w-[90%] h-[90%] z-10"
      >
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black/80 backdrop-blur-md border border-[var(--accent-gold)]/40 flex items-center justify-center shadow-[0_0_20px_rgba(201,169,98,0.3)]"
        >
          <Cpu className="text-[var(--accent-gold)] w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Node 3: SmartAgent AI (Bottom Left) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: -26.66 }} // 240 degrees offset
        className="absolute w-[90%] h-[90%] z-10"
      >
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          <Bot className="text-cyan-400 w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Central Connectivity Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-gold)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.circle 
          cx="50" cy="50" r="15" 
          fill="url(#pulseGlow)"
          animate={{ r: [15, 25, 15], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.1" />
      </svg>
      
      {/* Real-time Processing Overlay Data */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 text-xs font-mono text-white/30 hidden md:flex">
        <span>STATUS: ACTIVE_NODE</span>
        <span>YIELD_SYNC: 99.8%</span>
        <span>LATENCY: 0.2ms</span>
      </div>
    </div>
  );
};

export default EcosystemCore;
