import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { ProductCategory } from '../../types';

interface ProductFilterProps {
  activeCategory: ProductCategory | null;
  onCategoryChange: (category: ProductCategory | null) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { label: 'All Products', value: null },
    { label: 'Bracelets', value: ProductCategory.BRACELETS },
    { label: 'Necklaces', value: ProductCategory.NECKLACES },
    { label: 'Earrings', value: ProductCategory.EARRINGS },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex items-center mr-2">
        <Filter size={16} className="text-gray-400 mr-1" />
        <span className="text-sm font-medium text-gray-300">Filter by:</span>
      </div>

      {categories.map((category) => (
        <button
          key={category.label}
          onClick={() => onCategoryChange(category.value)}
          className={`py-2 px-3 text-sm rounded-full transition-colors duration-200 ${
            (activeCategory === category.value || (category.value === null && activeCategory === null))
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {category.label}
        </button>
      ))}

      <button className="ml-auto py-2 px-3 text-sm rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-200 flex items-center gap-1">
        <SlidersHorizontal size={16} />
        <span>Advanced Filters</span>
      </button>
    </div>
  );
};
