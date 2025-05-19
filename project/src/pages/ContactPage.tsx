import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, AlertCircle } from 'lucide-react';
import { sanitizeInput, isValidEmail, isValidText } from '../utils/securityUtils';
import { SimpleCaptcha } from '../components/common/SimpleCaptcha';

export const ContactPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errors, setErrors] = useState<{name?: string; email?: string; captcha?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: {name?: string; email?: string; captcha?: string} = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!isValidText(name)) {
      newErrors.name = 'Name contains invalid characters';
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate CAPTCHA
    if (!isCaptchaVerified) {
      newErrors.captcha = 'Please complete the CAPTCHA verification';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs before sending to backend
      const sanitizedName = sanitizeInput(name);
      const sanitizedEmail = sanitizeInput(email);

      // In a real application, you would send this data to your backend
      // using a secure HTTPS endpoint
      console.log('Subscribed:', { name: sanitizedName, email: sanitizedEmail });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      setSubscribed(true);
      setName('');
      setEmail('');
      setErrors({});
    } catch (error) {
      console.error('Subscription error:', error);
      // Handle error appropriately
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team and stay updated on our latest events and offerings.
          </p>
        </div>
      </section>

      {/* Contact information and social media */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <a href="mailto:meekeden47@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      meekeden47@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <a href="tel:+91765751562" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +91 7657 51562
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">
                      Chandigarh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/meekeden_777?igsh=MXVqbWdjejRhYnZncA==" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                    <Instagram size={24} className="text-white" />
                  </a>
                  <a href="https://www.facebook.com/share/16VoV3GQZy/" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                    <Facebook size={24} className="text-white" />
                  </a>
                  <a href="https://www.facebook.com/share/1FaPSev54w/" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                    <Facebook size={24} className="text-white" />
                  </a>
                  <a href="https://wa.me/message/AAQR5XB4YCMDH1" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                    <MessageCircle size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive updates about our training programs,
                events, sessions, and new products across Africa.
              </p>

              {subscribed ? (
                <div className="bg-green-900 text-green-100 p-4 rounded-lg">
                  <p className="font-medium">Thank you for subscribing!</p>
                  <p className="text-sm mt-1">You'll receive our updates soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors({...errors, name: undefined});
                        }
                      }}
                      className={`w-full px-4 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                        errors.name ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Enter your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors({...errors, email: undefined});
                        }
                      }}
                      className={`w-full px-4 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                        errors.email ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Enter your email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-300">
                      I agree to receive emails about events, training programs, and updates from Explore Africa.
                    </label>
                  </div>

                  <SimpleCaptcha onVerify={setIsCaptchaVerified} />

                  {errors.captcha && !isCaptchaVerified && (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" /> {errors.captcha}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !isCaptchaVerified}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors ${
                      (isSubmitting || !isCaptchaVerified) ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>Subscribe <Send size={18} className="ml-2" /></>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-6 text-sm text-gray-400">
                <p>We respect your privacy and will never share your information with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
