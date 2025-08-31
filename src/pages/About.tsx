import React from 'react';

const coreValues = [
  {
    icon: '💡',
    title: 'Innovation & Creativity',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
  },
  {
    icon: '⭐',
    title: 'Quality & Performance',
    description: 'We are committed to delivering exceptional quality and high-performance solutions in everything we do.'
  },
  {
    icon: '🤝',
    title: 'Transparency & Trust',
    description: 'We build lasting relationships based on transparency, honesty, and mutual trust with our clients.'
  },
  {
    icon: '🌱',
    title: 'Long-Term Client Relationships',
    description: 'We focus on building long-term partnerships and supporting our clients throughout their digital journey.'
  }
];

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Infobsc</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Infobsc is a software development company specializing in web, mobile, and AI-powered solutions. 
            We help businesses transform digitally by delivering customized, high-performance, and user-friendly applications.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gradient">Who We Are</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                A Sri Lankan based forward-thinking software company that specializes in integrating cutting-edge technology solutions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slideInLeft">
                <h3 className="text-3xl font-bold mb-8 text-gray-800">Your Technology Partner</h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong>INFO(BSC)</strong> is a Sri Lankan based forward-thinking software company that specializes in integrating cutting-edge technology solutions to drive innovation, efficiency, and seamless experiences for our clients.
                  </p>
                  <p>
                    With our innovative and insightful technology, we strive to enhance our users' everyday experiences. Founded in 2024, we've quickly established ourselves as a trusted partner for businesses seeking digital transformation.
                  </p>
                  <p>
                    Our team of 11-50 dedicated professionals brings together expertise in modern technologies and industry best practices to deliver exceptional software solutions.
                  </p>
                </div>
              </div>
              
              <div className="animate-slideInRight">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                  alt="INFO(BSC) Team" 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl hover-lift border border-gray-100 animate-slideInRight">
                <h4 className="text-2xl font-bold mb-8 text-gray-800">Our Expertise</h4>
                <div className="grid gap-4">
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Custom Software Development</span>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Web & Mobile Applications</span>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">AI & Machine Learning Solutions</span>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Cloud & DevOps Services</span>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">E-commerce & SaaS Platforms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="text-blue-600 text-6xl mb-6">🎯</div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To deliver innovative, cost-effective, and reliable software solutions that help businesses grow faster 
                  and achieve their digital transformation goals.
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-6xl mb-6">🔮</div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700">
                  To become a trusted global technology partner for startups and enterprises, known for delivering 
                  exceptional software solutions that drive business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Why Choose INFO(BSC)</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 glass rounded-2xl hover-lift border border-white/20">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Developers</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Our team of 11-50 skilled professionals brings expertise in modern technologies including React, Node.js, Python, and cloud platforms. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="group text-center p-8 glass rounded-2xl hover-lift border border-white/20">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">On-Time Delivery</h3>
              <p className="text-lg leading-relaxed opacity-90">
                We understand the importance of meeting deadlines. Our agile development methodology ensures we deliver projects on schedule while maintaining the highest quality standards. We respect your budget and timeline constraints.
              </p>
            </div>
            
            <div className="group text-center p-8 glass rounded-2xl hover-lift border border-white/20">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Client-Centric Approach</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Your success is our priority. We work closely with you throughout the development process, ensuring your vision is realized. Our collaborative approach includes regular updates, feedback sessions, and transparent communication.
              </p>
            </div>
            
            <div className="group text-center p-8 glass rounded-2xl hover-lift border border-white/20">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">End-to-End Services</h3>
              <p className="text-lg leading-relaxed opacity-90">
                From initial concept to final deployment and ongoing maintenance, we provide comprehensive services. Our expertise covers the entire software development lifecycle, ensuring seamless integration and long-term success.
              </p>
            </div>
            
            <div className="group text-center p-8 glass rounded-2xl hover-lift border border-white/20">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Quality</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Quality is at the core of everything we do. Our rigorous testing processes, code reviews, and quality assurance protocols ensure that every solution we deliver is robust, secure, and performs flawlessly.
              </p>
            </div>
            
            <div className="group text-center p-8 glass rounded-2xl hover-lift border border-white/20">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Latest Technology</h3>
              <p className="text-lg leading-relaxed opacity-90">
                We leverage cutting-edge frameworks, tools, and methodologies to build modern, scalable solutions. Our technology stack includes React, Node.js, Python, cloud platforms, and AI/ML technologies to deliver innovative solutions.
              </p>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;