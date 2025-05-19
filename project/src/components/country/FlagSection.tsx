import React from 'react';
import { CountryType } from '../../types';

interface FlagSectionProps {
  country: CountryType;
}

export const FlagSection: React.FC<FlagSectionProps> = ({ country }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-2xl font-bold mb-6">Country Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 mb-1">Population</h3>
            <p className="text-xl font-semibold">{country.population.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 mb-1">Capital</h3>
            <p className="text-xl font-semibold">{country.capital}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 mb-1">Currency</h3>
            <p className="text-xl font-semibold">{country.currency}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 mb-1">Area</h3>
            <p className="text-xl font-semibold">{country.area.toLocaleString()} km²</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">National Flag</h3>
        <div className="aspect-video relative overflow-hidden rounded-md shadow-lg mb-4">
          <img
            src={country.flagUrl}
            alt={`Flag of ${country.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-2">Flag Symbolism:</h4>
          <p className="text-gray-400">{country.flagDescription}</p>
        </div>
      </div>
    </div>
  );
};