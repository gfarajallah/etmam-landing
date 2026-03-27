import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, BookOpen, Quote, Shield, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    { title: "Transparency", icon: <Shield className="text-gold" />, desc: "Unwavering commitment to clear, honest communication in complex financial structures." },
    { title: "Precision", icon: <Target className="text-gold" />, desc: "Meticulous technical and strategic execution tailored to enterprise-grade standards." },
    { title: "Innovation", icon: <Lightbulb className="text-gold" />, desc: "Pushing the boundaries of real estate through blockchain and tokenization." },
    { title: "Empowerment", icon: <Users className="text-gold" />, desc: "Building capacity through exclusive workshops and knowledge sharing." }
  ];

  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* Executive Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute inset-0 bg-gradient-to-l from-navy-900 via-navy-900 to-transparent z-10" />
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
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Executive Profile</span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] uppercase tracking-tighter">
              Legacy of <br /> <span className="gold-gradient-text italic">Precision.</span>
            </h1>
            <p className="text-2xl text-white/40 leading-relaxed font-light mb-12">
              Ghassan Farajallah is a recognized authority in real estate tokenization and institutional Web3 strategy, bridging the gap between traditional finance and the future of digital assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Vision (Storytelling) */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/10 premium-shadow p-2 bg-navy-800/50">
               <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1974" 
                alt="Ghassan Strategy Session" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 p-12 glass-card border-gold/30 max-w-sm premium-shadow">
               <Quote className="text-gold mb-6" size={40} />
               <p className="text-white font-medium italic text-lg leading-relaxed">
                 "In the transition to a tokenized economy, clarity is the only asset that truly matters."
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">Strategist. Founder. <br /><span className="text-gold">Visionary.</span></h2>
            <div className="space-y-10 text-white/50 text-xl leading-relaxed font-light">
              <p>
                With over a decade of high-stakes leadership in real estate and technology, Ghassan has pioneered frameworks that empower institutional investors to navigate the complexities of digital transformation.
              </p>
              <p>
                As the architect behind ETMAM and SmartBlocks, his focus remains steadfast: removing friction from capital flows and establishing institutional-grade standards for the global real estate market.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-10">
                 <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm group hover:border-gold/30 transition-all">
                    <ShieldCheck className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">Institutional Trust</h4>
                    <p className="text-xs">Expertise trusted by leading family offices and developers.</p>
                 </div>
                 <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm group hover:border-gold/30 transition-all">
                    <BookOpen className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">Thought Leadership</h4>
                    <p className="text-xs">Propagating the standard for Web3 real estate education.</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-navy-800 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Our Philosophy</span>
           <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter italic">The ETMAM <span className="not-italic text-gold">Standard.</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 glass-card border border-white/5 rounded-sm premium-shadow group"
            >
              <div className="mb-10 w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-all">{v.icon}</div>
              <h4 className="text-xl font-black mb-6 uppercase tracking-tight">{v.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 max-w-5xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <Quote className="text-gold/20 mx-auto mb-10" size={60} />
          <p className="text-3xl md:text-5xl font-light italic text-white/80 leading-tight mb-16">
            "We don't just build platforms; we build the trust and infrastructure required for the next generation of global capital movements."
          </p>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-10" />
          <h5 className="text-2xl font-black uppercase tracking-widest">Ghassan Farajallah</h5>
          <p className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mt-4">Executive Founder</p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
