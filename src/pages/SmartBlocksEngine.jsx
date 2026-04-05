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
  Coins,
  LayoutDashboard,
  Wallet,
  Users,
  Layers
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
    },
    {
      title: lang === 'en' ? "Brokerage Firms" : "شركات الوساطة",
      tag: "AGENCY",
      icon: <Globe size={24} className="text-[var(--accent-gold)]" />,
      levels: [
        { label: lang === 'en' ? "01. The Barrier (Pain)" : "01. التحدي", text: lang === 'en' ? "Geographic constraints limit inventory, and inter-broker trust causes friction in multi-party deals." : "انعدام الثقة يعرقل الصفقات المشتركة، فضفلة العمولات تقتل تعاون الوسطاء." },
        { label: lang === 'en' ? "02. The Engine (Solution)" : "02. المحرك والحل", text: lang === 'en' ? "A boundless cross-border ecosystem where inventory is shared and splits are cryptographically enforced." : "نظام تشاركي للمخزون العقاري العالمي، وحماية التوزيعات بحقوق التشفير." },
        { label: lang === 'en' ? "03. The Protocol (Mechanic)" : "03. الآلية", text: lang === 'en' ? "Smart-split commissions automatically routing basis points to all involved agencies simultaneously." : "توجيه النقاط الأساسية آليًا وفي ذات اللحظة لكل الجهات دون أي نزاع." },
        { label: lang === 'en' ? "04. The Horizon (Outcome)" : "04. الأفق والنتيجة", text: lang === 'en' ? "Transforming local brokerages into global institutional syndicates." : "ارتقاء شركات الوساطة المحلية لمعايير النقابات العالمية العاملة عبر الحدود." }
      ]
    },
    {
      title: lang === 'en' ? "Service Providers" : "مقدمو الخدمات",
      tag: "VENDORS",
      icon: <Zap size={24} className="text-[var(--accent-gold)]" />,
      levels: [
        { label: lang === 'en' ? "01. The Barrier (Pain)" : "01. التحدي", text: lang === 'en' ? "Invoicing bottlenecks and disconnected operational systems lead to cash flow disruptions." : "مماطلة وحواجز فواتير الحراسة والنظافة والقانونية تؤدي لاضطراب التدفق المالي." },
        { label: lang === 'en' ? "02. The Engine (Solution)" : "02. المحرك والحل", text: lang === 'en' ? "Seamless integration with tokenized property wallets for instant service contract settlements." : "ربط متكامل مع المحافظ المركزية للعقار لتسوية عقود مقدمي الخدمات بصورة فورية." },
        { label: lang === 'en' ? "03. The Protocol (Mechanic)" : "03. الآلية", text: lang === 'en' ? "Maintenance fees are escrowed and released autonomously upon verified completions." : "حفظ الرسوم وتصريفها تلقائياً بعد تأكيد المهام المبرمجة بشكل مدون ولامركزي." },
        { label: lang === 'en' ? "04. The Horizon (Outcome)" : "04. الأفق والنتيجة", text: lang === 'en' ? "Absolute operational liquidity enabling hyper-efficient property management." : "عمليات تشغيلية ملساء ومستدامة تمكن الإدارة عالية الكفاءة وتقضي على التأخير." }
      ]
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* 01. REDESIGNED HERO: The Tokenization Horizon ── */}
      <section className="relative min-h-[110vh] flex items-center overflow-hidden z-10 border-b border-[var(--border-color)] bg-black">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={`/media/smartblocks_expert_${lang === 'ar' ? 'ar' : 'en'}.png`}
              alt="SmartBlocks Ecosystem Architecture" 
              className="w-full h-full object-cover grayscale brightness-[0.3] contrast-150"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.08)_0%,transparent_80%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent z-10 shadow-[0_0_20px_rgba(201,169,98,0.2)]"
          />
        </div>

        <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-20 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-start">
              <motion.div variants={fadeUpVariant} className="flex items-center gap-6 mb-12">
                <div className="relative">
                   <div className="absolute inset-0 bg-[var(--accent-gold)]/30 blur-lg rounded-full animate-pulse" />
                   <div className="w-4 h-4 border-2 border-[var(--accent-gold)] relative z-10 rotate-45" />
                </div>
                <div className="h-[1px] w-24 bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
                <span className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[1em] drop-shadow-[0_0_10px_rgba(201,169,98,0.4)]">
                  {lang === 'en' ? 'Track 02 // Asset Engineering' : 'المسار 02 // هندسة الأصول'}
                </span>
              </motion.div>

              <TextReveal 
                text={lang === 'en' ? 'Empowering Real Estate.' : 'تمكين العقارات.'}
                className="text-[clamp(3.5rem,10vw,8.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12 italic"
              />

              <motion.p variants={fadeUpVariant} className="text-[clamp(1.1rem,2vw,1.6rem)] font-light opacity-60 max-w-2xl mb-20 leading-relaxed border-l-2 border-[var(--accent-gold)]/40 pl-10 rtl:pl-0 rtl:pr-10 rtl:border-l-0 rtl:border-r-2 transition-all duration-700">
                {lang === 'en' 
                  ? 'The definitive engine for high-authority tokenization. Empowering global decision-makers through realistic, strategic, and hyper-liquid financial architecture.'
                  : 'المحرك النهائي للترميز عالي السلطة. تمكين صناع القرار العالمي عبر هندسة مالية واقعية واستراتيجية وفائقة السيولة.'}
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-12 items-center">
                <Magnetic strength={0.3}>
                  <PremiumButton to="/contact" className="px-20 py-10 text-lg shadow-[0_0_50px_rgba(201,169,98,0.2)] hover:scale-105 transition-all duration-500">
                    {lang === 'en' ? 'EXECUTE PROTOCOL' : 'تنفيذ البروتوكول'}
                  </PremiumButton>
                </Magnetic>
                
                <div className="flex flex-col gap-3 p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                   <div className="flex items-center gap-4">
                      <BarChart4 size={20} className="text-[var(--accent-gold)]" />
                      <span className="text-2xl font-black tracking-tight">$4.2B+ <span className="text-[10px] opacity-40 uppercase tracking-widest font-light ml-2">Potential</span></span>
                   </div>
                   <span className="text-[9px] uppercase tracking-[0.5em] opacity-30">Trading Volume Management</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02. REDESIGNED: The Neural Comparison Ledger (THE HOOK) ── */}
      <section className="py-60 z-10 relative bg-black border-y border-[var(--border-color)] overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />
         </div>

         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="mb-32 text-start flex flex-col md:flex-row justify-between items-end gap-10">
               <div className="max-w-3xl">
                  <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.8em] mb-8 block">
                    {lang === 'en' ? 'Institutional Comparison Matrix' : 'مصفوفة المقارنة المؤسسية'}
                  </span>
                  <TextReveal 
                    text={lang === 'en' ? 'The Liquidity Hook.' : 'هوك السيولة المطلقة.'}
                    className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.9]"
                  />
               </div>
               <div className="p-6 border border-[var(--accent-gold)]/20 bg-[var(--accent-gold)]/5 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-gold)] text-center w-full md:w-fit">
                  {lang === 'en' ? 'Real-Time Sync Validated' : 'تم التحقق من المزامنة اللحظية'}
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 border border-white/10 bg-white/5 overflow-hidden">
               <div className="lg:col-span-1 p-12 bg-black/40 flex flex-col justify-end text-start border-white/5">
                  <Layers className="text-[var(--accent-gold)] mb-10 opacity-30" size={32} />
                  <h4 className="text-xl font-black uppercase tracking-tight opacity-50 mb-4">{lang === 'en' ? 'Feature Registry' : 'سجل الخواص'}</h4>
                  <p className="text-[10px] opacity-30 uppercase tracking-widest">{lang === 'en' ? 'Audited Comparison' : 'مقارنة خاضعة للتدقيق'}</p>
               </div>
               
               {[
                 { 
                   type: lang === 'en' ? "Direct Equity (SPV)" : "الملكية المباشرة (SPV)",
                   latency: lang === 'en' ? "Sub-second" : "أقل من ثانية", 
                   liquidity: lang === 'en' ? "Hyper-Liquid" : "سيولة فائقة",
                   compliance: lang === 'en' ? "Embedded KYC" : "امتثال مبرمج"
                 },
                 { 
                   type: lang === 'en' ? "Debt & Yield Certificates" : "شهادات الديون والعوائد",
                   latency: lang === 'en' ? "Instant Distribution" : "توزيع لحظي", 
                   liquidity: lang === 'en' ? "Secondary Market" : "سوق ثانوي",
                   compliance: lang === 'en' ? "AML Validated" : "تدقيق غسيل أموال"
                 },
                 { 
                   type: lang === 'en' ? "Fractional Land Deeds" : "صكوك الأرض المجزأة",
                   latency: lang === 'en' ? "Real-time Update" : "تحديث لحظي", 
                   liquidity: lang === 'en' ? "24/7 Access" : "وصول دائم",
                   compliance: lang === 'en' ? "Immutable Audit" : "تدقيق ثابت"
                 }
               ].map((item, idx) => (
                 <motion.div key={idx} variants={fadeUpVariant} className="p-12 bg-black/60 group hover:bg-[var(--accent-gold)]/[0.03] transition-all duration-700 text-start border-l border-white/5 lg:border-l-0 lg:border-t">
                    <div className="mb-12">
                       <span className="text-[9px] font-black text-[var(--accent-gold)] opacity-50 mb-3 block uppercase tracking-[0.4em]">File Type // {idx+1}</span>
                       <h3 className="text-2xl font-black tracking-tight uppercase group-hover:text-[var(--accent-gold)] transition-colors duration-500">{item.type}</h3>
                    </div>
                    <div className="space-y-8">
                       <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="text-[10px] opacity-30 uppercase tracking-widest">{lang === 'en' ? 'Settlement Latency' : 'تأخر التسوية'}</span>
                          <span className="text-[11px] font-black text-emerald-400">{item.latency}</span>
                       </div>
                       <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="text-[10px] opacity-30 uppercase tracking-widest">{lang === 'en' ? 'Liquidity Depth' : 'عمق السيولة'}</span>
                          <span className="text-[11px] font-black text-cyan-400">{item.liquidity}</span>
                       </div>
                       <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="text-[10px] opacity-30 uppercase tracking-widest">{lang === 'en' ? 'Compliance' : 'الامتثال'}</span>
                          <span className="text-[11px] font-black text-[var(--accent-gold)]">{item.compliance}</span>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </motion.div>
      </section>

      {/* 03. Institutional Benefits Grid */}
      <section className="py-52 z-10 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUpVariant}>
              <Link to="/contact"
                className="group block relative p-16 overflow-hidden border-white/5 border-b md:border-b-0 md:border-e last:border-b-0 last:border-e-0 cursor-pointer transition-all duration-700 bg-white/[0.01] text-start"
                style={{ minHeight: '340px' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_0_1px_rgba(201,169,98,0.2)]" />
                <div className="absolute inset-0 bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-10 w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors duration-500 group-hover:scale-110 transform">
                    {b.icon}
                  </div>
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{b.title}</h4>
                  <h5 className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-gold)] mb-6 opacity-90">{b.subtitle}</h5>
                  <p className="opacity-40 text-sm leading-relaxed font-light flex-1">{b.desc}</p>
                  <div className="flex items-center gap-3 mt-8 text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 text-[var(--accent-gold)] transition-all duration-500 rtl:flex-row-reverse">
                    <span>{lang === 'en' ? 'Learn More' : 'اعرف أكثر'}</span>
                    <ArrowRight size={14} className={`transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${isArabic ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 04. Ecosystem Profiles (REDESIGNED) */}
      <section className="py-60 bg-black z-10 relative border-y border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32 text-start max-w-4xl">
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
              {lang === 'en' ? 'Ecosystem Solutions' : 'حلول النظام البيئي'}
            </motion.span>
            <TextReveal 
              text={lang === 'en' ? 'Radical Empowerment.' : 'تمكين جذري ملموس.'}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tighter"
            />
            <motion.p variants={fadeUpVariant} className="mt-10 text-xl font-light opacity-50 leading-relaxed border-l-2 border-[var(--accent-gold)] pl-8 rtl:pl-0 rtl:pr-8 rtl:border-l-0 rtl:border-r-2">
              {lang === 'en'
                ? 'Defining the gold standard solutions across every strategic layer of the real estate value chain.'
                : 'تحديد حلول المعيار الذهبي عبر كل طبقة استراتيجية في سلسلة القيمة العقارية.'}
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {profiles.map((p, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <Link to="/contact"
                  className="group block relative p-16 bg-black overflow-hidden cursor-pointer transition-all duration-700 h-full text-start"
                  style={{ minHeight: '400px' }}>
                  <div className="absolute inset-0 bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/[0.02] transition-all duration-700 pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-16 flex items-center gap-8">
                      <div className="w-20 h-20 bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-all duration-700 shrink-0">
                        {p.icon}
                      </div>
                      <div className="text-start">
                        <span className="text-[var(--accent-gold)] text-[11px] font-black tracking-[0.4em] uppercase mb-3 block opacity-60">{p.tag}</span>
                        <h4 className="text-3xl font-black uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{p.title}</h4>
                      </div>
                    </div>
                    <div className="space-y-8 flex-1">
                      {p.levels.map((lvl, j) => (
                        <div key={j} className="border-t border-white/5 pt-6 group-hover:border-[var(--accent-gold)]/20 transition-colors duration-500">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${j===0?'text-red-400/60':j===1?'text-emerald-400/60':j===2?'text-blue-400/60':'text-[var(--accent-gold)]/80'} mb-3 block`}>
                            {lvl.label}
                          </span>
                          <p className="text-sm font-light opacity-40 leading-relaxed group-hover:opacity-80 transition-opacity duration-500">{lvl.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 font-black uppercase tracking-[0.4em] text-[9px] mt-12 pt-8 border-t border-white/10 opacity-0 group-hover:opacity-100 text-[var(--accent-gold)] transition-all duration-500 rtl:flex-row-reverse">
                      <span>{lang === 'en' ? 'Review Institutional Profile' : 'مراجعة ملف المؤسسة'}</span>
                      <ArrowRight size={14} className={`transition-transform duration-500 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 ${isArabic ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05. LAUNCH PROTOCOL: Platform & Masterclass */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black border-t border-white/10">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-gold)]/5 blur-[150px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[1.2em] mb-10 block opacity-80 drop-shadow-[0_0_15px_rgba(201,169,98,0.4)]">
            {lang === 'en' ? 'Governance Access' : 'صلاحية الدخول للحوكمة'}
          </motion.span>
          
          <motion.h2 variants={fadeUpVariant} className="font-black uppercase tracking-tighter italic mb-20"
            style={{ fontSize: 'clamp(3rem,8vw,7.5rem)' }}>
            {lang === 'en'
              ? <>Initiate <span className="not-italic text-[var(--accent-gold)]">Sequence.</span></>
              : <>بدء <span className="not-italic text-[var(--accent-gold)]">التسلسل.</span></>}
          </motion.h2>

          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Action 1: The Platform */}
            <a href="https://smartblocks.etmam.io" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center justify-center p-20 border border-white/10 bg-black/50 backdrop-blur-3xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-[0_0_40px_rgba(201,169,98,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative mb-12">
                 <div className="absolute inset-0 bg-[var(--accent-gold)]/20 blur-xl scale-150 animate-pulse" />
                 <Cpu size={56} className="text-[var(--accent-gold)] relative z-10 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Launch Platform' : 'إطلاق المنصة التقنية'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-12">{lang === 'en' ? 'Enter the Ecosystem' : 'ادخل للنظام البيئي'}</p>
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-700">
                <ArrowRight size={24} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </a>

            {/* Action 2: The Masterclass */}
            <a href="https://academy.etmam.io/smartblocks" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center justify-center p-16 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-gold-glow">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Lock size={48} className="text-[var(--accent-gold)] mb-10 group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Explore Masterclass' : 'دورة الإتقان الشاملة'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-10">{lang === 'en' ? 'Master the Logic' : 'أتقن المنطق التشغيلي'}</p>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-500">
                <ArrowRight size={20} className={`${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SmartBlocksEngine;
