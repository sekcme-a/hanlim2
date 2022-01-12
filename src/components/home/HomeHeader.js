import React from "react";
import style from "styles/home/homeHeader.module.css"
import { motion } from "framer-motion"

const HomeHeader = () => {
  return (
    <div className={style.banner}>
      <motion.div initial={{ opacity: 0 }} animate={{
        opacity: 1, transition: { duration: 1 }}}className={style.banner__content}>
        {/* <div className="container"> */}
          <div className={style.banner__text}>
            <motion.h3
            initial={{ opacity:0 }}
            animate={{ opacity:1, transition:{duration: 1.2, delay: 1}}}
            >노인일자리와 소득창출을 위한<br />노장청 공동스타트업</motion.h3>
          <motion.div className={style.border} initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay:1.5,duration: 0.8} }}/>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay:2.2,duration: 1} }}><p />벤처한림회</motion.h1>
            <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay:2.2,duration: 1} }}>
               Venture Hanlim Association For The Elderly
            </motion.h4>
          </div>
        {/* </div> */}
      </motion.div>
    </div>
  )
}

export default HomeHeader;