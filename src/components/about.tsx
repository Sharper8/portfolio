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
          <div className="about-block md:col-span-3 rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="mb-3 text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I build calm, focused software — practical tools with a sharp edge. I like to ship small,
              test quickly, and let results speak. When the work gets complex, I simplify.
            </p>
          </div>
          <div className="about-block md:col-span-2 rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="mb-2 font-semibold tracking-tight">Quick facts</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Based in EU, remote‑first</li>
              <li>• Frontend/Edge leaning full‑stack</li>
              <li>• Enjoys motion, performance, and DX</li>
              <li>• Currently building at OxY</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
