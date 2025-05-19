/**
 * Security middleware for the application
 * 
 * This module provides security-related middleware functions for the application.
 */

import { config } from '../utils/envConfig';
import { RateLimiter } from '../utils/securityUtils';

// Create a rate limiter instance for form submissions
const formSubmissionLimiter = new RateLimiter(5, 60000); // 5 attempts per minute

/**
 * Middleware to protect against CSRF attacks
 * @param formId Unique identifier for the form
 * @returns CSRF token and validation function
 */
export const csrfProtection = (formId: string) => {
  // Generate a random token
  const token = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);
  
  // Store the token in sessionStorage
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(`csrf_${formId}`, token);
  }
  
  // Return the token and a validation function
  return {
    token,
    validate: (submittedToken: string) => {
      if (typeof window === 'undefined') return false;
      
      const storedToken = sessionStorage.getItem(`csrf_${formId}`);
      
      // Clear the token after validation (one-time use)
      sessionStorage.removeItem(`csrf_${formId}`);
      
      return storedToken === submittedToken;
    }
  };
};

/**
 * Middleware to protect against rate limiting
 * @param key Identifier for the action (e.g., IP address, username)
 * @returns Whether the action is allowed
 */
export const rateLimitProtection = (key: string) => {
  if (!config.enableRateLimiting) {
    return { allowed: true, remaining: Infinity };
  }
  
  const allowed = formSubmissionLimiter.isAllowed(key);
  const remaining = formSubmissionLimiter.attemptsRemaining(key);
  
  return { allowed, remaining };
};

/**
 * Middleware to sanitize form data
 * @param formData Form data to sanitize
 * @returns Sanitized form data
 */
export const sanitizeFormData = <T extends Record<string, any>>(formData: T): T => {
  const sanitized = { ...formData };
  
  // Sanitize each field
  Object.keys(sanitized).forEach(key => {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitized[key]
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  });
  
  return sanitized;
};

/**
 * Middleware to validate form data
 * @param formData Form data to validate
 * @param rules Validation rules
 * @returns Validation result
 */
export const validateFormData = <T extends Record<string, any>>(
  formData: T,
  rules: Record<keyof T, (value: any) => boolean | string>
): { valid: boolean; errors: Partial<Record<keyof T, string>> } => {
  const errors: Partial<Record<keyof T, string>> = {};
  
  // Validate each field
  Object.keys(rules).forEach(key => {
    const result = rules[key as keyof T](formData[key as keyof T]);
    
    if (result !== true && typeof result === 'string') {
      errors[key as keyof T] = result;
    }
  });
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};
