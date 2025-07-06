"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function TypingIndicator({ isVisible = false }: { isVisible: boolean }) {
  const [dots, setDots] = useState<number[]>([0, 0, 0])

  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    const interval = setInterval(() => {
      setDots((prev) => {
        const newDots = [...prev]
        // Reset all dots
        newDots[0] = 0
        newDots[1] = 0
        newDots[2] = 0
        // Set current dot to active
        newDots[currentIndex] = 1

        // Move to next dot
        currentIndex = (currentIndex + 1) % 3
        return newDots
      })
    }, 300)

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="flex items-center space-x-2 px-5 py-3 rounded-lg bg-muted w-fit">
      {dots.map((active, i) => (
        <div
          key={i}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 ease-in-out",
            active ? "bg-primary scale-100 opacity-100" : "bg-gray-300 scale-75 opacity-70",
          )}
        />
      ))}
    </div>
  )
}
