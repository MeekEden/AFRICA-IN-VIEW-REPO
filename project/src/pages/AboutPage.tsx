import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Target, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Explore Africa</h1>
          <p className="text-xl text-gray-300">
            Discover our mission to showcase the beauty, diversity, and richness of the African continent.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Purpose, Training Programs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Tile */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-300">
                To be the premier platform that showcases Africa's rich cultural heritage, natural beauty, and economic potential to the world.
                We envision a future where Africa's diverse stories are told authentically, inspiring global appreciation and sustainable tourism.
              </p>
            </div>

            {/* Mission Tile */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <Award size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-300">
                To provide comprehensive, accurate, and engaging information about all 54 African countries,
                highlighting their unique cultures, landmarks, histories, and opportunities.
                We are committed to breaking stereotypes and presenting Africa in its true, multifaceted glory.
              </p>
            </div>

            {/* Purpose Tile */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-3 rounded-full mr-4">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Our Purpose</h2>
              </div>
              <p className="text-gray-300">
                To bridge the knowledge gap about Africa, fostering greater understanding and appreciation of the continent's
                contributions to global heritage. We aim to inspire travel, investment, and cultural exchange that benefits
                African communities and promotes sustainable development across the continent.
              </p>
            </div>

            {/* Training Programs Tile */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <Users size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Training Programs</h2>
              </div>
              <p className="text-gray-300">
                We offer specialized training programs across Africa, focusing on sustainable tourism, cultural preservation,
                and digital skills development. Our programs empower local communities to share their heritage while building
                economic opportunities through tourism and cultural exchange initiatives.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Cultural Heritage Preservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Digital Storytelling Workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team section or additional content can be added here */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us in Exploring Africa</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're planning your next adventure, researching for educational purposes, or simply curious about
            the diverse cultures and landscapes of Africa, we're here to be your trusted guide.
          </p>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
