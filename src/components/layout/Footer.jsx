import React from 'react';
import { Linkedin, Instagram, MessageSquare, Mail, MapPin, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/ghassan-farajallah/', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, url: 'https://www.instagram.com/ghassan_farajallah/', label: 'Instagram' },
    { icon: <MessageSquare size={18} />, url: 'https://wa.me/971565450000', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-40 pb-20 relative overflow-hidden">
      {/* Footer Rhythm: Deep Contrast */}
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
          
          {/* 01. Brand Intelligence */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-gold flex items-center justify-center text-navy-900 font-black text-2xl">E</div>
                <span className="text-3xl font-black uppercase tracking-tighter">ETMAM</span>
             </div>
             <p className="text-white/30 text-base leading-relaxed font-light mb-12">
                Elevating the real estate ecosystem through strategic tokenization, expert advisory, and executive education. Led by Ghassan Farajallah.
             </p>
             <div className="flex gap-6">
                {socialLinks.map((link, i) => (
                  <a key={i} href={link.url} className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/20 hover:text-gold hover:border-gold transition-all duration-700 metallic-glow">
                    {link.icon}
                  </a>
                ))}
             </div>
          </div>

          {/* 02. Navigation Protocol */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Navigation</h4>
             <ul className="space-y-8">
                {['About', 'Services', 'Ventures', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <Link to={`/${item.toLowerCase()}`} className="text-white/50 hover:text-gold transition-all font-black text-xs uppercase tracking-widest flex items-center gap-3 group">
                       <span className="w-0 group-hover:w-4 h-[1px] bg-gold transition-all" />
                       {item}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* 03. Communication Node */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Protocol Links</h4>
             <ul className="space-y-10 text-white/40 text-sm font-light">
                <li className="flex items-center gap-5">
                   <Mail size={20} className="text-gold/60" />
                   <span className="tracking-tight">info@etmam.net</span>
                </li>
                <li className="flex items-center gap-5">
                   <MapPin size={20} className="text-gold/60" />
                   <span className="tracking-tight uppercase">Dubai, United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-5">
                   <ShieldCheck size={20} className="text-gold/60" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Institutional Privacy</span>
                </li>
             </ul>
          </div>

          {/* 04. Executive Intelligence */}
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Newsletter</h4>
             <p className="text-white/20 text-xs mb-10 font-light italic leading-relaxed">Secure exclusive strategic updates from the ETMAM intelligence unit.</p>
             <div className="relative group/input">
                <input type="email" placeholder="professional@domain.com" className="w-full bg-transparent border-b border-white/10 pb-6 text-white focus:border-gold outline-none transition-all placeholder:text-white/10 font-light" />
                <button className="absolute right-0 bottom-6 text-gold/40 group-hover/input:text-gold group-hover/input:translate-x-2 transition-all">
                   <ArrowRight size={24} />
                </button>
             </div>
             <div className="flex items-center gap-3 mt-10">
                <Activity size={14} className="text-emerald-500/40" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10">Transmission Secure</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar: Rhythm Shift */}
        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
           <div className="space-y-2">
              <p className="text-white/10 text-[10px] font-black uppercase tracking-[0.2em] leading-none">
                 © 2026 ETMAM CONSULTING. ALL RIGHTS RESERVED.
              </p>
              <p className="text-white/5 text-[9px] font-black uppercase tracking-[0.4em]">
                 BUILT WITH PRECISION & AUTHORITY.
              </p>
           </div>
           <div className="flex gap-12 text-white/10 text-[10px] font-black uppercase tracking-widest">
              <a href="#" className="hover:text-gold transition-colors">Privacy Charter</a>
              <a href="#" className="hover:text-gold transition-colors">Operational Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
