import { Link } from "react-router-dom";
import { Redirect, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { addPlano, updatePlano, removePlano } from '../../redux'

import Verificado from "../../img/verificado.svg";

import styles from './PlanosAfter.scss'
import { FaCircleNotch } from "react-icons/fa";

const handlePlanChange = () => alert("Parabéns!", "Plano atualizado", "success");

const PlanosAfter = () => {
    // const[planos, setPlanos] = useState(
    //     [{nome: 'Start'}, {desc1: 'Primeiro mês grátis'}, {desc2: 'Cinco livros por mês'}, {preco: '19.90'} ]
    // )
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
    
    const handleAddAction = () => {
        console.log('planoData', planoData)
        handleAddClick()
        console.log('planos', planos)
    }


    const plano = '';

    function handleClickExcluirPlano(nome){
        const setPlanos = (plano.filter((value) => value.nome !== nome ));
    }

    return ( 
    <section className="planos">
        <h1 className="titulo-plano">Planos Mensais</h1>


        <button className="botao-planos"><Link to="/cancelar">Cancelar plano</Link></button>
        
        <button className="botao-planos"><Link to="/novoplano" onClick={handleAddAction}>Adicionar Plano</Link></button>

        <article>
        <h1>Start</h1>
        <p>Primeiro mês grátis</p>
        <p>5 livros por mês</p>
        <p className="preco">R$ 19,90</p>
        <button className="botao-excluir" onClick={handleClickExcluirPlano}>Excluir</button>
        </article>
        
        <article>
        <h1>Pro</h1>
        <p>Primeiro mês grátis</p>
        <p>10 livros por mês</p>
        <p className="preco">R$ 59,90</p>
        <button className="botao-excluir" onClick={handleClickExcluirPlano}>Excluir</button>
        </article>

        <article>
        <h1>VIP</h1>
        <p>Primeiro mês grátis</p>
        <p>Livros ilimitados</p>
        <p className="preco">R$ 89,90</p>
        <button className="botao-excluir" onClick={handleClickExcluirPlano}>Excluir</button>
        </article>
    </section>
        
     );
};

export default PlanosAfter