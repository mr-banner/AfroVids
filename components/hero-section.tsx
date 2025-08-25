import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Create videos <span className="text-primary">without limits</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              VideoAI turns your ideas into videos, ready-to-share, no editing skills needed. Ads, explainers, stories -
              any idea you can imagine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="text-base px-6 sm:px-8 w-full sm:w-auto" asChild>
              <a href="/auth/register">
                <Sparkles className="w-4 h-4 mr-2" />
                Try AfroVids AI
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-6 sm:px-8 bg-transparent w-full sm:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">No credit card required</p>
        </div>

        <div className="mt-12 sm:mt-16 relative px-4 sm:px-0">
          <div className="bg-card rounded-xl sm:rounded-2xl border shadow-2xl overflow-hidden">
            <img src="/video-editing-interface.png" alt="VideoAI Editor Interface" className="w-full h-auto" />
          </div>

          {/* Floating elements - hidden on very small screens */}
          <div className="hidden sm:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
            AI-Powered
          </div>
          <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-accent text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
            Export Ready
          </div>
        </div>
      </div>
    </section>
  )
}
