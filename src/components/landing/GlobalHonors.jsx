import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/useLanguage';
import { Award, ShieldCheck, Globe, Star } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const GlobalHonors = () => {
  const { lang } = useLanguage();
  
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="py-60 bg-black relative z-10 overflow-hidden border-y border-[var(--border-color)]">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[var(--accent-gold)]/10 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="text-start"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-8 rtl:flex-row-reverse">
              <Star size={16} className="text-[var(--accent-gold)] fill-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.6em] uppercase">
                {lang === 'en' ? 'Global Authority' : 'السيادة العالمية'}
              </span>
            </motion.div>

            <motion.h2 variants={fadeUpVariant} className="text-5xl md:text-7xl font-black italic mb-12 leading-tight">
              {lang === 'en' ? (
                <>Elite Recognition. <br /><span className="text-[var(--accent-gold)] not-italic">Global Merit.</span></>
              ) : (
                <>تقدير نخبوِي. <br /><span className="text-[var(--accent-gold)] not-italic">استحقاق عالمي.</span></>
              )}
            </motion.h2>

            <motion.div variants={fadeUpVariant} className="space-y-10 mb-16">
              <div className="p-10 bg-white/[0.02] border-l-2 border-[var(--accent-gold)] backdrop-blur-sm rtl:border-l-0 rtl:border-r-2">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">
                  {lang === 'en' ? 'Outstanding Leadership Award' : 'جائزة التميز في قيادة الأعمال'}
                </h4>
                <p className="body-text opacity-70 leading-relaxed">
                  {lang === 'en' 
                    ? "Ghassan Farajallah was selected from over 300 global candidates at the CXO 2.0 Conference (Dubai 2025). This merit-based award recognizes visionaries who are actively shaping the future of AI and Blockchain."
                    : "تم اختيار غسان فرج الله من بين أكثر من 300 مرشح عالمي في مؤتمر CXO 2.0 (دبي 2025). تُمنح هذه الجائزة القائمة على الجدارة للقادة الذين يشكلون مستقبل الذكاء الاصطناعي والبلوكشين."}
                </p>
                <div className="mt-8 flex items-center gap-4 text-[var(--accent-gold)] text-[10px] font-black tracking-widest uppercase">
                  <ShieldCheck size={18} />
                  <span>{lang === 'en' ? 'Non-Promotional // 100% Merit Based' : 'جائزة غير ترويجية // قائمة على الجدارة بنسبة 100%'}</span>
                </div>
              </div>

              <div className="p-10 bg-white/[0.02] border-l-2 border-white/10 backdrop-blur-sm rtl:border-l-0 rtl:border-r-2">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">
                  {lang === 'en' ? 'Sheikh Khalifa Excellence Award' : 'جائزة الشيخ خليفة للامتياز'}
                </h4>
                <p className="body-text opacity-70 leading-relaxed">
                  {lang === 'en'
                    ? "A strategic contribution to achieving the highest levels of institutional excellence and quality in corporate operations within the UAE."
                    : "مساهمة استراتيجية في تحقيق أعلى مستويات التميز المؤسسي والجودة في العمل المؤسسي داخل دولة الإمارات العربية المتحدة."}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <a 
                href="https://www.linkedin.com/posts/ghassan-farajallah_aeiaebaepaeuabraepaezaeuabraepaesaesaev-aesaebaesabraetaesaevaexaetabraesaevaepaeyaeaaey-activity-7374095666995748864-FmIC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 px-12 py-6 bg-[var(--accent-gold)] text-black font-black uppercase tracking-widest hover:bg-white transition-all group"
              >
                {lang === 'en' ? 'View Official Announcement' : 'مشاهدة الإعلان الرسمي'}
                <Globe size={18} className="group-hover:rotate-45 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: VISUAL COMPOSITION */}
          <div className="relative h-[600px] md:h-[800px] flex items-center justify-center">
            {/* SKEA Graphic Background */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[70%] aspect-square opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 z-0"
            >
              <img 
                src="/media/skea_excellence_award.png" 
                alt="SKEA Award" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Ghassan holding Award - Foreground */}
            <motion.div 
              style={{ y: y2 }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full overflow-visible group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/media/cxo_leadership_award.png" 
                  alt="Ghassan Farajallah - Outstanding Leadership Award" 
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_0_80px_rgba(201,169,98,0.3)] group-hover:drop-shadow-[0_0_120px_rgba(201,169,98,0.5)] transition-all duration-1000"
                />
                
                {/* Floating Labels */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute top-1/3 -right-4 md:-right-20 z-30 bg-black/80 backdrop-blur-xl border border-[var(--accent-gold)] p-6"
                >
                  <span className="text-[10px] font-black text-[var(--accent-gold)] uppercase tracking-widest block mb-1">Global Top 5</span>
                  <span className="text-lg font-black italic">Entrepreneur of the Year</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-1/4 -left-4 md:-left-20 z-30 bg-black/80 backdrop-blur-xl border border-white/10 p-6"
                >
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest block mb-1">Vetted by</span>
                  <span className="text-lg font-black italic">CXO 2.0 Board</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Gold Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-t from-[var(--accent-gold)] to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalHonors;
