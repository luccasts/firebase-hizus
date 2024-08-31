import {createContext, useState } from "react";

export const FormContext = createContext(null as any)
FormContext.displayName = "Form"

const FormProvider = ({children}:any) => {
    const [email, setEmail]:any = useState()
    const [password, setPassword]:any = useState()

    return (
        <FormContext.Provider  value={{email , setEmail, password, setPassword}}>
                    {children}
        </FormContext.Provider>
      
    )
}

export default FormProvider;