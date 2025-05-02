// Client-side utility for Gemini API - NO API KEYS HERE
// This file only contains the client-side function to call our secure API endpoint

/**
 * Sends a question to the Gemini API via our secure server endpoint
 * @param question The question to ask Gemini
 * @returns The response text from Gemini
 */
export async function askGemini(question: string): Promise<string> {
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    })

    if (!response.ok) {
      console.error("API error:", await response.text())
      return "I'm having trouble connecting to Shashwat's AI assistant. Please try asking about his skills, experience, or projects directly."
    }

    const data = await response.json()
    return data.text
  } catch (error) {
    console.error("Error calling API:", error)
    return "I'm having trouble connecting to Shashwat's AI assistant. Please try asking about his skills, experience, or projects directly."
  }
}
