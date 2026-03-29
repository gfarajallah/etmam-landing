import { useLanguage } from '@/context/useLanguage';
import ParallaxHero from '@/components/interactive/ParallaxHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Target, Lightbulb, Users, Quote, ShieldCheck, BookOpen, ArrowRight, Zap, BarChart4, Lock } from 'lucide-react';
import { useRef, useState } from 'react';

const About = () => {
  const { lang } = useLanguage();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const pillars = [
    {
      label: 'S1',
      title: lang === 'en' ? 'Systematic' : 'منهجي',
      desc: lang === 'en'
        ? 'A structured, repeatable framework that removes guesswork and replaces it with data-driven precision at every stage.'
        : 'إطار منهجي قابل للتكرار يزيل العشوائية ويستبدلها بدقة مدفوعة بالبيانات في كل مرحلة.',
      icon: <BarChart4 size={22} className="text-[var(--accent-gold)]" />,
    },
    {
      label: 'S2',
      title: lang === 'en' ? 'Selling' : 'مبيعات',
      desc: lang === 'en'
        ? 'Modern sales architecture built on behavioral psychology — who speaks less, sells more. The era of the script is over.'
        : 'هندسة مبيعات حديثة مبنية على علم النفس السلوكي — من يتكلم أقل يبيع أكثر. عصر السكريبت انتهى.',
      icon: <Zap size={22} className="text-[var(--accent-gold)]" />,
    },
    {
      label: 'S3',
      title: lang === 'en' ? 'Strategy' : 'استراتيجية',
      desc: lang === 'en'
        ? 'End-to-end pipeline architecture: from ICP to closed deal, built through experience — not from a playbook written in 1999.'
        : 'هندسة بايبلاين شاملة من تحديد العميل المثالي إلى إغلاق الصفقة، مبنية من التجربة لا من كتاب قديم.',
      icon: <Lock size={22} className="text-[var(--accent-gold)]" />,
    },
  ];

  const values = [
    {
      title: lang === 'en' ? 'Transparency' : 'الشفافية',
      icon: <Shield className="text-[var(--accent-gold)]" size={24} />,
      desc: lang === 'en'
        ? 'Unwavering commitment to clear, honest communication in complex financial structures.'
        : 'التزام راسخ بالتواصل الواضح والصادق في الهياكل المالية المعقدة.',
    },
    {
      title: lang === 'en' ? 'Precision' : 'الدقة',
      icon: <Target className="text-[var(--accent-gold)]" size={24} />,
      desc: lang === 'en'
        ? 'Meticulous technical and strategic execution tailored to enterprise-grade standards.'
        : 'تنفيذ تقني واستراتيجي دقيق مصمم وفقاً لمعايير الدرجة المؤسسية.',
    },
    {
      title: lang === 'en' ? 'Innovation' : 'الابتكار',
      icon: <Lightbulb className="text-[var(--accent-gold)]" size={24} />,
      desc: lang === 'en'
        ? 'Pushing the boundaries of real estate through blockchain and tokenization.'
        : 'دفع حدود العقارات من خلال تقنية البلوكشين والترميز.',
    },
    {
      title: lang === 'en' ? 'Empowerment' : 'التمكين',
      icon: <Users className="text-[var(--accent-gold)]" size={24} />,
      desc: lang === 'en'
        ? 'Building capacity through exclusive workshops and knowledge sharing.'
        : 'بناء القدرات من خلال ورش العمل الحصرية ومشاركة المعرفة.',
    },
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* ── 01. HERO: Triple S ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        {/* Background video */}
        <div className="absolute inset-0 z-0 group">
          <video
            ref={videoRef}
            src="/media/welcome_video.mp4"
            autoPlay
            loop
            muted={muted}
            playsInline
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-[1500ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent" />
        </div>

        {/* Video controls */}
        <div className={`absolute bottom-10 z-30 flex gap-4 ${lang === 'ar' ? 'right-10' : 'left-10'}`}>
          <button onClick={togglePlay}
            className="w-12 h-12 border border-[var(--border-color)] bg-[var(--bg-primary)]/60 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 text-sm font-black">
            {playing ? '⏸' : '▶'}
          </button>
          <button onClick={toggleMute}
            className="w-12 h-12 border border-[var(--border-color)] bg-[var(--bg-primary)]/60 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 text-sm font-black">
            {muted ? '🔇' : '🔊'}
          </button>
        </div>

        {/* Hero content */}
        <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className={`flex items-center gap-4 mb-10 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-10 h-[1px] bg-[var(--accent-gold)]/60" />
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em]">
                {lang === 'en' ? 'Proprietary IP' : 'ملكية فكرية حصرية'}
              </span>
            </div>

            <h1 className={`font-black uppercase leading-[0.88] tracking-tighter mb-6 ${lang === 'ar' ? 'font-arabic' : ''}`}
              style={{ fontSize: 'clamp(4rem, 14vw, 12rem)' }}>
              <span className="gold-gradient-text">TRIPLE</span><br />
              <span>"S"</span>
            </h1>

            <p className="text-[clamp(0.9rem,2.5vw,1.5rem)] font-light opacity-60 max-w-2xl mb-4 leading-relaxed">
              {lang === 'en'
                ? 'Systematic Selling Strategy — the modern sales methodology that turned the industry upside down.'
                : 'استراتيجية البيع المنهجية — المنهجية العصرية التي قلبت صناعة المبيعات رأساً على عقب.'}
            </p>

            <p className="text-[clamp(0.75rem,1.5vw,1rem)] font-black uppercase tracking-[0.4em] opacity-30 mb-16">
              {lang === 'en' ? 'Ghassan Farajallah · Legacy of Precision' : 'غسان فرج الله · إرث الدقة'}
            </p>

            <Link to="/contact" className="btn-premium">
              {lang === 'en' ? 'Explore the Methodology' : 'استكشف المنهجية'}
              <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 02. Founder Portrait + Quote ── */}
      <section className="py-40 z-10 relative border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ${lang === 'ar' ? 'direction-rtl' : ''}`}>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: lang === 'ar' ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/5] rounded-sm overflow-hidden border border-[var(--border-color)] premium-card p-4 bg-[var(--bg-primary)]/50 metallic-glow group relative cursor-pointer">
                <img
                  src="/media/home_founder.png"
                  alt="Ghassan Farajallah - Visionary Profile"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating quote card */}
              <div className={`absolute -bottom-16 ${lang === 'ar' ? '-left-16' : '-right-16'} p-10 glass-card border-[var(--accent-gold)]/30 max-w-xs premium-shadow backdrop-blur-3xl bg-[var(--bg-primary)]/80`}>
                <Quote className="text-[var(--accent-gold)]/40 mb-4" size={36} />
                <p className={`text-sm font-light leading-relaxed ${lang === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {lang === 'en'
                    ? '"Today, whoever speaks less — sells more."'
                    : '"اليوم من يتكلم أقل يبيع أكثر."'}
                </p>
                <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-widest block mt-4 opacity-70">
                  — {lang === 'en' ? 'Ghassan Farajallah' : 'غسان فرج الله'}
                </span>
              </div>
            </motion.div>

            {/* Bio + Trust Cards */}
            <motion.div
              initial={{ opacity: 0, x: lang === 'ar' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`pt-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
                {lang === 'en' ? 'Founder & Visionary' : 'المؤسس والمبتكر'}
              </span>
              <h2 className={`font-black uppercase tracking-tighter mb-10 leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}
                style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
                {lang === 'en' ? <>Ghassan<br /><span className="gold-gradient-text italic">Farajallah</span></> : <>غسان<br /><span className="gold-gradient-text italic">فرج الله</span></>}
              </h2>

              <p className="text-[clamp(0.85rem,1.5vw,1.1rem)] font-light opacity-50 leading-relaxed mb-6">
                {lang === 'en'
                  ? 'A pioneer in real estate tokenization across the MENA region. Over two decades of enterprise sales leadership, structured into a single proprietary methodology: the Triple S.'
                  : 'رائد في مجال توكنة العقارات في منطقة الشرق الأوسط وشمال أفريقيا. أكثر من عقدين من القيادة في مبيعات الشركات، مُكثَّفة في منهجية حصرية واحدة: الـ Triple S.'}
              </p>
              <p className="text-[clamp(0.85rem,1.5vw,1.1rem)] font-light opacity-50 leading-relaxed mb-16">
                {lang === 'en'
                  ? 'His insight is simple but profound: the modern client knows more than the sales team. The solution is not more talk — it is a system that listens, qualifies, and closes with surgical efficiency.'
                  : 'رؤيته بسيطة لكنها عميقة: العميل اليوم يعرف أكثر من فريق المبيعات. الحل ليس المزيد من الكلام — بل نظام يستمع ويؤهّل ويُغلق بكفاءة جراحية.'}
              </p>

              {/* Trust cards with real photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Link to="/contact" className="p-10 premium-card group border-[var(--border-color)] bg-[var(--text-primary)]/[0.02] block relative overflow-hidden transition-all duration-700">
                  <div className="absolute inset-0 opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 z-0">
                    <img src="/media/ghassan_keynote.jpg" alt="Keynote" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-[var(--bg-primary)]/80 group-hover:bg-[var(--bg-primary)]/50 transition-all duration-700 z-[1]" />
                  <div className="relative z-10 flex flex-col h-full">
                    <ShieldCheck className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="font-black uppercase tracking-widest text-xs mb-3 group-hover:text-[var(--accent-gold)] transition-colors duration-500">
                      {lang === 'en' ? 'Institutional Trust' : 'الثقة المؤسسية'}
                    </h4>
                    <p className="text-xs opacity-60 flex-1">
                      {lang === 'en'
                        ? 'Expertise trusted by leading family offices and developers across the MENA region.'
                        : 'خبرة موثوقة من كبار المكاتب العائلية والمطورين في منطقة الشرق الأوسط وشمال أفريقيا.'}
                    </p>
                  </div>
                </Link>

                <div className="p-10 premium-card group border-[var(--border-color)] bg-[var(--text-primary)]/[0.02] relative overflow-hidden transition-all duration-700 cursor-default">
                  <div className="absolute inset-0 opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 z-0">
                    <img src="/media/khalifa_award.png" alt="Excellence Award" className="w-full h-full object-cover scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-[var(--bg-primary)]/80 group-hover:bg-[var(--bg-primary)]/50 transition-all duration-700 z-[1]" />
                  <div className="relative z-10 flex flex-col h-full">
                    <BookOpen className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="font-black uppercase tracking-widest text-xs mb-3 group-hover:text-[var(--accent-gold)] transition-colors duration-500">
                      {lang === 'en' ? 'Mastery & Logic' : 'الإتقان والمنطق'}
                    </h4>
                    <p className="text-xs opacity-60 flex-1">
                      {lang === 'en'
                        ? 'Defining the standard for high-stakes Web3 real estate education and governance.'
                        : 'تحديد معايير التعليم والحوكمة في مشاريع الـ Web3 العقارية عالية المخاطر.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. Triple S Methodology ── */}
      <section className="py-40 z-10 relative border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`mb-24 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
              {lang === 'en' ? 'The Methodology' : 'المنهجية'}
            </span>
            <h2 className={`font-black uppercase tracking-tighter italic ${lang === 'ar' ? 'font-arabic' : ''}`}
              style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
              {lang === 'en' ? <>The <span className="gold-gradient-text not-italic">Triple S</span> System</> : <>نظام <span className="gold-gradient-text not-italic">Triple S</span></>}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border-color)]">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`group relative p-16 overflow-hidden border-[var(--border-color)] md:border-r last:border-r-0 cursor-default transition-all duration-700 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  style={{ minHeight: '380px' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,98,0.5)' }} />
                  <div className="absolute inset-0 bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 pointer-events-none" />
                  {/* Pulse dot */}
                  <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-[var(--accent-gold)] opacity-60 animate-pulse" />
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="text-[var(--accent-gold)] font-black text-5xl mb-6 block opacity-20 select-none">{p.label}</span>
                    <div className="mb-8 w-14 h-14 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors duration-500 group-hover:scale-110 transform">
                      {p.icon}
                    </div>
                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{p.title}</h4>
                    <p className="opacity-40 text-sm leading-relaxed font-light flex-1">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA strip */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-24 flex flex-col sm:flex-row items-center justify-between gap-8 p-12 border border-[var(--border-color)] bg-[var(--accent-gold)]/5 backdrop-blur-sm">
            <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
              <h3 className={`text-2xl font-black uppercase tracking-tighter mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? 'Ready to deploy the Triple S?' : 'هل أنت مستعد لتطبيق الـ Triple S؟'}
              </h3>
              <p className="text-sm opacity-40 font-light">
                {lang === 'en' ? 'Book a strategy session with Ghassan — limited seats.' : 'احجز جلسة استراتيجية مع غسان — أماكن محدودة.'}
              </p>
            </div>
            <Link to="/contact" className="btn-premium shrink-0">
              {lang === 'en' ? 'Book a Session' : 'احجز جلسة'}
              <ArrowRight size={16} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 04. Values Grid ── */}
      <section className="py-40 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`mb-24 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
              {lang === 'en' ? 'Core DNA' : 'الحمض النووي الأساسي'}
            </span>
            <h2 className={`font-black uppercase tracking-tighter italic ${lang === 'ar' ? 'font-arabic' : ''}`}
              style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
              {lang === 'en' ? <>Etmam's <span className="gold-gradient-text not-italic">Pillars.</span></> : <>ركائز <span className="gold-gradient-text not-italic">إتمام.</span></>}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--border-color)]">
            {values.map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className={`group relative p-12 overflow-hidden border-[var(--border-color)] border-r last:border-r-0 cursor-default transition-all duration-700 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  style={{ minHeight: '280px' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,98,0.5)' }} />
                  <div className="absolute inset-0 bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/5 transition-all duration-700 pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8 w-14 h-14 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors duration-500 group-hover:scale-110 transform">
                      {v.icon}
                    </div>
                    <h4 className="text-lg font-black mb-4 uppercase tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">{v.title}</h4>
                    <p className="opacity-40 text-xs leading-relaxed font-light flex-1">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
