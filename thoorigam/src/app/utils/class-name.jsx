import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind and conditional class names.
 * @param {...import('clsx').ClassValue} inputs - Class names to be merged.
 * @returns {string} - The merged class name string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}