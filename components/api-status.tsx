"use client"

import { useState, useEffect } from "react"

interface ApiStatusProps {
  isProcessing: boolean
  isFallback?: boolean
}

export function ApiStatus({ isProcessing, isFallback = false }: ApiStatusProps) {
  const [dots, setDots] = useState(".")

  useEffect(() => {
    if (!isProcessing) return

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "."
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [isProcessing])

  if (!isProcessing) return null

  return (
    <div className="flex items-center gap-2 text-xs text-gray-500 animate-pulse">
      <div className={`w-2 h-2 ${isFallback ? "bg-yellow-500" : "bg-green-500"} rounded-full`}></div>
      <span>
        {isFallback ? "MSAI Fallback System" : "GPT-4o Mini Shona API"} processing{dots}
      </span>
    </div>
  )
}
