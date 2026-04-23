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
              className="display-title mb-10"
            />

            <motion.p variants={fadeUpVariant} className="body-text max-w-3xl mb-16">
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
      {/* ── 02.5 SOCIAL PROOF: Media Presence & Trust Signals ── */}
      <section className="py-32 relative z-10 border-b border-[var(--border-color)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center"
          >
            <motion.span variants={fadeUpVariant} className="section-subtitle">
              {lang === 'en' ? 'Trusted Authority' : 'السلطة الموثوقة'}
            </motion.span>
            <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-20">
              {lang === 'en' 
                ? <><span className="gold-gradient-text italic text-glow-gold">Connected.</span> Everywhere.</>
                : <><span className="gold-gradient-text italic text-glow-gold">متصل.</span> في كل مكان.</>}
            </motion.h3>

            {/* Social Media Cards */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a href="https://www.linkedin.com/in/ghassan-farajallah/" target="_blank" rel="noopener noreferrer" 
                 className="group p-10 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-blue-500/60 hover:bg-blue-500/5 transition-all duration-700 text-center">
                <div className="text-blue-500 mb-6 flex justify-center">
                  <svg className="w-10 h-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 group-hover:text-blue-500 transition-colors">LinkedIn</h4>
                <p className="text-[9px] opacity-30 uppercase tracking-widest font-black">{lang === 'en' ? 'Strategic Network' : 'الشبكة الاستراتيجية'}</p>
              </a>

              <a href="https://www.youtube.com/@gfarajallah" target="_blank" rel="noopener noreferrer"
                 className="group p-10 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-red-500/60 hover:bg-red-500/5 transition-all duration-700 text-center">
                <div className="text-red-500 mb-6 flex justify-center">
                  <svg className="w-10 h-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 group-hover:text-red-500 transition-colors">YouTube</h4>
                <p className="text-[9px] opacity-30 uppercase tracking-widest font-black">{lang === 'en' ? 'Podcast & Keynotes' : 'بودكاست ومحاضرات'}</p>
              </a>

              <a href="https://sellingdubai.substack.com" target="_blank" rel="noopener noreferrer"
                 className="group p-10 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all duration-700 text-center">
                <div className="text-orange-500 mb-6 flex justify-center">
                  <svg className="w-10 h-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors">Substack</h4>
                <p className="text-[9px] opacity-30 uppercase tracking-widest font-black">{lang === 'en' ? 'Market Intelligence' : 'ذكاء السوق'}</p>
              </a>

              <a href="https://www.instagram.com/ghassan_farajallah/" target="_blank" rel="noopener noreferrer"
                 className="group p-10 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-pink-500/60 hover:bg-pink-500/5 transition-all duration-700 text-center">
                <div className="text-pink-500 mb-6 flex justify-center">
                  <svg className="w-10 h-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z"/></svg>
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 group-hover:text-pink-500 transition-colors">Instagram</h4>
                <p className="text-[9px] opacity-30 uppercase tracking-widest font-black">{lang === 'en' ? 'Behind The Vision' : 'خلف الرؤية'}</p>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 03. DOMAINS: The Core Pillars ── */}
      <section className="py-40 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24"
          >
            <div className="max-w-4xl text-start w-full">
              <span className="section-subtitle">
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
            <Link to="/contact" className="action-card">
              <div className="action-card-overlay" />
              <ShieldCheck className="action-card-icon" size={64} />
              <h3 className="action-card-title">{lang === 'en' ? 'The Platform' : 'المنصة المؤسسية'}</h3>
              <p className="action-card-desc">{lang === 'en' ? 'Secure Login // Onboarding' : 'تسجيل دخول آمن // انضمام'}</p>
              <div className="action-card-btn">
                <ArrowRight size={24} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </Link>

            {/* Action 2: Academy & Research */}
            <Link to="/academy" className="action-card">
              <div className="action-card-overlay" />
              <Zap className="action-card-icon" size={64} />
              <h3 className="action-card-title">{lang === 'en' ? 'The Academy' : 'أكاديمية الإتقان'}</h3>
              <p className="action-card-desc">{lang === 'en' ? 'Intelligence // Masterclass' : 'الذكاء // الماستر كلاس'}</p>
              <div className="action-card-btn">
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
