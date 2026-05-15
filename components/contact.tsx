"use client"

import type React from "react"

import {
  ArrowUpRight,
  BadgeCheck,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Rocket,
  Send,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import { useState } from "react"

type ContactLink = {
  label: string
  href: string
  detail: string
  Icon: LucideIcon
  primary?: boolean
}

const hiringSignals = [
  { label: "Location", value: "Ho Chi Minh City", Icon: MapPin },
  { label: "Education", value: "RMIT Software Engineering", Icon: GraduationCap },
  { label: "Status", value: "Available for work", Icon: BadgeCheck },
  { label: "Strongest proof", value: "#1 launch on Forg + Unikorn", Icon: Trophy },
]

const primaryLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/duong-phu-dong/",
    detail: "Best hiring channel",
    Icon: Linkedin,
    primary: true,
  },
  {
    label: "Email",
    href: "mailto:dongduong840@gmail.com",
    detail: "Direct message",
    Icon: Mail,
    primary: true,
  },
  {
    label: "Resume",
    href: "/cv/Duong Phu Dong - Resume.pdf",
    detail: "PDF profile",
    Icon: FileText,
  },
  {
    label: "GitHub",
    href: "https://github.com/DongDuong2001",
    detail: "Public code",
    Icon: Github,
  },
]

const proofLinks: ContactLink[] = [
  {
    label: "Unikorn",
    href: "https://unikorn.vn/u/duong-phu-dong",
    detail: "Launch profile",
    Icon: Rocket,
  },
  {
    label: "Forg",
    href: "https://forg.to/@duongphudong",
    detail: "Product wins",
    Icon: Trophy,
  },
  {
    label: "Product Hunt",
    href: "https://www.producthunt.com/@duong_phu_dong",
    detail: "Product community",
    Icon: ArrowUpRight,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setStatusMessage("Message sent. Thanks for reaching out.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage("Could not send the message. Please use email or LinkedIn.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
      setStatusMessage("Something went wrong. Please use email or LinkedIn.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const renderLink = ({ label, href, detail, Icon, primary }: ContactLink) => (
    <a
      key={label}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className={`group border-2 border-foreground p-3 md:p-4 transition-colors ${
        primary
          ? "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
          : "bg-card hover:bg-foreground hover:text-background"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-2">
          <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="font-mono text-sm font-bold">{label}</span>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-wide opacity-75">{detail}</p>
    </a>
  )

  return (
    <section id="contact" className="min-h-[calc(100dvh-3.5rem)] md:min-h-full">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="mb-6 md:mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} CONTACT</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Fast paths for recruiters and collaborators. LinkedIn and email are the cleanest ways to start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-5 md:gap-6">
          <div className="space-y-5">
            <article className="border-2 md:border-4 border-foreground bg-card p-4 md:p-5">
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-3 mb-4">
                <MessageSquare className="h-4 w-4 text-accent" aria-hidden="true" />
                <h3 className="font-mono text-lg md:text-xl font-bold">HIRING SNAPSHOT</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {hiringSignals.map(({ label, value, Icon }) => (
                  <div key={label} className="border-2 border-foreground bg-background/70 px-3 py-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
                    </div>
                    <p className="font-mono text-xs md:text-sm font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-2 md:border-4 border-foreground bg-card p-4 md:p-5">
              <h3 className="font-mono text-lg md:text-xl font-bold border-b-2 border-foreground pb-3 mb-4">
                DIRECT LINKS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{primaryLinks.map(renderLink)}</div>
            </article>

            <article className="border-2 border-foreground bg-secondary p-4">
              <h3 className="font-mono text-sm font-bold border-b-2 border-foreground pb-2 mb-3">
                PRODUCT PROOF
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">{proofLinks.map(renderLink)}</div>
            </article>
          </div>

          <div className="border-2 md:border-4 border-foreground p-4 md:p-6 bg-card h-fit">
            <div className="flex items-center justify-between gap-3 border-b-2 border-foreground pb-3 mb-4">
              <h3 className="font-mono text-lg md:text-xl font-bold">SEND MESSAGE</h3>
              <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                    NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                    EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                  SUBJECT:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                  MESSAGE:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none text-sm"
                />
              </div>

              {statusMessage && (
                <p
                  className={`border-2 px-3 py-2 font-mono text-xs font-bold ${
                    status === "success"
                      ? "border-foreground bg-accent text-accent-foreground"
                      : "border-destructive text-destructive"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-foreground p-2.5 font-mono text-sm font-bold bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
