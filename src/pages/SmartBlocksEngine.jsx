import { useLanguage } from '@/context/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Cpu,
  Zap,
  Lock,
  ArrowRight,
  BarChart4,
  ShieldCheck,
  Layers,
  Wallet,
  LayoutDashboard,
  Users,
  Fingerprint,
  Activity
} from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const SmartBlocksEngine = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const benefits = [
    {
      title: lang === 'en' ? "Institutional Liquidity" : "السيولة المؤسسية",
      subtitle: lang === 'en' ? "Transforming brick-and-mortar into liquid capital." : "تحويل الأصول الثابتة إلى عصب مالي سائل.",
      desc: lang === 'en'
        ? "Historically, prime real estate locks capital for 5-10 years. SmartBlocks breaks this paradigm by fractioning high-cap assets into ERC-3643 tokens, enabling micro-transactions and borderless secondary market trading with sub-second finality. This ensures an end to trapped equity, creating rolling liquidity for massive institutional operations."
        : "تاريخياً، العقارات الفاخرة تحتجز رأس المال لسنوات. سمارت بلوكس تكسر هذه القاعدة عبر تجزئة الأصول وتشفيرها لتمكين التداول اللحظي في الأسواق الثانوية بسيولة لا نهائية. هذا يضمن نهاية حقبة احتجاز رأس المال ويخلق سيولة متداولة للعمليات المؤسسية الضخمة.",
      icon: <Zap size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Fractional Governance" : "الحوكمة المجزأة اللامركزية",
      subtitle: lang === 'en' ? "Empowered stakeholders, immutable transparency." : "مساهمون ممكّنون، بشفافية مطلقة غير قابلة للتلاعب.",
      desc: lang === 'en'
        ? "Moving beyond simple ownership, our protocol infuses immutable governance into every digital fraction. Thousands of cross-border stakeholders can collectively vote, govern, and audit tier-1 real estate operations through fully transparent, tamper-proof smart contracts, reducing legal friction to zero."
        : "تتجاوز بروتوكولاتنا مجرد الملكية لتدمج حوكمة غير قابلة للتلاعب في كل جزء رقمي. يمكن لآلاف المستثمرين عبر الحدود التصويت وإدارة ومراجعة العقارات الفاخرة بشكل جماعي عبر عقود ذكية شفافة كلياً.",
      icon: <ShieldCheck size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Global Democratization" : "الوصول العالمي الشامل",
      subtitle: lang === 'en' ? "Dismantling high entry barriers permanently." : "تفكيك الحواجز العالية للدخول بشكل لا رجعة فيه.",
      desc: lang === 'en'
        ? "By lowering the entry thresholds and eradicating geographic bureaucracy, we empower a new generation of micro-investors and syndicates to build yielding portfolios. SmartBlocks acts as the ultimate settlement layer, natively adhering to KYC/AML regulations while extending reach."
        : "من خلال خفض حواجز الدخول وإحباط البيروقراطية الجغرافية، نمكن جيلاً جديداً من المستثمرين لبناء محافظ ذات عائد مالي. تعمل منصتنا كطبقة تسوية نهائية تلتزم كلياً بالقوانين مع توسيع النطاق العالمي.",
      icon: <Globe size={24} className="text-[var(--accent-gold)]" />
    }
  ];

  const profiles = [
    {
      title: lang === 'en' ? "Investors" : "المستثمرون",
      tag: "CAPITAL",
      icon: <Wallet size={24} className="text-[var(--accent-gold)]" />,
      levels: [
        { label: lang === 'en' ? "01. The Barrier (Pain)" : "01. التحدي", text: lang === 'en' ? "High capital requirements and geographic restrictions lock out global investors from premium tier-1 real estate." : "متطلبات رأس المال العالية والقيود الجغرافية تمنع المستثمرين من الوصول للعقارات الفاخرة." },
        { label: lang === 'en' ? "02. The Engine (Solution)" : "02. المحرك والحل", text: lang === 'en' ? "Fractional tokenization allows entry with micro-capital, completely democratizing access to high-yield properties." : "الترميز المجزأ يسمح بالدخول برؤوس أموال صغيرة، لضمان تساوٍ تام في التملك." },
        { label: lang === 'en' ? "03. The Protocol (Mechanic)" : "03. الآلية", text: lang === 'en' ? "Smart contracts execute instant, trustless dividend distributions directly to digital wallets without intermediary delays." : "عقود ذكية تنفذ توزيعات أرباح فورية وموثوقة مباشرة للمحافظ الرقمية بلا تأخير ووساطات." },
        { label: lang === 'en' ? "04. The Horizon (Outcome)" : "04. الأفق والنتيجة", text: lang === 'en' ? "A hyper-liquid, transparent, and globally accessible portfolio yielding passive income 24/7." : "محفظة فائقة السيولة وشفافة تدر دخلاً سلبياً على مدار الساعة بنطاق لا حدود له." }
      ]
    },
    {
      title: lang === 'en' ? "Property Owners" : "مُلاّك العقارات",
      tag: "ASSETS",
      icon: <LayoutDashboard size={24} className="text-[var(--accent-gold)]" />,
      levels: [
        { label: lang === 'en' ? "01. The Barrier (Pain)" : "01. التحدي", text: lang === 'en' ? "Extracting equity requires selling the entire asset, triggering massive taxation and loss of operational control." : "استخراج السيولة يتطلب بيع الأصل بالكامل، مما يؤدي لضرائب ضخمة وفقدان الإدارة." },
        { label: lang === 'en' ? "02. The Engine (Solution)" : "02. المحرك والحل", text: lang === 'en' ? "Tokenize 20-30% of the asset's equity for immediate capital injection while retaining majority ownership." : "ترميز 20-30٪ من الأسهم لضخ رأس مال فوري مع الاحتفاظ بملكية الأغلبية والتحكم." },
        { label: lang === 'en' ? "03. The Protocol (Mechanic)" : "03. الآلية", text: lang === 'en' ? "Legal wrapping into an SPV issues digital security tokens backed by verifiable real-world assets." : "هيكلة قانونية عبر شركة ذات غرض خاص لإصدار رموز أمان خاضعة للقانون." },
        { label: lang === 'en' ? "04. The Horizon (Outcome)" : "04. الأفق والنتيجة", text: lang === 'en' ? "Infinite scalability, instant liquidity access, and automated borderless rent distributions." : "توسع لا نهائي للشركة، وصول فوري للسيولة، وتوزيع تلقائي للإيجارات للمساهمين." }
      ]
    },
    {
      title: lang === 'en' ? "Developers" : "المطورون",
      tag: "CREATORS",
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />,
      levels: [
        { label: lang === 'en' ? "01. The Barrier (Pain)" : "01. التحدي", text: lang === 'en' ? "Traditional bank financing is slow, restrictive, and expensive, bottlenecking large-scale developments." : "التمويل البنكي التقليدي مكلف وبطيء، مما يعيق المشاريع واسعة النطاق عن النهوض السريع." },
        { label: lang === 'en' ? "02. The Engine (Solution)" : "02. المحرك والحل", text: lang === 'en' ? "Direct-to-market crowdfunding via pre-sale tokenization minimizes reliance on legacy institutions." : "تمويل مباشر عبر ترميز ما قبل البيع لتقليل الاعتماد الكلي على المؤسسات المالية التقليدية." },
        { label: lang === 'en' ? "03. The Protocol (Mechanic)" : "03. الآلية", text: lang === 'en' ? "A multi-layered capitalization table governed by code ensures exact fund allocation and transparent tracking." : "جدول رسملة طبقي ومحكوم برمجياً يضمن التخصيص الدقيق للتمويل والمشتريات." },
        { label: lang === 'en' ? "04. The Horizon (Outcome)" : "04. الأفق والنتيجة", text: lang === 'en' ? "Accelerated construction cycles backed by a global pool of micro-investors." : "وقت بناء متسارع مدعوم بمجموعة عالمية من المستثمرين المكتتبين وتدفقات نقدية قوية." }
      ]
    },
    {
      title: lang === 'en' ? "Brokers" : "الوسطاء العقاريون",
      tag: "AGENTS",
      icon: <Users size={24} className="text-[var(--accent-gold)]" />,
      levels: [
        { label: lang === 'en' ? "01. The Barrier (Pain)" : "01. التحدي", text: lang === 'en' ? "Delayed commission payouts, highly manual contract verifications, and limited local network." : "تأخر دفع العمولات، تعقيدات أوراق المبيعات، ومحدودية قاعدة العملاء المحلية." },
        { label: lang === 'en' ? "02. The Engine (Solution)" : "02. المحرك والحل", text: lang === 'en' ? "Guaranteed instantaneous commissions encoded directly into the asset's digital smart contract." : "ضمان وتقنية ترميز مبرمجة في العقد الذكي تؤدي لدفع العمولات للمحفظة فوراً." },
        { label: lang === 'en' ? "03. The Protocol (Mechanic)" : "03. الآلية", text: lang === 'en' ? "On-chain atomic settlements verify the purchase and instantly execute the agreed percentage split." : "تسويات آلية على البلوكشين تتحقق من الشراء وتنفذ النسبة المتفق عليها في ثواني." },
        { label: lang === 'en' ? "04. The Horizon (Outcome)" : "04. الأفق والنتيجة", text: lang === 'en' ? "Exponential sales throughput with absolute financial certainty." : "قدرة مبيعات مضاعفة ونهائية ويقين مالي من خلال كسر حواجز المبيعات التقليدية." }
      ]
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start selection:bg-[var(--accent-gold)]/30">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. INSTITUTIONAL HERO: The Computational Horizon (REDESIGNED) ── */}
      <section className="relative min-h-[110vh] flex items-center overflow-hidden z-10 border-b border-[var(--border-color)] bg-black">
        {/* Cinematic Backdrop with Asset Network Illustration */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            transition={{ duration: 3.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src="/media/smartblocks_institutional_hero.png" 
              alt="Institutional Tokenization Core" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            />
          </motion.div>
          {/* Gold Asset Mesh Overlay - Procedural Authority */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,169,98,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/60" />
          
          {/* Animated Audit Scan Line */}
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent z-10 shadow-[0_0_20px_rgba(201,169,98,0.3)]"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-20 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-start">
              <motion.div variants={fadeUpVariant} className="flex items-center gap-6 mb-12">
                <div className="relative group">
                   <div className="absolute inset-0 bg-[var(--accent-gold)]/30 blur-xl rounded-full group-hover:scale-150 transition-all duration-700" />
                   <Fingerprint className="text-[var(--accent-gold)] relative z-10" size={24} />
                </div>
                <div className="h-[1px] w-24 bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
                <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[1em] drop-shadow-[0_0_10px_rgba(201,169,98,0.5)]">
                  {lang === 'en' ? 'Track 02 // Asset Engineering' : 'المسار 02 // هندسة الأصول'}
                </span>
              </motion.div>

              <TextReveal 
                text={lang === 'en' ? 'Empowering Real Estate.' : 'تمكين العقارات.'}
                className="text-[clamp(3.5rem,9.5vw,8.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white italic drop-shadow-2xl"
              />

              <motion.p variants={fadeUpVariant} className="text-[clamp(1.1rem,1.9vw,1.6rem)] font-light opacity-60 max-w-2xl mt-12 mb-20 leading-relaxed border-l-2 border-[var(--accent-gold)]/40 pl-12 rtl:pl-0 rtl:pr-12 rtl:border-l-0 rtl:border-r-2">
                {lang === 'en' 
                  ? 'Orchestrating the definitive settlement engine for institutional-grade tokenization. Building realistic, strategic architecture for hyper-liquid wealth.'
                  : 'إدارة محرك التسوية النهائي للترميز على المستوى المؤسسي. بناء هندسة استراتيجية واقعية للثروات فائقة السيولة.'}
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-12 items-center">
                <Magnetic strength={0.25}>
                  <PremiumButton to="/contact" className="px-20 py-10 text-xl border-[var(--accent-gold)]/20 shadow-gold-glow">
                    {lang === 'en' ? 'Inquire Protocol' : 'استفسار عن البروتوكول'}
                  </PremiumButton>
                </Magnetic>
                
                <div className="flex gap-12 items-center p-10 bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                   <div className="text-start">
                      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-2">{isArabic ? 'السيولة المعتمدة' : 'Validated Liquidity'}</span>
                      <span className="text-4xl font-black text-[var(--accent-gold)] italic leading-none">$4.2B+</span>
                   </div>
                   <div className="w-[1px] h-16 bg-white/10" />
                   <Activity size={36} className="text-[var(--accent-gold)] opacity-50 animate-pulse" />
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Hook - Computational Data Node */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.5, delay: 0.5 }}
               className="hidden lg:block relative"
            >
               <div className="absolute inset-0 bg-[var(--accent-gold)]/5 blur-[120px] rounded-full" />
               <div className="relative p-1 border border-white/5 bg-black/40 backdrop-blur-3xl overflow-hidden">
                  <div className="p-12 border border-white/10 flex flex-col gap-10">
                     <div className="flex justify-between items-center pb-8 border-b border-white/5">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[var(--accent-gold)]">Audit // Live Stream</span>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                     </div>
                     <div className="grid grid-cols-2 gap-10">
                        <div>
                           <span className="text-[9px] uppercase tracking-widest opacity-40 block mb-2">Sync Rate</span>
                           <span className="text-2xl font-black italic">99.98%</span>
                        </div>
                        <div>
                           <span className="text-[9px] uppercase tracking-widest opacity-40 block mb-2">Node Status</span>
                           <span className="text-2xl font-black italic text-emerald-400 font-mono">ACTIVE</span>
                        </div>
                     </div>
                     <div className="h-24 w-full bg-white/[0.02] relative overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/10 to-transparent skew-x-12" 
                        />
                        <div className="absolute inset-0 flex items-center justify-around opacity-20">
                           {[...Array(20)].map((_, i) => (
                             <div key={i} className="w-[2px] bg-white/20" style={{ height: `${Math.random() * 80}%` }} />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. THE HOOK: Neural Matrix (ASSET DASHBOARD) ── */}
      <section className="py-60 z-10 relative bg-[#050505] overflow-hidden border-b border-white/5 text-start">
         <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--accent-gold)]/5 blur-[200px] pointer-events-none rounded-full" />
         
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end gap-12 mb-40">
               <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-3 h-3 bg-[var(--accent-gold)] rounded-full animate-pulse shadow-gold-glow" />
                     <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[1em]">{isArabic?'مصفوفة الملكية الرقمية':'Digital Ownership Matrix'}</span>
                  </div>
                  <TextReveal 
                    text={lang === 'en' ? 'Institutional Hook.' : 'الهوك المؤسسي المطلق.'}
                    className="text-[clamp(2.5rem,7vw,6.5rem)] font-black uppercase tracking-tighter italic leading-none text-white"
                  />
                  <p className="mt-10 text-2xl font-light opacity-50 max-w-2xl leading-relaxed border-l-2 border-white/10 pl-10 rtl:pl-0 rtl:pr-10 rtl:border-l-0 rtl:border-r-2 transition-all duration-700">
                    {lang === 'en' ? 'Bridging the high-friction gap between legacy real estate and hyper-liquid digital asset engineering.' : 'سد الفجوة عالية الاحتكاك بين العقارات التقليدية وهندسة الأصول الرقمية فائقة السيولة.'}
                  </p>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
               {[
                 {
                   title: lang === 'en' ? "Equity Layer" : "طبقة الملكية",
                   tag: "LIQUID SPV",
                   metric: "100%",
                   features: [
                     { label: lang === 'en' ? "Settlement" : "التسويات", val: "Instant" },
                     { label: lang === 'en' ? "Ownership" : "الملكية", val: "Fractional" },
                     { label: lang === 'en' ? "Access" : "الوصول", val: "Global" }
                   ]
                 },
                 {
                   title: lang === 'en' ? "Yield Protocol" : "بروتوكول العوائد",
                   tag: "DEBT INSTRUMENT",
                   metric: "88M+",
                   features: [
                     { label: lang === 'en' ? "Verification" : "التحقق", val: "On-Chain" },
                     { label: lang === 'en' ? "Security" : "الأمان", val: "Military" },
                     { label: lang === 'en' ? "Reporting" : "التقارير", val: "Real-time" }
                   ]
                 },
                 {
                   title: lang === 'en' ? "Real Estate Deeds" : "الصكوك العقارية",
                   tag: "FRACTIONAL DEEDS",
                   metric: "∞",
                   features: [
                     { label: lang === 'en' ? "Immutability" : "عدم التلاعب", val: "Absolute" },
                     { label: lang === 'en' ? "Registry" : "السجل", val: "Decentral" },
                     { label: lang === 'en' ? "Governance" : "الحوكمة", val: "Embedded" }
                   ]
                 }
               ].map((card, i) => (
                 <motion.div 
                   key={i} 
                   variants={fadeUpVariant}
                   whileHover={{ y: -15, borderColor: 'rgba(201,169,98,0.4)' }}
                   className="group relative p-16 bg-white/[0.02] border border-white/10 transition-all duration-700 overflow-hidden text-start"
                 >
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-gold)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block opacity-60">{card.tag} // ARCHITECTURE</span>
                    <h4 className="text-3xl font-black uppercase tracking-tight mb-20 text-white italic group-hover:text-[var(--accent-gold)] transition-colors duration-500">{card.title}</h4>
                    
                    <div className="flex items-baseline gap-4 mb-16">
                       <span className="text-6xl font-black text-white italic">{card.metric}</span>
                       <span className="text-[11px] font-black uppercase tracking-widest opacity-20">Capacity Index</span>
                    </div>

                    <div className="space-y-8 mb-12">
                       {card.features.map((feat, j) => (
                         <div key={j} className="flex items-center justify-between group/line">
                            <span className="text-[11px] uppercase tracking-widest opacity-30 group-hover/line:opacity-100 transition-opacity">{feat.label}</span>
                            <span className="text-[12px] font-black text-emerald-400">{feat.val}</span>
                         </div>
                       ))}
                    </div>
                    
                    <div className="pt-10 border-t border-white/5 flex items-center justify-between group-hover:border-[var(--accent-gold)]/20 transition-all">
                       <span className="text-[9px] uppercase tracking-[0.5em] opacity-40">Protocol Initialized</span>
                       <ArrowRight size={18} className={`text-[var(--accent-gold)] transition-all ${isArabic?'rotate-180 -translate-x-4 group-hover:translate-x-0':'translate-x-4 group-hover:translate-x-0'} opacity-0 group-hover:opacity-100`} />
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── 03. BENEFITS: Spacing & Standard Align ── */}
      <section className="py-52 z-10 relative bg-[var(--bg-primary)] border-b border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUpVariant}>
              <Link to="/contact"
                className="group block relative p-16 overflow-hidden border-white/5 border-b md:border-b-0 md:border-e last:border-b-0 last:border-e-0 cursor-pointer transition-all duration-700 bg-white/[0.01] text-start"
                style={{ minHeight: '400px' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-16 w-20 h-20 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-all duration-500 shadow-xl group-hover:shadow-gold-glow">
                    {b.icon}
                  </div>
                  <h4 className="text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500 text-white italic">{b.title}</h4>
                  <h5 className="text-[12px] font-black uppercase tracking-widest text-[var(--accent-gold)] mb-10 opacity-90">{b.subtitle}</h5>
                  <p className="opacity-40 text-[17px] leading-relaxed font-light flex-1 line-clamp-4 group-hover:opacity-90">{b.desc}</p>
                  <div className="flex items-center gap-6 mt-16 text-[11px] font-black uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 text-[var(--accent-gold)] transition-all duration-500 rtl:flex-row-reverse">
                    <span>{lang === 'en' ? 'Learn More' : 'اعرف أكثر'}</span>
                    <ArrowRight size={20} className={`transition-transform duration-500 group-hover:translate-x-4 rtl:group-hover:-translate-x-4 ${isArabic ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 04. ECOSYSTEM PROFILES (INSTITUTIONAL STANDARD) ── */}
      <section className="py-60 bg-[#050505] z-10 relative border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-40 text-start max-w-6xl">
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[0.8em] mb-12 block opacity-80">
              {lang === 'en' ? 'Institutional Infrastructure' : 'البنية التحتية المؤسسية'}
            </motion.span>
            <TextReveal 
              text={lang === 'en' ? 'Ecosystem Logic.' : 'منطق النظام البيئي.'}
              className="text-[clamp(2.5rem,8.5vw,7.5rem)] font-black uppercase tracking-tighter leading-none text-white italic"
            />
            <motion.p variants={fadeUpVariant} className="mt-16 text-3xl font-light opacity-50 leading-relaxed border-l-4 border-[var(--accent-gold)] pl-16 rtl:pl-0 rtl:pr-16 rtl:border-l-0 rtl:border-r-4 max-w-4xl text-start">
              {lang === 'en'
                ? 'Providing the absolute gold standard for every strategic stakeholder in the real estate value chain.'
                : 'توفير المعيار الذهبي المطلق لكل صاحب مصلحة استراتيجي في سلسلة القيمة العقارية.'}
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
            {profiles.map((p, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <Link to="/contact"
                  className="group block relative p-20 bg-black overflow-hidden cursor-pointer transition-all duration-700 h-full text-start"
                  style={{ minHeight: '520px' }}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-gold)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-24 flex items-center justify-between">
                      <div className="flex items-center gap-10">
                        <div className="w-24 h-24 bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)]/10 transition-all duration-700 shrink-0 shadow-2xl">
                          {p.icon}
                        </div>
                        <div className="text-start">
                          <span className="text-[var(--accent-gold)] text-[12px] font-black tracking-[0.5em] uppercase mb-4 block opacity-70">{p.tag}</span>
                          <h4 className="text-4xl font-black uppercase tracking-tight group-hover:text-white transition-colors duration-500 italic text-white">{p.title}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-12 flex-1">
                      {p.levels.map((lvl, j) => (
                        <div key={j} className="border-t border-white/5 pt-10 group-hover:border-[var(--accent-gold)]/20 transition-all duration-500">
                          <div className="flex items-center gap-6 mb-4">
                             <div className={`w-2.5 h-2.5 rounded-full ${j===0?'bg-red-500':j===1?'bg-emerald-500':j===2?'bg-blue-500':'bg-[var(--accent-gold)]'} opacity-20 group-hover:opacity-100 transition-all shadow-glow`} />
                             <span className={`text-[11px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-all text-white`}>
                               {lvl.label}
                             </span>
                          </div>
                          <p className="text-[17px] font-light opacity-40 leading-relaxed group-hover:opacity-100 transition-all pl-8 rtl:pl-0 rtl:pr-8">{lvl.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 font-black uppercase tracking-[0.5em] text-[11px] mt-20 pt-10 border-t border-white/10 opacity-30 group-hover:opacity-100 text-[var(--accent-gold)] transition-all duration-700 rtl:flex-row-reverse">
                      <span>{lang === 'en' ? 'Institutional Framework' : 'الإطار المؤسسي'}</span>
                      <ArrowRight size={20} className={`transition-transform duration-700 group-hover:translate-x-6 rtl:group-hover:-translate-x-6 ${isArabic ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 05. CALL TO ACTION: Unified Standard ── */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black">
        <div className="absolute inset-0 bg-grain opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[var(--accent-gold)]/5 blur-[250px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-8 mb-16">
             <div className="w-16 h-[1px] bg-white/10" />
             <span className="text-[var(--accent-gold)] text-[14px] font-black uppercase tracking-[1.5em] opacity-90 drop-shadow-gold-glow">
               {lang === 'en' ? 'Governance' : 'الحوكمة'}
             </span>
             <div className="w-16 h-[1px] bg-white/10" />
          </motion.div>
          
          <motion.h2 variants={fadeUpVariant} className="font-black uppercase tracking-tighter italic mb-24 text-white leading-none"
            style={{ fontSize: 'clamp(4rem,12vw,10rem)' }}>
            {lang === 'en'
              ? <>Initiate <span className="not-italic text-[var(--accent-gold)]">Protocol.</span></>
              : <>بدء <span className="not-italic text-[var(--accent-gold)]">الـبـروتـوكـول.</span></>}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <a href="https://smartblocks.etmam.io" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center justify-center p-24 border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-[0_0_80px_rgba(201,169,98,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative mb-16 w-28 h-28 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[var(--accent-gold)]/20 blur-3xl rounded-full scale-110 group-hover:scale-150 transition-all duration-700" />
                 <Cpu size={80} className="text-[var(--accent-gold)] relative z-10 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-5xl font-black uppercase tracking-tight mb-6 text-white italic">{lang === 'en' ? 'Platform' : 'المنصة'}</h3>
              <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 mb-16">{lang === 'en' ? 'Institutional Engine Access' : 'صلاحية الدخول للمحرك المؤسسي'}</p>
              <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-700 shadow-2xl">
                <ArrowRight size={40} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </a>

            <a href="https://academy.etmam.io/smartblocks" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center justify-center p-24 border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-[0_0_80px_rgba(201,169,98,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative mb-16 w-28 h-28 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[var(--accent-gold)]/20 blur-3xl rounded-full scale-110 group-hover:scale-150 transition-all duration-700" />
                 <Lock size={80} className="text-[var(--accent-gold)] relative z-10 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-5xl font-black uppercase tracking-tight mb-6 text-white italic">{lang === 'en' ? 'Masterclass' : 'الماستركلاس'}</h3>
              <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 mb-16">{lang === 'en' ? 'Strategic Mastery' : 'الإتقان الاستراتيجي'}</p>
              <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-700 shadow-2xl">
                <ArrowRight size={40} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SmartBlocksEngine;
