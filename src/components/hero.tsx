"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef } from "react"
import { buttonClasses } from "@/components/ui/button"
import gsap from "gsap"

export function Hero() {
  const unicornRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  // Split headline into characters for animation
  const leftText = useMemo(() => Array.from("INTELLIGENT ANALYTICS,"), [])
  const rightText = useMemo(() => Array.from(" FINALLY."), [])

  useEffect(() => {
    if (typeof window === "undefined") return
    if ((window as any).UnicornStudio?.isInitialized) return

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js"
    script.async = true
    script.onload = () => {
      if (!(window as any).UnicornStudio?.isInitialized) {
        ;(window as any).UnicornStudio?.init?.()
        ;(window as any).UnicornStudio = { ...(window as any).UnicornStudio, isInitialized: true }
      }
    }
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (!headingRef.current) return
    const chars = headingRef.current.querySelectorAll("span[data-char]")
    gsap.set(chars, { y: 24, opacity: 0 })
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.025,
      delay: 0.15,
    })
  }, [])

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Unicorn Studio background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div ref={unicornRef} className="absolute inset-0">
          <div
            data-us-project="sm6nv8sCoub9ngXWsBqU"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Subtle gradient to ensure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />

      <div className="absolute left-0 right-0 bottom-0 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="flex flex-col items-start gap-6">
          <h1 ref={headingRef} className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] max-w-4xl">
            {leftText.map((c, i) => (
              <span key={"l-" + i} data-char>{c}</span>
            ))}
            {rightText.map((c, i) => (
              <span key={"r-" + i} data-char className="text-primary">{c}</span>
            ))}
          </h1>

          <Link href="#testimonials" className={buttonClasses({ variant: "primary", size: "lg", className: "text-secondary-foreground" })}>
            Let’s go
          </Link>
        </div>
      </div>

      {/* Accent blur element behind content */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>
    </section>
  )
}
