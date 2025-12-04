// app/experience/page.tsx
import Link from 'next/link'
import React from 'react'

const ITEMS = [
  { slug: 'predigle', title: 'Predigle — Software Developer L-2' },
  { slug: 'purecode', title: 'Purecode — Product Engineer (APM)' },
  { slug: 'starfluenza', title: 'Starfluenza — Software Developer' },
  { slug: 'btech', title: 'B.Tech — Computer Science & Business' },
]

export default function ExperienceIndex() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Experience — Details</h1>
      <ul className="space-y-4">
        {ITEMS.map((it) => (
          <li key={it.slug} className="p-4 border rounded-md hover:shadow-sm">
            <Link href={`/experience/${it.slug}`} className="text-indigo-600 hover:text-indigo-900 font-medium">
              {it.title} → Read details
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link href="/#journey" className="text-indigo-600 hover:text-indigo-900 underline">← Back to My Journey</Link>
      </div>
    </main>
  )
}
