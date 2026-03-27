import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Ventures', path: '/ventures' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? 'py-4 bg-navy-900/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Premium Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold flex items-center justify-center text-navy-900 font-black text-xl group-hover:scale-105 transition-transform duration-500 shadow-xl shadow-gold/20">E</div>
            <span className="text-2xl font-black uppercase tracking-tighter text-white">ETMAM</span>
          </Link>

          {/* Desktop Intelligence Bridge */}
          <div className="hidden lg:flex items-center gap-12 glass-card px-10 py-5 rounded-full border-white/5 metallic-glow backdrop-blur-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-white/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-[10px] font-black uppercase tracking-widest px-6 py-3 border border-white/5 rounded-full hover:border-gold/30">
               <Globe size={14} />
               <span>EN</span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Portal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-navy-900/98 backdrop-blur-3xl flex items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-12 p-10 text-center">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.8em] mb-4">Strategic Paths</span>
              {navLinks.map((link, idx) => (
                <motion.div
                   key={link.name}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl font-black uppercase tracking-tighter ${
                      location.pathname === link.path ? 'gold-gradient-text italic' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-20 pt-10 border-t border-white/5 w-full flex flex-col items-center gap-6">
                 <ShieldCheck className="text-gold opacity-30" size={32} />
                 <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">ETMAM EXECUTIVE PORTAL</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
