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
  Zap,
  Target,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';

const Home = () => {
  const { lang, t } = useLanguage();

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
      link: "/solutions/smartblocks",
      icon: <Cpu size={32} className="text-[var(--accent-gold)]" />,
      tag: "INNOVATION"
    }
  ];

  return (
    <div className={`bg-transparent text-[var(--text-primary)] selection:bg-[var(--accent-gold)]/40 scroll-smooth transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      
      {/* ── 01. HERO ── */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden z-20 border-b border-[var(--border-color)]">
        {/* White/Imperial Gradient for Light Mode OR Dark for Noir */}
        <div className="absolute inset-0 z-0 bg-white dark:bg-black group">
          <img 
            src="/media/etmam_hero_bg.png" 
            alt="Etmam Vision" 
            className="w-full h-full object-cover grayscale brightness-[0.9] dark:brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-[1] transition-all duration-[5000ms] animate-slow-zoom"
          />
          {/* Dynamic Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/20 to-transparent" />
        </div>

        <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-30 w-full ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className={`flex items-center gap-6 mb-8 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-12 h-[1px] bg-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                {lang === 'en' ? 'Track 01 // Executive Engine' : 'المسار 01 // المحرك التنفيذي'}
              </span>
            </div>

            <h1 className={`display-title mb-8 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'en' ? <>Institutional<br /><span className="gold-gradient-text italic">Precision.</span></> : <>الدقة<br /><span className="gold-gradient-text italic">المؤسسية الرصينة.</span></>}
            </h1>

            <p className="text-[clamp(1.1rem,2vw,1.6rem)] font-light opacity-60 max-w-3xl mb-12 leading-relaxed">
              {lang === 'en' 
                ? 'Engineering the elite frameworks for the transition to tokenized real estate assets. Leadership for the digital-first era.'
                : 'يصمم إتمام الأطر النخبوية للانتقال إلى الأصول العقارية المرمزة. القيادة الحقيقية للعصر الرقمي الأول.'}
            </p>

            <div className={`flex flex-col sm:flex-row gap-6 ${lang === 'ar' ? 'flex-row-reverse justify-start' : 'justify-start'}`}>
              <Link to="/contact" className="btn-premium px-12 py-6 scale-110 shadow-gold/20">
                {t('cta_initiate')}
                <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-4 rotate-180' : 'ml-4'}`} />
              </Link>
              <Link to="/about" className="px-10 py-5 border border-[var(--border-color)] bg-white/5 backdrop-blur-sm text-[var(--text-primary)] font-black uppercase tracking-widest text-[9px] hover:bg-[var(--accent-gold)]/10 transition-all flex items-center justify-center">
                {lang === 'en' ? 'DISCOVER THE VISION' : 'اكتشف الرؤية الاستراتيجية'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. METRICS ── */}
      <section className="bg-[var(--bg-secondary)]/30 border-b border-[var(--border-color)] relative py-20 z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className={`flex flex-col group ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}
            >
              <h4 className="text-6xl md:text-7xl font-black mb-1 gold-gradient-text tracking-tighter transition-all duration-700 group-hover:translate-y-[-5px]">{stat.value}</h4>
              <p className="text-[10px] font-black text-[var(--text-primary)] opacity-30 uppercase tracking-[0.4em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 03. DOMAINS: The Core Pillars ── */}
      <section className="py-40 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`flex flex-col lg:flex-row justify-between items-end gap-16 mb-24 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                {lang === 'en' ? 'Institutional Grade' : 'المستوى المؤسسي الرفيع'}
              </span>
              <h2 className={`section-title ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? <>Domains of <br /><span className="gold-gradient-text italic">Authority.</span></> : <>مجالات <br /><span className="gold-gradient-text italic">النفوذ والسيادة.</span></>}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link to={pillar.link} className={`block p-12 md:p-16 border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-all duration-700 hover:border-[var(--accent-gold)]/40 hover:-translate-y-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className={`w-20 h-20 border border-[var(--border-color)] flex items-center justify-center mb-10 group-hover:border-[var(--accent-gold)] group-hover:shadow-[0_0_30px_rgba(201,169,98,0.2)] transition-all duration-700 ${lang === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                     {pillar.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{pillar.title}</h3>
                  <p className="text-[var(--text-primary)] opacity-40 text-lg leading-relaxed font-light mb-16 max-w-md group-hover:opacity-100 transition-opacity duration-700">
                    {pillar.description}
                  </p>
                  <div className={`mt-auto flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span>{lang === 'en' ? 'SECURE CONSULTATION' : 'تأمين استشارة'}</span>
                    <ArrowRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. FLAGSHIP: SMARTBLOCKS ── */}
      <section className="py-40 bg-[var(--bg-secondary)]/40 relative overflow-hidden border-y border-[var(--border-color)] z-10 transition-colors duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-[var(--accent-gold)]/[0.04] rounded-full blur-[180px] z-0 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-8 animate-slow-y">SmartBlocks.</h2>
            <p className="text-2xl md:text-3xl text-[var(--text-primary)] opacity-40 max-w-4xl mx-auto font-light leading-relaxed">
              {lang === 'en' 
                ? 'Defining the gold standard for real estate tokenization. Absolute precision in digital liquidity.'
                : 'تحديد المعيار الذهبي لترميز العقارات. دقة مطلقة في السيولة الرقمية.'}
            </p>
          </div>

          <Link to="/solutions/smartblocks" className="group block relative glass-card border-[var(--border-color)] bg-[var(--bg-primary)]/40 premium-shadow-gold overflow-hidden transition-all duration-1000 hover:border-[var(--accent-gold)]/40">
             <div className="p-12 md:p-32 relative overflow-hidden text-center">
                {/* Visual Action Layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full max-w-6xl mx-auto">
                   {[
                     { label: lang === 'en' ? "Secondary Liquidity" : "السيولة الثانوية", val: "INSTITUTIONAL", icon: <Layers className="text-[var(--accent-gold)]" /> },
                     { label: lang === 'en' ? "Compliance Index" : "مؤشر الامتثال", val: "100% REGULATED", icon: <ShieldCheck className="text-[var(--accent-gold)]" /> },
                     { label: lang === 'en' ? "Execution Protocol" : "بروتوكول التنفيذ", val: "REAL-TIME", icon: <Zap className="text-[var(--accent-gold)]" /> }
                   ].map((m, i) => (
                     <div key={i} className="group-hover:scale-110 transition-transform duration-700">
                        <div className="flex justify-center mb-8 opacity-40 group-hover:opacity-100 group-hover:animate-bounce-slow">{m.icon}</div>
                        <p className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">{m.val}</p>
                        <h5 className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] text-[var(--accent-gold)]">{m.label}</h5>
                     </div>
                   ))}
                </div>
                
                <div className="mt-20 flex items-center justify-center gap-4 text-[10px] font-black text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="w-12 h-[1px] bg-[var(--accent-gold)]/40" />
                   <span>{lang === 'en' ? 'ACCESS PROTOCOL 6.2' : 'دخول بروتوكول 6.2'}</span>
                   <ChevronRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                </div>
             </div>
          </Link>
        </div>
      </section>

      {/* ── 05. TRIPLE-TRACK SECTION ── */}
      <section className="py-52 relative overflow-hidden z-10 text-center border-b border-[var(--border-color)]">
         <div className="max-w-7xl mx-auto px-6">
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
            
            <Link to="/contact" className="btn-premium px-20 py-8 scale-125 shadow-gold/30 flex items-center justify-center gap-6 group mx-auto w-fit">
                {t('cta_command')} <ArrowRight size={24} className={lang === 'ar' ? 'rotate-180' : ''} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;
