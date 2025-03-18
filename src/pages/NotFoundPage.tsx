import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-luxe py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-luxury-charcoal dark:text-luxury-ivory">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-heading mb-4 text-luxury-charcoal dark:text-luxury-ivory">
          Page Not Found
        </p>
        <p className="mb-8 text-luxury-charcoal/80 dark:text-luxury-ivory/80 max-w-2xl mx-auto">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-block px-8 py-3"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage; 