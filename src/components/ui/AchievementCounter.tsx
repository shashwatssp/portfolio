"use client"

import { useState, useEffect } from "react"

interface AchievementCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function AchievementCounter({ end, duration = 2000, prefix = "", suffix = "" }: AchievementCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className="achievement-counter">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
