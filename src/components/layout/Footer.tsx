import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-luxury-navy border-t border-gray-100 dark:border-gray-800 pt-12 pb-8 mt-16">
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <Link to="/" className="text-2xl font-heading font-medium tracking-wider text-luxury-charcoal dark:text-luxury-ivory">
              Dell.Luxe
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Exquisite luxury fashion for those who appreciate timeless elegance, superior craftsmanship, and uncompromising quality.
            </p>
          </div>
          
          {/* Shop column */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-4 text-luxury-charcoal dark:text-luxury-ivory">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=dresses" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/products?category=suits" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Suits
                </Link>
              </li>
              <li>
                <Link to="/products?category=jewelry" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?featured=true" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Featured
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company column */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-4 text-luxury-charcoal dark:text-luxury-ivory">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-4 text-luxury-charcoal dark:text-luxury-ivory">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                1234 Luxury Avenue<br />
                New York, NY 10001
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <a href="tel:+12125551234" className="hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  +1 (212) 555-1234
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="mailto:contact@dell-luxe.com" className="hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
                  contact@dell-luxe.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Social media and copyright */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors" aria-label="Pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Dell.Luxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 