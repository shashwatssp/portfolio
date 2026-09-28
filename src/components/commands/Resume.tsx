"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function Resume() {
  return (
    <motion.div
      className="resume-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">Resume</h2>

      <div className="resume-header">
        <h1 className="resume-name">Shashwat Shagun Pandey</h1>
        <div className="resume-contact">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:shashwtssp@gmail.com" className="contact-link">
              shashwtssp@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">LinkedIn:</span>
            <a
              href="https://in.linkedin.com/in/shashwatssp"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/shashwatssp
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub:</span>
            <a href="https://github.com/shashwatssp" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/shashwatssp
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Mobile:</span>
            <a href="tel:+919198880990" className="contact-link">
              +91-9198880990
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Coding Profiles:</span>
            <a
              href="https://codolio.com/profile/shashwatssp"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              codolio.com/profile/shashwatssp
            </a>
          </div>
        </div>
      </div>

      <section className="resume-section">
        <h3 className="section-title">Education</h3>
        <div className="education-item">
          <div className="education-header">
            <span className="education-degree">Bachelor of Technology - Computer Science and Engineering</span>
            <span className="education-date">Dec 2020 - May 2024</span>
          </div>
          <div className="education-school">Madan Mohan Malaviya University of Technology, Gorakhpur, India</div>
          <div className="education-gpa">CGPA: 7.91</div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="section-title">Experience</h3>
        <div className="experience-item">
          <div className="experience-header">
            <span className="company-name">Lowe's</span>
            <span className="experience-date">Jul 2024 - Present</span>
          </div>
          <div className="role-title">Associate Software Engineer</div>
          <ul className="experience-details">
            <li>
              Engineer on an enterprise <strong>CI/CD platform</strong> used by <strong>5,000+ engineers</strong>,
              working across <strong>React</strong>, <strong>Node.js</strong>, <strong>Go</strong>, and{" "}
              <strong>Kubernetes</strong> as it scaled from 1,000 to 8,000+ projects.
            </li>
            <li>
              Built an <strong>AI agent and MCP Server</strong> on Google Agent Development Kit (ADK) that lets engineers
              debug production incidents in natural language against live deployment value files and logs.
            </li>
            <li>
              Implemented <strong>Server-Sent Events (SSE)</strong> across the full stack to stream live deployment
              status, replacing polling and giving real-time accuracy across <strong>1000+ weekly deployments</strong>.
            </li>
            <li>
              Built full-stack <strong>Istio RBAC</strong> management so teams self-serve authorization policy changes,
              reducing authorization errors by <strong>20%</strong>.
            </li>
            <li>
              Engineered an <strong>Istio service mesh</strong> layer with canary deployments, traffic splitting, and
              fault injection, reducing production incidents by <strong>35%</strong>.
            </li>
            <li>
              Built self-serve diagnostics (<strong>Core Dump, Heap Dump, Thread Dump</strong>), cutting incident
              diagnosis from 4-5 hours to instant and growing adoption to <strong>100+ engineers per week</strong>.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <span className="company-name">MFine</span>
            <span className="experience-date">Mar 2024 - Jul 2024</span>
          </div>
          <div className="role-title">Software Development Engineer Intern</div>
          <ul className="experience-details">
            <li>
              Contributed to backend services and RESTful APIs for a <strong>B2B healthcare platform</strong> with{" "}
              <strong>5M+ app downloads</strong>, serving <strong>500+ corporates</strong> and handling{" "}
              <strong>50K+ daily transactions</strong>.
            </li>
            <li>
              Worked on query optimization with indexing and a <strong>Redis caching layer</strong>, helping cut API
              response time from <strong>800ms to 150ms</strong>.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <span className="company-name">Cillyfox</span>
            <span className="experience-date">Jun 2023 - Dec 2023</span>
          </div>
          <div className="role-title">Software Engineering Intern</div>
          <ul className="experience-details">
            <li>
              Contributed to a full-stack healthcare logistics platform serving <strong>310 hospitals</strong> and{" "}
              <strong>76 labs</strong> across <strong>8 states</strong>, supporting <strong>15K+ daily sample
              transports</strong> with real-time GPS tracking.
            </li>
            <li>
              Worked on API synchronization with <strong>exponential backoff</strong> and an <strong>offline queue on
              SQLite</strong> for time-sensitive sample tracking in low-connectivity environments.
            </li>
            <li>
              Helped optimize delivery routing using <strong>graph algorithms</strong> and <strong>Dijkstra's
              algorithm</strong> to reduce sample delivery time.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="section-title">Extracurricular Experience</h3>
        <div className="experience-item">
          <div className="experience-header">
            <span className="company-name">National Service Scheme</span>
            <span className="experience-date">Dec 2020 - May 2024</span>
          </div>
          <ul className="experience-details">
            <li>
              Provided vital assistance in locating ICU beds, oxygen cylinders, and life-saving drugs during the
              pandemic
            </li>
            <li>Contributed as a volunteer in diverse humanitarian initiatives</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="section-title">Skills Summary</h3>
        <div className="skills-summary">
          <div className="skill-category">
            <span className="skill-category-name">Languages:</span>
            <span className="skill-list">Go, JavaScript, TypeScript, C++, Python, SQL</span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Frontend:</span>
            <span className="skill-list">React, Next.js, Redux, Vite, Tailwind CSS, HTML5, CSS3</span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Backend:</span>
            <span className="skill-list">
              Node.js, Express.js, Go (Gin, Fiber), REST APIs, Microservices, Event-Driven Architecture, SSE
            </span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Databases:</span>
            <span className="skill-list">
              PostgreSQL, Redis, Elasticsearch, MongoDB, MySQL, SQLite, Firebase, Supabase, Qdrant
            </span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">AI / LLM:</span>
            <span className="skill-list">Python, RAG, Vector Search, Embeddings, LangChain, MCP, Google ADK, LLM APIs</span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Cloud & DevOps:</span>
            <span className="skill-list">Kubernetes, Docker, Istio, Argo CD, CI/CD, Cloudflare Workers</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="section-title">Projects</h3>
        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/Invoxa"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Invoxa <ExternalLink size={14} />
              </a>{" "}
              (AI-Powered Invoice & AP Automation)
            </h4>
            <span className="project-date">Aug 2026</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> Python, FastAPI, React, Supabase, Docker, OCR.{" "}
            <a
              href="https://invoxa4u.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Link <ExternalLink size={14} />
            </a>
          </div>
          <ul className="project-details">
            <li>
              AI-powered invoice and accounts-payable automation for <strong>Indian micro-businesses</strong>: extraction
              with per-field <strong>confidence scores</strong>, <strong>GSTIN checksum</strong> validation, duplicate
              detection, and line-item arithmetic reconciliation.
            </li>
            <li>
              Auto-books clean invoices or routes uncertain ones to a <strong>human review queue</strong>; includes
              plain-English Q&A over your books and an Export Center (CSV, Excel, Tally XML, PDF).
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/TransformerTrek"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                TransformerTrek <ExternalLink size={14} />
              </a>{" "}
              (Interactive AI/LLM Learning Platform)
            </h4>
            <span className="project-date">Sep 2026</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> React 19, TypeScript.{" "}
            <a
              href="https://transformertrek.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Link <ExternalLink size={14} />
            </a>
          </div>
          <ul className="project-details">
            <li>
              Interactive, visual explanations of transformers, LLMs, retrieval systems (<strong>RAG</strong>), and
              agents (<strong>MCP, A2A</strong>) — <strong>33 modules across 7 sections</strong> with prerequisites,
              quizzes, and flashcard review.
            </li>
            <li>
              Every widget <strong>computes for real</strong> in the browser: attention playground multiplies actual
              matrices, BM25 lab scores a real corpus — nothing is faked.
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/FlowChat"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                FlowChat <ExternalLink size={14} />
              </a>{" "}
              (Multi-Tenant AI SaaS Chatbot Platform)
            </h4>
            <span className="project-date">Jul 2026 - Aug 2026</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> Go (Gin), Next.js, Qdrant, LLM APIs, RAG.
          </div>
          <ul className="project-details">
            <li>
              Businesses create custom chatbots trained on their own data via <strong>voice input, PDF uploads, or
              website scraping</strong>.
            </li>
            <li>
              Implemented a <strong>RAG pipeline on Qdrant</strong> for context-aware Q&A, with model-agnostic LLM
              integration, <strong>SSE streaming</strong>, calendar-based appointment booking, and embeddable chat
              widgets.
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/MockMate"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                MockMate <ExternalLink size={14} />
              </a>{" "}
              (AI-Powered Test Creation & Assessment)
            </h4>
            <span className="project-date">Aug 2025 - Aug 2026</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> React, Supabase, LLM APIs, PDF.js, Tesseract.js.
          </div>
          <ul className="project-details">
            <li>
              Teachers create test papers via <strong>voice commands or PDF uploads</strong>, with a dedicated extraction
              service converting PDFs into structured question banks via <strong>OCR</strong>.
            </li>
            <li>
              Student-facing test-taking workflows with <strong>AI-powered performance feedback</strong> and real-time
              analytics dashboards for teachers.
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/Fast7"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Fast7 <ExternalLink size={14} />
              </a>{" "}
              (SaaS Restaurant Website Builder)
            </h4>
            <span className="project-date">Mar 2025 - Apr 2025</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> React, TypeScript, Tailwind CSS, Vite, Google OAuth.{" "}
            <a href="https://fast7.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link">
              Live Link <ExternalLink size={14} />
            </a>{" "}
            (Best viewed on mobile)
          </div>
          <ul className="project-details">
            <li>
              Engineered a <strong>SaaS platform</strong> with <strong>mobile-first architecture</strong> enabling
              restaurant owners to <strong>deploy professional websites</strong> within 7 minutes through an intuitive,
              responsive interface with <strong>zero coding required</strong>.
            </li>
            <li>
              Implemented robust restaurant management features including <strong>order control toggles</strong>,{" "}
              <strong>menu item customization</strong>, and <strong>dynamic photo selection</strong> for seamless
              digital menu presentation and business operations.
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/ShhhDrop/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                ShhhDrop <ExternalLink size={14} />
              </a>{" "}
              (Encrypted Anonymous Texting Platform)
            </h4>
            <span className="project-date">Feb 2025 - Mar 2025</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> React, Firebase, Vite, CryptoJs.{" "}
            <a href="https://shhhdrop.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
              Live Link <ExternalLink size={14} />
            </a>{" "}
            (Best viewed on mobile)
          </div>
          <ul className="project-details">
            <li>
              Developed an encrypted anonymous messaging platform, ensuring secure communication without identity
              exposure.
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/amazon_clone"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Amazon Clone <ExternalLink size={14} />
              </a>{" "}
              (Online-shopping app)
            </h4>
            <span className="project-date">Feb 2023 - Mar 2023</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> Flutter, Firebase, Provider (State Management).{" "}
            <a
              href="https://www.youtube.com/watch?app=desktop&v=7Yc62ocoToY&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Demo Link <ExternalLink size={14} />
            </a>
          </div>
          <ul className="project-details">
            <li>Developed a shopping app with multiple screens, like Sign-Up, Login, Home, Cart, Product screens.</li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/ChessVsDeepSeek"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                ChessVsDeepSeek <ExternalLink size={14} />
              </a>{" "}
              (Chess Game against AI with Leaderboard)
            </h4>
            <span className="project-date">Jan 2025 - Feb 2025</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> React, Vite, Firebase.{" "}
            <a
              href="https://chessvsdeepseek.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Link <ExternalLink size={14} />
            </a>
          </div>
          <ul className="project-details">
            <li>
              Developed an interactive chess game with an AI opponent and integrated a leaderboard to track top players.
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp/intelli-Traffic/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                intelli-Traffic <ExternalLink size={14} />
              </a>{" "}
              (Smart Traffic Solution)
            </h4>
            <span className="project-date">Apr 2024 - May 2024</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> Flutter, Firebase, LangChain, OpenAI API.{" "}
            <a
              href="https://youtube.com/watch?v=RO9g0mCYVV8"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Demo Link <ExternalLink size={14} />
            </a>
          </div>
          <ul className="project-details">
            <li>
              Developed an <strong>AI-powered app</strong> that solves several issues faced by both the public and the
              government.
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              <a
                href="https://github.com/shashwatssp"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Memeverse <ExternalLink size={14} />
              </a>{" "}
              (A social media platform)
            </h4>
            <span className="project-date">Oct 2022 - Nov 2022</span>
          </div>
          <div className="project-tech">
            <strong>Tech Stack:</strong> Flutter, Firebase, Riverpod (State Management).{" "}
            <a
              href="https://www.youtube.com/watch?v=MBdtZxNaYag"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Demo Link <ExternalLink size={14} />
            </a>
          </div>
          <ul className="project-details">
            <li>
              Developed a social media platform for sharing memes, with features such as liking, commenting, and
              searching.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="section-title">Achievements</h3>
        <ul className="achievements-list-resume">
          <li>
            Awarded <strong>Raise the Roof Award</strong> (Dec 2025) for platform reliability improvements and{" "}
            <strong>Q2 Department Award</strong> (2026) for engineering impact at Lowe's India.
          </li>
          <li>
            <strong>Specialist on </strong>
            <a
              href="https://codeforces.com/profile/shashwatssp"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              Codeforces
            </a>{" "}
            (Max Rating: 1425) and <strong>3-Star Rated on </strong>
            <a
              href="https://www.codechef.com/users/shashwatssp"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              CodeChef
            </a>{" "}
            (Max Rating: 1690).
          </li>
          <li>
            Solved <strong>1600+ problems</strong> and participated in <strong>140+ contests</strong> across multiple{" "}
            <a
              href="https://codolio.com/profile/shashwatssp"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              coding platforms
            </a>
            .
          </li>
          <li>
            Achieved{" "}
            <a
              href="https://www.codechef.com/rankings/START102C?itemsPerPage=100&order=asc&page=1&search=shashwatssp&sortBy=rank"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              Global Rank 49
            </a>{" "}
            in CodeChef Starters 102 and{" "}
            <a
              href="https://www.codechef.com/rankings/START67B?itemsPerPage=100&order=asc&page=1&search=shashwatssp&sortBy=rank"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              Global Rank 156
            </a>{" "}
            in CodeChef Starters 67.
          </li>
          <li>
            Secured <strong>2nd Position at ByteGram</strong> out of 500+ participants at the university level.
          </li>
          <li>
            Rated <strong>1700+</strong> with <strong>850+ problems</strong> solved on{" "}
            <a
              href="https://leetcode.com/u/shashwatssp/"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              LeetCode
            </a>
            , showcasing strong problem-solving and algorithmic skills.
          </li>
        </ul>
      </section>
    </motion.div>
  )
}
