import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../components/cart/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container-luxe py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-luxury-charcoal dark:text-luxury-ivory">
            Your Cart is Empty
          </h1>
          <p className="mb-8 text-luxury-charcoal/80 dark:text-luxury-ivory/80 max-w-2xl mx-auto">
            Looks like you haven't added any items to your cart yet. Explore our collections to find something special.
          </p>
          <Link 
            to="/products" 
            className="btn-primary inline-block px-8 py-3"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container-luxe py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-luxury-charcoal dark:text-luxury-ivory">
          Your Shopping Cart
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-[#010400] shadow-sm rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900/30">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#010400] divide-y divide-gray-200 dark:divide-gray-800">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <img 
                              src={item.images[0]} 
                              alt={item.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Decrease quantity"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="mx-2 w-8 text-center text-luxury-charcoal dark:text-luxury-ivory">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Increase quantity"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-luxury-charcoal dark:text-luxury-ivory">
                        {formatPrice(item.price * item.quantity, item.currency)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                          aria-label="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-[#010400] shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-heading font-bold mb-4 text-luxury-charcoal dark:text-luxury-ivory">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Items ({getCartCount()})</span>
                  <span className="text-luxury-charcoal dark:text-luxury-ivory font-medium">
                    {formatPrice(getCartTotal(), 'USD')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="text-luxury-charcoal dark:text-luxury-ivory font-medium">
                    {formatPrice(0, 'USD')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax</span>
                  <span className="text-luxury-charcoal dark:text-luxury-ivory font-medium">
                    {formatPrice(getCartTotal() * 0.1, 'USD')}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-luxury-charcoal dark:text-luxury-ivory font-bold">Total</span>
                    <span className="text-luxury-charcoal dark:text-luxury-ivory font-bold">
                      {formatPrice(getCartTotal() * 1.1, 'USD')}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => navigate('/checkout')}
                className="btn-primary w-full py-3 mb-4"
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/products" 
                className="block text-center text-luxury-charcoal dark:text-luxury-ivory hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartPage; 