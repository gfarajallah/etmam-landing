import { motion } from 'framer-motion';
import { ExternalLink, Layers, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

const Ventures = () => {
  const portfolio = [
    {
      name: "SmartBlocks",
      role: "Flagship Venture",
      type: "Real Estate Tokenization Platform",
      desc: "The definitive platform for fractionalizing real estate assets. Built to institutional standards, SmartBlocks bridges the gap between physical property and digital liquidity.",
      features: ["Compliant Token Issuance", "Secondary Market Trading", "Automated Distribution"],
      link: "https://smart-blocks-tokenization.base44.app/",
      isFlagship: true
    },
    {
      name: "EliteWay Strategy",
      role: "Strategic Partner",
      type: "Advisory & Market Entry",
      desc: "Specialized consultancy focusing on high-net-worth market entry strategies and luxury real estate positioning in the MENA region.",
      features: ["HNWI Networking", "Market Intelligence", "Brand Positioning"],
      link: "#",
      isFlagship: false
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-navy-900 min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block text-center md:text-left">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center md:text-left">Building the <br /><span className="text-gold italic font-light">Ecosystem.</span></h1>
          <p className="text-white/50 text-xl leading-relaxed text-center md:text-left">
            A curated selection of ventures and strategic initiatives founded or advised by Ghassan Farajallah.
          </p>
        </motion.div>
      </section>

      {/* Flagship Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        {portfolio.filter(v => v.isFlagship).map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group rounded-sm overflow-hidden border border-gold/30 bg-navy-800"
          >
             <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 md:p-16 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-6">
                      <Layers className="text-gold" size={24} />
                      <span className="text-gold font-bold uppercase tracking-widest text-xs">{v.role}</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold mb-6">{v.name}</h2>
                   <p className="text-white/60 text-lg mb-8 leading-relaxed">
                     {v.desc}
                   </p>
                   <div className="space-y-4 mb-10">
                      {v.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                           <ShieldCheck size={18} className="text-gold" />
                           <span>{f}</span>
                        </div>
                      ))}
                   </div>
                   <a 
                    href={v.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-900 font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-all w-fit"
                   >
                     Launch Platform <ExternalLink size={18} />
                   </a>
                </div>
                <div className="relative aspect-video lg:aspect-auto bg-navy-900 overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232" 
                    alt="SmartBlocks Preview" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-navy-800 via-transparent to-transparent" />
                </div>
             </div>
          </motion.div>
        ))}
      </section>

      {/* Secondary Ventures */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
         <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Strategic Engagements</h3>
            <div className="w-16 h-1 bg-gold" />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.filter(v => !v.isFlagship).map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 border border-white/10 rounded-sm hover:border-white/20 transition-all"
              >
                 <div className="flex justify-between items-start mb-6">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest">{v.role}</span>
                    <ArrowUpRight className="text-white/20" />
                 </div>
                 <h4 className="text-3xl font-bold mb-4">{v.name}</h4>
                 <p className="text-white/40 mb-8 leading-relaxed italic">{v.type}</p>
                 <p className="text-white/60 leading-relaxed mb-6">
                   {v.desc}
                 </p>
              </motion.div>
            ))}
            
            {/* CTA for Collaboration */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-gold/5 border border-gold/20 rounded-sm border-dashed flex flex-col items-center justify-center text-center group"
            >
               <Zap className="text-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
               <h4 className="text-2xl font-bold mb-4 text-gold">Building Together</h4>
               <p className="text-white/50 text-sm max-w-xs mb-8">
                 Looking for a strategic partner to build the next generation of real estate technology?
               </p>
               <Link to="/contact" className="text-white font-bold uppercase tracking-[0.2em] text-xs underline underline-offset-8 decoration-gold">
                 Discuss Venture Opportunities
               </Link>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Ventures;
