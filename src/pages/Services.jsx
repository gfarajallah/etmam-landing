import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, Layers, Landmark, ShieldCheck } from 'lucide-react';

const Services = () => {
  const offerings = [
    {
      title: "Institutional Tokenization",
      desc: "Architecting the technical and legal frameworks for fractionalizing prime real estate assets. Institutional-grade compliance meets secondary market liquidity.",
      features: ["Compliant SPV Structuring", "Asset Verification Protocols", "Smart Contract Auditing"],
      icon: <Landmark size={32} className="text-gold" />,
      tag: "FLAGSHIP"
    },
    {
      title: "Strategic Advisory",
      desc: "Custom consulting for family offices and developers looking to integrate Web3 into their existing real estate portfolio and operational workflows.",
      features: ["High-Net-Worth Portfolios", "Market Entry Analysis", "Tech-Stack Integration"],
      icon: <Globe size={32} className="text-gold" />,
      tag: "ADVISORY"
    },
    {
      title: "Web3 Transition Frameworks",
      desc: "Guiding organizations through the deep transformation from analog legacy processes to automated, blockchain-powered efficiency.",
      features: ["Process Automation", "Digital Identity Systems", "Liquidity Optimization"],
      icon: <Layers size={32} className="text-gold" />,
      tag: "TRANSITION"
    }
  ];

  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* Services Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block font-outfit">Solutions Architecture</span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] uppercase tracking-tighter">
              Engineering <br /> <span className="gold-gradient-text italic">Authority.</span>
            </h1>
            <p className="text-2xl text-white/40 leading-relaxed font-light max-w-2xl">
              We don't just advise; we engineer the strategic and technical engines that power the future of real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Grid (Storytelling Layout) */}
      <section className="pb-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12">
            {offerings.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden glass-card rounded-sm premium-shadow p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                 <div className="absolute top-0 right-0 p-10 text-[200px] font-black text-white/[0.01] group-hover:text-gold/[0.03] transition-colors leading-none select-none">
                    0{idx+1}
                 </div>
                 
                 <div>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-sm flex items-center justify-center group-hover:border-gold group-hover:bg-gold/20 transition-all duration-700">
                          {service.icon}
                       </div>
                       <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">{service.tag}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">{service.title}</h2>
                    <p className="text-white/40 text-xl leading-relaxed font-light mb-12">
                       {service.desc}
                    </p>
                    <button className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:text-gold transition-all group/btn">
                       Request Detailed Specification <ArrowRight size={14} className="group-hover/btn:translate-x-3 transition-transform duration-500" />
                    </button>
                 </div>

                 <div className="space-y-6 lg:pl-20 border-l border-white/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-10">Critical Outcomes</h4>
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-6 group/item">
                         <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover/item:scale-150 transition-transform" />
                         <span className="text-lg text-white/60 font-medium group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                    <div className="pt-12">
                       <div className="p-10 bg-navy-900/50 border border-white/5 rounded-sm backdrop-blur-sm grayscale opacity-50">
                          <BarChart3 className="text-gold/20 mb-4" />
                          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Performance Data Available Upon Request</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gold/[0.02] rounded-full blur-[150px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter">Standardizing <br /> <span className="text-gold italic">The Future.</span></h2>
           <p className="text-white/40 text-xl mb-16 font-light">
             We work with a select number of institutional partners each quarter. Secure your engagement for the next cycle.
           </p>
           <button className="px-12 py-6 bg-gold text-navy-900 font-black uppercase tracking-widest text-xs hover:bg-gold-light transition-all premium-shadow">
             Initiate Engagement
           </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
