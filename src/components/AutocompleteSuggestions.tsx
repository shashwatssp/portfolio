"use client"

import type React from "react"
import { Command } from "lucide-react"

interface CommandInfo {
  name: string
  description: string
}

interface AutocompleteSuggestionsProps {
  inputValue: string
  onSelectSuggestion: (suggestion: string) => void
  selectedIndex: number
}

const AutocompleteSuggestions: React.FC<AutocompleteSuggestionsProps> = ({
  inputValue,
  onSelectSuggestion,
  selectedIndex,
}) => {
  // List of available commands with descriptions
  const availableCommands: CommandInfo[] = [
    { name: "help", description: "Show available commands" },
    { name: "about", description: "Display information about Shashwat" },
    { name: "skills", description: "Show Shashwat's technical skills" },
    { name: "experience", description: "Display work experience" },
    { name: "projects", description: "Show portfolio projects" },
    { name: "contact", description: "Display contact information" },
    { name: "resume", description: "View Shashwat's resume" },
    { name: "coding profiles", description: "Show coding platform profiles" },
    { name: "neofetch", description: "Display system information" },
    { name: "clear", description: "Clear the terminal screen" },
    { name: "chatbot", description: "Switch to chatbot interface" },
    { name: "date", description: "Show current date and time" },
    { name: "echo", description: "Echo a message back to the terminal" },
  ]

  // Filter commands based on input
  const filteredCommands = inputValue
    ? availableCommands.filter((cmd) => cmd.name.includes(inputValue.toLowerCase()))
    : []

  if (filteredCommands.length === 0) return null

  // Highlight the matching part of the command
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text

    const index = text.toLowerCase().indexOf(query.toLowerCase())
    if (index === -1) return text

    const before = text.substring(0, index)
    const match = text.substring(index, index + query.length)
    const after = text.substring(index + query.length)

    return (
      <>
        {before}
        <span className="autocomplete-highlight">{match}</span>
        {after}
      </>
    )
  }

  return (
    <div className="autocomplete-container">
      <ul className="autocomplete-list">
        {filteredCommands.map((command, index) => (
          <li
            key={command.name}
            className={`autocomplete-item ${index === selectedIndex ? "selected" : ""}`}
            onClick={() => onSelectSuggestion(command.name)}
          >
            <Command size={14} />
            <span className="command-name">{highlightMatch(command.name, inputValue)}</span>
            <span className="command-description">{command.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AutocompleteSuggestions
