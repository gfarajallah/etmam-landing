import { useLanguage } from '@/context/useLanguage';
import PricingSlider from '@/components/interactive/PricingSlider';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Cpu, 
  Zap, 
  Lock, 
  ArrowRight, 
  BarChart4, 
  ShieldCheck, 
  Coins, 
  LayoutDashboard,
  Wallet
} from 'lucide-react';

const SmartBlocksEngine = () => {
  const { lang } = useLanguage();

  const benefits = [
    {
      title: lang === 'en' ? "Institutional Liquidity" : "السيولة المؤسسية",
      desc: lang === 'en' ? "Transform illiquid real estate into tradeable digital fractions with sub-second finality." : "تحويل العقارات غير السائلة إلى أجزاء رقمية قابلة للتداول بلمسة نهائية في أجزاء من الثانية.",
      icon: <Zap size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Fractional Governance" : "الحوكمة المجزأة",
      desc: lang === 'en' ? "Enable thousands of stakeholders to co-own and govern prime assets through smart contracts." : "تمكين آلاف أصحاب المصلحة من التملك المشترك وحوكمة الأصول الرئيسية من خلال العقود الذكية.",
      icon: <ShieldCheck size={24} className="text-[var(--accent-gold)]" />
    },
    {
      title: lang === 'en' ? "Global Accessibility" : "الوصول العالمي",
      desc: lang === 'en' ? "Democratize high-yield real estate investment for a borderless investor class." : "إضفاء الطابع الديمقراطي على الاستثمار العقاري عالي العائد لفئة من المستثمرين بلا حدود.",
      icon: <Globe size={24} className="text-[var(--accent-gold)]" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: lang === 'en' ? "Asset Wrapping" : "تغليف الأصول",
      desc: lang === 'en' ? "Legal and technical structuring of the physical asset into a digital container." : "الهيكلة القانونية والتقنية للأصل المادي في حاوية رقمية."
    },
    {
      num: "02",
      title: lang === 'en' ? "Protocol Minting" : "سك البروتوكول",
      desc: lang === 'en' ? "Generation of smart contracts and ERC-3643 compliant security tokens." : "إنشاء العقود الذكية ورموز الأمان المتوافقة مع ERC-3643."
    },
    {
      num: "03",
      title: lang === 'en' ? "Market Distribution" : "توزيع السوق",
      desc: lang === 'en' ? "Onboarding investors and facilitating secondary market trading nodes." : "ضم المستثمرين وتسهيل عقد تداول السوق الثانوية."
    }
  ];

  return (
    <div className={`pt-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      
      {/* 01. Hero - The Power of Tokenization */}
      <section className="relative py-40 md:py-60 overflow-hidden z-10 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             className="max-w-5xl"
           >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
                <span className="text-[var(--accent-gold)] text-[10px] font-black uppercase tracking-[0.5em]">
                  {lang === 'en' ? 'SmartBlocks Intelligence' : 'ذكاء سمارت بلوكس'}
                </span>
                <div className="w-10 h-[1px] bg-[var(--accent-gold)]/50" />
              </div>
              <h1 className={`text-6xl md:text-[8rem] font-black mb-12 uppercase tracking-tighter leading-[0.85] ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'en' ? <>Empowering <br /><span className="gold-gradient-text italic">Real Estate.</span></> : <>تمكين <br /><span className="gold-gradient-text italic">العقارات.</span></>}
              </h1>
              <p className="text-2xl text-[var(--text-primary)] opacity-50 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                 {lang === 'en' 
                   ? 'The definitive engine for high-authority tokenization. Empowering decision-makers with realistic, responsible, and strategic technology.'
                   : 'المحرك النهائي للترميز عالي السلطة. تمكين صناع القرار من تكنولوجيا واقعية ومسؤولة واستراتيجية.'}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                 <Link to="/contact" className="btn-premium">
                    {lang === 'en' ? 'Inquire Protocol' : 'استفسار عن البروتوكول'}
                    <ArrowRight size={18} className={`inline ${lang === 'ar' ? 'mr-3 rotate-180' : 'ml-3'}`} />
                 </Link>
                 <div className="flex items-center gap-6 p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 backdrop-blur-md">
                    <div className="w-12 h-12 bg-[var(--accent-gold)]/10 flex items-center justify-center">
                       <BarChart4 size={24} className="text-[var(--accent-gold)]" />
                    </div>
                    <div className="text-left">
                       <span className="text-[10px] font-black uppercase tracking-widest block opacity-40">Trading Volume Management</span>
                       <span className="text-xl font-bold">$4.2B+ Potential</span>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 02. Institutional Features Grid */}
      <section className="py-52 z-10 relative">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-16 premium-card border-[var(--border-color)] bg-[var(--bg-secondary)]/20 group hover:bg-[var(--bg-secondary)]/40 transition-all duration-700"
              >
                 <div className="mb-10 w-16 h-16 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors">
                   {b.icon}
                 </div>
                 <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{b.title}</h4>
                 <p className="opacity-30 text-sm leading-relaxed font-light">{b.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 03. The Tokenization Flow */}
      <section className="py-52 bg-[var(--bg-secondary)]/30 z-10 relative border-y border-[var(--border-color)]">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-40">
               <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic">
                 {lang === 'en' ? <>Tokenization <span className="not-italic text-[var(--accent-gold)]">Flow.</span></> : <>تدفق <span className="not-italic text-[var(--accent-gold)]">الترميز.</span></>}
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--accent-gold)]/10 hidden md:block" />
               {processSteps.map((s, i) => (
                 <div key={i} className="relative z-20 group">
                    <div className="w-24 h-24 bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center mb-12 group-hover:border-[var(--accent-gold)] transition-colors mx-auto">
                       <span className="text-4xl font-black text-[var(--accent-gold)] opacity-20 group-hover:opacity-100 transition-opacity italic">{s.num}</span>
                    </div>
                    <div className="text-center">
                       <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{s.title}</h4>
                       <p className="opacity-30 text-sm leading-relaxed font-light max-w-xs mx-auto">{s.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 04. Tactical Control - Dynamic Slider */}
      <section className="py-60 z-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-tight italic">
              {lang === 'en' ? <>Scale at the speed of <br /><span className="text-[var(--accent-gold)] not-italic">Light.</span></> : <>توسع بسرعة <br /><span className="text-[var(--accent-gold)] not-italic">الضوء.</span></>}
            </h2>
            <p className="text-[var(--text-primary)] opacity-30 text-2xl mb-20 font-light">
              {lang === 'en' 
                ? 'Deploy your institutional asset portfolio to the blockchain in under 48 hours.'
                : 'انشر محفظة أصولك المؤسسية على البلوكتشين في أقل من 48 ساعة.'}
            </p>
            <Link to="/contact" className="btn-premium px-20">
              {lang === 'en' ? 'COMMAND PROTOCOL' : 'قيادة البروتوكول'}
            </Link>
         </div>
      </section>
    </div>
  );
};

export default SmartBlocksEngine;
