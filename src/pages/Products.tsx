import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { getPublishedProducts } from '../data/products';

const Products: React.FC = () => {
  const products = getPublishedProducts();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-yellow-700 text-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-16 xs:py-20 sm:py-24">
          <p className="text-yellow-300 font-semibold mb-3 tracking-wide uppercase text-xs xs:text-sm">
            INFOBSC Products
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-4">
            Technology that moves your business forward.
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-blue-100 max-w-3xl mb-8">
            Explore our software solutions designed to simplify operations, connect people and help businesses grow.
          </p>
          <div className="flex flex-wrap gap-2 xs:gap-3 mb-8">
            {['Education', 'Distribution', 'Business CRM'].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#solutions"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore our solutions
            </a>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Book Your Demo →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 xs:py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 xs:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Software Solutions for Growing Businesses
            </h2>
            <p className="text-gray-600 text-base xs:text-lg">
              Discover practical software products designed to simplify operations, improve productivity and support business growth.
            </p>
          </div>

          <div id="solutions" className="grid gap-6 xs:gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 xs:py-16 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl xs:text-3xl font-bold mb-3">
            Find the right software for your business
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Book a personalized demonstration with our team and see how INFOBSC products can support your operations.
          </p>
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-950 font-semibold hover:from-yellow-400 hover:to-yellow-300 transition-all"
          >
            Book Your Demo →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
