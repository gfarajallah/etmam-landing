import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, HelpCircle } from 'lucide-react';

const content = {
ar: {
title: "المشكلة",
subtitle: "الاستثمار بدون وضوح",
points: [
"مشاريع تبدو جذابة لكن بدون أساس قوي",
"وعود تسويقية بدون أرقام واضحة",
"قرارات تعتمد على الحدس لا التحليل",
"عدم فهم المخاطر الحقيقية"
]
},
en: {
title: "The Problem",
subtitle: "Investing Without Clarity",
points: [
"Projects that look attractive but lack solid fundamentals",
"Marketing promises without clear data",
"Decisions based on intuition rather than analysis",
"Lack of understanding of real risks"
]
}
};

export default function ProblemSection({ lang = 'ar' }) {
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
      className={`text-lg text-slate-500 mb-12 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.subtitle}
    </motion.p>

    <div className="grid md:grid-cols-2 gap-6">
      {t.points.map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200"
        >
          <AlertTriangle className="w-6 h-6 text-[#C9A962] mt-1" />
          <p className={`text-slate-700 ${isRTL ? 'font-arabic text-right' : ''}`}>
            {point}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
);
}
