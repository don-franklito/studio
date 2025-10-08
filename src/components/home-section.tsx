import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HomeSection() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-blue-400 sm:text-6xl xl:text-7xl/none">
              JUAN F. LIZÁRRAGA LUNA
            </h1>
            <h2 className="text-lg font-medium text-gray-300 md:text-xl">
              Ingeniero Full-Stack, Especialista en Calidad de Software y Liderazgo (SFC/SSYB)
            </h2>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild size="lg">
              <a href="/cv.pdf" download>Descargar CV Completo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
              <Link href="#portfolio">Ver Proyectos Destacados</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
