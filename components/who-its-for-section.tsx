"use client"

import { Briefcase, Video, GraduationCap, Globe } from "lucide-react"

export function WhoItsForSection() {
  const userTypes = [
    {
      icon: Briefcase,
      title: "Entrepreneurs & Small Businesses",
      description:
        "Create compelling marketing videos that showcase your products and connect with your community authentically.",
    },
    {
      icon: Video,
      title: "Content Creators & Influencers",
      description:
        "Produce engaging content that celebrates your heritage while building a loyal following across all platforms.",
    },
    {
      icon: GraduationCap,
      title: "Educators & Trainers",
      description:
        "Develop educational content that incorporates cultural context and resonates with diverse learning styles.",
    },
    {
      icon: Globe,
      title: "Nonprofits & Community Leaders",
      description:
        "Share your mission and impact stories through powerful videos that inspire action and community engagement.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Designed for Creators, Businesses, and Communities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            AfroVids empowers diverse voices across industries to tell their stories with authenticity and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {userTypes.map((userType, index) => {
            const IconComponent = userType.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-balance">{userType.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-pretty">{userType.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
