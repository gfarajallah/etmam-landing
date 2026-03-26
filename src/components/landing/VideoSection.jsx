import React from 'react';
import { motion } from 'framer-motion';

const content = {
ar: {
title: "نظرة سريعة",
subtitle: "شاهد كيف يمكن لهذه الورشة أن تغير طريقة تفكيرك"
},
en: {
title: "Quick Preview",
subtitle: "See how this workshop can transform your thinking"
}
};

export default function VideoSection({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';

return (
<section className={`py-24 bg-slate-50 ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-5xl mx-auto px-6 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.title}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`text-lg text-slate-500 mb-10 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.subtitle}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="aspect-video rounded-2xl overflow-hidden shadow-lg"
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Workshop Preview"
        frameBorder="0"
        allowFullScreen
      />
    </motion.div>

  </div>
</section>
);
}
