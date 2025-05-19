import React, { useState, useEffect } from 'react';
import { MapPin, ExternalLink, Info, Image as ImageIcon, RefreshCw, Video } from 'lucide-react';
import { AttractionType } from '../../types';
import { ExpandableDescription } from './ExpandableDescription';
import { VideoPlayer } from '../common/VideoPlayer';
import { getOptimizedImageUrl, isVideoUrl, DEFAULT_ATTRACTION_IMAGE, isProblematicUrl } from '../../utils/mediaUtils';

interface TouristAttractionsProps {
  attractions: AttractionType[];
}

export const TouristAttractions: React.FC<TouristAttractionsProps> = ({ attractions }) => {
  const [activeAttraction, setActiveAttraction] = useState<number | null>(null);
  const [imageStates, setImageStates] = useState<Record<number, 'loading' | 'loaded' | 'error'>>({});
  const [retryCount, setRetryCount] = useState<Record<number, number>>({});
  const [optimizedUrls, setOptimizedUrls] = useState<Record<number, string>>({});

  // Process and optimize image URLs when component mounts
  useEffect(() => {
    const urls: Record<number, string> = {};
    const initialStates: Record<number, 'loading' | 'loaded' | 'error'> = {};

    // First pass: process all URLs and set initial states
    attractions.forEach((attraction, index) => {
      // Skip for video URLs
      if (attraction.videoUrl || isVideoUrl(attraction.imageUrl)) {
        initialStates[index] = 'loaded';
        return;
      }

      // Get optimized URL - prioritize Cloudinary URLs
      let optimizedUrl = attraction.imageUrl;

      // Check if URL is problematic or empty
      if (!optimizedUrl || isProblematicUrl(optimizedUrl)) {
        // Use default image for problematic URLs
        optimizedUrl = DEFAULT_ATTRACTION_IMAGE;
        initialStates[index] = 'loaded'; // Mark as loaded since we're using default
      } else {
        // For valid URLs, optimize them
        optimizedUrl = getOptimizedImageUrl(optimizedUrl);
        initialStates[index] = 'loading'; // Mark for loading
      }

      urls[index] = optimizedUrl;
    });

    // Update states all at once to avoid multiple re-renders
    setOptimizedUrls(urls);
    setImageStates(initialStates);

    // Second pass: preload all images immediately
    Object.entries(urls).forEach(([indexStr, url]) => {
      const index = parseInt(indexStr);

      // Skip if already marked as loaded
      if (initialStates[index] === 'loaded') return;

      const img = new Image();
      img.onload = () => handleImageLoad(index);
      img.onerror = () => {
        console.warn(`Failed to load image for attraction: ${attractions[index]?.name}`);
        // Immediately try with default image on error
        const defaultImg = new Image();
        defaultImg.onload = () => handleImageLoad(index);
        defaultImg.onerror = () => handleImageError(index);
        defaultImg.src = DEFAULT_ATTRACTION_IMAGE;
      };
      img.src = url;
    });
  }, [attractions]);

  const handleImageLoad = (index: number) => {
    setImageStates(prev => ({ ...prev, [index]: 'loaded' }));
  };

  const handleImageError = (index: number) => {
    console.warn(`Failed to load image for attraction: ${attractions[index]?.name}`);
    setImageStates(prev => ({ ...prev, [index]: 'error' }));
  };

  const retryLoadImage = (index: number) => {
    setImageStates(prev => ({ ...prev, [index]: 'loading' }));
    setRetryCount(prev => ({ ...prev, [index]: (prev[index] || 0) + 1 }));

    // Force reload by creating a new image with cache-busting
    const img = new Image();
    img.onload = () => handleImageLoad(index);
    img.onerror = () => handleImageError(index);

    // Try the default image if we've already retried multiple times
    const retries = retryCount[index] || 0;
    if (retries >= 2) {
      img.src = DEFAULT_ATTRACTION_IMAGE;
    } else {
      img.src = `${optimizedUrls[index]}?retry=${new Date().getTime()}`;
    }
  };



  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Tourist Attractions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 tourist-attractions-grid">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
              activeAttraction === index ? 'ring-2 ring-blue-500' : ''
            }`}
            onMouseEnter={() => setActiveAttraction(index)}
            onMouseLeave={() => setActiveAttraction(null)}
          >
            <div className="relative aspect-video overflow-hidden">
              {/* Check if it's a video */}
              {(attraction.videoUrl || isVideoUrl(attraction.imageUrl)) ? (
                <VideoPlayer
                  url={attraction.videoUrl || attraction.imageUrl}
                  title={attraction.name}
                />
              ) : (
                <>
                  {/* Loading state */}
                  {(!imageStates[index] || imageStates[index] === 'loading') && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                      <div className="animate-pulse w-8 h-8 rounded-full bg-blue-500"></div>
                    </div>
                  )}

                  {/* Error state - retry loading the image */}
                  {imageStates[index] === 'error' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 z-10">
                      <ImageIcon size={48} className="text-gray-500 mb-2" />
                      <p className="text-gray-400 text-sm mb-3">Failed to load image</p>
                      <div className="flex flex-col items-center">
                        <button
                          onClick={() => retryLoadImage(index)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center"
                        >
                          <RefreshCw size={16} className="mr-2" /> Retry
                        </button>
                      </div>
                    </div>
                  )}

                  {/* The actual image */}
                  <img
                    src={
                      imageStates[index] === 'error'
                        ? DEFAULT_ATTRACTION_IMAGE
                        : (optimizedUrls[index] || DEFAULT_ATTRACTION_IMAGE) + (retryCount[index] ? `?retry=${retryCount[index]}` : '')
                    }
                    alt={attraction.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageStates[index] === 'loaded' || imageStates[index] === 'error' ? 'opacity-100' : 'opacity-70'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    loading="eager" // Change from lazy to eager for immediate loading
                    fetchPriority="high" // Add high priority for fetching
                  />

                  {/* No info button for direct image link - removed as requested */}
                </>
              )}

              {/* Title overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold">{attraction.name}</h3>
                <div className="flex items-center text-gray-300 mt-1">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{attraction.location}</span>
                </div>
              </div>
            </div>

            <div className="p-5">
              <ExpandableDescription text={attraction.description} maxChars={150} />
              <div className="flex justify-between items-center">
                {attraction.websiteUrl && (
                  <a
                    href={attraction.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Visit website <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
                {/* Only show video links, not image links */}
                {(attraction.videoUrl || isVideoUrl(attraction.imageUrl)) && (
                  <a
                    href={attraction.videoUrl || attraction.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    View video <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};