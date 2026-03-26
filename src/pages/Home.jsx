import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/landing/HeroSection';
import TrustIndicators from '@/components/landing/TrustIndicators';
import ProblemSection from '@/components/landing/ProblemSection';
import InstructorSection from '@/components/landing/InstructorSection';
import VideoSection from '@/components/landing/VideoSection';
import WorkshopContent from '@/components/landing/WorkshopContent';
import AudienceSection from '@/components/landing/AudienceSection';
import DetailsSection from '@/components/landing/DetailsSection';
import PricingSection from '@/components/landing/PricingSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import CurrencySwitcher from '@/components/landing/CurrencySwitcher';

export default function Home() {
const [lang, setLang] = useState('ar');
const [currency, setCurrency] = useState('AED');

useEffect(() => {
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
if (urlLang === 'en' || urlLang === 'ar') {
// eslint-disable-next-line react-hooks/set-state-in-effect
setLang(urlLang);
}
}, []);

const toggleLanguage = (newLang) => {
const url = new URL(window.location.href);
url.searchParams.set('lang', newLang);
window.location.assign(url.toString());
};

return (
<div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}> <div className="fixed top-6 z-50 left-0 right-0 flex justify-between items-center px-6">
<motion.div
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
className="text-white font-bold text-xl tracking-tight"
>
SmartBlocks
</motion.div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex items-center gap-3"
    >
      <CurrencySwitcher currency={currency} setCurrency={setCurrency} lang={lang} />
      <div className="h-8 w-px bg-white/20" />
      
      <div className="relative bg-slate-800/50 backdrop-blur-md rounded-full p-1 border border-slate-700/50">
        {['ar', 'en'].map((l) => (
          <button
            key={l}
            onClick={() => toggleLanguage(l)}
            className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              lang === l ? 'text-[#0F172A]' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === l && (
              <motion.div
                layoutId="lang-active-workshop"
                className="absolute inset-0 bg-[#C9A962] rounded-full"
              />
            )}
            <span className="relative z-10 uppercase">{l}</span>
          </button>
        ))}
      </div>
    </motion.div>
  </div>

  <HeroSection lang={lang} />
  <TrustIndicators lang={lang} />
  <ProblemSection lang={lang} />
  <InstructorSection lang={lang} />
  <VideoSection lang={lang} />
  <WorkshopContent lang={lang} />
  <AudienceSection lang={lang} />
  <DetailsSection lang={lang} />
  <PricingSection lang={lang} />
  <CTASection lang={lang} />
  <Footer lang={lang} />
</div>

);
}
