"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import CommandInput from "./CommandInput"
import { useCommandHistory } from "../hooks/useCommandHistory"
import About from "./commands/About"
import Skills from "./commands/Skills"
import Experience from "./commands/Experience"
import Projects from "./commands/Projects"
import Contact from "./commands/Contact"
import Help from "./commands/Help"
import Neofetch from "./commands/Neofetch"
import Resume from "./commands/Resume"
import CodingProfiles from "./commands/CodingProfiles"
import { useMobile } from "../hooks/useMobile"
import { HelpCircle, ExternalLink } from "lucide-react"
import "../styles/terminal.css"
import { useTheme } from "../hooks/useTheme"
import { useInterfaceMode } from "../hooks/useInterfaceMode"

type CommandResult = {
  id: number
  command: string
  output: JSX.Element | string
}

// Define keywords for intelligent link detection
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

// SmartLink component to display links with a description
const SmartLink: React.FC<{ keyword: string; url: string; type: string }> = ({ keyword, url, type }) => {
  return (
    <div className="smart-link">
      <div className="smart-link-header">
        <span className="smart-link-type">{type} Link Detected</span>
      </div>
      <div className="smart-link-content">
        <p>
          I found a reference to <strong>{keyword}</strong> in your message.
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="smart-link-button">
          Visit {keyword} <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

export default function Terminal() {
  const [commandResults, setCommandResults] = useState<CommandResult[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [historyIndex, setHistoryIndex] = useState(-1)
  const { history, addToHistory } = useCommandHistory()
  const terminalRef = useRef<HTMLDivElement>(null)
  const latestOutputRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isMobile = useMobile()
  const { theme } = useTheme()
  const { setInterfaceMode } = useInterfaceMode()

  // Function to check if a command contains any keywords
  const checkForKeywords = (command: string) => {
    const lowercaseCommand = command.toLowerCase()

    // Check all keyword categories
    for (const category in KEYWORDS) {
      const categoryKeywords = KEYWORDS[category as keyof typeof KEYWORDS]

      // Check each keyword in the category
      for (const keyword in categoryKeywords) {
        if (lowercaseCommand.includes(keyword.toLowerCase())) {
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

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase()

    if (trimmedCommand === "") return

    addToHistory(trimmedCommand)

    let output: JSX.Element | string

    // Check for keywords in the command
    const keywordCheck = checkForKeywords(trimmedCommand)

    // Create a unique ID for this command result
    const commandResultId = Date.now()

    // Add the command to results immediately
    setCommandResults((prev) => [
      ...prev,
      {
        id: commandResultId,
        command: trimmedCommand,
        output: "Processing...", // Temporary output while processing
      },
    ])

    // Scroll to the command immediately
    setTimeout(() => {
      const commandElement = document.getElementById(`command-${commandResultId}`)
      if (commandElement) {
        commandElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 50)

    // Process the command with a slight delay to allow scrolling to happen
    setTimeout(() => {
      switch (trimmedCommand) {
        case "about":
          output = <About />
          break
        case "skills":
          output = <Skills />
          break
        case "experience":
          output = <Experience />
          break
        case "projects":
          output = <Projects />
          break
        case "contact":
          output = <Contact />
          break
        case "help":
          output = <Help />
          break
        case "clear":
          setCommandResults([])
          return
        case "neofetch":
          output = <Neofetch />
          break
        case "resume":
          output = <Resume />
          break
        case "coding":
        case "profiles":
        case "coding profiles":
          output = <CodingProfiles />
          break
        case "chatbot":
        case "switch mode":
        case "switch interface":
        case "modern":
          setInterfaceMode("chatbot")
          output = "Switching to chatbot interface..."
          break
        // Add conversational commands
        case "hi":
        case "hello":
        case "hey":
        case "hola":
        case "greetings":
          output = (
            <div className="greeting-response">
              <p>Hello! I'm Shashwat Shagun Pandey, an Associate Software Engineer at Lowe's.</p>
              <p>I'm passionate about web development, app development, and competitive programming.</p>
              <p>
                Type <span className="command-suggestion">help</span> to see what you can ask me about!
              </p>
            </div>
          )
          break
        case "who are you":
        case "introduce yourself":
        case "tell me about yourself":
          output = (
            <div className="greeting-response">
              <p>I'm Shashwat Shagun Pandey, a Computer Science graduate from MMMUT and currently working at Lowe's.</p>
              <p>I specialize in React, Flutter, and have solved 1600+ DSA problems across various platforms.</p>
              <p>
                Type <span className="command-suggestion">about</span> or{" "}
                <span className="command-suggestion">experience</span> to learn more about my background.
              </p>
            </div>
          )
          break
        // Add more utility commands
        case "date":
        case "time":
          output = <div>Current date and time: {new Date().toLocaleString()}</div>
          break
        case "echo":
          output = "Echo command requires text. Try 'echo hello world'"
          break
        // Handle echo with text
        default:
          if (trimmedCommand.startsWith("echo ")) {
            output = trimmedCommand.substring(5)
          } else if (keywordCheck.found) {
            // If a keyword is found, show a smart link
            output = <SmartLink keyword={keywordCheck.keyword} url={keywordCheck.url} type={keywordCheck.type} />
          } else if (trimmedCommand.includes("resume") || trimmedCommand.includes("cv")) {
            output = (
              <div>
                <p>
                  You can view my resume by typing <span className="command-suggestion">resume</span>.
                </p>
                <p>
                  For my experience, type <span className="command-suggestion">experience</span>.
                </p>
                <p>
                  For my education and current role, type <span className="command-suggestion">about</span>.
                </p>
              </div>
            )
          } else if (
            trimmedCommand.includes("contact") ||
            trimmedCommand.includes("email") ||
            trimmedCommand.includes("reach")
          ) {
            output = (
              <div>
                <p>
                  You can contact me by typing <span className="command-suggestion">contact</span> to see all my contact
                  information.
                </p>
              </div>
            )
          } else if (
            trimmedCommand.includes("project") ||
            trimmedCommand.includes("work") ||
            trimmedCommand.includes("portfolio")
          ) {
            output = (
              <div>
                <p>
                  You can view my projects by typing <span className="command-suggestion">projects</span>.
                </p>
              </div>
            )
          } else if (
            trimmedCommand.includes("skill") ||
            trimmedCommand.includes("tech") ||
            trimmedCommand.includes("language")
          ) {
            output = (
              <div>
                <p>
                  You can view my skills by typing <span className="command-suggestion">skills</span>.
                </p>
              </div>
            )
          } else if (trimmedCommand.includes("thank")) {
            output = (
              <div>
                <p>You're welcome! Let me know if there's anything else I can help you with.</p>
              </div>
            )
          } else if (trimmedCommand.includes("coding") || trimmedCommand.includes("profile")) {
            output = (
              <div>
                <p>
                  You can view my coding profiles by typing <span className="command-suggestion">coding profiles</span>.
                </p>
              </div>
            )
          } else if (
            trimmedCommand.includes("chatbot") ||
            trimmedCommand.includes("switch") ||
            trimmedCommand.includes("mode")
          ) {
            setInterfaceMode("chatbot")
            output = "Switching to chatbot interface..."
          } else {
            output = `Command not found: ${trimmedCommand}. Type 'help' to see available commands.`
          }
      }

      // Update the command result with the actual output
      setCommandResults((prev) =>
        prev.map((result) =>
          result.id === commandResultId
            ? {
                id: commandResultId,
                command: trimmedCommand,
                output,
              }
            : result,
        ),
      )

      // Scroll to the command result after updating
      setTimeout(() => {
        const commandElement = document.getElementById(`command-${commandResultId}`)
        if (commandElement) {
          commandElement.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 50)

      setCurrentCommand("")
      setHistoryIndex(-1)

      // Focus the input after executing a command
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)
    }, 100)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentCommand(history[history.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentCommand(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentCommand("")
      }
    }
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCurrentCommand(value)
  }

  useEffect(() => {
    // Auto-scroll to the top of the latest output when new commands are added
    if (latestOutputRef.current) {
      setTimeout(() => {
        latestOutputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }, [commandResults])

  // Show initial help hint if no commands have been entered
  const showHelpHint = commandResults.length === 0

  return (
    <div className={`terminal ${theme}`} ref={terminalRef}>
      {commandResults.map((result, index) => (
        <div
          key={result.id}
          id={`command-${result.id}`} // Added ID for scrolling
          className="command-result"
        >
          <div className="command-line">
            <span className="prompt">shashwat@portfolio:~$</span> {result.command}
          </div>
          <div className="command-output">{result.output}</div>
        </div>
      ))}

      {showHelpHint && (
        <div className="help-hint">
          <HelpCircle size={16} />
          <span>
            Type <span className="command-suggestion">help</span> to see all available commands
          </span>
        </div>
      )}

      <div className="input-container">
        <CommandInput
          ref={inputRef}
          value={currentCommand}
          onChange={handleInputChange}
          onSubmit={() => executeCommand(currentCommand)}
          onKeyDown={handleKeyDown}
        />
        {isMobile && (
          <button
            className="mobile-enter-button"
            onClick={() => executeCommand(currentCommand)}
            aria-label="Execute command"
          >
            Enter
          </button>
        )}
      </div>
    </div>
  )
}
