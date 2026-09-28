"use client"

import { ExternalLink, Github, Youtube, Star } from "lucide-react"
import Section from "./Section"
import TechIcon from "../ui/TechIcon"
import { projects, type Project } from "../../data/portfolio"

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-1">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code on GitHub`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Github size={16} />
        </a>
      )}
      {project.youtubeLink && (
        <a
          href={project.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} demo video on YouTube`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Youtube size={16} />
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live site`}
          className="inline-flex h-9 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-emerald-600 transition-colors hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-emerald-400"
        >
          <ExternalLink size={14} /> Live
        </a>
      )}
    </div>
  )
}

function TechBadges({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
        >
          <TechIcon name={tech} size={12} className="text-emerald-500 dark:text-emerald-400" />
          {tech}
        </span>
      ))}
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="A selection of products and platforms I've designed and shipped — from AI SaaS systems to developer tools."
    >
      {/* Featured projects */}
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((project, index) => (
          <article
            key={project.name}
            className={`flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-lg focus-within:border-emerald-500/40 ${
              index === featured.length - 1 && featured.length % 2 === 1 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold leading-snug text-foreground">{project.title}</h3>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                <Star size={12} /> Featured
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.longDescription ?? project.description}
            </p>
            <div className="mt-4">
              <TechBadges stack={project.techStack} />
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <ProjectActions project={project} />
            </div>
          </article>
        ))}
      </div>

      {/* Other projects */}
      <h3 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Other projects
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-lg focus-within:border-emerald-500/40"
          >
            <h4 className="text-sm font-semibold leading-snug text-foreground">{project.title}</h4>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="mt-3">
              <TechBadges stack={project.techStack} />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <ProjectActions project={project} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
