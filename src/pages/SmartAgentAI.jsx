import { useLanguage } from '@/context/useLanguage';
import CommandTerminal from '@/components/interactive/CommandTerminal';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowRight,
  Cpu,
  Fingerprint,
  Activity
} from 'lucide-react';


const SmartAgentAI = () => {
  const { lang } = useLanguage();


  const strategies = [
    {
      id: '01',
      title: lang === 'en' ? "Neural Qualification" : "التأهيل العصبي",
      subtitle: lang === 'en' ? "Identify intent before the first hello." : "تحديد النية قبل أول تحية.",
      desc: lang === 'en' 
        ? "SmartAgents don't just chat; they analyze behavioral micro-patterns in real-time. They filter noise at the edge, ensuring your human closers only spend energy on high-intent, high-equity prospects. Efficiency is no longer optional."
        : "سمارتي إيجنتس لا تكتفي بالدردشة؛ بل تحلل الأنماط السلوكية الدقيقة في لحظات. إنها تصفي الضجيج من البداية، لتضمن أن طاقتك البشرية تُبذل فقط مع العملاء أصحاب النوايا العالية والسيولة المضمونة. الكفاءة لم تعد خياراً بل ضرورة.",
      icon: <Brain size={28} className="text-cyan-400" />
    },
    {
      id: '02',
      title: lang === 'en' ? "Autonomous Empathy" : "التعاطف الرقمي المستقل",
      subtitle: lang === 'en' ? "24/7 engagement with human depth." : "تفاعل على مدار الساعة بعمق إنساني.",
      desc: lang === 'en' 
        ? "Powered by the most advanced LLMs, your agents communicate across WhatsApp and Web with zero latency and consistent institutional branding. They handle objections, schedule viewings, and nurture leads while the world sleeps."
        : "مدعومين بأحدث نماذج اللغة العالمية، يتواصل وكلاؤك عبر واتساب والويب بلا تأخير وباتساق مؤسسي مطلق. إنهم يعالجون الاعتراضات المبيعية، وينسقون المعاينات، ويرعون العملاء بينما ينام العالم.",
      icon: <Bot size={28} className="text-cyan-400" />
    },
    {
      id: '03',
      title: lang === 'en' ? "Predictive Matching" : "المطابقة التنبؤية الفائقة",
      subtitle: lang === 'en' ? "Neural algorithms for precision deals." : "خوارزميات عصبية لصفقات جراحية.",
      desc: lang === 'en' 
        ? "We merge historical buyer appetite with real-time inventory assets. The result? A prophetic matching engine that identifies which investor will buy which unit before the listing even hits the open market. Intelligence is the new inheritance."
        : "ندمج شهية المشتري التاريخية مع الأصول المتاحة لحظياً. النتيجة؟ محرك مطابقة يتنبأ بأي مستثمر سيشتري أي وحدة عقارية حتى قبل طرحها في السوق المفتوح. الذكاء هو الميراث الجديد.",
      icon: <TrendingUp size={28} className="text-cyan-400" />
    }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      
      {/* ── 01. HERO: The Computational Horizon ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 group">
          <img 
            src="/media/smartagent_hero.png" 
            alt="AI Digital City" 
            className="w-full h-full object-cover scale-[1.02] grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-100 group-hover:brightness-75 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />
          <div className="absolute inset-0 bg-[var(--bg-primary)]/20 mix-blend-overlay" />
        </div>

        <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className={`flex items-center gap-4 mb-10 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <Cpu className="text-cyan-400 animate-pulse" size={20} />
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em]">
                {lang === 'en' ? 'Track 03 // SmartAgent Architecture' : 'المسار 03 // هندسة سمارتي إيجنتس'}
              </span>
            </div>

            <h1 className={`font-black uppercase leading-[0.85] tracking-tighter mb-8 ${lang === 'ar' ? 'font-arabic' : ''}`}
              style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>
              {lang === 'en' ? <><span className="text-cyan-400 italic">Automated</span><br />Domination.</> : <><span className="text-cyan-400 italic">هيمنة</span><br />آلية ثورية.</>}
            </h1>

            <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light opacity-50 max-w-3xl mb-16 leading-relaxed">
              {lang === 'en' 
                ? 'Deploying neural-grade agents to manage, qualify, and convert leads with sub-second finality. The era of manual sales is officially over.'
                : 'نشر وكلاء بدرجة عصبية لإدارة وتأهيل وتحويل العملاء المحتملين بكفاءة جراحية. عصر المبيعات اليدوية انتهى رسمياً.'}
            </p>

            <div className={`flex flex-col sm:flex-row gap-8 ${lang === 'ar' ? 'flex-row-reverse justify-start' : 'justify-start'}`}>
              <Link to="/contact" className="btn-premium bg-cyan-500 text-black border-none hover:bg-cyan-400 scale-110">
                {lang === 'en' ? 'COMMAND THE NODE' : 'قيادة العقدة الرقمية'}
                <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
              </Link>
              <div className="flex items-center gap-4 px-6 py-2 border border-cyan-500/20 bg-cyan-900/10 backdrop-blur-md">
                <Activity size={16} className="text-cyan-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400/60 leading-none">Status: Neural Link Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. STRATEGY: The Three Pillars of Intelligence ── */}
      <section className="py-40 z-10 relative border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[var(--border-color)] overflow-hidden">
            {strategies.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to="/contact"
                  className={`group relative p-16 overflow-hidden border-[var(--border-color)] lg:border-r last:border-r-0 block h-full transition-all duration-700 hover:bg-cyan-500/[0.03] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  style={{ minHeight: '450px' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(34,211,238,0.3)' }} />
                  
                  {/* Floating ID BG */}
                  <span className="absolute top-10 right-10 text-9xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 select-none italic text-cyan-400">
                    {s.id}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-12 w-20 h-20 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                      {s.icon}
                    </div>
                    <h4 className="text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-500">{s.title}</h4>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                      {s.subtitle}
                    </h5>
                    <p className="opacity-40 text-sm leading-relaxed font-light flex-1 group-hover:opacity-80 transition-opacity duration-700">
                      {s.desc}
                    </p>
                    <div className={`mt-10 pt-6 border-t border-[var(--border-color)] flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <span>{lang === 'en' ? 'Review Logic' : 'مراجعة المنطق المعرفي'}</span>
                      <ArrowRight size={14} className={`transition-transform duration-500 group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. INTERACTIVE: Live Node Processing ── */}
      <section className="py-60 z-10 relative bg-[var(--bg-secondary)]/30 border-y border-[var(--border-color)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ${lang === 'ar' ? 'direction-rtl' : ''}`}>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 glass-card border-cyan-500/20 bg-cyan-900/10 metallic-glow"
            >
              <div className="p-8 md:p-14 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-pulse" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.8em] mb-12 opacity-30">Neural Engine Status: OPTIMAL</h4>
                <CommandTerminal />
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-10 opacity-20">
                  <Fingerprint size={16} />
                  <Cpu size={16} />
                  <Radar size={16} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: lang === 'ar' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={lang === 'ar' ? 'text-right' : 'text-left'}
            >
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'Institutional Intelligence' : 'الذكاء المؤسسي الرصين'}
              </span>
              <h2 className={`font-black uppercase tracking-tighter mb-10 leading-[0.9] ${lang === 'ar' ? 'font-arabic' : ''}`}
                style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
                {lang === 'en' ? <>Computational<br /><span className="text-cyan-400 italic">Inheritance.</span></> : <>الميراث<br /><span className="text-cyan-400 italic">الحسابي.</span></>}
              </h2>
              <div className="space-y-8 text-xl font-light opacity-40 leading-relaxed mb-16">
                <p>
                  {lang === 'en' 
                    ? "SmartAgents isn't just software; it's the digital embodiment of your enterprise legacy. We build systems that don't just mimic human interaction, but transcend it with absolute logical consistency."
                    : "سمارتي إيجنتس ليست مجرد برمجيات؛ إنها التجسيد الرقمي لإرثك المؤسسي. نحن نبني أنظمة لا تحاكي التفاعل البشري فحسب، بل تتجاوزه باتساق منطقي مطلق."}
                </p>
                <p>
                  {lang === 'en'
                    ? "Your high-performing agents are encoded with behavioral excellence, meaning every single lead is greeted by the best version of your vision, 24 hours a day."
                    : "وكلاؤك ذوو الأداء العالي مبرمجون على التميز السلوكي، مما يعني أن كل عميل يتم استقباله بأفضل نسخة من رؤيتك، 24 ساعة في اليوم."}
                </p>
              </div>
              <Link to="/contact" className="btn-premium border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 inline-block px-12">
                {lang === 'en' ? 'INITIALIZE SYSTEM' : 'تهيئة النظام المتكامل'}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 04. FINAL CTA: Ascend ── */}
      <section className="py-60 z-10 relative text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <h3 className="font-black uppercase tracking-tighter italic mb-16 leading-none"
              style={{ fontSize: 'clamp(3rem,15vw,12rem)' }}>
              {lang === 'en' ? <>READY TO <span className="text-cyan-400 not-italic">ASCEND?</span></> : <>جاهز <span className="text-cyan-400 not-italic">للالتقاء؟</span></>}
            </h3>
            <p className="text-[clamp(1rem,3vw,1.8rem)] opacity-30 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
              {lang === 'en' 
                ? "The era of the manual agent is extinct. Welcome to the SmartiAgents lineage of autonomous profit." 
                : "عصر الوكيل اليدوي قد انتهى. مرحباً بك في سلالة سمارتي إيجنتس للربحية المستقلة."}
            </p>
            <Link to="/contact" className="btn-premium bg-cyan-500 text-black border-none hover:bg-cyan-400 scale-125 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              {lang === 'en' ? 'INSTANTIATE NODE' : 'إنشاء العقدة الجديدة'}
              <ArrowRight size={20} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SmartAgentAI;
