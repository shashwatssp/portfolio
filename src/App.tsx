"use client"

import { useEffect, useState, useRef } from "react"
import Terminal from "./components/Terminal"
import Chatbot from "./components/Chatbot"
import AsciiHeader from "./components/AsciiHeader"
import { TypingEffect } from "./components/ui/TypingEffect"
import { ThemeProvider, useTheme } from "./hooks/useTheme"
import { InterfaceModeProvider, useInterfaceMode } from "./hooks/useInterfaceMode"
import { Sun, Moon, MessageSquare, TerminalIcon } from "lucide-react"
import "./styles/global.css"

function AppContent() {
  const [showIntro, setShowIntro] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()
  const { interfaceMode, setInterfaceMode } = useInterfaceMode()

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
    <div className={`app-container ${theme}`}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close"></div>
            <div className="terminal-button minimize"></div>
            <div className="terminal-button maximize"></div>
          </div>
          <div className="terminal-title">shashwat@portfolio:~</div>
          <div className="terminal-controls">
            <button
              className="interface-toggle-button"
              onClick={() => setInterfaceMode(interfaceMode === "terminal" ? "chatbot" : "terminal")}
              aria-label={`Switch to ${interfaceMode === "terminal" ? "chatbot" : "terminal"} interface`}
            >
              {interfaceMode === "terminal" ? <MessageSquare size={16} /> : <TerminalIcon size={16} />}
            </button>
            <button
              className="theme-toggle-button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
        <div className="terminal-content" ref={terminalRef} tabIndex={0}>
          {interfaceMode === "terminal" ? (
            <>
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
            </>
          ) : (
            <Chatbot />
          )}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <InterfaceModeProvider>
        <AppContent />
      </InterfaceModeProvider>
    </ThemeProvider>
  )
}
