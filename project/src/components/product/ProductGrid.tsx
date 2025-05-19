import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductType } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductGridProps {
  products: ProductType[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [displayCount, setDisplayCount] = useState(8);
  
  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <h3 className="text-xl font-semibold text-gray-400">No products found matching your criteria</h3>
        <p className="mt-2 text-gray-500">Try adjusting your filters</p>
      </div>
    );
  }

  const showMoreItems = () => {
    setDisplayCount(prev => Math.min(prev + 8, products.length));
  };

  const showLessItems = () => {
    setDisplayCount(8);
  };

  const displayedProducts = products.slice(0, displayCount);
  const hasMore = displayCount < products.length;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length > 8 && (
        <div className="mt-8 text-center">
          {hasMore ? (
            <button
              onClick={showMoreItems}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Show More <ChevronDown size={20} className="ml-2" />
            </button>
          ) : (
            <button
              onClick={showLessItems}
              className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Show Less <ChevronUp size={20} className="ml-2" />
            </button>
          )}
          <p className="mt-2 text-sm text-gray-400">
            Showing {displayedProducts.length} of {products.length} products
          </p>
        </div>
      )}
    </div>
  );
};
