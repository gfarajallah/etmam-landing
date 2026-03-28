import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InstitutionalBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax shifts based on scroll
  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -400]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 01. Base Ambient Gradient */}
      <div 
        className="absolute inset-0 bg-[var(--bg-primary)] transition-colors duration-1000"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--bg-secondary) 0%, var(--bg-primary) 100%)`,
          opacity: 0.8
        }}
      />

      {/* 02. The Institutional Grid (Parallax Layer 1) */}
      <motion.div 
        style={{ y: y1, x: mousePosition.x * 0.5 }}
        className="absolute inset-0 opacity-[0.03] transition-colors duration-1000"
      >
        <div 
          className="w-full h-[200%] border-[var(--text-primary)]"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </motion.div>

      {/* 03. Floating Macro Nodes (Parallax Layer 2) */}
      <motion.div 
        style={{ y: y2, x: mousePosition.x }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[60%] right-[5%] w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-[var(--accent-gold)]/[0.03] rounded-full blur-[200px]" />
      </motion.div>

      {/* 04. Tactical Markers (Static/Subtle) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
         <div className="w-[80vw] h-[80vh] border border-[var(--text-primary)] rounded-full border-dashed" />
         <div className="absolute w-[60vw] h-[60vh] border border-[var(--text-primary)] rounded-full border-dashed rotate-45" />
      </div>

      {/* 05. The Grain (Texture Overlap) */}
      <div className="absolute inset-0 bg-grain opacity-[0.02] mix-blend-overlay" />
    </div>
  );
};

export default InstitutionalBackground;
