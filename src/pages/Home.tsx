
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" aria-hidden="true"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-cyan-500/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative text-center max-w-5xl px-4 z-10">
          {/* Enhanced INFO(BSC) Logo Display */}
          <div className="animate-fadeInUp mb-8">
            <div className="flex justify-center mb-6">
              <div className="group relative">
                <div className="w-33 h-33 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 rounded-1xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                <img 
              src="/src/logo.png" 
              alt="INFO(BSC) Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            INFO(BSC)
          </span>
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute -top-3 -left-3 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Empowering Businesses
              </span>
              <br />
              <span className="text-white">with Innovative Software Solutions</span>
          </h1>
          </div>
          
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              At <span className="text-gradient font-semibold animate-gradient-x">INFO(BSC)</span>, we build smart, scalable, and secure software solutions to help startups, SMEs, and enterprises achieve digital success.
            </p>
          </div>
          
          <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <p className="text-lg text-gray-300 mb-12 italic font-light">
              "From Ideas to Execution — We Deliver Excellence in Every Line of Code."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <Link to="/contact" className="btn-primary text-white font-semibold py-5 px-10 rounded-xl text-lg hover-lift">
              Get a Free Consultation
            </Link>
            <Link to="/services" className="glass text-white font-semibold py-5 px-10 rounded-xl text-lg hover-lift border border-white/30">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Why Choose INFO(BSC)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Tailored to your business goals and specific requirements with precision engineering</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Scalable Platforms</h3>
              <p className="text-gray-600 leading-relaxed">Future-ready applications that grow seamlessly with your business needs</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Agile methodology ensuring rapid project completion without compromising quality</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Affordable Pricing</h3>
              <p className="text-gray-600 leading-relaxed">Flexible pricing plans designed for startups and enterprises of all sizes</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">Round-the-clock dedicated technical support ensuring your success</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Latest Technology</h3>
              <p className="text-gray-600 leading-relaxed">Cutting-edge frameworks and tools ensuring modern, robust solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions designed to transform your business digitally
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover-lift border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Web Development</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Custom websites & web apps
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  E-commerce platforms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Responsive UI/UX design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  SEO-optimized development
                </li>
              </ul>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover-lift border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Mobile App Development</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Android & iOS app development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Cross-platform solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Mobile-first, user-friendly designs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Flutter/React Native expertise
                </li>
              </ul>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl hover-lift border border-cyan-100">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">AI & Automation</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  AI-powered chatbots
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Data analytics dashboards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Workflow automation tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Machine learning solutions
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="btn-primary text-white font-semibold py-4 px-10 rounded-xl text-lg hover-lift">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-2xl hover-lift border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="flex text-yellow-400 text-3xl mr-6">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-gray-800">Ravi Kumar</h4>
                  <p className="text-gray-600 text-lg">CEO, TrendyCart</p>
                </div>
              </div>
              <div className="relative">
                <div className="text-6xl text-blue-200 absolute -top-4 -left-2">"</div>
                <p className="text-xl text-gray-700 italic leading-relaxed pl-8">
                  INFO(BSC) helped us launch our e-commerce platform in record time. The team is extremely professional and supportive! Their attention to detail and commitment to quality exceeded our expectations.
                </p>
                <div className="text-6xl text-blue-200 absolute -bottom-4 -right-2">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise and innovation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Business CRM System */}
            <div className="group bg-white rounded-2xl shadow-lg hover-lift border border-gray-100 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                  alt="Business CRM System" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm font-semibold">Enterprise</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Business CRM System</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive customer relationship management system with real-time analytics and automated workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">ASP.NET Core</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">React</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">MySQL</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Azure</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Completed 2024</span>
                  <span className="text-green-600 font-semibold">✓ Live</span>
                </div>
              </div>
            </div>

            {/* Appointment Booking App */}
            <div className="group bg-white rounded-2xl shadow-lg hover-lift border border-gray-100 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
                  alt="Appointment Booking App" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm font-semibold">Mobile App</span>
                </div>
                
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Appointment Booking App</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Cross-platform mobile application for scheduling appointments with real-time notifications and calendar integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">ASP.NET Core</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">React Native</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">MySQL</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Azure</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Completed 2024</span>
                  <span className="text-green-600 font-semibold">✓ Live</span>
                </div>
              </div>
            </div>

            {/* E-commerce Platform */}
            <div className="group bg-white rounded-2xl shadow-lg hover-lift border border-gray-100 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                  alt="E-commerce Platform" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm font-semibold">E-commerce</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Complete online shopping platform with payment integration, inventory management, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">React</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">MongoDB</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">AWS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Completed 2024</span>
                  <span className="text-green-600 font-semibold">✓ Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 gradient-bg text-white text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-6xl font-bold mb-8">Let's Build Something Amazing Together!</h2>
          </div>
          
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with innovative software solutions? Get in touch with our experts today and let's create something extraordinary.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <Link to="/contact" className="bg-white text-blue-600 font-bold py-6 px-12 rounded-2xl text-xl hover-lift shadow-2xl">
              Get Free Consultation
            </Link>
            <Link to="/contact" className="glass text-white font-bold py-6 px-12 rounded-2xl text-xl hover-lift border-2 border-white/30">
              Start Your Project
          </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;