import { motion } from 'framer-motion';
import { Database, TrendingUp, Presentation, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Tokenization Strategy",
      icon: <Database className="text-gold" size={32} />,
      desc: "Comprehensive logic for converting physical real estate assets into digital, fractionalized tokens on the blockchain."
    },
    {
      title: "Strategic Advisory",
      icon: <TrendingUp className="text-gold" size={32} />,
      desc: "Market analysis and positioning for enterprise leaders looking to leverage the next wave of financial technology."
    },
    {
      title: "Workshops & Training",
      icon: <Presentation className="text-gold" size={32} />,
      desc: "Founder-led training sessions for executives to master the transition to a tokenized ecosystem."
    },
    {
      title: "Project Auditing",
      icon: <Search className="text-gold" size={32} />,
      desc: "Deep-level technical and operational audits to ensure your blockchain initiatives are compliant and robust."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-navy-900 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Consulting & <br /><span className="text-gold italic font-light">Solutions.</span></h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            ETMAM provides the technical foundation and strategic clarity required for high-stakes blockchain and real estate ventures.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 border border-white/10 rounded-sm hover:border-gold/50 transition-colors group"
          >
            <div className="mb-8 p-4 bg-navy-900 inline-block rounded-sm border border-white/5">
              {s.icon}
            </div>
            <h3 className="text-3xl font-bold mb-6">{s.title}</h3>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              {s.desc}
            </p>
            <Link to="/contact" className="flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-xs group-hover:gap-4 transition-all">
              Inquire for Engagement <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-16 bg-gold text-navy-900 rounded-sm flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Ready to Scale?</h2>
            <p className="text-navy-800 font-medium max-w-md">Schedule a private consulting session with Ghassan to discuss your project requirements.</p>
          </div>
          <Link to="/contact" className="px-12 py-5 bg-navy-900 text-gold font-bold uppercase tracking-widest text-sm hover:bg-navy-800 transition-colors">
            Book a Meeting
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
