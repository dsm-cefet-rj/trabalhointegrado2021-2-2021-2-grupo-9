import { useState } from "react";

const useLogin = () => {
    const [isLogged, setIsLogged] = useState(false)

    return {
        isLogged, 
        setIsLogged,
    }
}
 
export { useLogin };