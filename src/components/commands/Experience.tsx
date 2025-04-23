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
      company: "Lowe's",
      role: "Associate Software Engineer",
      period: "Jul 2024 - Present",
      achievements: [
        "Learning React, Golang, and Kubernetes while working on a CI/CD tool.",
        "Adding new features that enhance user experience, making the tool more intuitive and effective for developers.",
      ],
    },
    {
      company: "MFine",
      role: "SDE Intern",
      period: "Mar 2024 - Jul 2024",
      achievements: [
        "Contributed to the backend of a B2B healthcare product using Node.js, MongoDB, and LoopBack 3.",
        "Integrated Claim Service and TPA systems for policy year-based claim handling, improving operational efficiency.",
      ],
      metrics: "25% increase in user efficiency through enhanced search functionality",
    },
    {
      company: "Scaler",
      role: "Technical Content Writer Intern (Flutter/Dart/DSA)",
      period: "Feb 2023 - Mar 2024",
      achievements: ["Wrote and published articles about various technical aspects of App Development and DSA."],
      link: "https://github.com/shashwatssp/Scaler-Technical-Content-Writing/tree/main",
    },
    {
      company: "Cillyfox",
      role: "Software Engineering Intern",
      period: "Jun 2023 - Dec 2023",
      achievements: [
        "Enhanced the MJK Sample Transport App, used by 310 hospitals and 76 labs across 8 states, improving delivery efficiency.",
        "Led interface redesign, and implemented resilient data-saving and optimized API synchronizations for uninterrupted operations.",
      ],
      metrics: "35-40% reduction in loading time, 15-20% improvement in transportation time",
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
