import React from 'react';
import Hero from '../components/home/Hero';
import EcosystemMap from '../components/home/EcosystemMap';
import ProductShowcase from '../components/home/ProductShowcase';
import CompanyStory from '../components/home/CompanyStory';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <EcosystemMap />
      <ProductShowcase />
      <CompanyStory />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
