"use client"

import Link from "next/link"
import { buttonClasses } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = ["Product", "Solutions", "Pricing", "Resources", "Company"]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 shadow-[0_6px_30px_-20px_hsl(0_0%_0%/0.6)]">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-primary" />
              <Link href="/" className="font-semibold tracking-tight">
                OxY-AI
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {links.map((label) => (
                <Link key={label} href="#" className={cn("relative text-muted-foreground hover:text-foreground transition-colors", "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full")}>{label}</Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link href="#" className={buttonClasses({ variant: "secondary", size: "md" })}>
                Login
              </Link>
              <Link href="#" className={buttonClasses({ variant: "primary", size: "md" })}>
                Sign Up
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
                {links.map((label) => (
                  <Link key={label} href="#" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>{label}</Link>
                ))}
              </nav>
              <div className="flex items-center gap-3 pb-2">
                <Link href="#" className={buttonClasses({ variant: "secondary", size: "md", className: "flex-1" })} onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link href="#" className={buttonClasses({ variant: "primary", size: "md", className: "flex-1" })} onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
