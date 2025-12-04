// app/resume/page.tsx
"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"

function Ring({ pct = 80, size = 64, stroke = 8, color = "#34D399" }: { pct?: number; size?: number; stroke?: number; color?: string }) {
  const radius = (size - stroke) / 2
  const cx = size / 2
  const cy = size / 2
  const circumference = 2 * Math.PI * radius
  const dash = (pct / 100) * circumference
  const remainder = Math.max(0, circumference - dash)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
      <circle cx={cx} cy={cy} r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} fill="none" />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={`${dash} ${remainder}`}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: `stroke-dasharray 700ms cubic-bezier(.22,.9,.3,1)` }}
      />
    </svg>
  )
}

export default function ResumeIndex() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40)
    return () => clearTimeout(t)
  }, [])


  const cardBase =
    "relative w-full h-full bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 transform shadow-[0_0_18px_rgba(16,185,129,0.12)] hover:shadow-[0_0_44px_rgba(16,185,129,0.28)] hover:scale-[1.02]"

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <header className={`mb-10 transition-all ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-5xl font-serif font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
            Resumes
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Two focused resumes — one emphasising your hands-on frontend engineering and technical work, the other tailored to product
            management and cross-functional leadership. Pick a version to view role-specific highlights, projects and downloadable PDF.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Link href="/resume/developer" className={`${cardBase} group`} aria-label="Developer resume">
            <div className="flex flex-col items-center">
              <div className={`rounded-full w-44 h-44 md:w-56 md:h-56 flex items-center justify-center border-2 border-white/8 bg-white/3 mb-6`} style={{ backdropFilter: "blur(4px)" }}>
                <div>
                  <div className="text-2xl md:text-3xl font-semibold">Developer</div>
                  <div className="text-xs text-gray-300 mt-1">Frontend & full-stack resume</div>
                </div>
              </div>

              <div className="flex gap-6 items-center mb-4">
                <div className="flex flex-col items-center">
                  <Ring pct={92} size={64} stroke={8} color="#60A5FA" />
                  <div className="text-xs text-gray-300 mt-2">React / Next</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={88} size={64} stroke={8} color="#34D399" />
                  <div className="text-xs text-gray-300 mt-2">TypeScript</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={82} size={64} stroke={8} color="#A78BFA" />
                  <div className="text-xs text-gray-300 mt-2">Performance</div>
                </div>
              </div>

              <p className="text-gray-300 max-w-md">
                Practical engineering resume focusing on shipped features, technical ownership, architecture improvements and measurable
                impact. Contains links to projects, code samples and demo artifacts.
              </p>

              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-emerald-300 text-black rounded-full font-medium transition group-hover:bg-emerald-200">
                  Open Developer Resume →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/resume/pm" className={`${cardBase} group`} aria-label="Product management resume">
            <div className="flex flex-col items-center">
              <div className={`rounded-full w-44 h-44 md:w-56 md:h-56 flex items-center justify-center border-2 border-white/8 bg-white/3 mb-6`} style={{ backdropFilter: "blur(4px)" }}>
                <div>
                  <div className="text-2xl md:text-3xl font-semibold">Product</div>
                  <div className="text-xs text-gray-300 mt-1">Product Management resume</div>
                </div>
              </div>

              <div className="flex gap-6 items-center mb-4">
                <div className="flex flex-col items-center">
                  <Ring pct={86} size={64} stroke={8} color="#8B5CF6" />
                  <div className="text-xs text-gray-300 mt-2">Discovery</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={82} size={64} stroke={8} color="#60A5FA" />
                  <div className="text-xs text-gray-300 mt-2">Roadmaps</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={78} size={64} stroke={8} color="#34D399" />
                  <div className="text-xs text-gray-300 mt-2">Analytics</div>
                </div>
              </div>

              <p className="text-gray-300 max-w-md">
                Product resume highlighting discovery work, roadmapping, stakeholder management, success metrics and case studies that
                show outcomes and your product impact.
              </p>

              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-amber-400 text-black rounded-full font-medium transition group-hover:bg-amber-300">
                  Open PM Resume →
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* <section className="mt-12 max-w-3xl">
          <p className="text-gray-400">
            Both pages will include a downloadable single-page PDF (your original), plus role-specific breakdowns and example projects.
            If you want, I can automatically generate the single page PDFs from these details.
          </p>
        </section> */}
      </div>
    </main>
  )
}
