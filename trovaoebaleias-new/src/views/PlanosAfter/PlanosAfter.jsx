import React from 'react'
import { Link } from "react-router-dom";

import Verificado from "../../img/verificado.svg";

import styles from './PlanosAfter.module.scss'

import swal from 'sweetalert';

const handlePlanChange = () => swal("Parabéns!", "Plano atualizado", "success");

const PlanosAfter = () => {
    return ( 
    <section className={styles["planos"]}>
        <h1 className={styles["titulo-plano"]}>Planos Mensais</h1>

        <button className={styles["botao-planos"]}><Link to="/cancelar">Cancelar plano</Link></button>

        <ul className={styles["planos-cartoes"]}>
            <li className={styles["cartao"]}>
                <h3 className={styles["titulo-cartoes"]}>Start</h3>
                <article>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />Primeiro mês grátis</p>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />5 livros por mês</p>
                    <p className={styles["preco-cartao"]}>R$ 19,90</p>
                    <button onClick={handlePlanChange} className={styles["botao-plano"]}>Vir para este plano</button>
                </article>
            </li>

            <li className={styles["cartao"]}>
                <article>
                    <h3 className={styles["titulo-cartoes"]}>Pro</h3>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />Primeiro mês grátis</p>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />10 livros por mês</p>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />-10% ao convidar amigo</p>
                    <p className={styles["preco-cartao"]}>R$ 39,90</p>
                    <button onClick={handlePlanChange} className={styles["botao-plano"]}>Vir para este plano</button>
                </article>
            </li>

            <li className={styles["cartao"]}>
                <article>
                    <h3 className={styles["titulo-cartoes"]}>VIP</h3>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />Primeiro mês grátis</p>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />Livros ilimitados</p>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />-10% ao convidar amigo</p>
                    <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />Entre outras vantagens</p>
                    <p className={styles["preco-cartao"]}>R$ 89,90</p>
                    <button onClick={handlePlanChange} className={styles["botao-plano"]}>Vir para este plano</button>
                </article>
            </li>
        </ul>
    </section>
        
     );
};

export default PlanosAfter

