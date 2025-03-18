import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // If cart is empty, redirect to products
  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="pt-28 pb-16 container-luxe">
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-3xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Add some products to your cart to proceed to checkout.
          </p>
          <Button onClick={() => navigate('/products')}>
            Browse Products
          </Button>
        </motion.div>
      </div>
    );
  }
  
  // Format price based on currency
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(price);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      clearCart();
      setOrderComplete(true);
      setIsSubmitting(false);
    }, 2000);
  };
  
  if (orderComplete) {
    return (
      <div className="pt-28 pb-16 container-luxe">
        <motion.div 
          className="max-w-2xl mx-auto text-center py-12 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl font-medium text-luxury-charcoal dark:text-luxury-ivory mb-4">
            Order Complete
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Thank you for your purchase. Your order has been placed and will be processed soon.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Order number: <span className="font-medium">{Math.floor(Math.random() * 1000000)}</span>
          </p>
          <Button onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="pt-28 pb-16">
      <div className="container-luxe">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-medium text-luxury-charcoal dark:text-luxury-ivory text-center mb-8"
        >
          Checkout
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-2 lg:col-span-1"
          >
            <div className="bg-white dark:bg-luxury-charcoal/40 rounded-lg shadow-soft p-6">
              <h2 className="font-heading text-xl font-medium mb-4 dark:text-luxury-ivory">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-start border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm text-luxury-gold mt-1">
                        {formatPrice(item.price * item.quantity, item.currency)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="text-luxury-charcoal dark:text-luxury-ivory">
                    {formatPrice(cartTotal, cartItems[0]?.currency || 'USD')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="text-luxury-charcoal dark:text-luxury-ivory">
                    {formatPrice(10, cartItems[0]?.currency || 'USD')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="text-luxury-charcoal dark:text-luxury-ivory">
                    {formatPrice(cartTotal * 0.1, cartItems[0]?.currency || 'USD')}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-luxury-charcoal dark:text-luxury-ivory">Total</span>
                    <span className="text-luxury-gold">
                      {formatPrice(cartTotal + 10 + (cartTotal * 0.1), cartItems[0]?.currency || 'USD')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1 lg:col-span-2"
          >
            <div className="bg-white dark:bg-luxury-charcoal/40 rounded-lg shadow-soft p-6">
              <form onSubmit={handleSubmit}>
                <h2 className="font-heading text-xl font-medium mb-6 dark:text-luxury-ivory">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                  </select>
                </div>
                
                <h2 className="font-heading text-xl font-medium mb-6 dark:text-luxury-ivory">Payment Information</h2>
                
                <div className="mb-6">
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="XXX"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold bg-transparent text-luxury-charcoal dark:text-luxury-ivory"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-6"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Purchase'}
                </Button>
                
                <p className="text-sm text-center text-gray-500 mt-4">
                  This is a demo checkout. No actual payment will be processed.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;