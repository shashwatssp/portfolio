"use client"

import { useState, useEffect, useCallback } from "react"

// Define types for the Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
  resultIndex: number
}

// Define the hook props and return type
interface UseVoiceModeProps {
  onSpeechResult: (text: string) => void
  onSpeechStart?: () => void
  onSpeechEnd?: () => void
  onSpeechError?: (error: string) => void
}

interface UseVoiceModeReturn {
  isListening: boolean
  startListening: () => void
  stopListening: () => void
  speak: (text: string) => void
  isSpeaking: boolean
  cancelSpeech: () => void
}

export function useVoiceMode({
  onSpeechResult,
  onSpeechStart,
  onSpeechEnd,
  onSpeechError,
}: UseVoiceModeProps): UseVoiceModeReturn {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)

  // Initialize speech recognition
  useEffect(() => {
    // Check if browser supports speech recognition
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      console.error("Speech recognition is not supported in this browser")
      return
    }

    // Create speech recognition instance
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognitionInstance = new SpeechRecognition()

    // Configure recognition
    recognitionInstance.continuous = false
    recognitionInstance.interimResults = false
    recognitionInstance.lang = "en-US"

    // Set up event handlers
    recognitionInstance.onstart = () => {
      setIsListening(true)
      if (onSpeechStart) onSpeechStart()
    }

    recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[event.resultIndex][0].transcript
      if (onSpeechResult) onSpeechResult(transcript)
    }

    recognitionInstance.onerror = (event: any) => {
      if (onSpeechError) onSpeechError(event.error)
      setIsListening(false)
    }

    recognitionInstance.onend = () => {
      setIsListening(false)
      if (onSpeechEnd) onSpeechEnd()
    }

    setRecognition(recognitionInstance)

    // Clean up
    return () => {
      if (recognitionInstance) {
        recognitionInstance.abort()
      }
    }
  }, [onSpeechResult, onSpeechStart, onSpeechEnd, onSpeechError])

  // Start listening
  const startListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.start()
      } catch (error) {
        console.error("Error starting speech recognition:", error)
      }
    }
  }, [recognition])

  // Stop listening
  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop()
    }
  }, [recognition])

  // Text-to-speech function
  const speak = useCallback((text: string) => {
    if (!("speechSynthesis" in window)) {
      console.error("Speech synthesis is not supported in this browser")
      return
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "en-US"

    utterance.onstart = () => {
      setIsSpeaking(true)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
    }

    utterance.onerror = (event) => {
      console.error("Speech synthesis error:", event)
      setIsSpeaking(false)
    }

    window.speechSynthesis.speak(utterance)
  }, [])

  // Cancel speech
  const cancelSpeech = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [])

  return {
    isListening,
    startListening,
    stopListening,
    speak,
    isSpeaking,
    cancelSpeech,
  }
}
