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
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Home = () => {
  const { lang, t } = useLanguage();
  const isArabic = lang === 'ar';

  const stats = [
    { label: lang === 'en' ? 'Years of Strategic Expertise' : 'سنوات من الخبرة الاستراتيجية', value: '15+', icon: <Award className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Digital Asset Strategies' : 'استراتيجيات الأصول الرقمية', value: '50+', icon: <Layers className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Targeting Global Liquidity' : 'نستهدف السيولة العالمية', value: 'Promise', icon: <TrendingUp className="text-[var(--accent-gold)]" size={24} /> },
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
        <div className={`absolute inset-0 z-0 bg-black group overflow-hidden`}>
          <img 
            src="/media/etmam_executive_hero_premium.png" 
            alt="Etmam Vision - Ghassan Farajallah" 
            className={`absolute top-0 h-full transition-all duration-[5000ms] animate-slow-zoom brightness-[0.4] group-hover:brightness-[0.6] grayscale group-hover:grayscale-0
              ${isArabic ? 'left-0 scale-x-[-1]' : 'right-0'} `}
            style={{ 
              objectPosition: 'top center',
              width: '65%',
              objectFit: 'cover',
              maskImage: `linear-gradient(${isArabic ? 'to right' : 'to left'}, black 45%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(${isArabic ? 'to right' : 'to left'}, black 45%, transparent 100%)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]/80" />
          <div className={`absolute inset-0 bg-gradient-to-r ${isArabic ? 'from-transparent via-[var(--bg-primary)]/30 to-[var(--bg-primary)]' : 'from-[var(--bg-primary)] via-[var(--bg-primary)]/30 to-transparent'}`} />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-32 relative z-30 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} 
            className={`max-w-5xl ${isArabic ? 'mr-auto text-end pl-20' : 'text-start pr-20'}`}>
            <motion.div variants={fadeUpVariant} className={`flex items-center gap-6 mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="w-16 h-[1px] bg-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[0.8em]">
                {lang === 'en' ? 'Track 01 // Executive Engine' : 'المسار 01 // المحرك التنفيذي'}
              </span>
            </motion.div>

            <TextReveal 
              text={lang === 'en' ? 'Engineering the Future.' : 'هندسة مـسـتـقـبـل السيولة الرقمية.'}
              className={`display-title mb-10 tracking-tighter ${isArabic ? 'leading-[1.4]' : 'leading-[0.85]'}`}
            />

            <motion.p variants={fadeUpVariant} className={`text-[clamp(1rem,1.8vw,1.4rem)] font-light opacity-60 max-w-3xl mb-16 leading-relaxed`}>
              {lang === 'en' 
                ? 'Building the institutional bridge for the digital-first era. A visionary platform engineering the transition to tokenized real assets.'
                : 'بناء الجسر المؤسسي للعصر الرقمي الأول. منصة طموحة تهندس الانتقال نحو الأصول الحقيقية المرمزة.'}
            </motion.p>

            <motion.div variants={fadeUpVariant} className={`flex flex-col sm:flex-row gap-10 items-center sm:items-start`}>
              <Magnetic strength={0.4}>
                <PremiumButton to="/contact" scale="scale-110">
                  {t('cta_initiate')}
                </PremiumButton>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link to="/about" className="px-16 py-7 border border-[var(--border-color)] bg-white/5 backdrop-blur-md text-[var(--text-primary)] font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)] transition-all flex items-center justify-center">
                  {lang === 'en' ? 'DISCOVER THE VISION' : 'اكتشف الرؤية الاستراتيجية'}
                </Link>
              </Magnetic>
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
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8 animate-slow-y text-glow-gold">SmartBlocks.</h2>
            <p className="text-xl md:text-2xl text-[var(--text-primary)] opacity-40 max-w-4xl mx-auto font-light leading-relaxed">
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

      {/* ── 05. LAUNCH PROTOCOL: The Gateway ── */}
      <section className="py-60 relative overflow-hidden text-center bg-black/60 border-t border-[var(--border-color)]">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--accent-gold)]/5 blur-[150px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[1.2em] mb-12 block opacity-80">
            {lang === 'en' ? 'Final Protocol' : 'البروتوكول النهائي'}
          </motion.span>
          
          <motion.h2 
            variants={fadeUpVariant} 
            className="font-black uppercase tracking-tighter mb-24 leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem,8vw,7rem)' }}
          >
            {lang === 'en'
              ? <>Enter the <span className="text-[var(--accent-gold)]">Arena.</span></>
              : <>ادخل <span className="text-[var(--accent-gold)]">الميدان.</span></>}
          </motion.h2>

          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Action 1: Institutional Engagement */}
            <Link to="/contact" 
               className="group flex flex-col items-center justify-center p-20 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-3xl relative overflow-hidden transition-all duration-1000 hover:border-[var(--accent-gold)] hover:shadow-[0_0_60px_rgba(201,169,98,0.25)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <ShieldCheck size={64} className="text-[var(--accent-gold)] mb-12 group-hover:scale-110 transition-transform duration-1000" />
              <h3 className="text-4xl font-black uppercase tracking-tight mb-6">{lang === 'en' ? 'The Platform' : 'المنصة المؤسسية'}</h3>
              <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 mb-12">{lang === 'en' ? 'Secure Login // Onboarding' : 'تسجيل دخول آمن // انضمام'}</p>
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-700">
                <ArrowRight size={24} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </Link>

            {/* Action 2: Academy & Research */}
            <Link to="/insights" 
               className="group flex flex-col items-center justify-center p-20 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-3xl relative overflow-hidden transition-all duration-1000 hover:border-[var(--accent-gold)] hover:shadow-[0_0_60px_rgba(201,169,98,0.25)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <Zap size={64} className="text-[var(--accent-gold)] mb-12 group-hover:scale-110 transition-transform duration-1000" />
              <h3 className="text-4xl font-black uppercase tracking-tight mb-6">{lang === 'en' ? 'The Academy' : 'أكاديمية الإتقان'}</h3>
              <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 mb-12">{lang === 'en' ? 'Intelligence // Masterclass' : 'الذكاء // الماستر كلاس'}</p>
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-700">
                <ArrowRight size={24} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </Link>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mt-32 opacity-30 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase font-inter leading-none">
             Institutional Engine // Layer 0.0 Gateway
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
