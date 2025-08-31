import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-30" aria-hidden="true"></div>
        <div className="relative text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empowering Businesses with Innovative IT Solutions
          </h1>
          <p className="text-lg md:text-xl text-neutral-light mb-8">
            InfoBSC delivers cutting-edge technology solutions tailored to your business needs. From custom software to web and mobile applications, we drive your success.
          </p>
          <Link to="/services" className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded">
            Explore Services
          </Link>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card */}
            <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
              <p className="text-gray-600">
                Tailored software solutions to streamline your operations and enhance productivity.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">
                Responsive and engaging web platforms that captivate your audience and drive growth.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
              <p className="text-gray-600">
                Innovative mobile applications that connect you with your customers on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-6">
            Connect with us today to discuss your IT needs and discover how InfoBSC can help you achieve your goals.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-medium py-3 px-6 rounded hover:bg-neutral-dark hover:text-white">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;