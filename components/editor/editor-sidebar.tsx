import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Video, Music, Type, Shapes, Sparkles, Search, Upload } from "lucide-react"

const mediaItems = [
  { type: "video", name: "intro-clip.mp4", duration: "0:15", thumbnail: "/media-video-1.png" },
  { type: "video", name: "main-content.mp4", duration: "2:30", thumbnail: "/media-video-2.png" },
  { type: "image", name: "logo.png", thumbnail: "/media-image-1.png" },
  { type: "image", name: "background.jpg", thumbnail: "/media-image-2.png" },
  { type: "audio", name: "background-music.mp3", duration: "3:45" },
  { type: "audio", name: "voice-over.wav", duration: "1:20" },
]

const templates = [
  { name: "Social Media Post", thumbnail: "/template-social.png" },
  { name: "YouTube Intro", thumbnail: "/template-youtube.png" },
  { name: "Product Demo", thumbnail: "/template-product.png" },
  { name: "Slideshow", thumbnail: "/template-slideshow-mini.png" },
]

export function EditorSidebar() {
  return (
    <div className="h-full bg-card border-r border-border">
      <Tabs defaultValue="media" className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-4 m-2">
          <TabsTrigger value="media" className="text-xs">
            <Video className="w-3 h-3 mr-1" />
            Media
          </TabsTrigger>
          <TabsTrigger value="text" className="text-xs">
            <Type className="w-3 h-3 mr-1" />
            Text
          </TabsTrigger>
          <TabsTrigger value="elements" className="text-xs">
            <Shapes className="w-3 h-3 mr-1" />
            Elements
          </TabsTrigger>
          <TabsTrigger value="ai" className="text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            AI
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-hidden">
          <TabsContent value="media" className="h-full m-0 p-4 space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search media..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Upload className="w-4 h-4 mr-2" />
                Upload Media
              </Button>
            </div>

            <ScrollArea className="h-[calc(100%-80px)]">
              <div className="space-y-2">
                {mediaItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  >
                    <div className="w-12 h-12 bg-muted rounded flex items-center justify-center overflow-hidden">
                      {item.type === "video" || item.type === "image" ? (
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Music className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      {item.duration && <p className="text-xs text-muted-foreground">{item.duration}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="text" className="h-full m-0 p-4 space-y-4">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Type className="w-4 h-4 mr-2" />
                Add Heading
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Type className="w-4 h-4 mr-2" />
                Add Subtitle
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Type className="w-4 h-4 mr-2" />
                Add Body Text
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="elements" className="h-full m-0 p-4 space-y-4">
            <ScrollArea className="h-full">
              <div className="grid grid-cols-2 gap-2">
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                  >
                    <img
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="ai" className="h-full m-0 p-4 space-y-4">
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Script Generator
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Voice Over
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Sparkles className="w-4 h-4 mr-2" />
                Auto Subtitles
              </Button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
