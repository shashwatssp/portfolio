"use client"

import type React from "react"

import { useEffect, useRef, forwardRef } from "react"

interface CommandInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
}

const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  ({ value, onChange, onSubmit, onKeyDown }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      // Auto-focus the input
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, [])

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        onSubmit()
      }
      onKeyDown(e)
    }

    // Handle clicks on the terminal to focus the input
    useEffect(() => {
      const handleTerminalClick = () => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }

      document.querySelector(".terminal")?.addEventListener("click", handleTerminalClick)

      return () => {
        document.querySelector(".terminal")?.removeEventListener("click", handleTerminalClick)
      }
    }, [])

    return (
      <div className="command-line-container">
        <span className="prompt">shashwat@portfolio:~$</span>
        <input
          ref={(node) => {
            // Handle both the forwarded ref and the local ref
            if (typeof ref === "function") {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
            inputRef.current = node
          }}
          type="text"
          className="command-input"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyPress}
          autoFocus
          spellCheck="false"
          autoComplete="off"
          aria-label="Command input"
        />
      </div>
    )
  },
)

CommandInput.displayName = "CommandInput"

export default CommandInput
