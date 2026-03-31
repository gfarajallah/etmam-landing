import { useLanguage } from '@/context/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Zap,
  Quote,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Target,
  Layers,
  Award,
  Lock
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import PremiumButton from '@/components/ui/PremiumButton';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const About = () => {
  const { lang } = useLanguage();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (playing) videoRef.current.play().catch(() => setPlaying(false));
      else videoRef.current.pause();
      videoRef.current.muted = muted;
    }
  }, [playing, muted]);

  const togglePlay = () => setPlaying(!playing);
  const toggleMute = () => setMuted(!muted);

  const pillars = [
    {
      id: 'S1',
      title: lang === 'en' ? 'Systematic Qualifying' : 'التأهيل المنهجي',
      desc: lang === 'en'
        ? 'Proprietary IP for qualifying high-net-worth intent before the first exchange.'
        : 'ملكية فكرية حصرية لتأهيل نية المستثمرين ذوي الملاءة العالية قبل أول تواصل.',
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />
    },
    {
      id: 'S2',
      title: lang === 'en' ? 'Structured Scaling' : 'التوسع الهيكلي',
      desc: lang === 'en'
        ? 'The architectural logic of converting legacy property into programmable digital assets.'
        : 'المنطق الهندسي لتحويل العقارات التقليدية إلى أصول رقمية قابلة للبرمجة.',
      icon: <Target size={24} className="text-[var(--accent-gold)]" />
    },
    {
      id: 'S3',
      title: lang === 'en' ? 'Sovereign Closure' : 'الإغلاق السيادي',
      desc: lang === 'en'
        ? 'The final stage of the Triple S: Absolute governance through cryptographic truth.'
        : 'المرحلة النهائية من الـ Triple S: الحوكمة المطلقة من خلال الحقيقة التشفيرية.',
      icon: <Award size={24} className="text-[var(--accent-gold)]" />
    }
  ];

  return (
    <div className="pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 overflow-visible text-start">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO: The IP Ownership ── */}
      <section className="relative h-[95vh] flex items-center overflow-hidden z-20 border-b border-[var(--border-color)]">
        <div className="absolute inset-0 z-0 bg-white dark:bg-black group">
          <video
            ref={videoRef}
            src="/media/welcome_video.mp4"
            className="w-full h-full object-cover opacity-80 dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-[3000ms] will-change-transform transform-gpu"
            loop
            muted
            playsInline
            autoPlay
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-30 w-full flex">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.8em] mb-10 block">
              {lang === 'en' ? 'Proprietary IP // THE TRIPLE S' : 'ملكية فكرية حصرية // الـ TRIPLE S'}
            </motion.span>

            <motion.h1 variants={fadeUpVariant} className="display-title mb-10">
              {lang === 'en' ? <>Institutional<br /><span className="gold-gradient-text italic">Inheritance.</span></> : <>الميراث<br /><span className="gold-gradient-text italic">المؤسسي الرصين.</span></>}
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-[clamp(1.1rem,2vw,1.6rem)] font-light opacity-60 mb-16 leading-relaxed">
              {lang === 'en'
                ? 'Ghassan Farajallah engineers the elite frameworks for the transition to tokenized real estate assets through his proprietary Systematic Selling Strategy.'
                : 'يصمم غسان فرج الله الأطر النخبوية للانتقال إلى الأصول العقارية المرمزة من خلال استراتيجيته الحصرية للبيع المنهجي.'}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex items-center gap-10">
              <button
                onClick={togglePlay}
                className="w-20 h-20 border border-[var(--accent-gold)]/50 flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-all rounded-full scale-110 premium-shadow-gold"
              >
                {playing ? <Pause size={28} /> : <Play size={28} className="ps-1" />}
              </button>
              <button
                onClick={toggleMute}
                className="w-16 h-16 border border-white/20 flex items-center justify-center text-white/50 hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all rounded-full"
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

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant} className="overflow-visible">
              <div className="aspect-[4/5] overflow-hidden border border-[var(--border-color)] p-4 bg-white/5 relative group metallic-glow shadow-2xl">
                <img src="/media/home_founder.png" alt="Founder" className="w-full h-full object-cover grayscale transition-all duration-[3000ms] group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute -bottom-16 -end-16 p-12 glass-card bg-[var(--bg-primary)]/90 border border-[var(--accent-gold)]/40 max-w-sm shadow-[0_0_30px_rgba(201,169,98,0.1)] overflow-visible z-40">
                  <Quote className="text-[var(--accent-gold)] mb-6" size={40} />
                  <p className="text-xl font-light italic leading-relaxed text-[var(--text-primary)]">
                    {lang === 'en' ? '"Legacy is not what we build, it is the systematic logic we leave for the future."' : '"الإرث ليس ما نبنيه، بل هو المنطق المنهجي الذي نتركه للمستقبل."'}
                  </p>
                </div>
              </div>
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

      {/* ── 04. FINAL CALL: Systematic Growth ── */}
      <section className="py-60 z-10 relative text-center overflow-visible">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFadeUpVariant} className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="section-title italic mb-16 px-4">
            {lang === 'en' ? <>Ready to <span className="not-italic text-[var(--accent-gold)]">Scale?</span></> : <>جاهز <span className="not-italic text-[var(--accent-gold)]">للتوسع؟</span></>}
          </h2>
          <PremiumButton to="/contact" scale="scale-125 hover:scale-[1.35]">
            {lang === 'en' ? 'INITIATE THE PROTOCOL' : 'بدء البروتوكول الحصري'}
          </PremiumButton>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
