import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight, ShieldCheck, Clock, MapPin, Activity } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';
import PremiumButton from '@/components/ui/PremiumButton';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const Contact = () => {
  const { t, lang } = useLanguage();
  const isArabic = lang === 'ar';

  const infoItems = [
    { 
      label: lang === 'en' ? "Direct Intelligence" : "المراسلة المباشرة", 
      value: "info@etmam.net", 
      icon: <Mail className="text-[var(--accent-gold)]" size={32} />,
      sub: lang === 'en' ? "Status: 12h Global SLA" : "الحالة: استجابة عالمية خلال 12 ساعة"
    },
    { 
      label: lang === 'en' ? "Executive Network" : "الشبكة التنفيذية", 
      value: "linkedin.com/in/ghassanfarajallah", 
      icon: <Linkedin className="text-[var(--accent-gold)]" size={32} />,
      sub: lang === 'en' ? "Strategic Updates Hub" : "مركز التحديثات الاستراتيجية"
    },
    { 
      label: lang === 'en' ? "Operational HQ" : "المقر التشغيلي", 
      value: lang === 'en' ? "Dubai, United Arab Emirates" : "دبي، الإمارات العربية المتحدة", 
      icon: <MapPin className="text-[var(--accent-gold)]" size={32} />,
      sub: lang === 'en' ? "Financial District (DIFC)" : "مركز دبي المالي العالمي (DIFC)"
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* 01. Protocol Hero */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl text-start uppercase">
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-10 rtl:flex-row-reverse">
               <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
               <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.6em]">{lang === 'en' ? 'Engagement Node' : 'نموذج التفاعل المستمر'}</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-[clamp(3.5rem,8vw,10rem)] font-black mb-16 leading-[0.8] tracking-tighter italic">
              {lang === 'en' ? <>Initiate <br /><span className="text-[var(--accent-gold)] not-italic">Protocol.</span></> : <>بدء <br /><span className="text-[var(--accent-gold)] not-italic">البروتوكول.</span></>}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-2xl md:text-3xl text-[var(--text-primary)] opacity-60 leading-relaxed font-light max-w-3xl lowercase first-letter:uppercase">
              {t('contact_subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 02. Architecture: Executive Interaction Grid */}
      <section className="py-40 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[var(--accent-gold)]/[0.03] blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-20 order-2 lg:order-none">
             <div className="space-y-10">
                {infoItems.map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="flex gap-10 group items-center text-start border border-[var(--border-color)] p-10 bg-[var(--bg-secondary)]/30 backdrop-blur-xl metallic-glow">
                     <div className="w-20 h-20 bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent-gold)] transition-all duration-700">
                        {item.icon}
                     </div>
                     <div className="flex-grow">
                        <h4 className="text-[9px] font-black text-[var(--accent-gold)] opacity-40 uppercase tracking-[0.5em] mb-3">{item.label}</h4>
                        <p className="text-2xl font-black group-hover:text-[var(--accent-gold)] transition-colors">{item.value}</p>
                        <div className="flex items-center gap-3 mt-3 text-[var(--text-primary)] opacity-20 uppercase font-black text-[8px] tracking-[0.3em]">
                           <Activity size={10} className="text-emerald-500 animate-pulse" />
                           <span>{item.sub}</span>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>

             {/* Action Protocol: WhatsApp High-Priority */}
             <motion.div variants={fadeUpVariant} className="p-16 glass-card border-[var(--accent-gold)]/20 shadow-[0_0_50px_rgba(201,169,98,0.1)] relative overflow-hidden text-start">
                <div className="absolute top-0 end-0 p-8">
                   <Clock className="text-[var(--accent-gold)]/20 animate-spin-slow" size={48} />
                </div>
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight italic">
                  {lang === 'en' ? <>Priority <span className="not-italic text-[var(--accent-gold)]">Access.</span></> : <>الوصول <span className="not-italic text-[var(--accent-gold)]">ذو الأولوية.</span></>}
                </h4>
                <p className="text-[var(--text-primary)] opacity-40 text-lg leading-relaxed font-light mb-12 max-w-sm">
                   {lang === 'en' 
                     ? "For immediate institutional queries and strategic emergencies, our WhatsApp Protocol is online."
                     : "للاستفسارات المؤسسية الفورية وحالات الطوارئ الاستراتيجية، بروتوكول واتساب متاح الآن."}
                </p>
                <a href="https://wa.me/message/YOUR_LINK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-6 px-12 py-5 bg-[var(--accent-gold)] text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-700 shadow-[0_10px_40px_rgba(201,169,98,0.3)]">
                   {lang === 'en' ? "INITIATE CHAT" : "بدء المحادثة"}
                   <ArrowRight size={18} className={isArabic ? 'rotate-180' : ''} />
                </a>
             </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 glass-card rounded-xl border-[var(--border-color)] shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-[var(--bg-secondary)]/90 relative overflow-hidden backdrop-blur-3xl"
          >
             {/* Security Scan line effect */}
             <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }} 
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 w-full h-[1px] bg-[var(--accent-gold)]/20 shadow-[0_0_15px_rgba(201,169,98,0.5)] z-20 pointer-events-none" 
             />

             <div className="flex items-center justify-between mb-16 relative z-10 rtl:flex-row-reverse">
                <h3 className="text-4xl font-black uppercase tracking-tighter italic">
                   {lang === 'en' ? <>Security <span className="not-italic text-[var(--accent-gold)]">Inquiry.</span></> : <>استقصاء <span className="not-italic text-[var(--accent-gold)]">أمني.</span></>}
                </h3>
                <div className="flex items-center gap-3 rtl:flex-row-reverse">
                   <ShieldCheck className="text-emerald-500" size={20} />
                   <span className="text-[9px] font-black uppercase tracking-widest text-[var(--accent-gold)]">ENCRYPTED</span>
                </div>
             </div>
             
             <form className="space-y-10 relative z-10 text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                    <label className="text-[8px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-3 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-[0.4em]">{t('contact_label_name')}</label>
                    <input type="text" spellCheck="false" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl" placeholder="GHASSAN FARAJALLAH..." />
                  </div>
                  <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                    <label className="text-[8px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-3 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-[0.4em]">{t('contact_label_org')}</label>
                    <input type="text" spellCheck="false" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl" placeholder="ENTITY ALPHA..." />
                  </div>
                </div>

                <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                  <label className="text-[8px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-3 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-[0.4em]">{t('contact_label_email')}</label>
                  <input type="email" spellCheck="false" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl" placeholder="professional@domain.com" />
                </div>

                <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                  <label className="text-[8px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-3 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-[0.4em]">{t('contact_label_type')}</label>
                  <select className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none font-light text-xl appearance-none cursor-pointer leading-loose">
                     <option value="" disabled className="bg-[var(--bg-secondary)] opacity-20 italic">SELECT TRACK...</option>
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">01. Institutional Consulting</option>
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">02. Venture Partnership</option>
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">03. Technology Auditing</option>
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">04. Media / Keynote Strategy</option>
                  </select>
                </div>

                <div className="relative group/field border-b border-[var(--border-color)] pb-8 focus-within:border-[var(--accent-gold)] transition-all">
                  <label className="text-[8px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-3 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-[0.4em]">{t('contact_label_brief')}</label>
                  <textarea rows="4" spellCheck="false" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl resize-none" placeholder={t('contact_placeholder_brief')}></textarea>
                </div>

                <button type="button" className="w-full group/btn relative overflow-hidden bg-white text-black py-8 text-xs transition-all duration-1000 font-black uppercase tracking-[0.4em] hover:bg-[var(--accent-gold)] outline-none">
                   <div className="relative z-10 flex items-center justify-center gap-6">
                      {t('contact_btn_transmit')} <ArrowRight size={20} className={`group-hover:translate-x-4 transition-transform duration-1000 ${isArabic ? 'rotate-180' : ''}`} />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms]" />
                </button>
             </form>

             <div className="mt-12 opacity-20 text-[7px] font-black tracking-[1em] text-center uppercase">
                Vetted // Secure Transmission Layer 6.2
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
