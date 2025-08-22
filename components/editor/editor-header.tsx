import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, RotateCcw, RotateCw, Download, Share2, Save, Settings } from "lucide-react"

export function EditorHeader() {
  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Play className="w-4 h-4 text-primary-foreground fill-current" />
          </div>
          <span className="font-bold">VideoAI</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Untitled Project</span>
          <Badge variant="secondary" className="text-xs">
            Draft
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Playback Controls */}
        <div className="flex items-center gap-1 mr-4">
          <Button variant="ghost" size="sm">
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Play className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <RotateCw className="w-4 h-4" />
          </Button>
        </div>

        {/* Action Buttons */}
        <Button variant="ghost" size="sm">
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>

        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
