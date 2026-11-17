import React, { useState } from 'react';

const countryCodes = [
  { code: '+1', country: 'US/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+30', country: 'Greece', flag: '🇬🇷' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
  { code: '+960', country: 'Maldives', flag: '🇲🇻' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
  { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
  { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+94',
    projectDetails: '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const nextValue = name === 'phone' ? value.replace(/[^\d\s-]/g, '') : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.projectDetails.trim()) errors.projectDetails = 'Project details are required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', countryCode: '+94', projectDetails: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 xs:mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-3 xs:px-4">
            Ready to transform your business with innovative software solutions? Let&apos;s discuss your project requirements.
          </p>
        </div>

        <div className="grid gap-6 xs:gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6 bg-gradient-to-r from-blue-800 to-yellow-500 text-white">
              <h3 className="text-xl font-bold mb-2">Our Location & Find Us</h3>
              <p className="text-blue-100">Kalmunai, Sri Lanka - Interactive Map</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  <strong>Address:</strong> 159A, Mathrsa Road, Kalmunai -10, Sri Lanka
                </p>
                <p>
                  <strong>Email:</strong> contact@infobsc.com
                </p>
                <p>
                  <strong>Phone:</strong> +94 71 249 1313
                </p>
                <p>
                  <strong>Company:</strong> <span className="text-blue-900">INFO</span>{' '}
                  <span className="text-yellow-500">BSC</span> - Software Development
                </p>
              </div>
              <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1234567890123!2d81.8123!3d7.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4c8c8c8c8c8c8%3A0x1234567890abcdef!2sKalmunai%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="INFO BSC Location Map - Kalmunai, Sri Lanka"
                />
              </div>
            </div>
          </div>

          <div id="contact-form" className="scroll-mt-28">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Get Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all ${
                      formErrors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:border-blue-900 focus:ring-blue-200'
                    }`}
                    placeholder="Your Full Name"
                    required
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all ${
                      formErrors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:border-blue-900 focus:ring-blue-200'
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <select
                    aria-label="Country code"
                    value={formData.countryCode}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, countryCode: event.target.value }))
                    }
                    className="border-2 border-gray-300 rounded-l-xl px-3 py-3 focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-white min-w-[120px]"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 border-2 border-l-0 border-gray-300 rounded-r-xl px-4 py-3 focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="71 249 1313"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Full number: {formData.countryCode} {formData.phone || 'your number'}
                </p>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details / Requirements *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={6}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all resize-none ${
                    formErrors.projectDetails
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                  }`}
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  required
                />
                {formErrors.projectDetails && (
                  <p className="text-red-500 text-sm mt-2">{formErrors.projectDetails}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-2xl text-lg text-white transition-all ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-800 to-yellow-500 hover:from-blue-700 hover:to-yellow-400'
                }`}
              >
                {isSubmitting ? 'Sending Message...' : 'Get Free Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
