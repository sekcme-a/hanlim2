import React, {useCallback, useRef} from "react"
import style from "styles/home/about.module.css"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"

const About = () => {
  const ref = useRef();

  const animationTitle = useAnimation()
  const animationCard1 = useAnimation()
  const animationCard2 = useAnimation()
  const animationCard3 = useAnimation()
  const animationCard4 = useAnimation()

  const allAnimationShowDuration = 1;
  const allAnimationDelay = 0.5;
  const allAnimationHideDuration = 0.5;

  // const { inView, entry, ref } = useInView({ threshold: 1 });
  // const { outView, entry1, ref1 } = useInView({threshold: .5})
  const [inViewRef, inView] = useInView({ threshold: 0.7})
  const [inHideRef, outView] = useInView({ threshold: 0.2})

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
  if(!outView) {
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

  // const setRefs = useCallback(
  //   (node) => {
  //     // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
  //     inViewRef(node)
  //     inHideRef(node)
  //   },
  //   [inViewRef, inHideRef],
  // )

  return (
    <div ref={inViewRef}>
      <div ref={inHideRef}>
      <motion.div
        className={style.textContainer}
        initial={{ opacity: 0 }}
        animate={animationTitle}
      >
        <h4>ABOUT</h4>
        <h6>?????????????????? ??????????????? ?????? ????????? ??????????????????</h6>
      </motion.div>
      <div className={style.mainContainer}>

        <div className={style.container}>
          <Link href="/info/greet" >
            <motion.div
              className={style.card}
              initial={{opacity:0}}
              animate={animationCard1}
            >
              <figure className={style.card__thumb}>
                <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" className={style.card__image} />
                <figcaption className={style.card__caption}>
                  <h2 className={style.card__title}>?????? ?????????<br /><br /></h2>
                  <p className={style.card__snippet}>????????? ??????????????????<br/>??????????????? ????????? ????????? ????????????</p>
                  <a href="" className={style.card__button}>Read more</a>
                </figcaption>
              </figure>
            </motion.div>
          </Link>

          <Link href="/info/chart" >
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
                  alt="?????? ?????????"
                  className={style.card__image} 
                /> */}
                <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="Picture by Kyle Cottrell" className={style.card__image} />
                {/* <img className={style.card__image} /> */}
                <figcaption className={style.card__caption}>
                  <h2 className={style.card__title}>?????? ?????????<br /><br /></h2>
                  <p className={style.card__snippet}>??????????????????<br/>?????? ????????? ????????????</p>
                  <a href="" className={style.card__button}>Read more</a>
                </figcaption>
              </figure>
            </motion.div>
          </Link>

          <Link href="/info/status">
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
                  alt="?????? ?????????"
                  className={style.card__image} 
                /> */}
                <img src="https://cdn.pixabay.com/photo/2016/11/29/02/20/astronomy-1866822_960_720.jpg" alt="Picture by Kyle Cottrell" className={style.card__image} />
                <figcaption className={style.card__caption}>
                  <h2 className={style.card__title}>????????????<br /><br /></h2>
                  <p className={style.card__snippet}>??????????????????<br/>???????????? ????????? ?????? ????????????</p>
                  <a href="" className={style.card__button}>Read more</a>
                </figcaption>
              </figure>
            </motion.div>
          </Link>
          
          <Link href="/info/where" >
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
                  alt="?????? ?????????"
                  className={style.card__image} 
                /> */}
                <img src="https://cdn.pixabay.com/photo/2017/08/13/18/23/space-2638126_960_720.jpg" alt="Picture by Kyle Cottrell" className={style.card__image} />
                <figcaption className={style.card__caption}>
                  <h2 className={style.card__title}>????????? ???<br /><br /></h2>
                  <p className={style.card__snippet}>??????????????????<br/>????????? ??? ????????????</p>
                  <a href="" className={style.card__button}>Read more</a>
                </figcaption>
              </figure>
            </motion.div>
          </Link>
        </div>

        </div>
        </div>
    </div>
  )
}

export default About;