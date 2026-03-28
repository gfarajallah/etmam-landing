import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const ParallaxHero = ({ children }) => {
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 40,
        y: (clientY / innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springX = useSpring(mousePos.x, { stiffness: 100, damping: 30 });
  const springY = useSpring(mousePos.y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      {/* Background Layer (Deep Parallax) */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full blur-[200px]" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Foreground Layer (Subtle Overlay) */}
      <motion.div
        style={{ x: springX * -0.5, y: springY * -0.5 }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <div className="absolute top-10 right-10 w-2 h-2 bg-[var(--accent-gold)] rounded-full animate-ping" />
        <div className="absolute bottom-20 left-40 w-1 h-1 bg-[var(--accent-gold)] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </motion.div>
    </div>
  );
};

export default ParallaxHero;
