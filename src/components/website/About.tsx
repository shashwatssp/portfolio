"use client"

import { GraduationCap, Briefcase, MapPin } from "lucide-react"
import Section from "./Section"
import { education, profile } from "../../data/portfolio"

const FACTS = [
  { icon: Briefcase, label: "Current role", value: "Associate Software Engineer at Lowe's India" },
  { icon: MapPin, label: "Based in", value: "India" },
  { icon: GraduationCap, label: "Degree", value: "B.Tech CSE, MMMUT Gorakhpur (CGPA 7.91)" },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building reliable systems with AI at the edges"
      subtitle="I'm a full-stack engineer who enjoys working close to the metal on developer platforms and shipping AI-powered products that people actually use."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {FACTS.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <Icon size={20} />
            </span>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{label}</p>
              <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-base font-semibold text-foreground">Education</h3>
        {education.map((edu) => (
          <div key={edu.degree} className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.school}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{edu.period}</span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                CGPA: {edu.cgpa}
              </span>
            </div>
          </div>
        ))}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{profile.bio}</p>
      </div>
    </Section>
  )
}
