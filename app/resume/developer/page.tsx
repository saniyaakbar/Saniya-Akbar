// app/resume/developer/page.tsx
import Link from "next/link"
import React from "react"

export default function DeveloperResumePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/resume" className="text-sm text-emerald-300 hover:underline">← Back to Resumes</Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold">Developer Resume — Frontend & Full-stack</h1>
          <p className="text-gray-300 mt-3">Hands-on engineering work, technical ownership, performance and architecture improvements.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Top summary</h3>
            <p className="text-gray-300">Frontend engineer with X years of experience building React/Next.js apps, reusable component libraries, and improving product performance.</p>
            <div className="mt-4">
              <a className="inline-block px-4 py-2 bg-emerald-300 text-black rounded-full" href="/Saniya_Akbar.pdf" target="_blank" rel="noreferrer">Download full PDF</a>
            </div>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Skills utilised</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              <li>React, Next.js, TypeScript</li>
              <li>Performance & profiling</li>
              <li>Testing & CI</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Selected projects & outcomes</h2>
          <div className="space-y-4">
            <article className="bg-white/4 border border-white/8 rounded-xl p-6">
              <h4 className="font-semibold">Project A — Performance uplift</h4>
              <p className="text-gray-300 mt-2">
                Short problem → approach → outcome. (e.g. migrated bundles, improved load times by 25%)
              </p>
            </article>

            <article className="bg-white/4 border border-white/8 rounded-xl p-6">
              <h4 className="font-semibold">Project B — Component library</h4>
              <p className="text-gray-300 mt-2">Built a reusable design system used across product, reducing dev time and bugs.</p>
            </article>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Key contributions</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Delivered 20+ production features</li>
              <li>Reduced defect rate to &lt;3%</li>
            </ul>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="font-semibold mb-2">My learnings</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Incremental migration strategies</li>
              <li>Importance of observability</li>
            </ul>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Tools & infra</h3>
            <p className="text-gray-300">Vercel/Netlify, GitHub Actions, Sentry, Lighthouse, Chrome DevTools</p>
          </div>
        </section>
      </div>
    </main>
  )
}
