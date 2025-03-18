import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  to,
  fullWidth = false,
  className,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  // Define base classes based on variant and size
  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all focus:outline-none',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'text-luxury-charcoal hover:text-luxury-gold dark:text-luxury-ivory': variant === 'ghost',
      'px-3 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      'w-full': fullWidth,
      'opacity-60 cursor-not-allowed': disabled,
    },
    className
  );

  // Animation properties
  const buttonAnimation = {
    whileHover: { scale: disabled ? 1 : 1.03 },
    whileTap: { scale: disabled ? 1 : 0.97 },
    transition: { duration: 0.1 }
  };

  // Return as Link if asLink is true
  if (asLink && to) {
    return (
      <motion.div {...buttonAnimation}>
        <Link
          to={to}
          className={baseClasses}
          onClick={disabled ? undefined : onClick}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  // Return as button otherwise
  return (
    <motion.button
      {...buttonAnimation}
      className={baseClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 