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
      <div className="container-luxe py-10 bg-red-100">
        <h1 className="text-3xl font-bold">Debug Content</h1>
        <p>If you can see this, the layout is working correctly.</p>
      </div>
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
    </>
  );
};

export default HomePage; 