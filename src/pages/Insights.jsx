import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Newspaper, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';
import PremiumButton from '@/components/ui/PremiumButton';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Insights = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const articles = [
    {
      title: lang === 'en' ? "The Architecture of Tokenized Real Estate" : "هندسة العقارات المرمزة",
      category: lang === 'en' ? "STRATEGY" : "إستراتيجية",
      readTime: lang === 'en' ? "8 min" : "8 دقائق",
      link: "https://sellingdubai.substack.com"
    },
    {
      title: lang === 'en' ? "Dubai's Digital Transformation Protocol" : "بروتوكول التحول الرقمي في دبي",
      category: lang === 'en' ? "MARKET DYNAMICS" : "ديناميكيات السوق",
      readTime: lang === 'en' ? "12 min" : "12 دقيقة",
      link: "https://sellingdubai.substack.com"
    },
    {
      title: lang === 'en' ? "Web3 Asset Management for Institutions" : "إدارة أصول Web3 للمؤسسات",
      category: lang === 'en' ? "INFRASTRUCTURE" : "بنية تحتية",
      readTime: lang === 'en' ? "10 min" : "10 دقائق",
      link: "https://sellingdubai.substack.com"
    }
  ];

  return (
    <div className="pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 text-start">
      <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* 01. Insights Hero */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">
              {lang === 'en' ? 'Thought Leadership' : 'فكر قيادي'}
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="display-title mb-12">
               {lang === 'en' ? <>Insights & <br /> <span className="gold-gradient-text italic">Articles.</span></> : <>رؤى و <br /> <span className="gold-gradient-text italic">مقالات.</span></>}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-2xl md:text-3xl text-[var(--text-primary)] opacity-40 leading-relaxed font-light max-w-3xl mx-auto">
              {lang === 'en' 
                ? "Strategic perspectives on the intersection of real estate, technology, and global capital markets."
                : "وجهات نظر استراتيجية حول تقاطع العقارات والتكنولوجيا وأسواق رأس المال العالمية."}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 02. Substack HQ Section */}
      <section className="py-52 bg-[var(--bg-secondary)] relative overflow-hidden z-10 border-y border-[var(--border-color)] transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div variants={fadeUpVariant} className="order-2 lg:order-none text-start">
                 <div className="flex items-center gap-6 mb-12">
                    <Mail size={24} className="text-[var(--accent-gold)]" />
                    <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                      {lang === 'en' ? 'Newsletter Protocol' : 'بروتوكول النشرة الإخبارية'}
                    </span>
                 </div>
                 <h2 className="section-title mb-10">
                    {lang === 'en' ? <>Selling <br /><span className="text-[var(--accent-gold)] italic underline decoration-[var(--accent-gold)]/30 underline-offset-8">Dubai.</span></> : <>بيع <br /><span className="text-[var(--accent-gold)] italic underline decoration-[var(--accent-gold)]/30 underline-offset-8">دبي.</span></>}
                 </h2>
                 <p className="text-xl text-[var(--text-primary)] opacity-50 mb-16 leading-relaxed max-w-xl font-light">
                    {lang === 'en' 
                      ? "Join the exclusive inner circle receiving institutional-grade analysis on Dubai's digital real estate evolution. High-authority intelligence, delivered directly from "
                      : "انضم إلى الدائرة الداخلية الحصرية التي تتلقى تحليلاً من الدرجة المؤسسية حول تطور العقارات الرقمية في دبي. ذكاء عالي القوة، يتم تسليمه مباشرة من "}
                    <a href="https://sellingdubai.substack.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-gold)] hover:underline">sellingdubai.substack.com</a>.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-8 mb-16 rtl:flex-row-reverse">
                    <a href="https://sellingdubai.substack.com" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center bg-[var(--accent-gold)] text-[var(--bg-primary)] py-5 px-10 border-none transition-all duration-500 overflow-hidden font-black uppercase tracking-[0.3em] text-[11px] hover:shadow-[0_0_40px_rgba(201,169,98,0.4)]">
                       <span className="relative z-10 flex items-center justify-center w-full">
                       {lang === 'en' ? 'Browse Full Archive' : 'تصفح الأرشيف الكامل'} <ExternalLink size={14} className={`inline ${lang === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                       </span>
                    </a>
                    <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-4 group rtl:flex-row-reverse">
                          <TrendingUp className="text-[var(--accent-gold)]/40 group-hover:text-[var(--accent-gold)] transition-colors" size={20} />
                          <span className="text-xs font-black uppercase tracking-widest opacity-60">
                            {lang === 'en' ? 'Weekly Market Intelligence' : 'ذكاء السوق الأسبوعي'}
                          </span>
                       </div>
                       <div className="flex items-center gap-4 group rtl:flex-row-reverse">
                          <BookOpen className="text-[var(--accent-gold)]/40 group-hover:text-[var(--accent-gold)] transition-colors" size={20} />
                          <span className="text-xs font-black uppercase tracking-widest opacity-60">
                            {lang === 'en' ? 'Strategic Frameworks' : 'أطر عمل استراتيجية'}
                          </span>
                       </div>
                    </div>
                 </div>
              </motion.div>

              <motion.div variants={slowFadeUpVariant} className="relative order-1 lg:order-none">
                 <div className="glass-card p-2 rounded-xl border-[var(--accent-gold)]/30 shadow-[0_0_80px_rgba(201,169,98,0.1)]">
                    <div className="bg-white rounded-lg overflow-hidden flex justify-center py-10 px-6">
                       <iframe 
                         src="https://sellingdubai.substack.com/embed" 
                         width="100%" 
                         height="320" 
                         className="max-w-[480px]"
                         style={{ border: 'none', background: 'white' }} 
                         frameBorder="0" 
                         scrolling="no"
                         title="Selling Dubai Substack"
                       />
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -end-10 w-40 h-40 bg-[var(--accent-gold)]/10 rounded-full blur-3xl -z-10" />
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* 03. Recent Strategic Thoughts */}
      <section className="py-60 relative z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
              <div className="text-start">
                 <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                   {lang === 'en' ? 'Project Log' : 'سجل المشروع'}
                 </span>
                 <h2 className="section-title">
                    {lang === 'en' ? <>Strategic <br /><span className="text-[var(--accent-gold)] italic">Archives.</span></> : <>الأرشيف <br /><span className="text-[var(--accent-gold)] italic">الاستراتيجي.</span></>}
                 </h2>
              </div>
              <p className="opacity-30 max-w-md text-sm leading-relaxed font-light mb-4 text-start">
                 {lang === 'en' 
                   ? "A curated selection of our most impactful research and theoretical frameworks shaping the industry."
                   : "مجموعة مختارة من أبحاثنا وأطرنا النظرية الأكثر تأثيراً والتي تشكل الصناعة."}
              </p>
           </div>

           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {articles.map((article, i) => (
                <motion.a
                  key={i}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUpVariant}
                  whileHover={{ y: -15 }}
                  className="premium-card p-12 md:p-16 flex flex-col justify-between group h-[450px] cursor-pointer border-[var(--border-color)] bg-[var(--text-primary)]/[0.02] text-start"
                >
                   <div>
                      <div className="flex items-center justify-between mb-12 rtl:flex-row-reverse">
                         <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.5em] uppercase">{article.category}</span>
                         <Newspaper size={18} className="opacity-20 group-hover:text-[var(--accent-gold)] transition-colors" />
                      </div>
                      <h3 className="text-3xl font-black mb-8 leading-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500 uppercase">{article.title}</h3>
                   </div>
                   
                   <div className="flex items-center justify-between pt-10 border-t border-[var(--border-color)] rtl:flex-row-reverse">
                      <span className="opacity-20 text-[10px] font-black uppercase tracking-widest">{article.readTime} {lang === 'en' ? 'READ' : 'قراءة'}</span>
                      <div className={`flex items-center gap-3 font-black uppercase tracking-[0.3em] text-[9px] group-hover:text-[var(--accent-gold)] transition-all ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                         {lang === 'en' ? 'READ STORY' : 'اقرأ القصة'} <ChevronRight size={14} className={isArabic ? 'rotate-180' : ''} />
                      </div>
                   </div>
                </motion.a>
              ))}
           </motion.div>
        </div>
      </section>

      {/* 04. Media & Idea Forge */}
      <section className="py-60 bg-[var(--bg-secondary)]/10 relative overflow-hidden z-10 border-t border-[var(--border-color)] transition-colors duration-700">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] bg-[var(--accent-gold)]/[0.03] rounded-full blur-[200px]" />
         
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant} className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
            <MessageSquare size={48} className="text-[var(--accent-gold)] mx-auto mb-12 opacity-50" />
            <h2 className="display-title italic mb-12">
               {lang === 'en' ? <>Collaborate on <br /><span className="text-[var(--accent-gold)] not-italic">Intel.</span></> : <>تعاون في <br /><span className="text-[var(--accent-gold)] not-italic">المعلومات.</span></>}
            </h2>
            <p className="opacity-30 text-2xl mb-20 font-light leading-relaxed max-w-3xl mx-auto">
               {lang === 'en' 
                 ? "Our projects extend beyond real estate—we work at the frontier of digital asset engineering. Have a high-stakes idea?"
                 : "تمتد مشاريعنا إلى ما وراء العقارات - نحن نعمل في طليعة هندسة الأصول الرقمية. هل لديك فكرة عالية المخاطر؟"}
            </p>
            <PremiumButton to="/contact" className="shadow-[0_0_50px_rgba(201,169,98,0.2)]">
               {lang === 'en' ? 'Initiate Discussion Protocol' : 'بدء بروتوكول النقاش'}
            </PremiumButton>
         </motion.div>
      </section>
    </div>
  );
};

export default Insights;
