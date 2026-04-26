import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  BookOpen, 
  Award, 
  Users, 
  Globe, 
  ChevronRight, 
  ShieldCheck, 
  Target,
  Zap,
  Star,
  X,
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/useLanguage';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Academy = () => {
  const { lang, t } = useLanguage();
  const isArabic = lang === 'ar';
  const [showPrezi, setShowPrezi] = useState(false);

  const modules = [
    {
      id: "01",
      title: isArabic ? "القيادة الإبداعية العقارية" : "Creative Real Estate Leadership",
      description: isArabic 
        ? "استكشاف نموذج التميز (الأنجلو-إماراتي) في قيادة القطاع العقاري الحديث."
        : "Mastering the 'Anglo-Emarati' excellence model for modern real estate leadership.",
      icon: <Award className="text-[var(--accent-gold)]" size={32} />,
      tag: "STRATEGY",
      duration: "12 Weeks"
    },
    {
      id: "02",
      title: isArabic ? "هندسة الأصول الرقمية" : "Digital Asset Engineering",
      description: isArabic
        ? "فهم منطق الترميز (Tokenization) وبناء السيولة في العصر الرقمي الأول."
        : "Decoding tokenization logic and building liquidity in the digital-first era.",
      icon: <Zap className="text-[var(--accent-gold)]" size={32} />,
      tag: "TECHNOLOGY",
      duration: "8 Weeks"
    },
    {
      id: "03",
      title: isArabic ? "التكامل في القطاع الخاص" : "Private Sector Integration",
      description: isArabic
        ? "المبادرة الكبرى لتأهيل وتمكين الكوادر الإماراتية للقيادة في القطاع الخاص."
        : "The flagship CSR initiative for empowering UAE nationals in the private sector.",
      icon: <Briefcase className="text-[var(--accent-gold)]" size={32} />,
      tag: "EMPOWERMENT",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] selection:bg-[var(--accent-gold)]/40 overflow-hidden pt-20">
      
      {/* ── 01. HERO SECTION ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden z-20 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/media/ghassan_keynote.jpg" 
            alt="Aqary Academy" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent z-20" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-32 relative z-30 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className={isArabic ? 'text-right' : 'text-left'}>
            <motion.div variants={fadeUpVariant} className={`flex items-center gap-6 mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="w-16 h-[1px] bg-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[0.8em]">
                {isArabic ? 'أكاديمية عقاري // مركز القيادة' : 'AQARY ACADEMY // LEADERSHIP CENTER'}
              </span>
            </motion.div>

            <TextReveal 
              text={isArabic ? 'صناعة قادة العقار.' : 'Engineering Real Estate Leaders.'}
              className="display-title mb-10 italic"
            />

            <motion.p variants={fadeUpVariant} className="body-text max-w-3xl mb-16 opacity-80">
              {isArabic 
                ? 'أكاديمية عقاري هي منصة تعليمية عالمية المستوى، تهدف لتمكين الجيل القادم من القادة من خلال دمج المعرفة الأكاديمية مع الخبرة العملية العميقة.'
                : 'AQARY Academy is a world-class LMS platform designed to empower the next generation of leaders by blending academic rigor with deep operational expertise.'}
            </motion.p>

            <motion.div variants={fadeUpVariant} className={`flex flex-wrap gap-8 items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
              <Magnetic>
                <button 
                  onClick={() => setShowPrezi(true)}
                  className="px-16 py-8 bg-[var(--accent-gold)] text-black font-black uppercase tracking-widest flex items-center gap-4 hover:bg-[var(--accent-gold-light)] transition-all shadow-gold-glow"
                >
                  <Play size={20} fill="currentColor" />
                  {isArabic ? 'دخول العرض التقديمي' : 'ENTER THE MASTERCLASS'}
                </button>
              </Magnetic>
              <div className="flex -space-x-4 rtl:space-x-reverse">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] bg-gray-800 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-900" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--accent-gold)] flex items-center justify-center text-black font-bold text-xs">
                  +500
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                {isArabic ? 'قادة معتمدون عالمياً' : 'Globally Certified Leaders'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. CSR HIGHLIGHT: EMARATI EMPOWERMENT ── */}
      <section className="py-40 relative z-10 bg-black overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px] -mr-40 -mt-40" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${isArabic ? 'text-right' : 'text-left'}`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeUpVariant} className={`flex items-center gap-4 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 rounded-full">
                  <Briefcase size={20} className="text-[var(--accent-gold)]" />
                </div>
                <span className="text-[var(--accent-gold)] font-bold uppercase tracking-widest text-xs">CSR INITIATIVE</span>
              </motion.div>
              
              <TextReveal 
                text={isArabic ? 'تمكين الكوادر الإماراتية.' : 'Empowering UAE Nationals.'}
                className="section-title mb-10"
              />
              
              <motion.p variants={fadeUpVariant} className="body-text mb-12 max-w-xl opacity-70">
                {isArabic 
                  ? 'نلتزم في أكاديمية عقاري بتأهيل الكفاءات الوطنية للقيادة في القطاع العقاري الخاص، من خلال برامج تدريبية مكثفة تربط بين الرؤية الإماراتية والمعايير العالمية.'
                  : 'At AQARY Academy, we are committed to qualifying national talents for leadership in the private real estate sector through intensive training programs that bridge UAE vision with global standards.'}
              </motion.p>
              
              <div className={`grid grid-cols-2 gap-8 mb-12 ${isArabic ? 'text-right' : 'text-left'}`}>
                <div>
                  <h4 className="text-4xl font-black text-[var(--accent-gold)] mb-2 italic">100%</h4>
                  <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest">
                    {isArabic ? 'دعم للقطاع الخاص' : 'Private Sector Support'}
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-[var(--accent-gold)] mb-2 italic">VISION</h4>
                  <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest">
                    {isArabic ? 'تكامل وطني استراتيجي' : 'Strategic National Integration'}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={slowFadeUpVariant} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              className="relative p-1 bg-[var(--border-color)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-[#050505] p-12 border border-white/5">
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 border border-[var(--accent-gold)]/40 flex items-center justify-center">
                      <Target size={32} className="text-[var(--accent-gold)]" />
                   </div>
                   <div className="text-right">
                      <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] block mb-2">Impact Index</span>
                      <span className="text-3xl font-black italic gold-gradient-text uppercase">Legendary</span>
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  {isArabic ? 'المسؤولية المجتمعية (CSR)' : 'Societal Responsibility (CSR)'}
                </h3>
                <p className="body-text text-sm opacity-50 mb-10 leading-relaxed">
                  {isArabic 
                    ? 'نهدف لتقليص الفجوة بين الكوادر الوطنية والفرص القيادية في السوق العقاري، من خلال منهجية "القيادة الإبداعية" التي تضمن الاستدامة والتميز.'
                    : 'We aim to close the gap between national talents and leadership opportunities in the real estate market through our Creative Leadership methodology.'}
                </p>
                <div className="h-[1px] w-full bg-white/5 mb-8" />
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Target 2026 // PRIVATE SECTOR</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. LMS MODULES ── */}
      <section className="py-40 bg-[var(--bg-secondary)]/30 relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
            <div className={isArabic ? 'text-right' : 'text-left'}>
              <span className="section-subtitle">{isArabic ? 'منهجية التعلم' : 'LEARNING ARCHITECTURE'}</span>
              <h2 className="section-title">{isArabic ? 'وحدات الأكاديمية.' : 'Academy Modules.'}</h2>
            </div>
            <div className="flex gap-4">
               <div className="p-4 border border-[var(--border-color)] opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
                  <BookOpen size={20} />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <motion.div 
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-12 border border-[var(--border-color)] bg-black/40 hover:border-[var(--accent-gold)]/40 transition-all duration-700 ${isArabic ? 'text-right' : 'text-left'}`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-10 group-hover:scale-125 transition-all duration-1000">
                   <span className="text-8xl font-black italic">{m.id}</span>
                </div>
                
                <div className={`flex flex-col h-full relative z-10`}>
                  <div className={`mb-10 w-16 h-16 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors duration-700`}>
                    {m.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[var(--accent-gold)] uppercase tracking-[0.4em] mb-4">{m.tag}</span>
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{m.title}</h3>
                  <p className="body-text text-sm opacity-50 mb-10 line-clamp-3 group-hover:opacity-100 transition-opacity duration-700">
                    {m.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{m.duration}</span>
                    <Link to="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-gold)] flex items-center gap-2 group-hover:gap-4 transition-all">
                      {isArabic ? 'سجل الآن' : 'ENROLL NOW'}
                      <ChevronRight size={14} className={isArabic ? 'rotate-180' : ''} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. PREZI MODAL ── */}
      <AnimatePresence>
        {showPrezi && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-7xl h-full max-h-[85vh] bg-[#050505] border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-16 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between px-8 z-10">
                <div className="flex items-center gap-4">
                   <div className="w-3 h-3 rounded-full bg-red-500/20" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20" />
                   <span className="ml-4 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">AQARY ACADEMY // MASTERCLASS PREVIEW</span>
                </div>
                <button 
                  onClick={() => setShowPrezi(false)}
                  className="p-2 hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="w-full h-full pt-16">
                <iframe 
                  src="https://prezi.com/view/UDin2MAQuK9KBKnhB6nG/embed" 
                  className="w-full h-full border-none"
                  allowFullScreen
                  title="AQARY Academy Masterclass"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <Link to="/contact">
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="inline-block p-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent"
               >
                  <div className="bg-black px-20 py-10 flex items-center gap-6">
                     <span className="text-xs font-black uppercase tracking-[0.5em]">{isArabic ? 'ابدأ رحلة القيادة الآن' : 'START YOUR LEADERSHIP JOURNEY NOW'}</span>
                     <ChevronRight size={20} className="text-[var(--accent-gold)]" />
                  </div>
               </motion.div>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Academy;
