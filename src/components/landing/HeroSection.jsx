import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from 'lucide-react';

const content = {
ar: {
title: "هل تستثمر في مشروع عقاري... أم في قرار غير محسوب؟",
subtitle: "ورشة عملية مكثفة لتعلم كيفية تقييم المشاريع العقارية والتقنية بثقة ووضوح",
cta: "سجّل اهتمامك"
},
en: {
title: "Are You Investing in Real Estate... or in an Uncalculated Decision?",
subtitle: "An intensive workshop to help you evaluate real estate and proptech projects with clarity",
cta: "Register Your Interest"
}
};

export default function HeroSection({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';
const Arrow = isRTL ? ArrowLeft : ArrowRight;

return (
<section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>

  <div className="absolute inset-0 bg-[#0F172A]" />
  <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E3A5A]/60 to-[#0F172A]" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.title}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`text-lg md:text-xl text-slate-300 mb-10 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.subtitle}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <div data-tally-open="mJ5WOr" data-tally-overlay="1" data-tally-emoji-text="🚀" data-tally-emoji-animation="wave" className="cursor-pointer inline-block">
        <Button className="bg-[#C9A962] hover:bg-[#E5C87B] text-[#0F172A] px-10 py-6 text-lg font-bold rounded-xl">
          {t.cta}
          <Arrow className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
        </Button>
      </div>
    </motion.div>

  </div>
</section>
);
}
