import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';

const content = {
ar: {
indicators: [
{
icon: Shield,
value: "محتوى موثوق",
label: "بعيداً عن الترويج"
},
{
icon: Award,
value: "خبرة متخصصة",
label: "في التقنية العقارية"
},
{
icon: Users,
value: "مجتمع متخصص",
label: "من صناع القرار"
},
{
icon: Clock,
value: "٣ ساعات",
label: "من المعرفة المركزة"
}
]
},
en: {
indicators: [
{
icon: Shield,
value: "Trusted Content",
label: "Beyond promotion"
},
{
icon: Award,
value: "Specialized Expertise",
label: "In PropTech"
},
{
icon: Users,
value: "Professional Community",
label: "Of decision makers"
},
{
icon: Clock,
value: "3 Hours",
label: "Of focused knowledge"
}
]
}
};

export default function TrustIndicators({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';

return (
<section className={`py-20 bg-white relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}> <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50" />

  <div className="relative max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {t.indicators.map((indicator, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center group"
        >
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#C9A962]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E3A5A] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <indicator.icon className="w-6 h-6 text-[#C9A962]" />
              </div>
            </div>
          </div>
          <div className={`text-xl md:text-2xl font-bold text-[#0F172A] mb-2 ${isRTL ? 'font-arabic' : ''}`}>
            {indicator.value}
          </div>
          <div className={`text-sm text-slate-500 ${isRTL ? 'font-arabic' : ''}`}>
            {indicator.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
</section>
);
}
