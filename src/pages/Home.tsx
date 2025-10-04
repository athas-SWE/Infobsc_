
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import Chatbot from '../components/Chatbot';

// SDLC Animation Component
const SDLCAnimation: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const sdlcPhases = [
    { name: 'Planning', icon: '📋', color: 'from-blue-500 to-blue-700', shape: 'rounded-lg' },
    { name: 'Analysis', icon: '🔍', color: 'from-green-500 to-green-700', shape: 'rounded-lg' },
    { name: 'Design', icon: '🎨', color: 'from-purple-500 to-purple-700', shape: 'rounded-lg' },
    { name: 'Development', icon: '💻', color: 'from-yellow-500 to-yellow-700', shape: 'rounded-lg' },
    { name: 'Testing', icon: '🧪', color: 'from-red-500 to-red-700', shape: 'rounded-lg' },
    { name: 'Deployment', icon: '🚀', color: 'from-indigo-500 to-indigo-700', shape: 'rounded-lg' },
    { name: 'Maintenance', icon: '🔧', color: 'from-orange-500 to-orange-700', shape: 'rounded-lg' }
  ];

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % sdlcPhases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating, sdlcPhases.length]);

  // Responsive sizing
  const radius = window.innerWidth < 640 ? 90 : 140; // Increased radius for better spacing
  const centerX = window.innerWidth < 640 ? 144 : 192; // Updated for new container size
  const centerY = window.innerWidth < 640 ? 144 : 192; // Updated for new container size
  const containerSize = window.innerWidth < 640 ? 'w-72 h-72' : 'w-96 h-96'; // Increased container size
  const phaseSize = window.innerWidth < 640 ? 'w-16 h-16' : 'w-20 h-20'; // Increased phase size
  const centerSize = window.innerWidth < 640 ? 'w-16 h-16' : 'w-20 h-20'; // Decreased center size
  const phaseTextSize = window.innerWidth < 640 ? 'text-xs' : 'text-xs';
  const iconSize = window.innerWidth < 640 ? 'text-sm' : 'text-lg';

  return (
    <div className={`relative ${containerSize} mx-auto`}>
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className={`${centerSize} bg-gradient-to-br from-blue-900 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-spin`} style={{animationDuration: '4s'}}>
          <img 
            src="/src/logo.png" 
            alt="INFO BSC Logo" 
            className="w-10 h-10 xs:w-12 xs:h-12 object-contain"
          />
        </div>
      </div>

      {/* SDLC Phases */}
      {sdlcPhases.map((phase, index) => {
        const angle = (index * 360) / sdlcPhases.length;
        const radian = (angle * Math.PI) / 180;
        const phaseOffset = window.innerWidth < 640 ? 32 : 40; // Updated to match larger phase size
        const x = centerX + radius * Math.cos(radian) - phaseOffset;
        const y = centerY + radius * Math.sin(radian) - phaseOffset;
        
        const isActive = index === activePhase;

        return (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out transform ${
              isActive ? 'scale-110 z-20' : 'scale-100 z-10'
            }`}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: `rotate(${angle}deg) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
            }}
          >
            <div
              className={`${phaseSize} ${phase.shape} flex flex-col items-center justify-center shadow-lg border-2 border-white transition-all duration-500 ${
                isActive 
                  ? `bg-gradient-to-br ${phase.color} text-white` 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              style={{transform: `rotate(-${angle}deg)`}}
            >
              <div className={`${iconSize} mb-1`}>{phase.icon}</div>
              <div className={`${phaseTextSize} font-semibold text-center leading-tight ${
                isActive ? 'text-white' : 'text-gray-600'
              }`}>
                {phase.name}
              </div>
            </div>
          </div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {sdlcPhases.map((_, index) => {
          const angle = (index * 360) / sdlcPhases.length;
          const radian = (angle * Math.PI) / 180;
          const x1 = centerX;
          const y1 = centerY;
          const x2 = centerX + radius * Math.cos(radian);
          const y2 = centerY + radius * Math.sin(radian);
          
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#e5e7eb"
              strokeWidth="2"
              className="animate-pulse"
            />
          );
        })}
      </svg>

    </div>
  );
};

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedServices, setExpandedServices] = useState<{[key: string]: boolean}>({});
  const [mediumPosts, setMediumPosts] = useState<any[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.projectDetails.trim()) {
      errors.projectDetails = 'Project details are required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', projectDetails: '' });
    }, 2000);
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const testimonials = [
    {
      name: "Riyasath",
      role: "CEO, RIYAFO PVT(LTD)",
      content: "INFO BSC delivered our CRM system built with ASP.NET Core and React. The real-time analytics and automated workflows have transformed our sales process!",
      project: "Business CRM System",
      rating: 5
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Director, HealthClinic",
      content: "The appointment booking app they developed with React Native and ASP.NET Core has reduced no-shows by 80% and streamlined our scheduling process.",
      project: "Appointment Booking App",
      rating: 5
    },
    {
      name: "Safnis",
      role: "CEO, RIDHA Ent",
      content: "INFO BSC helped us launch our e-commerce platform in record time. Their expertise in React and cloud deployment is outstanding.",
      project: "E-commerce Platform",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Fetch Medium blog posts
  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoadingPosts(true);
        // Using rss2json to convert Medium RSS feed to JSON
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@infobsc12`);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          // Get the latest 3 posts
          setMediumPosts(data.items.slice(0, 3));
        } else {
          console.error('Failed to fetch Medium posts:', data);
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        // Fallback to sample posts if API fails
        setMediumPosts([]);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-4 xs:space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Main Headlines */}
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block animate-fadeInUp" style={{animationDelay: '0.2s'}}>Make A Real</span>
                  <span className="block text-yellow-500 animate-fadeInUp" style={{animationDelay: '0.4s'}}>Difference.</span>
                </h1>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="block animate-fadeInUp" style={{animationDelay: '0.6s'}}>Your Vision,</span>
                  <span className="block text-yellow-500 animate-fadeInUp" style={{animationDelay: '0.8s'}}>Our Expertise.</span>
                </h2>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900">
                  <span className="text-yellow-500 animate-fadeInUp" style={{animationDelay: '1s'}}>Powerful Results.</span>
                </h3>
              </div>
          
              {/* Description */}
              <div className="space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                <p className="animate-fadeInUp" style={{animationDelay: '1.2s'}}>
                  From complex problems to ambitious visions, we partner with you to transform your ideas into powerful software and mobile solutions.
                </p>
                <p className="animate-fadeInUp" style={{animationDelay: '1.4s'}}>
                  We listen, collaborate, and deliver custom solutions that simplify challenges, streamline processes, and fuel business growth.
                </p>
              </div>
          
              {/* CTA Button */}
              <div className="pt-2 xs:pt-3 sm:pt-4 animate-fadeInUp" style={{animationDelay: '1.6s'}}>
                <a 
                  href="https://calendly.com/infobsc12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-blue-800 text-white font-semibold px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-2 sm:py-3 md:py-4 rounded-lg text-xs xs:text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get in touch
                  <svg className="ml-1 xs:ml-2 w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Content - SDLC Animation */}
            <div className={`relative transition-all duration-1000 delay-200 mt-6 xs:mt-8 lg:mt-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-xl xs:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Floating Elements - Hidden on mobile for cleaner look */}
                <div className="hidden xs:block absolute -top-2 xs:-top-4 -right-2 xs:-right-4 w-12 h-12 xs:w-16 xs:h-16 bg-blue-900 rounded-xl xs:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 xs:w-8 xs:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="hidden xs:block absolute -bottom-2 xs:-bottom-4 -left-2 xs:-left-4 w-8 h-8 xs:w-12 xs:h-12 bg-yellow-600 rounded-lg xs:rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 xs:w-6 xs:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                
                <div className="hidden sm:block absolute top-1/2 -right-4 xs:-right-6 w-8 h-8 xs:w-10 xs:h-10 bg-blue-900 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                
                {/* SDLC Animation Container */}
                <div className="text-center space-y-3 xs:space-y-4 sm:space-y-6">
                  {/* SDLC Animation */}
                  <div className="flex justify-center">
                    <SDLCAnimation />
                  </div>
                  
                  <div className="flex justify-center space-x-2 xs:space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 xs:w-8 xs:h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 xs:w-3 xs:h-3 bg-blue-900 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-6 h-6 xs:w-8 xs:h-8 bg-yellow-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 xs:w-3 xs:h-3 bg-yellow-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <div className="w-6 h-6 xs:w-8 xs:h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 xs:w-3 xs:h-3 bg-blue-700 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorative Elements - Hidden on mobile */}
              <div className="hidden sm:block absolute -z-10 top-6 xs:top-10 left-6 xs:left-10 w-20 xs:w-32 h-20 xs:h-32 bg-blue-100 rounded-full opacity-50 animate-pulse-slow"></div>
              <div className="hidden sm:block absolute -z-10 bottom-6 xs:bottom-10 right-6 xs:right-10 w-16 xs:w-24 h-16 xs:h-24 bg-yellow-100 rounded-full opacity-50 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          </div>
          
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs xs:text-sm mb-1 xs:mb-2">Scroll to explore</span>
            <div className="w-5 h-8 xs:w-6 xs:h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-0.5 xs:w-1 h-2 xs:h-3 bg-gray-400 rounded-full mt-1 xs:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-7xl font-bold mb-10 text-gradient animate-fadeInUp">Why <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span>?</h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fadeInUp font-light" style={{animationDelay: '0.2s'}}>
              At INFO BSC, we simplify technology to help your business thrive. As a leading software development company, we specialize in delivering innovative software solutions and tailored IT services that solve real-world challenges.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fadeInUp font-light mt-6" style={{animationDelay: '0.4s'}}>
              Rooted in the dynamic Sri Lankan IT industry, we're driven by a passion for innovation and excellence. Whether it's streamlining operations, driving growth, or enhancing customer experiences, we partner with you to turn possibilities into success.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp font-light mt-4" style={{animationDelay: '0.6s'}}>
              What sets us apart? Our dedication to transparency, quality, and results. From startups to enterprises, we build solutions that make an impact.
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover-lift border border-gray-100/50 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <span className="text-5xl relative z-10">🎯</span>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-gray-800 group-hover:text-blue-900 transition-colors duration-300">Transparency & Quality</h3>
                <p className="text-gray-600 leading-relaxed text-xl">We maintain complete transparency throughout the development process, ensuring quality deliverables that exceed expectations</p>
              </div>
            </div>
            
            <div className="group text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover-lift border border-gray-100/50 hover:border-yellow-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-r from-yellow-600 to-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <span className="text-5xl relative z-10">💡</span>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Innovation & Excellence</h3>
                <p className="text-gray-600 leading-relaxed text-xl">Driven by passion for innovation, we deliver cutting-edge solutions that streamline operations and drive business growth</p>
              </div>
            </div>
            
            <div className="group text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover-lift border border-gray-100/50 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <span className="text-5xl relative z-10">📊</span>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-gray-800 group-hover:text-blue-900 transition-colors duration-300">Results-Driven Approach</h3>
                <p className="text-gray-600 leading-relaxed text-xl">From startups to enterprises, we build solutions that make a real impact and deliver measurable business results</p>
              </div>
            </div>
            
            <div className="group text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover-lift border border-gray-100/50 hover:border-yellow-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-r from-yellow-600 to-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <span className="text-5xl relative z-10">🇱🇰</span>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Sri Lankan Expertise</h3>
                <p className="text-gray-600 leading-relaxed text-xl">Rooted in the dynamic Sri Lankan IT industry, we bring local expertise with global standards to every project</p>
              </div>
            </div>
            
            <div className="group text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover-lift border border-gray-100/50 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <span className="text-5xl relative z-10">🤝</span>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-gray-800 group-hover:text-blue-900 transition-colors duration-300">Partnership Focus</h3>
                <p className="text-gray-600 leading-relaxed text-xl">We partner with you to turn possibilities into success, providing dedicated support throughout your digital journey</p>
              </div>
            </div>
            
            <div className="group text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover-lift border border-gray-100/50 hover:border-yellow-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-r from-yellow-600 to-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <span className="text-5xl relative z-10">⚙️</span>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Tailored Solutions</h3>
                <p className="text-gray-600 leading-relaxed text-xl">Custom software development and tailored IT solutions designed to solve your specific real-world challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
              Our <span className="text-yellow-500">Services</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-3 xs:px-4">
              Discover a World of Tech Solutions. From consultation to execution, we've got your business covered. Explore our services and thrive in the digital era.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {/* Web Application Development */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                  alt="Web Application Development" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
                </div>
                <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 xs:mb-1 sm:mb-2">Web Application Development</h3>
                  <p className="text-blue-100 text-xs xs:text-xs sm:text-sm">Modern, scalable web solutions</p>
                </div>
              </div>
              <div className="p-3 xs:p-4 sm:p-6">
                <div className="space-y-1 xs:space-y-2 sm:space-y-3 text-gray-600 mb-2 xs:mb-3 sm:mb-4">
                  <p className="text-xs xs:text-xs sm:text-sm">• Frontend Development</p>
                  <p className="text-xs xs:text-xs sm:text-sm">• Backend Development</p>
                  <p className="text-xs xs:text-xs sm:text-sm">• Full-Stack Development</p>
                  {expandedServices.web && (
                    <div className="space-y-1 xs:space-y-1 sm:space-y-2 text-xs xs:text-xs sm:text-sm">
                      <p>• E-commerce Platforms</p>
                      <p>• CMS Development</p>
                      <p>• API Development</p>
                      <p>• Progressive Web Apps</p>
                      <p>• Real-time Applications</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => toggleServiceExpansion('web')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 xs:py-2 sm:py-2 px-3 xs:px-3 sm:px-4 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-xs xs:text-xs sm:text-sm font-semibold"
                >
                  {expandedServices.web ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>

            {/* Mobile Application Development */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" 
                  alt="Mobile Application Development" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
              </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Mobile App Development</h3>
                  <p className="text-purple-100 text-sm">Native & cross-platform apps</p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600 mb-4">
                  <p className="text-sm">• Native Apps (Android & iOS)</p>
                  <p className="text-sm">• Cross-Platform Apps</p>
                  <p className="text-sm">• Mobile-First Web Apps</p>
                  {expandedServices.mobile && (
                    <div className="space-y-2 text-sm">
                      <p>• App Store Optimization</p>
                      <p>• Push Notifications</p>
                      <p>• Mobile UI/UX Design</p>
                      <p>• App Testing & QA</p>
                      <p>• App Maintenance</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => toggleServiceExpansion('mobile')}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 text-sm font-semibold"
                >
                  {expandedServices.mobile ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>

            {/* Cloud Solutions & Development */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" 
                  alt="Cloud Solutions & Development" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Cloud Solutions</h3>
                  <p className="text-cyan-100 text-sm">Scalable cloud infrastructure</p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600 mb-4">
                  <p className="text-sm">• Cloud-Native Apps</p>
                  <p className="text-sm">• Serverless Applications</p>
                  <p className="text-sm">• SaaS Solutions</p>
                  {expandedServices.cloud && (
                    <div className="space-y-2 text-sm">
                      <p>• IaaS Solutions</p>
                      <p>• Cloud Migration</p>
                      <p>• DevOps & CI/CD</p>
                      <p>• Microservices Architecture</p>
                      <p>• Cloud Security</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => toggleServiceExpansion('cloud')}
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-2 px-4 rounded-lg hover:from-cyan-700 hover:to-cyan-900 transition-all duration-300 text-sm font-semibold"
                >
                  {expandedServices.cloud ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>

            {/* Desktop Application Development */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80" 
                  alt="Desktop Application Development" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
                </svg>
              </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Desktop Applications</h3>
                  <p className="text-green-100 text-sm">Cross-platform desktop solutions</p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600 mb-4">
                  <p className="text-sm">• Windows Applications</p>
                  <p className="text-sm">• Mac Applications</p>
                  <p className="text-sm">• Cross-Platform Apps</p>
                  {expandedServices.desktop && (
                    <div className="space-y-2 text-sm">
                      <p>• Custom Tools</p>
                      <p>• Desktop Automation</p>
                      <p>• System Integration</p>
                      <p>• Performance Optimization</p>
                      <p>• Legacy System Modernization</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => toggleServiceExpansion('desktop')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-green-900 transition-all duration-300 text-sm font-semibold"
                >
                  {expandedServices.desktop ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
            
            {/* Enterprise Software Development */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Enterprise Software Development" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Software</h3>
                  <p className="text-orange-100 text-sm">Large-scale business solutions</p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600 mb-4">
                  <p className="text-sm">• ERP Solutions</p>
                  <p className="text-sm">• CRM Platforms</p>
                  <p className="text-sm">• HRMS Systems</p>
                  {expandedServices.enterprise && (
                    <div className="space-y-2 text-sm">
                      <p>• SCM Solutions</p>
                      <p>• Business Intelligence</p>
                      <p>• Data Management</p>
                      <p>• Integration Services</p>
                      <p>• Custom Workflows</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => toggleServiceExpansion('enterprise')}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-800 text-white py-2 px-4 rounded-lg hover:from-orange-700 hover:to-orange-900 transition-all duration-300 text-sm font-semibold"
                >
                  {expandedServices.enterprise ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
            
            {/* AI & Automation */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80" 
                  alt="AI & Automation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">AI & Automation</h3>
                  <p className="text-indigo-100 text-sm">Intelligent automation solutions</p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600 mb-4">
                  <p className="text-sm">• Machine Learning Solutions</p>
                  <p className="text-sm">• AI-Powered Chatbots</p>
                  <p className="text-sm">• Workflow Automation</p>
                  {expandedServices.ai && (
                    <div className="space-y-2 text-sm">
                      <p>• Data Analytics</p>
                      <p>• Predictive Modeling</p>
                      <p>• Natural Language Processing</p>
                      <p>• Computer Vision</p>
                      <p>• Process Automation</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => toggleServiceExpansion('ai')}
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 text-sm font-semibold"
                >
                  {expandedServices.ai ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Free Consultation Banner */}
          <div className="mt-16 text-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <div className="bg-gradient-to-r from-blue-800 to-yellow-500 text-white py-8 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              {/* Background Logo Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-16 h-16">
                  <img src="/src/logo.png" alt="Logo Pattern" className="w-full h-full object-contain opacity-30" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12">
                  <img src="/src/logo.png" alt="Logo Pattern" className="w-full h-full object-contain opacity-20" />
                </div>
                <div className="absolute bottom-4 left-8 w-10 h-10">
                  <img src="/src/logo.png" alt="Logo Pattern" className="w-full h-full object-contain opacity-25" />
                </div>
                <div className="absolute bottom-4 right-8 w-14 h-14">
                  <img src="/src/logo.png" alt="Logo Pattern" className="w-full h-full object-contain opacity-20" />
                </div>
              </div>
              
              {/* Related Images */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-8 left-1/4 w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80" 
                    alt="Business Consultation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-12 right-1/4 w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=200&q=80" 
                    alt="Team Meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-8 left-1/3 w-18 h-18 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=200&q=80" 
                    alt="Project Planning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-12 right-1/3 w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=200&q=80" 
                    alt="Digital Strategy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Main Content */}
              <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                  {/* Central Logo */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/30">
                    <img 
                      src="/src/logo.png" 
                      alt="INFO BSC Logo" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-2xl font-bold">FREE CONSULTATION AVAILABLE</h3>
              </div>
              <p className="text-lg opacity-90 mb-6">Get expert advice on your project at no cost</p>
                
                {/* Consultation Benefits */}
                <div className="flex justify-center space-x-8 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm opacity-90">Project Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm opacity-90">Tech Recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm opacity-90">Cost Estimation</span>
                  </div>
                </div>
                
                <a 
                  href="https://calendly.com/infobsc12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                Schedule Your Free Consultation
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest <span className="text-blue-900">Blog</span> <span className="text-yellow-500">Posts</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest insights, tutorials, and industry trends
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadingPosts ? (
              // Enhanced loading skeleton with better image placeholder
              Array.from({ length: 3 }).map((_, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-300/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="h-6 bg-gray-400 rounded-full w-20"></div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                      <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>
                </article>
              ))
            ) : mediumPosts.length > 0 ? (
              // Enhanced Real Medium posts with better image handling
              mediumPosts.map((post, index) => (
                <article key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-200">
                  <div className="h-48 relative overflow-hidden">
                    {/* Enhanced Image with Loading State */}
                    <img 
                      src={post.thumbnail || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`;
                      }}
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                    
                    {/* Enhanced Category Badge */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm font-medium bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-lg">
                        {post.categories?.[0] || 'Technology'}
                      </span>
                    </div>
                    
                    {/* Enhanced Reading Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                        {Math.ceil(post.content?.split(' ').length / 200) || 5} min
                      </span>
                    </div>
                    
                    {/* Hover Overlay with Read More */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        Click to Read More
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-500">
                        {new Date(post.pubDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-blue-600 font-medium">
                        {Math.ceil(post.content?.split(' ').length / 200) || 5} min read
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description?.replace(/<[^>]*>/g, '').substring(0, 150)}...
                    </p>
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-500 transition-colors group/link"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))
            ) : (
              // Enhanced Fallback sample posts with better image handling
              <>
                <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-200">
                  <div className="h-48 relative overflow-hidden">
                    {/* Enhanced Image with Loading State */}
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                      alt="Web Development Trends 2024" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                    
                    {/* Enhanced Category Badge */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm font-medium bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-lg">
                        Technology
                      </span>
                    </div>
                    
                    {/* Enhanced Reading Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                        5 min
                      </span>
                    </div>
                    
                    {/* Hover Overlay with Read More */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        Click to Read More
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-500">December 15, 2024</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-blue-600 font-medium">5 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      Latest Web Development Trends for 2024
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      Discover the cutting-edge technologies and frameworks that are shaping the future of web development in 2024. From AI integration to performance optimization.
                    </p>
                    <a 
                      href="https://medium.com/@infobsc12" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-500 transition-colors group/link"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </article>

                <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-200">
                  <div className="h-48 relative overflow-hidden">
                    {/* Enhanced Image with Loading State */}
                    <img 
                      src="https://images.unsplash.com/photo-1516321318287-5bf6151a9372?auto=format&fit=crop&w=800&q=80" 
                      alt="React Best Practices" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                    
                    {/* Enhanced Category Badge */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm font-medium bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-lg">
                        React
                      </span>
                    </div>
                    
                    {/* Enhanced Reading Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                        7 min
                      </span>
                    </div>
                    
                    {/* Hover Overlay with Read More */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        Click to Read More
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-500">December 10, 2024</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-blue-600 font-medium">7 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      React Development Best Practices
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      Learn essential React patterns and best practices that will make your applications more maintainable, performant, and scalable.
                    </p>
                    <a 
                      href="https://medium.com/@infobsc12" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-500 transition-colors group/link"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </article>

                <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-200">
                  <div className="h-48 relative overflow-hidden">
                    {/* Enhanced Image with Loading State */}
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                      alt="API Development Guide" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                    
                    {/* Enhanced Category Badge */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm font-medium bg-gradient-to-r from-blue-800/90 to-blue-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-lg">
                        Backend
                      </span>
                    </div>
                    
                    {/* Enhanced Reading Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                        10 min
                      </span>
                    </div>
                    
                    {/* Hover Overlay with Read More */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        Click to Read More
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-500">December 5, 2024</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-blue-600 font-medium">10 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      Complete Guide to API Development
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      A comprehensive guide to building robust, scalable APIs using modern technologies and best practices for security and performance.
                    </p>
                    <a 
                      href="https://medium.com/@infobsc12" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-500 transition-colors group/link"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              </>
            )}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <a 
              href="https://medium.com/@infobsc12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-900 to-yellow-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All Posts on Medium
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gradient">About <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span></h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                A Sri Lankan based forward-thinking software company that specializes in integrating cutting-edge technology solutions
            </p>
          </div>
          
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slideInLeft">
                <h3 className="text-3xl font-bold mb-8 text-gray-800">Your Technology Partner</h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong>INFO BSC</strong> is a Sri Lankan based forward-thinking software company that specializes in integrating cutting-edge technology solutions to drive innovation, efficiency, and seamless experiences for our clients.
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
                  alt="INFO BSC Team" 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                </div>
              </div>
            
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl shadow-lg border border-blue-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver innovative, cost-effective, and reliable software solutions that help businesses grow faster 
                  and achieve their digital transformation goals. We are committed to providing exceptional value through 
                  cutting-edge technology and personalized service.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-blue-900 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white text-2xl">🔮</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become a trusted global technology partner for startups and enterprises, known for delivering 
                  exceptional software solutions that drive business success. We envision a future where technology 
                  seamlessly integrates with business processes to create unprecedented value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-50 h-50 bg-gradient-to-r from-green-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8 text-gradient animate-fadeInUp">Success Stories</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Discover how we've helped businesses transform their digital presence and achieve remarkable results
            </p>
          </div>
          
          {/* Interactive Testimonials Carousel */}
          <div className="mb-20">
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-12 rounded-3xl shadow-2xl border border-gray-100/50">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                          <div className="flex-shrink-0">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                              <img 
                                src={testimonial.avatar || `https://images.unsplash.com/photo-${1500000000000 + index * 1000000}?auto=format&fit=crop&w=200&q=80`}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=3B82F6&color=ffffff&size=128`;
                                }}
                              />
                            </div>
                            <div className="text-center mt-6">
                              <h3 className="text-2xl font-bold text-gray-800">{testimonial.name}</h3>
                              <p className="text-gray-600 text-lg">{testimonial.role}</p>
                              <div className="flex justify-center text-yellow-400 mt-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <span key={i} className="text-2xl">★</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="relative">
                              <div className="text-6xl text-blue-200 absolute -top-4 -left-2">"</div>
                              <p className="text-2xl text-gray-700 italic leading-relaxed pl-8">
                                {testimonial.content}
                              </p>
                            </div>
                            <div className="mt-8">
                              <span className="inline-block bg-gradient-to-r from-blue-900 to-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
                                Project: {testimonial.project}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <div className="flex justify-center mt-8 space-x-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-gradient-to-r from-blue-900 to-yellow-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured Projects */}
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-8 text-gradient animate-fadeInUp">Featured Projects</h3>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Discover some of our recent successful projects that showcase our expertise and innovation
            </p>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Business CRM System */}
            <div className="group bg-white rounded-3xl shadow-xl hover-lift border border-gray-100/50 overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                  alt="Business CRM System" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Enterprise</span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">✓ Live</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-blue-900 transition-colors duration-300">Business CRM System</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Comprehensive customer relationship management system with real-time analytics and automated workflows.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">ASP.NET Core</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">React</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-semibold">MySQL</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">Azure</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Completed 2024</span>
                  <span className="text-green-600 font-semibold">✓ Live</span>
                </div>
              </div>
            </div>

            {/* Appointment Booking App */}
            <div className="group bg-white rounded-3xl shadow-xl hover-lift border border-gray-100/50 overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
                  alt="Appointment Booking App" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Mobile App</span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">✓ Live</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Appointment Booking App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Cross-platform mobile application for scheduling appointments with real-time notifications and calendar integration.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold">ASP.NET Core</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">React Native</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-semibold">MySQL</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">Azure</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Completed 2024</span>
                  <span className="text-green-600 font-semibold">✓ Live</span>
                </div>
              </div>
            </div>

            {/* E-commerce Platform */}
            <div className="group bg-white rounded-3xl shadow-xl hover-lift border border-gray-100/50 overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="E-commerce Platform" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">E-commerce</span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">✓ Live</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">E-commerce Platform</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Complete online shopping platform with payment integration, inventory management, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold">MongoDB</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-semibold">AWS</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Completed 2024</span>
                  <span className="text-green-600 font-semibold">✓ Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 text-gradient">Get In Touch</h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-3 xs:px-4">
              Ready to transform your business with innovative software solutions? Let's discuss your project requirements.
            </p>
        </div>
        
          <div className="grid gap-6 xs:gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Location & Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-6 bg-gradient-to-r from-blue-800 to-yellow-500 text-white">
                  <h3 className="text-xl font-bold mb-2">📍 Our Location & Find Us</h3>
                  <p className="text-blue-100">Kalmunai, Sri Lanka - Interactive Map</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 text-gray-700 mb-6">
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-3">📍</span>
                      <strong>Address:</strong> 159A, Mathrsa Road, Kalmunai -10, Sri Lanka
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-3">📧</span>
                      <strong>Email:</strong> contact@infobsc.com
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-3">📞</span>
                      <strong>Phone:</strong> +94 75 249 1313
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-3">🏢</span>
                      <strong>Company:</strong> <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span> - Software Development
                    </p>
                  </div>
                  
                  {/* Interactive Map */}
                  <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-80 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1234567890123!2d81.8123!3d7.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4c8c8c8c8c8c8%3A0x1234567890abcdef!2sKalmunai%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full transition-all duration-300 hover:shadow-lg"
                      title="INFO BSC Location Map - Kalmunai, Sri Lanka"
                    ></iframe>
                    
                    {/* Map Overlay with Company Info */}
                    <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 xs:p-3 sm:p-4 shadow-lg max-w-xs">
                      <div className="flex items-center mb-2 xs:mb-3">
                        <div className="w-8 h-8 xs:w-10 xs:h-10 bg-white rounded-full flex items-center justify-center mr-2 xs:mr-3 shadow-md overflow-hidden">
                          <img 
                            src="/src/logo.png" 
                            alt="INFO BSC Logo" 
                            className="w-6 h-6 xs:w-8 xs:h-8 object-contain"
                          />
                </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-xs xs:text-sm">
                            <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span>
                          </h4>
                          <p className="text-xs text-blue-600 font-semibold">Software Development</p>
          </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs xs:text-sm text-gray-600">159A, Mathrsa Road</p>
                        <p className="text-xs xs:text-sm text-gray-600">Kalmunai -10, Sri Lanka</p>
                        <p className="text-xs text-gray-500">📍 Click to get directions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
            {/* Contact Form */}
            <div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 sm:mb-8 text-gray-800">Get Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6 sm:space-y-8">
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm xs:text-base sm:text-lg font-semibold text-gray-700 mb-1 xs:mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full border-2 rounded-xl px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg focus:outline-none focus:ring-4 transition-all duration-300 ${
                        formErrors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:border-blue-900 focus:ring-blue-200'
                      }`}
                      placeholder="Your Full Name"
                      required
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-2">⚠️</span>
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border-2 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-4 transition-all duration-300 ${
                        formErrors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:border-blue-900 focus:ring-blue-200'
                      }`}
                      placeholder="your@email.com"
                      required
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-2">⚠️</span>
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-xl px-6 py-4 text-lg focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300"
                    placeholder="+94 75 249 1313"
                  />
                </div>
                <div>
                  <label htmlFor="projectDetails" className="block text-lg font-semibold text-gray-700 mb-3">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={6}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className={`w-full border-2 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-4 transition-all duration-300 resize-none ${
                      formErrors.projectDetails 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    required
                  ></textarea>
                  {formErrors.projectDetails && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="mr-2">⚠️</span>
                      {formErrors.projectDetails}
                    </p>
                  )}
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 xs:py-4 sm:py-6 px-6 xs:px-8 sm:px-12 rounded-2xl text-sm xs:text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-800 to-yellow-500 hover:from-blue-700 hover:to-yellow-400'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    'Get Free Consultation'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Chatbot />
    </>
  );
};

export default Home;