// Shared typed data for all portfolio modes

export interface Profile {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  linkedin: string
  github: string
  codolio: string
}

export interface Project {
  name: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  link?: string
  github?: string
  youtubeLink?: string
  bestViewedOnMobile?: boolean
  features: string[]
  featured?: boolean
}

export interface Experience {
  company: string
  role: string
  period: string
  achievements: string[]
  metrics?: string
  link?: string
}

export interface Skill {
  name: string
  level: number // 1-5
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface CodingProfile {
  platform: string
  username: string
  url: string
  rating?: string
  description: string
}

export interface Achievement {
  title: string
  description: string
}

export interface Education {
  degree: string
  school: string
  period: string
  cgpa: string
}

// Portfolio Data
export const profile: Profile = {
  name: "Shashwat Shagun Pandey",
  title: "Full-Stack Engineer | AI/ML Enthusiast",
  bio: "Engineer on enterprise CI/CD platforms, building AI agents and scalable systems. Passionate about solving real-world problems with code.",
  email: "shashwtssp@gmail.com",
  phone: "+91-9198880990",
  linkedin: "linkedin.com/in/shashwatssp",
  github: "github.com/shashwatssp",
  codolio: "codolio.com/profile/shashwatssp",
}

export const projects: Project[] = [
  {
    name: "flowchat",
    title: "FlowChat - Multi-Tenant AI SaaS Chatbot Platform",
    description: "Businesses create custom chatbots trained on their own data with RAG pipeline.",
    longDescription:
      "Multi-tenant AI SaaS platform in Go/Gin and Next.js where businesses create custom chatbots via voice input, PDF uploads, or website scraping — with RAG on Qdrant, SSE streaming, appointment booking, and embeddable widgets.",
    techStack: ["Go (Gin)", "Next.js", "Qdrant", "LLM APIs", "RAG"],
    github: "https://github.com/shashwatssp/FlowChat",
    featured: true,
    features: [
      "Train chatbots on voice, PDFs, or websites",
      "RAG pipeline on Qdrant for grounded Q&A",
      "Model-agnostic LLM integration",
      "SSE streaming for real-time responses",
      "Embeddable chat widgets + appointment booking",
    ],
  },
  {
    name: "mockmate",
    title: "MockMate - AI-Powered Test Creation & Assessment",
    description: "Teachers create test papers via voice/PDF; AI-powered feedback and analytics.",
    longDescription:
      "End-to-end AI-powered SaaS where teachers create test papers via voice commands or PDF uploads, with OCR extraction into question banks, student test-taking, AI feedback, and real-time analytics.",
    techStack: ["React", "Supabase", "LLM APIs", "PDF.js", "Tesseract.js"],
    github: "https://github.com/shashwatssp/MockMate",
    featured: true,
    features: [
      "Create test papers via voice commands or PDF uploads",
      "OCR extraction into structured question banks",
      "Student-facing test-taking workflows",
      "AI-powered performance feedback",
      "Real-time analytics dashboards for teachers",
    ],
  },
  {
    name: "invoxa",
    title: "Invoxa - AI-Powered Invoice & AP Automation",
    description: "AI-powered invoice and accounts-payable automation for Indian micro-businesses.",
    longDescription:
      "Automated extraction with confidence scores, GSTIN validation, duplicate detection, human-in-the-loop review queue, plain-English Q&A over books, and exports to CSV, Excel, and Tally XML.",
    techStack: ["Python", "FastAPI", "React", "Supabase", "Docker", "OCR"],
    link: "https://invoxa4u.vercel.app/",
    github: "https://github.com/shashwatssp/Invoxa",
    featured: true,
    features: [
      "Invoice extraction with per-field confidence scores",
      "GSTIN checksum + duplicate + arithmetic validation",
      "Human review queue for flagged invoices",
      "Ask Invoxa: read-only AI answers about your books",
      "Export Center: CSV, XLSX, Tally XML, PDF",
    ],
  },
  {
    name: "fast7",
    title: "Fast7 - SaaS Restaurant Website Builder",
    description: "Mobile-first SaaS platform enabling restaurants to deploy websites in 7 minutes.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Google OAuth"],
    link: "https://fast7.netlify.app/",
    github: "https://github.com/shashwatssp/fast7",
    featured: true,
    bestViewedOnMobile: true,
    features: [
      "Mobile-first architecture",
      "Deploy websites in 7 minutes",
      "Intuitive, responsive interface",
      "Zero coding required",
      "Restaurant management features",
    ],
  },
  {
    name: "transformertrek",
    title: "TransformerTrek - Interactive AI/LLM Learning Platform",
    description: "Interactive visual explanations of transformers, LLMs, retrieval systems, and AI agents.",
    longDescription:
      "33 modules across 7 sections where every widget computes for real in the browser, with knowledge-check quizzes and flashcard-based review.",
    techStack: ["React 19", "TypeScript"],
    link: "https://transformertrek.vercel.app/",
    github: "https://github.com/shashwatssp/TransformerTrek",
    featured: true,
    features: [
      "33 modules across 7 ordered sections",
      "Live computing widgets (attention, BM25, perplexity)",
      "Knowledge-check quizzes per module",
      "Rapid review flashcards",
      "Private by default: no accounts, no tracking",
    ],
  },
  {
    name: "shhhdrop",
    title: "ShhhDrop - Encrypted Anonymous Texting Platform",
    description: "Encrypted anonymous messaging platform with end-to-end security.",
    techStack: ["React", "Firebase", "Vite", "CryptoJs"],
    link: "https://shhhdrop.netlify.app/",
    github: "https://github.com/shashwatssp/shhhdrop",
    bestViewedOnMobile: true,
    features: [
      "End-to-end encryption",
      "Anonymous messaging",
      "No account required",
      "Self-destructing messages",
      "Mobile-responsive design",
    ],
  },
  {
    name: "amazonClone",
    title: "Amazon Clone - Online Shopping App",
    description: "Full-featured shopping app with authentication, cart, and orders.",
    techStack: ["Flutter", "Firebase", "Provider (State Management)"],
    github: "https://github.com/shashwatssp/amazon_clone",
    youtubeLink: "https://www.youtube.com/watch?app=desktop&v=7Yc62ocoToY&feature=youtu.be",
    features: [
      "User authentication",
      "Product browsing and search",
      "Shopping cart functionality",
      "Order processing",
      "User profile management",
    ],
  },
  {
    name: "chessAI",
    title: "ChessVsDeepSeek - Chess Game with AI and Leaderboard",
    description: "Interactive chess game against AI with integrated leaderboard.",
    techStack: ["React", "Vite", "Firebase"],
    link: "https://chessvsdeepseek.netlify.app/",
    github: "https://github.com/shashwatssp/ChessVsDeepSeek",
    youtubeLink: "https://youtu.be/SBCcJfU28OY",
    features: [
      "AI opponent with multiple difficulty levels",
      "Real-time leaderboard",
      "Game history and analysis",
      "Responsive chess board",
      "User authentication",
    ],
  },
  {
    name: "intelliTraffic",
    title: "intelli-Traffic - Smart Traffic Solution",
    description: "AI-powered app solving traffic congestion and public safety issues.",
    techStack: ["Flutter", "Firebase", "LangChain", "OpenAI API"],
    github: "https://github.com/shashwatssp/intelli-Traffic/",
    youtubeLink: "https://youtube.com/watch?v=RO9g0mCYVV8",
    features: [
      "AI-powered traffic analysis",
      "Real-time congestion reporting",
      "Route optimization",
      "Public transportation integration",
      "Emergency vehicle prioritization",
    ],
  },
  {
    name: "memeverse",
    title: "Memeverse - Social Media Platform",
    description: "Social platform for sharing memes with like, comment, and search features.",
    techStack: ["Flutter", "Firebase", "Riverpod (State Management)"],
    github: "https://github.com/shashwatssp/memeverse",
    youtubeLink: "https://www.youtube.com/watch?v=MBdtZxNaYag",
    features: [
      "User authentication",
      "Meme posting and sharing",
      "Like and comment functionality",
      "User profiles",
      "Content search and discovery",
    ],
  },
]

export const experience: Experience[] = [
  {
    company: "Lowe's India",
    role: "Associate Software Engineer",
    period: "Jul 2024 - Present",
    achievements: [
      "Engineer on an enterprise CI/CD platform used by 5,000+ engineers, working across React, Node.js, Go, and Kubernetes as it scaled from 1,000 to 8,000+ projects.",
      "Built an AI agent and MCP Server on Google ADK that lets engineers debug production incidents in natural language against live deployment value files and logs.",
      "Implemented Server-Sent Events (SSE) across the full stack, replacing polling for real-time deployment status across 1000+ weekly deployments.",
      "Built full-stack Istio RBAC management and a service mesh with canary deployments, cutting production incidents by 35%.",
    ],
    metrics: "Raise the Roof Award (Dec 2025) · Q2 Department Award (2026)",
  },
  {
    company: "MFine",
    role: "Software Development Engineer Intern",
    period: "Mar 2024 - Jul 2024",
    achievements: [
      "Contributed to backend services and RESTful APIs for a B2B healthcare platform with 5M+ app downloads, serving 500+ corporates and handling 50K+ daily transactions.",
      "Worked on query optimization with indexing and a Redis caching layer.",
    ],
    metrics: "API response time cut from 800ms to 150ms",
  },
  {
    company: "Cillyfox",
    role: "Software Engineering Intern",
    period: "Jun 2023 - Dec 2023",
    achievements: [
      "Contributed to a full-stack healthcare logistics platform serving 310 hospitals and 76 labs across 8 states, supporting 15K+ daily sample transports with real-time GPS tracking.",
      "Worked on API synchronization with exponential backoff and an offline queue on SQLite for low-connectivity environments.",
    ],
    metrics: "Optimized delivery routing using graph algorithms (Dijkstra's)",
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Go", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Python", level: 4 },
      { name: "C++", level: 4 },
    ],
  },
  {
    name: "AI / LLM",
    skills: [
      { name: "RAG & Vector Search", level: 5 },
      { name: "LangChain", level: 4 },
      { name: "MCP & Google ADK", level: 4 },
      { name: "LLM APIs", level: 5 },
    ],
  },
  {
    name: "Frontend & Backend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "Go (Gin, Fiber)", level: 5 },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Kubernetes", level: 5 },
      { name: "Docker", level: 4 },
      { name: "Istio & Argo CD", level: 4 },
      { name: "CI/CD", level: 5 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 4 },
      { name: "Redis", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "Qdrant", level: 4 },
    ],
  },
]

export const codingProfiles: CodingProfile[] = [
  {
    platform: "CodeChef",
    username: "shashwatssp",
    url: "https://www.codechef.com/users/shashwatssp",
    rating: "3★ (Max Rating: 1690)",
    description: "Achieved Global Rank 49 in CodeChef Starters 102 and Global Rank 156 in CodeChef Starters 67.",
  },
  {
    platform: "Codeforces",
    username: "shashwatssp",
    url: "https://codeforces.com/profile/shashwatssp",
    rating: "Specialist (Max Rating: 1425)",
    description: "Participated in numerous contests and solved a variety of algorithmic problems.",
  },
  {
    platform: "LeetCode",
    username: "shashwatssp",
    url: "https://leetcode.com/u/shashwatssp/",
    rating: "1700+ (850+ problems solved)",
    description: "Rated 1700+ with 850+ DSA problems solved, showcasing strong problem-solving and algorithmic skills.",
  },
  {
    platform: "Codolio",
    username: "shashwatssp",
    url: "https://codolio.com/profile/shashwatssp",
    description: "Comprehensive coding profile showcasing achievements across multiple platforms.",
  },
]

export const achievements: Achievement[] = [
  {
    title: "Raise the Roof Award",
    description: "Lowe's India - Dec 2025",
  },
  {
    title: "Q2 Department Award",
    description: "Lowe's India - 2026",
  },
  {
    title: "Global Rank 49",
    description: "CodeChef Starters 102",
  },
  {
    title: "Global Rank 156",
    description: "CodeChef Starters 67",
  },
  {
    title: "2nd Position at ByteGram",
    description: "Out of 500+ participants",
  },
  {
    title: "1600+ Problems Solved",
    description: "Across multiple coding platforms",
  },
  {
    title: "140+ Contests Participated",
    description: "Demonstrating consistent competitive programming performance",
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    school: "Madan Mohan Malaviya University of Technology, Gorakhpur, India",
    period: "Dec 2020 - May 2024",
    cgpa: "7.91",
  },
]
