"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"

interface FileUploaderProps {
  onImageSelect: (imageDataUrl: string) => void
  disabled?: boolean
}

export function FileUploader({ onImageSelect, disabled = false }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsLoading(true)

    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      setIsLoading(false)
      return
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB")
      setIsLoading(false)
      return
    }

    // Convert the file to a data URL
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (result) {
        onImageSelect(result)
      }
      setIsLoading(false)
    }
    reader.onerror = () => {
      alert("Error reading file")
      setIsLoading(false)
    }
    reader.readAsDataURL(file)

    // Reset the input so the same file can be selected again
    event.target.value = ""
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        disabled={disabled || isLoading}
      />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
        onClick={handleClick}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <ImageIcon className="h-5 w-5" />
        )}
        <span className="sr-only">Upload image</span>
      </Button>
    </>
  )
}
