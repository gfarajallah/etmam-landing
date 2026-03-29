import React, { useState } from 'react';
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

const Ventures = () => {
  const { lang } = useLanguage();
  const [hoveredVenture, setHoveredVenture] = useState(null);

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
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
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

        <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className={`flex items-center gap-4 mb-10 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                {lang === 'en' ? 'Track 04 // Enterprise Portfolio' : 'المسار 04 // المحفظة المؤسسية'}
              </span>
            </div>

            <h1 className={`font-black uppercase leading-[0.85] tracking-tighter mb-8 ${lang === 'ar' ? 'font-arabic' : ''}`}
              style={{ fontSize: 'clamp(4.5rem, 14vw, 10rem)' }}>
              {lang === 'en' ? <>Strategic<br /><span className="gold-gradient-text italic">Ventures.</span></> : <>المشاريع<br /><span className="gold-gradient-text italic">الاستراتيجية.</span></>}
            </h1>

            <p className="text-[clamp(1rem,2.5vw,1.6rem)] font-light opacity-50 max-w-3xl mb-16 leading-relaxed">
              {lang === 'en' 
                ? "We build, invest, and scale high-authority projects that define the next era of real estate institutional liquidity."
                : "نحن نبني ونستثمر ونوسع المشاريع عالية القوة التي تحدد الحقبة التالية من سيولة العقارات المؤسسية."}
            </p>

            <Link to="/contact" className="btn-premium scale-110">
              {lang === 'en' ? 'ACCESS PORTFOLIO' : 'الوصول للمحفظة'}
              <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 02. FLAGSHIP: SMARTBLOCKS ── */}
      <section className="py-60 relative overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/30 z-10 transition-colors duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] bg-[var(--accent-gold)]/[0.04] rounded-full blur-[200px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             
             <motion.div
               initial={{ opacity: 0, x: lang === 'ar' ? 40 : -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={`relative ${lang === 'ar' ? 'order-2' : ''}`}
             >
                  {/* The interactive Frame */}
                  <Link to="/solutions/smartblocks" className="group block relative p-2 glass-card border-[var(--accent-gold)]/40 metallic-glow hover:border-[var(--accent-gold)]/80 transition-all duration-700">
                     <div className="bg-[var(--bg-primary)] p-12 md:p-20 border border-[var(--accent-gold)]/10 overflow-hidden relative">
                        {/* Status top bar */}
                        <div className={`absolute top-0 left-0 w-full p-8 flex justify-between items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
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
                          <div className={`flex justify-between border-b border-[var(--border-color)] pb-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Operational Finality</span>
                            <span className="text-[10px] font-black text-[var(--accent-gold)] text-glow-gold">99.98% REAL-TIME</span>
                          </div>
                          <div className={`flex justify-between border-b border-[var(--border-color)] pb-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Asset Under Tokenization</span>
                            <span className="text-[10px] font-black text-[var(--accent-gold)] text-glow-gold">$4.2B+ AGGREGATE</span>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                     </div>

                     {/* The action floating badge */}
                     <div className={`absolute -bottom-10 ${lang === 'ar' ? '-left-10' : '-right-10'} p-10 bg-[var(--bg-primary)] border border-[var(--accent-gold)]/40 glass-card backdrop-blur-3xl z-20 group-hover:scale-110 transition-transform duration-500`}>
                        <Zap className="text-[var(--accent-gold)] mb-4" size={32} />
                        <h5 className="font-black uppercase tracking-widest text-xs mb-2">{lang === 'en' ? 'INITIATE ACCESS' : 'بدء الوصول للبروتوكول'}</h5>
                        <p className="text-[9px] opacity-20 uppercase tracking-widest">{lang === 'en' ? 'Institutional Grade Only' : 'للمستوى المؤسسي فقط'}</p>
                     </div>
                  </Link>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: lang === 'ar' ? -40 : 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={`pt-10 ${lang === 'ar' ? 'order-1 text-right' : 'text-left'}`}
             >
                <div className={`flex items-center gap-6 mb-12 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                   <Cpu size={36} className="text-[var(--accent-gold)]" />
                   <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.6em]">
                     {lang === 'en' ? 'Flagship Development' : 'التطوير الرائد'}
                   </span>
                </div>
                <h2 className={`font-black uppercase tracking-tighter mb-12 leading-[0.9] ${lang === 'ar' ? 'font-arabic' : ''}`}
                  style={{ fontSize: 'clamp(3rem,8vw,7rem)' }}>
                  {lang === 'en' ? <>Smart<br /><span className="gold-gradient-text italic">Blocks.</span></> : <>سمارت<br /><span className="gold-gradient-text italic">بلوكس.</span></>}
                </h2>
                <div className="space-y-12 text-2xl font-light opacity-50 mb-16 leading-relaxed">
                   <p>{lang === 'en' 
                     ? "The definitive technical and regulatory engine for institutional real estate tokenization. Built on the conviction that legacy capital markets must evolve or perish."
                     : "المحرك التقني والتنظيمي الحاسم لترميز العقارات المؤسسي. بُني على قناعة تامة بأن أسواق رأس المال التقليدية يجب أن تتطور أو تضمحل."}</p>
                </div>
                <Link to="/solutions/smartblocks" className="btn-premium px-16">
                   {lang === 'en' ? 'DISCOVER THE ENGINE' : 'اكتشف المحرك'} 
                   <ChevronRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. ECOSYSTEM: Venture Network ── */}
      <section className="py-52 relative overflow-hidden z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className={`mb-32 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'The Strategic Grid' : 'المخطط الاستراتيجي'}
              </span>
              <h2 className={`font-black uppercase tracking-tighter italic ${lang === 'ar' ? 'font-arabic' : ''}`}
                style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
                {lang === 'en' ? <>Network <span className="gold-gradient-text not-italic">Expansion.</span></> : <>توسع <span className="gold-gradient-text not-italic">الشبكة المعرفية.</span></>}
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--border-color)]">
              {secondaryVentures.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredVenture(i)}
                  onMouseLeave={() => setHoveredVenture(null)}
                >
                   <Link to="/contact"
                    className={`group relative p-16 overflow-hidden border-[var(--border-color)] md:border-r border-b lg:border-b-0 last:border-r-0 block h-full transition-all duration-700 hover:bg-[var(--accent-gold)]/[0.03] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                    style={{ minHeight: '420px' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,98,0.3)' }} />
                    
                    {/* ID Badge */}
                    <span className="absolute top-10 right-10 text-xs font-black opacity-[0.2] transition-all duration-1000 select-none tracking-[0.4em] text-[var(--accent-gold)]">
                      {v.id}
                    </span>

                    <div className="relative z-10 flex flex-col h-full">
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
                       <div className={`mt-10 pt-6 border-t border-[var(--border-color)] flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500 uppercase ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <span>{lang === 'en' ? 'Review Protocol' : 'مراجعة البروتوكول'}</span>
                          <ChevronRight size={14} className={`transition-transform duration-500 group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                       </div>
                    </div>
                   </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ── 04. FINAL CTA: Global Influence ── */}
      <section className="py-60 relative z-10 border-t border-[var(--border-color)] text-center">
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`font-black mb-12 uppercase tracking-tighter italic leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}
                style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}>
                 {lang === 'en' ? <>Collaborate <br /><span className="gold-gradient-text not-italic">Globally.</span></> : <>التعاون <br /><span className="gold-gradient-text not-italic">عالمياً.</span></>}
              </h2>
              <p className="opacity-30 text-[clamp(1rem,2.5vw,1.8rem)] mb-20 font-light max-w-3xl mx-auto leading-relaxed">
                {lang === 'en' 
                  ? "We engineer new markets for those who demand institutional precision and high-authority results. Let's define the next cycle."
                  : "نحن نهندس أسواقاً جديدة لأولئك الذين يطلبون الدقة المؤسسية والنتائج عالية القوة. لنرسم ملامح الدورة القادمة سوياً."}
              </p>
              <Link to="/contact" className="btn-premium px-20 py-8 scale-125 shadow-[0_0_50px_rgba(201,169,98,0.2)]">
                 {lang === 'en' ? 'INITIATE PARTNER PROTOCOL' : 'بدء بروتوكول الشراكة العالمي'}
                 <ArrowRight size={20} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
              </Link>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Ventures;
