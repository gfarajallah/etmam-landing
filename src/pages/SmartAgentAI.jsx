import { useLanguage } from '@/context/useLanguage';
import CommandTerminal from '@/components/interactive/CommandTerminal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Radar, 
  ShieldCheck, 
  Brain, 
  Bot, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Zap,
  ArrowRight
} from 'lucide-react';

const SmartAgentAI = () => {
  const { lang } = useLanguage();

  const services = [
    {
      title: lang === 'en' ? "AI Lead Qualification" : "تأهيل العملاء بالذكاء الاصطناعي",
      desc: lang === 'en' ? "Automated vetting of incoming leads via voice and text, ensuring only high-intent buyers reach your desk." : "الفحص الآلي للعملاء المحتملين عبر الصوت والنص، مما يضمن وصول المشترين ذوي النوايا العالية فقط إلى مكتبك.",
      icon: <Users className="text-cyan-400" />
    },
    {
      title: lang === 'en' ? "Omnichannel Autopilot" : "الطيار الآلي متعدد القنوات",
      desc: lang === 'en' ? "Engage clients across WhatsApp, Instagram, and Web 24/7 with zero latency and human-like empathy." : "إشراك العملاء عبر واتساب وإنستغرام والويب على مدار الساعة طوال أيام الأسبوع بلا تأخير وتعاطف يشبه البشر.",
      icon: <MessageSquare className="text-cyan-400" />
    },
    {
      title: lang === 'en' ? "Predictive Matching" : "المطابقة التنبؤية",
      desc: lang === 'en' ? "Neural matching of property profiles to investor appetites based on historical data patterns." : "المطابقة العصبية لملفات العقارات مع رغبات المستثمرين بناءً على أنماط البيانات التاريخية.",
      icon: <TrendingUp className="text-cyan-400" />
    }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.02] pointer-events-none" />
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-cyan-500/10 blur-[200px]" />
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/10 blur-[200px]" />
      </div>

      {/* 01. Hero - Computational Supremacy */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-5xl"
           >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-cyan-500/30" />
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em]">
                  {lang === 'en' ? 'Track 03 // Agency Intelligence' : 'المسار 03 // ذكاء الوكالة'}
                </span>
                <div className="w-12 h-[1px] bg-cyan-500/30" />
              </div>
              <h1 className={`text-6xl md:text-[8rem] font-black mb-12 uppercase tracking-tighter leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? <>Automated <br /><span className="text-cyan-400 italic">Domination.</span></> : <>هيمنة <br /><span className="text-cyan-400 italic">آلية.</span></>}
              </h1>
              <p className="text-2xl text-[var(--text-primary)] opacity-40 max-w-3xl mx-auto font-light leading-relaxed mb-20">
                 {lang === 'en' 
                   ? 'Deploying neural-grade agents to manage, qualify, and convert leads at global scale. The future of real estate is autonomous.'
                   : 'نشر وكلاء بدرجة عصبية لإدارة وتأهيل وتحويل العملاء المحتملين على نطاق عالمي. مستقبل العقارات مستقل.'}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                 <div className="p-1 glass-card border-cyan-500/20 bg-cyan-500/5 metallic-glow">
                    <div className="p-12 md:p-16 text-center">
                       <h4 className="text-xs font-black uppercase tracking-widest mb-10 opacity-30">Live Terminal Output</h4>
                       <CommandTerminal />
                    </div>
                 </div>
                 <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <h3 className="text-5xl font-black mb-8 italic">{lang === 'en' ? 'Computational Edge.' : 'التفوق الحسابي.'}</h3>
                    <p className="opacity-40 text-lg font-light leading-relaxed mb-12">
                       {lang === 'en' 
                         ? "While traditional agencies sleep, SmartiAgents operate at sub-second speeds, processing thousands of data points to close deals faster."
                         : "بينما تنام الوكالات التقليدية، تعمل سمارتي إيجنتس بسرعات تصل لأجزاء من الثانية، وتُعالج آلاف نقاط البيانات لإغلاق الصفقات بشكل أسرع."}
                    </p>
                    <Link to="/contact" className="btn-premium bg-cyan-500 text-black border-none hover:bg-cyan-400">
                       {lang === 'en' ? 'Deploy Agency AI' : 'نشر الذكاء الاصطناعي للوكالة'}
                       <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
                    </Link>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 02. Capabilities Grid */}
      <section className="py-52 z-10 relative">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-16 premium-card border-cyan-500/10 bg-cyan-900/5 group hover:border-cyan-400/30 transition-all duration-700"
              >
                 <div className="mb-10 w-16 h-16 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                   {s.icon}
                 </div>
                 <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{s.title}</h4>
                 <p className="opacity-30 text-sm leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 03. Founder's Note - Fixed Institutional Quality */}
      <section className="py-60 z-10 relative bg-[var(--bg-secondary)]/30 border-y border-[var(--border-color)]">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div className="relative group">
                  <div className="aspect-[3/4.5] rounded-sm overflow-hidden border border-cyan-500/20 p-2 bg-cyan-900/10 metallic-glow">
                     <img 
                       src="/founder-3.png" 
                       alt="Ghassan Farajallah - Founder" 
                       className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000"
                     />
                  </div>
                  <div className="absolute -bottom-10 -right-10 p-12 glass-card border-cyan-400/20 backdrop-blur-3xl hidden md:block">
                     <Zap className="text-cyan-400 mb-4" size={32} />
                     <h5 className="font-black uppercase tracking-widest text-xs">Autonomous Vision</h5>
                     <p className="text-[10px] opacity-20">Founded by Ghassan Farajallah</p>
                  </div>
               </div>
               
               <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase tracking-tighter italic">
                    {lang === 'en' ? <>Digital <br /><span className="text-cyan-400 not-italic">Inheritance.</span></> : <>الميراث <br /><span className="text-cyan-400 not-italic">الرقمي.</span></>}
                  </h2>
                  <div className="space-y-10 text-xl opacity-40 font-light leading-relaxed">
                     <p>
                       {lang === 'en' 
                         ? "SmartiAgents isn't just software; it's a strategic evolution. We build systems that learn from every interaction, creating an immutable asset of intelligence for your enterprise."
                         : "سمارتي إيجنتس ليست مجرد برمجيات؛ إنها تطور استراتيجي. نحن نبني أنظمة تتعلم من كل تفاعل، مما يخلق أصلاً غير قابل للتغيير من الذكاء لمؤسستك."}
                     </p>
                     <p>
                        {lang === 'en'
                          ? "Our goal is to remove the friction of human inconsistency and replace it with the precision of computational logic."
                          : "هدفنا هو إزالة احتكاك عدم الاتساق البشري واستبداله بدقة المنطق الحسابي."}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 04. Final CTA */}
      <section className="py-60 z-10 relative text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-5xl md:text-9xl font-black uppercase tracking-tighter italic mb-16">
               {lang === 'en' ? <>Ready to <span className="not-italic text-cyan-400">Ascend?</span></> : <>جاهز <span className="not-italic text-cyan-400">للالتقاء؟</span></>}
            </h3>
            <p className="text-2xl opacity-40 mb-20 font-light">
               {lang === 'en' ? "The era of the manual agent is over. Welcome to the SmartiAgents lineage." : "عصر الوكيل اليدوي قد انتهى. مرحبًا بك في سلالة سمارتي إيجنتس."}
            </p>
            <Link to="/contact" className="btn-premium bg-cyan-500 text-black border-none hover:bg-cyan-400 scale-125">
               {lang === 'en' ? 'Initiate Node' : 'بدء العقدة'}
               <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default SmartAgentAI;
