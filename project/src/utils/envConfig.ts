/**
 * Environment configuration utility
 * 
 * This module provides a secure way to access environment variables
 * and provides fallbacks for development environments.
 */

/**
 * Get an environment variable with a fallback value
 * @param key The environment variable key
 * @param fallback The fallback value if the environment variable is not set
 * @returns The environment variable value or the fallback
 */
export const getEnvVar = (key: string, fallback: string = ''): string => {
  const value = import.meta.env[key];
  return value !== undefined ? value : fallback;
};

/**
 * Configuration object for the application
 */
export const config = {
  // API Keys (these should be kept secret and accessed only through server-side proxies)
  exchangeRateApiKey: getEnvVar('VITE_EXCHANGE_RATE_API_KEY', ''),
  geolocationApiKey: getEnvVar('VITE_GEOLOCATION_API_KEY', ''),
  
  // Security settings
  enableCSP: getEnvVar('VITE_ENABLE_CSP', 'true') === 'true',
  enableRateLimiting: getEnvVar('VITE_ENABLE_RATE_LIMITING', 'true') === 'true',
  maxRateLimit: parseInt(getEnvVar('VITE_MAX_RATE_LIMIT', '100'), 10),
  rateLimitWindowMs: parseInt(getEnvVar('VITE_RATE_LIMIT_WINDOW_MS', '900000'), 10),
  
  // External services
  cloudinaryCloudName: getEnvVar('VITE_CLOUDINARY_CLOUD_NAME', 'doxgry3tq'),
  
  // API endpoints
  geolocationApiUrl: 'https://ipapi.co/json/',
  exchangeRateApiUrl: 'https://api.exchangerate-api.com/v4/latest/INR',
  
  // Feature flags
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
};

/**
 * Get a Cloudinary URL with proper configuration
 * @param publicId The public ID of the Cloudinary asset
 * @param options Options for the Cloudinary URL
 * @returns The full Cloudinary URL
 */
export const getCloudinaryUrl = (publicId: string, options: Record<string, any> = {}): string => {
  const baseUrl = `https://res.cloudinary.com/${config.cloudinaryCloudName}/image/upload`;
  
  // Build transformation string
  const transformations = Object.entries(options)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  return transformations 
    ? `${baseUrl}/${transformations}/${publicId}` 
    : `${baseUrl}/${publicId}`;
};
