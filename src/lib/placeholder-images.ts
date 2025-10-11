/**
 * @file placeholder-images.ts
 * @description Exporta los datos de las imágenes de marcador de posición desde el archivo JSON.
 * Esto permite importar los datos de las imágenes de forma tipada en toda la aplicación.
 */
import data from './placeholder-images.json';

/**
 * @typedef {object} ImagePlaceholder
 * @description Define la estructura de un objeto de imagen de marcador de posición.
 * @property {string} id - Identificador único para la imagen.
 * @property {string} description - Descripción de la imagen.
 * @property {string} imageUrl - URL o ruta de la imagen.
 * @property {string} imageHint - Pista para la IA sobre el contenido de la imagen.
 */
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

/**
 * @description Array que contiene todos los objetos de imágenes de marcador de posición.
 */
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
