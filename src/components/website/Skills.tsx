"use client"

import Section from "./Section"
import TechIcon from "../ui/TechIcon"
import { skillCategories } from "../../data/portfolio"

function SkillDots({ level }: { level: number }) {
  return (
    <div role="img" aria-label={`Proficiency ${level} out of 5`} className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full ${i < level ? "bg-emerald-500" : "bg-muted"}`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      subtitle="From backend infrastructure to AI integrations — here's the toolkit I reach for."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{category.name}</h3>
            <ul className="mt-4 space-y-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm text-foreground">
                    <TechIcon
                      name={skill.name}
                      size={15}
                      className="shrink-0 text-emerald-500 dark:text-emerald-400"
                    />
                    {skill.name}
                  </span>
                  <SkillDots level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
