import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TemplatesGallery } from "@/components/templates-gallery"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TemplatesGallery />
        <PricingSection/>
      </main>
      <Footer/>
    </div>
  )
}
