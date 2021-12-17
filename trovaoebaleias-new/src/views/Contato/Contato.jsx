import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";

import Estilo from "./Contato.css"
import Telefone from "../../img/telefone.svg";
import Email from "../../img/email.svg";
import Endereco from "../../img/endereco.svg";


const Contato = () => {
    return(
        <>
        <div>
            <h1 className="titulo-contato">Contato</h1>
            <p className="fale-conosco">Fale conosco através de nossos canais de atendimento</p>
            <p className="paragrafo-fale"><img src={Telefone} className="img-svg" />(11) 1111-1111</p>
            <p className="paragrafo-fale"><img src={Email} className="img-svg" /><a href="mailto:trovaoebaleias@store.com">trovaoebaleias@</a></p>
            <p className="paragrafo-fale"><img src={Endereco} className="img-svg" />Av. Paulista, 171</p>
        </div>
            </>

    )
}

export default Contato;