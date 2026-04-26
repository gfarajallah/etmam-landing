import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InstitutionalBackground from '@/components/interactive/InstitutionalBackground';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Solutions from '@/pages/Solutions';
import EtmamConsulting from '@/pages/EtmamConsulting';
import SmartBlocksEngine from '@/pages/SmartBlocksEngine';
import SmartAgentAI from '@/pages/SmartAgentAI';
import Ventures from '@/pages/Ventures';
import Insights from '@/pages/Insights';
import Contact from '@/pages/Contact';
import Academy from '@/pages/Academy';
import { pageTransition } from '@/lib/animations';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="flex-grow flex flex-col"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/etmam" element={<EtmamConsulting />} />
          <Route path="/solutions/smart-blocks" element={<SmartBlocksEngine />} />
          <Route path="/solutions/smart-agent" element={<SmartAgentAI />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-gold)]/30 flex flex-col font-inter relative transition-colors duration-700 overflow-x-hidden">
        <InstitutionalBackground />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
