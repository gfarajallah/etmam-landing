import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';

const About = () => <div className="pt-32 pb-20 px-6 text-white text-center h-screen flex items-center justify-center flex-col"><h1 className="text-5xl font-bold mb-4">About Ghassan Farajallah</h1><p className="text-white/60">Executive biography coming soon.</p></div>;
const Services = () => <div className="pt-32 pb-20 px-6 text-white text-center h-screen flex items-center justify-center flex-col"><h1 className="text-5xl font-bold mb-4">ETMAM Solutions</h1><p className="text-white/60">Professional services overview coming soon.</p></div>;
const Ventures = () => <div className="pt-32 pb-20 px-6 text-white text-center h-screen flex items-center justify-center flex-col"><h1 className="text-5xl font-bold mb-4">Portfolio & Ventures</h1><p className="text-white/60">SmartBlocks and other ventures coming soon.</p></div>;
const Contact = () => <div className="pt-32 pb-20 px-6 text-white text-center h-screen flex items-center justify-center flex-col"><h1 className="text-5xl font-bold mb-4">Connect with Ghassan</h1><p className="text-white/60">Enterprise lead capture form coming soon.</p></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] selection:bg-gold/30 flex flex-col font-inter">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
