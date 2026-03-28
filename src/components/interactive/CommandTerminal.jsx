import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandTerminal = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const commands = [
      '> INITIATING ETMAM PROTOCOL_V9.2',
      '> SYNCING INSTITUTIONAL LEDGER...',
      '> AUTHENTICATING GLOBAL LIQUIDITY...',
      '> ANALYZING MARKET NEURAL RADIUS...',
      '> CALCULATING TOKENIZATION COEFFICIENT: 0.985',
      '> ESTABLISHING SECURE GATEWAY...',
      '> ASSET CLASSIFICATION: CLASS-A PRIME',
      '> EXECUTION STATUS: OPTIMAL'
    ];
    let index = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev, commands[index]];
        if (newLines.length > 5) newLines.shift();
        return newLines;
      });
      index = (index + 1) % commands.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/80 backdrop-blur-xl border border-[var(--accent-gold)]/20 rounded-sm font-mono p-6 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/30" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
          <div className="w-2 h-2 rounded-full bg-green-500/30" />
        </div>
        <span className="text-[8px] uppercase tracking-[0.5em] text-[var(--accent-gold)]/40 font-bold">Terminal Output</span>
      </div>
      
      <div className="space-y-2">
        <AnimatePresence mode="popLayout">
          {lines.map((line, i) => (
            <motion.div
              key={line + i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] md:text-sm text-green-500/70 tracking-widest leading-relaxed flex items-center gap-3"
            >
              <span className="text-[var(--accent-gold)]/50">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div 
          animate={{ opacity: [0, 1] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-green-500/50 inline-block ml-1" 
        />
      </div>
    </div>
  );
};

export default CommandTerminal;
