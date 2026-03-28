import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-gold)]/30 flex flex-col font-inter relative transition-colors duration-700">
        <InstitutionalBackground />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/etmam" element={<EtmamConsulting />} />
            <Route path="/solutions/smart-blocks" element={<SmartBlocksEngine />} />
            <Route path="/solutions/smart-agent" element={<SmartAgentAI />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
