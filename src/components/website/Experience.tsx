"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Award } from "lucide-react"
import Section from "./Section"
import { experience } from "../../data/portfolio"

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      subtitle="Three years of building platforms, infrastructure, and AI-powered products across healthcare and retail tech."
    >
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
        {experience.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.period}`}
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500 sm:-left-[39px]"
            />
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.company} <span className="font-normal text-muted-foreground">· {exp.role}</span>
                </h3>
                <span className="whitespace-nowrap rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              {exp.metrics && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <Award size={14} /> {exp.metrics}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
