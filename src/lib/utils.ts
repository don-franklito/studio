/**
 * @file utils.ts
 * @description Archivo de utilidades que exporta una función para combinar clases de Tailwind CSS.
 * Utiliza `clsx` y `tailwind-merge` para resolver conflictos de clases de forma inteligente.
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina múltiples valores de clase en una sola cadena, resolviendo conflictos de Tailwind CSS.
 * @param {...ClassValue[]} inputs - Una lista de valores de clase (cadenas, objetos, arrays).
 * @returns {string} Una cadena de clases CSS optimizada.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
