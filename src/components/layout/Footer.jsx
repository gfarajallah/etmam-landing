import React from 'react';
import { Linkedin, Instagram, MessageSquare, Mail, MapPin, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';

const Footer = () => {
  const { lang, t } = useLanguage();
  const isArabic = lang === 'ar';
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/ghassan-farajallah/', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, url: 'https://www.instagram.com/ghassan_farajallah/', label: 'Instagram' },
    { icon: <MessageSquare size={18} />, url: 'https://wa.me/971565450000', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] pt-40 pb-20 relative overflow-hidden transition-colors duration-700">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40 text-start">
          
          {/* 01. Brand Intelligence */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--accent-gold)] flex items-center justify-center text-[var(--bg-primary)] font-black text-2xl">E</div>
                <span className="text-3xl font-black uppercase tracking-tighter text-[var(--text-primary)]">ETMAM</span>
             </div>
             <div className="flex items-center gap-2 mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-emerald-500/60">Institutional Status: Operational</span>
             </div>
             <p className="text-[var(--text-primary)] opacity-40 text-base leading-relaxed font-light mb-12">
                {lang === 'en' 
                  ? "Elevating the real estate ecosystem through strategic tokenization, expert advisory, and executive education. Led by Ghassan Farajallah."
                  : "الارتقاء بالنظام البيئي العقاري من خلال الترميز الاستراتيجي والاستشارات الخبيرة والتعليم التنفيذي. بقيادة غسان فرج الله."}
             </p>
             <div className="flex gap-6">
                {socialLinks.map((link, i) => (
                  <a key={i} href={link.url} className="w-12 h-12 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] opacity-30 hover:opacity-100 hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-700 metallic-glow">
                    {link.icon}
                  </a>
                ))}
             </div>
          </div>

          {/* 02. Navigation Protocol */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--text-primary)] opacity-30 mb-12">{lang === 'en' ? 'Navigation' : 'الملاحة'}</h4>
             <ul className="space-y-8">
                {[
                  { name: t('nav_about'), path: '/about' },
                  { name: t('nav_academy'), path: '/academy' },
                  { name: t('nav_solutions'), path: '/solutions' },
                  { name: t('nav_ventures'), path: '/ventures' },
                  { name: t('nav_contact'), path: '/contact' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="text-[var(--text-primary)] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all font-black text-xs uppercase tracking-widest flex items-center gap-3 group">
                       <span className="w-0 group-hover:w-4 h-[1px] bg-[var(--accent-gold)] transition-all" />
                       {item.name}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* 03. Communication Node */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--text-primary)] opacity-30 mb-12">{lang === 'en' ? 'Protocol Links' : 'روابط البروتوكول'}</h4>
             <ul className="space-y-10 text-[var(--text-primary)] opacity-50 text-sm font-light">
                <li className="flex items-center gap-5">
                   <Mail size={20} className="text-[var(--accent-gold)]/60" />
                   <span className="tracking-tight">info@etmam.net</span>
                </li>
                <li className="flex items-center gap-5">
                   <MapPin size={20} className="text-[var(--accent-gold)]/60" />
                   <span className="tracking-tight uppercase">{lang === 'en' ? 'Dubai, United Arab Emirates' : 'دبي، الإمارات العربية المتحدة'}</span>
                </li>
                <li className="flex items-center gap-5">
                   <ShieldCheck size={20} className="text-[var(--accent-gold)]/60" />
                   <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'en' ? 'Institutional Privacy' : 'الخصوصية المؤسسية'}</span>
                </li>
             </ul>
          </div>

          {/* 04. Executive Intelligence */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--text-primary)] opacity-30 mb-12">{lang === 'en' ? 'Newsletter' : 'النشرة الإخبارية'}</h4>
             <p className="text-[var(--text-primary)] opacity-30 text-xs mb-10 font-light italic leading-relaxed">
               {lang === 'en' ? 'Secure exclusive strategic updates from the ETMAM intelligence unit.' : 'احصل على تحديثات استراتيجية حصرية من وحدة استخبارات إتمام.'}
             </p>
             <div className="relative group/input">
                <input type="email" placeholder="professional@domain.com" className="w-full bg-transparent border-b border-[var(--border-color)] pb-6 text-[var(--text-primary)] focus:border-[var(--accent-gold)] outline-none transition-all placeholder:text-[var(--text-primary)]/20 font-light" />
                <button className={`absolute ${isArabic ? 'left-0' : 'right-0'} rtl:text-left bottom-6 text-[var(--accent-gold)]/40 group-hover/input:text-[var(--accent-gold)] group-hover/input:-translate-x-2 rtl:group-hover/input:translate-x-2 transition-all`}>
                   <ArrowRight size={24} className={isArabic ? 'rotate-180' : ''} />
                </button>
             </div>
             <div className="flex items-center gap-3 mt-10">
                <Activity size={14} className="text-emerald-500/40" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--text-primary)] opacity-20">{lang === 'en' ? 'Transmission Secure' : 'الإرسال آمن'}</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] pt-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-start">
           <div className="space-y-2">
              <p className="text-[var(--text-primary)] opacity-20 text-[10px] font-black uppercase tracking-[0.2em] leading-none">
                 © 2026 ETMAM CONSULTING. ALL RIGHTS RESERVED.
              </p>
              <p className="text-[var(--text-primary)] opacity-10 text-[9px] font-black uppercase tracking-[0.4em]">
                 BUILT WITH PRECISION & AUTHORITY.
              </p>
           </div>
           <div className="flex gap-12 text-[var(--text-primary)] opacity-30 text-[10px] font-black uppercase tracking-widest">
              <span className="hover:text-[var(--accent-gold)] cursor-pointer transition-colors">{lang === 'en' ? 'Privacy Charter' : 'ميثاق الخصوصية'}</span>
              <span className="hover:text-[var(--accent-gold)] cursor-pointer transition-colors">{lang === 'en' ? 'Operational Terms' : 'الشروط التشغيلية'}</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
