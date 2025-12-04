// app/resume/pm/page.tsx
import Link from "next/link"
import React from "react"

export default function PMResumePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/resume" className="text-sm text-emerald-300 hover:underline">← Back to Resumes</Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold">Product Management Resume</h1>
          <p className="text-gray-300 mt-3">Discovery, roadmapping, stakeholder management, metrics and product outcomes.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Top summary</h3>
            <p className="text-gray-300">Product-minded engineer who runs discovery, writes PRDs, and measures outcomes together with cross-functional teams.</p>
            <div className="mt-4">
              <a className="inline-block px-4 py-2 bg-amber-300 text-black rounded-full" href="/Saniya_Akbar_PM.pdf" target="_blank" rel="noreferrer">Download full PDF</a>
            </div>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Skills utilised</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              <li>Discovery & user interviews</li>
              <li>Roadmapping & prioritization</li>
              <li>Metrics & A/B analysis</li>
              <li>Stakeholder mgmt</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Selected case studies</h2>
          <div className="space-y-4">
            <article className="bg-white/4 border border-white/8 rounded-xl p-6">
              <h4 className="font-semibold">Case study — Feature discovery to go-live</h4>
              <p className="text-gray-300 mt-2">Describe problem → research → prioritized solution → metrics (growth / retention / conversion).</p>
            </article>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Product responsibilities</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Writing PRDs, acceptance criteria</li>
              <li>Defining success metrics & experiments</li>
            </ul>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Impact</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Improved UX and conversions</li>
              <li>Reduced support tickets via UX fixes</li>
            </ul>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-300">Worked with design, engineering & biz to scope features and deliver outcomes.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
