"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [displayText, setDisplayText] = useState(text)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*"

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isHovered) {
      let iteration = 0
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              return letters[Math.floor(Math.random() * 26)]
            })
            .join(""),
        )

        if (iteration >= text.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 30)
    } else {
      setDisplayText(text)
    }

    return () => clearInterval(interval)
  }, [isHovered, text])

  return (
    <motion.div
      className={`relative inline-block cursor-default ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="relative z-10">{displayText}</span>
      {isHovered && (
        <>
          <span className="absolute top-0 left-0 -z-10 text-destructive opacity-70 animate-pulse translate-x-[2px]">
            {text}
          </span>
          <span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70 animate-pulse -translate-x-[2px]">
            {text}
          </span>
        </>
      )}
    </motion.div>
  )
}
