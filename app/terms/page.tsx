import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Users, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">Mamiriro Ekushandisa</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                Last Updated: January 2025
              </Badge>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              Welcome to MSAI
            </CardTitle>
            <CardDescription className="text-base sm:text-lg">
              Tigamuchire kuMSAI - Milton's Shona Artificial Intelligence
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed">
              By using MSAI (Milton's Shona Artificial Intelligence), you agree to these Terms of Service. Please read
              them carefully before using our AI chatbot service.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground italic">
              Nekushandisa MSAI (Milton's Shona Artificial Intelligence), munobvuma mamiriro aya ekushandisa. Ndapota
              verengai zvakanaka musati mashandisa sevhisi yedu yeAI chatbot.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              1. Service Description / Tsananguro yeSevhisi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">What MSAI Provides:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>AI-powered conversational assistance in Shona language</li>
                <li>Educational support and information sharing</li>
                <li>Cultural preservation through technology</li>
                <li>Free access to basic AI functionality</li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Zvinopa MSAI:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>Rubatsiro rwehurukuro rwakashandiswa neAI muchiShona</li>
                <li>Rutsigiro rwedzidzo nekugovana ruzivo</li>
                <li>Kuchengetedza tsika kuburikidza netekinoroji</li>
                <li>Kuwana mahara kune zvimwe zvinhu zveAI</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              2. User Responsibilities / Mabasa eVashandisi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">You agree to:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>Use MSAI for lawful and constructive purposes only</li>
                <li>Respect the cultural values embedded in the Shona language</li>
                <li>Not attempt to harm, exploit, or misuse the AI system</li>
                <li>Not share inappropriate, offensive, or harmful content</li>
                <li>Respect intellectual property rights</li>
                <li>Not use the service for commercial purposes without permission</li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Munobvuma kuti:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>Shandisai MSAI pazvinhu zviri pamutemo uye zvinobatsira chete</li>
                <li>Remekedzai tsika dziri muchiShona</li>
                <li>Musaedze kukuvadza, kushandisa zvisina kufanira, kana kukanganisa AI system</li>
                <li>Musagovane zvinhu zvisina kufanira, zvinogumbura, kana zvinokuvadza</li>
                <li>Remekedzai kodzero dzepfungwa</li>
                <li>Musashandise sevhisi yekutengesa pasina mvumo</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Prohibited Uses */}
        <Card className="border-0 shadow-lg border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              3. Prohibited Uses / Zvisina Kubvumirwa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-600">Strictly Forbidden:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>Generating harmful, illegal, or offensive content</li>
                <li>Attempting to bypass security measures</li>
                <li>Impersonating others or creating fake identities</li>
                <li>Spreading misinformation or false claims</li>
                <li>Violating privacy of individuals</li>
                <li>Using the service to harass or threaten others</li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <h3 className="text-lg font-semibold text-red-600">Zvakarambidzwa Zvachose:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>Kugadzira zvinhu zvinokuvadza, zvisiri pamutemo, kana zvinogumbura</li>
                <li>Kuedza kupinda munzvimbo dzakachengetedzwa</li>
                <li>Kuzviita mumwe munhu kana kugadzira mazita enhema</li>
                <li>Kuparadzira nhema kana zvisiri zvechokwadi</li>
                <li>Kutyora chakafukidza chevanhu</li>
                <li>Kushandisa sevhisi kutambudza kana kutyisidzira vamwe</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              4. Intellectual Property / Kodzero dzePfungwa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm sm:text-base leading-relaxed">
                MSAI and all related technology, including the AI model, website design, and branding, are the
                intellectual property of Milton Mukundwa. The Shona language content and cultural elements are treated
                with respect and are not claimed as proprietary.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground italic p-4 bg-muted/50 rounded-lg">
                MSAI nezvese zvine chekuita netekinoroji, kusanganisira AI model, dhizaini yewebsite, uye branding,
                ndezvepfungwa dzaMilton Mukundwa. Zvinhu zvechiShona netsika dzinobatwa nerukudzo uye hazvitaurwi kuti
                ndezvake.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">5. Disclaimers / Zvirambidzo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Important Notice:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>MSAI is provided "as is" without warranties of any kind</li>
                <li>AI responses may not always be accurate or complete</li>
                <li>The service may be interrupted or unavailable at times</li>
                <li>We are not liable for decisions made based on AI responses</li>
                <li>Users should verify important information independently</li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Chiziviso Chakakosha:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>MSAI inopihwa "sezvairi" pasina zvivimbiso zvemhando ipi neipi</li>
                <li>Mhinduro dzeAI dzingasava dzechokwadi kana dzakakwana nguva dzose</li>
                <li>Sevhisi inogona kumiswa kana kusavapo dzimwe nguva</li>
                <li>Hatina mhosva yesarudzo dzinoitwa zvichienderana nemhinduro dzeAI</li>
                <li>Vashandisi vanofanira kuongorora ruzivo rwakakosha voga</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Reference */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">6. Privacy / Chakafukidza</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm sm:text-base leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
              protect your information when using MSAI.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground italic p-4 bg-muted/50 rounded-lg">
              Chakafukidza chenyu chakakosha kwatiri. Ndapota onai Privacy Policy yedu kuti munzwisise kuti
              tinounganidza sei, tinoshandisa sei, uye tinochengetedza sei ruzivo rwenyu kana muchishandisa MSAI.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">7. Changes to Terms / Shanduko kuMamiriro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm sm:text-base leading-relaxed">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes
              through the MSAI platform. Continued use after changes constitutes acceptance of the new terms.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground italic p-4 bg-muted/50 rounded-lg">
              Tine kodzero yekuchinja mamiriro aya chero nguva. Vashandisi vachaziviswa nezveshanduko huru kuburikidza
              neMSAI platform. Kuramba uchishandisa mushure meshanduko kunoreva kubvuma mamiriro matsva.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              Contact Us / Tibatei
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-sm sm:text-base leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>

            <div className="space-y-2">
              <p className="font-medium">Milton Mukundwa</p>
              <p className="text-sm text-muted-foreground">Creator of MSAI</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <span>📧 miltonmukundwa6@gmail.com</span>
                <span>📱 +263 715 907 468</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Kana mune mibvunzo pamusoro peMamiriro aya eSevhisi, ndapota tibatei.
            </p>
          </CardContent>
        </Card>

        {/* Effective Date */}
        <div className="text-center text-sm text-muted-foreground border-t pt-6">
          <p>These Terms of Service are effective as of January 2025</p>
          <p className="italic">Mamiriro aya eSevhisi anotanga kubva muna January 2025</p>
        </div>
      </div>
    </div>
  )
}
