import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { africanCountries } from '../data/africanCountries';
import { CountryType } from '../types';
import { ArrowLeft, Map } from 'lucide-react';
import { FlagSection } from '../components/country/FlagSection';
import { FactsSection } from '../components/country/FactsSection';
import { TouristAttractions } from '../components/country/TouristAttractions';
import { LanguageDistribution } from '../components/country/LanguageDistribution';
import { CapitalCitySection } from '../components/country/CapitalCitySection';

export const CountryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [country, setCountry] = useState<CountryType | null>(null);

  useEffect(() => {
    const foundCountry = africanCountries.find(c => c.slug === slug);
    setCountry(foundCountry || null);

    // Scroll to top when country changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Country not found</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Hero section with country name and flag */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6">
            <ArrowLeft size={18} /> Back to all countries
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{country.name}</h1>
              <div className="flex items-center gap-2 text-gray-300">
                <Map size={18} />
                <span>{country.capital} (Capital)</span>
              </div>
            </div>
            <div className="w-40 md:w-48 shadow-lg rounded-md overflow-hidden">
              <img
                src={country.flagUrl}
                alt={`Flag of ${country.name}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Country details */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <FlagSection country={country} />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Country Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FactsSection
              title="Geographic Facts"
              facts={country.geographicFacts}
              iconColor="text-green-400"
            />
            <FactsSection
              title="Economic Facts"
              facts={country.economicFacts}
              iconColor="text-yellow-400"
            />
          </div>
        </div>

        <CapitalCitySection country={country} />

        <LanguageDistribution languages={country.languages} />

        <TouristAttractions attractions={country.touristAttractions} />

        {/* Country Description Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">About {country.name}</h2>
          <div className="prose prose-invert max-w-none">
            {country.slug === 'algeria' ? (
              <>
                <p className="mb-4">
                  Algeria, officially the People's Democratic Republic of Algeria, is the largest country in Africa and the Arab world.
                  With a rich history spanning thousands of years, Algeria has been influenced by various civilizations including Berber,
                  Phoenician, Roman, Byzantine, Arab, Ottoman, and French.
                </p>
                <p className="mb-4">
                  The country boasts diverse landscapes, from the Mediterranean coastline in the north to the vast Sahara Desert
                  that covers more than 80% of its territory. This geographical diversity is matched by its cultural richness,
                  with a blend of Berber, Arab, and French influences evident in its cuisine, music, and architecture.
                </p>
                <p>
                  Algeria is home to numerous UNESCO World Heritage sites, including ancient Roman ruins like Timgad and Djémila,
                  medieval Islamic cities like the Casbah of Algiers, and prehistoric rock art sites like Tassili n'Ajjer.
                  The country's natural wonders include the stunning Hoggar Mountains, the lush valleys of Kabylia,
                  and the breathtaking dunes of the Grand Erg Oriental.
                </p>
              </>
            ) : (
              <p>
                {country.name} is a fascinating country with rich cultural heritage and diverse landscapes.
                From its {country.capital} capital to its various regions, the country offers visitors
                a unique blend of history, culture, and natural beauty. Explore the tourist attractions
                above to discover more about what makes {country.name} special.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};