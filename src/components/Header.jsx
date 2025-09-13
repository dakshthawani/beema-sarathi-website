import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import LanguageToggle from './ui/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`
        sticky top-0 z-50 transition-all duration-500
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/80'}
        text-navy-900
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top contact bar */}
      <div className="bg-navy-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>📧 info@bimasarthi.com</span>
            <span>📞 +91-9314423576</span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="hidden md:flex space-x-3">
              <motion.a
                href="#"
                className="hover:text-emerald-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t('facebook')}
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-emerald-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t('twitter')}
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-emerald-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t('linkedin')}
              </motion.a>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageToggle />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl font-bold">
              <span className="text-emerald-600 gradient-text">
                {language === 'hi' ? 'बीमा' : 'Bima'}
              </span>
              <span className="ml-1 text-navy-900">
                {language === 'hi' ? 'सारथि' : 'Sarthi'}
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: 'home', href: '#home' },
              { key: 'services', href: '#services', hasDropdown: true },
              { key: 'about', href: '#about' },
              { key: 'contact', href: '#contact' },
              { key: 'dashboard', href: '#dashboard' },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`
                        flex items-center font-medium transition-colors hover-3d
                        text-gray-700 hover:text-emerald-600
                      `}
                    >
                      {t(item.key)} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-gray-200">
                      <DropdownMenuItem className="hover:bg-emerald-100">
                        {t('healthInsurance')}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-emerald-100">
                        {t('lifeInsurance')}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-emerald-100">
                        {t('vehicleInsurance')}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-emerald-100">
                        {t('homeInsurance')}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-emerald-100">
                        {t('corporateInsurance')}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <motion.a
                    href={item.href}
                    className="font-medium transition-colors text-gray-700 hover:text-emerald-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(item.key)}
                  </motion.a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 font-medium btn-hover animate-glow transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {t('getQuote')}
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy-900 hover:bg-gray-100"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              <nav className="flex flex-col space-y-4">
                {[
                  { key: 'home', href: '#home' },
                  { key: 'services', href: '#services' },
                  { key: 'about', href: '#about' },
                  { key: 'contact', href: '#contact' },
                  { key: 'dashboard', href: '#dashboard' },
                ].map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    className="font-medium transition-colors text-gray-700 hover:text-emerald-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full mt-4 btn-hover">
                    {t('getQuote')}
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
