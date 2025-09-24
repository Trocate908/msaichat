import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Phone, Mail, Code, Zap, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="mx-auto relative w-32 h-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
            <Image src="/images/msai-logo.png" alt="MSAI Logo" fill className="object-cover" />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Nezve MSAI
            </h1>
            <p className="text-2xl text-muted-foreground">Milton's Shona Artificial Intelligence</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Bridging Language Barriers with AI Technology</span>
            </div>
          </div>
        </div>

        {/* MSAI Overview */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-muted/30">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              Chii MSAI?
            </CardTitle>
            <CardDescription className="text-lg">Ruzivo rweMSAI nezvainobatsira</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              MSAI (Milton's Shona Artificial Intelligence) iAI yakagadzirirwa vanhu vanotaura chiShona. Yakaumbwa kuti
              ibatsire vanhu vachishandisa mutauro wavo wekumusha, pasina dambudziko rekushandisa chirungu.
            </p>
            <p className="text-muted-foreground italic">
              (MSAI is an AI designed for Shona speakers. It was created to help people use their native language
              without the barrier of having to communicate in English.)
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary" className="px-4 py-2">
                AI Technology
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Shona Language
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Cultural Preservation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Innovation
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Developer Profile - Enhanced */}
        <Card className="border-0 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
                <Code className="h-8 w-8 text-primary" />
                Meet the Developer
              </CardTitle>
              <CardDescription className="text-lg">The Visionary Behind MSAI</CardDescription>
            </CardHeader>

            <CardContent className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Profile Image Section */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full blur-xl opacity-30 scale-110"></div>
                    <div className="relative w-80 h-80 overflow-hidden rounded-full border-4 border-white shadow-2xl">
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
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="text-center p-4 bg-background/80 rounded-lg border">
                      <div className="text-2xl font-bold text-primary">16</div>
                      <div className="text-sm text-muted-foreground">Years Old</div>
                    </div>
                    <div className="text-center p-4 bg-background/80 rounded-lg border">
                      <div className="text-2xl font-bold text-primary">🇿🇼</div>
                      <div className="text-sm text-muted-foreground">Zimbabwe</div>
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Milton Mukundwa
                      </h2>
                      <p className="text-xl text-muted-foreground font-medium">Software Developer & AI Innovator</p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Born: November 30, 2008</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Zimbabwe</span>
                        </div>
                      </div>
                    </div>

                    {/* Professional Bio */}
                    <div className="space-y-4">
                      <blockquote className="text-lg leading-relaxed border-l-4 border-primary pl-6 italic">
                        "As a young software developer from Zimbabwe, I discovered my passion for coding during high
                        school and have been building innovative solutions ever since. My mission is to leverage
                        technology to create meaningful impact, particularly in bridging language barriers and making AI
                        accessible to African communities."
                      </blockquote>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">
                          "Semugadziri wemasoftware mudiki kubva kuZimbabwe, ndakawana rudo rwangu rwekudhonza
                          masoftware pachikoro chesekondari uye ndave kugadzira mhinduro dzitsva kubvira ipapo.
                          Chinangwa changu ndechekushandisa tekinoroji kugadzira shanduko yakakosha, kunyanya
                          mukubatanidza misiyano yemitauro nekuita kuti AI iwanikwe nevanhu veAfrica."
                        </p>
                      </div>
                    </div>

                    {/* Skills & Expertise */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">Expertise & Passion</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="px-3 py-1">Artificial Intelligence</Badge>
                        <Badge className="px-3 py-1">Full-Stack Development</Badge>
                        <Badge className="px-3 py-1">Language Technology</Badge>
                        <Badge className="px-3 py-1">Cultural Innovation</Badge>
                        <Badge className="px-3 py-1">Youth Leadership</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span>Let's Connect</span>
                      <span className="text-sm font-normal text-muted-foreground">/ Ngatibatane</span>
                    </h3>

                    <div className="grid gap-3">
                      <a
                        href="https://wa.me/263715907468"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-background/80 rounded-lg border hover:border-primary/50 transition-colors group"
                      >
                        <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                          <Phone className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">WhatsApp / Call</div>
                          <div className="text-sm text-muted-foreground">+263 715 907 468</div>
                        </div>
                      </a>

                      <a
                        href="mailto:miltonmukundwa6@gmail.com"
                        className="flex items-center gap-3 p-3 bg-background/80 rounded-lg border hover:border-primary/50 transition-colors group"
                      >
                        <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">miltonmukundwa6@gmail.com</div>
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
        <Card className="border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Technology & Innovation</CardTitle>
            <CardDescription className="text-lg">Mashandisirwo etekinoroji muMSAI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Core Technologies</h3>
                <p className="leading-relaxed">
                  MSAI inoshandisa GPT-4o Mini API, iyo inobatsira kuti AI inzwisise uye itaure chiShona chakanaka. Izvi
                  zvinoita kuti hurukuro dzive dzechokwadi uye dzakakodzera kutsika dzedu.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GPT-4o Mini</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Innovation Focus</h3>
                <p className="leading-relaxed text-muted-foreground">
                  (MSAI uses GPT-4o Mini API, which helps the AI understand and speak proper Shona. This makes
                  conversations authentic and culturally appropriate.)
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Language Processing</Badge>
                  <Badge variant="outline">Cultural AI</Badge>
                  <Badge variant="outline">Accessibility</Badge>
                  <Badge variant="outline">Innovation</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
            <CardDescription className="text-lg">Zvatinoda kusvitsa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center space-y-3 p-6 bg-background/80 rounded-xl border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Language Access</h3>
                <p className="text-sm text-muted-foreground">
                  Kubatsira vanhu vanotaura chiShona kuwana ruzivo rwetekinoroji yeAI
                </p>
              </div>

              <div className="text-center space-y-3 p-6 bg-background/80 rounded-xl border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Cultural Preservation</h3>
                <p className="text-sm text-muted-foreground">
                  Kuchengetedza nekusimudzira mutauro wechiShona munyika yetekinoroji
                </p>
              </div>

              <div className="text-center space-y-3 p-6 bg-background/80 rounded-xl border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Comprehensive Help</h3>
                <p className="text-sm text-muted-foreground">Kupa rubatsiro rwakakwana munyaya dzakasiyana-siyana</p>
              </div>

              <div className="text-center space-y-3 p-6 bg-background/80 rounded-xl border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Zimbabwe Innovation</h3>
                <p className="text-sm text-muted-foreground">
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
