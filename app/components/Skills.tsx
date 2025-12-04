// app/skills/page.tsx

"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Ring({ pct = 80, size = 64, stroke = 8, color = "#60A5FA", speed = 800 }: { pct?: number; size?: number; stroke?: number; color?: string; speed?: number }) {
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (pct / 100) * circumference;
  const remainder = Math.max(0, circumference - dash);

  // animate stroke-dashoffset via inline style transition
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
        style={{
          transition: `stroke-dasharray ${speed}ms cubic-bezier(.22,.9,.3,1), opacity 500ms`,
        }}
      />
    </svg>
  );
}

export default function SkillsIndex() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

const cardBase =
  "relative w-full max-w-[540px] mx-auto bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] shadow-[0_0_18px_rgba(16,185,129,0.15)]";
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        <header className={`mb-10 transition-all ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-5xl font-serif font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
            Skills
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Two focused skill tracks — technical craft as a frontend engineer and product leadership as a PM. Click a circle to
            dive deeper into the skills, examples and case studies.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Developer Card */}
          <Link
            href="/skills/developer"
            className={`${cardBase} group overflow-hidden`}
            aria-label="Developer skills"
          >
            <div className="flex flex-col items-center">
              {/* big circle with label inside */}
              <div
                className={`rounded-full w-44 h-44 md:w-56 md:h-56 flex items-center justify-center border-2 border-white/8 bg-white/3 mb-6 transition-transform ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } group-hover:scale-105`}
                style={{ backdropFilter: "blur(4px)" }}
              >
                <div>
                  <div className="text-2xl md:text-3xl font-semibold">Developer</div>
                  <div className="text-xs text-gray-300 mt-1">Frontend & full-stack craft</div>
                </div>
              </div>

              {/* small preview rings */}
              <div className="flex gap-6 items-center mb-4">
                <div className="flex flex-col items-center">
                  <Ring pct={92} size={64} stroke={8} color="#60A5FA" />
                  <div className="text-xs text-gray-300 mt-2">React</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={88} size={64} stroke={8} color="#38BDF8" />
                  <div className="text-xs text-gray-300 mt-2">TypeScript</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={86} size={64} stroke={8} color="#A78BFA" />
                  <div className="text-xs text-gray-300 mt-2">CSS/Tailwind</div>
                </div>
              </div>

              <p className="text-gray-300 max-w-md">
                Build performant, accessible, and maintainable user interfaces. Component-driven development, performance optimization,
                and pragmatic architecture choices to ship product features quickly.
              </p>

              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-indigo-600 text-black rounded-full font-medium transition group-hover:bg-indigo-500">
                  Explore developer skills →
                </span>
              </div>
            </div>
          </Link>

          {/* PM Card */}
          <Link href="/skills/pm" className={`${cardBase} group overflow-hidden`} aria-label="Product management skills">
            <div className="flex flex-col items-center">
              {/* big circle with label inside */}
              <div
                className={`rounded-full w-44 h-44 md:w-56 md:h-56 flex items-center justify-center border-2 border-white/8 bg-white/3 mb-6 transition-transform ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } group-hover:scale-105`}
                style={{ backdropFilter: "blur(4px)" }}
              >
                <div>
                  <div className="text-2xl md:text-3xl font-semibold">Product</div>
                  <div className="text-xs text-gray-300 mt-1">Product management</div>
                </div>
              </div>

              {/* small preview rings */}
              <div className="flex gap-6 items-center mb-4">
                <div className="flex flex-col items-center">
                  <Ring pct={86} size={64} stroke={8} color="#8B5CF6" />
                  <div className="text-xs text-gray-300 mt-2">Discovery</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={82} size={64} stroke={8} color="#60A5FA" />
                  <div className="text-xs text-gray-300 mt-2">Roadmapping</div>
                </div>
                <div className="flex flex-col items-center">
                  <Ring pct={78} size={64} stroke={8} color="#34D399" />
                  <div className="text-xs text-gray-300 mt-2">Analytics</div>
                </div>
              </div>

              <p className="text-gray-300 max-w-md">
                Discovery, prioritization and stakeholder leadership — turning user research into scoped features and measurable outcomes.
                Strong collaboration with design and engineering to deliver value.
              </p>

              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-amber-400 text-black rounded-full font-medium transition group-hover:bg-amber-300">
                  Explore PM skills →
                </span>
              </div>
            </div>
          </Link>
        </section>

      </div>
    </main>
  );
}
