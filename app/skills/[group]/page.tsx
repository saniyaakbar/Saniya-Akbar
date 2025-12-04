// app/skills/[group]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

type Skill = { id: string; name: string; pct: number; caption?: string; color?: string };

const DEV_SKILLS: Skill[] = [
  { id: "react", name: "React / Next.js", pct: 92, caption: "Component-driven UI & SSR", color: "#60A5FA" },
  { id: "ts", name: "TypeScript", pct: 88, caption: "Typesafe code & tooling", color: "#38BDF8" },
  { id: "js", name: "JavaScript", pct: 95, caption: "ESNext, DOM & patterns", color: "#FBBF24" },
  { id: "node", name: "Node.js", pct: 82, caption: "APIs & server-side logic", color: "#34D399" },
  { id: "css", name: "CSS / Tailwind", pct: 86, caption: "Layout, responsive design", color: "#A78BFA" },
  { id: "perf", name: "Performance", pct: 80, caption: "Optimization & profiling", color: "#F472B6" },
];

const PM_SKILLS: Skill[] = [
  { id: "discovery", name: "Product discovery", pct: 86, caption: "User interviews & validation", color: "#8B5CF6" },
  { id: "roadmap", name: "Roadmapping", pct: 82, caption: "Prioritization & roadmaps", color: "#60A5FA" },
  { id: "metrics", name: "Data & Analytics", pct: 78, caption: "SQL / basic analytics", color: "#34D399" },
  { id: "stakeholders", name: "Stakeholder mgmt", pct: 88, caption: "Cross-team communication", color: "#F59E0B" },
  { id: "process", name: "PM process", pct: 84, caption: "User stories & acceptance", color: "#F97316" },
  { id: "ux", name: "UX collaboration", pct: 86, caption: "Working with design", color: "#06B6D4" },
];

// small circular svg ring component reused
function Ring({ pct, color = "#6366F1", size = 120, stroke = 10 }: { pct: number; color?: string; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (pct / 100) * circumference;
  const remainder = Math.max(0, circumference - dash);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} fill="none" />
      <circle cx={cx} cy={cy} r={radius} stroke={color} strokeWidth={stroke} strokeLinecap="round" fill="none"
        strokeDasharray={`${dash} ${remainder}`} transform={`rotate(-90 ${cx} ${cy})`} />
    </svg>
  );
}

export default async function SkillGroupPage({ params }: { params: any }) {
  const resolved = await params;
  const group = resolved?.group as string | undefined;

  if (!group) return notFound();

  let skills: Skill[] = [];
  let title = "";
  let intro = "";

  if (group === "developer") {
    skills = DEV_SKILLS;
    title = "Developer skills";
    intro = "Technical skills, frameworks and engineering practices — detailed breakdown and examples.";
  } else if (group === "pm" || group === "product-management") {
    skills = PM_SKILLS;
    title = "Product management skills";
    intro = "Product thinking, discovery, metrics and stakeholder work — detailed breakdown and examples.";
  } else {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <Link href="/skills" className="text-gray-300 hover:text-white underline">← Back to skills</Link>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <p className="text-gray-300 mb-8 max-w-3xl">{intro}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((s) => (
            <article key={s.id} className="bg-white/4 border border-white/8 rounded-lg p-6 flex flex-col items-center text-center">
              <Ring pct={s.pct} color={s.color} />
              <div className="mt-4">
                <h3 className="font-semibold text-white">{s.name}</h3>
                <p className="text-sm text-gray-300 mt-2">{s.caption}</p>
                <div className="mt-3 text-indigo-400 font-medium">{s.pct}%</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
