import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const content = {
ar: {
title: "ماذا ستتعلم في هذه الورشة؟",
items: [
"كيف تقيم أي مشروع عقاري بشكل عملي",
"فهم المؤشرات الحقيقية للنجاح أو الفشل",
"تحليل المخاطر بطريقة احترافية",
"اتخاذ قرارات استثمارية مبنية على وضوح"
]
},
en: {
title: "What Will You Learn?",
items: [
"How to evaluate any real estate project practically",
"Understanding real indicators of success or failure",
"Professional risk analysis",
"Making clear, confident investment decisions"
]
}
};

export default function WorkshopContent({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';

return (
<section className={`py-24 bg-white ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-5xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-12 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.title}
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-6">
      {t.items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200"
        >
          <CheckCircle className="w-6 h-6 text-[#C9A962]" />
          <p className={`${isRTL ? 'font-arabic text-right' : ''}`}>
            {item}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
);
}
