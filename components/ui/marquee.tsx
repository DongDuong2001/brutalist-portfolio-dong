"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function Marquee({ children, direction = "left", speed = 20, className }: MarqueeProps) {
  return (
    <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-4 shrink-0" // shrink-0 ensures it doesn't wrap
        initial={{ x: 0 }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }} // Move halfway (assuming double content)
        transition={{
            // This needs to be loop
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
            from: direction === "left" ? "0%" : "-50%" 
        }}
        // Actually, easier framing:
        style={{ width: "fit-content", display: "flex" }}
      >
        <div className="flex gap-8 px-4">{children}</div>
        <div className="flex gap-8 px-4">{children}</div>
        <div className="flex gap-8 px-4">{children}</div>
        <div className="flex gap-8 px-4">{children}</div>
      </motion.div>
    </div>
  )
}
