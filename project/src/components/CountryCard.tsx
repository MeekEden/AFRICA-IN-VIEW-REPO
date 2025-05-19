import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Info } from 'lucide-react';
import { CountryType } from '../types';

interface CountryCardProps {
  country: CountryType;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={country.flagUrl} 
          alt={`Flag of ${country.name}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 p-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Info size={20} className="text-yellow-400 mr-2" />
                <span className="font-semibold">Did you know?</span>
              </div>
              <p className="text-sm">{country.flagFact}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{country.name}</h3>
        
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{country.capital}</span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Fun Fact:</h4>
          <p className="text-sm text-gray-400 line-clamp-2">{country.funFact}</p>
        </div>
        
        <Link 
          to={`/country/${country.slug}`}
          className="block w-full py-2 px-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};