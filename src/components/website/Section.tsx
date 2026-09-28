"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-20 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-10 sm:mb-12">
            {eyebrow && (
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
