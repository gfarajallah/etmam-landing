import { motion } from 'framer-motion';
import { useLanguage } from '@/context/useLanguage';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { ArrowRight, Newspaper, Award, Quote, Linkedin } from 'lucide-react';

const MediaRecognition = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const pressItems = [
    {
      id: 1,
      source: "UAE Stories",
      date: "Featured Coverage",
      headline: lang === 'en' ? "Unlocking Potential: How Ghassan Farajallah Empowers Innovation" : "إطلاق العنان للقدرات: كيف يقود غسان فرج الله الابتكار",
      link: "https://uaestories.com/ghassan-farajallah-empowers-innovation/",
      icon: <Newspaper size={20} className="text-[var(--accent-gold)]" />
    },
    {
      id: 2,
      source: "SKEA - UAE",
      date: "National Recognition",
      headline: lang === 'en' ? "Architecting Excellence: Strategic Contributor to the Sheikh Khalifa Excellence Award" : "هندسة التميز المؤسسي: مساهم رئيسي في حصد جائزة الشيخ خليفة للامتياز",
      link: "#",
      icon: <Award size={20} className="text-[var(--accent-gold)]" />
    },
    {
      id: 3,
      source: "Bloomberg Arabia",
      date: "Upcoming Feature",
      headline: lang === 'en' ? "The Future of Institutional Tokenization" : "مستقبل الترميز المؤسسي للعقارات",
      link: "#",
      icon: <Newspaper size={20} className="text-[var(--accent-gold)]" />
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ali Saleh",
      role: "Digital Assets & Tokenomics Specialist",
      text: "Ghassan is a rare breed of strategic leader who combines deep industry knowledge with a visionary mindset. I am consistently impressed by his ability to navigate complex markets and evolve into a global authority in Real Estate Tokenization.",
    },
    {
      id: 2,
      name: "Mohamed Saeed",
      role: "AI Expert & C-Suite Advisor",
      text: "His strategic thinking and meticulous attention to detail have been invaluable. Whether leading projects or collaborating, Ghassan brings a level of professionalism and insight that inspires confidence and trust.",
    },
    {
      id: 3,
      name: "Zeenath Javeria",
      role: "Founder at Thynk UAE",
      text: "His experience and knowledge about UAE's market is so impressive. He suggested what's best for me rather than selling pre-packaged options. He is an honest, accurate and reliable leader in this industry.",
    },
    {
      id: 4,
      name: "Yousef Bin Mohamed",
      role: "Founder & CEO @ Waeen Group",
      text: "Ghassan is a well experienced Sales and Marketing professional, has very good people, communication and problem solving skills. Beside that, he is dedicated, committed and very hard worker with great leadership and management traits.",
    }
  ];

  return (
    <section className="py-40 bg-[var(--bg-primary)] border-y border-[var(--border-color)] relative z-10 overflow-hidden text-start">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* MEDIA RECOGNITION */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-20">
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6 rtl:flex-row-reverse">
             <div className="w-12 h-[1px] bg-[var(--accent-gold)]/50" />
             <span className="text-[var(--accent-gold)] text-[10px] font-black tracking-[0.6em] uppercase">
               {lang === 'en' ? 'Authority & Trust' : 'الثقة والنفوذ المؤسسي'}
             </span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
            {lang === 'en' ? <>Global <span className="not-italic text-[var(--accent-gold)]">Recognition.</span></> : <>اعتراف <span className="not-italic text-[var(--accent-gold)]">عالمي.</span></>}
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pressItems.map((item) => (
            <motion.div key={item.id} variants={fadeUpVariant} className="group border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 p-10 relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)]">
              <div className="absolute top-0 end-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <div className="mb-10">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-2">{item.date}</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent-gold)]">{item.source}</span>
              </div>
              <h3 className="text-2xl font-light leading-relaxed mb-10 group-hover:text-[var(--accent-gold)] transition-colors">
                "{item.headline}"
              </h3>
              <a 
                href={item.link} 
                target={item.link !== "#" ? "_blank" : "_self"} 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-all text-start"
              >
                {lang === 'en' ? 'READ FULL STORY' : 'قراءة المقال كاملاً'} 
                <ArrowRight size={14} className={`group-hover:translate-x-2 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* TESTIMONIALS / RECOMMENDATIONS */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-40">
          <motion.div variants={fadeUpVariant} className="flex items-center justify-between mb-16 rtl:flex-row-reverse border-b border-[var(--border-color)] pb-10">
             <h3 className="text-3xl font-black uppercase tracking-tight">
               {lang === 'en' ? 'Executive Endorsements' : 'توصيات القيادات التنفيذية'}
             </h3>
             <a href="https://www.linkedin.com/in/ghassan-farajallah/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#0a66c2] transition-colors">
                <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Verified on LinkedIn</span>
                <Linkedin size={24} />
             </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {testimonials.map((testi) => (
              <motion.div key={testi.id} variants={fadeUpVariant} className="flex flex-col gap-8">
                <Quote size={32} className="text-[var(--accent-gold)] opacity-30" />
                <p className="text-lg font-light leading-relaxed opacity-70 italic flex-grow">
                  "{testi.text}"
                </p>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-1">{testi.name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] opacity-80">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logos Placeholder */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mt-32 pt-20 border-t border-[var(--border-color)] text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 mb-12">
             {lang === 'en' ? 'TRUSTED BY & FEATURED IN' : 'شراكات وتغطيات إعلامية'}
           </p>
           <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-20 grayscale items-center">
              <div className="text-2xl font-black uppercase tracking-tighter">FORBES</div>
              <div className="text-2xl font-black uppercase tracking-tighter">BLOOMBERG</div>
              <div className="text-2xl font-black uppercase tracking-tighter">REUTERS</div>
              <div className="text-xl font-black uppercase tracking-widest border border-white px-4 py-2">CXO 2.0</div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaRecognition;
