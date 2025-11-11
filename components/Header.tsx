/**
 * The main header component for the website.
 * Features a responsive navigation bar that collapses into a hamburger menu on smaller screens.
 */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  // State to manage the visibility of the mobile menu.
  const [isOpen, setIsOpen] = useState(false);

  // Style object for the active navigation link.
  const activeLinkStyle = {
    color: '#008eec', // A distinct color to highlight the current page.
    fontWeight: '600',
  };

  // Animation variants for the mobile menu using Framer Motion.
  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-brand-blue-700 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <Link to="/" className="flex-shrink-0">
             <div className="flex items-center space-x-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 10a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zM15 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.293 5.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM12.586 12.586a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.293 14.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM12.586 7.414a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 4a6 6 0 100 12 6 6 0 000-12zM8 10a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                </svg>
                <span className="text-2xl font-bold">Pristine Solar Cleaning</span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                // Apply active style when the link's path matches the current URL.
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-white hover:text-amber-300 transition-colors duration-300 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          {/* Desktop Call-to-Action Button */}
          <div className="hidden lg:block">
            <Link to="/quote" className="bg-amber-400 hover:bg-amber-500 text-brand-blue-900 font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  // Close icon (X) when menu is open
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon when menu is closed
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu (Animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.2 }}
              className="lg:hidden pb-4"
            >
              <nav className="flex flex-col space-y-4 items-center">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)} // Close menu on link click
                    style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                    className="text-white hover:text-amber-300 transition-colors duration-300 font-medium text-lg"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link to="/quote" onClick={() => setIsOpen(false)} className="bg-amber-400 hover:bg-amber-500 text-brand-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 w-full text-center mt-4">
                  Get a Free Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;