/**
 * @file about-me-section.tsx
 * @description Componente que muestra la sección "Sobre mí" del portafolio.
 * Incluye una imagen de perfil, un resumen y enlaces a redes sociales.
 */
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { profileData, socialLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

/**
 * Componente AboutMeSection que renderiza la información personal y profesional.
 * @returns {JSX.Element} La sección "Sobre mí".
 */
export function AboutMeSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <section id="about-me" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                width="400"
                height="400"
                alt={profileData.name}
                className="rounded-full object-cover shadow-lg"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
                Sobre mí
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {profileData.summary}
              </p>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
