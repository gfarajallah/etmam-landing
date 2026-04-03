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
    <div className="pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* 01. Hero */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none">
          <img
            src={`/media/smartblocks_expert_${lang === 'ar' ? 'ar' : 'en'}.png`}
            alt="SmartBlocks Ecosystem"
            className="w-full h-full object-cover scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-[var(--bg-primary)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center text-center z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl">
            <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                {lang === 'en' ? 'SmartBlocks Intelligence' : 'ذكاء سمارت بلوكس'}
              </span>
              <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
            </motion.div>
            
            <TextReveal 
              text={lang === 'en' ? 'Empowering Real Estate.' : 'تمكين العقارات.'}
              className={`font-black mb-12 uppercase tracking-tighter leading-[0.9] flex justify-center w-full display-title`}
            />
            
            <motion.p variants={fadeUpVariant} className="text-[clamp(1rem,2vw,1.5rem)] text-[var(--text-primary)] opacity-50 max-w-3xl mx-auto font-light leading-relaxed mb-16">
              {lang === 'en'
                ? 'The definitive engine for high-authority tokenization. Empowering decision-makers with realistic, responsible, and strategic technology.'
                : 'المحرك النهائي للترميز عالي السلطة. تمكين صناع القرار من تكنولوجيا واقعية ومسؤولة واستراتيجية.'}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Magnetic strength={0.4}>
                <PremiumButton to="/contact">
                  {lang === 'en' ? 'Inquire Protocol' : 'استفسار عن البروتوكول'}
                </PremiumButton>
              </Magnetic>
              <div className="flex items-center gap-6 p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 backdrop-blur-md text-start">
                <div className="w-12 h-12 bg-[var(--accent-gold)]/10 flex items-center justify-center">
                  <BarChart4 size={24} className="text-[var(--accent-gold)]" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest block opacity-40">Trading Volume Management</span>
                  <span className="text-xl font-bold">$4.2B+ Potential</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 02. Institutional Features Grid */}
      <section className="py-52 z-10 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border-color)]">
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUpVariant}>
              <Link to="/contact"
                className="group block relative p-16 overflow-hidden border-[var(--border-color)] border-b md:border-b-0 md:border-e last:border-b-0 last:border-e-0 cursor-pointer transition-all duration-700 bg-[var(--bg-secondary)]/10 text-start"
                style={{ minHeight: '340px' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,98,0.5)' }} />
                <div className="absolute inset-0 bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-10 w-16 h-16 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors duration-500 group-hover:scale-110 transform">
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

      {/* 03. Ecosystem Profiles */}
      <section className="py-52 bg-[var(--bg-secondary)]/30 z-10 relative border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-b border-[var(--border-color)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32 text-start">
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
              {lang === 'en' ? 'Ecosystem Solutions' : 'حلول النظام البيئي'}
            </motion.span>
            <TextReveal 
              text={lang === 'en' ? 'Radical Empowerment.' : 'تمكين جذري.'}
              className="font-black uppercase tracking-tighter display-title"
            />
            <motion.p variants={fadeUpVariant} className="mt-8 text-xl font-light text-[var(--text-primary)] opacity-40 max-w-2xl">
              {lang === 'en'
                ? 'Defining the gold standard solutions across every layer of the real estate ecosystem.'
                : 'تحديد الحلول بالمعيار الذهبي عبر كل طبقة من طبقات النظام البيئي العقاري.'}
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-x border-[var(--border-color)]">
            {profiles.map((p, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <Link to="/contact"
                  className="group block relative p-12 md:p-16 border-[var(--border-color)] lg:border-e border-t lg:border-b-0 overflow-hidden cursor-pointer transition-all duration-700 bg-[var(--text-primary)]/[0.01] h-full text-start"
                  style={{ minHeight: '400px' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,98,0.5)' }} />
                  <div className="absolute inset-0 bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-12 flex items-center gap-6">
                      <div className="w-16 h-16 bg-[var(--text-primary)]/[0.03] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)]/50 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 shrink-0">
                        {p.icon}
                      </div>
                      <div className="text-start">
                        <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.4em] uppercase mb-2 block">{p.tag}</span>
                        <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{p.title}</h4>
                      </div>
                    </div>
                    <div className="space-y-6 flex-1">
                      {p.levels.map((lvl, j) => (
                        <div key={j} className="border-t border-[var(--border-color)]/50 pt-5 group-hover:border-[var(--accent-gold)]/30 transition-colors duration-500">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${j===0?'text-red-400/80':j===1?'text-emerald-400/80':j===2?'text-blue-400/80':'text-[var(--accent-gold)]'} mb-3 block`}>
                            {lvl.label}
                          </span>
                          <p className="text-sm font-light opacity-50 leading-relaxed text-[var(--text-primary)] group-hover:opacity-90 transition-opacity duration-500">{lvl.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 font-black uppercase tracking-[0.3em] text-[8px] mt-10 pt-6 border-t border-[var(--border-color)] opacity-0 group-hover:opacity-100 text-[var(--accent-gold)] transition-all duration-500 rtl:flex-row-reverse">
                      <span>{lang === 'en' ? 'Review Profile' : 'مراجعة الملف'}</span>
                      <ArrowRight size={12} className={`transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${isArabic ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04. LAUNCH PROTOCOL: Platform & Masterclass */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black/40 border-t border-[var(--border-color)]">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-gold)]/5 blur-[120px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[1em] mb-8 block opacity-80 drop-shadow-[0_0_10px_rgba(201,169,98,0.5)]">
            {lang === 'en' ? 'Protocol Access' : 'صلاحية الدخول للبروتوكول'}
          </motion.span>
          
          <motion.h2 variants={fadeUpVariant} className="font-black uppercase tracking-tighter italic mb-20"
            style={{ fontSize: 'clamp(3rem,8vw,7rem)' }}>
            {lang === 'en'
              ? <>Initiate <span className="not-italic text-[var(--accent-gold)]">Sequence.</span></>
              : <>بدء <span className="not-italic text-[var(--accent-gold)]">المحرك.</span></>}
          </motion.h2>

          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Action 1: The Platform */}
            <a href="https://smartblocks.etmam.io" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center justify-center p-16 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-gold-glow">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Cpu size={48} className="text-[var(--accent-gold)] mb-10 group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Launch Platform' : 'إطلاق المنصة التقنية'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-10">{lang === 'en' ? 'Enter the Ecosystem' : 'ادخل للنظام البيئي'}</p>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-500">
                <ArrowRight size={20} className={`${isArabic ? 'rotate-180' : ''}`} />
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
