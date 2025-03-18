import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPlaceholderImage } from '../../data/images';
import { cn } from '../../utils/cn';

type ProductImageCarouselProps = {
  images: string[];
  productName: string;
  className?: string;
};

export const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
  productName,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Extract image keys (without path and extension)
  const imageKeys = images.map(img => img.split('/').pop()?.split('.')[0] || '');
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const setImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Direction of animation (1 for right, -1 for left)
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      nextImage();
    } else {
      prevImage();
    }
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Main image */}
      <div className="aspect-square overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={imageKeys[currentIndex]}
            src={getPlaceholderImage(imageKeys[currentIndex], '?w=1200&q=90&auto=format')}
            alt={`${productName} - ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
          />
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-luxury-charcoal/70 text-luxury-charcoal dark:text-white backdrop-blur-sm hover:bg-white dark:hover:bg-luxury-charcoal transition-colors z-10"
          aria-label="Previous image"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-luxury-charcoal/70 text-luxury-charcoal dark:text-white backdrop-blur-sm hover:bg-white dark:hover:bg-luxury-charcoal transition-colors z-10"
          aria-label="Next image"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {imageKeys.map((key, index) => (
          <motion.button
            key={key}
            className={cn(
              'relative flex-shrink-0 w-20 h-20 overflow-hidden rounded cursor-pointer',
              index === currentIndex ? 'ring-2 ring-luxury-gold' : 'ring-1 ring-gray-200 dark:ring-gray-700',
            )}
            onClick={() => setImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={getPlaceholderImage(key, '?w=120&q=75&auto=format')}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}; 