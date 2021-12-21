import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom'

import { useLogin } from "hooks";

import styles from "./Login.module.scss"

const LOGIN_TESTE = {
    userName: "admin",
    password: "123456"
}

const Login = () => {
    const [redirect, setRedirect] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { setIsLogged } = useLogin()

    const handleuserNameChange = (e) => setUserName(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmit = () => {
        const successfullLogin = 
            userName === LOGIN_TESTE.userName && 
            password === LOGIN_TESTE.password

        if (successfullLogin) {
            setIsLogged(true)
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Redirect push to="/home" />
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

export default Login;