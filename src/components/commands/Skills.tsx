"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Database, Globe, Server, Zap } from "lucide-react"

interface Skill {
  name: string
  icon: JSX.Element
  level: number // 1-5
}

export default function Skills() {
  const skills: Record<string, Skill[]> = {
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
                    <span className="skill-icon">{skill.icon}</span>
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
