import React from "react"
import Image from "next/image"
import styles from "styles/Greet.module.css"
import Head from 'next/head'
import Link from "next/link"

const Greet = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|회장 프로필</title>
        <meta name="description" content="(사)벤처한림회 총재 김균식 총재 인삿말 - 어게인 필승 코리아!!" />
        <meta property="og:title" content="벤처한림회|총재인삿말" />
        <meta property="og:description" content="(사)벤처한림회 총재 김균식 총재 인삿말 - 어게인 필승 코리아!!"></meta>
      </Head>
      <Link passHref={true} href="http://www.kmaeil.com/news/articleView.html?idxno=310626">
        <h4 className="asdfasdf">[덕암칼럼]국제백신연구소(IVI) 한국 후원회 조완규 상임고문을 만나다.</h4>
      </Link>
      <br/><br/>
      <Link passHref={true} href="https://m.mbn.co.kr/news/society/4591513">
        <h4 className="asdfasdf">벤처한림회 출범…노인 빈곤 해결책 모색</h4>
      </Link>
    </>
  )
}

export default Greet;