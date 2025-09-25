"use client"

import Link from "next/link"
import Image from "next/image"
import { buttonClasses } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import logoSrc from "../../logo_BlackHole.png"

const sections = [
  { id: "about", label: "About" },
  { id: "experiences", label: "Experiences" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActive(id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px", // focus mid viewport
        threshold: [0, 0.2, 0.5, 1],
      }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 shadow-[0_6px_30px_-20px_hsl(0_0%_0%/0.6)]">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <Image src={logoSrc} alt="OxY logo" width={28} height={28} className="rounded-md" priority />
              <Link href="#about" className="font-semibold tracking-tight [font-family:var(--font-display)]">
                OxY
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {sections.map(({ id, label }) => {
                const isActive = active === id
                return (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className={cn(
                      "relative transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                      "after:absolute after:left-0 after:-bottom-1 after:h-px after:transition-all",
                      isActive
                        ? "after:w-full after:bg-foreground"
                        : "after:w-0 after:bg-foreground hover:after:w-full"
                    )}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link href="https://blog.devprocore.com" className={buttonClasses({ variant: "secondary", size: "md" })} target="_blank" rel="noopener noreferrer">
                Blog
              </Link>
              <Link href="#contact" className={buttonClasses({ variant: "primary", size: "md", className: "text-neutral-900 dark:text-neutral-900 font-semibold tracking-wide" })}>
                Contact
              </Link>
            </div>

            <button aria-label="Toggle menu" className="md:hidden p-2 text-muted-foreground" onClick={() => setOpen((v) => !v)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile sheet */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <nav className="flex flex-col gap-4 py-4">
                {sections.map(({ id, label }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3 pb-2">
                <Link href="https://blog.devprocore.com" className={buttonClasses({ variant: "secondary", size: "md", className: "flex-1" })} onClick={() => setOpen(false)} target="_blank" rel="noopener noreferrer">
                  Blog
                </Link>
                <Link href="#contact" className={buttonClasses({ variant: "primary", size: "md", className: "flex-1" })} onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
