import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, ZoomOut, Maximize2, Grid3X3 } from "lucide-react"

export function EditorCanvas() {
  return (
    <div className="h-full bg-muted/30 flex flex-col">
      {/* Canvas Toolbar */}
      <div className="h-12 bg-card border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            16:9
          </Badge>
          <Badge variant="outline" className="text-xs">
            1920x1080
          </Badge>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium px-2">100%</span>
          <Button variant="ghost" size="sm">
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Maximize2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Grid3X3 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div
          className="relative bg-black rounded-lg shadow-2xl"
          style={{ aspectRatio: "16/9", width: "100%", maxWidth: "800px" }}
        >
          {/* Video Preview */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-semibold">Your Video Preview</h3>
                <p className="text-white/70 text-sm">Add media to start creating</p>
              </div>
            </div>
          </div>

          {/* Overlay Elements */}
          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium">Sample Text</div>

          <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm">
            Logo
          </div>
        </div>
      </div>
    </div>
  )
}
