import React from 'react';
import { Link } from 'react-router-dom';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { getPublishedProducts } from '../../data/products';

const scrollToId = (id: string, reduced: boolean) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: reduced ? 'auto' : 'smooth',
    block: 'start',
  });
};

const Hero: React.FC = () => {
  const reduced = usePrefersReducedMotion();
  const products = getPublishedProducts();

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.08),transparent_36%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8 pb-24 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-900">
              Software company · Sri Lanka
            </p>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Make A Real <span className="text-yellow-500">Difference.</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-gray-800 sm:text-2xl">
              Your Vision, Our Expertise.{' '}
              <span className="whitespace-nowrap text-yellow-500">Powerful Results.</span>
            </p>
            <div className="mt-6 space-y-3 text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                From complex problems to ambitious visions, we partner with you to transform your ideas into powerful software and mobile solutions.
              </p>
              <p>
                We listen, collaborate, and deliver custom solutions that simplify challenges, streamline processes, and fuel business growth.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToId('services', reduced)}
                className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-800"
              >
                Explore our solutions
              </button>
              <button
                type="button"
                onClick={() => scrollToId('contact-form', reduced)}
                className="inline-flex items-center justify-center rounded-lg border border-blue-900 px-6 py-3 text-base font-semibold text-blue-900 transition-colors hover:bg-blue-50"
              >
                Get in touch
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <p className="px-2 pb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Products in use
            </p>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="block rounded-xl border border-gray-100 px-4 py-4 transition-colors hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-900">
                      {product.category}
                    </span>
                    <span className="mt-1 block text-lg font-bold text-gray-900">{product.name}</span>
                    <span className="mt-1 block text-sm text-gray-600">{product.shortDescription}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-4">
          {[
            ['Education', 'Student information systems'],
            ['Distribution', 'Field sales and inventory'],
            ['Sales', 'CRM and follow-up'],
            ['Custom', 'Web, mobile, and cloud'],
          ].map(([title, detail]) => (
            <div key={title} className="bg-white px-4 py-4">
              <dt className="text-sm font-semibold text-gray-900">{title}</dt>
              <dd className="mt-1 text-sm text-gray-600">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
