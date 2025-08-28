"use client"

import { Button } from "@/components/ui/button"
import { Play, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-primary-foreground fill-current" />
            </div>
            <span className="font-bold text-xl">AfroVids</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-md font-medium hover:text-primary transition-colors">
              Templates
            </a>
            <a href="#" className="text-md font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="text-md font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#" className="text-md font-medium hover:text-primary transition-colors">
              Help
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex text-md" asChild>
            <a href="/auth/login">Login</a>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex text-md" asChild>
            <a href="/dashboard">Dashboard</a>
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent text-md" asChild>
            <a href="/editor">Open Editor</a>
          </Button>
          <Button size="sm" className="hidden sm:flex text-md" asChild>
            <a href="/auth/register">Sign up</a>
          </Button>

          {/* Mobile CTA */}
          <Button size="sm" className="sm:hidden" asChild>
            <a href="/auth/register">Sign up</a>
          </Button>

          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Templates
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Features
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Pricing
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Help
              </a>
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-border sm:hidden">
              <Button variant="ghost" size="sm" asChild>
                <a href="/auth/login">Login</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/dashboard">Dashboard</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/editor">Open Editor</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
