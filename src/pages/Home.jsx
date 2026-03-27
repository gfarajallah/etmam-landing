import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  PlayCircle, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Globe, 
  Cpu, 
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Years of Leadership', value: '10+', icon: <Award className="text-gold" size={24} /> },
    { label: 'Professionals Trained', value: '500+', icon: <Users className="text-gold" size={24} /> },
    { label: 'Asset Value Tokenized', value: '$1B+', icon: <TrendingUp className="text-gold" size={24} /> },
  ];

  const corePillars = [
    {
      title: "Executive Consulting",
      description: "Strategic advisory for real estate enterprises transitioning to digital assets and blockchain efficiency.",
      link: "/services",
      role: "ETMAM Engine",
      icon: <Layers size={32} className="text-gold" />,
      tag: "STRATEGY"
    },
    {
      title: "Web3 Venturing",
      description: "Building the future of finance. Flagship projects like SmartBlocks defining the tokenization standard.",
      link: "/ventures",
      role: "Visionary Builder",
      icon: <Cpu size={32} className="text-gold" />,
      tag: "INNOVATION"
    }
  ];

  return (
    <div className="bg-navy-900 text-white selection:bg-gold/40 scroll-smooth">
      {/* Global Grain Texture */}
      <div className="fixed inset-0 z-[60] bg-grain pointer-events-none opacity-[0.04]" />

      {/* 01. Hero Section (Prestige Theme) */}
      <section className="relative min-h-[110vh] flex items-center pt-20 theme-navy-deep overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/40 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gold/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Institutional Center" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[1px] bg-gold/50" />
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Executive Leadership</span>
            </motion.div>
            
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black tracking-tighter mb-10 leading-[0.82] uppercase">
              Precision <br /> 
              <span className="gold-gradient-text italic">Redefined.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/30 max-w-lg mb-16 leading-relaxed font-light">
              Architecting the institutional transition to the tokenized economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link to="/contact" className="btn-premium group shadow-2xl shadow-gold/10">
                Initiate Engagement <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
              </Link>
              <button className="px-10 py-5 border border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 glass-card">
                Review Vision <PlayCircle size={18} />
              </button>
            </div>
          </motion.div>

          {/* Founder Visual with Cinematic Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[3/4.2] overflow-hidden rounded-sm border border-white/5 p-3 bg-navy-800/30 backdrop-blur-md metallic-glow group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
                alt="Ghassan Farajallah" 
                className="w-full h-full object-cover grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 p-10 glass-card border-gold/20 backdrop-blur-2xl">
                <span className="text-gold font-black uppercase tracking-[0.5em] text-[9px] mb-4 block">Founder & Visionary</span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white/90">Ghassan <br />Farajallah</h3>
              </div>
            </div>
            {/* Visual Markers */}
            <div className="absolute -top-12 -right-12 w-40 h-40 border-t-2 border-r-2 border-gold/10" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 border-b-2 border-l-2 border-gold/10" />
          </motion.div>
        </div>
      </section>

      {/* 02. Authority Metrics (Contrast Theme) */}
      <section className="bg-white/5 border-y border-white/5 backdrop-blur-sm relative py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
              <h4 className="text-6xl font-black mb-2 gold-gradient-text">{stat.value}</h4>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03. Domains of Authority (Rhythm Shift: Slate Theme) */}
      <section className="py-52 theme-navy-slate relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-32">
            <div className="max-w-3xl">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Strategic Architecture</span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">Domains of <br /><span className="text-gold italic">Authority.</span></h2>
            </div>
            <p className="text-white/30 text-xl font-light max-w-xs lg:mb-4 lg:pl-10 lg:border-l lg:border-white/10">
              Institutional-grade frameworks for the global digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-card p-16 md:p-24 group relative"
              >
                <div className="absolute top-0 right-0 p-12 text-gold/[0.04] text-[180px] font-black leading-none select-none group-hover:text-gold/[0.08] transition-colors">0{idx+1}</div>
                <div className="w-20 h-20 bg-gold/10 border border-gold/20 flex items-center justify-center mb-12 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-700">
                   {pillar.icon}
                </div>
                <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">{pillar.tag}</span>
                <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">{pillar.title}</h3>
                <p className="text-white/40 text-xl leading-relaxed font-light mb-16 max-w-md">
                  {pillar.description}
                </p>
                <Link to={pillar.link} className="inline-flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.4em] group-hover:text-gold transition-all">
                  Secure Consultation <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Flagship Spotlight: SMARTBLOCKS (Rhythm Shift: Dark Glass) */}
      <section className="py-60 bg-black relative overflow-hidden border-y border-gold/10">
        {/* Flagship Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-gold/[0.04] rounded-full blur-[180px] z-0" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-40">
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">Flagship Case Study</span>
            <h2 className="text-7xl md:text-[11rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">SmartBlocks.</h2>
            <p className="text-2xl md:text-3xl text-white/30 max-w-4xl mx-auto font-light leading-relaxed">
              Defining the gold standard for real estate tokenization. A flagship demonstration of technical excellence and institutional authority.
            </p>
          </div>

          {/* Product Visual / Mockup Simulation */}
          <div className="relative group">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-card rounded-sm border-gold/20 premium-shadow overflow-hidden group-hover:border-gold/40 transition-all duration-1000"
            >
               {/* Dashboard Mockup Top Bar */}
               <div className="bg-white/5 border-b border-white/10 px-8 py-4 flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Operational Protocol 6.2 // Active</div>
                  <Globe size={14} className="text-gold/30" />
               </div>

               <div className="relative aspect-video bg-navy-900/80 p-12 md:p-24 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbda3ef66851?auto=format&fit=crop&q=80&w=2070" 
                    alt="SmartBlocks Analytics" 
                    className="w-full h-full object-cover grayscale opacity-20 scale-110 group-hover:scale-100 transition-transform duration-5000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
                       {[
                         { label: "Asset Liquidity", val: "+24.8%", icon: <TrendingUp className="text-gold" /> },
                         { label: "Compliance Index", val: "100%", icon: <ShieldCheck className="text-gold" /> },
                         { label: "Tx Settlement", val: "12ms", icon: <Activity className="text-gold" /> }
                       ].map((m, i) => (
                         <div key={i} className="p-10 glass-card bg-navy-800/80 border-gold/10 text-center hover:border-gold transition-colors">
                            <div className="flex justify-center mb-6">{m.icon}</div>
                            <h5 className="text-4xl font-black mb-2">{m.val}</h5>
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">{m.label}</p>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </motion.div>
            
            <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 max-w-4xl mx-auto px-6">
              <div className="text-left">
                 <h4 className="text-xl font-black mb-4 uppercase italic">Institutional <br /><span className="text-gold not-italic">Infrastructure.</span></h4>
                 <p className="text-white/40 text-sm font-light leading-relaxed">Cross-border settlement architecture <br />vetted by global financial regulators.</p>
              </div>
              <Link to="/ventures" className="px-16 py-7 bg-white text-navy-900 font-black uppercase tracking-[0.4em] text-xs hover:bg-gold transition-all premium-shadow flex items-center gap-4 group">
                 Review Case Study <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05. High-Conversion CTA (Rhythm Shift: Full Gold Theme) */}
      <section className="py-60 relative overflow-hidden bg-navy-900">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
           >
              <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter leading-[0.85]">Ready to <br /><span className="gold-gradient-text italic">Scale?</span></h2>
              <p className="text-2xl md:text-3xl text-white/40 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
                We accept a limited number of high-stakes engagements each quarter. Secure your position in the next cycle.
              </p>
              <Link to="/contact" className="btn-premium px-20 py-8 shadow-gold/20 text-lg">
                 Initiate Engagement Node
              </Link>
              
              <div className="mt-24 flex items-center justify-center gap-10 opacity-30">
                 <div className="flex flex-col items-center">
                    <ShieldCheck size={24} className="mb-2" />
                    <span className="text-[10px] font-black tracking-widest uppercase">Verified Authority</span>
                 </div>
                 <div className="w-px h-10 bg-white/20" />
                 <div className="flex flex-col items-center">
                    <BarChart3 size={24} className="mb-2" />
                    <span className="text-[10px] font-black tracking-widest uppercase">Institutional Data</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
