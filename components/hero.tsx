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
        className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center leading-[0.84] text-transparent [-webkit-text-stroke:1px_#2b0a10]"
      >
        <span className="text-[clamp(80px,15vw,240px)] font-light tracking-tighter">SOFTWARE</span>
        <span className="text-[clamp(80px,15.5vw,250px)] font-black tracking-tighter">ENGINEER</span>
      </div>

      <div className="absolute inset-x-4 top-24 flex items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-mist md:inset-x-14">
        <span>
          Personnel file <span className="font-jp text-accent">人事ファイル</span>
        </span>
        <span className="hidden sm:inline">No. 3B-000 · Clearance: public</span>
      </div>

      <div className="relative flex flex-col items-center gap-5">
        <div className="relative">
          <div aria-hidden="true" className="brackets absolute -inset-4" />
          <div className="aspect-square w-[clamp(220px,30vw,400px)] overflow-hidden rounded-full border-[1.5px] border-accent bg-ink shadow-[0_0_80px_-20px_rgba(255,31,61,0.45)]">
            <img src="/logo_banner/DuongPhuDong_Logo.jpg" alt="Duong Phu Dong logo" className="h-full w-full object-cover" />
          </div>
        </div>
        <h1 className="glitch text-center text-[clamp(13px,1.2vw,16px)] font-extrabold uppercase tracking-[0.14em]">
          Software Engineer · Ho Chi Minh City
        </h1>
        <p className="font-jp -mt-3 text-sm tracking-[0.3em] text-accent" lang="ja">
          ズオン・フー・ドン
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a
            href="https://3bstudio.me"
            target="_blank"
            rel="noopener noreferrer"
            className="chamfer inline-flex min-h-11 items-center gap-2 border border-foreground bg-background px-4 text-xs font-extrabold tracking-wider transition-colors hover:bg-foreground hover:text-background"
          >
            FOUNDER · 3BSTUDIO.ME
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
          </a>
          <a
            href="https://lehongkhanh.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="chamfer inline-flex min-h-11 items-center gap-2 bg-accent px-4 text-xs font-extrabold tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
          >
            CO-FOUNDER · H1T MICRO <span>1.6K+ USERS</span>
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-4 hidden w-[190px] flex-col gap-2 border border-border border-t-2 border-t-accent bg-background/90 p-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em] md:left-14 md:flex">
        <span className="text-muted-foreground">Now building</span>
        <span className="font-sans text-base font-black tracking-tight">H1T MICRO</span>
        <span>Solution Architect · Backend</span>
        <span className="inline-flex items-center gap-1.5 border-t border-border pt-2 text-muted-foreground">
          <span className="signal" aria-hidden="true" />
          Scaling · 1.6K+ users
        </span>
      </div>

      <div className="absolute bottom-12 right-4 hidden text-right font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.08em] text-muted-foreground md:right-14 md:block">
        Ho Chi Minh City, VN
        <br />
        RMIT SE · Class of 2027
        <br />
        {profileViews === null ? "…" : profileViews.toLocaleString()} profile views
      </div>
    </section>
  )
}
