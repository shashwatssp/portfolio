"use client"

import { useState, useEffect } from "react"

const HISTORY_KEY = "terminal_command_history"
const MAX_HISTORY_LENGTH = 50

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY)
    return savedHistory ? JSON.parse(savedHistory) : []
  })

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  }, [history])

  const addToHistory = (command: string) => {
    if (command.trim() === "") return

    // Don't add duplicate of the most recent command
    if (history.length > 0 && history[history.length - 1] === command) {
      return
    }

    setHistory((prev) => {
      const newHistory = [...prev, command]
      // Limit history length
      if (newHistory.length > MAX_HISTORY_LENGTH) {
        return newHistory.slice(newHistory.length - MAX_HISTORY_LENGTH)
      }
      return newHistory
    })
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem(HISTORY_KEY)
  }

  return { history, addToHistory, clearHistory }
}
