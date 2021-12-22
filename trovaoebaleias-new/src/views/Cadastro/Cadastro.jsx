import React, { useContext, useEffect, useState } from "react";
import { Redirect } from 'react-router-dom'

import { Card } from 'components'

import { LoginContext } from "context";

import {
    ACCOUNT_FIELDS, 
    ADRESS_FIELDS,
    BOOK_GENRES, 
    ESTADOS,  
} from "../../constants";

import style from "./Cadastro.module.scss"

const Cadastro = () => {
    const { setUser } = useContext(LoginContext) || []
    const [redirect, setRedirect] = useState(false)
    const [passwordPassed, setPasswordPassed] = useState(false)
    const [userData, setUserData] = useState(null)
    const [userDataValid, setUserDataValid] = useState(null)

    const handleUserInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setUserData(prevData => ({...prevData, [name]: value }))
    }

    useEffect(() => {
        if (!userData?.password) {
            return
        }

        const hasPasswordPassed = userData?.repeat === userData?.password
        if (hasPasswordPassed) {
            setPasswordPassed(true)
        }
    }, [userData?.password])

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (passwordPassed) {
            const newUser = {
                id: 101,
                name: userData?.name,
                password: userData?.password,
            }
            console.log('newUser', newUser)

            setUser(newUser)
            setRedirect(true)
        }
    }

    const validateField = (fieldName, value) => {
        let fieldValidationErrors =  userDataValid.formErrors;
        let emailValid = userDataValid.emailValid;
        let passwordValid = userDataValid.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
    }

    if (redirect) {
        return <Redirect push to="/pagamento" />
    }

    return (
        <Card> 
            <div className={style["cadastro"]}>
                <h1 className={style["titulo-dados"]}>Dados cadastrais</h1>

                <form className={style["cadastro-form"]} onSubmit={handleSubmit}>
                    <section className={style["cadastro-section"]}>
                            { ACCOUNT_FIELDS.map((field) =>
                                <> 
                                    <label htmlFor={field.name}>{field.label}</label> 
                                    <input 
                                        type={field.type}
                                        id={field.name}
                                        value={userData?.[field.name]} 
                                        className={style["input-padrao"]}
                                        placeholder={field.placeholder} 
                                        onChange={handleUserInput} 
                                    />
                                </>
                            )}

                            <h1 className={style["titulo-dados"]}>Endereço</h1>

                            { ADRESS_FIELDS.map((field) => (
                                <>
                                    <label htmlFor={field.name}>{field.label}</label> 
                                    <input 
                                        type={field.type}
                                        id={field.name}
                                        value={userData?.[field.name]} 
                                        className={style["input-padrao"]}
                                        placeholder={field.placeholder} 
                                        onChange={handleUserInput}
                                    /> 
                                </>
                            ))}
                    </section>
                        
                    <section className={style["cadastro-sele"]}>
                    <label htmlFor="estado">Estado</label><br></br>
                        <select name="estados-brasil" className="lista">
                        { ESTADOS.map( ({ sigla, nome }) => 
                            <option key={sigla} value={sigla}>{nome}</option>
                        )}
                    </select>
                    </section>
                        
                    <h1 className={style["titulo-dados"]}>Gêneros favoritos</h1>
                    <section className={style["listaa"]}>
                        { BOOK_GENRES.map((genre) =>
                            <label className={style["checkbox-generos"]}><input type="checkbox"/>{genre}</label>
                        )}
                    </section>

                    <section className={style["lista-check"]}>
                        <label className={style["checkbox"]}><input type="checkbox"/>Li e aceito os termos</label>
                        <label className={style["checkbox"]}><input type="checkbox"/>Gostaria de receber nossas novidades por e-mail?</label>
                    </section>

                    <input 
                        type="submit" 
                        className={style["botao-ok"]} 
                        value="Confirmar"
                        disabled={redirect} 
                    />
                </form> 
            </div>
        </Card>
    );
}

export default Cadastro;