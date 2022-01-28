import Head from 'next/head'
import Image from 'next/image'
import HomeHeader from "src/components/home/HomeHeader"
import LogoInfo from "src/components/home/LogoInfo"
import About from "src/components/home/About"
import Footer from "src/components/public/Footer"


export default function Home() {
  return (
    <>
      <Head>
        <title>벤처한림회</title>
        <meta name="description" content="벤처한림회 - 노인일자리와 소득창출을 위한노장청 공동스타트업" />
        <meta property="og:title" content="벤처한림회" />
        <meta property="og:description" content="벤처한림회 - 노인일자리와 소득창출을 위한노장청 공동스타트업"></meta>
      </Head>
      <HomeHeader />
      <LogoInfo />
      <About />
      <Footer />
    </>
  )
}
