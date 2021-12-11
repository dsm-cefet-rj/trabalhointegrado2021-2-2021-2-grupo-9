import React, { Component } from "react";
import Fonte from './assets/Fonte.css';
import Reset from './assets/Reset.css';
import Cabecalho from "./components/Cabecalho.css";
import Rodape from "./components/Rodape.css";
import Login from "./components/Login.css";
import Menu from "./img/menu.svg";
import Logo from "./img/logo-ltb.svg";
import Perfil from "./img/perfil-foto.svg";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";


class App extends Component {
  render() {
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
              <a href="login.html">
                <img src={Perfil} className="icones" />
              </a>
            </i>
          </button>
        </header>
        
        <form>
        <p className="titulo">Login</p>
          <input
            type="text"
            placeholder="Username"
            id="login"
            className="input-padrao"
          />
          <input
            type="password"
            placeholder="Senha"
            id="login"
            className="input-padrao"
          />
        </form>

        <button className="botao-ok">
          <a href="loginhome.html">Confirmar</a>
        </button>

        <footer className="rodape">
        <ul className="rodape__social">
        <li><a href="https://web.facebook.com/?_rdc=1&_rdr" className="rodape__midia"><img src={Facebook} alt="Ícone do Facebook" className="redes-svg" /></a></li>
        <li><a href="https://www.instagram.com/" className="rodape__midia"><img src={Instagram} alt="Ícone do Instagram" className="redes-svg" /></a></li>
        <li><a href="https://twitter.com/" className="rodape__midia"><img src={Twitter} alt="Ícone do Twitter" className="redes-svg" /></a></li>
        </ul>
            <p className="copy">Copyright &copy; 2021 Livraria Trovão e Baleias Todos os direitos
              reservados</p>
        </footer>
      </section>
    );
  }
}

export default App;
