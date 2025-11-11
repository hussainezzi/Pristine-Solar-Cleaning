
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLOUDINARY_BASE_URL } from '../constants';

interface LazyImageProps {
  publicId: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ publicId, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageUrl = publicId.startsWith('http') ? publicId : `${CLOUDINARY_BASE_URL}/${publicId}`;

  return (
    <motion.img
      src={imageUrl}
      alt={alt}
      className={className}
      width={width}
      height={height}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default LazyImage;