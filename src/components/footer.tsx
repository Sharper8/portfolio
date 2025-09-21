import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = ["Product", "Solutions", "Pricing", "Resources", "Company"]

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-primary" />
            <span className="font-semibold tracking-tight">OxY-AI</span>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {footerLinks.map((label) => (
              <Link key={label} href="#" className="hover:text-foreground transition-colors">{label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="#" aria-label="Twitter" className="hover:text-foreground transition-colors"><Twitter size={18} /></Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin size={18} /></Link>
            <Link href="#" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github size={18} /></Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} OxY-AI. All rights reserved.</div>
      </div>
    </footer>
  )
}
