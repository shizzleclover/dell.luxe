import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { orders, customers, inventoryStatus, topCategories } from '../data/admin';
import { products } from '../data/products';

const AdminDashboardPage: React.FC = () => {
  // Demo admin sections
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'orders' | 'customers'>('dashboard');
  
  return (
    <div className="pt-28 pb-16">
      <div className="container-luxe">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            This is a demo admin dashboard with mock data. No actual database or backend functionality is implemented.
          </p>
        </motion.div>
        
        {/* Navigation tabs */}
        <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap -mb-px">
            <button
              className={`mr-2 py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'dashboard' 
                  ? 'border-luxury-gold text-luxury-gold' 
                  : 'border-transparent text-gray-500 hover:text-luxury-charcoal dark:hover:text-luxury-ivory'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`mr-2 py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'products' 
                  ? 'border-luxury-gold text-luxury-gold' 
                  : 'border-transparent text-gray-500 hover:text-luxury-charcoal dark:hover:text-luxury-ivory'
              }`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              className={`mr-2 py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'orders' 
                  ? 'border-luxury-gold text-luxury-gold' 
                  : 'border-transparent text-gray-500 hover:text-luxury-charcoal dark:hover:text-luxury-ivory'
              }`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </button>
            <button
              className={`mr-2 py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'customers' 
                  ? 'border-luxury-gold text-luxury-gold' 
                  : 'border-transparent text-gray-500 hover:text-luxury-charcoal dark:hover:text-luxury-ivory'
              }`}
              onClick={() => setActiveTab('customers')}
            >
              Customers
            </button>
          </div>
        </div>
        
        {/* Dashboard content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'dashboard' && (
            <div>
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-luxury-charcoal/40 p-6 rounded-lg shadow-soft">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Revenue</h3>
                  <p className="text-2xl font-medium text-luxury-gold">$528,500</p>
                  <p className="text-sm text-green-600 mt-2">+12.5% from last month</p>
                </div>
                <div className="bg-white dark:bg-luxury-charcoal/40 p-6 rounded-lg shadow-soft">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Orders</h3>
                  <p className="text-2xl font-medium text-luxury-charcoal dark:text-luxury-ivory">1,248</p>
                  <p className="text-sm text-green-600 mt-2">+8.2% from last month</p>
                </div>
                <div className="bg-white dark:bg-luxury-charcoal/40 p-6 rounded-lg shadow-soft">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Customers</h3>
                  <p className="text-2xl font-medium text-luxury-charcoal dark:text-luxury-ivory">842</p>
                  <p className="text-sm text-green-600 mt-2">+5.1% from last month</p>
                </div>
                <div className="bg-white dark:bg-luxury-charcoal/40 p-6 rounded-lg shadow-soft">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Avg. Order Value</h3>
                  <p className="text-2xl font-medium text-luxury-charcoal dark:text-luxury-ivory">$423</p>
                  <p className="text-sm text-green-600 mt-2">+3.7% from last month</p>
                </div>
              </div>
              
              {/* Inventory Status */}
              <div className="bg-white dark:bg-luxury-charcoal/40 p-6 rounded-lg shadow-soft mb-8">
                <h2 className="font-heading text-lg font-medium mb-4 dark:text-luxury-ivory">Inventory Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">In Stock</h3>
                    <p className="text-xl font-medium text-luxury-charcoal dark:text-luxury-ivory">{inventoryStatus.inStock} items</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Low Stock</h3>
                    <p className="text-xl font-medium text-amber-600">{inventoryStatus.lowStock} items</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Out of Stock</h3>
                    <p className="text-xl font-medium text-red-600">{inventoryStatus.outOfStock} items</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Coming Soon</h3>
                    <p className="text-xl font-medium text-luxury-plum">{inventoryStatus.comingSoon} items</p>
                  </div>
                </div>
              </div>
              
              {/* Top Categories */}
              <div className="bg-white dark:bg-luxury-charcoal/40 p-6 rounded-lg shadow-soft">
                <h2 className="font-heading text-lg font-medium mb-4 dark:text-luxury-ivory">Top Selling Categories</h2>
                <div className="space-y-4">
                  {topCategories.map(category => (
                    <div key={category.category} className="flex items-center">
                      <span className="w-32 text-gray-600 dark:text-gray-300">{category.category}</span>
                      <div className="flex-grow mx-4 h-2 bg-gray-200 dark:bg-gray-700 rounded">
                        <div 
                          className="h-full bg-luxury-gold rounded" 
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">{category.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-xl font-medium dark:text-luxury-ivory">Product Management</h2>
                <Button size="sm">Add New Product</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-luxury-charcoal/60">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-luxury-charcoal/40 divide-y divide-gray-200 dark:divide-gray-700">
                    {products.slice(0, 5).map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded">
                              <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory">
                                {product.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {product.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                            {product.category}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: product.currency,
                            }).format(product.price)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            product.status === 'in-stock' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : product.status === 'low-stock'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : product.status === 'out-of-stock'
                                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                  : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          }`}>
                            {product.status.replace('-', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-luxury-gold hover:text-luxury-gold/80 font-medium mr-3">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-800 font-medium">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">UI mockup only - no actual editing functionality is implemented</p>
              </div>
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-xl font-medium dark:text-luxury-ivory">Recent Orders</h2>
                <Button size="sm">Export Orders</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-luxury-charcoal/60">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-luxury-charcoal/40 divide-y divide-gray-200 dark:divide-gray-700">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-luxury-charcoal dark:text-luxury-ivory">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: order.currency,
                          }).format(order.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === 'completed' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : order.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'customers' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-xl font-medium dark:text-luxury-ivory">Customer Management</h2>
                <Button size="sm">Export Customers</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-luxury-charcoal/60">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Orders
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Total Spent
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-luxury-charcoal/40 divide-y divide-gray-200 dark:divide-gray-700">
                    {customers.map((customer) => (
                      <tr key={customer.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory">
                                {customer.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {customer.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {new Date(customer.joinDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {customer.orders}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: customer.currency,
                          }).format(customer.totalSpent)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-luxury-gold hover:text-luxury-gold/80 font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;