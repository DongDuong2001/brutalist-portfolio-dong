"use client"

import { useEffect, useRef } from "react"

const CHARS = " .:-=+*#%@"
const COLS = 110

interface AsciiVideoProps {
  src: string
  className?: string
}

// Inspired by larsen66's Hero ASCII on 21st.dev: re-draws the video as coloured ASCII; hover reveals the raw video.
export function AsciiVideo({ src, className = "" }: AsciiVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!wrap || !video || !canvas) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      canvas.style.display = "none"
      video.style.opacity = "1"
      return
    }

    const ctx = canvas.getContext("2d")
    const sampler = document.createElement("canvas").getContext("2d", { willReadFrequently: true })
    if (!ctx || !sampler) return

    let cell = 0
    let rows = 0
    let frame = 0
    let visible = true

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = wrap.clientWidth * dpr
      canvas.height = wrap.clientHeight * dpr
      cell = canvas.width / COLS
      rows = Math.floor(canvas.height / (cell * 2))
      sampler.canvas.width = COLS
      sampler.canvas.height = rows
      ctx.font = `bold ${cell * 1.7}px ui-monospace, monospace`
      ctx.textBaseline = "top"
    }

    const draw = () => {
      frame = requestAnimationFrame(draw)
      if (!visible || video.readyState < 2 || rows === 0) return
      sampler.drawImage(video, 0, 0, COLS, rows)
      const { data } = sampler.getImageData(0, 0, COLS, rows)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < COLS; x++) {
          const i = (y * COLS + x) * 4
          const r = data[i], g = data[i + 1], b = data[i + 2]
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
          if (lum < 0.06) continue
          ctx.fillStyle = `rgb(${r},${g},${b})`
          ctx.fillText(CHARS[Math.min(CHARS.length - 1, Math.floor(lum * CHARS.length))], x * cell, y * cell * 2)
        }
      }
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(wrap)
    // Stop sampling while the hero is scrolled away.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(wrap)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className={`group relative overflow-hidden bg-black ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-contain pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <source src={src} type="video/mp4" />
      </video>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full transition-opacity duration-500 group-hover:opacity-0"
      />
      <span className="absolute bottom-2 right-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-accent/70 transition-opacity group-hover:opacity-0">
        ascii://hover to decode
      </span>
    </div>
  )
}
