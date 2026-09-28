"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, TerminalSquare } from "lucide-react"
import { TypingEffect } from "../ui/TypingEffect"
import { profile, projects } from "../../data/portfolio"
import { useInterfaceMode } from "../../hooks/useInterfaceMode"

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

const STATS = [
  { value: `${projects.length}+`, label: "Projects built" },
  { value: "1600+", label: "Problems solved" },
  { value: "140+", label: "Contests" },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const { setInterfaceMode } = useInterfaceMode()

  return (
    <div id="top" className="relative overflow-hidden">
      {/* Subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid-bg absolute inset-0" />
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start justify-center gap-6 px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <span
              aria-hidden
              className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-600 text-xl font-bold text-white shadow-lg shadow-emerald-500/20"
            >
              SP
            </span>
            <p className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground sm:self-center">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </p>
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I&apos;m {profile.name.split(" ")[0]}{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <div className="mt-4 min-h-[2rem] font-mono text-lg text-muted-foreground sm:text-xl">
              <TypingEffect text={profile.title} speed={45} />
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.bio}</p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-emerald-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View my work <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
            </button>
            <button
              onClick={() => setInterfaceMode("terminal")}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border px-4 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Switch to terminal mode"
            >
              <TerminalSquare size={16} /> Try terminal mode
            </button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Github size={20} />
            </a>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail size={20} />
            </a>
          </div>

          <dl className="grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="block text-xs text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}
