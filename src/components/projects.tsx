"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

type Project = {
  title: string
  blurb: string
  tags: string[]
  href?: string
}

const projects: Project[] = [
  {
    title: "Owpal.com",
    blurb: "Deploying on-premise, open-source AI systems to ensure enterprise data sovereignty. Engineered automated workflows connecting internal tools (LMS, Slack) directly to local Agentic infrastructure.",
    tags: ["AI Systems", "Agentic IT", "Workflows", "Open Source"],
    href: "https://owpal.com",
  },
  {
    title: "Swapaws.app",
    blurb: "Built a full-stack P2P exchange (React, TypeScript, PostgreSQL, MongoDB). Developed an NLP pipeline that parses unstructured natural language buy/sell inputs into structured databases.",
    tags: ["React", "TypeScript", "NLP", "PostgreSQL", "MongoDB"],
    href: "https://swapaws.app",
  },
  {
    title: "Devprocore.com",
    blurb: "Designed and delivered an embedded, offline Speech-to-Text (STT) and Text-to-Speech (TTS) mobile app prototype for an aeronautics startup.",
    tags: ["STT/TTS", "Embedded Mobile", "React Native", "Consulting"],
    href: "https://devprocore.com",
  },
  {
    title: "AI Cyber Content Pipeline",
    blurb: "Designed and engineered an AI-powered cyber content generation pipeline leveraging semantic processing and prompt orchestration; defended before BNP Paribas stakeholders.",
    tags: ["AI/ML", "Semantic Processing", "Prompt Orchestration"],
    href: "#",
  },
  {
    title: "Cryptography — Prim's MST",
    blurb: "Implemented a symmetric encryption scheme leveraging graph theory and the Prim’s Spanning Tree algorithm.",
    tags: ["Cryptography", "Algorithms", "C/C++"],
    href: "#",
  },
  {
    title: "ML/AI Threat Detection",
    blurb: "Developed a Machine Learning/AI threat detection system in network traffic using scikit-learn with 98% accuracy.",
    tags: ["Scikit-Learn", "Cybersecurity", "Python", "ML/AI"],
    href: "#",
  },
  {
    title: "Homelab & SIEM/XDR",
    blurb: "Self-hosted environment featuring a personal portfolio, blog, SIEM, XDR with heuristic detection, and a secure VPN.",
    tags: ["Linux", "SIEM", "XDR", "Networking", "VPN"],
    href: "#",
  },
]

export function Projects() {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const GITHUB_URL = "https://github.com/Sharper8"

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll(".proj-card")
    gsap.set(cards, { y: 30, opacity: 0 })
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true },
    })
  }, [])

  return (
    <section id="projects" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>

        {/* Creative responsive grid (no carousel) */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {projects.map((p, i) => {
            // Creative layout: alternate sizes for rhythm
            const cls =
              i % 5 === 0
                ? "lg:col-span-7"
                : i % 5 === 1
                ? "lg:col-span-5"
                : i % 5 === 2
                ? "lg:col-span-6"
                : i % 5 === 3
                ? "lg:col-span-6"
                : "lg:col-span-12"
            const isExternalLink = p.href && p.href !== "#"
            return (
              <Link
                key={p.title}
                href={p.href || GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={isExternalLink ? `Visit ${p.title}` : `Open ${p.title} on GitHub`}
                aria-label={isExternalLink ? `Visit ${p.title} (opens in a new tab)` : `Open ${p.title} on GitHub (opens in a new tab)`}
                className={`proj-card group rounded-2xl border bg-card p-6 shadow-sm transition-transform duration-300 will-change-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${cls}`}
                style={{ transform: "translateZ(0)" }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{p.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        .proj-card:hover { transform: translateY(-4px) rotateZ(-0.25deg); }
        @media (prefers-reduced-motion: reduce) {
          .proj-card { transform: none !important; }
        }
      `}</style>
    </section>
  )
}
