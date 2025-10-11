/**
 * @file contact-section.tsx
 * @description Componente que muestra la sección de contacto.
 * Incluye información de teléfono, email y enlaces a redes sociales.
 */
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { contactData, socialLinks } from '@/lib/data';
import { Phone, Mail, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

/**
 * Componente ContactSection que renderiza la información de contacto.
 * @returns {JSX.Element} La sección de contacto.
 */
export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Contacto
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Interesado en colaborar? Ponte en contacto conmigo.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <CardTitle>Teléfono</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <a href={`tel:${contactData.phone}`} className="text-lg text-accent hover:underline">
                {contactData.phone}
              </a>
            </CardContent>
          </Card>
          <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-primary" />
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <a href={`mailto:${contactData.email}`} className="text-lg text-accent hover:underline">
                {contactData.email}
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 flex justify-center gap-6">
            <Button variant="outline" size="icon" asChild>
                <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-7 w-7" />
                </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-7 w-7" />
                </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-7 w-7" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
