import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className={cn(
        'relative w-14 h-7 rounded-full p-1 transition-colors duration-300',
        theme === 'dark' ? 'bg-luxury-gold/30' : 'bg-luxury-charcoal/10',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className={cn(
          'w-5 h-5 rounded-full flex items-center justify-center',
          theme === 'dark' ? 'bg-luxury-gold' : 'bg-luxury-charcoal'
        )}
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        animate={{ x: theme === 'dark' ? 28 : 0 }}
      >
        {theme === 'dark' ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.752 15.002C20.5633 15.4975 19.2879 15.747 18 15.75C13.17 15.75 9.25 11.83 9.25 7C9.25 5.742 9.49 4.536 9.957 3.418C9.97341 3.38424 9.98063 3.34684 9.97794 3.30951C9.97525 3.27219 9.96273 3.23618 9.94153 3.20529C9.92033 3.1744 9.89114 3.14969 9.85712 3.13347C9.8231 3.11724 9.784 3.11004 9.745 3.112C5.167 3.854 1.75 7.829 1.75 12.75C1.75 18.277 6.223 22.75 11.75 22.75C16.672 22.75 20.646 19.333 21.388 14.755C21.3918 14.7157 21.3855 14.6759 21.3696 14.6398C21.3538 14.6037 21.3289 14.5729 21.2978 14.5504C21.2668 14.5278 21.2304 14.5142 21.1926 14.5112C21.1548 14.5082 21.1168 14.5158 21.083 14.533L21.752 15.002Z"
              fill="#0A1428"
              stroke="#0A1428"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 17.75C15.1756 17.75 17.75 15.1756 17.75 12C17.75 8.82436 15.1756 6.25 12 6.25C8.82436 6.25 6.25 8.82436 6.25 12C6.25 15.1756 8.82436 17.75 12 17.75Z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2.75V4.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19.75V21.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.07 4.93L18.01 5.99"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99 18.01L4.93 19.07"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.25 12H19.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.25 12H2.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.01 18.01L19.07 19.07"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.93 4.93L5.99 5.99"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}; 