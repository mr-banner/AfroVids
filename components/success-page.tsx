"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import Cookies from "js-cookie"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Sparkles, ArrowRight, Gift, Star } from "lucide-react"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const token = Cookies.get("token")
  const plan = searchParams.get("plan")
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("Verifying your subscription...")
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const confirmSubscription = async () => {
      try {
        if (!sessionId || !plan) {
          setMessage("Invalid session or plan")
          setLoading(false)
          return
        }
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscribe/confirm-subscription`,
          { session_id: sessionId, plan },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        )

        if (response.data.success) {
          setMessage(`Your ${plan} subscription is now active!`)
          setIsSuccess(true)
        } else {
          setMessage(response.data.message || "Subscription failed")
        }
      } catch (err) {
        console.error(err)
        setMessage("Error confirming subscription")
      } finally {
        setLoading(false)
      }
    }

    confirmSubscription()
  }, [sessionId, plan])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">{message}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-destructive/20">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-bold text-destructive mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Button variant="outline" onClick={() => (window.location.href = "/")} className="w-full">
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 animate-bounce delay-100">
          <Sparkles className="w-6 h-6 text-primary/60" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce delay-300">
          <Star className="w-4 h-4 text-accent/60" />
        </div>
        <div className="absolute top-32 left-1/4 animate-bounce delay-500">
          <Gift className="w-5 h-5 text-primary/40" />
        </div>
        <div className="absolute top-40 right-1/3 animate-bounce delay-700">
          <Sparkles className="w-4 h-4 text-accent/50" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in-0 duration-1000 delay-300">
            <CheckCircle className="w-12 h-12 text-primary animate-in zoom-in-0 duration-500 delay-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">🎉 Congratulations!</h1>
          <p className="text-xl text-muted-foreground text-balance">Your subscription is now active. Welcome aboard!</p>
        </div>

        <Card className="w-full max-w-lg mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Payment Confirmed</h3>
                <p className="text-muted-foreground">Your {plan} subscription is ready to use</p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Plan</p>
              <p className="font-semibold capitalize">{plan} Subscription</p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-lg mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">What's next?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Explore your dashboard and features</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Set up your profile preferences</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Access exclusive premium content</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Get support whenever you need it</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
          <Button size="lg" onClick={() => (window.location.href = "/dashboard")} className="group">
            Dashboard
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => (window.location.href = "/support")}>
            Need Help?
          </Button>
        </div>

        <div className="mt-12 text-center animate-in fade-in-0 duration-1000 delay-800">
          <p className="text-sm text-muted-foreground mb-2">Questions about your subscription?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/support" className="text-primary hover:underline">
              Support Center
            </a>
            <a href="/billing" className="text-primary hover:underline">
              Billing Info
            </a>
            <a href="/contact" className="text-primary hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
