import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { companyInfo } = useData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'المنتجات', path: '/products' },
    { name: 'الخدمات', path: '/services' },
    { name: 'مشاريعنا', path: '/projects' },
    { name: 'الفروع', path: '/branches' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {companyInfo.logo ? (
                <img 
                  src={companyInfo.logo} 
                  alt={companyInfo.name} 
                  className="h-12 md:h-16 w-auto object-contain"
                />
              ) : (
                <div className="h-12 w-12 bg-gradient-to-br from-brand-500 to-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  BS
                </div>
              )}
            </motion.div>
            <div className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-bold text-secondary-900 leading-none group-hover:text-brand-600 transition-colors">
                {companyInfo.name}
              </span>
              <span className="text-xs text-primary-600 font-medium mt-1">
                {companyInfo.slogan}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-all duration-200 relative py-1 ${
                    isActive ? 'text-brand-600' : 'text-gray-600 hover:text-brand-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-brand-500 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <button className="p-2 text-gray-500 hover:text-brand-500 transition-colors rounded-full hover:bg-gray-50">
              <Search size={20} />
            </button>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5 text-sm font-bold"
            >
              <Phone size={16} />
              <span>اطلب عرض سعر</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-brand-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-brand-500 font-medium px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
              <hr />
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary-500 text-white px-4 py-3 rounded-xl w-full font-bold shadow-md"
              >
                <Phone size={18} />
                <span>اطلب عرض سعر</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
