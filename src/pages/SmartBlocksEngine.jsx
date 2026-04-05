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
  Users
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

      {/* ── 01. INSTITUTIONAL HERO ── */}
      <section className="relative min-h-[105vh] flex items-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.45 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={`/media/smartblocks_expert_${lang === 'ar' ? 'ar' : 'en'}.png`}
              alt="Tokenization Architecture" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,98,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black" />
          <div className={`absolute inset-0 bg-gradient-to-r ${isArabic ? 'from-transparent via-transparent to-black/80' : 'from-black/80 via-transparent to-transparent'}`} />
          
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent z-10 shadow-[0_0_15px_rgba(201,169,98,0.3)]"
          />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 relative z-20 w-full py-40">
          <div className="max-w-5xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-start">
              <motion.div variants={fadeUpVariant} className="flex items-center gap-6 mb-12">
                <div className="relative group">
                   <div className="absolute inset-0 bg-[var(--accent-gold)]/40 blur-xl rounded-full group-hover:scale-150 transition-transform duration-700" />
                   <div className="w-5 h-5 bg-black border border-[var(--accent-gold)] relative z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[var(--accent-gold)] animate-pulse" />
                   </div>
                </div>
                <div className="h-[1px] w-20 bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
                <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[1em] drop-shadow-[0_0_10px_rgba(201,169,98,0.5)]">
                  {lang === 'en' ? 'Track 02 // Financial Liquidity' : 'المسار 02 // السيولة المالية'}
                </span>
              </motion.div>

              <TextReveal 
                text={lang === 'en' ? 'Empowering Real Estate.' : 'تمكين العقارات.'}
                className="text-[clamp(3rem,8.5vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-12 italic text-white drop-shadow-2xl"
              />

              <motion.p variants={fadeUpVariant} className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-light opacity-60 max-w-2xl mb-20 leading-relaxed border-l border-[var(--accent-gold)]/40 pl-10 rtl:pl-0 rtl:pr-10 rtl:border-l-0 rtl:border-r transition-all duration-700">
                {lang === 'en' 
                  ? 'The definitive settlement engine for institutional-grade tokenization. Orchestrating hyper-liquid wealth through realistic, strategic architecture.'
                  : 'محرك التسوية النهائي للترميز على المستوى المؤسسي. إدارة الثروات فائقة السيولة عبر هندسة استراتيجية جراحية.'}
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-10 items-center">
                <Magnetic strength={0.3}>
                  <PremiumButton to="/contact" className="px-16 py-8 text-lg border-[var(--accent-gold)]/20 shadow-xl">
                    {lang === 'en' ? 'Inquire Protocol' : 'استفسار عن البروتوكول'}
                  </PremiumButton>
                </Magnetic>
                
                <div className="flex gap-10 items-center p-8 border border-white/5 bg-white/[0.02] backdrop-blur-md">
                   <div className="text-start">
                      <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 block mb-2">{isArabic ? 'السيولة المعتمدة' : 'Validated Liquidity'}</span>
                      <span className="text-3xl font-black text-[var(--accent-gold)] italic">$4.2B+</span>
                   </div>
                   <div className="w-[1px] h-12 bg-white/10" />
                   <BarChart4 size={32} className="text-[var(--accent-gold)] opacity-50" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. THE HOOK: Neural Matrix ── */}
      <section className="py-52 z-10 relative bg-[#050505] overflow-hidden border-b border-white/5 text-start">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 blur-[180px] pointer-events-none rounded-full" />
         
         <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
               <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                     <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">{isArabic?'بروتوكول المقارنة نشط':'Comparison Protocol Active'}</span>
                  </div>
                  <TextReveal 
                    text={lang === 'en' ? 'Neural Matrix.' : 'المصفوفة العصبية.'}
                    className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tighter italic leading-none"
                  />
                  <p className="mt-8 text-xl font-light opacity-50 max-w-xl">{lang === 'en' ? 'Measuring the delta between legacy constraints and SmartBlocks high-authority execution.' : 'قياس الفجوة بين القيود التقليدية والتنفيذ عالي الجودة لسمارت بلوكس.'}</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 w-full md:w-fit">
                  <div className="p-6 bg-white/[0.02] border border-white/5 backdrop-blur-sm text-center">
                     <span className="text-[9px] uppercase tracking-widest opacity-40 block mb-2">{lang === 'en' ? 'Sync Rate' : 'معدل المزامنة'}</span>
                     <span className="text-xl font-black text-white italic">99.9%</span>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 backdrop-blur-sm text-center">
                     <span className="text-[9px] uppercase tracking-widest opacity-40 block mb-2">{lang === 'en' ? 'LATENCE' : 'التأخر'}</span>
                     <span className="text-xl font-black text-emerald-400 italic">0.02s</span>
                  </div>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {[
                 {
                   title: lang === 'en' ? "Equity Layer" : "طبقة الملكية",
                   tag: "LIQUID SPV",
                   metric: "100%",
                   metricLabel: isArabic ? "كفاءة المزامنة" : "Sync Efficiency",
                   features: [
                     { label: lang === 'en' ? "Settlement" : "التسويات", val: lang === 'en' ? "Atomic" : "ذرية فورية" },
                     { label: lang === 'en' ? "Secondary Market" : "السوق الثانوي", val: lang === 'en' ? "Enabled" : "مفعّل بالكامل" },
                     { label: lang === 'en' ? "Compliance" : "الامتثال", val: lang === 'en' ? "On-Chain" : "على الشبكة" }
                   ]
                 },
                 {
                   title: lang === 'en' ? "Yield Protocol" : "بروتوكول العوائد",
                   tag: "DEBT YIELD",
                   metric: "88M+",
                   metricLabel: isArabic ? "إنتاجية المعاملات" : "Tx Throughput",
                   features: [
                     { label: lang === 'en' ? "Distributions" : "التوزيعات", val: lang === 'en' ? "Automated" : "تلقائية بالكامل" },
                     { label: lang === 'en' ? "Verification" : "التحقق", val: lang === 'en' ? "Instant" : "فوري وحقيقي" },
                     { label: lang === 'en' ? "Security" : "الأمان", val: lang === 'en' ? "AES-256" : "تشفير عسكري" }
                   ]
                 },
                 {
                   title: lang === 'en' ? "Real Estate Deeds" : "الصكوك العقارية",
                   tag: "FRACTIONAL",
                   metric: "∞",
                   metricLabel: isArabic ? "مؤشر القابلية للتوسع" : "Scalability Index",
                   features: [
                     { label: lang === 'en' ? "Fragmentation" : "تجزئة الصكوك", val: lang === 'en' ? "Nano-Scale" : "مقياس النانو" },
                     { label: lang === 'en' ? "Registry" : "السجل", val: lang === 'en' ? "Immutable" : "غير قابل للتعديل" },
                     { label: lang === 'en' ? "Governance" : "الحوكمة", val: lang === 'en' ? "Embedded" : "حوكمة مدمجة" }
                   ]
                 }
               ].map((card, i) => (
                 <motion.div 
                   key={i} 
                   variants={fadeUpVariant}
                   whileHover={{ y: -10 }}
                   className="group relative p-12 bg-white/[0.03] border border-white/10 hover:border-[var(--accent-gold)]/40 transition-all duration-700 overflow-hidden text-start"
                 >
                    <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-[var(--accent-gold)]/40 to-transparent" />
                    <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-[var(--accent-gold)]/40 to-transparent" />
                    
                    <div className="relative z-10">
                       <span className="text-[var(--accent-gold)] text-[9px] font-black uppercase tracking-[0.4em] mb-4 block opacity-60">{card.tag} // ARCHITECTURE</span>
                       <h4 className="text-2xl font-black uppercase tracking-tight mb-12 text-white italic group-hover:text-[var(--accent-gold)] transition-colors duration-500">{card.title}</h4>
                       
                       <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
                          <div className="text-4xl font-black text-white italic">{card.metric}</div>
                          <div className="text-end">
                             <div className="text-[9px] uppercase tracking-widest opacity-30 mb-1">{card.metricLabel}</div>
                             <div className="w-24 h-[2px] bg-white/5 overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: '70%' }}
                                  transition={{ duration: 2, delay: 0.5 }}
                                  className="h-full bg-[var(--accent-gold)]" 
                                />
                             </div>
                          </div>
                       </div>

                       <div className="space-y-6">
                          {card.features.map((feat, j) => (
                            <div key={j} className="flex items-center justify-between group/feat">
                               <span className="text-[10px] uppercase tracking-widest opacity-30 font-light group-hover/feat:opacity-100 transition-opacity">{feat.label}</span>
                               <span className="text-[11px] font-black text-emerald-400 opacity-80">{feat.val}</span>
                            </div>
                          ))}
                       </div>
                       
                       <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[8px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent-gold)] transition-all">Validated Stream</span>
                          <ArrowRight size={14} className={`opacity-0 group-hover:opacity-100 text-[var(--accent-gold)] transition-all ${isArabic?'translate-x-[-1rem] group-hover:translate-x-0 rotate-180':'translate-x-4 group-hover:translate-x-0'}`} />
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── 03. BENEFITS GRID ── */}
      <section className="py-52 z-10 relative bg-[var(--bg-primary)]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUpVariant}>
              <Link to="/contact"
                className="group block relative p-16 overflow-hidden border-white/5 border-b md:border-b-0 md:border-e last:border-b-0 last:border-e-0 cursor-pointer transition-all duration-700 bg-white/[0.01] text-start"
                style={{ minHeight: '360px' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_80px_rgba(201,169,98,0.05)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-12 w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,169,98,0.2)]">
                    {b.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{b.title}</h4>
                  <h5 className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-gold)] mb-8 opacity-90">{b.subtitle}</h5>
                  <p className="opacity-40 text-[15px] leading-relaxed font-light flex-1 line-clamp-4 group-hover:opacity-80 transition-opacity">{b.desc}</p>
                  <div className="flex items-center gap-4 mt-10 text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 text-[var(--accent-gold)] transition-all duration-500 rtl:flex-row-reverse">
                    <span>{lang === 'en' ? 'Learn More' : 'اعرف أكثر'}</span>
                    <ArrowRight size={16} className={`transition-transform duration-500 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 ${isArabic ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 04. ECOSYSTEM PROFILES ── */}
      <section className="py-60 bg-[#050505] z-10 relative border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-40 text-start max-w-5xl">
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.6em] mb-10 block opacity-60">
              {lang === 'en' ? 'Structural Empowerment' : 'التمكين الهيكلي'}
            </motion.span>
            <TextReveal 
              text={lang === 'en' ? 'Ecosystem Logic.' : 'منطق النظام البيئي.'}
              className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.9]"
            />
            <motion.p variants={fadeUpVariant} className="mt-12 text-2xl font-light opacity-50 leading-relaxed border-l-3 border-[var(--accent-gold)] pl-12 rtl:pl-0 rtl:pr-12 rtl:border-l-0 rtl:border-r-3 max-w-3xl text-start">
              {lang === 'en'
                ? 'Architecting the definitive gold standard for every strategic stakeholder in the real estate value chain.'
                : 'هندسة المعيار الذهبي النهائي لكل صاحب مصلحة استراتيجي في سلسلة القيمة العقارية.'}
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {profiles.map((p, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <Link to="/contact"
                  className="group block relative p-16 bg-black overflow-hidden cursor-pointer transition-all duration-700 h-full text-start"
                  style={{ minHeight: '450px' }}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-gold)]/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-20 flex items-center justify-between">
                      <div className="flex items-center gap-8">
                        <div className="w-20 h-20 bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)]/10 transition-all duration-700 shrink-0 shadow-lg">
                          {p.icon}
                        </div>
                        <div className="text-start">
                          <span className="text-[var(--accent-gold)] text-[11px] font-black tracking-[0.4em] uppercase mb-3 block opacity-60">{p.tag}</span>
                          <h4 className="text-3xl font-black uppercase tracking-tight group-hover:text-white transition-colors duration-500 italic">{p.title}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-10 flex-1">
                      {p.levels.map((lvl, j) => (
                        <div key={j} className="border-t border-white/5 pt-8 group-hover:border-[var(--accent-gold)]/20 transition-all duration-500">
                          <div className="flex items-center gap-4 mb-4">
                             <div className={`w-2 h-2 rounded-full ${j===0?'bg-red-500':j===1?'bg-emerald-500':j===2?'bg-blue-500':'bg-[var(--accent-gold)]'} opacity-20 group-hover:opacity-100 transition-all`} />
                             <span className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all`}>
                               {lvl.label}
                             </span>
                          </div>
                          <p className="text-[15px] font-light opacity-40 leading-relaxed group-hover:opacity-90 group-hover:text-white/90 transition-all pl-6 rtl:pl-0 rtl:pr-6">{lvl.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 font-black uppercase tracking-[0.4em] text-[10px] mt-16 pt-10 border-t border-white/10 opacity-30 group-hover:opacity-100 text-[var(--accent-gold)] transition-all duration-700 rtl:flex-row-reverse">
                      <span>{lang === 'en' ? 'Review Institutional Framework' : 'مراجعة الإطار المؤسسي'}</span>
                      <ArrowRight size={16} className={`transition-transform duration-700 group-hover:translate-x-4 rtl:group-hover:-translate-x-4 ${isArabic ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 05. CALL TO ACTION ── */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--accent-gold)]/5 blur-[200px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-6 mb-12">
             <div className="w-12 h-[1px] bg-white/20" />
             <span className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[1.5em] opacity-80">
               {lang === 'en' ? 'Governance' : 'الحوكمة'}
             </span>
             <div className="w-12 h-[1px] bg-white/20" />
          </motion.div>
          
          <motion.h2 variants={fadeUpVariant} className="font-black uppercase tracking-tighter italic mb-20 text-white"
            style={{ fontSize: 'clamp(3.5rem,10vw,8rem)' }}>
            {lang === 'en'
              ? <>Initiate <span className="not-italic text-[var(--accent-gold)]">Protocol.</span></>
              : <>بدء <span className="not-italic text-[var(--accent-gold)]">الـبـروتـوكـول.</span></>}
          </motion.h2>

          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a href="https://smartblocks.etmam.io" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center justify-center p-20 border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-[0_0_60px_rgba(201,169,98,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative mb-12 w-24 h-24 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[var(--accent-gold)]/10 blur-2xl rounded-full scale-110 group-hover:scale-150 transition-all duration-700" />
                 <Cpu size={64} className="text-[var(--accent-gold)] relative z-10 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight mb-4 text-white italic">{lang === 'en' ? 'Platform' : 'المنصة'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-12">{lang === 'en' ? 'Engine Access' : 'صلاحية الدخول للمحرك'}</p>
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-700 shadow-2xl">
                <ArrowRight size={32} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </a>

            <a href="https://academy.etmam.io/smartblocks" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center justify-center p-20 border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-[0_0_60px_rgba(201,169,98,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative mb-12 w-24 h-24 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[var(--accent-gold)]/10 blur-2xl rounded-full scale-110 group-hover:scale-150 transition-all duration-700" />
                 <Lock size={64} className="text-[var(--accent-gold)] relative z-10 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight mb-4 text-white italic">{lang === 'en' ? 'Masterclass' : 'الماستركلاس'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-12">{lang === 'en' ? 'Strategic Mastery' : 'الإتقان الاستراتيجي'}</p>
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-700 shadow-2xl">
                <ArrowRight size={32} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SmartBlocksEngine;
