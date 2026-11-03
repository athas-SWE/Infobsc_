import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BookDemoForm from '../components/products/BookDemoForm';
import { getProductBySlug, getPublishedProducts } from '../data/products';

const BookDemo: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productSlug = searchParams.get('product') || undefined;
  const products = useMemo(() => getPublishedProducts(), []);
  const selected = productSlug ? getProductBySlug(productSlug) : undefined;
  const initialProductId = selected?.id || products[0]?.id;

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-yellow-700 text-white py-14 xs:py-16">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <p className="text-yellow-300 text-sm font-semibold mb-2 uppercase tracking-wide">Book a Product Demo</p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-3">
            Schedule a personalized online demonstration
          </h1>
          <p className="text-blue-100 max-w-2xl text-base xs:text-lg">
            Tell us which product you are interested in and our team will arrange a tailored walkthrough for your business.
          </p>
        </div>
      </section>

      <section className="py-12 xs:py-16">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-lg p-5 xs:p-6 sm:p-8">
            <BookDemoForm initialProductId={initialProductId} />
          </div>
          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
              <h2 className="font-bold text-gray-900 mb-3">Our products</h2>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/products/${product.slug}`}
                      className="block rounded-xl bg-white border border-gray-100 p-4 hover:border-blue-200 hover:shadow-sm transition-all"
                    >
                      <p className="font-semibold text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.shortDescription}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-blue-950 text-white p-5">
              <h3 className="font-bold mb-2">Prefer a quick chat?</h3>
              <p className="text-sm text-blue-100 mb-4">
                You can also reach us on WhatsApp for product questions and demo scheduling.
              </p>
              <a
                href="https://wa.me/94752491313?text=Hello!%20I%27d%20like%20to%20book%20a%20product%20demo%20with%20INFOBSC."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-green-500 hover:bg-green-400 font-semibold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;
