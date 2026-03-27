import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

const content = {
  ar: {
    title: "صمم مستقبلك الآن",
    subtitle: "انضم إلى نخبة المستثمرين والمطورين في رحلة التحول الرقمي",
    cta: "بادر بالتسجيل"
  },
  en: {
    title: "Secure Your Position.",
    subtitle: "Join the elite network of developers and investors defining the future of real estate liquidity.",
    cta: "Initiate Registration"
  }
};

export default function CTASection({ lang = 'en' }) {
  const t = content[lang] || content['en'];
  const isRTL = lang === 'ar';
  const [open, setOpen] = useState(false);

  return (
    <section className="py-52 bg-navy-900 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gold/[0.03] rounded-full blur-[180px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="glass-card border-gold/20 p-16 md:p-32 rounded-sm premium-shadow text-center relative overflow-hidden group">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/20 group-hover:border-gold/50 transition-all duration-1000" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/20 group-hover:border-gold/50 transition-all duration-1000" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em] mb-10 block">{isRTL ? 'فرصة حصرية' : 'Exclusive Engagement'}</span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.9] italic">
              {t.title.split('.').map((part, i) => (
                <span key={i} className={i === 0 ? "" : "text-gold italic not-italic"}>
                  {part}{i === 0 && t.title.includes('.') ? '.' : ''}
                </span>
              ))}
            </h2>
            <p className="text-xl md:text-2xl text-white/40 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
               <button
                onClick={() => setOpen(true)}
                className="px-16 py-7 bg-gold text-navy-900 font-black uppercase tracking-widest text-xs hover:bg-white hover:scale-[1.05] transition-all premium-shadow flex items-center gap-4"
               >
                 {t.cta} <ArrowRight size={18} />
               </button>
               
               <div className="flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-gold" />
                  <span>Verified Channel</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      <RegistrationModal open={open} setOpen={setOpen} lang={lang} />
    </section>
  );
}
