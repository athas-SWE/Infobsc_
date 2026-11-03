import React, { useEffect, useState } from 'react';
import { InquiryType } from '../../types/products';

interface ProductInquiryFormProps {
  productId: string;
  productName: string;
  onClose?: () => void;
}

const inquiryTypes: InquiryType[] = [
  'Pricing',
  'Features',
  'Customization',
  'Partnership',
  'Other',
];

const ProductInquiryForm: React.FC<ProductInquiryFormProps> = ({
  productName,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Pricing' as InquiryType,
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = 'Name is required.';
    if (!formData.email.trim() && !formData.phone.trim()) {
      next.email = 'Email or WhatsApp number is required.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) next.message = 'Please share your question.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const text = [
      `Hello INFOBSC! I have a product inquiry.`,
      ``,
      `Product: ${productName}`,
      `Inquiry type: ${formData.inquiryType}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email || 'Not provided'}`,
      `WhatsApp: ${formData.phone || 'Not provided'}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Message: ${formData.message}`,
    ].join('\n');

    window.open(
      `https://wa.me/94752491313?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-900 to-yellow-600">
          <div>
            <h3 className="text-white font-bold">Send an Inquiry</h3>
            <p className="text-white/80 text-sm">{productName}</p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-white/90 hover:text-white text-2xl leading-none"
              aria-label="Close inquiry form"
            >
              ×
            </button>
          )}
        </div>

        <div className="p-5">
          {isSuccess ? (
            <div className="text-center py-6">
              <h4 className="text-lg font-bold text-emerald-800 mb-2">Inquiry ready</h4>
              <p className="text-gray-600 mb-6">
                Your inquiry was prepared in WhatsApp. Send the message so our team can reply with the details you need.
              </p>
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-blue-900 text-white font-semibold"
                >
                  Close
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                <input
                  type="text"
                  value={productName}
                  readOnly
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry type</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      inquiryType: e.target.value as InquiryType,
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder="Ask about features, pricing, customization or implementation"
                />
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-white font-semibold hover:from-blue-700 hover:to-yellow-400 transition-all disabled:opacity-60"
              >
                {isSubmitting ? 'Opening WhatsApp...' : 'Send inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInquiryForm;
