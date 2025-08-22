import { Button } from "@/components/ui/button"
import { Play, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-primary-foreground fill-current" />
            </div>
            <span className="font-bold text-xl">VideoAI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Templates
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Help
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
            <a href="/auth/login">Login</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="/dashboard">Dashboard</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="/editor">Open Editor</a>
          </Button>
          <Button size="sm" asChild>
            <a href="/auth/register">Sign up</a>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
