"use client"

import { useEffect, useRef, useState } from 'react'

type Props = {
  title: string
  badges?: React.ReactNode
  children?: React.ReactNode
}

export default function ProjectCard({ title, badges, children }: Props) {
  const ref = useRef<HTMLLIElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          try {
            obs.unobserve(entry.target)
          } catch (e) {
            // ignore
          }
        }
      })
    }, { threshold: 0.08 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <li
      ref={ref}
      className={`p-4 border rounded-md transform transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h3 className="font-medium">{title}</h3>

      {badges && <div className="mt-2 flex items-center gap-2">{badges}</div>}

      <div className="text-slate-600 text-sm mt-1">{children}</div>
    </li>
  )
}
