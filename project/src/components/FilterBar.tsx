import React from 'react';
import { Filter } from 'lucide-react';
import { RegionType } from '../types';

const regions: { label: string; value: RegionType }[] = [
  { label: 'All', value: null },
  { label: 'Northern Africa', value: 'northern' },
  { label: 'Southern Africa', value: 'southern' },
  { label: 'Eastern Africa', value: 'eastern' },
  { label: 'Western Africa', value: 'western' },
  { label: 'Central Africa', value: 'central' },
  { label: 'Coastal Countries', value: 'coastal' },
  { label: 'Rain Forest', value: 'rainforest' },
  { label: 'Sahara Region', value: 'sahara' },
];

interface FilterBarProps {
  activeFilter: RegionType | null;
  onFilterChange: (filter: RegionType | null) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex items-center mr-2">
        <Filter size={16} className="text-gray-400 mr-1" />
        <span className="text-sm font-medium text-gray-300">Filter by:</span>
      </div>
      
      {regions.map((region) => (
        <button
          key={region.label}
          onClick={() => onFilterChange(region.value)}
          className={`py-2 px-3 text-sm rounded-full transition-colors duration-200 ${
            (activeFilter === region.value || (region.value === null && activeFilter === null))
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {region.label}
        </button>
      ))}
    </div>
  );
};