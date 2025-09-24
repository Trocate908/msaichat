import { type NextRequest, NextResponse } from "next/server"
import { generateMockResponse } from "@/utils/mock-responses"

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    // Detect language (simplified)
    const isEnglish = /^[a-zA-Z0-9\s.,!?'"-]+$/.test(message)

    // Prepare the message for the API
    let apiMessage = isEnglish
      ? `Respond in Shona with English translation in parentheses. User message: ${message}`
      : `This message is in Shona language. Respond in Shona. User message: ${message}`

    // Add context if available
    if (context) {
      apiMessage = `Previous conversation:\n${context}\n\n${apiMessage}`
    }

    let result
    let source = "GPT-4o Mini Shona API"
    let usedFallback = false

    try {
      // Try the external API first
      const apiUrl = `https://apis.davidcyriltech.my.id/ai/gpt4omini?text=${encodeURIComponent(apiMessage)}`

      const startTime = Date.now()
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
        },
        // Add a timeout to prevent hanging requests
        signal: AbortSignal.timeout(10000), // 10 second timeout
      })
      const processingTime = ((Date.now() - startTime) / 1000).toFixed(2)

      if (!response.ok) {
        console.warn(`API responded with status: ${response.status}`)
        throw new Error(`API responded with status: ${response.status}`)
      }

      // Try to parse the response
      const rawData = await response.text()
      console.log("Raw API response:", rawData)

      try {
        const data = JSON.parse(rawData)
        if (typeof data === "string") {
          result = data
        } else if (data && typeof data.result === "string") {
          result = data.result
        } else if (data && typeof data.response === "string") {
          result = data.response
        } else if (data && typeof data.message === "string") {
          result = data.message
        } else if (data && typeof data.text === "string") {
          result = data.text
        } else if (data && typeof data.content === "string") {
          result = data.content
        } else {
          // If we can't find a suitable property, use the raw text
          result = rawData
        }
      } catch (e) {
        // If it's not valid JSON, use the raw text
        result = rawData
      }

      return NextResponse.json({
        response: result,
        source: source,
        detected_language: isEnglish ? "en" : "sn",
        confidence: 0.95,
        processing_time: `${processingTime}s`,
        used_fallback: usedFallback,
      })
    } catch (apiError) {
      // If the external API fails, use our mock response
      console.log("External API failed, using mock response:", apiError)
      result = generateMockResponse(message, isEnglish)
      source = "MSAI Fallback System"
      usedFallback = true

      return NextResponse.json({
        response: result,
        source: source,
        detected_language: isEnglish ? "en" : "sn",
        confidence: 0.9,
        processing_time: "0.1s",
        used_fallback: usedFallback,
      })
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      {
        error: "Failed to process request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
