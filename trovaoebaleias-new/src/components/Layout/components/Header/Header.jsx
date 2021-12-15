import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

import Navbar from "components/Layout/Navbar";
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


const Header = () => {
    

    return ( 
        <header>
            <div className={styles.cabecalho}>{
                    <Navbar className="navbarr"/>
                }
                <img className={styles["img-logo"]} src={Logo} />
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