"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const SESSION_ID_KEY = "portfolio-session-id"
const VIEW_COUNTED_KEY = "portfolio-view-counted"

export function Hero() {
  const [profileViews, setProfileViews] = useState<number | null>(null)

  useEffect(() => {
    let isActive = true

    const getOrCreateSessionId = () => {
      const existing = window.sessionStorage.getItem(SESSION_ID_KEY)
      if (existing) return existing

      const generated =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`

      window.sessionStorage.setItem(SESSION_ID_KEY, generated)
      return generated
    }

    const updateViews = async () => {
      const sessionId = getOrCreateSessionId()
      const alreadyCounted = window.sessionStorage.getItem(VIEW_COUNTED_KEY) === "1"

      if (!alreadyCounted) {
        const countResponse = await fetch("/api/profile-views", {
          method: "POST",
          headers: { "x-session-id": sessionId },
          cache: "no-store",
        })

        if (countResponse.ok) {
          const countData = (await countResponse.json()) as { total?: number }
          if (isActive && typeof countData.total === "number") {
            setProfileViews(countData.total)
          }
          window.sessionStorage.setItem(VIEW_COUNTED_KEY, "1")
          return
        }
      }

      const readResponse = await fetch("/api/profile-views", { cache: "no-store" })
      if (!readResponse.ok) return

      const readData = (await readResponse.json()) as { total?: number }
      if (isActive && typeof readData.total === "number") {
        setProfileViews(readData.total)
      }
    }

    void updateViews()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <section
      id="home"
      className="bg-blueprint relative flex min-h-[860px] items-center justify-center overflow-hidden px-4 pb-20 pt-32 md:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center leading-[0.84] text-[#d3d9e0]"
      >
        <span className="text-[clamp(80px,15vw,240px)] font-light tracking-tighter">SOFTWARE</span>
        <span className="text-[clamp(80px,15.5vw,250px)] font-black tracking-tighter">ENGINEER</span>
      </div>

      <div className="relative flex flex-col items-center gap-5">
        <div className="aspect-square w-[clamp(220px,30vw,400px)] overflow-hidden rounded-full border-[1.5px] border-foreground bg-ink shadow-[0_30px_80px_-30px_rgba(14,17,22,0.5)]">
          <img src="/logo_banner/DuongPhuDong_Logo.jpg" alt="Duong Phu Dong logo" className="h-full w-full object-cover" />
        </div>
        <h1 className="text-center text-[clamp(13px,1.2vw,16px)] font-extrabold uppercase tracking-[0.14em]">
          Software Engineer · Ho Chi Minh City
        </h1>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a
            href="https://3bstudio.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground bg-background px-4 text-xs font-extrabold tracking-wider transition-colors hover:bg-foreground hover:text-background"
          >
            FOUNDER · 3BSTUDIO.ME
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
          </a>
          <a
            href="https://lehongkhanh.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground bg-foreground px-4 text-xs font-extrabold tracking-wider text-background transition-opacity hover:opacity-90"
          >
            CO-FOUNDER · H1T MICRO <span className="text-accent">1.6K+ USERS</span>
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-4 hidden w-[190px] flex-col gap-2 rounded-lg border border-border bg-background/90 p-3 text-[10px] font-bold uppercase tracking-[0.08em] md:left-14 md:flex">
        <span className="text-muted-foreground">Now building</span>
        <span className="text-base font-black tracking-tight">H1T MICRO</span>
        <span>Solution Architect · Backend</span>
        <span className="inline-flex items-center gap-1.5 border-t border-border pt-2 text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-[#1f8a3b]" />
          Scaling · 1.6K+ users
        </span>
      </div>

      <div className="absolute bottom-12 right-4 hidden text-right text-[11px] font-bold uppercase leading-relaxed tracking-[0.08em] text-muted-foreground md:right-14 md:block">
        Ho Chi Minh City, VN
        <br />
        RMIT SE · Class of 2027
        <br />
        {profileViews === null ? "…" : profileViews.toLocaleString()} profile views
      </div>
    </section>
  )
}
