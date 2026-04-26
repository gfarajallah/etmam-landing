import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';
import TextReveal from '@/components/ui/TextReveal';
import Magnetic from '@/components/ui/Magnetic';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const Academy = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [showPrezi, setShowPrezi] = useState(false);

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] pt-20 overflow-hidden">
      
      {/* ── MINIMALIST HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="/media/ghassan_keynote.jpg" 
            alt="Academy Leadership" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-32 relative z-30 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className={isArabic ? 'text-right' : 'text-left'}>
            <motion.div variants={fadeUpVariant} className={`flex items-center gap-6 mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="w-16 h-[1px] bg-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.8em]">
                {isArabic ? 'الأكاديمية // القيادة الإبداعية' : 'THE ACADEMY // CREATIVE LEADERSHIP'}
              </span>
            </motion.div>

            <TextReveal 
              text={isArabic ? 'القيادة تتجاوز الأدوات.' : 'Leadership Beyond Tools.'}
              className="display-title mb-10 italic"
            />

            <motion.p variants={fadeUpVariant} className="body-text max-w-2xl mb-16 opacity-60">
              {isArabic 
                ? 'نحن لا نقدم دورات، نحن نشكل العقلية التي تقود القطاع العقاري من خلال دمج التميز التقني بالسيادة الاستراتيجية.'
                : 'We don’t offer courses; we shape the mindset that dominates the real estate sector by merging technical excellence with strategic sovereignty.'}
            </motion.p>

            <motion.div variants={fadeUpVariant}>
              <Magnetic>
                <button 
                  onClick={() => setShowPrezi(true)}
                  className="px-16 py-8 bg-[var(--accent-gold)] text-black font-black uppercase tracking-widest flex items-center gap-4 hover:bg-[var(--accent-gold-light)] transition-all shadow-gold-glow"
                >
                  <Play size={20} fill="currentColor" />
                  {isArabic ? 'دخول العرض الاستراتيجي' : 'ENTER THE STRATEGIC MASTERCLASS'}
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PREZI MODAL ── */}
      <AnimatePresence>
        {showPrezi && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-7xl h-full max-h-[85vh] bg-black border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-14 bg-black border-b border-white/5 flex items-center justify-between px-8 z-10">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">ETMAM ACADEMY // STRATEGIC PREVIEW</span>
                <button onClick={() => setShowPrezi(false)} className="text-white/40 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="w-full h-full pt-14">
                <iframe 
                  src="https://prezi.com/view/UDin2MAQuK9KBKnhB6nG/embed" 
                  className="w-full h-full border-none"
                  allowFullScreen
                  title="Academy Prezi"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Academy;
