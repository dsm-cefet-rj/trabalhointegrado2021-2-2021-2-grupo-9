import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom'

import { LoginContext } from "context";

import styles from "./Login.module.scss"

const Login = () => {
    const { setIsLogged, users } = useContext(LoginContext) || []
    const [redirect, setRedirect] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleuserNameChange = (e) => setUserName(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const successfullLogin = users.some(
            user => user.name ===userName && user.password === password
        )

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