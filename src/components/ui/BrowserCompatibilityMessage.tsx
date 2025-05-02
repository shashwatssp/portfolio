import type React from "react"
import { AlertTriangle } from "lucide-react"

const BrowserCompatibilityMessage: React.FC = () => {
  // Check if the browser supports the Web Speech API
  const isSpeechRecognitionSupported =
    typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)

  const isSpeechSynthesisSupported = typeof window !== "undefined" && "speechSynthesis" in window

  // If both are supported, don't show the message
  if (isSpeechRecognitionSupported && isSpeechSynthesisSupported) {
    return null
  }

  return (
    <div className="browser-compatibility-message">
      <AlertTriangle size={16} />
      <span>Voice features may not work in your browser. For the best experience, use Chrome, Edge, or Safari.</span>
    </div>
  )
}

export default BrowserCompatibilityMessage
