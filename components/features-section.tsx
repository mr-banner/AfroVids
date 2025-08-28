import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MessageCircle, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Authentic Representation",
    description: "Afro-Caribbean characters you won't find elsewhere. Real faces that represent our community.",
    image: "/placeholder-vzk5h.png",
  },
  {
    icon: MessageCircle,
    title: "Cultural Voices",
    description: "English, Patois, Creole & more. Authentic voices that speak your language and culture.",
    image: "/placeholder-o79tg.png",
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    description: "From script to video in minutes. No complex editing skills required.",
    image: "/fast-video-rendering.png",
  },
  {
    icon: Globe,
    title: "Built for Our Stories",
    description: "Centered on diaspora voices. Finally, a platform that understands our narrative.",
    image: "/multilingual-video-interface.png",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">The World's First Diaspora AI Video Platform</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Finally, a video platform that represents us. Create authentic content with characters, voices, and stories
            that reflect the African & Caribbean diaspora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-card">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
