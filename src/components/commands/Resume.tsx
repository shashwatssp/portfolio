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
              Learning <strong>React</strong>, <strong>Golang</strong>, and <strong>Kubernetes</strong> while working on
              a CI/CD tool.
            </li>
            <li>
              Added new features that enhanced user experience, making the tool more intuitive and effective for
              developers.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <span className="company-name">MFine</span>
            <span className="experience-date">Mar 2024 - Jul 2024</span>
          </div>
          <div className="role-title">SDE Intern</div>
          <ul className="experience-details">
            <li>
              Contributed to the backend of a B2B healthcare product using <strong>Node.js</strong>,{" "}
              <strong>MongoDB</strong>, and <strong>LoopBack 3</strong>.
            </li>
            <li>
              Integrated <strong>Claim Service</strong> and <strong>TPA</strong> systems for policy year-based claim
              handling, improving operational efficiency.
            </li>
            <li>
              Enhanced search functionality in <strong>Console Shylock</strong>, increasing user efficiency by{" "}
              <strong>25%</strong>.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <span className="company-name">Scaler</span>
            <span className="experience-date">Feb 2023 - Mar 2024</span>
          </div>
          <div className="role-title">Technical Content Writer Intern (Flutter/Dart/DSA)</div>
          <ul className="experience-details">
            <li>
              Wrote and published articles about various technical aspects of <strong>App Development</strong> and{" "}
              <strong>DSA</strong>.
            </li>
            <li>
              <a
                href="https://github.com/shashwatssp/Scaler-Technical-Content-Writing/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Articles <ExternalLink size={14} />
              </a>
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
              Enhanced the <strong>MJK Sample Transport App</strong>, used by <strong>310 hospitals</strong> and{" "}
              <strong>76 labs</strong> across <strong>8 states</strong>, improving delivery efficiency and reducing
              transportation time by <strong>15-20%</strong> using <strong>Flutter</strong> and <strong>Laravel</strong>
              .
            </li>
            <li>
              Led interface redesign, reducing loading time by <strong>35-40%</strong>, and implemented resilient
              data-saving and optimized API synchronizations for uninterrupted operations.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="section-title">Extracurricular Experience</h3>
        <div className="experience-item">
          <div className="experience-header">
            <span className="company-name">National Service Scheme</span>
            <span className="experience-date">Dec 2020 - Present</span>
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
            <span className="skill-list">C++, C, Dart, JavaScript</span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Skills:</span>
            <span className="skill-list">
              App Development, Web Development, Competitive Programming, SQL, Database Management, OOPS
            </span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Frameworks:</span>
            <span className="skill-list">
              Flutter, ReactJs, Firebase, Dart, Node.js, MongoDB, Express.js, LoopBack 3, System Design, Spring Boot
            </span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Platforms:</span>
            <span className="skill-list">Android, Web, Windows</span>
          </div>
          <div className="skill-category">
            <span className="skill-category-name">Coursework:</span>
            <span className="skill-list">
              Data Structures and Algorithms, Programming, Computer Organization and Design, DBMS, Operating Systems,
              Algorithm Design and Analysis, Computer Networks, Software Engineering, Cloud Computing, Mobile Computing
            </span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="section-title">Projects</h3>
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
            <strong>Specialist on </strong>
            <a
              href="https://codeforces.com/profile/shashwatssp"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              Codeforces
            </a>{" "}
            (Max Rating: 1426) and <strong>3-Star Rated on </strong>
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
            Solved over 700+ DSA problems on{" "}
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
