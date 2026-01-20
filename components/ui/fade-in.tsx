"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInStaggerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export function FadeInStagger({ children, className, delay = 0, staggerDelay = 0.1 }: FadeInStaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
      }}
    >
      {children}
    </motion.div>
  )
}
