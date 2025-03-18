import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { CategoryShowcase } from '../components/home/CategoryShowcase';

const HomePage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
    </>
  );
};

export default HomePage; 