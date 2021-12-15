import React from "react";

import styles from "./Login.module.scss"

const Login = () => {
    return ( 
        <div className={styles.login} >
            <section>
            <form className="base">
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

            
            </section>

            <button className={styles["botao-ok"]}>
            <a href="loginhome.html">Entrar</a>
            </button>
            
        </div>
     );
}

export default Login;