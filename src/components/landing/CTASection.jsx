import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

const content = {
  ar: {
    title: "صمم مستقبلك الآن",
    subtitle: "انضم إلى نخبة المستثمرين والمطورين في رحلة التحول الرقمي",
    cta: "بادر بالتسجيل"
  },
  en: {
    title: "Ready to Scale?",
    subtitle: "Join the elite network of developers and investors defining the future of real estate liquidity. Limited quarterly protocol allocations.",
    cta: "Initiate Registration"
  }
};

export default function CTASection({ lang = 'en' }) {
  const t = content[lang] || content['en'];
  const [open, setOpen] = useState(false);

  return (
    <section className="py-60 bg-navy-900 relative overflow-hidden border-t border-white/5">
      {/* High-Conversion Moment: Rhythm Shift */}
      <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-gold/[0.05] rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6 mb-12">
               <div className="w-12 h-px bg-gold/40" />
               <span className="text-gold text-[10px] font-black uppercase tracking-[0.8em]">Final Protocol</span>
               <div className="w-12 h-px bg-gold/40" />
            </div>

            <h2 className="text-6xl md:text-[8.5rem] font-black text-white mb-12 uppercase tracking-tighter leading-[0.8] italic">
              {t.title.split('?').map((part, i) => (
                <span key={i} className={i === 0 ? "" : "text-gold italic not-italic"}>
                  {part}{i === 0 && t.title.includes('?') ? '?' : ''}
                </span>
              ))}
            </h2>

            <p className="text-2xl md:text-3xl text-white/40 mb-20 font-light max-w-3xl leading-relaxed">
              {t.subtitle}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-12">
               <button
                onClick={() => setOpen(true)}
                className="btn-premium px-20 py-8 shadow-gold/20 text-lg group"
               >
                 {t.cta} <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
               </button>
               
               <div className="flex items-center gap-8">
                  <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-widest">
                     <ShieldCheck size={20} className="text-gold/40" />
                     <span>Vetted Protocol</span>
                  </div>
                  <div className="w-px h-8 bg-white/10 hidden md:block" />
                  <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-widest">
                     <Activity size={20} className="text-emerald-500/40 animate-pulse" />
                     <span>Live Network</span>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      <RegistrationModal open={open} setOpen={setOpen} lang={lang} />
    </section>
  );
}
