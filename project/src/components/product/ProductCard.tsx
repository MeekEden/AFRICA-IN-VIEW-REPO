import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { ProductType } from '../../types';
import { useCurrency } from '../../context/CurrencyContext';

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { symbol, convertPrice, formatPrice } = useCurrency();

  // Convert the price from INR to the user's local currency
  const convertedPrice = convertPrice(product.price);
  const formattedPrice = formatPrice(convertedPrice);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={16} className="text-gray-400" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-400" />);
    }

    return stars;
  };

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />

        {product.featured && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 p-2 rounded-full transition-colors duration-200 hover:bg-opacity-90"
        >
          <Heart
            size={18}
            className={isFavorite ? "fill-red-500 text-red-500" : "text-white"}
          />
        </button>

        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 transition-opacity duration-300">
            <a
              href={`https://wa.me/message/AAQR5XB4YCMDH1?text=I'm interested in purchasing the ${product.name} ${product.category.replace(/^\w/, c => c.toUpperCase())} for ${symbol}${formattedPrice}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <ShoppingCart size={18} />
              Buy Now
            </a>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold line-clamp-1">{product.name}</h3>
          <span className="text-lg font-bold text-blue-400">{symbol}{formattedPrice}</span>
        </div>

        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
          </div>

          <span className={`text-xs font-medium px-2 py-1 rounded ${product.inStock ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};
