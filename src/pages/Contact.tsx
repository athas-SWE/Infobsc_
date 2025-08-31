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

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" 
                  alt="Contact Us" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg mb-8"
                />
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-2xl mr-4">📍</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                      <p className="text-gray-600">
                        INFO(BSC) Software Solutions<br />
                        159A, Mathrsa Road, Kalmunai -10<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-2xl mr-4">📧</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <a href="mailto:infobsc12@gmail.com" className="text-blue-600 hover:text-blue-800">
                        infobsc12@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-2xl mr-4">📞</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <a href="tel:+94752491313" className="text-blue-600 hover:text-blue-800">
                        +94 75 249 1313
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 text-2xl mr-4">📱</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                      <a 
                        href="https://wa.me/94752491313?text=Hello! I'm interested in INFO(BSC) software development services. Can you help me?" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800"
                      >
                        +94 75 249 1313
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-lg mb-6">Follow Us</h3>
                <div className="flex gap-6">
                  <a
                    href="https://www.linkedin.com/company/infobsc/"
                  aria-label="LinkedIn"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors p-3 bg-blue-50 rounded-lg hover:bg-blue-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <span className="text-2xl">💼</span>
                    <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                    href="https://www.facebook.com/share/1AMhWUpUMF/?mibextid=wwXIfr"
                  aria-label="Facebook"
                    className="flex items-center gap-3 text-blue-700 hover:text-blue-900 transition-colors p-3 bg-blue-50 rounded-lg hover:bg-blue-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <span className="text-2xl">📘</span>
                    <span className="font-semibold">Facebook</span>
                </a>
                </div>
              </div>
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