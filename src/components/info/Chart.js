import React from "react"
import Image from "next/image"
import style from "styles/info/Chart.module.css"
import Head from 'next/head'

const Greet = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|중앙 조직도</title>
        <meta name="description" content="(사)벤처한림회 중앙 조직도 - 국민의 건강과 행복의 장을 여는 벤처한림회" />
        <meta property="og:title" content="벤처한림회|중앙 조직도" />
        <meta property="og:description" content="(사)벤처한림회 중앙 조직도 - 국민의 건강과 행복의 장을 여는 벤처한림회"></meta>
      </Head>
      <div className={style.container}>
        <Image
          src="/chart.jpg"
          height={1300}
          width={700}
          alt="중앙 조직도"
          priority={true}
          loading="eager"
        />
      </div>
    </>
  )
}

export default Greet;