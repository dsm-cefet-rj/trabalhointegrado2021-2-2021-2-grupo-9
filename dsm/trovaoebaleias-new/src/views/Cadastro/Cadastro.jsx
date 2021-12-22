import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom'

import { Card } from 'components'

import { LoginContext } from "context";

import { ESTADOS } from "../../constants";

import style from "./Cadastro.module.scss"

const Cadastro = () => {
    const { setUser } = useContext(LoginContext) || []
    const [redirect, setRedirect] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [passwordPassed, setPasswordPassed] = useState(false)

    const handleName = (e) => setName(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handlePasswordRepeat = (e) => {
        const newPassword = e.target.value
        const hasPasswordPassed = newPassword === password

        if (hasPasswordPassed) {
            setPasswordPassed(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (passwordPassed) {
            const newUser = {
                id: 101,
                name,
                password
            }
            console.log('newUser', newUser)

            setUser(newUser)
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Redirect push to="/login" />
    }

    return (
        <Card> 
            <div className={style["cadastro"]}>
                <h1 className={style["titulo-dados"]}>Dados cadastrais</h1>
                <form className={style["cadastro-form"]} onSubmit={handleSubmit}>

                    <section className={style["cadastro-section"]}>
                        <label htmlFor="nomesobrenome">Nome e sobrenome</label> 
                            <input type="text" id="nomesobrenome" value={name} className={style["input-padrao"]} onChange={handleName} />

                            <label htmlFor="email">E-mail</label> 
                            <input type="email" id="email" value={email} className={style["input-padrao"]} placeholder="seuemail@dominio.com" onChange={handleEmail}/>
            
                            <label htmlFor="cpf">CPF</label>
                            <input type="number" id="cpf" className={style["input-padrao"]} placeholder="XXX.XXX.XXX-XX" />
            
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" className={style["input-padrao"]} placeholder="(XX) XXXX-XXXX" />
            
                            <label htmlFor="datanasc">Data de Nascimento</label>
                            <input type="date" id="datanasc" className={style["input-padrao"]} placeholder="(XX) XXXX-XXXX" />

                            <label htmlFor="senha">Crie uma senha</label>
                            <input type="password" id="senha" value={password} className={style["input-padrao"]} onChange={handlePassword} />
            
                            <label htmlFor="senha">Repetir senha</label>
                            <input type="password" id="senha" className={style["input-padrao"]} onChange={handlePasswordRepeat}/>

                            <h1 className={style["titulo-dados"]}>Endereço</h1>
                        
                            <label htmlFor="cep">CEP</label> 
                            <input type="number" id="cep" className={style["input-padrao"]}  placeholder="XXXXX-XXX" /> 

                            <label htmlFor="rua">Rua</label> 
                            <input type="text" id="email" className={style["input-padrao"]} />

                            <label htmlFor="cpf">Número</label>
                            <input type="number" id="cpf" className={style["input-padrao"]} />

                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" id="cidade" className={style["input-padrao"]} />
                    </section>
                        
                    <section className={style["cadastro-sele"]}>
                    <label htmlFor="estado">Estado</label><br></br>
                        <select name="estados-brasil" className="lista">
                        { ESTADOS.map( ({ sigla, nome }) => 
                            <option key={sigla} value={sigla}>{nome}</option>
                        )}
                    </select>
                    </section>
                        
                    <h1 className={style["titulo-dados"]}>Gêneros favoritos</h1>
                    <section className={style["listaa"]}>
                        <label className={style["checkbox-generos"]}><input type="checkbox"/>Ficção Literária</label>
                        <label className={style["checkbox-generos"]}><input type="checkbox"/>Não-Ficção</label>
                        <label className={style["checkbox-generos"]}><input type="checkbox"/>Suspense</label>
                        <label className={style["checkbox-generos"]}><input type="checkbox"/>Fantasia</label>
                        <label className={style["checkbox-generos"]}><input type="checkbox"/>Horror</label>
                        <label className={style["checkbox-generos"]}><input type="checkbox"/>Poesia</label>
                        <label className={style["checkbox-generos"]}><input type="checkbox"/>Romance</label>
                    </section>

                    <section className={style["lista-check"]}>
                        <label className={style["checkbox"]}><input type="checkbox"/>Li e aceito os termos</label>
                        <label className={style["checkbox"]}><input type="checkbox"/>Gostaria de receber nossas novidades por e-mail?</label>
                    </section>

                    <input 
                        type="submit" 
                        to="/pagamento" 
                        className={style["botao-ok"]} 
                        value="Confirmar" 
                    />
                </form> 
            </div>
        </Card>
    );
}

export default Cadastro;