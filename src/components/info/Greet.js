import React from "react"
import Image from "next/image"
import styles from "styles/Greet.module.css"
import Head from 'next/head'

const Greet = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|회장인사말</title>
        <meta name="description" content="(사)벤처한림회 회장 조완규 인삿말 - 2022년 새해인사" />
        <meta property="og:title" content="벤처한림회|회장인사말" />
        <meta property="og:description" content="(사)벤처한림회 회장 조완규 인삿말 - 2022년 새해인사"></meta>
      </Head>
      <div className={styles.greetContent}>
        <Image
          src="/greet.jpg"
          height={1300}
          width={900}
          alt="회장 인사말"
          priority={true}
          loading="eager"
        />
      </div>
    </>
  )
}

export default Greet;