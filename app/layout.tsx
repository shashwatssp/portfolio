import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shashwat Shagun Pandey | Full-Stack Engineer & AI Enthusiast",
  description:
    "Portfolio of Shashwat Shagun Pandey — full-stack engineer building CI/CD platforms, AI agents, and developer tools. Explore projects, experience, and skills.",
  keywords: [
    "Shashwat Shagun Pandey",
    "software engineer",
    "full-stack developer",
    "AI engineer",
    "React",
    "Go",
    "Kubernetes",
    "portfolio",
  ],
  authors: [{ name: "Shashwat Shagun Pandey" }],
  openGraph: {
    title: "Shashwat Shagun Pandey | Full-Stack Engineer & AI Enthusiast",
    description:
      "Full-stack engineer building CI/CD platforms, AI agents, and developer tools. Explore projects, experience, and skills.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwat Shagun Pandey | Full-Stack Engineer & AI Enthusiast",
    description:
      "Full-stack engineer building CI/CD platforms, AI agents, and developer tools.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
