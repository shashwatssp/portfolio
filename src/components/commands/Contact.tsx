"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export default function Contact() {
  const contactInfo = {
    email: "shashwtssp@gmail.com",
    linkedin: "linkedin.com/in/shashwatssp",
    github: "github.com/shashwatssp",
    phone: "+91-9198880990",
    codingProfile: "codolio.com/profile/shashwatssp",
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`
  }

  return (
    <motion.div
      className="contact-command"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="command-title">Contact Information</h2>

      <div className="contact-grid">
        <motion.div
          className="contact-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <button className="contact-link" onClick={handleEmailClick}>
              {contactInfo.email}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="contact-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="contact-icon">
            <Linkedin size={24} />
          </div>
          <div className="contact-details">
            <h3>LinkedIn</h3>
            <a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contactInfo.linkedin}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="contact-icon">
            <Github size={24} />
          </div>
          <div className="contact-details">
            <h3>GitHub</h3>
            <a
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contactInfo.github}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="contact-icon">
            <Phone size={24} />
          </div>
          <div className="contact-details">
            <h3>Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="contact-link">
              {contactInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="coding-profiles">
        <h3>Coding Profiles</h3>
        <a
          href={`https://${contactInfo.codingProfile}`}
          target="_blank"
          rel="noopener noreferrer"
          className="coding-profile-link"
        >
          {contactInfo.codingProfile}
        </a>
      </div>

      <div className="contact-message">
        <p>Feel free to reach out for collaboration opportunities or just to say hello!</p>
      </div>
    </motion.div>
  )
}
