"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Square, Send, Trash2 } from "lucide-react"

interface VoiceRecorderProps {
  onAudioReady: (audioBlob: Blob, duration: number) => void
  disabled?: boolean
}

export function VoiceRecorder({ onAudioReady, disabled = false }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop()
      }
    }
  }, [isRecording])

  const startRecording = async () => {
    try {
      audioChunksRef.current = []
      setAudioBlob(null)

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
        setAudioBlob(audioBlob)

        // Stop all tracks from the stream
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      startTimeRef.current = Date.now()

      // Start timer to update recording duration
      timerRef.current = setInterval(() => {
        setRecordingDuration(Math.floor((Date.now() - startTimeRef.current) / 1000))
      }, 1000)
    } catch (error) {
      console.error("Error starting recording:", error)
      alert("Could not access microphone. Please check your browser permissions.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const cancelRecording = () => {
    stopRecording()
    setAudioBlob(null)
    setRecordingDuration(0)
  }

  const sendAudio = () => {
    if (audioBlob) {
      onAudioReady(audioBlob, recordingDuration)
      setAudioBlob(null)
      setRecordingDuration(0)
    }
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center gap-2">
      {!isRecording && !audioBlob && (
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
          onClick={startRecording}
          disabled={disabled}
        >
          <Mic className="h-5 w-5" />
          <span className="sr-only">Record voice</span>
        </Button>
      )}

      {isRecording && (
        <>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-medium">{formatDuration(recordingDuration)}</span>
            </div>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-red-500 hover:text-red-600 hover:bg-red-100"
              onClick={stopRecording}
            >
              <Square className="h-4 w-4" />
              <span className="sr-only">Stop recording</span>
            </Button>
          </div>
        </>
      )}

      {audioBlob && !isRecording && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">{formatDuration(recordingDuration)}</span>
          </div>
          <div className="flex gap-1">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-red-500 hover:text-red-600"
              onClick={cancelRecording}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete recording</span>
            </Button>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-primary hover:text-primary/80"
              onClick={sendAudio}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send recording</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
