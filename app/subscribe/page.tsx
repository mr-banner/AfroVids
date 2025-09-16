import { Footer } from "@/components/footer-section"
import { Header } from "@/components/header"
import { PricingSection } from "@/components/pricing-section"

const page = () => {
  return (
    <div className="bg-background">
        <Header/>
        <div className="flex-1 -mt-11">
            <PricingSection/>
        </div>
        <Footer/>
    </div>
  )
}

export default page