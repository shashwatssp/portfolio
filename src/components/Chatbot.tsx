"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, User, Bot, ExternalLink, Code, Cpu, Database, Globe, Server, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../hooks/useTheme"
import { useInterfaceMode } from "../hooks/useInterfaceMode"
import { AchievementCounter } from "./ui/AchievementCounter"
import { askGemini } from "../utils/gemini"
import VoiceButton from "./ui/VoiceButton"
import BrowserCompatibilityMessage from "./ui/BrowserCompatibilityMessage"
import MatrixRain from "./ui/MatrixRain"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  isLink?: boolean
  linkData?: {
    keyword: string
    url: string
    type: string
  }
  component?: "skills" | "experience" | "projects" | "achievements" | "education" | "neofetch" | "thinking" | null
  isSpoken?: boolean
  specificItem?: string // To track which specific item was asked about
}

// Define keywords for intelligent link detection (same as Terminal)
const KEYWORDS = {
  projects: {
    fast7: "https://github.com/shashwatssp/fast7",
    shhhdrop: "https://github.com/shashwatssp/shhhdrop",
    "amazon clone": "https://github.com/shashwatssp/amazon_clone",
    chessvsdeepseek: "https://github.com/shashwatssp/ChessVsDeepSeek",
    "intelli-traffic": "https://github.com/shashwatssp/intelli-Traffic",
    memeverse: "https://github.com/shashwatssp/memeverse",
  },
  platforms: {
    github: "https://github.com/shashwatssp",
    linkedin: "https://linkedin.com/in/shashwatssp",
    codechef: "https://www.codechef.com/users/shashwatssp",
    codeforces: "https://codeforces.com/profile/shashwatssp",
    leetcode: "https://leetcode.com/u/shashwatssp/",
    codolio: "https://codolio.com/profile/shashwatssp",
  },
  companies: {
    "lowe's": "https://www.lowes.com/",
    mfine: "https://www.mfine.co/",
    cillyfox: "https://cillyfox.com/",
    scaler: "https://www.scaler.com/",
  },
}

// Skill component for chatbot
const SkillsComponent = () => {
  const skills: Record<string, { name: string; icon: React.JSX.Element; level: number }[]> = {
    Languages: [
      { name: "C++", icon: <Code size={16} />, level: 5 },
      { name: "JavaScript", icon: <Code size={16} />, level: 4 },
      { name: "TypeScript", icon: <Code size={16} />, level: 4 },
      { name: "Dart", icon: <Code size={16} />, level: 4 },
      { name: "C", icon: <Code size={16} />, level: 3 },
    ],
    Frameworks: [
      { name: "Flutter ⚡", icon: <Zap size={16} />, level: 5 },
      { name: "React ⭐", icon: <Globe size={16} />, level: 5 },
      { name: "Node.js", icon: <Server size={16} />, level: 4 },
      { name: "Express.js", icon: <Server size={16} />, level: 3 },
      { name: "Firebase", icon: <Database size={16} />, level: 4 },
    ],
    DevOps: [
      { name: "Kubernetes ☸️", icon: <Cpu size={16} />, level: 4 },
      { name: "Docker", icon: <Cpu size={16} />, level: 3 },
      { name: "CI/CD", icon: <Cpu size={16} />, level: 4 },
    ],
    Database: [
      { name: "MongoDB", icon: <Database size={16} />, level: 4 },
      { name: "SQL", icon: <Database size={16} />, level: 3 },
    ],
  }

  const renderSkillLevel = (level: number) => {
    return (
      <div className="skill-level">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`skill-dot ${i < level ? "filled" : "empty"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="chatbot-skills">
      <h3 className="chatbot-section-title">Skills Matrix</h3>
      <div className="chatbot-skills-grid">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="chatbot-skill-category">
            <h4 className="category-title">{category}</h4>
            <div className="category-skills">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Experience component for chatbot
const ExperienceComponent = ({ specificCompany = "" }) => {
  const experiences = [
    {
      company: "Lowe's",
      role: "Associate Software Engineer",
      period: "Jul 2024 - Present",
      achievements: [
        "Gaining in-depth expertise in React, Golang, and Kubernetes, while contributing to the development of internal CI, CD, and Pipelines tools.",
        "Added new features that enhanced user experience, making the tool more intuitive and effective for developers.",
      ],
    },
    {
      company: "MFine",
      role: "SDE Intern",
      period: "Mar 2024 - Jul 2024",
      achievements: [
        "Contributed to the backend of a B2B healthcare product using Node.js, MongoDB, and LoopBack 3.",
        "Integrated Claim Service and TPA systems for policy year-based claim handling, improving operational efficiency.",
        "Enhanced search functionality in Console Shylock, increasing user efficiency by 25%.",
      ],
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
        "Enhanced the MJK Sample Transport App, used by 310 hospitals and 76 labs across 8 states, improving delivery efficiency and reducing transportation time by 15-20% using Flutter and Laravel.",
        "Led interface redesign, reducing loading time by 35-40%, and implemented resilient data-saving and optimized API synchronizations for uninterrupted operations.",
      ],
    },
  ]

  // If a specific company is requested, prioritize it
  if (specificCompany) {
    const lowercaseCompany = specificCompany.toLowerCase()
    const prioritizedExperiences = [...experiences].sort((a, b) => {
      const aMatch = a.company.toLowerCase().includes(lowercaseCompany) ? -1 : 0
      const bMatch = b.company.toLowerCase().includes(lowercaseCompany) ? -1 : 0
      return aMatch - bMatch
    })

    return (
      <div className="chatbot-experience">
        <h3 className="chatbot-section-title">Work Experience</h3>
        <div className="chatbot-timeline">
          {prioritizedExperiences.map((exp, index) => (
            <div
              key={index}
              className={`chatbot-timeline-item ${exp.company.toLowerCase().includes(lowercaseCompany) ? "highlighted-experience" : ""}`}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h4 className="company-name">{exp.company}</h4>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Default rendering if no specific company
  return (
    <div className="chatbot-experience">
      <h3 className="chatbot-section-title">Work Experience</h3>
      <div className="chatbot-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="chatbot-timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <h4 className="company-name">{exp.company}</h4>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Projects component for chatbot
const ProjectsComponent = ({ specificProject = "" }) => {
  const projects = [
    {
      name: "Fast7",
      title: "Fast7 (SaaS Restaurant Website Builder)",
      period: "Mar 2025 - Apr 2025",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Google OAuth"],
      description:
        "Engineered a SaaS platform with mobile-first architecture enabling restaurant owners to deploy professional websites within 7 minutes through an intuitive, responsive interface with zero coding required.",
      link: "https://fast7.netlify.app/",
      github: "https://github.com/shashwatssp/fast7",
    },
    {
      name: "ShhhDrop",
      title: "ShhhDrop (Encrypted Anonymous Texting Platform)",
      period: "Feb 2025 - Mar 2025",
      techStack: ["React", "Firebase", "Vite", "CryptoJs"],
      description:
        "Developed an encrypted anonymous messaging platform, ensuring secure communication without identity exposure.",
      link: "https://shhhdrop.netlify.app/",
      github: "https://github.com/shashwatssp/shhhdrop",
    },
    {
      name: "ChessVsDeepSeek",
      title: "ChessVsDeepSeek (Chess Game against AI with Leaderboard)",
      period: "Jan 2025 - Feb 2025",
      techStack: ["React", "Vite", "Firebase"],
      description:
        "Developed an interactive chess game with an AI opponent and integrated a leaderboard to track top players.",
      link: "https://chessvsdeepseek.netlify.app/",
      github: "https://github.com/shashwatssp/ChessVsDeepSeek",
    },
    {
      name: "intelli-Traffic",
      title: "intelli-Traffic (Smart Traffic Solution)",
      period: "Apr 2024 - May 2024",
      techStack: ["Flutter", "Firebase", "LangChain", "OpenAI API"],
      description:
        "Developed an AI-powered app that solves several issues faced by both the public and the government.",
      github: "https://github.com/shashwatssp/intelli-Traffic/",
      youtubeLink: "https://youtube.com/watch?v=RO9g0mCYVV8",
    },
  ]

  // If a specific project is requested, prioritize it
  if (specificProject) {
    const lowercaseProject = specificProject.toLowerCase()
    const prioritizedProjects = [...projects].sort((a, b) => {
      const aMatch = a.name.toLowerCase().includes(lowercaseProject) ? -1 : 0
      const bMatch = b.name.toLowerCase().includes(lowercaseProject) ? -1 : 0
      return aMatch - bMatch
    })

    return (
      <div className="chatbot-projects">
        <h3 className="chatbot-section-title">Projects</h3>
        <div className="chatbot-projects-list">
          {prioritizedProjects.map((project, index) => (
            <div
              key={project.name}
              className={`chatbot-project-item ${project.name.toLowerCase().includes(lowercaseProject) ? "highlighted-project" : ""}`}
            >
              <div className="project-header">
                <h4 className="project-name">{project.title}</h4>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-button">
                    <ExternalLink size={14} /> GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button youtube-link"
                  >
                    <ExternalLink size={14} /> YouTube Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Default rendering if no specific project
  return (
    <div className="chatbot-projects">
      <h3 className="chatbot-section-title">Projects</h3>
      <div className="chatbot-projects-list">
        {projects.map((project, index) => (
          <div key={project.name} className="chatbot-project-item">
            <div className="project-header">
              <h4 className="project-name">{project.title}</h4>
              <span className="project-period">{project.period}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-button">
                  <ExternalLink size={14} /> GitHub
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.youtubeLink && (
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button youtube-link"
                >
                  <ExternalLink size={14} /> YouTube Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Achievements component for chatbot
const AchievementsComponent = ({ specificPlatform = "" }) => {
  const platforms = [
    {
      name: "CodeChef",
      achievements: [
        "3-Star Rated (Max Rating: 1690)",
        "Global Rank 49 in CodeChef Starters 102",
        "Global Rank 156 in CodeChef Starters 67",
      ],
      link: "https://www.codechef.com/users/shashwatssp",
    },
    {
      name: "Codeforces",
      achievements: [
        "Specialist (Max Rating: 1425)", // CHANGED from "Max Rating: 1426"
        "Participated in numerous contests",
        "Solved a variety of algorithmic problems",
      ],
      link: "https://codeforces.com/profile/shashwatssp",
    },
    {
      name: "LeetCode",
      achievements: ["Solved over 600+ DSA problems", "Showcasing strong problem-solving and algorithmic skills"],
      link: "https://leetcode.com/u/shashwatssp/",
    },
    {
      name: "Codolio",
      achievements: ["Comprehensive coding profile showcasing achievements across multiple platforms"],
      link: "https://codolio.com/profile/shashwatssp",
    },
  ]

  // If a specific platform is requested, prioritize it
  if (specificPlatform) {
    const lowercasePlatform = specificPlatform.toLowerCase()
    const prioritizedPlatforms = [...platforms].sort((a, b) => {
      const aMatch = a.name.toLowerCase().includes(lowercasePlatform) ? -1 : 0
      const bMatch = b.name.toLowerCase().includes(lowercasePlatform) ? -1 : 0
      return aMatch - bMatch
    })

    return (
      <div className="chatbot-achievements">
        <h3 className="chatbot-section-title">Coding Achievements</h3>
        <div className="achievement-section">
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-value">
                <AchievementCounter end={1600} suffix="+" />
              </div>
              <div className="achievement-label">DSA Problems Solved</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-value">
                <AchievementCounter end={140} suffix="+" />
              </div>
              <div className="achievement-label">Coding Contests</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-value">
                <AchievementCounter end={49} prefix="Rank " />
              </div>
              <div className="achievement-label">Global Best</div>
            </div>
          </div>
        </div>
        <ul className="chatbot-achievements-list">
          {prioritizedPlatforms.map((platform) => (
            <li
              key={platform.name}
              className={platform.name.toLowerCase().includes(lowercasePlatform) ? "highlighted-platform" : ""}
            >
              <strong>{platform.name}: </strong>
              {platform.achievements.join(", ")}
              <div>
                <a href={platform.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                  View {platform.name} Profile <ExternalLink size={14} />
                </a>
              </div>
            </li>
          ))}
          <li>
            Secured <strong>2nd Position at ByteGram</strong> out of 500+ participants at the university level.
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="chatbot-achievements">
      <h3 className="chatbot-section-title">Achievements</h3>
      <div className="achievement-section">
        <div className="achievements-grid">
          <div className="achievement-item">
            <div className="achievement-value">
              <AchievementCounter end={1600} suffix="+" />
            </div>
            <div className="achievement-label">DSA Problems Solved</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-value">
              <AchievementCounter end={140} suffix="+" />
            </div>
            <div className="achievement-label">Coding Contests</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-value">
              <AchievementCounter end={49} prefix="Rank " />
            </div>
            <div className="achievement-label">Global Best</div>
          </div>
        </div>
      </div>
      <ul className="chatbot-achievements-list">
        <li>
          <strong>Specialist on </strong> {/* CHANGED from "Pupil on" */}
          <a
            href="https://codeforces.com/profile/shashwatssp"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            Codeforces
          </a>{" "}
          (Max Rating: 1425) and <strong>3-Star Rated on </strong> {/* CHANGED from 1376 */}
          <a
            href="https://www.codechef.com/users/shashwatssp"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            CodeChef
          </a>{" "}
          (Max Rating: 1690).
        </li>
        <li>
          Solved <strong>1600+ problems</strong> and participated in <strong>140+ contests</strong> across multiple{" "}
          <a
            href="https://codolio.com/profile/shashwatssp"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            coding platforms
          </a>
          .
        </li>
        <li>
          Achieved{" "}
          <a
            href="https://www.codechef.com/rankings/START102C?itemsPerPage=100&order=asc&page=1&search=shashwatssp&sortBy=rank"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            Global Rank 49
          </a>{" "}
          in CodeChef Starters 102 and{" "}
          <a
            href="https://www.codechef.com/rankings/START67B?itemsPerPage=100&order=asc&page=1&search=shashwatssp&sortBy=rank"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            Global Rank 156
          </a>{" "}
          in CodeChef Starters 67.
        </li>
        <li>
          Secured <strong>2nd Position at ByteGram</strong> out of 500+ participants at the university level.
        </li>
        <li>
          Solved over 700+ DSA problems on{" "}
          <a
            href="https://leetcode.com/u/shashwatssp/"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            LeetCode
          </a>
          , showcasing strong problem-solving and algorithmic skills.
        </li>
      </ul>
    </div>
  )
}

// Education component for chatbot
const EducationComponent = () => {
  return (
    <div className="chatbot-education">
      <h3 className="chatbot-section-title">Education</h3>
      <div className="education-item">
        <div className="education-header">
          <span className="education-degree">Bachelor of Technology - Computer Science and Engineering</span>
          <span className="education-date">Dec 2020 - May 2024</span>
        </div>
        <div className="education-school">Madan Mohan Malaviya University of Technology, Gorakhpur, India</div>
        <div className="education-gpa">CGPA: 7.91</div>
      </div>
      <div className="chatbot-coursework">
        <h4>Relevant Coursework</h4>
        <ul className="coursework-list">
          <li>Data Structures and Algorithms</li>
          <li>Computer Organization and Design</li>
          <li>Database Management Systems</li>
          <li>Operating Systems</li>
          <li>Algorithm Design and Analysis</li>
          <li>Computer Networks</li>
          <li>Software Engineering</li>
          <li>Cloud Computing</li>
          <li>Mobile Computing</li>
        </ul>
      </div>
    </div>
  )
}

// Neofetch component for chatbot
const NeofetchComponent = () => {
  return (
    <div className="chatbot-neofetch">
      <div className="neofetch-container">
        <div className="neofetch-logo">
          <pre className="ascii-small">
            {`
███████╗███████╗██████╗ 
██╔════╝██╔════╝██╔══██╗
███████╗███████╗██████╔╝
╚════██║╚════██║██╔═══╝ 
███████║███████║██║     
╚══════╝╚══════╝╚═╝     
`}
          </pre>
        </div>

        <div className="neofetch-info">
          <div className="info-line">
            <span className="info-label">Name:</span>
            <span className="info-value">Shashwat Shagun Pandey</span>
          </div>
          <div className="info-line">
            <span className="info-label">Role:</span>
            <span className="info-value">Associate Software Engineer @ Lowe's</span>
          </div>
          <div className="info-line">
            <span className="info-label">Education:</span>
            <span className="info-value">B.Tech in Computer Science (MMMUT)</span>
          </div>
          <div className="info-line">
            <span className="info-label">DSA Problems:</span>
            <span className="info-value">
              <AchievementCounter end={1600} suffix="+" />
            </span>
          </div>
          <div className="info-line">
            <span className="info-label">Best Rank:</span>
            <span className="info-value">Global Rank 49 (CodeChef)</span>
          </div>
          <div className="info-line">
            <span className="info-label">Languages:</span>
            <span className="info-value">C++, JavaScript, TypeScript, Dart, C</span>
          </div>
          <div className="info-line">
            <span className="info-label">Frameworks:</span>
            <span className="info-value">React, Flutter, Node.js, Express</span>
          </div>
          <div className="info-line">
            <span className="info-label">DevOps:</span>
            <span className="info-value">Kubernetes, Docker, CI/CD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ThinkingIndicator component with Matrix Rain
const ThinkingIndicator = () => {
  return (
    <div className="matrix-loading">
      <MatrixRain />
      <div className="matrix-thinking">
        <div className="matrix-thinking-text">Processing...</div>
      </div>
    </div>
  )
}

// Render the appropriate component based on the message
const renderComponent = (component: string | null, specificItem?: string) => {
  switch (component) {
    case "skills":
      return <SkillsComponent />
    case "experience":
      return <ExperienceComponent specificCompany={specificItem || ""} />
    case "projects":
      return <ProjectsComponent specificProject={specificItem || ""} />
    case "achievements":
      return <AchievementsComponent specificPlatform={specificItem || ""} />
    case "education":
      return <EducationComponent />
    case "neofetch":
      return <NeofetchComponent />
    case "thinking":
      return <ThinkingIndicator />
    default:
      return null
  }
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Shashwat's portfolio assistant. How can I help you today?",
      sender: "bot",
    },
    {
      id: 2,
      text: "You can ask me about Shashwat's experience, skills, projects, education, or achievements. Try typing 'skills' or 'experience' to get started!",
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const latestMessageRef = useRef<HTMLDivElement>(null)
  const thinkingMessageRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()
  const { setInterfaceMode } = useInterfaceMode()

  // Function to check if a message contains any keywords
  const checkForKeywords = (message: string) => {
    const lowercaseMessage = message.toLowerCase()

    // Check all keyword categories
    for (const category in KEYWORDS) {
      const categoryKeywords = KEYWORDS[category as keyof typeof KEYWORDS]

      // Check each keyword in the category
      for (const keyword in categoryKeywords) {
        if (lowercaseMessage.includes(keyword.toLowerCase())) {
          const url = categoryKeywords[keyword as keyof typeof categoryKeywords]
          const type = category === "projects" ? "Project" : category === "platforms" ? "Platform" : "Company"

          return {
            found: true,
            keyword,
            url,
            type,
          }
        }
      }
    }

    return { found: false }
  }

  // Function to detect specific items being asked about
  const detectSpecificItem = (message: string): { type: string; item: string } | null => {
    const lowercaseMessage = message.toLowerCase()

    // Check for specific projects
    const projectKeywords = ["fast7", "shhhdrop", "amazon clone", "chessvsdeepseek", "intelli-traffic", "memeverse"]
    for (const project of projectKeywords) {
      if (lowercaseMessage.includes(project)) {
        return { type: "projects", item: project }
      }
    }

    // Check for specific companies
    const companyKeywords = ["lowe's", "mfine", "cillyfox", "scaler"]
    for (const company of companyKeywords) {
      if (lowercaseMessage.includes(company)) {
        return { type: "experience", item: company }
      }
    }

    // Check for specific coding platforms
    const platformKeywords = ["codechef", "codeforces", "leetcode", "codolio"]
    for (const platform of platformKeywords) {
      if (lowercaseMessage.includes(platform)) {
        return { type: "achievements", item: platform }
      }
    }

    return null
  }

  const handleSendMessage = async (overrideInput?: string) => {
    const messageToSend = overrideInput || inputValue
    if (messageToSend.trim() === "") return

    // Add user message
    const userMessageId = Date.now()
    const userMessage: Message = {
      id: userMessageId,
      text: messageToSend,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Scroll to the user message
    setTimeout(() => {
      const messageElement = document.getElementById(`message-${userMessageId}`)
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 50)

    // Process the message
    await processUserMessage(messageToSend)
  }

  const processUserMessage = async (messageToSend: string) => {
    // Check for keywords
    const keywordCheck = checkForKeywords(messageToSend)

    // Check for specific items
    const specificItem = detectSpecificItem(messageToSend)

    // Check for interface switch command
    if (
      messageToSend.toLowerCase().includes("terminal") ||
      messageToSend.toLowerCase().includes("switch") ||
      messageToSend.toLowerCase().includes("mode")
    ) {
      const botMessageId = Date.now()
      setMessages((prev) => [
        ...prev,
        {
          id: botMessageId,
          text: "Switching to terminal interface...",
          sender: "bot",
        },
      ])

      // Scroll to the bot message
      setTimeout(() => {
        const messageElement = document.getElementById(`message-${botMessageId}`)
        if (messageElement) {
          messageElement.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 50)

      // Delay the actual switch to allow the message to be seen
      setTimeout(() => {
        setInterfaceMode("terminal")
      }, 1000)
      return
    }

    // Generate bot response
    setTimeout(async () => {
      let botResponse: Message
      const botMessageId = Date.now()

      // Check for specific commands that should render components
      if (
        messageToSend.toLowerCase().includes("skill") ||
        messageToSend.toLowerCase().includes("tech") ||
        messageToSend.toLowerCase().includes("language") ||
        messageToSend.toLowerCase().includes("framework")
      ) {
        botResponse = {
          id: botMessageId,
          text: "Here are Shashwat's skills and technical expertise:",
          sender: "bot",
          component: "skills",
        }
      } else if (specificItem && specificItem.type === "experience") {
        botResponse = {
          id: botMessageId,
          text: `Here's information about Shashwat's experience at ${specificItem.item}:`,
          sender: "bot",
          component: "experience",
          specificItem: specificItem.item,
        }
      } else if (
        messageToSend.toLowerCase().includes("experience") ||
        messageToSend.toLowerCase().includes("work") ||
        messageToSend.toLowerCase().includes("job") ||
        messageToSend.toLowerCase().includes("career")
      ) {
        botResponse = {
          id: botMessageId,
          text: "Here's Shashwat's professional experience:",
          sender: "bot",
          component: "experience",
        }
      } else if (specificItem && specificItem.type === "projects") {
        botResponse = {
          id: botMessageId,
          text: `Here's information about Shashwat's ${specificItem.item} project:`,
          sender: "bot",
          component: "projects",
          specificItem: specificItem.item,
        }
      } else if (messageToSend.toLowerCase().includes("project") || messageToSend.toLowerCase().includes("portfolio")) {
        botResponse = {
          id: botMessageId,
          text: "Here are some of Shashwat's notable projects:",
          sender: "bot",
          component: "projects",
        }
      } else if (specificItem && specificItem.type === "achievements") {
        botResponse = {
          id: botMessageId,
          text: `Here's information about Shashwat's achievements on ${specificItem.item}:`,
          sender: "bot",
          component: "achievements",
          specificItem: specificItem.item,
        }
      } else if (
        messageToSend.toLowerCase().includes("achievement") ||
        messageToSend.toLowerCase().includes("award") ||
        messageToSend.toLowerCase().includes("rank") ||
        messageToSend.toLowerCase().includes("contest") ||
        messageToSend.toLowerCase().includes("competition") ||
        messageToSend.toLowerCase().includes("coding profile")
      ) {
        botResponse = {
          id: botMessageId,
          text: "Here are Shashwat's achievements and coding competition results:",
          sender: "bot",
          component: "achievements",
        }
      } else if (
        messageToSend.toLowerCase().includes("education") ||
        messageToSend.toLowerCase().includes("college") ||
        messageToSend.toLowerCase().includes("university") ||
        messageToSend.toLowerCase().includes("degree") ||
        messageToSend.toLowerCase().includes("school") ||
        messageToSend.toLowerCase().includes("study") ||
        messageToSend.toLowerCase().includes("mmmut")
      ) {
        botResponse = {
          id: botMessageId,
          text: "Here's Shashwat's educational background:",
          sender: "bot",
          component: "education",
        }
      } else if (
        messageToSend.toLowerCase().includes("neofetch") ||
        messageToSend.toLowerCase().includes("system") ||
        messageToSend.toLowerCase().includes("overview") ||
        messageToSend.toLowerCase().includes("summary")
      ) {
        botResponse = {
          id: botMessageId,
          text: "Here's a quick overview of Shashwat's profile:",
          sender: "bot",
          component: "neofetch",
        }
      } else if (keywordCheck.found) {
        // If a keyword is found, create a link message
        botResponse = {
          id: botMessageId,
          text: `I found a reference to ${keywordCheck.keyword}. Here's a link:`,
          sender: "bot",
          isLink: true,
          linkData: {
            keyword: keywordCheck.keyword,
            url: keywordCheck.url,
            type: keywordCheck.type,
          },
        }
      } else {
        // For general questions, use the Gemini API
        // Add a loading message
        const loadingMessageId = Date.now()
        const loadingMessage: Message = {
          id: loadingMessageId,
          text: "Thinking...",
          sender: "bot",
          component: "thinking",
        }
        setMessages((prev) => [...prev, loadingMessage])

        // Scroll to the thinking message
        setTimeout(() => {
          const messageElement = document.getElementById(`message-${loadingMessageId}`)
          if (messageElement) {
            messageElement.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 50)

        // Get response from Gemini API
        const geminiResponse = await askGemini(messageToSend)
        // The function call remains the same, but now it's calling our secure server-side API

        // Remove the loading message and add the actual response
        setMessages((prev) => prev.filter((msg) => msg.text !== "Thinking..."))

        botResponse = {
          id: botMessageId,
          text: geminiResponse, // This exact text will be used for voice output
          sender: "bot",
        }
      }

      setMessages((prev) => [...prev, botResponse])

      // Scroll to the bot message
      setTimeout(() => {
        const messageElement = document.getElementById(`message-${botMessageId}`)
        if (messageElement) {
          messageElement.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }, 500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  // Auto-scroll to the beginning of the newest message when messages change
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1]

      // If it's a thinking message, assign the ref
      if (lastMessage.component === "thinking") {
        setTimeout(() => {
          if (thinkingMessageRef.current) {
            thinkingMessageRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
      // Otherwise, scroll to the beginning of the newest message
      else if (latestMessageRef.current) {
        setTimeout(() => {
          latestMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [messages])

  // Focus input on load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle voice input result
  const handleVoiceInput = (text: string) => {
    // Set the input value to the recognized text
    setInputValue(text)

    // Submit the message
    handleSendMessage(text)
  }

  // Handle bot response from voice input
  const handleVoiceResponse = (response: string) => {
    // Add a visual indicator that this message was spoken
    const lastMessage = messages[messages.length - 1]
    if (lastMessage && lastMessage.sender === "bot") {
      setMessages((prev) => prev.map((msg) => (msg.id === lastMessage.id ? { ...msg, isSpoken: true } : msg)))
    }
  }

  return (
    <div className={`chatbot-container ${theme}`}>
      <div className="chatbot-header">{/* Header without title */}</div>

      <BrowserCompatibilityMessage />

      <div className="messages-container">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              id={`message-${message.id}`} // Added ID for scrolling
              className={`message ${message.sender} ${message.isSpoken ? "spoken" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="message-avatar">{message.sender === "user" ? <User size={16} /> : <Bot size={16} />}</div>
              <div className={`message-content ${message.sender === "bot" ? "bot-message" : ""}`}>
                {message.sender === "bot" ? (
                  <div className="bot-response">
                    <p>{message.text}</p>
                    {message.isLink && message.linkData && (
                      <a href={message.linkData.url} target="_blank" rel="noopener noreferrer" className="chatbot-link">
                        Visit {message.linkData.keyword} <ExternalLink size={14} />
                      </a>
                    )}
                    {message.component && renderComponent(message.component, message.specificItem)}
                  </div>
                ) : (
                  <p>{message.text}</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input-container">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here..."
          className="chatbot-input"
        />
        <div className="voice-controls">
          <VoiceButton
            onSpeechResult={handleVoiceInput}
            onResponseReceived={handleVoiceResponse}
            sendToGemini={askGemini}
          />
        </div>
        <button className="chatbot-send-button" onClick={() => handleSendMessage()} disabled={inputValue.trim() === ""}>
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}
