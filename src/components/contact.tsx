import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="text-sm text-muted-foreground mb-6">Reach out for collaborations, consulting, or to say hello.</p>
        <div className="flex gap-3">
          <Link href="mailto:hello@oxy.dev" className="rounded-md border px-4 py-2 text-sm hover:border-primary/40">Email</Link>
          <Link href="#" className="rounded-md border px-4 py-2 text-sm hover:border-primary/40">LinkedIn</Link>
          <Link href="#" className="rounded-md border px-4 py-2 text-sm hover:border-primary/40">GitHub</Link>
        </div>
      </div>
    </section>
  )
}
