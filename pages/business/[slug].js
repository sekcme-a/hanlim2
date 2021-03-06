import React, { useEffect, useContext, useState} from "react"
import Header from "src/components/public/Header"
import { MenuItems } from "data/MenuItems"
import NavbarVertical from "src/components/navbar/NavbarVertical"
import { useRouter } from "next/router"
import Nation from "src/components/business/Nation"
import International from "src/components/business/International"
import Footer from "src/components/public/Footer"

const Info = () => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    MenuItems.forEach((item) => {
      if (item.path === `/business/${slug}`) {
        setTitle(item.title)
        setSubtitle(item.subtitle)
        return;
      }
    })
  }, [slug])

  return (
    <>
      <Header nav={`${title}`} />
      <div className="body">
        <div className="body-container">
          <NavbarVertical loc={title} />
          <div className="content-container">
            <div className="menu-container">
              <h3 className="menu-result">{`${title} / ${subtitle}`}</h3>
              <div className="menu-border"></div>
            </div>
            <div className="content">
              {slug === "nation" && <Nation />}
              {slug === "international" && <International />}
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Info