# Security Documentation for Explore Africa

This document outlines the security measures implemented in the Explore Africa website to protect against common vulnerabilities and ensure a secure user experience.

## Table of Contents

1. [Cross-Site Scripting (XSS) Protection](#cross-site-scripting-xss-protection)
2. [Cross-Site Request Forgery (CSRF) Protection](#cross-site-request-forgery-csrf-protection)
3. [Content Security Policy (CSP)](#content-security-policy-csp)
4. [HTTPS Enforcement](#https-enforcement)
5. [Input Validation and Sanitization](#input-validation-and-sanitization)
6. [API Security](#api-security)
7. [Rate Limiting](#rate-limiting)
8. [Error Handling](#error-handling)
9. [CAPTCHA Protection](#captcha-protection)
10. [Security Headers](#security-headers)
11. [Ongoing Security Maintenance](#ongoing-security-maintenance)

## Cross-Site Scripting (XSS) Protection

XSS vulnerabilities have been addressed through:

- **Input Sanitization**: All user inputs are sanitized using the `sanitizeInput` function in `securityUtils.ts`.
- **Output Encoding**: Data is properly encoded before being rendered in the DOM.
- **Content Security Policy**: A strict CSP is implemented to prevent execution of malicious scripts.

## Cross-Site Request Forgery (CSRF) Protection

CSRF protection is implemented through:

- **CSRF Tokens**: The `csrfProtection` middleware in `securityMiddleware.ts` generates and validates CSRF tokens for form submissions.
- **SameSite Cookies**: Cookies are set with the `SameSite=Strict` attribute to prevent CSRF attacks.

## Content Security Policy (CSP)

A comprehensive Content Security Policy is implemented in `index.html`:

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://res.cloudinary.com https://flagcdn.com https://s3.amazonaws.com https://cloudfront.safaribookings.com data:;
  font-src 'self' data:;
  connect-src 'self' https://ipapi.co https://api.exchangerate-api.com;
  frame-src 'self' https://www.youtube.com https://player.vimeo.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
">
```

This policy restricts:
- Which scripts can run
- Where images, fonts, and other resources can be loaded from
- Which domains can be connected to via AJAX
- Which domains can be embedded in iframes

## HTTPS Enforcement

HTTPS is enforced through:

- **Redirect Middleware**: The Express server in `server.js` redirects all HTTP requests to HTTPS.
- **Upgrade-Insecure-Requests**: The CSP includes the `upgrade-insecure-requests` directive.
- **HSTS Header**: The `Strict-Transport-Security` header is set to enforce HTTPS.

## Input Validation and Sanitization

All user inputs are validated and sanitized:

- **Form Validation**: The `validateForm` function in forms validates inputs before submission.
- **Input Sanitization**: The `sanitizeInput` function in `securityUtils.ts` sanitizes inputs to prevent XSS.
- **Type Checking**: TypeScript provides type safety for all inputs.

## API Security

API security is implemented through:

- **Environment Variables**: API keys are stored in environment variables, not in the codebase.
- **Request Validation**: All API requests are validated before processing.
- **Timeout Handling**: API requests have timeouts to prevent hanging connections.
- **Error Handling**: API errors are handled gracefully without exposing sensitive information.

## Rate Limiting

Rate limiting is implemented to prevent abuse:

- **Form Submissions**: The `RateLimiter` class in `securityUtils.ts` limits form submissions.
- **API Requests**: The Express server in `server.js` implements rate limiting for all API requests.

## Error Handling

Secure error handling is implemented through:

- **Error Boundary**: The `ErrorBoundary` component catches and handles errors gracefully.
- **Generic Error Messages**: Error messages do not expose sensitive information in production.
- **Logging**: Errors are logged for debugging but not exposed to users.

## CAPTCHA Protection

CAPTCHA protection is implemented for sensitive operations:

- **Form Submissions**: The `SimpleCaptcha` component protects form submissions from bots.
- **Rate Limiting**: Failed CAPTCHA attempts are rate limited.

## Security Headers

Additional security headers are implemented:

- **X-Content-Type-Options**: Prevents MIME type sniffing.
- **X-Frame-Options**: Prevents clickjacking attacks.
- **X-XSS-Protection**: Provides additional XSS protection in older browsers.
- **Referrer-Policy**: Controls the information sent in the Referer header.
- **Permissions-Policy**: Restricts which browser features the site can use.

## Ongoing Security Maintenance

To maintain security over time:

1. **Regular Updates**: Keep all dependencies up to date.
2. **Security Audits**: Conduct regular security audits.
3. **Vulnerability Scanning**: Use tools like npm audit to scan for vulnerabilities.
4. **Code Reviews**: Conduct security-focused code reviews for all changes.
5. **Security Testing**: Perform regular security testing, including penetration testing.

## Reporting Security Issues

If you discover a security vulnerability, please report it by sending an email to meekeden47@gmail.com. Please do not disclose security vulnerabilities publicly until they have been addressed.
