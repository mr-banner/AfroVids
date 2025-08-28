import { Card, CardContent } from "@/components/ui/card";
import { Edit3, UserCheck, Mic, Download } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Edit3,
    title: "Write Your Script",
    description:
      "Start with your story, message, or idea. Our AI understands cultural context and nuances to bring your vision to life.",
    illustration: "✍️",
  },
  {
    number: "2",
    icon: UserCheck,
    title: "Choose Your Character",
    description:
      "Select from our diverse library of authentic Afro-Caribbean characters that truly represent our community and culture.",
    illustration: "👥",
  },
  {
    number: "3",
    icon: Mic,
    title: "Pick a Voice & Language",
    description:
      "Choose from natural-sounding voices in English, Patois, Creole, French, Spanish, and other cultural languages.",
    illustration: "🎤",
  },
  {
    number: "4",
    icon: Download,
    title: "Generate & Download",
    description:
      "Watch your culturally authentic video come to life in minutes. Download in HD and share across all platforms.",
    illustration: "⬇️",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl cursor-pointer">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Create Your Video in{" "}
            <span className="text-primary">4 Simple Steps</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From idea to finished video in minutes.{" "}
            <br className="hidden sm:block" />
            No technical skills required — just your creativity and our AI.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative text-center border border-border/50 hover:border-primary/40 
                         hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl"
            >
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="relative">
                  <div className="text-4xl mb-3">{step.illustration}</div>
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 
                                  rounded-full flex items-center justify-center mx-auto mb-4 relative"
                  >
                    <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div
                      className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground 
                                    rounded-full flex items-center justify-center text-lg font-bold shadow-md"
                    >
                      {step.number}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}

          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 
                          bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10"
          />
        </div>
      </div>
    </section>
  );
}
