import React, { useState } from 'react';
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
  Activity,
  X
} from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const SmartAgentAI = () => {
  const { lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const isArabic = lang === 'ar';
  
  const [formData, setFormData] = useState({
    role: '',
    scale: '',
    objective: '',
    name: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const handleComplete = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    console.log('Lead Captured:', formData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
       setStep(1);
       setIsSuccess(false);
    }, 500);
  };

  const strategies = [
    {
      id: '01',
      title: lang === 'en' ? "Neural Qualification" : "التأهيل العصبي",
      subtitle: lang === 'en' ? "Identify intent before the first hello." : "تحديد النية قبل أول تحية.",
      desc: lang === 'en' 
        ? "SmartAgents don't just chat; they analyze behavioral micro-patterns in real-time. They filter noise at the edge, ensuring your human closers only spend energy on high-intent, high-equity prospects."
        : "سمارتي إيجنتس لا تكتفي بالدردشة؛ بل تحلل الأنماط السلوكية الدقيقة في لحظات. إنها تصفي الضجيج من البداية، لتضمن أن طاقتك البشرية تُبذل فقط مع العملاء أصحاب النوايا العالية.",
      icon: <Brain size={28} className="text-cyan-400" />
    },
    {
      id: '02',
      title: lang === 'en' ? "Autonomous Empathy" : "التعاطف الرقمي المستقل",
      subtitle: lang === 'en' ? "24/7 engagement with human depth." : "تفاعل على مدار الساعة بعمق إنساني.",
      desc: lang === 'en' 
        ? "Powered by the most advanced LLMs, your agents communicate across WhatsApp and Web with zero latency and consistent institutional branding. They handle objections and nurture leads while the world sleeps."
        : "مدعومين بأحدث نماذج اللغة العالمية، يتواصل وكلاؤك عبر واتساب والويب بلا تأخير وباتساق مؤسسي مطلق. إنهم يعالجون الاعتراضات المبيعية، وينسقون المعاينات، ويرعون العملاء.",
      icon: <Bot size={28} className="text-cyan-400" />
    },
    {
      id: '03',
      title: lang === 'en' ? "Predictive Matching" : "المطابقة التنبؤية الفائقة",
      subtitle: lang === 'en' ? "Neural algorithms for precision deals." : "خوارزميات عصبية لصفقات جراحية.",
      desc: lang === 'en' 
        ? "We merge historical buyer appetite with real-time inventory assets. The result? A prophetic matching engine that identifies which investor will buy which unit before the listing even hits the open market."
        : "ندمج شهية المشتري التاريخية مع الأصول المتاحة لحظياً. النتيجة؟ محرك مطابقة يتنبأ بأي مستثمر سيشتري أي وحدة عقارية حتى قبل طرحها في السوق المفتوح.",
      icon: <TrendingUp size={28} className="text-cyan-400" />
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      
      {/* ── 01. HERO ── */}
      <section className="relative min-h-[110vh] flex items-center overflow-hidden z-10 border-b border-[var(--border-color)] bg-black">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src="/media/smartagent_hero.png" 
              alt="AI Core Architecture" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1)_0%,transparent_80%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-10"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-20 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-start">
              <motion.div variants={fadeUpVariant} className="flex items-center gap-6 mb-12">
                <div className="relative">
                   <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full animate-pulse" />
                   <Cpu className="text-cyan-400 relative z-10" size={24} />
                </div>
                <div className="h-[1px] w-20 bg-gradient-to-r from-cyan-400 to-transparent" />
                <span className="section-subtitle mb-0 text-cyan-400">
                  {lang === 'en' ? 'Core Node // 03' : 'النواة المركزية // 03'}
                </span>
              </motion.div>

              <TextReveal 
                text={lang === 'en' ? 'Absolute Neural Hegemony.' : 'هيمنة عصبية مطلقة.'}
                className="display-title mb-12 italic text-cyan-400"
              />

              <motion.p variants={fadeUpVariant} className="body-text max-w-2xl mb-20 border-l-2 border-cyan-500/30 pl-8 rtl:pl-0 rtl:pr-8 rtl:border-l-0 rtl:border-r-2">
                {lang === 'en' 
                  ? 'Transcend traditional human-led workflows. We deploy autonomous intelligence that doesn\'t just resolve inquiries—it dictates the high-equity sales narrative.'
                  : 'تجاوز سير العمل التقليدي الذي يقوده البشر. نحن ننشر ذكاءً مستقلاً لا يكتفي بمجرد الرد على الاستفسارات، بل يملي مسار المبيعات عالي القيمة.'}
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-10 items-center">
                <Magnetic strength={0.2}>
                  <button onClick={() => setIsModalOpen(true)} className="btn-premium bg-cyan-500 text-black border-none hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                    {lang === 'en' ? 'INITIALIZE PROTOCOL' : 'بدء البروتوكول'}
                  </button>
                </Magnetic>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Sync Status: Live</span>
                  </div>
                  <span className="text-[9px] opacity-30 uppercase tracking-[0.3em]">Latency: 0.12ms // Optimal</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="hidden lg:flex justify-end p-20"
            >
               <div className="relative w-full max-w-lg aspect-square">
                  <div className="absolute inset-0 border-2 border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-10 border border-cyan-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Brain size={200} className="text-cyan-400 opacity-20 blur-[2px] animate-pulse" />
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0%,transparent_60%)]" />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. STRATEGY ── */}
      <section className="py-40 z-10 relative border-b border-[var(--border-color)]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[var(--border-color)] overflow-hidden">
            {strategies.map((s, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="group relative p-16 overflow-hidden border-[var(--border-color)] lg:border-e border-b lg:border-b-0 last:border-b-0 last:border-e-0 block h-full transition-all duration-700 hover:bg-cyan-500/[0.03] text-start cursor-pointer"
                  style={{ minHeight: '450px' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(34,211,238,0.3)' }} />
                  
                  <span className="absolute top-10 end-10 text-9xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 select-none italic text-cyan-400">
                    {s.id}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-12 w-20 h-20 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                      {s.icon}
                    </div>
                    <h4 className="text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-500">{s.title}</h4>
                    <h5 className="section-subtitle mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                      {s.subtitle}
                    </h5>
                    <p className="body-text flex-1 group-hover:opacity-80 transition-opacity duration-700">
                      {s.desc}
                    </p>
                    <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rtl:flex-row-reverse">
                      <span>{lang === 'en' ? 'Review Logic' : 'مراجعة المنطق المعرفي'}</span>
                      <ArrowRight size={14} className={`transition-transform duration-500 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 ${isArabic ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 03. DASHBOARD ── */}
      <section className="py-60 z-10 relative bg-black border-y border-[var(--border-color)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden text-[8px] font-mono leading-none text-cyan-500 whitespace-pre">
           {Array(20).fill('0 1 0 1 1 0 1 0 0 1 0 1 1 1 0 1 0 1 0 1 0 1 1 0 1 0 0 1 0 1 1 1 0').join('\n')}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
            
            <motion.div variants={fadeUpVariant} className="lg:col-span-7 flex flex-col gap-10">
              <div className="relative p-1 glass-card border-cyan-500/20 bg-cyan-900/5 metallic-glow">
                <div className="p-10 relative overflow-hidden">
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                         <span className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400/60">System Registry // Active</span>
                      </div>
                      <span className="text-[8px] font-mono opacity-20">0x882_NEURAL_CORE</span>
                   </div>
                   <CommandTerminal />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 {[
                   { label: 'Neural Purity', val: '99.9%', desc: 'Consistency ratio' },
                   { label: 'Synaptic Speed', val: '0.04s', desc: 'Average response' },
                   { label: 'Asset Match', val: 'PRECISE', desc: 'Listing accuracy' }
                 ].map((stat, idx) => (
                   <div key={idx} className="p-8 border border-white/5 bg-white/[0.02] hover:bg-cyan-500/[0.05] transition-all duration-500">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-2 block">{stat.label}</span>
                      <div className="text-3xl font-black text-cyan-400 mb-1">{stat.val}</div>
                      <span className="text-[8px] uppercase opacity-20">{stat.desc}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="lg:col-span-5 flex flex-col justify-center text-start">
              <div className="mb-12">
                 <span className="section-subtitle text-cyan-400 mb-6 block">
                   {lang === 'en' ? 'Institutional Intelligence' : 'الذكاء المؤسسي الرصين'}
                 </span>
                 <TextReveal 
                   text={lang === 'en' ? 'Computational Inheritance.' : 'الميراث الحسابي.'}
                   className="section-title text-cyan-400 mb-12"
                 />
              </div>

              <div className="space-y-10 body-text mb-20 border-r-2 border-cyan-500/10 pr-12 rtl:pr-0 rtl:pl-12 rtl:border-r-0 rtl:border-l-2">
                <p>
                  {lang === 'en' 
                    ? "SmartAgents aren't just software; they are the digital embodiment of your enterprise legacy. We build architectures that don't just mimic human interaction, but transcend it."
                    : "سمارتي إيجنتس ليست مجرد برمجيات؛ إنها التجسيد الرقمي لإرثك المؤسسي. نحن نبني هياكل لا تحاكي التفاعل البشري فحسب، بل تتجاوزه باتساق منطقي مطلق."}
                </p>
                <div className="flex items-start gap-6 p-8 bg-cyan-950/20 border-l-4 border-cyan-500">
                   <Zap size={24} className="text-cyan-400 shrink-0" />
                   <p className="text-sm italic opacity-80">
                     {lang === 'en'
                       ? "Our agents are encoded with behavioral excellence, ensuring the best version of your vision greets every lead, 24/7."
                       : "وكلاؤنا مبرمجون على التميز السلوكي، مما يضمن أن أفضل نسخة من رؤيتك هي ما يستقبل كل عميل، على مدار الساعة."}
                   </p>
                </div>
              </div>

              <Magnetic strength={0.3}>
                 <button onClick={() => setIsModalOpen(true)} className="btn-premium border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 px-16 w-fit">
                   {lang === 'en' ? 'COMMAND THE CORE' : 'التحكم في النواة'}
                 </button>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 04. LAUNCH PROTOCOL ── */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black/40 border-t border-[var(--border-color)]">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span variants={fadeUpVariant} className="section-subtitle text-cyan-400 mb-8 block drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            {lang === 'en' ? 'Protocol Access' : 'صلاحية الدخول للبروتوكول'}
          </motion.span>
          
          <motion.h2 variants={fadeUpVariant} className="display-title italic mb-20">
            {lang === 'en'
              ? <>Ready to <span className="not-italic text-cyan-400">Ascend?</span></>
              : <>جاهز <span className="not-italic text-cyan-400">للالتقاء؟</span></>}
          </motion.h2>

          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Action 1: The AI Platform */}
            <div 
               onClick={() => setIsModalOpen(true)}
               className="action-card border-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <div className="action-card-overlay bg-cyan-400/10" />
              <Bot size={48} className="action-card-icon text-cyan-400" />
              <h3 className="action-card-title">{lang === 'en' ? 'Launch SmartAgent' : 'إطلاق وكيلك الذكي'}</h3>
              <p className="action-card-desc">{lang === 'en' ? 'Initialize the AI' : 'تهيئة الذكاء الاصطناعي'}</p>
              <div className="action-card-btn group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400">
                <ArrowRight size={20} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Action 2: The Masterclass */}
            <Link to="/academy" 
               className="action-card border-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <div className="action-card-overlay bg-cyan-400/10" />
              <Brain size={48} className="action-card-icon text-cyan-400" />
              <h3 className="action-card-title">{lang === 'en' ? 'Explore Masterclass' : 'دورة الإتقان الشاملة'}</h3>
              <p className="action-card-desc">{lang === 'en' ? 'Master the Logic' : 'أتقن المنطق التشغيلي'}</p>
              <div className="action-card-btn group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400">
                <ArrowRight size={20} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 05. MODAL ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/90 backdrop-blur-3xl overflow-y-auto"
          >
             <motion.div 
               initial={{ scale: 0.95, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.95, y: 20 }}
               className="w-full max-w-4xl bg-[#0a0a0a] border border-cyan-500/20 shadow-[0_0_100px_rgba(34,211,238,0.1)] relative"
             >
                <button 
                  onClick={closeModal}
                  className="absolute top-8 end-8 text-white/40 hover:text-cyan-400 transition-colors z-20"
                >
                  <X size={24} />
                </button>

                {!isSuccess ? (
                  <div className="p-12 md:p-24">
                    <div className="flex items-center gap-4 mb-16 opacity-40 text-[10px] font-black uppercase tracking-[0.5em]">
                       <span className={step === 1 ? 'text-cyan-400' : ''}>01</span>
                       <div className="h-[1px] flex-1 bg-white/10 relative">
                          <motion.div 
                             initial={{ width: '0%' }}
                             animate={{ width: `${(step/4)*100}%` }}
                             className="absolute inset-0 bg-cyan-400"
                          />
                       </div>
                       <span className={step === 4 ? 'text-cyan-400' : ''}>04</span>
                    </div>

                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div key="step1" initial={{ x: isArabic ? 20 : -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: isArabic ? -20 : 20, opacity: 0 }} className="text-start">
                           <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-10">Identity Context.</h2>
                           <p className="body-text mb-12">{lang === 'en' ? 'Select your institutional role to calibrate the neural engine.' : 'اختر دورك المؤسسي لمعايرة المحرك العصبي.'}</p>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['Developer', 'Broker Firm', 'Investor', 'Service Provider'].map((role) => (
                                <button key={role} onClick={() => { setFormData({...formData, role}); nextStep(); }} className="p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/5 text-start transition-all uppercase font-black text-xs tracking-widest">{role}</button>
                              ))}
                           </div>
                        </motion.div>
                      )}
                      {step === 2 && (
                        <motion.div key="step2" initial={{ x: isArabic ? 20 : -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: isArabic ? -20 : 20, opacity: 0 }} className="text-start">
                           <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-10">Operational Scale.</h2>
                           <p className="body-text mb-12">{lang === 'en' ? 'How many units or active leads require synchronization?' : 'ما عدد الوحدات أو العملاء النشطين الذين يتطلبون المزامنة؟'}</p>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['1-50 Units', '50-200 Units', '200-1000 Units', '1000+ Institutional'].map((scale) => (
                                <button key={scale} onClick={() => { setFormData({...formData, scale}); nextStep(); }} className="p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/5 text-start transition-all uppercase font-black text-xs tracking-widest">{scale}</button>
                              ))}
                           </div>
                           <button onClick={prevStep} className="mt-10 text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100">Go Back</button>
                        </motion.div>
                      )}
                      {step === 3 && (
                        <motion.div key="step3" initial={{ x: isArabic ? 20 : -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: isArabic ? -20 : 20, opacity: 0 }} className="text-start">
                           <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-10">Primary Objective.</h2>
                           <p className="body-text mb-12">{lang === 'en' ? 'Define the neural priority for your autonomous agents.' : 'حدد الأولوية العصبية لوكلائك المستقلين.'}</p>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['Lead Qualification', '24/7 Engagement', 'Predictive Matching', 'Market Analytics'].map((obj) => (
                                <button key={obj} onClick={() => { setFormData({...formData, objective: obj}); nextStep(); }} className="p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/5 text-start transition-all uppercase font-black text-xs tracking-widest">{obj}</button>
                              ))}
                           </div>
                           <button onClick={prevStep} className="mt-10 text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100">Go Back</button>
                        </motion.div>
                      )}
                      {step === 4 && (
                        <motion.div key="step4" initial={{ x: isArabic ? 20 : -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: isArabic ? -20 : 20, opacity: 0 }} className="text-start">
                           <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-10">Initialize Sync.</h2>
                           <p className="body-text mb-12">{lang === 'en' ? 'Provide contact directives to finalize the AI strategy blueprint.' : 'قدم توجيهات الاتصال لإنهاء مخطط استراتيجية الذكاء الاصطناعي.'}</p>
                           <form onSubmit={handleComplete} className="space-y-6">
                              <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-6 focus:border-cyan-400 transition-colors outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                              <input required type="email" placeholder="Institutional Email" className="w-full bg-white/5 border border-white/10 p-6 focus:border-cyan-400 transition-colors outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                              <input required type="tel" placeholder="Phone Reference" className="w-full bg-white/5 border border-white/10 p-6 focus:border-cyan-400 transition-colors outline-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                              <div className="pt-6">
                                <button type="submit" className="btn-premium w-full bg-cyan-400 text-black border-none hover:bg-white transition-all h-20 text-lg uppercase tracking-[1em]">INITIATE</button>
                              </div>
                           </form>
                           <button onClick={prevStep} className="mt-10 text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100">Go Back</button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 md:p-32 text-center">
                     <div className="w-24 h-24 border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                        <Bot size={48} className="text-cyan-400" />
                     </div>
                     <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-8">Protocol Locked.</h2>
                     <p className="body-text mb-16 max-w-xl mx-auto">{lang === 'en' ? 'Operational sync initiated. We will contact you within 24 hours.' : 'بدأت مزامنة العمليات. سنتصل بك خلال 24 ساعة.'}</p>
                     <button onClick={closeModal} className="text-xs font-black uppercase tracking-[1.5em] text-cyan-400 hover:text-white transition-colors">Return to Core</button>
                  </motion.div>
                )}
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartAgentAI;
