import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhoItsForSection } from "@/components/WhoItsForSection";
import { ValuesSection } from "@/components/ValuesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <WhoItsForSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
