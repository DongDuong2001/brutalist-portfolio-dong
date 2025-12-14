import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const cooperHewittHeavy = localFont({
  src: "../public/fonts/CooperHewitt-Heavy.otf",
  variable: "--font-heavy",
  weight: "900",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

const cooperHewittThin = localFont({
  src: "../public/fonts/CooperHewitt-Thin.otf",
  variable: "--font-thin",
  weight: "100",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Duong Phu Dong Portfolio",
  description: "A brutalist portfolio showcasing education, skills, projects, and interests",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cooperHewittHeavy.variable} ${cooperHewittThin.variable}`} suppressHydrationWarning>
      <body className="font-thin antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
