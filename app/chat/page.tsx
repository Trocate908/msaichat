"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, AlertCircle, Info, Smile, Check, CheckCheck } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TypingIndicator } from "@/components/typing-indicator"
import { EmojiPicker } from "@/components/emoji-picker"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
  read: boolean
  metadata?: {
    source?: string
    detected_language?: string
    confidence?: number
    processing_time?: string
    used_fallback?: boolean
  }
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Mhoro! Ndini MSAI, Milton's Shona Artificial Intelligence. Ndingakubatsira sei nhasi? (Hello! I am MSAI, Milton's Shona Artificial Intelligence. How can I help you today?)",
      timestamp: Date.now(),
      read: true,
      metadata: {
        source: "MSAI System",
        detected_language: "sn",
        confidence: 0.98,
        processing_time: "0.1s",
      },
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)
  const messageContainerRef = useRef<HTMLDivElement>(null)
  const [visibleMessages, setVisibleMessages] = useState<Set<string>>(new Set())

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Set up intersection observer to detect which messages are visible
  useEffect(() => {
    if (!messageContainerRef.current) return

    const options = {
      root: messageContainerRef.current,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const messageId = entry.target.getAttribute("data-message-id")

        if (entry.isIntersecting && messageId) {
          // Mark message as read when it becomes visible
          setMessages((prev) => {
            // Check if we need to update at all to avoid unnecessary re-renders
            const messageToUpdate = prev.find((msg) => msg.id === messageId && msg.role === "assistant" && !msg.read)
            if (!messageToUpdate) return prev

            return prev.map((msg) =>
              msg.id === messageId && msg.role === "assistant" && !msg.read ? { ...msg, read: true } : msg,
            )
          })

          // Add to visible messages set
          setVisibleMessages((prev) => {
            // Check if already in set to avoid unnecessary updates
            if (prev.has(messageId)) return prev

            const newSet = new Set(prev)
            newSet.add(messageId)
            return newSet
          })
        } else if (messageId) {
          // Remove from visible messages set
          setVisibleMessages((prev) => {
            // Check if not in set to avoid unnecessary updates
            if (!prev.has(messageId)) return prev

            const newSet = new Set(prev)
            newSet.delete(messageId)
            return newSet
          })
        }
      })
    }, options)

    // Get all message elements and observe them
    const messageElements = document.querySelectorAll("[data-message-id]")
    messageElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [messages])

  const handleEmojiSelect = (emoji: string) => {
    setInput((prev) => prev + emoji)
    setIsEmojiPickerOpen(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: Date.now(),
      read: false,
    }

    // Add to UI immediately
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      // Prepare context from previous messages for the API
      const context = messages
        .slice(-5) // Use last 5 messages for context
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n")

      // Regular text message with context
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          context: context,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || "API request failed")
      }

      if (!data.response) {
        throw new Error("Empty response received from API")
      }

      // Check if we're using the fallback system
      setUsingFallback(data.used_fallback === true)

      // Simulate a slight delay for a more natural conversation flow
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Create assistant message
      const aiMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.response,
        timestamp: Date.now(),
        read: false,
        metadata: {
          source: data.source,
          detected_language: data.detected_language,
          confidence: data.confidence,
          processing_time: data.processing_time,
          used_fallback: data.used_fallback,
        },
      }

      // Add to UI
      setMessages((prev) => [...prev, aiMessage])

      // Mark user message as read after assistant responds
      setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, read: true } : msg)))
    } catch (error) {
      console.error("Error generating response:", error)
      setError(error instanceof Error ? error.message : "Unknown error occurred")

      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "Ndine urombo, pane dambudziko ratikasangana naro. Edza zvakare gare gare. (I'm sorry, we encountered an error. Please try again later.)",
        timestamp: Date.now(),
        read: false,
        metadata: {
          source: "Error",
          processing_time: "0s",
        },
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      // Focus the input after sending a message
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  // Format timestamp to readable time
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6">
      <Card className="h-[calc(100vh-8rem)] flex flex-col overflow-hidden border-none shadow-xl bg-gradient-to-b from-background to-background/80">
        {/* Chat header with the new logo */}
        <div className="p-5 border-b bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border-2 border-primary/20 overflow-hidden">
              <AvatarImage src="/images/msai-logo.png" alt="MSAI" className="object-cover" />
              <AvatarFallback className="bg-primary text-primary-foreground">MS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold text-xl">MSAI</h2>
              <p className="text-sm text-muted-foreground">Milton's Shona Artificial Intelligence</p>
            </div>
          </div>
        </div>

        {/* Messages area with subtle pattern background */}
        <div
          ref={messageContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 bg-opacity-5 bg-gradient-to-b from-muted/20 to-background"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.025) 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              data-message-id={message.id}
              className={cn(
                "flex animate-in fade-in slide-in-from-bottom-4 duration-300",
                message.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div className={cn("flex gap-4 max-w-[85%]", message.role === "user" ? "flex-row-reverse" : "flex-row")}>
                <Avatar
                  className={cn(
                    "h-10 w-10 transition-all",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ring-2 ring-primary/20"
                      : "bg-secondary text-secondary-foreground",
                  )}
                >
                  {message.role === "assistant" ? (
                    <AvatarImage src="/images/msai-logo.png" alt="MSAI" className="object-cover" />
                  ) : null}
                  <AvatarFallback>{message.role === "user" ? "U" : "MS"}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div
                    className={cn(
                      "rounded-2xl px-5 py-3 shadow-sm text-base relative",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted rounded-tl-none",
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>

                  <div className="flex items-center mt-1 ml-1">
                    <span className="text-xs text-muted-foreground mr-2">{formatTime(message.timestamp)}</span>

                    {message.role === "user" && (
                      <span
                        className={cn(
                          "flex items-center text-xs",
                          message.read ? "text-primary" : "text-muted-foreground/50",
                        )}
                      >
                        {message.read ? <CheckCheck className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" />}
                      </span>
                    )}

                    {message.metadata?.source && (
                      <span className="text-xs text-muted-foreground ml-1 opacity-70">
                        • {message.metadata.source}
                        {message.metadata.used_fallback && " • Fallback Mode"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10 bg-secondary text-secondary-foreground">
                  <AvatarImage src="/images/msai-logo.png" alt="MSAI" className="object-cover" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <TypingIndicator isVisible={true} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Status alerts */}
        <div className="px-4 space-y-2">
          {usingFallback && !error && (
            <Alert className="py-2 bg-yellow-50 border-yellow-200">
              <Info className="h-4 w-4 text-yellow-500" />
              <AlertDescription className="text-xs ml-2 text-yellow-700">
                External API is unavailable. Using MSAI's built-in responses.
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="py-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs ml-2">{error}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Input area */}
        <div className="p-5 border-t bg-gradient-to-r from-background to-muted/30">
          <form onSubmit={handleSubmit} className="flex gap-3 items-end">
            <div className="relative flex-1">
              <Input
                ref={inputRef}
                placeholder={
                  isLoading
                    ? "Ndiri kukupindura... (I'm responding...)"
                    : "Nyora mubvunzo wako pano... (Type your question here...)"
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="pr-14 py-7 text-base bg-background/80 backdrop-blur-sm border-muted rounded-full pl-5 shadow-sm focus-visible:ring-primary"
              />
              <div className="absolute right-3 bottom-3">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full text-muted-foreground hover:text-foreground"
                  disabled={isLoading}
                  onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                >
                  <Smile className="h-6 w-6" />
                  <span className="sr-only">Emoji</span>
                </Button>
                {isEmojiPickerOpen && <EmojiPicker onEmojiSelect={handleEmojiSelect} />}
              </div>
            </div>
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="h-14 w-14 rounded-full shadow-md"
            >
              {isLoading ? (
                <div className="h-6 w-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="h-6 w-6" />
              )}
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
