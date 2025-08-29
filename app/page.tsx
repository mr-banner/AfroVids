import { Header } from "@/components/header"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { WhoItsForSection } from "@/components/who-its-for-section"
import { MissionStatementSection } from "@/components/mission-statement"
import { FinalCtaSection } from "@/components/final-cta-section"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection/>
        <FeaturesSection />
        <HowItWorksSection/>
        <WhoItsForSection/>
        <PricingSection/>
        <MissionStatementSection/>
        <FinalCtaSection/>
      </main>
      <Footer/>
    </div>
  )
}
