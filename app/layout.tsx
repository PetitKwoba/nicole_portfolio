import '../styles/globals.css'
import React from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = {
  title: 'Nicole — Portfolio',
  description: 'Sleek modern portfolio built with Next.js + TypeScript + Tailwind'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <div className="min-h-screen max-w-5xl mx-auto px-6">
          <SiteHeader />
          <div className="mt-6">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
