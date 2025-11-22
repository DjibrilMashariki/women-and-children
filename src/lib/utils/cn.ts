import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes using clsx and tailwind-merge
 * Prevents conflicting Tailwind classes from appearing in the final output
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
