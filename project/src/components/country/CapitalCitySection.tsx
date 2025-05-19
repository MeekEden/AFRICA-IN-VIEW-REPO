import React, { useState, useEffect } from 'react';
import { MapPin, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { CountryType } from '../../types';

interface CapitalCitySectionProps {
  country: CountryType;
}

export const CapitalCitySection: React.FC<CapitalCitySectionProps> = ({ country }) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');

  // Preload the image when component mounts
  useEffect(() => {
    if (country.capitalImageUrl) {
      const img = new Image();
      img.onload = () => setImageState('loaded');
      img.onerror = () => setImageState('error');
      img.src = country.capitalImageUrl;
    }
  }, [country.capitalImageUrl]);

  const handleImageLoad = () => {
    setImageState('loaded');
  };

  const handleImageError = () => {
    setImageState('error');
  };

  // Get the description for the capital city
  const getCapitalDescription = () => {
    switch (country.slug) {
      case 'algeria':
        return "Algiers, known as \"El-Bahdja\" or \"El-Djazaïr\" in Arabic, is the cultural, economic, and political capital of Algeria. Located on the Mediterranean coast, the city is known for its stunning white buildings that cascade down to the sea, earning it the nickname \"Algiers the White.\" The historic Casbah district, a UNESCO World Heritage site, features narrow winding streets and traditional Ottoman architecture dating back to the 16th century.";
      case 'angola':
        return "Luanda, situated on Angola's Atlantic coast, is one of Africa's fastest-growing cities and a major economic hub. Founded by Portuguese colonists in 1575, the city blends colonial architecture with modern skyscrapers. Luanda's waterfront promenade (the Marginal) offers stunning ocean views, while the Agostinho Neto Mausoleum stands as a striking monument to Angola's first president. The city is known for its vibrant markets, Portuguese-influenced cuisine, and as a center for Angola's oil industry.";
      case 'benin':
        return "Porto-Novo, meaning \"new port\" in Portuguese, is Benin's official capital, though many government offices are located in Cotonou. The city showcases a rich blend of colonial architecture, traditional African culture, and Islamic influence. Notable landmarks include the Porto-Novo Museum of Ethnography, the da Silva Museum, and the Grand Mosque. The city maintains its historical charm with narrow streets lined with colonial-era buildings, while serving as an important center for education and culture in Benin.";
      case 'botswana':
        return "Gaborone, often called \"Gabs\" by locals, is a relatively young capital city established after Botswana's independence in 1966. The city is characterized by its modern infrastructure, wide streets, and a blend of traditional and contemporary architecture. Key landmarks include the Government Enclave, the Three Chiefs' Statues, and the National Museum and Art Gallery. Surrounded by hills and situated near the Kalahari Desert, Gaborone serves as Botswana's administrative and economic center while maintaining a relaxed atmosphere compared to many other African capitals.";
      case 'burkina-faso':
        return "Ouagadougou, affectionately known as \"Ouaga,\" is the vibrant heart of Burkina Faso. The city blends traditional Mossi culture with French colonial influence and modern urban development. Notable landmarks include the National Museum, the Grand Mosque, and the Monument aux Martyrs. Ouagadougou is renowned for hosting FESPACO, Africa's largest film festival, and for its thriving arts scene. Despite being located in one of the world's poorest countries, the city displays remarkable resilience and cultural richness.";
      case 'burundi':
        return "Gitega, officially designated as Burundi's political capital in 2018 (replacing Bujumbura), is located in the central highlands of the country. This historic city was once the seat of the Burundian monarchy and maintains significant cultural importance. Gitega houses the National Museum of Burundi, which showcases the country's rich cultural heritage. The city's central location was a key factor in its selection as capital, though many diplomatic missions and some government functions remain in Bujumbura, which continues to serve as the economic capital.";
      case 'cabo-verde':
        return "Praia, located on Santiago Island, is the largest city and capital of Cabo Verde. Established in the late 16th century, the city sits on a plateau overlooking the Atlantic Ocean. The historic center, known as Plateau (Platô), features colonial architecture, colorful buildings, and the Presidential Palace. As a port city, Praia has been influenced by its maritime connections, creating a unique blend of African and Portuguese cultures. The city serves as the country's political, economic, and cultural hub while offering beautiful beaches and a relaxed island atmosphere.";
      case 'cameroon':
        return "Yaoundé, nestled among seven hills in central Cameroon, is the country's political capital and second-largest city. Founded in 1888 during German colonial rule, the city features a mix of modern government buildings, colonial architecture, and traditional markets. Notable landmarks include the Notre Dame des Victoires Cathedral, the National Museum, and the striking Reunification Monument. With its relatively mild climate due to its elevation, Yaoundé serves as an administrative and educational center, home to several universities and research institutions.";
      case 'central-african-republic':
        return "Bangui, situated on the banks of the Ubangi River, is the capital and largest city of the Central African Republic. Founded as a French trading post in 1889, the city blends colonial heritage with local cultural influences. Key landmarks include the Notre-Dame Cathedral, the Central Market, and the Presidential Palace. Despite facing significant challenges from political instability, Bangui remains the country's administrative, economic, and cultural center. The city's riverside location has historically made it an important transportation hub for the region.";
      case 'chad':
        return "N'Djamena, located at the confluence of the Chari and Logone rivers near the border with Cameroon, is Chad's capital and largest city. Founded as Fort-Lamy by French colonists in 1900, the city was renamed N'Djamena (\"place of rest\") after independence. The city features a mix of colonial buildings, modern structures, and traditional markets. Key landmarks include the Chad National Museum, the Grand Mosque, and the Presidential Palace. Despite challenging desert climate conditions, N'Djamena serves as the country's administrative, economic, and educational center.";
      case 'comoros':
        return "Moroni, situated on the western coast of Grande Comore island, is the capital and largest city of Comoros. The city blends Arab, African, and French influences, reflecting the country's diverse cultural heritage. The historic medina features narrow winding streets, traditional Comorian houses, and several mosques, including the Friday Mosque with its distinctive minaret. Moroni's harbor provides scenic views of the Indian Ocean with Mount Karthala volcano in the background. The city serves as the country's political, economic, and cultural hub while maintaining its traditional charm.";
      case 'democratic-republic-of-the-congo':
        return "Kinshasa, located on the Congo River, is one of Africa's largest cities and the capital of the Democratic Republic of the Congo. Originally named Léopoldville during Belgian colonial rule, the city has grown into a sprawling metropolis with a vibrant cultural scene. Kinshasa is known for its music (particularly rumba and soukous), art, and dynamic street life. Key landmarks include the Palais du Peuple, the National Museum, and the Académie des Beaux-Arts. The city faces urban challenges but remains a powerhouse of Central African culture and commerce.";
      case 'republic-of-the-congo':
        return "Brazzaville, situated on the north bank of the Congo River directly opposite Kinshasa, is the capital of the Republic of the Congo. Founded in 1880 by French colonizer Pierre Savorgnan de Brazza, the city features tree-lined boulevards, colonial architecture, and modern buildings. Notable landmarks include the Basilique Sainte-Anne, the Nabemba Tower (the tallest building in Central Africa), and the Poto-Poto School of Painting. Brazzaville is known for its relatively relaxed atmosphere, vibrant arts scene, and as a center for Congolese music and fashion.";
      case 'djibouti':
        return "Djibouti City, located on the Gulf of Aden at the entrance to the Red Sea, is both the capital and largest city of Djibouti. The city blends African, Arab, and French influences, reflecting its strategic position and colonial history. The European Quarter features French colonial architecture, while the African Quarter (Balbala) showcases traditional housing and markets. Key landmarks include the Central Market, Hamoudi Mosque, and the People's Palace. As a major port city, Djibouti serves as a crucial gateway for maritime trade in the region.";
      case 'egypt':
        return "Cairo, one of the world's oldest Islamic cities, is the sprawling capital of Egypt situated along the Nile River. With over 20 million people in its metropolitan area, it's the largest city in Africa and the Middle East. The city blends ancient history with modern urban life, featuring Islamic architecture, Coptic churches, and contemporary buildings. Key landmarks include the Egyptian Museum, the Citadel of Saladin, and Al-Azhar Mosque. Just outside the city lie the iconic Pyramids of Giza. Cairo serves as Egypt's cultural, political, and economic center, pulsating with energy 24 hours a day.";
      case 'equatorial-guinea':
        return "Malabo, located on Bioko Island in the Gulf of Guinea, is the capital of Equatorial Guinea. Originally named Port Clarence by the British, the city was later renamed Santa Isabel during Spanish colonial rule before becoming Malabo after independence. The city features Spanish colonial architecture, modern government buildings, and the striking Malabo Cathedral. As an island capital, Malabo offers beautiful views of the Atlantic Ocean and nearby volcanic peaks. While Malabo remains the constitutional capital, many government functions are now located in the mainland city of Oyala (Ciudad de la Paz).";
      case 'eritrea':
        return "Asmara, perched at an elevation of 2,325 meters in the central highlands, is the capital and largest city of Eritrea. The city is renowned for its well-preserved Italian modernist architecture from the colonial period (1889-1941), earning it UNESCO World Heritage status as \"Africa's Modernist City.\" Asmara features wide boulevards, Art Deco buildings, futurist structures, and the stunning Fiat Tagliero building designed like an airplane. The city's pleasant climate, outdoor café culture, and relatively orderly urban layout make it distinct among African capitals.";
      case 'eswatini':
        return "Mbabane, nestled in the Mdimba Mountains in northwest Eswatini (formerly Swaziland), is the administrative capital of the kingdom. Established in 1902 during British colonial rule, the city features a mix of modern buildings, shopping centers, and traditional markets. Key landmarks include the Parliament building, Swazi National Museum, and the nearby Ezulwini Valley. While Mbabane serves as the administrative capital, the royal and legislative capital is Lobamba, where the Royal Residences and the House of Parliament are located, reflecting Eswatini's dual capital system.";
      case 'ethiopia':
        return "Addis Ababa, whose name means \"New Flower\" in Amharic, is the capital and largest city of Ethiopia, situated in the highlands at an elevation of about 2,355 meters. Founded in 1886 by Emperor Menelik II, the city serves as the diplomatic capital of Africa, hosting the African Union headquarters and numerous international organizations. Key landmarks include the Holy Trinity Cathedral, the National Museum (home to the remains of \"Lucy\"), and Meskel Square. As one of the few African capitals never colonized by European powers, Addis Ababa maintains a distinctive Ethiopian character while embracing modernization.";
      case 'senegal':
        return "Dakar, situated on the Cap-Vert peninsula on Africa's westernmost point, is the vibrant capital and largest city of Senegal. Founded by the French in 1857, the city blends colonial architecture with modern buildings and traditional markets. As a major port city on the Atlantic Ocean, Dakar serves as West Africa's economic and cultural hub. Notable landmarks include the African Renaissance Monument, the Grand Mosque, and Gorée Island just offshore. The city is renowned for its dynamic music scene, colorful markets, and as host of the famous Paris-Dakar Rally until 2008.";
      default:
        return `${country.capital} is the capital city of ${country.name}, serving as the country's political, cultural, and economic center. The city showcases the nation's unique heritage and plays a vital role in its development and international relations.`;
    }
  };



  // If there's no capital image URL, don't render the component
  if (!country.capitalImageUrl) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Capital City</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="aspect-video relative overflow-hidden">
          {/* Loading state */}
          {imageState === 'loading' && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
              <div className="animate-pulse w-8 h-8 rounded-full bg-blue-500"></div>
            </div>
          )}

          {/* Error state - retry loading the image */}
          {imageState === 'error' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700">
              <ImageIcon size={48} className="text-gray-500 mb-2" />
              <p className="text-gray-400 text-sm mb-3">Loading image...</p>
              <button
                onClick={() => {
                  setImageState('loading');
                  // Force reload by creating a new image with cache-busting
                  const img = new Image();
                  img.onload = () => setImageState('loaded');
                  img.onerror = () => setImageState('error');
                  img.src = `${country.capitalImageUrl}?t=${new Date().getTime()}`;
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Retry
              </button>
              <a
                href={country.capitalImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mt-3"
              >
                View direct link <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          )}

          {/* The actual image */}
          {country.slug === 'senegal' ? (
            <img
              src="https://res.cloudinary.com/doxgry3tq/image/upload/v1747290065/Dakar_lh8ry2.jpg"
              alt={`${country.capital}, capital of ${country.name}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={country.capitalImageUrl}
              alt={`${country.capital}, capital of ${country.name}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>

        {/* Description Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">{country.capital}</h3>
            <div className="flex items-center text-gray-300 mb-4">
              <MapPin size={18} className="mr-2" />
              <span>Capital city of {country.name}</span>
            </div>
            <p className="text-gray-300 mb-4">
              {getCapitalDescription()}
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};
