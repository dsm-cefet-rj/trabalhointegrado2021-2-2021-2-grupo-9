import React from "react";
import { Link } from "react-router-dom";
import Verificado from "../../img/verificado.svg";

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

import styles from "./Home.module.scss";

const Home = () => (
  <div clasName={styles.home}>
    <section className="container">
      <h1 className="titulo-xp">Experimente por 7 dias</h1>
      <p className="paragrafo-exp">
        <img src={Verificado} className="verificado-svg" />
        Acesso ilimitado a toda plataforma
      </p>
      <p className="paragrafo-exp">
        <img src={Verificado} className="verificado-svg" />
        Mais de mil títulos, inúmeros gêneros
      </p>
    </section>

    <section className="container">
      <h1 className="titulo-desejados">Os mais desejados</h1>
      <ul className="livros">
        <img src={Hp1} className="livro" />
        <img src={Hp2} className="livro" />
        <img src={Hp3} className="livro" />
        <img src={Hp4} className="livro" />
        <img src={Hp5} className="livro" />
        <img src={Hp6} className="livro" />
      </ul>
    </section>

    <section className="container assine">
        <h1 className="titulo-desejados">Curtiu algum título acima?</h1>
        <button className="botao-assine"><Link to= "/cadastro">Assine já</Link></button>
    </section>

    <section className="container vantagens">
        <h1 className="titulo-desejados">Vantagens</h1>
        <p className="paragrafo-exp"><img src={Book}  className="verificado-svg"/>Alugue livros quando quiser</p>
        <p className="paragrafo-exp"><img src={World} className="verificado-svg"/>Aprenda novos idiomas</p>
        <p className="paragrafo-exp"><img src={Pro} className="verificado-svg"/>Aprimore-se profissionalmente</p>
        <p className="paragrafo-exp"><img src={Cancel} className="verificado-svg"/>Cancele a qualquer momento</p>
    </section>
  </div>
);

export default Home;
