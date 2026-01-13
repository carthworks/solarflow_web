import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhoItsForSection } from "@/components/sections/WhoItsForSection";
import { ROISection } from "@/components/sections/ROISection";
import { TrustSection } from "@/components/sections/TrustSection";
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { MilestonesDetailSection } from "@/components/sections/MilestonesDetailSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* How It Works */}
        <section id="how-it-works">
          <HowItWorksSection />
          <MilestonesDetailSection />
        </section>

        {/* Features */}
        <section id="features">
          <FeaturesSection />
        </section>

        {/* Who It's For */}
        <WhoItsForSection />

        {/* ROI & Benefits */}
        <ROISection />

        {/* Trust & Credibility */}
        <TrustSection />

        {/* Early Access Form */}
        <section id="early-access">
          <EarlyAccessForm />
        </section>

        {/* Final CTA */}
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}

