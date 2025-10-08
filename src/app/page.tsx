import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { CertificationsSection } from '@/components/certifications-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
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
