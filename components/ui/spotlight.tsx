"use client"

import { useEffect } from "react"

// One global listener so every .spotlight border lights up as the cursor nears it, not only on hover.
export function SpotlightTracker() {
  useEffect(() => {
    let frame = 0
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>(".spotlight").forEach((el) => {
          const rect = el.getBoundingClientRect()
          el.style.setProperty("--mx", `${event.clientX - rect.left}px`)
          el.style.setProperty("--my", `${event.clientY - rect.top}px`)
        })
      })
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return null
}
