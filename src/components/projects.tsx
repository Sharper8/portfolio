"use client"

import Link from "next/link"

type Project = {
  title: string
  blurb: string
  tags: string[]
  href?: string
}

const projects: Project[] = [
  { title: "Telemetry Minimal", blurb: "A lightweight edge-first analytics toy project.", tags: ["Edge", "Next.js"], href: "#" },
  { title: "Visual GSAP", blurb: "Micro-interactions and motion study components.", tags: ["GSAP", "UI"], href: "#" },
  { title: "Oxy Cards", blurb: "Card system with composable tokens.", tags: ["shadcn/ui", "Design"], href: "#" },
]

export function Projects() {
  return (
    <section id="projects" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href || "#"}
              className="group min-w-[300px] max-w-[360px] snap-start rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/40"
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
      </div>
    </section>
  )
}
