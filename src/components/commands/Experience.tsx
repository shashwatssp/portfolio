"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ExperienceItem {
  company: string
  role: string
  period: string
  achievements: string[]
  metrics?: string
  link?: string
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Lowe's India",
      role: "Associate Software Engineer",
      period: "Jul 2024 - Present",
      achievements: [
        "Engineer on an enterprise CI/CD platform used by 5,000+ engineers, working across React, Node.js, Go, and Kubernetes as it scaled from 1,000 to 8,000+ projects.",
        "Built an AI agent and MCP Server on Google ADK that lets engineers debug production incidents in natural language against live deployment value files and logs.",
        "Implemented Server-Sent Events (SSE) across the full stack, replacing polling for real-time deployment status across 1000+ weekly deployments.",
        "Built full-stack Istio RBAC management and a service mesh with canary deployments, cutting production incidents by 35%.",
      ],
      metrics: "Raise the Roof Award (Dec 2025) · Q2 Department Award (2026)",
    },
    {
      company: "MFine",
      role: "Software Development Engineer Intern",
      period: "Mar 2024 - Jul 2024",
      achievements: [
        "Contributed to backend services and RESTful APIs for a B2B healthcare platform with 5M+ app downloads, serving 500+ corporates and handling 50K+ daily transactions.",
        "Worked on query optimization with indexing and a Redis caching layer.",
      ],
      metrics: "API response time cut from 800ms to 150ms",
    },
    {
      company: "Cillyfox",
      role: "Software Engineering Intern",
      period: "Jun 2023 - Dec 2023",
      achievements: [
        "Contributed to a full-stack healthcare logistics platform serving 310 hospitals and 76 labs across 8 states, supporting 15K+ daily sample transports with real-time GPS tracking.",
        "Worked on API synchronization with exponential backoff and an offline queue on SQLite for low-connectivity environments.",
      ],
      metrics: "Optimized delivery routing using graph algorithms (Dijkstra's)",
    },
  ]

  return (
    <motion.div
      className="experience-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">Work Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="role-title">{exp.role}</div>
              <ul className="achievements-list">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              {exp.link && (
                <div className="experience-link">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Articles <ExternalLink size={14} />
                  </a>
                </div>
              )}
              {exp.metrics && (
                <div className="metrics-highlight">
                  <span className="metrics-icon">📈</span> {exp.metrics}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="extracurricular-section">
        <h2 className="command-title">Extracurricular Experience</h2>
        <div className="extracurricular-item">
          <div className="extracurricular-header">
            <h3 className="organization-name">National Service Scheme</h3>
            <span className="extracurricular-period">Dec 2020 - May 2024</span>
          </div>
          <ul className="extracurricular-achievements">
            <li>
              Provided vital assistance in locating ICU beds, oxygen cylinders, and life-saving drugs during the
              pandemic
            </li>
            <li>Contributed as a volunteer in diverse humanitarian initiatives</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
