// Gemini API integration
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent"

// Resume data to use as context
const RESUME_CONTEXT = `
Shashwat Shagun Pandey is an Associate Software Engineer at Lowe's (Jul 2024 - Present).
Education: Bachelor of Technology in Computer Science and Engineering from Madan Mohan Malaviya University of Technology, Gorakhpur, India (Dec 2020 - May 2024) with CGPA 7.91.

Work Experience:
- Lowe's: Associate Software Engineer (Jul 2024 - Present)
  - Learning React, Golang, and Kubernetes while working on a CI/CD tool
  - Adding new features that enhance user experience

- MFine: SDE Intern (Mar 2024 - Jul 2024)
  - Contributed to the backend of a B2B healthcare product using Node.js, MongoDB, and LoopBack 3
  - Integrated Claim Service and TPA systems for policy year-based claim handling
  - Enhanced search functionality, increasing user efficiency by 25%

- Scaler: Technical Content Writer Intern (Feb 2023 - Mar 2024)
  - Wrote and published articles about App Development and DSA

- Cillyfox: Software Engineering Intern (Jun 2023 - Dec 2023)
  - Enhanced the MJK Sample Transport App, used by 310 hospitals and 76 labs across 8 states
  - Led interface redesign, reducing loading time by 35-40%

Projects:
- Fast7: SaaS Restaurant Website Builder (React, TypeScript, Tailwind CSS)
- ShhhDrop: Encrypted Anonymous Texting Platform (React, Firebase, CryptoJs)
- Amazon Clone: Online-shopping app (Flutter, Firebase)
- ChessVsDeepSeek: Chess Game against AI with Leaderboard (React, Firebase)
- intelli-Traffic: Smart Traffic Solution (Flutter, Firebase, LangChain)
- Memeverse: Social media platform for memes (Flutter, Firebase)

Skills:
- Languages: C++, JavaScript, TypeScript, Dart, C
- Frameworks: Flutter, React, Node.js, Express.js, Firebase
- DevOps: Kubernetes, Docker, CI/CD
- Database: MongoDB, SQL

Achievements:
- Pupil on Codeforces (Max Rating: 1376)
- 3-Star Rated on CodeChef (Max Rating: 1690)
- Global Rank 49 in CodeChef Starters 102
- Global Rank 156 in CodeChef Starters 67
- 2nd Position at ByteGram out of 500+ participants
- Solved 1600+ problems across multiple coding platforms
- Participated in 140+ coding contests

Extracurricular:
- National Service Scheme (Dec 2020 - May 2024)
  - Provided assistance during the pandemic
  - Contributed as a volunteer in humanitarian initiatives
`

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string
      }[]
    }
  }[]
}

console.log("API KEY ",GEMINI_API_KEY);

async function listGeminiModels() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`
    );

    if (!response.ok) {
      console.error("Error listing Gemini models:", await response.text());
      return;
    }

    const data = await response.json();
    console.log("Available Gemini Models:", data);
  } catch (error) {
    console.error("Error calling ListModels API:", error);
  }
}

export async function askGemini(question: string): Promise<string> {
  try {



    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful assistant for Shashwat Shagun Pandey's portfolio website. 
                Answer questions based on the following information about Shashwat. 
                Keep responses concise, friendly, and in first person as if you are Shashwat.
                If you don't know the answer based on the provided information, say so politely.
                
                ${RESUME_CONTEXT}
                
                Question: ${question}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 800,
        },
      }),
    })

    if (!response.ok) {
      console.error("Gemini API error:", await response.text())
      return "I'm having trouble connecting to my AI assistant. Please try asking about my skills, experience, or projects directly."
    }

    const data: GeminiResponse = await response.json()
    return data.candidates[0].content.parts[0].text
  } catch (error) {
    console.error("Error calling Gemini API:", error)
    return "I'm having trouble connecting to my AI assistant. Please try asking about my skills, experience, or projects directly."
  }
}
