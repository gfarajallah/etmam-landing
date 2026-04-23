import { useState } from 'react';
import { useLanguage } from '@/context/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';
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
  BarChart3,
  Play,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const EtmamConsulting = () => {
  const { lang } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const isArabic = lang === 'ar';

  const videoUrl = "https://www.youtube.com/embed/1HJAHe0FsOw?autoplay=1";

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
      
      {/* 01. Hero */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0 bg-black">
          <img src="/media/13.01.2026_02.55.56_REC.png" alt="ETMAM Consulting Hero" className="w-full h-full object-cover object-[center_top] grayscale opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center text-center">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
                <motion.span variants={fadeUpVariant} className="section-subtitle mb-0 text-[var(--accent-gold)]">
                  {lang === 'en' ? 'ETMAM Business Solutions' : 'إتمام لحلول الأعمال'}
                </motion.span>
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
              </div>
              <TextReveal text={lang === 'en' ? 'Institutional Precision.' : 'دقة مؤسسية.'} className="display-title mb-12 justify-center italic" />
              <motion.p variants={fadeUpVariant} className="body-text max-w-2xl mx-auto">
                 {lang === 'en' 
                   ? "A seamless integration of efficient, risk-free, and in-depth business approaches focused on growth and success."
                   : "تكامل سلس لنهج الأعمال الفعال والخالي من المخاطر والعميق الذي يركز على النمو والنجاح."}
              </motion.p>
           </motion.div>
        </div>
      </section>

      {/* 02. Introduction */}
      <section className="py-40 relative z-10 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-start">
              <TextReveal text={lang === 'en' ? 'Mission & Vision.' : 'المهمة والرؤية.'} className="section-title mb-12 italic" />
              <div className="space-y-12">
                 <motion.div variants={fadeUpVariant} className="flex gap-8 group items-start">
                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--accent-gold)] transition-colors h-fit">
                       <Target className="text-[var(--accent-gold)]" size={32} />
                    </div>
                    <div>
                       <h3 className="text-xl font-black mb-4 uppercase tracking-widest italic">{lang === 'en' ? 'Our Mission' : 'مهمتنا'}</h3>
                       <p className="body-text opacity-40 group-hover:opacity-100 transition-all">
                          {lang === 'en' 
                            ? "To make businesses better, more efficient, and more competitive by delivering customized solutions."
                            : "جعل الشركات أفضل وأكثر كفاءة وأكثر تنافسية من خلال تقديم حلول مخصصة."}
                       </p>
                    </div>
                 </motion.div>
                 <motion.div variants={fadeUpVariant} className="flex gap-8 group items-start">
                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--accent-gold)] transition-colors h-fit">
                       <Globe className="text-[var(--accent-gold)]" size={32} />
                    </div>
                    <div>
                       <h3 className="text-xl font-black mb-4 uppercase tracking-widest italic">{lang === 'en' ? 'Our Vision' : 'رؤيتنا'}</h3>
                       <p className="body-text opacity-40 group-hover:opacity-100 transition-all">
                          {lang === 'en' 
                            ? "To be the globally preferred business solutions provider in the UAE, creating value in every opportunity."
                            : "أن نكون المزود المفضل عالمياً لحلول الأعمال في الإمارات، وخلق القيمة في كل فرصة."}
                       </p>
                    </div>
                 </motion.div>
              </div>
           </motion.div>
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant} className="relative flex justify-center items-center w-full">
                 <img src="/media/SmartBlocks Investors_SZOHO.png" alt="Mission & Vision Handshake" className="w-[110%] max-w-none grayscale opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700" />
           </motion.div>
        </div>
      </section>

      {/* 03. Service Framework */}
      <section className="py-52 z-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-40">
           <TextReveal text={lang === 'en' ? 'What We Do.' : 'ما نفعله.'} className="display-title justify-center italic" />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
           {capabilities.map((c, i) => (
             <motion.div key={i} variants={fadeUpVariant} className="action-card p-16">
                <div className="action-card-overlay bg-[var(--accent-gold)]/5" />
                <div className="mb-10 w-16 h-16 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors">
                  {c.icon}
                </div>
                <h4 className="action-card-title mb-6 italic">{c.title}</h4>
                <p className="body-text flex-1">{c.desc}</p>
             </motion.div>
           ))}
        </motion.div>
      </section>

      {/* 04. Zoho Partnership Node */}
      <section className="py-60 relative z-10 border-y border-[var(--border-color)] overflow-hidden bg-black">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-start">
               <TextReveal text={lang === 'en' ? 'Certified Master Architects.' : 'مهندسون معتمدون.'} className="section-title mb-10 italic" />
               <motion.p variants={fadeUpVariant} className="body-text mb-12 border-l border-[var(--accent-gold)] pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r">
                   {lang === 'en' 
                     ? "As an Advanced Zoho Partner in Dubai, ETMAM transcends basic configuration. We engineer complex architectures that transform how institutions operate."
                     : "بصفتنا شريك زوهو المتقدم في دبي، نتجاوز في إتمام حدود الإعدادات الأساسية. نحن نصمم هياكل تحول طريقة عمل المؤسسات بالكامل."}
               </motion.p>
               <motion.div variants={fadeUpVariant} className="space-y-6">
                  <ul className="space-y-4">
                     {[
                       lang === 'en' ? 'Certified Implementation Strategy' : 'استراتيجية تنفيذ معتمدة',
                       lang === 'en' ? 'End-User Training Ecosystem' : 'بيئة تدريب متقدمة للمستخدمين',
                       lang === 'en' ? 'Priority Institutional Support' : 'دعم مؤسسي ذو أولوية عالية'
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest opacity-80 italic">
                         <CheckCircle className="text-[var(--accent-gold)]" size={16} />
                         {item}
                       </li>
                     ))}
                  </ul>
               </motion.div>
            </motion.div>
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} 
               className="relative rtl:order-first flex flex-col justify-center items-center cursor-pointer group/video"
               onClick={() => setIsVideoOpen(true)}
            >
                 <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <motion.div animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} className="w-16 h-16 border-2 border-[var(--accent-gold)] rounded-full" />
                 </div>
                 <img src="/media/Zoho-One-Partner-Dubai-UAE.png" alt="Zoho One Partner UAE" className="w-full max-w-sm grayscale object-contain z-10 group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" />
                 <div className="text-center mt-10 z-20">
                      <span className="section-subtitle text-[var(--accent-gold)] mb-2 block">Certified Integration</span>
                      <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase italic">ZOHO ARCHITECTS</h2>
                 </div>
            </motion.div>
         </div>
      </section>

      {/* 05. LAUNCH PROTOCOL */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-[var(--bg-primary)]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span variants={fadeUpVariant} className="section-subtitle text-[var(--accent-gold)] mb-8 block opacity-80">
            {lang === 'en' ? 'Protocol Access' : 'صلاحية الدخول للبروتوكول'}
          </motion.span>
          <TextReveal text={lang === 'en' ? 'Ready to Optimize?' : 'جاهز للتحول؟'} className="display-title mb-20 justify-center italic" />
          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link to="/contact" className="action-card p-16">
              <div className="action-card-overlay bg-[var(--accent-gold)]/5" />
              <Briefcase size={48} className="action-card-icon text-[var(--accent-gold)]" />
              <h3 className="action-card-title italic">{lang === 'en' ? 'Book Discovery' : 'حجز جلسة اكتشاف'}</h3>
              <p className="action-card-desc">{lang === 'en' ? 'Define the Strategy' : 'تحديد الاستراتيجية'}</p>
              <div className="action-card-btn mx-auto"><ArrowRight size={20} className={isArabic ? 'rotate-180' : ''} /></div>
            </Link>
            <Link to="/academy" className="action-card p-16">
              <div className="action-card-overlay bg-[var(--accent-gold)]/5" />
              <BarChart3 size={48} className="action-card-icon text-[var(--accent-gold)]" />
              <h3 className="action-card-title italic">{lang === 'en' ? 'Academy & Portfolio' : 'الأكاديمية والمحفظة'}</h3>
              <p className="action-card-desc">{lang === 'en' ? 'Institutional Success' : 'النجاح المؤسسي'}</p>
              <div className="action-card-btn mx-auto"><ArrowRight size={20} className={isArabic ? 'rotate-180' : ''} /></div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
         {isVideoOpen && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20 bg-black/90 backdrop-blur-3xl">
              <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl border border-white/10">
                 <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all group">
                    <X size={24} className="text-white group-hover:rotate-90 transition-transform" />
                 </button>
                 <iframe src={videoUrl} title="Zoho One Introduction" className="w-full h-full" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};

export default EtmamConsulting;
