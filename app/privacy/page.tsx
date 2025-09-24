import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">Mutemo weChakafukidza</p>
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
              <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              Your Privacy Matters
            </CardTitle>
            <CardDescription className="text-base sm:text-lg">Chakafukidza Chenyu Chakakosha</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed">
              At MSAI, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground italic">
              KuMSAI, takazvipira kuchengetedza chakafukidza chenyu nekuchengetedza ruzivo rwenyu rwepachako. Mutemo uyu
              weChakafukidza unotsanangura kuti tinounganidza sei, tinoshandisa sei, uye tinochengetedza sei data yenyu.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <Database className="h-6 w-6 text-primary" />
              1. Information We Collect / Ruzivo Rwatinotora
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Information You Provide:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>
                  <strong>Chat Messages:</strong> The questions and messages you send to MSAI
                </li>
                <li>
                  <strong>Language Preferences:</strong> Your choice to communicate in Shona or English
                </li>
                <li>
                  <strong>Feedback:</strong> Any feedback or suggestions you provide
                </li>
                <li>
                  <strong>Contact Information:</strong> If you choose to contact us directly
                </li>
              </ul>
            </div>

            <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Ruzivo Rwamunopa:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>
                  <strong>Meseji dzeHurukuro:</strong> Mibvunzo nemeseji dzamunotumira kuMSAI
                </li>
                <li>
                  <strong>Sarudzo dzeMutauro:</strong> Kusarudza kwenyu kutaura muchiShona kana chiRungu
                </li>
                <li>
                  <strong>Feedback:</strong> Chero feedback kana mazano amunotipa
                </li>
                <li>
                  <strong>Ruzivo rweKubata:</strong> Kana muchisarudza kutibata zvakananga
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Automatically Collected Information:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>
                  <strong>Usage Data:</strong> How you interact with MSAI (session duration, features used)
                </li>
                <li>
                  <strong>Technical Information:</strong> Browser type, device information, IP address
                </li>
                <li>
                  <strong>Performance Data:</strong> Response times and system performance metrics
                </li>
              </ul>
            </div>

            <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Ruzivo Rwunotorwa Rwoga:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>
                  <strong>Data yekushandisa:</strong> Kuti munoshandisa sei MSAI (nguva yesession, zvinhu zvamunoshanda)
                </li>
                <li>
                  <strong>Ruzivo rweTekinoroji:</strong> Rudzi rwebrowser, ruzivo rwemudziyo, IP address
                </li>
                <li>
                  <strong>Data yeKushanda:</strong> Nguva dzekupindura nematanho ekushanda kwesystem
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-primary" />
              2. How We Use Your Information / Kuti Tinoshandisa Sei Ruzivo Rwenyu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">We use your information to:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>Provide AI-powered responses to your questions</li>
                <li>Improve the accuracy and relevance of MSAI's responses</li>
                <li>Enhance the user experience and platform functionality</li>
                <li>Analyze usage patterns to optimize performance</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Ensure the security and integrity of our service</li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Tinoshandisa ruzivo rwenyu kuti:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>Tipe mhinduro dzine simba reAI kumibvunzo yenyu</li>
                <li>Tivandudze kunyatsa nekukodzera kwemhinduro dzeMSAI</li>
                <li>Tivandudze ruzivo rwemushandisi nekushanda kweplatform</li>
                <li>Tiongorore maitiro ekushandisa kuti tivandudze kushanda</li>
                <li>Tipindure mibvunzo yenyu uye tipe rutsigiro</li>
                <li>Tive nechokwadi chekuchengetedza nekuvimbika kwesevhisi yedu</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="border-0 shadow-lg border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <Lock className="h-6 w-6 text-green-600" />
              3. Data Security / Kuchengetedza Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-600">Security Measures:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>
                  <strong>Encryption:</strong> All data transmission is encrypted using industry-standard protocols
                </li>
                <li>
                  <strong>Secure Storage:</strong> Your information is stored on secure servers with restricted access
                </li>
                <li>
                  <strong>Regular Updates:</strong> We regularly update our security measures and systems
                </li>
                <li>
                  <strong>Access Control:</strong> Only authorized personnel have access to user data
                </li>
                <li>
                  <strong>Monitoring:</strong> Continuous monitoring for security threats and vulnerabilities
                </li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600">Nzira dzeKuchengetedza:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>
                  <strong>Encryption:</strong> Data yose inotumirwa yakachengetedzwa neshanduko dzeindasitiri
                </li>
                <li>
                  <strong>Kuchengeta Kwakachengetedzwa:</strong> Ruzivo rwenyu rwunochengeterwa pamaseva akachengetedzwa
                </li>
                <li>
                  <strong>Kugadzirisa Nguva dzose:</strong> Tinogara tichigadzirisa nzira dzedu dzekuchengetedza
                </li>
                <li>
                  <strong>Kutonga Kupinda:</strong> Vanhu vakabvumirwa chete ndivo vanokwanisa kuwana data yevashandisi
                </li>
                <li>
                  <strong>Kutarisa:</strong> Kutarisa nguva dzose njodzi dzekuchengetedza nekusagadzikana
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <Eye className="h-6 w-6 text-primary" />
              4. Data Sharing / Kugovana Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">We DO NOT share your personal information with:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>Third-party advertisers or marketing companies</li>
                <li>Social media platforms</li>
                <li>Data brokers or analytics companies</li>
                <li>Government agencies (unless legally required)</li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">HATIGOVANI ruzivo rwenyu rwepachako ne:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>Makambani eshambadziro kana marketing</li>
                <li>Social media platforms</li>
                <li>Vatengesi vedata kana makambani eanalytics</li>
                <li>Masangano ehurumende (kunze kwekunge zvakarayirwa nemutemo)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Limited sharing may occur for:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>
                  <strong>Technical Support:</strong> Trusted service providers who help maintain MSAI
                </li>
                <li>
                  <strong>Legal Compliance:</strong> When required by law or to protect user safety
                </li>
                <li>
                  <strong>Research:</strong> Anonymized data for improving Shona language AI (with your consent)
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">5. Your Rights / Kodzero Dzenyu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">You have the right to:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>
                  <strong>Access:</strong> Request information about what data we have about you
                </li>
                <li>
                  <strong>Correction:</strong> Ask us to correct inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal data
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a readable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain uses of your information
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent for data processing at any time
                </li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Mune kodzero yeku:</h3>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base text-muted-foreground">
                <li>
                  <strong>Kuwana:</strong> Kukumbira ruzivo nezve data yatine nezvenyu
                </li>
                <li>
                  <strong>Kugadzirisa:</strong> Kutikumbira kuti tigadzirise ruzivo rusina kunyatsa
                </li>
                <li>
                  <strong>Kubvisa:</strong> Kukumbira kubviswa kweruzivo rwenyu rwepachako
                </li>
                <li>
                  <strong>Kutakura:</strong> Kukumbira kopi yedata yenyu mufomat rinowanikwa
                </li>
                <li>
                  <strong>Kuramba:</strong> Kuramba kushandiswa kwezimwe zveruzivo rwenyu
                </li>
                <li>
                  <strong>Kubvisa:</strong> Kubvisa mvumo yekugadzirisa data chero nguva
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              6. Cookies and Tracking / Cookies neKutevera
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm sm:text-base leading-relaxed">
                MSAI uses minimal cookies and tracking technologies to enhance your experience. We use:
              </p>
              <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic functionality
                </li>
                <li>
                  <strong>Preference Cookies:</strong> To remember your language and theme settings
                </li>
                <li>
                  <strong>Analytics:</strong> Basic usage statistics to improve our service
                </li>
              </ul>
            </div>

            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                MSAI inoshandisa cookies shoma netekinoroji dzekutevera kuti tivandudze ruzivo rwenyu. Tinoshandisa:
                Essential Cookies (zvinodiwa), Preference Cookies (kurangarira settings), uye Analytics (matanho
                ekushandisa).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="border-0 shadow-lg border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
              7. Children's Privacy / Chakafukidza cheVana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm sm:text-base leading-relaxed">
                MSAI is designed to be family-friendly and educational. However, we recommend parental supervision for
                users under 13 years old. We do not knowingly collect personal information from children under 13
                without parental consent.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground italic p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                MSAI yakagadzirirwa mhuri uye kudzidzisa. Asi, tinokurudzira kutariswa nevabereki kune vashandisi vari
                pasi pemakore 13. Hatizivi kutora ruzivo rwepachako kubva kuvana vari pasi pemakore 13 pasina mvumo
                yevabereki.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              8. Changes to This Policy / Shanduko kuMutemo uyu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm sm:text-base leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify users of significant changes through the MSAI platform.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground italic p-4 bg-muted/50 rounded-lg">
              Tinogona kugadzirisa Mutemo uyu weChakafukidza dzimwe nguva kuti uratidze shanduko mumaitiro edu kana
              zvinodiwa nemutemo. Tichazivisa vashandisi nezveshanduko huru kuburikidza neMSAI platform.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Privacy Questions / Mibvunzo yeChakafukidza
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-sm sm:text-base leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>

            <div className="space-y-2">
              <p className="font-medium">Milton Mukundwa</p>
              <p className="text-sm text-muted-foreground">Privacy Officer & Creator of MSAI</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <span>📧 miltonmukundwa6@gmail.com</span>
                <span>📱 +263 715 907 468</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Kana mune mibvunzo pamusoro peMutemo uyu weChakafukidza kana kuti tinobata sei data yenyu, ndapota
              tibatei.
            </p>
          </CardContent>
        </Card>

        {/* Effective Date */}
        <div className="text-center text-sm text-muted-foreground border-t pt-6">
          <p>This Privacy Policy is effective as of January 2025</p>
          <p className="italic">Mutemo uyu weChakafukidza unotanga kubva muna January 2025</p>
        </div>
      </div>
    </div>
  )
}
