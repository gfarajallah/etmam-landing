import { useLanguage } from '@/context/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Target, Lightbulb, Users, Quote, ShieldCheck, BookOpen, ArrowRight } from 'lucide-react';

const About = () => {
  const { lang } = useLanguage();

  const values = [
    { 
      title: lang === 'en' ? "Transparency" : "الشفافية", 
      icon: <Shield className="text-[var(--accent-gold)]" size={24} />, 
      desc: lang === 'en' ? "Unwavering commitment to clear, honest communication in complex financial structures." : "التزام راسخ بالتواصل الواضح والصادق في الهياكل المالية المعقدة."
    },
    { 
      title: lang === 'en' ? "Precision" : "الدقة", 
      icon: <Target className="text-[var(--accent-gold)]" size={24} />, 
      desc: lang === 'en' ? "Meticulous technical and strategic execution tailored to enterprise-grade standards." : "تنفيذ تقني واستراتيجي دقيق مصمم وفقاً لمعايير الدرجة المؤسسية."
    },
    { 
      title: lang === 'en' ? "Innovation" : "الابتكار", 
      icon: <Lightbulb className="text-[var(--accent-gold)]" size={24} />, 
      desc: lang === 'en' ? "Pushing the boundaries of real estate through blockchain and tokenization." : "دفع حدود العقارات من خلال تقنية البلوكشين والترميز."
    },
    { 
      title: lang === 'en' ? "Empowerment" : "التمكين", 
      icon: <Users className="text-[var(--accent-gold)]" size={24} />, 
      desc: lang === 'en' ? "Building capacity through exclusive workshops and knowledge sharing." : "بناء القدرات من خلال ورش العمل الحصرية ومشاركة المعرفة."
    }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* 01. Portfolio Hero */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10">
        <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-1/2 h-full opacity-20 hidden lg:block`}>
          <div className={`absolute inset-0 bg-gradient-to-${lang === 'ar' ? 'r' : 'l'} from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-transparent z-10`} />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            alt="Executive Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div className={`flex items-center gap-4 mb-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
               <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
               <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                 {lang === 'en' ? 'Visionary Profile' : 'الملف الشخصي للرؤيوي'}
               </span>
            </div>
            <h1 className={`text-[clamp(3.5rem,9vw,9rem)] font-black mb-12 leading-[0.8] uppercase tracking-tighter ${lang === 'ar' ? 'font-arabic' : ''}`}>
               {lang === 'en' ? <>Legacy of <br /> <span className="gold-gradient-text italic">Precision.</span></> : <>إرث من <br /> <span className="gold-gradient-text italic">الدقة.</span></>}
            </h1>
            <p className="text-2xl md:text-4xl text-[var(--text-primary)] opacity-90 leading-relaxed font-light mb-16 max-w-2xl">
              {lang === 'en' 
                ? "Ghassan Farajallah is the recognized authority in real estate tokenization, defining the bridge between traditional finance and digital assets."
                : "غسان فرج الله هو المرجع المعترف به في ترميز العقارات، حيث يحدد الجسر بين التمويل التقليدي والأصول الرقمية."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. The Vision */}
      <section className="py-52 relative z-10 bg-[var(--bg-secondary)]/30 border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === 'en' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-[var(--border-color)] premium-card p-3 bg-[var(--bg-primary)]/50 metallic-glow">
               <img 
                src="/founder-1.jpg" 
                alt="Ghassan Strategy Session" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className={`absolute -bottom-16 ${lang === 'ar' ? '-left-16' : '-right-16'} p-16 glass-card border-[var(--accent-gold)]/30 max-w-sm premium-shadow backdrop-blur-3xl bg-[var(--bg-primary)]/80`}>
               <Quote className="text-[var(--accent-gold)]/40 mb-8" size={48} />
               <p className={`text-[var(--text-primary)] text-xl leading-relaxed italic font-medium ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                 {lang === 'en'
                   ? '"In the transition to a tokenized economy, clarity is the only asset that truly matters."'
                   : '"في عملية الانتقال إلى اقتصاد مرمز، الوضوح هو الأصل الوحيد الذي يهم حقاً."'}
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === 'en' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={lang === 'ar' ? 'text-right' : 'text-left'}
          >
            <h2 className={`text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'en' ? <>Strategist. <br /><span className="text-[var(--accent-gold)] italic">Visionary.</span></> : <>خبير استراتيجي. <br /><span className="text-[var(--accent-gold)] italic">رؤيوي.</span></>}
            </h2>
            <div className={`space-y-12 text-[var(--text-primary)] opacity-80 text-xl leading-relaxed font-light ${lang === 'ar' ? 'font-arabic' : ''}`}>
              <p>
                {lang === 'en'
                  ? "As the executive architect behind ETMAM, Ghassan has pioneered frameworks that empower institutional investors to navigate the complexities of digital transformation with absolute confidence and mathematical clarity."
                  : "بصفته المؤسس التنفيذي لـ إتمام، ابتكر غسان أطر عمل تمكن المستثمرين المؤسسيين من التنقل في تعقيدات التحول الرقمي بثقة مطلقة ووضوح رياضي."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10">
                 <div className="p-10 premium-card group border-[var(--border-color)] bg-[var(--text-primary)]/[0.02]">
                    <ShieldCheck className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="font-black uppercase tracking-widest text-xs mb-3">{lang === 'en' ? 'Institutional Trust' : 'الثقة المؤسسية'}</h4>
                    <p className="text-xs opacity-20">{lang === 'en' ? 'Expertise trusted by leading family offices and developers across the MENA region.' : 'خبرة موثوقة من كبار المكاتب العائلية والمطورين في منطقة الشرق الأوسط وشمال أفريقيا.'}</p>
                 </div>
                 <div className="p-10 premium-card group border-[var(--border-color)] bg-[var(--text-primary)]/[0.02]">
                    <BookOpen className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="font-black uppercase tracking-widest text-xs mb-3">{lang === 'en' ? 'Mastery & Logic' : 'الإتقان والمنطق'}</h4>
                    <p className="text-xs opacity-20">{lang === 'en' ? 'Defining the standard for high-stakes Web3 real estate education and governance.' : 'تحديد معايير التعليم والحوكمة في مشاريع الـ Web3 العقارية عالية المخاطر.'}</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. The ETMAM Standard */}
      <section className="py-60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-32">
           <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.8em] mb-10 block">{lang === 'en' ? 'Our Philosophy' : 'فلسفتنا'}</span>
           <h2 className={`text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter italic ${lang === 'ar' ? 'font-arabic' : ''}`}>
             {lang === 'en' ? <>The ETMAM <span className="not-italic text-[var(--accent-gold)]">Standard.</span></> : <>معيار <span className="not-italic text-[var(--accent-gold)]">إتمام.</span></>}
           </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 premium-card group border-[var(--border-color)] bg-[var(--text-primary)]/[0.02]"
            >
              <div className={`mb-10 w-16 h-16 bg-[var(--text-primary)]/[0.03] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)]/50 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700`}>
                {v.icon}
              </div>
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{v.title}</h4>
              <p className="opacity-30 text-sm leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 04. Call to Executive Action */}
      <section className="py-60 relative border-t border-[var(--border-color)] z-10 bg-[var(--bg-secondary)]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter italic leading-none ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'en' ? <>Ready to <br /><span className="text-[var(--accent-gold)] not-italic">Execute?</span></> : <>جاهز <br /><span className="text-[var(--accent-gold)] not-italic">للتنفيذ؟</span></>}
            </h2>
            <p className="text-2xl opacity-30 mb-16 font-light">
              {lang === 'en' ? 'Join the movement defining the future of digital real estate assets.' : 'انضم إلى الحراك الذي يحدد مستقبل الأصول العقارية الرقمية.'}
            </p>
            <Link to="/contact" className="btn-premium">
               {lang === 'en' ? 'Initiate Protocol' : 'بدء البروتوكول'} 
               <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
