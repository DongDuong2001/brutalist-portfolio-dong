"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  duration?: number
}

export const ScrollReveal = ({ children, width = "fit-content", delay = 0.25, duration = 0.5 }: ScrollRevealProps) => {
  return (
    <div style={{ width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration, delay }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  )
}
