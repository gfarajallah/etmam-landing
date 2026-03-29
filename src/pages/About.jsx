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

const About = () => {
  const { lang } = useLanguage();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // Sync video state on mount or re-render
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
      title: lang === 'en' ? 'Systematic Selling' : 'البيع المنهجي',
      desc: lang === 'en'
        ? 'A structured framework that replaces guesswork with data-driven precision at every stage of the real estate cycle.'
        : 'إطار عمل مهيكل يستبدل التخمين بالدقة القائمة على البيانات في كل مرحلة من مراحل الدورة العقارية.',
      icon: <Layers size={24} className="text-[var(--accent-gold)]" />
    },
    {
      id: 'S2',
      title: lang === 'en' ? 'Scalable Assets' : 'أصول قابلة للتوسع',
      desc: lang === 'en'
        ? 'Transitioning legacy property into modular, liquid, and programmable digital tokens for global capital access.'
        : 'تحويل العقارات التقليدية إلى رموز رقمية معيارية وسائلة وقابلة للبرمجة للوصول إلى رأس المال العالمي.',
      icon: <Target size={24} className="text-[var(--accent-gold)]" />
    },
    {
      id: 'S3',
      title: lang === 'en' ? 'Sovereign Growth' : 'النمو السيادي',
      desc: lang === 'en'
        ? 'Absolute governance over your enterprise legacy, backed by the immutable truth of blockchain infrastructure.'
        : 'حوكمة مطلقة لإرثك المؤسسي، مدعومة بالحقيقة غير القابلة للتغيير للبنية التحتية للبلوكشين.',
      icon: <Award size={24} className="text-[var(--accent-gold)]" />
    }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO: The Triple S Methodology ── */}
      <section className="relative h-[90vh] flex items-center overflow-hidden z-20 border-b border-[var(--border-color)]">
        {/* Cinematic Video Backdrop */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            ref={videoRef}
            src="/media/welcome_video.mp4"
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
            loop
            muted
            playsInline
            autoPlay
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/40" />
        </div>

        <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-30 w-full ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <span className="text-[var(--accent-gold)] text-[11px] font-black uppercase tracking-[0.8em] mb-12 block">
                {lang === 'en' ? 'The Methodology // Triple S' : 'المنهجية // الـ Triple S'}
            </span>
            <h1 className={`font-black uppercase tracking-tighter mb-10 leading-[0.9] ${lang === 'ar' ? 'font-arabic' : ''}`}
               style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
              {lang === 'en' ? <>Institutional<br /><span className="gold-gradient-text italic">Inheritance.</span></> : <>الميراث<br /><span className="gold-gradient-text italic">المؤسسي الرصين.</span></>}
            </h1>
            <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-light opacity-50 max-w-3xl mb-16 leading-relaxed">
              {lang === 'en' 
                ? 'Ghassan Farajallah engineers the elite frameworks for the transition to tokenized real estate assets.'
                : 'يصمم غسان فرج الله الأطر النخبوية للانتقال إلى الأصول العقارية المرمزة.'}
            </p>

            {/* Video Controls */}
            <div className={`flex items-center gap-6 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <button 
                onClick={togglePlay}
                className="w-16 h-16 border border-[var(--accent-gold)]/40 flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-all group rounded-full"
              >
                {playing ? <Pause size={24} /> : <Play size={24} className={lang === 'en' ? 'ml-1' : 'mr-1'} />}
              </button>
              <button 
                onClick={toggleMute}
                className="w-16 h-16 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all rounded-full"
              >
                {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. FOUNDER ── */}
      <section className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ${lang === 'ar' ? 'direction-rtl' : ''}`}>
            
            <motion.div initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="aspect-[4/5] overflow-hidden border border-[var(--border-color)] p-2 bg-white/5 relative group metallic-glow">
                <img src="/media/home_founder.png" alt="Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]" />
                <div className={`absolute -bottom-12 ${lang === 'ar' ? '-left-12' : '-right-12'} p-10 glass-card bg-[var(--bg-primary)]/80 border border-[var(--accent-gold)]/30 max-w-xs shadow-2xl`}>
                  <Quote className="text-[var(--accent-gold)] mb-4" size={32} />
                  <p className="text-sm font-light italic leading-relaxed opacity-60">
                    {lang === 'en' ? '"Legacy isn\'t what you build, it\'s the systems you leave behind."' : '"الإرث ليس ما تبنيه، بل الأنظمة التي تتركها خلفك."'}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} className={lang === 'ar' ? 'text-right' : 'text-left'}>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
                {lang === 'en' ? <>Ghassan<br /><span className="gold-gradient-text italic">Farajallah</span></> : <>غسان<br /><span className="gold-gradient-text italic">فرج الله</span></>}
              </h2>
              <div className="space-y-8 text-xl font-light opacity-50 leading-relaxed mb-16">
                 <p>{lang === 'en' ? "A pioneer in real estate tokenization with over two decades of enterprise sales leadership, structured into a single methodology: the Triple S." : "رائد في مجال توكن العقارات مع أكثر من عقدين من القيادة، مُكثَّفة في منهجية حصرية واحدة: الـ Triple S."}</p>
                 <p>{lang === 'en' ? "Scaling high-net-worth real estate is no longer about the sales pitch — it's about the sovereignty of the asset and the precision of the logic." : "توسيع العقارات ذات القيمة العالية لم يعد يتعلق بعرض المبيعات — بل يتعلق بسيادة الأصل ودقة المنطق."}</p>
              </div>

              {/* Action Frames */}
              <div className="grid grid-cols-2 gap-6">
                 <Link to="/contact" className="group p-8 border border-[var(--border-color)] bg-white/5 relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)]/40">
                   <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <ShieldCheck className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="text-[9px] font-black uppercase tracking-[0.4em] mb-2">{lang === 'en' ? 'Institutional Trust' : 'الثقة المؤسسية'}</h4>
                   <p className="text-[10px] opacity-40 uppercase tracking-widest leading-none group-hover:opacity-100 transition-opacity">Keynote Case Study</p>
                 </Link>
                 <Link to="/solutions" className="group p-8 border border-[var(--border-color)] bg-white/5 relative overflow-hidden transition-all duration-700 hover:border-[var(--accent-gold)]/40">
                    <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <BookOpen className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-[9px] font-black uppercase tracking-[0.4em] mb-2">{lang === 'en' ? 'Mastery & Logic' : 'الإتقان والمنطق'}</h4>
                    <p className="text-[10px] opacity-40 uppercase tracking-widest leading-none group-hover:opacity-100 transition-opacity">Tokenization Protocol</p>
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. PILLARS GRID ── */}
      <section className="py-40 bg-black/10 border-y border-[var(--border-color)] relative z-10 text-center">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border-color)]">
            {pillars.map((p, i) => (
              <div key={i} className="group p-16 md:p-24 border-r last:border-r-0 border-b md:border-b-0 border-[var(--border-color)] hover:bg-[var(--accent-gold)]/[0.03] transition-all duration-700">
                 <div className="mb-10 w-16 h-16 border border-[var(--border-color)] flex items-center justify-center mx-auto group-hover:border-[var(--accent-gold)] group-hover:scale-110 transition-all">
                    {p.icon}
                 </div>
                 <h4 className="text-[9px] font-black text-[var(--accent-gold)] uppercase tracking-[0.6em] mb-4 opacity-50">{p.id}</h4>
                 <h3 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors">{p.title}</h3>
                 <p className="opacity-40 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── 04. FINAL CTA ── */}
      <section className="py-60 z-10 relative text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic mb-12">
               {lang === 'en' ? <>Ready to <span className="not-italic text-[var(--accent-gold)]">Ascend?</span></> : <>جاهز <span className="not-italic text-[var(--accent-gold)]">للالتقاء؟</span></>}
            </h2>
            <Link to="/contact" className="btn-premium px-16 py-8 shadow-gold/20 scale-110">
               {lang === 'en' ? 'INITIATE PROTOCOL' : 'بدء البروتوكول'}
            </Link>
         </div>
      </section>
    </div>
  );
};

export default About;
