import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();
  const isArabic = lang === 'ar';

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_solutions'), path: '/solutions' },
    { name: t('nav_ventures'), path: '/ventures' },
    { name: t('nav_contact'), path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-black/30 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="relative z-10 group">
            <span className="text-3xl font-black tracking-tighter uppercase flex items-center gap-2 text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] group-hover:text-glow-gold transition-all duration-500">
              ETMAM <span className="w-2 h-2 bg-[var(--accent-gold)] animate-pulse rounded-full"></span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] font-black uppercase tracking-[0.2em] transition-colors relative group py-2 ${
                    location.pathname === link.path ? 'text-[var(--accent-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--accent-gold)]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 ${isArabic ? 'right-0' : 'left-0'} h-[1px] bg-[var(--accent-gold)] transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-6 ps-10 border-s border-[var(--border-color)]">
               <motion.button 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 onClick={toggleLanguage}
                 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--accent-gold)]"
               >
                 <Languages size={16} />
                 {lang === 'en' ? 'AR' : 'EN'}
               </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-6">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-primary)]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex flex-col gap-10 mb-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter hover:text-[var(--accent-gold)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col items-center gap-12 pt-12 border-t border-[var(--border-color)] w-full justify-center">
               <button 
                 onClick={() => { toggleLanguage(); setIsOpen(false); }}
                 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-[var(--accent-gold)]"
               >
                 <Languages size={20} />
                 {lang === 'en' ? 'VIEW ARABIC' : 'VIEW ENGLISH'}
               </button>
               <ShieldCheck className="text-[var(--accent-gold)] opacity-30" size={32} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
