import React from 'react';
import { motion } from 'framer-motion';
import { Video, Clock, Globe, Presentation, ListChecks, Download } from 'lucide-react';

const content = {
ar: {
label: "تفاصيل الورشة",
title: "كيف ستتم الورشة؟",
details: [
{ icon: Video, label: "الصيغة", value: "أونلاين" },
{ icon: Clock, label: "المدة", value: "٣ ساعات" },
{ icon: Globe, label: "اللغة", value: "العربية" }
],
includes: {
title: "تتضمن الورشة:",
items: [
{ icon: Presentation, text: "جلسة مباشرة تفاعلية" },
{ icon: ListChecks, text: "إطار عمل عملي للتقييم" },
{ icon: Download, text: "قائمة تحقق قابلة للتحميل" }
]
}
},
en: {
label: "Workshop Details",
title: "How Will the Workshop Run?",
details: [
{ icon: Video, label: "Format", value: "Online" },
{ icon: Clock, label: "Duration", value: "3 Hours" },
{ icon: Globe, label: "Language", value: "Arabic" }
],
includes: {
title: "Workshop Includes:",
items: [
{ icon: Presentation, text: "Live interactive session" },
{ icon: ListChecks, text: "Practical evaluation framework" },
{ icon: Download, text: "Downloadable checklist" }
]
}
}
};

export default function DetailsSection({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';

return (
<section className={`py-24 bg-white ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-5xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#1E3A5A] bg-[#1E3A5A]/5 rounded-full">
        {t.label}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#0F172A] ${isRTL ? 'font-arabic' : ''}`}>
        {t.title}
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <motion.div
        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-4"
      >
        {t.details.map((detail, index) => (
          <div key={index} className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-14 h-14 rounded-xl bg-[#0F172A] flex items-center justify-center">
              <detail.icon className="w-7 h-7 text-[#C9A962]" />
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">{detail.label}</p>
              <p className={`text-xl font-bold text-[#0F172A] ${isRTL ? 'font-arabic' : ''}`}>
                {detail.value}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="p-8 bg-gradient-to-br from-[#0F172A] to-[#1E3A5A] rounded-2xl"
      >
        <h3 className={`text-2xl font-bold text-white mb-8 ${isRTL ? 'font-arabic' : ''}`}>
          {t.includes.title}
        </h3>
        <ul className="space-y-6">
          {t.includes.items.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#C9A962]/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#C9A962]" />
              </div>
              <span className={`text-lg text-slate-200 ${isRTL ? 'font-arabic' : ''}`}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

    </div>
  </div>
</section>
);
}
