import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Video, FolderOpen, BarChart3, Settings, HelpCircle, Crown, Zap } from "lucide-react"

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Video, label: "My Videos", count: 12 },
  { icon: FolderOpen, label: "Projects", count: 8 },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help & Support" },
]

export function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card/50">
      <div className="p-6 space-y-6">
        {/* Plan Status */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm">Basic Plan</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Videos this month</span>
              <span className="font-medium">47/100</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "47%" }} />
            </div>
          </div>
          <Button size="sm" variant="outline" className="w-full bg-transparent">
            <Zap className="w-4 h-4 mr-2" />
            Upgrade Plan
          </Button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <Badge variant="secondary" className="text-xs">
                  {item.count}
                </Badge>
              )}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
