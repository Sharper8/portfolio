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
    title: "Swapaws.fr",
    blurb: "A full-stack marketplace for exchanging products via trades.",
    tags: ["Full‑stack", "Next.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Homelab",
    blurb: "Self-hosted environment: portfolio, blog, SIEM, XDR with heuristic detection, VPN, and more.",
    tags: ["Linux", "SIEM", "XDR", "Networking"],
    href: "#",
  },
  {
    title: "Cryptography — Symmetric Scheme via Prim's MST",
    blurb: "Implemented a symmetric encryption scheme leveraging graph theory and Prim's spanning tree algorithm.",
    tags: ["Cryptography", "Algorithms", "C/C++"],
    href: "#",
  },
  {
    title: "Packet Detection — ML/AI",
    blurb: "Developed a threat detection system using ML/AI to identify and analyze network traffic.",
    tags: ["Networking", "ML/AI", "Python"],
    href: "#",
  },
  {
    title: "CI/CD Pipeline on Kubernetes",
    blurb: "Built and deployed a Jenkins + ArgoCD pipeline, hosted on a Kubernetes cluster.",
    tags: ["CI/CD", "Jenkins", "ArgoCD", "Kubernetes"],
    href: "#",
  },
]

export function Projects() {
  const gridRef = useRef<HTMLDivElement | null>(null)

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
            return (
              <Link
                key={p.title}
                href={p.href || "#"}
                className={`proj-card group rounded-2xl border bg-card p-6 shadow-sm transition-transform duration-300 will-change-transform ${cls}`}
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
