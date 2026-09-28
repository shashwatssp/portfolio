"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Youtube } from "lucide-react"
import { Modal } from "../ui/Modal"
import TechIcon from "../ui/TechIcon"

interface Project {
  name: string
  title: string
  description: string
  techStack: string[]
  link?: string
  github?: string
  youtubeLink?: string
  bestViewedOnMobile?: boolean
  demoImage?: string
  features: string[]
}

// Display order synced with the website (FlowChat → MockMate → Invoxa → Fast7 → TransformerTrek → rest)
const PROJECT_ORDER = [
  "flowchat",
  "mockmate",
  "invoxa",
  "fast7",
  "transformertrek",
  "shhhdrop",
  "chessAI",
  "intelliTraffic",
  "memeverse",
  "amazonClone",
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      name: "invoxa",
      title: "Invoxa (AI-Powered Invoice & AP Automation)",
      description:
        "AI-powered invoice and accounts-payable automation for Indian micro-businesses: extraction with confidence scores, GSTIN validation, duplicate detection, human-in-the-loop review queue, plain-English Q&A over your books, and exports to CSV, Excel, and Tally XML.",
      techStack: ["Python", "FastAPI", "React", "Supabase", "Docker", "OCR"],
      link: "https://invoxa4u.vercel.app/",
      github: "https://github.com/shashwatssp/Invoxa",
      features: [
        "Invoice extraction with per-field confidence scores",
        "GSTIN checksum + duplicate + arithmetic validation",
        "Human review queue for flagged invoices",
        "Ask Invoxa: read-only AI answers about your books",
        "Export Center: CSV, XLSX, Tally XML, PDF",
      ],
    },
    {
      name: "transformertrek",
      title: "TransformerTrek (Interactive AI/LLM Learning Platform)",
      description:
        "Interactive, visual explanations of transformers, LLMs, retrieval systems (RAG), and agents (MCP, A2A) — 33 modules across 7 sections where every widget computes for real in the browser, with knowledge-check quizzes and flashcard-based review.",
      techStack: ["React 19", "TypeScript"],
      link: "https://transformertrek.vercel.app/",
      github: "https://github.com/shashwatssp/TransformerTrek",
      features: [
        "33 modules across 7 ordered sections",
        "Live computing widgets (attention, BM25, perplexity)",
        "Knowledge-check quizzes per module",
        "Rapid review flashcards",
        "Private by default: no accounts, no tracking",
      ],
    },
    {
      name: "flowchat",
      title: "FlowChat (Multi-Tenant AI SaaS Chatbot Platform)",
      description:
        "Multi-tenant AI SaaS platform in Go/Gin and Next.js where businesses create custom chatbots trained on their own data via voice input, PDF uploads, or website scraping — with a RAG pipeline on Qdrant, SSE streaming, appointment booking, and embeddable widgets.",
      techStack: ["Go (Gin)", "Next.js", "Qdrant", "LLM APIs", "RAG"],
      link: "https://flowchat4u.vercel.app/",
      github: "https://github.com/shashwatssp/FlowChat",
      features: [
        "Train chatbots on voice, PDFs, or websites",
        "RAG pipeline on Qdrant for grounded Q&A",
        "Model-agnostic LLM integration",
        "SSE streaming for real-time responses",
        "Embeddable chat widgets + appointment booking",
      ],
    },
    {
      name: "mockmate",
      title: "MockMate (AI-Powered Test Creation & Assessment)",
      description:
        "End-to-end AI-powered SaaS platform where teachers create test papers via voice commands or PDF uploads, with an OCR extraction service converting PDFs into structured question banks, student-facing test-taking, AI feedback, and real-time analytics dashboards.",
      techStack: ["React", "Supabase", "LLM APIs", "PDF.js", "Tesseract.js"],
      link: "https://mockmatev1.netlify.app/",
      github: "https://github.com/shashwatssp/MockMate",
      features: [
        "Create test papers via voice commands or PDF uploads",
        "OCR extraction into structured question banks",
        "Student-facing test-taking workflows",
        "AI-powered performance feedback",
        "Real-time analytics dashboards for teachers",
      ],
    },
    {
      name: "fast7",
      title: "Fast7 (SaaS Restaurant Website Builder)",
      description:
        "Engineered a SaaS platform with mobile-first architecture enabling restaurant owners to deploy professional websites within 7 minutes through an intuitive, responsive interface with zero coding required.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Google OAuth"],
      link: "https://fast7.netlify.app/",
      github: "https://github.com/shashwatssp/fast7",
      bestViewedOnMobile: true,
      features: [
        "Mobile-first architecture",
        "Deploy websites in 7 minutes",
        "Intuitive, responsive interface",
        "Zero coding required",
        "Restaurant management features",
      ],
    },
    {
      name: "shhhdrop",
      title: "ShhhDrop (Encrypted Anonymous Texting Platform)",
      description:
        "Developed an encrypted anonymous messaging platform, ensuring secure communication without identity exposure.",
      techStack: ["React", "Firebase", "Vite", "CryptoJs"],
      link: "https://shhhdrop.netlify.app/",
      github: "https://github.com/shashwatssp/shhhdrop",
      bestViewedOnMobile: true,
      features: [
        "End-to-end encryption",
        "Anonymous messaging",
        "No account required",
        "Self-destructing messages",
        "Mobile-responsive design",
      ],
    },
    {
      name: "amazonClone",
      title: "Amazon Clone (Online-shopping app)",
      description: "Developed a shopping app with multiple screens, like Sign-Up, Login, Home, Cart, Product screens.",
      techStack: ["Flutter", "Firebase", "Provider (State Management)"],
      github: "https://github.com/shashwatssp/amazon_clone",
      youtubeLink: "https://www.youtube.com/watch?app=desktop&v=7Yc62ocoToY&feature=youtu.be",
      features: [
        "User authentication",
        "Product browsing and search",
        "Shopping cart functionality",
        "Order processing",
        "User profile management",
      ],
    },
    {
      name: "chessAI",
      title: "ChessVsDeepSeek (Chess Game against AI with Leaderboard)",
      description:
        "Developed an interactive chess game with an AI opponent and integrated a leaderboard to track top players.",
      techStack: ["React", "Vite", "Firebase"],
      link: "https://chessvsdeepseek.netlify.app/",
      github: "https://github.com/shashwatssp/ChessVsDeepSeek",
      youtubeLink: "https://youtu.be/SBCcJfU28OY",
      features: [
        "AI opponent with multiple difficulty levels",
        "Real-time leaderboard",
        "Game history and analysis",
        "Responsive chess board",
        "User authentication",
      ],
    },
    {
      name: "intelliTraffic",
      title: "intelli-Traffic (Smart Traffic Solution)",
      description:
        "Developed an AI-powered app that solves several issues faced by both the public and the government.",
      techStack: ["Flutter", "Firebase", "LangChain", "OpenAI API"],
      github: "https://github.com/shashwatssp/intelli-Traffic/",
      youtubeLink: "https://youtube.com/watch?v=RO9g0mCYVV8",
      features: [
        "AI-powered traffic analysis",
        "Real-time congestion reporting",
        "Route optimization",
        "Public transportation integration",
        "Emergency vehicle prioritization",
      ],
    },
    {
      name: "memeverse",
      title: "Memeverse (A social media platform)",
      description:
        "Developed a social media platform for sharing memes, with features such as liking, commenting, and searching.",
      techStack: ["Flutter", "Firebase", "Riverpod (State Management)"],
      github: "https://github.com/shashwatssp/memeverse",
      youtubeLink: "https://www.youtube.com/watch?v=MBdtZxNaYag",
      features: [
        "User authentication",
        "Meme posting and sharing",
        "Like and comment functionality",
        "User profiles",
        "Content search and discovery",
      ],
    },
  ]

  const orderedProjects = [...projects].sort(
    (a, b) => PROJECT_ORDER.indexOf(a.name) - PROJECT_ORDER.indexOf(b.name),
  )

  const openProjectDemo = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectDemo = () => {
    setSelectedProject(null)
  }

  return (
    <motion.div
      className="projects-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">Projects</h2>

      <div className="projects-list">
        {orderedProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="project-item"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="project-header">
              <h3 className="project-name">{project.title}</h3>
              <div className="project-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action">
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-action">
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action youtube-action"
                  >
                    <Youtube size={16} />
                  </a>
                )}
                {!project.youtubeLink && project.demoImage && (
                  <button className="project-action demo-button" onClick={() => openProjectDemo(project)}>
                    <ExternalLink size={16} />
                  </button>
                )}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  <TechIcon name={tech} size={12} /> {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                  <ExternalLink size={14} /> Visit {project.bestViewedOnMobile ? "(Best viewed on mobile)" : ""}
                </a>
              )}
              {project.youtubeLink && (
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button youtube-link"
                >
                  <Youtube size={14} /> Watch Demo
                </a>
              )}
              {!project.youtubeLink && project.demoImage && (
                <button className="project-link-button" onClick={() => openProjectDemo(project)}>
                  <ExternalLink size={14} /> View Details
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={closeProjectDemo} title={selectedProject.title}>
          <div className="project-demo">
            <div className="project-demo-header">
              <div className="tech-stack">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    <TechIcon name={tech} size={12} /> {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-demo-content">
              <p className="project-description">{selectedProject.description}</p>

              {selectedProject.demoImage && (
                <div className="project-screenshot">
                  <img
                    src={selectedProject.demoImage || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="demo-image"
                  />
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="project-demo-footer">
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="demo-link">
                  <ExternalLink size={16} /> Visit Live Site{" "}
                  {selectedProject.bestViewedOnMobile ? "(Best viewed on mobile)" : ""}
                </a>
              )}
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="demo-link">
                  <Github size={16} /> View Source Code
                </a>
              )}
              {selectedProject.youtubeLink && (
                <a
                  href={selectedProject.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link youtube-link"
                >
                  <Youtube size={16} /> Watch Demo on YouTube
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </motion.div>
  )
}
