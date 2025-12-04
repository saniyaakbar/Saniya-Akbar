// app/components/MyJourney.tsx
"use client"
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type JourneyItem = {
  slug: string;
  yearOrRange: string;
  title: string;
  company?: string;
  location?: string;
  bullets: string[];
};

const JOURNEY: JourneyItem[] = [
  {
    slug: "btech",
    yearOrRange: "2020–2024",
    title: "B.Tech — Computer Science & Business Systems",
    company: "Oriental Institute of Science and Technology",
    location: "CGPA: 8.5",
    bullets: [
      "Foundation in CS + business systems — strong problem solving and system thinking",
      "Built projects that combined UI, backend logic and product requirements",
    ],
  },
  {
    slug: "starfluenza",
    yearOrRange: "May 2022 – Oct 2023",
    title: "Software Developer / Product Collaborator",
    company: "Starfluenza Pvt. Ltd.",
    location: "Mumbai",
    bullets: [
      "Delivered user-facing features and UX improvements (responsiveness ↑ 25%)",
      "Integrated 15+ backend APIs to enable scalable features",
      "Worked closely with PMs to refine requirements and propose UX improvements",
    ],
  },
  {
    slug: "purecode",
    yearOrRange: "Oct 2023 – Jun 2024",
    title: "Product Engineer (APM responsibilities)",
    company: "Purecode India Pvt. Ltd.",
    location: "Hyderabad",
    bullets: [
      "Delivered 20+ production features with <3% defect rate",
      "Led architecture modernization improving performance by ~35%",
      "Participated in story refinement, feasibility discussions and prioritization",
    ],
  },
  {
    slug: "predigle",
    yearOrRange: "Jun 2024 – Nov 2025",
    title: "Software Developer L-2 — Product-Focused",
    company: "Predigle India Pvt. Ltd.",
    location: "Chennai (Remote/Hybrid)",
    bullets: [
      "Improved load times by 20–35% and built reusable UI components (velocity ↑ 40%)",
      "Identified UX friction and reduced user-facing issues by ~30%",
      "Collaborated with PMs, Design & QA on success criteria and deliveries",
    ],
  },
];

export default function MyJourney() {
  const centerColumnWidth = 64;
  const shortLineWidth = 40; // connector length

  // refs for li elements
  const liRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [visible, setVisible] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const newVis: Record<number, boolean> = {};
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute("data-idx");
          const idx = idxAttr ? Number(idxAttr) : -1;
          if (idx >= 0 && entry.isIntersecting) newVis[idx] = true;
        });
        setVisible((prev) => ({ ...prev, ...newVis }));
      },
      { threshold: 0.12 }
    );

    liRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const ordered = [...JOURNEY].reverse(); // most recent first

  return (
    <section id="journey" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-6xl font-serif mb-10 font-bold"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          My journey...
        </h2>

        <div className="relative">
          {/* vertical dotted center line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none"
            style={{
              width: 2,
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 6px, transparent 6px, transparent 14px)",
            }}
          />

          <ol className="relative space-y-12">
            {ordered.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const vis = !!visible[idx];

              // base card classes
              const baseCard =
                "bg-white/4 backdrop-blur-sm border border-white/8 rounded-2xl p-6 md:p-8 transition-transform transition-opacity duration-700 ease-out";

              // greenish glow when visible
              const greenGlow = vis
                ? "shadow-[0_20px_40px_rgba(16,185,129,0.10),0_0_18px_rgba(16,185,129,0.06)]"
                : "shadow-sm";

              // glide-in transform:
              // on md screens slide horizontally from left/right; on small screens slide up (translate-y)
              const enterClass = vis
                ? "opacity-100 translate-y-0 md:translate-x-0"
                : `opacity-0 translate-y-6 ${isLeft ? "md:-translate-x-8" : "md:translate-x-8"}`;

              const connectorStyle: React.CSSProperties = {
                height: 2,
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(99,102,241,0.9) 0px, rgba(99,102,241,0.9) 6px, transparent 6px, transparent 12px)",
              };

              return (
                <li
                  key={item.slug}
                  data-idx={idx}
                  ref={(el) => {
                    liRefs.current[idx] = el;
                  }}
                  className={`relative md:grid md:grid-cols-2 md:items-start ${enterClass}`}
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  {/* Content column (card + number below it) */}
                  <div className={`md:pr-8 ${!isLeft ? "md:order-2 md:pl-8" : ""}`}>
                    <div className={`${baseCard} ${greenGlow} ${vis ? "scale-100" : "scale-98"}`}>
                      <div className="flex items-start gap-4">
                        <div className="text-sm font-medium text-gray-300 w-28">{item.yearOrRange}</div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
                          {item.company && (
                            <p className="text-sm text-gray-300 mt-1">
                              {item.company} {item.location ? `• ${item.location}` : ""}
                            </p>
                          )}
                        </div>
                      </div>

                      <ul className="mt-4 ml-1 space-y-2 text-sm text-gray-300">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-indigo-400">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex gap-3 items-center">
                        <Link
                          href={`/experience/${item.slug}`}
                          className="inline-block text-indigo-300 hover:text-indigo-100 bg-white/6 hover:bg-white/10 px-3 py-1 rounded-full text-sm transition"
                        >
                          Know More →
                        </Link>

                        <span className="text-xs text-gray-400 px-2 py-1 border border-white/6 rounded">Product & Dev</span>
                      </div>
                    </div>

                    {/* Number badge placed below the card */}
                    <div className="mt-4 flex justify-center">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold text-white bg-black/50 border border-white/8 ${vis ? "shadow-[0_8px_22px_rgba(16,185,129,0.12),0_0_10px_rgba(16,185,129,0.06)]" : "opacity-80"}`}
                        aria-hidden
                      >
                        {idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Marker + connectors (small neutral dot) */}
                  <div className="md:mx-auto md:flex md:items-center md:justify-center md:w-40 mt-6 md:mt-0 relative">
                    

                    {/* long dotted connector from marker -> content */}
                    {isLeft ? (
                      <div
                        aria-hidden
                        style={{
                          ...connectorStyle,
                          position: "absolute",
                          right: "calc(50% - 4px)",
                          transform: "translateX(6px)",
                          width: `calc(50% - ${centerColumnWidth}px - ${shortLineWidth}px)`,
                          top: "50%",
                          borderRadius: 6,
                        }}
                      />
                    ) : (
                      <div
                        aria-hidden
                        style={{
                          ...connectorStyle,
                          position: "absolute",
                          left: "calc(50% - 4px)",
                          transform: "translateX(-6px)",
                          width: `calc(50% - ${centerColumnWidth}px - ${shortLineWidth}px)`,
                          top: "50%",
                          borderRadius: 6,
                        }}
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12">
          <div className="bg-white/3 backdrop-blur-sm border border-white/8 rounded-xl p-6 md:p-8 max-w-3xl">
            <p className="text-sm text-gray-100 leading-relaxed">
              I combine frontend engineering (React, Next.js, UI performance, reusable systems) with product thinking —
              discovery, prioritization, and outcome-focused execution. I enjoy turning user insights into clean solutions that
              deliver measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
