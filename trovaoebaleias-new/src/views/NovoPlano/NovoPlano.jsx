import { produceWithPatches } from 'immer';
import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";

import styles from './NovoPlano.scss'


const NovoPlano = () => {
    const [plano, setPlano] = useState({});
    
    function handleInputChange(e){
        setPlano( {...plano, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        this.props.setPlano(this.props.plano.concat(plano))

    }
    return(
        <section>
            <h1 className="titulo-plano">Adicionar Plano</h1>
        
        <form onSubmit={handleSubmit}>
            <h2>Nome do Plano</h2>
            <input type="text" name="nome" className="input-padrao" value={plano.nome} onChange={handleInputChange}/>
            <h2>Descrição 1</h2>
            <input type="text" name="desc1" className="input-padrao" value={plano.desc1} onChange={handleInputChange}/>
            <h2>Descrição 2</h2>
            <input type="text" name="desc2" className="input-padrao" value={plano.desc2} onChange={handleInputChange}/>
            <h2>Preço</h2>
            <input type="text" name="preco" className="input-padrao" value={plano.preco} onChange={handleInputChange}/>

            <input type="submit" value="Adicionar" className="adicionar"/>
            </form>
        </section>
        
        
    )

}

export default NovoPlano