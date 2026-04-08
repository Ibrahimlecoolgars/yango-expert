// src/app/page.tsx
import HeroSection from '@/components/landing/HeroSection';
import TickerSection from '@/components/landing/TickerSection';
import ProblemSolution from '@/components/landing/ProblemSolution';
import FormulaSection from '@/components/landing/FormulaSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CtaSection from '@/components/landing/CtaSection';
import FooterSection from '@/components/landing/FooterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TickerSection />
      <ProblemSolution />
      <FormulaSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
