import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

import Estilo from "./Cadastro.css"


const Cadastro = () => {
    return ( 
        <div className="base">
           <h1 className="titulo-dados">Dados cadastrais</h1>
            <form>
                <div>
                <label for="nomesobrenome">Nome e sobrenome</label> 
                    <input type="text" id="nomesobrenome" className="input-padrao" required />

                    <label for="email">E-mail</label> 
                    <input type="email" id="email" className="input-padrao" required placeholder="seuemail@dominio.com" />
    
                    <label for="cpf">CPF</label>
                    <input type="number" id="cpf" className="input-padrao" required placeholder="XXX.XXX.XXX-XX" />
    
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" className="input-padrao" required placeholder="(XX) XXXX-XXXX" />
    
                    <label for="datanasc">Data de Nascimento</label>
                    <input type="date" id="datanasc" className="input-padrao" required placeholder="(XX) XXXX-XXXX" />

                    <label for="senha">Crie uma senha</label>
                    <input type="password" id="senha" className="input-padrao" required />
    
                    <label for="senha">Repetir senha</label>
                    <input type="password" id="senha" className="input-padrao" required/>

                    <h1 className="titulo-dados">Endereço</h1>
                
                    <label for="cep">CEP</label> 
                    <input type="number" id="cep" className="input-padrao" required  placeholder="XXXXX-XXX" /> 

                    <label for="rua">Rua</label> 
                    <input type="text" id="email" className="input-padrao" required />

                    <label for="cpf">Número</label>
                    <input type="number" id="cpf" className="input-padrao" required />

                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade" className="input-padrao" required />
                </div>
                    
                <div>
                <label for="estado">Estado</label><br></br>
                    <select name="estados-brasil" class="lista">
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                </select>
                </div>
                    
                <h1 className="titulo-dados">Gêneros favoritos</h1>
                <div className="listaa">
                    <label className="checkbox-generos"><input type="checkbox"/>Ficção Literária</label>
                    <label className="checkbox-generos"><input type="checkbox"/>Não-Ficção</label>
                    <label className="checkbox-generos"><input type="checkbox"/>Suspense</label>
                    <label className="checkbox-generos"><input type="checkbox"/>Fantasia</label>
                    <label className="checkbox-generos"><input type="checkbox"/>Horror</label>
                    <label className="checkbox-generos"><input type="checkbox"/>Poesia</label>
                    <label className="checkbox-generos"><input type="checkbox"/>Romance</label>
                </div>

                <div className="lista-check">
                    <label class="checkbox"><input type="checkbox"/>Li e aceito os termos</label>

                    <label class="checkbox"><input type="checkbox"/>Gostaria de receber nossas novidades por e-mail?</label>
                </div>

                <Link to="/pagamento"><button class="botao-ok">Confirmar</button></Link>
            </form> 
        </div>
     );
}

export default Cadastro;