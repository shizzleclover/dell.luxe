import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useCart } from '../../context/CartContext';
import { cn } from '../../utils/cn';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
  
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled ? 
          'bg-white/80 dark:bg-luxury-navy/80 backdrop-blur-md shadow-sm' : 
          'bg-transparent'
      )}
    >
      <div className="container-luxe">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-heading font-medium tracking-wider text-luxury-charcoal dark:text-luxury-ivory">
            LUXE ATTIRE
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  cn('nav-link', isActive && 'text-luxury-gold dark:text-luxury-gold after:w-full')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Cart button */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-luxury-charcoal dark:text-luxury-ivory hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors"
              aria-label="Open cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxury-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
            
            <Link to="/admin" className="hidden md:block nav-link">
              Admin
            </Link>
            
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-luxury-charcoal dark:text-luxury-ivory hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        cn('block py-1 px-2 font-medium transition-colors', 
                          isActive ? 
                            'text-luxury-gold' : 
                            'text-luxury-charcoal dark:text-luxury-ivory hover:text-luxury-gold dark:hover:text-luxury-gold'
                        )
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) => 
                      cn('block py-1 px-2 font-medium transition-colors', 
                        isActive ? 
                          'text-luxury-gold' : 
                          'text-luxury-charcoal dark:text-luxury-ivory hover:text-luxury-gold dark:hover:text-luxury-gold'
                      )
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admin
                  </NavLink>
                </li>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 