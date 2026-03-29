import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, Layers, Landmark, ShieldCheck, Zap, Activity, ChevronRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';

const Services = () => {
  const { lang } = useLanguage();

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
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO: Solution Architecture ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 group">
          <img 
            src="/media/solutions_bg.png" 
            alt="Global Solution Grid" 
            className="w-full h-full object-cover scale-[1.02] grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:scale-100 group-hover:brightness-[0.6] transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />
        </div>

        <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className={`flex items-center gap-4 mb-10 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                {lang === 'en' ? 'Track 02 // Solution Engineering' : 'المسار 02 // هندسة الحلول'}
              </span>
            </div>

            <h1 className={`font-black uppercase leading-[0.85] tracking-tighter mb-8 ${lang === 'ar' ? 'font-arabic' : ''}`}
              style={{ fontSize: 'clamp(4rem, 14vw, 10rem)' }}>
              {lang === 'en' ? <>Engineering<br /><span className="gold-gradient-text italic">Authority.</span></> : <>هندسة<br /><span className="gold-gradient-text italic">القوة والسيادة.</span></>}
            </h1>

            <p className="text-[clamp(1rem,2.5vw,1.6rem)] font-light opacity-50 max-w-4xl mb-16 leading-relaxed">
              {lang === 'en' 
                ? "We don't just consult; we engineer the strategic and technical protocols that redefine institutional real estate for the next century."
                : "نحن لا نكتفي بالاستشارات؛ بل نهندس البروتوكولات الاستراتيجية والتقنية التي تعيد تعريف العقارات المؤسسية للقرن القادم."}
            </p>

            <Link to="/contact" className="btn-premium scale-110">
              {lang === 'en' ? 'INITIATE AUDIT' : 'بدء فحص الجدارة'}
              <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 02. ROADMAP: The Operational Standard ── */}
      <section className="py-40 z-10 relative border-b border-[var(--border-color)]">
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
                  {/* Floating ID large background */}
                  <span className="absolute top-0 right-10 text-[clamp(10rem,30vw,20rem)] font-black opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-[1500ms] pointer-events-none select-none italic text-[var(--accent-gold)]">
                    {service.id}
                  </span>

                  <div className={`p-16 md:p-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start ${lang === 'ar' ? 'direction-rtl' : ''}`}>
                    {/* Left content */}
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
                       
                       {/* Metric Badge */}
                       <div className={`flex items-center gap-6 p-8 border border-[var(--border-color)] bg-[var(--text-primary)]/[0.02] inline-flex group-hover:border-[var(--accent-gold)]/30 transition-all ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <Activity size={24} className="text-[var(--accent-gold)] animate-pulse" />
                          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                             <p className="text-[9px] font-black opacity-20 uppercase tracking-widest mb-1">Empirical Benchmark</p>
                             <p className="text-lg font-black uppercase text-[var(--accent-gold)]">{service.metrics}</p>
                          </div>
                       </div>
                    </div>

                    {/* Right features list */}
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

      {/* ── 03. FINAL CALL: Global Standard ── */}
      <section className="py-60 z-10 relative text-center">
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`font-black mb-12 uppercase tracking-tighter italic leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}
                style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}>
                 {lang === 'en' ? <>Standardize <br /><span className="gold-gradient-text not-italic">Success.</span></> : <>معيرة <br /><span className="gold-gradient-text not-italic">النجاح.</span></>}
              </h2>
              <p className="opacity-30 text-[clamp(1rem,2.5vw,1.8rem)] mb-20 font-light max-w-3xl mx-auto leading-relaxed">
                {lang === 'en' 
                  ? "We deliver institutional-grade roadmaps for organizations ready to lead in the digital era. Let's engineer your sovereign future."
                  : "نحن نقدم خرائط طريق من الدرجة المؤسسية للمنظمات المستعدة للقيادة في العصر الرقمي. لنصمم مستقبلكم السيادي سوياً."}
              </p>
              <Link to="/contact" className="btn-premium px-24 py-8 scale-125 shadow-[0_0_60px_rgba(201,169,98,0.25)]">
                 {lang === 'en' ? 'BEGIN ENGAGEMENT AUDIT' : 'بدء تدقيق الارتباط'}
                 <ArrowRight size={20} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
              </Link>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Services;
