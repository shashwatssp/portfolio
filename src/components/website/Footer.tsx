"use client"

import { Heart } from "lucide-react"
import { profile } from "../../data/portfolio"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          Built with <Heart size={12} className="text-red-500" fill="currentColor" /> using Next.js &amp; Tailwind
        </p>
      </div>
    </footer>
  )
}
