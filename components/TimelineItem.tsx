"use client"

import { useEffect, useRef, useState } from 'react'

type Props = {
  date: string
  title: string
  location?: string
  variant?: 'education' | 'experience' | 'certificate'
  children?: React.ReactNode
}

export default function TimelineItem({ date, title, location, variant = 'experience', children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Guard for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            try {
              obs.unobserve(entry.target)
            } catch (e) {
              // ignore if unobserve fails
            }
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const baseDotColor =
    variant === 'education' ? 'bg-sky-500' : variant === 'certificate' ? 'bg-emerald-400' : 'bg-indigo-400'

  return (
    <div
      ref={ref}
      className={`mb-8 relative transform transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <span
        className={`absolute -left-0.5 top-1 w-3 h-3 rounded-full ${baseDotColor} border-2 border-white shadow flex items-center justify-center`}
        aria-hidden="true"
      >
        {variant === 'education' && (
          <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 7v10" />
            <path d="M22 7v10" />
          </svg>
        )}
        {variant === 'experience' && (
          <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M2 11h20" />
          </svg>
        )}
        {variant === 'certificate' && (
          <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v6" />
            <path d="M4 8h16" />
            <path d="M20 22l-8-4-8 4" />
            <path d="M4 8v10" />
            <path d="M20 8v10" />
          </svg>
        )}
      </span>

      <div className="ml-4">
        <div className="text-sm text-slate-500">{date}</div>
        <h3 className="font-semibold">{title}</h3>
        {location && <div className="text-slate-600">{location}</div>}
        {children && <div className="mt-2 text-slate-600">{children}</div>}
      </div>
    </div>
  )
}
