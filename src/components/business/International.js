import React from "react"
import Head from 'next/head'
import Image from "next/image"
import style from "styles/business/international.module.css"

const Nation = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|2022 중점사업</title>
        <meta name="description" content="(사)벤처한림회 2022 중점사업" />
        <meta property="og:title" content="벤처한림회|2022 중점사업" />
        <meta property="og:description" content="(사)벤처한림회 2022 중점사업"></meta>
      </Head>
        <div className={style.container}>
          <Image
            src="/2022plan.jpg"
            height={890}
            width={800}
            alt="2022 중점사업"
            priority={true}
            loading="eager"
          />
        </div>
    </>
  )
}

export default Nation;