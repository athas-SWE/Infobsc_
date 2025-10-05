import React from 'react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
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
                  src="/logo.png" 
                  alt="INFO BSC Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At INFO BSC, we collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include your name, email address, phone number, and project details.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also collect information automatically when you visit our website, including your IP address, 
              browser type, device information, and usage patterns.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide and improve our software development services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you technical updates and support information</li>
              <li>Process payments and manage your account</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Information Sharing</h3>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share information with trusted service providers who assist us 
              in operating our business, conducting our business, or serving our users.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h3>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Contact Us</h3>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
