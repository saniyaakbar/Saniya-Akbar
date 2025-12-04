// components/ui/navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // optional, replace with simple SVGs if lucide not installed

export default function Navbar() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/prd', label: 'PRD' },
    { href: '/case-study-1', label: 'Case Study' },
    { href: '/case-study-2', label: 'File Upload' },
    { href: '/experiment', label: 'Experiment' },
    { href: '/contact', label: 'Contact' },
    { href: '/Saniya_Akbar.pdf', label: 'Download Resume' },
  ]

  return (
    <header className="w-full px-3.5 bg-[#0f0f0f] text-gray-100 font-sans">
      <div className="container flex items-center justify-between py-4">
        {/* Left: name */}
        <div className="flex flex-col">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:text-slate-900">
            Saniya Akbar
          </Link>
          <span className="text-xs text-slate-500">Product-Focused Software Developer</span>
        </div>
        
        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  `relative transition-colors ${active ? 'text-sky-600' : 'text-slate-600 hover:text-sky-600'}` +
                  ' px-1'
                }
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
                {/* subtle underline on active */}
                {active ? (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-sky-600 rounded" />
                ) : null}
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-slate-100 shadow-sm ${open ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-1">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${active ? 'text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          })}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
