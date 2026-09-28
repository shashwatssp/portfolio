"use client"

import React from "react"

import { useState, useEffect, createContext, useContext } from "react"

export type InterfaceMode = "website" | "terminal" | "chatbot"

interface InterfaceModeContextType {
  interfaceMode: InterfaceMode
  setInterfaceMode: (mode: InterfaceMode) => void
}

const InterfaceModeContext = createContext<InterfaceModeContextType>({
  interfaceMode: "website",
  setInterfaceMode: () => {},
})

export function InterfaceModeProvider({ children }: { children: React.ReactNode }) {
  // Default to website mode for first-time visitors; saved preference wins.
  const [interfaceMode, setInterfaceMode] = useState<InterfaceMode>("website")

  useEffect(() => {
    // Check if user has a saved preference (v2 key: old terminal/chatbot
    // preferences are intentionally ignored so visitors land on the website)
    const savedMode = localStorage.getItem("interfaceMode.v2") as InterfaceMode | null
    if (savedMode === "website" || savedMode === "terminal" || savedMode === "chatbot") {
      setInterfaceMode(savedMode)
    }
  }, [])

  const setMode = (mode: InterfaceMode) => {
    setInterfaceMode(mode)
    localStorage.setItem("interfaceMode.v2", mode)
  }

  return React.createElement(
    InterfaceModeContext.Provider,
    { value: { interfaceMode, setInterfaceMode: setMode } },
    children,
  )
}

export function useInterfaceMode() {
  return useContext(InterfaceModeContext)
}
