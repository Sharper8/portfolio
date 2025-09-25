"use client"

import gsapBase from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  try {
    // Register once in the browser
    // @ts-ignore - internal API guard for double registration
    const already = (gsapBase as any).plugins?.scrollTrigger || (gsapBase as any).core?.globals?.().ScrollTrigger
    if (!already) {
      gsapBase.registerPlugin(ScrollTrigger)
    }
  } catch {
    // no-op
  }
}

export const gsap = gsapBase
export { ScrollTrigger }
