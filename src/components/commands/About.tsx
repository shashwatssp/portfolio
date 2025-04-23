"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div
      className="about-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">About Me</h2>

      <div className="about-section">
        <h3>Education</h3>
        <div className="education-item">
          <div className="education-header">
            <span className="education-degree">Bachelor of Technology - Computer Science and Engineering</span>
            <span className="education-date">Dec 2020 - May 2024</span>
          </div>
          <div className="education-school">Madan Mohan Malaviya University of Technology, Gorakhpur, India</div>
          <div className="education-gpa">CGPA: 7.91</div>
        </div>
      </div>

      <div className="about-section">
        <h3>Current Role</h3>
        <div className="current-role">
          <div className="role-title">Associate Software Engineer at Lowe's</div>
          <div className="role-period">Jul 2024 - Present</div>
          <ul className="role-responsibilities">
            <li>Learning React, Golang, and Kubernetes while working on a CI/CD tool</li>
            <li>
              Adding new features that enhance user experience, making the tool more intuitive and effective for
              developers
            </li>
          </ul>
        </div>
      </div>

      <div className="terminal-tip">
        <span className="tip-prefix">TIP:</span> Type 'experience' to see my full work history.
      </div>
    </motion.div>
  )
}
