import { type NextRequest, NextResponse } from "next/server"

// Gemini API integration for Shashwat Shagun Pandey's portfolio
// Use GEMINI_API_KEY (not NEXT_PUBLIC_) for server-side only access
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta/models"

// Models to try in order. Google retires models periodically (gemini-2.0-flash-lite
// was retired in 2026), so we fall back instead of hard-coding a single model.
// "gemini-flash-latest" is a rolling alias maintained by Google for the latest stable Flash model.
const GEMINI_MODELS = ["gemini-3.5-flash-lite", "gemini-flash-latest", "gemini-3.5-flash"]

// Enhanced context with resume information & rich links
const RESUME_CONTEXT = `
Shashwat Shagun Pandey is an Associate Software Engineer at Lowe's India, based in Bengaluru, India, since July 2024.
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

• Lowe's India (Associate Software Engineer, Jul 2024 - Present)
  - Engineer on an enterprise CI/CD platform used by 5,000+ engineers, working across React, Node.js, Go, and Kubernetes as it scaled from 1,000 to 8,000+ projects.
  - Built an AI agent and MCP Server on Google Agent Development Kit (ADK) that lets engineers debug production incidents in natural language against live deployment value files and logs.
  - Implemented Server-Sent Events (SSE) across the full stack to stream live deployment status, replacing polling and giving real-time accuracy across 1000+ weekly deployments.
  - Built full-stack Istio RBAC management so teams self-serve authorization policy changes across hundreds of microservices, reducing authorization errors by 20%.
  - Shipped a multi-image deployment system with dev/staging/prod promotion pipelines on PostgreSQL and event-driven architecture, accelerating release cycles by 25%.
  - Built self-serve diagnostics (Core Dump, Heap Dump, Thread Dump), cutting incident diagnosis from 4-5 hours to instant and growing adoption from 7-8 to 100+ engineers per week.
  - Eliminated cross-pod contention by serializing requests through a DB-backed queue, raising success rate from 75% to 99%.
  - Engineered an Istio service mesh layer with canary deployments, traffic splitting, and fault injection, reducing production incidents by 35%.
  - Awards: Raise the Roof Award (Dec 2025) for platform reliability improvements; Q2 Department Award (2026) for engineering impact.

• MFine (Software Development Engineer Intern, Mar 2024 - Jul 2024)
  - Backend services and RESTful APIs for a B2B healthcare platform with 5M+ app downloads, serving 500+ corporates and handling 50K+ daily transactions.
  - Query optimization with indexing and a Redis caching layer, cutting API response time from 800ms to 150ms.

• Cillyfox (Software Engineering Intern, Jun 2023 - Dec 2023)
  - Full-stack healthcare logistics platform serving 310 hospitals and 76 labs across 8 states, supporting 15K+ daily sample transports with real-time GPS tracking.
  - API synchronization with exponential backoff and an offline queue on SQLite; optimized delivery routing using Dijkstra's algorithm.

PROJECTS

• Invoxa (AI-powered invoice & accounts-payable automation for Indian micro-businesses)
  - Tech Stack: Python, FastAPI, React, Supabase, Docker, OCR
  - Description: Upload a vendor invoice and Invoxa reads it, validates it (GSTIN checksum, duplicate detection, line-item arithmetic), auto-books clean invoices or routes them to a human review queue, and answers questions about your books in plain English. Includes an Export Center (CSV, Excel, Tally XML, PDF) and WhatsApp share-to-upload PWA support.
  - GitHub: https://github.com/shashwatssp/Invoxa
  - Live: https://invoxa4u.vercel.app

• TransformerTrek (Interactive, visual explanations of how AI/LLMs actually work)
  - Tech Stack: React 19, TypeScript
  - Description: 33 modules across 7 sections covering transformers, LLMs, retrieval systems (RAG), and agents (MCP, A2A). Every widget computes for real in the browser — attention playground, BM25 lab, perplexity lab — with knowledge-check quizzes and flashcard-based review.
  - GitHub: https://github.com/shashwatssp/TransformerTrek
  - Live: https://transformertrek.vercel.app

• FlowChat (Multi-tenant AI SaaS chatbot platform)
  - Tech Stack: Go (Gin), Next.js, Qdrant, LLM APIs, RAG
  - Description: Businesses create custom chatbots trained on their own data via voice input, PDF uploads, or website scraping. RAG pipeline on Qdrant, model-agnostic LLM integration, SSE streaming, calendar-based appointment booking, and embeddable chat widgets.

• MockMate (AI-powered test creation & assessment platform)
  - Tech Stack: React, Supabase, LLM APIs, PDF.js, Tesseract.js
  - Description: Teachers create test papers via voice commands or PDF uploads; an extraction service converts PDFs into structured question banks via OCR. Student-facing test-taking workflows with AI-powered performance feedback and real-time analytics dashboards.

• Fast7 (SaaS Restaurant Website Builder)
  - Tech Stack: React, Vite, Google OAuth, Firebase, Ola Maps API
  - Description: Platform enabling restaurant owners to launch SEO-optimized, mobile-first websites in under 7 minutes with zero coding.
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

Languages: Go, JavaScript, TypeScript, C++, Python, SQL
Frontend: React, Next.js, Redux, Vite, Tailwind CSS
Backend: Node.js, Express.js, Go (Gin, Fiber), REST APIs, Microservices, Event-Driven Architecture, SSE
Databases: PostgreSQL, Redis, Elasticsearch, MongoDB, MySQL, SQLite, Firebase, Supabase, Qdrant
AI/LLM: Python, RAG, Vector Search, Embeddings, LangChain, MCP, Google ADK, LLM APIs
Cloud & DevOps: Kubernetes, Docker, Istio, Argo CD, CI/CD, Cloudflare Workers

ACHIEVEMENTS

- Raise the Roof Award (Dec 2025) and Q2 Department Award (2026) at Lowe's India
- Specialist on Codeforces (Max Rating: 1425): https://codeforces.com/profile/shashwatssp
- 3-Star on CodeChef (Max Rating: 1690): https://www.codechef.com/users/shashwatssp
- Global Rank 49 in CodeChef Starters 102; Global Rank 156 in CodeChef Starters 67
- Rated 1700+ on LeetCode with 850+ problems solved: https://leetcode.com/u/shashwatssp/
- 1,600+ problems solved and 140+ contests across multiple platforms
- 2nd place at ByteGram (among 500+ participants)

Please use the above information to answer questions about Shashwat Shagun Pandey and his work. If a question is outside this scope, politely let the user know.
`

interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: {
        text?: string
      }[]
    }
  }[]
}

const SYSTEM_PROMPT = `You are a helpful assistant for Shashwat Shagun Pandey's portfolio website.
Answer questions based on the following information about Shashwat.
Always speak in third person as Shashwat's assistant, never pretend to be Shashwat himself.
Use phrases like "Shashwat has experience in..." or "He worked at..." instead of "I have experience in..." or "I worked at...".
Keep responses concise, friendly, and informative.
If you don't know the answer based on the provided information, say so politely.`

async function callGemini(model: string, question: string): Promise<{ ok: boolean; status?: number; text?: string }> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 30000)

  try {
    const response = await fetch(`${GEMINI_API_BASE}/${model}:generateContent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Prefer the header over a ?key= query param so the key never lands in server logs
        "x-goog-api-key": GEMINI_API_KEY as string,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\n${RESUME_CONTEXT}\n\nQuestion: ${question}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 900,
        },
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      console.error(`Gemini API error (${model}, status ${response.status}):`, await response.text())
      return { ok: false, status: response.status }
    }

    const data: GeminiResponse = await response.json()
    const text = data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("")
      .trim()

    if (!text) {
      console.error(`Gemini API returned an empty candidate (${model})`)
      return { ok: false }
    }

    return { ok: true, text }
  } catch (error) {
    console.error(`Error calling Gemini API (${model}):`, error)
    return { ok: false }
  } finally {
    clearTimeout(timeout)
  }
}

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()

    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set. Add it to .env (local) or the hosting provider's env vars.")
      return NextResponse.json({ error: "Gemini API key is not configured" }, { status: 500 })
    }

    // Try models in order; give up early only on auth problems where a retry can't help.
    let lastStatus: number | undefined
    for (const model of GEMINI_MODELS) {
      const result = await callGemini(model, question)
      if (result.ok && result.text) {
        return NextResponse.json({ text: result.text })
      }
      lastStatus = result.status
      if (lastStatus === 401 || lastStatus === 403) break
    }

    return NextResponse.json(
      {
        text: "I'm having trouble connecting to Shashwat's AI assistant. Please try asking about his skills, experience, or projects directly.",
      },
      { status: lastStatus === 401 || lastStatus === 403 ? 502 : 500 },
    )
  } catch (error) {
    console.error("Error handling Gemini request:", error)
    return NextResponse.json(
      {
        text: "I'm having trouble connecting to Shashwat's AI assistant. Please try asking about his skills, experience, or projects directly.",
      },
      { status: 500 },
    )
  }
}
