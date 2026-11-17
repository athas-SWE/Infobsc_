import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConceptualPreview from '../products/ConceptualPreview';
import { getPublishedProducts } from '../../data/products';

const ProductShowcase: React.FC = () => {
  const products = getPublishedProducts();
  const [activeId, setActiveId] = useState(products[0]?.id ?? '');
  const product = products.find((item) => item.id === activeId) ?? products[0];

  if (!product) return null;

  return (
    <section id="products" className="scroll-mt-24 bg-white py-16 xs:py-20">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600 mb-3">
            Product showcases
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Software for education, distribution, and sales
          </h2>
          <p className="text-base xs:text-lg text-gray-600">
            Review SIDS, Distribution360, and INFOBSC CRM. Each preview is a conceptual dashboard, not a live screenshot.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Products">
          {products.map((item) => {
            const selected = item.id === product.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  selected
                    ? 'bg-blue-900 text-white border-blue-900'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900 mb-2">{product.category}</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-lg text-yellow-600 font-medium mb-3">{product.tagline}</p>
            <p className="text-gray-600 leading-relaxed mb-5">{product.description}</p>
            <ul className="mb-6 space-y-2">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-gray-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={`/products/${product.slug}`}
                className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                View product
              </Link>
              <Link
                to={`/book-demo?product=${product.slug}`}
                className="inline-flex items-center justify-center rounded-lg border border-blue-900 px-5 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
              >
                {product.primaryCta}
              </Link>
            </div>
          </div>

          <div className={`rounded-3xl bg-gradient-to-br ${product.accentFrom} ${product.accentTo} p-4 xs:p-6`}>
            <ConceptualPreview
              key={product.id}
              variant={product.thumbnail as 'education' | 'distribution' | 'crm'}
              title={`${product.name} overview`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
