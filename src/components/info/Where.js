import React, { useState, useEffect ,useRef }from "react";
import Script from 'next/script'
import style from "styles/info/Where.module.css"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const Where = () => {
  return (
    <>
      <Head>
        <title>벤처한림회|오시는길</title>
        <meta name="description" content="(사)벤처한림회 오시는 길 - 서울특별시 영등포구 버드나루로88, 인따르시아빌딩 101호" />
        <meta property="og:title" content="벤처한림회|오시는길" />
        <meta property="og:description" content="(사)벤처한림회 오시는 길 - 서울특별시 영등포구 버드나루로88, 인따르시아빌딩 101호"></meta>
      </Head>
      <div className={style.mapImg}>
        <Link passHref={true} href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9E%A5%EC%95%88%EB%8F%99%20465-11/address/14145047.206287246,4517663.475332933,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9E%A5%EC%95%88%EB%8F%99%20465-11,jibun?c=14144758.3099447,4517624.2530617,16,0,0,0,dh">
          <Image src="/where1.png" width={430} height={300} alt="지도" priority={true} loading="eager"/>
        </Link>
      </div>
      <div className={style.howToComeText}>
          <h5>본부 : 장안평 사무실(서울 동대문구 장안동 465-11, 세우빌딩)</h5>
        <Link passHref={true} href="https://map.naver.com/v5/search/%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%EB%B2%84%EB%93%9C%EB%82%98%EB%A3%A8%EB%A1%9C88%EC%9D%B8%EB%94%B0%EB%A5%B4%EC%8B%9C%EC%95%84%EB%B9%8C%EB%94%A9/place/1106183029?c=14127007.9607278,4512689.6688369,15,0,0,0,dh">
          <a className={style.openNaverMap}>
            자세히 보기
          </a>
        </Link>
      </div>
      <div className={style.mapImg}>
        <Link passHref={true} href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9E%A5%EC%95%88%EB%8F%99%20465-11/address/14145047.206287246,4517663.475332933,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9E%A5%EC%95%88%EB%8F%99%20465-11,jibun?c=14144758.3099447,4517624.2530617,16,0,0,0,dh">
        <Image src="/where2.png"  width={430} height={300} alt="지도" priority={true} loading="eager"/>
        </Link>
      </div>
      <div className={style.howToComeText}>
          <h5>서울지사 : 율곡로 사무실(서울 종로구 율곡로 160)</h5>
        <Link passHref={true} href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%9C%A8%EA%B3%A1%EB%A1%9C%20160/address/14137157.593224566,4519704.739006804,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%9C%A8%EA%B3%A1%EB%A1%9C%20160,new?c=14137138.2458971,4519689.9628056,17,0,0,0,dh">
          <a className={style.openNaverMap}>
            자세히 보기
          </a>
        </Link>
      </div>
    </>
  );
};

export default Where;