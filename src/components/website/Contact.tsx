"use client"

import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react"
import Section from "./Section"
import { profile } from "../../data/portfolio"

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      subtitle="Feel free to reach out for collaboration opportunities or just to say hello!"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={`mailto:${profile.email}`}
          className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
            <Mail size={20} />
          </span>
          <span>
            <span className="block text-sm font-medium text-foreground">Email</span>
            <span className="block truncate text-sm text-muted-foreground group-hover:text-foreground">
              {profile.email}
            </span>
          </span>
        </a>

        <a
          href={`https://${profile.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
            <Linkedin size={20} />
          </span>
          <span>
            <span className="block text-sm font-medium text-foreground">LinkedIn</span>
            <span className="flex items-center gap-1 truncate text-sm text-muted-foreground group-hover:text-foreground">
              {profile.linkedin} <ExternalLink size={12} />
            </span>
          </span>
        </a>

        <a
          href={`https://${profile.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
            <Github size={20} />
          </span>
          <span>
            <span className="block text-sm font-medium text-foreground">GitHub</span>
            <span className="flex items-center gap-1 truncate text-sm text-muted-foreground group-hover:text-foreground">
              {profile.github} <ExternalLink size={12} />
            </span>
          </span>
        </a>

        <a
          href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
          className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
            <Phone size={20} />
          </span>
          <span>
            <span className="block text-sm font-medium text-foreground">Phone</span>
            <span className="block truncate text-sm text-muted-foreground group-hover:text-foreground">
              {profile.phone}
            </span>
          </span>
        </a>
      </div>
    </Section>
  )
}
