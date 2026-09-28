"use client"

import { Globe, TerminalSquare, MessageSquare } from "lucide-react"
import { useInterfaceMode, type InterfaceMode } from "../../hooks/useInterfaceMode"
import type React from "react"

function cn(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(" ")
}

const MODES: Array<{ mode: InterfaceMode; label: string; icon: React.ReactNode }> = [
  { mode: "website", label: "Website", icon: <Globe size={14} /> },
  { mode: "terminal", label: "Terminal", icon: <TerminalSquare size={14} /> },
  { mode: "chatbot", label: "Chat", icon: <MessageSquare size={14} /> },
]

export default function ModeSwitcher({ className }: { className?: string }) {
  const { interfaceMode, setInterfaceMode } = useInterfaceMode()

  return (
    <div
      role="radiogroup"
      aria-label="Interface mode"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border bg-muted/60 p-0.5",
        className,
      )}
    >
      {MODES.map(({ mode, label, icon }) => {
        const active = interfaceMode === mode
        return (
          <button
            key={mode}
            role="radio"
            aria-checked={active}
            aria-label={`${label} mode`}
            title={`${label} mode`}
            onClick={() => setInterfaceMode(mode)}
            className={cn(
              "inline-flex min-h-[32px] items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {icon}
            <span className="hidden sm:inline">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
