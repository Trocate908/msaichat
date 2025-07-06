import { type NextRequest, NextResponse } from "next/server"

// This is a simplified fallback API route that just proxies the request
// to the external API without any processing
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Direct call to the external API
    const apiUrl = `https://apis.davidcyriltech.my.id/ai/gpt4?text=${encodeURIComponent(message)}`

    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    // Return the raw response
    const rawData = await response.text()

    return new Response(rawData, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  } catch (error) {
    console.error("Error in fallback API:", error)
    return NextResponse.json(
      {
        error: "Failed to process request in fallback API",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
