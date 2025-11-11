/**
 * A reusable image component that lazy-loads images with a fade-in animation.
 * It can handle both full URLs and Cloudinary public IDs.
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLOUDINARY_BASE_URL } from '../constants';

interface LazyImageProps {
  publicId: string; // Can be a Cloudinary public ID or a full image URL.
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ publicId, alt, className, width, height }) => {
  // State to track if the image has finished loading.
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if the provided publicId is a full URL. If not, construct one using the Cloudinary base URL.
  const imageUrl = publicId.startsWith('http') ? publicId : `${CLOUDINARY_BASE_URL}/${publicId}`;

  return (
    <motion.img
      src={imageUrl}
      alt={alt}
      className={className}
      width={width}
      height={height}
      // Animate opacity for a smooth fade-in effect once loaded.
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      // Set isLoaded to true when the browser finishes loading the image.
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default LazyImage;