"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"

interface TextScrambleProps {
  children: string
  className?: string
  duration?: number
  speed?: number
  characterSet?: string
}

export function TextScramble({
  children,
  className,
  duration = 1.5,
  speed = 0.04,
  characterSet = CHARS,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children)
  const [isScrambling, setIsScrambling] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    let step = 0
    const totalSteps = duration / speed

    const startScramble = () => {
      setIsScrambling(true)
      interval = setInterval(() => {
        const progress = step / totalSteps
        const scrambled = children
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < children.length * progress) {
              return char
            }
            return characterSet[Math.floor(Math.random() * characterSet.length)]
          })
          .join("")

        setDisplayText(scrambled)
        step++

        if (step > totalSteps) {
          clearInterval(interval)
          setDisplayText(children)
          setIsScrambling(false)
        }
      }, speed * 1000)
    }

    startScramble()

    return () => clearInterval(interval)
  }, [children, duration, speed, characterSet])

  return (
    <motion.span
      className={className}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => {
        if (!isScrambling) {
          // Optional: Re-trigger scramble on hover?
          // For now, let's just keep it simple or maybe just add a subtle glitch color
        }
      }}
    >
      {displayText}
    </motion.span>
  )
}
