import React, { useState } from "react";

import Menu from "img/menu.svg";
import Logo from "img/logo-ltb.svg";
import Perfil from "img/perfil-foto.svg";
import Profile from "img/pro.svg";

import Home from "img/home.svg";
import Planos from "img/planos.svg";
import Contato from "img/contato.svg";

import styles from './Cabecalho.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => setIsOpen(true)

    const handleNavClick = () => setIsOpen(false)

    return ( 
        <header>
            <div className={styles.cabecalho} >
                <button
                    className={styles["cabecalho__menu"]}
                    aria-label="Menu"
                    className={styles["botao-logo"]}
                    onClick={handleClick}
                >
                    <i>
                    <img src={Menu} className={styles.icones} />
                    </i>
                </button>
                <img src={Logo} />
                <button aria-label="Notificação" className={styles["botao-logo"]}>
                    <i>
                    <a href="login.html">
                        <img src={Perfil} className={styles.icones} />
                    </a>
                    </i>
                </button>
            </div>

            { isOpen && 
                <nav className={styles["menu-lateral"]} onClick={handleNavClick}>
                    <a href="cadastro.html" className={styles["menu-lateral__link"]}>
                        <img src={Profile} className={styles.icon} />
                        Cadastre-se
                    </a>
                    <a href="homepage.html" className={styles["menu-lateral__link"]}>
                        <img src={Home} className={styles.icon} />
                        Home
                    </a>
                    <a href="planos.html" className={styles["menu-lateral__link"]}>
                        <img src={Planos} className={styles.icon} />
                        Planos
                    </a>
                    <a href="contato.html" className={styles["menu-lateral__link"]}>
                        <img src={Contato} className={styles.icon} />
                        Contato
                    </a>

                </nav>
            }
        </header>
      );
}
 
export default Header;