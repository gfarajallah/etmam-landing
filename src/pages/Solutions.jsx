import { useLanguage } from '@/context/useLanguage';
import EcosystemCore from '@/components/interactive/EcosystemCore';
import { motion } from 'framer-motion';
import { Globe, Cpu, Bot } from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { fadeUpVariant, slowFadeUpVariant, staggerContainer } from '@/lib/animations';

const Solutions = () => {
  const { lang } = useLanguage();

  const tracks = [
    {
      id: "etmam",
      number: "01",
      title: lang === 'en' ? "ETMAM Consultancy" : "إتمام للاستشارات",
      subtitle: lang === 'en' ? "STRATEGIC ADVISORY" : "استشارات استراتيجية",
      desc: lang === 'en' 
        ? "Engineering the legal and regulatory architecture for monumental digital asset transitions. We bridge legacy real estate with future-ready liquidity."
        : "هندسة العمارة القانونية والتنظيمية لتحولات الأصول الرقمية الضخمة. نحن نجسر العقارات التقليدية مع السيولة الجاهزة للمستقبل.",
      icon: <Globe size={48} />,
      link: "/solutions/etmam",
      color: "rgba(59, 130, 246, 0.5)",
      bgImage: "/media/final_blade_consultancy.jpg"
    },
    {
      id: "smart-blocks",
      number: "02",
      title: lang === 'en' ? "SmartBlocks Engine" : "محرك سمارت بلوكس",
      subtitle: lang === 'en' ? "TOKENIZATION CORE" : "نواة الترميز",
      desc: lang === 'en' 
        ? "The definitive high-performance infrastructure for institutional asset settlement. Fractionalizing the world's most valuable assets at scale."
        : "البنية التحتية النهائية عالية الأداء لتسوية الأصول المؤسسية. تجزئة أغلى أصول العالم على نطاق واسع.",
      icon: <Cpu size={48} />,
      link: "/solutions/smartblocks",
      color: "rgba(201, 169, 98, 0.5)",
      bgImage: "/media/final_blade_smartblocks.jpg"
    },
    {
      id: "smart-agent",
      number: "03",
      title: lang === 'en' ? "SmartAgent AI" : "ذكاء سمارتي إيجنتس",
      subtitle: lang === 'en' ? "NEURAL INTELLIGENCE" : "الذكاء العصبي",
      desc: lang === 'en' 
        ? "Computational supremacy applied to real estate market data. Predictive matching and autonomous deal qualification for the elite."
        : "التفوق الحسابي المطبق على بيانات سوق العقارات. المطابقة التنبؤية وتأهيل الصفقات المستقل للنخبة.",
      icon: <Bot size={48} />,
      link: "/solutions/smartagent",
      color: "rgba(34, 211, 238, 0.5)",
      bgImage: "/media/final_blade_smartagent.png"
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 overflow-x-hidden">
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none z-50" />

      {/* ── 01. HERO: The High-Authority Opening ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10 border-b border-[var(--border-color)]">
        {/* Background Dashboard Image - Global Interactive Theme */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none group">
          <img 
            src="/media/solutions_hero_dashboard.jpg" 
            alt="Solutions Dashboard Concept" 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 grayscale brightness-[0.6] mix-blend-screen scale-105 group-hover:scale-100 group-hover:grayscale-0 group-hover:opacity-50 group-hover:brightness-[0.8] transition-all duration-[3000ms] ease-out"
          />
          {/* Institutional Gradients ensuring seamless blend to background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.span variants={fadeUpVariant} className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[1em] mb-12 block drop-shadow-md">
              {lang === 'en' ? 'Institutional Framework' : 'الإطار المؤسسي'}
            </motion.span>
            
            <TextReveal 
              text={lang === 'en' ? 'TRIPLE-TRACK SOLUTIONS.' : 'حلول المسارات الثلاثة.'}
              className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] mb-12"
            />
            
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-[var(--text-primary)] opacity-60 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-xl">
              {lang === 'en' 
                ? 'The definitive convergence of regulatory intelligence, tokenization infrastructure, and neural AI.'
                : 'التقارب النهائي بين الذكاء التنظيمي، وبنية الترميز التحتية، والذكاء الاصطناعي العصبي.'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 02. THE BLADE SYSTEM: Interactive Shards ── */}
      <section className="relative h-screen md:h-[80vh] w-full z-20 flex flex-col md:flex-row overflow-hidden border-y border-[var(--border-color)]">
        {tracks.map((track) => (
          <motion.div
            key={track.id}
            initial={{ flex: 1 }}
            whileHover={{ flex: 2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="group relative flex-1 min-w-0 border-b md:border-b-0 md:border-e border-[var(--border-color)] last:border-0 overflow-hidden cursor-pointer"
          >
            {/* Background Image with Deep Overlay */}
            <div className="absolute inset-0 z-0 bg-black">
              {track.bgImage && (
                <img 
                  src={track.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-[6000ms] ease-out grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.7]" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/50 opacity-90" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply" />
            </div>

            {/* Accent Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 z-10"
              style={{ background: `radial-gradient(circle at center, ${track.color}, transparent 70%)` }}
            />

            {/* Blade Content */}
            <div className="relative z-20 h-full flex flex-col justify-between p-12 md:p-20">
              {/* Top: Track Identifier */}
              <div className="flex justify-between items-start">
                <span className="text-5xl md:text-8xl font-black opacity-10 group-hover:opacity-30 group-hover:text-[var(--accent-gold)] transition-all duration-700 tracking-tighter">
                  {track.number}
                </span>
                <div className="p-4 border border-white/10 rounded-full group-hover:border-[var(--accent-gold)] transition-colors duration-700 group-hover:text-[var(--accent-gold)]">
                  {track.icon}
                </div>
              </div>

              {/* Middle: Title & Subtitle */}
              <div>
                <h4 className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {track.subtitle}
                </h4>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                  {track.title}
                </h2>
                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-60 transition-all duration-700 overflow-hidden">
                  <p className="text-lg md:text-xl font-light leading-relaxed max-w-md pb-10">
                    {track.desc}
                  </p>
                </div>
              </div>

              {/* Bottom: Action */}
              <div className="opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
                <Magnetic strength={0.3}>
                  <PremiumButton to={track.link} className="w-fit">
                    {lang === 'en' ? 'ENTER THE TRACK' : 'دخول المسار'}
                  </PremiumButton>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── 03. SYNERGY: The Collective Execution ── */}
      <section className="py-60 relative overflow-hidden z-10 bg-[var(--bg-secondary)]/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-at-c from-[var(--accent-gold)]/5 to-transparent blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-start">
              <motion.div variants={fadeUpVariant} className="flex gap-4 mb-12">
                <Globe className="text-blue-400" size={32} />
                <Cpu className="text-[var(--accent-gold)]" size={32} />
                <Bot className="text-cyan-400" size={32} />
              </motion.div>
              
              <TextReveal 
                text={lang === 'en' ? 'Ecosystem Integrity.' : 'تكامل النظام الشامل.'}
                className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-12"
              />
              
              <motion.p variants={fadeUpVariant} className="text-2xl font-light opacity-40 mb-16 leading-relaxed max-w-xl">
                {lang === 'en'
                  ? 'Each track operates as a specialized node, yet they converge in the ETMAM Execution Engine to create absolute market superiority.'
                  : 'يعمل كل مسار كعقدة متخصصة، ومع ذلك فإنها تلتقي في محرك تنفيذ إتمام لخلق تفوق سوقي مطلق.'}
              </motion.p>
              
              <motion.div variants={fadeUpVariant}>
                <Magnetic>
                  <PremiumButton to="/contact" scale="scale-110">
                    {lang === 'en' ? 'INITIATE PARTNER PROTOCOL' : 'بدء بروتوكول الشراكة'}
                  </PremiumButton>
                </Magnetic>
              </motion.div>
            </motion.div>
            <motion.div variants={slowFadeUpVariant} className="relative flex justify-center py-10 lg:py-0">
              <EcosystemCore />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
