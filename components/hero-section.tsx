import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] px-4">
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="AfroVids Logo"
          width={300}
          height={120}
          className="mx-auto"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        AfroVids –{" "}
        <span className="bg-gradient-to-r from-red-500 via-green-500 to-yellow-400 bg-clip-text text-transparent">
          Voices of the Diaspora
        </span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">
        The first AI video platform that brings Afro-Caribbean stories to life —
        automatically.
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-xl shadow-lg">
          Start Creating
        </Button>
      </div>
    </section>
  );
}
