import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  PlayCircle, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Globe, 
  Cpu, 
  BarChart3,
  ExternalLink,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';

const Home = () => {
  const { lang, t } = useLanguage();

  const stats = [
    { label: lang === 'en' ? 'Years of Leadership' : 'عقد من القيادة', value: '10+', icon: <Award className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Professionals Trained' : 'خبير تم تأهيلهم', value: '500+', icon: <Users className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Asset Value Tokenized' : 'قيمة الأصول المشفرة', value: '$4B+', icon: <TrendingUp className="text-[var(--accent-gold)]" size={24} /> },
  ];

  const corePillars = [
    {
      id: "01",
      title: lang === 'en' ? "ETMAM Engine" : "محرك إتمام الاستراتيجي",
      subtitle: lang === 'en' ? "Institutional Advisory." : "الاستشارات المؤسسية العليا.",
      description: lang === 'en' ? "Strategic architectural frameworks for real estate enterprises transitioning to high-efficiency digital assets." : "أطر عمل هندسية استراتيجية للمؤسسات العقارية التي تنتقل إلى الأصول الرقمية عالية الكفاءة.",
      link: "/solutions",
      icon: <Layers size={32} className="text-[var(--accent-gold)]" />,
      tag: "STRATEGY"
    },
    {
      id: "02",
      title: lang === 'en' ? "SmartBlocks" : "سمارت بلوكس (العقدة الرائدة)",
      subtitle: lang === 'en' ? "Technological Dominance." : "الهيمنة التقنية المطلقة.",
      description: lang === 'en' ? "Building the future of finance. Flagship tokenization project defining the standard for global real asset liquidity." : "بناء مستقبل المالية. المشروع الرائد للترميز الذي يحدد معايير سيولة الأصول العالمية.",
      link: "/solutions/smartblocks",
      icon: <Cpu size={32} className="text-[var(--accent-gold)]" />,
      tag: "INNOVATION"
    }
  ];

  return (
    <div className={`bg-transparent text-[var(--text-primary)] selection:bg-[var(--accent-gold)]/40 scroll-smooth transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      
      {/* ── 01. HERO: The Institutional Horizon ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        {/* Full Cinematic Video/Image Backdrop */}
        <div className="absolute inset-0 z-0 group">
          <img 
            src="/media/etmam_hero_bg.png" 
            alt="Etmam Executive Vision" 
            className="w-full h-full object-cover scale-[1.02] grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:scale-100 group-hover:brightness-[0.6] transition-all duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />
          <div className="absolute inset-0 bg-[var(--accent-gold)]/5 mix-blend-overlay" />
        </div>

        <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className={`flex items-center gap-6 mb-12 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-16 h-[1px] bg-[var(--accent-gold)]/50" />
              <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.7em]">
                {lang === 'en' ? 'Track 01 // Executive Engine' : 'المسار 01 // المحرك التنفيذي'}
              </span>
            </div>

            <h1 className={`font-black uppercase leading-[0.85] tracking-tighter mb-10 ${lang === 'ar' ? 'font-arabic' : ''}`}
               style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}>
              {lang === 'en' ? <>Institutional<br /><span className="gold-gradient-text italic">Precision.</span></> : <>الدقة<br /><span className="gold-gradient-text italic">المؤسسية الرصينة.</span></>}
            </h1>

            <p className="text-[clamp(1.1rem,3vw,1.8rem)] font-light opacity-60 max-w-4xl mb-20 leading-relaxed">
              {lang === 'en' 
                ? 'Engineering the elite frameworks for the transition to tokenized real estate assets. Leadership for the digital-first era.'
                : 'هندسة الأطر النخبوية للانتقال إلى الأصول العقارية المرمزة. القيادة الحقيقية للعصر الرقمي الأول.'}
            </p>

            <div className={`flex flex-col sm:flex-row gap-10 ${lang === 'ar' ? 'flex-row-reverse justify-start' : 'justify-start'}`}>
              <Link to="/contact" className="btn-premium px-16 py-8 scale-110 shadow-[0_0_50px_rgba(201,169,98,0.2)]">
                {t('cta_initiate')}
                <ArrowRight size={20} className={`inline ${lang === 'ar' ? 'mr-4 rotate-180' : 'ml-4'}`} />
              </Link>
              <Link to="/about" className="px-12 py-7 border border-[var(--border-color)] bg-[var(--bg-primary)]/30 backdrop-blur-md text-[var(--text-primary)] font-black uppercase tracking-widest text-[10px] hover:bg-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)] transition-all flex items-center justify-center">
                {lang === 'en' ? 'DISCOVER THE VISION' : 'اكتشف الرؤية الاستراتيجية'}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block animate-bounce">
          <div className="w-px h-24 bg-gradient-to-t from-[var(--accent-gold)] to-transparent" />
        </div>
      </section>

      {/* ── 02. METRICS: Verified Authority ── */}
      <section className="bg-[var(--bg-secondary)]/5 border-b border-[var(--border-color)] backdrop-blur-sm relative py-32 z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-24">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col group ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}
            >
              <div className="text-[var(--accent-gold)] mb-8 p-4 bg-[var(--accent-gold)]/5 border border-[var(--accent-gold)]/10 rounded-sm group-hover:scale-110 group-hover:bg-[var(--accent-gold)]/10 transition-all duration-700">
                {stat.icon}
              </div>
              <h4 className="text-7xl font-black mb-4 gold-gradient-text tracking-tighter">{stat.value}</h4>
              <p className="text-[11px] font-black text-[var(--text-primary)] opacity-30 uppercase tracking-[0.5em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 03. DOMAINS: Actionable Intelligence ── */}
      <section className="py-52 relative overflow-hidden z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`flex flex-col lg:flex-row justify-between items-end gap-16 mb-32 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'Institutional Grade' : 'المستوى المؤسسي الرفيع'}
              </span>
              <h2 className={`font-black uppercase tracking-tighter leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}
                style={{ fontSize: 'clamp(3rem,8vw,8rem)' }}>
                {lang === 'en' ? <>Domains of <br /><span className="gold-gradient-text italic">Authority.</span></> : <>مجالات <br /><span className="gold-gradient-text italic">النفوذ والسيادة.</span></>}
              </h2>
            </div>
            <p className={`text-[var(--text-primary)] opacity-30 text-2xl font-light max-w-xs lg:mb-4 lg:pl-12 ${lang === 'en' ? 'lg:border-l' : 'lg:border-r text-right'} border-[var(--border-color)] leading-relaxed`}>
              {lang === 'en' ? 'Proprietary frameworks for the global digital evolution.' : 'أطر عمل حصرية للتحول الرقمي العالمي القادم.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--border-color)] overflow-hidden">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link to={pillar.link} className={`group relative p-20 md:p-32 overflow-hidden border-[var(--border-color)] md:border-r last:border-r-0 block h-full transition-all duration-700 hover:bg-[var(--accent-gold)]/[0.03] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,98,0.3)' }} />
                  
                  <div className={`absolute top-0 p-12 text-[var(--accent-gold)] opacity-[0.03] text-[clamp(8rem,15vw,12rem)] font-black leading-none select-none group-hover:opacity-[0.07] transition-all duration-[1500ms] italic ${lang === 'en' ? 'right-0' : 'left-0'}`}>0{idx+1}</div>
                  
                  <div className={`w-24 h-24 border border-[var(--border-color)] flex items-center justify-center mb-16 group-hover:border-[var(--accent-gold)] group-hover:shadow-[0_0_40px_rgba(201,169,98,0.2)] transition-all duration-700 group-hover:scale-110 ${lang === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                     {pillar.icon}
                  </div>
                  
                  <h5 className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.6em] mb-4 opacity-50">{pillar.tag}</h5>
                  <h3 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase group-hover:text-[var(--accent-gold)] transition-colors duration-500">{pillar.title}</h3>
                  <p className="text-[var(--text-primary)] opacity-40 text-xl leading-relaxed font-light mb-20 max-w-md group-hover:opacity-90 transition-opacity duration-700">
                    {pillar.description}
                  </p>
                  
                  <div className={`mt-auto pt-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span>{lang === 'en' ? 'SECURE ENGAGEMENT' : 'تأمين الارتباط'}</span>
                    <ArrowRight size={18} className={`group-hover:translate-x-4 transition-transform duration-500 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-4' : ''}`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. FLAGSHIP CASE: SmartBlocks Architecture ── */}
      <section className="py-60 bg-[var(--bg-secondary)] relative overflow-hidden border-y border-[var(--border-color)] z-10 transition-colors duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] bg-[var(--accent-gold)]/[0.03] rounded-full blur-[200px] z-0" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-40">
            <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.8em] mb-12 block">
               {lang === 'en' ? 'Institutional Standard Rev 6.2' : 'المعيار المؤسسي مراجعة 6.2'}
            </span>
            <h2 className="text-7xl md:text-[14rem] font-black tracking-tighter uppercase leading-[0.75] mb-12 grayscale group-hover:grayscale-0 transition-all duration-1000">SmartBlocks.</h2>
            <p className="text-3xl md:text-4xl text-[var(--text-primary)] opacity-40 max-w-4xl mx-auto font-light leading-relaxed">
              {lang === 'en' 
                ? 'The technical and regulatory gold standard for real estate tokenization. Absolute precision in digital liquidity.'
                : 'المعيار الذهبي التقني والتنظيمي لترميز العقارات. دقة مطلقة في السيولة الرقمية.'}
            </p>
          </div>

          {/* Large Action Frame */}
          <Link to="/solutions/smartblocks" className="group block relative p-2 glass-card border-[var(--border-color)] bg-[var(--bg-primary)]/50 premium-shadow-gold overflow-hidden transition-all duration-1000 hover:border-[var(--accent-gold)]/40 hover:bg-[var(--bg-primary)]/80">
             <div className="bg-[var(--bg-primary)]/50 p-12 md:p-32 relative overflow-hidden">
                {/* Visual Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-1000 grayscale group-hover:grayscale-0">
                  <img src="/media/etmam_architecture.png" alt="Architecture Pattern" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[4000ms]" />
                </div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full max-w-6xl mx-auto">
                   {[
                     { label: lang === 'en' ? "Secondary Liquidity" : "السيولة الثانوية", val: "INSTITUTIONAL", icon: <Layers className="text-[var(--accent-gold)]" /> },
                     { label: lang === 'en' ? "Compliance Framework" : "إطار الامتثال", val: "100% REGULATED", icon: <ShieldCheck className="text-[var(--accent-gold)]" /> },
                     { label: lang === 'en' ? "Execution Protocol" : "بروتوكول التنفيذ", val: "REAL-TIME", icon: <Zap className="text-[var(--accent-gold)]" /> }
                   ].map((m, i) => (
                     <div key={i} className="text-center group/metric transition-all duration-700">
                        <div className="flex justify-center mb-10 group-hover/metric:scale-110 transition-transform duration-500 opacity-40 group-hover:opacity-100">{m.icon}</div>
                        <h5 className="text-xs font-black text-[var(--accent-gold)] mb-4 tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100">{m.label}</h5>
                        <p className="text-4xl font-black uppercase tracking-tight">{m.val}</p>
                     </div>
                   ))}
                </div>

                {/* Floating "Enter" badge */}
                <div className={`absolute bottom-10 ${lang === 'ar' ? 'left-10' : 'right-10'} flex items-center gap-6 p-8 glass-card border-[var(--accent-gold)]/20 backdrop-blur-3xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6 transition-all duration-700`}>
                  <div className="text-right">
                    <p className="text-[9px] font-black opacity-30 uppercase tracking-widest">{lang === 'en' ? 'Review Logic' : 'مراجعة المنطق'}</p>
                    <p className="font-black text-xs uppercase tracking-widest text-[var(--accent-gold)]">{lang === 'en' ? 'Access Case Study' : 'الوصول لدراسة الحالة'}</p>
                  </div>
                  <div className="w-12 h-12 bg-[var(--accent-gold)] flex items-center justify-center text-[var(--bg-primary)] rounded-full">
                    <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </div>
                </div>
             </div>
          </Link>
        </div>
      </section>

      {/* ── 05. FINAL CONVERSION: Command the Future ── */}
      <section className="py-60 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
            >
              <h2 className={`font-black mb-16 uppercase tracking-tighter italic leading-none ${lang === 'ar' ? 'font-arabic' : ''}`}
                 style={{ fontSize: 'clamp(3.5rem, 15vw, 13rem)' }}>
                {lang === 'en' ? <>Ready to <span className="text-[var(--accent-gold)] not-italic">Scale?</span></> : <>جاهز <span className="text-[var(--accent-gold)] not-italic">للتوسع؟</span></>}
              </h2>
              <p className="text-2xl md:text-4xl text-[var(--text-primary)] opacity-40 mb-20 font-light leading-relaxed max-w-4xl mx-auto">
                 {lang === 'en' 
                   ? 'Initiate the protocol for institutional transformation. Join the network of elite developers and sovereign investors.'
                   : 'ابدأ بروتوكول التحول المؤسسي. انضم إلى شبكة من نخبة المطورين والمستثمرين السياديين.'}
              </p>
              <Link to="/contact" className="btn-premium px-24 py-10 scale-125 shadow-[var(--accent-gold)]/40 flex items-center justify-center gap-6 group mx-auto w-fit">
                 {t('cta_command')} 
                 <div className={`w-8 h-8 bg-[var(--bg-primary)] flex items-center justify-center rounded-full group-hover:scale-110 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`}>
                   <ArrowRight size={20} className="text-[var(--accent-gold)]" />
                 </div>
              </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
