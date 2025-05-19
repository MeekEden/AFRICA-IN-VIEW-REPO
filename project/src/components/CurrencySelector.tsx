import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

// Available currencies for the selector
const AVAILABLE_CURRENCIES = [
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
];

export const CurrencySelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currency, symbol } = useCurrency();

  // This would be implemented in a real app to allow manual currency selection
  // For now, it's just a display component showing the detected currency
  
  return (
    <div className="relative">
      <button
        className="flex items-center text-sm text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">{symbol}</span>
        <span>{currency}</span>
        <ChevronDown size={16} className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
          <div className="py-1">
            <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-700">
              Currency detected based on your location
            </div>
            {AVAILABLE_CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  curr.code === currency
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => {
                  // In a real implementation, this would update the currency
                  // For now, we just close the dropdown
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">{curr.symbol}</span>
                {curr.name} ({curr.code})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
