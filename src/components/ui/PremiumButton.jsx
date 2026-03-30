import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';

const PremiumButton = ({
  to,
  onClick,
  children,
  className = '',
  icon = true,
  scale = 'scale-110', // By default premium buttons scale up naturally
  type = 'button',
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center">
        {children}
        {icon && (
          <span className="ms-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 block">
            {isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </span>
        )}
      </span>
    </>
  );

  // Common unified sizes: px-10 py-5 roughly fits institutional standards
  // scale class allows overrides but defaults to scale-110 mapping from index.css logic
  const baseClasses = `btn-premium group flex items-center justify-center px-10 py-5 shadow-gold/20 ${scale} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default PremiumButton;
