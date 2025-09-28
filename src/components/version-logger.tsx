"use client"

import { useEffect } from "react"

// Logs the current deployed version once on mount in the browser console.
// Adjust VERSION constant per release (or wire to env/commit hash in CI).
const VERSION = "v1.0"

export function VersionLogger() {
  useEffect(() => {
    // Stylish console label (can be tweaked)
    // Using a small guard to avoid duplicate logs in React strict mode dev double-invoke
    if ((window as any).__versionLogged) return
    ;(window as any).__versionLogged = true
    // eslint-disable-next-line no-console
    console.log(`%c${VERSION}`, "color:#66e2ff;font-weight:600;font-size:14px;padding:2px 4px;border:1px solid #66e2ff;border-radius:4px;")
  }, [])
  return null
}
