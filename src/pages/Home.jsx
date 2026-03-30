import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Cpu, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';
import PremiumButton from '@/components/ui/PremiumButton';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Home = () => {
  const { lang, t } = useLanguage();
  const isArabic = lang === 'ar';

  const stats = [
    { label: lang === 'en' ? 'Years of Leadership' : 'سنوات من القيادة', value: '10+', icon: <Award className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Professionals Trained' : 'خبير تم تأهيلهم', value: '500+', icon: <Users className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Asset Value Tokenized' : 'قيمة الأصول المشفرة', value: '$4B+', icon: <TrendingUp className="text-[var(--accent-gold)]" size={24} /> },
  ];

  const corePillars = [
    {
      id: "01",
      title: lang === 'en' ? "ETMAM Engine" : "استشارات إتمام",
      subtitle: lang === 'en' ? "Institutional Advisory." : "الاستشارات المؤسسية العليا.",
      description: lang === 'en' ? "Strategic architectural frameworks for real estate enterprises transitioning to high-efficiency digital assets." : "أطر عمل هندسية استراتيجية للمؤسسات العقارية الهادفة للرقمنة عالية الكفاءة.",
      link: "/solutions",
      icon: <Layers size={32} className="text-[var(--accent-gold)]" />,
      tag: "STRATEGY"
    },
    {
      id: "02",
      title: lang === 'en' ? "SmartBlocks" : "محرك سمارت بلوكس",
      subtitle: lang === 'en' ? "Technological Dominance." : "الهيمنة التقنية المطلقة.",
      description: lang === 'en' ? "Building the future of finance. Flagship tokenization projects defining the standard for global liquidity." : "بناء مستقبل المالية. مشاريع رائدة تحدد معايير السيولة العالمية.",
      link: "/solutions/smart-blocks",
      icon: <Cpu size={32} className="text-[var(--accent-gold)]" />,
      tag: "INNOVATION"
    },
    {
      id: "03",
      title: lang === 'en' ? "SmartAgent AI" : "سمارت إيجنت AI",
      subtitle: lang === 'en' ? "Computational Supremacy." : "التفوق الحسابي والتحليلي.",
      description: lang === 'en' ? "Proprietary intelligence engines providing predictive analytics and market foresight for the real asset economy." : "محركات ذكاء ملكية توفر تحليلات تنبؤية وبصيرة سوقية لاقتصاد الأصول الحقيقية.",
      link: "/solutions/smart-agent",
      icon: <Zap size={32} className="text-[var(--accent-gold)]" />,
      tag: "INTELLIGENCE"
    }
  ];

  return (
    <div className="bg-transparent text-[var(--text-primary)] selection:bg-[var(--accent-gold)]/40 scroll-smooth transition-colors duration-700">
      
      {/* ── 01. HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-20 border-b border-[var(--border-color)]">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0 bg-black group">
          <img 
            src="/media/etmam_executive_hero_premium.png" 
            alt="Etmam Vision - Ghassan Farajallah" 
            className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.7] transition-all duration-[5000ms] animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-30 w-full text-start">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUpVariant} className="flex items-center gap-6 mb-8">
              <div className="w-12 h-[1px] bg-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                {lang === 'en' ? 'Track 01 // Executive Engine' : 'المسار 01 // المحرك التنفيذي'}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="display-title mb-8">
              {lang === 'en' ? <>Institutional<br /><span className="gold-gradient-text italic">Precision.</span></> : <>الدقة<br /><span className="gold-gradient-text italic">المؤسسية الرصينة.</span></>}
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-[clamp(1.1rem,2vw,1.6rem)] font-light opacity-60 max-w-3xl mb-12 leading-relaxed">
              {lang === 'en' 
                ? 'Engineering the elite frameworks for the transition to tokenized real estate assets. Leadership for the digital-first era.'
                : 'يصمم إتمام الأطر النخبوية للانتقال إلى الأصول العقارية المرمزة. القيادة الحقيقية للعصر الرقمي الأول.'}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-6 items-start">
              <PremiumButton to="/contact" scale="scale-110">
                {t('cta_initiate')}
              </PremiumButton>
              <Link to="/about" className="px-10 py-5 border border-[var(--border-color)] bg-white/5 backdrop-blur-sm text-[var(--text-primary)] font-black uppercase tracking-widest text-[9px] hover:bg-[var(--accent-gold)]/10 transition-all flex items-center justify-center">
                {lang === 'en' ? 'DISCOVER THE VISION' : 'اكتشف الرؤية الاستراتيجية'}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. METRICS ── */}
      <section className="bg-[var(--bg-secondary)]/30 border-b border-[var(--border-color)] relative py-20 z-10 backdrop-blur-md">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUpVariant}
              className="flex flex-col group items-start text-start"
            >
              <h4 className="text-6xl md:text-7xl font-black mb-1 gold-gradient-text tracking-tighter transition-all duration-700 group-hover:-translate-y-2">{stat.value}</h4>
              <p className="text-[10px] font-black text-[var(--text-primary)] opacity-30 uppercase tracking-[0.4em]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 03. DOMAINS: The Core Pillars ── */}
      <section className="py-40 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24"
          >
            <div className="max-w-4xl text-start w-full">
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                {lang === 'en' ? 'Institutional Grade' : 'المستوى المؤسسي الرفيع'}
              </span>
              <h2 className="section-title">
                {lang === 'en' ? <>Domains of <br /><span className="gold-gradient-text italic">Authority.</span></> : <>مجالات <br /><span className="gold-gradient-text italic">النفوذ والسيادة.</span></>}
              </h2>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {corePillars.map((pillar, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="group relative h-full">
                <Link to={pillar.link} className="block h-full p-12 md:p-16 border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-all duration-700 hover:border-[var(--accent-gold)]/40 hover:-translate-y-4 text-start">
                  <div className="w-20 h-20 border border-[var(--border-color)] flex items-center justify-center mb-10 group-hover:border-[var(--accent-gold)] group-hover:shadow-[0_0_30px_rgba(201,169,98,0.2)] transition-all duration-700">
                     {pillar.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{pillar.title}</h3>
                  <p className="text-[var(--text-primary)] opacity-40 text-lg leading-relaxed font-light mb-16 max-w-md group-hover:opacity-100 transition-opacity duration-700">
                    {pillar.description}
                  </p>
                  <div className="mt-auto flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 -translate-x-4 rtl:translate-x-4 group-hover:translate-x-0 rtl:group-hover:translate-x-0 transition-all duration-500">
                    <span>{lang === 'en' ? 'SECURE CONSULTATION' : 'تأمين استشارة'}</span>
                    <ArrowRight size={16} className={isArabic ? 'rotate-180' : ''} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 04. FLAGSHIP: SMARTBLOCKS ── */}
      <section className="py-40 bg-[var(--bg-secondary)]/40 relative overflow-hidden border-y border-[var(--border-color)] z-10 transition-colors duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-[var(--accent-gold)]/[0.04] rounded-full blur-[180px] z-0 animate-pulse-slow" />
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        >
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-8 animate-slow-y text-glow-gold">SmartBlocks.</h2>
            <p className="text-2xl md:text-3xl text-[var(--text-primary)] opacity-40 max-w-4xl mx-auto font-light leading-relaxed">
              {lang === 'en' 
                ? 'Defining the gold standard for real estate tokenization. Absolute precision in digital liquidity.'
                : 'تحديد المعيار الذهبي لترميز العقارات. دقة مطلقة في السيولة الرقمية.'}
            </p>
          </div>

          <Link to="/solutions/smart-blocks" className="group block relative glass-card premium-card overflow-hidden text-center">
             <div className="p-12 md:p-32 relative overflow-hidden">
                {/* Visual Action Layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full max-w-6xl mx-auto">
                   {[
                     { label: lang === 'en' ? "Secondary Liquidity" : "السيولة الثانوية", val: "INSTITUTIONAL", icon: <Layers className="text-[var(--accent-gold)]" size={32} /> },
                     { label: lang === 'en' ? "Compliance Index" : "مؤشر الامتثال", val: "100% REGULATED", icon: <ShieldCheck className="text-[var(--accent-gold)]" size={32} /> },
                     { label: lang === 'en' ? "Execution Protocol" : "بروتوكول التنفيذ", val: "REAL-TIME", icon: <Zap className="text-[var(--accent-gold)]" size={32} /> }
                   ].map((m, i) => (
                     <div key={i} className="group-hover:scale-110 transition-transform duration-700 flex flex-col items-center">
                        <div className="flex justify-center mb-8 opacity-40 group-hover:opacity-100 group-hover:animate-bounce-slow">{m.icon}</div>
                        <p className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">{m.val}</p>
                        <h5 className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] text-[var(--accent-gold)]">{m.label}</h5>
                     </div>
                   ))}
                </div>
                
                <div className="mt-20 flex items-center justify-center gap-4 text-[10px] font-black text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="w-12 h-[1px] bg-[var(--accent-gold)]/40" />
                   <span>{lang === 'en' ? 'ACCESS PROTOCOL 6.2' : 'دخول بروتوكول 6.2'}</span>
                   <ChevronRight size={14} className={isArabic ? 'rotate-180' : ''} />
                </div>
             </div>
          </Link>
        </motion.div>
      </section>

      {/* ── 05. TRIPLE-TRACK SECTION ── */}
      <section className="py-52 relative overflow-hidden z-10 text-center border-b border-[var(--border-color)]">
         <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant}
           className="max-w-7xl mx-auto px-6"
         >
            <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.6em] mb-12 block">
               {lang === 'en' ? 'The Strategic Framework' : 'المخطط الاستراتيجي'}
            </span>
            <div className="mb-20">
               <h2 className="text-7xl md:text-[11rem] font-black uppercase tracking-tighter leading-none italic">
                 <span className="block mb-4">{lang === 'en' ? 'TRIPLE-TRACK' : 'ترايبل-تراك'}</span>
                 <span className="gold-gradient-text not-italic block">{lang === 'en' ? 'SOLUTIONS.' : 'سـولوشـنـز.'}</span>
               </h2>
               <p className="text-xl md:text-2xl text-[var(--text-primary)] opacity-40 max-w-4xl mx-auto font-light mt-12">
                  {lang === 'en' ? 'Three specialized pathways engineering the future of institutional liquidity.' : 'ثلاثة مسارات متخصصة تهندس مستقبلاً من السيولة المؤسسية.'}
               </p>
            </div>
            
            <div className="flex justify-center">
              <PremiumButton to="/contact" scale="scale-125">
                {t('cta_command')}
              </PremiumButton>
            </div>
         </motion.div>
      </section>
    </div>
  );
};

export default Home;
