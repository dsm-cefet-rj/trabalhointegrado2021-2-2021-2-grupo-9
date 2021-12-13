import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logo-ltb.svg";
import Menu from "../../img/menu.svg";
import Perfil from "../../img/perfil-foto.svg";
import Verificado from "../../img/verificado.svg";
import Style from "./style.css";
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
import Instagram from "../../img/instagram.svg";
import Twitter from "../../img/twitter.svg";
import Facebook from "../../img/facebook.svg";

export default function Contato() {
  return (
    <section>
      <header className="cabecalho">
        <button
          className="cabecalho__menu"
          aria-label="Menu"
          className="botao-logo"
        >
          <i>
            <img src={Menu} className="icones" />
          </i>
        </button>
        <img src={Logo} />

        <button aria-label="Notificação" className="botao-logo">
          <i>
            <Link to="/loginn">
              <img src={Perfil} className="icones" />
            </Link>
          </i>
        </button>
      </header>
      <main>
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

            <footer className="rodape">
        <ul className="rodape__social">
        <li><a href="https://web.facebook.com/?_rdc=1&_rdr" className="rodape__midia"><img src={Facebook} alt="Ícone do Facebook" className="redes-svg" /></a></li>
        <li><a href="https://www.instagram.com/" className="rodape__midia"><img src={Instagram} alt="Ícone do Instagram" className="redes-svg" /></a></li>
        <li><a href="https://twitter.com/" className="rodape__midia"><img src={Twitter} alt="Ícone do Twitter" className="redes-svg" /></a></li>
        </ul>
            <p className="copy">Copyright &copy; 2021 Livraria Trovão e Baleias Todos os direitos
              reservados</p>
        </footer>
      </main>
    </section>
  );
}
