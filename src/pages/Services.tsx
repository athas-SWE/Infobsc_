import React from 'react';

const Services: React.FC = () => {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
          <p className="max-w-3xl mx-auto text-center text-gray-600 mb-10">
            InfoBSC offers a comprehensive suite of IT solutions tailored to meet the diverse needs of businesses across various industries. Our services are designed to drive innovation, enhance efficiency, and deliver measurable results.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Core Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
            <div className="p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-3">💻</div>
              <h3 className="text-lg font-bold mb-1">Custom Software Development</h3>
              <p className="text-gray-600">Tailored software solutions to meet your unique business needs.</p>
            </div>
            <div className="p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold mb-1">Web Development</h3>
              <p className="text-gray-600">Modern, responsive websites that engage and convert.</p>
            </div>
            <div className="p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-3">📱</div>
              <h3 className="text-lg font-bold mb-1">Mobile App Development</h3>
              <p className="text-gray-600">Native and cross-platform mobile apps for iOS and Android.</p>
            </div>
            <div className="p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-3">☁️</div>
              <h3 className="text-lg font-bold mb-1">Cloud Solutions</h3>
              <p className="text-gray-600">Scalable and secure cloud infrastructure and services.</p>
            </div>
            <div className="p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-3">🗄️</div>
              <h3 className="text-lg font-bold mb-1">Database Management</h3>
              <p className="text-gray-600">Efficient and reliable database design and management.</p>
            </div>
            <div className="p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-3">🔒</div>
              <h3 className="text-lg font-bold mb-1">Cybersecurity</h3>
              <p className="text-gray-600">Robust security measures to protect your data and systems.</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
            {/* Project Alpha */}
            <div className="bg-white rounded shadow hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed0c?auto=format&fit=crop&w=600&q=80"
                alt="Project Alpha"
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Project Alpha</h3>
                <p className="text-gray-600 text-sm">
                  Developed a custom CRM system for a leading financial institution, improving customer relationship management and sales efficiency.
                </p>
              </div>
            </div>
            {/* Project Beta */}
            <div className="bg-white rounded shadow hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1555617896-1904d27b71f4?auto=format&fit=crop&w=600&q=80"
                alt="Project Beta"
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Project Beta</h3>
                <p className="text-gray-600 text-sm">
                  Designed and built an e‑commerce platform for a retail company, resulting in a 30% increase in online sales.
                </p>
              </div>
            </div>
            {/* Project Gamma */}
            <div className="bg-white rounded shadow hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Project Gamma"
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Project Gamma</h3>
                <p className="text-gray-600 text-sm">
                  Created a mobile app for a healthcare provider, enhancing patient engagement and appointment management.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-neutral-dark text-gray-700 rounded-full text-sm border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;