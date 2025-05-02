"use client"

import React from "react"

import { useState, useEffect, createContext, useContext } from "react"

type InterfaceMode = "terminal" | "chatbot"

interface InterfaceModeContextType {
  interfaceMode: InterfaceMode
  setInterfaceMode: (mode: InterfaceMode) => void
}

const InterfaceModeContext = createContext<InterfaceModeContextType>({
  interfaceMode: "terminal",
  setInterfaceMode: () => {},
})

export function InterfaceModeProvider({ children }: { children: React.ReactNode }) {
  const [interfaceMode, setInterfaceMode] = useState<InterfaceMode>("terminal")

  useEffect(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem("interfaceMode") as InterfaceMode | null
    if (savedMode) {
      setInterfaceMode(savedMode)
    }
  }, [])

  const setMode = (mode: InterfaceMode) => {
    setInterfaceMode(mode)
    localStorage.setItem("interfaceMode", mode)
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
