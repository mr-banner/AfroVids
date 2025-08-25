import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with video creation",
      features: [
        "5 video exports per month",
        "720p video quality",
        "Basic templates",
        "Watermark included",
        "Community support",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Business",
      price: "$15",
      period: "per month",
      description: "Best for small businesses and content creators",
      features: [
        "Unlimited video exports",
        "1080p HD video quality",
        "Premium templates",
        "No watermark",
        "Priority support",
        "AI voice-over",
        "Brand kit",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Unlimited",
      price: "$30",
      period: "per month",
      description: "For teams and agencies with advanced needs",
      features: [
        "Everything in Business",
        "4K video quality",
        "Advanced AI features",
        "Team collaboration",
        "Custom branding",
        "API access",
        "Dedicated support",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Choose the perfect plan for your video creation needs. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-emerald-500 shadow-lg md:scale-105" : "border-gray-200"} w-full`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs sm:text-sm">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-6 sm:pb-8">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2 text-sm sm:text-base">/{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm sm:text-base px-2 sm:px-0">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.buttonVariant} className="w-full py-2.5 sm:py-3 text-base sm:text-lg" size="lg">
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-0">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
