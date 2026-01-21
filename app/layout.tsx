import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/ui/smooth-scroll"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Duong Phu Dong | Fullstack Developer",
  description: "Portfolio of Duong Phu Dong - A brutalist showcase of projects, skills, and experience. Fullstack Developer & UI Designer based in Ho Chi Minh, Vietnam.",
  openGraph: {
    title: "Duong Phu Dong | Fullstack Developer",
    description: "Building digital experiences with a focus on brutalist aesthetics and robust functionality.",
    url: "https://duongphudong.com", // Placeholder URL, update if known
    siteName: "Duong Phu Dong Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duong Phu Dong | Fullstack Developer",
    description: "Building digital experiences with a focus on brutalist aesthetics and robust functionality.",
    creator: "@lab68dev",
  },
  metadataBase: new URL("https://duongphudong.com"), // Placeholder
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
