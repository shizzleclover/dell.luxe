import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { ProductImageCarousel } from '../components/products/ProductImageCarousel';
import { ProductCard } from '../components/products/ProductCard';
import { useCart } from '../context/CartContext';
import { getProductById, getFeaturedProducts } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Get product by ID
  const product = getProductById(id || '');
  
  // Get related products (for this demo, we'll just use featured products)
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== id).slice(0, 3);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Re-scroll when product ID changes
  
  // If product not found, show error and redirect to products page
  if (!product) {
    return (
      <div className="pt-28 pb-16 container-luxe">
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-3xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </motion.div>
      </div>
    );
  }
  
  // Format price
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: product.currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(q => q + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };
  
  return (
    <div className="pt-28 pb-16">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductImageCarousel 
              images={product.images} 
              productName={product.name} 
            />

            {/* Video placeholder - would be added in production */}
            <div className="mt-6 aspect-video rounded-lg overflow-hidden bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-sm">Product Video</p>
              </div>
            </div>
          </motion.div>
          
          {/* Product details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Status badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.new && (
                <span className="bg-luxury-gold text-white text-xs px-3 py-1 rounded">
                  NEW
                </span>
              )}
              {product.featured && (
                <span className="bg-luxury-black text-white text-xs px-3 py-1 rounded">
                  FEATURED
                </span>
              )}
              {product.status === 'low-stock' && (
                <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded">
                  LOW STOCK
                </span>
              )}
              {product.status === 'out-of-stock' && (
                <span className="bg-luxury-charcoal text-white text-xs px-3 py-1 rounded">
                  SOLD OUT
                </span>
              )}
              {product.status === 'coming-soon' && (
                <span className="bg-luxury-plum text-white text-xs px-3 py-1 rounded">
                  COMING SOON
                </span>
              )}
            </div>
            
            {/* Product name and price */}
            <h1 className="font-heading text-3xl md:text-4xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-baseline gap-2 mb-6">
              {product.discountedPrice ? (
                <>
                  <span className="text-2xl font-medium text-luxury-gold">
                    {formatPrice(product.discountedPrice)}
                  </span>
                  <span className="text-lg line-through text-gray-500">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium text-luxury-gold">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            {/* Product description */}
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {product.description}
            </p>
            
            {/* Quantity selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-l"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1 || product.status === 'out-of-stock' || product.status === 'coming-soon'}
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  readOnly
                  className="w-16 h-10 text-center border-y border-gray-300 dark:border-gray-700 bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                />
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-r"
                  onClick={incrementQuantity}
                  disabled={quantity >= 10 || product.status === 'out-of-stock' || product.status === 'coming-soon'}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to cart button */}
            <div className="mb-8">
              <Button 
                fullWidth
                disabled={product.status === 'out-of-stock' || product.status === 'coming-soon'}
                onClick={handleAddToCart}
              >
                {product.status === 'out-of-stock' 
                  ? 'Sold Out' 
                  : product.status === 'coming-soon' 
                    ? 'Coming Soon' 
                    : 'Add to Cart'}
              </Button>
            </div>
            
            {/* Product details */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-6">
              {/* Details section */}
              <div>
                <h3 className="font-heading text-lg font-medium mb-3 dark:text-luxury-ivory">Details</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              {/* Materials section */}
              <div>
                <h3 className="font-heading text-lg font-medium mb-3 dark:text-luxury-ivory">Materials</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {product.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
              
              {/* Sizing section */}
              <div>
                <h3 className="font-heading text-lg font-medium mb-3 dark:text-luxury-ivory">Sizing & Fit</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {product.sizing.map((sizing, index) => (
                    <li key={index}>{sizing}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Related products section */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage; 