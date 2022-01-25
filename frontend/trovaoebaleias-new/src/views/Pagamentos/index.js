import React, { Component } from "react";
import{Link} from 'react-router-dom';

import Logo from "../../img/logo-ltb.svg";
import Fonte from '../../assets/Fonte.css';
import Reset from '../../assets/Reset.css';
import Cabecalho from "../../components/Cabecalho.css";
import Rodape from "../../components/Rodape.css";
import Login from "../../components/Login.css";
import Base from "../../components/Base.css";
import Menu from "../../img/menu.svg";
import Perfil from "../../img/perfil-foto.svg";
import Facebook from "../../img/facebook.svg";
import Instagram from "../../img/instagram.svg";
import Twitter from "../../img/twitter.svg";
import Profile from "../../img/pro.svg";


export default function Pagamentos(){
    return(
    <section>
<header className="cabecalho">
          <button
            className="cabecalho__menu"
            aria-label="Menu"
            className="botao-logo"
            
          >
            <i>
              <img src={Menu} className="icones" />
            </i>
          </button>
          <img src={Logo} />
          <button aria-label="Notificação" className="botao-logo">
            <i>
              <Link to='/loginn'>
                <img src={Perfil} className="icones" />
                </Link>
            </i>
          </button>
        </header>
        <nav className="menu-lateral">
            <a href="cadastro.html" className="menu-lateral__link menu-lateral__link--inicio menu-lateral__link--ativo"><img src={Profile} className="icon"/>Cadastre-se</a>
        </nav>

        <main>
            <section>
                

            <fieldset class="formapag">           
                <label for="radio-email"> <input type="radio" name=contato value="email" id="radio-email">Cartão de débito</label>
                <ul>
                    <li><img src="icons/cardcredit.svg" class="imgsvg"/></li>
                    <li><img src="icons/cardcredit.svg" class="imgsvg"/></li>
                    <li><img src="icons/cardcredit.svg" class="imgsvg"/></li>
                    <li><img src="icons/cardcredit.svg" class="imgsvg"/></li>
                    <li><img src="icons/cardcredit.svg" class="imgsvg"/></li>
                </ul>
            </fieldset>    
            <fieldset class="formapag">            
                <label for="radio-email"> <input type="radio" name=contato value="email" id="radio-email">Cartão de crédito</label>
                <ul>
                    <li><img src="icons/carddebit.svg" class="imgsvg"/></li>
                    <li><img src="icons/carddebit.svg" class="imgsvg"/></li>
                    <li><img src="icons/carddebit.svg" class="imgsvg"/></li>
                    <li><img src="icons/carddebit.svg" class="imgsvg"/></li>
                    <li><img src="icons/carddebit.svg" class="imgsvg"/></li>
                </ul>
            </fieldset>                  
            <fieldset class="formapag">          
                <label for="radio-email"> <input type="radio" name=contato value="email" id="radio-email">Boleto
                
                </label>
                <ul>
                    <li><img src="icons/boleto.svg" class="imgsvg"/></li>
                    <li><img src="icons/boleto.svg" class="imgsvg"/></li>
                </ul>
            </fieldset>
            <section>
                <label for="numerocartao" class="text-pag">Número do Cartão</label>
                <input type="number" id="numcartao" class="input-padrao" required>

                <label for="nomecartao" class="text-pag">Nome impresso no cartão</label>
                <input type="text" id="nomecartao" class="input-padrao" required>

                <label for="estado" class="text-pag">Validade</label></br>
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
            
            </br>
                <label for="codigo-seg" class="text-pag">Código de Segurança</label>
                <input type="number" id="codigo-seg" class="input-padrao" required>

                <label for="estado" class="text-pag">Parcelas</label></br>
                    <select name="estados-brasil" class="lista">
                        <option value="1">1 mês - R$ 00,00</option>
                        <option value="2">2 meses - R$ 00,00</option>
                        <option value="3">3 meses - R$ 00,00</option>
                        <option value="4">4 meses - R$ 00,00</option>
                        <option value="5">5 meses - R$ 00,00</option>
                        <option value="6">6 meses - R$ 00,00</option>
                </select>
            </section>

            <a href="loginhome.html"><input type="submit" value="Cadastrar" class="botao-ok"></a>
</main>
<footer className="rodape">
        <ul className="rodape__social">
        <li><a href="https://web.facebook.com/?_rdc=1&_rdr" className="rodape__midia"><img src={Facebook} alt="Ícone do Facebook" className="redes-svg" /></a></li>
        <li><a href="https://www.instagram.com/" className="rodape__midia"><img src={Instagram} alt="Ícone do Instagram" className="redes-svg" /></a></li>
        <li><a href="https://twitter.com/" className="rodape__midia"><img src={Twitter} alt="Ícone do Twitter" className="redes-svg" /></a></li>
        </ul>
            <p className="copy">Copyright &copy; 2021 Livraria Trovão e Baleias Todos os direitos
              reservados</p>
        </footer>
    </section>
    )
}