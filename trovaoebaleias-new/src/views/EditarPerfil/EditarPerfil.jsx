import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";


import Estilo from "./EditarPerfil.css"
import Perfil from "../../img/perfil-foto.svg";



const EditarPerfil = () => {
    return (
        <>
            <h1 className="titulo-editar">Editar Perfil</h1>
            
            <label className="at">Alterar nome</label>
            <input type="text" id="nomesobrenome" className="input-padrao" required/> 

            <label className="at">Alterar senha</label>
            <input type="password" id="pass" className="input-padrao" required/> 

            <label className="at">Repetir senha</label>
            <input type="password" id="pass" className="input-padrao" required/> 

            <Link to="/homeafter"><button class="botao-ok">Atualizar perfil</button></Link>
        </>

    )
}

export default EditarPerfil;