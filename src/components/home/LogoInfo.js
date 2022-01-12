import React from "react"
import style from "styles/home/logoInfo.module.css"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"


const LogoInfo = () => {
  //framer motion animation control
  const animationLogo = useAnimation()
  const animationText1 = useAnimation()
  const animationText2 = useAnimation()
  //Hook allow us to control the element in the screen view
  const { inView, entry, ref } = useInView({threshold: .5});
  
  //애니메이션 설정
  const logoSpeed = "5vw"
  const allAnimationShowDuration = 1
  const allAnimationHideDuration = 0.5
  const textSpeed = "5vw"
  const allAnimationDelay = 0.5

  if (inView) {
    animationLogo.start({
      opacity: 1, x:0, transition:{ duration: allAnimationShowDuration}
    })
    animationText1.start({
      opacity: 1, x:0, transition:{ delay: allAnimationDelay, duration: allAnimationShowDuration}
    })
    animationText2.start({
      opacity: 1, x:0, transition:{ delay: allAnimationDelay*2, duration: allAnimationShowDuration}
    })
  }
  else {
    animationLogo.start({
      opacity: 0, x:`-${logoSpeed}`, transition:{ duration: allAnimationHideDuration }
    })
    animationText1.start({
      opacity: 0, x:`${logoSpeed}`, transition:{ duration: allAnimationHideDuration }
    })
    animationText2.start({
      opacity: 0, x:`${logoSpeed}`, transition:{ duration: allAnimationHideDuration }
    })
  }

  return (
    <div className={style.container} ref={ref}>
      <motion.div
        className={style.logoContainer}
        initial={{x:`-${logoSpeed}`, opacity: 0}}
        animate={animationLogo}
        >

      </motion.div>
      <div className={style.textContainer}>
        <motion.h4
          className={style.text1}
          initial={{x:`${textSpeed}`, opacity: 0}}
          animate={animationText1}
        >벤처한림회의 CI는 시니어들의 지식과 경험을 활용하여 벤처 사업 및 활동을 하는 이미지를 희망찬 컬러를 기반으로 벤처한림회 이니셜철자 VH와 결합하여 세련되고 정제되며 역동적인 이미지로 구현하였습니다.</motion.h4>
        <motion.h4
          className={style.text2}
          initial={{x:`${textSpeed}`, opacity: 0}}
          animate={animationText2}
        >로고의 4가지 컬러는 [일자리창출, 청년시니어, 건강, 회복]을 상징합니다. 이 시대의 어른으로서 건전한 사회로 탈바꿈하는데 주도적으로 이바지하는 협회의 비전을 이미지로 전달합니다.</motion.h4>
      </div>
    </div>
  )
}

export default LogoInfo