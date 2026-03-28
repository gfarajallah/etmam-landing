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

  const whyEtmam = [
    { label: "10+", text: lang === 'en' ? "Years of Excellence" : "سنوات من التميز" },
    { label: "80%+", text: lang === 'en' ? "Client Retention" : "الاحتفاظ بالعملاء" },
    { label: "95%+", text: lang === 'en' ? "Revenue Growth" : "نمو الإيرادات" }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.02] pointer-events-none" />
      
      {/* 01. Hero - Institutional Clarity */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
           <div className={`absolute top-0 ${lang === 'en' ? 'right-0' : 'left-0'} w-1/2 h-full bg-[var(--accent-gold)]/5 skew-x-[-12deg] transform origin-top`} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
           >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
                <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                  {lang === 'en' ? 'ETMAM Business Solutions' : 'إتمام لحلول الأعمال'}
                </span>
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
              </div>
              <h1 className={`text-6xl md:text-[8rem] font-black mb-12 uppercase tracking-tighter leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? <>Institutional <br /><span className="gold-gradient-text italic">Precision.</span></> : <>دقة <br /><span className="gold-gradient-text italic">مؤسسية.</span></>}
              </h1>
              <p className="text-2xl text-[var(--text-primary)] opacity-60 max-w-2xl mx-auto font-light leading-relaxed">
                 {lang === 'en' 
                   ? "A seamless integration of efficient, risk-free, and in-depth business approaches focused on growth and success."
                   : "تكامل سلس لنهج الأعمال الفعال والخالي من المخاطر والعميق الذي يركز على النمو والنجاح."}
              </p>
           </motion.div>
        </div>
      </section>

      {/* 02. Introduction & Philosophy */}
      <section className="py-40 relative z-10 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
              <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">
                {lang === 'en' ? <>Mission & <span className="text-[var(--accent-gold)] italic">Vision.</span></> : <>المهمة <span className="text-[var(--accent-gold)] italic">والرؤية.</span></>}
              </h2>
              <div className="space-y-12">
                 <div className="flex gap-8 group">
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
                 </div>
                 <div className="flex gap-8 group">
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
                 </div>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-video bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-sm overflow-hidden p-2 metallic-glow">
                 <img 
                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                   alt="Business Optimization" 
                   className="w-full h-full object-cover grayscale opacity-50"
                 />
                 <div className="absolute inset-0 bg-[var(--accent-gold)]/10 mix-blend-overlay" />
              </div>
           </div>
        </div>
      </section>

      {/* 03. Service Framework */}
      <section className="py-52 z-10 relative overflow-hidden">
        <div className={`absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent -rotate-[15deg]`} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-40">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">
              {lang === 'en' ? <>What We <span className="not-italic text-[var(--accent-gold)]">Do.</span></> : <>ما <span className="not-italic text-[var(--accent-gold)]">نفعله.</span></>}
           </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
           {capabilities.map((c, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-16 premium-card border-[var(--border-color)] bg-[var(--bg-secondary)]/20 group hover:bg-[var(--bg-secondary)]/40 transition-all duration-700"
             >
                <div className="mb-10 w-16 h-16 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors">
                  {c.icon}
                </div>
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{c.title}</h4>
                <p className="opacity-30 text-sm leading-relaxed font-light">{c.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 04. Zoho Partnership Node */}
      <section className="py-52 bg-white text-navy-900 z-10 relative">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className={lang === 'ar' ? 'order-2' : ''}>
               <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-navy-900">
                    <Database className="text-white" size={40} />
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter">ZOHO <span className="text-[var(--accent-gold)]">PARTNER.</span></h3>
               </div>
               <div className="space-y-8 text-navy-900/70 text-lg leading-relaxed font-light">
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
                       <li key={idx} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-navy-900">
                          <CheckCircle size={16} className="text-[var(--accent-gold)]" /> {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-navy-900 flex items-center justify-center p-20 rounded-sm shadow-2xl skew-y-3 transform">
                  <div className="text-center">
                    <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Official Partner</span>
                    <h2 className="text-white text-9xl font-black tracking-tighter">ZOHO</h2>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 05. Why ETMAM Metrics */}
      <section className="py-52 z-10 relative border-t border-[var(--border-color)]">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-24">
            {whyEtmam.map((metric, i) => (
              <div key={i} className="text-center group">
                 <h4 className="text-[12rem] md:text-[14rem] font-black leading-none opacity-5 group-hover:opacity-10 transition-opacity absolute -translate-y-20 left-1/2 -translate-x-1/2 pointer-events-none">{metric.label}</h4>
                 <div className="relative z-10 pt-20">
                   <h5 className="text-5xl font-black gold-gradient-text mb-4 italic">{metric.label}</h5>
                   <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40">{metric.text}</p>
                 </div>
              </div>
            ))}
         </div>
         <div className="max-w-4xl mx-auto px-6 text-center mt-60">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">
               {lang === 'en' ? "At ETMAM, We Get It Done." : "في إتمام، نحن ننجز المهمة."}
            </h3>
            <Link to="/contact" className="btn-premium">
               {lang === 'en' ? 'Initiate Consultation' : 'بدء الاستشارة'}
               <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
         </div>
      </section>
    </div>
  );
};


export default EtmamConsulting;
