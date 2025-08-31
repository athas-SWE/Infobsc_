import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navClasses = (active: boolean) =>
    active
      ? 'text-primary font-semibold'
      : 'text-gray-700 hover:text-primary transition-colors';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="text-xl font-bold text-primary">InfoBSC</Link>
        <button
          className="lg:hidden text-gray-700 hover:text-primary focus:outline-none"
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
        <nav
          className={
            'flex-col lg:flex-row lg:items-center lg:static absolute top-full right-0 left-0 bg-neutral lg:bg-transparent lg:translate-y-0 transition-transform duration-200 ease-out ' +
            (isOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0')
          }
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 lg:p-0">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => navClasses(isActive)}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => navClasses(isActive)}
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/success-stories"
                className={({ isActive }) => navClasses(isActive)}
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => navClasses(isActive)}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => navClasses(isActive)}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;