
import Facebook from "img/facebook.svg";
import Instagram from "img/instagram.svg";
import Twitter from "img/twitter.svg";
import Fonte from "../../../../assets/Fonte.css";
import Reset from "../../../../assets/Reset.css";

import styles from './Rodape.module.scss';

const Footer = () => {
    return ( 
        <footer className={styles.rodape}>
            <ul className={styles["rodape__social"]}>
            <li>
                <a 
                    href="https://web.facebook.com/?_rdc=1&_rdr"
                    className={styles["rodape__midia"]}
                >
                <img src={Facebook} alt="Ícone do Facebook" className={styles["redes-svg"]} />
                </a>
            </li>
            <li>
                <a 
                    href="https://www.instagram.com/" 
                    className={styles["rodape__midia"]}
                >
                    <img src={Instagram} alt="Ícone do Instagram" className={styles["redes-svg"]} />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/" className={styles["rodape__midia"]}>
                    <img src={Twitter} alt="Ícone do Twitter" className={styles["redes-svg"]} />
                </a>
            </li>
            </ul>
                <p className={styles.copy}>
                    Copyright &copy; 2021 Livraria Trovão e Baleias Todos os direitos reservados
                </p>
        </footer>
     );
}
 
export default Footer;