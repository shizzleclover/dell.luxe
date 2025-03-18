import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProductCard } from '../products/ProductCard';
import { Button } from '../ui/Button';
import { getFeaturedProducts } from '../../data/products';

export const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-luxury-navy/30">
      <div className="container-luxe">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our most coveted pieces, each one a statement of sophisticated luxury and impeccable design.
          </p>
        </motion.div>
        
        {/* Products grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.slice(0, 3).map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              priority={index === 0}
            />
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button asLink to="/products">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 