import React from "react";
import { Link } from "react-router-dom";

import { SideBar } from "components/Layout/components";
import LogoSmall from "img/logo-small.svg"
import Perfil from "img/perfil-foto.svg";

import styles from './Cabecalho.module.scss';

const Header = ({ sidebar, setSidebar }) => {
    return ( 
        <header>
            <div className={styles.cabecalho}>
                <SideBar sidebar={sidebar} setSidebar={setSidebar} className="navbarr"/>
                <Link to="/home">
                    <img className={styles["img-logo"]} src={LogoSmall} />
                </Link>
                <button aria-label="Notificação" className={styles["botao-logo"]}>
                    <i>
                    <Link to="/login">
                        <img src={Perfil} className={styles.icones} />
                    </Link>
                    </i>
                </button>
            </div>
        </header>
    );
}
 
export default Header;