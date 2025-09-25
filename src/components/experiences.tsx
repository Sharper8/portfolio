"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
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
    company: "Dassault Systèmes (EMEA HQ)",
    role: "Disaster Recovery Plan Engineer, Worldwide — Apprentice",
    period: "Sep 2023 — Present",
    summary:
      "Coordinated global DR exercises and tooling to strengthen operational resilience across diverse architectures.",
    stack: ["DR Orchestration", "Python", "KPIs/Dashboards", "Encryption", "BIA"],
    bullets: [
      "Led end‑to‑end DR exercises and cross‑functional workshops to ensure compliant, efficient global processes.",
      "Implemented a DR testing orchestration framework, improving test coverage by ~25% across HA and A/P models.",
      "Owned lifecycle of an internal BIA app; refined algorithm with Python to assess 500+ applications.",
      "Rolled out automated, encrypted documentation archiving with third‑party stakeholders.",
      "Built dashboards and KPIs offering real‑time visibility on DR readiness to leadership teams.",
    ],
  },
  {
    company: "Dassault Systèmes (NA HQ)",
    role: "Business Process Analyst & IT Support Ops — Summer Intern",
    period: "Jun 2024 — Aug 2024",
    summary:
      "Optimized device lifecycle workflows, audits, and support operations with strong security alignment.",
    stack: ["Process Optimization", "Asset Mgmt", "Security Audits", "Dashboards"],
    bullets: [
      "Improved corporate phone lifecycle processing time by 30% while ensuring cybersecurity compliance.",
      "Managed deployment and decommissioning projects from initiation to final recycling.",
      "Resolved complex outage issues; maintained high customer satisfaction with advanced IT support.",
      "Ran regular IT asset audits; surfaced risks via custom dashboards and KPIs.",
      "Drove adherence to security policies across inventory and operations.",
    ],
  },
  {
    company: "Logteam INTM",
    role: "Business Developer",
    period: "Jan 2023 — Jun 2023",
    summary:
      "Built pipeline and internal CRM to accelerate outreach for cybersecurity/AI/data/cloud services.",
    stack: ["CRM", "Prospecting", "Analytics"],
    bullets: [
      "Generated 10+ opportunities with CAC40 clients via targeted outreach.",
      "Designed and delivered a custom CRM for ~5,000 prospects to streamline collaboration.",
      "Performed needs analysis on cybersecurity, AI, and data/cloud projects to align experts with requirements.",
      "Established reproducible workflows for data hygiene and knowledge sharing.",
      "Partnered cross‑functionally to convert technical capability into commercial outcomes.",
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
          {/* Plus card to complete the grid and invite opportunities */}
          <Link href="#contact" aria-label="Open to cutting-edge Computer Science opportunities" className="xp-card group rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-sm hover:shadow-md transition-all hover:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                <span className="text-xl leading-none">+</span>
              </div>
              <span className="text-xs text-emerald-300/80">Let’s talk</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-emerald-300">Open to cutting-edge work</h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-200/90">
              Big Data, ML/AI, Cybersecurity, Hardware, and more. I’m excited to join ambitious teams and projects.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-200/95">
              Contact me <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
