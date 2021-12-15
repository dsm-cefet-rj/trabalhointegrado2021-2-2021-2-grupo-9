import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

import { SideBar } from "components/Layout/components";
import Menu from "img/menu.svg";
import Logo from "img/logo-ltb.svg";
import Perfil from "img/perfil-foto.svg";
import Profile from "img/pro.svg";

import Reset from "../../../../assets/Reset.css";

import Home from "img/home.svg";
import Planos from "img/planos.svg";
import Contato from "img/contato.svg";

import { themes } from '../../../../themes'

import styles from './Cabecalho.module.scss';

const Header = ({ sidebar, setSidebar }) => {
    return ( 
        <header>
            <div className={styles.cabecalho}>
                <SideBar sidebar={sidebar} setSidebar={setSidebar} className="navbarr"/>
                <Link to="/home">
                    <img className={styles["img-logo"]} src={Logo} />
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