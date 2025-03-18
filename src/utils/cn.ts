import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that combines clsx and tailwind-merge
 * for efficient and type-safe className handling.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 