import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Play, SkipBack, SkipForward, Volume2, Scissors, Copy, Trash2 } from "lucide-react"

const timelineItems = [
  { type: "video", name: "Intro Clip", start: 0, duration: 15, color: "bg-blue-500" },
  { type: "audio", name: "Background Music", start: 0, duration: 45, color: "bg-green-500" },
  { type: "text", name: "Title Text", start: 5, duration: 10, color: "bg-purple-500" },
  { type: "video", name: "Main Content", start: 15, duration: 30, color: "bg-blue-500" },
]

export function EditorTimeline() {
  return (
    <div className="h-full bg-card border-t border-border flex flex-col">
      {/* Timeline Controls */}
      <div className="h-12 border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Play className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <SkipForward className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm font-mono">00:15</span>
            <span className="text-xs text-muted-foreground">/</span>
            <span className="text-sm font-mono text-muted-foreground">01:30</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4" />
          <Slider defaultValue={[75]} max={100} step={1} className="w-20" />

          <div className="flex items-center gap-1 ml-4">
            <Button variant="ghost" size="sm">
              <Scissors className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Copy className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Timeline Tracks */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4 space-y-2">
            {/* Time Ruler */}
            <div className="h-6 bg-muted/50 rounded flex items-center px-2 text-xs text-muted-foreground">
              <div className="flex justify-between w-full">
                <span>0:00</span>
                <span>0:15</span>
                <span>0:30</span>
                <span>0:45</span>
                <span>1:00</span>
                <span>1:15</span>
                <span>1:30</span>
              </div>
            </div>

            {/* Video Track */}
            <div className="space-y-1">
              <div className="text-xs font-medium text-muted-foreground px-2">Video</div>
              <div className="h-12 bg-muted/30 rounded relative">
                {timelineItems
                  .filter((item) => item.type === "video")
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`absolute h-10 ${item.color} rounded m-1 flex items-center px-2 cursor-pointer hover:opacity-80 transition-opacity`}
                      style={{
                        left: `${(item.start / 90) * 100}%`,
                        width: `${(item.duration / 90) * 100}%`,
                      }}
                    >
                      <span className="text-xs text-white font-medium truncate">{item.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Audio Track */}
            <div className="space-y-1">
              <div className="text-xs font-medium text-muted-foreground px-2">Audio</div>
              <div className="h-12 bg-muted/30 rounded relative">
                {timelineItems
                  .filter((item) => item.type === "audio")
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`absolute h-10 ${item.color} rounded m-1 flex items-center px-2 cursor-pointer hover:opacity-80 transition-opacity`}
                      style={{
                        left: `${(item.start / 90) * 100}%`,
                        width: `${(item.duration / 90) * 100}%`,
                      }}
                    >
                      <span className="text-xs text-white font-medium truncate">{item.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Text Track */}
            <div className="space-y-1">
              <div className="text-xs font-medium text-muted-foreground px-2">Text</div>
              <div className="h-12 bg-muted/30 rounded relative">
                {timelineItems
                  .filter((item) => item.type === "text")
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`absolute h-10 ${item.color} rounded m-1 flex items-center px-2 cursor-pointer hover:opacity-80 transition-opacity`}
                      style={{
                        left: `${(item.start / 90) * 100}%`,
                        width: `${(item.duration / 90) * 100}%`,
                      }}
                    >
                      <span className="text-xs text-white font-medium truncate">{item.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
