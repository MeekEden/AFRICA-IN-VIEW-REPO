import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { config } from '../utils/envConfig';
import { isSafeUrl } from '../utils/securityUtils';

interface CurrencyContextType {
  currency: string;
  symbol: string;
  convertPrice: (priceInINR: number) => number;
  formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
  children: ReactNode;
}

// Fixed exchange rates for demonstration
// In a production app, you would fetch these from an API
const EXCHANGE_RATES: Record<string, number> = {
  'USD': 0.012, // 1 INR = 0.012 USD
  'EUR': 0.011, // 1 INR = 0.011 EUR
  'GBP': 0.0095, // 1 INR = 0.0095 GBP
  'INR': 1,
  'CAD': 0.016, // 1 INR = 0.016 CAD
  'AUD': 0.018, // 1 INR = 0.018 AUD
  'JPY': 1.82, // 1 INR = 1.82 JPY
  'CNY': 0.087, // 1 INR = 0.087 CNY
  'SGD': 0.016, // 1 INR = 0.016 SGD
  'AED': 0.044, // 1 INR = 0.044 AED
};

// Currency configuration for formatting
const CURRENCY_CONFIG: Record<string, { symbol: string, decimals: number }> = {
  'USD': { symbol: '$', decimals: 2 },
  'EUR': { symbol: '€', decimals: 2 },
  'GBP': { symbol: '£', decimals: 2 },
  'INR': { symbol: '₹', decimals: 0 },
  'CAD': { symbol: 'C$', decimals: 2 },
  'AUD': { symbol: 'A$', decimals: 2 },
  'JPY': { symbol: '¥', decimals: 0 },
  'CNY': { symbol: '¥', decimals: 2 },
  'SGD': { symbol: 'S$', decimals: 2 },
  'AED': { symbol: 'د.إ', decimals: 2 },
};

// Map country codes to currency codes
const COUNTRY_CURRENCY_MAP: Record<string, string> = {
  'US': 'USD', // United States
  'CA': 'CAD', // Canada
  'GB': 'GBP', // United Kingdom
  'DE': 'EUR', // Germany
  'FR': 'EUR', // France
  'IT': 'EUR', // Italy
  'ES': 'EUR', // Spain
  'NL': 'EUR', // Netherlands
  'BE': 'EUR', // Belgium
  'AT': 'EUR', // Austria
  'IE': 'EUR', // Ireland
  'PT': 'EUR', // Portugal
  'FI': 'EUR', // Finland
  'GR': 'EUR', // Greece
  'IN': 'INR', // India
  'AU': 'AUD', // Australia
  'JP': 'JPY', // Japan
  'CN': 'CNY', // China
  'SG': 'SGD', // Singapore
  'AE': 'AED', // United Arab Emirates
};

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(EXCHANGE_RATES);

  // Detect user's location
  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        // Validate the URL before making the request
        if (!isSafeUrl(config.geolocationApiUrl)) {
          throw new Error('Invalid geolocation API URL');
        }

        // Using ipapi.co for IP-based geolocation with proper error handling
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(config.geolocationApiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Geolocation API error: ${response.status}`);
        }

        const data = await response.json();

        // Validate the response data
        if (!data || !data.country_code) {
          throw new Error('Invalid geolocation data');
        }

        // Get currency code based on country code
        const detectedCurrency = COUNTRY_CURRENCY_MAP[data.country_code] || 'INR';
        setCurrency(detectedCurrency);
        setSymbol(CURRENCY_CONFIG[detectedCurrency]?.symbol || '₹');

        if (config.isDevelopment) {
          console.log(`Detected location: ${data.country_name} (${data.country_code})`);
          console.log(`Using currency: ${detectedCurrency} (${CURRENCY_CONFIG[detectedCurrency]?.symbol})`);
        }
      } catch (error) {
        // Handle errors gracefully without exposing details to users
        console.error('Error detecting location:', error);
        // Fallback to INR if location detection fails
      }
    };

    detectUserLocation();
  }, []);

  // Fetch exchange rates from API in production, use fixed rates in development
  useEffect(() => {
    const fetchExchangeRates = async () => {
      // In development or if no API key is available, use fixed rates
      if (!config.exchangeRateApiKey || config.isDevelopment) {
        setExchangeRates(EXCHANGE_RATES);
        return;
      }

      try {
        // Validate the URL before making the request
        if (!isSafeUrl(config.exchangeRateApiUrl)) {
          throw new Error('Invalid exchange rate API URL');
        }

        // Set up request with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(`${config.exchangeRateApiUrl}?api_key=${config.exchangeRateApiKey}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Exchange rate API error: ${response.status}`);
        }

        const data = await response.json();

        // Validate the response data
        if (!data || !data.rates) {
          throw new Error('Invalid exchange rate data');
        }

        setExchangeRates(data.rates);
      } catch (error) {
        // Handle errors gracefully without exposing details to users
        console.error('Error fetching exchange rates:', error);
        // Fallback to fixed rates if API call fails
        setExchangeRates(EXCHANGE_RATES);
      }
    };

    fetchExchangeRates();
  }, []);

  // Convert price from INR to user's currency
  const convertPrice = (priceInINR: number): number => {
    const rate = exchangeRates[currency] || 1;
    return priceInINR * rate;
  };

  // Format price according to currency conventions
  const formatPrice = (price: number): string => {
    const config = CURRENCY_CONFIG[currency] || { decimals: 0 };
    return price.toFixed(config.decimals);
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      symbol,
      convertPrice,
      formatPrice
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook to use the currency context
export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
