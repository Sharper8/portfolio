"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

type Experience = {
  company: string
  role: string
  period: string
  summary: string
  stack: string[]
  bullets: string[]
}

const experiences: Experience[] = [
  {
    company: "OxY",
    role: "Founder / Engineer",
    period: "2024 — Present",
    summary: "Designing and shipping focused tools with a calm, performance‑first mindset.",
    stack: ["Next.js", "TypeScript", "Edge", "GSAP", "PostgreSQL"],
    bullets: [
      "Shipped a one‑page portfolio with interactive micro‑interactions.",
      "Set up edge SSR pipelines for fast TTFB.",
      "Created a scroll progress system with shimmer.",
      "Refactored UI to shadcn patterns.",
      "Improved a11y and reduced motion support.",
    ],
  },
  {
    company: "Nimbus Labs",
    role: "Senior Engineer",
    period: "2021 — 2024",
    summary: "Led the migration to a modern React/edge stack and improved time-to-first-insight by 40%.",
    stack: ["React", "Node.js", "Vercel", "ClickHouse"],
    bullets: [
      "Architected a unified app shell with streaming SSR.",
      "Cut bundle size by 28% via code‑split and compaction.",
      "Built motion guidelines and component tokens.",
      "Instrumented telemetry for product+sales alignment.",
      "Mentored a team of 4 engineers.",
    ],
  },
  {
    company: "Quanta",
    role: "Full‑stack Engineer",
    period: "2019 — 2021",
    summary: "Built realtime analytics features, unifying product and sales visibility.",
    stack: ["GraphQL", "WebSockets", "Redis"],
    bullets: [
      "Implemented live dashboards with WebSockets.",
      "Reduced p95 latencies by 35% through caching.",
      "Owned GraphQL schema evolution.",
      "Delivered data exports and alerting.",
      "Collaborated across PM and design for outcomes.",
    ],
  },
]

export function Experiences() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const cards = ref.current.querySelectorAll(".xp-card")
    gsap.set(cards, { y: 30, opacity: 0 })
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
  }, [])

  return (
    <section id="experiences" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24" ref={ref}>
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold tracking-tight">Experiences</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((xp) => (
            <article key={xp.company} className="xp-card rounded-2xl border bg-card text-card-foreground p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold tracking-tight">{xp.role}</h3>
                <span className="text-xs text-muted-foreground">{xp.period}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-3">{xp.company}</div>
              <p className="text-sm leading-relaxed mb-4 text-muted-foreground">{xp.summary}</p>
              <ul className="mb-4 space-y-1.5 text-sm text-muted-foreground">
                {xp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-2 h-1 w-3 rounded-full bg-primary/70" /> <span>{b}</span></li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {xp.stack.map((s) => (
                  <span key={s} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
