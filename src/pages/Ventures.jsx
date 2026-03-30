import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Activity, 
  ExternalLink,
  ChevronRight,
  Database,
  ArrowRight,
  Zap,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';
import PremiumButton from '@/components/ui/PremiumButton';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Ventures = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const secondaryVentures = [
    {
      id: "VE-01",
      title: lang === 'en' ? "ETMAM Academy" : "أكاديمية إتمام",
      subtitle: lang === 'en' ? "Web3 Real Estate Mastery." : "إتقان عقارات الـ Web3.",
      desc: lang === 'en' 
        ? "The definitive educational node for institutional players. We bridge the knowledge gap between legacy real estate and blockchain's high-efficiency future through exclusive workshops and strategic certification." 
        : "العقدة التعليمية الحاسمة للاعبين المؤسسيين. نحن نجسر فجوة المعرفة بين العقارات التقليدية ومستقبل البلوكشين عالي الكفاءة من خلال ورش عمل حصرية وشهادات استراتيجية.",
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "EDUCATION" : "تعليم"
    },
    {
      id: "VE-02",
      title: lang === 'en' ? "Advisory Node" : "مركز الاستشارات الاستراتيجي",
      subtitle: lang === 'en' ? "Legacy Enterprise Transitions." : "تحولات الشركات الكبرى.",
      desc: lang === 'en' 
        ? "Bespoke consulting for family offices and multinational developers transitioning to digital-first ownership models. We build the legal, technical, and psychological frameworks for the next generation of leadership." 
        : "استشارات مخصصة للمكاتب العائلية والمطورين العالميين الذين ينتقلون إلى نماذج الملكية الرقمية. نحن نبني الأطر القانونية والتقنية والنفسية للجيل القادم من القيادة.",
      icon: <Globe size={24} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "ADVISORY" : "استشارات"
    },
    {
      id: "VE-03",
      title: lang === 'en' ? "Asset Sandbox" : "مختبر الأصول الرقمية",
      subtitle: lang === 'en' ? "Tokenization R&D Environment." : "بيئة بحث وتطوير الترميز.",
      desc: lang === 'en' 
        ? "A high-security, proprietary testing environment for stress-testing complex tokenization architectures before they hit the open market. Precision testing ensure zero-fail launches for multi-billion dollar portfolios." 
        : "بيئة اختبار خاصة عالية الأمان لاختبار بنيات الترميز المعقدة قبل وصولها للسوق المفتوح. اختبارات دقيقة تضمن انطلاقات ناجحة بنسبة 100٪ للمحافظ بمليارات الدولارات.",
      icon: <Database size={24} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "INFRASTRUCTURE" : "بنية تحتية"
    }
  ];

  return (
    <div className="pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO: The Strategic Horizon ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 group">
          <img 
            src="/media/ventures_hero.png" 
            alt="Global Digital Ventures" 
            className="w-full h-full object-cover scale-[1.02] grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:scale-100 group-hover:brightness-[0.7] transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />
          <div className="absolute inset-0 bg-[var(--accent-gold)]/5 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-start">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                {lang === 'en' ? 'Track 04 // Enterprise Portfolio' : 'المسار 04 // المحفظة المؤسسية'}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="display-title mb-8">
              {lang === 'en' ? <>Strategic<br /><span className="gold-gradient-text italic">Ventures.</span></> : <>المشاريع<br /><span className="gold-gradient-text italic">الاستراتيجية.</span></>}
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-[clamp(1rem,2.5vw,1.6rem)] font-light opacity-50 max-w-3xl mb-16 leading-relaxed">
              {lang === 'en' 
                ? "We build, invest, and scale high-authority projects that define the next era of real estate institutional liquidity."
                : "نحن نبني ونستثمر ونوسع المشاريع عالية القوة التي تحدد الحقبة التالية من سيولة العقارات المؤسسية."}
            </motion.p>

            <motion.div variants={fadeUpVariant}>
              <PremiumButton to="/contact" scale="scale-110">
                {lang === 'en' ? 'ACCESS PORTFOLIO' : 'الوصول للمحفظة'}
              </PremiumButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. FLAGSHIP: SMARTBLOCKS ── */}
      <section className="py-60 relative overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/30 z-10 transition-colors duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] bg-[var(--accent-gold)]/[0.04] rounded-full blur-[200px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             
             <motion.div variants={slowFadeUpVariant} className="relative order-2 lg:order-none">
                  {/* The interactive Frame */}
                  <Link to="/solutions/smartblocks" className="group block relative p-2 glass-card border-[var(--accent-gold)]/40 metallic-glow hover:border-[var(--accent-gold)]/80 transition-all duration-700 text-start">
                     <div className="bg-[var(--bg-primary)] p-12 md:p-20 border border-[var(--accent-gold)]/10 overflow-hidden relative text-start">
                        {/* Status top bar */}
                        <div className="absolute top-0 start-0 w-full p-8 flex justify-between items-center rtl:flex-row-reverse">
                          <div className="flex items-center gap-3">
                            <Activity className="text-emerald-500 animate-pulse" size={16} />
                            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/60">System: OPTIMAL</span>
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-widest opacity-20">ENCRYPTED PROTOCOL-22</span>
                        </div>

                        {/* Chart / Visual */}
                        <div className="mt-16 h-48 flex items-end gap-3 opacity-30 group-hover:opacity-80 transition-opacity duration-1000">
                          {[30, 60, 45, 90, 65, 100, 55, 80, 40, 70, 50, 85].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className={`flex-1 ${i === 5 ? 'bg-[var(--accent-gold)] shadow-[0_0_30px_rgba(201,169,98,0.5)]' : 'bg-[var(--text-primary)]/20'}`} />
                          ))}
                        </div>

                        {/* Stats rows */}
                        <div className="mt-16 space-y-4">
                          <div className="flex justify-between border-b border-[var(--border-color)] pb-3 rtl:flex-row-reverse">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Operational Finality</span>
                            <span className="text-[10px] font-black text-[var(--accent-gold)] text-glow-gold">99.98% REAL-TIME</span>
                          </div>
                          <div className="flex justify-between border-b border-[var(--border-color)] pb-3 rtl:flex-row-reverse">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Asset Under Tokenization</span>
                            <span className="text-[10px] font-black text-[var(--accent-gold)] text-glow-gold">$4.2B+ AGGREGATE</span>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                     </div>

                     {/* The action floating badge */}
                     <div className="absolute -bottom-10 -end-10 p-10 bg-[var(--bg-primary)] border border-[var(--accent-gold)]/40 glass-card backdrop-blur-3xl z-20 group-hover:scale-110 transition-transform duration-500 text-start">
                        <Zap className="text-[var(--accent-gold)] mb-4" size={32} />
                        <h5 className="font-black uppercase tracking-widest text-xs mb-2">{lang === 'en' ? 'INITIATE ACCESS' : 'بدء الوصول للبروتوكول'}</h5>
                        <p className="text-[9px] opacity-20 uppercase tracking-widest">{lang === 'en' ? 'Institutional Grade Only' : 'للمستوى المؤسسي فقط'}</p>
                     </div>
                  </Link>
             </motion.div>

             <motion.div variants={fadeUpVariant} className="pt-10 text-start order-1 lg:order-none">
                <div className="flex items-center gap-6 mb-12">
                   <Cpu size={36} className="text-[var(--accent-gold)]" />
                   <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.6em]">
                     {lang === 'en' ? 'Flagship Development' : 'التطوير الرائد'}
                   </span>
                </div>
                <h2 className="section-title mb-12">
                  {lang === 'en' ? <>Smart<br /><span className="gold-gradient-text italic">Blocks.</span></> : <>سمارت<br /><span className="gold-gradient-text italic">بلوكس.</span></>}
                </h2>
                <div className="space-y-12 text-2xl font-light opacity-50 mb-16 leading-relaxed">
                   <p>{lang === 'en' 
                     ? "The definitive technical and regulatory engine for institutional real estate tokenization. Built on the conviction that legacy capital markets must evolve or perish."
                     : "المحرك التقني والتنظيمي الحاسم لترميز العقارات المؤسسي. بُني على قناعة تامة بأن أسواق رأس المال التقليدية يجب أن تتطور أو تضمحل."}</p>
                </div>
                <PremiumButton to="/solutions/smartblocks" className="px-16 border-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 text-[var(--accent-gold)]">
                   {lang === 'en' ? 'DISCOVER THE ENGINE' : 'اكتشف المحرك'} 
                </PremiumButton>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 03. ECOSYSTEM: Venture Network ── */}
      <section className="py-52 relative overflow-hidden z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32 text-start">
              <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'The Strategic Grid' : 'المخطط الاستراتيجي'}
              </motion.span>
              <motion.h2 variants={fadeUpVariant} className="section-title italic">
                {lang === 'en' ? <>Network <span className="gold-gradient-text not-italic">Expansion.</span></> : <>توسع <span className="gold-gradient-text not-italic">الشبكة المعرفية.</span></>}
              </motion.h2>
           </motion.div>

           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--border-color)]">
              {secondaryVentures.map((v, i) => (
                <motion.div key={i} variants={fadeUpVariant}>
                   <Link to="/contact"
                    className="group relative p-16 overflow-hidden border-[var(--border-color)] border-b md:border-b-0 md:border-e lg:border-b-0 last:border-b-0 last:border-e-0 block h-full transition-all duration-700 hover:bg-[var(--accent-gold)]/[0.03] text-start"
                    style={{ minHeight: '420px' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,98,0.3)' }} />
                    
                    {/* ID Badge */}
                    <span className="absolute top-10 end-10 text-xs font-black opacity-[0.2] transition-all duration-1000 select-none tracking-[0.4em] text-[var(--accent-gold)]">
                      {v.id}
                    </span>

                    <div className="relative z-10 flex flex-col h-full text-start">
                       <div className="mb-12 w-20 h-20 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-all duration-700 group-hover:scale-110">
                          {v.icon}
                       </div>
                       <h4 className="text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{v.title}</h4>
                       <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-gold)] mb-8 opacity-70">
                        {v.subtitle}
                       </h5>
                       <p className="opacity-40 text-sm leading-relaxed font-light flex-1 group-hover:opacity-90 transition-opacity duration-700">
                        {v.desc}
                       </p>
                       <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500 rtl:flex-row-reverse">
                          <span>{lang === 'en' ? 'Review Protocol' : 'مراجعة البروتوكول'}</span>
                          <ChevronRight size={14} className={`transition-transform duration-500 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 ${isArabic ? 'rotate-180' : ''}`} />
                       </div>
                    </div>
                   </Link>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* ── 04. FINAL CTA: Global Influence ── */}
      <section className="py-60 relative z-10 border-t border-[var(--border-color)] text-center">
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant}>
              <h2 className="display-title italic mb-12">
                 {lang === 'en' ? <>Collaborate <br /><span className="gold-gradient-text not-italic">Globally.</span></> : <>التعاون <br /><span className="gold-gradient-text not-italic">عالمياً.</span></>}
              </h2>
              <p className="opacity-30 text-[clamp(1rem,2.5vw,1.8rem)] mb-20 font-light max-w-3xl mx-auto leading-relaxed">
                {lang === 'en' 
                  ? "We engineer new markets for those who demand institutional precision and high-authority results. Let's define the next cycle."
                  : "نحن نهندس أسواقاً جديدة لأولئك الذين يطلبون الدقة المؤسسية والنتائج عالية القوة. لنرسم ملامح الدورة القادمة سوياً."}
              </p>
              <PremiumButton to="/contact" scale="scale-125">
                 {lang === 'en' ? 'INITIATE PARTNER PROTOCOL' : 'بدء بروتوكول الشراكة العالمي'}
              </PremiumButton>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Ventures;
