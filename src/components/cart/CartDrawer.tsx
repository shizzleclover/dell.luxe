import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const CartDrawer: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal, 
    isCartOpen, 
    closeCart 
  } = useCart();

  // Format price based on currency
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={closeCart}
          />
          
          {/* Cart drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-luxury-navy shadow-xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-medium text-luxury-charcoal dark:text-luxury-ivory">
                Shopping Cart
              </h2>
              <button 
                onClick={closeCart}
                className="p-2 text-gray-500 hover:text-luxury-charcoal dark:text-gray-400 dark:hover:text-luxury-ivory"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Your cart is empty</p>
                  <Button size="sm" onClick={closeCart}>Continue Shopping</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex border-b border-gray-100 dark:border-gray-800 pb-4">
                      <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory">
                            {item.name}
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {formatPrice(item.price, item.currency)}
                        </p>
                        <div className="flex items-center mt-2">
                          <button 
                            className="w-6 h-6 text-xs rounded border border-gray-300 dark:border-gray-700 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            className="w-6 h-6 text-xs rounded border border-gray-300 dark:border-gray-700 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                          <span className="ml-auto text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory">
                            {formatPrice(item.price * item.quantity, item.currency)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-luxury-navy">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium text-luxury-charcoal dark:text-luxury-ivory">
                    {formatPrice(cartTotal, cartItems[0]?.currency || 'USD')}
                  </span>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Shipping & taxes</span>
                  <span className="text-gray-500 dark:text-gray-400">Calculated at checkout</span>
                </div>
                <Button 
                  fullWidth 
                  className="mb-2"
                  asLink
                  to="/checkout"
                  onClick={closeCart}
                >
                  Checkout
                </Button>
                <button 
                  className="text-sm text-gray-500 hover:text-luxury-charcoal dark:text-gray-400 dark:hover:text-luxury-ivory text-center w-full mt-2"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer; 