import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { getPlaceholderImage } from '../../data/images';

type Category = {
  name: string;
  image: string;
  description: string;
  slug: string;
};

export const CategoryShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const categories: Category[] = [
    {
      name: 'Dresses',
      image: 'category-dresses',
      description: 'Elegant evening gowns and sophisticated day dresses',
      slug: 'dresses'
    },
    {
      name: 'Suits',
      image: 'category-suits',
      description: 'Impeccably tailored suits crafted from premium fabrics',
      slug: 'suits'
    },
    {
      name: 'Jewelry',
      image: 'category-jewelry',
      description: 'Exquisite pieces that add the perfect finishing touch',
      slug: 'jewelry'
    },
    {
      name: 'Accessories',
      image: 'category-accessories',
      description: 'Luxurious accessories to complement your ensemble',
      slug: 'accessories'
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container-luxe">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
            Explore Our Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our curated collections, each carefully crafted to embody elegance and sophistication.
          </p>
        </motion.div>
        
        {/* Categories grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.slug} variants={itemVariants}>
              <Link 
                to={`/products?category=${category.slug}`}
                className="group block relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={getPlaceholderImage(category.image, '?w=800&h=450&fit=crop&q=80')}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-heading text-white text-2xl mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <span className="inline-flex items-center text-luxury-gold font-medium">
                    Explore {category.name}
                    <svg 
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 