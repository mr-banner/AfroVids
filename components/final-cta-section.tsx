import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"
import Image from "next/image"

export function FinalCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <Image
        src={"/logo.png"}
        alt="AfroVids Logo"
        width={250}
        height={120}
        className="mx-auto"
        />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Your Story Deserves to Be{" "}
          <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            Seen
          </span>
        </h2>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance">
          Join thousands of creators who are already telling their authentic stories with AfroVids
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r cursor-pointer from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            🟢 Join AfroVids Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="mt-16 flex justify-center items-center space-x-4 opacity-60">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-300" />
          <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-red-500" />
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-700" />
        </div>
      </div>
    </section>
  )
}
