import { useLanguage } from '@/context/useLanguage';
import CommandTerminal from '@/components/interactive/CommandTerminal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Cpu, Layers, Zap, BarChart, Bot, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const { t, lang } = useLanguage();

  const tracks = [
    {
      id: "etmam",
      title: t('track_01_title'),
      subtitle: lang === 'en' ? "CONSULTANCY" : "استشارات",
      desc: lang === 'en' ? "Institutional advisory and regulatory engineering for global real asset digital transitions." : "استشارات مؤسسية وهندسة تنظيمية للتحولات الرقمية للأصول العقارية العالمية.",
      icon: <Globe size={40} className="text-blue-400" />,
      link: "/solutions/etmam",
      theme: "from-blue-600/10 to-transparent",
      tag: "TRACK 01"
    },
    {
      id: "smart-blocks",
      title: t('track_02_title'),
      subtitle: lang === 'en' ? "TOKENIZATION ENGINE" : "محرك الترميز",
      desc: lang === 'en' ? "The definitive high-performance infrastructure for asset liquidity and blockchain settlement." : "البنية التحتية عالية الأداء لسيولة الأصول وتسوية البلوكتشين.",
      icon: <Cpu size={40} className="text-[var(--accent-gold)]" />,
      link: "/solutions/smart-blocks",
      theme: "from-[var(--accent-gold)]/10 to-transparent",
      tag: "TRACK 02"
    },
    {
      id: "smart-agent",
      title: t('track_03_title'),
      subtitle: lang === 'en' ? "AI INTELLIGENCE" : "ذكاء اصطناعي",
      desc: lang === 'en' ? "Computational supremacy and predictive analytics applied to high-stakes market data." : "التفوق الحسابي والتحليلات التنبؤية المطبقة على بيانات السوق ذات المخاطر العالية.",
      icon: <Bot size={40} className="text-cyan-400" />,
      link: "/solutions/smart-agent",
      theme: "from-cyan-400/10 to-transparent",
      tag: "TRACK 03"
    }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* Solutions Hero */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl"
           >
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">
                {lang === 'en' ? 'The Strategic Framework' : 'الإطار الاستراتيجي'}
              </span>
              <h1 className="text-7xl md:text-[9rem] font-black mb-12 uppercase tracking-tighter leading-[0.8]">
                 {lang === 'en' ? <>Triple-Track <br /><span className="gold-gradient-text italic">Solutions.</span></> : <>حلول <br /><span className="gold-gradient-text italic">المسارات الثلاثة.</span></>}
              </h1>
              <p className="text-2xl text-[var(--text-primary)] opacity-40 max-w-2xl mx-auto font-light leading-relaxed">
                 {t('solutions_subtitle')}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Triple-Track Display */}
      <section className="py-40 z-10 relative">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border-color)]`}>
               {tracks.map((track, i) => (
                 <motion.div
                   key={track.id}
                   initial={{ opacity: 0, x: lang === 'en' ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   className={`group relative p-16 md:p-20 border-[var(--border-color)] md:border-r last:border-r-0 overflow-hidden transition-all duration-1000 bg-gradient-to-b ${track.theme} ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                 >
                    <div className={`absolute top-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-1000 ${lang === 'en' ? 'right-0' : 'left-0'}`}>
                       {track.icon}
                    </div>

                    <div className="relative z-10">
                       <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.5em] mb-12 block">{track.tag}</span>
                       <h3 className="text-xl font-black text-[var(--text-primary)] opacity-40 mb-2 uppercase tracking-widest">{track.subtitle}</h3>
                       <h2 className={`text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000 ${lang === 'en' ? 'origin-left' : 'origin-right'}`}>{track.title}</h2>
                       <p className="text-[var(--text-primary)] opacity-30 text-lg font-light leading-relaxed mb-16 h-28">{track.desc}</p>
                       
                       <Link to={track.link} className={`inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] group-hover:text-[var(--accent-gold)] transition-all ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          {lang === 'en' ? 'Initiate Deep-Dive' : 'بدء التحليل العميق'} 
                          <ArrowRight size={20} className={`group-hover:translate-x-4 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
                       </Link>
                    </div>

                    <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Lively Synergy Section */}
      <section className="py-60 z-10 relative overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30 transition-colors duration-700">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-gold)]/5 to-transparent" />
         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                <div className={`flex gap-8 mb-16 ${lang === 'ar' ? 'justify-end' : ''}`}>
                   <Globe className="text-blue-400" size={32} />
                   <Cpu className="text-[var(--accent-gold)]" size={32} />
                   <Bot className="text-cyan-400" size={32} />
                </div>
                <h2 className={`text-5xl md:text-[8rem] font-black mb-12 uppercase tracking-tighter leading-none italic ${lang === 'ar' ? 'font-arabic' : ''}`}>
                   {lang === 'en' ? <>Total Ecosystem <br /><span className="text-[var(--accent-gold)] not-italic">Integrity.</span></> : <>تكامل النظام <br /><span className="text-[var(--accent-gold)] not-italic">الشامل.</span></>}
                </h2>
                <p className="text-[var(--text-primary)] opacity-40 text-2xl mb-20 font-light max-w-xl">
                  {lang === 'en' 
                    ? 'Each track operates independently but integrates seamlessly into the ETMAM Execution Engine.'
                    : 'يعمل كل مسار بشكل مستقل ولكنه يتكامل بسلاسة في محرك تنفيذ إتمام.'}
                </p>
                <Link to="/contact" className="btn-premium px-20 shadow-[var(--accent-gold)]/30">
                  {lang === 'en' ? 'INITIATE PARTNER PROTOCOL' : 'بدء بروتوكول الشراكة'}
                </Link>
              </div>

              {/* Live Terminal Insight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <CommandTerminal />
              </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Solutions;
