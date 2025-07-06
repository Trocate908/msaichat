import { type NextRequest, NextResponse } from "next/server"

// This is a mock OCR function that simulates extracting text from images
// In a production environment, you would integrate with a real OCR service like Google Cloud Vision API
async function mockExtractTextFromImage(imageBase64: string): Promise<string> {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // For demo purposes, return different text based on the image content hash
  // This gives the illusion of actually reading different images
  const hash = imageBase64.length % 5

  const mockResponses = [
    'Ndaona mufananidzo uyu uine mashoko anoti: "Mhoro, Zimbabwe! Tinofara kukubatsira nhasi." (I see an image with text saying: "Hello, Zimbabwe! We are happy to help you today.")',
    "Mufananidzo uyu une mashoko anotaura nezve ruzivo rwemutauro wechiShona. (This image has text about knowledge of the Shona language.)",
    "Ndaona mufananidzo une mazita nenhamba. Ndinogona kuverenga izvi: 1. Milton, 2. Tendai, 3. Chiedza. (I see an image with names and numbers. I can read: 1. Milton, 2. Tendai, 3. Chiedza.)",
    "Mufananidzo uyu unotaridzika sechiratidzo kana kuti bhodi rezviratidzo rine mashoko akasiyana-siyana. (This image appears to be a sign or notice board with various messages.)",
    "Ndaona mufananidzo une tsamba kana kuti gwaro rine mashoko mazhinji. Ndinogona kuverenga chikamu charo. (I see an image with a letter or document containing lots of text. I can read parts of it.)",
  ]

  return mockResponses[hash]
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const imageFile = formData.get("image") as File | null

    if (!imageFile) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    // Check file type
    if (!imageFile.type.startsWith("image/")) {
      return NextResponse.json({ error: "File must be an image" }, { status: 400 })
    }

    // Convert image to base64
    const imageBuffer = await imageFile.arrayBuffer()
    const imageBase64 = Buffer.from(imageBuffer).toString("base64")

    // Extract text from image
    const extractedText = await mockExtractTextFromImage(imageBase64)

    return NextResponse.json({
      response: extractedText,
      source: "MSAI Image Analysis",
      detected_language: "sn",
      confidence: 0.85,
      processing_time: "2.3s",
    })
  } catch (error) {
    console.error("Error processing image:", error)
    return NextResponse.json(
      {
        error: "Failed to process image",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
