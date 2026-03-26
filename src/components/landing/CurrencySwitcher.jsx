import React from 'react';
import { motion } from 'framer-motion';

const currencies = [
{ code: 'AED', symbol: 'د.إ', label: 'AED' },
{ code: 'USD', symbol: '$', label: 'USD' }
];

export default function CurrencySwitcher({ currency, setCurrency, lang }) {
const isRTL = lang === 'ar';

return (
<div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}> <div className="relative bg-slate-800/50 backdrop-blur-md rounded-full p-1 border border-slate-700/50">
{currencies.map((curr) => (
<button
key={curr.code}
onClick={() => setCurrency(curr.code)}
className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              currency === curr.code
                ? 'text-[#0F172A]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
>
{currency === curr.code && (
<motion.div
layoutId="currency-active"
className="absolute inset-0 bg-[#C9A962] rounded-full"
transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
/>
)} <span className="relative z-10">{curr.label}</span> </button>
))} </div> </div>
);
}

// eslint-disable-next-line react-refresh/only-export-components
export const currencyData = {
AED: { symbol: 'د.إ', early: '1,499', regular: '2,399' },
USD: { symbol: '$', early: '399', regular: '649' }
};
