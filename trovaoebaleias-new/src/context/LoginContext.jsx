import React, { createContext, useState } from "react";

const LoginContext = createContext(null)

const LoginProvider = ({ children }) => {
    const initialUser = { 
        id: 100,
        name: "admin",
        password: "123456",
    }
    const [isLogged, setIsLogged] = useState(false)
    const [users, setUsers] = useState([initialUser])

    const setUser = (user) => {
        const newUserList = [...users, user]
        setUsers(newUserList)
    }

    return (
        <LoginContext.Provider
            value={{
                isLogged, 
                setIsLogged,
                users,
                setUser,
                setUsers,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }