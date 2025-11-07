"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  thumbClassName?: string
  large?: boolean
}

export default function Avatar({ src, alt, thumbClassName = '', large = false }: Props) {
  const [open, setOpen] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)

  // Keyboard accessibility: focus management and Escape to close
  useEffect(() => {
    if (!open) return

    // Focus the close button when dialog opens
    const timer = setTimeout(() => closeBtnRef.current?.focus(), 0)

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
      }

      // Simple tab trap: if there are no focusable elements besides the close button,
      // keep focus on the close button.
      if (e.key === 'Tab') {
        const active = document.activeElement
        const close = closeBtnRef.current
        if (!close) return
        // If focus would move away, keep it on the close button
        if (active !== close) {
          e.preventDefault()
          close.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open headshot"
        aria-haspopup="dialog"
        className={thumbClassName}
      >
        <Image
          src={src}
          alt={alt}
          width={large ? 320 : 160}
          height={large ? 320 : 160}
          className="rounded-full object-cover"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={900}
              height={900}
              className="rounded shadow-lg max-h-[90vh] w-auto h-auto"
            />
            <button
              ref={closeBtnRef}
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-black/50 text-white rounded px-2 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
