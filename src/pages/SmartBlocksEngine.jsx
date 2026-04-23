import React from 'react';
import { useLanguage } from '@/context/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Cpu,
  Zap,
  Lock,
  ArrowRight,
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
        ? "Historically, prime real estate locks capital for 5-10 years. SmartBlocks breaks this paradigm by fractioning high-cap assets into ERC-3643 tokens."
        : "تاريخياً، العقارات الفاخرة تحتجز رأس المال لسنوات. سمارت بلوكس تكسر هذه القاعدة عبر تجزئة الأصول وتشفيرها لتمكين التداول اللحظي.",
      icon: <Zap size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Fractional Governance" : "الحوكمة المجزأة اللامركزية",
      subtitle: lang === 'en' ? "Empowered stakeholders, immutable transparency." : "مساهمون ممكّنون، بشفافية مطلقة غير قابلة للتلاعب.",
      desc: lang === 'en'
        ? "Moving beyond simple ownership, our protocol infuses immutable governance into every digital fraction through fully transparent, tamper-proof smart contracts."
        : "تتجاوز بروتوكولاتنا مجرد الملكية لتدمج حوكمة غير قابلة للتلاعب في كل جزء رقمي عبر عقود ذكية شفافة كلياً.",
      icon: <ShieldCheck size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Global Democratization" : "الوصول العالمي الشامل",
      subtitle: lang === 'en' ? "Dismantling high entry barriers permanently." : "تفكيك الحواجز العالية للدخول بشكل لا رجعة فيه.",
      desc: lang === 'en'
        ? "By lowering the entry thresholds and eradicating geographic bureaucracy, we empower a new generation of micro-investors and syndicates."
        : "من خلال خفض حواجز الدخول وإحباط البيروقراطية الجغرافية، نمكن جيلاً جديداً من المستثمرين لبناء محافظ ذات عائد مالي.",
      icon: <Globe size={24} className="text-[var(--accent-gold)]" />
    }
  ];

  const profiles = [
    {
      title: lang === 'en' ? "Investors" : "المستثمرون",
      tag: "CAPITAL",
      icon: <Wallet size={24} className="text-[var(--accent-gold)]" />,
      desc: lang === 'en' ? "Fractional tokenization allows entry with micro-capital, completely democratizing access." : "الترميز المجزأ يسمح بالدخول برؤوس أموال صغيرة."
    },
    {
      title: lang === 'en' ? "Property Owners" : "مُلاّك العقارات",
      tag: "ASSETS",
      icon: <LayoutDashboard size={24} className="text-[var(--accent-gold)]" />,
      desc: lang === 'en' ? "Tokenize 20-30% of the asset's equity for immediate capital injection while retaining control." : "ترميز 20-30٪ من الأسهم لضخ رأس مال فوري."
    },
    {
      title: lang === 'en' ? "Developers" : "المطورون",
      tag: "CREATORS",
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />,
      desc: lang === 'en' ? "Direct-to-market crowdfunding via pre-sale tokenization minimizes reliance on legacy institutions." : "تمويل مباشر عبر ترميز ما قبل البيع لتقليل الاعتماد الكلي."
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start selection:bg-[var(--accent-gold)]/30">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO ── */}
      <section className="relative min-h-[110vh] flex items-center overflow-hidden z-10 border-b border-[var(--border-color)] bg-black">
        <div className="absolute inset-0 z-0">
          <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.55 }} transition={{ duration: 3.5, ease: "easeOut" }} className="absolute inset-0">
            <img src="/media/smartblocks_institutional_hero.png" alt="Institutional Tokenization Core" className="w-full h-full object-cover grayscale brightness-50 contrast-125" />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,169,98,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/60" />
          <motion.div animate={{ top: ['-10%', '110%'] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent z-10 shadow-[0_0_20px_rgba(201,169,98,0.3)]" />
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
                <span className="section-subtitle mb-0 text-[var(--accent-gold)]">
                  {lang === 'en' ? 'Track 02 // Asset Engineering' : 'المسار 02 // هندسة الأصول'}
                </span>
              </motion.div>

              <TextReveal text={lang === 'en' ? 'Empowering Real Estate.' : 'تمكين العقارات.'} className="display-title mb-12 italic" />

              <motion.p variants={fadeUpVariant} className="body-text max-w-2xl mb-20 border-l-2 border-[var(--accent-gold)]/40 pl-12 rtl:pl-0 rtl:pr-12 rtl:border-l-0 rtl:border-r-2">
                {lang === 'en' 
                  ? 'Orchestrating the definitive settlement engine for institutional-grade tokenization. Building realistic, strategic architecture for hyper-liquid wealth.'
                  : 'إدارة محرك التسوية النهائي للترميز على المستوى المؤسسي. بناء هندسة استراتيجية واقعية للثروات فائقة السيولة.'}
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-12 items-center">
                <Magnetic strength={0.25}>
                  <PremiumButton to="/contact" className="px-20 py-10 border-[var(--accent-gold)]/20 shadow-gold-glow">
                    {lang === 'en' ? 'Inquire Protocol' : 'استفسار عن البروتوكول'}
                  </PremiumButton>
                </Magnetic>
                <div className="flex gap-12 items-center p-10 bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                   <div className="text-start">
                      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-2">{isArabic ? 'السيولة المعتمدة' : 'Validated Liquidity'}</span>
                      <span className="text-4xl font-black text-[var(--accent-gold)] italic leading-none">$4.2B+</span>
                   </div>
                   <Activity size={36} className="text-[var(--accent-gold)] opacity-50 animate-pulse" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. DASHBOARD ── */}
      <section className="py-60 z-10 relative bg-[#050505] overflow-hidden border-b border-white/5">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end gap-12 mb-40">
               <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-3 h-3 bg-[var(--accent-gold)] rounded-full animate-pulse shadow-gold-glow" />
                     <span className="section-subtitle mb-0 text-[var(--accent-gold)]">{isArabic?'مصفوفة الملكية الرقمية':'Digital Ownership Matrix'}</span>
                  </div>
                  <TextReveal text={lang === 'en' ? 'Institutional Hook.' : 'الهوك المؤسسي المطلق.'} className="section-title italic mb-10" />
                  <p className="body-text max-w-2xl border-l-2 border-white/10 pl-10 rtl:pl-0 rtl:pr-10 rtl:border-l-0 rtl:border-r-2">
                    {lang === 'en' ? 'Bridging the high-friction gap between legacy real estate and hyper-liquid digital asset engineering.' : 'سد الفجوة عالية الاحتكاك بين العقارات التقليدية وهندسة الأصول الرقمية فائقة السيولة.'}
                  </p>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
               {[
                 { title: lang === 'en' ? "Equity Layer" : "طبقة الملكية", tag: "LIQUID SPV", metric: "100%", features: [{ label: "Settlement", val: "Instant" }, { label: "Ownership", val: "Fractional" }] },
                 { title: lang === 'en' ? "Yield Protocol" : "بروتوكول العوائد", tag: "DEBT INSTRUMENT", metric: "88M+", features: [{ label: "Verification", val: "On-Chain" }, { label: "Security", val: "Military" }] },
                 { title: lang === 'en' ? "Real Estate Deeds" : "الصكوك العقارية", tag: "FRACTIONAL DEEDS", metric: "∞", features: [{ label: "Immutability", val: "Absolute" }, { label: "Registry", val: "Decentral" }] }
               ].map((card, i) => (
                 <motion.div key={i} variants={fadeUpVariant} className="action-card text-start p-16">
                    <div className="action-card-overlay bg-[var(--accent-gold)]/5" />
                    <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block opacity-60">{card.tag}</span>
                    <h4 className="action-card-title mb-12 italic">{card.title}</h4>
                    <div className="flex items-baseline gap-4 mb-16">
                       <span className="text-6xl font-black text-white italic">{card.metric}</span>
                    </div>
                    <div className="space-y-4 mb-12 border-t border-white/5 pt-8">
                       {card.features.map((feat, j) => (
                         <div key={j} className="flex items-center justify-between">
                            <span className="text-[11px] uppercase tracking-widest opacity-30">{feat.label}</span>
                            <span className="text-[12px] font-black text-emerald-400">{feat.val}</span>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── 03. ECOSYSTEM PROFILES ── */}
      <section className="py-40 z-10 relative bg-[var(--bg-primary)] border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {profiles.map((p, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="action-card p-12">
                 <div className="action-card-overlay bg-[var(--accent-gold)]/5" />
                 <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-all">
                      {p.icon}
                    </div>
                    <div className="text-start">
                       <span className="text-[10px] font-black text-[var(--accent-gold)] uppercase tracking-widest opacity-50">{p.tag}</span>
                       <h4 className="text-2xl font-black text-white uppercase tracking-tight italic">{p.title}</h4>
                    </div>
                 </div>
                 <p className="body-text opacity-40 group-hover:opacity-100 transition-opacity">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. BENEFITS ── */}
      <section className="py-52 z-10 relative bg-[var(--bg-primary)] border-b border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUpVariant}>
              <Link to="/contact" className="action-card border-none rounded-none p-16 md:border-e last:border-e-0 min-h-[400px]">
                <div className="action-card-overlay bg-[var(--accent-gold)]/5" />
                <div className="mb-16 w-20 h-20 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-all shadow-xl">
                  {b.icon}
                </div>
                <h4 className="action-card-title mb-4 italic">{b.title}</h4>
                <h5 className="section-subtitle mb-8 text-[var(--accent-gold)]">{b.subtitle}</h5>
                <p className="body-text flex-1 line-clamp-4">{b.desc}</p>
                <div className="action-card-btn mt-10">
                  <ArrowRight size={20} className={isArabic ? 'rotate-180' : ''} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 05. LAUNCH PROTOCOL ── */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <motion.h2 variants={fadeUpVariant} className="display-title italic mb-24">
            {lang === 'en' ? <>Initiate <span className="not-italic text-[var(--accent-gold)]">Protocol.</span></> : <>بدء <span className="not-italic text-[var(--accent-gold)]">الـبـروتـوكـول.</span></>}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <a href="https://smart-blocks-tokenization.base44.app/Home?lang=en" target="_blank" rel="noopener noreferrer" className="action-card p-24">
              <div className="action-card-overlay bg-[var(--accent-gold)]/10" />
              <Cpu size={80} className="action-card-icon text-[var(--accent-gold)] mb-10" />
              <h3 className="action-card-title italic text-4xl">{lang === 'en' ? 'Platform' : 'المنصة'}</h3>
              <p className="action-card-desc mb-10">{lang === 'en' ? 'Institutional Engine Access' : 'صلاحية الدخول للمحرك المؤسسي'}</p>
              <div className="action-card-btn mx-auto"><ArrowRight size={40} className={isArabic ? 'rotate-180' : ''} /></div>
            </a>
            <Link to="/academy" className="action-card p-24">
              <div className="action-card-overlay bg-[var(--accent-gold)]/10" />
              <Lock size={80} className="action-card-icon text-[var(--accent-gold)] mb-10" />
              <h3 className="action-card-title italic text-4xl">{lang === 'en' ? 'Masterclass' : 'الماستركلاس'}</h3>
              <p className="action-card-desc mb-10">{lang === 'en' ? 'Strategic Mastery' : 'الإتقان الاستراتيجي'}</p>
              <div className="action-card-btn mx-auto"><ArrowRight size={40} className={isArabic ? 'rotate-180' : ''} /></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartBlocksEngine;
