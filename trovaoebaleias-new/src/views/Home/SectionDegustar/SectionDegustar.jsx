import { Banner, Slider } from "components";

import Baleia from "img/baleia_e_trovoes.svg";
import Baleias from "img/baleias_e_trovoes.svg";
import Verificado from "img/verificado.svg";

import styles from './SectionDegustar.module.scss'

const SectionDegustar = () => {
    return (
        <section className={styles["section-degustar"]}>
            <Slider>
                <Banner 
                    imgSrc={Baleia}
                    title="Experimente por 7 dias" 
                    buttonTitle="EXPERIMENTAR AGORA"
                    buttonLink="/cadastro"
                >
                    <ul className={styles["section-itens"]}>
                        <li className={styles["section-itens-paragrafo"]}>
                            <img src={Verificado} className={styles["section-itens-img"]} />
                            Acesso ilimitado a toda plataforma
                        </li>
                        <li className={styles["section-itens-paragrafo"]}>
                            <img src={Verificado} className={styles["section-itens-img"]} />
                            Mais de mil títulos, inúmeros gêneros
                        </li>
                    </ul>
                </Banner>
                <Banner 
                    imgSrc={Baleias}
                    title="Experimente por 7 dias" 
                    buttonTitle="EXPERIMENTAR AGORA"
                    buttonLink="/cadastro"
                >
                    <ul className={styles["section-itens"]}>
                        <li className={styles["section-itens-paragrafo"]}>
                            <img src={Verificado} className={styles["section-itens-img"]} />
                            Acesso ilimitado a toda plataforma
                        </li>
                        <li className={styles["section-itens-paragrafo"]}>
                            <img src={Verificado} className={styles["section-itens-img"]} />
                            Mais de mil títulos, inúmeros gêneros
                        </li>
                    </ul>
                </Banner>
            </Slider>
        </section>
    );
}
 
export default SectionDegustar;