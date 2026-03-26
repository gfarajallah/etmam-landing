import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

const content = {
ar: {
title: "ابدأ الآن",
subtitle: "سجّل اهتمامك وكن جزءاً من التجربة",
cta: "سجّل الآن"
},
en: {
title: "Get Started",
subtitle: "Register your interest and be part of the experience",
cta: "Register Now"
}
};

export default function CTASection({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';
const Arrow = isRTL ? ArrowLeft : ArrowRight;

const [open, setOpen] = useState(false);

return (
<section className={`py-32 bg-[#0F172A] text-center ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-4xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.title}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`text-lg text-slate-300 mb-10 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.subtitle}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Button
        onClick={() => setOpen(true)}
        className="bg-[#C9A962] hover:bg-[#E5C87B] text-[#0F172A] px-10 py-6 text-lg font-bold rounded-xl"
      >
        {t.cta}
        <Arrow className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
      </Button>
    </motion.div>

  </div>

  <RegistrationModal open={open} setOpen={setOpen} lang={lang} />
</section>
);
}
