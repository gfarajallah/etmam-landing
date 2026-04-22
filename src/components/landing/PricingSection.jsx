import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ArrowRight, Building } from 'lucide-react';

const content = {
ar: {
label: "قريباً",
title: "سجّل اهتمامك الآن",
subtitle: "وكن أول من يعلم بموعد الدورة القادمة",
tier: {
name: "الدورة القادمة",
description: "سجّل اهتمامك وكن أول من يحصل على التفاصيل",
features: [
"حضور الجلسة المباشرة",
"الإطار العملي للتقييم",
"قائمة التحقق القابلة للتحميل",
"تسجيل الجلسة لمدة ٣٠ يوم"
],
cta: "سجّل اهتمامك"
},
corporate: {
title: "الباقات المؤسسية",
description: "لتدريب فريقك أو مؤسستك بالكامل",
cta: "تواصل معنا"
}
},
en: {
label: "Coming Soon",
title: "Register Your Interest",
subtitle: "Be the first to know about the next session",
tier: {
name: "Next Session",
description: "Register your interest and get notified first",
features: [
"Live session attendance",
"Practical evaluation framework",
"Downloadable checklist",
"Session recording for 30 days"
],
cta: "Register Interest"
},
corporate: {
title: "Corporate Packages",
description: "For training your team or entire organization",
cta: "Contact Us"
}
}
};

export default function PricingSection({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';
const Arrow = isRTL ? ArrowLeft : ArrowRight;

return (
<section className={`py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-5xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <span className="inline-block px-5 py-2 mb-8 text-xs font-bold uppercase text-[#1E3A5A] bg-[#1E3A5A]/5 rounded-full">
        {t.label}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 ${isRTL ? 'font-arabic' : ''}`}>
        {t.title}
      </h2>
      <p className={`text-lg text-slate-500 ${isRTL ? 'font-arabic' : ''}`}>
        {t.subtitle}
      </p>
    </motion.div>

    <div className="max-w-2xl mx-auto mb-12">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E3A5A] p-10">

        <div className="text-center mb-8">
          <h3 className={`text-2xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
            {t.tier.name}
          </h3>
          <p className="text-slate-300">
            {t.tier.description}
          </p>
        </div>

        <ul className="space-y-4 mb-10">
          {t.tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#C9A962]" />
              <span className={`text-slate-200 ${isRTL ? 'font-arabic' : ''}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div data-tally-open="mJ5WOr" data-tally-overlay="1" data-tally-emoji-text="✨" data-tally-emoji-animation="wave" className="cursor-pointer inline-block w-full">
          <Button className="w-full py-6 text-lg font-bold rounded-xl bg-[#C9A962] hover:bg-[#E5C87B] text-[#0F172A]">
            {t.tier.cta}
            <Arrow className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </Button>
        </div>

      </div>
    </div>

    <div className="p-8 bg-white rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <Building className="w-7 h-7 text-[#C9A962]" />
        <div>
          <h3 className={`text-xl font-bold text-[#0F172A] ${isRTL ? 'font-arabic' : ''}`}>
            {t.corporate.title}
          </h3>
          <p className="text-slate-500">
            {t.corporate.description}
          </p>
        </div>
      </div>

      <div data-tally-open="mJ5WOr" data-tally-overlay="1" data-tally-emoji-text="🏢" data-tally-emoji-animation="wave" className="cursor-pointer inline-block">
        <Button variant="outline" className="px-6 py-4 rounded-xl">
          {t.corporate.cta}
        </Button>
      </div>
    </div>

  </div>
</section>
);
}
