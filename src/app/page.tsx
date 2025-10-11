/**
 * @file page.tsx
 * @description
 * Este archivo define el componente principal de la página de inicio, `Home`.
 * Next.js, a través de su sistema de enrutamiento de archivos (App Router),
 * automáticamente renderiza este componente cuando un usuario visita la ruta raíz ("/") de la aplicación.
 * No necesitas "llamar" a esta función manualmente; el framework se encarga de ello.
 *
 * El componente `Home` funciona como un contenedor que ensambla todas las demás secciones
 * del portafolio en el orden en que deben aparecer en la página.
 */
import { Header } from '@/components/header';
import { HomeSection } from '@/components/home-section';
import { AboutMeSection } from '@/components/about-me-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { CertificationsSection } from '@/components/certifications-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

/**
 * Componente Home que renderiza la página principal del portafolio.
 * @returns {JSX.Element} La página de inicio completa con todas sus secciones.
 */
export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutMeSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
