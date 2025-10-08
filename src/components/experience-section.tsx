import { experienceData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Experiencia Clave y Logros
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un recorrido por mi trayectoria profesional, destacando roles, responsabilidades y logros cuantificables.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border hidden sm:block"
            aria-hidden="true"
          ></div>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex w-full items-center sm:w-auto sm:justify-center ${
                index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
              }`}
            >
              <div
                className={`w-full sm:w-1/2 ${
                  index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
                }`}
              >
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{item.role}</CardTitle>
                        <p className="text-sm font-medium text-accent">{item.company}</p>
                      </div>
                    </div>
                    <CardDescription className="pt-4">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
