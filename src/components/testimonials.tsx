"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Testimonial = {
  name: string
  company: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  { name: "Ava Turner", company: "Nimbus Labs", quote: "OxY-AI helped us uncover conversion leaks we didn't know existed.", avatar: "/avatars/ava.png" },
  { name: "Liam Chen", company: "Quanta", quote: "A new level of analytics clarity. It's like x-ray vision for funnels.", avatar: "/avatars/liam.png" },
  { name: "Sofia Martinez", company: "Ferro", quote: "We ship faster because we decide faster. Insights are instant.", avatar: "/avatars/sofia.png" },
  { name: "Noah Patel", company: "Helio", quote: "Sales and product finally speak the same language.", avatar: "/avatars/noah.png" },
  { name: "Maya Rossi", company: "Arclight", quote: "Board-ready dashboards without any prep.", avatar: "/avatars/maya.png" },
]

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={
          "flex w-max gap-6 py-3 animate-[marquee_40s_linear_infinite] " +
          (reverse ? "[animation-direction:reverse]" : "")
        }
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <article
            key={i}
            className="testimonial-card min-w-[320px] max-w-sm rounded-xl border bg-card text-card-foreground p-5 shadow-sm hover:shadow-md transition-shadow will-change-transform"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
                <Image src={t.avatar} alt={t.name} width={40} height={40} />
              </div>
              <div className="leading-tight">
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">“{t.quote}”</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll(".testimonial-card")
    gsap.set(cards, { y: 100, opacity: 0 })

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: { each: 0.06, from: "random" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 60%",
        once: true,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="space-y-6">
          <Row />
          <Row reverse />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}
