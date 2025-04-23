"use client"

import { useEffect, useState, useRef } from "react"
import Terminal from "./components/Terminal"
import AsciiHeader from "./components/AsciiHeader"
import { TypingEffect } from "./components/ui/TypingEffect"
import "./styles/global.css"

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Auto-focus the terminal input on load
    if (terminalRef.current) {
      terminalRef.current.focus()
    }

    // Hide intro after typing effect completes
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close"></div>
            <div className="terminal-button minimize"></div>
            <div className="terminal-button maximize"></div>
          </div>
          <div className="terminal-title">shashwat@portfolio:~</div>
        </div>
        <div className="terminal-content" ref={terminalRef} tabIndex={0}>
          <AsciiHeader />
          {showIntro ? (
            <TypingEffect
              text="Initializing portfolio... Welcome to Shashwat's terminal. Type 'hi' to start or 'help' to see all available commands."
              speed={30}
              className="intro-text"
            />
          ) : (
            <Terminal />
          )}
        </div>
      </div>
    </div>
  )
}
