import { useLanguage } from '@/context/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Quote,
  Lock,
  Volume2,
  VolumeX,
  Layers,
  Target,
  Award
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const About = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  const toggleMute = () => setMuted(!muted);

  const pillars = [
    {
      id: 'S1',
      title: lang === 'en' ? 'Systematic Qualifying' : 'التأهيل المنهجي',
      desc: lang === 'en'
        ? 'A structured approach to qualifying high-net-worth interest through early-stage alignment.'
        : 'منهجية هيكلية لتأهيل اهتمامات كبار المستثمرين من خلال التوافق في المراحل الأولى.',
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />
    },
    {
      id: 'S2',
      title: lang === 'en' ? 'Structured Scaling' : 'التوسع الهيكلي',
      desc: lang === 'en'
        ? 'Developing the logic needed to convert legacy property models into digital asset frameworks.'
        : 'تطوير المنطق اللازم لتحويل نماذج العقارات التقليدية إلى أطر أصول رقمية.',
      icon: <Target size={24} className="text-[var(--accent-gold)]" />
    },
    {
      id: 'S3',
      title: lang === 'en' ? 'Strategic Integration' : 'التكامل الاستراتيجي',
      desc: lang === 'en'
        ? 'Forging the final link between technology and real-world implementation.'
        : 'صياغة الحلقة النهائية بين التكنولوجيا والتنفيذ الفعلي على أرض الواقع.',
      icon: <Award size={24} className="text-[var(--accent-gold)]" />
    }
  ];

  return (
    <div className="pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 overflow-visible text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO: THE TRIPLE S ARCHITECTURE ── */}
      <section className="relative h-[95vh] w-full flex items-center overflow-hidden z-20 border-b border-[var(--border-color)] group">
        
        <div className="absolute inset-0 z-0 bg-black pointer-events-none flex items-center justify-center">
          <video
            ref={videoRef}
            src="/media/ghassan_strategic.mp4"
            poster="/media/ghassan_keynote.jpg"
            className="w-full h-full object-cover opacity-80 dark:opacity-50 transition-opacity duration-1000"
            loop
            muted={muted}
            playsInline
            autoPlay
            preload="auto"
            onLoadedData={(e) => {
              e.target.play().catch(err => console.warn("Video play error:", err));
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-32 relative z-30 w-full flex">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[0.8em] mb-10 block">
              {lang === 'en' ? 'The Foundation // THE TRIPLE S' : 'جوهر المنهجية // الـ TRIPLE S'}
            </motion.span>

            <motion.h1 
              variants={fadeUpVariant} 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className={`display-title mb-10 text-[var(--text-primary)] mt-40 ${isArabic ? 'leading-[1.2]' : 'leading-[0.9]'}`}
            >
              {lang === 'en' 
                ? <>Systematic<br /><span className="gold-gradient-text italic">Sovereignty.</span></> 
                : <>السيادة المنهجية<br /><span className="gold-gradient-text italic">الرصينة.</span></>}
            </motion.h1>

            <motion.p 
              variants={fadeUpVariant}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="text-[clamp(1.1rem,2vw,1.6rem)] font-light opacity-70 mb-16 leading-relaxed max-w-3xl"
            >
              {lang === 'en'
                ? 'Engineering the transition to the digital asset economy through the proprietary Triple S methodology: Qualifying, Scaling, and Integration.'
                : 'يتم تحقيق النجاح في عالم الأعمال من خلال البراعة في تقديم المستمر والتطوير، والحفاظ عليه.'}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex items-center gap-10 mt-10">
              <button
                onClick={toggleMute}
                className="w-16 h-16 border border-[var(--accent-gold)]/50 flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-all rounded-full premium-shadow-gold pointer-events-auto"
                title={muted ? "Unmute Video" : "Mute Video"}
              >
                {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── 02. FOUNDER BIO: Standardization & No Clipping ── */}
      <section className="py-52 relative z-10 overflow-visible">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center overflow-visible">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant} className="flex flex-col gap-12">
              <div className="aspect-[4/5] overflow-hidden border border-[var(--border-color)] p-4 bg-white/5 relative group metallic-glow shadow-2xl">
                <img src="/media/home_founder.png" alt="Founder" className="w-full h-full object-cover grayscale transition-all duration-[3000ms] group-hover:grayscale-0 group-hover:scale-105" />
              </div>
              <motion.div variants={fadeUpVariant} className="p-12 glass-card bg-[var(--bg-primary)]/90 border border-[var(--accent-gold)]/40 max-w-xl shadow-[0_0_30px_rgba(201,169,98,0.15)] relative z-40 self-center lg:self-start -mt-20 lg:-mt-32 lg:-ml-12 lg:rtl:-mr-12">
                <Quote className="text-[var(--accent-gold)] mb-6" size={40} />
                <p className="text-2xl font-light italic leading-relaxed text-[var(--text-primary)]">
                  {lang === 'en' ? '"Legacy is not what we build, it is the systematic logic we leave for the future."' : '"الإرث ليس ما نبنيه، بل هو المنطق المنهجي الذي نتركه للمستقبل."'}
                </p>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="pt-20 overflow-visible">
              <motion.h2 variants={fadeUpVariant} className="section-title mb-10">
                {lang === 'en' ? <>Ghassan<br /><span className="gold-gradient-text italic">Farajallah</span></> : <>غسان<br /><span className="gold-gradient-text italic">فرج الله</span></>}
              </motion.h2>
              <motion.div variants={fadeUpVariant} className="space-y-10 text-2xl font-light opacity-50 leading-relaxed max-w-2xl overflow-visible">
                <p>{lang === 'en' ? "A pioneer in real estate tokenization with over two decades of enterprise sales leadership, structured into a single methodology: the Triple S." : "رائد في مجال توكن الملكية العقارية مع أكثر من عقدين من القيادة في مبيعات الشركات، مُكثَّفة في منهجية حصرية واحدة: الـ Triple S."}</p>
                <p>{lang === 'en' ? "His IP focuses on the sovereignty of the asset and the precision of the qualifying logic, ensuring that institutional growth is systematic and scalable." : "تركز ملكيته الفكرية على سيادة الأصل ودقة منطق التأهيل، مما يضمن أن النمو المؤسسي منهجي وقابل للتوسع بصورة مطلقة."}</p>
              </motion.div>

              {/* Action Frames: Unified Branding */}
              <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-10 mt-20">
                <Link to="/contact" className="group p-10 border border-[var(--border-color)] bg-[var(--bg-secondary)] relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:-translate-y-2">
                  <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <ShieldCheck className="text-[var(--accent-gold)] mb-8 scale-125" />
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-3">{lang === 'en' ? 'Institutional Trust' : 'الثقة المؤسسية'}</h4>
                  <p className="text-[10px] opacity-40 uppercase tracking-widest leading-none group-hover:opacity-100 transition-opacity">Keynote Case Study</p>
                </Link>
                <Link to="/solutions" className="group p-10 border border-[var(--border-color)] bg-[var(--bg-secondary)] relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:-translate-y-2">
                  <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <BookOpen className="text-[var(--accent-gold)] mb-8 scale-125" />
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-3">{lang === 'en' ? 'Mastery & Logic' : 'الإتقان والمنطق'}</h4>
                  <p className="text-[10px] opacity-40 uppercase tracking-widest leading-none group-hover:opacity-100 transition-opacity">Tokenization Protocol</p>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. THE TRIPLE S: Systematic IP ── */}
      <section className="py-52 bg-black/5 dark:bg-black/20 border-y border-[var(--border-color)] relative z-10 text-center overflow-visible">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 overflow-visible">
          <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.8em] mb-20 block">
            {lang === 'en' ? 'The Systematic Selling Strategy' : 'استراتيجية البيع المنهجي'}
          </motion.span>
          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border-color)] overflow-visible text-start">
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
        </motion.div>
      </section>

      {/* ── 04. LAUNCH PROTOCOL: Systematic Growth ── */}
      <section className="py-60 z-10 relative overflow-hidden text-center bg-black/40 border-t border-[var(--border-color)]">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-gold)]/5 blur-[120px] pointer-events-none rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[12px] font-black uppercase tracking-[1em] mb-8 block opacity-80 drop-shadow-[0_0_10px_rgba(201,169,98,0.5)]">
            {lang === 'en' ? 'Launch Protocol' : 'بروتوكول الإطلاق'}
          </motion.span>
          
          <motion.h2 variants={fadeUpVariant} className="font-black uppercase tracking-tighter italic mb-20 leading-[0.9]"
            style={{ fontSize: 'clamp(3rem,8vw,7rem)' }}>
            {lang === 'en'
              ? <>Scale the <span className="not-italic text-[var(--accent-gold)]">Legacy?</span></>
              : <>وسع <span className="not-italic text-[var(--accent-gold)]">الإرث؟</span></>}
          </motion.h2>

          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Action 1: Direct Protocol */}
            <Link to="/contact" 
               className="group flex flex-col items-center justify-center p-16 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-[0_0_40px_rgba(201,169,98,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Lock size={48} className="text-[var(--accent-gold)] mb-10 group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'Direct Protocol' : 'بروتوكول مباشر'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-10">{lang === 'en' ? 'Secure Engagement' : 'ارتباط آمن'}</p>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-500">
                <ArrowRight size={20} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </Link>

            {/* Action 2: Operational Solutions */}
            <Link to="/solutions" 
               className="group flex flex-col items-center justify-center p-16 border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-xl relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)] hover:shadow-[0_0_40px_rgba(201,169,98,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Layers size={48} className="text-[var(--accent-gold)] mb-10 group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{lang === 'en' ? 'The Solutions' : 'الحلول التشغيلية'}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-10">{lang === 'en' ? 'View Operational Tracks' : 'عرض مسارات العمل'}</p>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black group-hover:border-[var(--accent-gold)] transition-all duration-500">
                <ArrowRight size={20} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
