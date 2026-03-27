import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-navy-900 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Inquiries</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Connect for <br /><span className="text-gold italic font-light">Execution.</span>
          </h1>
          <p className="text-white/50 text-xl leading-relaxed mb-16 max-w-lg">
            Whether you are looking for enterprise consulting, workshop registration, or venture collaboration, ETMAM is ready to deliver clarity.
          </p>

          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">Direct Email</h4>
                <p className="text-white/60 text-lg">info@etmam.net</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">LinkedIn Presence</h4>
                <p className="text-white/60 text-lg hover:text-gold cursor-pointer transition-colors">linkedin.com/in/ghassanfarajallah</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">Headquarters</h4>
                <p className="text-white/60 text-lg uppercase tracking-tight">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="p-10 md:p-12 bg-white/5 border border-white/10 rounded-sm relative"
        >
           <h3 className="text-2xl font-bold mb-8">Executive Inquiry</h3>
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] text-white/30 uppercase font-black mb-2 block">Full Name</label>
                  <input type="text" className="w-full bg-navy-900 border border-white/10 p-4 text-white focus:border-gold focus:ring-0 transition-colors rounded-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-[10px] text-white/30 uppercase font-black mb-2 block">Organization</label>
                  <input type="text" className="w-full bg-navy-900 border border-white/10 p-4 text-white focus:border-gold focus:ring-0 transition-colors rounded-sm" placeholder="Company Ltd." />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-white/30 uppercase font-black mb-2 block">Email Address</label>
                <input type="email" className="w-full bg-navy-900 border border-white/10 p-4 text-white focus:border-gold focus:ring-0 transition-colors rounded-sm" placeholder="john@example.com" />
              </div>

              <div>
                <label className="text-[10px] text-white/30 uppercase font-black mb-2 block">Inquiry Type</label>
                <select className="w-full bg-navy-900 border border-white/10 p-4 text-white focus:border-gold focus:ring-0 transition-colors rounded-sm appearance-none">
                   <option>Executive Consulting</option>
                   <option>Workshop Registration</option>
                   <option>Venture Collaboration</option>
                   <option>Media & Speaking</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-white/30 uppercase font-black mb-2 block">Your Vision / Requirements</label>
                <textarea rows="4" className="w-full bg-navy-900 border border-white/10 p-4 text-white focus:border-gold focus:ring-0 transition-colors rounded-sm" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full py-5 bg-gold text-navy-900 font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-all flex items-center justify-center gap-3">
                Submit Inquiry <ArrowRight size={18} />
              </button>
           </form>

           {/* Booking teaser */}
           <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <p className="text-white/40 text-xs">Prefer a direct call?</p>
              <button className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] hover:underline">Book via Calendly</button>
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
