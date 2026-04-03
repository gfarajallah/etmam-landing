import { useLanguage } from '@/context/useLanguage';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  ArrowRight, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  CheckCircle,
  Database,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const EtmamConsulting = () => {
  const { lang } = useLanguage();

  const capabilities = [
    {
      title: lang === 'en' ? "Customer Care & Support" : "عناية العملاء والدعم",
      desc: lang === 'en' ? "Agents with the right skill set, domain knowledge, and training to ensure high retention rates." : "وكلاء يتمتعون بمجموعة المهارات المناسبة، المعرفة بالمجال، والتدريب لضمان معدلات احتفاظ عالية.",
      icon: <Users size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Sales Optimization" : "تحسين المبيعات",
      desc: lang === 'en' ? "Lead generation, market intelligence, and multi-channel digital marketing strategies." : "توليد الرصاص، ذكاء السوق، واستراتيجيات التسويق الرقمي متعددة القنوات.",
      icon: <Target size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Marketing & Advertising" : "التسويق والإعلان",
      desc: lang === 'en' ? "Applying specific processes to make models scalable and increase brand awareness." : "تطبيق عمليات محددة لجعل النماذج قابلة للتوسع وزيادة الوعي بالعلامة التجارية.",
      icon: <Zap size={24} className="text-[var(--accent-gold)]" />
    }
  ];



  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.02] pointer-events-none" />
      
      {/* 01. Hero - Institutional Clarity */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/media/13.01.2026_02.55.56_REC.png" 
            alt="ETMAM Consulting Hero" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-40 scale-105" 
          />
          {/* Gradients to blend the image seamlessly into the background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
          <div className="absolute inset-0 bg-[var(--accent-gold)]/5 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center text-center">
           <motion.div
             initial="hidden" animate="visible" variants={staggerContainer}
             className="max-w-4xl"
           >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
                <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                  {lang === 'en' ? 'ETMAM Business Solutions' : 'إتمام لحلول الأعمال'}
                </motion.span>
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
              </div>
              <TextReveal 
                text={lang === 'en' ? 'Institutional Precision.' : 'دقة مؤسسية.'}
                className="display-title mb-12 justify-center"
              />
              <motion.p variants={fadeUpVariant} className="text-2xl text-[var(--text-primary)] opacity-60 max-w-2xl mx-auto font-light leading-relaxed">
                 {lang === 'en' 
                   ? "A seamless integration of efficient, risk-free, and in-depth business approaches focused on growth and success."
                   : "تكامل سلس لنهج الأعمال الفعال والخالي من المخاطر والعميق الذي يركز على النمو والنجاح."}
              </motion.p>
           </motion.div>
        </div>
      </section>

      {/* 02. Introduction & Philosophy */}
      <section className="py-40 relative z-10 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-start">
              <TextReveal 
                text={lang === 'en' ? 'Mission & Vision.' : 'المهمة والرؤية.'}
                className="section-title mb-12"
              />
              <div className="space-y-12">
                 <motion.div variants={fadeUpVariant} className="flex gap-8 group">
                    <div className="p-4 rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--accent-gold)] transition-colors h-fit">
                       <Target className="text-[var(--accent-gold)]" size={32} />
                    </div>
                    <div>
                       <h3 className="text-xl font-black mb-4 uppercase tracking-widest">{lang === 'en' ? 'Our Mission' : 'مهمتنا'}</h3>
                       <p className="opacity-40 text-lg leading-relaxed font-light">
                          {lang === 'en' 
                            ? "To make businesses better, more efficient, and more competitive by delivering customized solutions tailored to their exact needs."
                            : "جعل الشركات أفضل وأكثر كفاءة وأكثر تنافسية من خلال تقديم حلول مخصصة مصممة لتلبية احتياجاتهم الدقيقة."}
                       </p>
                    </div>
                 </motion.div>
                 <motion.div variants={fadeUpVariant} className="flex gap-8 group">
                    <div className="p-4 rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--accent-gold)] transition-colors h-fit">
                       <Globe className="text-[var(--accent-gold)]" size={32} />
                    </div>
                    <div>
                       <h3 className="text-xl font-black mb-4 uppercase tracking-widest">{lang === 'en' ? 'Our Vision' : 'رؤيتنا'}</h3>
                       <p className="opacity-40 text-lg leading-relaxed font-light">
                          {lang === 'en' 
                            ? "To be the globally preferred business solutions provider in the UAE, creating value in every opportunity."
                            : "أن نكون المزود المفضل عالمياً لحلول الأعمال في الإمارات، وخلق القيمة في كل فرصة."}
                       </p>
                    </div>
                 </motion.div>
              </div>
           </motion.div>
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant} className="relative group">
              <div className="aspect-[4/3] bg-black border border-[var(--border-color)] rounded-sm overflow-hidden p-2 metallic-glow shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                 <img 
                   src="/media/SmartBlocks Investors_SZOHO.png" 
                   alt="Business Optimization" 
                   className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
                 />
                 <div className="absolute inset-0 bg-[var(--accent-gold)]/10 mix-blend-overlay pointer-events-none" />
              </div>
           </motion.div>
        </div>
      </section>

      {/* 03. Service Framework */}
      <section className="py-52 z-10 relative overflow-hidden">
        <div className="absolute top-1/2 start-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent -rotate-[15deg] rtl:rotate-[15deg]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-40">
           <TextReveal 
              text={lang === 'en' ? 'What We Do.' : 'ما نفعله.'}
              className="display-title justify-center"
            />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
           {capabilities.map((c, i) => (
             <motion.div
               key={i}
               variants={fadeUpVariant}
               className="p-16 premium-card border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 group hover:bg-[var(--bg-secondary)]/40 transition-all duration-700"
             >
                <div className="mb-10 w-16 h-16 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors">
                  {c.icon}
                </div>
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{c.title}</h4>
                <p className="opacity-60 text-sm leading-relaxed font-light">{c.desc}</p>
             </motion.div>
           ))}
        </motion.div>
      </section>

      {/* 04. Zoho Partnership Node */}
      <section className="py-52 bg-[var(--text-primary)] text-[var(--bg-primary)] z-10 relative">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
               <motion.div variants={fadeUpVariant} className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-[var(--bg-primary)]">
                    <Database className="text-[var(--text-primary)]" size={40} />
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter">ZOHO <span className="text-[var(--accent-gold)]">PARTNER.</span></h3>
               </motion.div>
               <motion.div variants={fadeUpVariant} className="space-y-8 text-[var(--bg-primary)]/80 text-lg leading-relaxed font-light">
                  <p>
                    {lang === 'en' 
                      ? "ETMAM is a certified Zoho Solutions Provider, authorized to deliver reliable custom solutions across all business scales."
                      : "إتمام هي مزود حلول زوهو معتمد، وفوضت بتقديم حلول مخصصة موثوقة عبر جميع أحجام الأعمال."}
                  </p>
                  <ul className="space-y-4">
                     {[
                       lang === 'en' ? "Certified Implementation Strategy" : "استراتيجية تنفيذ معتمدة",
                       lang === 'en' ? "End-User Training Ecosystem" : "نظام تدريب المستخدم النهائي",
                       lang === 'en' ? "Priority Institutional Support" : "دعم مؤسسي ذو أولوية",
                       lang === 'en' ? "Exclusive Partner Billing Rates" : "أسعار فوترة حصرية للشركاء"
                     ].map((item, idx) => (
                       <li key={idx} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-[var(--bg-primary)]">
                          <CheckCircle size={16} className="text-[var(--accent-gold)]" /> {item}
                       </li>
                     ))}
                  </ul>
               </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="relative rtl:order-first group perspectives-1000">
               <div className="aspect-square bg-black border border-[var(--border-color)] rounded-sm overflow-hidden p-2 metallic-glow shadow-[0_20px_50px_rgba(0,0,0,0.5)] -skew-y-3 transform transition-all duration-[1500ms] group-hover:skew-y-0 hover:rotate-y-[5deg] group-hover:scale-105">
                 <img 
                   src="/media/SmartBlocks Investors_SZOHO1234.png" 
                   alt="Zoho Partnership Node" 
                   className="w-full h-full object-cover object-left grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out scale-110 group-hover:scale-100"
                 />
                 <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none" />
               </div>
               
               {/* Institutional Floating Badge Over the image */}
               <div className="absolute -bottom-8 -end-8 bg-[var(--bg-primary)] px-8 py-6 border border-[var(--border-color)] shadow-2xl backdrop-blur-xl group-hover:-translate-y-4 transition-transform duration-700">
                    <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-2 block">Certified Integration</span>
                    <h2 className="text-[var(--text-primary)] text-4xl font-black tracking-tighter w-max">ZOHO ARCHITECTS</h2>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 05. LAUNCH PROTOCOL: Discovery & Portfolio */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black/40 border-t border-[var(--border-color)]">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span variants={fadeUpVariant} className="text-blue-400 text-[12px] font-black uppercase tracking-[1em] mb-8 block opacity-80 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            {lang === 'en' ? 'Protocol Access' : 'صلاحية الدخول للبروتوكول'}
          </motion.span>
          
          <TextReveal 
            text={lang === 'en' ? 'Ready to Optimize?' : 'جاهز للتحول؟'}
            className="display-title mb-20 justify-center"
          />

          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Action 1: Discovery Call */}
            <Link to="/contact" 
               className="group flex flex-col items-center justify-center p-16 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Briefcase size={48} className="text-blue-400 mb-10 group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Book Discovery' : 'حجز جلسة اكتشاف'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-10">{lang === 'en' ? 'Define the Strategy' : 'تحديد الاستراتيجية'}</p>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black group-hover:border-blue-400 transition-all duration-500">
                <ArrowRight size={20} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </Link>

            {/* Action 2: Portfolio */}
            <Link to="/ventures" 
               className="group flex flex-col items-center justify-center p-16 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <BarChart3 size={48} className="text-blue-400 mb-10 group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Review Portfolio' : 'مراجعة المحفظة'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-10">{lang === 'en' ? 'Institutional Success' : 'النجاح المؤسسي'}</p>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black group-hover:border-blue-400 transition-all duration-500">
                <ArrowRight size={20} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default EtmamConsulting;
