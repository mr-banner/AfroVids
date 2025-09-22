import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/store/providers";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "AfroVids - Create Videos Without Limits",
  description:
    "Professional video creation platform with AI-powered tools and templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${manrope.variable} antialiased`}
    >
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <Providers>
      <body className="font-sans">
        <Toaster position={"top-right" as const} richColors/>
        <main>{children}</main>
      </body>
      </Providers>
    </html>
  );
}
