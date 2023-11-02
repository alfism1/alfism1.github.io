import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Generates a class name based on the provided input values.
 *
 * @param {ClassValue[]} inputs - An array of input values to generate the class name.
 * @return {string} The generated class name.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
