import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Create videos <span className="text-primary">without limits</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              VideoAI turns your ideas into videos, ready-to-share, no editing skills needed. Ads, explainers, stories -
              any idea you can imagine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="/auth/register">
                <Sparkles className="w-4 h-4 mr-2" />
                Try VideoAI AI
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">No credit card required</p>
        </div>

        <div className="mt-16 relative">
          <div className="bg-card rounded-2xl border shadow-2xl overflow-hidden">
            <img src="/video-editing-interface.png" alt="VideoAI Editor Interface" className="w-full h-auto" />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            AI-Powered
          </div>
          <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Export Ready
          </div>
        </div>
      </div>
    </section>
  )
}
