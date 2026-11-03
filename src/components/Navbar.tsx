import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const linkClass =
  'text-gray-700 hover:text-blue-900 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-900 after:to-yellow-600 hover:after:w-full after:transition-all after:duration-300';

const mobileLinkClass =
  'text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all duration-300 block py-2 xs:py-3 px-3 xs:px-4 rounded-lg text-sm xs:text-base';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const homeSection = (hash: string) =>
    location.pathname === '/' ? hash : `/${hash}`;

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [location.pathname, location.hash]);

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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setProductsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-glass shadow-lg border-b border-gray-200/50 navbar-animate">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 xs:py-3 sm:py-4 md:py-6 px-3 xs:px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to={homeSection('#home')} className={linkClass}>
            Home
          </Link>
          <Link to={homeSection('#services')} className={linkClass}>
            Services
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'text-blue-900 after:w-full' : ''}`
              }
            >
              Products
            </NavLink>
            {productsOpen && (
              <div className="absolute top-full left-0 pt-3">
                <div className="w-64 rounded-xl border border-gray-100 bg-white shadow-xl p-2">
                  <Link
                    to="/products"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/products/sids"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                  >
                    SIDS
                  </Link>
                  <Link
                    to="/products/distribution360"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                  >
                    Distribution360
                  </Link>
                  <Link
                    to="/products/crm"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                  >
                    INFOBSC CRM
                  </Link>
                  <Link
                    to="/book-demo"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-50"
                  >
                    Book a Demo →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to={homeSection('#about')} className={linkClass}>
            About Us
          </Link>
          <Link to={homeSection('#blog')} className={linkClass}>
            Blog
          </Link>
          <Link to={homeSection('#contact')} className={linkClass}>
            Contact
          </Link>
        </nav>

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

      <nav
        ref={mobileMenuRef}
        className={
          'lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50 transition-all duration-300 ease-out ' +
          (isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none')
        }
      >
        <div className="px-3 xs:px-4 py-4 xs:py-6 space-y-2 xs:space-y-3">
          <Link to={homeSection('#home')} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to={homeSection('#services')} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/products" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/products/sids" className={`${mobileLinkClass} pl-6`} onClick={() => setIsOpen(false)}>
            SIDS
          </Link>
          <Link
            to="/products/distribution360"
            className={`${mobileLinkClass} pl-6`}
            onClick={() => setIsOpen(false)}
          >
            Distribution360
          </Link>
          <Link to="/products/crm" className={`${mobileLinkClass} pl-6`} onClick={() => setIsOpen(false)}>
            INFOBSC CRM
          </Link>
          <Link to="/book-demo" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Book a Demo
          </Link>
          <Link to={homeSection('#about')} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to={homeSection('#blog')} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to={homeSection('#contact')} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
