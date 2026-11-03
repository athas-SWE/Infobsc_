import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/products';
import ConceptualPreview from './ConceptualPreview';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex flex-col">
      <div className={`relative bg-gradient-to-br ${product.accentFrom} ${product.accentTo} p-5 xs:p-6`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative">
          <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white">
            {product.category}
          </span>
          <ConceptualPreview
            variant={product.thumbnail as 'education' | 'distribution' | 'crm'}
            title={product.name}
          />
        </div>
      </div>

      <div className="p-5 xs:p-6 flex flex-col flex-1">
        <h3 className="text-xl xs:text-2xl font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-blue-900 font-medium mb-3">{product.shortDescription}</p>
        <p className="text-gray-600 text-sm xs:text-base leading-relaxed mb-6 flex-1">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={`/book-demo?product=${product.slug}`}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-white font-semibold text-sm hover:from-blue-700 hover:to-yellow-400 transition-all"
          >
            Book a Demo →
          </Link>
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-blue-900 text-blue-900 font-semibold text-sm hover:bg-blue-50 transition-all"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
