import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types';
import { getPlaceholderImage } from '../../data/images';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

type ProductCardProps = {
  product: Product;
  className?: string;
  priority?: boolean;
  seller?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className,
  priority = false,
  seller = "Luxury Brand"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart } = useCart();
  
  // Debug product data
  console.log('Product Card Rendering:', product.id, product);
  
  const { 
    id, 
    name, 
    description, 
    price, 
    discountedPrice, 
    currency, 
    images, 
    status, 
    new: isNew, 
    featured 
  } = product;

  // Extract first image name (without path and extension)
  const firstImageKey = images[0]?.split('/').pop()?.split('.')[0] || '';
  console.log('Image key:', firstImageKey);
  
  // Format price
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };
  
  const expandedCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };
  
  const handleAddToCart = () => {
    if (status !== 'out-of-stock' && status !== 'coming-soon') {
      addToCart(product, quantity);
      setIsExpanded(false);
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(q => q + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  // Fallback image if product images are not available
  const productImage = images.length > 0 ? images[0] : getPlaceholderImage(`category-#{product.category}`);
  
  const statusBadges = () => {
    return (
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        {isNew && (
          <span className="bg-luxury-gold text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        {featured && (
          <span className="bg-luxury-black text-white text-xs px-2 py-1 rounded">
            FEATURED
          </span>
        )}
        {status === 'low-stock' && (
          <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded">
            LOW STOCK
          </span>
        )}
        {status === 'out-of-stock' && (
          <span className="bg-luxury-charcoal text-white text-xs px-2 py-1 rounded">
            SOLD OUT
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      <motion.div
        className={cn(
          "card-luxe flex flex-col h-full",
          className
        )}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        {/* Card image */}
        <Link to={`/products/#{id}`} className="block relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4 group">
          {images && images.length > 0 ? (
            <img
              src={getPlaceholderImage(firstImageKey)}
              alt={name}
              width={600}
              height={600}
              className={cn(
                "w-full h-full object-cover transition-transform duration-700 ease-in-out",
                "group-hover:scale-105"
              )}
              loading={priority ? "eager" : "lazy"}
              onError={(e) => {
                console.error(`Failed to load image for #{id}:`, firstImageKey);
                // Set fallback image on error
                e.currentTarget.src = 'https://images.unsplash.com/photo-1590664863762-bbf2banefea8?w=600&q=80&auto=format&fit=crop';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <span className="text-gray-500 dark:text-gray-400">No image available</span>
            </div>
          )}
          {statusBadges()}
        </Link>
        
        {/* Product Info */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="mb-auto">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {seller}
            </div>
            <Link to={`/products/#{id}`} className="block mb-2">
              <h3 className="font-heading font-medium text-lg text-luxury-charcoal dark:text-luxury-ivory hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                {name}
              </h3>
            </Link>
            <div className="mb-4">
              {discountedPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-luxury-gold font-medium">
                    {formatPrice(discountedPrice)}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    {formatPrice(price)}
                  </span>
                </div>
              ) : (
                <span className="text-luxury-gold font-medium">
                  {formatPrice(price)}
                </span>
              )}
            </div>
          </div>
          
          {/* Add to Cart */}
          <div className="mt-2">
            {status !== 'out-of-stock' && status !== 'coming-soon' ? (
              <div className="space-y-2">
                <div className="flex items-center">
                  <button 
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-l"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    readOnly
                    className="w-12 h-8 text-center border-y border-gray-300 dark:border-gray-700 bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                  />
                  <button 
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-r"
                    onClick={incrementQuantity}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                  <Button 
                    onClick={handleAddToCart}
                    size="sm"
                    className="ml-2 flex-grow"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ) : (
              <Button 
                disabled
                variant="secondary"
                fullWidth
              >
                {status === 'out-of-stock' ? 'Sold Out' : 'Coming Soon'}
              </Button>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Expanded Card Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsExpanded(false)}
            />
            
            {/* Expanded Card */}
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#010400] z-50 w-[95%] md:w-[90%] max-w-4xl max-h-[90vh] rounded-lg overflow-hidden shadow-xl"
              variants={expandedCardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  className="text-gray-500 hover:text-luxury-charcoal dark:text-gray-400 dark:hover:text-luxury-ivory"
                  onClick={() => setIsExpanded(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 overflow-auto max-h-[90vh]">
                {/* Product Image Section */}
                <div className="p-6 flex flex-col">
                  <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
                    <img
                      src={images && images[selectedImageIndex] 
                        ? getPlaceholderImage(images[selectedImageIndex].split('/').pop()?.split('.')[0] || '')
                        : 'https://images.unsplash.com/photo-1590664863762-bbf2banefea8?w=600&q=80&auto=format&fit=crop'
                      }
                      alt={name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error(`Failed to load expanded image:`, images[selectedImageIndex]);
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1590664863762-bbf2banefea8?w=600&q=80&auto=format&fit=crop';
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {images && images.slice(0, 4).map((image, index) => (
                      <button
                        key={index}
                        className={`aspect-square bg-gray-100 dark:bg-gray-800 rounded #{
                          selectedImageIndex === index ? 'ring-2 ring-luxury-gold' : ''
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img
                          src={getPlaceholderImage(image.split('/').pop()?.split('.')[0] || '')}
                          alt={`#{name} #{index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1590664863762-bbf2banefea8?w=600&q=80&auto=format&fit=crop';
                          }}
                        />
                      </button>
                    ))}
                  </div>
                  
                  {/* Video placeholder - would be replaced with actual video in production */}
                  <div className="mt-6 aspect-video rounded-lg overflow-hidden bg-gray-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-sm">Product Video</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Details Section */}
                <div className="p-6 flex flex-col">
                  <h2 className="font-heading text-2xl font-medium mb-2 dark:text-luxury-ivory">
                    {name}
                  </h2>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Sold by: {seller}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    {discountedPrice ? (
                      <>
                        <span className="text-2xl font-medium text-luxury-gold">
                          {formatPrice(discountedPrice)}
                        </span>
                        <span className="text-lg line-through text-gray-500">
                          {formatPrice(price)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-medium text-luxury-gold">
                        {formatPrice(price)}
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {description}
                    </p>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="mb-6">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
                        Status:
                      </span>
                      <span className={`text-sm px-2 py-1 rounded #{
                        status === 'in-stock' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : status === 'low-stock'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : status === 'out-of-stock'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                        {status === 'in-stock' ? 'In Stock' : 
                         status === 'low-stock' ? 'Low Stock' : 
                         status === 'out-of-stock' ? 'Out of Stock' : 
                         'Coming Soon'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Quantity selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center">
                      <button 
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-l"
                        onClick={decrementQuantity}
                        disabled={quantity <= 1 || status !== 'in-stock' && status !== 'low-stock'}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={quantity} 
                        readOnly
                        className="w-12 h-8 text-center border-y border-gray-300 dark:border-gray-700 bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                      />
                      <button 
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-r"
                        onClick={incrementQuantity}
                        disabled={quantity >= 10 || status !== 'in-stock' && status !== 'low-stock'}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Add to cart button */}
                  <div className="mt-auto">
                    <Button 
                      fullWidth 
                      onClick={handleAddToCart}
                      disabled={status !== 'in-stock' && status !== 'low-stock'}
                    >
                      {status === 'in-stock' || status === 'low-stock' ? 'Add to Cart' : 'Not Available'}
                    </Button>
                    <div className="mt-4">
                      <Link 
                        to={`/products/#{id}`} 
                        className="text-center block text-sm text-luxury-gold hover:underline"
                      >
                        View Full Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}; 