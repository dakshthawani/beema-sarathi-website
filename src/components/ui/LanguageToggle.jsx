import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = ({ className = "" }) => {
  const { language, toggleLanguage, isHindi, isEnglish } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`
        flex items-center space-x-2 px-3 py-1.5 rounded-lg
        bg-white/10 hover:bg-white/20 backdrop-blur-sm
        border border-white/20 text-white
        transition-all duration-300 focus:outline-none 
        focus:ring-2 focus:ring-emerald-500
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {isEnglish ? 'EN' : 'हि'}
      </span>
      <motion.div
        className="w-1 h-1 bg-emerald-400 rounded-full"
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

export default LanguageToggle;