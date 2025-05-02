"use client"

import type React from "react"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

interface VoiceHintProps {
  onClose: () => void
}

const VoiceHint: React.FC<VoiceHintProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Auto-hide after 10 seconds
    const timer = setTimeout(() => {
      setVisible(false)
      onClose()
    }, 10000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!visible) return null

  return (
    <div className="voice-hint">
      <button
        className="voice-hint-close"
        onClick={() => {
          setVisible(false)
          onClose()
        }}
      >
        <X size={16} />
      </button>
      <p>
        <strong>Voice Mode Available!</strong> Click the microphone icon to speak your questions. Click again to stop
        listening. The button will pulse when active.
      </p>
    </div>
  )
}

export default VoiceHint
