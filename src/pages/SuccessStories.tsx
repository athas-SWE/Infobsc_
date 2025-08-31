import React, { useState } from 'react';

interface CaseStudy {
  title: string;
  description: string;
  category: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Revamped E‑commerce Platform for Global Retailer',
    description:
      'InfoBSC redesigned the e‑commerce platform for a leading global retailer, resulting in a 30% increase in conversion rates and a 20% boost in average order value.',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1523475496153-3e83e20ef6f0?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Streamlined User Experience for Healthcare Provider',
    description:
      'We improved the user experience for a major healthcare provider\'s patient portal, leading to a 40% reduction in support calls and a 25% increase in patient satisfaction.',
    category: 'UI/UX Design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Enhanced Mobile App for Financial Services Firm',
    description:
      'InfoBSC developed an enhanced mobile app for a financial services firm, achieving a 50% increase in user engagement and a 35% rise in transaction completion rates.',
    category: 'Mobile Development',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
  },
];

const categories = ['All', 'UI/UX Design', 'Web Development', 'Mobile Development'];

const SuccessStories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Success Stories</h1>
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-primary hover:text-white'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Case Study Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((study) => (
            <div key={study.title} className="bg-white rounded shadow hover:shadow-md transition-shadow">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2 text-sm md:text-base">{study.title}</h3>
                <p className="text-gray-600 text-sm">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;