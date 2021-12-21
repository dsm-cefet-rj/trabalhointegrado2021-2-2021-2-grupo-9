import React, { createContext, useState } from "react";

const LoginContext = createContext(null)

const LoginProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)

    return (
        <LoginContext.Provider
            value={{
                isLogged, 
                setIsLogged,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }