import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wand2, Users, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "AI Video Generator",
    description: "Transform text prompts into professional videos with our advanced AI technology.",
    image: "/placeholder-vzk5h.png",
  },
  {
    icon: Users,
    title: "Social Media Videos",
    description: "Create engaging content for YouTube, Instagram, TikTok and more with optimized formats.",
    image: "/placeholder-o79tg.png",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate and export videos in minutes, not hours. Perfect for tight deadlines.",
    image: "/fast-video-rendering.png",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Create videos in 50+ languages with AI voiceovers and automatic subtitles.",
    image: "/multilingual-video-interface.png",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Creativity at your command</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that make video creation effortless and professional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <Button variant="outline" size="sm">
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
