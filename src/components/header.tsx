/**
 * @file header.tsx
 * @description Componente de la cabecera de la aplicación.
 * Incluye el logo, la navegación principal, el conmutador de tema (claro/oscuro) y el menú para móviles.
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Code2 } from 'lucide-react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';


import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';

/**
 * Componente Header que renderiza la barra de navegación superior.
 * Es responsivo y se adapta a dispositivos móviles con un menú desplegable.
 * @returns {JSX.Element} La cabecera de la aplicación.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">JFLL</span>
        </Link>
        {/* Navegación para escritorio */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          {/* Menú para móviles */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <VisuallyHidden.Root>
                <SheetTitle>Menú de navegación</SheetTitle>
              </VisuallyHidden.Root>
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">JFLL</span>
              </Link>
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
