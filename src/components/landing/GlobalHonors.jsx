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

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="text-start space-y-16"
          >
            <div className="space-y-6">
              <motion.div variants={fadeUpVariant} className="flex items-center gap-4 text-[var(--accent-gold)] rtl:flex-row-reverse">
                <div className="w-12 h-[1px] bg-current" />
                <span className="text-[10px] font-black tracking-[0.6em] uppercase">
                  {lang === 'en' ? 'Global Authority' : 'السيادة العالمية'}
                </span>
              </motion.div>

              <motion.h2 variants={fadeUpVariant} className="text-5xl md:text-7xl font-black italic mb-12 leading-tight">
                {lang === 'en' ? (
                  <>ELITE <br />RECOGNITION. <br /><span className="text-[var(--accent-gold)] not-italic">GLOBAL MERIT.</span></>
                ) : (
                  <>تقدير نخبوِي. <br /><span className="text-[var(--accent-gold)] not-italic">استحقاق عالمي.</span></>
                )}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 gap-10">
              <motion.div variants={fadeUpVariant} className="p-10 bg-white/[0.02] border-l-2 border-[var(--accent-gold)] backdrop-blur-xl rtl:border-l-0 rtl:border-r-2">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">
                  {lang === 'en' ? 'Outstanding Leadership Award' : 'جائزة التميز في قيادة الأعمال'}
                </h4>
                <p className="body-text text-sm opacity-70 leading-relaxed">
                  {lang === 'en' 
                    ? "Ghassan Farajallah was selected from over 300 global candidates at the CXO 2.0 Conference (Dubai 2025). This merit-based award recognizes visionaries who are actively shaping the future of AI and Blockchain."
                    : "تم اختيار غسان فرج الله من بين أكثر من 300 مرشح عالمي في مؤتمر CXO 2.0 (دبي 2025). تُمنح هذه الجائزة القائمة على الجدارة للقادة الذين يشكلون مستقبل الذكاء الاصطناعي والبلوكشين."}
                </p>
                <div className="mt-8 flex items-center gap-4 text-[var(--accent-gold)] text-[10px] font-black tracking-widest uppercase">
                  <ShieldCheck size={18} />
                  <span>{lang === 'en' ? 'Non-Promotional // 100% Merit Based' : 'جائزة غير ترويجية // قائمة على الجدارة بنسبة 100%'}</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="p-10 bg-white/[0.01] border-l-2 border-white/10 backdrop-blur-sm rtl:border-l-0 rtl:border-r-2">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">
                  {lang === 'en' ? 'Sheikh Khalifa Excellence Award' : 'جائزة الشيخ خليفة للامتياز'}
                </h4>
                <p className="body-text text-sm opacity-70 leading-relaxed">
                  {lang === 'en'
                    ? "A strategic contribution to achieving the highest levels of institutional excellence and quality in corporate operations within the UAE."
                    : "مساهمة استراتيجية في تحقيق أعلى مستويات التميز المؤسسي والجودة في العمل المؤسسي داخل دولة الإمارات العربية المتحدة."}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="p-10 bg-white/[0.02] border-l-2 border-emerald-500/40 backdrop-blur-xl rtl:border-l-0 rtl:border-r-2">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">
                  {lang === 'en' ? 'Global Tokenization Award - Amsterdam' : 'جائزة الترميز العالمية - أمستردام'}
                </h4>
                <p className="body-text text-sm opacity-70 leading-relaxed">
                  {lang === 'en' 
                    ? "SmartBlocks was crowned the World's #1 Real Estate Tokenization Platform in Amsterdam, prevailing over leading competitors from Silicon Valley and Singapore in a global summit of innovation."
                    : "تم تتويج سمارت بلوكس كأفضل منصة ترميز عقاري في العالم في أمستردام، متفوقة على منافسين عالميين من سيليكون فالي وسنغافورة في قمة عالمية للابتكار."}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <a 
                    href="https://youtu.be/YyR2Vb6k9No?si=C58GHegf8BiOCN16" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--accent-gold)] text-[10px] font-black tracking-widest uppercase hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-current border-b-[4px] border-b-transparent ml-0.5" />
                    </div>
                    <span>{lang === 'en' ? 'Watch Ceremony' : 'مشاهدة التكريم'}</span>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUpVariant} className="pt-8">
              <a 
                href="https://www.linkedin.com/posts/ghassan-farajallah_aeiaebaepaeuabraepaezaeuabraepaesaesaev-aesaebaesabraetaesaevaexaetabraesaevaepaeyaeaaey-activity-7374095666995748864-FmIC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 px-12 py-6 bg-[var(--accent-gold)] text-black font-black uppercase tracking-widest hover:bg-white transition-all group"
              >
                {lang === 'en' ? 'View Official Verification' : 'مشاهدة التحقق الرسمي'}
                <Globe size={18} className="group-hover:rotate-45 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: VISUAL COMPOSITION */}
          <div className="relative h-[700px] md:h-[900px] group">
            {/* Background Image: SKEA Graphic */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[85%] aspect-square opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 z-0 overflow-hidden rounded-3xl border border-white/5"
            >
              <img 
                src="/media/skea_award_graphic.jpg" 
                alt="SKEA Award Graphic" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Main Image 1: Ghassan holding SKEA */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute top-20 left-0 w-[70%] z-20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--accent-gold)]/10 blur-[120px] rounded-full" />
                <img 
                  src="/media/ghassan_skea_holding.png" 
                  alt="Ghassan Farajallah - SKEA Award" 
                  className="relative z-10 w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>

            {/* Main Image 2: CXO Award with Corrected Overlay */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute bottom-0 right-0 w-[75%] z-30"
            >
              <div className="relative group/award overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <img 
                  src="/media/cxo_trophy_blank.png" 
                  alt="Outstanding Leadership Award" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover/award:grayscale-0 group-hover/award:brightness-100 transition-all duration-1000"
                />
                
                {/* CORRECTED OVERLAY TEXT (FIXING PREVIOUS ERRORS) */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-10 space-y-4 pointer-events-none">
                  <div className="scale-90 md:scale-110">
                    <Award size={48} className="text-[var(--accent-gold)] mx-auto mb-6 opacity-80" />
                    <h4 className="text-[var(--accent-gold)] font-black uppercase tracking-[0.4em] text-[10px] mb-2">CXO 2.0 CONFERENCE</h4>
                    <div className="h-[1px] w-16 bg-[var(--accent-gold)]/30 mx-auto mb-6" />
                    <h5 className="text-white font-black text-2xl italic leading-tight uppercase mb-6">OUTSTANDING <br />LEADERSHIP</h5>
                    <div className="space-y-2">
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Presented To</p>
                      <p className="text-white font-black text-2xl tracking-tight">GHASSAN <br />FARAJALLAH</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-[var(--accent-gold)] font-black text-xs tracking-widest">DUBAI, UAE 2025</p>
                    </div>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                  <div className="bg-black/80 backdrop-blur-md border border-[var(--accent-gold)]/30 px-4 py-2 rounded-full">
                    <span className="text-[var(--accent-gold)] text-[9px] font-black uppercase tracking-widest">Vetted Candidate 2025</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalHonors;
