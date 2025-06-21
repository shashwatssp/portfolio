import { type NextRequest, NextResponse } from "next/server"

// Gemini API integration for Shashwat Shagun Pandey's portfolio
// Use GEMINI_API_KEY (not NEXT_PUBLIC_) for server-side only access
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent"

// Enhanced context with resume information & rich links
const RESUME_CONTEXT = `
Shashwat Shagun Pandey is an Associate Software Engineer at Lowe's, based in Bangalore, India, since July 2024. 
He graduated with a Bachelor of Technology in Computer Science and Engineering from Madan Mohan Malaviya University of Technology, Gorakhpur, in May 2024 with a CGPA of 7.91.

Online Profiles:
- LinkedIn: https://linkedin.com/in/shashwatssp
- GitHub: https://github.com/shashwatssp
- LeetCode: https://leetcode.com/u/shashwatssp/
- Codeforces: https://codeforces.com/profile/shashwatssp
- CodeChef: https://www.codechef.com/users/shashwatssp
- Codolio (coding portfolios): https://codolio.com/profile/shashwatssp

Contact: shashwtssp@gmail.com

PROFESSIONAL EXPERIENCE

• Lowe's (Associate Software Engineer, Jul 2024 - Present)
  - Gaining in-depth expertise in React, Golang, and Kubernetes; contributing to internal CI & CD pipelines tools designed to replace Jenkins.
  - Improved deployment process, increasing efficiency by 15%.
  - Added features to enhance the developer experience and make the tool more intuitive.

• MFine (SDE Intern, Mar 2024 - Jul 2024)
  - Backend development for a B2B healthcare product (Node.js, MongoDB, LoopBack 3).
  - Integrated Claim Service and TPA systems for policy year-based claim handling.
  - Enhanced search functionality (Console Shylock), boosting user efficiency by 25%.

• Scaler (Technical Content Writer Intern (Flutter/Dart/DSA), Feb 2023 - Mar 2024)
  - Wrote and published articles about various technical aspects of App Development and DSA.

• Cillyfox (Software Engineering Intern, Jun 2023 - Dec 2023)
  - Enhanced the MJK Sample Transport App, used by 310 hospitals and 76 labs across 8 states.
  - Interface redesign reduced loading time by 35-40%; implemented resilient offline data saving.

PROJECTS

• Fast7 (SaaS Restaurant Website Builder)
  - Tech Stack: React, TypeScript, Tailwind CSS, Vite, Google OAuth
  - Description: Platform enabling restaurant owners to launch professional mobile-first websites in under 7 minutes.
  - GitHub: https://github.com/shashwatssp/Fast7
  - Live: https://fast7.netlify.app

• ShhhDrop (Encrypted Anonymous Texting Platform)
  - Tech Stack: React, Firebase, Vite, CryptoJs
  - GitHub: https://github.com/shashwatssp/ShhhDrop
  - Live: https://shhhdrop.netlify.app

• ChessVsDeepSeek (Chess vs AI with Leaderboard)
  - Tech Stack: React, Vite, Firebase
  - GitHub: https://github.com/shashwatssp/ChessVsDeepSeek
  - Live: https://chessvsdeepseek.netlify.app

• intelli-Traffic (Smart Traffic Solution)
  - Tech Stack: Flutter, Firebase, LangChain, OpenAI API
  - GitHub: https://github.com/shashwatssp/intelli-Traffic
  - Demo: https://youtube.com/watch?v=RO9g0mCYVV8

Other projects:
  - Amazon Clone (Flutter, Firebase)
  - Memeverse (Flutter, Firebase)

TECHNICAL SKILLS

Languages: C++, JavaScript, TypeScript, Dart, C
Frameworks/Libraries: Flutter, React, Node.js, Express.js, LoopBack 3, Firebase, MongoDB, Spring Boot
Platforms: Android, Web, Windows
DevOps: Kubernetes, Docker, CI/CD
Core Competencies: App Development, Web Development, Competitive Programming, OOPS, SQL, Database Management, System Design

ACHIEVEMENTS

- Specialist on Codeforces (Max Rating: 1426): https://codeforces.com/profile/shashwatssp
- 3-Star on CodeChef (Max Rating: 1690): https://www.codechef.com/users/shashwatssp
- Global Rank 49 in CodeChef Starters 102: https://www.codechef.com/rankings/START102C?itemsPerPage=100&order=asc&page=1&search=shashwatssp&sortBy=rank
- Global Rank 156 in CodeChef Starters 67: https://www.codechef.com/rankings/START67B?itemsPerPage=100&order=asc&page=1&search=shashwatssp&sortBy=rank
- Solved 700+ DSA problems on LeetCode: https://leetcode.com/u/shashwatssp/
- Solved 1600+ problems across multiple platforms; participated in 140+ contests
- 2nd place at ByteGram (among 500+ participants)

EXTRACURRICULAR

- National Service Scheme (Dec 2020 - May 2024): Assisted during the COVID-19 pandemic, contributed as a volunteer in humanitarian initiatives.

Please use the above information to answer questions about Shashwat Shagun Pandey and his work. If a question is outside this scope, politely let the user know.
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

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()

    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API key is not configured" }, { status: 500 })
    }

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
                Always speak in third person as Shashwat's assistant, never pretend to be Shashwat himself.
                Use phrases like "Shashwat has experience in..." or "He worked at..." instead of "I have experience in..." or "I worked at...".
                Keep responses concise, friendly, and informative.
                If you don't know the answer based on the provided information, say so politely.
                
                ${RESUME_CONTEXT}
                
                Question: ${question}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 900,
        },
      }),
    })

    if (!response.ok) {
      console.error("Gemini API error:", await response.text())
      return NextResponse.json(
        {
          text: "I'm having trouble connecting to Shashwat's AI assistant. Please try asking about his skills, experience, or projects directly.",
        },
        { status: 500 },
      )
    }

    const data: GeminiResponse = await response.json()
    return NextResponse.json({ text: data.candidates[0].content.parts[0].text })
  } catch (error) {
    console.error("Error calling Gemini API:", error)
    return NextResponse.json(
      {
        text: "I'm having trouble connecting to Shashwat's AI assistant. Please try asking about his skills, experience, or projects directly.",
      },
      { status: 500 },
    )
  }
}
