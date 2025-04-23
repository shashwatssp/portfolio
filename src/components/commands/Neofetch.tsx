"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AchievementCounter } from "../ui/AchievementCounter"

export default function Neofetch() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw radar chart background
    ctx.fillStyle = "#111"
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2)
    ctx.fill()

    // Draw radar chart grid
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 1
    for (let i = 1; i <= 5; i++) {
      const radius = i * 24
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2)
      ctx.stroke()
    }

    // Skills data (0-5 scale)
    const skills = [
      { name: "C++", value: 5 },
      { name: "React", value: 5 },
      { name: "Flutter", value: 5 },
      { name: "JavaScript", value: 4 },
      { name: "Node.js", value: 4 },
      { name: "Kubernetes", value: 4 },
      { name: "MongoDB", value: 4 },
      { name: "SQL", value: 3 },
    ]

    const numSkills = skills.length
    const angleStep = (Math.PI * 2) / numSkills

    // Draw skill axes
    ctx.strokeStyle = "#444"
    ctx.lineWidth = 1
    for (let i = 0; i < numSkills; i++) {
      const angle = i * angleStep - Math.PI / 2
      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, canvas.height / 2)
      ctx.lineTo(canvas.width / 2 + Math.cos(angle) * 120, canvas.height / 2 + Math.sin(angle) * 120)
      ctx.stroke()

      // Draw skill labels
      ctx.fillStyle = "#00ffff"
      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      ctx.fillText(skills[i].name, canvas.width / 2 + Math.cos(angle) * 140, canvas.height / 2 + Math.sin(angle) * 140)
    }

    // Draw skill data
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
    ctx.strokeStyle = "#00ff00"
    ctx.lineWidth = 2
    ctx.beginPath()

    for (let i = 0; i < numSkills; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = skills[i].value * 24

      const x = canvas.width / 2 + Math.cos(angle) * value
      const y = canvas.height / 2 + Math.sin(angle) * value

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  }, [])

  return (
    <motion.div
      className="neofetch-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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

      <div className="skills-radar">
        <h3>Skills Radar</h3>
        <canvas ref={canvasRef} className="radar-chart"></canvas>
      </div>

      <div className="achievement-section">
        <h3>Achievements</h3>
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
    </motion.div>
  )
}
