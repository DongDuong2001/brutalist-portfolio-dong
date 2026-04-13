"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        alert("Message sent successfully!")
      } else {
        setStatus("error")
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
      alert("Something went wrong. Please try again.")
    } finally {
      setStatus("idle")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="h-[calc(100dvh-3.5rem)] md:h-full">
      <div className="container mx-auto px-4 py-4 md:py-8 h-full flex flex-col">
        <div className="mb-4 md:mb-6 shrink-0">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-2xl md:text-5xl lg:text-6xl font-bold">{">"} CONTACT</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 flex-1 min-h-0">
          <div className="hidden md:flex flex-col border-2 md:border-4 border-foreground p-5 md:p-6 bg-card min-h-0">
            <h3 className="font-mono text-lg md:text-xl font-bold mb-4 border-b-2 border-foreground pb-3">GET IN TOUCH</h3>
            <p className="leading-relaxed text-sm mb-4">
              I'm always interested in hearing about new projects and opportunities. Reach out through the form or social links.
            </p>

            <div className="space-y-3 font-mono text-xs md:text-sm">
              <div className="flex items-center justify-between gap-3 border-2 border-foreground p-2.5">
                <span className="font-bold">LOCATION</span>
                <span>Ho Chi Minh, Vietnam</span>
              </div>
              <div className="flex items-center justify-between gap-3 border-2 border-foreground p-2.5">
                <span className="font-bold">EDUCATION</span>
                <span>RMIT University</span>
              </div>
              <div className="flex items-center justify-between gap-3 border-2 border-foreground p-2.5">
                <span className="font-bold">STATUS</span>
                <span className="text-accent">Available</span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href="https://github.com/DongDuong2001"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground p-2.5 font-mono text-xs font-bold text-center hover:bg-foreground hover:text-background transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/duong-phu-dong/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground p-2.5 font-mono text-xs font-bold text-center hover:bg-foreground hover:text-background transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="https://x.com/F4P1E404"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground p-2.5 font-mono text-xs font-bold text-center hover:bg-foreground hover:text-background transition-colors"
              >
                X (TWITTER)
              </a>
              <a
                href="https://unikorn.vn/u/duong-phu-dong"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground p-2.5 font-mono text-xs font-bold text-center hover:bg-foreground hover:text-background transition-colors"
              >
                UNIKORN
              </a>
              <a
                href="https://forg.to/@duongphudong"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground p-2.5 font-mono text-xs font-bold text-center hover:bg-foreground hover:text-background transition-colors"
              >
                FORG
              </a>
              <a
                href="https://www.producthunt.com/@duong_phu_dong"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground p-2.5 font-mono text-xs font-bold text-center hover:bg-foreground hover:text-background transition-colors"
              >
                PRODUCT HUNT
              </a>
            </div>
          </div>

          <div className="border-2 md:border-4 border-foreground p-4 md:p-6 bg-card flex flex-col min-h-0">
            <h3 className="font-mono text-lg md:text-xl font-bold mb-3 md:mb-4 border-b-2 border-foreground pb-3">SEND MESSAGE</h3>

            <div className="md:hidden mb-3 space-y-2">
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
                <div className="border-2 border-foreground p-2 text-center">HCMC</div>
                <div className="border-2 border-foreground p-2 text-center">RMIT</div>
                <div className="border-2 border-foreground p-2 text-center text-accent">OPEN</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/DongDuong2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-2 font-mono text-[10px] font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  GH
                </a>
                <a
                  href="https://www.linkedin.com/in/duong-phu-dong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-2 font-mono text-[10px] font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  IN
                </a>
                <a
                  href="https://x.com/F4P1E404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-2 font-mono text-[10px] font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  X
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://unikorn.vn/u/duong-phu-dong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-2 font-mono text-[10px] font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  UK
                </a>
                <a
                  href="https://forg.to/@duongphudong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-2 font-mono text-[10px] font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  FG
                </a>
                <a
                  href="https://www.producthunt.com/@duong_phu_dong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-2 font-mono text-[10px] font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  PH
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
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
                  rows={3}
                  className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full border-2 border-foreground p-2.5 font-mono text-sm font-bold bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
