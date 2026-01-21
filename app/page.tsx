import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Activity } from "@/components/activity"
import { Interests } from "@/components/interests"
import { Contact } from "@/components/contact"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { HeroMarquee } from "@/components/hero-marquee"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Navigation />
      <Hero />
      <ScrollReveal width="100%" delay={0.2}>
        <HeroMarquee />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Education />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Skills />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Projects />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Activity />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Interests />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Contact />
      </ScrollReveal>

    </main>
  )
}
