// Next.js page component (page.tsx) styled with Tailwind CSS
// Drop this file into app/(root)/page.tsx or pages/index.tsx depending on your Next setup.
// Requirements & notes (read first):
// 1) Tailwind CSS must be configured in your Next app. If you don't use Tailwind, the structure and comments
//    below will still help but you'll need to port classes to your CSS.
// 2) Add the Google font 'Playfair Display' (for the big serif heading) and a legible sans for body (see example).
// 3) Place your hero photo at: public/images/hero.jpg (or update the src to your asset path).
// 4) Place your resume PDF in: public/Saniya_Akbar.pdf so the "Download Resume" button links correctly.
// 5) This component uses the details from your resume (name, title, short summary). Edit the content below if needed.

import Image from 'next/image'
import Link from 'next/link'
import MyJourney from './components/MyJourney'
import Skills from './components/Skills'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Page container */}
      <div className="max-w-6xl mx-auto px-6 py-16">


        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            {/* <p className="text-lg text-gray-300 mb-2"></p> */}
             <h1 className="font-serif text-6xl md:text-5xl leading-tight tracking-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hello, I am
            </h1>
            <h1 className="font-serif text-6xl md:text-7xl leading-tight tracking-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Saniya Akbar
            </h1>

            <p className="text-sm max-w-xl text-gray-300 mb-6 whitespace-pre-line">
              Technical, product-oriented Software Developer with 3+ years of experience building user-facing features, improving UX performance, and collaborating across Product, Design, and Engineering teams. Transitioning into Product Management with strong user empathy and technical depth.
            </p>

            <div className="flex gap-4 items-center">
              <a href="#portfolio" className="px-6 py-3 bg-white/10 border border-white/10 rounded-md hover:bg-white/20">
                View Portfolio
              </a>
              <a href="#contact" className="px-6 py-3 border border-white/10 rounded-md hover:bg-white/5">
                Contact
              </a>
            </div>

            {/* Decorative arrow and micro copy */}
            <div className="mt-8 text-gray-400 text-sm flex items-center gap-3">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H42" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M36 6L42 12L36 18" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Technical PM-in-progress — bridging UX, business goals, and engineering execution.</span>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-end">
            <div className="w-[320px] md:w-[420px] rounded-xl overflow-hidden shadow-xl ring-1 ring-white/5">
              {/* Replace with your image at public/images/hero.jpg */}
              <Image
                src="/Saniya-hero.jpg"
                alt="Saniya Akbar"
                width={840}
                height={1050}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Optional: quick CV / highlights bar */}
        <section className="mt-12 bg-white/3 rounded-lg p-6 border border-white/5">
          <h3 className="text-sm uppercase tracking-wider text-gray-300 mb-2">Quick highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-200">
            <div>• 3+ years building user-facing features</div>
            <div>• Improved performance by ~35%</div>
            <div>• Experienced with React, Next.js, Angular</div>
          </div>
        </section>

      </div>
      <Skills/>

      <MyJourney/>
    </main>
  )
}

