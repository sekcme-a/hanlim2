import React, { useEffect, useContext, useState} from "react"
import Header from "src/components/public/Header"
import { MenuItems } from "data/MenuItems"
import NavbarVertical from "src/components/public/NavbarVertical"
import { useRouter } from "next/router"
import Greet from "src/components/info/Greet"
import PresidentProfile from "src/components/info/PresidentProfile"
import Media from "src/components/info/Media"
import Video from "src/components/info/Video"
import Chart from "src/components/info/Chart"
import Where from "src/components/info/Where"
// import Purpose from "src/components/info/Purpose"
// import Chart from "src/components/info/Chart"
// import Status from "src/components/info/Status"
// import Where from "src/components/info/Where"
// import Timeline from "src/components/info/Timeline"

const Info = () => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    MenuItems.forEach((item) => {
      if (item.path === `/info/${slug}`) {
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
          <div className="content-container">
            <div className="menu-container">
              <h3 className="menu-result">{subtitle}</h3>
              <div className="menu-border"></div>
            </div>
            <div className="content">
              {slug === "greet" && <Greet />}
              {slug === "presidentprofile" && <PresidentProfile />}
              {slug === "media" && <Media />}
              {slug === "video" && <Video />}
              {slug === "chart" && <Chart />}
              {slug === "where" && <Where />}
              
            </div>
          </div>
          <NavbarVertical loc={title} />
        </div>
      </div>
    </>
  )
}
export default Info