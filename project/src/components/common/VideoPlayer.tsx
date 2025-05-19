import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ExternalLink } from 'lucide-react';
import { getVideoEmbedUrl, isVideoUrl, getYouTubeVideoId, getVimeoVideoId } from '../../utils/mediaUtils';

interface VideoPlayerProps {
  url: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  // If the URL is not a video URL, return null
  if (!isVideoUrl(url)) {
    return null;
  }
  
  const embedUrl = getVideoEmbedUrl(url);
  
  // If we couldn't generate an embed URL, show an error
  if (!embedUrl) {
    return (
      <div className="aspect-video bg-gray-800 flex flex-col items-center justify-center text-center p-4">
        <p className="text-gray-400 mb-3">Unable to load video</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Open video in new tab <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    );
  }
  
  // Handle YouTube videos
  if (getYouTubeVideoId(url)) {
    return (
      <div className="aspect-video relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="animate-pulse w-8 h-8 rounded-full bg-blue-500"></div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
            <p className="text-gray-400 mb-3">Failed to load video</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Open video in new tab <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        )}
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        ></iframe>
      </div>
    );
  }
  
  // Handle Vimeo videos
  if (getVimeoVideoId(url)) {
    return (
      <div className="aspect-video relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="animate-pulse w-8 h-8 rounded-full bg-blue-500"></div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
            <p className="text-gray-400 mb-3">Failed to load video</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Open video in new tab <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        )}
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        ></iframe>
      </div>
    );
  }
  
  // Handle direct video files
  return (
    <div className="aspect-video relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="animate-pulse w-8 h-8 rounded-full bg-blue-500"></div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
          <p className="text-gray-400 mb-3">Failed to load video</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            Open video in new tab <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      )}
      <video
        src={embedUrl}
        title={title}
        controls
        className="w-full h-full"
        onLoadStart={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      ></video>
    </div>
  );
};
