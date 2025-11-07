"use client"
import { useEffect, useRef } from 'react'

export default function SiteFooter() {
  const mailRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    const user = 'nicolerozzie9'
    const domain = 'gmail.com'
    const mail = `${user}@${domain}`
    if (mailRef.current) {
      mailRef.current.href = `mailto:${mail}`
      mailRef.current.textContent = mail
    }
  }, [])

  return (
    <footer className="mt-12 py-6 border-t pt-6 text-sm text-slate-600">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-6">
        <div>© {new Date().getFullYear()} Nicole Rozzie</div>
        <div className="flex items-center gap-4">
          <a ref={mailRef} className="underline" />
          <a href="https://github.com/rozzienicole8" target="_blank" rel="noreferrer" className="underline">GitHub</a>
          <a href="https://www.linkedin.com/in/rozzie-nicole-168770234/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
