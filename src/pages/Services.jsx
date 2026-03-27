import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, Layers, Landmark, ShieldCheck, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const offerings = [
    {
      title: "Institutional Tokenization",
      desc: "Architecting the technical and legal frameworks for fractionalizing prime real estate assets. Institutional-grade compliance meets secondary market liquidity.",
      features: ["Compliant SPV Structuring", "Asset Verification Protocols", "Smart Contract Auditing"],
      icon: <Landmark size={40} className="text-gold" />,
      tag: "FLAGSHIP",
      metrics: "Settlement in < 1s"
    },
    {
      title: "Strategic Advisory",
      desc: "Custom consulting for family offices and developers looking to integrate Web3 into their existing real estate portfolio and operational workflows.",
      features: ["High-Net-Worth Portfolios", "Market Entry Analysis", "Tech-Stack Integration"],
      icon: <Globe size={40} className="text-gold" />,
      tag: "ADVISORY",
      metrics: "$5B+ Network Access"
    },
    {
      title: "Web3 Transition Frameworks",
      desc: "Guiding organizations through the deep transformation from analog legacy processes to automated, blockchain-powered efficiency.",
      features: ["Process Automation", "Digital Identity Systems", "Liquidity Optimization"],
      icon: <Layers size={40} className="text-gold" />,
      tag: "TRANSITION",
      metrics: "90% Efficiency Gain"
    }
  ];

  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* 01. Services Hero (Rhythm: Deep Theme) */}
      <section className="relative py-40 md:py-60 overflow-hidden theme-navy-deep z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-[1px] bg-gold/50" />
               <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Solution Architecture</span>
            </div>
            <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-black mb-12 leading-[0.8] uppercase tracking-tighter">
              Engineering <br /> <span className="gold-gradient-text italic">Authority.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-white/90 leading-relaxed font-light max-w-4xl">
              We don't just advise; we engineer the strategic and technical engines that power the future of global real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. Service Engine (Rhythm: Slate Theme) */}
      <section className="py-52 theme-navy-slate border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {offerings.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-card p-16 md:p-32 group relative"
              >
                 <div className="absolute top-0 right-0 p-16 text-gold/[0.03] text-[240px] font-black leading-none select-none group-hover:text-gold/[0.06] transition-all">
                    0{idx+1}
                 </div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
                    <div>
                       <div className="flex items-center gap-6 mb-12">
                          <div className="w-20 h-20 bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/20 transition-all duration-700">
                             {service.icon}
                          </div>
                          <div className="h-px w-12 bg-white/10" />
                          <span className="text-gold text-[10px] font-black tracking-[0.6em] uppercase">{service.tag}</span>
                       </div>
                       <h2 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-[0.8]">{service.title}</h2>
                       <p className="text-white/80 text-2xl leading-relaxed font-light mb-16 max-w-lg">
                          {service.desc}
                       </p>
                       
                       <div className="flex items-center gap-6 p-8 glass-card border-gold/10 inline-flex group-hover:border-gold/30 transition-all">
                          <Activity size={24} className="text-gold animate-pulse" />
                          <div>
                             <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">Target Outcome</p>
                             <p className="text-white font-black uppercase tracking-tight">{service.metrics}</p>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-12 lg:pl-24 lg:border-l lg:border-white/5 h-full flex flex-col justify-center">
                       <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 block mb-4">Critical Deliverables</span>
                       <div className="space-y-8">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-8 group/item">
                               <div className="w-2 h-2 bg-gold/40 group-hover/item:bg-gold group-hover/item:scale-150 transition-all" />
                               <span className="text-xl text-white/60 font-medium group-hover/item:text-white transition-colors">{feature}</span>
                            </div>
                          ))}
                       </div>
                       <div className="pt-20">
                          <button className="btn-premium w-full md:w-auto">
                             Request Protocol Specs <ArrowRight size={16} className="inline ml-3" />
                          </button>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Global CTA (Rhythm: Gold Theme) */}
      <section className="py-60 theme-navy-gold relative z-10">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter italic leading-none">Standardize <br /><span className="text-gold not-italic">Success.</span></h2>
            <p className="text-white/30 text-2xl mb-20 font-light leading-relaxed">
              We deliver institutional-grade roadmaps for organizations ready to lead in the digital era.
            </p>
            <Link to="/contact" className="btn-premium shadow-gold/20">
               Begin Engagement Audit
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Services;
