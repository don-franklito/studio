import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { profileData, socialLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <section id="profile" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                {profileData.name}
              </h1>
              <h2 className="text-xl font-medium text-accent md:text-2xl">
                {profileData.title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {profileData.summary}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#portfolio">Ver Portafolio</a>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}
