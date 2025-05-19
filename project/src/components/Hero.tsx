import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { africanLandmarks } from '../data/africanLandmarks';
import { Image as ImageIcon, ExternalLink } from 'lucide-react';
import { preloadImages } from '../utils/mediaUtils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Fallback image if the main image fails to load
const FALLBACK_IMAGE = "https://res.cloudinary.com/doxgry3tq/image/upload/v1747396103/Sahara_Desert_rqxfwk.jpg";

export const Hero: React.FC = () => {
  // Track loading state for each image
  const [imageStates, setImageStates] = useState<Record<number, 'loading' | 'loaded' | 'error'>>({});
  const [isPreloading, setIsPreloading] = useState(true);

  // Preload all images when component mounts
  useEffect(() => {
    const imageUrls = africanLandmarks.map(landmark => landmark.imageUrl);

    // Also preload the fallback image
    imageUrls.push(FALLBACK_IMAGE);

    setIsPreloading(true);

    // Create a timeout to ensure we don't show the loading screen forever
    const timeoutId = setTimeout(() => {
      setIsPreloading(false);
      console.log('Preloading timeout reached, showing content anyway');
    }, 5000); // 5 seconds max loading time

    preloadImages(imageUrls)
      .then(() => {
        console.log('All landmark images preloaded successfully');
      })
      .catch(error => {
        console.warn('Failed to preload some landmark images:', error);
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setIsPreloading(false);

        // Initialize all images as loaded after preloading
        const initialStates: Record<number, 'loading' | 'loaded' | 'error'> = {};
        africanLandmarks.forEach((_, index) => {
          initialStates[index] = 'loaded';
        });
        setImageStates(initialStates);
      });

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleImageLoad = (index: number) => {
    setImageStates(prev => ({ ...prev, [index]: 'loaded' }));
  };

  const handleImageError = (index: number) => {
    console.warn(`Failed to load image for landmark: ${africanLandmarks[index].name}`);

    // Try to reload the image with a cache-busting parameter
    const img = new Image();
    img.onload = () => {
      setImageStates(prev => ({ ...prev, [index]: 'loaded' }));
      console.log(`Successfully reloaded image for landmark: ${africanLandmarks[index].name}`);
    };
    img.onerror = () => {
      setImageStates(prev => ({ ...prev, [index]: 'error' }));
      console.error(`Failed to reload image for landmark: ${africanLandmarks[index].name}`);
    };
    img.src = `${africanLandmarks[index].imageUrl}?t=${new Date().getTime()}`;
  };

  return (
    <div className="w-full h-[80vh] min-h-[500px] relative overflow-hidden">
      {/* Global preloading state */}
      {isPreloading && (
        <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
          <div className="animate-pulse w-16 h-16 rounded-full bg-blue-500 mb-4"></div>
          <p className="text-gray-300">Loading amazing African landmarks...</p>
        </div>
      )}

      {/* Background watermark - lowest z-index */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-0 pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-bold text-white opacity-10">EXPLORE AFRICA</h1>
      </div>

      {/* Swiper component - middle z-index */}
      <div className="relative z-10 h-full w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
          slidesPerView={1}
        >
          {africanLandmarks.map((landmark, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                {/* Image container with proper error handling */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Loading state */}
                  {(!imageStates[index] || imageStates[index] === 'loading') && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                      <div className="animate-pulse w-12 h-12 rounded-full bg-blue-500"></div>
                    </div>
                  )}

                  {/* Error state */}
                  {imageStates[index] === 'error' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 z-10">
                      <ImageIcon size={48} className="text-gray-500 mb-4" />
                      <p className="text-gray-400 text-sm mb-4">Failed to load image</p>
                      <button
                        onClick={() => handleImageError(index)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                      >
                        Retry
                      </button>
                    </div>
                  )}

                  {/* The actual image */}
                  <img
                    src={imageStates[index] === 'error' ? FALLBACK_IMAGE : landmark.imageUrl}
                    alt={`${landmark.name}, ${landmark.location}`}
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 md:p-16 z-20">
                  <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">{landmark.name}</h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-4">{landmark.location}</p>
                  <p className="text-gray-300 max-w-2xl">{landmark.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Top gradient - highest z-index */}
      <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-gray-900 to-transparent h-24 pointer-events-none"></div>
    </div>
  );
};