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
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';

const Ventures = () => {
  const { lang } = useLanguage();

  const secondaryVentures = [
    {
      title: lang === 'en' ? "ETMAM Academy" : "أكاديمية إتمام",
      desc: lang === 'en' ? "Institutional education platform for Web3 real estate mastery." : "منصة تعليمية مؤسسية لإتقان عقارات الـ Web3.",
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "EDUCATION" : "تعليم"
    },
    {
      title: lang === 'en' ? "Web3 Advisory Node" : "مركز استشارات Web3",
      desc: lang === 'en' ? "Strategic consulting for legacy enterprise transitions." : "استشارات استراتيجية لتحولات الشركات التقليدية.",
      icon: <Globe size={24} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "ADVISORY" : "استشارات"
    },
    {
      title: lang === 'en' ? "Digital Asset Sandbox" : "مختبر الأصول الرقمية",
      desc: lang === 'en' ? "A proprietary environment for testing tokenization architectures." : "بيئة خاصة لاختبار بنيات الترميز.",
      icon: <Database size={24} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "INFRASTRUCTURE" : "بنية تحتية"
    }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* 01. Ventures Hero */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div className={`flex items-center gap-4 mb-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
               <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
               <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                 {lang === 'en' ? 'Executive Portfolio' : 'المحفظة التنفيذية'}
               </span>
            </div>
            <h1 className={`text-[clamp(3rem,9vw,9rem)] font-black mb-12 leading-[0.8] uppercase tracking-tighter ${lang === 'ar' ? 'font-arabic' : ''}`}>
               {lang === 'en' ? <>Strategic <br /> <span className="gold-gradient-text italic">Ventures.</span></> : <>المشاريع <br /> <span className="gold-gradient-text italic">الاستراتيجية.</span></>}
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--text-primary)] opacity-30 leading-relaxed font-light max-w-2xl">
              {lang === 'en' 
                ? "We build and invest in high-authority projects defining the next era of real estate liquidity."
                : "نحن نبني ونستثمر في مشاريع عالية القوة تحدد الحقبة التالية من سيولة العقارات."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. Flagship: SMARTBLOCKS */}
      <section className="py-60 bg-[var(--bg-secondary)] relative overflow-hidden border-y border-[var(--accent-gold)]/10 z-10 transition-colors duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] bg-[var(--accent-gold)]/[0.04] rounded-full blur-[200px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <motion.div
               initial={{ opacity: 0, x: lang === 'en' ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={lang === 'ar' ? 'order-2 text-right' : 'text-left'}
             >
                <div className={`flex items-center gap-6 mb-12 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                   <div className="w-16 h-16 bg-[var(--accent-gold)] flex items-center justify-center text-[var(--bg-primary)]">
                      <Cpu size={32} />
                   </div>
                   <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                     {lang === 'en' ? 'Flagship Achievement' : 'إنجاز رائد'}
                   </span>
                </div>
                 <h2 className={`text-7xl md:text-[8rem] font-black mb-12 uppercase tracking-tighter leading-[0.8] ${lang === 'ar' ? 'font-arabic' : ''}`}>
                   {lang === 'en' ? <>Smart <br /><span className="text-glow-gold">Blocks.</span></> : <>سمارت <br /><span className="text-glow-gold">بلوكس.</span></>}
                 </h2>
                <div className="space-y-12 text-[var(--text-primary)] opacity-90 text-2xl font-light mb-16 max-w-xl leading-relaxed">
                   <p>{lang === 'en' 
                     ? "Defining the technical and regulatory gold standard for institutional real estate tokenization. SmartBlocks is the execution engine for high-stakes capital markets."
                     : "تحديد المعيار الذهبي التقني والتنظيمي لترميز العقارات المؤسسي. سمارت بلوكس هو محرك التنفيذ لأسواق رأس المال عالية المخاطر."}</p>
                   <ul className="space-y-6">
                      {[
                        { label: lang === 'en' ? "Secondary Liquidity" : "السيولة الثانوية", val: lang === 'en' ? "Institutional Grade" : "درجة مؤسسية" },
                        { label: lang === 'en' ? "Asset Verification" : "التحقق من الأصول", val: lang === 'en' ? "Blockchain Validated" : "مصدق بالبلوكشين" },
                        { label: lang === 'en' ? "Compliance Flow" : "تدفق الامتثال", val: lang === 'en' ? "Global Regulatory Standard" : "معيار تنظيمي عالمي" }
                      ].map((item, i) => (
                        <li key={i} className={`flex items-center justify-between border-b border-[var(--text-primary)]/5 pb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                           <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                           <span className="font-black">{item.val}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <Link to="/solutions/smartblocks" className="btn-premium border-none">
                   {lang === 'en' ? 'Access Protocol' : 'الوصول إلى البروتوكول'} 
                   <ChevronRight size={16} className={`inline ${lang === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className={`relative ${lang === 'ar' ? 'order-1' : ''}`}
             >
                  <div className="glass-card rounded-sm border-[var(--accent-gold)]/40 p-3 metallic-glow flagship-aura">
                     <div className="bg-[var(--bg-primary)] p-12 md:p-24 border border-[var(--accent-gold)]/10 relative overflow-hidden">
                        <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} p-12`}>
                           <Activity className="text-[var(--accent-gold)] animate-pulse" size={32} />
                        </div>
                        <div className="grid grid-cols-2 gap-12">
                           <div className="col-span-2 md:col-span-1 p-10 bg-[var(--text-primary)]/[0.03] border border-[var(--accent-gold)]/20 text-center">
                              <h5 className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-gold)] mb-4 text-glow-gold">
                                {lang === 'en' ? 'Market Liquidity' : 'سيولة السوق'}
                              </h5>
                              <p className="text-5xl font-black">+24.5%</p>
                           </div>
                           <div className="col-span-2 md:col-span-1 p-10 bg-[var(--text-primary)]/[0.03] border border-[var(--accent-gold)]/20 text-center">
                              <h5 className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-gold)] mb-4 text-glow-gold">
                                {lang === 'en' ? 'Verification Depth' : 'عمق التحقق'}
                              </h5>
                              <p className="text-5xl font-black">6.2T // SEC</p>
                           </div>
                        </div>
                        <div className="mt-12 p-12 bg-[var(--accent-gold)]/5 border border-[var(--accent-gold)]/20">
                           <div className={`flex items-center justify-between mb-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-gold)]">
                                {lang === 'en' ? 'Operational Intelligence Level 9' : 'مستوى الذكاء التشغيلي 9'}
                              </span>
                              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
                           </div>
                           <div className="h-48 flex items-end gap-4">
                              {[40, 70, 45, 100, 65, 80, 55, 90].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className={`flex-1 ${i === 3 ? 'bg-[var(--accent-gold)] shadow-[0_0_30px_rgba(201,169,98,0.4)]' : 'bg-[var(--text-primary)]/10'}`} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`absolute -top-16 ${lang === 'ar' ? '-left-16' : '-right-16'} p-16 glass-card border-[var(--accent-gold)]/40 max-w-xs premium-shadow backdrop-blur-3xl hidden md:block z-20 bg-[var(--bg-primary)]/80`}>
                     <ShieldCheck className="text-[var(--accent-gold)] mb-8 shadow-gold/20" size={48} />
                     <p className={`text-[var(--text-primary)] text-lg font-bold italic leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                       {lang === 'en' ? '"SmartBlocks is the definitive institutional bridge for global real assets."' : '"سمارت بلوكس هو الجسر المؤسسي الحاسم للأصول العقارية العالمية."'}
                     </p>
                  </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 03. Strategic Ecosystem */}
      <section className="py-52 relative overflow-hidden z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className={`mb-32 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'Strategic Ecosystem' : 'النظام البيئي الاستراتيجي'}
              </span>
              <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? <>Venture <br /><span className="text-[var(--accent-gold)] italic">Network.</span></> : <>شبكة <br /><span className="text-[var(--accent-gold)] italic">المشاريع.</span></>}
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {secondaryVentures.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15 }}
                  className={`premium-card p-12 md:p-16 group border-[var(--border-color)] bg-[var(--text-primary)]/[0.02] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                >
                   <div className={`w-16 h-16 bg-[var(--text-primary)]/[0.03] border border-[var(--border-color)] flex items-center justify-center mb-10 group-hover:border-[var(--accent-gold)]/30 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 ${lang === 'ar' ? 'ml-auto mr-0' : ''}`}>
                      {v.icon}
                   </div>
                   <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">{v.tag}</span>
                   <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{v.title}</h3>
                   <p className="opacity-30 text-sm leading-relaxed font-light mb-12">{v.desc}</p>
                   <button className={`flex items-center gap-3 font-black uppercase tracking-[0.3em] text-[9px] hover:text-[var(--accent-gold)] transition-all ${lang === 'ar' ? 'flex-row-reverse ml-auto' : ''}`}>
                      {lang === 'en' ? 'Review Specification' : 'مراجعة المواصفات'} 
                      <ExternalLink size={12} className={lang === 'ar' ? 'rotate-180' : ''} />
                   </button>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 04. Call to Venture Action */}
      <section className="py-60 relative z-10 bg-[var(--bg-secondary)]/20 border-t border-[var(--border-color)]">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className={`text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter italic leading-none ${lang === 'ar' ? 'font-arabic' : ''}`}>
               {lang === 'en' ? <>Collaborate <br /><span className="text-[var(--accent-gold)] not-italic">Globally.</span></> : <>التعاون <br /><span className="text-[var(--accent-gold)] not-italic">عالمياً.</span></>}
            </h2>
            <p className="opacity-30 text-2xl mb-20 font-light leading-relaxed">
              {lang === 'en' 
                ? "We engineer new markets for those who demand institutional precision and high-authority results."
                : "نحن نهندس أسواقاً جديدة لأولئك الذين يطلبون الدقة المؤسسية والنتائج عالية القوة."}
            </p>
            <Link to="/contact" className="btn-premium shadow-gold/20">
               {lang === 'en' ? 'Initiate Partner Protocol' : 'بدء بروتوكول الشراكة'}
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Ventures;
