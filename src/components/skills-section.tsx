/**
 * @file skills-section.tsx
 * @description Componente que muestra la sección de competencias técnicas.
 * Organiza las habilidades por categorías y muestra cada una con un icono.
 */
import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Componente SkillsSection que renderiza una lista de habilidades técnicas agrupadas por categoría.
 * @returns {JSX.Element} La sección de competencias.
 */
export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Competencias Técnicas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un resumen de las tecnologías y metodologías que domino, organizadas por área de especialización.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-2">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="shadow-md transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-accent">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="py-1 px-3 text-sm">
                    <skill.icon className="mr-2 h-4 w-4" />
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
