"use client"

import { Marquee } from "@/components/ui/marquee"

export function HeroMarquee() {
  const skills = [
    "REACT",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "TAILWIND CSS",
    "RUST",
    "PYTHON",
    "DOCKER",
    "MONGODB",
    "FRAMER MOTION",
    "UI/UX DESIGN",
    "FULL STACK",
    "SOFTWARE ENGINEERING",
  ]

  return (
    <div className="border-b-2 border-foreground bg-accent py-4 overflow-hidden">
      <Marquee speed={30}>
        {skills.map((skill, index) => (
          <span key={index} className="font-mono text-xl md:text-3xl font-bold text-accent-foreground mx-8">
            {skill} •
          </span>
        ))}
      </Marquee>
    </div>
  )
}
