import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">VideoAI</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Create stunning videos with AI-powered tools. Transform your ideas into professional videos in minutes.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Video Editor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  AI Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Stock Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Brand Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm sm:text-base"
              />
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-sm sm:text-base">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 VideoAI. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-center sm:text-left">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-center sm:text-left">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-center sm:text-left">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
