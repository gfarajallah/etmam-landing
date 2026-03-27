import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Ventures', path: '/ventures' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-navy-900/60 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center font-black text-navy-900 text-xl group-hover:scale-110 transition-transform premium-shadow">E</div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase group-hover:tracking-normal transition-all duration-500">ETMAM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-gold relative group ${location.pathname === link.path ? 'text-gold' : 'text-white/40'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          
          <button 
            onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
            className="flex items-center gap-2 text-white/40 hover:text-gold transition-all ml-6 group border border-white/10 px-3 py-1.5 rounded-sm hover:border-gold/50"
          >
            <Globe size={14} className="group-hover:rotate-180 transition-transform duration-700" />
            <span className="text-[10px] font-black uppercase tracking-widest">{lang}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] w-full h-screen bg-navy-900 border-l border-white/5 p-12 flex flex-col items-center justify-center gap-10 md:hidden overflow-hidden"
          >
             <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none" />
             <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black uppercase tracking-tighter ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'} transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={() => { setLang(lang === 'EN' ? 'AR' : 'EN'); setIsOpen(false); }}
              className="mt-10 flex items-center gap-3 text-gold border border-gold/30 px-8 py-4 rounded-sm"
            >
              <Globe size={20} />
              <span className="text-sm font-black uppercase tracking-widest">{lang === 'EN' ? 'Arabic' : 'English'}</span>
            </button>
            
            <button className="absolute top-10 right-10 text-white/50" onClick={() => setIsOpen(false)}>
              <X size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
