"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Award, ExternalLink, Trophy } from "lucide-react"
import Section from "./Section"
import { achievements, codingProfiles } from "../../data/portfolio"

export default function Achievements() {
  const reduceMotion = useReducedMotion()

  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Awards & competitive programming"
      subtitle="Recognition at work and results from 150+ contests across coding platforms."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Awards & results */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-foreground">
            <Trophy size={18} className="text-amber-500" /> Highlights
          </h3>
          <ul className="mt-5 space-y-4">
            {achievements.map((achievement, index) => (
              <motion.li
                key={achievement.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Award size={13} />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Coding profiles */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-base font-semibold text-foreground">Coding profiles</h3>
          <ul className="mt-5 space-y-3">
            {codingProfiles.map((cp) => (
              <li key={cp.platform}>
                <a
                  href={cp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[60px] items-center justify-between gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {cp.platform} <span className="font-normal text-muted-foreground">· {cp.username}</span>
                    </p>
                    {cp.rating && <p className="truncate text-xs text-muted-foreground">{cp.rating}</p>}
                  </div>
                  <ExternalLink
                    size={15}
                    className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            1800+ questions solved · 150+ contests · Global Rank 49 (CodeChef Starters 102)
          </p>
        </div>
      </div>
    </Section>
  )
}
