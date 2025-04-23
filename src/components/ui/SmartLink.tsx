"use client"

import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface SmartLinkProps {
  keyword: string
  url: string
  type: string
}

export default function SmartLink({ keyword, url, type }: SmartLinkProps) {
  return (
    <motion.div
      className="smart-link"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="smart-link-header">
        <span className="smart-link-type">{type} Link Detected</span>
      </div>
      <div className="smart-link-content">
        <p>
          I found a reference to <strong>{keyword}</strong> in your message.
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="smart-link-button">
          Visit {keyword} <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  )
}
