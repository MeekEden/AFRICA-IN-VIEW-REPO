import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { ProductCategory } from '../types';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductFilter } from '../components/product/ProductFilter';
import { ProductSearch } from '../components/product/ProductSearch';
import { FeaturedProducts } from '../components/product/FeaturedProducts';

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? product.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <ShoppingBag size={64} className="text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">African Heritage Collection</h1>
          <p className="text-xl text-gray-300">
            Discover authentic African jewelry handcrafted by skilled artisans using traditional techniques.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts products={products} />

      {/* Main Products Section */}
      <section id="all-products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Shop Our Collection</h2>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <ProductSearch value={searchQuery} onChange={setSearchQuery} />
            </div>
            <ProductFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      {/* About Our Products */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Authentic African Craftsmanship</h2>
          <p className="text-gray-300 mb-6">
            Each piece in our collection is handcrafted by skilled artisans across Africa,
            using traditional techniques passed down through generations. We work directly
            with artisans to ensure fair compensation and sustainable practices.
          </p>
          <p className="text-gray-300">
            By purchasing from our collection, you're not only acquiring a beautiful,
            unique piece of jewelry, but also supporting African artisans and helping
            preserve traditional craftsmanship.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
