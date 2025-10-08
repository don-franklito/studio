import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Portafolio de Proyectos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, optimización y calidad.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
                {projectImage && (
                  <Image
                    src={projectImage.imageUrl}
                    width="600"
                    height="400"
                    alt={project.title}
                    className="aspect-video w-full object-cover"
                    data-ai-hint={projectImage.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={project.link}>
                      Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
