import { useLanguage } from '@/context/useLanguage';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Newspaper, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Insights = () => {
  const { lang } = useLanguage();

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
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 overflow-x-hidden">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none z-50" />

      {/* ── 01. HERO: The Intellectual Opening ── */}
      <section className="relative pt-40 pb-20 z-10 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20rem] font-black opacity-[0.02] tracking-tighter select-none whitespace-nowrap">
          INSIGHTS
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[1em] mb-12 block">
              {lang === 'en' ? 'Thought Leadership' : 'فكر قيادي'}
            </motion.span>
            
            <TextReveal 
              text={lang === 'en' ? 'MARKET INTELLIGENCE.' : 'ذكاء السوق.'}
              className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8] mb-12"
            />
            
            <motion.p variants={fadeUpVariant} className="text-2xl md:text-3xl font-light opacity-40 max-w-4xl leading-relaxed">
              {lang === 'en' 
                ? 'Strategic frameworks and multi-billion dollar perspectives on the convergence of real estate and digital assets.'
                : 'أطر عمل استراتيجية ووجهات نظر بمليارات الدولارات حول تقارب العقارات والأصول الرقمية.'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 02. SUBSTACK HQ: The Command Center ── */}
      <section className="py-60 relative z-10 bg-[var(--bg-secondary)]/20 border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeUpVariant} className="text-start order-2 lg:order-none">
              <div className="flex items-center gap-6 mb-12">
                <Mail className="text-[var(--accent-gold)]" size={32} />
                <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.6em]">
                  {lang === 'en' ? 'Newsletter Protocol' : 'بروتوكول النشرة'}
                </span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-12">
                {lang === 'en' ? <>Selling <br /><span className="gold-gradient-text not-italic">Dubai.</span></> : <>بيع <br /><span className="gold-gradient-text not-italic">دبي.</span></>}
              </h2>
              
              <p className="text-2xl font-light opacity-40 mb-16 leading-relaxed">
                {lang === 'en'
                  ? "Access the definitive analysis of the world's most dynamic real estate market. Distributed weekly to family offices and institutional funds."
                  : "احصل على التحليل النهائي لسوق العقارات الأكثر ديناميكية في العالم. يُوزع أسبوعياً على المكاتب العائلية والصناديق المؤسسية."}
              </p>

              <div className="flex flex-col sm:flex-row gap-8">
                <Magnetic>
                  <a href="https://sellingdubai.substack.com" target="_blank" rel="noopener noreferrer">
                    <PremiumButton className="px-12 py-5 bg-[var(--accent-gold)] text-black border-none">
                      {lang === 'en' ? 'ENTER ARCHIVE' : 'دخول الأرشيف'} <ExternalLink size={16} className="ms-3" />
                    </PremiumButton>
                  </a>
                </Magnetic>
                <div className="flex flex-col justify-center gap-3">
                  <div className="flex items-center gap-4 opacity-30">
                    <TrendingUp size={16} className="text-[var(--accent-gold)]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'en' ? 'Weekly Intelligence' : 'ذكاء أسبوعي'}</span>
                  </div>
                  <div className="flex items-center gap-4 opacity-30">
                    <BookOpen size={16} className="text-[var(--accent-gold)]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'en' ? 'Strategic Frameworks' : 'أطر استراتيجية'}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slowFadeUpVariant} className="relative order-1 lg:order-none">
              <div className="glass-card p-2 rounded-2xl border-[var(--accent-gold)]/20 shadow-[0_0_100px_rgba(201,169,98,0.1)]">
                <div className="bg-white rounded-xl overflow-hidden p-8 flex justify-center">
                  <iframe 
                    src="https://sellingdubai.substack.com/embed" 
                    width="100%" 
                    height="320" 
                    className="max-w-[480px]"
                    style={{ border: 'none', background: 'white' }} 
                    frameBorder="0" 
                    scrolling="no"
                    title="Selling Dubai"
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-gold)]/5 rounded-full blur-[100px]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 03. THE ARCHIVE: Glass Grid ── */}
      <section className="py-60 relative z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
            <div className="text-start">
              <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'Project Log' : 'سجل المشروع'}
              </motion.span>
              <TextReveal 
                text={lang === 'en' ? 'STRATEGIC ARCHIVES.' : 'الأرشيف الاستراتيجي.'}
                className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic"
              />
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.a
                key={i}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUpVariant}
                whileHover={{ y: -10 }}
                className="group h-[500px] flex flex-col justify-between p-12 border border-white/5 bg-black/20 backdrop-blur-3xl hover:border-[var(--accent-gold)]/40 transition-all duration-700 text-start"
              >
                <div>
                  <div className="flex justify-between items-center mb-12">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-gold)] opacity-60">
                      {article.category}
                    </span>
                    <Newspaper className="opacity-10 group-hover:opacity-40 group-hover:text-[var(--accent-gold)] transition-all" size={20} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight mb-8 group-hover:text-[var(--accent-gold)] transition-colors duration-500">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black opacity-20 uppercase tracking-widest">{article.readTime} MIN READ</span>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest group-hover:text-[var(--accent-gold)] transition-colors duration-500">
                    {lang === 'en' ? 'READ STORY' : 'قراءة القصة'} <ChevronRight size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 04. SUBSCRIPTION: Final Protocol ── */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black/40 border-t border-[var(--border-color)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-gold)]/5 blur-[120px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <TextReveal 
            text={lang === 'en' ? 'MASTER THE FLOW.' : 'أتقن التدفق.'}
            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter italic mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Magnetic strength={0.1}>
              <a href="https://sellingdubai.substack.com" target="_blank" rel="noopener noreferrer" 
                 className="group flex flex-col items-center justify-center p-20 border border-white/5 bg-black/20 backdrop-blur-xl hover:border-[var(--accent-gold)] transition-all duration-700">
                <Mail size={48} className="text-[var(--accent-gold)] mb-10 group-hover:scale-125 transition-all duration-700" />
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Substack Portal' : 'بوابة سابستاك'}</h3>
              </a>
            </Magnetic>

            <Magnetic strength={0.1}>
              <Link to="/contact" 
                 className="group flex flex-col items-center justify-center p-20 border border-white/5 bg-black/20 backdrop-blur-xl hover:border-[var(--accent-gold)] transition-all duration-700">
                <Newspaper size={48} className="text-[var(--accent-gold)] mb-10 group-hover:scale-125 transition-all duration-700" />
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Request Reports' : 'طلب التقارير'}</h3>
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Insights;
