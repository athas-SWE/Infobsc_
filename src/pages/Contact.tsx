import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
    budget: '',
    timeline: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
      emailjs.init("6QObpixfZ4M6dCB-P"); // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        from_phone: form.phone,
        project_details: form.projectDetails,
        budget: form.budget,
        timeline: form.timeline,
        to_email: 'infobsc12@gmail.com'
      };

      await emailjs.send(
        'service_jexj7mk', // Replace with your EmailJS service ID
        'template_glkhsd9', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitStatus('success');
      setForm({ name: '', email: '', phone: '', projectDetails: '', budget: '', timeline: '' });
      
      // Show success message
      alert('Thank you for reaching out! We will get back to you within 24 hours.');
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at infobsc12@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Let's Build Something Amazing Together!</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to transform your business with innovative software solutions? Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-2">
            {/* Location & Social Media */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <h3 className="text-xl font-bold mb-2">📍 Our Location</h3>
                  <p className="text-blue-100">Kalmunai, Sri Lanka</p>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.6316222458!2d79.7861643!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="INFO(BSC) Office Location"
                    ></iframe>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center">
                      <span className="text-blue-600 mr-3">📍</span>
                      <strong>Address:</strong> 159A, Mathrsa Road, Kalmunai -10, Sri Lanka
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-600 mr-3">📧</span>
                      <strong>Email:</strong> infobsc12@gmail.com
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-600 mr-3">📞</span>
                      <strong>Phone:</strong> +94 75 249 1313
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-600 mr-3">🏢</span>
                      <strong>Company:</strong> INFO(BSC) - Software Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/company/infobsc/"
                    aria-label="LinkedIn"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors p-4 bg-blue-50 rounded-xl hover:bg-blue-100 hover:scale-105 transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="font-semibold text-lg">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1AMhWUpUMF/?mibextid=wwXIfr"
                    aria-label="Facebook"
                    className="flex items-center gap-3 text-blue-700 hover:text-blue-900 transition-colors p-4 bg-blue-50 rounded-xl hover:bg-blue-100 hover:scale-105 transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-semibold text-lg">Facebook</span>
                  </a>
                  <a
                    href="https://wa.me/94752491313?text=Hello! I'm interested in INFO(BSC) software development services. Can you help me?"
                    aria-label="WhatsApp"
                    className="flex items-center gap-3 text-green-600 hover:text-green-800 transition-colors p-4 bg-green-50 rounded-xl hover:bg-green-100 hover:scale-105 transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="font-semibold text-lg">WhatsApp</span>
                  </a>
                  <a
                    href="mailto:infobsc12@gmail.com"
                    aria-label="Email"
                    className="flex items-center gap-3 text-red-600 hover:text-red-800 transition-colors p-4 bg-red-50 rounded-xl hover:bg-red-100 hover:scale-105 transform duration-300"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 13.09L1.636 5.457h20.728L12 13.09z"/>
                    </svg>
                    <span className="font-semibold text-lg">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Your Full Name"
                required
              />
            </div>
            <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="your@email.com"
                required
              />
                  </div>
            </div>
            <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
                  <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details / Requirements *
              </label>
              <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={5}
                    value={form.projectDetails}
                onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                required
              ></textarea>
            </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="">Select Timeline</option>
                      <option value="1-2months">1-2 Months</option>
                      <option value="2-4months">2-4 Months</option>
                      <option value="4-6months">4-6 Months</option>
                      <option value="6+months">6+ Months</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Get Free Consultation'
                  )}
            </button>
          </form>
            </div>


          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How long does it take to complete a project?</h3>
              <p className="text-gray-600">Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during consultation.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What is your pricing structure?</h3>
              <p className="text-gray-600">We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Do you provide post-launch support?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive post-launch support including bug fixes, updates, maintenance, and technical support to ensure your application runs smoothly.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Can you work with existing systems?</h3>
              <p className="text-gray-600">Absolutely! We specialize in integrating with existing systems and can modernize legacy applications while maintaining data integrity and business continuity.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;