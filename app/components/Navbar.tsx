'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false) // <-- fixed: include `open`

  const links = [
    { href: '/', label: 'Home' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
    { href: '/resume', label: 'Resume' },
  ]

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/'
    }
    return pathname === href
  }

  return (
    <header className="w-full bg-[#050505] text-white/90 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* left: brand */}
          <div className="flex items-start gap-3">
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-semibold text-emerald-300 hover:text-emerald-200">
                Saniya Akbar
              </span>
              <span className="text-xs text-gray-400">Product-focused Software Developer</span>
            </Link>
          </div>

          {/* center: nav for desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const active = isActive(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-sm font-medium px-1 py-1 transition-colors ${
                    active ? 'text-emerald-300' : 'text-gray-300 hover:text-emerald-300'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-emerald-300 rounded" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* right: mobile toggle */}
          {/* NOTE: md:hidden -> visible on small screens, hidden on md+ */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-black/80 border-t border-white/6`}>
        <div className="px-4 pt-3 pb-4 space-y-1">
          {links.map((l) => {
            const active = isActive(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition ${
                  active ? 'text-emerald-300' : 'text-gray-300 hover:bg-white/4 hover:text-emerald-300'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          })}

          <div className="mt-2 pt-2 border-t border-white/6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/4 hover:text-emerald-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
