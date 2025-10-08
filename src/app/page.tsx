import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
