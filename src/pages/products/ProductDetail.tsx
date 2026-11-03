import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ConceptualPreview from '../../components/products/ConceptualPreview';
import ProductInquiryForm from '../../components/products/ProductInquiryForm';
import { getProductBySlug } from '../../data/products';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [showInquiry, setShowInquiry] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="bg-white">
      <section className={`relative overflow-hidden bg-gradient-to-br ${product.accentFrom} ${product.accentTo} text-white`}>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-14 xs:py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-white/80 text-sm mb-2">
                <Link to="/products" className="hover:underline">Products</Link> / {product.name}
              </p>
              <span className="inline-block mb-4 text-xs font-semibold px-3 py-1 rounded-full bg-white/20">
                {product.category}
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-yellow-200 font-medium mb-3">{product.tagline}</p>
              <p className="text-blue-50 mb-4">{product.audience}</p>
              <p className="text-base xs:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/book-demo?product=${product.slug}`}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-colors"
                >
                  {product.primaryCta}
                </Link>
                <button
                  type="button"
                  onClick={() => setShowInquiry(true)}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  {product.secondaryCta}
                </button>
              </div>
            </div>
            <ConceptualPreview
              variant={product.thumbnail as 'education' | 'distribution' | 'crm'}
              title={`${product.name} overview`}
            />
          </div>
        </div>
      </section>

      <section className="py-12 xs:py-16">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-2">Key features and modules</h2>
          <p className="text-gray-600 mb-8">Practical capabilities designed for day-to-day business operations.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5">
            {product.features
              .slice()
              .sort((a, b) => a.displayOrder - b.displayOrder)
              .map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-5 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900 to-yellow-500 text-white text-sm font-bold flex items-center justify-center mb-3">
                    {feature.displayOrder}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {product.workflow && product.workflow.length > 0 && (
        <section className="py-12 xs:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-2">Main business workflow</h2>
            <p className="text-gray-600 mb-8">How Distribution360 connects sales, warehouse and collections.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.workflow.map((step) => (
                <div key={step.step} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <span className="text-yellow-600 font-bold text-sm">Step {step.step}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 xs:py-16">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-4">Business benefits</h2>
            <ul className="space-y-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-4">Target industries</h2>
            <div className="flex flex-wrap gap-2">
              {product.industries.map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-900 text-sm font-medium border border-blue-100"
                >
                  {industry}
                </span>
              ))}
            </div>
            {product.notes && product.notes.length > 0 && (
              <div className="mt-8 rounded-xl bg-amber-50 border border-amber-100 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Product direction</h3>
                <ul className="space-y-2 text-sm text-amber-900/90">
                  {product.notes.map((note) => (
                    <li key={note}>• {note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 xs:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {product.faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-xl border border-gray-100 p-5">
                <summary className="cursor-pointer font-semibold text-gray-900 list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-blue-900 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl xs:text-3xl font-bold mb-3">Ready to see {product.name} in action?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Book a personalized demo or send an inquiry about features, pricing, customization and implementation.
            We do not publish fixed prices because requirements vary by user count and implementation scope.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={`/book-demo?product=${product.slug}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-950 font-semibold"
            >
              Book a Demo
            </Link>
            <button
              type="button"
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 font-semibold hover:bg-white/10"
            >
              Send an Inquiry
            </button>
          </div>
        </div>
      </section>

      {showInquiry && (
        <ProductInquiryForm
          productId={product.id}
          productName={product.name}
          onClose={() => setShowInquiry(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;
