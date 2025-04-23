"use client"

import { motion } from "framer-motion"

interface CommandInfo {
  name: string
  description: string
}

export default function Help() {
  const commands: CommandInfo[] = [
    { name: "about", description: "Display education and current role information" },
    { name: "skills", description: "Show skills matrix with proficiency levels" },
    { name: "experience", description: "View work experience timeline" },
    { name: "projects", description: "Browse interactive list of projects" },
    { name: "contact", description: "Get contact information and social links" },
    { name: "resume", description: "View my full resume with clickable links" },
    { name: "coding profiles", description: "View my coding profiles and achievements" },
    { name: "neofetch", description: "Display system information and skills radar chart (Easter egg)" },
    { name: "clear", description: "Clear the terminal screen" },
    { name: "help", description: "Show this help message" },
    { name: "hello/hi", description: "Get a friendly greeting and brief introduction" },
    { name: "date/time", description: "Display the current date and time" },
    { name: "echo [text]", description: "Display the text you type after 'echo'" },
    { name: "chatbot", description: "Switch to the modern chatbot interface" },
    { name: "[project/platform name]", description: "Get a direct link to a project or platform" },
  ]

  return (
    <motion.div
      className="help-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">Available Commands</h2>

      <div className="commands-list">
        {commands.map((cmd, index) => (
          <motion.div
            key={cmd.name}
            className="command-item"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <span className="command-name">{cmd.name}</span>
            <span className="command-description">{cmd.description}</span>
          </motion.div>
        ))}
      </div>

      <div className="help-tip">
        <p>Type any command and press Enter to execute.</p>
        <p>Use the Up and Down arrow keys to navigate through command history.</p>
        <p>On mobile devices, use the Enter button to execute commands.</p>
        <p>You can also try typing project names like "Fast7" or platforms like "GitHub" to get direct links.</p>
        <p>Use the buttons in the top-right corner to switch between terminal/chatbot modes and dark/light themes.</p>
      </div>
    </motion.div>
  )
}
