"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award, Code, Star } from "lucide-react"

interface CodingProfile {
  platform: string
  username: string
  url: string
  rating?: string
  icon: JSX.Element
  description: string
}

export default function CodingProfiles() {
  const profiles: CodingProfile[] = [
    {
      platform: "CodeChef",
      username: "shashwatssp",
      url: "https://www.codechef.com/users/shashwatssp",
      rating: "3★ (Max Rating: 1690)",
      icon: <Star size={20} />,
      description: "Achieved Global Rank 49 in CodeChef Starters 102 and Global Rank 156 in CodeChef Starters 67.",
    },
    {
      platform: "Codeforces",
      username: "shashwatssp",
      url: "https://codeforces.com/profile/shashwatssp",
      rating: "Pupil (Max Rating: 1376)",
      icon: <Code size={20} />,
      description: "Participated in numerous contests and solved a variety of algorithmic problems.",
    },
    {
      platform: "LeetCode",
      username: "shashwatssp",
      url: "https://leetcode.com/u/shashwatssp/",
      icon: <Code size={20} />,
      description: "Solved over 600+ DSA problems, showcasing strong problem-solving and algorithmic skills.",
    },
    {
      platform: "Codolio",
      username: "shashwatssp",
      url: "https://codolio.com/profile/shashwatssp",
      icon: <Award size={20} />,
      description: "Comprehensive coding profile showcasing achievements across multiple platforms.",
    },
  ]

  return (
    <motion.div
      className="coding-profiles-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">Coding Profiles</h2>

      <p className="profiles-intro">
        I've solved <strong>1600+ problems</strong> and participated in <strong>140+ contests</strong> across multiple
        coding platforms. Here are my profiles:
      </p>

      <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.platform}
            className="profile-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="profile-header">
              <div className="profile-icon">{profile.icon}</div>
              <h3 className="profile-platform">{profile.platform}</h3>
            </div>
            <div className="profile-content">
              <div className="profile-username">
                <span className="username-label">Username:</span> {profile.username}
              </div>
              {profile.rating && (
                <div className="profile-rating">
                  <span className="rating-label">Rating:</span> {profile.rating}
                </div>
              )}
              <p className="profile-description">{profile.description}</p>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="profile-link">
                View Profile <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="achievements-highlight">
        <h3>Key Achievements</h3>
        <ul className="achievements-list">
          <li>
            <strong>Global Rank 49</strong> in CodeChef Starters 102
          </li>
          <li>
            <strong>Global Rank 156</strong> in CodeChef Starters 67
          </li>
          <li>
            <strong>2nd Position</strong> at ByteGram out of 500+ participants
          </li>
          <li>
            Solved <strong>1600+ problems</strong> across multiple platforms
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
