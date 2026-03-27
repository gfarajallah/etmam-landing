import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, MessageSquare, Globe, ShieldCheck, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 bg-navy-900 min-h-screen text-white relative">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      {/* Contact Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Engagement Center</span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] uppercase tracking-tighter">
              Initiate <br /> <span className="gold-gradient-text italic">Protocol.</span>
            </h1>
            <p className="text-2xl text-white/40 leading-relaxed font-light max-w-2xl">
              Connect with ETMAM for institutional-grade consulting, venture collaboration, and strategic advisory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left Side: Information Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
             <div className="space-y-12">
                {[
                  { 
                    label: "Direct Intelligence", 
                    value: "info@etmam.net", 
                    icon: <Mail className="text-gold" size={24} />,
                    sub: "Average Response: 12 Hours"
                  },
                  { 
                    label: "Executive Network", 
                    value: "linkedin.com/in/ghassanfarajallah", 
                    icon: <Linkedin className="text-gold" size={24} />,
                    sub: "Strategic Updates & Insights"
                  },
                  { 
                    label: "Global Headquarters", 
                    value: "Dubai, United Arab Emirates", 
                    icon: <MapPin className="text-gold" size={24} />,
                    sub: "International Financial District"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 group">
                     <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-all duration-700">
                        {item.icon}
                     </div>
                     <div className="pt-2">
                        <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-3">{item.label}</h4>
                        <p className="text-2xl font-black group-hover:text-gold transition-colors">{item.value}</p>
                        <div className="flex items-center gap-2 mt-3 text-white/20 uppercase font-black text-[9px] tracking-widest">
                           <Clock size={10} />
                           <span>{item.sub}</span>
                        </div>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-12 glass-card rounded-sm border-gold/20 premium-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[60px] translate-x-1/2 -translate-y-1/2" />
                <h4 className="text-lg font-black mb-6 uppercase tracking-tight italic">Institutional <span className="not-italic text-gold">Notice.</span></h4>
                <p className="text-white/40 text-sm leading-relaxed font-light mb-8">
                  Due to high engagement volumes, priority is given to institutional partners and pre-scheduled strategy audits.
                </p>
                <div className="flex items-center gap-4 text-[10px] font-black text-gold uppercase tracking-[0.3em]">
                   <ShieldCheck size={16} />
                   <span>Vetted & Secure Channels</span>
                </div>
             </div>
          </motion.div>

          {/* Right Side: The Inquiry Engine */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 glass-card rounded-sm border-white/5 premium-shadow"
          >
             <h3 className="text-3xl font-black mb-12 uppercase tracking-tighter italic">Strategic <span className="not-italic text-gold">Inquiry.</span></h3>
             
             <form className="space-y-10 group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group/field">
                    <label className="text-[10px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors">Identity</label>
                    <input type="text" className="w-full bg-navy-900/50 border-b border-white/10 p-0 pb-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/10 font-light text-lg" placeholder="Full Name" />
                  </div>
                  <div className="relative group/field">
                    <label className="text-[10px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors">Organization</label>
                    <input type="text" className="w-full bg-navy-900/50 border-b border-white/10 p-0 pb-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/10 font-light text-lg" placeholder="Entity Name" />
                  </div>
                </div>

                <div className="relative group/field">
                  <label className="text-[10px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors">Communication Path</label>
                  <input type="email" className="w-full bg-navy-900/50 border-b border-white/10 p-0 pb-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/10 font-light text-lg" placeholder="professional@domain.com" />
                </div>

                <div className="relative group/field">
                  <label className="text-[10px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors">Engagement Type</label>
                  <select className="w-full bg-navy-900/50 border-b border-white/10 p-0 pb-4 text-white focus:border-gold outline-none transition-all font-light text-lg appearance-none cursor-pointer">
                     <option className="bg-navy-900 text-white">Institutional Consulting</option>
                     <option className="bg-navy-900 text-white">Venture Partnership</option>
                     <option className="bg-navy-900 text-white">Technology Auditing</option>
                     <option className="bg-navy-900 text-white">Guest Speaking / Media</option>
                  </select>
                </div>

                <div className="relative group/field">
                  <label className="text-[10px] text-white/20 uppercase font-black mb-4 block group-focus-within/field:text-gold transition-colors">The Brief / Vision</label>
                  <textarea rows="4" className="w-full bg-navy-900/50 border-b border-white/10 p-0 pb-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/10 font-light text-lg resize-none" placeholder="Primary objectives and scope..."></textarea>
                </div>

                <button className="w-full group/btn relative overflow-hidden">
                   <div className="absolute inset-0 bg-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                   <div className="relative z-10 py-6 border border-gold flex items-center justify-center gap-4 text-gold group-hover/btn:text-navy-900 font-black uppercase tracking-[0.3em] text-[10px] transition-colors duration-500">
                      Transmit Inquiry <ArrowRight size={16} className="group-hover/btn:translate-x-3 transition-transform duration-500" />
                   </div>
                </button>
             </form>

             <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Operational Status: Nominal</span>
                </div>
                <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors">
                   Book via Secretariart (Calendly)
                </button>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
