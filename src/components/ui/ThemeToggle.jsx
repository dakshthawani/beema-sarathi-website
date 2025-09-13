import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = () => {
    const nextIsDark = !isDark;
    // eslint-disable-next-line no-console
    console.log('[ThemeToggle] switching to:', nextIsDark ? 'dark' : 'light');
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        relative w-12 h-6 rounded-full p-1 
        ${isDark ? 'bg-emerald-600' : 'bg-navy-200'}
        transition-colors duration-300 focus:outline-none focus:ring-2 
        focus:ring-emerald-500 focus:ring-offset-2
        ${className}
      `}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`
          w-4 h-4 rounded-full flex items-center justify-center
          ${isDark ? 'bg-navy-900' : 'bg-white'}
          shadow-md
        `}
        animate={{
          x: isDark ? 20 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {isDark ? (
          <Moon className="w-2.5 h-2.5 text-emerald-400" />
        ) : (
          <Sun className="w-2.5 h-2.5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;