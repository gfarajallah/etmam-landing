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
    <div className="pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
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
            <motion.p variants={fadeUpVariant} className="text-2xl md:text-4xl text-[var(--text-primary)] opacity-60 leading-relaxed font-light max-w-3xl lowercase first-letter:uppercase">
              {t('contact_subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 02. Architecture */}
      <section className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-20">
             <div className="space-y-16">
                {infoItems.map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="flex gap-12 group items-start text-start rtl:flex-row-reverse">
                     <div className="w-24 h-24 bg-[var(--text-primary)]/[0.03] border border-[var(--border-color)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent-gold)]/50 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 metallic-glow">
                        {item.icon}
                     </div>
                     <div className="pt-2">
                        <h4 className="text-[10px] font-black text-[var(--text-primary)] opacity-20 uppercase tracking-[0.5em] mb-4">{item.label}</h4>
                        <p className="text-3xl font-black group-hover:text-[var(--accent-gold)] transition-colors rtl:text-end rtl:ms-auto">{item.value}</p>
                        <div className="flex items-center gap-3 mt-4 text-[var(--text-primary)] opacity-20 uppercase font-black text-[9px] tracking-[0.3em] rtl:flex-row-reverse">
                           <Activity size={12} className="text-[var(--accent-gold)]/40 animate-pulse" />
                           <span>{item.sub}</span>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>

             <motion.div variants={fadeUpVariant} className="p-16 glass-card rounded-sm border-[var(--accent-gold)]/20 premium-shadow relative overflow-hidden backdrop-blur-3xl text-start">
                <div className="absolute top-0 end-0 w-48 h-48 bg-[var(--accent-gold)]/5 blur-[80px] translate-x-1/2 -translate-y-1/2 rtl:-translate-x-1/2" />
                <h4 className="text-2xl font-black mb-8 uppercase tracking-tight italic">
                  {lang === 'en' ? <>Institutional <span className="not-italic text-[var(--accent-gold)]">Notice.</span></> : <>إشعار <span className="not-italic text-[var(--accent-gold)]">مؤسسي.</span></>}
                </h4>
                <p className="text-[var(--text-primary)] opacity-40 text-lg leading-relaxed font-light mb-10">
                  {t('contact_notice_desc')}
                </p>
                <div className={`flex items-center gap-6 text-[10px] font-black text-[var(--accent-gold)] uppercase tracking-[0.4em] ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                   <ShieldCheck size={20} />
                   <span>Vetted // Secure Channels</span>
                </div>
             </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === 'en' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-24 glass-card rounded-sm border-[var(--border-color)] premium-shadow metallic-glow bg-[var(--bg-secondary)]/80 backdrop-blur-3xl"
          >
             <div className="flex items-center justify-between mb-16 rtl:flex-row-reverse">
                <h3 className="text-4xl font-black uppercase tracking-tighter italic">
                   {lang === 'en' ? <>Strategic <span className="not-italic text-[var(--accent-gold)]">Inquiry.</span></> : <>استفسار <span className="not-italic text-[var(--accent-gold)]">استراتيجي.</span></>}
                </h3>
                <div className="flex items-center gap-3 rtl:flex-row-reverse">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-[var(--text-primary)] opacity-30 italic">Protocol Live</span>
                </div>
             </div>
             
             <form className="space-y-12 group text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                    <label className="text-[9px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-4 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-widest">{t('contact_label_name')}</label>
                    <input type="text" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl" placeholder={t('contact_placeholder_name')} />
                  </div>
                  <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                    <label className="text-[9px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-4 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-widest">{t('contact_label_org')}</label>
                    <input type="text" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl" placeholder={t('contact_placeholder_org')} />
                  </div>
                </div>

                <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                  <label className="text-[9px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-4 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-widest">{t('contact_label_email')}</label>
                  <input type="email" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl" placeholder={t('contact_placeholder_email')} />
                </div>

                <div className="relative group/field border-b border-[var(--border-color)] pb-4 focus-within:border-[var(--accent-gold)] transition-all">
                  <label className="text-[9px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-4 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-widest">{t('contact_label_type')}</label>
                  <select className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none font-light text-xl appearance-none cursor-pointer leading-loose">
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">Institutional Consulting</option>
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">Venture Partnership</option>
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">Technology Auditing</option>
                     <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-2">Guest Speaking / Media</option>
                  </select>
                </div>

                <div className="relative group/field border-b border-[var(--border-color)] pb-8 focus-within:border-[var(--accent-gold)] transition-all">
                  <label className="text-[9px] text-[var(--text-primary)] opacity-20 uppercase font-black mb-4 block group-focus-within/field:text-[var(--accent-gold)] transition-colors tracking-widest">{t('contact_label_brief')}</label>
                  <textarea rows="4" className="w-full bg-transparent p-0 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)]/10 font-light text-xl resize-none" placeholder={t('contact_placeholder_brief')}></textarea>
                </div>

                <button type="button" className="w-full group/btn relative overflow-hidden bg-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/90 text-black py-8 text-sm transition-all duration-500 font-black uppercase tracking-[0.3em]">
                   <div className="relative z-10 flex items-center justify-center gap-6 rtl:flex-row-reverse">
                      {t('contact_btn_transmit')} <ArrowRight size={20} className={`group-hover:translate-x-3 transition-transform duration-500 rtl:group-hover:-translate-x-3 ${isArabic ? 'rotate-180' : ''}`} />
                   </div>
                </button>
             </form>

             <div className="mt-20 pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-10 text-start">
                <div className="flex items-center gap-3 rtl:flex-row-reverse">
                   <Clock size={16} className="text-[var(--accent-gold)]/30" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-primary)] opacity-20 leading-none">Global Sync Status: Operational</span>
                </div>
                <button className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)] opacity-40 hover:text-[var(--accent-gold)] transition-colors">
                   Executive Secretariart // Calendly
                </button>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
