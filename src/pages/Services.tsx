import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom websites & web applications built with modern technologies',
    features: [
      'Custom websites & web apps using React, Vue.js, and Angular',
      'E-commerce platforms with secure payment gateways',
      'Responsive UI/UX design for all devices',
      'SEO-optimized development for better search rankings'
    ]
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions including appointment booking apps',
    features: [
      'Android & iOS app development with native performance',
      'Appointment booking apps built with ASP.NET Core, React, MySQL, and Azure',
      'Cross-platform solutions using Flutter and React Native',
      'Mobile-first, user-friendly designs with intuitive UX and real-time scheduling'
    ]
  },
  {
    icon: '🏢',
    title: 'SaaS & Enterprise Solutions',
    description: 'Scalable business applications built with modern enterprise technologies',
    features: [
      'CRM & ERP systems built with ASP.NET Core, React, MySQL, and Azure',
      'Inventory & billing software with real-time data synchronization',
      'HR & payroll management platforms with secure cloud deployment',
      'Custom business applications using .NET Core backend and React frontend'
    ]
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Intelligent solutions powered by artificial intelligence',
    features: [
      'AI-powered chatbots for customer support automation',
      'Data analytics dashboards for business intelligence',
      'Workflow automation tools to streamline processes',
      'Machine learning solutions for predictive analytics'
    ]
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure and deployment solutions',
    features: [
      'Cloud migration & deployment on AWS, Azure, and Google Cloud',
      'CI/CD integration for automated software delivery',
      'Server management & monitoring for optimal performance',
      'Scalable cloud architecture for growing businesses'
    ]
  },
  {
    icon: '🛠️',
    title: 'Custom Software Development',
    description: 'Tailored solutions designed specifically for your business',
    features: [
      'Bespoke software solutions built from scratch',
      'API development & integration for seamless connectivity',
      'Database design & optimization for performance',
      'Legacy system modernization and migration'
    ]
  }
];

const projects = [
  {
    title: 'E-commerce Website',
    description: 'Full shopping cart & payment integration',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB']
  },
  {
    title: 'AI Chatbot',
    description: 'Automates customer support',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80',
    tech: ['Python', 'TensorFlow', 'React', 'AWS']
  },
  {
    title: 'Business CRM Tool',
    description: 'Helps manage leads & clients',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis']
  },
  {
    title: 'Appointment Booking App',
    description: 'For salons, clinics, gyms, etc.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    tech: ['Flutter', 'Firebase', 'Node.js', 'Stripe']
  }
];

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide end-to-end software development solutions tailored to your business needs. 
            From concept to deployment, we deliver innovative solutions that drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive software solutions designed to transform your business digitally. We provide end-to-end services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Technologies We Use Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and modern software solutions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Frontend Technologies */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Frontend</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-semibold">React</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-sm font-semibold">Vue.js</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm font-semibold">Angular</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm font-semibold">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Backend</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-semibold">ASP.NET Core</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-semibold">Node.js</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm font-semibold">Python</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-sm font-semibold">C#</span>
                </div>
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">☁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Database & Cloud</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg text-sm font-semibold">MySQL</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-semibold">Azure</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-semibold">MongoDB</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-sm font-semibold">AWS</span>
                </div>
              </div>
            </div>

            {/* Mobile & Tools */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Mobile & Tools</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-semibold">React Native</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-semibold">Flutter</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg text-sm font-semibold">Git</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-sm font-semibold">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free consultation!
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;