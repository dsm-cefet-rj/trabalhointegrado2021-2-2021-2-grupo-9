import React from 'react'
import { Link } from "react-router-dom";

import Verificado from "../../img/verificado.svg";

import styles from './Planos.module.scss'

const Planos = () => {
    return ( 
        <section className={styles["planos"]}>
            <h1 className={styles["titulo-plano"]}>Planos Mensais</h1>

            <ul className={styles["planos-cartoes"]}>
                <li className={styles["cartao"]}>
                    <h3 className={styles["titulo-cartoes"]}>Start</h3>
                    <article>
                        <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />Primeiro mês grátis</p>
                        <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />5 livros por mês</p>
                        <p className={styles["preco-cartao"]}>R$ 19,90</p>
                        <button className={styles["botao-plano"]}><Link to="/cadastro">Assinar plano</Link></button>
                    </article>
                </li>

                <li className={styles["cartao"]}>
                    <article>
                        <h3 className={styles["titulo-cartoes"]}>Pro</h3>
                        <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />Primeiro mês grátis</p>
                        <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />10 livros por mês</p>
                        <p className={styles["descricao-cartao"]}><img src={Verificado} className={styles["iconsvg"]} />-10% ao convidar amigo</p>
                        <p className={styles["preco-cartao"]}>R$ 39,90</p>
                        <button className={styles["botao-plano"]}><Link to="/cadastro">Assinar plano</Link></button>
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
                        <button className={styles["botao-plano"]}><Link to="/cadastro">Assinar plano</Link></button>
                    </article>
                </li>
            </ul>
        </section>
     );
}

export default Planos
