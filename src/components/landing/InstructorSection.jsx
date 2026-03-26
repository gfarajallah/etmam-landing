import React from 'react';
import { motion } from 'framer-motion';

const content = {
ar: {
title: "من يقود الورشة؟",
name: "غسان فرج الله",
role: "خبير في الاستثمار والتقنية العقارية",
description: "خبرة عملية في تطوير المشاريع، الاستثمار، وبناء المنصات التقنية في قطاع العقارات."
},
en: {
title: "Who Leads the Workshop?",
name: "Ghassan Farajallah",
role: "Expert in Real Estate & PropTech",
description: "Hands-on experience in project development, investment, and building real estate platforms."
}
};

export default function InstructorSection({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';

return (
<section className={`py-24 bg-white ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-4xl mx-auto px-6 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.title}
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
    >
      <h3 className={`text-2xl font-bold text-[#0F172A] mb-2 ${isRTL ? 'font-arabic' : ''}`}>
        {t.name}
      </h3>
      <p className="text-[#C9A962] font-semibold mb-4">
        {t.role}
      </p>
      <p className={`text-slate-600 ${isRTL ? 'font-arabic' : ''}`}>
        {t.description}
      </p>
    </motion.div>

  </div>
</section>
);
}
