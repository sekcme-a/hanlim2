import React from "react"
import style from "styles/home/about.module.css"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const About = () => {
  const animationTitle = useAnimation()
  const animationCard1 = useAnimation()
  const animationCard2 = useAnimation()
  const animationCard3 = useAnimation()
  const animationCard4 = useAnimation()

  const allAnimationShowDuration = 1;
  const allAnimationDelay = 0.5;
  const allAnimationHideDuration = 0.5;

  const { inView, entry, ref } = useInView({threshold: 1});

  if (inView) {
    animationTitle.start({
      opacity: 1, transition:{ duration: allAnimationShowDuration}
    })
    animationCard1.start({
      opacity: 1, transition:{ delay: allAnimationDelay, duration: allAnimationShowDuration}
    })
    animationCard2.start({
      opacity: 1, transition:{ delay: allAnimationDelay, duration: allAnimationShowDuration}
    })
    animationCard3.start({
      opacity: 1, transition:{ delay: allAnimationDelay, duration: allAnimationShowDuration}
    })
    animationCard4.start({
      opacity: 1, transition:{ delay: allAnimationDelay, duration: allAnimationShowDuration}
    })
  }
  else {
    animationTitle.start({
      opacity: 0, transition:{duration: allAnimationHideDuration}
    })
    animationCard1.start({
      opacity: 0, transition:{duration: allAnimationHideDuration}
    })
    animationCard2.start({
      opacity: 0, transition:{duration: allAnimationHideDuration}
    })
    animationCard3.start({
      opacity: 0, transition:{duration: allAnimationHideDuration}
    })
    animationCard4.start({
      opacity: 0, transition:{duration: allAnimationHideDuration}
    })
  }

  return (
    <div ref={ref}>
      <motion.div
        className={style.textContainer}
        initial={{ opacity: 0 }}
        animate={animationTitle}
      >
        <h4>ABOUT</h4>
        <h6>노인일자리와 소득창출을 위한 노장청 공동스타트업</h6>
      </motion.div>
      <div className={style.mainContainer}>

        <div className={style.container}>

          <motion.div
            className={style.card}
            initial={{opacity:0}}
            animate={animationCard1}
          >
            <figure className={style.card__thumb}>
              <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" className={style.card__image} />
              <figcaption className={style.card__caption}>
                <h2 className={style.card__title}>회장 인사말<br /><br /></h2>
                <p className={style.card__snippet}>노장청 공동스타트업<br/>벤처한림회 회장의 인삿말 보러가기</p>
                <a href="" className={style.card__button}>Read more</a>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            className={style.card}
            initial={{opacity:0}}
            animate={animationCard2}
          >
            <figure className={style.card__thumb}>
              {/* <Image
              src="/business-people.jpg"
                height={500}
                width={600}
                alt="총재 김균식"
                className={style.card__image} 
              /> */}
              <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="Picture by Kyle Cottrell" className={style.card__image} />
              {/* <img className={style.card__image} /> */}
              <figcaption className={style.card__caption}>
                <h2 className={style.card__title}>중앙 조직도<br /><br /></h2>
                <p className={style.card__snippet}>벤처한림회의<br/>중앙 조직도 보러가기</p>
                <a href="" className={style.card__button}>Read more</a>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            className={style.card}
            initial={{opacity:0}}
            animate={animationCard3}
          >
            <figure className={style.card__thumb}>
              {/* <Image
              src="/people.jpg"
                height={700}
                width={700}
                alt="총재 김균식"
                className={style.card__image} 
              /> */}
              <img src="https://cdn.pixabay.com/photo/2016/11/29/02/20/astronomy-1866822_960_720.jpg" alt="Picture by Kyle Cottrell" className={style.card__image} />
              <figcaption className={style.card__caption}>
                <h2 className={style.card__title}>임원현황<br /><br /></h2>
                <p className={style.card__snippet}>벤처한림회를<br/>운영하는 임원단 현황 보러가기</p>
                <a href="" className={style.card__button}>Read more</a>
              </figcaption>
            </figure>
            </motion.div>
            
          <motion.div
            className={style.card}
            initial={{opacity:0}}
            animate={animationCard4}
          >
            <figure className={style.card__thumb}>
              {/* <Image
              src="/map.png"
                height={600}
                width={600}
                alt="총재 김균식"
                className={style.card__image} 
              /> */}
              <img src="https://cdn.pixabay.com/photo/2017/08/13/18/23/space-2638126_960_720.jpg" alt="Picture by Kyle Cottrell" className={style.card__image} />
              <figcaption className={style.card__caption}>
                <h2 className={style.card__title}>오시는 길<br /><br /></h2>
                <p className={style.card__snippet}>벤처한림회로<br/>오시는 길 보러가기</p>
                <a href="" className={style.card__button}>Read more</a>
              </figcaption>
            </figure>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default About;