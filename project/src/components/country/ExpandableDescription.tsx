import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableDescriptionProps {
  text: string;
  maxChars?: number;
}

export const ExpandableDescription: React.FC<ExpandableDescriptionProps> = ({
  text,
  maxChars = 150
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(text.length > maxChars);
  const contentRef = useRef<HTMLParagraphElement>(null);

  // Find a good truncation point (at a space rather than mid-word)
  const getTruncatedText = () => {
    if (text.length <= maxChars) return text;

    // Find the last space before maxChars
    const lastSpaceIndex = text.substring(0, maxChars).lastIndexOf(' ');
    const truncateAt = lastSpaceIndex > 0 ? lastSpaceIndex : maxChars;

    return `${text.substring(0, truncateAt)}...`;
  };

  // If text is shorter than maxChars, no need for read more/less
  if (!isTruncated) {
    return <p className="text-gray-300 mb-4">{text}</p>;
  }

  return (
    <div className="mb-4">
      <p
        ref={contentRef}
        className="text-gray-300 mb-2 transition-all duration-300"
      >
        {isExpanded ? text : getTruncatedText()}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-400 hover:text-blue-300 text-sm flex items-center transition-colors"
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>
            Read Less <ChevronUp size={16} className="ml-1" />
          </>
        ) : (
          <>
            Read More <ChevronDown size={16} className="ml-1" />
          </>
        )}
      </button>
    </div>
  );
};
