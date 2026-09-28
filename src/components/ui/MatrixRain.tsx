"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface MatrixRainProps {
  className?: string
}

const MatrixRain: React.FC<MatrixRainProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent. Assigning width/height clears the
    // canvas, so skip when unchanged to avoid visible flashes.
    let lastWidth = 0
    let lastHeight = 0
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      if (parent.clientWidth === lastWidth && parent.clientHeight === lastHeight) return
      lastWidth = parent.clientWidth
      lastHeight = parent.clientHeight
      canvas.width = lastWidth
      canvas.height = lastHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix rain characters
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track the y position of each column
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height)
    }

    // Precomputed strings — per-frame allocations cause GC pauses (flicker)
    const fadeStyle = "rgba(0, 0, 0, 0.05)"
    const dropStyle = "#00ff00" // Matrix green
    const font = `${fontSize}px monospace`

    // Draw the matrix rain
    const draw = () => {
      ctx.fillStyle = fadeStyle
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = dropStyle
      ctx.font = font

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        drops[i]++

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
    }

    // Throttled to 24fps — smooth rain, far less GPU/GC stutter
    const FRAME_MS = 1000 / 24
    let animationId = 0
    let lastFrame = 0
    const animate = (timestamp: number) => {
      animationId = requestAnimationFrame(animate)
      if (timestamp - lastFrame < FRAME_MS) return
      lastFrame = timestamp
      draw()
    }

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      draw() // single static frame, no loop
    } else {
      animationId = requestAnimationFrame(animate)
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`matrix-rain ${className}`} />
}

export default MatrixRain
