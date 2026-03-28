import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';

const PricingSlider = () => {
  const { lang } = useLanguage();
  const [value, setValue] = useState(500000);

  const calculateROI = (val) => (val * 0.12).toLocaleString();
  const calculateFees = (val) => (val * 0.01).toLocaleString();

  return (
    <div className="premium-card p-12 md:p-16 w-full max-w-4xl mx-auto border-[var(--accent-gold)]/30 backdrop-blur-3xl">
      <div className={`flex flex-col md:flex-row justify-between items-center mb-16 gap-8 ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
        <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
           <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 italic">
             {lang === 'en' ? 'Valuation Engine' : 'محرك التقييم'}
           </h3>
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-gold)]">
             {lang === 'en' ? 'Protocol 5.0 Simulation' : 'محاكاة بروتوكول 5.0'}
           </p>
        </div>
        <div className="text-5xl font-black gold-gradient-text tracking-tighter">
          ${value.toLocaleString()}
        </div>
      </div>

      <div className="relative h-24 flex items-center mb-20 px-4">
        <input 
          type="range" 
          min="100000" 
          max="5000000" 
          step="50000"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-1 bg-[var(--border-color)] appearance-none cursor-pointer rounded-full outline-none transition-all hover:bg-[var(--accent-gold)]/20"
          style={{
            background: `linear-gradient(to right, #C9A962 0%, #C9A962 ${(value - 100000) / 4900000 * 100}%, rgba(255,255,255,0.1) ${(value - 100000) / 4900000 * 100}%, rgba(255,255,255,0.1) 100%)`
          }}
        />
        <div 
          className="absolute -top-6 text-[9px] font-black pointer-events-none opacity-20"
          style={{ left: `${(value - 100000) / 4900000 * 100}%` }}
        >
          {lang === 'en' ? 'ADJUST MAGNITUDE' : 'ضبط النطاق'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: lang === 'en' ? 'Projected Yield' : 'العائد المتوقع', val: `$${calculateROI(value)}`, icon: <Zap size={18} className="text-[var(--accent-gold)]" /> },
          { label: lang === 'en' ? 'Platform Security' : 'أمان المنصة', val: '99.99%', icon: <ShieldCheck size={18} className="text-[var(--accent-gold)]" /> },
          { label: lang === 'en' ? 'Network Fees' : 'رسوم الشبكة', val: `$${calculateFees(value)}`, icon: <DollarSign size={18} className="text-[var(--accent-gold)]" /> }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className={`p-8 bg-[var(--bg-primary)]/40 border border-[var(--border-color)] rounded-sm ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div className={`flex items-center gap-4 mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              {item.icon}
              <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">{item.label}</span>
            </div>
            <div className="text-2xl font-black text-[var(--accent-gold)]">{item.val}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSlider;
