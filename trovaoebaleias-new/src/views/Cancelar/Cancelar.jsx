import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";

import Hp1 from "../../imglivros/hp1.jpg";
import Hp2 from "../../imglivros/hp2.jpg";
import Hp3 from "../../imglivros/hp3.jpg";

import Estilo from "./Cancelar.css"


const Cancelar = () => {
    return (
        <>
            <h1 className="titulo-cancel">Cancelar Plano</h1>
            <div>
                <p className="parag">Volte quando quiser. Se você reiniciar sua assinatura dentro de dez meses, seus perfis,
                    seus favoritos, suas preferências e os detalhes da sua conta estarão aguardando por você.
                </p>
            </div>

            <Link to="/home"><button className="botao-cancelar">Cancelar assinatura</button></Link>


            <h1 className="titulo-emprestados">Próximos lançamentos</h1>
            <div className="livros">
                <img src={Hp1} className="livro" />
                <img src={Hp2} className="livro" />
                <img src={Hp3} className="livro" />
            </div>


        </>

    )
}

export default Cancelar;