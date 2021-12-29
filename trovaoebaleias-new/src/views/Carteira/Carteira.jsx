import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Estilo from './Carteira.css'

function Carteira() {
    return ( 
    <section >
        <form className="containerr">

        <h1 className="titulo">Carteira</h1>

      <label className="titulo-label">Número do Cartão</label>
      <input type="number" className="input-padrao" />

      <label className="titulo-label">Nome</label>
      <input type="number" className="input-padrao" />



      <label className="titulo-label">Data de validade</label>
      <input type="number" className="input-pequeno" />

      <label className="titulo-label">Mês de validade</label>
      <input type="number" className="input-pequeno" />

      <label className="titulo-label">CVV</label>
      <input type="number" className="input-pequeno" />

      <button type="submit" className="button-cadastro">
        Cadastrar
      </button>
    </form >
    </section>
        
     );
};

export default Carteira

