import { EditorHeader } from "./editor-header"
import { EditorSidebar } from "./editor-sidebar"
import { EditorCanvas } from "./editor-canvas"
import { EditorTimeline } from "./editor-timeline"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

export function VideoEditor() {
  return (
    <div className="h-screen flex flex-col bg-background">
      <EditorHeader />

      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* Left Sidebar - Media Library & Tools */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <EditorSidebar />
          </ResizablePanel>

          <ResizableHandle />

          {/* Main Canvas Area */}
          <ResizablePanel defaultSize={60} minSize={40}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={70} minSize={50}>
                <EditorCanvas />
              </ResizablePanel>

              <ResizableHandle />

              {/* Timeline */}
              <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
                <EditorTimeline />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>

          <ResizableHandle />

          {/* Right Properties Panel */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <div className="h-full bg-card border-l border-border p-4">
              <h3 className="font-semibold mb-4">Properties</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>Select an element to edit its properties</p>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
