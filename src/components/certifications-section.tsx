/**
 * @file certifications-section.tsx
 * @description Componente que muestra la sección de certificaciones.
 * Presenta cada certificación en una tarjeta con enlaces para verificarla y descargar el PDF.
 */
import Link from 'next/link';
import { certificationsData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

/**
 * Componente CertificationsSection que renderiza la lista de certificaciones profesionales.
 * @returns {JSX.Element} La sección de certificaciones.
 */
export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Certificaciones
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mis credenciales profesionales que validan mi conocimiento y experiencia.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <Card key={index} className="flex flex-col shadow-md transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <cert.icon className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription className="pt-1">{cert.issuer} {cert.date !== 'N/A' && `- ${cert.date}`}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-end gap-2">
                <Button variant="outline" asChild>
                  <Link href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    Ver Credencial <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={cert.pdfLink} download>
                    Descargar PDF <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
