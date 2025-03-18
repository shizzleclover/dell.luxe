export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  category: string;
  inventory: number;
  featured: boolean;
  new: boolean;
  images: string[];
  colors?: string[];
  sizes?: string[];
  material?: string;
  care?: string[];
  madeIn?: string;
  additionalInfo?: string;
  rating?: number;
  reviewCount?: number;
}

export type Category = 'dresses' | 'suits' | 'jewelry' | 'accessories' | 'featured'; 