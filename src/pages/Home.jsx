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
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';

import ParallaxHero from '@/components/interactive/ParallaxHero';
// ... other imports

const Home = () => {
  const { t, lang } = useLanguage();

  const stats = [
    { label: lang === 'en' ? 'Years of Leadership' : 'سنوات من القيادة', value: '10+', icon: <Award className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Professionals Trained' : 'متخصص تم تدريبهم', value: '500+', icon: <Users className="text-[var(--accent-gold)]" size={24} /> },
    { label: lang === 'en' ? 'Asset Value Tokenized' : 'قيمة الأصول المرمزة', value: '$1B+', icon: <TrendingUp className="text-[var(--accent-gold)]" size={24} /> },
  ];

  const corePillars = [
    {
      title: t('track_01_title'),
      description: lang === 'en' ? "Strategic advisory for real estate enterprises transitioning to digital assets." : "استشارات استراتيجية للمؤسسات العقارية التي تنتقل إلى الأصول الرقمية.",
      link: "/solutions",
      role: "ETMAM Engine",
      icon: <Layers size={32} className="text-[var(--accent-gold)]" />,
      tag: "STRATEGY"
    },
    {
      title: t('track_02_title'),
      description: lang === 'en' ? "Building the future of finance. Flagship projects defining the tokenization standard." : "بناء مستقبل المالية. مشاريع رائدة تحدد معايير الترميز.",
      link: "/solutions",
      role: "Visionary Builder",
      icon: <Cpu size={32} className="text-[var(--accent-gold)]" />,
      tag: "INNOVATION"
    }
  ];

  return (
    <div className="bg-transparent text-[var(--text-primary)] selection:bg-[var(--accent-gold)]/40 scroll-smooth transition-colors duration-700">
      {/* Unified Background is now in App.jsx */}

      {/* 01. Hero Section (Prestige Theme) */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10 transition-colors duration-700">
        <ParallaxHero>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center py-20">
            <motion.div
              initial={{ opacity: 0, x: lang === 'en' ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative z-30 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className={`flex items-center gap-4 mb-10 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
                <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                  {lang === 'en' ? 'Executive Leadership' : 'القيادة التنفيذية'}
                </span>
              </motion.div>
              
              <h1 className={`text-[clamp(3.5rem,7.5vw,8.5rem)] font-black mb-12 leading-[0.9] uppercase tracking-tighter ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? (
                  <>Institutional <br /> <span className="gold-gradient-text italic">Precision.</span></>
                ) : (
                  <>دقة <br /> <span className="gold-gradient-text italic">مؤسسية.</span></>
                )}
              </h1>
              <p className="text-2xl md:text-3xl text-[var(--text-primary)] leading-relaxed font-light mb-20 max-w-2xl opacity-80">
                {lang === 'en' 
                  ? 'Ghassan Farajallah engineers the elite frameworks for the transition to tokenized real estate assets.'
                  : 'يصمم غسان فرج الله الأطر النخبوية للانتقال إلى الأصول العقارية المرمزة.'}
              </p>
              <div className={`flex flex-col sm:flex-row gap-8 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                 <Link to="/contact" className="btn-premium flex items-center justify-center gap-4 group border-none">
                    {t('cta_initiate')} <div className={`w-6 h-6 bg-[var(--bg-primary)] flex items-center justify-center rounded-full group-hover:scale-110 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`}><ArrowRight size={14} className="text-[var(--accent-gold)]" /></div>
                 </Link>
                 <Link to="/solutions" className="px-10 py-5 border border-[var(--border-color)] text-[var(--text-primary)] font-black uppercase tracking-widest text-[10px] hover:bg-[var(--accent-gold)]/5 transition-all flex items-center justify-center">
                    {lang === 'en' ? 'Review Architecture' : 'مراجعة البنية'}
                 </Link>
              </div>
            </motion.div>

            {/* Founder Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative z-20 justify-self-end"
            >
              <div className="relative w-[540px] aspect-[3/4.5] overflow-hidden rounded-sm border border-[var(--border-color)] p-3 bg-[var(--bg-secondary)]/30 backdrop-blur-md metallic-glow group">
                <img 
                  src="/founder-1.jpg" 
                  alt="Ghassan Farajallah" 
                  className="w-full h-full object-cover object-top grayscale brightness-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] ease-out shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-70" />
                <div className={`absolute bottom-8 p-8 glass-card border-[var(--accent-gold)]/20 backdrop-blur-2xl ${lang === 'en' ? 'left-8' : 'right-8 text-right'}`}>
                  <span className="text-[var(--accent-gold)] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
                     {lang === 'en' ? 'Founder & Visionary' : 'المؤسس والمبتكر'}
                  </span>
                  <h3 className={`text-3xl font-black uppercase tracking-tight text-[var(--text-primary)] ${lang === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {lang === 'en' ? <>Ghassan <br />Farajallah</> : <>غسان <br />فرج الله</>}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </ParallaxHero>
      </section>

      {/* 02. Authority Metrics */}
      <section className="bg-[var(--bg-secondary)]/5 border-y border-[var(--border-color)] backdrop-blur-sm relative py-24 z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center group ${lang === 'en' ? 'md:items-start md:text-left text-center' : 'md:items-end md:text-right text-center'}`}
            >
              <div className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
              <h4 className="text-6xl font-black mb-2 gold-gradient-text">{stat.value}</h4>
              <p className="text-[12px] font-black text-[var(--text-primary)] opacity-40 uppercase tracking-[0.4em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03. Domains of Authority */}
      <section className="py-52 relative overflow-hidden z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`flex flex-col lg:flex-row justify-between items-end gap-16 mb-32 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`max-w-3xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'Strategic Architecture' : 'العمارة الاستراتيجية'}
              </span>
              <h2 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? <>Domains of <br /><span className="text-[var(--accent-gold)] italic">Authority.</span></> : <>مجالات <br /><span className="text-[var(--accent-gold)] italic">النفوذ.</span></>}
              </h2>
            </div>
            <p className={`text-[var(--text-primary)] opacity-30 text-xl font-light max-w-xs lg:mb-4 lg:pl-10 ${lang === 'en' ? 'lg:border-l' : 'lg:border-r text-right'} border-[var(--border-color)]`}>
              {lang === 'en' ? 'Institutional-grade frameworks for the global digital transformation.' : 'أطر عمل مؤسسية للتحول الرقمي العالمي.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`premium-card p-16 md:p-24 group relative ${lang === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <div className={`absolute top-0 p-12 text-[var(--accent-gold)] opacity-[0.04] text-[180px] font-black leading-none select-none group-hover:opacity-[0.08] transition-opacity ${lang === 'en' ? 'right-0' : 'left-0'}`}>0{idx+1}</div>
                <div className={`w-20 h-20 bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center mb-12 group-hover:border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)]/20 transition-all duration-700 ${lang === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                   {pillar.icon}
                </div>
                <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">{pillar.tag}</span>
                <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">{pillar.title}</h3>
                <p className="text-[var(--text-primary)] opacity-40 text-xl leading-relaxed font-light mb-16 max-w-md">
                  {pillar.description}
                </p>
                <Link to={pillar.link} className={`inline-flex items-center gap-4 text-[var(--text-primary)] font-black text-[10px] uppercase tracking-[0.4em] group-hover:text-[var(--accent-gold)] transition-all ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  {lang === 'en' ? 'Secure Consultation' : 'تأمين استشارة'} <ArrowRight size={16} className={`group-hover:translate-x-3 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Flagship Spotlight: SMARTBLOCKS */}
      <section className="py-60 bg-[var(--bg-primary)] relative overflow-hidden border-y border-[var(--accent-gold)]/10 z-10 transition-colors duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-[var(--accent-gold)]/[0.04] rounded-full blur-[180px] z-0" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-40">
            <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">
               {lang === 'en' ? 'Flagship Case Study' : 'دراسة حالة رائدة'}
            </span>
            <h2 className="text-7xl md:text-[11rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">SmartBlocks.</h2>
            <p className="text-2xl md:text-3xl text-[var(--text-primary)] opacity-30 max-w-4xl mx-auto font-light leading-relaxed">
              {lang === 'en' 
                ? 'Defining the gold standard for real estate tokenization. A flagship demonstration of technical excellence.'
                : 'تحديد المعيار الذهبي لترميز العقارات. عرض رائد للتميز التقني.'}
            </p>
          </div>

          <div className="relative group">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-card rounded-sm border-[var(--accent-gold)]/20 premium-shadow overflow-hidden group-hover:border-[var(--accent-gold)]/40 transition-all duration-1000"
            >
               <div className="bg-white/5 border-b border-[var(--border-color)] px-8 py-4 flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent-gold)]/40">Operational Protocol 6.2 // Active</div>
                  <Globe size={14} className="text-[var(--accent-gold)]/30" />
               </div>

               <div className="relative aspect-video bg-[var(--bg-secondary)] p-12 md:p-24 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbda3ef66851?auto=format&fit=crop&q=80&w=2070" 
                    alt="SmartBlocks Analytics" 
                    className="w-full h-full object-cover grayscale opacity-20 scale-110 group-hover:scale-100 transition-transform duration-[5000ms]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
                       {[
                         { label: lang === 'en' ? "Asset Liquidity" : "سيولة الأصول", val: "+24.8%", icon: <TrendingUp className="text-[var(--accent-gold)]" /> },
                         { label: lang === 'en' ? "Compliance Index" : "مؤشر الامتثال", val: "100%", icon: <ShieldCheck className="text-[var(--accent-gold)]" /> },
                         { label: lang === 'en' ? "Tx Settlement" : "تسوية المعاملات", val: "12ms", icon: <Activity className="text-[var(--accent-gold)]" /> }
                       ].map((m, i) => (
                         <div key={i} className="p-10 glass-card bg-[var(--bg-primary)]/80 border-[var(--accent-gold)]/10 text-center hover:border-[var(--accent-gold)] transition-colors">
                            <div className="flex justify-center mb-6">{m.icon}</div>
                            <h5 className="text-4xl font-black mb-2">{m.val}</h5>
                            <p className="text-[10px] font-black text-[var(--text-primary)] opacity-20 uppercase tracking-widest">{m.label}</p>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </motion.div>
            
            <div className={`mt-20 flex flex-col md:flex-row items-center justify-between gap-10 max-w-4xl mx-auto px-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                 <h4 className="text-xl font-black mb-4 uppercase italic">Institutional <br /><span className="text-[var(--accent-gold)] not-italic">{lang === 'en' ? 'Infrastructure.' : 'بنية تحتية.'}</span></h4>
                 <p className="text-[var(--text-primary)] opacity-40 text-sm font-light leading-relaxed">
                   {lang === 'en' ? 'Cross-border settlement architecture vetted by global regulators.' : 'هندسة تسوية عابرة للحدود معتمدة من قبل الجهات التنظيمية العالمية.'}
                 </p>
              </div>
              <Link to="/solutions" className="px-16 py-7 bg-[var(--text-primary)] text-[var(--bg-primary)] font-black uppercase tracking-[0.4em] text-xs hover:bg-[var(--accent-gold)] transition-all premium-shadow flex items-center gap-4 group">
                 {lang === 'en' ? 'Review Case Study' : 'مراجعة دراسة الحالة'} <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05. High-Conversion CTA */}
      <section className="py-60 relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 font-arabic">
            <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
              <h2 className={`text-7xl md:text-[10rem] font-black mb-12 uppercase tracking-tighter italic leading-none ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? <>Ready to <br /><span className="text-[var(--accent-gold)] not-italic">Scale?</span></> : <>جاهز <br /><span className="text-[var(--accent-gold)] not-italic">للتوسع؟</span></>}
              </h2>
              <p className="text-2xl md:text-3xl text-[var(--text-primary)] opacity-90 mb-20 font-light leading-relaxed max-w-3xl mx-auto">
                 {lang === 'en' 
                   ? 'Initiate the protocol for institutional transformation. Join the elite network defining the next era.'
                   : 'ابدأ بروتوكول التحول المؤسسي. انضم إلى شبكة النخبة التي تحدد العصر القادم.'}
              </p>
              <Link to="/contact" className="btn-premium text-lg px-20 py-8 shadow-[var(--accent-gold)]/30 flex items-center justify-center gap-4 group mx-auto w-fit">
                 {t('cta_command')} <ArrowRight size={24} className={`group-hover:translate-x-4 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
