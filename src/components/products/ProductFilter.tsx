import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterOptions, ProductCategory, ProductStatus } from '../../types';
import { cn } from '../../utils/cn';

// Available categories for the marketplace
const categories = [
  "Dresses",
  "Suits",
  "Jewelry",
  "Accessories",
  "Footwear",
  "Outerwear",
  "Formal",
  "Casual"
];

interface ProductFilterProps {
  selectedCategories: string[];
  priceRange: [number, number];
  availabilityFilter: string[];
  sortOrder: string;
  className?: string;
  onFilterChange: (
    categories: string[],
    priceRange: [number, number],
    availability: string[],
    sortOrder: string
  ) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedCategories: initialCategories,
  priceRange: initialPriceRange,
  availabilityFilter: initialAvailability,
  sortOrder: initialSortOrder,
  className = "",
  onFilterChange
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [priceRange, setPriceRange] = useState<[number, number]>(initialPriceRange);
  const [availability, setAvailability] = useState<string[]>(initialAvailability);
  const [sortOrder, setSortOrder] = useState<string>(initialSortOrder);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Apply filters when they change
  useEffect(() => {
    onFilterChange(selectedCategories, priceRange, availability, sortOrder);
  }, [selectedCategories, priceRange, availability, sortOrder]);
  
  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  // Toggle availability filter
  const toggleAvailability = (status: string) => {
    setAvailability(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status) 
        : [...prev, status]
    );
  };
  
  // Handle price range changes
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange([value, priceRange[1]]);
  };
  
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange([priceRange[0], value]);
  };
  
  // Set sort order
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 10000]);
    setAvailability([]);
    setSortOrder('featured');
  };

  // Animation variants
  const filterContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05,
      }
    },
  };

  const filterItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={cn('bg-white dark:bg-luxury-charcoal/40 rounded-lg shadow-soft', className || '')}>
      {/* Mobile filter toggle */}
      <button 
        className="md:hidden w-full flex items-center justify-between p-4 text-luxury-charcoal dark:text-luxury-ivory font-medium"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>Filter & Sort</span>
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn('transition-transform', isExpanded ? 'rotate-180' : '')}
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Filter content (always visible on desktop) */}
      <AnimatePresence>
        {(isExpanded || window.innerWidth >= 768) && (
          <motion.div
            variants={filterContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="p-4 md:p-6 border-t md:border-t-0 border-gray-100 dark:border-gray-800"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-heading text-lg font-medium dark:text-luxury-ivory">Filters</h2>
              <button 
                className="md:hidden text-luxury-gold"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Hide' : 'Show'}
              </button>
            </div>
            
            {/* Categories */}
            <motion.div variants={filterItemVariants} className="mb-6">
              <h3 className="font-heading font-medium text-lg mb-3 dark:text-luxury-ivory">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-luxury-gold rounded border-gray-300 focus:ring-luxury-gold"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Price Range */}
            <motion.div variants={filterItemVariants} className="mb-6">
              <h3 className="font-heading font-medium text-lg mb-3 dark:text-luxury-ivory">Price Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400">Min</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold bg-transparent"
                    value={priceRange[0]}
                    onChange={handleMinPriceChange}
                    min={0}
                    max={priceRange[1]}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400">Max</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold bg-transparent"
                    value={priceRange[1]}
                    onChange={handleMaxPriceChange}
                    min={priceRange[0]}
                  />
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={filterItemVariants} className="mb-6">
              <h3 className="font-heading font-medium text-lg mb-3 dark:text-luxury-ivory">Availability</h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-luxury-gold rounded border-gray-300 focus:ring-luxury-gold"
                    checked={availability.includes('in-stock')}
                    onChange={() => toggleAvailability('in-stock')}
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    In Stock
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-luxury-gold rounded border-gray-300 focus:ring-luxury-gold"
                    checked={availability.includes('low-stock')}
                    onChange={() => toggleAvailability('low-stock')}
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Low Stock
                  </span>
                </label>
              </div>
            </motion.div>

            {/* Sort By */}
            <motion.div variants={filterItemVariants} className="mb-6">
              <h3 className="font-heading font-medium text-lg mb-3 dark:text-luxury-ivory">Sort By</h3>
              <select
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold bg-transparent text-gray-700 dark:text-gray-300"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </motion.div>

            {/* Reset Filters */}
            <motion.div variants={filterItemVariants}>
              <button
                onClick={resetFilters}
                className="text-luxury-gold hover:text-luxury-gold/80 font-medium transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 