import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { CountryGrid } from '../components/CountryGrid';
import { ExpandableContent } from '../components/ExpandableContent';
import { AfricaStats } from '../components/AfricaStats';
import { africanCountries } from '../data/africanCountries';
import { RegionType } from '../types';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<RegionType | null>(null);

  const filteredCountries = africanCountries.filter(country => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      country.name.toLowerCase().includes(query) ||
      country.slug.toLowerCase().includes(query) ||
      country.capital.toLowerCase().includes(query) ||
      country.regions.some(region => region.toLowerCase().includes(query));
    const matchesFilter = activeFilter ? country.regions.includes(activeFilter) : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen">
      {/* Hero section with proper z-index handling */}
      <section className="relative">
        <Hero />
      </section>

      {/* Countries section with clear separation */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto mt-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Discover African Countries</h2>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </div>

        <CountryGrid countries={filteredCountries} />
      </section>

      {/* Content sections with proper spacing */}
      <div className="mt-8">
        <ExpandableContent />
      </div>

      <div className="mt-4">
        <AfricaStats />
      </div>
    </div>
  );
};