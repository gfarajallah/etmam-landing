import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    { title: "Transparency", icon: <Shield className="text-gold" />, desc: "Unwavering commitment to clear, honest communication in complex financial structures." },
    { title: "Precision", icon: <Target className="text-gold" />, desc: "Meticulous technical and strategic execution tailored to enterprise-grade standards." },
    { title: "Innovation", icon: <Lightbulb className="text-gold" />, desc: "Pushing the boundaries of real estate through blockchain and tokenization." },
    { title: "Empowerment", icon: <Users className="text-gold" />, desc: "Building capacity through exclusive workshops and knowledge sharing." }
  ];

  return (
    <div className="pt-32 pb-20 bg-navy-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
              A Decade of <span className="text-gold italic font-light">Leadership.</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              With over 10 years of experience in the UAE real estate and technology sectors, Ghassan Farajallah has been a pivotal force in driving digital transformation in the region.
            </p>
            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                Having trained over 500 professionals and overseen high-value tokenization initiatives, Ghassan identified a critical gap: the need for absolute clarity in the face of complex innovation.
              </p>
              <p>
                ETMAM was founded as the answer to that gap—a specialized advisory and execution engine designed to bring technical excellence and strategic vision to the forefront of the new economy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <div className="aspect-square relative overflow-hidden rounded-sm border border-white/10 p-4 bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1974" 
                  alt="Executive Meeting" 
                  className="w-full h-full object-cover opacity-80"
                />
             </div>
             {/* Abstract elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-navy-800 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-widest text-xs text-gold">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The ETMAM Standard</h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-navy-900 border border-white/10 rounded-sm"
            >
              <div className="mb-6">{v.icon}</div>
              <h4 className="text-xl font-bold mb-4">{v.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 max-w-5xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-3xl md:text-4xl font-light italic text-white/80 leading-snug mb-10">
            "We don't just build platforms; we build the trust and infrastructure required for the next generation of global capital movements."
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <h5 className="text-xl font-bold">Ghassan Farajallah</h5>
          <p className="text-gold text-xs uppercase tracking-widest mt-2">Executive Visionary</p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
