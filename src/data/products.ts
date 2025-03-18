import { Product } from '../types';
import { getPlaceholderImage } from './images';

// Helper function to generate images for products based on ID
const getProductImages = (productId: string, count: number = 3) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(getPlaceholderImage(`#{productId}-#{i}`));
  }
  return images;
};

export const products: Product[] = [
  {
    id: 'obsidian-gown',
    name: 'The Obsidian Gown',
    description: 'A stunning floor-length black evening dress with delicate beading and a dramatic silhouette. Perfect for galas and special occasions.',
    price: 2995,
    currency: 'USD',
    images: getProductImages('obsidian-gown'),
    category: 'dresses',
    tags: ['evening', 'formal', 'gala', 'beaded'],
    status: 'in-stock',
    featured: true,
    new: false,
    details: [
      'Floor-length silhouette',
      'Hand-applied crystal beading',
      'Satin finish with subtle sheen',
      'Concealed back zip closure',
      'Slight train for dramatic effect'
    ],
    materials: ['95% Silk', '5% Elastane', 'Lining: 100% Silk'],
    sizing: ['Made in Italy', 'Model is 5\'10" and wears size 4', 'Runs true to size'],
    dateAdded: '2023-09-15'
  },
  {
    id: 'riviera-suit',
    name: 'The Riviera Silk Suit',
    description: 'An impeccably tailored cream silk suit perfect for summer soirees and yacht events. Exudes effortless luxury and sophistication.',
    price: 3250,
    currency: 'USD',
    images: getProductImages('riviera-suit'),
    category: 'suits',
    tags: ['summer', 'tailored', 'silk', 'cream'],
    status: 'in-stock',
    featured: true,
    new: true,
    details: [
      'Two-piece suit',
      'Single-breasted jacket with mother-of-pearl buttons',
      'Wide-leg trousers with side pockets',
      'Fully lined',
      'Relaxed yet refined fit'
    ],
    materials: ['100% Mulberry Silk', 'Lining: 100% Cupro'],
    sizing: ['Made in France', 'Model is 5\'9" and wears size 6', 'Consider sizing down for a more fitted look'],
    dateAdded: '2023-10-28'
  },
  {
    id: 'marquise-earrings',
    name: 'The Marquise Diamond Earrings',
    description: 'Exquisite marquise-cut diamond drop earrings set in 18k white gold. A timeless statement piece that captures the light with every movement.',
    price: 9800,
    currency: 'USD',
    images: getProductImages('marquise-earrings'),
    category: 'jewelry',
    tags: ['diamond', 'evening', 'heirloom', 'statement'],
    status: 'low-stock',
    featured: true,
    new: false,
    details: [
      '4.5 carat total weight',
      'Marquise-cut center diamonds',
      'Pavé diamond accents',
      'Secure lever back closure',
      'Handcrafted in our atelier'
    ],
    materials: ['18k White Gold', 'Ethically-sourced GIA-certified diamonds'],
    sizing: ['Length: 2.75 inches', 'Weight: 6.2 grams per earring'],
    dateAdded: '2023-07-22'
  },
  {
    id: 'cashmere-coat',
    name: 'The Cashmere Overcoat',
    description: 'A sumptuous double-faced cashmere overcoat in camel. The epitome of understated luxury and warmth.',
    price: 4650,
    discountedPrice: 3950,
    currency: 'USD',
    images: getProductImages('cashmere-coat'),
    category: 'coats',
    tags: ['winter', 'cashmere', 'camel', 'oversized'],
    status: 'in-stock',
    featured: false,
    new: false,
    details: [
      'Relaxed, oversized silhouette',
      'Double-faced construction (no lining needed)',
      'Concealed front closure',
      'Dropped shoulders',
      'Side pockets'
    ],
    materials: ['100% Grade-A Mongolian Cashmere'],
    sizing: ['Made in Scotland', 'Model is 5\'8" and wears size Small', 'Oversized fit - consider sizing down'],
    dateAdded: '2023-08-12'
  },
  {
    id: 'velvet-clutch',
    name: 'The Velvet Evening Clutch',
    description: 'A sophisticated burgundy velvet clutch with antique gold frame. Adds a touch of vintage glamour to any evening ensemble.',
    price: 1450,
    currency: 'USD',
    images: getProductImages('velvet-clutch'),
    category: 'accessories',
    tags: ['evening', 'velvet', 'vintage', 'burgundy'],
    status: 'in-stock',
    featured: false,
    new: true,
    details: [
      'Structured frame design',
      'Italian velvet exterior',
      'Antique gold-tone clasp closure',
      'Silk-lined interior',
      'Detachable chain strap'
    ],
    materials: ['Italian Velvet', 'Brass frame with antique gold finish', 'Silk lining'],
    sizing: ['Height: 4.5 inches', 'Width: 7 inches', 'Depth: 2 inches', 'Chain drop: 21 inches'],
    dateAdded: '2023-11-05'
  },
  {
    id: 'leather-boots',
    name: 'The Parisian Leather Boots',
    description: 'Meticulously crafted black leather boots with a subtle block heel. Combines Parisian elegance with everyday comfort.',
    price: 1895,
    currency: 'USD',
    images: getProductImages('leather-boots'),
    category: 'footwear',
    tags: ['leather', 'boots', 'black', 'block-heel'],
    status: 'out-of-stock',
    featured: false,
    new: false,
    details: [
      'Mid-calf height',
      '2.5-inch block heel',
      'Full leather lining',
      'Side zip closure',
      'Leather sole with rubber insert for grip'
    ],
    materials: ['Italian Calfskin Leather', 'Leather sole with rubber grip'],
    sizing: ['Made in Italy', 'Runs small - consider sizing up', 'Available in EU sizes 35-42'],
    dateAdded: '2023-06-30'
  },
  {
    id: 'column-dress',
    name: 'The Alabaster Column Dress',
    description: 'A sculptural white column dress with asymmetrical neckline. Architectural minimalism meets ethereal elegance.',
    price: 2750,
    currency: 'USD',
    images: getProductImages('column-dress'),
    category: 'dresses',
    tags: ['minimalist', 'evening', 'white', 'architectural'],
    status: 'in-stock',
    featured: true,
    new: true,
    details: [
      'Floor-length column silhouette',
      'Asymmetrical one-shoulder neckline',
      'Structured bonded fabric',
      'Concealed back zip',
      'Subtle side slit'
    ],
    materials: ['63% Cotton', '37% Silk', 'Lining: 100% Silk'],
    sizing: ['Made in USA', 'Model is 5\'11" and wears size 2', 'Fits true to size'],
    dateAdded: '2023-11-20'
  },
  {
    id: 'silk-scarf',
    name: 'The Emerald Silk Scarf',
    description: 'A luxurious oversized silk scarf in rich emerald with hand-rolled edges. Versatile enough to be worn multiple ways.',
    price: 495,
    currency: 'USD',
    images: getProductImages('silk-scarf'),
    category: 'accessories',
    tags: ['silk', 'emerald', 'scarf', 'hand-rolled'],
    status: 'in-stock',
    featured: false,
    new: false,
    details: [
      'Oversized square format',
      'Hand-rolled edges',
      'Subtle tonal pattern',
      'Lightweight and fluid drape',
      'Gift box included'
    ],
    materials: ['100% Mulberry Silk'],
    sizing: ['Dimensions: 36" x 36"'],
    dateAdded: '2023-09-28'
  },
  {
    id: 'tuxedo-dress',
    name: 'The Tuxedo Evening Dress',
    description: 'A sophisticated black dress with tuxedo-inspired detailing. Blends masculine tailoring with feminine silhouette.',
    price: 2395,
    currency: 'USD',
    images: getProductImages('tuxedo-dress'),
    category: 'dresses',
    tags: ['tuxedo', 'evening', 'black', 'tailored'],
    status: 'in-stock',
    featured: false,
    new: false,
    details: [
      'Midi length with front slit',
      'Satin lapels and buttons',
      'Fitted waist with gentle flare',
      'Back vent for ease of movement',
      'Fully lined'
    ],
    materials: ['Wool blend with satin trim', 'Lining: 100% Cupro'],
    sizing: ['Made in Italy', 'Model is 5\'9" and wears size 4', 'Fits true to size'],
    dateAdded: '2023-08-15'
  },
  {
    id: 'evening-sandals',
    name: 'The Sapphire Evening Sandals',
    description: 'Striking royal blue satin evening sandals with crystal embellishments. Designed to be as comfortable as they are beautiful.',
    price: 1250,
    currency: 'USD',
    images: getProductImages('evening-sandals'),
    category: 'footwear',
    tags: ['evening', 'sandals', 'blue', 'embellished'],
    status: 'coming-soon',
    featured: true,
    new: true,
    details: [
      '3.5-inch stiletto heel',
      'Crystal-embellished straps',
      'Cushioned insole',
      'Adjustable ankle strap',
      'Leather sole'
    ],
    materials: ['Italian Satin Upper', 'Kid Leather Lining', 'Leather Sole'],
    sizing: ['Made in Italy', 'Runs slightly narrow', 'Available in Italian sizes 35-42'],
    dateAdded: '2023-12-01'
  },
  {
    id: 'velvet-suit',
    name: 'The Bordeaux Velvet Suit',
    description: 'A sumptuous velvet suit in rich bordeaux, perfect for making a statement at winter events and festive occasions.',
    price: 3450,
    currency: 'USD',
    images: getProductImages('velvet-suit'),
    category: 'suits',
    tags: ['velvet', 'bordeaux', 'winter', 'statement'],
    status: 'in-stock',
    featured: false,
    new: true,
    details: [
      'Single-breasted jacket with satin lapels',
      'Straight-leg trousers',
      'Jacket fully lined in silk',
      'Four-button cuffs',
      'Side adjusters on trouser waistband'
    ],
    materials: ['Cotton Velvet', 'Satin trim', 'Lining: 100% Silk'],
    sizing: ['Made in England', 'Model is 6\'0" and wears size 40R', 'Regular fit'],
    dateAdded: '2023-10-10'
  },
  {
    id: 'tennis-bracelet',
    name: 'The Diamond Tennis Bracelet',
    description: 'A classic diamond tennis bracelet elevated with perfectly matched round brilliant diamonds. Effortless luxury for everyday or special occasions.',
    price: 12500,
    currency: 'USD',
    images: getProductImages('tennis-bracelet'),
    category: 'jewelry',
    tags: ['diamond', 'bracelet', 'classic', 'statement'],
    status: 'low-stock',
    featured: false,
    new: false,
    details: [
      '7.5 carat total weight',
      'Round brilliant diamonds',
      'Four-prong setting',
      'Double safety clasp',
      'Handcrafted by master jewelers'
    ],
    materials: ['18k White Gold', 'GIA-certified VS clarity, F-G color diamonds'],
    sizing: ['Standard 7-inch length', 'Custom lengths available upon request'],
    dateAdded: '2023-07-15'
  }
];

export const getProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
}; 