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
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">Philosophy</span>
          </div>
          <p className="text-sm md:text-base font-bold leading-relaxed text-foreground max-w-md">
            "We build systems not just to work, but to endure. Simple solutions are often the hardest to design."
          </p>
          <div className="text-[10px] text-muted-foreground space-y-1">
            <p>RMIT SOFTWARE ENGINEERING CLASS OF '27</p>
            <p>FOUNDER @ THREE BUGS STUDIO</p>
          </div>
        </div>

        {/* Links and studio info */}
        <div className="flex flex-col md:items-end justify-between h-full space-y-6 md:space-y-0">
          <div className="space-y-3 md:text-right">
            <p className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">Our Studio</p>
            <a
              href="https://threebugsportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-foreground bg-accent px-4 py-2 font-mono text-xs font-black uppercase text-accent-foreground shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Three Bugs Studio Website</span>
              <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
            </a>
          </div>

          <div className="flex flex-wrap md:justify-end gap-4 text-[10px] text-muted-foreground border-t border-foreground/10 pt-4 w-full">
            <button onClick={scrollToTop} className="hover:text-foreground transition-colors font-bold uppercase">
              [ Back to Top ]
            </button>
            <span>•</span>
            <span>THREE BUGS STUDIO © 2026</span>
          </div>
        </div>
      </div>

      {/* Terminal bar at the very bottom */}
      <div className="border-t border-foreground bg-foreground text-background py-2 px-4 md:px-8 flex items-center justify-between text-[8px] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBug} className="h-3 w-3 text-accent animate-bounce" />
          <span>THREE BUGS ACTIVE PROTOCOL</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">NEXT.JS 16 // TAILWIND v4</span>
          <span>BUILD: OK</span>
        </div>
      </div>
    </footer>
  )
}
