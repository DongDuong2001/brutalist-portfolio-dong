"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBug } from "@fortawesome/free-solid-svg-icons"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t-2 border-foreground bg-card mt-16 font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Quote and Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo_banner/DuongPhuDong_Logo.jpg"
              alt="Duong Phu Dong Logo"
              className="h-10 w-10 rounded-lg border-2 border-foreground object-cover shadow-[2px_2px_0_0_var(--foreground)]"
            />
            <div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">Philosophy</span>
              <p className="text-xs font-bold text-foreground">DUONG PHU DONG</p>
            </div>
          </div>
          <p className="text-sm md:text-base font-bold leading-relaxed text-foreground max-w-md">
            "We build systems not just to work, but to endure. Simple solutions are often the hardest to design."
          </p>
          <div className="text-[10px] text-muted-foreground space-y-1">
            <p>RMIT SOFTWARE ENGINEERING CLASS OF '27</p>
            <p>SYSTEMS ARCHITECT & FULLSTACK DEVELOPER</p>
          </div>
        </div>

        {/* Links and contact info */}
        <div className="flex flex-col md:items-end justify-between h-full space-y-6 md:space-y-0">
          <div className="space-y-3 md:text-right">
            <p className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">Get in touch</p>
            <a
              href="mailto:dongduong840@gmail.com"
              className="inline-flex items-center gap-2 border-2 border-foreground bg-accent px-4 py-2 font-mono text-xs font-black uppercase text-accent-foreground rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Email Me Directly</span>
              <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
            </a>
          </div>

          <div className="flex flex-wrap md:justify-end gap-4 text-[10px] text-muted-foreground border-t border-foreground/10 pt-4 w-full">
            <button onClick={scrollToTop} className="hover:text-foreground transition-colors font-bold uppercase">
              [ Back to Top ]
            </button>
            <span>•</span>
            <span>DUONG PHU DONG © 2026</span>
          </div>
        </div>
      </div>

      {/* Terminal bar at the very bottom */}
      <div className="border-t border-foreground bg-foreground text-background py-2 px-4 md:px-8 flex items-center justify-between text-[8px] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span>DUONG PHU DONG // PORTFOLIO PROTOCOL</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">NEXT.JS 16 // TAILWIND v4</span>
          <span>SYSTEMS: ONLINE</span>
        </div>
      </div>
    </footer>
  )
}
