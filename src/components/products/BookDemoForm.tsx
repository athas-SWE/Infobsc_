import React, { useEffect, useMemo, useState } from 'react';
import { getPublishedProducts } from '../../data/products';

interface BookDemoFormProps {
  initialProductId?: string;
}

const BookDemoForm: React.FC<BookDemoFormProps> = ({ initialProductId }) => {
  const products = useMemo(() => getPublishedProducts(), []);
  const [formData, setFormData] = useState({
    productId: initialProductId || products[0]?.id || '',
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setFormData((prev) => ({ ...prev, productId: initialProductId }));
    }
  }, [initialProductId]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.productId) next.productId = 'Please select a product.';
    if (!formData.name.trim()) next.name = 'Full name is required.';
    if (!formData.email.trim()) next.email = 'Business email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) next.phone = 'Contact number is required.';
    if (!formData.company.trim()) next.company = 'Company / Institution is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const product = products.find((item) => item.id === formData.productId);
    const text = [
      `Hello INFOBSC! I would like to book a product demo.`,
      ``,
      `Product: ${product?.name || formData.productId}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company}`,
      `Preferred date: ${formData.preferredDate || 'Not specified'}`,
      `Requirements: ${formData.message || 'None'}`,
    ].join('\n');

    window.open(
      `https://wa.me/94752491313?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        productId: formData.productId,
        name: '',
        email: '',
        phone: '',
        company: '',
        preferredDate: '',
        message: '',
      });
    }, 600);
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 xs:p-8 text-center">
        <h3 className="text-xl font-bold text-emerald-900 mb-2">Demo request ready</h3>
        <p className="text-emerald-800 mb-6">
          Your details were prepared in WhatsApp. Send the message so our team can schedule your personalized product demonstration.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="px-5 py-2.5 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors"
        >
          Book another demo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Interested product</label>
        <select
          value={formData.productId}
          onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} – {product.shortDescription}
            </option>
          ))}
        </select>
        {errors.productId && <p className="text-red-600 text-xs mt-1">{errors.productId}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="+94 7X XXX XXXX"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company / Institution</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="Business or institution name"
          />
          {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred demo date</label>
        <input
          type="date"
          value={formData.preferredDate}
          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional requirements</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder="Tell us about your team size, goals or customization needs"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-white font-semibold hover:from-blue-700 hover:to-yellow-400 transition-all disabled:opacity-60"
      >
        {isSubmitting ? 'Opening WhatsApp...' : 'Submit demo request'}
      </button>
    </form>
  );
};

export default BookDemoForm;
