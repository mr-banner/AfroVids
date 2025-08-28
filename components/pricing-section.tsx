import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$15",
      period: "per month",
      duration: "Up to 30s videos",
      features: [
        "5 video exports per month",
        "720p video quality",
        "Basic templates",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$25",
      period: "per month",
      duration: "Up to 1 min videos",
      features: [
        "Unlimited exports",
        "1080p HD quality",
        "Premium templates",
        "No watermark",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$40",
      period: "per month",
      duration: "Up to 2 min videos",
      features: [
        "Unlimited exports",
        "4K video quality",
        "Advanced AI features",
        "Custom branding",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing. Start creating videos today.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative w-full border-2 transition-all cursor-pointer duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-emerald-500 shadow-lg md:scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs sm:text-sm">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-6 sm:pb-8">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-sm sm:text-base">
                    /{plan.period}
                  </span>
                </div>
                <p className="mt-2 text-emerald-600 font-medium text-sm sm:text-base">
                  {plan.duration}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-2.5 sm:py-3 text-base sm:text-lg ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : ""
                  }`}
                  size="lg"
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 text-sm sm:text-base">
            No hidden fees. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
