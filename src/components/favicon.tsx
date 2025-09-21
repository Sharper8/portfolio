"use client"

import { useEffect } from "react"
import logo from "../../logo_BlackHole.png"

export default function Favicon() {
  useEffect(() => {
    if (typeof document === "undefined") return
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }
    link.type = "image/png"
    link.href = (logo as unknown as { src: string }).src
  }, [])
  return null
}
