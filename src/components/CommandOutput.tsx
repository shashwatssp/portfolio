import type React from "react"
interface CommandOutputProps {
  children: React.ReactNode
}

export default function CommandOutput({ children }: CommandOutputProps) {
  return <div className="command-output">{children}</div>
}
