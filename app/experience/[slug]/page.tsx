// app/experience/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

type ExperienceDetailShape = {
  title: string;
  date: string;
  location: string;
  overview: string;
  skills: string[];
  contributions: string[];
  learnings: string[];
  pmResponsibilities: string[];
  subprojects: { id: string; name: string; summary: string; bullets?: string[] }[];
};

const DATA: Record<string, ExperienceDetailShape> = {
  predigle: {
    title: "Software Developer L-2 — Predigle India Pvt. Ltd.",
    date: "June 2024 – Nov 2025",
    location: "Chennai (Remote/Hybrid)",
    overview:
      "At Predigle I worked on enterprise UI modules and reusable UI libraries used across multiple product teams. I focused on performance, maintainability, and delivering production-ready features while collaborating closely with design, backend and QA.",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Component-driven design",
      "Performance optimization",
      "Testing & code review",
    ],
    contributions: [
      "Built reusable UI libraries adopted across 3 product teams (reduced duplicate code by ~40%).",
      "Improved page load times by 20–35% via memoization, code-splitting and lazy-loading.",
      "Led frontend refactors that improved team velocity and reduced bugs.",
    ],
    learnings: [
      "Designing for reusability across multiple products requires stable contracts & clear docs.",
      "Small performance wins (lazy-load, memo) compound at scale.",
      "How to balance rapid delivery with long-term maintainability.",
    ],
    pmResponsibilities: [
      "Scoped features with PMs and designers; helped define acceptance criteria.",
      "Participated in sprint planning and effort estimation.",
      "Analyzed user friction and proposed solutions that reduced user-facing issues (~30%).",
    ],
    subprojects: [
      {
        id: "predigle-ui-lib",
        name: "Shared UI library",
        summary:
          "Built a component library (buttons, inputs, modals) consumed by three product teams. Focus: accessibility, theming, and documentation.",
        bullets: [
          "Atomic components + storybook",
          "Automated visual regression tests",
          "Published package and coordinated adoption",
        ],
      },
      {
        id: "predigle-perf",
        name: "Performance improvements",
        summary:
          "Analyzed and reduced bundle size, introduced code-splitting and lazy loading for heavy routes.",
        bullets: ["Bundle reduction 20–35%", "SSR improvements for key pages"],
      },
    ],
  },

  purecode: {
    title: "Product Engineer (APM Responsibilities) — Purecode India Pvt. Ltd.",
    date: "Oct 2023 – Jun 2024",
    location: "Hyderabad",
    overview:
      "At Purecode I helped migrate React modules to Next.js + TypeScript, rebuilt product modules for better UX and performance, and took part in product scoping and story refinement.",
    skills: ["Next.js", "TypeScript", "Refactoring", "Accessibility", "Cross-functional collaboration"],
    contributions: [
      "Migrated modules to Next.js TS improving load times (~35%).",
      "Delivered 20+ production features with <3% defect rate.",
      "Refactored legacy code for maintainability and scalability.",
    ],
    learnings: [
      "How incremental migration minimizes user disruption.",
      "Importance of acceptance criteria and test coverage when refactoring.",
    ],
    pmResponsibilities: [
      "Helped define sprint-ready user stories and acceptance tests.",
      "Provided feasibility input and risk identification for roadmap items.",
    ],
    subprojects: [
      {
        id: "purecode-migration",
        name: "Next.js Migration",
        summary:
          "Migrated key product modules from CRA/React to Next.js with TypeScript to improve performance and routing.",
        bullets: ["Phased migration", "Shared utils extraction"],
      },
      {
        id: "purecode-library",
        name: "Component extraction",
        summary: "Extracted reusable components and patterns into a shared folder for easier reuse.",
        bullets: ["Reduced duplication", "Improved onboarding speed"],
      },
    ],
  },

  starfluenza: {
    title: "Software Developer / Product Collaborator — Starfluenza Pvt. Ltd.",
    date: "May 2022 – Oct 2023",
    location: "Mumbai",
    overview:
      "Delivered client-facing features, integrated multiple backend APIs, and improved responsiveness and page load times. Worked closely with designers and PMs to align UX with customer expectations.",
    skills: ["React", "Node.js", "API integration", "UX improvements"],
    contributions: [
      "Integrated 15+ backend APIs to support features.",
      "Improved responsiveness by ~25%.",
      "Aligned UX with client expectations through close collaboration.",
    ],
    learnings: [
      "Importance of API contracts and clear expectations.",
      "How UX improvements drive customer satisfaction.",
    ],
    pmResponsibilities: [
      "Worked with PMs on scope and delivery of client requests.",
      "Suggested UX improvements based on implementation feedback and testing.",
    ],
    subprojects: [
      {
        id: "starfluenza-api",
        name: "Large API integration",
        summary: "Integrated multiple backend services to enable complex product flows for clients.",
        bullets: ["Error handling", "Retry logic", "Monitoring"],
      },
      {
        id: "starfluenza-performance",
        name: "Responsiveness improvements",
        summary: "Reworked client rendering paths to reduce TTFB and improve interactivity.",
        bullets: ["Optimized assets", "Reduced reflows"],
      },
    ],
  },

  btech: {
    title: "B.Tech — Computer Science & Business Systems",
    date: "2020 – 2024",
    location: "Oriental Institute of Science and Technology",
    overview:
      "Undergraduate program focusing on CS fundamentals and business systems. Built projects combining frontend and backend logic and gained core problem solving skills.",
    skills: ["Algorithms", "System design basics", "Full-stack project experience"],
    contributions: ["Academic projects combining UI & backend", "Strong foundations in CS theory"],
    learnings: ["Problem solving, system thinking, team project experience"],
    pmResponsibilities: ["N/A (academic)"],
    subprojects: [
      {
        id: "btech-final",
        name: "Final year project",
        summary: "Built a web app combining frontend UI and backend services for a business workflow.",
        bullets: ["Designed data model", "Implemented API and UI"],
      },
    ],
  },
} as const;

type Slug = keyof typeof DATA;

export default async function ExperienceDetail({ params }: { params: any }) {
  const resolved = await params;
  const slug = resolved?.slug as string | undefined;

  if (!slug || !(slug in DATA)) return notFound();

  const exp = DATA[slug as Slug];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 relative">
      {/* floating circular back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/6 border border-white/10 flex items-center justify-center z-30 hover:bg-white/12 transition"
        aria-label="Back to home"
      >
        <span className="text-white text-lg">←</span>
      </Link>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{exp.title}</h1>
          <div className="mt-3 text-gray-300">
            <div>{exp.date}</div>
            <div>{exp.location}</div>
          </div>
        </header>

        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-200 max-w-3xl">{exp.overview}</p>
        </section>

        {/* Cards: Skills | Contributions | Learnings | PM Responsibilities */}
      <section className="mb-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { title: "Skills", items: exp.skills },
      { title: "Key contributions", items: exp.contributions },
      { title: "Key learnings", items: exp.learnings },
      { title: "Product / PM responsibilities", items: exp.pmResponsibilities },
    ].map((card) => (
      <div
        key={card.title}
        className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-sm"
      >
        <h3 className="text-lg font-semibold mb-3 text-white">{card.title}</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          {card.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-indigo-400">•</span>
              <div>{it}</div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


        {/* Sub-project cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sub-projects & highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exp.subprojects.map((p) => (
              <article key={p.id} className="bg-white/4 border border-white/8 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">{p.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{p.summary}</p>
                {p.bullets && (
                  <ul className="text-gray-200 text-sm space-y-1">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/#journey" className="text-indigo-400 hover:text-indigo-200 underline">
            ← Back to My Journey
          </Link>
        </div>
      </div>
    </main>
  );
}
