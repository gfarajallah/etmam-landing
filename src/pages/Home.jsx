import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Years of Leadership', value: '10+', icon: <Award className="text-gold" /> },
    { label: 'Professionals Trained', value: '500+', icon: <Users className="text-gold" /> },
    { label: 'Asset Value Tokenized', value: '$1B+', icon: <TrendingUp className="text-gold" /> },
  ];

  const corePillars = [
    {
      title: "Executive Consulting",
      description: "Strategic advisory for real estate enterprises transitioning to digital assets and blockchain efficiency.",
      link: "/services",
      role: "ETMAM Engine"
    },
    {
      title: "Web3 Venturing",
      description: "Building the future of finance. Flagship projects like SmartBlocks defining the tokenization standard.",
      link: "/ventures",
      role: "Visionary Builder"
    }
  ];

  return (
    <div className="bg-navy-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="High-end Architecture" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-gold/5">
              Visionary & Founder
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Clarity Makes <br /> 
              <span className="text-gold italic font-light">The Difference.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
              Ghassan Farajallah is redefining the real estate ecosystem through the lens of tokenization and strategic leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gold text-navy-900 font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-all flex items-center justify-center gap-2 group">
                Work with ETMAM <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-all font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                Watch Vision <PlayCircle size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Visual Frame for Personal Brand */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/20 grayscale hover:grayscale-0 transition-all duration-1000 group">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
                alt="Ghassan Farajallah" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-navy-900/90 backdrop-blur-md border border-white/10">
                <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-1">Founder & CEO</p>
                <h3 className="text-xl font-bold">Ghassan Farajallah</h3>
              </div>
            </div>
            {/* Design elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold/30" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold/30" />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-800 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                <p className="text-sm text-white/50 uppercase tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Domains</h2>
            <div className="w-24 h-1 bg-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-12 bg-white/5 border border-white/10 rounded-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-gold/20 text-6xl font-black">0{idx+1}</div>
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4 block">{pillar.role}</span>
                <h3 className="text-2xl font-bold mb-6">{pillar.title}</h3>
                <p className="text-white/50 mb-8 leading-relaxed">
                  {pillar.description}
                </p>
                <Link to={pillar.link} className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:text-gold transition-colors">
                  Explore Insights <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Programs Section */}
      <section className="py-32 bg-navy-800 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Education & Masterclasses</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Clarity Makes <br /> The Difference.</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Exclusive workshops designed for real estate professionals and executives looking to master the foundations of tokenization and strategic leadership in a digital-first economy.
            </p>
            <ul className="space-y-4 mb-10">
              {['Tokenization Foundations', 'Executive Leadership in Web3', 'Digital Asset Strategy'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-10 py-5 bg-navy-900 border border-gold/30 text-gold font-bold uppercase tracking-widest text-sm hover:bg-gold hover:text-navy-900 transition-all">
              Register for Next Session
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-video bg-navy-900 rounded-sm border border-white/10 flex items-center justify-center group cursor-pointer overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                alt="Workshop Session" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center text-navy-900 shadow-xl shadow-gold/20 group-hover:scale-110 transition-transform">
                  <PlayCircle size={40} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 px-8 py-6 bg-gold text-navy-900 font-black text-4xl italic">
              LIVE
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Venture Teaser */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0 bg-gold radial-gradient" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Building the Standard</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-10">SmartBlocks.</h2>
          <p className="text-white/50 text-xl mb-12 leading-relaxed">
            The flagship venture defining real estate tokenization. A product-grade platform built with uncompromising precision.
          </p>
          <Link to="/ventures" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy-900 font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors">
            View Marketplace Case Study <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
