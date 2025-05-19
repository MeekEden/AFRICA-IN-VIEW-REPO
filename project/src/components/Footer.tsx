import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Heart, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe size={24} className="text-blue-400" />
              <span className="text-xl font-bold text-white">Explore Africa</span>
            </div>
            <p className="text-sm">
              Discover the beauty, diversity, and richness of the African continent through our comprehensive guide to all 54 countries.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="text-blue-400 mr-2" />
                <a href="mailto:meekeden47@gmail.com" className="hover:text-blue-400 transition-colors">
                  meekeden47@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-green-400 mr-2" />
                <a href="tel:+91765751562" className="hover:text-blue-400 transition-colors">
                  +91 7657 51562
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="text-purple-400 mr-2" />
                <span className="hover:text-blue-400 transition-colors">
                  Chandigarh
                </span>
              </div>
              <div className="mt-4 flex space-x-3">
                <a href="https://www.instagram.com/meekeden_777?igsh=MXVqbWdjejRhYnZncA==" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/share/16VoV3GQZy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://www.facebook.com/share/1FaPSev54w/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://wa.me/message/AAQR5XB4YCMDH1" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {currentYear} Explore Africa. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-sm">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>for Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};