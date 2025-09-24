import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Phone, Mail, Code, Zap, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="mx-auto relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
            <Image src="/images/msai-logo.png" alt="MSAI Logo" fill className="object-cover" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent px-4">
              Nezve MSAI
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground px-4">
              Milton's Shona Artificial Intelligence
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground px-4">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-center">Bridging Language Barriers with AI Technology</span>
            </div>
          </div>
        </div>

        {/* MSAI Overview */}
        <Card className="border-0 shadow-lg sm:shadow-2xl bg-gradient-to-br from-background to-muted/30 mx-2 sm:mx-0">
          <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              Chii MSAI?
            </CardTitle>
            <CardDescription className="text-base sm:text-lg">Ruzivo rweMSAI nezvainobatsira</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 text-center max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-base sm:text-lg leading-relaxed">
              MSAI (Milton's Shona Artificial Intelligence) iAI yakagadzirirwa vanhu vanotaura chiShona. Yakaumbwa kuti
              ibatsire vanhu vachishandisa mutauro wavo wekumusha, pasina dambudziko rekushandisa chirungu.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground italic">
              (MSAI is an AI designed for Shona speakers. It was created to help people use their native language
              without the barrier of having to communicate in English.)
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-6">
              <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                AI Technology
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                Shona Language
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                Cultural Preservation
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                Innovation
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Developer Profile - Enhanced */}
        <Card className="border-0 shadow-lg sm:shadow-2xl overflow-hidden mx-2 sm:mx-0">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background p-4 sm:p-6 lg:p-8">
            <CardHeader className="text-center pb-4 sm:pb-6 px-2 sm:px-4">
              <CardTitle className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Meet the Developer
              </CardTitle>
              <CardDescription className="text-base sm:text-lg">The Visionary Behind MSAI</CardDescription>
            </CardHeader>

            <CardContent className="max-w-5xl mx-auto px-2 sm:px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Profile Image Section */}
                <div className="flex flex-col items-center space-y-4 sm:space-y-6 order-1 lg:order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full blur-xl opacity-30 scale-110"></div>
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                      <Image
                        src="/images/milton-profile.jpg"
                        alt="Milton Mukundwa - Software Developer"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
                    <div className="text-center p-3 sm:p-4 bg-background/80 rounded-lg border">
                      <div className="text-xl sm:text-2xl font-bold text-primary">16</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Years Old</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-background/80 rounded-lg border">
                      <div className="text-xl sm:text-2xl font-bold text-primary">🇿🇼</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Zimbabwe</div>
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="space-y-6 sm:space-y-8 order-2 lg:order-2">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center lg:text-left">
                        Milton Mukundwa
                      </h2>
                      <p className="text-lg sm:text-xl text-muted-foreground font-medium text-center lg:text-left">
                        Software Developer & AI Innovator
                      </p>

                      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Born: November 30, 2008</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Zimbabwe</span>
                        </div>
                      </div>
                    </div>

                    {/* Professional Bio */}
                    <div className="space-y-3 sm:space-y-4">
                      <blockquote className="text-base sm:text-lg leading-relaxed border-l-4 border-primary pl-4 sm:pl-6 italic">
                        "As a young software developer from Zimbabwe, I discovered my passion for coding during high
                        school and have been building innovative solutions ever since. My mission is to leverage
                        technology to create meaningful impact, particularly in bridging language barriers and making AI
                        accessible to African communities."
                      </blockquote>

                      <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                        <p className="text-xs sm:text-sm text-muted-foreground italic">
                          "Semugadziri wemasoftware mudiki kubva kuZimbabwe, ndakawana rudo rwangu rwekudhonza
                          masoftware pachikoro chesekondari uye ndave kugadzira mhinduro dzitsva kubvira ipapo.
                          Chinangwa changu ndechekushandisa tekinoroji kugadzira shanduko yakakosha, kunyanya
                          mukubatanidza misiyano yemitauro nekuita kuti AI iwanikwe nevanhu veAfrica."
                        </p>
                      </div>
                    </div>

                    {/* Skills & Expertise */}
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-center lg:text-left">
                        Expertise & Passion
                      </h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2 justify-center lg:justify-start">
                        <Badge className="px-2 py-1 sm:px-3 text-xs">Artificial Intelligence</Badge>
                        <Badge className="px-2 py-1 sm:px-3 text-xs">Full-Stack Development</Badge>
                        <Badge className="px-2 py-1 sm:px-3 text-xs">Language Technology</Badge>
                        <Badge className="px-2 py-1 sm:px-3 text-xs">Cultural Innovation</Badge>
                        <Badge className="px-2 py-1 sm:px-3 text-xs">Youth Leadership</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
                    <h3 className="text-base sm:text-lg font-semibold flex flex-col sm:flex-row items-center lg:items-start gap-1 sm:gap-2 text-center lg:text-left">
                      <span>Let's Connect</span>
                      <span className="text-sm font-normal text-muted-foreground">/ Ngatibatane</span>
                    </h3>

                    <div className="grid gap-2 sm:gap-3">
                      <a
                        href="https://wa.me/263715907468"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-background/80 rounded-lg border hover:border-primary/50 transition-colors group"
                      >
                        <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors flex-shrink-0">
                          <Phone className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-sm sm:text-base">WhatsApp / Call</div>
                          <div className="text-xs sm:text-sm text-muted-foreground break-all">+263 715 907 468</div>
                        </div>
                      </a>

                      <a
                        href="mailto:miltonmukundwa6@gmail.com"
                        className="flex items-center gap-3 p-3 bg-background/80 rounded-lg border hover:border-primary/50 transition-colors group"
                      >
                        <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors flex-shrink-0">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-sm sm:text-base">Email</div>
                          <div className="text-xs sm:text-sm text-muted-foreground break-all">
                            miltonmukundwa6@gmail.com
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Technology Stack */}
        <Card className="border-0 shadow-lg sm:shadow-2xl mx-2 sm:mx-0">
          <CardHeader className="text-center px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold">Technology & Innovation</CardTitle>
            <CardDescription className="text-base sm:text-lg">Mashandisirwo etekinoroji muMSAI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">Core Technologies</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  MSAI inoshandisa GPT-4o Mini API, iyo inobatsira kuti AI inzwisise uye itaure chiShona chakanaka. Izvi
                  zvinoita kuti hurukuro dzive dzechokwadi uye dzakakodzera kutsika dzedu.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="outline" className="text-xs">
                    GPT-4o Mini
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">Innovation Focus</h3>
                <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
                  (MSAI uses GPT-4o Mini API, which helps the AI understand and speak proper Shona. This makes
                  conversations authentic and culturally appropriate.)
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="outline" className="text-xs">
                    Language Processing
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Cultural AI
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Accessibility
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Innovation
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <Card className="border-0 shadow-lg sm:shadow-2xl bg-gradient-to-br from-primary/5 to-background mx-2 sm:mx-0">
          <CardHeader className="text-center px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold">Our Mission</CardTitle>
            <CardDescription className="text-base sm:text-lg">Zvatinoda kusvitsa</CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <div className="text-center space-y-2 sm:space-y-3 p-4 sm:p-6 bg-background/80 rounded-xl border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Language Access</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Kubatsira vanhu vanotaura chiShona kuwana ruzivo rwetekinoroji yeAI
                </p>
              </div>

              <div className="text-center space-y-2 sm:space-y-3 p-4 sm:p-6 bg-background/80 rounded-xl border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Cultural Preservation</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Kuchengetedza nekusimudzira mutauro wechiShona munyika yetekinoroji
                </p>
              </div>

              <div className="text-center space-y-2 sm:space-y-3 p-4 sm:p-6 bg-background/80 rounded-xl border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Comprehensive Help</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Kupa rubatsiro rwakakwana munyaya dzakasiyana-siyana
                </p>
              </div>

              <div className="text-center space-y-2 sm:space-y-3 p-4 sm:p-6 bg-background/80 rounded-xl border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Zimbabwe Innovation</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Kuunza shanduko muZimbabwe nenzira yekushandisa tekinoroji
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
