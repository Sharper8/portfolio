"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

export function About() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!ref.current) return
    const blocks = ref.current.querySelectorAll(".about-block")
    gsap.set(blocks, { y: 24, opacity: 0 })
    gsap.to(blocks, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty("--spot-x", `${x}px`)
      el.style.setProperty("--spot-y", `${y}px`)
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section id="about" className="w-full border-t">
      <div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 [--spot-x:50%] [--spot-y:50%]"
        ref={ref}
        style={{
          background: `radial-gradient(220px 180px at var(--spot-x) var(--spot-y), color-mix(in oklch, var(--primary) 10%, transparent 90%) 0%, transparent 70%)`,
        }}
      >
        <div className="grid gap-8 md:grid-cols-5">
          <div className="about-block md:col-span-3 rounded-2xl border bg-card p-6 shadow-sm flex flex-col">
            <h2 className="mb-3 text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A Master of Science in Computer Science candidate focused on cutting-edge technologies. Over 2 years of
              experience orchestrating large-scale disaster recovery and risk analysis protocols, reflecting a strong
              foundation in complex systems and operational resilience. I am eager to apply this vision and technical
              skills to drive innovation in AI, cybersecurity and infrastructure projects.
            </p>
            {/* Info chips moved from Contact to balance layout */}
            <div className="mt-auto pt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border px-2.5 py-1">Open to relocation (global)</span>
              <span className="rounded-full border px-2.5 py-1">Typical response: ~24h</span>
              <span className="rounded-full border px-2.5 py-1">Open to internships & consulting</span>
            </div>
          </div>
          <div className="about-block md:col-span-2 rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="mb-2 font-semibold tracking-tight">Education</h3>
            <div className="mb-4 text-sm text-muted-foreground">
              <div className="font-medium text-foreground">Master of Science and Engineering: Network & Security Engineer</div>
              <div>EFREI Paris, Paris Panthéon-Assas Université, Villejuif, France</div>
              <div>September 2021 - August 2026 • GPA: 3.8</div>
            </div>
            <h3 className="mb-2 font-semibold tracking-tight">Certifications</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• CompTIA Security+</li>
              <li>• TOEIC: 960</li>
              <li>• CEH (ongoing)</li>
              <li>• CCNA: Introduction to Networks</li>
              <li>• Certified Stormshield Network Expert</li>
              <li>• MOOC Project Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
