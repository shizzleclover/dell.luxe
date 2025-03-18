import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { getPlaceholderImage } from '../../data/images';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getPlaceholderImage('hero-1', '?w=1920&h=1080&fit=crop&q=90')}
          alt="Luxury fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10 dark:from-black/90 dark:to-black/50" />
      </div>
      
      {/* Content */}
      <div className="container-luxe relative z-10 mt-16 md:mt-0">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6"
          >
            Timeless Elegance,<br />
            <span className="text-luxury-gold">Exceptional</span> Craftsmanship
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
          >
            Discover our curated collection of luxury garments designed for those who appreciate refined aesthetics and uncompromising quality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asLink to="/products" size="lg">
              Explore Collection
            </Button>
            <Button asLink to="/about" variant="secondary" size="lg">
              Our Story
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}; 