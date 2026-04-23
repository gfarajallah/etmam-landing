import { useLanguage } from '@/context/useLanguage';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Cpu, 
  Layers, 
  Activity, 
  ArrowRight,
  Zap,
  Lock,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Ventures = () => {
  const { lang } = useLanguage();

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
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 overflow-x-hidden">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none z-50" />

      {/* ── 01. HERO: The Institutional Horizon ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/media/ventures_hero.png" 
            alt="Global Digital Ventures" 
            className="w-full h-full object-cover scale-[1.05] grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-start">
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                {lang === 'en' ? 'Track 04 // Venture Network' : 'المسار 04 // شبكة المشاريع'}
              </span>
            </motion.div>

            <TextReveal 
              text={lang === 'en' ? 'STRATEGIC VENTURES.' : 'المشاريع الاستراتيجية.'}
              className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8] mb-12"
            />

            <motion.p variants={fadeUpVariant} className="text-2xl md:text-3xl font-light opacity-40 max-w-3xl mb-16 leading-relaxed">
              {lang === 'en' 
                ? "Building the infrastructure of authority. Scalable real estate technology for the institutional elite."
                : "بناء بنية القوة التحتية. تكنولوجيا عقارية قابلة للتوسع للنخبة المؤسسية."}
            </motion.p>

            <motion.div variants={fadeUpVariant}>
              <Magnetic>
                <PremiumButton to="/contact" scale="scale-110">
                  {lang === 'en' ? 'ACCESS PORTFOLIO' : 'الوصول للمحفظة'}
                </PremiumButton>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. THE CORE: SmartBlocks Showcase ── */}
      <section className="py-60 relative overflow-hidden z-10 bg-[var(--bg-secondary)]/30 transition-colors duration-700">
        <div className="absolute inset-0 bg-radial-at-c from-[var(--accent-gold)]/10 to-transparent blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             
             <motion.div variants={slowFadeUpVariant} className="relative order-2 lg:order-none">
                <Link to="/solutions/smart-blocks" className="group block relative p-1 glass-card border-[var(--accent-gold)]/20 metallic-glow hover:border-[var(--accent-gold)]/60 transition-all duration-700">
                   <div className="bg-[var(--bg-primary)] p-12 md:p-20 border border-[var(--accent-gold)]/5 overflow-hidden relative">
                      {/* HUD Overlays */}
                      <div className="absolute top-0 start-0 w-full p-8 flex justify-between items-center rtl:flex-row-reverse">
                        <div className="flex items-center gap-3">
                          <Activity className="text-emerald-500 animate-pulse" size={16} />
                          <span className="text-[9px] font-black uppercase text-emerald-500/60 tracking-widest">OS: SECURE</span>
                        </div>
                        <Lock className="opacity-20 translate-x-1/2 group-hover:text-[var(--accent-gold)] transition-colors" size={16} />
                      </div>

                         {Array.from({ length: 15 }).map((_, i) => (
                           <motion.div 
                             key={i} 
                             initial={{ height: 0 }}
                             whileInView={{ height: `${(i * 7) % 60 + 20}%` }}
                             transition={{ duration: 1, delay: i * 0.05 }}
                             className={`flex-1 transition-all ${i % 3 === 0 ? 'bg-[var(--accent-gold)]' : 'bg-white/20'}`}
                           />
                        ))}

                      <div className="mt-16 space-y-4">
                        <div className="flex justify-between border-b border-white/5 pb-2 rtl:flex-row-reverse">
                          <span className="text-[9px] font-black uppercase opacity-40">Settlement Accuracy</span>
                          <span className="text-[9px] font-black text-[var(--accent-gold)]">99.9% VALIDATED</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2 rtl:flex-row-reverse">
                          <span className="text-[9px] font-black uppercase opacity-40">Encrypted Nodes</span>
                          <span className="text-[9px] font-black text-[var(--accent-gold)] text-glow-gold">ACTIVE LAYER 1</span>
                        </div>
                      </div>
                   </div>
                </Link>
             </motion.div>

             <motion.div variants={fadeUpVariant} className="text-start order-1 lg:order-none">
                <div className="flex items-center gap-6 mb-12">
                   <Cpu size={36} className="text-[var(--accent-gold)]" />
                   <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.6em]">
                     {lang === 'en' ? 'Flagship Logic' : 'المنطق الرائد'}
                   </span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12 italic">
                  {lang === 'en' ? <>Smart<br /><span className="gold-gradient-text not-italic">Blocks.</span></> : <>سمارت<br /><span className="gold-gradient-text not-italic">بلوكس.</span></>}
                </h2>
                <p className="text-2xl font-light opacity-40 mb-16 leading-relaxed">
                   {lang === 'en' 
                     ? "The definitive tokenization engine. A mission-critical architecture for asset digital transformation."
                     : "محرك الترميز النهائي. عمارة برمجية حاسمة للتحول الرقمي للأصول."}
                </p>
                <Magnetic>
                  <PremiumButton to="/solutions/smart-blocks" className="px-16 border-[var(--accent-gold)] text-[var(--accent-gold)]">
                     {lang === 'en' ? 'DISCOVER ENGINE' : 'اكتشف المحرك'} 
                  </PremiumButton>
                </Magnetic>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 03. BENTO HUD: The Venture Grid ── */}
      <section className="py-60 relative z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32 text-start">
              <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'Asset Portfolio' : 'محفظة الأصول'}
              </motion.span>
              <TextReveal 
                text={lang === 'en' ? 'VENTURE GRID.' : 'شبكة المشاريع.'}
                className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic"
              />
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Card 1: Large Academy Card */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="md:col-span-2 md:row-span-2 group relative glass-card p-1 overflow-hidden border-white/5 hover:border-[var(--accent-gold)] transition-all duration-700"
              >
                <div className="p-12 h-full flex flex-col justify-between bg-black/40 relative z-10">
                   <div className="flex justify-between items-start">
                      <div className="p-4 border border-[var(--accent-gold)]/20 rounded-lg group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-all">
                        <Layers size={32} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-20">VE-01 // EDU</span>
                   </div>
                   <div>
                      <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">{secondaryVentures[0].title}</h3>
                      <p className="text-lg opacity-40 font-light mb-8 group-hover:opacity-100 transition-opacity">
                        {secondaryVentures[0].desc}
                      </p>
                      <Magnetic>
                         <Link to="/contact" className="inline-flex items-center gap-4 text-[var(--accent-gold)] font-black text-[10px] uppercase tracking-widest">
                           {lang === 'en' ? 'REVIEW ACADEMY' : 'مراجعة الأكاديمية'} <ArrowRight size={16} />
                         </Link>
                      </Magnetic>
                   </div>
                </div>
              </motion.div>

              {/* Card 2: Advisory */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="md:col-span-2 group relative glass-card p-1 overflow-hidden border-white/5 hover:border-blue-500/50 transition-all duration-700"
              >
                <div className="p-12 h-full flex items-center gap-12 bg-black/40 relative z-10">
                   <div className="p-4 border border-blue-500/20 rounded-lg">
                      <Globe size={24} className="text-blue-500" />
                   </div>
                   <div className="text-start">
                      <h3 className="text-2xl font-black uppercase mb-2 tracking-tighter">{secondaryVentures[1].title}</h3>
                      <p className="text-sm opacity-40 font-light line-clamp-2">{secondaryVentures[1].desc}</p>
                   </div>
                </div>
              </motion.div>

              {/* Card 3: Sandbox */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="md:col-span-2 group relative glass-card p-1 overflow-hidden border-white/5 hover:border-emerald-500/50 transition-all duration-700 font-start"
              >
                <div className="p-12 h-full flex items-center gap-12 bg-black/40 relative z-10">
                   <div className="p-4 border border-emerald-500/20 rounded-lg">
                      <Database size={24} className="text-emerald-500" />
                   </div>
                   <div className="text-start">
                      <h3 className="text-2xl font-black uppercase mb-2 tracking-tighter">{secondaryVentures[2].title}</h3>
                      <p className="text-sm opacity-40 font-light line-clamp-2">{secondaryVentures[2].desc}</p>
                   </div>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ── 04. LAUNCH: Final Action ── */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black/40 border-t border-[var(--border-color)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-gold)]/5 blur-[120px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <TextReveal 
            text={lang === 'en' ? 'READY TO LAUNCH?' : 'جاهز للانطلاق؟'}
            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter italic mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Magnetic strength={0.2}>
              <a href="https://smartblocks.etmam.io" target="_blank" rel="noopener noreferrer" 
                 className="group flex flex-col items-center justify-center p-20 border border-white/5 bg-black/20 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)]">
                <Layers size={48} className="text-[var(--accent-gold)] mb-10 group-hover:rotate-12 transition-transform duration-700" />
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Platform Portal' : 'بوابة المنصة'}</h3>
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link to="/academy" 
                 className="group flex flex-col items-center justify-center p-20 border border-white/5 bg-black/20 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)]">
                <Zap size={48} className="text-[var(--accent-gold)] mb-10 group-hover:scale-125 transition-all duration-700" />
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Academy Access' : 'الوصول للأكاديمية'}</h3>
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Ventures;
