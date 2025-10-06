import React from 'react';

interface FooterProps {
  onPolicyClick: (policyType: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPolicyClick }) => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-700/50">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4">
              Stay Updated with <span className="text-blue-400">INFO</span> <span className="text-yellow-400">BSC</span>
            </h3>
            <p className="text-gray-300 mb-6 xs:mb-8 text-sm xs:text-base sm:text-lg">Get the latest updates on software development, technology insights, and exclusive offers delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm xs:text-base"
              />
              <button className="px-6 xs:px-8 py-2 xs:py-3 bg-gradient-to-r from-blue-800 to-yellow-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm xs:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-12 xs:py-14 sm:py-16">
        <div className="grid gap-6 xs:gap-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 xs:space-y-6">
            <div className="flex items-center space-x-3 xs:space-x-4">
              <div className="w-12 h-12 xs:w-14 xs:h-14 bg-gradient-to-br from-blue-800/20 to-yellow-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <img 
                  src="/logo.png" 
                  alt="INFO BSC Logo" 
                  className="w-8 h-8 xs:w-10 xs:h-10 object-contain"
                />
              </div>
              <div>
                <span className="text-xl xs:text-2xl font-bold">
                  <span className="text-blue-400">INFO</span> <span className="text-yellow-400">BSC</span>
                </span>
                <p className="text-gray-400 text-sm mt-1">Empowering Digital Growth</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm xs:text-base sm:text-lg">
              A Sri Lankan based forward-thinking software development company specializing in cutting-edge technology solutions 
              to drive innovation, efficiency, and seamless digital experiences.
            </p>
            <div className="flex space-x-3 xs:space-x-4">
              <a
                href="https://www.linkedin.com/company/infobsc/"
                aria-label="LinkedIn"
                className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1AMhWUpUMF/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:from-blue-400 hover:to-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/94752491313?text=Hello! I'm interested in INFO BSC software development services. Can you help me?"
                aria-label="WhatsApp"
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:from-green-400 hover:to-green-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/infobsc_software/"
                aria-label="Instagram"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-yellow-400">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Web Application Development</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Mobile Application Development</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">AI & Automation</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Cloud Solutions & Development</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Desktop Application Development</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Enterprise Software Development</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
              <p className="text-gray-400 text-xs xs:text-sm">
                © 2024 <span className="text-blue-400">INFO</span> <span className="text-yellow-400">BSC</span>. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs xs:text-sm">
                Software Development Company
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 xs:gap-6 text-xs xs:text-sm">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPolicyClick('privacy');
                }}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Privacy Policy
              </button>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPolicyClick('terms');
                }}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Terms of Service
              </button>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPolicyClick('cookie');
                }}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Cookie Policy
              </button>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPolicyClick('refund');
                }}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
