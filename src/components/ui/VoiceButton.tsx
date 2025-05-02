"use client"

import type React from "react"
import { Mic, Volume2, Loader2 } from "lucide-react"
import { useVoiceMode } from "../../hooks/useVoiceMode"

interface VoiceButtonProps {
  onSpeechResult: (text: string) => void
  onResponseReceived: (response: string) => void
  sendToGemini: (prompt: string) => Promise<string>
}

const VoiceButton: React.FC<VoiceButtonProps> = ({ onSpeechResult, onResponseReceived, sendToGemini }) => {
  const { isListening, isSpeaking, isProcessing, isSupported, error, toggleListening, stopSpeaking } = useVoiceMode({
    onSpeechResult,
    onResponseReceived,
    sendToGemini,
  })

  if (!isSupported) {
    return null
  }

  // Determine which button to show based on state
  let ButtonContent
  let buttonClass = "voice-button"
  let ariaLabel = "Voice input"

  if (isListening) {
    ButtonContent = <Mic size={18} />
    buttonClass += " listening"
    ariaLabel = "Stop listening"
  } else if (isSpeaking) {
    ButtonContent = <Volume2 size={18} />
    buttonClass += " speaking"
    ariaLabel = "Stop speaking"
  } else if (isProcessing) {
    ButtonContent = <Loader2 size={18} className="animate-spin" />
    ariaLabel = "Processing voice input"
  } else {
    ButtonContent = <Mic size={18} />
  }

  const handleClick = () => {
    if (isSpeaking) {
      stopSpeaking()
    } else {
      toggleListening()
    }
  }

  return (
    <div className="voice-button-container">
      <button
        className={buttonClass}
        onClick={handleClick}
        disabled={isProcessing}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {ButtonContent}
      </button>
    </div>
  )
}

export default VoiceButton
