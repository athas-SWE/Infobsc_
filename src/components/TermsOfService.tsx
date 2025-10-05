import React from 'react';

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
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
              <h2 className="text-2xl font-bold">Terms of Service</h2>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using INFO BSC's services, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Services Description</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              INFO BSC provides software development services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Web Application Development</li>
              <li>Mobile Application Development</li>
              <li>Cloud Solutions & Development</li>
              <li>Desktop Application Development</li>
              <li>Enterprise Software Development</li>
              <li>Custom Software Solutions</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate and complete project requirements</li>
              <li>Make timely payments as agreed in the contract</li>
              <li>Provide necessary access to systems and data</li>
              <li>Respond to requests for feedback and approvals</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              Payment terms will be specified in individual project contracts. Generally, we require a deposit 
              before project commencement and milestone-based payments throughout the development process. 
              Late payments may incur additional charges.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon full payment, you will own the intellectual property rights to the custom software developed 
              specifically for your project. INFO BSC retains rights to any pre-existing code, frameworks, 
              or methodologies used in the development process.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              INFO BSC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
              resulting from your use of our services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Information</h3>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
