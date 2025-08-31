
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-glass shadow-lg border-b border-gray-200/50 navbar-animate">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-6 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center">
          <div className="relative">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-lg">I</span>
            </div> */}
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 navbar-logo-animate">
            INFO(BSC)
          </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) => 
              isActive 
                ? 'text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600' 
                : 'text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 hover:after:w-full after:transition-all after:duration-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => 
              isActive 
                ? 'text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600' 
                : 'text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 hover:after:w-full after:transition-all after:duration-300'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/success-stories"
            className={({ isActive }) => 
              isActive 
                ? 'text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600' 
                : 'text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 hover:after:w-full after:transition-all after:duration-300'
            }
          >
            Success Stories
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              isActive 
                ? 'text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600' 
                : 'text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 hover:after:w-full after:transition-all after:duration-300'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              isActive 
                ? 'text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600' 
                : 'text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 hover:after:w-full after:transition-all after:duration-300'
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
        <nav
        ref={mobileMenuRef}
          className={
          'lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50 transition-all duration-300 ease-out ' +
          (isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none')
          }
        >
        <div className="px-4 py-6 space-y-2">
              <NavLink
                to="/"
                end
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold block py-3 px-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 transition-all duration-300'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 block py-3 px-4 rounded-lg'
            }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold block py-3 px-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 transition-all duration-300'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 block py-3 px-4 rounded-lg'
            }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/success-stories"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold block py-3 px-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 transition-all duration-300'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 block py-3 px-4 rounded-lg'
            }
                onClick={() => setIsOpen(false)}
              >
            Success Stories
              </NavLink>
              <NavLink
                to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold block py-3 px-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 transition-all duration-300'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 block py-3 px-4 rounded-lg'
            }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold block py-3 px-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 transition-all duration-300'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 block py-3 px-4 rounded-lg'
            }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
        </div>
        </nav>
    </header>
  );
};

export default Navbar;