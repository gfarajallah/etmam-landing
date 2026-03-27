import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight, MessageSquare, Globe, ShieldCheck, Clock, MapPin, Activity } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none" />

      {/* 01. Protocol Hero (Rhythm: Deep Theme) */}
      <section className="relative py-40 md:py-60 overflow-hidden theme-navy-deep z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-[1px] bg-gold/50" />
               <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Engagement Node</span>
            </div>
            <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-black mb-16 leading-[0.8] uppercase tracking-tighter">
              Initiate <br /><span className="gold-gradient-text italic">Protocol.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-white/90 leading-relaxed font-light max-w-3xl">
              Begin the formal technical and strategic engagement. Our team will review your requirements for institutional alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. Communication Architecture (Rhythm: Slate Theme) */}
      <section className="pb-60 theme-navy-slate relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
          
          {/* Information Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
             <div className="space-y-16">
                {[
                  { 
                    label: "Direct Intelligence", 
                    value: "info@etmam.net", 
                    icon: <Mail className="text-gold" size={32} />,
                    sub: "Status: 12h Global SLA"
                  },
                  { 
                    label: "Executive Network", 
                    value: "linkedin.com/in/ghassanfarajallah", 
                    icon: <Linkedin className="text-gold" size={32} />,
                    sub: "Strategic Updates Hub"
                  },
                  { 
                    label: "Operational HQ", 
                    value: "Dubai, United Arab Emirates", 
                    icon: <MapPin className="text-gold" size={32} />,
                    sub: "Financial District (DIFC)"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-12 group items-start">
                     <div className="w-24 h-24 bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-700 metallic-glow">
                        {item.icon}
                     </div>
                     <div className="pt-2">
                        <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">{item.label}</h4>
                        <p className="text-3xl font-black group-hover:text-gold transition-colors">{item.value}</p>
                        <div className="flex items-center gap-3 mt-4 text-white/20 uppercase font-black text-[9px] tracking-[0.3em]">
                           <Activity size={12} className="text-gold/40 animate-pulse" />
                           <span>{item.sub}</span>
                        </div>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-16 glass-card rounded-sm border-gold/20 premium-shadow relative overflow-hidden backdrop-blur-3xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-[80px] translate-x-1/2 -translate-y-1/2" />
                <h4 className="text-2xl font-black mb-8 uppercase tracking-tight italic">Institutional <span className="not-italic text-gold">Notice.</span></h4>
                <p className="text-white/40 text-lg leading-relaxed font-light mb-10">
                  Priority engagement protocol is reserved for institutional partners, family offices, and certified developers.
                </p>
                <div className="flex items-center gap-6 text-[10px] font-black text-gold uppercase tracking-[0.4em]">
                   <ShieldCheck size={20} />
                   <span>Vetted // Secure Channels</span>
                </div>
             </div>
          </motion.div>

          {/* Inquiry Engine */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-24 glass-card rounded-sm border-white/5 premium-shadow metallic-glow bg-navy-800/80 backdrop-blur-3xl"
          >
             <div className="flex items-center justify-between mb-16">
                <h3 className="text-4xl font-black uppercase tracking-tighter italic">Strategic <span className="not-italic text-gold">Inquiry.</span></h3>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-white/30 italic">Protocol Live</span>
                </div>
             </div>
             
             <form className="space-y-12 group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group/field border-b border-white/5 pb-4 focus-within:border-gold transition-all">
                    <label className="text-[9px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors tracking-widest">Identity</label>
                    <input type="text" className="w-full bg-transparent p-0 text-white outline-none placeholder:text-white/10 font-light text-xl" placeholder="Full Name" />
                  </div>
                  <div className="relative group/field border-b border-white/5 pb-4 focus-within:border-gold transition-all">
                    <label className="text-[9px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors tracking-widest">Organization</label>
                    <input type="text" className="w-full bg-transparent p-0 text-white outline-none placeholder:text-white/10 font-light text-xl" placeholder="Entity Name" />
                  </div>
                </div>

                <div className="relative group/field border-b border-white/5 pb-4 focus-within:border-gold transition-all">
                  <label className="text-[9px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors tracking-widest">Communication Path</label>
                  <input type="email" className="w-full bg-transparent p-0 text-white outline-none placeholder:text-white/10 font-light text-xl" placeholder="professional@domain.com" />
                </div>

                <div className="relative group/field border-b border-white/5 pb-4 focus-within:border-gold transition-all">
                  <label className="text-[9px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors tracking-widest">Engagement Type</label>
                  <select className="w-full bg-transparent p-0 text-white outline-none font-light text-xl appearance-none cursor-pointer">
                     <option className="bg-navy-900 text-white">Institutional Consulting</option>
                     <option className="bg-navy-900 text-white">Venture Partnership</option>
                     <option className="bg-navy-900 text-white">Technology Auditing</option>
                     <option className="bg-navy-900 text-white">Guest Speaking / Media</option>
                  </select>
                </div>

                <div className="relative group/field border-b border-white/5 pb-8 focus-within:border-gold transition-all">
                  <label className="text-[9px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors tracking-widest">The Brief / Vision</label>
                  <textarea rows="4" className="w-full bg-transparent p-0 text-white outline-none placeholder:text-white/10 font-light text-xl resize-none" placeholder="Primary objectives and scope..."></textarea>
                </div>

                <button className="w-full group/btn relative overflow-hidden btn-premium py-8 text-sm">
                   <div className="relative z-10 flex items-center justify-center gap-6">
                      Transmit Protocol <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                   </div>
                </button>
             </form>

             <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-3">
                   <Clock size={16} className="text-gold/30" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/20 leading-none">Global Sync Status: Operational</span>
                </div>
                <button className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-gold transition-colors">
                   Executive Secretariart // Calendly
                </button>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
