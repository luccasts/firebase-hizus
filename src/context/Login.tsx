import {createContext, useState } from "react";

export const LoginContext = createContext(null)
LoginContext.displayName = "Login"

const LoginProvider = ({children}) => {
    const [login , setLogin] = useState(null)
    return (
        <LoginContext.Provider  value={{login , setLogin}}>
                    {children}
        </LoginContext.Provider>
      
    )
}

export default LoginProvider;