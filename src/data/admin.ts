// Remove unused import
// import type { Order, Customer } from '../types';

// Mock data for admin dashboard

// Order data
export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export const orders: Order[] = [
  {
    id: 'ORD-9385',
    customer: 'Emily Johnson',
    date: '2023-10-15T10:30:00',
    amount: 1250,
    currency: 'USD',
    status: 'completed'
  },
  {
    id: 'ORD-9386',
    customer: 'Michael Smith',
    date: '2023-10-15T14:45:00',
    amount: 845,
    currency: 'USD',
    status: 'completed'
  },
  {
    id: 'ORD-9387',
    customer: 'Sophia Williams',
    date: '2023-10-16T09:15:00',
    amount: 2100,
    currency: 'USD',
    status: 'pending'
  },
  {
    id: 'ORD-9388',
    customer: 'James Brown',
    date: '2023-10-16T16:20:00',
    amount: 675,
    currency: 'USD',
    status: 'pending'
  },
  {
    id: 'ORD-9389',
    customer: 'Olivia Davis',
    date: '2023-10-17T11:10:00',
    amount: 1895,
    currency: 'USD',
    status: 'cancelled'
  }
];

// Customer data
export interface Customer {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  orders: number;
  totalSpent: number;
  currency: string;
}

export const customers: Customer[] = [
  {
    id: 'CUST-4521',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    joinDate: '2022-05-12T00:00:00',
    orders: 8,
    totalSpent: 5680,
    currency: 'USD'
  },
  {
    id: 'CUST-4522',
    name: 'Michael Smith',
    email: 'michael.smith@example.com',
    joinDate: '2022-06-23T00:00:00',
    orders: 5,
    totalSpent: 3200,
    currency: 'USD'
  },
  {
    id: 'CUST-4523',
    name: 'Sophia Williams',
    email: 'sophia.williams@example.com',
    joinDate: '2022-08-04T00:00:00',
    orders: 12,
    totalSpent: 9450,
    currency: 'USD'
  },
  {
    id: 'CUST-4524',
    name: 'James Brown',
    email: 'james.brown@example.com',
    joinDate: '2022-09-15T00:00:00',
    orders: 3,
    totalSpent: 1950,
    currency: 'USD'
  },
  {
    id: 'CUST-4525',
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com',
    joinDate: '2022-10-28T00:00:00',
    orders: 6,
    totalSpent: 4750,
    currency: 'USD'
  }
];

// Revenue data (for charts)
export interface RevenuePoint {
  month: string;
  revenue: number;
}

export const revenueData: RevenuePoint[] = [
  { month: 'Jan', revenue: 42000 },
  { month: 'Feb', revenue: 38500 },
  { month: 'Mar', revenue: 45800 },
  { month: 'Apr', revenue: 51200 },
  { month: 'May', revenue: 49700 },
  { month: 'Jun', revenue: 53600 },
  { month: 'Jul', revenue: 56900 },
  { month: 'Aug', revenue: 51800 },
  { month: 'Sep', revenue: 47500 },
  { month: 'Oct', revenue: 50200 },
  { month: 'Nov', revenue: 0 },
  { month: 'Dec', revenue: 0 }
];

// Inventory status
export const inventoryStatus = {
  inStock: 182,
  lowStock: 24,
  outOfStock: 12,
  comingSoon: 18
};

// Top selling categories
export interface CategorySales {
  category: string;
  percentage: number;
}

export const topCategories: CategorySales[] = [
  { category: 'Dresses', percentage: 38 },
  { category: 'Jewelry', percentage: 28 },
  { category: 'Suits', percentage: 18 },
  { category: 'Accessories', percentage: 16 }
];