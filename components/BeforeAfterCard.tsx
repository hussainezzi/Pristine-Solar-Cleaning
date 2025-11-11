
import React from 'react';
import LazyImage from './LazyImage';

interface BeforeAfterCardProps {
  beforeImageId: string;
  afterImageId: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ beforeImageId, afterImageId }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <div className="relative">
        <LazyImage
          publicId={beforeImageId}
          alt="Dirty solar panel"
          className="rounded-lg shadow-xl w-full h-auto aspect-video object-cover"
        />
        <span className="absolute top-4 left-4 bg-red-500 text-white font-bold py-1 px-3 rounded-full text-sm">BEFORE</span>
      </div>
      <div className="relative">
        <LazyImage
          publicId={afterImageId}
          alt="Clean solar panel"
          className="rounded-lg shadow-xl w-full h-auto aspect-video object-cover"
        />
        <span className="absolute top-4 left-4 bg-brand-green-500 text-white font-bold py-1 px-3 rounded-full text-sm">AFTER</span>
      </div>
    </div>
  );
};

export default BeforeAfterCard;
