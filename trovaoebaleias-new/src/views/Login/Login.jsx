import React from "react";

import styles from "./Login.module.scss"

const Login = () => {
    return ( 
        <div className={styles.login} >
            <form>
                <p className={styles.titulo}>Login</p>
                <input
                    type="text"
                    placeholder="Username"
                    id="login"
                    className={styles["input-padrao"]}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    id="login"
                    className={styles["input-padrao"]}
                />
            </form>

            <button className={styles["botao-ok"]}>
            <a href="loginhome.html">Confirmar</a>
            </button>
        </div>
     );
}

export default Login;