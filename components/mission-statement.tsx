import { Heart, Users, Globe } from "lucide-react"

export function MissionStatementSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with cultural colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-yellow-500 to-green-600 opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-500/20 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance">
            Representation Matters
          </h2>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto text-pretty">
            For too long, video platforms ignored Black and Caribbean voices. AfroVids is changing that — giving our
            community the power to tell its own stories, with faces, voices, and culture that reflect who we are.
          </p>
        </div>
      </div>
    </section>
  )
}
