import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Clock } from "lucide-react"

const templateCategories = [
  { name: "All Templates", count: 1000, active: true },
  { name: "Social Media", count: 250 },
  { name: "Marketing", count: 180 },
  { name: "Business", count: 120 },
  { name: "Education", count: 90 },
  { name: "Entertainment", count: 160 },
]

const templates = [
  {
    id: 1,
    title: "Online Video Editor",
    category: "Business",
    duration: "0:30",
    rating: 4.8,
    thumbnail: "/template-online-editor.png",
    isPro: false,
  },
  {
    id: 2,
    title: "AI Video Generator",
    category: "Marketing",
    duration: "1:00",
    rating: 4.9,
    thumbnail: "/template-ai-generator.png",
    isPro: true,
  },
  {
    id: 3,
    title: "AI Text to Video",
    category: "Social Media",
    duration: "0:15",
    rating: 4.7,
    thumbnail: "/template-text-to-video.png",
    isPro: true,
  },
  {
    id: 4,
    title: "Intro Maker",
    category: "Entertainment",
    duration: "0:10",
    rating: 4.6,
    thumbnail: "/template-intro-maker.png",
    isPro: false,
  },
  {
    id: 5,
    title: "Slideshow Maker",
    category: "Business",
    duration: "2:00",
    rating: 4.5,
    thumbnail: "/template-slideshow.png",
    isPro: false,
  },
  {
    id: 6,
    title: "YouTube Video Editor",
    category: "Social Media",
    duration: "5:00",
    rating: 4.8,
    thumbnail: "/template-youtube-editor.png",
    isPro: true,
  },
  {
    id: 7,
    title: "Instagram Reels Maker",
    category: "Social Media",
    duration: "0:30",
    rating: 4.9,
    thumbnail: "/template-instagram-reels.png",
    isPro: true,
  },
  {
    id: 8,
    title: "Video Maker",
    category: "Marketing",
    duration: "1:30",
    rating: 4.7,
    thumbnail: "/template-video-maker.png",
    isPro: false,
  },
  {
    id: 9,
    title: "Invitation Maker",
    category: "Entertainment",
    duration: "0:45",
    rating: 4.4,
    thumbnail: "/template-invitation.png",
    isPro: false,
  },
  {
    id: 10,
    title: "TikTok Video Editor",
    category: "Social Media",
    duration: "0:15",
    rating: 4.8,
    thumbnail: "/template-tiktok-editor.png",
    isPro: true,
  },
  {
    id: 11,
    title: "Image to Videos",
    category: "Marketing",
    duration: "1:00",
    rating: 4.6,
    thumbnail: "/template-image-to-video.png",
    isPro: false,
  },
  {
    id: 12,
    title: "Promo Video Maker",
    category: "Business",
    duration: "1:15",
    rating: 4.7,
    thumbnail: "/template-promo-video.png",
    isPro: true,
  },
]

export function TemplatesGallery() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">VideoAI Video Creator</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create videos for YouTube shorts, Instagram reels, and TikTok that generate views.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {templateCategories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <img
                    src={template.thumbnail || "/placeholder.svg"}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="rounded-full">
                        <Play className="w-4 h-4 mr-2 fill-current" />
                        Preview
                      </Button>
                    </div>
                  </div>

                  {/* Pro Badge */}
                  {template.isPro && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground text-xs">PRO</Badge>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0">
                      <Clock className="w-3 h-3 mr-1" />
                      {template.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm line-clamp-1">{template.title}</h3>
                    <p className="text-xs text-muted-foreground">{template.category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{template.rating}</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                      Use Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Templates
          </Button>
        </div>
      </div>
    </section>
  )
}
