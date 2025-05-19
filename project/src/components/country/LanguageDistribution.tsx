import React from 'react';
import { LanguageType } from '../../types';

interface LanguageDistributionProps {
  languages: LanguageType[];
}

export const LanguageDistribution: React.FC<LanguageDistributionProps> = ({ languages }) => {
  // Sort languages by percentage in descending order
  const sortedLanguages = [...languages].sort((a, b) => b.percentage - a.percentage);
  
  // Color palette for the bars
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Language Distribution</h2>
      
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex h-10 w-full rounded-md overflow-hidden mb-4">
          {sortedLanguages.map((language, index) => (
            <div
              key={index}
              className={`${colors[index % colors.length]} relative group h-full`}
              style={{ width: `${language.percentage}%` }}
            >
              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap transition-opacity z-10">
                {language.name}: {language.percentage}%
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sortedLanguages.map((language, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]} mr-2`}></div>
              <div>
                <span className="text-sm font-medium">{language.name}</span>
                <span className="text-xs text-gray-400 ml-1">({language.percentage}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};