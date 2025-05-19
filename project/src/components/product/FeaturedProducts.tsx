import React from 'react';
import { ProductType } from '../../types';
import { ProductCard } from './ProductCard';
import { ChevronRight } from 'lucide-react';

interface FeaturedProductsProps {
  products: ProductType[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  // Filter to only featured products and take at most 4
  const featuredProducts = products
    .filter(product => product.featured)
    .slice(0, 4);

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a 
            href="#all-products" 
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors duration-200"
          >
            View All <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
