"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "@/store/actions/userActions";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { loading, isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    const initGoogle = () => {
      if ((window as any).google) {
        (window as any).google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          callback: handleGoogleResponse,
        });

        (window as any).google.accounts.id.renderButton(
          document.getElementById("google-btn"),
          { theme: "outline", size: "large", width: "full" }
        );
      }
    };
    if (document.getElementById("google-script")) {
      initGoogle();
    } else {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.id = "google-script";
      script.async = true;
      script.defer = true;
      script.onload = initGoogle;
      document.body.appendChild(script);
    }
  }, []);

  const handleGoogleResponse = async (response: any) => {
    await dispatch(loginWithGoogle(response.credential));
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Play className="w-5 h-5 text-primary-foreground fill-current" />
        </div>
        <span className="font-bold text-2xl">AfroVids</span>
      </div>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Sign in to AfroVids in one click
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div id="google-btn" className="w-full flex justify-center"></div>
          {loading && <p className="text-center mt-2">Signing in...</p>}
        </CardContent>
      </Card>

      <p className="text-center text-xs text-muted-foreground">
        By signing in, you agree to our{" "}
        <Link href="#" className="underline hover:text-foreground">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" className="underline hover:text-foreground">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
