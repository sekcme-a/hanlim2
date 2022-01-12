import { style } from "@mui/system";
import React from "react";
import styles from "styles/Header.module.css"

const Header = (props) => {
  return (
    <div className={`${styles.header} ${styles.banner}`}>
      <div className={`${styles.header} ${styles.banner__nav}`}>
        <div className={styles.banner__container}>
          <h1>{props.nav}</h1>
          <p>______ . ______</p>
          <h2>노인일자리와 소득창출을 위한 벤처한림회</h2>
        </div>
      </div>
    </div>
  )
}

export default Header;