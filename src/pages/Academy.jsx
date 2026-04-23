import React, { useState } from 'react';
import { useLanguage } from '@/context/useLanguage';
import { translations } from '@/context/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  PlayCircle, 
  FileText, 
  Award, 
  ArrowRight, 
  Zap, 
  Brain, 
  Cpu, 
  Layers,
  ShieldCheck,
  Globe,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import InstitutionalAction from '@/components/layout/InstitutionalAction';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const Academy = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isArabic = lang === 'ar';
  const [showVideo, setShowVideo] = useState(false);

  const courses = [
    {
      id: '01',
      title: lang === 'en' ? "SmartBlocks: Asset Tokenization" : "سمارت بلوكس: ترميز الأصول",
      tag: "STRATEGY",
      desc: lang === 'en' 
        ? "Deep dive into ERC-3643 protocols, fractional ownership structures, and global liquidity engineering."
        : "تعمق في بروتوكولات ERC-3643، وهياكل الملكية المجزأة، وهندسة السيولة العالمية.",
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />,
      duration: "12 Hours",
      level: "Institutional"
    },
    {
      id: '02',
      title: lang === 'en' ? "SmartiAgents: Neural Sales" : "سمارتي إيجنتس: المبيعات العصبية",
      tag: "AI LOGIC",
      desc: lang === 'en' 
        ? "Mastering the deployment of autonomous AI agents for high-intent qualification and behavioral closing."
        : "إتقان نشر وكلاء الذكاء الاصطناعي المستقلين للتأهيل عالي النية والإغلاق السلوكي.",
      icon: <Brain size={24} className="text-cyan-400" />,
      duration: "8 Hours",
      level: "Executive"
    },
    {
      id: '03',
      title: lang === 'en' ? "Digital Asset Architecture" : "بنية الأصول الرقمية",
      tag: "INFRASTRUCTURE",
      desc: lang === 'en' 
        ? "Technical blueprinting for integrating Web3 layers into traditional corporate frameworks."
        : "تخطيط فني لدمج طبقات الويب 3 في أطر العمل المؤسسية التقليدية.",
      icon: <Cpu size={24} className="text-purple-400" />,
      duration: "15 Hours",
      level: "Technical"
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden z-10 border-b border-[var(--border-color)] bg-black">
        <div className="absolute inset-0 z-0">
          <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ duration: 3 }} className="absolute inset-0">
             <img src="/media/etmam_academy_hero.png" alt="ETMAM Academy" className="w-full h-full object-cover grayscale brightness-50" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-6 mb-12">
               <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />
               <span className="section-subtitle mb-0 text-[var(--accent-gold)]">
                  {lang === 'en' ? 'Institutional Learning' : 'التعلم المؤسسي المتقدم'}
               </span>
               <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />
            </motion.div>

            <TextReveal text={t.academy_title} className="display-title mb-12 italic justify-center" />

            <motion.p variants={fadeUpVariant} className="body-text text-center max-w-2xl mx-auto mb-20 opacity-60">
              {t.academy_subtitle}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex justify-center">
              <Magnetic strength={0.2}>
                <PremiumButton to="/contact" className="px-16 py-8">
                  {t.academy_cta}
                </PremiumButton>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. CORE TRACKS ── */}
      <section className="py-40 z-10 relative bg-[var(--bg-secondary)]/10 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
            <div className="text-start">
               <span className="section-subtitle text-[var(--accent-gold)] mb-4 block">
                 {lang === 'en' ? 'The Educational Engine' : 'المحرك التعليمي'}
               </span>
               <h2 className="section-title italic mb-6">
                 {lang === 'en' ? 'Masterclass Pathways.' : 'مسارات الماستركلاس.'}
               </h2>
               <p className="body-text max-w-xl opacity-60">
                 {lang === 'en' ? 'Structured modules designed for immediate strategic deployment.' : 'وحدات تعليمية منظمة مصممة للنشر الاستراتيجي الفوري.'}
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {courses.map((course, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="action-card group p-12">
                <div className="action-card-overlay bg-[var(--accent-gold)]/5" />
                <div className="flex justify-between items-start mb-10">
                   <div className="p-4 border border-white/10 group-hover:border-[var(--accent-gold)] transition-colors">
                     {course.icon}
                   </div>
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 italic">{course.id}</span>
                </div>
                <h4 className="action-card-title mb-4 italic">{course.title}</h4>
                <div className="flex gap-4 mb-8">
                   <span className="text-[10px] font-black text-[var(--accent-gold)] uppercase tracking-widest">{course.tag}</span>
                   <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">• {course.level}</span>
                </div>
                <p className="body-text mb-12 flex-1 line-clamp-3 group-hover:opacity-100 transition-opacity opacity-60">{course.desc}</p>
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                   <div className="flex items-center gap-2">
                      <PlayCircle size={16} className="text-[var(--accent-gold)]" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
                   </div>
                   <div className="action-card-btn">
                      <ArrowRight size={20} className={isArabic ? 'rotate-180' : ''} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. THE LOGIC (Deep Dive) ── */}
      <section className="py-60 z-10 relative overflow-hidden bg-black border-b border-[var(--border-color)]">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />
         
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-5 text-start">
               <span className="section-subtitle text-[var(--accent-gold)] mb-6 block">
                  {lang === 'en' ? 'The Logic Deep-Dive' : 'الغوص العميق في المنطق'}
               </span>
               <TextReveal text={lang === 'en' ? 'The Operational Blueprint.' : 'المخطط التشغيلي.'} className="section-title mb-10 italic" />
               <div className="space-y-8 body-text opacity-70 mb-16 border-l border-[var(--accent-gold)]/40 pl-8 rtl:pl-0 rtl:pr-8 rtl:border-l-0 rtl:border-r">
                  <p>
                    {lang === 'en' 
                      ? "Beyond simple tools, 'The Logic' is the proprietary methodology used by ETMAM to orchestrate multi-billion dollar asset migrations. It represents the intersection of technical excellence and strategic dominance."
                      : "بعيداً عن مجرد الأدوات، 'المنطق' هو المنهجية الملكية التي تستخدمها إتمام لتنسيق هجرات الأصول بمليارات الدولارات. إنه يمثل تقاطع التميز الفني والسيادة الاستراتيجية."}
                  </p>
                  <p>
                    {lang === 'en' 
                      ? "Our Academy participants gain exclusive access to the 'Logic Whiteboard' – a dynamic system for visualizing and stress-testing institutional asset models."
                      : "يحصل المشاركون في أكاديميتنا على وصول حصري إلى 'Logic Whiteboard' – وهو نظام ديناميكي لتصور واختبار نماذج الأصول المؤسسية."}
                  </p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: 'Methodology', val: 'Proprietary', icon: <ShieldCheck size={20} /> },
                    { label: 'Access', val: 'Gated', icon: <Globe size={20} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5">
                       <div className="text-[var(--accent-gold)]">{item.icon}</div>
                       <div>
                          <span className="text-[9px] uppercase tracking-widest opacity-30 block">{item.label}</span>
                          <span className="text-xs font-black uppercase tracking-[0.2em]">{item.val}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:col-span-7 relative">
               <div 
                 onClick={() => setShowVideo(true)}
                 className="aspect-video bg-[var(--bg-primary)] border border-white/10 relative overflow-hidden group cursor-pointer shadow-2xl"
               >
                  <img 
                    src="https://img.youtube.com/vi/qcwlee48aBU/maxresdefault.jpg" 
                    alt="Logic Visualization" 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-24 h-24 bg-[var(--accent-gold)] rounded-full flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-500">
                        <PlayCircle size={48} className="text-black" />
                     </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-12 bg-gradient-to-t from-black to-transparent">
                     <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[var(--accent-gold)]">Session 01 // Masterclass</span>
                     <h4 className="text-2xl md:text-3xl font-black italic">The Institutional Arbitrage Logic</h4>
                  </div>
               </div>
            </motion.div>
         </div>

         {/* Video Modal Overlay */}
         <AnimatePresence>
           {showVideo && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 md:p-20"
             >
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.9, opacity: 0 }}
                 className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl border border-white/10"
               >
                 <button 
                   onClick={() => setShowVideo(false)}
                   className="absolute -top-16 right-0 text-white hover:text-[var(--accent-gold)] transition-colors flex items-center gap-2 uppercase text-[10px] font-black tracking-widest"
                 >
                   <span>Close</span>
                   <X size={24} />
                 </button>
                 <iframe 
                   src="https://www.youtube.com/embed/qcwlee48aBU?autoplay=1" 
                   title="YouTube video player" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   allowFullScreen
                   className="w-full h-full"
                 ></iframe>
               </motion.div>
             </motion.div>
           )}
         </AnimatePresence>
      </section>

      {/* ── 04. DOWNLOADS ── */}
      <section className="py-40 z-10 relative bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
             <span className="section-subtitle text-[var(--accent-gold)] mb-4 block">Knowledge Base</span>
             <h2 className="section-title justify-center italic">Strategic Briefings.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Asset Tokenization Guide", type: "PDF", size: "4.2 MB" },
              { title: "AI Implementation Framework", type: "PDF", size: "2.8 MB" },
              { title: "Institutional Liquidity Report", type: "PDF", size: "5.1 MB" },
              { title: "The Logic: Executive Summary", type: "PDF", size: "1.2 MB" }
            ].map((doc, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group cursor-pointer">
                 <FileText size={32} className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                 <h4 className="text-sm font-black uppercase tracking-tight mb-4 group-hover:text-[var(--accent-gold)] transition-colors">{doc.title}</h4>
                 <div className="flex justify-between items-center opacity-30 text-[9px] font-black uppercase tracking-widest">
                    <span>{doc.type}</span>
                    <span>{doc.size}</span>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InstitutionalAction 
        title={lang === 'en' ? <>Earn your <span className="text-[var(--accent-gold)]">Authority.</span></> : <>اكتسب <span className="text-[var(--accent-gold)]">سيادتك.</span></>}
      />
    </div>
  );
};

export default Academy;
