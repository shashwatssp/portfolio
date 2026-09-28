"use client"

import { useEffect } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import Achievements from "./Achievements"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Website() {
  useEffect(() => {
    // Switch body to website-mode styles (normal scroll, sans font) and
    // restore the terminal-era overflow:hidden / 100vh constraints on exit.
    document.body.classList.add("website-mode")
    // Always start at the top so no content is ever hidden mid-page on load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
    return () => document.body.classList.remove("website-mode")
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <button
        onClick={() => document.getElementById("main")?.focus()}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </button>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
