"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"

export function Contact() {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [copied, setCopied] = useState<null | "email">(null)
  const email = "alias.vantage458@passinbox.com"

  // Pointer-follow glow
  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - r.left}px`)
      el.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  const copy = async (text: string, key: "email") => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 1500)
    } catch {}
  }

  // Entrance animation
  useEffect(() => {
    if (!panelRef.current) return
    const blocks = panelRef.current.querySelectorAll(".contact-block")
    gsap.set(blocks, { y: 20, opacity: 0 })
    gsap.to(blocks, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: { trigger: panelRef.current, start: "top 85%", once: true },
    })
  }, [])

  return (
    <section id="contact" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-2xl border bg-card/70 backdrop-blur-md p-8 sm:p-10"
          style={{
            background:
              "radial-gradient(240px 180px at var(--mx,50%) var(--my,50%), color-mix(in oklch, var(--primary) 14%, transparent 86%) 0%, transparent 70%)",
          }}
        >
          {/* Decorative beams */}
          <div className="pointer-events-none absolute -inset-24 -z-10 opacity-[0.15] [background:conic-gradient(from_140deg_at_50%_50%,_var(--primary),_transparent_40%_80%,_var(--primary))] blur-2xl" />

          <div className="flex flex-col gap-6">
            <div className="contact-block">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Let’s talk</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
                Build boldly. Ship faster.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                I’m open to collaborations around AI, cybersecurity, and resilient infrastructure. Prefer email? I answer within ~24h.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="contact-block flex flex-wrap items-center gap-3">
              <Link
                href={`mailto:${email}?subject=${encodeURIComponent("Hello from your portfolio")}`}
                className="group shine inline-flex items-center gap-2 rounded-xl border bg-background px-5 py-3 text-sm font-medium shadow-sm transition-colors hover:border-primary/50 hover:bg-accent relative overflow-hidden"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklch,var(--primary)_18%,transparent)]" />
                Email me
              </Link>

              <button
                type="button"
                onClick={() => copy(email, "email")}
                className="shine inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium hover:border-primary/40 relative overflow-hidden"
                aria-live="polite"
              >
                {copied === "email" ? "Copied ✓" : "Copy email"}
              </button>

              <Link href="https://linkedin.com/in/syl-bh/" target="_blank" rel="noopener noreferrer" className="shine inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium hover:border-primary/40 relative overflow-hidden">
                {/* LinkedIn */}
                <span className="i">in</span> LinkedIn
              </Link>
              <Link href="https://github.com/Sharper8" target="_blank" rel="noopener noreferrer" className="shine inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium hover:border-primary/40 relative overflow-hidden">
                {/* GitHub */}
                <span>🐙</span> GitHub
              </Link>
            </div>
          </div>

          {/* Bottom glossy edge */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 [mask-image:linear-gradient(to_bottom,transparent,black)] bg-gradient-to-b from-transparent via-white/5 to-white/10" />
        </div>
      </div>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          #contact [style*="radial-gradient"] { background: none !important; }
        }
        .shine::before {
          content: "";
          position: absolute;
          inset: -1px;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 0.6s ease;
          pointer-events: none;
        }
        .shine:hover::before { transform: translateX(120%); }
      `}</style>
    </section>
  )
}
