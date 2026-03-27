import { motion } from 'framer-motion';
import { Target, Shield, Lightbulb, Users, Quote, ShieldCheck, BookOpen, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    { title: "Transparency", icon: <Shield className="text-gold" size={24} />, desc: "Unwavering commitment to clear, honest communication in complex financial structures." },
    { title: "Precision", icon: <Target className="text-gold" size={24} />, desc: "Meticulous technical and strategic execution tailored to enterprise-grade standards." },
    { title: "Innovation", icon: <Lightbulb className="text-gold" size={24} />, desc: "Pushing the boundaries of real estate through blockchain and tokenization." },
    { title: "Empowerment", icon: <Users className="text-gold" size={24} />, desc: "Building capacity through exclusive workshops and knowledge sharing." }
  ];

  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />

      {/* 01. Portfolio Hero (Rhythm: Deep Theme) */}
      <section className="relative py-40 md:py-60 overflow-hidden theme-navy-deep">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-navy-900 via-navy-900/60 to-transparent z-10" />
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
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="w-10 h-[1px] bg-gold/50" />
               <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em]">Visionary Profile</span>
            </div>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black mb-10 leading-[0.85] uppercase tracking-tighter">
              Legacy of <br /> <span className="gold-gradient-text italic">Precision.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/30 leading-relaxed font-light mb-16 max-w-2xl">
              Ghassan Farajallah is a recognized authority in real estate tokenization, bridging the gap between traditional finance and the future of digital assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. The Vision (Rhythm: Slate Theme) */}
      <section className="py-52 theme-navy-slate relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5 premium-card p-3 bg-navy-800/50 metallic-glow">
               <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1974" 
                alt="Ghassan Strategy Session" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 p-16 glass-card border-gold/30 max-w-sm premium-shadow backdrop-blur-3xl">
               <Quote className="text-gold/40 mb-8" size={48} />
               <p className="text-white text-xl leading-relaxed italic font-medium">
                 "In the transition to a tokenized economy, clarity is the only asset that truly matters."
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter leading-[0.9]">Strategist. <br /><span className="text-gold italic">Visionary.</span></h2>
            <div className="space-y-12 text-white/40 text-xl leading-relaxed font-light">
              <p>
                As the executive architect behind ETMAM, Ghassan has pioneered frameworks that empower institutional investors to navigate the complexities of digital transformation with absolute confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10">
                 <div className="p-10 premium-card group">
                    <ShieldCheck className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3">Institutional Trust</h4>
                    <p className="text-xs text-white/20">Expertise trusted by leading family offices and developers across the MENA region.</p>
                 </div>
                 <div className="p-10 premium-card group">
                    <BookOpen className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3">Mastery & Logic</h4>
                    <p className="text-xs text-white/20">Defining the standard for high-stakes Web3 real estate education and governance.</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. The ETMAM Standard (Rhythm: Gold Theme) */}
      <section className="py-60 theme-navy-gold">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-32">
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.8em] mb-10 block">Our Philosophy</span>
           <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter italic">The ETMAM <span className="not-italic text-gold">Standard.</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 premium-card group"
            >
              <div className="mb-10 w-16 h-16 bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-700">
                {v.icon}
              </div>
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{v.title}</h4>
              <p className="text-white/30 text-sm leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 04. Call to Executive Action */}
      <section className="py-60 theme-navy-deep relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter italic leading-none">Ready to <br /><span className="text-gold not-italic">Execute?</span></h2>
            <p className="text-2xl text-white/30 mb-16 font-light">Join the movement defining the future of digital real estate assets.</p>
            <Link to="/contact" className="btn-premium">
               Initiate Protocol <ArrowRight size={18} className="inline ml-3" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
