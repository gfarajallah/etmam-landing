import React from 'react';
import { Instagram, Linkedin, Globe, MessageCircle } from 'lucide-react';

const content = {
ar: {
brand: "SmartBlocks",
tagline: "ابتكار عقاري واستشارات استراتيجية",
copyright: "© ٢٠٢٥ SmartBlocks. جميع الحقوق محفوظة.",
connect: "تواصل معنا"
},
en: {
brand: "SmartBlocks",
tagline: "Real Estate Innovation & Strategic Advisory",
copyright: "© 2025 SmartBlocks. All rights reserved.",
connect: "Connect With Us"
}
};

export default function Footer({ lang = 'ar' }) {
const t = content[lang];
const isRTL = lang === 'ar';

const socialLinks = [
{ icon: Instagram, url: 'https://www.instagram.com/ghassan_farajallah/', label: 'Instagram' },
{ icon: Linkedin, url: 'https://www.linkedin.com/in/ghassan-farajallah/', label: 'LinkedIn' },
{ icon: Globe, url: 'https://ghassan-farajallah-x2llxym.gamma.site/', label: 'Website' },
{ icon: MessageCircle, url: 'https://wa.me/971565450000', label: 'WhatsApp' }
];

return (
<footer className={`py-12 bg-[#0F172A] border-t border-slate-800 ${isRTL ? 'rtl' : 'ltr'}`}> <div className="max-w-6xl mx-auto px-6"> <div className="flex flex-col items-center gap-8 mb-8">

      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-1">
          {t.brand}
        </h3>
        <p className={`text-slate-400 text-sm ${isRTL ? 'font-arabic' : ''}`}>
          {t.tagline}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className={`text-[#C9A962] font-semibold text-sm ${isRTL ? 'font-arabic' : ''}`}>
          {t.connect}
        </p>

        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#C9A962] border border-slate-700 hover:border-[#C9A962] flex items-center justify-center transition-all duration-300 group"
            >
              <link.icon className="w-4 h-4 text-slate-400 group-hover:text-[#0F172A]" />
            </a>
          ))}
        </div>
      </div>

    </div>

    <div className="text-center border-t border-slate-800 pt-6">
      <p className={`text-slate-500 text-sm ${isRTL ? 'font-arabic' : ''}`}>
        {t.copyright}
      </p>
    </div>
  </div>
</footer>
);
}
