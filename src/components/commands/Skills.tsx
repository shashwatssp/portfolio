"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Database, Globe, Server, Zap } from "lucide-react"
import TechIcon from "../ui/TechIcon"

interface Skill {
  name: string
  icon: JSX.Element
  level: number // 1-5
}

export default function Skills() {
  const skills: Record<string, Skill[]> = {
    Languages: [
      { name: "Go", icon: <Server size={16} />, level: 5 },
      { name: "TypeScript", icon: <Code size={16} />, level: 5 },
      { name: "JavaScript", icon: <Code size={16} />, level: 5 },
      { name: "Python", icon: <Code size={16} />, level: 4 },
      { name: "C++", icon: <Code size={16} />, level: 4 },
    ],
    "AI / LLM": [
      { name: "RAG & Vector Search", icon: <Database size={16} />, level: 5 },
      { name: "LangChain", icon: <Zap size={16} />, level: 4 },
      { name: "MCP & Google ADK", icon: <Cpu size={16} />, level: 4 },
      { name: "LLM APIs", icon: <Globe size={16} />, level: 5 },
    ],
    "Frontend & Backend": [
      { name: "React", icon: <Globe size={16} />, level: 5 },
      { name: "Next.js", icon: <Globe size={16} />, level: 4 },
      { name: "Node.js", icon: <Server size={16} />, level: 4 },
      { name: "Go (Gin, Fiber)", icon: <Server size={16} />, level: 5 },
    ],
    "DevOps & Cloud": [
      { name: "Kubernetes", icon: <Cpu size={16} />, level: 5 },
      { name: "Docker", icon: <Cpu size={16} />, level: 4 },
      { name: "Istio & Argo CD", icon: <Cpu size={16} />, level: 4 },
      { name: "CI/CD", icon: <Zap size={16} />, level: 5 },
    ],
    Databases: [
      { name: "PostgreSQL", icon: <Database size={16} />, level: 4 },
      { name: "Redis", icon: <Database size={16} />, level: 4 },
      { name: "MongoDB", icon: <Database size={16} />, level: 4 },
      { name: "Qdrant", icon: <Database size={16} />, level: 4 },
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
    <motion.div
      className="skills-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">Skills Matrix</h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="category-skills">
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="skill-info">
                    <span className="skill-icon">
                      <TechIcon name={skill.name} size={16} />
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  {renderSkillLevel(skill.level)}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="terminal-tip">
        <span className="tip-prefix">TIP:</span> Type 'neofetch' to see a radar chart of my skills.
      </div>
    </motion.div>
  )
}
