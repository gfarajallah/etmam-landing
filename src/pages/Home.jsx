import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, PlayCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Years of Leadership', value: '10+', icon: <Award className="text-gold" /> },
    { label: 'Professionals Trained', value: '500+', icon: <Users className="text-gold" /> },
    { label: 'Asset Value Tokenized', value: '$1B+', icon: <TrendingUp className="text-gold" /> },
  ];

  const corePillars = [
    {
      title: "Executive Consulting",
      description: "Strategic advisory for real estate enterprises transitioning to digital assets and blockchain efficiency.",
      link: "/services",
      role: "ETMAM Engine"
    },
    {
      title: "Web3 Venturing",
      description: "Building the future of finance. Flagship projects like SmartBlocks defining the tokenization standard.",
      link: "/ventures",
      role: "Visionary Builder"
    }
  ];

  return (
    <div className="bg-navy-900 text-white overflow-hidden selection:bg-gold/40">
      {/* Global Grain Texture */}
      <div className="fixed inset-0 z-50 bg-grain pointer-events-none opacity-[0.03]" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Cinematic Backdrop & Spotlights */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/40 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
          
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="High-end Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-10 bg-gold/10"
            >
              <ShieldCheck size={14} /> Executive Leadership
            </motion.span>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
              Clarity Makes <br /> 
              <span className="gold-gradient-text italic font-black">The Difference.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-lg mb-12 leading-relaxed font-light">
              Redefining the real estate ecosystem through the lens of tokenization and strategic authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="px-10 py-5 bg-gold text-navy-900 font-black uppercase tracking-[0.2em] text-xs hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group premium-shadow">
                Work with ETMAM <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="px-10 py-5 border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3">
                Watch Vision <PlayCircle size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 p-2 bg-navy-800/50 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
                alt="Ghassan Farajallah" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card border-gold/30">
                <p className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-2">Founder & CEO</p>
                <h3 className="text-2xl font-black uppercase tracking-tight">Ghassan Farajallah</h3>
              </div>
            </div>
            {/* Cinematic layered borders */}
            <div className="absolute -top-10 -right-10 w-48 h-48 border-t-[1px] border-r-[1px] border-gold/20" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border-b-[1px] border-l-[1px] border-gold/20" />
            <div className="absolute -top-5 -right-5 w-24 h-24 border-t-[0.5px] border-r-[0.5px] border-gold/40" />
          </motion.div>
        </div>
      </section>

      {/* Authority Bar (Stats) */}
      <section className="bg-navy-900 border-y border-white/5 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 group"
            >
              <div className="w-20 h-20 rounded-sm bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-1">{stat.value}</h4>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Domains (Pillars) */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Strategic Pillars</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">Domains of <br /> <span className="text-gold italic">Authority.</span></h2>
            </div>
            <div className="w-40 h-[1px] bg-gold/30 mb-4 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="p-16 glass-card rounded-sm relative group overflow-hidden premium-shadow"
              >
                <div className="absolute top-0 right-0 p-10 text-gold/[0.05] text-[120px] font-black group-hover:text-gold/10 transition-colors leading-none">0{idx+1}</div>
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">{pillar.role}</span>
                <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase">{pillar.title}</h3>
                <p className="text-white/40 text-lg mb-12 leading-relaxed font-light">
                  {pillar.description}
                </p>
                <Link to={pillar.link} className="inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em] group-hover:text-gold transition-all">
                  Access Intellectual Capital <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Programs (Executive Education) */}
      <section className="py-40 bg-navy-800/30 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-32 items-center">
          <div className="lg:w-1/2">
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Masterclasses</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] uppercase italic">Clarity Makes <br /> <span className="not-italic text-gold">The Difference.</span></h2>
            <p className="text-white/40 text-xl mb-12 leading-relaxed font-light">
              High-stakes workshops designed for the modern executive. Transition from traditional real estate to a tokenized, digital-first economy with absolute precision.
            </p>
            <ul className="grid grid-cols-1 gap-6 mb-16">
              {['Tokenization Architecture', 'Web3 Corporate Strategy', 'Institutional Digital Assets'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-[10px]">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-12 py-6 bg-transparent border border-gold text-gold font-black uppercase tracking-[0.3em] text-xs hover:bg-gold hover:text-navy-900 transition-all premium-shadow">
              Secure Your Placement
            </button>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="aspect-[4/3] bg-navy-900 rounded-sm overflow-hidden border border-white/10 premium-shadow">
               <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                alt="Workshop Session" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-gold/90 flex items-center justify-center text-navy-900 shadow-2xl shadow-gold/40 group-hover:bg-gold transition-all"
                >
                  <PlayCircle size={48} fill="currentColor" />
                </motion.div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 px-10 py-8 bg-gold text-navy-900 font-black text-5xl italic premium-shadow">
              LIVE
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Venture (SmartBlocks) */}
      <section className="py-52 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gold/[0.03] rounded-full blur-[180px] z-0" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em] mb-10 block">Executive Portfolio</span>
          <h2 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-none">SmartBlocks.</h2>
          <p className="text-white/40 text-2xl mb-16 leading-relaxed font-light mx-auto max-w-3xl">
            Defining the gold standard of real estate tokenization. A flagship demonstration of technical excellence and institutional authority.
          </p>
          <Link to="/ventures" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-navy-900 font-black uppercase tracking-[0.3em] text-xs hover:bg-gold hover:scale-[1.05] transition-all premium-shadow">
            View Case Study <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
