import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const content = {
ar: {
title: "لمن هذه الورشة؟",
items: [
"المستثمرون في القطاع العقاري",
"رواد الأعمال في PropTech",
"مدراء الشركات العقارية",
"أي شخص يريد اتخاذ قرارات استثمارية أفضل"
]
},
en: {
title: "Who Is This For?",
items: [
"Real estate investors",
"PropTech entrepreneurs",
"Real estate executives",
"Anyone seeking better investment decisions"
]
}
};

export default function AudienceSection({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';

return (
<section className={`py-24 bg-slate-50 ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-5xl mx-auto px-6 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-3xl md:text-4xl font-bold text-[#0F172A] mb-12 ${isRTL ? 'font-arabic' : ''}`}
    >
      {t.title}
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-6">
      {t.items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-200"
        >
          <Users className="w-6 h-6 text-[#C9A962]" />
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
