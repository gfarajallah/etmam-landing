import { useLanguage } from '@/context/useLanguage';
import EcosystemCore from '@/components/interactive/EcosystemCore';
import { motion } from 'framer-motion';
import { Globe, Cpu, Bot, Landmark, Target, Zap, Activity, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import InstitutionalAction from '@/components/layout/InstitutionalAction';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Solutions = () => {
  const { lang } = useLanguage();

  const tracks = [
    {
      id: "etmam",
      number: "01",
      title: lang === 'en' ? "ETMAM Consultancy" : "إتمام للاستشارات",
      subtitle: lang === 'en' ? "STRATEGIC ADVISORY" : "استشارات استراتيجية",
      desc: lang === 'en' 
        ? "Engineering the legal and regulatory architecture for monumental digital asset transitions. We bridge legacy real estate with future-ready liquidity."
        : "هندسة العمارة القانونية والتنظيمية لتحولات الأصول الرقمية الضخمة. نحن نجسر العقارات التقليدية مع السيولة الجاهزة للمستقبل.",
      icon: <Globe size={48} />,
      link: "/solutions/etmam",
      color: "rgba(59, 130, 246, 0.5)",
      bgImage: "/media/sol_track_1.jpg"
    },
    {
      id: "smart-blocks",
      number: "02",
      title: lang === 'en' ? "SmartBlocks Engine" : "محرك سمارت بلوكس",
      subtitle: lang === 'en' ? "TOKENIZATION CORE" : "نواة الترميز",
      desc: lang === 'en' 
        ? "The definitive high-performance infrastructure for institutional asset settlement. Fractionalizing the world's most valuable assets at scale."
        : "البنية التحتية النهائية عالية الأداء لتسوية الأصول المؤسسية. تجزئة أغلى أصول العالم على نطاق واسع.",
      icon: <Cpu size={48} />,
      link: "/solutions/smart-blocks",
      color: "rgba(201, 169, 98, 0.5)",
      bgImage: "/media/sol_track_2.jpg"
    },
    {
      id: "smart-agent",
      number: "03",
      title: lang === 'en' ? "SmartAgent AI" : "ذكاء سمارتي إيجنتس",
      subtitle: lang === 'en' ? "NEURAL INTELLIGENCE" : "الذكاء العصبي",
      desc: lang === 'en' 
        ? "Computational supremacy applied to real estate market data. Predictive matching and autonomous deal qualification for the elite."
        : "التفوق الحسابي المطبق على بيانات سوق العقارات. المطابقة التنبؤية وتأهيل الصفقات المستقل للنخبة.",
      icon: <Bot size={48} />,
      link: "/solutions/smart-agent",
      color: "rgba(34, 211, 238, 0.5)",
      bgImage: "/media/sol_track_3.png"
    }
  ];

  const offerings = [
    {
      id: "01",
      title: lang === 'en' ? "Institutional Tokenization" : "الترميز المؤسسي للأصول",
      subtitle: lang === 'en' ? "High-Authority Digital Structuring." : "الهيكلة الرقمية عالية السلطة.",
      desc: lang === 'en' 
        ? "We architect the technical and legal engines that transform static real estate into fluid, borderless capital. Utilizing ERC-3643 standards, we ensure your assets meet global institutional requirements for secondary market liquidity."
        : "نحن نهندس المحركات التقنية والقانونية التي تحول العقارات الثابتة إلى عصب مالي سائل وعابر للحدود. بالاعتماد على معايير ERC-3643، نضمن توافق أصولك مع المتطلبات المؤسسية العالمية لسيولة السوق الثانوية.",
      features: lang === 'en' 
        ? ["Tier-1 SPV Legal Structuring", "Atomic Settlement Protocols", "Real-World Asset Verification"]
        : ["هيكلة قانونية (SPV) من الدرجة الأولى", "بروتوكولات التسوية الذرية الفورية", "أنظمة التحقق من الأصول الواقعية"],
      icon: <Landmark size={36} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "FLAGSHIP SERVICE" : "الخدمة الرائدة",
      metrics: lang === 'en' ? "Settlement: < 1.0s" : "التسوية: أقل من ثانية"
    },
    {
      id: "02",
      title: lang === 'en' ? "Strategic Advisory" : "الاستشارات الاستراتيجية الكبرى",
      subtitle: lang === 'en' ? "Legacy Portfolio Realignment." : "إعادة محاذاة المحافظ التقليدية.",
      desc: lang === 'en' 
        ? "Bespoke consulting for the top 1% of real estate owners. We don't just advise; we create the roadmap for family offices and sovereign developers to integrate blockchain logic into multi-generational asset governance."
        : "استشارات مخصصة لكبار ملاك العقارات. نحن لا نكتفي بالنصح؛ بل نرسم خارطة الطريق للمكاتب العائلية والمطورين السياديين لدمج منطق البلوكشين في حوكمة الأصول عبر الأجيال.",
      features: lang === 'en'
        ? ["Multi-Jurisdiction Strategy", "High-Net-Worth Onboarding", "Operational Transition Logic"]
        : ["استراتيجيات الولاية القضائية المتعددة", "تأهيل المستثمرين ذوي الملاءة العالية", "منطق التحول التشغيلي المؤسسي"],
      icon: <Target size={36} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "EXECUTIVE ADVISORY" : "استشارات تنفيذية",
      metrics: lang === 'en' ? "$5B+ Network Access" : "وصول لشبكة بـ 5 مليار دولار+"
    },
    {
      id: "03",
      title: lang === 'en' ? "Web3 Transition" : "إطار التحول الرقمي (Web3)",
      subtitle: lang === 'en' ? "Deep Operational Evolution." : "التطور التشغيلي العميق.",
      desc: lang === 'en' 
        ? "The bridge from analog friction to digital efficiency. We dismantle legacy bottlenecks and replace them with automated, smart-contract driven workflows that eradicate human error and maximize project throughput."
        : "الجسر من العجز التقليدي إلى الكفاءة الرقمية. نحن نفكك الاختناقات الموروثة ونستبدلها بسير عمل آلي مدفوع بالعقود الذكية التي تقضي على الخطأ البشري وتضاعف إنتاجية المشاريع.",
      features: lang === 'en'
        ? ["Automated Yield Distribution", "Digital Identity Infrastructure", "Smart Contract Governance"]
        : ["توزيع العوائد الآلي المشفر", "بنية تحتية للهوية الرقمية", "حوكمة العقود الذكية المعقدة"],
      icon: <Zap size={36} className="text-[var(--accent-gold)]" />,
      tag: lang === 'en' ? "EVOLUTION" : "التطور المؤسسي",
      metrics: lang === 'en' ? "90% Reduction in Friction" : "خفض الاحتكاك بنسبة 90٪"
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 overflow-x-hidden">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none z-50" />

      {/* ── 01. HERO: The High-Authority Opening ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none group">
          <img 
            src="/media/solutions_hero_dashboard.jpg" 
            alt="Solutions Dashboard Concept" 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 grayscale brightness-[0.6] mix-blend-screen scale-105 group-hover:scale-100 group-hover:grayscale-0 group-hover:opacity-50 group-hover:brightness-[0.8] transition-all duration-[3000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.span variants={fadeUpVariant} className="section-subtitle">
              {lang === 'en' ? 'Institutional Framework' : 'الإطار المؤسسي'}
            </motion.span>
            
            <TextReveal 
              text={lang === 'en' ? 'TRIPLE-TRACK SOLUTIONS.' : 'حلول المسارات الثلاثة.'}
              className="display-title mb-12"
            />
            
            <motion.p variants={fadeUpVariant} className="body-text max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'The definitive convergence of regulatory intelligence, tokenization infrastructure, and neural AI.'
                : 'التقارب النهائي بين الذكاء التنظيمي، وبنية الترميز التحتية، والذكاء الاصطناعي العصبي.'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      
      {/* ── 01.5 OUR SERVICES ── */}
      <section className="py-32 relative z-10 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeUpVariant} className="section-subtitle">
              {lang === 'en' ? 'Our Services' : 'خدماتنا'}
            </motion.span>
            <TextReveal 
              text={lang === 'en' ? 'THE DOMAINS OF EXPERTISE.' : 'مجالات الخبرة.'}
              className="section-title mb-6"
            />
            <motion.p variants={fadeUpVariant} className="body-text max-w-3xl mx-auto">
              {lang === 'en' 
                ? 'We define the standard for institutional engagement through these core service domains.'
                : 'نحن نحدد معيار الارتباط المؤسسي من خلال مجالات الخدمة الأساسية هذه.'}
            </motion.p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {offerings.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to="/contact" className="block relative p-1 glass-card border-[var(--border-color)] bg-[var(--bg-secondary)]/10 metallic-glow overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/[0.02]">
                  <span className="absolute top-0 right-10 text-[clamp(10rem,30vw,20rem)] font-black opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-[1500ms] pointer-events-none select-none italic text-[var(--accent-gold)]">
                    {service.id}
                  </span>

                  <div className={`p-16 md:p-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start ${lang === 'ar' ? 'direction-rtl' : ''}`}>
                    <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                       <div className={`flex items-center gap-6 mb-12 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-20 h-20 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] group-hover:shadow-[0_0_40px_rgba(201,169,98,0.2)] transition-all duration-700 group-hover:scale-110">
                             {service.icon}
                          </div>
                          <div className="flex flex-col">
                             <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.6em] uppercase mb-2">{service.tag}</span>
                             <h5 className="text-[11px] font-black uppercase tracking-widest opacity-40">{service.subtitle}</h5>
                          </div>
                       </div>
                       
                       <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">
                        {service.title}
                       </h2>
                       
                       <p className="text-2xl font-light opacity-50 leading-relaxed mb-16 max-w-xl group-hover:opacity-80 transition-opacity duration-700">
                          {service.desc}
                       </p>
                       
                       <div className={`flex items-center gap-6 p-8 border border-[var(--border-color)] bg-[var(--text-primary)]/[0.02] inline-flex group-hover:border-[var(--accent-gold)]/30 transition-all ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <Activity size={24} className="text-[var(--accent-gold)] animate-pulse" />
                          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                             <p className="text-[9px] font-black opacity-20 uppercase tracking-widest mb-1">Empirical Benchmark</p>
                             <p className="text-lg font-black uppercase text-[var(--accent-gold)]">{service.metrics}</p>
                          </div>
                       </div>
                    </div>

                    <div className={`lg:pl-24 lg:border-l lg:border-[var(--border-color)] h-full flex flex-col justify-center ${lang === 'ar' ? 'lg:border-l-0 lg:border-r lg:pl-0 lg:pr-24 text-right' : ''}`}>
                       <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20 block mb-12">{lang === 'en' ? 'Standard Deliverables' : 'المخرجات المعيارية'}</span>
                       <div className="space-y-10 mb-16">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className={`flex items-center gap-6 group/item ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                               <div className="w-3 h-[1px] bg-[var(--accent-gold)] group-hover/item:w-8 transition-all duration-500" />
                               <span className="text-xl font-light opacity-60 group-hover/item:opacity-100 group-hover/item:text-[var(--accent-gold)] transition-all duration-500">{feature}</span>
                            </div>
                          ))}
                       </div>
                       <div className={`mt-auto pt-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <span>{lang === 'en' ? 'REQUEST PROTOCOL SPECS' : 'طلب مواصفات البروتوكول'}</span>
                          <ChevronRight size={16} className={`transition-transform duration-500 group-hover:translate-x-3 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-3' : ''}`} />
                       </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02. SYNERGY: The Collective Execution ── */}
      <section className="py-60 relative overflow-hidden z-10 bg-[var(--bg-secondary)]/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-at-c from-[var(--accent-gold)]/5 to-transparent blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-start">
              <motion.div variants={fadeUpVariant} className="flex gap-4 mb-12">
                <Globe className="text-blue-400" size={32} />
                <Cpu className="text-[var(--accent-gold)]" size={32} />
                <Bot className="text-cyan-400" size={32} />
              </motion.div>
              
              <TextReveal 
                text={lang === 'en' ? 'ECOSYSTEM INTEGRITY.' : 'تكامل النظام الشامل.'}
                className="section-title mb-12"
              />
              
              <motion.p variants={fadeUpVariant} className="body-text mb-16 max-w-xl">
                {lang === 'en'
                  ? 'Each track operates as a specialized node, yet they converge in the ETMAM Execution Engine to create absolute market superiority.'
                  : 'يعمل كل مسار كعقدة متخصصة، ومع ذلك فإنها تلتقي في محرك تنفيذ إتمام لخلق تفوق سوقي مطلق.'}
              </motion.p>
              
              <motion.div variants={fadeUpVariant}>
                <Magnetic>
                  <PremiumButton to="/contact" scale="scale-110">
                    {lang === 'en' ? 'INITIATE PARTNER PROTOCOL' : 'بدء بروتوكول الشراكة'}
                  </PremiumButton>
                </Magnetic>
              </motion.div>
            </motion.div>
            <motion.div variants={slowFadeUpVariant} className="relative flex justify-center py-10 lg:py-0">
              <EcosystemCore />
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* ── OUR SOLUTIONS ── */}
      <section className="pt-40 pb-20 relative z-10 bg-[var(--bg-primary)] text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeUpVariant} className="section-subtitle">
              {lang === 'en' ? 'Our Solutions' : 'حلولنا'}
            </motion.span>
            <TextReveal 
              text={lang === 'en' ? 'PROPRIETARY ENGINES.' : 'محركاتنا الخاصة.'}
              className="section-title mb-6"
            />
            <motion.p variants={fadeUpVariant} className="body-text max-w-3xl mx-auto">
              {lang === 'en' 
                ? 'The tangible products and digital architectures we deploy to execute our services.'
                : 'المنتجات الملموسة والبنى الرقمية التي ننشرها لتنفيذ خدماتنا.'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 03. THE BLADE SYSTEM: Interactive Shards ── */}
      <section className="relative h-screen md:h-[80vh] w-full z-20 flex flex-col md:flex-row overflow-hidden border-y border-[var(--border-color)]">
        {tracks.map((track) => (
          <motion.div
            key={track.id}
            initial={{ flex: 1 }}
            whileHover={{ flex: 2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="group relative flex-1 min-w-0 border-b md:border-b-0 md:border-e border-[var(--border-color)] last:border-0 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 z-0 bg-[var(--bg-primary)]">
              {track.bgImage && (
                <img 
                  src={track.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-[6000ms] ease-out mix-blend-luminosity opacity-40 group-hover:mix-blend-normal group-hover:opacity-100" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/10 to-[var(--bg-primary)]/40 pointer-events-none transition-opacity duration-700" />
              <div className="absolute inset-0 bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/10 transition-colors duration-700 pointer-events-none mix-blend-overlay" />
            </div>

            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 z-10"
              style={{ background: `radial-gradient(circle at center, ${track.color}, transparent 70%)` }}
            />

            <div className="relative z-20 h-full flex flex-col justify-between p-12 md:p-20">
              <div className="flex justify-between items-start">
                <span className="text-5xl md:text-8xl font-black opacity-10 group-hover:opacity-30 group-hover:text-[var(--accent-gold)] transition-all duration-700 tracking-tighter">
                  {track.number}
                </span>
                <div className="p-4 border border-white/10 rounded-full group-hover:border-[var(--accent-gold)] transition-colors duration-700 group-hover:text-[var(--accent-gold)]">
                  {track.icon}
                </div>
              </div>

              <div>
                <h4 className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {track.subtitle}
                </h4>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                  {track.title}
                </h2>
                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-60 transition-all duration-700 overflow-hidden">
                  <p className="text-lg md:text-xl font-light leading-relaxed max-w-md pb-10">
                    {track.desc}
                  </p>
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
                <Magnetic strength={0.3}>
                  <PremiumButton to={track.link} className="w-fit">
                    {lang === 'en' ? 'ENTER THE TRACK' : 'دخول المسار'}
                  </PremiumButton>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <InstitutionalAction 
        title={lang === 'en' ? <>Deploy <span className="text-[var(--accent-gold)]">Capital.</span></> : <>نشر <span className="text-[var(--accent-gold)]">رأس المال.</span></>}
      />
    </div>
  );
};

export default Solutions;
