"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

const keywords: string[] = [
  "Cybersecurity", "cloud security", "networking fundamentals", "Recovery planning", "Risk analysis", "TCP/IP",
  "PYTHON", "C", "C++", "HTML / CSS / PHP / SQL", "OSI model", "Cloud Infrastructures", "Project Management", "ML/AI",
  "OSI (TCP, IP, UDP)", "VPN", "OSPF", "SSL/TLS", "Cisco Packet tracer", "GNS3",
  "Scripting : Bash, PowerShell, Perl", "Linux / Unix / Windows", "Oracle VM / QEMU KVM", "Git / Github / Gitlab",
  "OWASP Top 10", "Wireshark", "Database administration", "Website administration (OVH)", "AWS", "Firewalls",
  "CIA Triad", "Virtual machines (Virtual Box / VMware)", "scripting", "open source", "FOSS", "SIEM",
]

function Row({ items, reverse = false, idx = 0 }: { items: string[]; reverse?: boolean; idx?: number }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={
          "flex w-max gap-4 py-4 " +
          (idx === 0 ? "animate-[marqueeA_26s_linear_infinite]" : "animate-[marqueeB_32s_linear_infinite]") +
          (reverse ? " [animation-direction:reverse]" : "")
        }
      >
        {[...items, ...items].map((label, i) => (
          <span key={i} className="rounded-full border bg-card/70 backdrop-blur px-4 py-2 text-sm sm:text-base text-muted-foreground">
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
        stagger: 0.01,
        scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      }
    )
  }, [])

  // Split keywords into two rows
  const mid = Math.ceil(keywords.length / 2)
  const rowA = keywords.slice(0, mid)
  const rowB = keywords.slice(mid)

  return (
    <section id="skills" className="w-full">
      {/* full-bleed wrapper to span horizontally */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-y" ref={ref}>
        <div className="space-y-1">
          <Row items={rowA} idx={0} />
          <Row items={rowB} idx={1} reverse />
        </div>
      </div>
      <style jsx global>{`
        @keyframes marqueeA { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeB { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}
