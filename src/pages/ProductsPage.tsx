import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/products/ProductCard';
import { ProductFilter } from '../components/products/ProductFilter';
import { getProducts, getProductsByCategory } from '../data/products';
import { shuffle } from '../utils/array';

// Mock sellers data - in a real app, this would come from a database
const sellers = [
  "Luxury Brand",
  "Elite Fashion House",
  "Designer Collection",
  "Premium Attire",
  "Fashion Forward",
  "Trendsetter Boutique",
  "Style Maven"
];

export const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const featured = searchParams.get('featured') === 'true';
  const newItems = searchParams.get('new') === 'true';
  
  // Get initial products based on URL parameters
  const products = getProducts().filter(product => {
    if (category && product.category !== category) return false;
    if (featured && !product.featured) return false;
    if (newItems && !product.new) return false;
    return true;
  });
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(category ? [category] : []);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [availabilityFilter, setAvailabilityFilter] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('featured');
  
  // Assign random sellers to products (for demonstration)
  const assignedSellers = filteredProducts.map(product => {
    return {
      ...product,
      seller: sellers[Math.floor(Math.random() * sellers.length)]
    };
  });
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter products when filter options change
  const handleFilterChange = (
    categories: string[],
    price: [number, number],
    availability: string[],
    sort: string
  ) => {
    let filtered = products;
    
    // Filter by categories
    if (categories.length > 0) {
      filtered = filtered.filter(product => categories.includes(product.category));
    }
    
    // Filter by price
    filtered = filtered.filter(
      product => (product.discountedPrice || product.price) >= price[0] && 
                (product.discountedPrice || product.price) <= price[1]
    );
    
    // Filter by availability
    if (availability.length > 0) {
      filtered = filtered.filter(product => {
        if (availability.includes('in-stock') && product.status === 'in-stock') return true;
        if (availability.includes('low-stock') && product.status === 'low-stock') return true;
        return false;
      });
    }
    
    // Sort products
    switch (sort) {
      case 'price-low':
        filtered.sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
        break;
      case 'newest':
        filtered.sort((a, b) => a.new === b.new ? 0 : a.new ? -1 : 1);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => a.featured === b.featured ? 0 : a.featured ? -1 : 1);
        break;
    }
    
    setFilteredProducts(filtered);
    setSelectedCategories(categories);
    setPriceRange(price);
    setAvailabilityFilter(availability);
    setSortOrder(sort);
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4 text-center">
            Marketplace
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
            Discover curated luxury fashion items from our prestigious sellers and designers. 
            All pieces are carefully selected to ensure premium quality and authentic designs.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-64 md:flex-shrink-0"
          >
            <ProductFilter 
              selectedCategories={selectedCategories}
              priceRange={priceRange}
              availabilityFilter={availabilityFilter}
              sortOrder={sortOrder}
              onFilterChange={handleFilterChange}
            />
          </motion.div>
          
          {/* Products grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-grow"
          >
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
                  No products found
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Showing {filteredProducts.length} products
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {assignedSellers.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      seller={product.seller}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 