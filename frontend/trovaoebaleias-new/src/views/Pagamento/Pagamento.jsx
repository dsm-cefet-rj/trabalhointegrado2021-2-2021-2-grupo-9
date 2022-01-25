import React from "react";
import { Link } from "react-router-dom";

import { Card } from 'components'

import Debito from "../../img/carddebit.svg";
import Credito from "../../img/cardcredit.svg";
import Boleto from "../../img/boleto.svg";

import Estilo from "./Pagamento.css"

const Pagamento = () => {
    return(
        <Card>
            <div>
                <h1 className="titulo">Formas de pagamento</h1>
                
                <fieldset className="formapag">           
                <label class="radio"><input type="radio"/>Cartão de Débito</label>
                        <ul>
                            <li><img src={Debito} className="imgsvg"/></li>
                            <li><img src={Debito} className="imgsvg"/></li>
                            <li><img src={Debito} className="imgsvg"/></li>
                            <li><img src={Debito} className="imgsvg"/></li>
                            <li><img src={Debito} className="imgsvg"/></li>
                        </ul>
                </fieldset>

                <fieldset className="formapag">           
                <label class="radio"><input type="radio"/>Cartão de Crédito</label>
                        <ul>
                            <li><img src={Credito} className="imgsvg"/></li>
                            <li><img src={Credito} className="imgsvg"/></li>
                            <li><img src={Credito} className="imgsvg"/></li>
                            <li><img src={Credito} className="imgsvg"/></li>
                            <li><img src={Credito} className="imgsvg"/></li>
                        </ul>
                </fieldset>

                <fieldset className="formapag">           
                <label class="radio"><input type="radio"/>Boleto</label>
                        <ul>
                            <li><img src={Boleto} className="imgsvg"/></li>
                            <li><img src={Boleto} className="imgsvg"/></li>
                        </ul>
                </fieldset>

                <section>
                        <label for="numerocartao" class="text-pag">Número do Cartão</label>
                        <input type="number" id="numcartao" class="input-padrao" required/>

                        <label for="nomecartao" class="text-pag">Nome impresso no cartão</label>
                        <input type="text" id="nomecartao" class="input-padrao" required/>

                        <label for="estado" class="text-pag">Validade</label>
                        <select class="amlista">
                            <option>Mês</option>
                            <option value="01">Janeiro</option>
                            <option value="02">Fevereiro</option>
                            <option value="03">Março</option>
                            <option value="04">Abril</option>
                            <option value="05">Maio</option>
                            <option value="06">Junho</option>
                            <option value="07">Julho</option>
                            <option value="08">Agosto</option>
                            <option value="09">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                        </select>

                        <select class="amlista">
                            <option>Ano</option>
                            <option value="21">2021</option>
                            <option value="22">2022</option>
                            <option value="23">2023</option>
                            <option value="24">2024</option>
                            <option value="25">2025</option>
                            <option value="26">2026</option>
                            <option value="27">2027</option>
                            <option value="28">2028</option>
                            <option value="29">2029</option>
                            <option value="30">2030</option>

                        </select>
                    </section>

                    <label for="cvv" class="text-pag">Código de Segurança</label>
                    <input type="number" id="numcartao" class="input-padrao" required/>

                    <label for="estado" class="text-pag">Parcelas</label>
                    <select name="estados-brasil" class="lista">
                                <option value="1">1 mês - R$ 00,00</option>
                                <option value="2">2 meses - R$ 00,00</option>
                                <option value="3">3 meses - R$ 00,00</option>
                                <option value="4">4 meses - R$ 00,00</option>
                                <option value="5">5 meses - R$ 00,00</option>
                                <option value="6">6 meses - R$ 00,00</option>
                        </select>
                    <Link to="/login"><input type="submit" value="Cadastrar" class="botao-ok"/></Link>
                </div>
        </Card>
    )
}

export default Pagamento;