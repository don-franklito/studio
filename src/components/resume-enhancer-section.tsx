'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { enhanceResumeWithAI } from '@/ai/flows/enhance-resume-with-ai';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  resume: z.string().min(100, 'El CV debe tener al menos 100 caracteres.'),
  jobDescription: z.string().min(100, 'La descripción del trabajo debe tener al menos 100 caracteres.'),
});

export function ResumeEnhancerSection() {
  const [enhancedResume, setEnhancedResume] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resume: '',
      jobDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setEnhancedResume(null);
    try {
      const result = await enhanceResumeWithAI(values);
      setEnhancedResume(result.enhancedResume);
      toast({
        title: '¡CV Mejorado!',
        description: 'Tu CV ha sido optimizado con éxito.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo mejorar el CV. Por favor, inténtalo de nuevo.',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Optimizador de CV con IA
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Pega tu CV y la descripción de un trabajo para recibir sugerencias de mejora personalizadas por nuestra IA.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Tu CV Actual</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Pega aquí el contenido de tu CV..."
                              className="min-h-[300px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Descripción del Trabajo</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Pega aquí la descripción del puesto al que aplicas..."
                              className="min-h-[300px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? 'Analizando...' : 'Mejorar mi CV'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          {enhancedResume && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Sparkles />
                  Tu CV Mejorado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none rounded-md border bg-muted p-4">
                  <pre className="whitespace-pre-wrap font-body text-sm text-foreground">
                    {enhancedResume}
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
