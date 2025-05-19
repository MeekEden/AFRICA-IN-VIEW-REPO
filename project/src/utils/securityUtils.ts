/**
 * Security utility functions for the application
 */

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input The user input to sanitize
 * @returns Sanitized string
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Replace HTML special characters with their entity equivalents
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Validates an email address format
 * @param email The email address to validate
 * @returns True if the email is valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Validates that a string contains only alphanumeric characters, spaces, and common punctuation
 * @param input The string to validate
 * @returns True if the string is valid, false otherwise
 */
export const isValidText = (input: string): boolean => {
  // Allow letters, numbers, spaces, and common punctuation
  const textRegex = /^[a-zA-Z0-9\s.,!?'"-]+$/;
  return textRegex.test(input);
};

/**
 * Creates a nonce for use with Content Security Policy
 * @returns A random nonce string
 */
export const generateNonce = (): string => {
  const randomBytes = new Uint8Array(16);
  window.crypto.getRandomValues(randomBytes);
  return Array.from(randomBytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
};

/**
 * Validates a URL to ensure it's safe
 * @param url The URL to validate
 * @returns True if the URL is safe, false otherwise
 */
export const isSafeUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    // Only allow http and https protocols
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch (e) {
    return false;
  }
};

/**
 * Rate limiting utility to prevent brute force attacks
 */
export class RateLimiter {
  private attempts: Record<string, number[]> = {};
  private maxAttempts: number;
  private timeWindowMs: number;

  /**
   * Creates a new rate limiter
   * @param maxAttempts Maximum number of attempts allowed in the time window
   * @param timeWindowMs Time window in milliseconds
   */
  constructor(maxAttempts: number = 5, timeWindowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.timeWindowMs = timeWindowMs;
  }

  /**
   * Checks if an action is allowed for the given key
   * @param key Identifier for the action (e.g., IP address, username)
   * @returns True if the action is allowed, false if rate limited
   */
  isAllowed(key: string): boolean {
    const now = Date.now();
    
    // Initialize attempts array if it doesn't exist
    if (!this.attempts[key]) {
      this.attempts[key] = [];
    }
    
    // Filter out attempts outside the time window
    this.attempts[key] = this.attempts[key].filter(
      timestamp => now - timestamp < this.timeWindowMs
    );
    
    // Check if the number of attempts is below the limit
    if (this.attempts[key].length < this.maxAttempts) {
      this.attempts[key].push(now);
      return true;
    }
    
    return false;
  }

  /**
   * Gets the number of attempts remaining for the given key
   * @param key Identifier for the action
   * @returns Number of attempts remaining
   */
  attemptsRemaining(key: string): number {
    if (!this.attempts[key]) return this.maxAttempts;
    
    const now = Date.now();
    this.attempts[key] = this.attempts[key].filter(
      timestamp => now - timestamp < this.timeWindowMs
    );
    
    return Math.max(0, this.maxAttempts - this.attempts[key].length);
  }

  /**
   * Resets the attempts for the given key
   * @param key Identifier for the action
   */
  reset(key: string): void {
    delete this.attempts[key];
  }
}
