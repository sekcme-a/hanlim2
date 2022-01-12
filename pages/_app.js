import { useState, useEffect } from "react"
import Head from 'next/head'
import Navbar from "src/components/navbar/Navbar"
import NavbarMobile from "src/components/navbar/NavbarMobile"
import '../styles/globals.css'
import 'styles/navbar.css'
import 'styles/dropdownPc.css'
import 'styles/navbarMobile.css'

function MyApp({ Component, pageProps }) {
  const [mobileMode, setMobileMode] = useState("false")

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768)
        setMobileMode(true)
      else
        setMobileMode(false)
    }
    handleResize();
    window.addEventListener("resize", handleResize)
  },[])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {mobileMode ? <NavbarMobile /> : <Navbar />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
