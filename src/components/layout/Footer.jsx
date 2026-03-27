import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center font-bold text-navy-900 text-lg">E</div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">Etmam Consulting</span>
          </Link>
          <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
            Elevating the real estate ecosystem through strategic tokenization, expert advisory, and executive education. Led by Ghassan Farajallah.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy-900 hover:border-gold transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy-900 hover:border-gold transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy-900 hover:border-gold transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-white/50 hover:text-gold transition-colors text-sm">About Ghassan</Link></li>
            <li><Link to="/services" className="text-white/50 hover:text-gold transition-colors text-sm">Solutions</Link></li>
            <li><Link to="/ventures" className="text-white/50 hover:text-gold transition-colors text-sm">Portfolio</Link></li>
            <li><Link to="/contact" className="text-white/50 hover:text-gold transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-white/50 text-sm mb-4">Stay updated with executive insights.</p>
          <div className="flex bg-white/5 p-1 rounded-sm border border-white/10">
            <input type="email" placeholder="Email Address" className="bg-transparent border-none text-white text-sm px-3 focus:ring-0 w-full" />
            <button className="bg-gold text-navy-900 p-2 rounded-sm hover:bg-gold-light transition-colors">
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} ETMAM. All Rights Reserved. Built with precision.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Privacy Policy</a>
          <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
