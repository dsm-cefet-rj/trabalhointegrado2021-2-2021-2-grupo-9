import { Link } from "react-router-dom";
import { Redirect, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { addPlano, updatePlano, removePlano } from '../../redux'

import Verificado from "../../img/verificado.svg";

import styles from './PlanosAfter.module.scss'

const handlePlanChange = () => alert("Parabéns!", "Plano atualizado", "success");

const PlanosAfter = () => {
    const [planoData, setPlanoData] = useState({})
    const [redirect, setRedirect] = useState(false)
    const planos = useSelector(state => state.planos)
    const dispatch = useDispatch()
    const deletePlano = () => dispatch(removePlano(planos))


    const { planId } = useParams()
    const creationMode = planId === "new"

    useEffect(() => {
        if (creationMode) {
            return
        }

        const selectedPlano = planos.filter(plano => plano.id === +planId)
        loadPlanoData(selectedPlano)
    }, [planId])

    const loadPlanoData = (selectedPlano) => {
        if (!selectedPlano.length) {
          //  setRedirect("/home")
            return
        }

        setPlanoData({
            id: selectedPlano[0].id,
            nome: selectedPlano[0].nome,
            desc1: selectedPlano[0].desc1,
            desc2: selectedPlano[0].desc2,
        })
    }

    const handleUserInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setPlanoData(prevData => ({...prevData, [name]: value }))
    }

    const handleClick = ({ fn }) => {        
        dispatch(fn(planoData))
        setRedirect("/planosafter")
    }

    const handleAddClick = () => handleClick({ fn: addPlano })
    const handleUpdateClick = () => handleClick({ fn: updatePlano })
    const handleRemoveClick = () => handleClick({ fn: removePlano })

    if (redirect) {
        return <Redirect push to={redirect} />
    }

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
                    <button onClick={deletePlano} className={styles["botao-plano"]}>Excluir</button>
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