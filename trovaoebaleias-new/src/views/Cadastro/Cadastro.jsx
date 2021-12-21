import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

import { Card } from 'components'

import { ESTADOS } from "../../constants";

import style from "./Cadastro.module.scss"

const Cadastro = () => {
    return (
        <Card> 
            <div className={style["cadastro"]}>
                <h1 className={style["titulo-dados"]}>Dados cadastrais</h1>
                <form className={style["cadastro-form"]}>

                    <section className={style["cadastro-section"]}>
                        <label htmlFor="nomesobrenome">Nome e sobrenome</label> 
                            <input type="text" id="nomesobrenome" className={style["input-padrao"]} required />

                            <label htmlFor="email">E-mail</label> 
                            <input type="email" id="email" className={style["input-padrao"]} required placeholder="seuemail@dominio.com" />
            
                            <label htmlFor="cpf">CPF</label>
                            <input type="number" id="cpf" className={style["input-padrao"]} required placeholder="XXX.XXX.XXX-XX" />
            
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" className={style["input-padrao"]} required placeholder="(XX) XXXX-XXXX" />
            
                            <label htmlFor="datanasc">Data de Nascimento</label>
                            <input type="date" id="datanasc" className={style["input-padrao"]} required placeholder="(XX) XXXX-XXXX" />

                            <label htmlFor="senha">Crie uma senha</label>
                            <input type="password" id="senha" className={style["input-padrao"]} required />
            
                            <label htmlFor="senha">Repetir senha</label>
                            <input type="password" id="senha" className={style["input-padrao"]} required/>

                            <h1 className={style["titulo-dados"]}>Endereço</h1>
                        
                            <label htmlFor="cep">CEP</label> 
                            <input type="number" id="cep" className={style["input-padrao"]} required  placeholder="XXXXX-XXX" /> 

                            <label htmlFor="rua">Rua</label> 
                            <input type="text" id="email" className={style["input-padrao"]} required />

                            <label htmlFor="cpf">Número</label>
                            <input type="number" id="cpf" className={style["input-padrao"]} required />

                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" id="cidade" className={style["input-padrao"]} required />
                    </section>
                        
                    <section className={style["cadastro-section"]}>
                    <label htmlFor="estado">Estado</label><br></br>
                        <select name="estados-brasil" className="lista">
                        { ESTADOS.map( ({ sigla, nome }) => 
                            <option value={sigla}>{nome}</option>
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

                    <Link to="/pagamento"><button className={style["botao-ok"]}>Confirmar</button></Link>
                </form> 
            </div>
        </Card>
     );
}

export default Cadastro;