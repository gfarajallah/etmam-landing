import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  ExternalLink,
  ChevronRight,
  Database,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Ventures = () => {
  const secondaryVentures = [
    {
      title: "ETMAM Academy",
      desc: "Institutional education platform for Web3 real estate mastery.",
      icon: <Layers size={24} className="text-gold" />,
      tag: "EDUCATION"
    },
    {
      title: "Web3 Advisory Node",
      desc: "Strategic consulting for legacy enterprise transitions.",
      icon: <Globe size={24} className="text-gold" />,
      tag: "ADVISORY"
    },
    {
      title: "Digital Asset Sandbox",
      desc: "A proprietary environment for testing tokenization architectures.",
      icon: <Database size={24} className="text-gold" />,
      tag: "INFRASTRUCTURE"
    }
  ];

  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* 01. Ventures Hero (Rhythm: Deep Theme) */}
      <section className="relative py-40 md:py-60 overflow-hidden theme-navy-deep z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-[1px] bg-gold/50" />
               <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em]">Executive Portfolio</span>
            </div>
            <h1 className="text-[clamp(3rem,9vw,9rem)] font-black mb-12 leading-[0.8] uppercase tracking-tighter">
              Strategic <br /> <span className="gold-gradient-text italic">Ventures.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/30 leading-relaxed font-light max-w-2xl">
              We build and invest in high-authority projects defining the next era of real estate liquidity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. Flagship: SMARTBLOCKS (Rhythm: Flagship Theme) */}
      <section className="py-60 bg-black relative overflow-hidden border-y border-gold/10 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] bg-gold/[0.04] rounded-full blur-[200px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-16 bg-gold flex items-center justify-center text-navy-900">
                      <Cpu size={32} />
                   </div>
                   <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Flagship Achievement</span>
                </div>
                 <h2 className="text-7xl md:text-[10rem] font-black mb-12 uppercase tracking-tighter leading-[0.8]">Smart <br /><span className="text-glow-gold">Blocks.</span></h2>
                <div className="space-y-12 text-white/90 text-2xl font-light mb-16 max-w-xl leading-relaxed">
                   <p>Defining the technical and regulatory gold standard for institutional real estate tokenization. SmartBlocks is the execution engine for high-stakes capital markets.</p>
                   <ul className="space-y-6">
                      {[
                        { label: "Secondary Liquidity", val: "Institutional Grade" },
                        { label: "Asset Verification", val: "Blockchain Validated" },
                        { label: "Compliance Flow", val: "Global Regulatory Standard" }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                           <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                           <span className="text-white font-black">{item.val}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <button className="btn-premium">
                   Access Protocol <ChevronRight size={16} className="inline ml-2" />
                </button>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
             >
                {/* Visual Proof / Case Study Mockup */}
                 <div className="glass-card rounded-sm border-gold/40 p-3 metallic-glow flagship-aura">
                    <div className="bg-navy-950 p-12 md:p-24 border border-gold/10 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-12">
                          <Activity className="text-gold animate-pulse" size={32} />
                       </div>
                       <div className="grid grid-cols-2 gap-12">
                          <div className="col-span-2 md:col-span-1 p-10 bg-white/[0.03] border border-gold/20">
                             <h5 className="text-[11px] font-black uppercase tracking-widest text-gold mb-4 text-glow-gold">Market Liquidity</h5>
                             <p className="text-5xl font-black text-white">+24.5%</p>
                          </div>
                          <div className="col-span-2 md:col-span-1 p-10 bg-white/[0.03] border border-gold/20">
                             <h5 className="text-[11px] font-black uppercase tracking-widest text-gold mb-4 text-glow-gold">Verification Depth</h5>
                             <p className="text-5xl font-black text-white">6.2T // SEC</p>
                          </div>
                       </div>
                       <div className="mt-12 p-12 bg-gold/5 border border-gold/20">
                          <div className="flex items-center justify-between mb-10">
                             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">Operational Intelligence Level 9</span>
                             <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
                          </div>
                          <div className="h-48 flex items-end gap-4">
                             {[40, 70, 45, 100, 65, 80, 55, 90].map((h, i) => (
                               <div key={i} style={{ height: `${h}%` }} className={`flex-1 ${i === 3 ? 'bg-gold shadow-[0_0_30px_rgba(201,169,98,0.4)]' : 'bg-white/10'}`} />
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -top-16 -right-16 p-16 glass-card border-gold/40 max-w-xs premium-shadow backdrop-blur-3xl hidden md:block z-20">
                    <ShieldCheck className="text-gold mb-8 shadow-gold/20" size={48} />
                    <p className="text-white text-lg font-bold italic leading-relaxed">"SmartBlocks is the definitive institutional bridge for global real assets."</p>
                 </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 03. Strategic Ecosystem (Rhythm: Slate Theme) */}
      <section className="py-52 theme-navy-slate relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="mb-32">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Strategic Ecosystem</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Venture <br /><span className="text-gold italic">Network.</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {secondaryVentures.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="premium-card p-12 md:p-16 group"
                >
                   <div className="w-16 h-16 bg-white/[0.03] border border-white/5 flex items-center justify-center mb-10 group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-700">
                      {v.icon}
                   </div>
                   <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">{v.tag}</span>
                   <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{v.title}</h3>
                   <p className="text-white/30 text-sm leading-relaxed font-light mb-12">{v.desc}</p>
                   <button className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-[9px] hover:text-gold transition-all">
                      Review Specification <ExternalLink size={12} />
                   </button>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 04. Call to Venture Action */}
      <section className="py-60 theme-navy-gold relative z-10">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter italic leading-none">Collaborate <br /><span className="text-gold not-italic">Globally.</span></h2>
            <p className="text-white/30 text-2xl mb-20 font-light leading-relaxed">
              We engineer new markets for those who demand institutional precision and high-authority results.
            </p>
            <Link to="/contact" className="btn-premium shadow-gold/20">
               Initiate Partner Protocol
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Ventures;
