import React from "react"
import styles from "styles/business/Nation.module.css"
import Head from 'next/head'

const Nation = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|위원회별 사업내용</title>
        <meta name="description" content="(사)벤처한림회 설립목적 및 연혁 - 스포츠가 최고의 국민건강 복지다" />
        <meta property="og:title" content="벤처한림회|설립목적,연혁" />
        <meta property="og:description" content="(사)벤처한림회 설립목적 및 연혁 - 스포츠가 최고의 국민건강 복지다"></meta>
      </Head>
      <h4 className={styles.title}> </h4>
      {/* <h5 className={styles.subtitle}>[스포츠가 최고의 국민건강 복지다]</h5> */}
      <ul className={styles.list}>
        <li>일자리위원회 : 노인 벤처 창업 플랫폼 구축 및 일자리 창출</li>
        <li>정보통신위원회 : 시니어 관련 DB구축 및 컨텐츠 개발</li>
        <li>뉴K-Space위원회 : 민간 우주여행 비즈니스 모델 개발 및 구축</li>
        <li>기획재정위원회 : 벤처한림회 장·단기 경영계획 수립 및 경영지원</li>
        <li>주거복지위원회 : 독거노인 주거환경 개선사업 추진</li>
        <li>해양수산위원회 : 바다의 자원을 활용한 벤처사업 발굴/지원</li>
        <li>K백신위원회 : 코로나 백신 등 저가 백신 개발, 후진국 공급망 구축</li>
        <li>환경위원회 : 지구환경 보전에 기여하는 환경사업 발굴/지원</li>
        <li>문화/관광위원회 : 노인 문화활동 참여 컨텐츠 개발 및 시니어 관광사업 발굴/지원</li>
        <li>연예/예술위원회 : 노인 방송 및 예술 참여 컨텐츠 개발/지원</li>
        <li>생활체육위원회 : 노인 취미활동 스포츠 동호회 출범</li>
        <li>홍보위원회 : 노인 사회참여 활동 유튜브 제작/방송</li>
        <li>건강증진위원회 : 시니어 건강 지원 플랫폼 구축</li>
        <li>교육위원회 : 시니어 창업사관학교 출범</li>
      </ul>
    </>
  )
}

export default Nation;