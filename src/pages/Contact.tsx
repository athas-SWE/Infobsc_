import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission, e.g., send to API or email service
    alert('Thank you for reaching out!');
    setForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mb-10">
          We\'re here to help. Reach out to us with any questions or inquiries, and we'll get back to you promptly.
        </p>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-primary text-white font-medium px-6 py-3 rounded hover:bg-primary-dark transition-colors">
              Submit
            </button>
          </form>
          {/* Contact Info / Map */}
          <div className="space-y-6">
            <div className="h-64 w-full bg-gray-200 rounded overflow-hidden">
              {/* Using a static map image from Unsplash */}
              <img
                src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=80"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">Contact Information</h3>
              <p className="text-gray-700 text-sm">
                Address: 123 Tech Park, Innovation Drive, Silicon Valley, CA
              </p>
              <p className="text-gray-700 text-sm">Phone: (555) 123‑4567</p>
              <p className="text-gray-700 text-sm">Email: contact@infobsc.com</p>
              <div className="flex gap-3 mt-3">
                {/* Social Icons - using external SVG icons via heroicons or fontawesome? We'll use simple links with emojis for demonstration */}
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="text-blue-500 text-xl hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐦
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="text-blue-600 text-xl hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="text-blue-700 text-xl hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📘
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;