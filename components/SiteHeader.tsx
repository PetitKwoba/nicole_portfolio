"use client"
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteHeader() {
  const mailRef = useRef<HTMLAnchorElement | null>(null)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // simple mailto obfuscation: build email at runtime
    const user = 'nicolerozzie9'
    const domain = 'gmail.com'
    const mail = `${user}@${domain}`
    if (mailRef.current) {
      mailRef.current.href = `mailto:${mail}`
      mailRef.current.textContent = mail
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: 'Nicole Rozzie',
    email: 'mailto:nicolerozzie9@gmail.com',
    sameAs: [
      'https://github.com/rozzienicole8',
      'https://www.linkedin.com/in/rozzie-nicole-168770234/'
    ]
  }

  const linkClass = (href: string) => {
    const active = pathname === href
    return `relative text-sm px-2 py-1 rounded transition-colors duration-200 ${active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:text-slate-900'}`
  }

  return (
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b ${isScrolled ? 'shadow-md' : 'shadow-none'} border-slate-200`}> 
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold">Nicole Rozzie</Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Primary Navigation">
          <Link href="/" className={linkClass('/')} aria-current={pathname === '/' ? 'page' : undefined}>
            <span className="relative">
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-400 transition-all duration-200 ${pathname === '/' ? 'w-full' : 'w-0'}`} />
            </span>
          </Link>
          <Link href="/about" className={linkClass('/about')} aria-current={pathname === '/about' ? 'page' : undefined}>
            <span className="relative">
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-400 transition-all duration-200 ${pathname === '/about' ? 'w-full' : 'w-0'}`} />
            </span>
          </Link>
          <Link href="/projects" className={linkClass('/projects')} aria-current={pathname === '/projects' ? 'page' : undefined}>
            <span className="relative">
              Projects
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-400 transition-all duration-200 ${pathname === '/projects' ? 'w-full' : 'w-0'}`} />
            </span>
          </Link>

          <a ref={mailRef} className="text-sm px-2 py-1 rounded text-slate-700 underline" />
          <a href="https://github.com/rozzienicole8" target="_blank" rel="noreferrer" className="text-sm px-2 py-1 rounded text-slate-700 underline">GitHub</a>
          <a href="https://www.linkedin.com/in/rozzie-nicole-168770234/" target="_blank" rel="noreferrer" className="text-sm px-2 py-1 rounded text-slate-700 underline">LinkedIn</a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center">
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((s) => !s)} className="p-2 rounded-md text-slate-700 hover:bg-slate-100">
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden transition-transform duration-200 origin-top ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t border-slate-100 bg-white`}>
        <div className="px-6 py-4 flex flex-col gap-2">
          <Link href="/" className="text-base text-slate-700" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="text-base text-slate-700" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" className="text-base text-slate-700" onClick={() => setOpen(false)}>Projects</Link>
          <a ref={mailRef} className="text-base text-slate-700 underline" />
          <a href="https://github.com/rozzienicole8" target="_blank" rel="noreferrer" className="text-base text-slate-700 underline">GitHub</a>
          <a href="https://www.linkedin.com/in/rozzie-nicole-168770234/" target="_blank" rel="noreferrer" className="text-base text-slate-700 underline">LinkedIn</a>
        </div>
      </div>
    </header>
  )
}
