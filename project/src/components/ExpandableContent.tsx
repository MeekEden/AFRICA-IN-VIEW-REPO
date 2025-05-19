import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ExpandableContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Discover Africa's Rich Heritage</h2>
        
        <div className="prose prose-invert max-w-none">
          <div className={`transition-all duration-500 ${isExpanded ? 'max-h-[2000px]' : 'max-h-[400px] overflow-hidden'}`}>
            <p className="mb-4">
              Africa, the world's second-largest continent, is a land of remarkable diversity and rich cultural heritage. From the ancient pyramids of Egypt to the vibrant markets of Marrakech, the continent is home to countless wonders that have shaped human civilization.
            </p>
            
            <p className="mb-4">
              The continent's history spans millions of years, with evidence suggesting it as the birthplace of humankind. Throughout its history, Africa has been home to numerous great civilizations, from the ancient Egyptians and Carthaginians to the medieval empires of Mali and Great Zimbabwe.
            </p>
            
            <p className="mb-4">
              Today, Africa's 54 nations represent a mosaic of cultures, languages, and traditions. The continent boasts over 1,500 different languages and countless ethnic groups, each with its unique customs and artistic expressions.
            </p>
            
            <div className={isExpanded ? 'block' : 'hidden'}>
              <p className="mb-4">
                Africa's natural heritage is equally impressive, featuring diverse ecosystems from the Sahara Desert to the Congo Rainforest. The continent hosts some of the world's most spectacular wildlife and natural wonders, including the Great Migration in the Serengeti and the mighty Victoria Falls.
              </p>
              
              <p className="mb-4">
                In the modern era, Africa is experiencing rapid transformation. Cities are growing, technologies are being embraced, and young entrepreneurs are driving innovation. The continent is increasingly becoming a hub for technological advancement, with countries like Kenya leading in mobile payment solutions and Rwanda pioneering drone delivery services.
              </p>
              
              <p className="mb-4">
                The continent's artistic scene is vibrant and evolving, with African music, fashion, and art gaining global recognition. From the rhythms of Afrobeats to the bold patterns of African fashion designers, the continent's creative influence continues to grow worldwide.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-full mt-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={20} className="ml-2" />
              </>
            ) : (
              <>
                Show More <ChevronDown size={20} className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};