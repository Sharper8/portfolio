"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { buttonClasses } from "@/components/ui/button"

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const tl = gsap.timeline({ paused: true })
    const heading = sectionRef.current.querySelector("h2")
    const sub = sectionRef.current.querySelector("p[data-sub]")
    const cta = sectionRef.current.querySelector("a[data-cta]")

    gsap.set([heading, sub, cta], { y: 24, opacity: 0 })

    tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .to(sub, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to(cta, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")

    const onScroll = () => {
      const rect = sectionRef.current!.getBoundingClientRect()
      const vh = window.innerHeight || 0
      if (rect.top < vh * 0.8) {
        tl.play()
        window.removeEventListener("scroll", onScroll)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="w-full border-t bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Ready to turn analytics into revenue?
        </h2>
        <p data-sub className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Join teams using OxY-AI to uncover opportunities, accelerate decisions, and ship with confidence.
        </p>
        <div className="mt-8">
          <Link
            data-cta
            href="#pricing"
            className={buttonClasses({ variant: "primary", size: "lg", className: "shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_var(--color-primary)]" })}
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  )
}
