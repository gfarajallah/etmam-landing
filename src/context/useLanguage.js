import { useContext } from 'react';
import { LanguageContext } from './LanguageContextInstance';

export const useLanguage = () => useContext(LanguageContext);
