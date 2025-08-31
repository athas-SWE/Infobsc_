import React from 'react';

const team = [
  {
    name: 'Ethan Carter',
    role: 'CEO',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sophia Bennett',
    role: 'CTO',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Liam Harper',
    role: 'Head of Solutions',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80',
  },
];

const About: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">About InfoBSC</h1>
        <p className="max-w-3xl mx-auto text-center text-gray-600 mb-10">
          InfoBSC is a leading provider of IT solutions, dedicated to empowering businesses through innovative technology. With a rich history of delivering exceptional results, we are committed to understanding our clients\' unique challenges and providing tailored solutions that drive growth and efficiency.
        </p>
        {/* Mission */}
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-8 text-gray-700">
          Our mission is to be the trusted technology partner for businesses, enabling them to achieve their strategic goals through cutting‑edge IT solutions. We strive to deliver value, foster long‑term relationships, and contribute to the success of our clients.
        </p>
        {/* Values */}
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mb-12">
          <div className="p-6 bg-white rounded shadow">
            <div className="text-primary text-4xl mb-3">🛡️</div>
            <h3 className="font-bold mb-1">Integrity</h3>
            <p className="text-gray-600 text-sm">We uphold the highest ethical standards in all our interactions.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <div className="text-primary text-4xl mb-3">🤝</div>
            <h3 className="font-bold mb-1">Collaboration</h3>
            <p className="text-gray-600 text-sm">We work closely with our clients to achieve shared objectives.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <div className="text-primary text-4xl mb-3">⭐</div>
            <h3 className="font-bold mb-1">Excellence</h3>
            <p className="text-gray-600 text-sm">We are committed to delivering exceptional quality in everything we do.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <div className="text-primary text-4xl mb-3">💡</div>
            <h3 className="font-bold mb-1">Innovation</h3>
            <p className="text-gray-600 text-sm">We embrace new ideas and technologies to drive continuous improvement.</p>
          </div>
        </div>
        {/* Approach */}
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="mb-8 text-gray-700 max-w-3xl">
          At InfoBSC, we take a client‑centric approach to every project. We begin by thoroughly understanding our clients\' business needs and objectives. Our team of experts then designs and implements customized solutions, ensuring seamless integration and optimal performance. We are dedicated to providing ongoing support and guidance to ensure our clients\' continued success.
        </p>
        {/* Team */}
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center bg-white p-6 rounded shadow">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
              <h3 className="font-bold">{member.name}</h3>
              <span className="text-primary mb-2">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;