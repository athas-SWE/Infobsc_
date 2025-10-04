import React from 'react';

interface RefundPolicyProps {
  onClose: () => void;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ onClose }) => {
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
              <h2 className="text-2xl font-bold">Refund Policy</h2>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              INFO BSC offers refunds under the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Project cancellation before development begins (full refund)</li>
              <li>Failure to deliver agreed-upon deliverables within specified timeline</li>
              <li>Significant deviation from agreed project specifications</li>
              <li>Technical issues that prevent project completion</li>
              <li>Mutual agreement between client and INFO BSC</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Process</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Step 1: Request Submission</h4>
                <p className="text-gray-700 text-sm">
                  Submit a refund request via email to contact@infobsc.com with detailed reasons and supporting documentation.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Step 2: Review Process</h4>
                <p className="text-gray-700 text-sm">
                  Our team will review your request within 5-7 business days and may request additional information.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Step 3: Refund Processing</h4>
                <p className="text-gray-700 text-sm">
                  Approved refunds will be processed within 10-15 business days using the original payment method.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Amounts</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Project Stage</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Refund Percentage</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Before Development</td>
                    <td className="border border-gray-300 px-4 py-2">100%</td>
                    <td className="border border-gray-300 px-4 py-2">No work has been started</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Planning Phase</td>
                    <td className="border border-gray-300 px-4 py-2">90%</td>
                    <td className="border border-gray-300 px-4 py-2">Only planning completed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Development Phase</td>
                    <td className="border border-gray-300 px-4 py-2">50-80%</td>
                    <td className="border border-gray-300 px-4 py-2">Based on work completed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Testing Phase</td>
                    <td className="border border-gray-300 px-4 py-2">20-50%</td>
                    <td className="border border-gray-300 px-4 py-2">Based on remaining work</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Non-Refundable Items</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The following items are generally non-refundable:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Third-party software licenses and subscriptions</li>
              <li>Domain registrations and hosting fees</li>
              <li>Custom graphics and design work (if completed)</li>
              <li>Consultation fees for completed sessions</li>
              <li>Training and support services already provided</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dispute Resolution</h3>
            <p className="text-gray-700 leading-relaxed">
              If you disagree with our refund decision, you may request a review by our management team. 
              We are committed to resolving disputes fairly and amicably. In case of unresolved disputes, 
              we recommend mediation or arbitration as per Sri Lankan law.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-700 leading-relaxed">
              For refund requests or questions about this policy, please contact us:
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

export default RefundPolicy;
