/**
 * @file theme-provider.tsx
 * @description Proveedor de temas (claro/oscuro) para la aplicación.
 * Utiliza `next-themes` para gestionar el cambio de tema.
 */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

/**
 * Componente ThemeProvider que envuelve la aplicación para proporcionar la funcionalidad de cambio de tema.
 * @param {ThemeProviderProps} props - Propiedades del proveedor de temas.
 * @returns {JSX.Element} El proveedor de Next.js Themes.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
