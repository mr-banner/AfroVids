"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useDispatch, useSelector } from "react-redux"
import { loginWithGoogle } from "@/store/actions/userActions"
import type { AppDispatch, RootState } from "@/store/store"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const { loading, isAuthenticated, error } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const initGoogle = () => {
      if ((window as any).google) {
        ;(window as any).google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          callback: handleGoogleResponse,
        })
        ;(window as any).google.accounts.id.renderButton(document.getElementById("google-btn"), {
          theme: "filled_blue",
          size: "large",
          width: "320",
          text: "signin_with",
          shape: "rectangular",
        })
      }
    }

    if (document.getElementById("google-script")) {
      initGoogle()
    } else {
      const script = document.createElement("script")
      script.src = "https://accounts.google.com/gsi/client"
      script.id = "google-script"
      script.async = true
      script.defer = true
      script.onload = initGoogle
      document.body.appendChild(script)
    }
  }, [])

  const handleGoogleResponse = async (response: any) => {
    await dispatch(loginWithGoogle(response.credential))
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard")
    }
  }, [isAuthenticated])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo Section */}
        <div className="text-center space-y-6">
          <Link href="/" className="inline-block">
            <Image src="/logo.png" alt="AfroVids Logo" width={120} height={48} className="mx-auto drop-shadow-sm" />
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground text-balance">Welcome to AfroVids</h1>
            <p className="text-muted-foreground text-lg">Sign in with Google to continue</p>
          </div>
        </div>
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div
                  id="google-btn"
                  className="sm:w-full max-w-xs [&>div]:!w-full [&>div>div]:!w-full [&_iframe]:!w-full"
                />
              </div>

              {loading && (
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">Signing you in...</span>
                </div>
              )}
              {error && (
                <div className="text-center text-sm text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">
                  {error}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            By signing in, you agree to our{" "}
            <Link
              href="#"
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
