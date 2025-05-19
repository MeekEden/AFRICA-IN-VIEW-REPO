import React, { useState } from 'react';
import { CountryCard } from './CountryCard';
import { CountryType } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CountryGridProps {
  countries: CountryType[];
}

export const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  const [displayCount, setDisplayCount] = useState(12);
  
  if (countries.length === 0) {
    return (
      <div className="py-16 text-center">
        <h3 className="text-xl font-semibold text-gray-400">No countries found matching your criteria</h3>
        <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
      </div>
    );
  }

  const showMoreItems = () => {
    setDisplayCount(prev => Math.min(prev + 12, countries.length));
  };

  const showLessItems = () => {
    setDisplayCount(12);
  };

  const displayedCountries = countries.slice(0, displayCount);
  const hasMore = displayCount < countries.length;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedCountries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
      
      {countries.length > 12 && (
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
            Showing {displayedCountries.length} of {countries.length} countries
          </p>
        </div>
      )}
    </div>
  );
};