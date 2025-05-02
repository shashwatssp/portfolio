"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface UseVoiceModeProps {
  onSpeechResult: (text: string) => void
  onResponseReceived: (response: string) => void
  sendToGemini: (prompt: string) => Promise<string>
}

export function useVoiceMode({ onSpeechResult, onResponseReceived, sendToGemini }: UseVoiceModeProps) {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSupported, setIsSupported] = useState(true)

  // Use refs instead of state for objects that shouldn't trigger re-renders
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Initialize speech recognition and synthesis
  useEffect(() => {
    // Check if the browser supports the Web Speech API
    if (!("SpeechRecognition" in window) && !("webkitSpeechRecognition" in window)) {
      setIsSupported(false)
      setError("Your browser doesn't support speech recognition")
      return
    }

    if (!("speechSynthesis" in window)) {
      setIsSupported(false)
      setError("Your browser doesn't support speech synthesis")
      return
    }

    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent
    const SpeechRecognitionErrorEvent = window.SpeechRecognitionErrorEvent || window.webkitSpeechRecognitionErrorEvent

    recognitionRef.current = new SpeechRecognition()
    recognitionRef.current.continuous = false
    recognitionRef.current.interimResults = false
    recognitionRef.current.lang = "en-US"

    // Initialize speech synthesis
    synthRef.current = window.speechSynthesis
    utteranceRef.current = new SpeechSynthesisUtterance()

    // Clean up
    return () => {
      stopListening()
      stopSpeaking()
    }
  }, []) // Empty dependency array ensures this only runs once

  // Set up speech recognition event handlers
  useEffect(() => {
    if (!recognitionRef.current) return

    const handleResult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript
      if (transcript.trim()) {
        setIsListening(false)
        setIsProcessing(true)
        onSpeechResult(transcript)

        // Process with Gemini
        processWithGemini(transcript)
      }
    }

    const handleError = (event: SpeechRecognitionErrorEvent) => {
      setError(`Speech recognition error: ${event.error}`)
      setIsListening(false)
    }

    const handleEnd = () => {
      if (isListening) {
        setIsListening(false)
      }
    }

    recognitionRef.current.onresult = handleResult
    recognitionRef.current.onerror = handleError
    recognitionRef.current.onend = handleEnd
  }, [isListening, onSpeechResult])

  // Process the transcript with Gemini
  const processWithGemini = async (transcript: string) => {
    try {
      const response = await sendToGemini(transcript)
      onResponseReceived(response)

      // Use the exact same response text for speech
      speakResponse(response)
    } catch (err) {
      setError(`Error processing with Gemini: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setIsProcessing(false)
    }
  }

  // Start listening
  const startListening = useCallback(() => {
    if (!recognitionRef.current) return

    try {
      setError(null)
      setIsListening(true)
      recognitionRef.current.start()
    } catch (err) {
      setError(`Could not start speech recognition: ${err instanceof Error ? err.message : String(err)}`)
      setIsListening(false)
    }
  }, [])

  // Stop listening
  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return

    try {
      recognitionRef.current.stop()
      setIsListening(false)
    } catch (err) {
      setError(`Could not stop speech recognition: ${err instanceof Error ? err.message : String(err)}`)
    }
  }, [])

  // Speak the response - ensuring it matches exactly what's displayed
  const speakResponse = useCallback((text: string) => {
    if (!synthRef.current || !utteranceRef.current) return

    try {
      // Cancel any ongoing speech
      stopSpeaking()

      // Use the exact text that's displayed on screen
      utteranceRef.current.text = text
      utteranceRef.current.rate = 1.0
      utteranceRef.current.pitch = 1.0
      utteranceRef.current.volume = 1.0

      utteranceRef.current.onstart = () => setIsSpeaking(true)
      utteranceRef.current.onend = () => setIsSpeaking(false)
      utteranceRef.current.onerror = (event) => {
        setError(`Speech synthesis error: ${event.error}`)
        setIsSpeaking(false)
      }

      synthRef.current.speak(utteranceRef.current)
    } catch (err) {
      setError(`Could not speak response: ${err instanceof Error ? err.message : String(err)}`)
    }
  }, [])

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (!synthRef.current) return

    try {
      synthRef.current.cancel()
      setIsSpeaking(false)
    } catch (err) {
      setError(`Could not stop speech synthesis: ${err instanceof Error ? err.message : String(err)}`)
    }
  }, [])

  // Toggle listening
  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }, [isListening, startListening, stopListening])

  return {
    isListening,
    isSpeaking,
    isProcessing,
    isSupported,
    error,
    toggleListening,
    stopSpeaking,
    speakResponse,
  }
}
