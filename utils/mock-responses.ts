// Common Shona greetings and phrases to make responses feel authentic
const shonaGreetings = ["Mhoro! ", "Makadii? ", "Zviri sei? ", "Maswera sei? ", ""]

// Common Shona responses based on message content
const commonResponses: Record<string, string> = {
  hello: "Mhoro! Ndingakubatsira sei nhasi? (Hello! How can I help you today?)",
  hi: "Makadii! Ndini MSAI, ndingakubatsira nei? (Hi! I am MSAI, how can I assist you?)",
  "how are you":
    "Ndiri kunzwa zvakanaka, maita basa kubvunza. Imi makadii? (I am feeling good, thank you for asking. How are you?)",
  "thank you":
    "Ndinofara kukubatsirai. Mune mibvunzo imwe here? (I am happy to help. Do you have any other questions?)",
  help: "Ndingakubatsirei nei? Ndinogona kupindura mibvunzo, kukubatsirai nezvizhinji. (How can I help you? I can answer questions and assist you with many things.)",
  weather:
    "Kuti ndikuudzei nezvemamiriro ekunze, ndinoda kuziva kuti muri kupi. Munogara kupi? (To tell you about the weather, I need to know where you are. Where do you live?)",
  language:
    "Ndinotaura chiShona, mutauro unova wevazhinji muZimbabwe. (I speak Shona, which is a language spoken by many in Zimbabwe.)",
  zimbabwe:
    "Zimbabwe inyika iri muAfrica, ine vanhu vanoda kukosha tsika nemagariro avo. (Zimbabwe is a country in Africa with people who value their culture and way of life.)",
  shona:
    "ChiShona mutauro unova wevazhinji muZimbabwe uye vamwe vanhu vari muMozambique. (Shona is a language spoken by many in Zimbabwe and some people in Mozambique.)",
}

export function generateMockResponse(message: string, isEnglish: boolean): string {
  // Check for common phrases
  const lowercaseMessage = message.toLowerCase()
  for (const [key, value] of Object.entries(commonResponses)) {
    if (lowercaseMessage.includes(key)) {
      return value
    }
  }

  // Generate a contextual response for other queries
  if (isEnglish) {
    // For English queries, respond in Shona with English translation
    const greeting = shonaGreetings[Math.floor(Math.random() * shonaGreetings.length)]

    if (lowercaseMessage.includes("what") || lowercaseMessage.includes("who") || lowercaseMessage.includes("how")) {
      return `${greeting}Mubvunzo wenyu wakanyatsonzwisiswa. Ndiri kutsvaga mhinduro yakakwana. (Your question is understood. I am searching for a complete answer.)`
    } else if (lowercaseMessage.includes("can you") || lowercaseMessage.includes("could you")) {
      return `${greeting}Hongu, ndinogona kukubatsirai neizvi. Ndinoda kuwana ruzivo rwakawanda. (Yes, I can help you with this. I need to gather more information.)`
    } else {
      return `${greeting}Ndanzwa zvamataura. Ndinogona kukubatsirai neizvi. (I understand what you're saying. I can help you with this.)`
    }
  } else {
    // For Shona queries, respond in Shona only
    const greeting = shonaGreetings[Math.floor(Math.random() * shonaGreetings.length)]

    return `${greeting}Ndanzwa mubvunzo wenyu muchiShona. Ndiri kukubatsirai nenzira yakakwana.`
  }
}
