import { type NextRequest, NextResponse } from "next/server"

// This is a mock speech-to-text function that simulates transcribing audio
// In a production environment, you would integrate with a real speech recognition service
async function mockTranscribeAudio(audioBase64: string, audioDuration: number): Promise<string> {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // For demo purposes, return different transcriptions based on the audio duration
  // This gives the illusion of actually transcribing different voice notes
  const durationBucket = Math.min(Math.floor(audioDuration / 2), 4)

  const mockTranscriptions = [
    "Mhoro, ndingada kubvunza pamusoro pechiShona. (Hello, I would like to ask about Shona.)",
    "Ndingadzidzei sei kutaura chiShona zvakanaka? (How can I learn to speak Shona well?)",
    "Ndinoda kuziva nezve Zimbabwe netsika dzayo. (I want to know about Zimbabwe and its culture.)",
    "Unogona kundiudza nezve nhoroondo yeZimbabwe here? (Can you tell me about the history of Zimbabwe?)",
    "Ndatenda nerubatsiro rwenyu, maita basa. (Thank you for your help, well done.)",
  ]

  return mockTranscriptions[durationBucket]
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const audioFile = formData.get("audio") as File | null
    const audioDuration = Number(formData.get("duration") || "0")

    if (!audioFile) {
      return NextResponse.json({ error: "No audio provided" }, { status: 400 })
    }

    // Check file type
    if (!audioFile.type.startsWith("audio/")) {
      return NextResponse.json({ error: "File must be an audio recording" }, { status: 400 })
    }

    // Convert audio to base64
    const audioBuffer = await audioFile.arrayBuffer()
    const audioBase64 = Buffer.from(audioBuffer).toString("base64")

    // Transcribe audio
    const transcribedText = await mockTranscribeAudio(audioBase64, audioDuration)

    return NextResponse.json({
      transcription: transcribedText,
      source: "MSAI Voice Recognition",
      detected_language: "sn",
      confidence: 0.82,
      processing_time: "1.8s",
    })
  } catch (error) {
    console.error("Error processing audio:", error)
    return NextResponse.json(
      {
        error: "Failed to process audio",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
