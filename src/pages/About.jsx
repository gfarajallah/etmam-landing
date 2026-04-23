import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Target, 
  ShieldCheck, 
  Award, 
  Activity, 
  Layers, 
  Cpu, 
  TrendingUp,
  Clock,
  Navigation
} from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';
import InstitutionalAction from '@/components/layout/InstitutionalAction';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const About = () => {
  const { lang } = useLanguage();

  const milestones = [
    { year: '2010', title: lang === 'en' ? 'Inception' : 'البداية', desc: lang === 'en' ? 'Core strategic architecture phase.' : 'مرحلة هندسة الاستراتيجية الجوهرية.' },
    { year: '2015', title: lang === 'en' ? 'Global SLA' : 'اتفاقية عالمية', desc: lang === 'en' ? 'Defining 12h Global executive response.' : 'تحديد الاستجابة التنفيذية العالمية خلال 12 ساعة.' },
    { year: '2020', title: lang === 'en' ? 'Digital Pivot' : 'التحول الرقمي', desc: lang === 'en' ? 'Engineering the real asset tokenization bridge.' : 'هندسة جسر ترميز الأصول الحقيقية.' },
    { year: '2024', title: lang === 'en' ? 'Global #1 Platform' : 'المنصة رقم 1 عالمياً', desc: lang === 'en' ? 'Crowned the world\'s best real estate tokenization platform in Amsterdam, prevailing over giants from Silicon Valley and Singapore.' : 'تم تتويجنا كأفضل منصة ترميز عقاري في العالم في أمستردام، متفوقين على عمالقة من سيليكون فالي وسنغافورة.' },
    { 
      year: '2025', 
      title: lang === 'en' ? 'Global Leadership' : 'القيادة العالمية', 
      desc: lang === 'en' 
        ? 'Ranked among the top 5 global entrepreneurs in the sector. Selected from 300+ international candidates for the Outstanding Leadership Award at CXO 2.0 Conference.' 
        : 'تم تصنيفه ضمن أفضل 5 رواد أعمال عالميين في القطاع. تم الاختيار من بين أكثر من 300 مرشح دولي لجائزة التميز في قيادة الأعمال في مؤتمر CXO 2.0.' 
    }
  ];

  const pillars = [
    { id: "01", icon: <Target />, title: lang === 'en' ? "Precision" : "الدقة", desc: lang === 'en' ? "Absolute focus on high-authority execution." : "التركيز المطلق على التنفيذ عالي السلطة." },
    { id: "02", icon: <Award />, title: lang === 'en' ? "Authority" : "السلطة", desc: lang === 'en' ? "Trusted by the highest tiers of global finance." : "موثوق من أعلى مستويات المالية العالمية." },
    { id: "03", icon: <Activity />, title: lang === 'en' ? "Vitality" : "الحيوية", desc: lang === 'en' ? "Real-time adaptability in digital markets." : "القدرة على التكيف في الوقت الفعلي في الأسواق الرقمية." }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700">
      <div className="fixed inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* ── 01. VISION HERO ── */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-[var(--accent-gold)]/20 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl text-start">
              <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-10 rtl:flex-row-reverse">
                 <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
                 <span className="section-subtitle mb-0">{lang === 'en' ? 'Executive Profile' : 'الملف التنفيذي'}</span>
              </motion.div>
              <motion.h1 variants={fadeUpVariant} className="display-title mb-16 italic">
                {lang === 'en' ? <>Engineering <br /><span className="text-[var(--accent-gold)] not-italic">Authority.</span></> : <>هندسة <br /><span className="text-[var(--accent-gold)] not-italic">السيادة.</span></>}
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="body-text max-w-3xl lowercase first-letter:uppercase">
                {lang === 'en' 
                  ? 'ETMAM is not just a platform; it is a philosophy of excellence. Guided by the vision of Ghassan Farajallah, we engineer high-efficiency transitions for the real estate economy.'
                  : 'إتمام ليست مجرد منصة؛ بل هي فلسفة للتميز. مسترشدين برؤية غسان فرج الله، نهندس تحولات عالية الكفاءة للاقتصاد العقاري.'}
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-[var(--accent-gold)]/10 blur-[100px] rounded-full" />
              <img 
                src="/media/etmam_executive_hero_premium.png" 
                alt="Ghassan Farajallah" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. ARCHITECTURE: The Journey ── */}
      <section className="py-40 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 lg:order-none">
               <div className="space-y-16">
                  {milestones.map((m, i) => (
                    <motion.div key={i} variants={fadeUpVariant} className="flex gap-10 group text-start">
                       <div className="text-4xl md:text-5xl font-black italic opacity-10 group-hover:opacity-40 group-hover:text-[var(--accent-gold)] transition-all duration-700 shrink-0">
                          {m.year}
                       </div>
                       <div>
                          <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{m.title}</h4>
                          <p className="opacity-40 text-lg leading-relaxed font-light group-hover:opacity-100 transition-opacity duration-700">{m.desc}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="relative aspect-square">
               <div className="absolute inset-0 bg-[var(--accent-gold)]/5 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="relative border border-[var(--border-color)] h-full p-2 bg-black/40 backdrop-blur-3xl overflow-hidden group">
                   <img src="/media/ghassan_skea_holding.png" alt="Ghassan Farajallah - SKEA Award" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                   <div className="absolute bottom-12 start-12 text-start">
                      <p className="text-xs font-black text-[var(--accent-gold)] uppercase tracking-[0.6em] mb-4">VETTED EXCELLENCE</p>
                      <p className="text-3xl font-black italic">Sheikh Khalifa Award.</p>
                   </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. PRINCIPLES: Core Pillars ── */}
      <section className="py-40 bg-[var(--bg-secondary)]/30 border-y border-[var(--border-color)] relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-start mb-24">
            <span className="section-subtitle">
              {lang === 'en' ? 'Institutional DNA' : 'الحمض النووي المؤسسي'}
            </span>
            <h2 className="section-title">
              {lang === 'en' ? <>The Core <br /><span className="gold-gradient-text italic">Protocol.</span></> : <>البروتوكول <br /><span className="gold-gradient-text italic">الجوهري.</span></>}
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border-color)] overflow-visible text-start">
            {pillars.map((p, i) => (
              <div key={i} className="group p-20 md:p-32 border-b md:border-b-0 md:border-e border-[var(--border-color)] last:border-b-0 last:border-e-0 bg-[var(--bg-primary)] hover:bg-[var(--accent-gold)]/[0.05] transition-all duration-700">
                <div className="mb-12 w-20 h-20 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] group-hover:rotate-12 transition-all">
                  {p.icon}
                </div>
                <h4 className="text-[11px] font-black text-[var(--accent-gold)] uppercase tracking-[0.6em] mb-6 opacity-60">{p.id}</h4>
                <h3 className="text-4xl font-black mb-8 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors">{p.title}</h3>
                <p className="opacity-50 text-xl leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <InstitutionalAction 
        title={lang === 'en' ? <>Scale the <span className="text-[var(--accent-gold)]">Legacy?</span></> : <>وسع <span className="text-[var(--accent-gold)]">الإرث؟</span></>}
      />
    </div>
  );
};

export default About;
