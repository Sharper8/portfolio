"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const skillRows: string[][] = [
  ["Next.js", "React", "TypeScript", "Node.js", "Edge", "PostgreSQL"],
  ["GSAP", "Framer Motion", "Tailwind", "shadcn/ui", "Vite", "Vitest"],
]

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className={"flex w-max gap-3 py-2 animate-[marquee_30s_linear_infinite] " + (reverse ? "[animation-direction:reverse]" : "")}
      >
        {[...items, ...items].map((label, i) => (
          <span key={i} className="rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current.querySelectorAll("span"),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        stagger: 0.02,
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      }
    )
  }, [])
  return (
    <section id="skills" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24" ref={ref}>
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight">Skills</h2>
        <div className="space-y-2">
          <Row items={skillRows[0]} />
          <Row items={skillRows[1]} reverse />
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}
