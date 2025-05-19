/**
 * Utility functions for handling media (images and videos)
 */

/**
 * Checks if a URL is a video URL (YouTube, Vimeo, etc.)
 * @param url The URL to check
 * @returns True if the URL is a video URL, false otherwise
 */
export const isVideoUrl = (url: string): boolean => {
  if (!url) return false;

  // Check for YouTube URLs
  if (url.includes('youtube.com/') || url.includes('youtu.be/')) {
    return true;
  }

  // Check for Vimeo URLs
  if (url.includes('vimeo.com/')) {
    return true;
  }

  // Check for common video file extensions
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

/**
 * Extracts the video ID from a YouTube URL
 * @param url The YouTube URL
 * @returns The YouTube video ID or null if not a valid YouTube URL
 */
export const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;

  // Handle youtu.be format
  if (url.includes('youtu.be/')) {
    const parts = url.split('youtu.be/');
    if (parts.length > 1) {
      // Remove any query parameters
      return parts[1].split('?')[0];
    }
    return null;
  }

  // Handle youtube.com format
  if (url.includes('youtube.com/')) {
    // Extract the v parameter
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  }

  return null;
};

/**
 * Extracts the video ID from a Vimeo URL
 * @param url The Vimeo URL
 * @returns The Vimeo video ID or null if not a valid Vimeo URL
 */
export const getVimeoVideoId = (url: string): string | null => {
  if (!url || !url.includes('vimeo.com/')) return null;

  // Extract the ID from the URL
  const parts = url.split('vimeo.com/');
  if (parts.length > 1) {
    // Remove any query parameters
    return parts[1].split('?')[0];
  }

  return null;
};

/**
 * Default fallback image for tourist attractions
 */
export const DEFAULT_ATTRACTION_IMAGE = "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426533/South_sudan_southern_national_park_hc85zn.jpg";

/**
 * Checks if a URL is likely to be problematic for loading
 * @param url The URL to check
 * @returns True if the URL is likely to be problematic
 */
export const isProblematicUrl = (url: string): boolean => {
  if (!url) return true;

  // Check for Google's encrypted thumbnail URLs (these are temporary)
  if (url.includes('encrypted-tbn') || url.includes('gstatic.com/licensed-image')) {
    return true;
  }

  // Check for other potentially problematic sources
  const problematicSources = [
    'thetravelimages.com',
    'thumbnailer.cdn-si-edu.com',
    'adsttc.com'
  ];

  return problematicSources.some(source => url.includes(source));
};

/**
 * Gets an optimized image URL based on the source
 * @param url The original image URL
 * @returns The optimized image URL
 */
export const getOptimizedImageUrl = (url: string): string => {
  if (!url) return DEFAULT_ATTRACTION_IMAGE;

  // If it's already a Cloudinary URL, use it as is
  if (url.includes('cloudinary.com')) {
    return url;
  }

  // If it's a problematic URL, use the default image
  if (isProblematicUrl(url)) {
    return DEFAULT_ATTRACTION_IMAGE;
  }

  // For Wikipedia URLs, ensure we're using the full-size image, not the thumbnail
  if (url.includes('wikipedia.org')) {
    // If it's a thumbnail URL, convert to the full image URL
    if (url.includes('/thumb/')) {
      // Remove the /thumb/ part and everything after the last /
      const parts = url.split('/thumb/');
      if (parts.length > 1) {
        const path = parts[1];
        const lastSlashIndex = path.lastIndexOf('/');
        if (lastSlashIndex !== -1) {
          return `${parts[0]}/${path.substring(0, lastSlashIndex)}`;
        }
      }
    }
    return url;
  }

  // For UNESCO World Heritage site images, use as is (they're usually reliable)
  if (url.includes('whc.unesco.org')) {
    return url;
  }

  // For other URLs, return as is
  return url;
};

/**
 * Preloads an image to ensure it's in the browser cache
 * @param url The URL of the image to preload
 * @returns A promise that resolves when the image is loaded or rejects if there's an error
 */
export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error('No URL provided'));
      return;
    }

    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = getOptimizedImageUrl(url);
  });
};

/**
 * Preloads multiple images in parallel
 * @param urls Array of image URLs to preload
 * @returns A promise that resolves when all images are loaded or rejects if any fail
 */
export const preloadImages = (urls: string[]): Promise<void[]> => {
  const promises = urls.map(url => preloadImage(url).catch(err => {
    console.warn(`Failed to preload image: ${url}`, err);
    return Promise.resolve(); // Don't fail the entire batch if one image fails
  }));

  return Promise.all(promises);
};

/**
 * Creates an embed URL for a video
 * @param url The original video URL
 * @returns An embed URL for the video or null if not supported
 */
export const getVideoEmbedUrl = (url: string): string | null => {
  if (!url) return null;

  // Handle YouTube videos
  const youtubeId = getYouTubeVideoId(url);
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`;
  }

  // Handle Vimeo videos
  const vimeoId = getVimeoVideoId(url);
  if (vimeoId) {
    return `https://player.vimeo.com/video/${vimeoId}`;
  }

  // For direct video files, return the URL as is
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  if (videoExtensions.some(ext => url.toLowerCase().endsWith(ext))) {
    return url;
  }

  return null;
};
