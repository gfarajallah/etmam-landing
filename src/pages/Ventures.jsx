import { motion } from 'framer-motion';
import { ExternalLink, Layers, ShieldCheck, Zap, ArrowUpRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ventures = () => {
  const portfolio = [
    {
      name: "SmartBlocks",
      role: "Founder & Flagship Venture",
      type: "Real Estate Tokenization Standard",
      desc: "The definitive platform for institutional-grade property fractionalization. SmartBlocks isn't just a product; it's the protocol defining the intersection of physical assets and digital liquidity.",
      features: ["Reg-D/S Compliant Architecture", "Automated Cap Table Management", "Secondary Market Infrastructure"],
      link: "https://smart-blocks-tokenization.base44.app/",
      isFlagship: true,
      accent: "gold"
    },
    {
      name: "EliteWay Strategy",
      role: "Strategic Partner",
      type: "Market Intelligence & Advisory",
      desc: "Specialized consultancy focusing on frontier market entry and luxury asset positioning for HNWI and institutional family offices.",
      features: ["HNWI Access Networks", "Bespoke Market Reports", "MENA Integration Strategy"],
      link: "#",
      isFlagship: false,
      accent: "white"
    }
  ];

  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* Ventures Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-transparent to-navy-900" />
           <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/5 h-full" />
              ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Ventures Portfolio</span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] uppercase tracking-tighter">
              Engineering <br /> <span className="gold-gradient-text italic">The Future.</span>
            </h1>
            <p className="text-2xl text-white/40 leading-relaxed font-light mb-12 max-w-2xl">
              A curated ecosystem of ventures founded and advised by Ghassan Farajallah, focused on institutionalizing the digital real estate economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Product Showcase (SmartBlocks) */}
      <section className="pb-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {portfolio.filter(v => v.isFlagship).map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-sm overflow-hidden border border-gold/30 bg-navy-800/50 premium-shadow glass-card"
            >
               {/* Decorative Lights */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

               <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-16 md:p-24 flex flex-col justify-center relative z-10">
                     <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-[1px] bg-gold" />
                        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">{v.role}</span>
                     </div>
                     <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter">{v.name}<span className="text-gold">.</span></h2>
                     <p className="text-white/40 text-xl mb-12 leading-relaxed font-light">
                       {v.desc}
                     </p>
                     
                     <div className="grid grid-cols-1 gap-6 mb-16">
                        {v.features.map((f, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-xs text-white/60 font-black uppercase tracking-widest group/item">
                             <ShieldCheck size={20} className="text-gold group-hover/item:scale-125 transition-transform" />
                             <span>{f}</span>
                          </div>
                        ))}
                     </div>

                     <a 
                      href={v.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-navy-900 font-black uppercase tracking-widest text-xs hover:bg-white hover:scale-[1.05] active:scale-[0.98] transition-all w-fit premium-shadow"
                     >
                       Enter Platform <ExternalLink size={18} />
                     </a>
                  </div>

                  <div className="relative overflow-hidden group/img">
                     <img 
                      src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232" 
                      alt="SmartBlocks Tech" 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover/img:grayscale-0 group-hover/img:brightness-100 transition-all duration-1000 group-hover/img:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-navy-800 via-navy-800/40 to-transparent" />
                     
                     <div className="absolute bottom-10 right-10 flex gap-4">
                        <div className="w-40 h-40 border border-white/10 glass-card p-6 flex flex-col justify-center items-center">
                           <Cpu className="text-gold mb-3" />
                           <span className="text-center text-[10px] font-black uppercase tracking-widest text-white/40 leading-tight">Advanced <br /> Infrastructure</span>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Ecosystem */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-52">
         <div className="mb-24 flex items-center gap-10">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Strategic Ecosystem</h3>
            <div className="flex-grow h-[1px] bg-white/5" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {portfolio.filter(v => !v.isFlagship).map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="p-20 glass-card rounded-sm border border-white/5 hover:border-white/20 transition-all group premium-shadow relative"
              >
                 <div className="absolute top-0 right-0 p-12 text-white/[0.03] group-hover:text-gold/10 transition-colors">
                    <Layers size={80} />
                 </div>
                 
                 <div className="flex flex-col h-full relative z-10">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-10 block">{v.role}</span>
                    <h4 className="text-4xl font-black mb-6 uppercase tracking-tight">{v.name}<span className="text-white/20">/</span></h4>
                    <p className="text-white font-black uppercase tracking-widest text-[10px] mb-8 italic text-gold/60">{v.type}</p>
                    <p className="text-white/40 text-xl leading-relaxed mb-12 font-light">
                      {v.desc}
                    </p>
                    <div className="mt-auto">
                       <Link to="/contact" className="inline-flex items-center gap-3 text-white/50 hover:text-gold font-black uppercase tracking-[0.3em] text-[10px] transition-all">
                          Collaborate <ArrowUpRight size={16} />
                       </Link>
                    </div>
                 </div>
              </motion.div>
            ))}
            
            {/* CTA for Future Ventures */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="p-20 border border-dashed border-white/10 rounded-sm flex flex-col items-center justify-center text-center group bg-gold/[0.01]"
            >
               <Zap className="text-gold/20 mb-10 group-hover:scale-110 group-hover:text-gold transition-all" size={60} />
               <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter">Next Cycle.</h4>
               <p className="text-white/30 text-lg font-light max-w-xs mb-12">
                 Analyzing growth-stage opportunities in fractional liquidity and fintech bridging.
               </p>
               <Link to="/contact" className="px-10 py-5 border border-white/10 hover:border-gold/50 text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all">
                 Submit Proposition
               </Link>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Ventures;
