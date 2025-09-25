"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef } from "react"
import { buttonClasses } from "@/components/ui/button"
import { gsap } from "@/lib/gsap"

export function Hero() {
  const unicornRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  // Split headline into characters for animation
  const leftText = useMemo(() => Array.from("BUILDING QUIETLY."), [])
  const rightText = useMemo(() => Array.from(" SHIPPING BOLDLY."), [])

  // Load UnicornStudio only once (prevents duplicate canvases)
  useEffect(() => {
    if (typeof window === "undefined") return
    const w: any = window
    if (w.UnicornStudio?.isInitialized) return

    const script = document.createElement("script")
    // Use the previously proven version; update if you prefer v1.4.31
    script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js"
    script.async = true
    script.onload = () => {
      if (!w.UnicornStudio?.isInitialized) {
        try { w.UnicornStudio?.init?.() } catch {}
        w.UnicornStudio = { ...w.UnicornStudio, isInitialized: true }
      }
    }
    ;(document.head || document.body).appendChild(script)
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
      {/* Unicorn Studio background layer (behind overlays) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div ref={unicornRef} className="absolute inset-0">
          <div data-us-project="sm6nv8sCoub9ngXWsBqU" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      {/* Top-to-bottom tone overlay: black → theme grey (smooth transition to next section) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/50 to-[var(--background)]" />

      {/* Bottom frosted blur gradient: no blur top/middle, strong blur lower part */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 z-20 [backdrop-filter:blur(22px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] bg-gradient-to-b from-transparent to-[color-mix(in_oklch,var(--background)_80%,transparent)]"
      />

  <div className="absolute left-0 right-0 bottom-0 z-30 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="flex flex-col items-start gap-6">
          <h1 ref={headingRef} className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] max-w-4xl">
            {leftText.map((c, i) => (
              <span key={"l-" + i} data-char>{c}</span>
            ))}
            {rightText.map((c, i) => (
              <span key={"r-" + i} data-char className="text-primary">{c}</span>
            ))}
          </h1>

          <Link
            href="#projects"
            className={buttonClasses({
              variant: "ghost",
              size: "lg",
              className: "font-semibold tracking-wide border border-transparent hover:border-border hover:bg-foreground/10",
            })}
          >
            Explore my work
          </Link>
        </div>
      </div>
    </section>
  )
}
