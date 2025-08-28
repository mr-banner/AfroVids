import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto max-w-6xl z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="mb-8">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
              AfroVids
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              AfroVids –{" "}
              <span className="text-primary">Voices of the Diaspora</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              The first AI video platform created for the African & Caribbean
              diaspora. Create authentic videos in minutes with real characters
              and real voices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button
              size="lg"
              className="text-base px-6 sm:px-8 w-full sm:w-auto bg-green-600 hover:bg-green-700"
              asChild
            >
              <a href="/auth/register">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Creating
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 sm:px-8 bg-transparent border-white text-white hover:bg-white hover:text-black w-full sm:w-auto"
            >
              <Play className="w-4 h-4 mr-2" />
              See How It Works
            </Button>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 relative px-4 sm:px-0">
          <div className="bg-card rounded-xl sm:rounded-2xl border shadow-2xl overflow-hidden">
            <img
              src="/video-editing-interface.png"
              alt="VideoAI Editor Interface"
              className="w-full h-auto"
            />
          </div>

          <div className="hidden sm:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
            AI-Powered
          </div>
          <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-accent text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
            Export Ready
          </div>
        </div>
      </div>
    </section>
  );
}
