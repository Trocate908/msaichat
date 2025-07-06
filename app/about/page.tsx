import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="mx-auto relative w-24 h-24 overflow-hidden rounded-full border-4 border-primary/20">
            <Image src="/images/msai-logo.png" alt="MSAI Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Nezve MSAI</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">Milton&apos;s Shona Artificial Intelligence</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Chii MSAI?</CardTitle>
            <CardDescription>Ruzivo rweMSAI nezvainobatsira</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              MSAI (Milton&apos;s Shona Artificial Intelligence) iAI yakagadzirirwa vanhu vanotaura chiShona. Yakaumbwa
              kuti ibatsire vanhu vachishandisa mutauro wavo wekumusha, pasina dambudziko rekushandisa chirungu.
            </p>
            <p className="text-sm text-gray-500">
              (MSAI is an AI designed for Shona speakers. It was created to help people use their native language
              without the barrier of having to communicate in English.)
            </p>
            <p>
              Inoshandisa tekinoroji yekupedzisira yeAI kuti inzwisise uye ipindure mibvunzo muchiShona, ichipa
              rubatsiro rwakakwana uye rwakakodzera kutsika dzedu.
            </p>
            <p className="text-sm text-gray-500">
              (It uses the latest AI technology to understand and respond to questions in Shona, providing comprehensive
              help that is culturally appropriate.)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Muumbi</CardTitle>
            <CardDescription>Nezve Milton Mukundwa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Milton Mukundwa muumbi weMSAI, ane ruzivo rwakadzama muzvetekinoroji uye ane chido chekuunza shanduko
              muZimbabwe nenzira yekushandisa tekinoroji.
            </p>
            <p className="text-sm text-gray-500">
              (Milton Mukundwa is the creator of MSAI, with deep knowledge in technology and a passion for bringing
              change to Zimbabwe through technological innovation.)
            </p>
            <p>
              Akaona kuti vazhinji vevanhu vane dambudziko rekushandisa AI nekuda kwemutauro, saka akasarudza kugadzira
              MSAI kuti ibatsire vanhu vanotaura chiShona.
            </p>
            <p className="text-sm text-gray-500">
              (He recognized that many people face barriers to using AI due to language, so he decided to create MSAI to
              help Shona speakers.)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tekinoroji</CardTitle>
            <CardDescription>Mashandisirwo etekinoroji muMSAI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              MSAI inoshandisa GPT-4 API, iyo inobatsira kuti AI inzwisise uye itaure chiShona chakanaka. Izvi zvinoita
              kuti hurukuro dzive dzechokwadi uye dzakakodzera kutsika dzedu.
            </p>
            <p className="text-sm text-gray-500">
              (MSAI uses the GPT-4 API, which helps the AI understand and speak proper Shona. This makes conversations
              authentic and culturally appropriate.)
            </p>
            <p>
              Tekinoroji iyi inobatanidza ruzivo rwemutauro wechiShona pamwe nemashandisirwo eAI, zvichipa mhinduro
              dzakakwana uye dzakanaka.
            </p>
            <p className="text-sm text-gray-500">
              (This technology combines knowledge of the Shona language with AI capabilities, providing comprehensive
              and accurate responses.)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Zvinangwa</CardTitle>
            <CardDescription>Zvatinoda kusvitsa</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                Kubatsira vanhu vanotaura chiShona kuwana ruzivo rwetekinoroji yeAI
                <p className="text-sm text-gray-500">(Help Shona speakers access AI technology)</p>
              </li>
              <li>
                Kuchengetedza nekusimudzira mutauro wechiShona munyika yetekinoroji
                <p className="text-sm text-gray-500">
                  (Preserve and promote the Shona language in the technology space)
                </p>
              </li>
              <li>
                Kupa rubatsiro rwakakwana munyaya dzakasiyana-siyana
                <p className="text-sm text-gray-500">(Provide comprehensive assistance on various topics)</p>
              </li>
              <li>
                Kuunza shanduko muZimbabwe nenzira yekushandisa tekinoroji
                <p className="text-sm text-gray-500">(Bring innovation to Zimbabwe through technology)</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
