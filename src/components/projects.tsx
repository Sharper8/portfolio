"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)

  // Center a given card by index
  const scrollToIndex = (i: number) => {
    const el = viewportRef.current
    if (!el) return
    const children = Array.from(el.querySelectorAll<HTMLElement>("[data-idx]"))
    const target = children[i]
    if (!target) return
    const vRect = el.getBoundingClientRect()
    const tRect = target.getBoundingClientRect()
    const delta = (tRect.left + tRect.width / 2) - (vRect.left + vRect.width / 2)
    el.scrollBy({ left: delta, behavior: "smooth" })
  }

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const vRect = el.getBoundingClientRect()
          const vCenter = vRect.left + vRect.width / 2
          let closest = Infinity
          let closestIdx = 0
          const children = Array.from(el.querySelectorAll<HTMLElement>("[data-idx]"))
          for (const child of children) {
            const cRect = child.getBoundingClientRect()
            const cCenter = cRect.left + cRect.width / 2
            const distPx = cCenter - vCenter
            const dist = Math.min(1, Math.abs(distPx) / (vRect.width / 2))
            child.style.setProperty("--dist", String(dist))
            if (Math.abs(distPx) < Math.abs(closest)) {
              closest = distPx
              closestIdx = Number(child.dataset.idx)
            }
          }
          setActive(closestIdx)
          ticking = false
        })
        ticking = true
      }
    }

    const onScrollEnd = () => {
      // Snap to the active card after user stops scrolling briefly
      clearTimeout((onScrollEnd as any)._t)
      ;(onScrollEnd as any)._t = setTimeout(() => scrollToIndex(active), 80)
    }

    const ro = new ResizeObserver(onScroll)
    ro.observe(el)
    el.addEventListener("scroll", onScroll, { passive: true })
    el.addEventListener("scroll", onScrollEnd, { passive: true })
    // initial center first card
    requestAnimationFrame(() => {
      onScroll()
      scrollToIndex(0)
    })
    return () => {
      ro.disconnect()
      el.removeEventListener("scroll", onScroll)
      el.removeEventListener("scroll", onScrollEnd)
    }
  }, [active])

  // Keyboard support
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    el.addEventListener("keydown", onKey)
    return () => el.removeEventListener("keydown", onKey)
  }, [active])

  const prev = () => scrollToIndex(Math.max(0, active - 1))
  const next = () => scrollToIndex(Math.min(projects.length - 1, active + 1))

  return (
    <section id="projects" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>

  <div className="relative">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Viewport */}
          <div
            ref={viewportRef}
            className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scroll-smooth [overscroll-behavior-x:none] focus:outline-none"
            tabIndex={0}
            aria-label="Projects carousel"
          >
            {projects.map((p, i) => (
              <Link
                data-idx={i}
                key={p.title}
                href={p.href || "#"}
                className={
                  "group snap-center rounded-2xl border bg-card p-6 shadow-sm transition-[transform,opacity,box-shadow] will-change-transform " +
                  "min-w-[85%] sm:min-w-[70%] md:min-w-[60%] lg:min-w-[46%] xl:min-w-[38%]"
                }
                style={{
                  // gentle scale and fade only for clarity
                  transform: "translateZ(0) scale(calc(1 - (var(--dist) * 0.08)))",
                  opacity: "calc(1 - (var(--dist) * 0.25))",
                }}
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
            ))}
          </div>

          {/* Controls */}
          <button
            aria-label="Previous project"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full border bg-card/70 backdrop-blur px-3 py-2 text-sm"
          >
            ←
          </button>
          <button
            aria-label="Next project"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full border bg-card/70 backdrop-blur px-3 py-2 text-sm"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={
                "h-2.5 w-2.5 rounded-full transition-colors " +
                (i === active ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50")
              }
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          [data-idx] { transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  )
}
