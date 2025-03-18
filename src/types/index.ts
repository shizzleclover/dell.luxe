export type ProductCategory = 
  | 'dresses' 
  | 'suits' 
  | 'coats' 
  | 'accessories' 
  | 'footwear' 
  | 'jewelry';

export type ProductStatus = 'in-stock' | 'low-stock' | 'out-of-stock' | 'coming-soon';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  currency: string;
  images: string[];
  category: ProductCategory;
  tags: string[];
  status: ProductStatus;
  featured: boolean;
  new: boolean;
  details: string[];
  materials: string[];
  sizing: string[];
  dateAdded: string;
}

export interface FilterOptions {
  categories: ProductCategory[];
  priceRange: [number, number];
  availability: ProductStatus[];
  sortBy: 'newest' | 'price-low-high' | 'price-high-low' | 'popular';
}

export interface OrderSummary {
  id: string;
  customer: string;
  date: string;
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'cancelled';
  items: number;
}

export interface CustomerSummary {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  orders: number;
  totalSpent: number;
  currency: string;
} 