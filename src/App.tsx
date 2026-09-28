"use client"

import { useEffect, useState, useRef } from "react"
import Terminal from "./components/Terminal"
import Chatbot from "./components/Chatbot"
import AsciiHeader from "./components/AsciiHeader"
import { TypingEffect } from "./components/ui/TypingEffect"
import { ThemeProvider, useTheme } from "./hooks/useTheme"
import { InterfaceModeProvider, useInterfaceMode } from "./hooks/useInterfaceMode"
import { Sun, Moon } from "lucide-react"
import ModeSwitcher from "./components/ui/ModeSwitcher"
import MatrixBackground from "./components/ui/MatrixBackground"
import MatrixRain from "./components/ui/MatrixRain"
import Website from "./components/website/Website"
import "./styles/global.css"
import "./styles/voice-mode.css"
import "./styles/matrix-rain.css"

function AppContent() {
  const [showIntro, setShowIntro] = useState(true)
  const [showInitialMatrix, setShowInitialMatrix] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()
  const { interfaceMode } = useInterfaceMode()

  const isWebsiteMode = interfaceMode === "website"

  useEffect(() => {
    // Skip intro timers entirely in website mode
    if (isWebsiteMode) return

    // Show matrix rain effect for 3 seconds on initial load
    const matrixTimer = setTimeout(() => {
      setShowInitialMatrix(false)
    }, 3000)

    // Hide intro after typing effect completes
    const introTimer = setTimeout(() => {
      setShowIntro(false)
    }, 4000)

    // Auto-focus the terminal input after intro
    if (terminalRef.current) {
      terminalRef.current.focus()
    }

    return () => {
      clearTimeout(matrixTimer)
      clearTimeout(introTimer)
    }
  }, [isWebsiteMode])

  if (isWebsiteMode) {
    return <Website />
  }

  return (
    <div className={`app-container ${theme}`}>
      {/* Matrix background effect */}
      <MatrixBackground opacity={0.05} />

      {/* Initial loading matrix effect */}
      {showInitialMatrix && (
        <div className="initial-matrix-overlay">
          <MatrixRain className="fullscreen-matrix" />
          <div className="matrix-loading-text">
            <span>Initializing Portfolio...</span>
          </div>
        </div>
      )}

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close"></div>
            <div className="terminal-button minimize"></div>
            <div className="terminal-button maximize"></div>
          </div>
          <div className="terminal-title">
            {interfaceMode === "terminal" ? "Portfolio Terminal" : "Portfolio Chatbot"}
          </div>
          <div className="terminal-controls">
            <ModeSwitcher />
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
