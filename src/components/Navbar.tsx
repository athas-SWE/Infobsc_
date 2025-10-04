
import React, { useState, useEffect, useRef } from 'react';

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
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 xs:py-3 sm:py-4 md:py-6 px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-900 after:to-yellow-600 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-900 after:to-yellow-600 hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-900 after:to-yellow-600 hover:after:w-full after:transition-all after:duration-300"
          >
            About Us
          </a>
          <a
            href="#success-stories"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-900 after:to-yellow-600 hover:after:w-full after:transition-all after:duration-300"
          >
            Success Stories
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-900 after:to-yellow-600 hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden text-gray-700 hover:text-blue-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-5 h-5 xs:w-6 xs:h-6"
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
        <div className="px-3 xs:px-4 py-4 xs:py-6 space-y-2 xs:space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all duration-300 block py-2 xs:py-3 px-3 xs:px-4 rounded-lg text-sm xs:text-base"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all duration-300 block py-2 xs:py-3 px-3 xs:px-4 rounded-lg text-sm xs:text-base"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all duration-300 block py-2 xs:py-3 px-3 xs:px-4 rounded-lg text-sm xs:text-base"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a
                href="#success-stories"
                className="text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all duration-300 block py-2 xs:py-3 px-3 xs:px-4 rounded-lg text-sm xs:text-base"
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all duration-300 block py-2 xs:py-3 px-3 xs:px-4 rounded-lg text-sm xs:text-base"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
        </div>
        </nav>
    </header>
  );
};

export default Navbar;