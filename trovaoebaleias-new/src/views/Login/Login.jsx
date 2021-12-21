import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.scss"

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const handleuserNameChange = (e) => setUserName(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleSubmit = () => {
        console.log('data', userName, password)
    }

    return ( 
        <section className={styles.login}>
            <form className={styles.base} onSubmit={handleSubmit}>
                <p className={styles.titulo}>Login</p>
                <input
                    type="text"
                    placeholder="Username"
                    id="login"
                    className={styles["input-padrao"]}
                    value={userName}
                    onChange={handleuserNameChange}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    id="login"
                    className={styles["input-padrao"]}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <input type="submit" className={styles["botao-ok"]} value="Entrar" />
            </form>
        </section>      
     );
}

            {/* <button className={styles["botao-ok"]}>
                <Link to="/homeafter">Entrar</Link>
            </button> */}

export default Login;