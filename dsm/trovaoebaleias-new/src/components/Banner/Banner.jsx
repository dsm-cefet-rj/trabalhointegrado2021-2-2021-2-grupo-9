import React from "react";
import { Link } from "react-router-dom";

import styles from "./Banner.module.scss";

const Banner = ({imgSrc, title, buttonTitle, buttonLink, children}) => (
    <div className={styles.banner}>
      <div className={styles.card}>
        <section className={styles["card-section"]}>
          <div className={styles["card-section-title"]}>
            {title}
          </div>
          <div  className={styles["card-section-text"]}>
            {children}
          </div>
          <button className={styles["card-section-button"]}>
            <Link to={buttonLink}>{buttonTitle}</Link>
          </button>
        </section>
        <section className={styles["card-section"]}>
          <img src={imgSrc} className={styles["card-image"]} />
        </section>
      </div>
  </div>
)

export default Banner;
