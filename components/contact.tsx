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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Message sent! (This is a demo)")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="border-b-4 border-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="border-4 border-foreground p-2 inline-block mb-12">
          <h2 className="font-mono text-4xl md:text-6xl font-bold">{">"} CONTACT</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="border-4 border-foreground p-8 bg-card">
              <h3 className="font-mono text-2xl font-bold mb-6 border-b-4 border-foreground pb-4">GET IN TOUCH</h3>
              <p className="leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to connect, feel free to reach out through the form or social links below.
              </p>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3 border-2 border-foreground p-3">
                  <span className="font-bold">LOCATION:</span>
                  <span>Melbourne, Australia</span>
                </div>
                <div className="flex items-center gap-3 border-2 border-foreground p-3">
                  <span className="font-bold">EDUCATION:</span>
                  <span>RMIT University</span>
                </div>
                <div className="flex items-center gap-3 border-2 border-foreground p-3">
                  <span className="font-bold">STATUS:</span>
                  <span className="text-accent">Available for opportunities</span>
                </div>
              </div>
            </div>

            <div className="border-4 border-foreground p-8 bg-secondary">
              <h3 className="font-mono text-xl font-bold mb-6">SOCIAL LINKS</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/F4P1E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-4 font-mono text-sm font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  GITHUB
                </a>
                <a
                  href="https://linkedin.com/in/dương-phú-đông-820481147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-4 font-mono text-sm font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://x.com/F4P1E404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-4 font-mono text-sm font-bold text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  X (TWITTER)
                </a>
                <div className="border-2 border-foreground p-4 font-mono text-sm font-bold text-center bg-muted text-muted-foreground">
                  PORTFOLIO
                </div>
              </div>
            </div>
          </div>

          <div className="border-4 border-foreground p-8 bg-card">
            <h3 className="font-mono text-2xl font-bold mb-6 border-b-4 border-foreground pb-4">SEND MESSAGE</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-sm font-bold mb-2">
                  NAME:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-foreground p-3 bg-background focus:outline-none focus:ring-4 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm font-bold mb-2">
                  EMAIL:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-foreground p-3 bg-background focus:outline-none focus:ring-4 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-sm font-bold mb-2">
                  SUBJECT:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-foreground p-3 bg-background focus:outline-none focus:ring-4 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-sm font-bold mb-2">
                  MESSAGE:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-4 border-foreground p-3 bg-background focus:outline-none focus:ring-4 focus:ring-accent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border-4 border-foreground p-4 font-mono font-bold bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                SEND MESSAGE {"->"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-4 border-foreground p-6 bg-secondary text-center">
          <p className="font-mono text-sm">
            © 2025 DƯƠNG PHÚ ĐÔNG. ALL RIGHTS RESERVED. | BUILT WITH NEXT.JS & TAILWIND CSS
          </p>
        </div>
      </div>
    </section>
  )
}
