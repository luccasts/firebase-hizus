import {createContext, useState } from "react";

export const FormContext = createContext(null)
FormContext.displayName = "Form"

const FormProvider = ({children}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <FormContext.Provider  value={{email , setEmail, password, setPassword}}>
                    {children}
        </FormContext.Provider>
      
    )
}

export default FormProvider;