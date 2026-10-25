import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const monaSans = Mona_Sans({
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
  title: "Duong Phu Dong | Software Engineer",
  description: "Portfolio of Duong Phu Dong, a Software Engineer in Ho Chi Minh City, Vietnam. Founder of 3bstudio.me and co-founder of H1T Micro.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Duong Phu Dong | Software Engineer",
    description: "Software Engineer in Ho Chi Minh City building reliable full-stack products and scalable backends.",
    url: "https://duongphudong2001.vercel.app/", // Placeholder URL, update if known
    siteName: "Duong Phu Dong Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duong Phu Dong | Software Engineer",
    description: "Software Engineer in Ho Chi Minh City building reliable full-stack products and scalable backends.",
    creator: "@lab68dev",
  },
  metadataBase: new URL("https://duongphudong2001.vercel.app/"), // Placeholder
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${monaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
