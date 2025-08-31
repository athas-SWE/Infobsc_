import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
  project: string;
}

interface CaseStudy {
  title: string;
  description: string;
  category: string;
  image: string;
  results: string[];
  tech: string[];
}

const testimonials: Testimonial[] = [
  {
    name: 'David Rodriguez',
    position: 'CEO',
    company: 'EnterpriseCorp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'INFO(BSC) delivered our CRM system built with ASP.NET Core and React. The real-time analytics and automated workflows have transformed our sales process!',
    project: 'Business CRM System'
  },
  {
    name: 'Dr. Sarah Johnson',
    position: 'Medical Director',
    company: 'HealthClinic',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'The appointment booking app they developed with React Native and ASP.NET Core has reduced no-shows by 80% and streamlined our scheduling process.',
    project: 'Appointment Booking App'
  },
  {
    name: 'Michael Chen',
    position: 'Founder',
    company: 'TrendyCart',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'INFO(BSC) helped us launch our e-commerce platform in record time. Their expertise in React and cloud deployment is outstanding.',
    project: 'E-commerce Platform'
  }
];

const caseStudies: CaseStudy[] = [
  {
    title: 'Business CRM System - EnterpriseCorp',
    description: 'Comprehensive customer relationship management system with real-time analytics and automated workflows',
    category: 'SaaS & Enterprise',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    results: ['40% increase in lead conversion', 'Streamlined sales process', 'Real-time analytics dashboard'],
    tech: ['ASP.NET Core', 'React', 'MySQL', 'Azure']
  },
  {
    title: 'Appointment Booking App - HealthClinic',
    description: 'Cross-platform mobile application for scheduling appointments with real-time notifications',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80',
    results: ['80% reduction in no-shows', 'Automated reminders', 'Easy booking interface'],
    tech: ['ASP.NET Core', 'React Native', 'MySQL', 'Azure']
  },
  {
    title: 'E-commerce Platform - TrendyCart',
    description: 'Full shopping cart & payment integration with advanced inventory management',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    results: ['30% increase in conversion rates', '50% faster checkout process', 'Mobile-first responsive design'],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    title: 'AI Chatbot - TechSupport',
    description: 'Automates customer support with natural language processing and machine learning',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    results: ['60% reduction in support costs', '24/7 customer availability', '95% accuracy in responses'],
    tech: ['Python', 'TensorFlow', 'React', 'AWS']
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'AI & Automation', 'SaaS & Enterprise'];

const SuccessStories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients who have transformed their businesses with our solutions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-blue-200 absolute -top-2 -left-1">"</div>
                  <p className="text-gray-700 italic mb-4 pl-6 leading-relaxed">"{testimonial.testimonial}"</p>
                </div>
                <div className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-2 rounded-lg inline-block">
                  Project: {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
          
        {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {filtered.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={study.image}
                alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative software solutions.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300">
            Start Your Project
          </Link>
      </div>
    </section>
    </>
  );
};

export default SuccessStories;