import React from "react";

import Hp1 from "../../imglivros/hp1.jpg";
import Hp2 from "../../imglivros/hp2.jpg";
import Hp3 from "../../imglivros/hp3.jpg";

import Sel1 from "../../imglivros/selecao1.jpg";
import Sel2 from "../../imglivros/selecao2.jpg";
import Sel3 from "../../imglivros/selecao3.jpg";

import Poe1 from "../../imglivros/poesia1.jpg";
import Poe2 from "../../imglivros/poesia2.jpg";
import Poe3 from "../../imglivros/poesia3.jpg";

import Fant1 from "../../imglivros/fant1.jpg";
import Fant2 from "../../imglivros/fant2.jpg";
import Fant3 from "../../imglivros/fant3.jpg";

import Next from "../../img/setadir.svg";
import Prev from "../../img/setaesq.svg";

import styles from "./HomeAfter.css"

const HomeAfter = () => {
    return ( 
        <>
        <div>
        <h1 className="titulo-emprestados">Os mais lidos</h1>
            <ul className="livros">
                <img src={Prev} className="before"/>
                <img src={Hp1} className="livro"/>
                <img src={Hp2} className="livro"/>
                <img src={Hp3} className="livro"/>
                <img src={Next} className="after"/>
            </ul>
         

         <h1 className="titulo-emprestados">Romance</h1>
            <ul className="livros">
                <img src= {Prev} className="before"/>
                <img src= {Sel1} className="livro"/>
                <img src= {Sel2}  className="livro"/>
                <img src= {Sel3}  className="livro"/>
                <img src= {Next} className="after"/>
            </ul>

            <h1 className="titulo-emprestados">Poesia</h1>
            <ul className="livros">
                <img src= {Prev} className="before"/>
                <img src= {Poe1} className="livro"/>
                <img src= {Poe2}  className="livro"/>
                <img src= {Poe3}  className="livro"/>
                <img src= {Next} className="after"/>
            </ul>

            <h1 className="titulo-emprestados">Fantasia</h1>
            <ul className="livros">
                <img src= {Prev} className="before"/>
                <img src= {Fant1} className="livro"/>
                <img src= {Fant2}  className="livro"/>
                <img src= {Fant3}  className="livro"/>
                <img src= {Next} className="after"/>
            </ul>
                        
            </div>
        </>
        
     );
}

export default HomeAfter;