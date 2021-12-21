import React from "react";
import { Link } from "react-router-dom";

import { Carousel } from "components";
import SectionDegustar from './SectionDegustar/SectionDegustar'

import styles from "./Home.module.scss";

import Hp1 from "../../imglivros/hp1.jpg";
import Hp2 from "../../imglivros/hp2.jpg";
import Hp3 from "../../imglivros/hp3.jpg";
import Hp4 from "../../imglivros/hp4.jpg";
import Hp5 from "../../imglivros/hp5.jpg";
import Hp6 from "../../imglivros/hp6.jpg";
import Pro from "../../img/pro.svg";
import Book from "../../img/book.svg";
import World from "../../img/world.svg";
import Cancel from "../../img/cancel.svg";

const srcBooks = [ 
  Hp1,
  Hp2,
  Hp3,
  Hp4,
  Hp5,
  Hp6,
]

const Home = () => {
  return (
    <div className={styles.home}>
      <SectionDegustar />

      <section className={styles["carousel-section"]}>
        <div className={styles["carousel-wrapper"]}>
          <h1 className={styles["titulo-carousel"]}>Os mais desejados</h1>
          { <Carousel srcBooks={srcBooks} /> }
        </div>
      </section>

      <section className={styles.container}>
          <h1 className={styles["titulo-desejados"]}>Curtiu algum título acima?</h1>
          <button className={styles["botao-assine"]}><Link to= "/cadastro">Assine já</Link></button>
      </section>

      <section className={styles["vantagens-section"]}>
        <div className={styles["vantagens-wrapper"]}>
          <h1 className={styles["titulo-desejados"]}>Vantagens</h1>
          <ul className={styles["vantagens-items"]}>
            <li className={styles["paragrafo-exp"]}><img src={Book}  className={styles["verificado-svg"]} />Alugue livros quando quiser</li>
            <li className={styles["paragrafo-exp"]}><img src={World} className={styles["verificado-svg"]} />Aprenda novos idiomas</li>
            <li className={styles["paragrafo-exp"]}><img src={Pro} className={styles["verificado-svg"]} />Aprimore-se profissionalmente</li>
            <li className={styles["paragrafo-exp]}"]}><img src={Cancel} className={styles["verificado-svg"]} />Cancele a qualquer momento</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home;
