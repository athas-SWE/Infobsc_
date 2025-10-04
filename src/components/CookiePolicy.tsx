import React from 'react';

interface CookiePolicyProps {
  onClose: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img 
                  src="/src/logo.png" 
                  alt="INFO BSC Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold">Cookie Policy</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="text-sm text-gray-500 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </div>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What Are Cookies?</h3>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Essential Cookies</h4>
                <p className="text-gray-700 text-sm">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
                  and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Analytics Cookies</h4>
                <p className="text-gray-700 text-sm">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information 
                  anonymously. This helps us improve our website's performance and user experience.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Preference Cookies</h4>
                <p className="text-gray-700 text-sm">
                  These cookies remember your choices and preferences, such as language settings, to provide you with a 
                  more personalized experience on future visits.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              INFO BSC uses cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality and performance</li>
              <li>Provide personalized content and services</li>
              <li>Ensure website security</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Managing Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Use your browser settings to block or delete cookies</li>
              <li>Set your browser to notify you when cookies are being set</li>
              <li>Use browser extensions to manage cookie preferences</li>
              <li>Opt out of analytics cookies through our cookie banner</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain cookies from third-party services such as Google Analytics, social media platforms, 
              and other tools that help us provide better services. These third parties have their own privacy policies 
              and cookie practices.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700"><strong>Email:</strong> contact@infobsc.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +94 75 249 1313</p>
              <p className="text-gray-700"><strong>Address:</strong> 159A, Mathrsa Road, Kalmunai -10, Sri Lanka</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
