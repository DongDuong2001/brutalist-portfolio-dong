"use client"

import type React from "react"

import { ArrowUpRight } from "lucide-react"
import { useState, useRef } from "react"
import { PlugConnectedIcon } from "@/components/ui/plug-connected-icon"
import type { AnimatedIconHandle } from "@/components/ui/types"

type ContactLink = {
  label: string
  href: string
  detail: string
}

const links: ContactLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/duong-phu-dong/", detail: "Best hiring channel" },
  { label: "Email", href: "mailto:dongduong840@gmail.com", detail: "Direct message" },
  { label: "Resume", href: "/cv/DuongPhuDong_Resume.pdf", detail: "PDF profile" },
  { label: "GitHub", href: "https://github.com/DongDuong2001", detail: "Public code" },
  { label: "Unikorn", href: "https://unikorn.vn/u/duong-phu-dong", detail: "Launch profile" },
  { label: "Forg", href: "https://forg.to/@duongphudong", detail: "Product wins" },
  { label: "Product Hunt", href: "https://www.producthunt.com/@duong_phu_dong", detail: "Product community" },
]

const inputClass =
  "w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
const labelClass = "mb-1.5 block text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground"

export function Contact() {
  const plugIconRef = useRef<AnimatedIconHandle>(null)
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

  return (
    <section id="contact" className="scroll-mt-16 border-t border-[#d3d9e0] px-4 py-28 md:px-14">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="leading-[0.88]">
            <span className="block text-[clamp(52px,6vw,96px)] font-light tracking-tighter">GET IN</span>
            <span className="block text-[clamp(52px,6vw,96px)] font-black tracking-tighter">TOUCH</span>
          </h2>
          <p className="mt-6 max-w-[380px] text-sm leading-relaxed text-muted-foreground">
            Fast paths for recruiters and collaborators. LinkedIn and email are the cleanest ways to start a conversation.
          </p>

          <ul className="mt-10 border-t border-border">
            {links.map(({ label, href, detail }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between gap-4 border-b border-border py-3.5"
                >
                  <span className="text-lg font-black tracking-tight">{label}</span>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                    {detail}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="h-fit space-y-4 rounded-lg bg-ink p-5 text-[#e6edf3] md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-mist">Send a message</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={`${inputClass} text-foreground`} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={`${inputClass} text-foreground`} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={labelClass}>
              Subject
            </label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={`${inputClass} text-foreground`} />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClass} resize-none text-foreground`}
            />
          </div>

          {statusMessage && (
            <p
              role="status"
              className={`rounded-md px-3 py-2 text-xs font-bold ${
                status === "success" ? "bg-accent text-accent-foreground" : "border border-[#f87171] text-[#fca5a5]"
              }`}
            >
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            onMouseEnter={() => plugIconRef.current?.startAnimation()}
            onMouseLeave={() => plugIconRef.current?.stopAnimation()}
            className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-accent text-sm font-extrabold tracking-wider text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PlugConnectedIcon ref={plugIconRef} size={18} />
            {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </section>
  )
}
