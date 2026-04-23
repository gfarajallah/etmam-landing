import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const InstitutionalAction = ({ 
  title, 
  action1 = { title: "The Platform", desc: "Secure Login // Onboarding", path: "/contact", icon: <ShieldCheck size={64} /> },
  action2 = { title: "The Academy", desc: "Intelligence // Masterclass", path: "/academy", icon: <Zap size={64} /> }
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <section className="py-60 relative overflow-hidden text-center bg-black/60 border-t border-[var(--border-color)] z-10">
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--accent-gold)]/5 blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={staggerContainer} 
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[1.2em] mb-12 block opacity-80">
          {lang === 'en' ? 'Final Protocol' : 'البروتوكول النهائي'}
        </motion.span>
        
        <motion.h2 
          variants={fadeUpVariant} 
          className="font-black uppercase tracking-tighter mb-24 leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem,8vw,7rem)' }}
        >
          {title || (lang === 'en' ? <>Enter the <span className="text-[var(--accent-gold)]">Arena.</span></> : <>ادخل <span className="text-[var(--accent-gold)]">الميدان.</span></>)}
        </motion.h2>

        <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Action 1 */}
          <Link to={action1.path} className="action-card">
            <div className="action-card-overlay" />
            <div className="action-card-icon">
              {action1.icon}
            </div>
            <h3 className="action-card-title">
              {lang === 'ar' && action1.title_ar ? action1.title_ar : action1.title}
            </h3>
            <p className="action-card-desc">
              {lang === 'ar' && action1.desc_ar ? action1.desc_ar : action1.desc}
            </p>
            <div className="action-card-btn">
              <ArrowRight size={24} className={`${isArabic ? 'rotate-180' : ''}`} />
            </div>
          </Link>

          {/* Action 2 */}
          <Link to={action2.path} className="action-card">
            <div className="action-card-overlay" />
            <div className="action-card-icon">
              {action2.icon}
            </div>
            <h3 className="action-card-title">
              {lang === 'ar' && action2.title_ar ? action2.title_ar : action2.title}
            </h3>
            <p className="action-card-desc">
              {lang === 'ar' && action2.desc_ar ? action2.desc_ar : action2.desc}
            </p>
            <div className="action-card-btn">
              <ArrowRight size={24} className={`${isArabic ? 'rotate-180' : ''}`} />
            </div>
          </Link>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="mt-32 opacity-30 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase font-inter leading-none">
           Institutional Engine // Layer 0.0 Gateway
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstitutionalAction;
