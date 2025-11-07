import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

function SupabaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z" fill="currentColor" />
    </svg>
  )
}

function PostgresIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="5" width="18" height="3" rx="1" fill="currentColor" />
      <rect x="3" y="10" width="18" height="3" rx="1" fill="currentColor" />
      <rect x="3" y="15" width="18" height="3" rx="1" fill="currentColor" />
    </svg>
  )
}

export default function TechBadge({ children, className = '' }: Props) {
  const label = typeof children === 'string' ? children : String(children)
  const key = label.toLowerCase()

  let bgClass = 'bg-slate-100 text-slate-800'
  let icon: React.ReactNode = null

  if (key.includes('supabase')) {
    bgClass = 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
    icon = <SupabaseIcon />
  } else if (key.includes('postgres') || key.includes('postgresql') || key.includes('postgresql') || key.includes('postgres')) {
    bgClass = 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white'
    icon = <PostgresIcon />
  } else if (key.includes('sql') || key.includes('rls')) {
    bgClass = 'bg-sky-50 text-sky-700'
  }

  return (
    <span className={`inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full font-medium ${bgClass} ${className}`}>
      {icon && <span className="inline-flex items-center" style={{ width: 14, height: 14 }}>{icon}</span>}
      <span>{label}</span>
    </span>
  )
}
